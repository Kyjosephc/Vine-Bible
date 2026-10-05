import Link from 'next/link';
import { LIFE_TOPICS } from '@/content/life';
import { useT } from '@/lib/i18n';
import { Card, SectionTitle } from '@/components/ui';

export default function LifePage() {
  const { t } = useT();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink dark:text-parchment">
          {t('life_topics')}
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{t('context')}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {LIFE_TOPICS.map((topic) => (
          <Link key={topic.id} href={`/life/${topic.id}`}>
            <Card className="h-full transition hover:border-gold/50">
              <h2 className="font-display text-xl font-semibold text-ink dark:text-parchment">
                {topic.title}
              </h2>
              <p className="mt-1 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {topic.teaches.split('\n\n')[0]}
              </p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                {topic.passages.length} {t('key_passages').toLowerCase()}
              </p>
            </Card>
          </Link>
        ))}
      </div>
      <SectionTitle title={t('search_title')} />
    </div>
  );
}
