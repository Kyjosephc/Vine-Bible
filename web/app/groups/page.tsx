'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { useT } from '@/lib/i18n';
import { Button, Card, SectionTitle, EmptyState, Spinner, Badge } from '@/components/ui';

interface GroupRow {
  id: string;
  name: string;
  description: string;
  join_code: string;
  created_at: string;
  role: string;
}

function useTr() {
  const { t } = useT();
  // i18n keys are plain English sentences: t() returns the key itself when
  // untranslated, so the UI degrades gracefully to English.
  return (key: string, fallback?: string): string => t(key, fallback);
}

function makeJoinCode(): string {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i += 1) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return code;
}

export default function GroupsPage() {
  const tr = useTr();
  const [userId, setUserId] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [groups, setGroups] = useState<GroupRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  async function load(uid: string) {
    try {
      const supabase = createClient();
      const { data, error: qErr } = await supabase
        .from('group_members')
        .select('role, groups(id, name, description, join_code, created_at)')
        .eq('user_id', uid);
      if (qErr) throw qErr;
      const rows = ((data ?? []) as { role: string; groups: GroupRow | GroupRow[] | null }[]).map(
        (r) => {
          const g = Array.isArray(r.groups) ? r.groups[0] : r.groups;
          return { ...(g as GroupRow), role: r.role };
        },
      );
      setGroups(rows.filter((g) => g && g.id));
    } catch {
      setError(tr('Could not load your groups. Please try again.'));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void (async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setAuthChecked(true);
      if (!user) {
        setLoading(false);
        return;
      }
      setUserId(user.id);
      await load(user.id);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function createGroup() {
    if (!userId || !name.trim()) return;
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      const supabase = createClient();
      const code = makeJoinCode();
      const { data, error: iErr } = await supabase
        .from('groups')
        .insert({ name: name.trim(), description: description.trim(), join_code: code, created_by: userId })
        .select('id')
        .single();
      if (iErr) throw iErr;
      const groupId = (data as { id: string }).id;
      const { error: mErr } = await supabase
        .from('group_members')
        .insert({ group_id: groupId, user_id: userId, role: 'leader' });
      if (mErr) throw mErr;
      setName('');
      setDescription('');
      setNotice(tr('Group created! Share this code so others can join:') + ` ${code}`);
      await load(userId);
    } catch {
      setError(tr('Could not create the group. Please try again.'));
    } finally {
      setBusy(false);
    }
  }

  async function joinGroup() {
    if (!userId || !joinCode.trim()) return;
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      const supabase = createClient();
      const code = joinCode.trim().toUpperCase();
      const { data: found, error: fErr } = await supabase
        .from('groups')
        .select('id, name')
        .eq('join_code', code)
        .maybeSingle();
      if (fErr) throw fErr;
      if (!found) {
        setError(tr('No group found with that code. Check it and try again.'));
        return;
      }
      const group = found as { id: string; name: string };
      const { data: existing } = await supabase
        .from('group_members')
        .select('id')
        .eq('group_id', group.id)
        .eq('user_id', userId)
        .maybeSingle();
      if (!existing) {
        const { error: jErr } = await supabase
          .from('group_members')
          .insert({ group_id: group.id, user_id: userId, role: 'member' });
        if (jErr) throw jErr;
      }
      setJoinCode('');
      setNotice(tr('You joined') + ` “${group.name}”.`);
      await load(userId);
    } catch {
      setError(tr('Could not join the group. Please try again.'));
    } finally {
      setBusy(false);
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
          <SectionTitle>{tr('Sign in to join groups')}</SectionTitle>
          <p className="mt-2 text-slate-300">
            {tr('Read together, encourage one another, and track shared plans.')}
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
      <SectionTitle>{tr('Groups')}</SectionTitle>
      {error && <p className="mt-4 rounded-xl bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}
      {notice && (
        <p className="mt-4 rounded-xl bg-emerald-500/10 p-3 text-sm text-emerald-300">{notice}</p>
      )}

      <div className="mt-6 space-y-3">
        <h2 className="font-display text-xl text-slate-100">{tr('My groups')}</h2>
        {groups.length === 0 ? (
          <EmptyState
            title={tr('No groups yet')}
            description={tr('Create one below or join with a code from a friend.')}
          />
        ) : (
          groups.map((g) => (
            <Link key={g.id} href={`/groups/${g.id}`} className="block">
              <Card className="p-4 transition hover:border-[#C9A227]/50">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg text-slate-100">{g.name}</h3>
                  {g.role === 'leader' && <Badge>{tr('Leader')}</Badge>}
                </div>
                {g.description && <p className="mt-1 text-sm text-slate-400">{g.description}</p>}
                <p className="mt-2 text-xs text-slate-500">
                  {tr('Join code')}: <span className="font-mono text-slate-300">{g.join_code}</span>
                </p>
              </Card>
            </Link>
          ))
        )}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Card className="p-4">
          <h2 className="font-display text-lg text-slate-100">{tr('Create a group')}</h2>
          <label className="mt-3 block text-sm text-slate-200">
            {tr('Group name')}
            <input
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={tr('e.g. Tuesday Bible Study')}
            />
          </label>
          <label className="mt-3 block text-sm text-slate-200">
            {tr('Description (optional)')}
            <input
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <div className="mt-3">
            <Button onClick={createGroup} disabled={busy || !name.trim()}>
              {tr('Create group')}
            </Button>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="font-display text-lg text-slate-100">{tr('Join a group')}</h2>
          <label className="mt-3 block text-sm text-slate-200">
            {tr('Join code')}
            <input
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 font-mono uppercase text-slate-100 placeholder:text-slate-500"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
              placeholder="ABC123"
              maxLength={6}
            />
          </label>
          <div className="mt-3">
            <Button onClick={joinGroup} disabled={busy || !joinCode.trim()}>
              {tr('Join group')}
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
