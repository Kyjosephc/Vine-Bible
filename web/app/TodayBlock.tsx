// "Today" block for the home dashboard: Scripture + short teaching +
// one question + prayer + reflection, sized to the user's time preference.
// The question is a real interactive reflection (saved locally); everything
// else is calm and skimmable so a 5-minute day still feels complete.
'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/i18n';
import { InteractiveQuiz, type InteractiveQuestion } from '@/components/interactive';
import { Badge, Card, SectionTitle } from '@/components/ui';

export interface TodayDevotional {
  id: string;
  title: string;
  topic: string;
  ref: string;
  passageText: string;
  explanation: string;
  prayer: string;
  reflection: string[];
  minutes: number;
}

/** First ~two sentences, so the teaching stays short. */
function shortTeaching(text: string): string {
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  const two = sentences.slice(0, 2).join(' ');
  return two.length > 320 ? `${two.slice(0, 317)}…` : two;
}

export function TodayBlock({ devotional }: { devotional: TodayDevotional | null }) {
  const { t } = useT();

  const question: InteractiveQuestion | null = useMemo(() => {
    if (!devotional || devotional.reflection.length === 0) return null;
    return {
      id: `today-${devotional.id}`,
      kind: 'reflection',
      prompt: devotional.reflection[0],
      answer: '',
      explanation: t('There is no wrong answer here — honest reflection is the point.'),
    };
  }, [devotional, t]);

  if (!devotional) return null;

  return (
    <section aria-label={t('Today')}>
      <SectionTitle title={t('Today')} />
      <div className="mt-3 space-y-4">
        {/* Scripture */}
        <Card className="border-l-4 border-l-gold">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{devotional.topic}</Badge>
            <Badge>
              {devotional.minutes} {t('min')}
            </Badge>
          </div>
          <h2 className="font-display mt-2 text-xl font-semibold text-ink dark:text-parchment">
            {devotional.title}
          </h2>
          <p className="mt-1 text-sm font-semibold text-gold">{devotional.ref}</p>
          <p className="font-display mt-3 text-[17px] italic leading-8 text-ink dark:text-parchment">
            &ldquo;{devotional.passageText}&rdquo;
          </p>
        </Card>

        {/* Short teaching */}
        <Card>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            {t('A thought for today')}
          </p>
          <p className="mt-2 text-[15px] leading-8 text-slate-700 dark:text-slate-300">
            {shortTeaching(devotional.explanation)}
          </p>
        </Card>

        {/* One question */}
        {question && (
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">
              {t('One question')}
            </p>
            <InteractiveQuiz questions={[question]} onComplete={() => {}} compact />
          </div>
        )}

        {/* Prayer */}
        <div className="rounded-2xl bg-[#101828] p-6 dark:border dark:border-gold/30">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">{t('Prayer')}</p>
          <p className="font-display mt-3 text-[16px] italic leading-8 text-parchment">
            {devotional.prayer}
          </p>
        </div>

        <Link
          href={`/study?minutes=${devotional.minutes}&seed=${encodeURIComponent(devotional.id)}`}
          className="inline-flex items-center rounded-xl border border-gold/60 px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-gold/10 dark:text-gold"
        >
          {t('Study this passage deeper')} →
        </Link>
      </div>
    </section>
  );
}
