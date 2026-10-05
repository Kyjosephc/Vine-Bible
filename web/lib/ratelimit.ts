/**
 * Lightweight in-memory rate limiter for API routes.
 *
 * Pragmatic, not perfect: state lives per server instance (fine for a
 * single-region Vercel deploy). For stricter limits, move to a shared
 * store (Redis/Upstash) later.
 */

/** Rolling in-memory buckets: key -> { count, reset }. */
const buckets = new Map<string, { count: number; reset: number }>();

/** Prune stale buckets occasionally so the map can't grow unbounded. */
function prune(now: number): void {
  if (buckets.size < 5000) return;
  for (const [key, bucket] of buckets) {
    if (now >= bucket.reset) buckets.delete(key);
  }
}

/**
 * Returns true when the request is within the limit (and records it),
 * false when over the limit.
 */
export function checkRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  prune(now);
  const bucket = buckets.get(key);
  if (!bucket || now >= bucket.reset) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return true;
  }
  if (bucket.count >= limit) return false;
  bucket.count += 1;
  return true;
}

/** Best-effort client IP from proxy headers. */
export function getClientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }
  const real = req.headers.get('x-real-ip');
  if (real) return real.trim();
  return 'unknown';
}

/** Standard 429 response. */
export function rateLimitedResponse(retryAfterSeconds = 60): Response {
  return Response.json(
    { error: 'RATE_LIMITED', message: 'Too many requests. Please try again soon.' },
    { status: 429, headers: { 'Retry-After': String(retryAfterSeconds) } },
  );
}
