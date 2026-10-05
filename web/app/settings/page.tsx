'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { useT } from '@/lib/i18n';
import { useKids } from '@/components/KidsMode';
import { subscribePush, unsubscribePush, getPushSubscription } from '@/lib/push';
import { Button, Card, SectionTitle, Spinner } from '@/components/ui';

function useTr() {
  const { t } = useT();
  // i18n keys are plain English sentences: t() returns the key itself when
  // untranslated, so the UI degrades gracefully to English.
  return (key: string, fallback?: string): string => t(key, fallback);
}

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
  { code: 'fr', label: 'Français' },
];

export default function SettingsPage() {
  const tr = useTr();
  const { lang, setLang } = useT();
  const { kids, setKids } = useKids();

  const [userId, setUserId] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [authChecked, setAuthChecked] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [nameSaved, setNameSaved] = useState(false);
  const [pushOn, setPushOn] = useState(false);
  const [pushBusy, setPushBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const vapidConfigured =
    typeof process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY === 'string' &&
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY.length > 0;

  useEffect(() => {
    void (async () => {
      try {
        const supabase = createClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setAuthChecked(true);
        if (!user) return;
        setUserId(user.id);
        setEmail(user.email ?? '');
        const { data } = await supabase
          .from('profiles')
          .select('display_name')
          .eq('id', user.id)
          .maybeSingle();
        const name = (data as { display_name?: unknown } | null)?.display_name;
        if (typeof name === 'string') setDisplayName(name);
      } catch {
        // stay signed-out view
      }
      try {
        const sub = await getPushSubscription();
        setPushOn(!!sub);
      } catch {
        // push unsupported — leave off
      }
    })();
  }, []);

  async function saveName() {
    if (!userId) return;
    setError(null);
    setNameSaved(false);
    try {
      const supabase = createClient();
      const { error: uErr } = await supabase
        .from('profiles')
        .upsert({ id: userId, display_name: displayName.trim() }, { onConflict: 'id' });
      if (uErr) throw uErr;
      setNameSaved(true);
      setTimeout(() => setNameSaved(false), 2000);
    } catch {
      setError(tr('Could not save your name. Please try again.'));
    }
  }

  async function togglePush() {
    if (pushBusy) return;
    setPushBusy(true);
    setError(null);
    setNotice(null);
    try {
      if (pushOn) {
        const sub = await getPushSubscription();
        const endpoint = sub ? sub.endpoint : '';
        if (endpoint) {
          await fetch('/api/push/subscribe', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ endpoint }),
          });
        }
        await unsubscribePush();
        setPushOn(false);
        setNotice(tr('Push notifications turned off on this device.'));
      } else {
        const sub = await subscribePush();
        if (!sub) {
          setError(
            tr(
              'settings.pushFail',
              'Could not enable notifications. Check that notifications are allowed and a VAPID key is configured.',
            ),
          );
          return;
        }
        const res = await fetch('/api/push/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ subscription: sub.toJSON() }),
        });
        if (!res.ok) throw new Error('subscribe failed');
        setPushOn(true);
        setNotice(tr('Push notifications enabled on this device.'));
      }
    } catch {
      setError(tr('Something went wrong with notifications. Please try again.'));
    } finally {
      setPushBusy(false);
    }
  }

  async function signOut() {
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
    } finally {
      window.location.href = '/';
    }
  }

  if (!authChecked) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-8">
        <Spinner />
      </main>
    );
  }

  if (!userId) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-8">
        <Card className="p-6 text-center">
          <SectionTitle>{tr('Sign in to manage settings')}</SectionTitle>
          <Link href="/login" className="mt-4 inline-block">
            <Button>{tr('Log in')}</Button>
          </Link>
        </Card>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <SectionTitle>{tr('Settings')}</SectionTitle>
      {error && <p className="mt-4 rounded-xl bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}
      {notice && (
        <p className="mt-4 rounded-xl bg-emerald-500/10 p-3 text-sm text-emerald-300">{notice}</p>
      )}

      <Card className="mt-6 p-5">
        <h2 className="font-display text-lg text-slate-100">{tr('Profile')}</h2>
        <p className="mt-1 text-sm text-slate-400">{email}</p>
        <label className="mt-3 block text-sm font-medium text-slate-200">
          {tr('Display name')}
          <div className="mt-1 flex gap-2">
            <input
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-500"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder={tr('How should we call you?')}
            />
            <Button onClick={saveName} className="shrink-0">
              {nameSaved ? tr('Saved!') : tr('Save')}
            </Button>
          </div>
        </label>
      </Card>

      <Card className="mt-4 p-5">
        <h2 className="font-display text-lg text-slate-100">{tr('Language')}</h2>
        <select
          className="mt-2 w-full rounded-xl border border-white/10 bg-[#101828] px-3 py-2 text-slate-100"
          value={lang}
          onChange={(e) => {
            setLang(e.target.value);
            window.location.reload();
          }}
        >
          {LANGUAGES.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>
      </Card>

      <Card className="mt-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-lg text-slate-100">{tr('Kids mode')}</h2>
            <p className="mt-1 text-sm text-slate-400">
              {tr('Larger text and a simpler reading experience.')}
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={kids}
            onClick={() => setKids(!kids)}
            className={`relative h-8 w-14 shrink-0 rounded-full transition ${
              kids ? 'bg-[#C9A227]' : 'bg-white/10'
            }`}
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-white transition-all ${
                kids ? 'left-7' : 'left-1'
              }`}
            />
          </button>
        </div>
      </Card>

      <Card className="mt-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-lg text-slate-100">
              {tr('Push notifications')}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {vapidConfigured
                ? tr('Daily reading reminders and group updates on this device.')
                : tr('Not configured yet — the deployer must set a VAPID key.')}
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={pushOn}
            disabled={pushBusy || !vapidConfigured}
            onClick={() => void togglePush()}
            className={`relative h-8 w-14 shrink-0 rounded-full transition ${
              pushOn ? 'bg-[#C9A227]' : 'bg-white/10'
            } ${!vapidConfigured ? 'opacity-40' : ''}`}
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-white transition-all ${
                pushOn ? 'left-7' : 'left-1'
              }`}
            />
          </button>
        </div>
      </Card>

      <Card className="mt-4 p-5">
        <h2 className="font-display text-lg text-slate-100">{tr('Account')}</h2>
        <div className="mt-3">
          <Button onClick={signOut}>{tr('Sign out')}</Button>
        </div>
      </Card>
    </main>
  );
}
