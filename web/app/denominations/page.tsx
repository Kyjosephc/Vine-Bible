import Link from 'next/link';
import { DENOMINATION_ISSUES } from '@/content/denominations';
import { useT } from '@/lib/i18n';
import { Card, SectionTitle } from '@/components/ui';

export default function DenominationsPage() {
  const { t } = useT();

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">
          {t('Where Christians disagree — respectfully')}
        </p>
        <h1 className="font-display text-3xl font-semibold text-ink dark:text-parchment">
          {t('One faith, many traditions')}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
          {t(
            'Christians agree on the core — one God, Jesus Christ crucified and risen, salvation by grace. But sincere, Bible-loving Christians disagree on important questions. These guides present each tradition\u2019s view fairly, in its own terms, with no winners declared. Understanding each other is the first step to loving each other.',
          )}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {DENOMINATION_ISSUES.map((issue) => (
          <Link key={issue.id} href={`/denominations/${issue.id}`}>
            <Card className="h-full transition hover:border-gold/50">
              <h2 className="font-display text-xl font-semibold text-ink dark:text-parchment">
                {issue.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {issue.shortAnswer}
              </p>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                {issue.positions.length} {t('traditions represented')}
              </p>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="bg-gold/5">
        <SectionTitle title={t('How to read these guides')} />
        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 dark:text-slate-300">
          <li>
            {t(
              'Each view is described the way its own thoughtful adherents would recognize it — no strawmen.',
            )}
          </li>
          <li>{t('Scripture references are given so you can check the reasoning yourself.')}</li>
          <li>
            {t(
              'Disagreement among Christians doesn\u2019t mean truth is unknowable — it means these questions deserve your best, humblest thinking.',
            )}
          </li>
        </ul>
      </Card>
    </div>
  );
}
