import Link from 'next/link';
import { getUser, createServerClient } from '@/lib/supabase/server';
import { useT } from '@/lib/i18n';
import { LEARNING_PATHS, type LearningPath } from '@/content/paths';
import { getPathLessons } from '@/content/path-lessons';
import { Badge, Card, ProgressBar } from '@/components/ui';

const LESSON_ID_PREFIXES: Record<LearningPath['id'], string> = {
  beginner: 'path-beg-',
  intermediate: 'path-int-',
  advanced: 'path-adv-',
};

async function getDoneIds(): Promise<Set<string>> {
  try {
    const user = await getUser();
    if (!user) return new Set();
    const supabase = await createServerClient();
    const { data } = await supabase
      .from('lesson_progress')
      .select('lesson_id')
      .eq('user_id', user.id);
    return new Set(((data ?? []) as { lesson_id: string }[]).map((r) => r.lesson_id));
  } catch {
    return new Set();
  }
}

function safeLessonIds(pathId: LearningPath['id']): string[] {
  try {
    return (getPathLessons(pathId) ?? []).map((l) => l.id);
  } catch {
    return [];
  }
}

export default async function PathsPage() {
  const { t } = useT();
  const doneIds = await getDoneIds();

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          {t('paths_eyebrow', 'Guided journeys')}
        </p>
        <h1 className="font-display mt-1 text-3xl font-semibold text-ink dark:text-parchment">
          {t('learning_paths', 'Learning Paths')}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
          {t(
            'learning_paths_intro',
            'Walk the Bible step by step. Choose the path that fits where you are today, and complete each lesson at your own pace.',
          )}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LEARNING_PATHS.map((path) => {
          const lessonIds = safeLessonIds(path.id);
          const total = lessonIds.length || 10;
          const prefix = LESSON_ID_PREFIXES[path.id];
          const done = [...doneIds].filter((id) => id.startsWith(prefix)).length;
          const started = done > 0;
          const complete = done >= total;

          const firstIncomplete = lessonIds.find((id) => !doneIds.has(id));
          const href = firstIncomplete ? `/paths/${path.id}/${firstIncomplete}` : `/paths/${path.id}`;
          const cta = complete
            ? t('review_path', 'Review path')
            : started
              ? t('continue_path', 'Continue')
              : t('start_path', 'Start path');

          return (
            <Card key={path.id} className="flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display text-2xl font-semibold text-ink dark:text-parchment">
                  {path.title}
                </h2>
                {complete ? <Badge>{t('completed', 'Completed')}</Badge> : null}
              </div>
              <p className="mt-1 text-sm font-medium text-gold">{path.tagline}</p>
              <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
                {path.description}
              </p>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                {total} {t('lessons', 'lessons').toLowerCase()} · {path.level}
              </p>
              <div className="mt-2">
                <ProgressBar value={done} max={total} />
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {done} / {total} {t('completed', 'completed').toLowerCase()}
                </p>
              </div>
              <Link
                href={href}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition hover:brightness-110"
              >
                {cta}
              </Link>
              <Link
                href={`/paths/${path.id}`}
                className="mt-2 text-center text-xs text-slate-500 underline-offset-2 hover:underline dark:text-slate-400"
              >
                {t('view_all_lessons', 'View all lessons')}
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
