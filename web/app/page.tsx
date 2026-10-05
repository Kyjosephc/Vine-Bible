import Link from 'next/link';
import { getUser, createServerClient } from '@/lib/supabase/server';
import { useT } from '@/lib/i18n';
// Shared contracts created by sibling agents (see task). The @ts-ignore lines
// below keep tsc green until those files land; they are no-ops once the real
// modules exist.
// @ts-ignore
import { LEARNING_PATHS, defaultPathForLevel, getPath } from '@/content/paths';
// @ts-ignore
import { getPathLessons } from '@/content/path-lessons';
import { Badge, Button, Card, EmptyState, ProgressBar, SectionTitle } from '@/components/ui';
import { DailyVerse } from '@/components/DailyVerse';
import { TodayBlock, type TodayDevotional } from './TodayBlock';
import { GamificationStrip } from '@/components/Gamification';
import { DEVOTIONALS } from '@/content/devotionals';
import {
  computeBadges,
  computeStreak as gamificationStreak,
  computeXp,
  levelForXp,
  type GamificationInput,
} from '@/lib/gamification';

interface SessionRow {
  completed_at: string;
  minutes: number;
}

interface ProgressRow {
  lesson_id: string;
}

interface ProfileRow {
  knowledge_level?: string | null;
  daily_minutes?: number | null;
  display_name?: string | null;
  onboarding_completed?: boolean | null;
}

interface PathLessonLike {
  id: string;
  pathId: string;
  order: number;
  title: string;
  summary: string;
}

interface PathMetaLike {
  id: string;
  title: string;
  tagline?: string;
  description?: string;
}

