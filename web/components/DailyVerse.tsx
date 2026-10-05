'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { FALLBACK_PASSAGES, FALLBACK_REFS } from '@/content/fallback-passages';
import { useT } from '@/lib/i18n';
import { Card, SectionTitle } from './ui';

export function DailyVerse() {
  const { t } = useT();
  const [copied, setCopied] = useState(false);

  const entry = useMemo(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0).getTime();
    const dayOfYear = Math.floor((now.getTime() - start) / 86400000);
    const key = FALLBACK_REFS[dayOfYear % FALLBACK_REFS.length];
    return FALLBACK_PASSAGES[key];
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`"${entry.text}" — ${entry.ref} (WEB)`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — ignore
    }
  };

  return (
    <section aria-label={t('daily_verse')}>
      <SectionTitle title={t('daily_verse')} />
      <Card className="mt-3 border-l-4 border-l-gold">
        <p className="font-display text-lg italic leading-8 text-ink dark:text-parchment">
          “{entry.text}”
        </p>
        <div className="mt-4 flex items-center justify-between">
          <Link
            href={`/study?minutes=10&ref=${encodeURIComponent(entry.ref)}`}
            className="text-sm font-semibold text-gold hover:underline"
          >
            {entry.ref}
          </Link>
          <button
            type="button"
            onClick={copy}
            className="rounded-lg border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink transition hover:bg-ink/5 dark:border-white/15 dark:text-parchment dark:hover:bg-white/5"
          >
            {copied ? t('copied') : t('copy_link')}
          </button>
        </div>
      </Card>
    </section>
  );
}
