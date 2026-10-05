'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { PEOPLE } from '@/content/people';
import { useT } from '@/lib/i18n';
import { Card, EmptyState } from '@/components/ui';

interface PersonLike {
  id: string;
  name: string;
  role?: string;
  description?: string;
  bio?: string;
}

function safePeople(): PersonLike[] {
  try {
    return (PEOPLE ?? []) as unknown as PersonLike[];
  } catch {
    return [];
  }
}

export default function PeoplePage() {
  const { t } = useT();
  const [query, setQuery] = useState('');
  const people = useMemo(() => safePeople(), []);
  const q = query.trim().toLowerCase();

  const filtered =
    q.length === 0
      ? people
      : people.filter(
          (p) => p.name.toLowerCase().includes(q) || (p.role ?? '').toLowerCase().includes(q),
        );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink dark:text-parchment">
          {t('people_title')}
        </h1>
      </div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t('people_search')}
        className="w-full max-w-md rounded-2xl border border-ink/15 bg-white px-5 py-3 text-ink placeholder:text-slate-400 focus:border-gold focus:outline-none dark:border-white/15 dark:bg-white/[0.04] dark:text-parchment"
      />
      {filtered.length === 0 ? (
        <EmptyState title={t('people_title')} description={t('no_results')} />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link key={p.id} href={`/people/${p.id}`}>
              <Card className="h-full transition hover:border-gold/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-display text-lg font-semibold text-gold">
                  {p.name.charAt(0)}
                </div>
                <h2 className="font-display mt-2 text-lg font-semibold text-ink dark:text-parchment">
                  {p.name}
                </h2>
                {p.role ? (
                  <p className="text-xs font-medium text-gold">{p.role}</p>
                ) : null}
                {p.description || p.bio ? (
                  <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                    {p.description ?? p.bio}
                  </p>
                ) : null}
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
