'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';

export function UserMenu() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (!user) return null;

  const initial = (user.email ?? '?').charAt(0).toUpperCase();

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setOpen(false);
    router.refresh();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="User menu"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-gold font-semibold text-ink"
      >
        {initial}
      </button>
      {open && (
        <div className="absolute right-0 z-10 mt-2 w-48 rounded-lg border border-white/10 bg-ink p-2 shadow-xl">
          <p className="truncate px-2 py-1 text-xs text-slate-400">{user.email}</p>
          <Link
            href="/settings"
            onClick={() => setOpen(false)}
            className="block rounded px-2 py-1.5 text-sm text-slate-200 hover:bg-white/10"
          >
            Settings
          </Link>
          <button
            onClick={signOut}
            className="block w-full rounded px-2 py-1.5 text-left text-sm text-slate-200 hover:bg-white/10"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
