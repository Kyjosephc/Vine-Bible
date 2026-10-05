// Scripture memory: add verses, practice with spaced repetition, and move
// them from New → Learning → Review → Mastered.
// SRS logic is reused from web/lib/srs.ts (gradeReview); the interval is
// derived from the stored next_review date so no schema change is needed.
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/client';
import { gradeReview, type ReviewItem } from '@/lib/srs';
import { FALLBACK_PASSAGES } from '@/content/fallback-passages';
import { Badge, Button, Card, EmptyState, SectionTitle, Spinner } from '@/components/ui';

type Status = 'new' | 'learning' | 'review' | 'mastered';

interface MemoryVerse {
  id: string;
  ref: string;
  verse_text: string | null;
  status: Status;
  next_review: string;
  reps: number;
}

type PracticeMode = 'flashcard' | 'fill' | 'first-letters' | 'choice' | 'recite';

const DAY = 86400000;
const STATUS_META: Record<Status, { label: string; cls: string }> = {
  new: { label: 'New', cls: 'border-slate-400/50 text-slate-500 dark:text-slate-400' },
  learning: { label: 'Learning', cls: 'border-gold/50 text-gold' },
  review: { label: 'Review', cls: 'border-sky-400/50 text-sky-500 dark:text-sky-400' },
  mastered: { label: 'Mastered', cls: 'border-emerald-400/50 text-emerald-600 dark:text-emerald-400' },
};

