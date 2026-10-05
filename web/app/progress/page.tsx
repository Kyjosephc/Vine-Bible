// Personal progress dashboard: what the learner has done, how they are
// doing, and warm next-step suggestions. All stats are derived from
// existing tables; nothing here shames a break.
import Link from 'next/link';
import { getUser, createServerClient } from '@/lib/supabase/server';
import { useT } from '@/lib/i18n';
// @ts-ignore — content module contract from the learning-path workstream
import { defaultPathForLevel } from '@/content/paths';
import {
  computeBadges,
  computeStreak,
  computeXp,
  goalProgress,
  levelForXp,
  type GamificationInput,
} from '@/lib/gamification';
import { buildRecommendations, prettifyTag } from '@/lib/recommend';
import { GamificationStrip } from '@/components/Gamification';
import { Badge, Card, EmptyState, ProgressBar, SectionTitle, Button } from '@/components/ui';

interface AttemptRow {
  quiz_tag: string;
  score: number;
  total: number;
}

interface SessionRow {
  minutes: number;
  completed_at: string;
}

function Stat({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <Card className="p-4">
      <p className="font-display text-2xl font-semibold text-ink dark:text-parchment">{value}</p>
      <p className="mt-0.5 text-xs font-semibold uppercase tracking-widest text-gold">{label}</p>
      {sub ? <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{sub}</p> : null}
    </Card>
  );
}

