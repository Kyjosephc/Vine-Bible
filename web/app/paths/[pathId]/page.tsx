import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getUser, createServerClient } from '@/lib/supabase/server';
import { useT } from '@/lib/i18n';
import { getPath } from '@/content/paths';
import { getPathLessons } from '@/content/path-lessons';
import { Badge, Card, EmptyState, ProgressBar } from '@/components/ui';

interface PathLessonLike {
  id: string;
  order: number;
  title: string;
  summary: string;
  status?: 'full' | 'stub';
}

function safeGetLessons(pathId: 'beginner' | 'intermediate' | 'advanced'): PathLessonLike[] {
  try {
    return ((getPathLessons(pathId) ?? []) as unknown as PathLessonLike[]).sort(
      (a, b) => a.order - b.order,
    );
  } catch {
    return [];
  }
}

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

export default async function PathDetailPage({ params }: { params: { pathId: string } }) {
  const { t } = useT();
  const path = getPath(params.pathId);
  if (!path) notFound();

  const lessons = safeGetLessons(path.id);
  const doneIds = await getDoneIds();
  const done = lessons.filter((l) => doneIds.has(l.id)).length;

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/paths"
          className="text-xs text-slate-500 underline-offset-2 hover:underline dark:text-slate-400"
        >
          ← {t('learning_paths', 'Learning Paths')}
        </Link>
        <p className="text-xs font-semibold uppercase tracking-widest text-gold mt-2">
          {path.tagline}
        </p>
        <h1 className="font-display mt-1 text-3xl font-semibold text-ink dark:text-parchment">
          {t(path.id, path.title)}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
          {path.description}
        </p>
        {lessons.length > 0 && (
          <div className="mt-3 max-w-md">
            <ProgressBar value={done} max={lessons.length} />
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {done} / {lessons.length} {t('completed', 'completed').toLowerCase()}
            </p>
          </div>
        )}
      </div>

      {lessons.length === 0 ? (
        <EmptyState
          title={t('lessons', 'Lessons')}
          description={t('no_lessons', 'No lessons yet. Check back soon.')}
        />
      ) : (
        <ol className="grid gap-3">
          {lessons.map((lesson) => {
            const completed = doneIds.has(lesson.id);
            const isStub = lesson.status === 'stub';
            return (
              <li key={lesson.id}>
                <Link href={`/paths/${path.id}/${lesson.id}`}>
                  <Card className="transition hover:border-gold/50">
                    <div className="flex items-center gap-4">
                      <span
                        aria-hidden
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          completed
                            ? 'bg-gold text-ink'
                            : 'border border-gold/50 text-gold'
                        }`}
                      >
                        {completed ? '✓' : lesson.order}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h2 className="font-display truncate text-lg font-semibold text-ink dark:text-parchment">
                            {lesson.title}
                          </h2>
                          {isStub ? (
                            <Badge>{t('preview', 'Preview')}</Badge>
                          ) : null}
                          {completed ? (
                            <Badge>{t('completed', 'Completed')}</Badge>
                          ) : null}
                        </div>
                        {lesson.summary ? (
                          <p className="mt-0.5 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                            {lesson.summary}
                          </p>
                        ) : null}
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          {t('lesson', 'Lesson')} {lesson.order} · ~10{' '}
                          {t('minutes', 'minutes').toLowerCase()}
                        </p>
                      </div>
                      <span
                        aria-hidden
                        className="shrink-0 text-xl text-slate-400 dark:text-slate-500"
                      >
                        →
                      </span>
                    </div>
                  </Card>
                </Link>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