function slugifyRef(ref: string): string {
  return ref
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function toReviewItem(v: MemoryVerse): ReviewItem {
  const intervalDays = Math.max(1, Math.round((new Date(v.next_review).getTime() - Date.now()) / DAY));
  return { concept: v.ref, nextReview: v.next_review, intervalDays, reps: v.reps };
}

function nextStatus(status: Status, quality: 0 | 1 | 2, reps: number): Status {
  if (quality === 0) {
    if (status === 'new') return 'new';
    if (status === 'learning') return 'new';
    if (status === 'review') return 'learning';
    return 'review'; // mastered slips back to review, never to zero
  }
  if (status === 'new') return 'learning';
  if (status === 'learning') return quality === 2 ? 'review' : 'learning';
  if (status === 'review') return quality === 2 && reps >= 4 ? 'mastered' : 'review';
  return 'mastered';
}

function firstLetters(text: string): string {
  return text
    .split(/\s+/)
    .map((w) => {
      const m = w.match(/[A-Za-z]/);
      return m ? m[0] + '＿' : w;
    })
    .join(' ');
}

/* ------------------------------------------------------------------ */
/* Add verse                                                           */
/* ------------------------------------------------------------------ */

function AddVerse({ onAdded }: { onAdded: () => void }) {
  const { t } = useT();
  const [ref, setRef] = useState('');
  const [text, setText] = useState('');
  const [lookupMsg, setLookupMsg] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const lookup = () => {
    const key = slugifyRef(ref);
    const hit = FALLBACK_PASSAGES[key];
    if (hit) {
      setText(hit.text);
      setLookupMsg(null);
    } else {
      setLookupMsg(t('Verse text not found in the built-in library — paste it from your Bible.'));
    }
  };

  const save = async () => {
    if (!ref.trim() || !text.trim()) return;
    setSaving(true);
    try {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      if (!data.user) return;
      await supabase.from('memory_verses').insert({
        user_id: data.user.id,
        ref: ref.trim(),
        verse_text: text.trim(),
        status: 'new',
        next_review: new Date().toISOString().slice(0, 10),
        reps: 0,
      });
      setRef('');
      setText('');
      onAdded();
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card>
      <SectionTitle title={t('Add a verse')} />
      <div className="mt-4 space-y-3">
        <div>
          <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {t('Reference')} <span className="text-gold">*</span>
          </label>
          <div className="mt-1 flex gap-2">
            <input
              value={ref}
              onChange={(e) => setRef(e.target.value)}
              placeholder={t('e.g. John 3:16')}
              className="w-full rounded-xl border border-ink/15 bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-gold focus:outline-none dark:border-white/15 dark:text-parchment"
            />
            <Button variant="ghost" onClick={lookup} disabled={!ref.trim()}>
              {t('Look up')}
            </Button>
          </div>
          {lookupMsg && <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{lookupMsg}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {t('Verse text')} <span className="text-gold">*</span>
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            placeholder={t('Paste the verse text from your Bible…')}
            className="mt-1 w-full rounded-xl border border-ink/15 bg-transparent px-4 py-2.5 text-sm leading-7 text-ink placeholder:text-slate-400 focus:border-gold focus:outline-none dark:border-white/15 dark:text-parchment"
          />
        </div>
        <div className="flex justify-end">
          <Button onClick={save} disabled={saving || !ref.trim() || !text.trim()}>
            {saving ? t('Saving…') : t('Save verse')}
          </Button>
        </div>
      </div>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/* Practice views                                                      */
/* ------------------------------------------------------------------ */

function GradeButtons({ onGrade }: { onGrade: (q: 0 | 1 | 2) => void }) {
  const { t } = useT();
  return (
    <div className="mt-5 flex justify-center gap-3">
      <Button variant="ghost" onClick={() => onGrade(0)}>
        {t('Forgot')}
      </Button>
      <Button variant="ghost" onClick={() => onGrade(1)}>
        {t('Hard')}
      </Button>
      <Button onClick={() => onGrade(2)}>{t('Easy')}</Button>
    </div>
  );
}

function FlashcardPractice({ verse, onGrade }: { verse: MemoryVerse; onGrade: (q: 0 | 1 | 2) => void }) {
  const { t } = useT();
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="text-center">
      <div className="rounded-2xl border border-gold/40 bg-gold/[0.05] px-6 py-12">
        {!revealed ? (
          <>
            <p className="font-display text-2xl font-semibold text-ink dark:text-parchment">{verse.ref}</p>
            <Button variant="gold" className="mt-6" onClick={() => setRevealed(true)}>
              {t('Tap to reveal')}
            </Button>
          </>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">{verse.ref}</p>
            <p className="font-display mt-3 text-lg italic leading-9 text-ink dark:text-parchment">
              &ldquo;{verse.verse_text}&rdquo;
            </p>
          </>
        )}
      </div>
      {revealed && (
        <>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            {t('How well did you know it?')}
          </p>
          <GradeButtons onGrade={onGrade} />
        </>
      )}
    </div>
  );
}

function FillPractice({ verse, onGrade }: { verse: MemoryVerse; onGrade: (q: 0 | 1 | 2) => void }) {
  const { t } = useT();
  const words = useMemo(() => (verse.verse_text ?? '').split(/\s+/).filter(Boolean), [verse]);
  // Deterministic blanks: every 4th word (longer than 3 chars).
  const blankIdx = useMemo(() => {
    const idx: number[] = [];
    words.forEach((w, i) => {
      if (i % 4 === 3 && w.replace(/[^A-Za-z]/g, '').length > 3) idx.push(i);
    });
    return idx.length > 0 ? idx : [Math.min(2, words.length - 1)];
  }, [words]);
  const [values, setValues] = useState<string[]>(() => blankIdx.map(() => ''));
  const [checked, setChecked] = useState(false);

  if (words.length === 0) {
    return (
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {t('This verse has no text to practice yet.')}
      </p>
    );
  }

  const clean = (w: string) => w.replace(/[^A-Za-z']/g, '').toLowerCase();
  const results = blankIdx.map((wi, i) => clean(values[i] ?? '') === clean(words[wi] ?? ''));
  const correctCount = results.filter(Boolean).length;

  const check = () => {
    setChecked(true);
    // Auto-grade from accuracy: all right = easy, most = hard, else forgot.
    if (correctCount === blankIdx.length) onGrade(2);
    else if (correctCount >= Math.ceil(blankIdx.length / 2)) onGrade(1);
    else onGrade(0);
  };

  return (
    <div>
      <p className="mb-3 text-sm font-medium text-slate-600 dark:text-slate-400">
        {verse.ref} — {t('fill in the missing words')}
      </p>
      <p className="text-[15px] leading-10 text-ink dark:text-parchment">
        {words.map((w, i) => {
          const bi = blankIdx.indexOf(i);
          if (bi < 0) return <span key={i}>{w} </span>;
          const ok = checked ? results[bi] : null;
          return (
            <span key={i}>
              <input
                value={values[bi] ?? ''}
                disabled={checked}
                onChange={(e) =>
                  setValues((prev) => prev.map((v, j) => (j === bi ? e.target.value : v)))
                }
                aria-label={`${t('Missing word')} ${bi + 1}`}
                className={`mx-0.5 inline-block w-28 rounded-lg border px-2 py-0.5 text-sm focus:outline-none disabled:opacity-80 ${
                  ok == null
                    ? 'border-gold/60 bg-gold/[0.06] text-ink dark:text-parchment'
                    : ok
                      ? 'border-emerald-400 bg-emerald-500/10 text-ink dark:text-parchment'
                      : 'border-red-400 bg-red-500/10 text-ink dark:text-parchment'
                }`}
              />{' '}
            </span>
          );
        })}
      </p>
      {checked && (
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          {t('You got')} {correctCount} {t('of')} {blankIdx.length}.{' '}
          <span className="font-semibold text-gold">{verse.verse_text}</span>
        </p>
      )}
      {!checked && (
        <div className="mt-4 flex justify-end">
          <Button onClick={check} disabled={values.some((v) => !v.trim())}>
            {t('Check')}
          </Button>
        </div>
      )}
    </div>
  );
}

function FirstLettersPractice({ verse, onGrade }: { verse: MemoryVerse; onGrade: (q: 0 | 1 | 2) => void }) {
  const { t } = useT();
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-gold">{verse.ref}</p>
      <p className="font-display mt-4 text-lg leading-9 tracking-wide text-ink dark:text-parchment">
        {firstLetters(verse.verse_text ?? '')}
      </p>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        {t('Use the first letters as prompts. Say the verse aloud, then check.')}
      </p>
      {!revealed ? (
        <Button variant="gold" className="mt-5" onClick={() => setRevealed(true)}>
          {t('Reveal the verse')}
        </Button>
      ) : (
        <>
          <blockquote className="font-display mx-auto mt-4 max-w-md border-l-4 border-gold/70 pl-4 text-left text-[17px] italic leading-8 text-ink dark:text-parchment">
            &ldquo;{verse.verse_text}&rdquo;
          </blockquote>
          <GradeButtons onGrade={onGrade} />
        </>
      )}
    </div>
  );
}

function ChoicePractice({
  verse,
  allVerses,
  onGrade,
}: {
  verse: MemoryVerse;
  allVerses: MemoryVerse[];
  onGrade: (q: 0 | 1 | 2) => void;
}) {
  const { t } = useT();
  const options = useMemo(() => {
    const others = allVerses.filter((v) => v.id !== verse.id);
    const picked = [...others].sort(() => Math.random() - 0.5).slice(0, 3);
    return [...picked, verse].sort(() => Math.random() - 0.5);
  }, [verse, allVerses]); // eslint-disable-line react-hooks/exhaustive-deps
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const check = () => {
    if (!selected) return;
    setChecked(true);
    onGrade(selected === verse.id ? 2 : 0);
  };

  return (
    <div>
      <p className="mb-3 text-sm font-medium text-slate-600 dark:text-slate-400">
        {t('Which reference matches this verse?')}
      </p>
      <blockquote className="font-display mb-4 border-l-4 border-gold/70 pl-4 text-[17px] italic leading-8 text-ink dark:text-parchment">
        &ldquo;{verse.verse_text}&rdquo;
      </blockquote>
      <div className="space-y-2">
        {options.map((v) => {
          const isSel = selected === v.id;
          const isAns = v.id === verse.id;
          let cls = 'border-ink/15 hover:border-gold/60 dark:border-white/15 dark:hover:border-gold/60';
          if (checked && isAns) cls = 'border-gold bg-gold/10';
          else if (checked && isSel && !isAns) cls = 'border-red-400 bg-red-500/10';
          else if (isSel) cls = 'border-gold bg-gold/10';
          return (
            <button
              key={v.id}
              type="button"
              disabled={checked}
              onClick={() => setSelected(v.id)}
              className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${cls}`}
            >
              <span className="text-ink dark:text-parchment">{v.ref}</span>
            </button>
          );
        })}
      </div>
      {!checked && (
        <div className="mt-4 flex justify-end">
          <Button onClick={check} disabled={!selected}>
            {t('Check')}
          </Button>
        </div>
      )}
    </div>
  );
}

function RecitePractice({ verse, onGrade }: { verse: MemoryVerse; onGrade: (q: 0 | 1 | 2) => void }) {
  const { t } = useT();
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-gold">{verse.ref}</p>
      <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
        {t('Close your eyes and say the verse from memory — out loud if you can. Then reveal it and be honest with yourself.')}
      </p>
      {!revealed ? (
        <Button variant="gold" className="mt-5" onClick={() => setRevealed(true)}>
          {t('Reveal the verse')}
        </Button>
      ) : (
        <>
          <blockquote className="font-display mx-auto mt-4 max-w-md border-l-4 border-gold/70 pl-4 text-left text-[17px] italic leading-8 text-ink dark:text-parchment">
            &ldquo;{verse.verse_text}&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{t('Did you get it?')}</p>
          <GradeButtons onGrade={onGrade} />
        </>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

type Tab = 'practice' | 'verses' | 'add';

const MODES: Array<{ id: PracticeMode; label: string; minVerses?: number }> = [
  { id: 'flashcard', label: 'Flashcards' },
  { id: 'fill', label: 'Fill in the blank' },
  { id: 'first-letters', label: 'First-letter prompts' },
  { id: 'choice', label: 'Multiple choice', minVerses: 4 },
  { id: 'recite', label: 'Recite from memory' },
];

export default function MemoryPage() {
  const { t } = useT();
  const [verses, setVerses] = useState<MemoryVerse[] | null>(null);
  const [loggedIn, setLoggedIn] = useState(true);
  const [tab, setTab] = useState<Tab>('practice');
  const [mode, setMode] = useState<PracticeMode>('flashcard');
  const [queue, setQueue] = useState<MemoryVerse[]>([]);
  const [done, setDone] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);
  const queueInitRef = useRef(false);

  useEffect(() => {
    queueInitRef.current = false; // rebuild the practice queue on each load
    (async () => {
      try {
        const supabase = createClient();
        const { data } = await supabase.auth.getUser();
        if (!data.user) {
          setLoggedIn(false);
          setVerses([]);
          return;
        }
        const { data: rows } = await supabase
          .from('memory_verses')
          .select('id,ref,verse_text,status,next_review,reps')
          .eq('user_id', data.user.id)
          .order('next_review', { ascending: true });
        setVerses(((rows ?? []) as MemoryVerse[]) ?? []);
      } catch {
        setVerses([]);
      }
    })();
  }, [refreshKey]);

  const due = useMemo(() => {
    if (!verses) return [];
    const today = new Date().toISOString().slice(0, 10);
    return verses.filter((v) => v.next_review <= today);
  }, [verses]);

  // Build the practice queue once per data load (not on every grade —
  // grading updates `verses`, which must not reset the queue or progress).
  useEffect(() => {
    if (!verses || queueInitRef.current) return;
    queueInitRef.current = true;
    const today = new Date().toISOString().slice(0, 10);
    const dueNow = verses.filter((v) => v.next_review <= today);
    const fresh = verses.filter((v) => v.status === 'new' && !dueNow.includes(v));
    setQueue([...dueNow, ...fresh].slice(0, 20));
    setDone(0);
  }, [verses]);

  const persistGrade = async (verse: MemoryVerse, quality: 0 | 1 | 2) => {
    const graded = gradeReview(toReviewItem(verse), quality);
    const status = nextStatus(verse.status, quality, graded.reps);
    const nextDate = graded.nextReview.slice(0, 10);
    setQueue((prev) => prev.filter((v) => v.id !== verse.id));
    setDone((d) => d + 1);
    setVerses((prev) =>
      (prev ?? []).map((v) =>
        v.id === verse.id ? { ...v, status, next_review: nextDate, reps: graded.reps } : v,
      ),
    );
    try {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      if (!data.user) return;
      await supabase
        .from('memory_verses')
        .update({ status, next_review: nextDate, reps: graded.reps })
        .eq('user_id', data.user.id)
        .eq('id', verse.id);
    } catch {
      // offline — local state already updated
    }
  };

  const deleteVerse = async (id: string) => {
    setVerses((prev) => (prev ?? []).filter((v) => v.id !== id));
    setQueue((prev) => prev.filter((v) => v.id !== id));
    try {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      if (!data.user) return;
      await supabase.from('memory_verses').delete().eq('user_id', data.user.id).eq('id', id);
    } catch {
      // offline — local state already updated
    }
  };

  if (verses === null) return <Spinner />;

  if (!loggedIn) {
    return (
      <div className="mx-auto max-w-xl px-4 py-8">
        <EmptyState
          title={t('Scripture Memory')}
          description={t('Log in to save verses and build your memory practice.')}
          action={
            <Link href="/login">
              <Button>{t('Log in')}</Button>
            </Link>
          }
        />
      </div>
    );
  }

  const current = queue[0] ?? null;
  const modeOk = (m: (typeof MODES)[number]) => !m.minVerses || verses.length >= m.minVerses;

  return (
    <div className="mx-auto max-w-2xl space-y-6 px-4 py-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          {t('Hide it in your heart')}
        </p>
        <h1 className="font-display mt-1 text-3xl font-semibold text-ink dark:text-parchment">
          {t('Scripture Memory')}
        </h1>
        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {t('“I have hidden your word in my heart.” — Psalm 119:11. Add verses, practice a little each day, and spaced repetition will do the rest.')}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2" role="tablist">
        {(
          [
            { id: 'practice', label: t('Practice') },
            { id: 'verses', label: t('My Verses') },
            { id: 'add', label: t('Add Verse') },
          ] as Array<{ id: Tab; label: string }>
        ).map((tb) => (
          <button
            key={tb.id}
            role="tab"
            aria-selected={tab === tb.id}
            onClick={() => setTab(tb.id)}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              tab === tb.id
                ? 'bg-gold text-[#101828]'
                : 'border border-ink/15 text-ink hover:border-gold/60 dark:border-white/15 dark:text-parchment'
            }`}
          >
            {tb.label}
            {tb.id === 'practice' && due.length > 0 && (
              <span className="ml-1.5 rounded-full bg-[#101828]/15 px-1.5 text-xs dark:bg-white/15">
                {due.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {tab === 'add' && <AddVerse onAdded={() => setRefreshKey((k) => k + 1)} />}

      {tab === 'verses' && (
        <div className="space-y-3">
          {verses.length === 0 ? (
            <EmptyState
              title={t('No verses yet')}
              description={t('Add your first verse to begin memorizing.')}
              action={<Button onClick={() => setTab('add')}>{t('Add a verse')}</Button>}
            />
          ) : (
            verses.map((v) => (
              <Card key={v.id} className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold text-ink dark:text-parchment">{v.ref}</p>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${STATUS_META[v.status].cls}`}
                    >
                      {STATUS_META[v.status].label}
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm italic text-slate-600 dark:text-slate-400">
                    &ldquo;{v.verse_text}&rdquo;
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                    {t('Next review')}: {v.next_review} · {v.reps} {t('reps')}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => deleteVerse(v.id)}
                  aria-label={`${t('Delete')} ${v.ref}`}
                  className="shrink-0 rounded-lg px-2 py-1 text-lg text-slate-400 transition hover:text-red-400"
                >
                  ×
                </button>
              </Card>
            ))
          )}
        </div>
      )}

      {tab === 'practice' && (
        <div className="space-y-4">
          {/* Mode picker */}
          <div className="flex flex-wrap gap-2">
            {MODES.map((m) => {
              const ok = modeOk(m);
              return (
                <button
                  key={m.id}
                  type="button"
                  disabled={!ok}
                  title={ok ? m.label : t('Add at least 4 verses to unlock this mode.')}
                  onClick={() => setMode(m.id)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    mode === m.id
                      ? 'bg-gold text-[#101828]'
                      : 'border border-ink/15 text-ink hover:border-gold/60 disabled:opacity-40 dark:border-white/15 dark:text-parchment'
                  }`}
                >
                  {m.label}
                </button>
              );
            })}
          </div>

          {!current ? (
            <EmptyState
              title={done > 0 ? t('Practice complete') : t('Nothing due')}
              description={
                done > 0
                  ? t('Well done — every verse reviewed. Come back tomorrow for more.')
                  : verses.length === 0
                    ? t('Add verses first, then practice them here.')
                    : t('No verses are due right now. New verses appear here as you add them.')
              }
              action={
                verses.length === 0 ? (
                  <Button onClick={() => setTab('add')}>{t('Add a verse')}</Button>
                ) : undefined
              }
            />
          ) : (
            <Card>
              <div className="mb-4 flex items-center justify-between">
                <Badge>
                  {STATUS_META[current.status].label}
                </Badge>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {t('Verse')} {done + 1} {t('of')} {done + queue.length}
                </span>
              </div>
              <div key={`${current.id}-${mode}`}>
                {mode === 'flashcard' && (
                  <FlashcardPractice verse={current} onGrade={(qq) => persistGrade(current, qq)} />
                )}
                {mode === 'fill' && (
                  <FillPractice verse={current} onGrade={(qq) => persistGrade(current, qq)} />
                )}
                {mode === 'first-letters' && (
                  <FirstLettersPractice verse={current} onGrade={(qq) => persistGrade(current, qq)} />
                )}
                {mode === 'choice' && (
                  <ChoicePractice
                    verse={current}
                    allVerses={verses}
                    onGrade={(qq) => persistGrade(current, qq)}
                  />
                )}
                {mode === 'recite' && (
                  <RecitePractice verse={current} onGrade={(qq) => persistGrade(current, qq)} />
                )}
              </div>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
