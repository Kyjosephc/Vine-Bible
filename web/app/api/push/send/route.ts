import { NextRequest } from 'next/server';
import webpush from 'web-push';
import { createServerClient } from '@/lib/supabase/server';

interface StoredRow {
  endpoint: string;
  subscription: unknown;
}

/**
 * POST /api/push/send { title: string, body: string, userIds?: string[] }
 *
 * Sends a push notification to stored subscriptions (optionally filtered to
 * specific users). Intended to be triggered by the deployer's cron/scheduler.
 * Returns 501 when VAPID keys are not configured.
 */
export async function POST(req: NextRequest) {
  const publicKey = process.env.VAPID_PUBLIC_KEY;
  const privateKey = process.env.VAPID_PRIVATE_KEY;
  if (!publicKey || !privateKey) {
    return Response.json(
      {
        error: 'PUSH_NOT_CONFIGURED',
        message: 'VAPID keys are not configured. Set VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY.',
      },
      { status: 501 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'BAD_REQUEST', message: 'Request body must be JSON.' }, { status: 400 });
  }

  const payload = body as { title?: unknown; body?: unknown; userIds?: unknown };
  const title = typeof payload.title === 'string' ? payload.title : '';
  const message = typeof payload.body === 'string' ? payload.body : '';
  if (!title || !message) {
    return Response.json(
      { error: 'BAD_REQUEST', message: 'Both "title" and "body" are required.' },
      { status: 400 },
    );
  }
  const userIds =
    Array.isArray(payload.userIds) && payload.userIds.every((u): u is string => typeof u === 'string')
      ? payload.userIds
      : null;

  webpush.setVapidDetails(process.env.VAPID_SUBJECT || 'mailto:admin@example.com', publicKey, privateKey);

  const supabase = await createServerClient();
  let query = supabase.from('push_subscriptions').select('endpoint, subscription');
  if (userIds && userIds.length > 0) {
    query = query.in('user_id', userIds);
  }
  const { data, error } = await query;
  if (error) {
    return Response.json({ error: 'FETCH_FAILED', message: error.message }, { status: 500 });
  }

  const rows = (data ?? []) as StoredRow[];
  let sent = 0;
  let failed = 0;

  const messagePayload = JSON.stringify({ title, body: message });

  for (const row of rows) {
    try {
      await webpush.sendNotification(row.subscription as webpush.PushSubscription, messagePayload);
      sent += 1;
    } catch {
      failed += 1;
    }
  }

  return Response.json({ sent, failed, total: rows.length });
}
