'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

const STORAGE_KEY = 'halo-onboarding';
const EXEMPT_PREFIXES = ['/onboarding', '/login', '/auth'];

function isLocallyCompleted(): boolean {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    return Boolean((JSON.parse(raw) as { completed?: boolean }).completed);
  } catch {
    return false;
  }
}

export default function OnboardingGate() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    try {
      if (EXEMPT_PREFIXES.some((p) => pathname.startsWith(p))) return;
      if (isLocallyCompleted()) return;

      const check = async () => {
        try {
          const supabase = createClient();
          const { data } = await supabase.auth.getUser();
          const user = data?.user;
          if (!user) {
            router.replace('/onboarding');
            return;
          }
          const { data: profile } = await supabase
            .from('profiles')
            .select('onboarding_completed')
            .eq('id', user.id)
            .maybeSingle();
          if (profile?.onboarding_completed) {
            try {
              window.localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({
                  completed: true,
                  completedAt: new Date().toISOString(),
                }),
              );
            } catch {
              /* ignore */
            }
            return;
          }
          router.replace('/onboarding');
        } catch {
          router.replace('/onboarding');
        }
      };
      void check();
    } catch {
      /* never break the app */
    }
  }, [pathname, router]);

  return null;
}
