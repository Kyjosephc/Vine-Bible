import { NextRequest } from 'next/server';

interface ChatMessage {
  role: 'system' | 'user';
  content: string;
}

interface ChatCompletionResponse {
  choices?: { message?: { content?: unknown } }[];
  error?: { message?: unknown };
}

const SYSTEM_PROMPT =
  'You are a careful Bible tutor. Answer ONLY from Scripture: ground every claim in the biblical text, ' +
  'cite references for what you say, include 2-4 cross-references, and end with one reflection question. ' +
  'If you are unsure about something, say so plainly rather than guessing.';

/**
 * POST /api/tutor { reference: string, question: string }
 *
 * Returns 501 with AI_TUTOR_NOT_CONFIGURED when no LLM_API_KEY is set.
 */
export async function POST(req: NextRequest) {
  const apiKey = process.env.LLM_API_KEY;
  if (!apiKey) {
    return Response.json(
      {
        error: 'AI_TUTOR_NOT_CONFIGURED',
        message: 'The deployer has not configured an LLM key. See README.',
      },
      { status: 501 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'BAD_REQUEST', message: 'Request body must be JSON.' }, { status: 400 });
  }

  const payload = body as { reference?: unknown; question?: unknown };
  const reference = typeof payload.reference === 'string' ? payload.reference.trim() : '';
  const question = typeof payload.question === 'string' ? payload.question.trim() : '';
  if (!reference || !question) {
    return Response.json(
      { error: 'BAD_REQUEST', message: 'Both "reference" and "question" are required.' },
      { status: 400 },
    );
  }

  const base = process.env.LLM_API_BASE || 'https://api.openai.com/v1';
  const model = process.env.LLM_MODEL || 'gpt-4o-mini';

  const messages: ChatMessage[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    { role: 'user', content: `Verse: ${reference}\nQuestion: ${question}` },
  ];

  try {
    const res = await fetch(`${base.replace(/\/$/, '')}/chat/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ model, messages, temperature: 0.3 }),
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
        { error: 'TUTOR_UPSTREAM_ERROR', message: detail || `Upstream model request failed (${res.status}).` },
        { status: 502 },
      );
    }

    const data = (await res.json()) as ChatCompletionResponse;
    const answer = data.choices?.[0]?.message?.content;
    if (typeof answer !== 'string' || !answer.trim()) {
      return Response.json(
        { error: 'TUTOR_EMPTY_RESPONSE', message: 'The model returned an empty answer.' },
        { status: 502 },
      );
    }

    return Response.json({ answer: answer.trim(), model });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: 'TUTOR_FAILED', message }, { status: 500 });
  }
}
