import { NextRequest } from 'next/server';
import { createServerClient, getUser } from '@/lib/supabase/server';
import { checkRateLimit, getClientIp, rateLimitedResponse } from '@/lib/ratelimit';

interface StoredSubscription {
  endpoint?: unknown;
}

async function requireUser() {
  const user = await getUser();
  return user ?? null;
}

/**
 * POST /api/push/subscribe { subscription: PushSubscriptionJSON }
 * Saves (upserts) the device's push subscription for the signed-in user.
 */
export async function POST(req: NextRequest) {
  if (!checkRateLimit(`push-sub:${getClientIp(req)}`, 30, 60_000)) {
    return rateLimitedResponse(60);
  }
  const user = await requireUser();
  if (!user) {
    return Response.json({ error: 'UNAUTHORIZED' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'BAD_REQUEST', message: 'Request body must be JSON.' }, { status: 400 });
  }

  const subscription = (body as { subscription?: unknown }).subscription as StoredSubscription | null;
  const endpoint = subscription && typeof subscription.endpoint === 'string' ? subscription.endpoint : '';
  if (!endpoint) {
    return Response.json(
      { error: 'BAD_REQUEST', message: 'A subscription with an endpoint is required.' },
      { status: 400 },
    );
  }

  const supabase = await createServerClient();
  const { error } = await supabase.from('push_subscriptions').upsert(
    { user_id: user.id, endpoint, subscription },
    { onConflict: 'endpoint' },
  );
  if (error) {
    return Response.json({ error: 'SUBSCRIBE_FAILED', message: error.message }, { status: 500 });
  }
  return Response.json({ ok: true });
}

/**
 * DELETE /api/push/subscribe { endpoint: string }
 * Removes the device's push subscription.
 */
export async function DELETE(req: NextRequest) {
  if (!checkRateLimit(`push-sub:${getClientIp(req)}`, 30, 60_000)) {
    return rateLimitedResponse(60);
  }
  const user = await requireUser();
  if (!user) {
    return Response.json({ error: 'UNAUTHORIZED' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'BAD_REQUEST', message: 'Request body must be JSON.' }, { status: 400 });
  }

  const endpoint = (body as { endpoint?: unknown }).endpoint;
  if (typeof endpoint !== 'string' || !endpoint) {
    return Response.json({ error: 'BAD_REQUEST', message: 'An endpoint is required.' }, { status: 400 });
  }

  const supabase = await createServerClient();
  const { error } = await supabase
    .from('push_subscriptions')
    .delete()
    .eq('user_id', user.id)
    .eq('endpoint', endpoint);
  if (error) {
    return Response.json({ error: 'UNSUBSCRIBE_FAILED', message: error.message }, { status: 500 });
  }
  return Response.json({ ok: true });
}
