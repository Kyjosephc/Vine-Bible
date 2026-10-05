'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { BOOKS } from '@/content/books';
import { PEOPLE } from '@/content/people';
import { PLACES } from '@/content/places';
import { LIFE_TOPICS } from '@/content/life';
import { lookupLexicon } from '@/content/lexicon';
import { FALLBACK_PASSAGES } from '@/content/fallback-passages';
import { bookSlug } from '@/lib/bible';
import { Card, EmptyState, SectionTitle } from '@/components/ui';
import { useT } from '@/lib/i18n';

function safe<T>(fn: () => T, fallback: T): T {
  try {
    return fn();
  } catch {
    return fallback;
  }
}

interface PersonLike {
  id: string;
  name: string;
  role?: string;
}

interface PlaceLike {
  id: string;
  name: string;
  region?: string;
}

interface TopicLike {
  id: string;
  title: string;
  teaches: string;
  passages: { ref: string; note: string }[];
  application: string;
  reflection: string[];
}

export default function SearchPage() {
  const { t } = useT();
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (q.length < 2) return null;
    const books = safe(() => BOOKS.filter((b) => b.name.toLowerCase().includes(q)), []);
    const people = safe(
      () =>
        (PEOPLE as unknown as PersonLike[]).filter(
          (p) => p.name.toLowerCase().includes(q) || (p.role ?? '').toLowerCase().includes(q),
        ),
      [],
    );
    const places = safe(
      () => (PLACES as unknown as PlaceLike[]).filter((p) => p.name.toLowerCase().includes(q)),
      [],
    );
    const topics = safe(
      () =>
        (LIFE_TOPICS as unknown as TopicLike[]).filter(
          (x) => x.title.toLowerCase().includes(q) || x.teaches.toLowerCase().includes(q),
        ),
      [],
    );
    const word = safe(() => lookupLexicon(query.trim()), undefined);
    const passages = Object.values(FALLBACK_PASSAGES).filter(
      (p) => p.text.toLowerCase().includes(q) || p.ref.toLowerCase().includes(q),
    );
    return { books, people, places, topics, word, passages };
  }, [q, query]);

  const hasAny =
    results &&
    (results.books.length > 0 ||
      results.people.length > 0 ||
      results.places.length > 0 ||
      results.topics.length > 0 ||
      results.word ||
      results.passages.length > 0);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="font-display text-3xl font-semibold text-ink dark:text-parchment">
        {t('search_title')}
      </h1>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t('search_placeholder')}
        autoFocus
        className="w-full rounded-2xl border border-ink/15 bg-white px-5 py-3 text-ink placeholder:text-slate-400 focus:border-gold focus:outline-none dark:border-white/15 dark:bg-white/[0.04] dark:text-parchment"
      />

      {!results ? (
        <p className="text-sm text-slate-500 dark:text-slate-400">{t('search_hint')}</p>
      ) : !hasAny ? (
        <EmptyState title={t('search_title')} description={t('no_results')} />
      ) : (
        <>
          {results.books.length > 0 && (
            <section>
              <SectionTitle title={t('search_books')} />
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {results.books.map((b) => (
                  <Link key={b.id} href={`/bible/${bookSlug(b)}`}>
                    <Card className="transition hover:border-gold/50">
                      <p className="font-semibold text-ink dark:text-parchment">{b.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {b.chapters} {t('chapters')}
                      </p>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {results.topics.length > 0 && (
            <section>
              <SectionTitle title={t('search_topics')} />
              <div className="mt-3 space-y-3">
                {results.topics.map((x) => (
                  <details key={x.id} className="group">
                    <Card>
                      <summary className="cursor-pointer list-none">
                        <span className="mr-2 inline-block transition-transform group-open:rotate-90">
                          ▸
                        </span>
                        <span className="font-display text-lg font-semibold text-ink dark:text-parchment">
                          {x.title}
                        </span>
                        <Link
                          href={`/life/${x.id}`}
                          className="ml-3 text-sm font-semibold text-gold hover:underline"
                        >
                          {t('details')} →
                        </Link>
                      </summary>
                      <div className="mt-3 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                        <p className="line-clamp-3">{x.teaches.split('\n\n')[0]}</p>
                        <div>
                          <p className="font-semibold text-gold">{t('key_passages')}</p>
                          <ul className="mt-1 space-y-1">
                            {x.passages.slice(0, 3).map((p) => (
                              <li key={p.ref}>
                                <span className="font-medium">{p.ref}</span>
                                <span className="opacity-75"> — {p.note}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p>
                          <span className="font-semibold text-gold">{t('application')}: </span>
                          <span className="line-clamp-2">{x.application}</span>
                        </p>
                      </div>
                    </Card>
                  </details>
                ))}
              </div>
            </section>
          )}

          {results.passages.length > 0 && (
            <section>
              <SectionTitle title={t('search_passages')} />
              <div className="mt-3 space-y-3">
                {results.passages.map((p) => (
                  <Card key={p.ref} className="border-l-4 border-l-gold">
                    <p className="font-display italic leading-7 text-ink dark:text-parchment">
                      “{p.text}”
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm font-semibold text-gold">{p.ref}</span>
                      <Link
                        href={`/study?minutes=10&ref=${encodeURIComponent(p.ref)}`}
                        className="text-sm font-semibold text-gold hover:underline"
                      >
                        {t('start_study')} →
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {results.people.length > 0 && (
            <section>
              <SectionTitle title={t('search_people')} />
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {results.people.map((p) => (
                  <Link key={p.id} href={`/people/${p.id}`}>
                    <Card className="transition hover:border-gold/50">
                      <p className="font-semibold text-ink dark:text-parchment">{p.name}</p>
                      {p.role ? (
                        <p className="text-xs text-slate-500 dark:text-slate-400">{p.role}</p>
                      ) : null}
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {results.places.length > 0 && (
            <section>
              <SectionTitle title={t('search_places')} />
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {results.places.map((p) => (
                  <Link key={p.id} href="/places">
                    <Card className="transition hover:border-gold/50">
                      <p className="font-semibold text-ink dark:text-parchment">{p.name}</p>
                      {p.region ? (
                        <p className="text-xs text-slate-500 dark:text-slate-400">{p.region}</p>
                      ) : null}
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {results.word && (
            <section>
              <SectionTitle title={t('search_words')} />
              <Card className="mt-3">
                <p className="font-semibold text-gold">
                  {(results.word as { term?: string }).term ?? query.trim()}
                </p>
                <p className="mt-1 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  {(results.word as { definition?: string }).definition ?? ''}
                </p>
              </Card>
            </section>
          )}
        </>
      )}
    </div>
  );
}
