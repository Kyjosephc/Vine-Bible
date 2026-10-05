// Gamification for Halo: reverent, never gimmicky. Everything here is
// DERIVED from existing data (lesson_progress, quiz_attempts,
// study_sessions, memory_verses) — no new tables, no grinding mechanics.
// The goal is to encourage consistency, never competition, and to honor
// breaks without shaming them.

export interface GamificationInput {
  lessonCount: number;
  /** Sum of quiz points earned across all attempts. */
  quizPoints: number;
  /** Number of quiz attempts taken. */
  quizAttempts: number;
  /** Total minutes studied across all sessions. */
  studyMinutes: number;
  /** Verses with status 'mastered'. */
  masteredVerses: number;
  /** Current day streak. */
  streakDays: number;
  /** Verses in the memory system at all. */
  memoryVerseCount: number;
}

/* ---------------- XP ---------------- */

/** XP is derived, never stored:
 *  - 10 per completed lesson
 *  - 2 per quiz point earned
 *  - 1 per 10 minutes studied
 *  - 20 per mastered verse
 */
export function computeXp(input: GamificationInput): number {
  return (
    input.lessonCount * 10 +
    input.quizPoints * 2 +
    Math.floor(input.studyMinutes / 10) +
    input.masteredVerses * 20
  );
}

/* ---------------- Levels ---------------- */

export interface Level {
  name: string;
  minXp: number;
  /** A warm one-liner shown when this level is reached. */
  blessing: string;
}

export const LEVELS: Level[] = [
  { name: 'Seeker', minXp: 0, blessing: 'Every journey begins with seeking. Welcome.' },
  { name: 'Learner', minXp: 50, blessing: 'You are building a steady habit of learning.' },
  { name: 'Student', minXp: 150, blessing: 'You are studying Scripture with real consistency.' },
  { name: 'Disciple', minXp: 350, blessing: 'You are learning to follow, not just to know.' },
  { name: 'Teacher', minXp: 700, blessing: 'What you have learned is ready to be shared.' },
];

export interface LevelProgress {
  level: Level;
  next: Level | null;
  /** XP into the current level, and XP needed to finish it. */
  intoLevel: number;
  toNext: number;
  pct: number; // 0-100 progress toward next level
}

export function levelForXp(xp: number): LevelProgress {
  let level = LEVELS[0];
  let next: Level | null = null;
  for (let i = 0; i < LEVELS.length; i++) {
    if (xp >= LEVELS[i].minXp) level = LEVELS[i];
    else {
      next = LEVELS[i];
      break;
    }
  }
  if (!next) {
    return { level, next: null, intoLevel: xp - level.minXp, toNext: 0, pct: 100 };
  }
  const span = next.minXp - level.minXp;
  const intoLevel = xp - level.minXp;
  return {
    level,
    next,
    intoLevel,
    toNext: next.minXp - xp,
    pct: span > 0 ? Math.min(100, Math.round((intoLevel / span) * 100)) : 100,
  };
}

/* ---------------- Streaks ---------------- */

/** Same day-streak logic used across the app: consecutive calendar days
 *  with at least one study session (today counts if studied). */
export function computeStreak(isoDates: string[]): number {
  const days = new Set(isoDates.map((d) => new Date(d).toDateString()));
  const cur = new Date();
  if (!days.has(cur.toDateString())) cur.setDate(cur.getDate() - 1);
  let streak = 0;
  while (days.has(cur.toDateString())) {
    streak++;
    cur.setDate(cur.getDate() - 1);
  }
  return streak;
}

/* ---------------- Badges (all derived) ---------------- */

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string; // emoji, kept tasteful
  earned: boolean;
}

const BADGE_DEFS: Array<{
  id: string;
  name: string;
  description: string;
  icon: string;
  check: (i: GamificationInput) => boolean;
}> = [
  {
    id: 'first-lesson',
    name: 'First Steps',
    description: 'Completed your first lesson.',
    icon: '🌱',
    check: (i) => i.lessonCount >= 1,
  },
  {
    id: 'ten-lessons',
    name: 'Steady Learner',
    description: 'Completed 10 lessons.',
    icon: '📖',
    check: (i) => i.lessonCount >= 10,
  },
  {
    id: 'fifty-lessons',
    name: 'Diligent Student',
    description: 'Completed 50 lessons.',
    icon: '🕯️',
    check: (i) => i.lessonCount >= 50,
  },
  {
    id: 'first-quiz',
    name: 'Tested & True',
    description: 'Finished your first quiz.',
    icon: '✨',
    check: (i) => i.quizAttempts >= 1,
  },
  {
    id: 'ten-quizzes',
    name: 'Proven',
    description: 'Finished 10 quizzes.',
    icon: '🏺',
    check: (i) => i.quizAttempts >= 10,
  },
  {
    id: 'streak-7',
    name: 'A Week of Mornings',
    description: 'Studied 7 days in a row.',
    icon: '🔥',
    check: (i) => i.streakDays >= 7,
  },
  {
    id: 'streak-30',
    name: 'A Month of Faithfulness',
    description: 'Studied 30 days in a row.',
    icon: '🌅',
    check: (i) => i.streakDays >= 30,
  },
  {
    id: 'first-memory',
    name: 'Hidden in the Heart',
    description: 'Memorized your first verse. "I have hidden your word in my heart." (Psalm 119:11)',
    icon: '💎',
    check: (i) => i.masteredVerses >= 1,
  },
  {
    id: 'five-memory',
    name: 'Treasure Keeper',
    description: 'Memorized 5 verses.',
    icon: '👑',
    check: (i) => i.masteredVerses >= 5,
  },
  {
    id: 'memory-started',
    name: 'The Journey Inward',
    description: 'Added your first verse to memorize.',
    icon: '📜',
    check: (i) => i.memoryVerseCount >= 1,
  },
  {
    id: 'hour-studied',
    name: 'An Hour Well Spent',
    description: 'Studied for a full hour in total.',
    icon: '⏳',
    check: (i) => i.studyMinutes >= 60,
  },
  {
    id: 'ten-hours',
    name: 'Deep Roots',
    description: 'Studied for 10 hours in total.',
    icon: '🌳',
    check: (i) => i.studyMinutes >= 600,
  },
];

export function computeBadges(input: GamificationInput): Badge[] {
  return BADGE_DEFS.map((d) => ({
    id: d.id,
    name: d.name,
    description: d.description,
    icon: d.icon,
    earned: d.check(input),
  }));
}

/* ---------------- Daily / weekly goals ---------------- */

/** Minutes studied today vs the user's daily goal (from onboarding). */
export function goalProgress(todayMinutes: number, dailyGoal: number): {
  todayMinutes: number;
  dailyGoal: number;
  pct: number;
  met: boolean;
} {
  const goal = Math.max(1, dailyGoal);
  return {
    todayMinutes,
    dailyGoal: goal,
    pct: Math.min(100, Math.round((todayMinutes / goal) * 100)),
    met: todayMinutes >= goal,
  };
}
