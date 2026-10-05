// The 11 interactive question renderers for Halo's learning loop.
// Every renderer follows one rule: it collects the learner's answer and
// reports correctness upward; the parent (InteractiveQuiz) always shows the
// explanation — the "why" — after every answer. Nothing here grades tone:
// wrong answers are met with gentleness, never punishment.
'use client';

import { useMemo, useState } from 'react';
import { useT } from '@/lib/i18n';
import { Button } from '@/components/ui';
import {
  acceptedAnswers,
  isAccepted,
  norm,
  type AnswerResult,
  type InteractiveQuestion,
  type InteractiveRendererProps,
} from './types';

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function CheckButton({ onClick, disabled, label }: { onClick: () => void; disabled: boolean; label?: string }) {
  const { t } = useT();
  return (
    <div className="mt-4 flex justify-end">
      <Button onClick={onClick} disabled={disabled}>
        {label ?? t('Check answer')}
      </Button>
    </div>
  );
}

function ChoiceList({
  options,
  selected,
  locked,
  correctOption,
  onSelect,
}: {
  options: string[];
  selected: string | null;
  locked: boolean;
  correctOption?: string | null;
  onSelect: (opt: string) => void;
}) {
  return (
    <div className="space-y-2" role="radiogroup">
      {options.map((opt) => {
        const isSel = selected === opt;
        const isAns = correctOption != null && norm(opt) === norm(correctOption);
        let cls =
          'border-ink/15 hover:border-gold/60 dark:border-white/15 dark:hover:border-gold/60';
        if (locked && isAns) cls = 'border-gold bg-gold/10';
        else if (locked && isSel && !isAns) cls = 'border-red-400 bg-red-500/10';
        else if (isSel) cls = 'border-gold bg-gold/10';
        return (
          <button
            key={opt}
            type="button"
            role="radio"
            aria-checked={isSel}
            disabled={locked}
            onClick={() => onSelect(opt)}
            className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${cls}`}
          >
            <span className="text-ink dark:text-parchment">{opt}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MultipleChoice — mc                                                */
/* ------------------------------------------------------------------ */

export function MultipleChoice({ q, locked, onSubmit }: InteractiveRendererProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const correct = acceptedAnswers(q)[0] ?? '';
  const submit = () => {
    if (selected == null) return;
    onSubmit({ correct: isAccepted(q, selected), correctLabel: correct });
  };
  return (
    <div>
      <ChoiceList
        options={q.choices ?? []}
        selected={selected}
        locked={locked}
        correctOption={locked ? correct : null}
        onSelect={setSelected}
      />
      {!locked && <CheckButton onClick={submit} disabled={selected == null} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* TrueFalse — tf                                                      */
/* ------------------------------------------------------------------ */

export function TrueFalse({ q, locked, onSubmit }: InteractiveRendererProps) {
  const { t } = useT();
  const [selected, setSelected] = useState<string | null>(null);
  const options = [t('True'), t('False')];
  const correct = acceptedAnswers(q)[0] ?? '';
  const submit = () => {
    if (selected == null) return;
    // Accept either localized labels or the canonical True/False.
    const got = selected === t('True') ? 'True' : selected === t('False') ? 'False' : selected;
    onSubmit({ correct: isAccepted(q, got), correctLabel: correct });
  };
  return (
    <div>
      <ChoiceList
        options={options}
        selected={selected}
        locked={locked}
        correctOption={locked ? (norm(correct) === 'true' ? t('True') : t('False')) : null}
        onSelect={setSelected}
      />
      {!locked && <CheckButton onClick={submit} disabled={selected == null} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ScenarioQuestion — "what would you do?" (3–4 options)               */
/* ------------------------------------------------------------------ */

export function ScenarioQuestion({ q, locked, onSubmit }: InteractiveRendererProps) {
  const { t } = useT();
  const [selected, setSelected] = useState<string | null>(null);
  const correct = acceptedAnswers(q)[0] ?? '';
  const submit = () => {
    if (selected == null) return;
    onSubmit({ correct: isAccepted(q, selected), correctLabel: correct });
  };
  return (
    <div>
      <p className="mb-3 rounded-xl bg-gold/[0.07] px-4 py-3 text-xs italic leading-6 text-slate-600 dark:text-slate-400">
        {t('There is no grade here — just wisdom to practice.')}
      </p>
      <ChoiceList
        options={q.choices ?? []}
        selected={selected}
        locked={locked}
        correctOption={locked ? correct : null}
        onSelect={setSelected}
      />
      {!locked && <CheckButton onClick={submit} disabled={selected == null} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ScriptureID — "which book is this verse from?"                      */
/* ------------------------------------------------------------------ */

export function ScriptureID({ q, locked, onSubmit }: InteractiveRendererProps) {
  const { t } = useT();
  const [selected, setSelected] = useState<string | null>(null);
  const correct = acceptedAnswers(q)[0] ?? '';
  const submit = () => {
    if (selected == null) return;
    onSubmit({ correct: isAccepted(q, selected), correctLabel: correct });
  };
  return (
    <div>
      <blockquote className="font-display mb-4 border-l-4 border-gold/70 pl-4 text-[17px] italic leading-8 text-ink dark:text-parchment">
        &ldquo;{q.prompt}&rdquo;
      </blockquote>
      <p className="mb-3 text-sm font-medium text-slate-600 dark:text-slate-400">
        {t('Which book of the Bible is this from?')}
      </p>
      <ChoiceList
        options={q.choices ?? []}
        selected={selected}
        locked={locked}
        correctOption={locked ? correct : null}
        onSelect={setSelected}
      />
      {!locked && <CheckButton onClick={submit} disabled={selected == null} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FillBlank — fill in the blank(s); prompt uses ____ for each blank   */
/* ------------------------------------------------------------------ */

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function FillBlank({ q, locked, onSubmit }: InteractiveRendererProps) {
  const { t } = useT();
  const blankCount = (q.prompt.match(/_{2,}/g) ?? []).length;
  const blanks = useMemo(() => Math.max(1, blankCount), [blankCount]);
  const [values, setValues] = useState<string[]>(() => Array(blanks).fill(''));
  const answers = acceptedAnswers(q);

  const parts = useMemo(() => q.prompt.split(/_{2,}/), [q.prompt]);

  const submit = () => {
    const got = values.map(norm);
    const want = answers.map(norm);
    // All blanks must match, in order. Forgiving: extra words around the
    // answer still count if the core word is present.
    const correct =
      got.every((g) => g.length > 0) &&
      got.every((g, i) => {
        const w = want[i] ?? want[0] ?? '';
        return g === w || (w.length >= 4 && g.includes(w)) || (g.length >= 4 && w.includes(g));
      });
    onSubmit({ correct, correctLabel: answers.join(' / ') });
  };

  const ready = values.every((v) => v.trim().length > 0);

  // Fallback: a fill question whose prompt has no ____ markers renders as a
  // single answer box under the prompt.
  if (blankCount === 0) {
    return (
      <div>
        <input
          type="text"
          value={values[0] ?? ''}
          disabled={locked}
          onChange={(e) => setValues([e.target.value])}
          placeholder={t('Type your answer')}
          className="w-full rounded-xl border border-ink/15 bg-transparent px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-gold focus:outline-none dark:border-white/15 dark:text-parchment"
        />
        {locked && (
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            {t('Answer')}: <span className="font-semibold text-gold">{answers.join(' / ')}</span>
          </p>
        )}
        {!locked && <CheckButton onClick={submit} disabled={!ready} />}
      </div>
    );
  }

  return (
    <div>
      <div className="text-[15px] leading-9 text-ink dark:text-parchment">
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && (
              <input
                type="text"
                value={values[i] ?? ''}
                disabled={locked}
                onChange={(e) =>
                  setValues((prev) => prev.map((v, j) => (j === i ? e.target.value : v)))
                }
                aria-label={t('Fill in the blank {n}', `Fill in blank ${i + 1}`)}
                className="mx-1 inline-block w-32 rounded-lg border border-gold/60 bg-gold/[0.06] px-2 py-1 text-sm text-ink focus:outline-none disabled:opacity-70 dark:text-parchment"
              />
            )}
          </span>
        ))}
      </div>
      {locked && (
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          {t('Answer')}: <span className="font-semibold text-gold">{answers.join(' / ')}</span>
        </p>
      )}
      {!locked && <CheckButton onClick={submit} disabled={!ready} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Matching — two-column match (dropdowns); CharacterMatch reuses it   */
/* ------------------------------------------------------------------ */

export function Matching({ q, locked, onSubmit }: InteractiveRendererProps) {
  const { t } = useT();
  const pairs = q.pairs ?? [];
  const pool = useMemo(() => shuffle(pairs.map((p) => p.right)), [q.id]); // eslint-disable-line react-hooks/exhaustive-deps
  const [sel, setSel] = useState<Record<string, string>>({});

  const submit = () => {
    const correct = pairs.every((p) => norm(sel[p.left] ?? '') === norm(p.right));
    onSubmit({
      correct,
      correctLabel: pairs.map((p) => `${p.left} → ${p.right}`).join('; '),
    });
  };

  const ready = pairs.every((p) => sel[p.left]);

  return (
    <div>
      <div className="space-y-2">
        {pairs.map((pair) => (
          <div
            key={pair.left}
            className="flex items-center gap-3 rounded-xl border border-ink/10 px-4 py-2.5 dark:border-white/10"
          >
            <span className="flex-1 text-sm font-medium text-ink dark:text-parchment">
              {pair.left}
            </span>
            <select
              value={sel[pair.left] ?? ''}
              disabled={locked}
              onChange={(e) => setSel((prev) => ({ ...prev, [pair.left]: e.target.value }))}
              className="max-w-[45%] rounded-lg border border-ink/15 bg-transparent px-2 py-1.5 text-sm text-ink focus:border-gold focus:outline-none dark:border-white/15 dark:bg-ink dark:text-parchment"
              aria-label={pair.left}
            >
              <option value="">{t('Choose…')}</option>
              {pool.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      {locked && (
        <div className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-400">
          {pairs.map((p) => (
            <p key={p.left}>
              <span className="font-medium text-ink dark:text-parchment">{p.left}</span> →{' '}
              <span className="font-semibold text-gold">{p.right}</span>
            </p>
          ))}
        </div>
      )}
      {!locked && <CheckButton onClick={submit} disabled={!ready} />}
    </div>
  );
}

/** Match a person to who they are / what they did. Same mechanics, warmer framing. */
export function CharacterMatch(props: InteractiveRendererProps) {
  const { t } = useT();
  return (
    <div>
      <p className="mb-3 text-sm font-medium text-slate-600 dark:text-slate-400">
        {t('Match each person with the right description.')}
      </p>
      <Matching {...props} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* TimelineOrder — tap events in chronological order                   */
/* ------------------------------------------------------------------ */

export function TimelineOrder({ q, locked, onSubmit }: InteractiveRendererProps) {
  const { t } = useT();
  const correctOrder = useMemo(
    () => (Array.isArray(q.answer) ? q.answer : [q.answer]),
    [q.answer],
  );
  const display = useMemo(() => shuffle(correctOrder), [q.id]); // eslint-disable-line react-hooks/exhaustive-deps
  const [order, setOrder] = useState<string[]>([]);

  const toggle = (item: string) => {
    if (locked) return;
    setOrder((prev) => (prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]));
  };

  const submit = () => {
    const correct =
      order.length === correctOrder.length &&
      order.every((item, i) => norm(item) === norm(correctOrder[i]));
    onSubmit({ correct, correctLabel: correctOrder.join(' → ') });
  };

  return (
    <div>
      <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">
        {t('Tap the events in the order they happened, earliest first.')}
      </p>
      <div className="space-y-2">
        {display.map((item) => {
          const pos = order.indexOf(item);
          const picked = pos >= 0;
          return (
            <button
              key={item}
              type="button"
              disabled={locked}
              onClick={() => toggle(item)}
              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${
                picked
                  ? 'border-gold bg-gold/10'
                  : 'border-ink/15 hover:border-gold/60 dark:border-white/15 dark:hover:border-gold/60'
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  picked ? 'bg-gold text-[#101828]' : 'bg-ink/10 text-slate-500 dark:bg-white/10'
                }`}
              >
                {picked ? pos + 1 : '·'}
              </span>
              <span className="text-ink dark:text-parchment">{item}</span>
            </button>
          );
        })}
      </div>
      {locked && (
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          {t('The order')}: <span className="font-semibold text-gold">{correctOrder.join(' → ')}</span>
        </p>
      )}
      {!locked && <CheckButton onClick={submit} disabled={order.length !== correctOrder.length} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ReflectionPrompt — free text, saved; never graded                   */
/* ------------------------------------------------------------------ */

const REFLECTION_KEY = 'halo:reflections';

function loadReflections(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(REFLECTION_KEY) ?? '{}') as Record<string, string>;
  } catch {
    return {};
  }
}

