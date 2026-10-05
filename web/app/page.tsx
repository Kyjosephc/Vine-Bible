import Link from 'next/link';
import { getUser, createServerClient } from '@/lib/supabase/server';
import { useT } from '@/lib/i18n';
import { DEVOTIONALS } from '@/content/devotionals';
import { BEGINNER_PATH } from '@/content/lessons';
import { COURSES } from '@/content/courses';
import { Badge, Button, Card, EmptyState, SectionTitle } from '@/components/ui';
import { DailyVerse } from '@/components/DailyVerse';
import { TodaysStudyCard } from './todays-study-card';

interface SessionRow {
  ref: string;
  minutes: number;
  completed_at: string;
}

interface ProgressRow {
  lesson_id: string;
}

interface AttemptRow {
  quiz_tag: string;
  score: number;
  total: number;
  created_at: string;
}

interface DevotionalLike {
  id: string;
  title: string;
  ref: string;
  topic: string;
  minutes: 5 | 10 | 15 | 30 | 60;
}

interface LessonLike {
  id: string;
  title: string;
  description?: string;
  minutes?: number;
}

interface CourseLike {
  id: string;
  title: string;
  description?: string;
}

function computeStreak(dates: string[]): number {
  const days = new Set(dates.map((d) => new Date(d).toDateString()));
  const cur = new Date();
  if (!days.has(cur.toDateString())) cur.setDate(cur.getDate() - 1);
  let streak = 0;
  while (days.has(cur.toDateString())) {
    streak++;
    cur.setDate(cur.getDate() - 1);
  }
  return streak;
}

function LoggedOutHome() {
  const { t } = useT();
  return (
    <div className="space-y-8">
      <Card className="border-gold/30 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">{t('tagline')}</p>
        <h1 className="font-display mt-2 text-3xl font-semibold text-ink dark:text-parchment">
          {t('login_title')}
        </h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-600 dark:text-slate-400">
          {t('login_text')}
        </p>
        <Link href="/login" className="mt-5 inline-block">
          <Button>{t('login_button')}</Button>
        </Link>
      </Card>
      <DailyVerse />
    </div>
  );
}

