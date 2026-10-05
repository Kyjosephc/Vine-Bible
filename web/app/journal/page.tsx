'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { useT } from '@/lib/i18n';
import { Button, Card, SectionTitle, EmptyState, Spinner } from '@/components/ui';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  ref: string;
  created_at: string;
  updated_at: string;
}

function useTr() {
  const { t } = useT();
  // i18n keys are plain English sentences: t() returns the key itself when
  // untranslated, so the UI degrades gracefully to English.
  return (key: string, fallback?: string): string => t(key, fallback);
}

const EMPTY_FORM = { id: '', title: '', ref: '', content: '' };

export default function JournalPage() {
  const tr = useTr();
  const [userId, setUserId] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editorOpen, setEditorOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
        .from('journal_entries')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      if (qErr) throw qErr;
      setEntries((data ?? []) as JournalEntry[]);
    } catch {
      setError(tr('Could not load your journal. Please try again.'));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function openNew() {
    setForm(EMPTY_FORM);
    setEditorOpen(true);
  }

  function openEdit(entry: JournalEntry) {
    setForm({ id: entry.id, title: entry.title ?? '', ref: entry.ref ?? '', content: entry.content ?? '' });
    setEditorOpen(true);
  }

  async function save() {
    if (!userId) return;
    if (!form.content.trim()) {
      setError(tr('Write something before saving.'));
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const supabase = createClient();
      const payload = {
        user_id: userId,
        title: form.title.trim() || tr('Untitled'),
        ref: form.ref.trim(),
        content: form.content.trim(),
        updated_at: new Date().toISOString(),
      };
      if (form.id) {
        const { error: uErr } = await supabase.from('journal_entries').update(payload).eq('id', form.id);
        if (uErr) throw uErr;
      } else {
        const { error: iErr } = await supabase.from('journal_entries').insert(payload);
        if (iErr) throw iErr;
      }
      setEditorOpen(false);
      setForm(EMPTY_FORM);
      await load();
    } catch {
      setError(tr('Could not save this entry. Please try again.'));
    } finally {
      setSaving(false);
    }
  }

  async function remove(id: string) {
    if (!window.confirm(tr('Delete this entry? This cannot be undone.'))) return;
    try {
      const supabase = createClient();
      const { error: dErr } = await supabase.from('journal_entries').delete().eq('id', id);
      if (dErr) throw dErr;
      setEntries((prev) => prev.filter((e) => e.id !== id));
    } catch {
      setError(tr('Could not delete this entry. Please try again.'));
    }
  }

  function exportMarkdown() {
    const lines = entries
      .slice()
      .reverse()
      .map((e) => {
        const date = new Date(e.created_at).toLocaleDateString();
        const header = e.ref ? `# ${e.title}\n\n*${e.ref} — ${date}*` : `# ${e.title}\n\n*${date}*`;
        return `${header}\n\n${e.content}`;
      });
    const md = `# ${tr('My Journal')}\n\n${lines.join('\n\n---\n\n')}\n`;
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lumen-journal-${new Date().toISOString().slice(0, 10)}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
          <SectionTitle>{tr('Sign in to keep a journal')}</SectionTitle>
          <p className="mt-2 text-slate-300">
            {tr('Your journal entries are private to your account.')}
          </p>
          <Link href="/login" className="mt-4 inline-block">
            <Button>{tr('Log in')}</Button>
          </Link>
        </Card>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <div className="flex items-center justify-between">
        <SectionTitle>{tr('Journal')}</SectionTitle>
        <div className="flex gap-2">
          {entries.length > 0 && (
            <Button onClick={exportMarkdown}>{tr('Export')}</Button>
          )}
          <Button onClick={openNew}>{tr('New entry')}</Button>
        </div>
      </div>

      {error && <p className="mt-4 rounded-xl bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}

      {editorOpen && (
        <Card className="mt-4 p-4">
          <label className="block text-sm font-medium text-slate-200">
            {tr('Title')}
            <input
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-500"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder={tr('Give this entry a title')}
            />
          </label>
          <label className="mt-3 block text-sm font-medium text-slate-200">
            {tr('Scripture reference (optional)')}
            <input
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-500"
              value={form.ref}
              onChange={(e) => setForm({ ...form, ref: e.target.value })}
              placeholder={tr('e.g. Psalm 23')}
            />
          </label>
          <label className="mt-3 block text-sm font-medium text-slate-200">
            {tr('Entry')}
            <textarea
              className="mt-1 min-h-40 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-500"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder={tr('What is God showing you today?')}
            />
          </label>
          <div className="mt-4 flex gap-2">
            <Button onClick={save} disabled={saving}>
              {saving ? tr('Saving…') : tr('Save')}
            </Button>
            <Button
              onClick={() => {
                setEditorOpen(false);
                setForm(EMPTY_FORM);
              }}
            >
              {tr('Cancel')}
            </Button>
          </div>
        </Card>
      )}

      <div className="mt-6 space-y-4">
        {entries.length === 0 && !editorOpen ? (
          <EmptyState
            title={tr('No entries yet')}
            description={tr('Capture what you are learning as you read.')}
          />
        ) : (
          entries.map((e) => (
            <Card key={e.id} className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg text-slate-100">{e.title}</h3>
                  <p className="text-xs text-slate-400">
                    {e.ref ? `${e.ref} · ` : ''}
                    {new Date(e.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() => openEdit(e)}
                    className="rounded-lg border border-white/10 px-2.5 py-1.5 text-xs text-slate-200 hover:bg-white/10"
                  >
                    {tr('Edit')}
                  </button>
                  <button
                    type="button"
                    onClick={() => void remove(e.id)}
                    className="rounded-lg border border-white/10 px-2.5 py-1.5 text-xs text-red-300 hover:bg-white/10"
                  >
                    {tr('Delete')}
                  </button>
                </div>
              </div>
              <p className="mt-2 whitespace-pre-wrap text-sm text-slate-300">{e.content}</p>
            </Card>
          ))
        )}
      </div>
    </main>
  );
}