export default async function ProgressPage() {
  const { t } = useT();

  let user: { id: string } | null = null;
  try {
    user = await getUser();
  } catch {
    user = null;
  }
  if (!user) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-8">
        <EmptyState
          title={t('Your Progress')}
          description={t('Log in to see your progress dashboard.')}
          action={
            <Link href="/login">
              <Button>{t('Log in')}</Button>
            </Link>
          }
        />
      </div>
    );
  }

  let lessonCount = 0;
  let courseCount = 0;
  let sessions: SessionRow[] = [];
  let attempts: AttemptRow[] = [];
  let memoryCounts: Record<string, number> = {};
  let dailyGoal = 15;
  let pathId = 'beginner';

  try {
    const supabase = await createServerClient();
    const [lp, clp, s, qa, mv, pr] = await Promise.all([
      supabase.from('lesson_progress').select('lesson_id', { count: 'exact', head: true }).eq('user_id', user.id),
      supabase.from('course_lesson_progress').select('course_id').eq('user_id', user.id),
      supabase.from('study_sessions').select('minutes,completed_at').eq('user_id', user.id),
      supabase.from('quiz_attempts').select('quiz_tag,score,total').eq('user_id', user.id).order('created_at', { ascending: false }).limit(500),
      supabase.from('memory_verses').select('status').eq('user_id', user.id),
      supabase.from('profiles').select('knowledge_level,daily_minutes').eq('id', user.id).maybeSingle(),
    ]);
    lessonCount = lp.count ?? 0;
    courseCount = new Set(((clp.data ?? []) as { course_id: string }[]).map((r) => r.course_id)).size;
    sessions = ((s.data ?? []) as SessionRow[]) ?? [];
    attempts = ((qa.data ?? []) as AttemptRow[]) ?? [];
    for (const row of ((mv.data ?? []) as { status: string }[]) ?? []) {
      memoryCounts[row.status] = (memoryCounts[row.status] ?? 0) + 1;
    }
    dailyGoal = (pr.data as { daily_minutes?: number | null } | null)?.daily_minutes ?? 15;
    const level = (pr.data as { knowledge_level?: string | null } | null)?.knowledge_level ?? null;
    pathId = typeof defaultPathForLevel === 'function' ? (defaultPathForLevel(level) ?? 'beginner') : 'beginner';
  } catch {
    // offline or unconfigured — render with zeros
  }

  const streak = computeStreak(sessions.map((s) => s.completed_at));
  const totalMinutes = sessions.reduce((sum, s) => sum + (s.minutes || 0), 0);
  const todayStr = new Date().toDateString();
  const todayMinutes = sessions
    .filter((s) => new Date(s.completed_at).toDateString() === todayStr)
    .reduce((sum, s) => sum + (s.minutes || 0), 0);
  const quizPoints = attempts.reduce((sum, a) => sum + (a.score || 0), 0);
  const masteredVerses = memoryCounts['mastered'] ?? 0;
  const memoryVerseCount = Object.values(memoryCounts).reduce((a, b) => a + b, 0);

  const gInput: GamificationInput = {
    lessonCount,
    quizPoints,
    quizAttempts: attempts.length,
    studyMinutes: totalMinutes,
    masteredVerses,
    streakDays: streak,
    memoryVerseCount,
  };
  const xp = computeXp(gInput);
  const level = levelForXp(xp);
  const badges = computeBadges(gInput);
  const goal = goalProgress(todayMinutes, dailyGoal);

  // Quiz performance by tag: strengths and areas to grow.
  const byTag = new Map<string, { score: number; total: number; n: number }>();
  for (const a of attempts) {
    const cur = byTag.get(a.quiz_tag) ?? { score: 0, total: 0, n: 0 };
    cur.score += a.score;
    cur.total += a.total;
    cur.n += 1;
    byTag.set(a.quiz_tag, cur);
  }
  const tagPerf = [...byTag.entries()]
    .map(([tag, v]) => ({
      tag,
      pct: v.total > 0 ? Math.round((v.score / v.total) * 100) : 0,
      attempts: v.n,
    }))
    .sort((a, b) => b.pct - a.pct);
  const strengths = tagPerf.filter((p) => p.attempts >= 2 && p.pct >= 75).slice(0, 3);
  const growing = tagPerf.filter((p) => p.attempts >= 2 && p.pct < 75).sort((a, b) => a.pct - b.pct).slice(0, 3);

  const recommendations = buildRecommendations({
    tagPerformance: tagPerf,
    lessonCount,
    pathId,
    masteredVerses,
    memoryVerseCount,
    streakDays: streak,
    hasLessonsAvailable: true,
  });

  return (
    <div className="mx-auto max-w-2xl space-y-8 px-4 py-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          {t('How you are growing')}
        </p>
        <h1 className="font-display mt-1 text-3xl font-semibold text-ink dark:text-parchment">
          {t('Your Progress')}
        </h1>
      </div>

      <GamificationStrip
        level={level}
        xp={xp}
        streak={streak}
        badges={badges}
        todayMinutes={todayMinutes}
        dailyGoal={goal.dailyGoal}
      />

      {/* Key stats */}
      <section>
        <SectionTitle title={t('At a glance')} />
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <Stat label={t('Lessons')} value={lessonCount} />
          <Stat label={t('Study time')} value={`${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}m`} sub={t('total')} />
          <Stat label={t('Day streak')} value={streak} />
          <Stat label={t('Quizzes taken')} value={attempts.length} />
          <Stat
            label={t('Quiz average')}
            value={attempts.length > 0 ? `${Math.round((quizPoints / attempts.reduce((s, a) => s + a.total, 0)) * 100)}%` : '—'}
          />
          <Stat label={t('Verses memorized')} value={masteredVerses} sub={memoryVerseCount > 0 ? `${memoryVerseCount} ${t('in progress')}` : undefined} />
        </div>
      </section>

      {/* Daily goal */}
      <section>
        <SectionTitle title={t("Today's goal")} />
        <Card className="mt-3">
          <div className="flex items-baseline justify-between">
            <p className="text-sm font-medium text-ink dark:text-parchment">
              {todayMinutes} / {goal.dailyGoal} {t('min')}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{goal.pct}%</p>
          </div>
          <ProgressBar value={goal.pct} max={100} className="mt-2" />
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {goal.met
              ? t('Daily goal met. Well done — rest in that.')
              : t('A few more minutes today will meet your goal. Small steps count.')}
          </p>
        </Card>
      </section>

      {/* Quiz strengths & growth areas */}
      {(strengths.length > 0 || growing.length > 0) && (
        <section>
          <SectionTitle title={t('Quiz insights')} />
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {strengths.length > 0 && (
              <Card>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {t('Strengths')}
                </p>
                <ul className="mt-2 space-y-2">
                  {strengths.map((s) => (
                    <li key={s.tag} className="flex items-center justify-between gap-2 text-sm">
                      <span className="text-ink dark:text-parchment">{prettifyTag(s.tag)}</span>
                      <Badge>{s.pct}%</Badge>
                    </li>
                  ))}
                </ul>
              </Card>
            )}
            {growing.length > 0 && (
              <Card>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {t('Keep growing')}
                </p>
                <ul className="mt-2 space-y-2">
                  {growing.map((s) => (
                    <li key={s.tag} className="flex items-center justify-between gap-2 text-sm">
                      <span className="text-ink dark:text-parchment">{prettifyTag(s.tag)}</span>
                      <Badge>{s.pct}%</Badge>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs leading-6 text-slate-500 dark:text-slate-400">
                  {t('Lower scores just show where the richest learning is waiting.')}
                </p>
              </Card>
            )}
          </div>
        </section>
      )}

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <section>
          <SectionTitle title={t('Suggested next steps')} />
          <div className="mt-3 space-y-3">
            {recommendations.map((r, i) => (
              <Card key={i} className="border-gold/30">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {r.kind === 'foundational' ? t('Build foundations') : r.kind === 'deeper' ? t('Go deeper') : r.kind === 'habit' ? t('Keep the habit') : t('Next step')}
                </p>
                <h3 className="font-display mt-1 text-lg font-semibold text-ink dark:text-parchment">
                  {r.title}
                </h3>
                <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-400">{r.body}</p>
                {r.href && (
                  <Link href={r.href} className="mt-2 inline-block text-sm font-semibold text-gold hover:underline">
                    {t('Explore')} →
                  </Link>
                )}
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* All badges */}
      <section>
        <SectionTitle title={t('Badges')} />
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {badges.map((b) => (
            <Card key={b.id} className={`p-4 ${b.earned ? '' : 'opacity-50'}`}>
              <p className="text-2xl" aria-hidden>
                {b.earned ? b.icon : '🔒'}
              </p>
              <p className="mt-1 text-sm font-semibold text-ink dark:text-parchment">{b.name}</p>
              <p className="mt-0.5 text-xs leading-5 text-slate-500 dark:text-slate-400">{b.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {courseCount > 0 && (
        <p className="text-center text-xs text-slate-500 dark:text-slate-400">
          {t('Courses in progress')}: {courseCount}
        </p>
      )}
    </div>
  );
}
