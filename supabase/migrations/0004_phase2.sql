-- Halo Phase 2 migration (0004)
-- Assembled from workstream fragments: memory_verses (ws1), saved_verses (ws3), platform (ws4).
-- Run in Supabase SQL editor after 0003_onboarding.sql.

-- Halo Phase 2, workstream 1: Scripture memory system.
-- New table: memory_verses. Everything else this workstream needs
-- (XP, levels, badges, streaks, goals) is derived from existing tables.

-- ============ memory_verses ============
create table if not exists public.memory_verses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  ref text not null,
  verse_text text,
  status text not null default 'new'
    check (status in ('new', 'learning', 'review', 'mastered')),
  next_review date not null default current_date,
  reps int not null default 0,
  created_at timestamptz not null default now()
);

alter table public.memory_verses enable row level security;

drop policy if exists "memory_verses_all_own" on public.memory_verses;
create policy "memory_verses_all_own" on public.memory_verses
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

create index if not exists idx_memory_verses_user_id on public.memory_verses (user_id);
create index if not exists idx_memory_verses_user_due on public.memory_verses (user_id, next_review);
create index if not exists idx_memory_verses_user_status on public.memory_verses (user_id, status);

-- Phase 2 workstream 3 fragment: saved verses table.
-- Apply after the core migrations. Client code (VerseActionSheet) writes
-- here with graceful fallback when the table is absent.

create table if not exists public.saved_verses (
  user_id uuid not null references auth.users(id) on delete cascade,
  ref text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, ref)
);

alter table public.saved_verses enable row level security;

drop policy if exists "saved_verses_all_own" on public.saved_verses;
create policy "saved_verses_all_own" on public.saved_verses
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ============================================================
-- Phase 2 / workstream 4 (platform): admin roles, content
-- publish flags, analytics events, entitlement + notification
-- preference columns on profiles.
--
-- RLS summary:
--   user_roles      — select: admins only. NO insert/update/delete policy
--                     for the anon/authenticated roles: the first admin and
--                     any new admins are granted via the Supabase dashboard
--                     SQL editor (service role bypasses RLS) by the owner.
--                     Deletes are deliberately not app-grantable.
--   content_flags   — public read (anon + authenticated); write: admins only.
--   analytics_events— users insert their own rows (or anonymous rows with
--                     user_id = null for logged-out tracking); select: admins
--                     only. No update/delete.
-- ============================================================

-- ---------- entitlement + notification prefs on profiles ----------
alter table public.profiles
  add column if not exists is_premium boolean not null default false,
  add column if not exists daily_reminder_enabled boolean not null default false,
  add column if not exists daily_reminder_time text not null default '08:00',
  add column if not exists review_reminders boolean not null default false,
  add column if not exists streak_reminders boolean not null default false;

-- ---------- user_roles ----------
-- NOTE: table must be created BEFORE the is_admin() helper below,
-- which references it.
create table if not exists public.user_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('admin')),
  created_at timestamptz not null default now()
);

alter table public.user_roles enable row level security;

-- ---------- admin role check helper (security definer) ----------
-- Used by policies so user_roles lookups don't recurse through RLS.
create or replace function public.is_admin(uid uuid)
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = uid and role = 'admin'
  );
$$;

-- Only admins can list roles. There is intentionally NO insert policy:
-- new admins are granted by the owner via the Supabase SQL editor
-- (service role), e.g.:
--   insert into public.user_roles (user_id, role) values ('<user-uuid>', 'admin');
drop policy if exists "user_roles_select_admin" on public.user_roles;
create policy "user_roles_select_admin" on public.user_roles
  for select using (public.is_admin(auth.uid()));

-- ---------- content_flags ----------
create table if not exists public.content_flags (
  key text primary key,
  enabled boolean not null default true,
  updated_at timestamptz not null default now()
);

alter table public.content_flags enable row level security;

drop policy if exists "content_flags_select_public" on public.content_flags;
create policy "content_flags_select_public" on public.content_flags
  for select using (true);

drop policy if exists "content_flags_write_admin" on public.content_flags;
create policy "content_flags_write_admin" on public.content_flags
  for all using (public.is_admin(auth.uid()))
  with check (public.is_admin(auth.uid()));

-- ---------- analytics_events ----------
create table if not exists public.analytics_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  event text not null,
  metadata jsonb,
  created_at timestamptz not null default now()
);

create index if not exists analytics_events_event_idx on public.analytics_events (event);
create index if not exists analytics_events_created_idx on public.analytics_events (created_at desc);
create index if not exists analytics_events_user_idx on public.analytics_events (user_id);

alter table public.analytics_events enable row level security;

-- Signed-in users may insert only their own events; anonymous (logged-out)
-- tracking inserts rows with user_id = null.
drop policy if exists "analytics_events_insert_own" on public.analytics_events;
create policy "analytics_events_insert_own" on public.analytics_events
  for insert with check (user_id is null or user_id = auth.uid());

-- Only admins can read analytics. No update/delete policies: events are append-only.
drop policy if exists "analytics_events_select_admin" on public.analytics_events;
create policy "analytics_events_select_admin" on public.analytics_events
  for select using (public.is_admin(auth.uid()));

-- ---------- seed default content flags (all enabled; everything free) ----------
insert into public.content_flags (key, enabled) values
  ('tutor', true),
  ('verse_images', true),
  ('groups', true),
  ('jesus_mode', true),
  ('kids_mode', true),
  ('premium_extras', false)
on conflict (key) do nothing;
