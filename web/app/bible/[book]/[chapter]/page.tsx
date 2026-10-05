'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBook } from '@/content/books';
import { getChapterText, getChapterStudy, bookSlug, TRANSLATIONS } from '@/lib/bible';
import type { ChapterText, TranslationCode } from '@/lib/bible';
import { createClient } from '@/lib/supabase/client';
import { QuizBlock } from '@/components/QuizBlock';
import { StudyBibleView } from '@/components/StudyBibleView';
import { VerseActionSheet } from '@/components/VerseActionSheet';
import { Badge, Button, Card, SectionTitle, Spinner } from '@/components/ui';
import { useT } from '@/lib/i18n';

function StudySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="group rounded-xl border border-ink/10 dark:border-white/10">
      <summary className="cursor-pointer list-none rounded-xl px-4 py-3 text-sm font-semibold text-ink transition hover:bg-ink/5 dark:text-parchment dark:hover:bg-white/5">
        <span className="mr-2 inline-block transition-transform group-open:rotate-90">▸</span>
        {title}
      </summary>
      <div className="px-4 pb-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{children}</div>
    </details>
  );
}

const FONT_STEPS = [
  'text-[15px] leading-8',
  'text-base leading-8',
  'text-lg leading-9',
  'text-xl leading-10',
];

