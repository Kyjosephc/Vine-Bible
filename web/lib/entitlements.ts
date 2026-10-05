/**
 * Entitlements — the monetization architecture for free/premium/church plans.
 *
 * Product rule: NOTHING in the Bible text or core learning is paywalled.
 * Everything stays free. These helpers exist so a paid tier can gate
 * *future* extras (e.g. advanced features) without refactoring call sites.
 *
 * Server-side only: uses the server Supabase client (cookies) so the
 * entitlement state can't be forged in the browser.
 */

import { createServerClient, getUser } from '@/lib/supabase/server';

/** Is a content flag enabled? Unknown flags default to true (open by default). */
export async function isContentEnabled(key: string): Promise<boolean> {
  try {
    const supabase = await createServerClient();
    const { data, error } = await supabase
      .from('content_flags')
      .select('enabled')
      .eq('key', key)
      .maybeSingle();
    if (error || !data) return true;
    return (data as { enabled?: boolean }).enabled ?? true;
  } catch {
    // Content must stay reachable even when the DB/entitlements are down.
    return true;
  }
}

/**
 * Is the signed-in user premium? Reads profiles.is_premium. Returns false
 * for anonymous users. Premium currently unlocks nothing — it's reserved
 * for future extras; all learning content remains free.
 */
export async function isPremium(userId?: string): Promise<boolean> {
  try {
    const id = userId ?? (await getUser())?.id;
    if (!id) return false;
    const supabase = await createServerClient();
    const { data, error } = await supabase
      .from('profiles')
      .select('is_premium')
      .eq('id', id)
      .maybeSingle();
    if (error || !data) return false;
    return (data as { is_premium?: boolean }).is_premium === true;
  } catch {
    return false;
  }
}
