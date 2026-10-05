// Convert legacy QuizQuestion (mc/tf/fill/matching) into InteractiveQuestion
// so existing content and the quiz bank render through the new components.
import type { QuizQuestion } from '@/lib/types';
import { quizChoices, quizText } from '@/lib/types';
import type { InteractiveKind, InteractiveQuestion } from './types';

const KIND: Record<string, InteractiveKind> = {
  mc: 'mc',
  tf: 'tf',
  fill: 'fill',
  matching: 'matching',
};

function explanationFor(q: QuizQuestion): string {
  if (q.explanation && q.explanation.trim().length > 0) return q.explanation;
  // Never leave the learner without a "why". A gentle fallback is better
  // than silence — content authors should still write real explanations.
  return 'Worth remembering: Scripture rewards slow, careful reading. Re-read the passage above and notice what it actually says.';
}

export function toInteractive(q: QuizQuestion): InteractiveQuestion {
  // Note: much of the quiz bank labels combo-style questions 'matching'
  // (choices like 'A-4, B-1, C-3, D-2') without real pairs. Only use the
  // two-column matching renderer when pairs actually exist; otherwise the
  // question is effectively multiple choice.
  const hasPairs = (q.pairs?.length ?? 0) > 0;
  const kind: InteractiveKind = q.type === 'matching' && !hasPairs ? 'mc' : (KIND[q.type] ?? 'mc');
  return {
    id: q.id,
    kind,
    prompt: quizText(q),
    choices:
      q.type === 'mc' || q.type === 'tf' || (q.type === 'matching' && !hasPairs)
        ? quizChoices(q)
        : undefined,
    answer: q.answer,
    explanation: explanationFor(q),
    pairs: q.pairs?.map((p) => ({ left: p.left, right: p.right })),
    tag: q.tags?.[0],
  };
}

export function toInteractiveList(questions: QuizQuestion[]): InteractiveQuestion[] {
  return (questions ?? []).map(toInteractive);
}
