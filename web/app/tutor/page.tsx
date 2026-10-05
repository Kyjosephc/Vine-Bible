'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useT } from '@/lib/i18n';
import { Button, Card, SectionTitle, Spinner } from '@/components/ui';

function useTr() {
  const { t } = useT();
  // i18n keys are plain English sentences: t() returns the key itself when
  // untranslated, so the UI degrades gracefully to English.
  return (key: string, fallback?: string): string => t(key, fallback);
}

interface TutorSource {
  title: string;
  ref?: string;
  url?: string;
}

interface TutorMessage {
  role: 'user' | 'assistant';
  text: string;
  sources?: TutorSource[];
  followups?: string[];
}

interface TutorApiOk {
  answer: string;
  sources: TutorSource[];
  followups: string[];
}

/* ------------------------------------------------------------------ */
/* Tiny safe markdown-ish renderer: bold, headings, lists, verse refs.  */
/* ------------------------------------------------------------------ */

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const VERSE_RE = /\b((?:[123]\s)?[A-Z][a-z]{2,}(?:\s[a-z]+)?\s\d+(?::\d+(?:-\d+)?)?)/g;

function inlineMd(s: string): string {
  let out = escapeHtml(s);
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-slate-100">$1</strong>');
  out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  out = out.replace(VERSE_RE, '<span class="font-semibold text-[#C9A227]">$1</span>');
  return out;
}

