import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getUser, createServerClient } from '@/lib/supabase/server';
import { COURSES } from '@/content/courses';
import { useT } from '@/lib/i18n';
import type { QuizQuestion } from '@/lib/types';
import { Badge, Card, ProgressBar, SectionTitle } from '@/components/ui';
import { QuizBlock } from '@/components/QuizBlock';
import { MarkCompleteButton } from '@/components/MarkCompleteButton';

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

function safeGetCourse(id: string): CourseLike | undefined {
  try {
    return ((COURSES ?? []) as unknown as CourseLike[]).find((c) => c.id === id);
  } catch {
    return undefined;
  }
}

export default async function CoursePage({ params }: { params: { courseId: string } }) {
  const { t } = useT();
  const course = safeGetCourse(params.courseId);
  if (!course) notFound();

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

  const total = course.lessons.length;
  const done = course.lessons.filter((l) => doneIds.has(`${course.id}:${l.id}`)).length;
  const complete = total > 0 && done >= total;

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <Link href="/courses" className="text-sm text-gold hover:underline">
          ← {t('courses')}
        </Link>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {course.level ? <Badge>{course.level}</Badge> : null}
          {complete ? <Badge>{t('course_complete')}</Badge> : null}
        </div>
        <h1 className="font-display mt-2 text-3xl font-semibold text-ink dark:text-parchment">
          {course.title}
        </h1>
        {course.description ? (
          <p className="mt-2 text-slate-600 dark:text-slate-400">{course.description}</p>
        ) : null}
        {total > 0 && (
          <div className="mt-3 max-w-md">
            <ProgressBar value={done} max={total} />
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {done} / {total} {t('lessons').toLowerCase()}
            </p>
          </div>
        )}
      </div>

      {complete && (
        <Card className="border-gold/50 text-center">
          <p className="font-display text-xl font-semibold text-gold">{t('course_complete')}</p>
        </Card>
      )}

      <div className="space-y-5">
        {course.lessons.map((lesson, i) => {
          const lessonKey = `${course.id}:${lesson.id}`;
          const isDone = doneIds.has(lessonKey);
          return (
            <Card key={lesson.id}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t('lesson')} {i + 1}
                  </p>
                  <h2 className="font-display mt-1 text-xl font-semibold text-ink dark:text-parchment">
                    {lesson.title}
                  </h2>
                </div>
                {isDone ? <Badge>{t('completed')}</Badge> : null}
              </div>
              {lesson.description ? (
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {lesson.description}
                </p>
              ) : null}
              {lesson.body ? (
                <div className="mt-3 space-y-3">
                  {lesson.body.split('\n\n').map((p, j) => (
                    <p key={j} className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                      {p}
                    </p>
                  ))}
                </div>
              ) : null}
              {lesson.quiz && lesson.quiz.length > 0 ? (
                <div className="mt-4">
                  <SectionTitle title={t('test_yourself')} className="mb-3" />
                  <QuizBlock questions={lesson.quiz} tag={`course:${lessonKey}`} />
                </div>
              ) : null}
              <div className="mt-4 border-t border-ink/10 pt-4 dark:border-white/10">
                <MarkCompleteButton lessonId={lessonKey} />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
