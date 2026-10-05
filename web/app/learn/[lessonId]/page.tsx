import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLesson } from '@/content/lessons';
import { useT } from '@/lib/i18n';
import type { QuizQuestion } from '@/lib/types';
import { Badge, Card, SectionTitle } from '@/components/ui';
import { QuizBlock } from '@/components/QuizBlock';
import { MarkCompleteButton } from '@/components/MarkCompleteButton';

interface LessonLike {
  id: string;
  title: string;
  description?: string;
  body: string;
  minutes?: number;
  ref?: string;
  keyTerms?: { term: string; definition: string }[];
  quiz?: QuizQuestion[];
}

function safeGetLesson(id: string): LessonLike | undefined {
  try {
    return getLesson(id) as unknown as LessonLike | undefined;
  } catch {
    return undefined;
  }
}

/** Minimal markdown renderer: ## headings, - lists, > quotes, paragraphs. */
function Markdown({ body }: { body: string }) {
  const lines = body.split('\n');
  const blocks: { kind: 'h2' | 'p' | 'ul' | 'quote'; text?: string; items?: string[] }[] = [];
  let para: string[] = [];
  let list: string[] = [];

  const flushPara = () => {
    if (para.length > 0) {
      blocks.push({ kind: 'p', text: para.join(' ') });
      para = [];
    }
  };
  const flushList = () => {
    if (list.length > 0) {
      blocks.push({ kind: 'ul', items: list });
      list = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith('## ')) {
      flushPara();
      flushList();
      blocks.push({ kind: 'h2', text: line.slice(3) });
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      flushPara();
      list.push(line.slice(2));
    } else if (line.startsWith('> ')) {
      flushPara();
      flushList();
      blocks.push({ kind: 'quote', text: line.slice(2) });
    } else if (line === '') {
      flushPara();
      flushList();
    } else {
      para.push(line);
    }
  }
  flushPara();
  flushList();

  return (
    <div className="lesson-body">
      {blocks.map((b, i) => {
        if (b.kind === 'h2') return <h3 key={i}>{b.text}</h3>;
        if (b.kind === 'ul')
          return (
            <ul key={i}>
              {b.items?.map((it, j) => <li key={j}>{it}</li>)}
            </ul>
          );
        if (b.kind === 'quote') return <blockquote key={i}>{b.text}</blockquote>;
        return <p key={i}>{b.text}</p>;
      })}
    </div>
  );
}

export default function LessonPage({ params }: { params: { lessonId: string } }) {
  const { t } = useT();
  const lesson = safeGetLesson(params.lessonId);
  if (!lesson) notFound();

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <Link href="/learn" className="text-sm text-gold hover:underline">
          ← {t('back')}
        </Link>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <Badge>
            {lesson.minutes ?? 10} {t('minutes')}
          </Badge>
          {lesson.ref ? <Badge>{lesson.ref}</Badge> : null}
        </div>
        <h1 className="font-display mt-2 text-3xl font-semibold text-ink dark:text-parchment">
          {lesson.title}
        </h1>
        {lesson.description ? (
          <p className="mt-2 text-slate-600 dark:text-slate-400">{lesson.description}</p>
        ) : null}
      </div>

      <Card>
        <Markdown body={lesson.body} />
      </Card>

      {lesson.keyTerms && lesson.keyTerms.length > 0 && (
        <Card>
          <SectionTitle title={t('key_terms')} />
          <dl className="mt-3 space-y-3">
            {lesson.keyTerms.map((kt) => (
              <div key={kt.term}>
                <dt className="text-sm font-semibold text-gold">{kt.term}</dt>
                <dd className="mt-0.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {kt.definition}
                </dd>
              </div>
            ))}
          </dl>
        </Card>
      )}

      {lesson.quiz && lesson.quiz.length > 0 && (
        <div>
          <SectionTitle title={t('test_yourself')} className="mb-3" />
          <QuizBlock questions={lesson.quiz} tag={`${t('lesson')}:${lesson.id}`} />
        </div>
      )}

      <Card className="flex items-center justify-between">
        <span className="text-sm text-slate-600 dark:text-slate-400">{t('lesson_complete')}</span>
        <MarkCompleteButton lessonId={lesson.id} />
      </Card>
    </div>
  );
}
