// InteractiveQuiz: one unified renderer for every interactive question kind.
// CRITICAL RULE, enforced here: after every answer we show WHY — the
// explanation is always rendered. Correct answers get a warm confirmation;
// wrong answers get gentleness: the right answer plus the explanation,
// never anything punitive.
'use client';

import { useEffect, useRef, useState } from 'react';
import { useT } from '@/lib/i18n';
import { Badge, Button, Card, EmptyState, ProgressBar } from '@/components/ui';
import type { AnswerResult, InteractiveQuestion } from './types';
import {
  CharacterMatch,
  FillBlank,
  Flashcard,
  Matching,
  MemoryChallenge,
  MultipleChoice,
  ReflectionPrompt,
  ScenarioQuestion,
  ScriptureID,
  TimelineOrder,
  TrueFalse,
} from './renderers';

interface InteractiveQuizProps {
  questions: InteractiveQuestion[];
  onComplete: (score: number, total: number) => void;
  /** Small badge shown above the quiz (e.g. the quiz tag). */
  tag?: string;
  /** Compact mode: used for mid-lesson checkpoints — no summary card. */
  compact?: boolean;
}

function Renderer({ q, locked, onSubmit }: { q: InteractiveQuestion; locked: boolean; onSubmit: (r: AnswerResult) => void }) {
  switch (q.kind) {
    case 'mc':
      return <MultipleChoice q={q} locked={locked} onSubmit={onSubmit} />;
    case 'tf':
      return <TrueFalse q={q} locked={locked} onSubmit={onSubmit} />;
    case 'fill':
      return <FillBlank q={q} locked={locked} onSubmit={onSubmit} />;
    case 'matching':
      return <Matching q={q} locked={locked} onSubmit={onSubmit} />;
    case 'scripture-id':
      return <ScriptureID q={q} locked={locked} onSubmit={onSubmit} />;
    case 'timeline-order':
      return <TimelineOrder q={q} locked={locked} onSubmit={onSubmit} />;
    case 'character-match':
      return <CharacterMatch q={q} locked={locked} onSubmit={onSubmit} />;
    case 'scenario':
      return <ScenarioQuestion q={q} locked={locked} onSubmit={onSubmit} />;
    case 'reflection':
      return <ReflectionPrompt q={q} locked={locked} onSubmit={onSubmit} />;
    case 'flashcard':
      return <Flashcard q={q} locked={locked} onSubmit={onSubmit} />;
    case 'memory':
      return <MemoryChallenge q={q} locked={locked} onSubmit={onSubmit} />;
  }
}

export function InteractiveQuiz({ questions, onComplete, tag, compact = false }: InteractiveQuizProps) {
  const { t } = useT();
  const [index, setIndex] = useState(0);
  const [locked, setLocked] = useState(false);
  const [result, setResult] = useState<AnswerResult | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const completedRef = useRef(false);

  const total = questions.length;
  const q = questions[index];

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

  const submit = (r: AnswerResult) => {
    if (r.correct) setScore((s) => s + 1);
    setResult(r);
    setLocked(true);
  };

  const next = () => {
    if (index + 1 >= total) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setLocked(false);
      setResult(null);
    }
  };

  const retake = () => {
    setIndex(0);
    setLocked(false);
    setResult(null);
    setScore(0);
    setFinished(false);
    completedRef.current = false;
  };

  if (finished) {
    if (compact) {
      return (
        <div className="rounded-xl border border-gold/40 bg-gold/[0.07] px-4 py-3 text-sm text-ink dark:text-parchment">
          {score === total
            ? t('Well done — carry that truth with you.')
            : t('Good work thinking it through. The explanation above is worth a second look.')}
        </div>
      );
    }
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
        <p className="mx-auto mt-3 max-w-sm text-sm italic leading-7 text-slate-600 dark:text-slate-400">
          {pct >= 80
            ? t('Strong work. Let these truths shape how you live today.')
            : t('Every question you wrestled with taught you something. Keep going.')}
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

  const isReflection = q.kind === 'reflection';

  return (
    <Card>
      {!compact && (
        <div className="mb-4 flex items-center justify-between gap-3">
          {tag ? <Badge>{tag}</Badge> : <span />}
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {t('question_of').replace('{n}', String(index + 1)).replace('{total}', String(total))}
          </span>
        </div>
      )}
      <ProgressBar value={index} max={total} className="mb-5" />

      {q.kind !== 'scripture-id' && q.kind !== 'flashcard' && q.kind !== 'memory' ? (
        <>
          <p className="font-display text-lg font-medium leading-8 text-ink dark:text-parchment">
            {q.prompt}
          </p>
          <div className="h-4" />
        </>
      ) : null}
      {/* Never show the ref for scripture-id: the ref contains the book name. */}
      {q.ref && q.kind !== 'memory' && q.kind !== 'scripture-id' && (
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">{q.ref}</p>
      )}

      <Renderer q={q} locked={locked} onSubmit={submit} />

      {locked && result && (
        <div
          className={`mt-5 rounded-xl border px-4 py-4 text-sm leading-7 ${
            result.correct
              ? 'border-gold/50 bg-gold/10 text-ink dark:text-parchment'
              : 'border-ink/15 bg-ink/[0.03] text-ink dark:border-white/15 dark:bg-white/[0.04] dark:text-parchment'
          }`}
        >
          <p className="font-semibold">
            {isReflection
              ? t('Saved. Well reflected.')
              : result.correct
                ? t('Correct.')
                : t('Not quite — and that is okay.')}
          </p>
          {!result.correct && !isReflection && result.correctLabel && (
            <p className="mt-1.5">
              <span className="font-medium">{t('The answer is')}:</span>{' '}
              <span className="font-semibold text-gold">{result.correctLabel}</span>
            </p>
          )}
          <p className="mt-1.5 opacity-90">
            <span className="font-medium">{t('Why')}:</span> {q.explanation}
          </p>
        </div>
      )}

      {locked && (
        <div className="mt-5 flex justify-end">
          <Button onClick={next}>{index + 1 >= total ? t('finish') : t('next')}</Button>
        </div>
      )}
    </Card>
  );
}
