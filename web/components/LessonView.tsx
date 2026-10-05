'use client';

import { useState } from 'react';
import type { LayeredLesson, LessonLayer } from '@/content/path-lessons';
import { useT } from '@/lib/i18n';
import { QuizBlock } from '@/components/QuizBlock';
import { InteractiveQuiz, toInteractiveList } from '@/components/interactive';
import { MarkCompleteButton } from '@/components/MarkCompleteButton';
import { Card, SectionTitle } from '@/components/ui';

type Minutes = 5 | 15 | 30 | 60;

const LAYER_KEYS: Record<Minutes, 'core' | 'expanded' | 'deep' | 'study'> = {
  5: 'core',
  15: 'expanded',
  30: 'deep',
  60: 'study',
};

const PATH_LABELS: Record<LayeredLesson['pathId'], string> = {
  beginner: 'Beginner Path',
  intermediate: 'Intermediate Path',
  advanced: 'Advanced Path',
};

/** Inline bold: **text** -> <strong>. Kept tiny and self-contained. */
function renderInline(text: string, keyPrefix: string) {
  const parts = text.split('**');
  if (parts.length === 1) return text;
  return parts.map((p, i) =>
    i % 2 === 1 ? <strong key={`${keyPrefix}-${i}`}>{p}</strong> : <span key={`${keyPrefix}-${i}`}>{p}</span>,
  );
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
        if (b.kind === 'h2') return <h3 key={i}>{renderInline(b.text ?? '', `h${i}`)}</h3>;
        if (b.kind === 'ul')
          return (
            <ul key={i}>
              {b.items?.map((it, j) => <li key={j}>{renderInline(it, `li${i}-${j}`)}</li>)}
            </ul>
          );
        if (b.kind === 'quote') return <blockquote key={i}>{renderInline(b.text ?? '', `q${i}`)}</blockquote>;
        return <p key={i}>{renderInline(b.text ?? '', `p${i}`)}</p>;
      })}
    </div>
  );
}

