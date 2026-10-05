import Link from 'next/link';
import { BOOKS } from '@/content/books';
import { bookSlug } from '@/lib/bible';
import { useT } from '@/lib/i18n';
import { Card, SectionTitle } from '@/components/ui';

export default function BiblePage() {
  const { t } = useT();
  const ot = BOOKS.filter((b) => b.testament === 'OT');
  const nt = BOOKS.filter((b) => b.testament === 'NT');

  const renderGroup = (title: string, books: typeof BOOKS) => (
    <section>
      <SectionTitle title={title} />
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {books.map((b) => (
          <Link key={b.id} href={`/bible/${bookSlug(b)}`}>
            <Card className="h-full transition hover:border-gold/50">
              <h3 className="font-display text-lg font-semibold text-ink dark:text-parchment">
                {b.name}
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {b.chapters} {t('chapters')}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink dark:text-parchment">
          {t('books')}
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{t('select_book')}</p>
      </div>
      {renderGroup(t('old_testament'), ot)}
      {renderGroup(t('new_testament'), nt)}
    </div>
  );
}
