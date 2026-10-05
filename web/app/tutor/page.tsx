'use client';

import { useState } from 'react';
import { useT } from '@/lib/i18n';
import { Button, Card, SectionTitle, Spinner } from '@/components/ui';

function useTr() {
  const { t } = useT();
  // i18n keys are plain English sentences: t() returns the key itself when
  // untranslated, so the UI degrades gracefully to English.
  return (key: string, fallback?: string): string => t(key, fallback);
}

interface TutorOk {
  answer: string;
  model: string;
}

export default function TutorPage() {
  const tr = useTr();
  const [reference, setReference] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TutorOk | null>(null);
  const [notConfigured, setNotConfigured] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function ask() {
    if (!reference.trim() || !question.trim() || loading) return;
    setLoading(true);
    setError(null);
    setNotConfigured(false);
    setResult(null);
    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference: reference.trim(), question: question.trim() }),
      });
      if (res.status === 501) {
        setNotConfigured(true);
        return;
      }
      if (!res.ok) throw new Error(`tutor failed: ${res.status}`);
      const data = (await res.json()) as { answer?: unknown; model?: unknown };
      if (typeof data.answer !== 'string' || !data.answer.trim()) {
        throw new Error('empty answer');
      }
      setResult({
        answer: data.answer,
        model: typeof data.model === 'string' ? data.model : 'unknown',
      });
    } catch {
      setError(tr('Something went wrong. Please try again in a moment.'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <SectionTitle>{tr('Bible Tutor')}</SectionTitle>
      <p className="mt-2 text-sm text-slate-400">
        {tr('Ask a question about a verse or passage. Answers come only from Scripture, with cross-references.')}
      </p>

      <Card className="mt-4 p-4">
        <label className="block text-sm font-medium text-slate-200">
          {tr('Verse or passage')}
          <input
            className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-500"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            placeholder={tr('e.g. Romans 8:28')}
          />
        </label>
        <label className="mt-3 block text-sm font-medium text-slate-200">
          {tr('Your question')}
          <textarea
            className="mt-1 min-h-24 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-500"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={tr('What does this verse mean for…?')}
          />
        </label>
        <div className="mt-3">
          <Button onClick={ask} disabled={loading || !reference.trim() || !question.trim()}>
            {loading ? tr('Thinking…') : tr('Ask the tutor')}
          </Button>
        </div>
      </Card>

      {loading && (
        <div className="mt-6">
          <Spinner />
        </div>
      )}

      {notConfigured && (
        <Card className="mt-6 border-[#C9A227]/40 p-5">
          <h2 className="font-display text-lg text-[#C9A227]">
            {tr('The AI tutor is not set up yet')}
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            {tr(
              'tutor.notConfiguredHint',
              'This deployment has no language-model key configured. The person hosting Lumen Bible needs to set the LLM_API_KEY environment variable (see the README) before the tutor can answer questions.',
            )}
          </p>
        </Card>
      )}

      {error && <p className="mt-6 rounded-xl bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}

      {result && (
        <Card className="mt-6 p-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            {tr('Answer')} · {reference}
          </p>
          <div className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-slate-200">
            {result.answer}
          </div>
          <p className="mt-4 text-xs text-slate-500">
            {tr('Model')}: {result.model}
          </p>
        </Card>
      )}
    </main>
  );
}
