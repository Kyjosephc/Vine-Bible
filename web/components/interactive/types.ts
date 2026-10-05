// Interactive question types for Halo's daily learning loop.
// One unified shape so InteractiveQuiz can render any kind.

export type InteractiveKind =
  | 'mc' // multiple choice
  | 'tf' // true / false
  | 'fill' // fill in the blank(s)
  | 'matching' // match two columns
  | 'scripture-id' // "which book is this verse from?"
  | 'timeline-order' // tap events in chronological order
  | 'character-match' // match people to descriptions
  | 'scenario' // "what would you do?" with 3-4 options
  | 'reflection' // free-text reflection, saved (never graded)
  | 'flashcard' // term/ref on front, reveal + self-check
  | 'memory'; // recite from memory, reveal + self-check

export interface InteractivePair {
  left: string;
  right: string;
}

export interface InteractiveQuestion {
  id: string;
  kind: InteractiveKind;
  /** Question text, scenario text, verse text, or flashcard front. */
  prompt: string;
  /** mc / tf / scenario / scripture-id: answer options.
   *  timeline-order: the events in CORRECT order (renderer shuffles them). */
  choices?: string[];
  /** Accepted answer(s). timeline-order: the correct order as an array. */
  answer: string | string[];
  /** ALWAYS shown after an answer — the "why", never just "Correct." */
  explanation: string;
  /** Optional Scripture reference attached to the question. */
  ref?: string;
  /** matching / character-match pairs. */
  pairs?: InteractivePair[];
  /** Optional grouping label (used by QuizRunner's tag badge). */
  tag?: string;
}

/** Result reported by a renderer when the learner submits an answer. */
export interface AnswerResult {
  correct: boolean;
  /** Human-readable correct answer, shown when the learner was wrong. */
  correctLabel?: string;
}

export interface InteractiveRendererProps {
  q: InteractiveQuestion;
  /** True once submitted — inputs must be disabled. */
  locked: boolean;
  onSubmit: (result: AnswerResult) => void;
}

/** Normalize an answer value for comparison. */
export function norm(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, ' ');
}

export function acceptedAnswers(q: InteractiveQuestion): string[] {
  const raw = q.answer;
  const list = Array.isArray(raw) ? raw : [raw ?? ''];
  return list.map((s) => s.trim()).filter((s) => s.length > 0);
}

export function isAccepted(q: InteractiveQuestion, value: string): boolean {
  const want = acceptedAnswers(q).map(norm);
  const got = norm(value);
  return got.length > 0 && want.includes(got);
}
