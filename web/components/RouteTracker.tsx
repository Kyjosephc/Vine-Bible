'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@/lib/analytics';

/**
 * Tracks screen views on route change for key routes.
 * Fires once per navigation; analytics itself is best-effort and batched.
 */
export default function RouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    track('screen_view', { path: pathname.slice(0, 120) });
  }, [pathname]);

  return null;
}