export function ReflectionPrompt({ q, locked, onSubmit }: InteractiveRendererProps) {
  const { t } = useT();
  const [text, setText] = useState(() => loadReflections()[q.id] ?? '');

  const save = () => {
    try {
      const all = loadReflections();
      all[q.id] = text;
      localStorage.setItem(REFLECTION_KEY, JSON.stringify(all));
    } catch {
      // private mode — the reflection still counts
    }
    onSubmit({ correct: true });
  };

  return (
    <div>
      <textarea
        value={text}
        disabled={locked}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder={t('Write honestly — this is just for you.')}
        className="w-full rounded-xl border border-ink/15 bg-transparent px-4 py-3 text-sm leading-7 text-ink placeholder:text-slate-400 focus:border-gold focus:outline-none disabled:opacity-80 dark:border-white/15 dark:text-parchment"
      />
      {!locked && (
        <CheckButton onClick={save} disabled={text.trim().length === 0} label={t('Save reflection')} />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Flashcard — reveal the back, then self-check                        */
/* ------------------------------------------------------------------ */

export function Flashcard({ q, locked, onSubmit }: InteractiveRendererProps) {
  const { t } = useT();
  const [revealed, setRevealed] = useState(false);
  const answer = acceptedAnswers(q)[0] ?? '';
  return (
    <div className="text-center">
      <div className="rounded-2xl border border-gold/40 bg-gold/[0.05] px-6 py-10">
        {!revealed ? (
          <>
            <p className="font-display text-xl font-medium leading-9 text-ink dark:text-parchment">
              {q.prompt}
            </p>
            {!locked && (
              <Button variant="gold" className="mt-6" onClick={() => setRevealed(true)}>
                {t('Tap to reveal')}
              </Button>
            )}
          </>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">{q.prompt}</p>
            <p className="font-display mt-3 text-lg leading-8 text-ink dark:text-parchment">{answer}</p>
          </>
        )}
      </div>
      {!locked && revealed && (
        <div className="mt-4 flex justify-center gap-3">
          <Button variant="ghost" onClick={() => onSubmit({ correct: false, correctLabel: answer })}>
            {t('Still learning')}
          </Button>
          <Button onClick={() => onSubmit({ correct: true, correctLabel: answer })}>
            {t('I knew it')}
          </Button>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MemoryChallenge — recite from memory, reveal, self-check            */
/* ------------------------------------------------------------------ */

export function MemoryChallenge({ q, locked, onSubmit }: InteractiveRendererProps) {
  const { t } = useT();
  const [revealed, setRevealed] = useState(false);
  const answer = acceptedAnswers(q)[0] ?? '';
  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-gold">{q.ref ?? q.prompt}</p>
      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
        {t('Say it from memory — out loud if you can — then check yourself.')}
      </p>
      {!revealed ? (
        !locked && (
          <Button variant="gold" className="mt-5" onClick={() => setRevealed(true)}>
            {t('Reveal the verse')}
          </Button>
        )
      ) : (
        <blockquote className="font-display mx-auto mt-4 max-w-md border-l-4 border-gold/70 pl-4 text-left text-[17px] italic leading-8 text-ink dark:text-parchment">
          &ldquo;{answer}&rdquo;
        </blockquote>
      )}
      {!locked && revealed && (
        <div className="mt-5 flex justify-center gap-3">
          <Button variant="ghost" onClick={() => onSubmit({ correct: false, correctLabel: answer })}>
            {t('Not yet')}
          </Button>
          <Button onClick={() => onSubmit({ correct: true, correctLabel: answer })}>
            {t('I remembered it')}
          </Button>
        </div>
      )}
    </div>
  );
}
