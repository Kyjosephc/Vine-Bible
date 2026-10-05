'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { createClient } from '@/lib/supabase/client';

interface KidsContextValue {
  kids: boolean;
  setKids: (b: boolean) => void;
}

const KidsContext = createContext<KidsContextValue>({ kids: false, setKids: () => {} });

export function useKids(): KidsContextValue {
  return useContext(KidsContext);
}

const STORAGE_KEY = 'halo-kids';

function applyKidsMode(on: boolean): void {
  try {
    document.documentElement.classList.toggle('kids', on);
    document.documentElement.style.fontSize = on ? '112.5%' : '';
  } catch {
    // document unavailable (SSR) — ignore
  }
}

/**
 * Provides kid-friendly mode: larger base font, simpler presentation.
 * Persisted to localStorage ('halo-kids') and, best-effort, to
 * profiles.kids_mode for signed-in users.
 *
 * NOTE: wrap the root layout with <KidsProvider> for this to take effect.
 */
export function KidsProvider({ children }: { children: ReactNode }) {
  const [kids, setKidsState] = useState(false);

  useEffect(() => {
    let stored = false;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      stored = false;
    }
    if (stored) {
      setKidsState(true);
      applyKidsMode(true);
    }
    // Best-effort: prefer the profile value when signed in.
    void (async () => {
      try {
        const supabase = createClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user) return;
        const { data } = await supabase
          .from('profiles')
          .select('kids_mode')
          .eq('id', user.id)
          .maybeSingle();
        const mode = (data as unknown as { kids_mode?: unknown } | null)?.kids_mode;
        if (typeof mode === 'boolean') {
          setKidsState(mode);
          applyKidsMode(mode);
        }
      } catch {
        // profiles table may not exist yet — stay with the local value
      }
    })();
  }, []);

  const setKids = useCallback((b: boolean) => {
    setKidsState(b);
    applyKidsMode(b);
    try {
      window.localStorage.setItem(STORAGE_KEY, b ? '1' : '0');
    } catch {
      // storage unavailable — ignore
    }
    void (async () => {
      try {
        const supabase = createClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user) return;
        await supabase.from('profiles').upsert({ id: user.id, kids_mode: b }, { onConflict: 'id' });
      } catch {
        // best-effort only — never crash the UI
      }
    })();
  }, []);

  return (
    <KidsContext.Provider value={{ kids, setKids }}>
      {/* Safety net: define the .kids class even if globals.css doesn't. */}
      <style>{`.kids { font-size: 112.5%; }`}</style>
      {children}
    </KidsContext.Provider>
  );
}
