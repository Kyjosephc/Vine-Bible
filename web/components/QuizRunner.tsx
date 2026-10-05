'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { QuizQuestion } from '@/lib/types';
import { quizChoices, quizText } from '@/lib/types';
import { useT } from '@/lib/i18n';
import { Badge, Button, Card, EmptyState, ProgressBar } from './ui';

interface QuizRunnerProps {
  questions: QuizQuestion[];
  tag: string;
  onComplete: (score: number, total: number) => void;
}

type AnswerValue = string | Record<string, string>;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function expectedAnswers(q: QuizQuestion): string[] {
  const raw = q.answer;
  const list = Array.isArray(raw) ? raw : [raw ?? ''];
  const trimmed = list.map((s) => s.trim()).filter((s) => s.length > 0);
  if (trimmed.length > 0) return trimmed;
  if (q.pairs) return [q.pairs.map((p) => `${p.left}=>${p.right}`).join('|')];
  return [];
}

function expectedAnswer(q: QuizQuestion): string {
  return expectedAnswers(q)[0] ?? '';
}

function userAnswerString(q: QuizQuestion, value: AnswerValue | undefined): string {
  if (q.type === 'matching') {
    const sel = (value ?? {}) as Record<string, string>;
    return (q.pairs ?? []).map((p) => `${p.left}=>${sel[p.left] ?? ''}`).join('|');
  }
  return String(value ?? '').trim();
}

function isCorrect(q: QuizQuestion, value: AnswerValue | undefined): boolean {
  const expected = expectedAnswers(q).map((s) => s.toLowerCase());
  const got = userAnswerString(q, value);
  if (got.length === 0 || expected.length === 0) return false;
  return expected.includes(got.toLowerCase());
}

function hasAnswer(q: QuizQuestion, value: AnswerValue | undefined): boolean {
  if (value === undefined) return false;
  if (q.type === 'matching') {
    const sel = value as Record<string, string>;
    return (q.pairs ?? []).every((p) => sel[p.left]);
  }
  return String(value).trim().length > 0;
}

export function QuizRunner({ questions, tag, onComplete }: QuizRunnerProps) {
  const { t } = useT();
  const [index, setIndex] = useState(0);
  const [values, setValues] = useState<Record<string, AnswerValue>>({});
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const completedRef = useRef(false);

  const total = questions.length;
  const q = questions[index];

  const matchPool = useMemo(() => {
    if (!q || q.type !== 'matching') return [];
    const pool = quizChoices(q);
    return shuffle(pool);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q?.id]);

  useEffect(() => {
    if (finished && !completedRef.current) {
      completedRef.current = true;
      onComplete(score, total);
    }
  }, [finished, score, total, onComplete]);

  if (total === 0) {
    return <EmptyState title={t('quiz')} description={t('no_results')} />;
  }
  if (!q) return null;

  const value = values[q.id];

  const setValue = (v: AnswerValue) => {
    if (checked) return;
    setValues((prev) => ({ ...prev, [q.id]: v }));
  };

  const check = () => {
    const ok = isCorrect(q, value);
    setCorrect(ok);
    if (ok) setScore((s) => s + 1);
    setChecked(true);
  };

  const next = () => {
    if (index + 1 >= total) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setChecked(false);
      setCorrect(false);
    }
  };

  const retake = () => {
    setIndex(0);
    setValues({});
    setChecked(false);
    setCorrect(false);
    setScore(0);
    setFinished(false);
    completedRef.current = false;
  };

  if (finished) {
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    return (
      <Card className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">{t('quiz_complete')}</p>
        <p className="font-display mt-2 text-4xl font-semibold text-ink dark:text-parchment">
          {score}/{total}
        </p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          {t('your_score')}: {pct}%
        </p>
        <ProgressBar value={score} max={total} className="mx-auto mt-4 max-w-xs" />
        <div className="mt-6 flex justify-center gap-3">
          <Button variant="ghost" onClick={retake}>
            {t('retake')}
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="mb-4 flex items-center justify-between gap-3">
        <Badge>{tag}</Badge>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {t('question_of').replace('{n}', String(index + 1)).replace('{total}', String(total))}
        </span>
      </div>
      <ProgressBar value={index} max={total} className="mb-5" />

      <p className="font-display text-lg font-medium leading-8 text-ink dark:text-parchment">
        {quizText(q)}
      </p>

      <div className="mt-4">
        {(q.type === 'mc' || q.type === 'tf') && (
          <div className="space-y-2" role="radiogroup">
            {quizChoices(q).map((opt) => {
              const selected = value === opt;
              const isAnswer = opt === expectedAnswer(q);
              let cls =
                'border-ink/15 hover:border-gold/60 dark:border-white/15 dark:hover:border-gold/60';
              if (checked && isAnswer) cls = 'border-gold bg-gold/10';
              else if (checked && selected && !isAnswer) cls = 'border-red-400 bg-red-500/10';
              else if (selected) cls = 'border-gold bg-gold/10';
              return (
                <button
                  key={opt}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  disabled={checked}
                  onClick={() => setValue(opt)}
                  className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${cls}`}
                >
                  <span className="text-ink dark:text-parchment">{opt}</span>
                </button>
              );
            })}
          </div>
        )}

        {q.type === 'fill' && (
          <input
            type="text"
            value={typeof value === 'string' ? value : ''}
            disabled={checked}
            onChange={(e) => setValue(e.target.value)}
            placeholder={t('type_answer')}
            className="w-full rounded-xl border border-ink/15 bg-transparent px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-gold focus:outline-none dark:border-white/15 dark:text-parchment"
          />
        )}

        {q.type === 'matching' && (
          <div className="space-y-2">
            {(q.pairs ?? []).map((pair) => {
              const sel = (value ?? {}) as Record<string, string>;
              return (
                <div
                  key={pair.left}
                  className="flex items-center gap-3 rounded-xl border border-ink/10 px-4 py-2.5 dark:border-white/10"
                >
                  <span className="flex-1 text-sm font-medium text-ink dark:text-parchment">
                    {pair.left}
                  </span>
                  <select
                    value={sel[pair.left] ?? ''}
                    disabled={checked}
                    onChange={(e) =>
                      setValue({ ...(value as Record<string, string>), [pair.left]: e.target.value })
                    }
                    className="max-w-[45%] rounded-lg border border-ink/15 bg-transparent px-2 py-1.5 text-sm text-ink focus:border-gold focus:outline-none dark:border-white/15 dark:bg-ink dark:text-parchment"
                    aria-label={pair.left}
                  >
                    <option value="">{t('select_match')}</option>
                    {matchPool.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {checked && (
        <div
          className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
            correct
              ? 'border-gold/50 bg-gold/10 text-ink dark:text-parchment'
              : 'border-red-400/50 bg-red-500/10 text-ink dark:text-parchment'
          }`}
        >
          <p className="font-semibold">{correct ? t('correct') : t('incorrect')}</p>
          {q.explanation ? <p className="mt-1 opacity-90">{q.explanation}</p> : null}
          {!correct && q.type !== 'matching' && expectedAnswer(q) ? (
            <p className="mt-1 opacity-80">
              {t('correct')}: {expectedAnswer(q)}
            </p>
          ) : null}
        </div>
      )}

      <div className="mt-5 flex justify-end">
        {!checked ? (
          <Button onClick={check} disabled={!hasAnswer(q, value)}>
            {t('check_answer')}
          </Button>
        ) : (
          <Button onClick={next}>{index + 1 >= total ? t('finish') : t('next')}</Button>
        )}
      </div>
    </Card>
  );
}
