'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { useT } from '@/lib/i18n';
import { useKids } from '@/components/KidsMode';
import { subscribePush, unsubscribePush, getPushSubscription } from '@/lib/push';
import {
  DEFAULT_REMINDER_PREFS,
  loadLocalReminderPrefs,
  saveLocalReminderPrefs,
  type ReminderPrefs,
} from '@/lib/push';
import { TEXT_SCALES, TEXT_SCALE_KEY, applyTextScale, loadTextScale, type TextScaleId } from '@/components/TextScale';
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
  const [prefs, setPrefs] = useState<ReminderPrefs>({ ...DEFAULT_REMINDER_PREFS });
  const [prefsSaving, setPrefsSaving] = useState(false);
  const [prefsSaved, setPrefsSaved] = useState(false);
  const [textScale, setTextScale] = useState<TextScaleId>('default');
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const vapidConfigured =
    typeof process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY === 'string' &&
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY.length > 0;

  useEffect(() => {
    void (async () => {
      setPrefs(loadLocalReminderPrefs());
      try {
        setTextScale(loadTextScale());
      } catch {
        // ignore
      }
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
          .select(
            'display_name, daily_reminder_enabled, daily_reminder_time, review_reminders, streak_reminders',
          )
          .eq('id', user.id)
          .maybeSingle();
        const row = (data as {
          display_name?: unknown;
          daily_reminder_enabled?: unknown;
          daily_reminder_time?: unknown;
          review_reminders?: unknown;
          streak_reminders?: unknown;
        } | null) ?? null;
        const name = row?.display_name;
        if (typeof name === 'string') setDisplayName(name);
        // Server prefs win when signed in (they drive the reminder scheduler).
        if (row) {
          setPrefs((prev) => {
            const merged: ReminderPrefs = {
              daily_reminder_enabled: row.daily_reminder_enabled === true,
              daily_reminder_time:
                typeof row.daily_reminder_time === 'string' &&
                /^([01]\d|2[0-3]):[0-5]\d$/.test(row.daily_reminder_time)
                  ? row.daily_reminder_time
                  : prev.daily_reminder_time,
              review_reminders: row.review_reminders === true,
              streak_reminders: row.streak_reminders === true,
            };
            saveLocalReminderPrefs(merged);
            return merged;
          });
        }
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

  async function saveReminderPrefs(next: ReminderPrefs) {
    setPrefs(next);
    saveLocalReminderPrefs(next);
    setPrefsSaved(false);
    setError(null);
    if (!userId) return;
    setPrefsSaving(true);
    try {
      const supabase = createClient();
      const { error: uErr } = await supabase.from('profiles').upsert(
        {
          id: userId,
          daily_reminder_enabled: next.daily_reminder_enabled,
          daily_reminder_time: next.daily_reminder_time,
          review_reminders: next.review_reminders,
          streak_reminders: next.streak_reminders,
        },
        { onConflict: 'id' },
      );
      if (uErr) throw uErr;
      setPrefsSaved(true);
      setTimeout(() => setPrefsSaved(false), 2000);
    } catch {
      setError(tr('Could not save your reminder settings. Please try again.'));
    } finally {
      setPrefsSaving(false);
    }
  }

  function changeTextScale(id: TextScaleId) {
    setTextScale(id);
    applyTextScale(id);
    try {
      window.localStorage.setItem(TEXT_SCALE_KEY, id);
    } catch {
      // ignore
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
        <h2 className="font-display text-lg text-slate-100">{tr('Study reminders')}</h2>
        <p className="mt-1 text-sm text-slate-400">
          {tr(
            'Optional nudges so your habit survives a busy week. All of these are off unless you turn them on — no streak guilt, ever.',
          )}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/5 pt-4">
          <div>
            <p className="text-sm font-medium text-slate-200">{tr('Daily study reminder')}</p>
            <p className="mt-0.5 text-xs text-slate-400">
              {tr('A gentle notification at a time you choose.')}
            </p>
          </div>
          <ToggleSwitch
            checked={prefs.daily_reminder_enabled}
            onChange={(v) => void saveReminderPrefs({ ...prefs, daily_reminder_enabled: v })}
            label={tr('Daily study reminder')}
          />
        </div>
        {prefs.daily_reminder_enabled && (
          <label className="mt-3 block text-sm text-slate-200">
            {tr('Remind me at')}
            <input
              type="time"
              value={prefs.daily_reminder_time}
              onChange={(e) => void saveReminderPrefs({ ...prefs, daily_reminder_time: e.target.value })}
              className="mt-1 block rounded-xl border border-white/10 bg-[#101828] px-3 py-2 text-slate-100"
            />
          </label>
        )}

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/5 pt-4">
          <div>
            <p className="text-sm font-medium text-slate-200">{tr('Review reminders')}</p>
            <p className="mt-0.5 text-xs text-slate-400">
              {tr('Let me know when verses or quiz questions are due for review.')}
            </p>
          </div>
          <ToggleSwitch
            checked={prefs.review_reminders}
            onChange={(v) => void saveReminderPrefs({ ...prefs, review_reminders: v })}
            label={tr('Review reminders')}
          />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/5 pt-4">
          <div>
            <p className="text-sm font-medium text-slate-200">{tr('Streak encouragement')}</p>
            <p className="mt-0.5 text-xs text-slate-400">
              {tr('A kind note when you keep your study streak going. Nothing if you miss a day.')}
            </p>
          </div>
          <ToggleSwitch
            checked={prefs.streak_reminders}
            onChange={(v) => void saveReminderPrefs({ ...prefs, streak_reminders: v })}
            label={tr('Streak encouragement')}
          />
        </div>

        <p className="mt-4 text-xs text-slate-500">
          {pushOn
            ? tr('Reminders are delivered as push notifications on this device.')
            : tr('Turn on push notifications above to receive reminders on this device.')}
          {prefsSaving ? ` ${tr('Saving…')}` : ''}
          {prefsSaved ? ` ${tr('Saved!')}` : ''}
        </p>
      </Card>

      <Card className="mt-4 p-5">
        <h2 className="font-display text-lg text-slate-100">{tr('Text size')}</h2>
        <p className="mt-1 text-sm text-slate-400">
          {tr('Make all text in the app smaller or larger.')}
        </p>
        <div className="mt-3 grid grid-cols-4 gap-2" role="group" aria-label={tr('Text size')}>
          {TEXT_SCALES.map((s) => {
            const active = textScale === s.id;
            return (
              <button
                key={s.id}
                type="button"
                aria-pressed={active}
                onClick={() => changeTextScale(s.id)}
                className={`rounded-xl border px-3 py-2 text-sm transition ${
                  active
                    ? 'border-[#C9A227] bg-[#C9A227]/15 text-[#C9A227]'
                    : 'border-white/10 text-slate-300 hover:bg-white/5'
                }`}
              >
                {s.label}
              </button>
            );
          })}
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

function ToggleSwitch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-8 w-14 shrink-0 rounded-full transition ${
        checked ? 'bg-[#C9A227]' : 'bg-white/10'
      }`}
    >
      <span
        className={`absolute top-1 h-6 w-6 rounded-full bg-white transition-all ${
          checked ? 'left-7' : 'left-1'
        }`}
      />
    </button>
  );
}
