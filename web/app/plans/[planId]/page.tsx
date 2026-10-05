'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { useT } from '@/lib/i18n';
import { getPlan } from '@/lib/plans';
import { Button, Card, SectionTitle, ProgressBar, Spinner, EmptyState, Badge } from '@/components/ui';

function useTr() {
  const { t } = useT();
  // i18n keys are plain English sentences: t() returns the key itself when
  // untranslated, so the UI degrades gracefully to English.
  return (key: string, fallback?: string): string => t(key, fallback);
}

export default function PlanDetailPage({ params }: { params: { planId: string } }) {
  const tr = useTr();
  const plan = getPlan(params.planId);
  const [userId, setUserId] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);
  const [checkingIn, setCheckingIn] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!plan) return;
    void (async () => {
      try {
        const supabase = createClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setAuthChecked(true);
        if (!user) {
          setUserId(null);
          setLoading(false);
          return;
        }
        setUserId(user.id);
        const { data, error: qErr } = await supabase
          .from('reading_plan_progress')
          .select('day_index')
          .eq('user_id', user.id)
          .eq('plan_id', plan.id);
        if (qErr) throw qErr;
        setCompleted(new Set(((data ?? []) as { day_index: number }[]).map((r) => r.day_index)));
      } catch {
        setError(tr('Could not load your progress. Please try again.'));
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.planId]);

  if (!plan) notFound();

  async function checkIn(day: number) {
    if (!userId || !plan) return;
    setCheckingIn(day);
    setError(null);
    try {
      const supabase = createClient();
      const { error: uErr } = await supabase.from('reading_plan_progress').upsert(
        {
          user_id: userId,
          plan_id: plan.id,
          day_index: day,
          completed_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,plan_id,day_index' },
      );
      if (uErr) throw uErr;
      setCompleted((prev) => new Set(prev).add(day));
    } catch {
      setError(tr('Could not save your check-in. Please try again.'));
    } finally {
      setCheckingIn(null);
    }
  }

  const total = plan.days.length;
  const done = completed.size;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  const firstOpen = plan.days.find((d) => !completed.has(d.day));
  const upcoming = plan.days.filter((d) => !completed.has(d.day)).slice(0, 7);
  const startFrom = firstOpen ? plan.days.findIndex((d) => d.day === firstOpen.day) : total;

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <Link href="/plans" className="text-sm text-[#C9A227]">
        ← {tr('All plans')}
      </Link>
      <div className="mt-2 flex items-start justify-between gap-3">
        <SectionTitle>{plan.title}</SectionTitle>
        <Badge>
          {done}/{total}
        </Badge>
      </div>
      <p className="mt-2 text-sm text-slate-400">{plan.description}</p>

      <div className="mt-4">
        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>{tr('Progress')}</span>
          <span>{pct}%</span>
        </div>
        <ProgressBar value={pct} max={100} className="mt-1" />
      </div>

      {error && <p className="mt-4 rounded-xl bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}

      {loading && (
        <div className="mt-6">
          <Spinner />
        </div>
      )}

      {!loading && authChecked && !userId && (
        <Card className="mt-6 p-5 text-center">
          <p className="text-sm text-slate-300">
            {tr('Log in to check in and save your progress. You can still read the schedule below.')}
          </p>
          <Link href="/login" className="mt-3 inline-block">
            <Button>{tr('Log in')}</Button>
          </Link>
        </Card>
      )}

      {!loading && (
        <div className="mt-6">
          <h2 className="font-display text-xl text-slate-100">
            {done >= total
              ? tr('Plan complete — well done!')
              : tr('Up next')}
          </h2>
          {upcoming.length === 0 ? (
            <div className="mt-3">
              <EmptyState
                title={tr('Finished!')}
                description={tr('You have checked in every day of this plan.')}
              />
            </div>
          ) : (
            <div className="mt-3 space-y-3">
              {upcoming.map((d) => (
                <Card key={d.day} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#C9A227]">
                        {tr('Day')} {d.day}
                        {d.label.startsWith('Day ') ? '' : ` · ${d.label}`}
                      </p>
                      <p className="mt-1 font-display text-lg text-slate-100">
                        {d.label.startsWith('Day ') ? d.refs.join(' · ') : d.label}
                      </p>
                      {d.label.startsWith('Day ') ? null : (
                        <p className="mt-1 text-sm text-slate-400">{d.refs.join(' · ')}</p>
                      )}
                    </div>
                    {userId && (
                      <Button
                        onClick={() => void checkIn(d.day)}
                        disabled={checkingIn === d.day}
                        className="shrink-0"
                      >
                        {checkingIn === d.day
                          ? tr('Saving…')
                          : tr('Check in')}
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}

          {startFrom > 0 && done < total && (
            <details className="mt-6">
              <summary className="cursor-pointer text-sm text-slate-400">
                {tr('View the full schedule')}
              </summary>
              <div className="mt-3 space-y-2">
                {plan.days.map((d) => (
                  <div
                    key={d.day}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2 text-sm"
                  >
                    <span className="text-slate-300">
                      <span className="text-slate-500">
                        {tr('Day')} {d.day}
                      </span>{' '}
                      — {d.label.startsWith('Day ') ? d.refs.join(' · ') : `${d.label} (${d.refs.join(' · ')})`}
                    </span>
                    {completed.has(d.day) && (
                      <span className="text-xs text-emerald-300">{tr('Done')}</span>
                    )}
                  </div>
                ))}
              </div>
            </details>
          )}
        </div>
      )}
    </main>
  );
}