function computeStreak(dates: string[]): number {
  // Re-exported from the gamification lib so home and the dashboard share
  // one definition. (Kept as a local alias to avoid touching call sites.)
  return gamificationStreak(dates);
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

  let profile: ProfileRow | null = null;
  let sessions: SessionRow[] = [];
  let progress: ProgressRow[] = [];
  let savedCount = 0;
  let quizPoints = 0;
  let quizAttempts = 0;
  let masteredVerses = 0;
  let memoryVerseCount = 0;
  try {
    const supabase = await createServerClient();
    const [pr, s, p, sv, qa, mv] = await Promise.all([
      supabase
        .from('profiles')
        .select('knowledge_level,daily_minutes,display_name,onboarding_completed')
        .eq('id', user.id)
        .maybeSingle(),
      supabase.from('study_sessions').select('completed_at,minutes').eq('user_id', user.id),
      supabase.from('lesson_progress').select('lesson_id').eq('user_id', user.id),
      supabase
        .from('saved_devotionals')
        .select('devotional_id', { count: 'exact', head: true })
        .eq('user_id', user.id),
      supabase.from('quiz_attempts').select('score').eq('user_id', user.id),
      supabase.from('memory_verses').select('status').eq('user_id', user.id),
    ]);
    profile = (pr.data ?? null) as ProfileRow | null;
    sessions = ((s.data ?? []) as SessionRow[]) ?? [];
    progress = ((p.data ?? []) as ProgressRow[]) ?? [];
    savedCount = sv.count ?? 0;
    const qaRows = ((qa.data ?? []) as { score: number }[]) ?? [];
    quizAttempts = qaRows.length;
    quizPoints = qaRows.reduce((sum, r) => sum + (r.score || 0), 0);
    const mvRows = ((mv.data ?? []) as { status: string }[]) ?? [];
    memoryVerseCount = mvRows.length;
    masteredVerses = mvRows.filter((r) => r.status === 'mastered').length;
  } catch {
    // offline or unconfigured — render dashboard with defaults
  }

  // ---- Personalization: current learning path ----
  const pathId: string =
    typeof defaultPathForLevel === 'function'
      ? (defaultPathForLevel(profile?.knowledge_level ?? null) ?? 'beginner')
      : 'beginner';

  let lessons: PathLessonLike[] = [];
  try {
    const raw =
      typeof getPathLessons === 'function' ? (getPathLessons(pathId) as PathLessonLike[]) : [];
    lessons = [...(raw ?? [])].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  } catch {
    lessons = [];
  }

  const pathMeta: PathMetaLike | null =
    (typeof getPath === 'function' ? (getPath(pathId) as PathMetaLike | undefined) : undefined) ??
    (Array.isArray(LEARNING_PATHS)
      ? (LEARNING_PATHS as PathMetaLike[]).find((p) => p.id === pathId)
      : undefined) ??
    null;

  const doneIds = new Set(progress.map((r) => r.lesson_id));
  const incomplete = lessons.filter((l) => !doneIds.has(l.id));
  const nextLesson = incomplete[0] ?? null;
  const recommended = incomplete[1] ?? incomplete[0] ?? null;
  const doneCount = lessons.filter((l) => doneIds.has(l.id)).length;
  const dailyMinutes = profile?.daily_minutes ?? 15;
  const displayName =
    typeof profile?.display_name === 'string' && profile.display_name.trim().length > 0
      ? profile.display_name.trim()
      : null;

  const streak = computeStreak(sessions.map((s) => s.completed_at));
  const lessonHref = (l: PathLessonLike) => `/paths/${pathId}/${l.id}`;

  // ---- "Today" devotional: sized to the user's time preference ----
  const minutesBucket: 5 | 15 | 30 | 60 =
    dailyMinutes <= 10 ? 5 : dailyMinutes <= 20 ? 15 : dailyMinutes <= 45 ? 30 : 60;
  const todayDevotional: TodayDevotional | null = (() => {
    try {
      const pool = DEVOTIONALS.filter((d) => d.minutes === minutesBucket);
      const list = pool.length > 0 ? pool : DEVOTIONALS;
      if (list.length === 0) return null;
      const now = new Date();
      const start = new Date(now.getFullYear(), 0, 0).getTime();
      const dayOfYear = Math.floor((now.getTime() - start) / 86400000);
      const d = list[dayOfYear % list.length];
      return {
        id: d.id,
        title: d.title,
        topic: d.topic,
        ref: d.ref,
        passageText: d.passageText,
        explanation: d.explanation,
        prayer: d.prayer,
        reflection: d.reflection,
        minutes: d.minutes,
      };
    } catch {
      return null;
    }
  })();

  // ---- Gamification (all derived — no new tables) ----
  const totalMinutes = sessions.reduce((sum, s) => sum + (s.minutes || 0), 0);
  const todayStr = new Date().toDateString();
  const todayMinutes = sessions
    .filter((s) => new Date(s.completed_at).toDateString() === todayStr)
    .reduce((sum, s) => sum + (s.minutes || 0), 0);
  const gInput: GamificationInput = {
    lessonCount: doneCount,
    quizPoints,
    quizAttempts,
    studyMinutes: totalMinutes,
    masteredVerses,
    streakDays: streak,
    memoryVerseCount,
  };
  const xp = computeXp(gInput);
  const levelProgress = levelForXp(xp);
  const badges = computeBadges(gInput);

  const lessonsFallback = (
    <EmptyState
      title={t('no_lessons', 'No lessons yet')}
      description={t('browse_paths_hint', 'Browse the learning paths to find your first lesson.')}
      action={
        <Link href="/paths">
          <Button>{t('view_all', 'View all')}</Button>
        </Link>
      }
    />
  );

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      {/* Header + streak */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            {t('greeting', 'Welcome back')}
            {displayName ? `, ${displayName}` : ''}
          </p>
          <h1 className="font-display mt-1 text-3xl font-semibold text-ink dark:text-parchment">
            {t('todays_study', "Today's Study")}
          </h1>
        </div>
        <Badge className="shrink-0 px-3 py-1.5 text-sm" aria-label={t('streak', 'Day streak')}>
          🔥 {streak}
        </Badge>
      </div>

      {/* 0. Today — the daily experience */}
      {todayDevotional && <TodayBlock devotional={todayDevotional} />}

      {/* 0b. Journey strip — level, XP, streak, badges (compact) */}
      <GamificationStrip
        level={levelProgress}
        xp={xp}
        streak={streak}
        badges={badges}
        todayMinutes={todayMinutes}
        dailyGoal={dailyMinutes}
        progressHref="/progress"
      />

      {/* 1. Continue Learning — dominant CTA */}
      <section>
        <SectionTitle title={t('continue_learning', 'Continue Learning')} />
        <div className="mt-3">
          {lessons.length === 0 ? (
            lessonsFallback
          ) : nextLesson ? (
            <Card className="border-gold/50 bg-gradient-to-br from-gold/[0.14] via-transparent to-transparent p-6 sm:p-7 dark:from-gold/[0.08]">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{pathMeta?.title ?? t('learning_path', 'Learning path')}</Badge>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {doneCount} / {lessons.length} {t('lessons', 'lessons')}
                </span>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold">
                {t('next_up', 'Next up')}
              </p>
              <h2 className="font-display mt-1 text-2xl font-semibold text-ink sm:text-3xl dark:text-parchment">
                {nextLesson.title}
              </h2>
              {nextLesson.summary ? (
                <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                  {nextLesson.summary}
                </p>
              ) : null}
              <ProgressBar value={doneCount} max={lessons.length} className="mt-4" />
              <Link
                href={lessonHref(nextLesson)}
                className="mt-5 inline-flex items-center rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
              >
                {t('continue', 'Continue')} →
              </Link>
            </Card>
          ) : (
            <Card className="border-gold/50 p-7 text-center">
              <p className="text-3xl">🎉</p>
              <h2 className="font-display mt-2 text-2xl font-semibold text-ink dark:text-parchment">
                {t('path_complete', 'Path complete!')}
              </h2>
              <p className="mx-auto mt-1 max-w-sm text-sm text-slate-600 dark:text-slate-400">
                {t('path_complete_text', 'You finished every lesson in this path. Amazing work.')}
              </p>
              <Link href="/paths" className="mt-4 inline-block">
                <Button>{t('pick_another_path', 'Pick another path')}</Button>
              </Link>
            </Card>
          )}
        </div>
      </section>

      {/* 2. Today's lesson — personalized */}
      <section>
        <SectionTitle title={t('todays_lesson', "Today's lesson")} />
        <div className="mt-3">
          {lessons.length === 0 ? (
            lessonsFallback
          ) : nextLesson ? (
            <Card>
              <div className="flex items-center gap-2">
                <Badge>
                  {dailyMinutes} {t('minutes', 'min')}
                </Badge>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {pathMeta?.title ?? ''}
                </span>
              </div>
              <h3 className="font-display mt-2 text-xl font-semibold text-ink dark:text-parchment">
                {nextLesson.title}
              </h3>
              {nextLesson.summary ? (
                <p className="mt-1 line-clamp-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {nextLesson.summary}
                </p>
              ) : null}
              <Link
                href={lessonHref(nextLesson)}
                className="mt-4 inline-flex items-center rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition hover:brightness-110"
              >
                {t('start', 'Start')} →
              </Link>
            </Card>
          ) : (
            <EmptyState
              title={t('todays_lesson', "Today's lesson")}
              description={t('all_caught_up', "You're all caught up!")}
            />
          )}
        </div>
      </section>

      {/* 3. Daily Scripture */}
      <section aria-label={t('daily_scripture', 'Daily Scripture')}>
        <DailyVerse />
      </section>

      {/* 4 + 9. Prayer teaser & Bible Teacher */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/prayer" className="block">
          <Card className="h-full transition hover:border-gold/50">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              {t('prayer', 'Prayer')}
            </p>
            <h3 className="font-display mt-1 text-lg font-semibold text-ink dark:text-parchment">
              {t('prayer_teaser_title', 'Bring it to God')}
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {t('prayer_teaser', 'Track requests, log answers, and pray through Scripture.')}
            </p>
            <span className="mt-3 inline-block text-sm font-semibold text-gold">
              {t('open_prayer', 'Open prayer')} →
            </span>
          </Card>
        </Link>
        <Link href="/tutor" className="block">
          <Card className="h-full transition hover:border-gold/50">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              {t('bible_teacher', 'Bible Teacher')}
            </p>
            <h3 className="font-display mt-1 text-lg font-semibold text-ink dark:text-parchment">
              {t('ask_teacher_title', 'Ask the Bible Teacher')}
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {t('ask_teacher_teaser', 'Questions about a verse, a story, or a hard topic? Ask away.')}
            </p>
            <span className="mt-3 inline-block text-sm font-semibold text-gold">
              {t('ask_question', 'Ask a question')} →
            </span>
          </Card>
        </Link>
      </div>

      {/* 5. Memory & progress — the daily learning loop companions */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/memory" className="block">
          <Card className="h-full transition hover:border-gold/50">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              {t('scripture_memory', 'Scripture Memory')}
            </p>
            <h3 className="font-display mt-1 text-lg font-semibold text-ink dark:text-parchment">
              {t('memory_teaser_title', 'Hide it in your heart')}
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {t('memory_teaser', 'Memorize verses with flashcards, fill-in-the-blank, and spaced repetition.')}
            </p>
            <span className="mt-3 inline-block text-sm font-semibold text-gold">
              {t('practice_memory', 'Practice memory')} →
            </span>
          </Card>
        </Link>
        <Link href="/progress" className="block">
          <Card className="h-full transition hover:border-gold/50">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              {t('my_progress', 'My Progress')}
            </p>
            <h3 className="font-display mt-1 text-lg font-semibold text-ink dark:text-parchment">
              {t('progress_teaser_title', 'See how you are growing')}
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {t('progress_teaser', 'Lessons, streaks, quiz insights, badges, and next steps.')}
            </p>
            <span className="mt-3 inline-block text-sm font-semibold text-gold">
              {t('view_progress', 'View progress')} →
            </span>
          </Card>
        </Link>
      </div>

      {/* 6. Path progress */}
      {lessons.length > 0 ? (
        <section>
          <SectionTitle title={t('path_progress', 'Path progress')} />
          <Card className="mt-3">
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-semibold text-ink dark:text-parchment">
                {pathMeta?.title ?? t('learning_path', 'Learning path')}
              </p>
              <p className="shrink-0 text-sm text-slate-500 dark:text-slate-400">
                {doneCount} / {lessons.length}
              </p>
            </div>
            <ProgressBar value={doneCount} max={lessons.length} className="mt-3" />
            <Link
              href="/paths"
              className="mt-3 inline-block text-sm font-semibold text-gold hover:underline"
            >
              {t('view_all_paths', 'View all paths')} →
            </Link>
          </Card>
        </section>
      ) : null}

      {/* 7. Recommended lesson */}
      {recommended ? (
        <section>
          <SectionTitle title={t('recommended', 'Recommended')} />
          <Card className="mt-3 border-gold/30">
            <Badge>{t('recommended_for_you', 'Recommended for you')}</Badge>
            <h3 className="font-display mt-2 text-lg font-semibold text-ink dark:text-parchment">
              {recommended.title}
            </h3>
            {recommended.summary ? (
              <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                {recommended.summary}
              </p>
            ) : null}
            <Link
              href={lessonHref(recommended)}
              className="mt-3 inline-flex items-center rounded-xl border border-gold/60 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-gold/10 dark:text-gold"
            >
              {t('start', 'Start')} →
            </Link>
          </Card>
        </section>
      ) : null}

      {/* 8. Quick Bible search — /search has no ?q= param, so this just routes there */}
      <section>
        <SectionTitle title={t('search_title', 'Search')} />
        <form action="/search" className="mt-3 flex gap-2">
          <input
            type="search"
            placeholder={t('search_placeholder', 'Search books, people, places…')}
            aria-label={t('search_title', 'Search')}
            className="w-full rounded-2xl border border-ink/15 bg-white px-5 py-3 text-ink placeholder:text-slate-400 focus:border-gold focus:outline-none dark:border-white/15 dark:bg-white/[0.04] dark:text-parchment"
          />
          <Button type="submit" className="shrink-0">
            {t('search_button', 'Search')}
          </Button>
        </form>
      </section>

      {/* 10. Saved */}
      <Link href="/devotional" className="block">
        <Card className="flex items-center justify-between py-4 transition hover:border-gold/50">
          <div>
            <p className="font-semibold text-ink dark:text-parchment">{t('saved', 'Saved')}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {savedCount} {t('saved_devotionals', 'saved devotionals')}
            </p>
          </div>
          <span className="text-lg font-semibold text-gold">→</span>
        </Card>
      </Link>
    </div>
  );
}
