import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBook } from '@/content/books';
import { bookSlug } from '@/lib/bible';
import { useT } from '@/lib/i18n';
import { Badge, Card, SectionTitle } from '@/components/ui';

function safeGetBook(id: string) {
  try {
    return getBook(id);
  } catch {
    return undefined;
  }
}

export default function BookPage({ params }: { params: { book: string } }) {
  const { t } = useT();
  const book = safeGetBook(params.book);
  if (!book) notFound();
  const slug = bookSlug(book);

  const meta: { label: string; value: string }[] = [
    { label: t('author'), value: book.author },
    { label: t('date'), value: book.date },
    { label: t('audience'), value: book.audience },
    { label: t('purpose'), value: book.purpose },
  ];

  return (
    <div className="space-y-6">
      <div>
        <Link href="/bible" className="text-sm text-gold hover:underline">
          ← {t('books')}
        </Link>
        <h1 className="font-display mt-2 text-3xl font-semibold text-ink dark:text-parchment">
          {book.name}
        </h1>
        <p className="mt-2 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
          {book.overview}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {meta.map((m) => (
          <Card key={m.label}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">{m.label}</p>
            <p className="mt-1 text-sm leading-6 text-ink dark:text-parchment">{m.value}</p>
          </Card>
        ))}
      </div>

      <Card>
        <SectionTitle title={t('themes')} />
        <div className="mt-3 flex flex-wrap gap-2">
          {book.themes.map((th) => (
            <Badge key={th}>{th}</Badge>
          ))}
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <SectionTitle title={t('key_people')} />
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700 dark:text-slate-300">
            {book.keyPeople.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <SectionTitle title={t('key_events')} />
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700 dark:text-slate-300">
            {book.keyEvents.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </Card>
      </div>

      <Card>
        <SectionTitle title={t('structure')} />
        <ul className="mt-3 space-y-2">
          {book.structure.map((s) => (
            <li key={s.range} className="flex gap-3 text-sm">
              <span className="w-16 shrink-0 font-semibold text-gold">{s.range}</span>
              <span className="text-slate-700 dark:text-slate-300">{s.title}</span>
            </li>
          ))}
        </ul>
      </Card>

      <section>
        <SectionTitle title={t('select_chapter')} />
        <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-8 md:grid-cols-10">
          {Array.from({ length: book.chapters }, (_, i) => i + 1).map((ch) => (
            <Link
              key={ch}
              href={`/bible/${slug}/${ch}`}
              className="rounded-xl border border-ink/10 bg-white py-2.5 text-center text-sm font-medium text-ink transition hover:border-gold hover:bg-gold/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-parchment"
            >
              {ch}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
