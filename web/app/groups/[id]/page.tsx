'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { useT } from '@/lib/i18n';
import { PLANS, getPlan } from '@/lib/plans';
import { Button, Card, SectionTitle, Badge, ProgressBar, Spinner, EmptyState } from '@/components/ui';

interface GroupInfo {
  id: string;
  name: string;
  description: string;
  join_code: string;
}

interface Member {
  user_id: string;
  role: string;
  display_name: string;
}

interface ChatMessage {
  id: string;
  user_id: string;
  body: string;
  created_at: string;
  display_name: string;
}

interface Assignment {
  id: string;
  plan_id: string;
  created_at: string;
}

interface MemberProgress {
  user_id: string;
  display_name: string;
  done: number;
  total: number;
  pct: number;
}

function useTr() {
  const { t } = useT();
  // i18n keys are plain English sentences: t() returns the key itself when
  // untranslated, so the UI degrades gracefully to English.
  return (key: string, fallback?: string): string => t(key, fallback);
}

export default function GroupDetailPage({ params }: { params: { id: string } }) {
  const tr = useTr();
  const groupId = params.id;
  const [userId, setUserId] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [group, setGroup] = useState<GroupInfo | null>(null);
  const [isLeader, setIsLeader] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [members, setMembers] = useState<Member[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [progress, setProgress] = useState<Record<string, MemberProgress[]>>({});
  const [draft, setDraft] = useState('');
  const [sending, setSending] = useState(false);
  const [planToAssign, setPlanToAssign] = useState('bible-in-a-year');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const loadNames = useCallback(async (ids: string[]): Promise<Record<string, string>> => {
    if (ids.length === 0) return {};
    const supabase = createClient();
    const { data } = await supabase.from('profiles').select('id, display_name').in('id', ids);
    const map: Record<string, string> = {};
    for (const p of (data ?? []) as { id: string; display_name: string | null }[]) {
      map[p.id] = p.display_name || tr('Member');
    }
    return map;
  }, [tr]);

  const loadThread = useCallback(async () => {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data, error: qErr } = await supabase
      .from('group_messages')
      .select('*')
      .eq('group_id', groupId)
      .order('created_at', { ascending: true })
      .limit(200);
    if (qErr) return;
    const rows = (data ?? []) as ChatMessage[];
    const names = await loadNames(rows.map((m) => m.user_id));
    setMessages(rows.map((m) => ({ ...m, display_name: names[m.user_id] ?? tr('Member') })));
  }, [groupId, loadNames, tr]);

  const loadProgress = useCallback(
    async (memberList: Member[], assignmentList: Assignment[]) => {
      if (memberList.length === 0 || assignmentList.length === 0) {
        setProgress({});
        return;
      }
      const supabase = createClient();
      const memberIds = memberList.map((m) => m.user_id);
      const planIds = [...new Set(assignmentList.map((a) => a.plan_id))];
      const { data } = await supabase
        .from('reading_plan_progress')
        .select('user_id, plan_id, day_index')
        .in('user_id', memberIds)
        .in('plan_id', planIds);
      const rows = (data ?? []) as { user_id: string; plan_id: string; day_index: number }[];
      const next: Record<string, MemberProgress[]> = {};
      for (const a of assignmentList) {
        const plan = getPlan(a.plan_id);
        const total = plan ? plan.days.length : 0;
        next[a.id] = memberList.map((m) => {
          const done = new Set(rows.filter((r) => r.user_id === m.user_id && r.plan_id === a.plan_id).map((r) => r.day_index)).size;
          return {
            user_id: m.user_id,
            display_name: m.display_name,
            done,
            total,
            pct: total === 0 ? 0 : Math.round((done / total) * 100),
          };
        });
      }
      setProgress(next);
    },
    [],
  );

  const loadAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
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

      const { data: gData, error: gErr } = await supabase
        .from('groups')
        .select('id, name, description, join_code')
        .eq('id', groupId)
        .maybeSingle();
      if (gErr) throw gErr;
      if (!gData) {
        setLoading(false);
        return;
      }
      setGroup(gData as GroupInfo);

      const { data: mData, error: mErr } = await supabase
        .from('group_members')
        .select('user_id, role')
        .eq('group_id', groupId);
      if (mErr) throw mErr;
      const mRows = (mData ?? []) as { user_id: string; role: string }[];
      const myRow = mRows.find((m) => m.user_id === user.id);
      setIsMember(!!myRow);
      setIsLeader(myRow?.role === 'leader');
      if (!myRow) {
        setLoading(false);
        return;
      }
      const names = await loadNames(mRows.map((m) => m.user_id));
      const memberList: Member[] = mRows.map((m) => ({
        user_id: m.user_id,
        role: m.role,
        display_name: m.user_id === user.id ? tr('You') : names[m.user_id] ?? tr('Member'),
      }));
      setMembers(memberList);

      const { data: aData } = await supabase
        .from('plan_assignments')
        .select('*')
        .eq('group_id', groupId)
        .order('created_at', { ascending: false });
      const assignmentList = (aData ?? []) as Assignment[];
      setAssignments(assignmentList);

      await loadThread();
      await loadProgress(memberList, assignmentList);
    } catch {
      setError(tr('Could not load this group. Please try again.'));
    } finally {
      setLoading(false);
    }
  }, [groupId, loadNames, loadThread, loadProgress, tr]);

  useEffect(() => {
    void loadAll();
  }, [loadAll]);

  // Poll the message thread + shared progress every 15 seconds.
  useEffect(() => {
    if (!isMember) return;
    const id = setInterval(() => {
      void loadThread();
      void (async () => {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const { data: mData } = await supabase.from('group_members').select('user_id').eq('group_id', groupId);
        const ids = ((mData ?? []) as { user_id: string }[]).map((m) => m.user_id);
        const names = await loadNames(ids);
        const memberList: Member[] = ids.map((uid) => ({
          user_id: uid,
          role: '',
          display_name: uid === user.id ? tr('You') : names[uid] ?? tr('Member'),
        }));
        await loadProgress(memberList, assignments);
      })();
    }, 15000);
    return () => clearInterval(id);
  }, [isMember, groupId, assignments, loadThread, loadProgress, loadNames, tr]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  async function sendMessage() {
    if (!userId || !draft.trim() || sending) return;
    setSending(true);
    try {
      const supabase = createClient();
      const { error: iErr } = await supabase.from('group_messages').insert({
        group_id: groupId,
        user_id: userId,
        body: draft.trim(),
      });
      if (iErr) throw iErr;
      setDraft('');
      await loadThread();
    } catch {
      setError(tr('Could not send your message. Please try again.'));
    } finally {
      setSending(false);
    }
  }

  async function assignPlan() {
    if (!isLeader || !planToAssign) return;
    if (assignments.some((a) => a.plan_id === planToAssign)) return;
    try {
      const supabase = createClient();
      const { error: iErr } = await supabase.from('plan_assignments').insert({
        group_id: groupId,
        plan_id: planToAssign,
        assigned_by: userId,
      });
      if (iErr) throw iErr;
      await loadAll();
    } catch {
      setError(tr('Could not assign the plan. Please try again.'));
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
          <SectionTitle>{tr('Sign in to view groups')}</SectionTitle>
          <Link href="/login" className="mt-4 inline-block">
            <Button>{tr('Log in')}</Button>
          </Link>
        </Card>
      </main>
    );
  }

  if (!group) notFound();

  if (!isMember) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-8">
        <Card className="p-6 text-center">
          <SectionTitle>{tr('You are not a member of this group')}</SectionTitle>
          <p className="mt-2 text-sm text-slate-400">
            {tr('Ask the group leader for the join code, then join from the groups page.')}
          </p>
          <Link href="/groups" className="mt-4 inline-block">
            <Button>{tr('Groups')}</Button>
          </Link>
        </Card>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <Link href="/groups" className="text-sm text-[#C9A227]">
        ← {tr('Groups')}
      </Link>
      <div className="mt-2 flex items-start justify-between gap-3">
        <div>
          <SectionTitle>{group.name}</SectionTitle>
          {group.description && <p className="mt-1 text-sm text-slate-400">{group.description}</p>}
        </div>
        {isLeader && <Badge>{tr('Leader')}</Badge>}
      </div>
      <p className="mt-2 text-xs text-slate-500">
        {tr('Join code')}: <span className="font-mono text-slate-300">{group.join_code}</span>
      </p>

      {error && <p className="mt-4 rounded-xl bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}

      {/* Messages */}
      <section className="mt-6">
        <h2 className="font-display text-xl text-slate-100">{tr('Discussion')}</h2>
        <Card className="mt-3 p-4">
          <div className="max-h-96 space-y-3 overflow-y-auto pr-1">
            {messages.length === 0 ? (
              <EmptyState
                title={tr('No messages yet')}
                description={tr('Say hello to your group!')}
              />
            ) : (
              messages.map((m) => (
                <div key={m.id} className={m.user_id === userId ? 'text-right' : 'text-left'}>
                  <div
                    className={`inline-block max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                      m.user_id === userId ? 'bg-[#C9A227]/20 text-slate-100' : 'bg-white/5 text-slate-200'
                    }`}
                  >
                    {m.user_id !== userId && (
                      <p className="text-xs font-semibold text-[#C9A227]">{m.display_name}</p>
                    )}
                    <p className="whitespace-pre-wrap">{m.body}</p>
                    <p className="mt-1 text-[10px] text-slate-500">
                      {new Date(m.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))
            )}
            <div ref={bottomRef} />
          </div>
          <div className="mt-3 flex gap-2">
            <input
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') void sendMessage();
              }}
              placeholder={tr('Write a message…')}
            />
            <Button onClick={sendMessage} disabled={sending || !draft.trim()}>
              {tr('Send')}
            </Button>
          </div>
        </Card>
      </section>

      {/* Members */}
      <section className="mt-8">
        <h2 className="font-display text-xl text-slate-100">
          {tr('Members')} ({members.length})
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {members.map((m) => (
            <span
              key={m.user_id}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
            >
              {m.display_name}
              {m.role === 'leader' && (
                <span className="text-xs font-semibold text-[#C9A227]">{tr('Leader')}</span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* Shared plan progress */}
      <section className="mt-8">
        <h2 className="font-display text-xl text-slate-100">{tr('Shared plans')}</h2>
        {isLeader && (
          <Card className="mt-3 p-4">
            <label className="block text-sm font-medium text-slate-200">
              {tr('Assign a reading plan to this group')}
              <div className="mt-2 flex gap-2">
                <select
                  className="w-full rounded-xl border border-white/10 bg-[#101828] px-3 py-2 text-sm text-slate-100"
                  value={planToAssign}
                  onChange={(e) => setPlanToAssign(e.target.value)}
                >
                  {Object.values(PLANS).map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.days.length} {tr('days')})
                    </option>
                  ))}
                </select>
                <Button onClick={assignPlan} className="shrink-0">
                  {tr('Assign')}
                </Button>
              </div>
            </label>
          </Card>
        )}
        <div className="mt-3 space-y-4">
          {assignments.length === 0 ? (
            <EmptyState
              title={tr('No plans assigned yet')}
              description={
                isLeader
                  ? tr('Assign a plan above to read together.')
                  : tr('The group leader can assign a reading plan.')
              }
            />
          ) : (
            assignments.map((a) => {
              const plan = getPlan(a.plan_id);
              const rows = progress[a.id] ?? [];
              return (
                <Card key={a.id} className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg text-slate-100">
                      {plan ? plan.title : a.plan_id}
                    </h3>
                    <Link href={`/plans/${a.plan_id}`} className="text-sm text-[#C9A227]">
                      {tr('View plan →')}
                    </Link>
                  </div>
                  <div className="mt-3 space-y-2">
                    {rows.map((r) => (
                      <div key={r.user_id}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-300">{r.display_name}</span>
                          <span className="text-slate-400">
                            {r.done}/{r.total} · {r.pct}%
                          </span>
                        </div>
                        <ProgressBar value={r.pct} max={100} className="mt-1" />
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })
          )}
        </div>
      </section>
    </main>
  );
}
