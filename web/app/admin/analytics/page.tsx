import { requireAdmin, getEventCounts, getDailyActiveUsers, getTopLessons, getQuizAverages } from '@/lib/admin';
import { Card } from '@/components/ui';

function TableCard({
  title,
  caption,
  headers,
  rows,
  empty,
}: {
  title: string;
  caption?: string;
  headers: string[];
  rows: React.ReactNode;
  empty: boolean;
}) {
  return (
    <section aria-label={title} className="mt-8 first:mt-0">
      <h2 className="font-display text-lg font-semibold text-ink dark:text-parchment">{title}</h2>
      {caption ? <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{caption}</p> : null}
      <Card className="mt-3 overflow-x-auto p-0">
        {empty ? (
          <p className="p-4 text-sm text-slate-500 dark:text-slate-400">
            No data yet — events appear once users start interacting.
          </p>
        ) : (
          <table className="w-full min-w-[320px] text-left text-sm">
            <thead>
              <tr className="border-b border-ink/10 dark:border-white/10">
                {headers.map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/5 dark:divide-white/5">{rows}</tbody>
          </table>
        )}
      </Card>
    </section>
  );
}

/** /admin/analytics — counts by event, daily active users, top lessons, quiz scores. */
export default async function AdminAnalyticsPage() {
  await requireAdmin();
  const [eventCounts, dau, topLessons, quizAvgs] = await Promise.all([
    getEventCounts(),
    getDailyActiveUsers(),
    getTopLessons(),
    getQuizAverages(),
  ]);

  return (
    <div>
      <TableCard
        title="Events (last 30 days)"
        caption="How often each tracked interaction happens. Privacy-respecting: no keystrokes, no message text."
        headers={['Event', 'Count']}
        empty={eventCounts.length === 0}
        rows={eventCounts.map((e) => (
          <tr key={e.event}>
            <td className="px-4 py-2.5">
              <code className="text-ink dark:text-parchment">{e.event}</code>
            </td>
            <td className="px-4 py-2.5 font-semibold text-ink dark:text-parchment">{e.count}</td>
          </tr>
        ))}
      />

      <TableCard
        title="Daily active users (last 14 days)"
        caption="Distinct signed-in users with at least one event per day. Logged-out visits are not counted here."
        headers={['Date', 'Users']}
        empty={dau.length === 0}
        rows={dau.map((d) => (
          <tr key={d.date}>
            <td className="px-4 py-2.5 text-ink dark:text-parchment">{d.date}</td>
            <td className="px-4 py-2.5 font-semibold text-ink dark:text-parchment">{d.users}</td>
          </tr>
        ))}
      />

      <TableCard
        title="Top completed lessons (last 30 days)"
        caption="Which lessons people finish most often — a proxy for engagement."
        headers={['Lesson', 'Completions']}
        empty={topLessons.length === 0}
        rows={topLessons.map((l) => (
          <tr key={l.lesson}>
            <td className="px-4 py-2.5">
              <code className="text-ink dark:text-parchment">{l.lesson}</code>
            </td>
            <td className="px-4 py-2.5 font-semibold text-ink dark:text-parchment">{l.count}</td>
          </tr>
        ))}
      />

      <TableCard
        title="Quiz average scores (last 30 days)"
        caption="Which quizzes are hardest/easiest. Use this to spot confusing questions."
        headers={['Quiz', 'Attempts', 'Avg score']}
        empty={quizAvgs.length === 0}
        rows={quizAvgs.map((q) => (
          <tr key={q.quiz_id}>
            <td className="px-4 py-2.5">
              <code className="text-ink dark:text-parchment">{q.quiz_id}</code>
            </td>
            <td className="px-4 py-2.5 text-ink dark:text-parchment">{q.attempts}</td>
            <td className="px-4 py-2.5 font-semibold text-ink dark:text-parchment">
              {Math.round(q.avg_score * 100)}%
            </td>
          </tr>
        ))}
      />
    </div>
  );
}