function renderAnswer(md: string): string {
  const lines = md.split('\n');
  const html: string[] = [];
  let listOpen: 'ul' | 'ol' | null = null;

  const closeList = () => {
    if (listOpen) {
      html.push(listOpen === 'ul' ? '</ul>' : '</ol>');
      listOpen = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      closeList();
      continue;
    }
    const h = line.match(/^(#{1,3})\s+(.*)/);
    if (h) {
      closeList();
      const level = h[1].length;
      const cls =
        level === 1 ? 'text-base font-semibold text-[#C9A227] mt-3' : 'text-sm font-semibold text-slate-100 mt-3';
      html.push(`<p class="${cls}">${inlineMd(h[2])}</p>`);
      continue;
    }
    const ul = line.match(/^[-*•]\s+(.*)/);
    if (ul) {
      if (listOpen !== 'ul') {
        closeList();
        html.push('<ul class="my-2 space-y-1.5 pl-5 list-disc marker:text-[#C9A227]/70">');
        listOpen = 'ul';
      }
      html.push(`<li>${inlineMd(ul[1])}</li>`);
      continue;
    }
    const ol = line.match(/^\d+[.)]\s+(.*)/);
    if (ol) {
      if (listOpen !== 'ol') {
        closeList();
        html.push('<ol class="my-2 space-y-1.5 pl-5 list-decimal marker:text-[#C9A227]/70">');
        listOpen = 'ol';
      }
      html.push(`<li>${inlineMd(ol[1])}</li>`);
      continue;
    }
    closeList();
    html.push(`<p class="my-2">${inlineMd(line)}</p>`);
  }
  closeList();
  return html.join('\n');
}

const STARTERS = [
  'What does Romans 8:28 mean?',
  'Who was David, and why does he matter?',
  'What does the Bible say about anxiety?',
  'Explain John 3:16 in simple words',
  'How should I pray?',
  'What is grace?',
];

/* ------------------------------------------------------------------ */

function TutorChat() {
  const tr = useTr();
  const searchParams = useSearchParams();
  const refParam = searchParams.get('ref');

  const [messages, setMessages] = useState<TutorMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const autoSent = useRef(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function ask(text: string) {
    const q = text.trim();
    if (!q || loading) return;
    setLoading(true);
    setError(null);
    const userMsg: TutorMessage = { role: 'user', text: q };
    const convo = [...messages, userMsg];
    setMessages(convo);
    setInput('');
    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q,
          ...(refParam ? { ref: refParam } : {}),
          history: convo.slice(-5).map((m) => ({ role: m.role, content: m.text })),
        }),
      });
      const data = (await res.json()) as Partial<TutorApiOk> & { error?: string; message?: string; model?: string };
      if (res.status === 429) {
        setError(
          typeof data.message === 'string' && data.message
            ? data.message
            : tr('You have asked a lot of questions this hour. Please try again soon.'),
        );
        return;
      }
      if (!res.ok || typeof data.answer !== 'string' || !data.answer.trim()) {
        throw new Error(typeof data.message === 'string' ? data.message : 'bad response');
      }
      if (data.model === 'unconfigured') {
        setNotice(
          tr(
            'The AI tutor is resting — this deployment has no language-model key yet. Study-library sources below still work.',
          ),
        );
      }
      setMessages([
        ...convo,
        {
          role: 'assistant',
          text: data.answer,
          sources: Array.isArray(data.sources) ? data.sources : [],
          followups: Array.isArray(data.followups) ? data.followups : [],
        },
      ]);
    } catch {
      setError(tr('Something went wrong. Please try again in a moment.'));
    } finally {
      setLoading(false);
    }
  }

  // When the reader links "Ask AI" with ?ref=, open the chat already asking about it.
  useEffect(() => {
    if (refParam && !autoSent.current && messages.length === 0) {
      autoSent.current = true;
      void ask(`${tr('Explain')} ${refParam}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refParam]);

  const empty = messages.length === 0;

  return (
    <main className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-2xl flex-col px-4 py-6">
      <SectionTitle>{tr('AI Bible Tutor')}</SectionTitle>
      <p className="mt-2 text-sm text-slate-400">
        {tr('Ask anything about the Bible. Answers are grounded in Scripture and this app’s study library — never invented.')}
      </p>

      {notice && (
        <Card className="mt-4 border-[#C9A227]/40 p-4">
          <p className="text-sm text-slate-300">{notice}</p>
        </Card>
      )}

      {empty && !loading && (
        <div className="mt-6">
          <p className="text-sm font-medium text-slate-300">{tr('Try one of these:')}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {STARTERS.map((s) => (
              <button
                key={s}
                onClick={() => void ask(s)}
                className="rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-3.5 py-2 text-left text-sm text-[#E9D48A] transition hover:bg-[#C9A227]/20"
              >
                {tr(s)}
              </button>
            ))}
          </div>
          {refParam && (
            <p className="mt-4 text-sm text-slate-400">
              {tr('Asking about')}: <span className="font-semibold text-[#C9A227]">{refParam}</span>
            </p>
          )}
        </div>
      )}

      <div className="mt-6 flex flex-1 flex-col gap-4" aria-live="polite">
        {messages.map((m, i) =>
          m.role === 'user' ? (
            <div key={i} className="max-w-[85%] self-end rounded-2xl rounded-br-md bg-[#C9A227]/15 px-4 py-2.5 text-sm text-slate-100">
              {m.text}
            </div>
          ) : (
            <div key={i} className="w-full">
              <Card className="p-5">
                <div
                  className="text-sm leading-relaxed text-slate-200"
                  dangerouslySetInnerHTML={{ __html: renderAnswer(m.text) }}
                />
                {m.sources && m.sources.length > 0 && (
                  <div className="mt-4 border-t border-white/5 pt-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      {tr('From the study library')}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {m.sources.map((s, j) =>
                        s.url ? (
                          <Link
                            key={j}
                            href={s.url}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 transition hover:border-[#C9A227]/50 hover:text-[#E9D48A]"
                          >
                            {s.title}
                            {s.ref ? ` · ${s.ref}` : ''}
                          </Link>
                        ) : (
                          <span
                            key={j}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400"
                          >
                            {s.title}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </Card>
              {m.followups && m.followups.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {m.followups.map((f, j) => (
                    <button
                      key={j}
                      onClick={() => void ask(f)}
                      disabled={loading}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-left text-xs text-slate-300 transition hover:border-[#C9A227]/50 hover:text-[#E9D48A] disabled:opacity-50"
                    >
                      {f}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ),
        )}

        {loading && (
          <div className="flex items-center gap-3">
            <Spinner label={tr('Thinking…')} />
          </div>
        )}

        {error && (
          <div className="rounded-xl bg-red-500/10 p-4">
            <p className="text-sm text-red-300">{error}</p>
            <button
              onClick={() => setError(null)}
              className="mt-2 text-xs font-medium text-red-200 underline underline-offset-2"
            >
              {tr('Dismiss')}
            </button>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <form
        className="sticky bottom-0 mt-6 bg-[#101828]/95 py-3 backdrop-blur"
        onSubmit={(e) => {
          e.preventDefault();
          void ask(input);
        }}
      >
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={refParam ? tr(`Ask about ${refParam}…`) : tr('Ask a Bible question…')}
            className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[#C9A227]/60 focus:outline-none"
            maxLength={1000}
          />
          <Button type="submit" disabled={loading || !input.trim()}>
            {tr('Ask')}
          </Button>
        </div>
      </form>
    </main>
  );
}

export default function TutorPage() {
  return (
    <Suspense>
      <TutorChat />
    </Suspense>
  );
}
