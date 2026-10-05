'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { useT } from '@/lib/i18n';
import { Button, Card, SectionTitle, EmptyState, Spinner, Badge } from '@/components/ui';

interface PrayerRequest {
  id: string;
  title: string;
  detail: string;
  answered_at: string | null;
  reminder_note: string;
  created_at: string;
}

function useTr() {
  const { t } = useT();
  // i18n keys are plain English sentences: t() returns the key itself when
  // untranslated, so the UI degrades gracefully to English.
  return (key: string, fallback?: string): string => t(key, fallback);
}

export default function PrayerPage() {
  const tr = useTr();
  const [userId, setUserId] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [requests, setRequests] = useState<PrayerRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [noteDrafts, setNoteDrafts] = useState<Record<string, string>>({});

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setAuthChecked(true);
      if (!user) {
        setUserId(null);
        setLoading(false);
        return;
      }
      setUserId(user.id);
      const { data, error: qErr } = await supabase
        .from('prayer_requests')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      if (qErr) throw qErr;
      const rows = (data ?? []) as PrayerRequest[];
      setRequests(rows);
      const drafts: Record<string, string> = {};
      for (const r of rows) drafts[r.id] = r.reminder_note ?? '';
      setNoteDrafts(drafts);
    } catch {
      setError(tr('Could not load your prayer list. Please try again.'));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function addRequest() {
    if (!userId || !title.trim()) return;
    setSaving(true);
    setError(null);
    try {
      const supabase = createClient();
      const { error: iErr } = await supabase.from('prayer_requests').insert({
        user_id: userId,
        title: title.trim(),
        detail: detail.trim(),
        answered_at: null,
        reminder_note: '',
      });
      if (iErr) throw iErr;
      setTitle('');
      setDetail('');
      await load();
    } catch {
      setError(tr('Could not save this request. Please try again.'));
    } finally {
      setSaving(false);
    }
  }

  async function toggleAnswered(r: PrayerRequest) {
    try {
      const supabase = createClient();
      const next = r.answered_at ? null : new Date().toISOString();
      const { error: uErr } = await supabase
        .from('prayer_requests')
        .update({ answered_at: next })
        .eq('id', r.id);
      if (uErr) throw uErr;
      setRequests((prev) => prev.map((x) => (x.id === r.id ? { ...x, answered_at: next } : x)));
    } catch {
      setError(tr('Could not update this request. Please try again.'));
    }
  }

  async function remove(id: string) {
    if (!window.confirm(tr('Delete this prayer request?'))) return;
    try {
      const supabase = createClient();
      const { error: dErr } = await supabase.from('prayer_requests').delete().eq('id', id);
      if (dErr) throw dErr;
      setRequests((prev) => prev.filter((x) => x.id !== id));
    } catch {
      setError(tr('Could not delete this request. Please try again.'));
    }
  }

  async function saveNote(r: PrayerRequest) {
    const note = (noteDrafts[r.id] ?? '').trim();
    if (note === (r.reminder_note ?? '')) return;
    try {
      const supabase = createClient();
      const { error: uErr } = await supabase
        .from('prayer_requests')
        .update({ reminder_note: note })
        .eq('id', r.id);
      if (uErr) throw uErr;
      setRequests((prev) => prev.map((x) => (x.id === r.id ? { ...x, reminder_note: note } : x)));
    } catch {
      setError(tr('Could not save the reminder note. Please try again.'));
    }
  }

  if (!authChecked || loading) {
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
          <SectionTitle>{tr('Sign in to keep a prayer list')}</SectionTitle>
          <p className="mt-2 text-slate-300">
            {tr('Track requests and celebrate answered prayers.')}
          </p>
          <Link href="/login" className="mt-4 inline-block">
            <Button>{tr('Log in')}</Button>
          </Link>
        </Card>
      </main>
    );
  }

  const active = requests.filter((r) => !r.answered_at);
  const answered = requests.filter((r) => r.answered_at);

  function renderCard(r: PrayerRequest) {
    return (
      <Card key={r.id} className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg text-slate-100">{r.title}</h3>
            <p className="text-xs text-slate-400">{new Date(r.created_at).toLocaleDateString()}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {r.answered_at && <Badge>{tr('Answered')}</Badge>}
            <button
              type="button"
              onClick={() => void toggleAnswered(r)}
              className="rounded-lg border border-[#C9A227]/40 px-2.5 py-1.5 text-xs font-medium text-[#C9A227] hover:bg-[#C9A227]/10"
            >
              {r.answered_at
                ? tr('Reopen')
                : tr('Mark answered')}
            </button>
            <button
              type="button"
              onClick={() => void remove(r.id)}
              className="rounded-lg border border-white/10 px-2.5 py-1.5 text-xs text-red-300 hover:bg-white/10"
            >
              {tr('Delete')}
            </button>
          </div>
        </div>
        {r.detail && <p className="mt-2 whitespace-pre-wrap text-sm text-slate-300">{r.detail}</p>}
        {r.answered_at && (
          <p className="mt-2 text-xs text-[#C9A227]">
            {tr('Answered on')} {new Date(r.answered_at).toLocaleDateString()}
          </p>
        )}
        <div className="mt-3">
          <label className="block text-xs font-medium text-slate-400">
            {tr('Remind me note')}
            <span className="font-normal text-slate-500">
              {' '}
              — {tr('a personal nudge; push reminders arrive when notifications are enabled in Settings')}
            </span>
            <div className="mt-1 flex gap-2">
              <input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500"
                value={noteDrafts[r.id] ?? ''}
                onChange={(e) => setNoteDrafts((prev) => ({ ...prev, [r.id]: e.target.value }))}
                onBlur={() => void saveNote(r)}
                placeholder={tr('e.g. pray each morning this week')}
              />
              <button
                type="button"
                onClick={() => void saveNote(r)}
                className="shrink-0 rounded-xl border border-white/10 px-3 py-2 text-xs text-slate-200 hover:bg-white/10"
              >
                {tr('Save')}
              </button>
            </div>
          </label>
        </div>
      </Card>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <SectionTitle>{tr('Prayer')}</SectionTitle>
      {error && <p className="mt-4 rounded-xl bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}

      <Card className="mt-4 p-4">
        <label className="block text-sm font-medium text-slate-200">
          {tr('Prayer request')}
          <input
            className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={tr('What are you praying for?')}
          />
        </label>
        <label className="mt-3 block text-sm font-medium text-slate-200">
          {tr('Details (optional)')}
          <textarea
            className="mt-1 min-h-20 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-500"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            placeholder={tr('Names, situations, Scripture you are standing on…')}
          />
        </label>
        <div className="mt-3">
          <Button onClick={addRequest} disabled={saving || !title.trim()}>
            {saving ? tr('Saving…') : tr('Add request')}
          </Button>
        </div>
      </Card>

      <div className="mt-8">
        <h2 className="font-display text-xl text-slate-100">
          {tr('Praying now')} ({active.length})
        </h2>
        <div className="mt-3 space-y-4">
          {active.length === 0 ? (
            <EmptyState
              title={tr('Nothing here yet')}
              description={tr('Add a request above and keep it before God.')}
            />
          ) : (
            active.map(renderCard)
          )}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-xl text-slate-100">
          {tr('Answered prayers')} ({answered.length})
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          {tr('A log of God\u2019s faithfulness — worth revisiting.')}
        </p>
        <div className="mt-3 space-y-4">
          {answered.length === 0 ? (
            <EmptyState
              title={tr('No answered prayers yet')}
              description={tr('When God moves, mark it answered here.')}
            />
          ) : (
            answered.map(renderCard)
          )}
        </div>
      </div>
    </main>
  );
}
