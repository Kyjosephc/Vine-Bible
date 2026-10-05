'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { User } from '@supabase/supabase-js';
import { useT } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/client';
import { UserMenu } from '@/components/auth/UserMenu';

function HomeIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
    </svg>
  );
}

function LearnIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

function BibleIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function StudyIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function MoreIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  );
}

const TABS = [
  { href: '/', key: 'nav_home', Icon: HomeIcon },
  { href: '/learn', key: 'nav_learn', Icon: LearnIcon },
  { href: '/bible', key: 'nav_bible', Icon: BibleIcon },
  { href: '/study', key: 'nav_search', Icon: StudyIcon },
  { href: '/more', key: 'nav_more', Icon: MoreIcon },
] as const;

function isActive(pathname: string, href: string): boolean {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const { t } = useT();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let cancelled = false;
    try {
      const supabase = createClient();
      supabase.auth
        .getUser()
        .then(({ data }) => {
          if (!cancelled) setUser(data.user);
        })
        .catch(() => {});
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        if (!cancelled) setUser(session?.user ?? null);
      });
      return () => {
        cancelled = true;
        subscription.unsubscribe();
      };
    } catch {
      return undefined;
    }
  }, []);

  return (
    <>
      {/* Desktop top bar */}
      <header className="sticky top-0 z-40 hidden border-b border-ink/10 bg-parchment/90 backdrop-blur md:block dark:border-white/10 dark:bg-ink/90">
        <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="font-display text-xl font-semibold tracking-tight text-ink dark:text-parchment">
            Lumen <span className="text-gold">Bible</span>
          </Link>
          <ul className="flex items-center gap-1">
            {TABS.map(({ href, key, Icon }) => {
              const active = isActive(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors ${
                      active
                        ? 'bg-ink text-parchment dark:bg-gold dark:text-ink'
                        : 'text-slate-600 hover:bg-ink/5 dark:text-slate-300 dark:hover:bg-white/10'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {t(key)}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-3">
            {user ? (
              <UserMenu />
            ) : (
              <Link
                href="/login"
                className="rounded-xl bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-110"
              >
                {t('login')}
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile slim header */}
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-parchment/90 backdrop-blur md:hidden dark:border-white/10 dark:bg-ink/90">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight text-ink dark:text-parchment">
            Lumen <span className="text-gold">Bible</span>
          </Link>
          {user ? (
            <UserMenu />
          ) : (
            <Link href="/login" className="rounded-lg bg-gold px-3 py-1.5 text-xs font-semibold text-ink">
              {t('login')}
            </Link>
          )}
        </div>
      </header>

      {/* Mobile bottom tab bar */}
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-parchment/95 backdrop-blur md:hidden dark:border-white/10 dark:bg-ink/95"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <ul className="grid grid-cols-5">
          {TABS.map(({ href, key, Icon }) => {
            const active = isActive(pathname, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors ${
                    active ? 'text-gold' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                  {t(key)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