function LayerContent({ layer }: { layer: LessonLayer }) {
  const { t } = useT();
  return (
    <div className="space-y-6">
      {/* Concept callout */}
      <div className="rounded-2xl border-2 border-gold/60 bg-gold/[0.06] p-5 dark:bg-gold/[0.08]">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">{t('big_idea', 'The big idea')}</p>
        <p className="font-display mt-2 text-lg font-medium leading-8 text-ink dark:text-parchment">
          {layer.concept}
        </p>
      </div>

      {/* Scripture */}
      <Card>
        <SectionTitle title={t('scripture', 'Scripture')} />
        <div className="mt-4 space-y-5">
          {layer.scripture.map((s) => (
            <figure key={s.ref}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">{s.ref}</h4>
              <blockquote className="font-display mt-2 border-l-4 border-gold/70 pl-4 text-lg italic leading-8 text-ink dark:text-parchment">
                &ldquo;{s.text}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </Card>

      {/* Teaching */}
      <Card>
        <Markdown body={layer.teaching} />
      </Card>

      {/* Mid-lesson checkpoint: one interactive question at a natural pause,
          so the learner tests understanding before moving on. The first
          quiz question is used here; the rest stay in "Test yourself". */}
      {layer.quiz && layer.quiz.length > 1 && (
        <div>
          <SectionTitle
            title={t('pause_check', 'Pause and check')}
            className="mb-3"
          />
          <InteractiveQuiz
            questions={toInteractiveList(layer.quiz.slice(0, 1))}
            onComplete={() => {}}
            compact
          />
        </div>
      )}

      {/* Key terms */}
      {layer.keyTerms && layer.keyTerms.length > 0 && (
        <Card>
          <SectionTitle title={t('key_terms', 'Key terms')} />
          <dl className="mt-3 space-y-3">
            {layer.keyTerms.map((kt) => (
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

      {/* Cross references */}
      {layer.crossRefs && layer.crossRefs.length > 0 && (
        <div>
          <SectionTitle title={t('cross_references', 'Cross references')} className="mb-3" />
          <div className="flex flex-wrap gap-2">
            {layer.crossRefs.map((ref) => (
              <span
                key={ref}
                className="rounded-full border border-gold/40 bg-gold/[0.07] px-3 py-1 text-xs font-medium text-ink dark:text-parchment"
              >
                {ref}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Reflection */}
      {layer.reflection.length > 0 && (
        <Card>
          <SectionTitle title={t('reflect', 'Reflect')} />
          <ol className="mt-3 list-decimal space-y-2.5 pl-5 text-[15px] leading-7 text-slate-700 dark:text-slate-300">
            {layer.reflection.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ol>
        </Card>
      )}

      {/* Application */}
      <Card>
        <SectionTitle title={t('apply', 'Apply')} />
        <div className="mt-2">
          <Markdown body={layer.application} />
        </div>
      </Card>

      {/* Prayer */}
      <div className="rounded-2xl bg-[#101828] p-6 text-slate-200 dark:border dark:border-gold/30">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">{t('prayer', 'Prayer')}</p>
        <p className="font-display mt-3 text-[17px] italic leading-8 text-parchment">{layer.prayer}</p>
      </div>
    </div>
  );
}

export function LessonView({ lesson }: { lesson: LayeredLesson }) {
  const { t } = useT();
  const [minutes, setMinutes] = useState<Minutes>(5);
  const layer = lesson.layers[LAYER_KEYS[minutes]];
  const options: Minutes[] = [5, 15, 30, 60];

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      {/* Header */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {t(`path_${lesson.pathId}`, PATH_LABELS[lesson.pathId])}
        </p>
        <h1 className="font-display mt-2 text-3xl font-semibold text-ink dark:text-parchment">
          {lesson.title}
        </h1>
        <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">{lesson.summary}</p>
        {lesson.status === 'stub' && (
          <p className="mt-3 rounded-xl border border-gold/30 bg-gold/[0.06] px-4 py-2.5 text-sm text-slate-600 dark:text-slate-400">
            {t(
              'stub_note',
              'Deeper layers for this lesson are on the way \u2014 the core lesson is ready now.',
            )}
          </p>
        )}
      </div>

      {/* Time selector */}
      <div className="rounded-2xl border border-ink/10 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]">
        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
          {t('teach_me_for', 'Teach me for\u2026')}
        </p>
        <div className="mt-3 grid grid-cols-4 gap-2" role="group" aria-label={t('teach_me_for', 'Teach me for\u2026')}>
          {options.map((m) => {
            const selected = minutes === m;
            return (
              <button
                key={m}
                type="button"
                onClick={() => setMinutes(m)}
                aria-pressed={selected}
                className={`rounded-xl px-2 py-2.5 text-sm font-semibold transition ${
                  selected
                    ? 'bg-gold text-[#101828] shadow-sm'
                    : 'border border-ink/15 text-ink hover:border-gold/60 hover:text-gold dark:border-white/15 dark:text-parchment dark:hover:border-gold/60'
                }`}
              >
                {m} {t('minutes', 'min')}
              </button>
            );
          })}
        </div>
      </div>

      {/* Layer */}
      <div key={minutes}>
        <LayerContent layer={layer} />
      </div>

      {/* Quiz */}
      <div>
        <SectionTitle title={t('test_yourself', 'Test yourself')} className="mb-3" />
        <QuizBlock
          questions={(layer.quiz ?? []).slice(layer.quiz && layer.quiz.length > 1 ? 1 : 0)}
          tag={`path-lesson:${lesson.id}:${minutes}min`}
        />
      </div>

      {/* Complete */}
      <Card className="flex items-center justify-between gap-4">
        <span className="text-sm text-slate-600 dark:text-slate-400">
          {t('lesson_complete', 'Finished this lesson?')}
        </span>
        <MarkCompleteButton lessonId={lesson.id} />
      </Card>
    </div>
  );
}
