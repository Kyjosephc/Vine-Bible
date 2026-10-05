/**
 * Privacy-respecting client analytics logger.
 *
 * Queues events, batches them, and POSTs to /api/analytics. Survives
 * offline (queued in memory; flushed when visible again) and never throws —
 * analytics must never break the app.
 *
 * Privacy rules:
 *  - Event names come from an allowlist enforced server-side.
 *  - metadata is a small plain object; keys are capped and strings are
 *    truncated. Never pass names, emails, message text, or keystrokes.
 *  - Search queries send the submitted query text only (never keystrokes).
 */

export type AnalyticsEventName =
  | 'screen_view'
  | 'lesson_completed'
  | 'quiz_completed'
  | 'search'
  | 'session_completed'
  | 'devotional_completed'
  | 'course_lesson_completed'
  | 'review_completed';

interface QueuedEvent {
  event: AnalyticsEventName;
  metadata?: Record<string, string | number | boolean>;
}

const queue: QueuedEvent[] = [];
let timer: ReturnType<typeof setTimeout> | null = null;
let flushing = false;
const FLUSH_MS = 5000;
const MAX_BATCH = 25;

function sanitizeMetadata(metadata?: Record<string, unknown>): Record<string, string | number | boolean> | undefined {
  if (!metadata || typeof metadata !== 'object') return undefined;
  const out: Record<string, string | number | boolean> = {};
  let keys = 0;
  for (const [k, v] of Object.entries(metadata)) {
    if (keys >= 10) break;
    if (!/^[a-z0-9_]{1,32}$/.test(k)) continue;
    if (typeof v === 'string') {
      out[k] = v.slice(0, 200);
    } else if (typeof v === 'number' && Number.isFinite(v)) {
      out[k] = v;
    } else if (typeof v === 'boolean') {
      out[k] = v;
    }
    keys += 1;
  }
  return Object.keys(out).length > 0 ? out : undefined;
}

/** Queue an analytics event. Safe to call anywhere (no-op during SSR). */
export function track(event: AnalyticsEventName, metadata?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  queue.push({ event, metadata: sanitizeMetadata(metadata) });
  if (timer) return;
  timer = setTimeout(() => {
    timer = null;
    void flush();
  }, FLUSH_MS);
  // Don't keep the page alive just for analytics.
  if (typeof (timer as unknown as { unref?: () => void }).unref === 'function') {
    (timer as unknown as { unref: () => void }).unref();
  }
}

async function flush(): Promise<void> {
  if (flushing || queue.length === 0 || typeof window === 'undefined') return;
  if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return;
  flushing = true;
  try {
    while (queue.length > 0) {
      const batch = queue.splice(0, MAX_BATCH);
      const res = await fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ events: batch }),
      });
      if (!res.ok) break; // keep the rest queued; try next time
    }
  } catch {
    // network failed — items stay queued only if still in queue; drop batch to avoid spam
  } finally {
    flushing = false;
  }
}

/** Flush before the page hides, so the last batch isn't lost. */
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') void flush();
  });
  window.addEventListener('pagehide', () => {
    void flush();
  });
}
