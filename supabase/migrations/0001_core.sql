-- Lumen Bible: core schema (migration 0001)
-- Valid Postgres (Supabase). All user data is per-user; groups share content with members.

create extension if not exists "pgcrypto";

-- ============ profiles ============
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  kids_mode boolean not null default false,
  language text not null default 'en',
  created_at timestamptz not null default now()
);

-- ============ highlights ============
create table public.highlights (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  ref text not null,
  verse_text text,
  color text not null default 'yellow',
  note text,
  created_at timestamptz not null default now()
);

-- ============ journal_entries ============
create table public.journal_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  ref text not null,
  title text,
  content text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============ prayer_requests ============
create table public.prayer_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  detail text,
  status text not null default 'active' check (status in ('active', 'answered')),
  created_at timestamptz not null default now(),
  answered_at timestamptz
);

-- ============ study_sessions ============
create table public.study_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  minutes int not null,
  label text not null,
  ref text,
  completed_at timestamptz not null default now()
);

-- ============ lesson_progress ============
create table public.lesson_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  completed_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

-- ============ course_lesson_progress ============
create table public.course_lesson_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id text not null,
  lesson_id text not null,
  completed_at timestamptz not null default now(),
  primary key (user_id, course_id, lesson_id)
);

-- ============ quiz_attempts ============
create table public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  quiz_tag text not null,
  score int not null,
  total int not null,
  created_at timestamptz not null default now()
);

-- ============ review_items (spaced repetition) ============
create table public.review_items (
  user_id uuid not null references auth.users(id) on delete cascade,
  concept text not null,
  translation_key text,
  next_review date not null,
  interval_days int not null default 1,
  reps int not null default 0,
  primary key (user_id, concept)
);

-- ============ reading_plan_progress ============
create table public.reading_plan_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  plan_id text not null,
  day_index int not null,
  completed_at timestamptz not null default now(),
  primary key (user_id, plan_id, day_index)
);

-- ============ saved_devotionals ============
create table public.saved_devotionals (
  user_id uuid not null references auth.users(id) on delete cascade,
  devotional_id text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, devotional_id)
);

-- ============ groups ============
create table public.groups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  join_code text not null unique,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

