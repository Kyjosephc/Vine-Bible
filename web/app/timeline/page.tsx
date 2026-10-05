'use client';

import { useMemo, useState } from 'react';
import { TIMELINE } from '@/content/timeline';
import { useT } from '@/lib/i18n';
import { Badge, Card, EmptyState } from '@/components/ui';

interface TimelineEventLike {
  id: string;
  title: string;
  date: string;
  era: string;
  description: string;
  ref?: string;
}

function safeTimeline(): TimelineEventLike[] {
  try {
    const raw = TIMELINE as unknown;
    if (Array.isArray(raw)) return raw as TimelineEventLike[];
    return [];
  } catch {
    return [];
  }
}

export default function TimelinePage() {
  const { t } = useT();
  const events = useMemo(() => safeTimeline(), []);
  const [era, setEra] = useState<string>('all');
  const [selected, setSelected] = useState<TimelineEventLike | null>(null);

  const eras = useMemo(() => {
    const set = new Set(events.map((e) => e.era).filter(Boolean));
    return ['all', ...set];
  }, [events]);

  const filtered = era === 'all' ? events : events.filter((e) => e.era === era);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="font-display text-3xl font-semibold text-ink dark:text-parchment">
        {t('timeline_title')}
      </h1>

      {eras.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {eras.map((e) => (
            <button
              key={e}
              type="button"
              onClick={() => setEra(e)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition ${
                era === e
                  ? 'bg-gold text-ink'
                  : 'border border-ink/15 text-ink hover:border-gold/60 dark:border-white/15 dark:text-parchment'
              }`}
            >
              {e === 'all' ? t('all_lengths') : e}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <EmptyState title={t('timeline_title')} description={t('no_results')} />
      ) : (
        <ol className="relative space-y-4 border-l-2 border-gold/30 pl-6">
          {filtered.map((event) => (
            <li key={event.id} className="relative">
              <span
                aria-hidden
                className="absolute -left-[31px] top-4 h-3 w-3 rounded-full border-2 border-gold bg-parchment dark:bg-ink"
              />
              <button
                type="button"
                onClick={() => setSelected(event)}
                className="w-full text-left"
              >
                <Card className="transition hover:border-gold/50">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge>{event.date}</Badge>
                    {event.era ? <span className="text-xs text-slate-500 dark:text-slate-400">{event.era}</span> : null}
                  </div>
                  <h2 className="font-display mt-1 text-lg font-semibold text-ink dark:text-parchment">
                    {event.title}
                  </h2>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                    {event.description}
                  </p>
                </Card>
              </button>
            </li>
          ))}
        </ol>
      )}

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 p-4 sm:items-center"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg">
            <Card>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{selected.date}</Badge>
                {selected.era ? <Badge>{selected.era}</Badge> : null}
                {selected.ref ? <Badge>{selected.ref}</Badge> : null}
              </div>
              <h2 className="font-display mt-2 text-2xl font-semibold text-ink dark:text-parchment">
                {selected.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {selected.description}
              </p>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="mt-4 rounded-xl border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition hover:bg-ink/5 dark:border-white/15 dark:text-parchment dark:hover:bg-white/5"
              >
                {t('close')}
              </button>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
