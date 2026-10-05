import { NextRequest } from 'next/server';
import { createServerClient, getUser } from '@/lib/supabase/server';
import { checkRateLimit, getClientIp, rateLimitedResponse } from '@/lib/ratelimit';

/**
 * POST /api/analytics { events: [{ event, metadata? }] }
 *
 * Privacy-respecting, append-only event ingestion.
 *  - Event names are allowlisted server-side; unknown events are rejected.
 *  - metadata keys are allowlisted; values are strings/numbers/booleans, size-capped.
 *  - user_id is set from the session (or null for logged-out visitors).
 *  - Light rate limit: 120 events per IP per minute.
 */

const ALLOWED_EVENTS = new Set([
  'screen_view',
  'lesson_completed',
  'quiz_completed',
  'search',
  'session_completed',
  'devotional_completed',
  'course_lesson_completed',
  'review_completed',
]);

const ALLOWED_META_KEYS = /^[a-z0-9_]{1,32}$/;
const MAX_EVENTS_PER_REQUEST = 25;
const MAX_META_KEYS = 10;
const MAX_STRING_LEN = 200;

interface RawEvent {
  event?: unknown;
  metadata?: unknown;
}

function sanitizeMetadata(raw: unknown): Record<string, string | number | boolean> | null {
  if (raw === undefined || raw === null) return null;
  if (typeof raw !== 'object' || Array.isArray(raw)) return null;
  const out: Record<string, string | number | boolean> = {};
  let keys = 0;
  for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
    if (keys >= MAX_META_KEYS) break;
    if (!ALLOWED_META_KEYS.test(k)) continue;
    if (typeof v === 'string') {
      out[k] = v.slice(0, MAX_STRING_LEN);
    } else if (typeof v === 'number' && Number.isFinite(v)) {
      out[k] = v;
    } else if (typeof v === 'boolean') {
      out[k] = v;
    }
    keys += 1;
  }
  return out;
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (!checkRateLimit(`analytics:${ip}`, 120, 60_000)) {
    return rateLimitedResponse(60);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'BAD_REQUEST', message: 'Request body must be JSON.' }, { status: 400 });
  }

  const events = (body as { events?: unknown }).events;
  if (!Array.isArray(events) || events.length === 0 || events.length > MAX_EVENTS_PER_REQUEST) {
    return Response.json(
      { error: 'BAD_REQUEST', message: `Provide 1–${MAX_EVENTS_PER_REQUEST} events.` },
      { status: 400 },
    );
  }

  const user = await getUser().catch(() => null);
  const userId = user?.id ?? null;

  const rows: { user_id: string | null; event: string; metadata: unknown }[] = [];
  for (const raw of events as RawEvent[]) {
    const event = typeof raw?.event === 'string' ? raw.event : '';
    if (!ALLOWED_EVENTS.has(event)) {
      return Response.json(
        { error: 'BAD_REQUEST', message: `Unknown event: ${event.slice(0, 40)}` },
        { status: 400 },
      );
    }
    rows.push({ user_id: userId, event, metadata: sanitizeMetadata(raw?.metadata) });
  }

  const supabase = await createServerClient();
  const { error } = await supabase.from('analytics_events').insert(rows);
  if (error) {
    return Response.json({ error: 'TRACK_FAILED', message: error.message }, { status: 500 });
  }
  return Response.json({ ok: true, tracked: rows.length });
}
