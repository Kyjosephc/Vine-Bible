import Link from 'next/link';
import { requireAdmin, getAdminOverview } from '@/lib/admin';
import { Card } from '@/components/ui';

function StatCard({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return (
    <Card className="p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <p className="font-display mt-2 text-3xl font-semibold text-ink dark:text-parchment">{value}</p>
      {hint ? <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{hint}</p> : null}
    </Card>
  );
}

/** /admin — overview: totals, recent signups, top events, and links. */
export default async function AdminOverviewPage() {
  await requireAdmin();
  const stats = await getAdminOverview();

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <StatCard label="Total users" value={stats.totalUsers} hint="profiles created" />
        <StatCard label="Signups (7d)" value={stats.signupsLast7d} />
        <StatCard label="Events (7d)" value={stats.eventsLast7d} hint="tracked interactions" />
        <StatCard label="Lessons done (7d)" value={stats.lessonsCompleted7d} />
        <StatCard label="Quizzes done (7d)" value={stats.quizzesCompleted7d} />
        <Link href="/admin/analytics">
          <Card className="p-5 transition hover:border-gold/60">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Full analytics
            </p>
            <p className="font-display mt-2 text-xl font-semibold text-gold">View →</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Events, daily users, top lessons, quiz scores
            </p>
          </Card>
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section aria-labelledby="recent-signups">
          <h2 id="recent-signups" className="font-display text-lg font-semibold text-ink dark:text-parchment">
            Recent signups
          </h2>
          <Card className="mt-3 p-0">
            {stats.recentSignups.length === 0 ? (
              <p className="p-4 text-sm text-slate-500 dark:text-slate-400">No users yet.</p>
            ) : (
              <ul className="divide-y divide-ink/5 dark:divide-white/5">
                {stats.recentSignups.map((u) => (
                  <li key={u.id} className="flex items-center justify-between gap-3 px-4 py-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-ink dark:text-parchment">
                        {u.display_name || 'No display name'}
                      </p>
                      <p className="truncate font-mono text-[11px] text-slate-500 dark:text-slate-400">
                        {u.id}
                      </p>
                    </div>
                    <time className="shrink-0 text-xs text-slate-500 dark:text-slate-400">
                      {u.created_at.slice(0, 10)}
                    </time>
                  </li>
                ))}
              </ul>
            )}
          </Card>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Emails aren’t listed here — Supabase only exposes auth emails via the
            service-role key, which this app never uses client-side. Use the
            Supabase dashboard → Auth → Users for emails.
          </p>
        </section>

        <section aria-labelledby="top-events">
          <h2 id="top-events" className="font-display text-lg font-semibold text-ink dark:text-parchment">
            Top events (7 days)
          </h2>
          <Card className="mt-3 p-0">
            {stats.topEvents.length === 0 ? (
              <p className="p-4 text-sm text-slate-500 dark:text-slate-400">
                No events yet. Events appear once users start interacting (and the
                analytics migration is applied).
              </p>
            ) : (
              <ul className="divide-y divide-ink/5 dark:divide-white/5">
                {stats.topEvents.map((e) => (
                  <li key={e.event} className="flex items-center justify-between px-4 py-3">
                    <code className="text-sm text-ink dark:text-parchment">{e.event}</code>
                    <span className="rounded-full bg-gold/15 px-3 py-0.5 text-sm font-semibold text-gold">
                      {e.count}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </section>
      </div>
    </div>
  );
}
