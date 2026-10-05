/**
 * Admin platform helpers — SERVER SIDE ONLY.
 *
 * Never import this module from client components: it reads the server
 * Supabase client (cookies) and gates every admin operation on the
 * `user_roles` table. Admin UI text is plain English (owner-facing tool);
 * all user-facing i18n lives elsewhere.
 *
 * Security contract:
 *  - `requireAdmin()` redirects non-signed-in users to /login and renders
 *    404 for signed-in non-admins. The /admin layout calls it, so no admin
 *    page or action is reachable without a server-side role check.
 *  - New admins are granted ONLY via SQL by the owner (Supabase dashboard);
 *    RLS on user_roles has no insert policy, so the app cannot self-grant.
 *  - Types are defined locally here; shared app types are untouched.
 */

import { notFound, redirect } from 'next/navigation';
import { createServerClient, getUser } from '@/lib/supabase/server';

// ---------- types ----------

export interface AdminIdentity {
  id: string;
  email: string | null;
}

export interface AdminRoleRow {
  user_id: string;
  created_at: string;
  display_name: string | null;
}

export interface ContentFlag {
  key: string;
  enabled: boolean;
  updated_at: string;
}

export interface EventCount {
  event: string;
  count: number;
}

export interface DailyActiveUsers {
  date: string; // YYYY-MM-DD
  users: number;
}

export interface TopLesson {
  lesson: string;
  count: number;
}

export interface QuizAverage {
  quiz_id: string;
  attempts: number;
  avg_score: number; // 0..1
}

export interface AdminOverview {
  totalUsers: number;
  signupsLast7d: number;
  eventsLast7d: number;
  lessonsCompleted7d: number;
  quizzesCompleted7d: number;
  recentSignups: { id: string; display_name: string | null; created_at: string }[];
  topEvents: EventCount[];
}

// ---------- role checks ----------

