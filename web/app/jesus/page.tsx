import Link from 'next/link';
import { JESUS_PATH } from '@/content/jesus';
import { useT } from '@/lib/i18n';
import { Card, EmptyState } from '@/components/ui';

interface JesusEvent {
  id?: string;
  title: string;
  ref?: string;
  description: string;
}

interface JesusSection {
  id: string;
  title: string;
  period?: string;
  description?: string;
  summary?: string;
  events: JesusEvent[];
  keyPassages?: string[];
  reflection?: string[];
}

export default function JesusPage() {
  const { t } = useT();

  let sections: JesusSection[] = [];
  try {
    sections = (JESUS_PATH ?? []) as unknown as JesusSection[];
  } catch {
    sections = [];
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink dark:text-parchment">
          {t('jesus_title')}
        </h1>
      </div>

      {sections.length === 0 ? (
        <EmptyState title={t('jesus_title')} description={t('no_results')} />
      ) : (
        sections.map((section) => (
          <section key={section.id} aria-label={section.title}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              {section.period}
            </p>
            <h2 className="font-display mt-0.5 text-2xl font-semibold text-ink dark:text-parchment">
              {section.title}
            </h2>
            {section.summary ? (
              <div className="mt-2 max-w-3xl space-y-2">
                {section.summary.split('\n\n').map((p, i) => (
                  <p key={i} className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {p}
                  </p>
                ))}
              </div>
            ) : section.description ? (
              <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {section.description}
              </p>
            ) : null}
            <ol className="relative mt-5 space-y-5 border-l-2 border-gold/30 pl-6">
              {section.events.map((event, i) => (
                <li key={event.id ?? `${section.id}-${i}`} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-gold bg-parchment dark:bg-ink"
                  />
                  <Card>
                    <h3 className="font-display text-lg font-semibold text-ink dark:text-parchment">
                      {event.title}
                    </h3>
                    {event.ref ? (
                      <Link
                        href={`/study?minutes=10&ref=${encodeURIComponent(event.ref)}`}
                        className="mt-0.5 inline-block text-sm font-medium text-gold hover:underline"
                      >
                        {event.ref}
                      </Link>
                    ) : null}
                    <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                      {event.description}
                    </p>
                  </Card>
                </li>
              ))}
            </ol>
            {(section.keyPassages?.length ?? 0) > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {section.keyPassages!.map((ref) => (
                  <Link
                    key={ref}
                    href={`/study?minutes=10&ref=${encodeURIComponent(ref)}`}
                    className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-ink transition hover:bg-gold/20 dark:text-gold"
                  >
                    {ref}
                  </Link>
                ))}
              </div>
            )}
            {(section.reflection?.length ?? 0) > 0 && (
              <Card className="mt-4 bg-gold/5">
                <p className="text-sm font-semibold text-gold">{t('Reflect')}</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  {section.reflection!.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </Card>
            )}
          </section>
        ))
      )}
    </div>
  );
}
