import { PLACES } from '@/content/places';
import type { Place } from '@/content/places';
import { useT } from '@/lib/i18n';
import { Badge, Card, EmptyState } from '@/components/ui';

export default function PlacesPage() {
  const { t } = useT();

  let places: Place[] = [];
  try {
    places = PLACES ?? [];
  } catch {
    places = [];
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink dark:text-parchment">
          {t('places_title')}
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          {t('Walk the lands of the Bible — each place with its story and key passages.')}
        </p>
      </div>

      {places.length === 0 ? (
        <EmptyState title={t('places_title')} description={t('no_results')} />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {places.map((place) => {
            const mapUrl = `https://www.openstreetmap.org/search?query=${encodeURIComponent(
              place.mapQuery ?? place.name,
            )}`;
            return (
              <Card key={place.id} className="flex h-full flex-col">
                <h2 className="font-display text-xl font-semibold text-ink dark:text-parchment">
                  {place.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {place.description}
                </p>
                <p className="mt-2 border-l-2 border-gold/50 pl-3 text-sm italic leading-6 text-slate-600 dark:text-slate-400">
                  {place.significance}
                </p>
                {place.keyPassages.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {place.keyPassages.slice(0, 4).map((ref) => (
                      <Badge key={ref}>{ref}</Badge>
                    ))}
                  </div>
                )}
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-lg border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink transition hover:border-gold hover:bg-gold/10 dark:border-white/15 dark:text-parchment"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {t('view_map')}
                </a>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
