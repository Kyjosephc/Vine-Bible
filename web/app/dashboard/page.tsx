'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { useT } from '@/lib/i18n';
import { getPlan } from '@/lib/plans';
import { Button, Card, SectionTitle, ProgressBar, Spinner, EmptyState } from '@/components/ui';

interface GroupStat {
  id: string;
  name: string;
  memberCount: number;
  messageCount: number;
  planCompletionPct: number | null;
  quizAvgPct: number | null;
}

function useTr() {
  const { t } = useT();
  // i18n keys are plain English sentences: t() returns the key itself when
  // untranslated, so the UI degrades gracefully to English.
  return (key: string, fallback?: string): string => t(key, fallback);
}

export default function DashboardPage() {
  const tr = useTr();
  const [userId, setUserId] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [stats, setStats] = useState<GroupStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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

        const { data: led, error: lErr } = await supabase
          .from('group_members')
          .select('group_id, groups(id, name)')
          .eq('user_id', user.id)
          .eq('role', 'leader');
        if (lErr) throw lErr;
        const ledRows = (led ?? []) as { group_id: string; groups: { id: string; name: string } | { id: string; name: string }[] | null }[];

        const results: GroupStat[] = [];
        for (const row of ledRows) {
          const g = Array.isArray(row.groups) ? row.groups[0] : row.groups;
          if (!g) continue;
          const gid = g.id;

          const [{ data: members }, { count: msgCount }] = await Promise.all([
            supabase.from('group_members').select('user_id').eq('group_id', gid),
            supabase.from('group_messages').select('id', { count: 'exact', head: true }).eq('group_id', gid),
          ]);
          const memberIds = ((members ?? []) as { user_id: string }[]).map((m) => m.user_id);

          // Plan assignment completion: average member completion across assignments.
          let planCompletionPct: number | null = null;
          const { data: assignments } = await supabase
            .from('plan_assignments')
            .select('plan_id')
            .eq('group_id', gid);
          const planIds = ((assignments ?? []) as { plan_id: string }[]).map((a) => a.plan_id);
          if (planIds.length > 0 && memberIds.length > 0) {
            const { data: prog } = await supabase
              .from('reading_plan_progress')
              .select('user_id, plan_id, day_index')
              .in('user_id', memberIds)
              .in('plan_id', planIds);
            const rows = (prog ?? []) as { user_id: string; plan_id: string; day_index: number }[];
            const perMember: number[] = [];
            for (const uid of memberIds) {
              let sum = 0;
              let n = 0;
              for (const pid of planIds) {
                const plan = getPlan(pid);
                if (!plan || plan.days.length === 0) continue;
                const done = new Set(
                  rows.filter((r) => r.user_id === uid && r.plan_id === pid).map((r) => r.day_index),
                ).size;
                sum += done / plan.days.length;
                n += 1;
              }
              if (n > 0) perMember.push(sum / n);
            }
            if (perMember.length > 0) {
              planCompletionPct = Math.round((perMember.reduce((a, b) => a + b, 0) / perMember.length) * 100);
            }
          }

          // Recent quiz averages for members.
          let quizAvgPct: number | null = null;
          if (memberIds.length > 0) {
            const { data: attempts } = await supabase
              .from('quiz_attempts')
              .select('score, total')
              .in('user_id', memberIds)
              .order('created_at', { ascending: false })
              .limit(100);
            const att = (attempts ?? []) as { score: number; total: number }[];
            const valid = att.filter((a) => typeof a.total === 'number' && a.total > 0 && typeof a.score === 'number');
            if (valid.length > 0) {
              quizAvgPct = Math.round(
                (valid.reduce((s, a) => s + a.score / a.total, 0) / valid.length) * 100,
              );
            }
          }

          results.push({
            id: gid,
            name: g.name,
            memberCount: memberIds.length,
            messageCount: msgCount ?? 0,
            planCompletionPct,
            quizAvgPct,
          });
        }
        setStats(results);
      } catch {
        setError(tr('Could not load the dashboard. Please try again.'));
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!authChecked || loading) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-8">
        <Spinner />
      </main>
    );
  }

  if (!userId) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-8">
        <Card className="p-6 text-center">
          <SectionTitle>{tr('Sign in to see your dashboard')}</SectionTitle>
          <Link href="/login" className="mt-4 inline-block">
            <Button>{tr('Log in')}</Button>
          </Link>
        </Card>
      </main>
    );
  }

  const totalMembers = stats.reduce((s, g) => s + g.memberCount, 0);
  const totalMessages = stats.reduce((s, g) => s + g.messageCount, 0);
  const planPcts = stats.map((g) => g.planCompletionPct).filter((v): v is number => v !== null);
  const quizPcts = stats.map((g) => g.quizAvgPct).filter((v): v is number => v !== null);
  const avgPlan = planPcts.length > 0 ? Math.round(planPcts.reduce((a, b) => a + b, 0) / planPcts.length) : null;
  const avgQuiz = quizPcts.length > 0 ? Math.round(quizPcts.reduce((a, b) => a + b, 0) / quizPcts.length) : null;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <SectionTitle>{tr('Leader Dashboard')}</SectionTitle>
      {error && <p className="mt-4 rounded-xl bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}

      {stats.length === 0 ? (
        <Card className="mt-6 p-6 text-center">
          <h2 className="font-display text-xl text-slate-100">
            {tr('Lead a group')}
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            {tr(
              'dashboard.ctaHint',
              'You are not leading any groups yet. Create one to see member activity, shared plan progress, and quiz results here.',
            )}
          </p>
          <Link href="/groups" className="mt-4 inline-block">
            <Button>{tr('Create a group')}</Button>
          </Link>
        </Card>
      ) : (
        <>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Card className="p-4 text-center">
              <p className="font-display text-3xl text-[#C9A227]">{stats.length}</p>
              <p className="mt-1 text-xs text-slate-400">{tr('Groups led')}</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="font-display text-3xl text-[#C9A227]">{totalMembers}</p>
              <p className="mt-1 text-xs text-slate-400">{tr('Members')}</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="font-display text-3xl text-[#C9A227]">{totalMessages}</p>
              <p className="mt-1 text-xs text-slate-400">{tr('Messages')}</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="font-display text-3xl text-[#C9A227]">
                {avgQuiz !== null ? `${avgQuiz}%` : '—'}
              </p>
              <p className="mt-1 text-xs text-slate-400">{tr('Avg. quiz score')}</p>
            </Card>
          </div>

          <div className="mt-8 space-y-4">
            {stats.map((g) => (
              <Card key={g.id} className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-display text-xl text-slate-100">{g.name}</h2>
                  <Link href={`/groups/${g.id}`} className="text-sm text-[#C9A227]">
                    {tr('Open →')}
                  </Link>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                  <div>
                    <p className="text-slate-400">{tr('Members')}</p>
                    <p className="font-display text-2xl text-slate-100">{g.memberCount}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">{tr('Messages')}</p>
                    <p className="font-display text-2xl text-slate-100">{g.messageCount}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">{tr('Plan completion')}</p>
                    <p className="font-display text-2xl text-slate-100">
                      {g.planCompletionPct !== null ? `${g.planCompletionPct}%` : '—'}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">{tr('Avg. quiz score')}</p>
                    <p className="font-display text-2xl text-slate-100">
                      {g.quizAvgPct !== null ? `${g.quizAvgPct}%` : '—'}
                    </p>
                  </div>
                </div>
                {g.planCompletionPct !== null && (
                  <div className="mt-3">
                    <ProgressBar value={g.planCompletionPct} max={100} />
                  </div>
                )}
              </Card>
            ))}
          </div>

          {avgPlan !== null && (
            <p className="mt-6 text-center text-sm text-slate-400">
              {tr('Overall plan completion across your groups')}: {avgPlan}%
            </p>
          )}
        </>
      )}
    </main>
  );
}