-- ============ group_members ============
create table public.group_members (
  group_id uuid not null references public.groups(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'member' check (role in ('member', 'leader')),
  joined_at timestamptz not null default now(),
  primary key (group_id, user_id)
);

-- ============ group_messages ============
create table public.group_messages (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.groups(id) on delete cascade,
  user_id uuid references auth.users(id) on delete set null,
  body text not null,
  created_at timestamptz not null default now()
);

-- ============ plan_assignments ============
create table public.plan_assignments (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.groups(id) on delete cascade,
  plan_id text not null,
  assigned_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

-- ============ push_subscriptions ============
create table public.push_subscriptions (
  user_id uuid not null references auth.users(id) on delete cascade,
  endpoint text primary key,
  subscription jsonb not null,
  created_at timestamptz not null default now()
);

-- ============ enable RLS everywhere ============
alter table public.profiles enable row level security;
alter table public.highlights enable row level security;
alter table public.journal_entries enable row level security;
alter table public.prayer_requests enable row level security;
alter table public.study_sessions enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.course_lesson_progress enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.review_items enable row level security;
alter table public.reading_plan_progress enable row level security;
alter table public.saved_devotionals enable row level security;
alter table public.groups enable row level security;
alter table public.group_members enable row level security;
alter table public.group_messages enable row level security;
alter table public.plan_assignments enable row level security;
alter table public.push_subscriptions enable row level security;

-- ============ policies ============

-- profiles
create policy "profiles_select_own" on public.profiles
  for select using (id = auth.uid());
create policy "profiles_insert_own" on public.profiles
  for insert with check (id = auth.uid());
create policy "profiles_update_own" on public.profiles
  for update using (id = auth.uid()) with check (id = auth.uid());

-- per-user tables
create policy "highlights_all_own" on public.highlights
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "journal_entries_all_own" on public.journal_entries
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "prayer_requests_all_own" on public.prayer_requests
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "study_sessions_all_own" on public.study_sessions
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "lesson_progress_all_own" on public.lesson_progress
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "course_lesson_progress_all_own" on public.course_lesson_progress
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "quiz_attempts_all_own" on public.quiz_attempts
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "review_items_all_own" on public.review_items
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "reading_plan_progress_all_own" on public.reading_plan_progress
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "saved_devotionals_all_own" on public.saved_devotionals
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "push_subscriptions_all_own" on public.push_subscriptions
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- groups: members can see the group; anyone signed in can create one
create policy "groups_select_members" on public.groups
  for select using (
    exists (
      select 1 from public.group_members m
      where m.group_id = groups.id and m.user_id = auth.uid()
    )
  );
create policy "groups_insert_own" on public.groups
  for insert with check (created_by = auth.uid());

-- group_members: members can see the member list; users can add themselves (join flow)
create policy "group_members_select_members" on public.group_members
  for select using (
    exists (
      select 1 from public.group_members m2
      where m2.group_id = group_members.group_id and m2.user_id = auth.uid()
    )
  );
create policy "group_members_insert_self" on public.group_members
  for insert with check (user_id = auth.uid());
create policy "group_members_delete_leader" on public.group_members
  for delete using (
    exists (
      select 1 from public.group_members m3
      where m3.group_id = group_members.group_id
        and m3.user_id = auth.uid()
        and m3.role = 'leader'
    )
  );

-- group_messages: members can read; members post as themselves
create policy "group_messages_select_members" on public.group_messages
  for select using (
    exists (
      select 1 from public.group_members gm
      where gm.group_id = group_messages.group_id and gm.user_id = auth.uid()
    )
  );
create policy "group_messages_insert_members" on public.group_messages
  for insert with check (
    user_id = auth.uid()
    and exists (
      select 1 from public.group_members gm
      where gm.group_id = group_messages.group_id and gm.user_id = auth.uid()
    )
  );

-- plan_assignments: members can read; leaders can assign
create policy "plan_assignments_select_members" on public.plan_assignments
  for select using (
    exists (
      select 1 from public.group_members gm
      where gm.group_id = plan_assignments.group_id and gm.user_id = auth.uid()
    )
  );
create policy "plan_assignments_insert_leader" on public.plan_assignments
  for insert with check (
    assigned_by = auth.uid()
    and exists (
      select 1 from public.group_members gm
      where gm.group_id = plan_assignments.group_id
        and gm.user_id = auth.uid()
        and gm.role = 'leader'
    )
  );

-- ============ auto-create profile on signup ============
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'display_name', new.raw_user_meta_data ->> 'name')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============ indexes ============
create index if not exists idx_highlights_user_id on public.highlights (user_id);
create index if not exists idx_journal_entries_user_id on public.journal_entries (user_id);
create index if not exists idx_prayer_requests_user_id on public.prayer_requests (user_id);
create index if not exists idx_study_sessions_user_id on public.study_sessions (user_id);
create index if not exists idx_lesson_progress_user_id on public.lesson_progress (user_id);
create index if not exists idx_course_lesson_progress_user_id on public.course_lesson_progress (user_id);
create index if not exists idx_quiz_attempts_user_id on public.quiz_attempts (user_id);
create index if not exists idx_review_items_user_id on public.review_items (user_id);
create index if not exists idx_reading_plan_progress_user_id on public.reading_plan_progress (user_id);
create index if not exists idx_saved_devotionals_user_id on public.saved_devotionals (user_id);
create index if not exists idx_push_subscriptions_user_id on public.push_subscriptions (user_id);
create index if not exists idx_group_members_user_id on public.group_members (user_id);
create index if not exists idx_group_messages_group_id on public.group_messages (group_id);
create index if not exists idx_plan_assignments_group_id on public.plan_assignments (group_id);
create index if not exists idx_groups_join_code on public.groups (join_code);
