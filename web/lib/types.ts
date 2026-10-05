// Shared domain types for Lumen Bible.
// Minimal contract: QuizQuestion, QuizType, Verse.

export type QuizType = 'mc' | 'tf' | 'matching' | 'fill';

export interface QuizPair {
  left: string;
  right: string;
}

export interface QuizQuestion {
  id: string;
  type: QuizType;
  /** Preferred: question text. `prompt` is accepted as an alias (used by content files). */
  question?: string;
  prompt?: string;
  /**
   * mc: answer choices. tf: optional, defaults to ['True','False'].
   * matching: optional right-side pool (derived from pairs when omitted).
   * `choices` is accepted as an alias (used by content files).
   */
  options?: string[];
  choices?: string[];
  /**
   * mc: exact text of the correct option. tf: 'True' | 'False'.
   * fill: accepted answer (compared case-insensitively); content files may
   * provide an array of accepted answers.
   * matching: joined "left=>right" pairs separated by '|' in pairs order,
   *   or derived from pairs when empty.
   */
  answer: string | string[];
  pairs?: QuizPair[];
  explanation?: string;
  tags?: string[];
}

/** Normalized accessors that accept both field namings. */
export function quizText(q: QuizQuestion): string {
  return q.question || q.prompt || '';
}

/** Normalized answer choices for mc/tf/matching questions. */
export function quizChoices(q: QuizQuestion): string[] {
  if (q.type === 'tf') return q.options ?? q.choices ?? ['True', 'False'];
  const base = q.options ?? q.choices;
  if (base && base.length > 0) return base;
  if (q.type === 'matching' && q.pairs) return q.pairs.map((p) => p.right);
  return [];
}

export interface Verse {
  number: number;
  text: string;
}

export type SessionMinutes = 5 | 10 | 15 | 30 | 45 | 60;
