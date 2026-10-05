'use client';

import Link from 'next/link';
import { useT } from '@/lib/i18n';
import { Card, SectionTitle } from '@/components/ui';

function useTr() {
  const { t } = useT();
  // i18n keys are plain English sentences: t() returns the key itself when
  // untranslated, so the UI degrades gracefully to English.
  return (key: string, fallback?: string): string => t(key, fallback);
}

interface HubItem {
  href: string;
  key: string;
  title: string;
  hint: string;
}

const ITEMS: HubItem[] = [
  { href: '/journal', key: 'journal', title: 'Journal', hint: 'Private notes on your reading' },
  { href: '/prayer', key: 'prayer', title: 'Prayer', hint: 'Requests and answered prayers' },
  { href: '/plans', key: 'plans', title: 'Reading Plans', hint: 'Bible in a year, chronological, topical' },
  { href: '/groups', key: 'groups', title: 'Groups', hint: 'Read and discuss together' },
  { href: '/verse-image', key: 'verseImage', title: 'Verse Images', hint: 'Shareable verse graphics' },
  { href: '/dashboard', key: 'dashboard', title: 'Leader Dashboard', hint: 'Group health at a glance' },
  { href: '/tutor', key: 'tutor', title: 'Bible Tutor', hint: 'Ask questions about Scripture' },
  { href: '/apologetics', key: 'apologetics', title: 'Defending the Faith', hint: 'Honest answers to hard questions' },
  { href: '/denominations', key: 'denominations', title: 'One Faith, Many Traditions', hint: 'Where Christians differ, explained fairly' },
  { href: '/review', key: 'review', title: 'Review', hint: 'Spaced-repetition flashcards' },
  { href: '/memory', key: 'memory', title: 'Scripture Memory', hint: 'Hide God\u2019s word in your heart' },
  { href: '/progress', key: 'progress', title: 'My Progress', hint: 'Stats, badges, and next steps' },
  { href: '/quizzes', key: 'quizzes', title: 'Quizzes', hint: 'Test what you have learned' },
  { href: '/settings', key: 'settings', title: 'Settings', hint: 'Profile, language, notifications' },
  { href: '/login', key: 'login', title: 'Log in', hint: 'Sync across your devices' },
];

export default function MorePage() {
  const tr = useTr();

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <SectionTitle>{tr('More')}</SectionTitle>
      <p className="mt-2 text-sm text-slate-400">
        {tr('Everything else in Halo.')}
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {ITEMS.map((item) => (
          <Link key={item.href} href={item.href} className="block">
            <Card className="h-full p-4 transition hover:border-[#C9A227]/50">
              <h2 className="font-display text-lg text-slate-100">
                {tr(item.title)}
              </h2>
              <p className="mt-1 text-sm text-slate-400">{tr(item.hint)}</p>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
