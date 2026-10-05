'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { useT } from '@/lib/i18n';

export default function LoginPage() {
  const { t } = useT();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const check = async () => {
      const supabase = createClient();
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) router.replace('/');
    };
    void check();
  }, [router]);

  const redirectTo = () =>
    `${window.location.origin}/auth/callback`;

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: redirectTo() },
      });
      if (error) throw error;
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send magic link.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: redirectTo() },
    });
    if (error) setError(error.message);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-4">
      <div className="w-full max-w-md rounded-2xl border border-gold/40 bg-ink p-8 shadow-xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-gold-400">
          {t('app.name')}
        </h1>
        <p className="mb-6 text-center text-sm text-slate-300">
          {t('auth.signInPrompt')}
        </p>

        {sent ? (
          <p className="rounded-lg bg-white/5 p-4 text-center text-sm text-slate-200">
            {t('auth.checkEmail')}
          </p>
        ) : (
          <form onSubmit={handleMagicLink} className="space-y-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('auth.emailPlaceholder')}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-slate-100 placeholder:text-slate-400 focus:border-gold focus:outline-none"
            />
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-gold px-4 py-2 font-semibold text-ink transition hover:bg-amber-400 disabled:opacity-50"
            >
              {loading ? t('auth.sending') : t('auth.sendMagicLink')}
            </button>
          </form>
        )}

        <div className="my-6 flex items-center gap-3 text-xs text-slate-400">
          <span className="h-px flex-1 bg-white/10" />
          {t('auth.or')}
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <button
          onClick={handleGoogle}
          className="w-full rounded-lg border border-slate-400 bg-white px-4 py-2 font-medium text-slate-800 transition hover:bg-slate-100"
        >
          {t('auth.signInWithGoogle')}
        </button>
        <p className="mt-3 text-center text-xs text-slate-500">
          {t('auth.googleNote')}
        </p>
      </div>
    </main>
  );
}
