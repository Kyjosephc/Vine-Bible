// Smart personalization: next-step suggestions built from quiz
// performance by tag, lesson progress, and memory progress.
// Warm tone throughout — encouragement, never shame, and broken streaks
// are met with welcome-back language, not guilt.

export interface TagPerformance {
  tag: string;
  pct: number; // 0-100 average score
  attempts: number;
}

export interface RecommendInput {
  tagPerformance: TagPerformance[];
  lessonCount: number;
  /** The user's current learning path id, e.g. 'beginner'. */
  pathId: string;
  masteredVerses: number;
  memoryVerseCount: number;
  streakDays: number;
  hasLessonsAvailable: boolean;
}

export interface Recommendation {
  kind: 'next' | 'foundational' | 'deeper' | 'habit';
  title: string;
  body: string;
  href?: string;
}

/** Turn a machine tag like "path-lesson:genesis-1:5min" into a human topic. */
export function prettifyTag(tag: string): string {
  const cleaned = tag
    .replace(/^path-lesson:/, '')
    .replace(/:\d+min$/, '')
    .replace(/[-_]/g, ' ')
    .trim();
  if (!cleaned) return 'Scripture';
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

// Topic bridges: when a learner has engaged with a topic, suggest the
// natural next step. Kept to well-established progressions. Regexes match
// real quiz-bank tags (e.g. 'jesus-birth', 'paul', 'parables') and lesson tags.
const NEXT_STEPS: Array<{ match: RegExp; suggest: string; href?: string }> = [
  { match: /jesus|gospel|matthew|mark|luke|john/i, suggest: 'Acts — the story of what happened next', href: '/paths' },
  { match: /genesis|creation|abraham/i, suggest: 'Exodus — from promise to deliverance', href: '/paths' },
  { match: /exodus|moses/i, suggest: 'the wilderness journey in Numbers', href: '/paths' },
  { match: /paul|romans/i, suggest: 'Romans — Paul\u2019s fullest letter', href: '/paths' },
  { match: /miracles|parables/i, suggest: 'the Gospel of Mark — the fastest-paced Gospel', href: '/paths' },
  { match: /psalm|worship|david/i, suggest: 'the life of David, the psalmist-king', href: '/people' },
  { match: /faith|grace/i, suggest: 'Galatians or Ephesians — grace explored further', href: '/paths' },
  { match: /prayer/i, suggest: 'the Lord\u2019s Prayer in Matthew 6', href: '/prayer' },
  { match: /proverb|wisdom/i, suggest: 'Ecclesiastes or James — wisdom applied', href: '/paths' },
];

export function buildRecommendations(input: RecommendInput): Recommendation[] {
  const recs: Recommendation[] = [];
  const { tagPerformance } = input;

  // 1. Foundational: low scores with real attempts -> revisit gently.
  const weak = tagPerformance
    .filter((tp) => tp.attempts >= 2 && tp.pct < 60)
    .sort((a, b) => a.pct - b.pct)[0];
  if (weak) {
    const topic = prettifyTag(weak.tag);
    recs.push({
      kind: 'foundational',
      title: `Strengthen your foundations: ${topic}`,
      body: `Some of your quiz answers on ${topic} suggest the basics could use another pass — and that is a good instinct to follow. Revisiting foundations is how deep understanding is built.`,
      href: `/quizzes?tag=${encodeURIComponent(weak.tag)}`,
    });
  }

  // 2. Deeper: strong scores -> go further.
  const strong = tagPerformance
    .filter((tp) => tp.attempts >= 2 && tp.pct >= 85)
    .sort((a, b) => b.pct - a.pct)[0];
  if (strong) {
    const topic = prettifyTag(strong.tag);
    const bridge = NEXT_STEPS.find((n) => n.match.test(strong.tag) || n.match.test(topic));
    recs.push({
      kind: 'deeper',
      title: `You are strong on ${topic} — go deeper`,
      body: bridge
        ? `You clearly understand ${topic}. A natural next step is ${bridge.suggest}.`
        : `You clearly understand ${topic}. The next lesson in your path will stretch you further.`,
      href: bridge?.href ?? '/paths',
    });
  }

  // 3. Next step from topic engagement (only if not already covered).
  if (recs.length < 2 && tagPerformance.length > 0) {
    const engaged = [...tagPerformance].sort((a, b) => b.attempts - a.attempts)[0];
    const topic = prettifyTag(engaged.tag);
    const bridge = NEXT_STEPS.find((n) => n.match.test(engaged.tag) || n.match.test(topic));
    if (bridge) {
      recs.push({
        kind: 'next',
        title: `Because you have been studying ${topic}`,
        body: `You have spent time with ${topic}. A good next step is ${bridge.suggest} — Scripture loves to answer its own questions.`,
        href: bridge.href,
      });
    }
  }

  // 4. Habit: welcome back, or encourage the memory practice.
  if (input.streakDays === 0 && input.lessonCount > 0) {
    recs.push({
      kind: 'habit',
      title: 'Welcome back',
      body: 'It has been a while — no guilt here, just an open Bible. Even five minutes today keeps the habit alive.',
      href: '/paths',
    });
  } else if (input.memoryVerseCount === 0 && input.lessonCount >= 3) {
    recs.push({
      kind: 'habit',
      title: 'Try hiding a verse in your heart',
      body: 'You have been learning steadily. Memorizing even one verse — Psalm 23:1 is a gentle start — makes truth portable for hard days.',
      href: '/memory',
    });
  } else if (input.hasLessonsAvailable && input.lessonCount === 0) {
    recs.push({
      kind: 'next',
      title: 'Start your first lesson',
      body: 'Your learning path is ready. Five minutes is enough to begin.',
      href: '/paths',
    });
  }

  return recs.slice(0, 3);
}
