'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/i18n';
import { gradeReview, isDue } from '@/lib/srs';
import type { ReviewItem } from '@/lib/srs';
import { createClient } from '@/lib/supabase/client';
import { Button, Card, EmptyState, SectionTitle, Spinner } from '@/components/ui';

interface RowLike {
  concept: string;
  next_review: string;
  interval_days: number;
  reps: number;
}

function toItem(r: RowLike): ReviewItem {
  return {
    concept: r.concept,
    nextReview: r.next_review,
    intervalDays: r.interval_days,
    reps: r.reps,
  };
}

export default function ReviewPage() {
  const { t } = useT();
  const [items, setItems] = useState<ReviewItem[] | null>(null);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const supabase = createClient();
        const { data } = await supabase.auth.getUser();
        if (!data.user) {
          setLoggedIn(false);
          setItems([]);
          return;
        }
        const { data: rows } = await supabase
          .from('review_items')
          .select('concept,next_review,interval_days,reps')
          .eq('user_id', data.user.id)
          .order('next_review', { ascending: true });
        setItems((((rows ?? []) as RowLike[]) ?? []).map(toItem));
      } catch {
        setItems([]);
      }
    })();
  }, []);

  const grade = async (concept: string, quality: 0 | 1 | 2) => {
    setItems((prev) => {
      if (!prev) return prev;
      const cur = prev.find((i) => i.concept === concept);
      if (!cur) return prev;
      const next = gradeReview(cur, quality);
      persist(concept, next);
      return prev.map((i) => (i.concept === concept ? next : i));
    });
    setRevealed((prev) => {
      const nextSet = new Set(prev);
      nextSet.delete(concept);
      return nextSet;
    });
  };

  const persist = async (concept: string, item: ReviewItem) => {
    try {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      if (!data.user) return;
      await supabase
        .from('review_items')
        .update({
          next_review: item.nextReview,
          interval_days: item.intervalDays,
          reps: item.reps,
        })
        .eq('user_id', data.user.id)
        .eq('concept', concept);
    } catch {
      // offline — local state already updated
    }
  };

  if (items === null) return <Spinner />;

  if (!loggedIn) {
    return (
      <div className="mx-auto max-w-xl">
        <EmptyState
          title={t('review_title')}
          description={t('login_required')}
          action={
            <Link href="/login">
              <Button>{t('login')}</Button>
            </Link>
          }
        />
      </div>
    );
  }

  const due = items.filter(isDue);
  const upcoming = items.filter((i) => !isDue(i));

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="font-display text-3xl font-semibold text-ink dark:text-parchment">
        {t('review_title')}
      </h1>

      <section>
        <SectionTitle
          title={t('due_now')}
          action={<span className="text-sm text-slate-500 dark:text-slate-400">{due.length}</span>}
        />
        {due.length === 0 ? (
          <div className="mt-3">
            <EmptyState title={t('all_caught_up')} />
          </div>
        ) : (
          <div className="mt-3 space-y-3">
            {due.map((item) => {
              const open = revealed.has(item.concept);
              return (
                <Card key={item.concept}>
                  <button
                    type="button"
                    onClick={() =>
                      setRevealed((prev) => {
                        const nextSet = new Set(prev);
                        if (nextSet.has(item.concept)) nextSet.delete(item.concept);
                        else nextSet.add(item.concept);
                        return nextSet;
                      })
                    }
                    className="w-full text-left"
                  >
                    <p className="font-display text-lg font-semibold text-ink dark:text-parchment">
                      {item.concept}
                    </p>
                    {!open ? (
                      <p className="mt-1 text-sm text-gold">{t('tap_to_reveal')} ▸</p>
                    ) : (
                      <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        <p>
                          {t('next_review')}: {new Date(item.nextReview).toLocaleDateString()}
                        </p>
                        <p>
                          {t('progress')}: {item.reps} {t('review_title').toLowerCase()}
                        </p>
                      </div>
                    )}
                  </button>
                  {open && (
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <Button variant="ghost" onClick={() => grade(item.concept, 0)}>
                        {t('forgot')}
                      </Button>
                      <Button variant="gold" onClick={() => grade(item.concept, 1)}>
                        {t('hard')}
                      </Button>
                      <Button onClick={() => grade(item.concept, 2)}>{t('easy')}</Button>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        )}
      </section>

      {upcoming.length > 0 && (
        <section>
          <SectionTitle title={t('next_review')} />
          <div className="mt-3 space-y-2">
            {upcoming.slice(0, 5).map((item) => (
              <Card key={item.concept} className="flex items-center justify-between py-3">
                <span className="text-sm font-medium text-ink dark:text-parchment">
                  {item.concept}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {new Date(item.nextReview).toLocaleDateString()}
                </span>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
