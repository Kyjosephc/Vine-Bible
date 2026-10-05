// Structured learning paths metadata for the Halo Bible app.
// Lesson content lives in ./path-lessons (owned by another build task).

export interface LearningPath {
  id: 'beginner' | 'intermediate' | 'advanced';
  title: string;
  tagline: string;
  description: string;
  level: string;
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'beginner',
    title: 'Beginner',
    tagline: 'Meet the God of the Bible, one simple step at a time.',
    description:
      'Start here if you are brand new to the Bible. Ten gentle lessons introduce who God is, who Jesus is, and how to begin reading Scripture with confidence.',
    level: 'Start here if you are new to the Bible.',
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    tagline: 'Go deeper into Scripture’s story and what it means for your life.',
    description:
      'For those who know the basics and want more. Ten lessons trace the grand story of the Bible, strengthen core doctrines, and build habits of daily reading and prayer.',
    level: 'For those with some experience reading the Bible.',
  },
  {
    id: 'advanced',
    title: 'Advanced',
    tagline: 'Wrestle with hard questions and live the Word with conviction.',
    description:
      'For mature readers ready for depth. Ten lessons take on theology, apologetics, and biblical languages, and equip you to teach and share what you have learned.',
    level: 'For experienced readers ready for deep study.',
  },
];

export function getPath(id: string): LearningPath | undefined {
  return LEARNING_PATHS.find((p) => p.id === id);
}

export function defaultPathForLevel(
  level?: string | null,
): 'beginner' | 'intermediate' | 'advanced' {
  switch ((level ?? '').toLowerCase().trim()) {
    case 'brand-new':
    case 'beginner':
      return 'beginner';
    case 'some-experience':
      return 'intermediate';
    case 'intermediate':
    case 'advanced':
      return 'advanced';
    default:
      return 'beginner';
  }
}
