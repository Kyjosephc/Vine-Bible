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
| Push subscribe/send API | Complete; sending needs your cron + VAPID keys |
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
    │                       # more, login, api/{tutor,push}
    ├── components/         # ui, Nav, QuizRunner, DailyVerse, KidsMode, …
    ├── content/            # bundled curriculum data (books, chapters, people,
    │                       # places, timeline, lexicon, life topics,
    │                       # devotionals, lessons, courses, quiz bank, jesus)
    ├── i18n/               # en (complete), es/pt (scaffolded) UI strings
    ├── lib/                # bible.ts (text fetching+cache), study.ts (session
    │                       # builder), srs.ts, tts.ts, push.ts, plans.ts, i18n
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