/** True when the user holds the admin role. Never trust client-side state. */
export async function isAdminUser(userId: string): Promise<boolean> {
  try {
    const supabase = await createServerClient();
    const { data, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .maybeSingle();
    if (error) return false;
    return data !== null;
  } catch {
    return false;
  }
}

/**
 * Gate for /admin. Redirects anonymous users to /login; renders 404 for
 * signed-in non-admins (no information leak about admin routes existing).
 */
export async function requireAdmin(): Promise<AdminIdentity> {
  let user;
  try {
    user = await getUser();
  } catch {
    redirect('/login');
  }
  if (!user) redirect('/login');
  const ok = await isAdminUser(user.id);
  if (!ok) notFound();
  return { id: user.id, email: user.email ?? null };
}

// ---------- role management ----------

/** List all admins (user_roles joined with profiles for display names). */
export async function listAdmins(): Promise<AdminRoleRow[]> {
  const supabase = await createServerClient();
  const { data, error } = await supabase
    .from('user_roles')
    .select('user_id, created_at, profiles(display_name)')
    .order('created_at', { ascending: true });
  if (error) throw new Error(error.message);
  const rows = (data ?? []) as {
    user_id: string;
    created_at: string;
    profiles: { display_name: string | null } | { display_name: string | null }[] | null;
  }[];
  return rows.map((r) => ({
    user_id: r.user_id,
    created_at: r.created_at,
    display_name: Array.isArray(r.profiles)
      ? (r.profiles[0]?.display_name ?? null)
      : (r.profiles?.display_name ?? null),
  }));
}

/**
 * Remove an admin role. Guards: never remove yourself, never remove the last
 * admin. (Adds happen only via SQL by the owner — RLS has no insert policy.)
 */
export async function removeAdminRole(targetUserId: string, actingUserId: string): Promise<void> {
  if (targetUserId === actingUserId) {
    throw new Error('You cannot remove your own admin role.');
  }
  const admins = await listAdmins();
  if (admins.length <= 1) {
    throw new Error('You cannot remove the last admin.');
  }
  if (!admins.some((a) => a.user_id === targetUserId)) {
    throw new Error('That user is not an admin.');
  }
  const supabase = await createServerClient();
  const { error } = await supabase.from('user_roles').delete().eq('user_id', targetUserId);
  if (error) throw new Error(error.message);
}

// ---------- content flags ----------

export async function listContentFlags(): Promise<ContentFlag[]> {
  const supabase = await createServerClient();
  const { data, error } = await supabase
    .from('content_flags')
    .select('key, enabled, updated_at')
    .order('key', { ascending: true });
  if (error) throw new Error(error.message);
  return (data ?? []) as ContentFlag[];
}

export async function setContentFlag(key: string, enabled: boolean): Promise<void> {
  if (!/^[a-z0-9_]{1,64}$/.test(key)) throw new Error('Invalid flag key.');
  const supabase = await createServerClient();
  const { error } = await supabase
    .from('content_flags')
    .upsert({ key, enabled, updated_at: new Date().toISOString() }, { onConflict: 'key' });
  if (error) throw new Error(error.message);
}

// ---------- analytics ----------

const SEVEN_DAYS_AGO = () => new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

/** Overview numbers for the admin home page. */
export async function getAdminOverview(): Promise<AdminOverview> {
  const supabase = await createServerClient();
  const week = SEVEN_DAYS_AGO();

  const [users, signups, events, lessons, quizzes, topEvents, recent] = await Promise.all([
    supabase.from('profiles').select('id', { count: 'exact', head: true }),
    supabase.from('profiles').select('id', { count: 'exact', head: true }).gte('created_at', week),
    supabase.from('analytics_events').select('id', { count: 'exact', head: true }).gte('created_at', week),
    supabase
      .from('analytics_events')
      .select('id', { count: 'exact', head: true })
      .eq('event', 'lesson_completed')
      .gte('created_at', week),
    supabase
      .from('analytics_events')
      .select('id', { count: 'exact', head: true })
      .eq('event', 'quiz_completed')
      .gte('created_at', week),
    supabase.from('analytics_events').select('event').gte('created_at', week),
    supabase
      .from('profiles')
      .select('id, display_name, created_at')
      .order('created_at', { ascending: false })
      .limit(10),
  ]);

  for (const r of [users, signups, events, lessons, quizzes, topEvents, recent]) {
    if (r.error) throw new Error(r.error.message);
  }

  const counts = new Map<string, number>();
  for (const row of (topEvents.data ?? []) as { event: string }[]) {
    counts.set(row.event, (counts.get(row.event) ?? 0) + 1);
  }
  const topEventsArr: EventCount[] = [...counts.entries()]
    .map(([event, count]) => ({ event, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return {
    totalUsers: users.count ?? 0,
    signupsLast7d: signups.count ?? 0,
    eventsLast7d: events.count ?? 0,
    lessonsCompleted7d: lessons.count ?? 0,
    quizzesCompleted7d: quizzes.count ?? 0,
    recentSignups: (recent.data ?? []) as AdminOverview['recentSignups'],
    topEvents: topEventsArr,
  };
}

/** Event counts for the last 30 days, most common first. */
export async function getEventCounts(): Promise<EventCount[]> {
  const supabase = await createServerClient();
  const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  const { data, error } = await supabase
    .from('analytics_events')
    .select('event')
    .gte('created_at', since);
  if (error) throw new Error(error.message);
  const counts = new Map<string, number>();
  for (const row of (data ?? []) as { event: string }[]) {
    counts.set(row.event, (counts.get(row.event) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([event, count]) => ({ event, count }))
    .sort((a, b) => b.count - a.count);
}

/** Distinct users with at least one event per day (last 14 days). Retention-ish DAU. */
export async function getDailyActiveUsers(): Promise<DailyActiveUsers[]> {
  const supabase = await createServerClient();
  const since = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString();
  const { data, error } = await supabase
    .from('analytics_events')
    .select('user_id, created_at')
    .gte('created_at', since)
    .not('user_id', 'is', null);
  if (error) throw new Error(error.message);
  const byDay = new Map<string, Set<string>>();
  for (const row of ((data ?? []) as unknown as { user_id: string | null; created_at: string }[])) {
    if (!row.user_id) continue;
    const day = row.created_at.slice(0, 10);
    let set = byDay.get(day);
    if (!set) {
      set = new Set<string>();
      byDay.set(day, set);
    }
    set.add(row.user_id);
  }
  return [...byDay.entries()]
    .map(([date, users]) => ({ date, users: users.size }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

/** Most completed lessons in the last 30 days. */
export async function getTopLessons(limit = 10): Promise<TopLesson[]> {
  const supabase = await createServerClient();
  const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  const { data, error } = await supabase
    .from('analytics_events')
    .select('metadata')
    .eq('event', 'lesson_completed')
    .gte('created_at', since);
  if (error) throw new Error(error.message);
  const counts = new Map<string, number>();
  for (const row of ((data ?? []) as unknown as { metadata: { lesson_id?: unknown } | null }[])) {
    const lesson = typeof row.metadata?.lesson_id === 'string' ? row.metadata.lesson_id : 'unknown';
    counts.set(lesson, (counts.get(lesson) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([lesson, count]) => ({ lesson, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

/** Average quiz scores in the last 30 days, highest volume first. */
export async function getQuizAverages(limit = 10): Promise<QuizAverage[]> {
  const supabase = await createServerClient();
  const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  const { data, error } = await supabase
    .from('analytics_events')
    .select('metadata')
    .eq('event', 'quiz_completed')
    .gte('created_at', since);
  if (error) throw new Error(error.message);
  const agg = new Map<string, { attempts: number; total: number }>();
  for (const row of ((data ?? []) as unknown as {
    metadata: { quiz_id?: unknown; score?: unknown; total?: unknown } | null;
  }[])) {
    const m = row.metadata;
    const quizId = typeof m?.quiz_id === 'string' ? m.quiz_id : 'unknown';
    const score = typeof m?.score === 'number' ? m.score : NaN;
    const total = typeof m?.total === 'number' && m.total > 0 ? m.total : NaN;
    if (!Number.isFinite(score) || !Number.isFinite(total)) continue;
    const a = agg.get(quizId) ?? { attempts: 0, total: 0 };
    a.attempts += 1;
    a.total += score / total;
    agg.set(quizId, a);
  }
  return [...agg.entries()]
    .map(([quiz_id, a]) => ({ quiz_id, attempts: a.attempts, avg_score: a.total / a.attempts }))
    .sort((a, b) => b.attempts - a.attempts)
    .slice(0, limit);
}
