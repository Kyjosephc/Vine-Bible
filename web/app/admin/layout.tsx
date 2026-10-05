import Link from 'next/link';
import { requireAdmin } from '@/lib/admin';

/**
 * /admin layout — the server-side gate. requireAdmin() redirects anonymous
 * users to /login and 404s signed-in non-admins. Normal users can never
 * reach admin pages or actions; nothing here relies on hiding links.
 */
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin();
  return (
    <main className="mx-auto max-w-4xl px-4 pb-24 pt-6 sm:px-6">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-4 dark:border-white/10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Admin</p>
          <h1 className="font-display text-2xl font-semibold text-ink dark:text-parchment">
            Halo administration
          </h1>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Signed in as {admin.email ?? admin.id}
          </p>
        </div>
        <Link
          href="/"
          className="rounded-xl border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition hover:bg-ink/5 dark:border-white/15 dark:text-parchment dark:hover:bg-white/5"
        >
          ← Back to app
        </Link>
      </header>
      <nav aria-label="Admin sections" className="mt-4 flex flex-wrap gap-2">
        {[
          { href: '/admin', label: 'Overview' },
          { href: '/admin/analytics', label: 'Analytics' },
          { href: '/admin/roles', label: 'Admin roles' },
          { href: '/admin/flags', label: 'Content flags' },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-ink/10 px-4 py-1.5 text-sm text-slate-600 transition hover:border-gold/60 hover:text-ink dark:border-white/10 dark:text-slate-300 dark:hover:text-parchment"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="mt-6">{children}</div>
    </main>
  );
}
