import Link from 'next/link';
import { APOLOGETICS_TOPICS } from '@/content/apologetics';
import { useT } from '@/lib/i18n';
import { Badge, Card, SectionTitle } from '@/components/ui';

export default function ApologeticsPage() {
  const { t } = useT();

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">
          {t('Honest answers to hard questions')}
        </p>
        <h1 className="font-display text-3xl font-semibold text-ink dark:text-parchment">
          {t('Defending the Faith')}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
          {t(
            'Christianity has nothing to fear from honest questions. These topics walk through the evidence, name the uncertainties, and say plainly what the arguments do and don\u2019t prove — with gentleness and respect.',
          )}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {APOLOGETICS_TOPICS.map((topic) => (
          <Link key={topic.id} href={`/apologetics/${topic.id}`}>
            <Card className="h-full transition hover:border-gold/50">
              <h2 className="font-display text-xl font-semibold text-ink dark:text-parchment">
                {topic.question}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {topic.shortAnswer}
              </p>
              <p className="mt-3 text-sm font-semibold text-gold">{t('Explore')} →</p>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="bg-gold/5">
        <SectionTitle title={t('A note on how to read these')} />
        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 dark:text-slate-300">
          <li>
            {t(
              'Evidence is labeled as evidence; interpretations are labeled as interpretations. They are not the same thing.',
            )}
          </li>
          <li>
            {t(
              'Every topic names honest uncertainties. If an argument claimed to prove everything, it would prove nothing.',
            )}
          </li>
          <li>{t('Start with the question that actually troubles you — not the one you think you should ask.')}</li>
        </ul>
      </Card>
    </div>
  );
}
