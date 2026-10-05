import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDenominationIssue } from '@/content/denominations';
import { useT } from '@/lib/i18n';
import { Card, SectionTitle } from '@/components/ui';

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split('\n\n').map((p, i) => (
        <p key={i} className="mb-3 leading-7 text-slate-700 dark:text-slate-300">
          {p}
        </p>
      ))}
    </>
  );
}

export default function DenominationIssuePage({ params }: { params: { issue: string } }) {
  const { t } = useT();
  const issue = getDenominationIssue(params.issue);
  if (!issue) notFound();

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <Link href="/denominations" className="text-sm text-gold hover:underline">
          ← {t('One faith, many traditions')}
        </Link>
        <h1 className="font-display mt-2 text-3xl font-semibold text-ink dark:text-parchment">
          {issue.title}
        </h1>
        <p className="mt-3 rounded-xl bg-gold/10 px-4 py-3 text-sm font-medium leading-7 text-ink dark:text-parchment">
          {issue.shortAnswer}
        </p>
      </div>

      <Card>
        <div className="mt-1">
          <Paragraphs text={issue.intro} />
        </div>
      </Card>

      <div>
        <SectionTitle title={t('What the traditions believe')} className="mb-3" />
        <div className="space-y-3">
          {issue.positions.map((p) => (
            <details
              key={p.tradition}
              className="group rounded-2xl border border-ink/10 bg-white dark:border-white/10 dark:bg-white/[0.04]"
            >
              <summary className="cursor-pointer list-none px-5 py-4">
                <span className="mr-2 inline-block transition-transform group-open:rotate-90">▸</span>
                <span className="font-display text-lg font-semibold text-ink dark:text-parchment">
                  {p.tradition}
                </span>
                <span className="mt-1 block pl-6 text-sm leading-6 text-slate-600 dark:text-slate-400 line-clamp-2">
                  {p.view}
                </span>
              </summary>
              <div className="space-y-3 px-5 pb-5 pl-11 text-sm leading-7 text-slate-700 dark:text-slate-300">
                <p>
                  <span className="font-semibold text-gold">{t('The view')}: </span>
                  {p.view}
                </p>
                <p>
                  <span className="font-semibold text-gold">{t('Why they believe it')}: </span>
                  {p.why}
                </p>
                <p>
                  <span className="font-semibold text-gold">{t('Key Scriptures')}: </span>
                  {p.scripture.join(' · ')}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <Card>
        <SectionTitle title={t('How this disagreement arose')} />
        <div className="mt-3">
          <Paragraphs text={issue.history} />
        </div>
      </Card>

      <Card className="border-l-4 border-l-gold">
        <SectionTitle title={t('Common ground')} />
        <div className="mt-3">
          <Paragraphs text={issue.commonGround} />
        </div>
      </Card>

      <Card className="bg-gold/5">
        <SectionTitle title={t('Reflect')} />
        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {issue.reflection.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
