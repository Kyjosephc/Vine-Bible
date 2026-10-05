import Link from 'next/link';
import { getUser, createServerClient } from '@/lib/supabase/server';
import { COURSES } from '@/content/courses';
import { useT } from '@/lib/i18n';
import type { QuizQuestion } from '@/lib/types';
import { Badge, Card, EmptyState, ProgressBar, SectionTitle } from '@/components/ui';

interface CourseLessonLike {
  id: string;
  title: string;
  description?: string;
  body?: string;
  quiz?: QuizQuestion[];
}

interface CourseLike {
  id: string;
  title: string;
  description?: string;
  level?: string;
  lessons: CourseLessonLike[];
}

export default async function CoursesPage() {
  const { t } = useT();

  let courses: CourseLike[] = [];
  try {
    courses = (COURSES ?? []) as unknown as CourseLike[];
  } catch {
    courses = [];
  }

  const progressByCourse = new Map<string, number>();
  try {
    const user = await getUser();
    if (user) {
      const supabase = await createServerClient();
      const { data } = await supabase
        .from('lesson_progress')
        .select('lesson_id')
        .eq('user_id', user.id);
      const ids = ((data ?? []) as { lesson_id: string }[]).map((r) => r.lesson_id);
      for (const c of courses) {
        const done = c.lessons.filter((l) => ids.includes(`${c.id}:${l.id}`)).length;
        progressByCourse.set(c.id, done);
      }
    }
  } catch {
    // render without progress
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink dark:text-parchment">
          {t('courses')}
        </h1>
      </div>

      {courses.length === 0 ? (
        <EmptyState title={t('courses')} description={t('no_results')} />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {courses.map((c) => {
            const total = c.lessons.length;
            const done = progressByCourse.get(c.id) ?? 0;
            const complete = total > 0 && done >= total;
            return (
              <Link key={c.id} href={`/courses/${c.id}`}>
                <Card className="h-full transition hover:border-gold/50">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      {c.level ? <Badge>{c.level}</Badge> : null}
                      <h2 className="font-display mt-2 text-xl font-semibold text-ink dark:text-parchment">
                        {c.title}
                      </h2>
                    </div>
                    {complete ? <Badge>{t('completed')}</Badge> : null}
                  </div>
                  {c.description ? (
                    <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                      {c.description}
                    </p>
                  ) : null}
                  <div className="mt-3">
                    <ProgressBar value={done} max={total} />
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {done} / {total} {t('lessons').toLowerCase()}
                    </p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      )}

      <SectionTitle title={t('lessons')} action={<Link href="/learn" className="text-sm font-semibold text-gold hover:underline">{t('view_all')}</Link>} />
    </div>
  );
}
