// SM-2-lite spaced repetition for the review queue.

export interface ReviewItem {
  concept: string;
  /** ISO date string of the next scheduled review. */
  nextReview: string;
  intervalDays: number;
  reps: number;
}

/** Ladder for successful recalls: day 1 → 4 → 10 → 30 → 60. */
export const REVIEW_INTERVALS = [1, 4, 10, 30, 60];

/**
 * Grade a review: 0 = forgot, 1 = hard, 2 = easy.
 * - forgot → back to a 1-day interval
 * - hard → interval × 1.5 (rounded, minimum 1)
 * - easy → step up the ladder, or interval × 2.5 once past it
 */
export function gradeReview(item: ReviewItem, quality: 0 | 1 | 2): ReviewItem {
  let intervalDays: number;
  if (quality === 0) {
    intervalDays = 1;
  } else if (quality === 1) {
    intervalDays = Math.max(1, Math.round(item.intervalDays * 1.5));
  } else {
    const i = REVIEW_INTERVALS.indexOf(item.intervalDays);
    intervalDays =
      i >= 0 && i < REVIEW_INTERVALS.length - 1
        ? REVIEW_INTERVALS[i + 1]
        : Math.max(1, Math.round(item.intervalDays * 2.5));
  }
  const next = new Date();
  next.setDate(next.getDate() + intervalDays);
  return {
    ...item,
    intervalDays,
    reps: item.reps + 1,
    nextReview: next.toISOString(),
  };
}

/** A fresh item that has never been reviewed is always due. */
export function newReviewItem(concept: string): ReviewItem {
  return { concept, nextReview: new Date().toISOString(), intervalDays: 1, reps: 0 };
}

export function isDue(item: ReviewItem): boolean {
  return new Date(item.nextReview).getTime() <= Date.now();
}
