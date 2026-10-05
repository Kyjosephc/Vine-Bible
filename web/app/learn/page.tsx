import Link from 'next/link';
import { getUser, createServerClient } from '@/lib/supabase/server';
import { useT } from '@/lib/i18n';
import { BEGINNER_PATH } from '@/content/lessons';
import type { QuizQuestion } from '@/lib/types';
import { Badge, Card, EmptyState, ProgressBar, SectionTitle } from '@/components/ui';

interface LessonLike {
  id: string;
  title: string;
  description?: string;
  body: string;
  minutes?: number;
  keyTerms?: { term: string; definition: string }[];
  quiz?: QuizQuestion[];
}

export default async function LearnPage() {
  const { t } = useT();
  const lessons = (BEGINNER_PATH ?? []) as unknown as LessonLike[];

  let doneIds = new Set<string>();
  try {
    const user = await getUser();
    if (user) {
      const supabase = await createServerClient();
      const { data } = await supabase
        .from('lesson_progress')
        .select('lesson_id')
        .eq('user_id', user.id);
      doneIds = new Set(((data ?? []) as { lesson_id: string }[]).map((r) => r.lesson_id));
    }
  } catch {
    // render without progress
  }

  const done = lessons.filter((l) => doneIds.has(l.id)).length;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">{t('lessons')}</p>
        <h1 className="font-display mt-1 text-3xl font-semibold text-ink dark:text-parchment">
          {t('lessons')}
        </h1>
        {lessons.length > 0 && (
          <div className="mt-3 max-w-md">
            <ProgressBar value={done} max={lessons.length} />
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {done} / {lessons.length} {t('completed').toLowerCase()}
            </p>
          </div>
        )}
      </div>

      {lessons.length === 0 ? (
        <EmptyState title={t('lessons')} description={t('no_lessons')} />
      ) : (
        <div className="grid gap-3">
          {lessons.map((lesson, i) => {
            const completed = doneIds.has(lesson.id);
            return (
              <Link key={lesson.id} href={`/learn/${lesson.id}`}>
                <Card className="transition hover:border-gold/50">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {t('lesson')} {i + 1} · {lesson.minutes ?? 10} {t('minutes')}
                      </p>
                      <h2 className="font-display mt-1 text-xl font-semibold text-ink dark:text-parchment">
                        {lesson.title}
                      </h2>
                      {lesson.description ? (
                        <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                          {lesson.description}
                        </p>
                      ) : null}
                    </div>
                    {completed ? <Badge>{t('completed')}</Badge> : null}
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      )}

      <SectionTitle title={t('courses')} action={<Link href="/courses" className="text-sm font-semibold text-gold hover:underline">{t('view_all')}</Link>} />
    </div>
  );
}
