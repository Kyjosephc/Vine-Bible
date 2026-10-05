-- 0003: onboarding fields on profiles
alter table public.profiles
  add column if not exists knowledge_level text,
  add column if not exists learning_goals text[],
  add column if not exists daily_minutes int,
  add column if not exists onboarding_completed boolean not null default false;
