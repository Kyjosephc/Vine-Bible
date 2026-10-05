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
  description?: string;
  events: JesusEvent[];
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
            <h2 className="font-display text-2xl font-semibold text-gold">{section.title}</h2>
            {section.description ? (
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
          </section>
        ))
      )}
    </div>
  );
}
