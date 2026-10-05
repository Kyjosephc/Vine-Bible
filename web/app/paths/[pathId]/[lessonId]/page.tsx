import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLayeredLesson } from '@/content/path-lessons';
import { LessonView } from '@/components/LessonView';
import { useT } from '@/lib/i18n';

export default function PathLessonPage({
  params,
}: {
  params: { pathId: string; lessonId: string };
}) {
  const { t } = useT();
  const lesson = getLayeredLesson(params.lessonId);
  if (!lesson || lesson.pathId !== params.pathId) notFound();

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <Link href={`/paths/${params.pathId}`} className="text-sm text-gold hover:underline">
        &larr; {t('back_to_path', 'Back to path')}
      </Link>
      <div className="mt-4">
        <LessonView lesson={lesson} />
      </div>
    </div>
  );
}
