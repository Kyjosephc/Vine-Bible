import { NextRequest } from 'next/server';
import { retrieve, parseBibleRef, type RagHit } from '@/lib/rag';

interface ChatCompletionResponse {
  choices?: { message?: { content?: unknown } }[];
  error?: { message?: unknown };
}

export interface TutorSource {
  title: string;
  ref?: string;
  url?: string;
}

export interface TutorResponse {
  answer: string;
  sources: TutorSource[];
  followups: string[];
  model: string;
}

const SYSTEM_PROMPT = [
  'You are Halo, a careful and warm Bible tutor inside a Bible study app.',
  '',
  'STRICT RULES — follow every one:',
  '1. Answer ONLY from the retrieved app content below plus well-established general biblical knowledge.',
  '   NEVER invent, paraphrase-from-memory, or fabricate: Bible verses, verse quotations, scholars,',
  '   theologians, books, sermons, statistics, or historical sources. If a verse is not quoted in the',
  '   context, do not quote it — cite the reference only, or say you cannot verify the wording.',
  '2. When you are unsure about something, say so plainly instead of guessing.',
  '3. Distinguish three levels explicitly: "Scripture says…" (the text is clear),',
  '   "One common interpretation is…" (a widely held reading), and',
  '   "Christians disagree on this…" (a genuinely debated point).',
  '4. On debated theology, present the major Christian traditions (e.g. Catholic, Orthodox,',
  '   Protestant) fairly and respectfully. Never present a debated view as settled fact, and never',
  '   mock or dismiss any sincere Christian position.',
  '5. Encourage the reader to open and read the actual biblical text themselves.',
  '6. Explain simply and plainly, in warm everyday language. Avoid jargon; when you must use a',
  '   theological term, define it in a few words.',
  '',
  'FORMAT:',
  '- Answer in Markdown. Use short paragraphs, bold for key terms, and bullet or numbered lists',
  '  where they help. Keep answers focused: aim for 150–300 words unless the question needs more.',
  '- Do NOT put the follow-up questions in the answer body.',
  '- End your reply with exactly this section, on its own lines, with 3 to 4 questions:',
  '',
  'FOLLOWUPS:',
  '1. <first follow-up question>',
  '2. <second follow-up question>',
  '3. <third follow-up question>',
  '',
  'The follow-ups must be tappable, specific to this answer, and invite going deeper — not generic.',
].join('\n');

function contextBlock(hits: RagHit[]): string {
  return hits
    .map(
      (h, i) =>
        `[${i + 1}] ${h.title}${h.ref ? ` (${h.ref})` : ''}\n${h.text}`,
    )
    .join('\n\n---\n\n');
}

/** Split the model's FOLLOWUPS: section off the answer body. */
function splitFollowups(raw: string): { answer: string; followups: string[] } {
  const idx = raw.search(/^FOLLOWUPS:\s*$/im);
  if (idx < 0) return { answer: raw.trim(), followups: [] };
  const answer = raw.slice(0, idx).trim();
  const rest = raw.slice(idx).replace(/^FOLLOWUPS:\s*/im, '');
  const followups = rest
    .split('\n')
    .map((l) => l.replace(/^\s*\d+[.)]\s*/, '').trim())
    .filter((l) => l.length > 3)
    .slice(0, 4);
  return { answer, followups };
}

function fallbackFollowups(refLabel: string | null): string[] {
  const tail = refLabel ? ` about ${refLabel}` : '';
  return [
    `Can you explain this in simpler words?`,
    `What cross-references connect${tail}?`,
    `How do I apply this in my life?`,
  ];
}

/* ------------------------------------------------------------------ */
/* Simple in-memory per-IP rate limiting (best effort, per instance).   */
/* ------------------------------------------------------------------ */

const RATE_LIMIT = 20; // requests
const RATE_WINDOW_MS = 60 * 60 * 1000; // per hour
const hits = new Map<string, number[]>();

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  const real = req.headers.get('x-real-ip');
  if (real) return real.trim();
  return 'unknown';
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const prev = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (prev.length >= RATE_LIMIT) {
    hits.set(ip, prev);
    return true;
  }
  prev.push(now);
  hits.set(ip, prev);
  return false;
}

/* ------------------------------------------------------------------ */

interface TutorBody {
  question?: unknown;
  ref?: unknown;
  history?: unknown;
}

const MAX_QUESTION = 1000;
const MAX_HISTORY = 6;

/**
 * POST /api/tutor { question: string, ref?: string, history?: [{role, content}] }
 *
 * Returns { answer (markdown), sources: [{title, ref?, url?}], followups, model }.
 * When LLM_API_KEY is unset, returns a graceful 200 with a friendly message.
 */
