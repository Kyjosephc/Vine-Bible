'use client';

import { useMemo, useState } from 'react';
import { TIMELINE } from '@/content/timeline';
import type { TimelineEra, TimelineEvent } from '@/content/timeline';
import { useT } from '@/lib/i18n';
import { Badge, Card, EmptyState } from '@/components/ui';

function safeTimeline(): TimelineEra[] {
  try {
    return Array.isArray(TIMELINE) ? (TIMELINE as TimelineEra[]) : [];
  } catch {
    return [];
  }
}

export default function TimelinePage() {
  const { t } = useT();
  const eras = useMemo(() => safeTimeline(), []);
  const [eraId, setEraId] = useState<string>('all');
  const [openEra, setOpenEra] = useState<string | null>(eras[0]?.id ?? null);
  const [selected, setSelected] = useState<(TimelineEvent & { era: string }) | null>(null);

  const visible = eraId === 'all' ? eras : eras.filter((e) => e.id === eraId);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink dark:text-parchment">
          {t('timeline_title')}
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          {t('The story of Scripture, era by era — tap an era to explore its key moments.')}
        </p>
      </div>

      {eras.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {['all', ...eras.map((e) => e.id)].map((id) => {
            const label = id === 'all' ? t('all_lengths') : eras.find((e) => e.id === id)?.title ?? id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setEraId(id)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  eraId === id
                    ? 'bg-gold text-ink'
                    : 'border border-ink/15 text-ink hover:border-gold/60 dark:border-white/15 dark:text-parchment'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}

      {visible.length === 0 ? (
        <EmptyState title={t('timeline_title')} description={t('no_results')} />
      ) : (
        <div className="space-y-3">
          {visible.map((era) => {
            const open = openEra === era.id;
            return (
              <Card key={era.id} className="!p-0 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenEra(open ? null : era.id)}
                  className="block w-full px-5 py-4 text-left"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                        {era.period}
                      </p>
                      <h2 className="font-display mt-0.5 text-xl font-semibold text-ink dark:text-parchment">
                        {era.title}
                      </h2>
                      <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                        {era.description}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 text-gold transition-transform ${open ? 'rotate-90' : ''}`}
                    >
                      ▸
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    {era.events.length} {t('events')}
                  </p>
                </button>
                {open && (
                  <ol className="space-y-3 border-t border-ink/10 px-5 py-4 dark:border-white/10">
                    {era.events.map((event, i) => (
                      <li key={`${era.id}-${i}`} className="relative pl-5">
                        <span
                          aria-hidden
                          className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full border-2 border-gold bg-parchment dark:bg-ink"
                        />
                        <button
                          type="button"
                          onClick={() => setSelected({ ...event, era: era.title })}
                          className="w-full text-left"
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge>{event.date}</Badge>
                            {event.ref ? (
                              <span className="text-xs font-medium text-gold">{event.ref}</span>
                            ) : null}
                          </div>
                          <p className="mt-1 font-semibold text-ink dark:text-parchment">
                            {event.title}
                          </p>
                          <p className="line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                            {event.description}
                          </p>
                        </button>
                      </li>
                    ))}
                  </ol>
                )}
              </Card>
            );
          })}
        </div>
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
                <Badge>{selected.era}</Badge>
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
