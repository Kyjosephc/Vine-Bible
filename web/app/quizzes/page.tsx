'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { QUIZ_BANK } from '@/content/quizzes';
import { useT } from '@/lib/i18n';
import type { QuizQuestion } from '@/lib/types';
import { QuizRunner } from '@/components/QuizRunner';
import { Badge, Card, EmptyState, SectionTitle, Spinner } from '@/components/ui';
import { createClient } from '@/lib/supabase/client';

interface QuizSet {
  tag: string;
  label?: string;
  questions: QuizQuestion[];
}

function normalizeBank(): QuizSet[] {
  try {
    const raw = QUIZ_BANK as unknown;
    if (Array.isArray(raw)) return raw as QuizSet[];
    if (raw && typeof raw === 'object') {
      return Object.entries(raw as Record<string, QuizQuestion[]>).map(([tag, questions]) => ({
        tag,
        questions,
      }));
    }
    return [];
  } catch {
    return [];
  }
}

interface AttemptLike {
  quiz_tag: string;
  score: number;
  total: number;
}

function QuizzesClient() {
  const { t } = useT();
  const params = useSearchParams();
  const sets = useMemo(() => normalizeBank(), []);
  const [activeTag, setActiveTag] = useState<string | null>(params.get('tag'));
  const [attempts, setAttempts] = useState<AttemptLike[]>([]);
  const [runKey, setRunKey] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const supabase = createClient();
        const { data } = await supabase.auth.getUser();
        if (!data.user) return;
        const { data: rows } = await supabase
          .from('quiz_attempts')
          .select('quiz_tag,score,total')
          .eq('user_id', data.user.id)
          .order('created_at', { ascending: false })
          .limit(200);
        setAttempts(((rows ?? []) as AttemptLike[]) ?? []);
      } catch {
        // logged out or offline
      }
    })();
  }, [runKey]);

  const active = sets.find((s) => s.tag === activeTag) ?? null;

  const weak = useMemo(() => {
    const byTag = new Map<string, { score: number; total: number }>();
    for (const a of attempts) {
      const cur = byTag.get(a.quiz_tag) ?? { score: 0, total: 0 };
      cur.score += a.score;
      cur.total += a.total;
      byTag.set(a.quiz_tag, cur);
    }
    return [...byTag.entries()]
      .map(([tag, v]) => ({ tag, pct: v.total > 0 ? Math.round((v.score / v.total) * 100) : 0 }))
      .filter((v) => v.pct < 70)
      .sort((a, b) => a.pct - b.pct);
  }, [attempts]);

  const handleComplete = async (score: number, total: number) => {
    if (!active) return;
    try {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      if (!data.user) return;
      await supabase.from('quiz_attempts').insert({
        user_id: data.user.id,
        quiz_tag: active.tag,
        score,
        total,
      });
      setRunKey((k) => k + 1);
    } catch {
      // offline — score screen already shown
    }
  };

  if (active) {
    return (
      <div className="mx-auto max-w-2xl space-y-4">
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          className="text-sm text-gold hover:underline"
        >
          ← {t('quizzes_title')}
        </button>
        <QuizRunner
          key={`${active.tag}-${runKey}`}
          questions={active.questions}
          tag={active.label ?? active.tag}
          onComplete={handleComplete}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="font-display text-3xl font-semibold text-ink dark:text-parchment">
        {t('quizzes_title')}
      </h1>

      {weak.length > 0 && (
        <section>
          <SectionTitle title={t('weak_area')} />
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {weak.map((w) => (
              <Card key={w.tag} className="border-gold/30">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {t('your_score')}: <span className="font-bold text-gold">{w.pct}%</span>{' '}
                  {t('quiz')} · {w.tag}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {t('review_answers')}
                </p>
                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTag(w.tag)}
                    className="rounded-xl bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-110"
                  >
                    {t('try_again')}
                  </button>
                  <Link
                    href="/learn"
                    className="rounded-xl border border-gold/60 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-gold/10 dark:text-gold"
                  >
                    {t('lessons')}
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section>
        <SectionTitle title={t('pick_topic')} />
        {sets.length === 0 ? (
          <div className="mt-3">
            <EmptyState title={t('quizzes_title')} description={t('no_results')} />
          </div>
        ) : (
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {sets.map((s) => (
              <button key={s.tag} type="button" onClick={() => setActiveTag(s.tag)} className="text-left">
                <Card className="h-full transition hover:border-gold/50">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-lg font-semibold text-ink dark:text-parchment">
                      {s.label ?? s.tag}
                    </h2>
                    <Badge>
                      {s.questions.length} {t('quiz').toLowerCase()}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-gold">{t('take_quiz')} →</p>
                </Card>
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default function QuizzesPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <QuizzesClient />
    </Suspense>
  );
}