export default async function HomePage() {
  const { t } = useT();

  let user: { id: string } | null = null;
  try {
    user = await getUser();
  } catch {
    user = null;
  }
  if (!user) return <LoggedOutHome />;

  let sessions: SessionRow[] = [];
  let progress: ProgressRow[] = [];
  let attempts: AttemptRow[] = [];
  try {
    const supabase = await createServerClient();
    const [s, p, a] = await Promise.all([
      supabase
        .from('study_sessions')
        .select('ref,minutes,completed_at')
        .eq('user_id', user.id)
        .order('completed_at', { ascending: false }),
      supabase.from('lesson_progress').select('lesson_id').eq('user_id', user.id),
      supabase
        .from('quiz_attempts')
        .select('quiz_tag,score,total,created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false }),
    ]);
    sessions = ((s.data ?? []) as SessionRow[]) ?? [];
    progress = ((p.data ?? []) as ProgressRow[]) ?? [];
    attempts = ((a.data ?? []) as AttemptRow[]) ?? [];
  } catch {
    // offline or unconfigured — render with empty stats
  }

  const devos = (DEVOTIONALS ?? []) as unknown as DevotionalLike[];
  const lessons = (BEGINNER_PATH ?? []) as unknown as LessonLike[];
  const doneIds = new Set(progress.map((r) => r.lesson_id));
  const nextLesson = lessons.find((l) => !doneIds.has(l.id)) ?? null;

  // Weak areas: tags averaging under 70%
  const byTag = new Map<string, { score: number; total: number; n: number }>();
  for (const a of attempts) {
    const cur = byTag.get(a.quiz_tag) ?? { score: 0, total: 0, n: 0 };
    cur.score += a.score;
    cur.total += a.total;
    cur.n += 1;
    byTag.set(a.quiz_tag, cur);
  }
  const weakTags = [...byTag.entries()]
    .map(([tag, v]) => ({ tag, pct: v.total > 0 ? Math.round((v.score / v.total) * 100) : 0 }))
    .filter((v) => v.pct < 70)
    .sort((a, b) => a.pct - b.pct);

  const courses = (COURSES ?? []) as unknown as CourseLike[];
  const nextCourse = courses[0] ?? null;

  const dates = sessions.map((s) => s.completed_at);
  const todayDateStr = new Date().toDateString();
  const todaySessions = sessions.filter(
    (s) => new Date(s.completed_at).toDateString() === todayDateStr,
  );
  const stats = [
    { label: t('streak'), value: computeStreak(dates) },
    { label: t('days_studied'), value: new Set(dates.map((d) => new Date(d).toDateString())).size },
    { label: t('minutes_studied'), value: sessions.reduce((sum, s) => sum + (s.minutes || 0), 0) },
    { label: t('chapters_done'), value: new Set(sessions.map((s) => s.ref)).size },
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">{t('greeting')}</p>
        <h1 className="font-display mt-1 text-3xl font-semibold text-ink dark:text-parchment">
          {t('todays_study')}
        </h1>
      </div>

      <TodaysStudyCard
        devotionals={(devos as { id: string; title: string; ref: string; topic: string; minutes: 5 | 10 | 15 | 30 | 60 }[]).map(
          (d) => ({ id: d.id, title: d.title, ref: d.ref, topic: d.topic, minutes: d.minutes }),
        )}
        todaySessions={todaySessions.map((s) => ({ ref: s.ref, minutes: s.minutes }))}
      />

      <section>
        <SectionTitle title={t('your_progress')} />
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-gold">{s.value}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.label}</p>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section>
          <SectionTitle title={t('continue_learning')} />
          <div className="mt-3">
            {nextLesson ? (
              <Card>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t('lesson')} · {nextLesson.minutes ?? 10} {t('minutes')}
                </p>
                <h3 className="font-display mt-1 text-xl font-semibold text-ink dark:text-parchment">
                  {nextLesson.title}
                </h3>
                {nextLesson.description ? (
                  <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                    {nextLesson.description}
                  </p>
                ) : null}
                <Link
                  href={`/learn/${nextLesson.id}`}
                  className="mt-3 inline-flex items-center rounded-xl bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-110"
                >
                  {t('continue')}
                </Link>
              </Card>
            ) : (
              <EmptyState title={t('continue_learning')} description={t('all_caught_up')} />
            )}
          </div>
        </section>

        <section>
          <SectionTitle title={t('recommended')} />
          <div className="mt-3">
            {weakTags.length > 0 ? (
              <Card className="border-gold/30">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {t('weak_area')}
                </p>
                <h3 className="font-display mt-1 text-xl font-semibold text-ink dark:text-parchment">
                  {t('your_score')}: {weakTags[0].pct}% · {weakTags[0].tag}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {t('review_answers')}
                </p>
                <Link
                  href={`/quizzes?tag=${encodeURIComponent(weakTags[0].tag)}`}
                  className="mt-3 inline-flex items-center rounded-xl border border-gold/60 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-gold/10 dark:text-gold"
                >
                  {t('try_again')}
                </Link>
              </Card>
            ) : nextCourse ? (
              <Card>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {t('courses')}
                </p>
                <h3 className="font-display mt-1 text-xl font-semibold text-ink dark:text-parchment">
                  {nextCourse.title}
                </h3>
                {nextCourse.description ? (
                  <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                    {nextCourse.description}
                  </p>
                ) : null}
                <Link
                  href={`/courses/${nextCourse.id}`}
                  className="mt-3 inline-flex items-center rounded-xl border border-gold/60 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-gold/10 dark:text-gold"
                >
                  {t('start_course')}
                </Link>
              </Card>
            ) : (
              <EmptyState title={t('recommended')} description={t('all_caught_up')} />
            )}
          </div>
        </section>
      </div>

      <DailyVerse />
    </div>
  );
}