export default function ChapterPage({ params }: { params: { book: string; chapter: string } }) {
  const { t } = useT();
  const chapterNum = Number(params.chapter);

  let book: ReturnType<typeof getBook>;
  try {
    book = getBook(params.book);
  } catch {
    book = undefined;
  }
  if (!book || !Number.isFinite(chapterNum) || chapterNum < 1 || chapterNum > book.chapters) {
    notFound();
  }

  const [text, setText] = useState<ChapterText | null>(null);
  const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(false);
  const [highlights, setHighlights] = useState<Set<string>>(new Set());
  const [listening, setListening] = useState(false);
  const [sleepMin, setSleepMin] = useState(0);
  const [activeVerse, setActiveVerse] = useState<number | null>(null);
  const [studyOpen, setStudyOpen] = useState(false);
  const [fontStep, setFontStep] = useState(1);
  const [focusMode, setFocusMode] = useState(false);
  const sleepRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const bookName = book.name;
  const bookId = book.id;
  const slug = bookSlug(book);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    (async () => {
      try {
        const ct = await getChapterText(
          { bollsBook: book.bollsBook, name: bookName },
          chapterNum,
        );
        if (!cancelled) {
          setText(ct);
          setOffline(false);
        }
      } catch {
        if (!cancelled) setOffline(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [book.bollsBook, bookName, chapterNum]);

  useEffect(() => {
    (async () => {
      try {
        const supabase = createClient();
        const { data } = await supabase.auth.getUser();
        if (!data.user) return;
        const { data: rows } = await supabase
          .from('highlights')
          .select('ref')
          .eq('user_id', data.user.id)
          .like('ref', `${bookName} ${chapterNum}:%`);
        setHighlights(new Set(((rows ?? []) as { ref: string }[]).map((r) => r.ref)));
      } catch {
        // logged out or offline — highlights stay local
      }
    })();
  }, [bookName, chapterNum]);

  useEffect(
    () => () => {
      if (sleepRef.current) clearTimeout(sleepRef.current);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    },
    [],
  );

  const toggleHighlight = async (verseNum: number) => {
    const ref = `${bookName} ${chapterNum}:${verseNum}`;
    const next = new Set(highlights);
    const adding = !next.has(ref);
    if (adding) next.add(ref);
    else next.delete(ref);
    setHighlights(next);
    try {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      if (!data.user) return;
      if (adding) {
        await supabase.from('highlights').insert({ user_id: data.user.id, ref });
      } else {
        await supabase.from('highlights').delete().eq('user_id', data.user.id).eq('ref', ref);
      }
    } catch {
      // local-only highlight
    }
  };

  const listen = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !text) return;
    if (listening) {
      window.speechSynthesis.cancel();
      setListening(false);
      if (sleepRef.current) clearTimeout(sleepRef.current);
      return;
    }
    const utter = new SpeechSynthesisUtterance(
      `${bookName} chapter ${chapterNum}. ${text.verses.map((v) => v.text).join(' ')}`,
    );
    utter.onend = () => setListening(false);
    utter.onerror = () => setListening(false);
    window.speechSynthesis.speak(utter);
    setListening(true);
    if (sleepRef.current) clearTimeout(sleepRef.current);
    if (sleepMin > 0) {
      sleepRef.current = setTimeout(() => {
        window.speechSynthesis.cancel();
        setListening(false);
      }, sleepMin * 60000);
    }
  };

  let study: ReturnType<typeof getChapterStudy>;
  try {
    study = getChapterStudy(bookId, chapterNum);
  } catch {
    study = undefined;
  }

  const translationLabel =
    TRANSLATIONS[(text?.translation as TranslationCode) ?? 'web']?.fullName ??
    text?.translation ??
    'World English Bible';

  const activeVerseText = activeVerse != null ? text?.verses.find((v) => v.number === activeVerse) : undefined;

  return (
    <div className={focusMode ? 'mx-auto max-w-2xl' : 'grid gap-5 lg:grid-cols-[1fr_340px]'}>
      <div className="space-y-5">
        {!focusMode && (
          <div>
            <Link href={`/bible/${slug}`} className="text-sm text-gold hover:underline">
              ← {bookName}
            </Link>
            <h1 className="font-display mt-2 text-3xl font-semibold text-ink dark:text-parchment">
              {bookName} {chapterNum}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Button variant="ghost" onClick={listen} disabled={!text}>
                {listening ? t('stop') : t('listen')}
              </Button>
              <Button variant="ghost" onClick={() => setStudyOpen(true)}>
                {t('Study this chapter')}
              </Button>
              <label className="text-xs text-slate-500 dark:text-slate-400">
                {t('sleep_timer')}:{' '}
                <select
                  value={sleepMin}
                  onChange={(e) => setSleepMin(Number(e.target.value))}
                  className="rounded-lg border border-ink/15 bg-transparent px-2 py-1.5 text-sm text-ink focus:border-gold focus:outline-none dark:border-white/15 dark:bg-ink dark:text-parchment"
                >
                  <option value={0}>{t('off')}</option>
                  <option value={5}>5 {t('minutes')}</option>
                  <option value={10}>10 {t('minutes')}</option>
                  <option value={15}>15 {t('minutes')}</option>
                  <option value={30}>30 {t('minutes')}</option>
                </select>
              </label>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1 rounded-xl border border-ink/10 p-1 dark:border-white/10">
            <button
              type="button"
              onClick={() => setFontStep((s) => Math.max(0, s - 1))}
              disabled={fontStep === 0}
              aria-label={t('Smaller text')}
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-ink transition hover:bg-ink/5 disabled:opacity-40 dark:text-parchment dark:hover:bg-white/10"
            >
              A−
            </button>
            <button
              type="button"
              onClick={() => setFontStep((s) => Math.min(FONT_STEPS.length - 1, s + 1))}
              disabled={fontStep === FONT_STEPS.length - 1}
              aria-label={t('Larger text')}
              className="rounded-lg px-3 py-1.5 text-base font-semibold text-ink transition hover:bg-ink/5 disabled:opacity-40 dark:text-parchment dark:hover:bg-white/10"
            >
              A+
            </button>
          </div>
          <button
            type="button"
            onClick={() => setFocusMode((f) => !f)}
            className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
              focusMode
                ? 'border-gold bg-gold/15 text-ink dark:text-gold'
                : 'border-ink/15 text-ink hover:border-gold/60 dark:border-white/15 dark:text-parchment'
            }`}
          >
            {focusMode ? t('Exit focus mode') : t('Focus mode')}
          </button>
        </div>

        {!focusMode && (
          <div className="flex items-center justify-between">
            {chapterNum > 1 ? (
              <Link
                href={`/bible/${slug}/${chapterNum - 1}`}
                className="text-sm font-semibold text-gold hover:underline"
              >
                ← {t('chapter')} {chapterNum - 1}
              </Link>
            ) : (
              <span />
            )}
            {chapterNum < book.chapters ? (
              <Link
                href={`/bible/${slug}/${chapterNum + 1}`}
                className="text-sm font-semibold text-gold hover:underline"
              >
                {t('chapter')} {chapterNum + 1} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        )}

        {loading ? (
          <Spinner />
        ) : !text ? (
          <Card>
            <p className="text-sm text-slate-600 dark:text-slate-400">{t('offline_note')}</p>
          </Card>
        ) : (
          <Card>
            {offline && (
              <p className="mb-3 rounded-lg bg-gold/10 px-3 py-2 text-xs text-ink dark:text-gold">
                {t('offline_note')}
              </p>
            )}
            {!focusMode && (
              <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">{t('tap_verse')}</p>
            )}
            <div className="space-y-1">
              {text.verses.map((v) => {
                const ref = `${bookName} ${chapterNum}:${v.number}`;
                const on = highlights.has(ref);
                return (
                  <button
                    key={v.number}
                    type="button"
                    onClick={() => setActiveVerse(v.number)}
                    className={`block w-full rounded-lg px-2 py-1.5 text-left transition ${
                      on ? 'bg-gold/20' : 'hover:bg-ink/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <sup className="mr-2 text-xs font-bold text-gold">{v.number}</sup>
                    <span className={`${FONT_STEPS[fontStep]} text-ink dark:text-parchment`}>
                      {v.text}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-center text-[11px] text-slate-400 dark:text-slate-500">
              {translationLabel}
            </p>
          </Card>
        )}

        {focusMode && !loading && text && (
          <div className="flex items-center justify-between">
            {chapterNum > 1 ? (
              <Link
                href={`/bible/${slug}/${chapterNum - 1}`}
                className="text-sm font-semibold text-gold hover:underline"
              >
                ← {t('chapter')} {chapterNum - 1}
              </Link>
            ) : (
              <span />
            )}
            {chapterNum < book.chapters ? (
              <Link
                href={`/bible/${slug}/${chapterNum + 1}`}
                className="text-sm font-semibold text-gold hover:underline"
              >
                {t('chapter')} {chapterNum + 1} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        )}
      </div>

      {!focusMode && (
        <aside className="space-y-3">
          <SectionTitle title={t('tab_summary')} />
          {!study ? (
            <Card>
              <p className="text-sm text-slate-500 dark:text-slate-400">{t('loading')}</p>
            </Card>
          ) : (
            <>
              <p className="text-sm font-medium text-gold">{study.title}</p>
              <StudySection title={t('tab_summary')}>
                {study.summary.split('\n\n').map((p, i) => (
                  <p key={i} className="mb-2">
                    {p}
                  </p>
                ))}
              </StudySection>
              <StudySection title={t('tab_understand')}>
                {study.understand.split('\n\n').map((p, i) => (
                  <p key={i} className="mb-2">
                    {p}
                  </p>
                ))}
              </StudySection>
              <StudySection title={t('tab_context')}>
                {study.context.split('\n\n').map((p, i) => (
                  <p key={i} className="mb-2">
                    {p}
                  </p>
                ))}
              </StudySection>
              {study.people.length > 0 && (
                <StudySection title={t('tab_people')}>
                  <ul className="list-disc pl-5">
                    {study.people.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </StudySection>
              )}
              {study.words.length > 0 && (
                <StudySection title={t('tab_words')}>
                  <dl className="space-y-2">
                    {study.words.map((w) => (
                      <div key={w.term}>
                        <dt className="font-semibold text-gold">
                          {w.term}
                          {w.transliteration ? (
                            <span className="ml-2 font-normal opacity-70">{w.transliteration}</span>
                          ) : null}
                        </dt>
                        <dd>{w.definition}</dd>
                      </div>
                    ))}
                  </dl>
                </StudySection>
              )}
              {study.themes.length > 0 && (
                <StudySection title={t('tab_themes')}>
                  <div className="flex flex-wrap gap-2">
                    {study.themes.map((th) => (
                      <Badge key={th}>{th}</Badge>
                    ))}
                  </div>
                </StudySection>
              )}
              {study.crossRefs.length > 0 && (
                <StudySection title={t('tab_crossrefs')}>
                  <ul className="space-y-2">
                    {study.crossRefs.map((c) => (
                      <li key={c.ref}>
                        <span className="font-semibold text-gold">{c.ref}</span>
                        <span className="opacity-80"> — {c.note}</span>
                      </li>
                    ))}
                  </ul>
                </StudySection>
              )}
              <StudySection title={t('tab_apply')}>
                {study.application.split('\n\n').map((p, i) => (
                  <p key={i} className="mb-2">
                    {p}
                  </p>
                ))}
              </StudySection>
              {study.reflection.length > 0 && (
                <StudySection title={t('tab_reflect')}>
                  <ul className="list-disc space-y-1 pl-5">
                    {study.reflection.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </StudySection>
              )}
              {study.quiz.length > 0 && (
                <StudySection title={t('tab_quiz')}>
                  <QuizBlock questions={study.quiz} tag={`${bookId}-${chapterNum}`} />
                </StudySection>
              )}
              <StudySection title={t('tab_pray')}>
                <p className="font-display italic">{study.prayer}</p>
              </StudySection>
            </>
          )}
        </aside>
      )}

      {activeVerse != null && activeVerseText && (
        <VerseActionSheet
          verseRef={`${bookName} ${chapterNum}:${activeVerse}`}
          verseText={activeVerseText.text}
          verseNumber={activeVerse}
          book={book}
          translationLabel={translationLabel}
          study={study}
          highlighted={highlights.has(`${bookName} ${chapterNum}:${activeVerse}`)}
          onToggleHighlight={() => {
            toggleHighlight(activeVerse);
            setActiveVerse(null);
          }}
          onStudy={() => {
            setActiveVerse(null);
            setStudyOpen(true);
          }}
          onClose={() => setActiveVerse(null)}
        />
      )}

      {studyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 p-4 sm:items-center"
          onClick={() => setStudyOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${bookName} ${chapterNum} study`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-ink/10 bg-white p-5 shadow-xl dark:border-white/10 dark:bg-[#16213a]"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {t('Study this chapter')}
                </p>
                <h2 className="font-display mt-1 text-2xl font-semibold text-ink dark:text-parchment">
                  {bookName} {chapterNum}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setStudyOpen(false)}
                aria-label={t('Close')}
                className="rounded-lg px-2 py-1 text-xl text-slate-500 hover:bg-ink/5 dark:text-slate-400 dark:hover:bg-white/10"
              >
                ×
              </button>
            </div>
            <StudyBibleView book={book} chapter={chapterNum} study={study} />
          </div>
        </div>
      )}
    </div>
  );
}
