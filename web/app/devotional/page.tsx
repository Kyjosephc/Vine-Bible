import Link from 'next/link';
import { DEVOTIONALS } from '@/content/devotionals';
import { useT } from '@/lib/i18n';
import { Badge, Card, EmptyState } from '@/components/ui';
import { difficultyForMinutes } from '@/lib/study';
import { SaveButton } from '@/components/SaveButton';

interface DevotionalLike {
  id: string;
  title: string;
  ref: string;
  topic: string;
  difficulty: string;
  minutes?: number;
}

const FILTERS = ['all', '5', '10', '15', '30'] as const;

export default function DevotionalPage({
  searchParams,
}: {
  searchParams?: { minutes?: string };
}) {
  const { t } = useT();
  const active = searchParams?.minutes ?? 'all';

  let list: DevotionalLike[] = [];
  try {
    list = (DEVOTIONALS ?? []) as unknown as DevotionalLike[];
  } catch {
    list = [];
  }
  const filtered =
    active === 'all' ? list : list.filter((d) => String(d.minutes ?? 10) === active);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink dark:text-parchment">
          {t('devotionals')}
        </h1>
      </div>

      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const on = active === f;
          return (
            <Link
              key={f}
              href={f === 'all' ? '/devotional' : `/devotional?minutes=${f}`}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                on
                  ? 'bg-gold text-ink'
                  : 'border border-ink/15 text-ink hover:border-gold/60 dark:border-white/15 dark:text-parchment'
              }`}
            >
              {f === 'all' ? t('all_lengths') : `${f} ${t('minutes')}`}
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <EmptyState title={t('devotionals')} description={t('no_results')} />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {filtered.map((d) => (
            <Card key={d.id} className="transition hover:border-gold/50">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{d.topic}</Badge>
                <Badge>{difficultyForMinutes(d.minutes ?? 15)}</Badge>
                {d.minutes ? <Badge>{d.minutes} {t('minutes')}</Badge> : null}
              </div>
              <Link href={`/devotional/${d.id}`}>
                <h2 className="font-display mt-2 text-xl font-semibold text-ink hover:underline dark:text-parchment">
                  {d.title}
                </h2>
              </Link>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-medium text-gold">{d.ref}</span>
                <SaveButton table="saved_devotionals" row={{ devotional_id: d.id }} label={t('save')} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
