# Supabase setup walkthrough — Lumen Bible

Takes ~10 minutes. Do these in order; check each one before moving on.

## 1. Create the project
1. Go to **supabase.com** and sign up (or sign in).
2. Click **New project** → name it `lumen-bible`, keep the free plan.
3. Pick a region close to you (US West). Set a database password and **save it somewhere**.
4. Wait ~2 minutes while it spins up. ✅ Done when the dashboard home loads.

## 2. Run the two migrations
1. Left sidebar → **SQL Editor** → **New query**.
2. Open `supabase/migrations/0001_core.sql` on your computer, copy everything, paste it in, click **Run** (or Ctrl/Cmd+Enter).
3. Repeat with `0002_patch.sql`.
4. Check: **Table Editor** should show 16 tables (profiles, highlights, journal_entries, …). ✅ If you see them, the database is ready.

## 3. Copy your keys
1. **Project Settings** (gear icon) → **API**.
2. Copy the **Project URL** and the **anon public** key. ✅ Done — keep these handy.

## 4. Connect the app
In a terminal, from the `bible-app` folder:
```bash
cp .env.example web/.env.local
```
Open `web/.env.local` and fill in:
```
NEXT_PUBLIC_SUPABASE_URL=https://<your-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
```
✅ Done — never commit this file.

## 5. Run it locally
```bash
cd web
npm install
npm run dev
```
Open **http://localhost:3000** → **Login** → sign up with your email (magic link, no password). ✅ Done when you're logged in and your progress saves.

## 6. Go live (Vercel)
1. Push the `bible-app` folder to GitHub (**do not** commit `web/.env.local`).
2. **vercel.com** → Add New Project → import the repo → set **Root Directory** to `web`.
3. Settings → Environment Variables: add the same two keys from step 3.
4. Deploy. ✅ Live at `https://<project>.vercel.app`.

## Optional but worth doing
- **Google login:** Supabase → Auth → Providers → enable **Google**. Make OAuth credentials in Google Cloud Console with redirect URI `https://<your-ref>.supabase.co/auth/v1/callback`, paste Client ID/Secret back into Supabase.
- **Email that doesn't hit spam:** Project Settings → Auth → SMTP → add your own sender (needed for production).

## Troubleshooting
- **"Supabase not configured" in the app** → `.env.local` is missing or the keys have a typo; restart the dev server after editing.
- **Signup works but nothing saves** → migrations didn't run; re-check the Table Editor for the 16 tables.
- **Magic link never arrives** → check spam, or set up custom SMTP (above).