export async function POST(req: NextRequest) {
  if (rateLimited(clientIp(req))) {
    return Response.json(
      {
        error: 'RATE_LIMITED',
        message: 'You have asked a lot of questions this hour. Take a moment to reflect, then try again soon.',
      },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'BAD_REQUEST', message: 'Request body must be JSON.' }, { status: 400 });
  }

  const payload = body as TutorBody;
  const question = typeof payload.question === 'string' ? payload.question.trim() : '';
  const refHint = typeof payload.ref === 'string' ? payload.ref.trim() : '';

  if (!question || question.length > MAX_QUESTION) {
    return Response.json(
      { error: 'BAD_REQUEST', message: 'A "question" string (max 1000 chars) is required.' },
      { status: 400 },
    );
  }

  // RAG: retrieve trusted content first.
  const top = retrieve(question, 6, refHint ? { refHint } : undefined);
  const ref = parseBibleRef(refHint ? `${question} ${refHint}` : question);
  const refLabel = ref
    ? `${ref.bookName}${ref.chapter !== undefined ? ` ${ref.chapter}` : ''}${ref.verse !== undefined ? `:${ref.verse}` : ''}`
    : refHint || null;

  const sources: TutorSource[] = top.map((h) => ({
    title: h.title,
    ...(h.ref ? { ref: h.ref } : {}),
    ...(h.url ? { url: h.url } : {}),
  }));

  const apiKey = process.env.LLM_API_KEY;
  if (!apiKey) {
    return Response.json(
      {
        answer:
          'The AI tutor is resting right now — the person hosting Halo hasn\'t added a language-model key yet.\n\n' +
          'Meanwhile, here are some faithful ways to keep studying:\n' +
          '- **Read the passage slowly**, twice, and note one thing that stands out.\n' +
          '- **Ask three questions** of the text: What does it say? What did it mean then? What does it mean for me?\n' +
          '- **Explore this app**: the chapter study, the book guide, and the life topics below were written to help with exactly this.\n\n' +
          'If you host Halo yourself, set the `LLM_API_KEY` environment variable (see the README) to wake the tutor up.',
        sources,
        followups: [],
        model: 'unconfigured',
      } satisfies TutorResponse,
      { status: 200 },
    );
  }

  const history = Array.isArray(payload.history)
    ? (payload.history as unknown[])
        .filter(
          (m): m is { role: 'user' | 'assistant'; content: string } =>
            typeof m === 'object' &&
            m !== null &&
            ((m as { role?: unknown }).role === 'user' || (m as { role?: unknown }).role === 'assistant') &&
            typeof (m as { content?: unknown }).content === 'string',
        )
        .slice(-MAX_HISTORY)
    : [];

  const userContent = [
    refLabel ? `Verse/passage in focus: ${refLabel}` : null,
    `Question: ${question}`,
    '',
    'Retrieved context from the Halo study library (use this first):',
    contextBlock(top),
  ]
    .filter((x): x is string => x !== null)
    .join('\n');

  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...history.map((m) => ({ role: m.role, content: m.content.slice(0, 2000) })),
    { role: 'user', content: userContent },
  ];

  const base = process.env.LLM_API_BASE || 'https://api.openai.com/v1';
  const model = process.env.LLM_MODEL || 'gpt-4o-mini';

  try {
    const res = await fetch(`${base.replace(/\/$/, '')}/chat/completions`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, messages, temperature: 0.3, max_tokens: 1200 }),
    });

    if (!res.ok) {
      let detail = '';
      try {
        const errBody = (await res.json()) as ChatCompletionResponse;
        detail = typeof errBody.error?.message === 'string' ? errBody.error.message : '';
      } catch {
        detail = '';
      }
      return Response.json(
        { error: 'TUTOR_UPSTREAM_ERROR', message: detail || `The tutor service failed (${res.status}). Please try again.` },
        { status: 502 },
      );
    }

    const data = (await res.json()) as ChatCompletionResponse;
    const raw = data.choices?.[0]?.message?.content;
    if (typeof raw !== 'string' || !raw.trim()) {
      return Response.json(
        { error: 'TUTOR_EMPTY_RESPONSE', message: 'The tutor returned an empty answer. Please try again.' },
        { status: 502 },
      );
    }

    const { answer, followups } = splitFollowups(raw);
    return Response.json({
      answer,
      sources,
      followups: followups.length >= 2 ? followups : fallbackFollowups(refLabel),
      model,
    } satisfies TutorResponse);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: 'TUTOR_FAILED', message }, { status: 500 });
  }
}
