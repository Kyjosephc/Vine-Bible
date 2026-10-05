-- Patch migration: columns used by the app that were missing from 0001.
alter table public.prayer_requests
  add column if not exists reminder_note text;
