'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Book } from '@/content/books';
import type { ChapterStudy } from '@/content/chapters';
import { createClient } from '@/lib/supabase/client';
import { useT } from '@/lib/i18n';

type Action = 'explain' | 'crossrefs' | 'context' | 'save' | null;

/**
 * Tap-a-verse action sheet for the Bible reader.
 * Actions: Explain, Cross References, Context, Study (opens StudyBibleView
 * via onStudy), Save (to saved_verses), Highlight, Ask AI (links to
 * /tutor?ref=... — the contract with the tutor workstream).
 */
export function VerseActionSheet({
  verseRef,
  verseText,
  verseNumber,
  book,
  translationLabel,
  study,
  highlighted,
  onToggleHighlight,
  onStudy,
  onClose,
}: {
  verseRef: string;
  verseText: string;
  verseNumber: number;
  book: Book;
  /** Display label for the translation, e.g. "World English Bible". */
  translationLabel: string;
  study?: ChapterStudy;
  highlighted: boolean;
  onToggleHighlight: () => void;
  onStudy: () => void;
  onClose: () => void;
}) {
  const { t } = useT();
  const [action, setAction] = useState<Action>(null);
  const [saved, setSaved] = useState(false);
  const [saveNote, setSaveNote] = useState<string | null>(null);

  const save = async () => {
    setSaveNote(null);
    try {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        setSaveNote(t('Log in to save verses.'));
        return;
      }
      const { error } = await supabase
        .from('saved_verses')
        .upsert({ user_id: data.user.id, ref: verseRef }, { onConflict: 'user_id,ref' });
      if (error) throw error;
      setSaved(true);
    } catch {
      setSaveNote(t('Couldn\u2019t save right now — check your connection.'));
    }
  };

  const actions: { id: Exclude<Action, null> | 'study' | 'highlight' | 'ask'; label: string; icon: string }[] = [
    { id: 'explain', label: t('Explain'), icon: '◐' },
    { id: 'crossrefs', label: t('Cross references'), icon: '⇄' },
    { id: 'context', label: t('Context'), icon: '◈' },
    { id: 'study', label: t('Study'), icon: '✦' },
    { id: 'save', label: saved ? t('Saved') : t('Save'), icon: '♡' },
    { id: 'highlight', label: highlighted ? t('Remove highlight') : t('Highlight'), icon: '◍' },
    { id: 'ask', label: t('Ask AI'), icon: '✎' },
  ];

  const run = (id: (typeof actions)[number]['id']) => {
    if (id === 'study') {
      onStudy();
      return;
    }
    if (id === 'highlight') {
      onToggleHighlight();
      return;
    }
    if (id === 'ask') return; // rendered as a link below
    if (id === 'save') {
      save();
      return;
    }
    setAction(action === id ? null : id);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 p-4 sm:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={verseRef}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl border border-ink/10 bg-white p-5 shadow-xl dark:border-white/10 dark:bg-[#16213a]"
      >
        <div className="mb-1 flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-gold">{verseRef}</p>
            <p className="mt-1 text-sm italic leading-7 text-slate-700 dark:text-slate-300">
              “{verseText}”
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('Close')}
            className="shrink-0 rounded-lg px-2 py-1 text-lg text-slate-500 hover:bg-ink/5 dark:text-slate-400 dark:hover:bg-white/10"
          >
            ×
          </button>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7">
          {actions.map((a) =>
            a.id === 'ask' ? (
              <Link
                key={a.id}
                href={`/tutor?ref=${encodeURIComponent(verseRef)}`}
                className="flex flex-col items-center gap-1 rounded-xl border border-ink/10 px-1 py-2.5 text-[11px] font-medium text-ink transition hover:border-gold/60 hover:bg-gold/10 dark:border-white/10 dark:text-parchment"
              >
                <span className="text-base text-gold">{a.icon}</span>
                {a.label}
              </Link>
            ) : (
              <button
                key={a.id}
                type="button"
                onClick={() => run(a.id)}
                className={`flex flex-col items-center gap-1 rounded-xl border px-1 py-2.5 text-[11px] font-medium transition dark:text-parchment ${
                  action === a.id
                    ? 'border-gold bg-gold/15 text-ink'
                    : 'border-ink/10 text-ink hover:border-gold/60 hover:bg-gold/10 dark:border-white/10'
                }`}
              >
                <span className="text-base text-gold">{a.icon}</span>
                {a.label}
              </button>
            ),
          )}
        </div>

        {saveNote && (
          <p className="mt-3 rounded-lg bg-gold/10 px-3 py-2 text-xs text-ink dark:text-gold">
            {saveNote}
          </p>
        )}

        {action === 'explain' && (
          <div className="mt-4 max-h-64 overflow-y-auto text-sm leading-7 text-slate-700 dark:text-slate-300">
            {study ? (
              study.understand.split('\n\n').map((p, i) => (
                <p key={i} className="mb-2">
                  {p}
                </p>
              ))
            ) : (
              <p className="text-slate-500 dark:text-slate-400">
                {t('No study notes for this chapter yet — try Study for book-level background.')}
              </p>
            )}
          </div>
        )}

        {action === 'crossrefs' && (
          <div className="mt-4 max-h-64 overflow-y-auto">
            {study && study.crossRefs.length > 0 ? (
              <ul className="space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {study.crossRefs.map((c) => (
                  <li key={c.ref}>
                    <span className="font-semibold text-gold">{c.ref}</span>
                    <span className="opacity-80"> — {c.note}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {t('No cross references listed for this chapter yet.')}
              </p>
            )}
          </div>
        )}

        {action === 'context' && (
          <div className="mt-4 max-h-64 overflow-y-auto text-sm leading-7 text-slate-700 dark:text-slate-300">
            {study ? (
              study.context.split('\n\n').map((p, i) => (
                <p key={i} className="mb-2">
                  {p}
                </p>
              ))
            ) : (
              <p>
                {book.name} was written by {book.author} ({book.date}) for {book.audience}.{' '}
                {book.purpose}
              </p>
            )}
          </div>
        )}

        <p className="mt-4 text-center text-[11px] text-slate-400 dark:text-slate-500">
          {book.name} {verseNumber} · {translationLabel}
        </p>
      </div>
    </div>
  );
}
