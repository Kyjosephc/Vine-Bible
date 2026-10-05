# Halo

A production-ready Bible learning, study, and discipleship platform. Next.js 14 + TypeScript + Tailwind on the frontend, Supabase (Postgres + Auth) on the backend. Built to take someone from "I don't know where to start" to deep, structured Scripture study.

**What's inside:** time-based guided study sessions (5/10/15/30/45/60+ min), a 17-lesson beginner path, all 66 Bible books with chapter studies, full-Bible reader (WEB/KJV/ASV) with highlighting + text-to-speech, study-mode search, 24 life-application guides, 30 devotionals, 20 courses with quizzes, Jesus-mode chronology, 24 people profiles, 12 places, interactive timeline, quiz engine with weak-area recommendations, spaced-repetition review queue, verse journaling, prayer tracker, reading plans (Bible-in-a-year, chronological, topical), study groups + church dashboard, shareable verse images, kids mode, PWA offline support, web-push reminders, and a pluggable AI verse tutor.

---

## Quick start (~10 minutes)

### 1. Create a free Supabase project
1. Go to [supabase.com](https://supabase.com) → New project (free tier is fine).
2. Note your **Project URL** and **anon public key** (Project Settings → API).

### 2. Run the database migrations
In the Supabase dashboard: **SQL Editor → New query**, then paste and run:
- `supabase/migrations/0001_core.sql`
- `supabase/migrations/0002_patch.sql`

This creates 16 tables (`profiles`, `highlights`, `journal_entries`, `prayer_requests`, `study_sessions`, `lesson_progress`, `course_lesson_progress`, `quiz_attempts`, `review_items`, `reading_plan_progress`, `saved_devotionals`, `groups`, `group_members`, `group_messages`, `plan_assignments`, `push_subscriptions`) with **Row Level Security enabled on every table** — users can only read/write their own data, and group content is visible only to group members. A trigger auto-creates a `profiles` row on signup.

Phase 2 adds `0004_phase2.sql` (assembled from the workstream fragments): `user_roles` (admin roles), `content_flags` (publish flags), `analytics_events` (privacy-respecting analytics), plus `is_premium` and notification-preference columns on `profiles` — all with RLS. Apply it after the earlier migrations.

### 3. Configure auth
- **Email magic link:** Supabase enables email auth by default. No extra setup — but for production, configure a custom SMTP sender (Project Settings → Auth → SMTP) so sign-in emails don't land in spam.
- **Google OAuth:** Auth → Providers → enable **Google**. Create OAuth credentials in [Google Cloud Console](https://console.cloud.google.com) (Authorized redirect URI: `https://<your-supabase-ref>.supabase.co/auth/v1/callback`), paste the Client ID/Secret into Supabase.

### 4. Environment variables
```bash
cp .env.example web/.env.local
# then fill in:
NEXT_PUBLIC_SUPABASE_URL=https://<your-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>
```

### 5. Run locally
```bash
cd web
npm install
npm run dev        # http://localhost:3000
npm run build      # must pass with zero errors before deploying
```

### 6. Deploy to Vercel
1. Push this repo to GitHub (do **not** commit `web/.env.local`).
2. [vercel.com](https://vercel.com) → Add New Project → import the repo. Set **Root Directory** to `web`.
3. Add the same environment variables (Settings → Environment Variables).
4. Deploy. Your app is live at `https://<project>.vercel.app`.

> The app works without Supabase configured (logged-out mode serves all content), but login, progress sync, journaling, groups, and push require steps 1–4.

---

## Bible text strategy

We do **not** bundle entire translations. Scripture is fetched at runtime from the free [bolls.life](https://bolls.life) API (`/get-text/{TRANSLATION}/{book}/{chapter}/`), cached in IndexedDB + the service worker, so chapters work offline after first read.

- **Supported translations:** `web` (World English Bible, default), `kjv`, `asv` — all public domain.
- **Bundled fallback:** `web/content/fallback-passages.ts` holds ~24 key passages in accurate WEB text for offline/first-paint use.
- **ESV / NIV / NLT** require commercial licenses from their publishers — they are intentionally not included. To add a licensed text, point `lib/bible.ts` at your licensed API.

Switching translation is a one-line change in `lib/bible.ts` (`getChapterText(..., translation)`).

## Push notifications (web push)

1. Generate VAPID keys once: `npx web-push generate-vapid-keys`.
2. Set `NEXT_PUBLIC_VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT=mailto:you@domain.com` in env.
3. Users opt in via **Settings → Notifications** (stored in `push_subscriptions`).
4. To actually send (daily verse, streak/review reminders), `POST /api/push/send` with `{ "title", "body", "userIds?" }` from a cron job (e.g. Vercel Cron, Supabase pg_cron, or any scheduler). Sending is deployer-operated by design.

> **Security:** `/api/push/send` is admin-gated — a signed-in admin session or a
> `CRON_SECRET` bearer token (`Authorization: Bearer <CRON_SECRET>`) is required.
> Rate-limited to 20 req/min per IP. For headless cron, set `CRON_SECRET` in env
> and pass it in the header.

## Notification setup (reminders)

Reminders are **opt-in and default OFF** — plain language, never manipulative.
In **Settings → Study reminders** users can enable:

- **Daily study reminder** — with a time picker (HH:MM, e.g. `08:00`)
- **Review reminders** — when verses/quiz questions are due
- **Streak encouragement** — a kind note when the streak continues; nothing when it breaks

Preferences are stored on `profiles` (`daily_reminder_enabled`,
`daily_reminder_time`, `review_reminders`, `streak_reminders`) plus a
device-local copy in localStorage, so the scheduler can target users
server-side. A minimal scheduler query:

```sql
-- users who want a reminder and have a device subscribed
select distinct s.endpoint, s.subscription, p.daily_reminder_time
from public.push_subscriptions s
join public.profiles p on p.id = s.user_id
where p.daily_reminder_enabled = true;
```

Then `POST /api/push/send` (admin/CRON_SECRET auth) with `{ title, body, userIds }`.

## Admin dashboard

`/admin` is the owner console: user totals, recent signups, analytics
(event counts, daily active users, top lessons, quiz average scores),
admin-role management, and content publish flags.

- **Role-based, server-enforced.** `web/app/admin/layout.tsx` calls
  `requireAdmin()` (`web/lib/admin.ts`), which checks the `user_roles` table
  via the server Supabase client. Anonymous users are redirected to `/login`;
  signed-in non-admins get a 404. Nothing relies on hiding links.
- **No self-grant.** RLS on `user_roles` has **no insert policy** — the app
  cannot create admins. The first admin is granted by the owner in the
  **Supabase dashboard → SQL Editor** (service role bypasses RLS):
  ```sql
  insert into public.user_roles (user_id, role) values ('<user-uuid>', 'admin');
  ```
  (Find the UUID in Supabase → Authentication → Users.) Admins can *remove*
  other admins from `/admin/roles`, but never themselves or the last admin.
- Emails are not listed in the dashboard (Supabase exposes auth emails only
  via the service-role key, which this app never uses) — use the Supabase
  dashboard for those.

## Content architecture

All teaching content is bundled TypeScript data in `web/content/` — no CMS,
no build step. To add content, follow the existing schemas:

| File | Exported schema | Add… |
|---|---|---|
| `content/lessons.ts` | `Lesson { id, title, body, keyTerms[], quiz: QuizQuestion[], prayer }` | Beginner-path lessons (markdown `body`, supports `##` headings) |
| `content/path-lessons.ts` / `paths.ts` | Learning-path + `PathLesson` records | Time-based lesson paths |
| `content/quizzes.ts` | `QuizQuestion { id, type: 'mc'|'tf'|'fill'|'matching', prompt, choices?, answer, explanation, tags }` (`QUIZ_BANK`) | Quiz questions (tags drive weak-area recommendations) |
| `content/life.ts` | Life-topic guides with `teaches` / `notSays` / `application` | Life-application topics |
| `content/people.ts` | People profiles (`Person`) | Bible people |
| `content/places.ts` | Places (`Place`) | Bible places |
| `content/timeline.ts` | `TimelineEra { id, title, period, description, events: TimelineEvent[] }` | Timeline eras/events |
| `content/courses.ts` | Courses with lessons + quizzes | Multi-lesson courses |
| `content/devotionals.ts` | Devotionals | Devotionals |

Quiz types are shared in `web/lib/types.ts` (`QuizQuestion`). Content is
rendered by `components/LessonView.tsx` and `components/QuizRunner.tsx`.

## Analytics (privacy-respecting)

Client events are queued and batched by `web/lib/analytics.ts` → `track(event, metadata?)`
and ingested by `POST /api/analytics` into the `analytics_events` table.

**Tracked events** (allowlisted server-side): `screen_view` (route), `lesson_completed`
(`lesson_id`), `quiz_completed` (`quiz_id`, `score`, `total`), `search` (submitted
query text only — never keystrokes), `session_completed`, `devotional_completed`,
`course_lesson_completed`, `review_completed`.

**Privacy rules:** no names, emails, message text, or keystrokes in metadata;
keys are allowlisted and strings truncated server-side; events are append-only
(no update/delete policies); only admins can read the table. DAU/WAU are
derived from distinct `user_id`s per day in `/admin/analytics`.

To instrument a completion point elsewhere, add one line:
```ts
import { track } from '@/lib/analytics';
track('lesson_completed', { lesson_id: 'lesson-1' });
```

## Monetization (entitlement architecture)

Free/premium/church plans are *possible* but not implemented — the plumbing is:

- `web/lib/entitlements.ts`: `isContentEnabled(key)` reads the `content_flags`
  table; `isPremium()` reads `profiles.is_premium`.
- `content_flags` rows (`tutor`, `verse_images`, `groups`, `jesus_mode`,
  `kids_mode`, `premium_extras`) are toggled in `/admin/flags`. Unknown flags
  default to **enabled** so content stays reachable.
- **Product rule: nothing in the Bible text or core learning is paywalled.**
  Everything stays free; flags gate *feature availability* (and are the seam
  for any future paid extras).

## Security

- **RLS everywhere.** Every table enables Row Level Security. Phase-1 tables:
  users read/write only their own rows (`auth.uid()`), group tables scoped to
  group membership. New platform tables: `user_roles` (admins can select; no
  app-side inserts), `content_flags` (public read; admin write), `analytics_events`
  (users insert own rows or anonymous rows with `user_id = null`; admins read).
  A `public.is_admin(uid)` security-definer helper backs admin policies.
- **No service-role key in app code.** Only the anon key is used, over HTTPS,
  via `@supabase/ssr` clients. Verified by grep.
- **API input validation.** All POST routes validate JSON shape and reject
  malformed input with 400s.
- **Rate limiting.** In-memory rolling windows via `web/lib/ratelimit.ts`:
  `/api/tutor` (20/window), `/api/analytics` (120/min/IP),
  `/api/push/subscribe` (30/min/IP), `/api/push/send` (20/min/IP).
  Single-instance state — for multi-instance deployments use a shared store
  (e.g. Redis/Upstash).
- **`/api/push/send` is admin-gated** (fixed in Phase 2): previously it was
  unauthenticated, which would have let anyone push-notify all users.
- **Known remaining items:**
  - `web/app/tutor/page.tsx` renders tutor answers with
    `dangerouslySetInnerHTML` — confirm its `renderAnswer` sanitizes
    model output before treating it as safe HTML (owned by the tutor workstream).
  - Analytics events from lesson/quiz completion aren't wired yet because
    `components/LessonView.tsx` / `QuizRunner.tsx` weren't in this workstream's
    scope — see the one-liner in "Analytics" above.
  - No automated dependency scanning or CSP headers yet — consider adding
    `next-safe`/CSP headers and `npm audit` in CI before launch.

## AI verse tutor

`POST /api/tutor` accepts `{ reference, question }`. It requires the deployer's own LLM key:

```bash
LLM_API_KEY=sk-...
LLM_API_BASE=https://api.openai.com/v1   # optional; any OpenAI-compatible endpoint
LLM_MODEL=gpt-4o-mini                    # optional
```

Without a key the route returns `501 AI_TUTOR_NOT_CONFIGURED` and the UI explains setup. The system prompt constrains answers to be Scripture-grounded with cross-references and a reflection question. **Never commit a real key** — the repo ships `.env.example` only.

## PWA / installability

- `web/public/manifest.webmanifest`, generated icons (`web/public/icons/`), and a hand-rolled service worker (`web/public/sw.js`) are included.
- The SW caches the app shell and Bible API responses; visited chapters work offline. Add-to-Home-Screen works on Android/Chrome and iOS Safari (via Share → Add to Home Screen).
- Regenerate icons after rebranding: `node web/scripts/gen-icons.mjs` (zero dependencies).

## Internationalization

- UI chrome: **English complete** (`web/i18n/en.ts`); **Spanish and Portuguese scaffolded** (`es.ts`, `pt.ts` — core keys translated, newer feature strings fall back to English gracefully). Switch in **Settings → Language**.
- Lesson/Bible content itself is English in all languages (a full content translation is a separate content project).

## What's complete vs scaffolded

| Area | Status |
|---|---|
| Auth (magic link + Google), profiles | Complete |
| Home, study sessions, reader, search, devotionals, courses, Jesus mode, people, places, timeline, quizzes, SRS review | Complete with real seeded content |
| Journal, prayer tracker, reading plans, groups, verse images, kids mode, TTS + sleep timer | Complete |
| Church dashboard (leader aggregates) | Complete (basic aggregates) |
| Push subscribe/send API | Complete; sending needs your cron + VAPID keys; send is admin-gated |
| Admin dashboard (roles, flags, analytics) | Complete; grant first admin via SQL |
| Privacy-respecting analytics | Complete (event allowlist, batched client logger, `/admin/analytics`) |
| Entitlement flags (free/premium/church-ready) | Complete (architecture only; nothing paywalled) |
| Notification preferences (opt-in reminders) | Complete; scheduler is deployer-operated (see README) |
| Text size control, focus states, reduced-motion support, skip link | Complete |
| Mobile bottom navigation | Complete (primary tabs on small screens) |
| AI tutor | Scaffolded API — needs your LLM key |
| Offline | Chapters + shell cached; full offline library not pre-bundled |
| Native iOS/Android store apps | **Not included** — this is a PWA. Store packaging (via Capacitor/Tauri or a React Native rebuild) is a separate step |

## Project structure

```
bible-app/
├── .env.example            # copy to web/.env.local; never commit secrets
├── README.md
├── supabase/
│   └── migrations/         # 0001_core.sql (schema+RLS), 0002_patch.sql
└── web/                    # Next.js 14 app (deploy root)
    ├── app/                # routes: page (home), study, learn, bible, search,
    │                       # life, devotional, courses, jesus, people, places,
    │                       # timeline, quizzes, review, journal, prayer, plans,
    │                       # groups, verse-image, dashboard, tutor, settings,
    │                       # more, login, admin (overview, analytics, roles, flags),
    │                       # api/{tutor,push,analytics}
    ├── components/         # ui, Nav (mobile bottom nav), QuizRunner, DailyVerse,
    │                       # KidsMode, RouteTracker, TextScale, …
    ├── content/            # bundled curriculum data (books, chapters, people,
    │                       # places, timeline, lexicon, life topics,
    │                       # devotionals, lessons, courses, quiz bank, jesus)
    ├── i18n/               # en (complete), es/pt (scaffolded) UI strings
    ├── lib/                # bible.ts (text fetching+cache), study.ts (session
    │                       # builder), srs.ts, tts.ts, push.ts, plans.ts, i18n,
    │                       # analytics.ts (client logger), admin.ts (server-only
    │                       # role checks + stats), entitlements.ts (flags/premium),
    │                       # ratelimit.ts (API rate limiting)
    ├── public/             # manifest, sw.js, icons
    └── middleware.ts       # Supabase session refresh (graceful w/o env)
```

## Content notes

All bundled teaching content is original and Scripture-central. Scripture quotations use public-domain translations (WEB/KJV/ASV) and are kept short. Life-application guides include an honest "what the Bible does NOT say" section per topic.

## Scripts

```bash
cd web
npm run dev      # local dev
npm run build    # production build (must be green)
npm run start    # serve production build
npm run lint     # eslint
```
