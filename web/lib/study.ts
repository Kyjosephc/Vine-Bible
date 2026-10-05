import type { QuizQuestion, SessionMinutes } from './types';

export interface SessionSection {
  heading: string;
  body: string;
  kind: 'passage' | 'text' | 'list' | 'prayer' | 'quiz';
}

export interface SessionPlan {
  title: string;
  ref: string;
  minutes: number;
  difficulty: string;
  topic: string;
  sections: SessionSection[];
  quiz?: QuizQuestion[];
}

export interface SessionSeed {
  title: string;
  ref: string;
  topic: string;
  difficulty: string;
  passageText: string;
  explanation: string;
  context?: string;
  terms?: { term: string; definition: string }[];
  application?: string;
  reflection?: string[];
  prayer: string;
  quiz?: QuizQuestion[];
}

/** Split passage text into 2-3 roughly even chunks for verse-by-verse study. */
function chunkPassage(text: string, chunks: number): string[] {
  const sentences = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (sentences.length === 0) return [text];
  if (sentences.length <= chunks) return sentences;
  const out: string[] = [];
  const size = Math.ceil(sentences.length / chunks);
  for (let i = 0; i < sentences.length; i += size) {
    out.push(sentences.slice(i, i + size).join(' '));
  }
  return out;
}

const VERSE_NOTES = [
  'Read this part twice, slowly. Which word or phrase stands out to you, and why?',
  'How does this part connect to the heart of the passage? What does it reveal about God?',
  'What would change in your life this week if you truly believed this part?',
];

export function buildSession(minutes: SessionMinutes, seed: SessionSeed): SessionPlan {
  const sections: SessionSection[] = [];
  const push = (heading: string, body: string, kind: SessionSection['kind']) =>
    sections.push({ heading, body, kind });

  const reflections =
    seed.reflection && seed.reflection.length > 0
      ? seed.reflection
      : [`What is God saying to you through ${seed.ref}?`];
  const firstSentence = seed.explanation.split(/(?<=[.!?])\s+/)[0] ?? seed.explanation;
  const contextText =
    seed.context ??
    `Every passage was first heard by real people in a real moment. As you read ${seed.ref}, ask: who first received these words, and what did it cost them to believe?`;

  // ---- Core (every tier): passage, explanation, takeaway, reflection, prayer ----
  push('Read the Passage', `${seed.ref}\n${seed.passageText}`, 'passage');
  push('Understanding', seed.explanation, 'text');
  push('Takeaway', firstSentence, 'text');

  if (minutes >= 10) {
    push('Background & Context', contextText, 'text');
  }

  if (minutes >= 15) {
    if (seed.terms && seed.terms.length > 0) {
      push(
        'Key Terms',
        seed.terms.map((t) => `${t.term} — ${t.definition}`).join('\n'),
        'list',
      );
    }
    push(
      'Live It Out',
      seed.application ??
        `Choose one concrete way to live ${seed.ref} today. Small obedience, done in love, matters more than big intentions.`,
      'text',
    );
  }

  if (minutes >= 30) {
    const chunks = chunkPassage(seed.passageText, 3);
    push(
      'Verse by Verse',
      chunks
        .map((chunk, i) => `Part ${i + 1}: ${chunk}\nNote: ${VERSE_NOTES[i % VERSE_NOTES.length]}`)
        .join('\n\n'),
      'text',
    );
    push(
      'Cross-References',
      `Related passages on \u201c${seed.topic}\u201d will be suggested here as the library grows. For now, re-read ${seed.ref} slowly and note every promise and every command you find.`,
      'text',
    );
  }

  if (minutes >= 45) {
    push(
      'Go Deeper',
      [
        `How does ${seed.ref} point forward to Jesus — his person, his work, or his promises?`,
        `What would you say to a friend who finds this passage difficult to believe?`,
        `What is one habit you could build this month that flows from this passage?`,
      ].join('\n'),
      'list',
    );
  }

  if (minutes >= 60) {
    push('Historical Setting', contextText, 'text');
    push(
      'Cultural Setting',
      `The world behind ${seed.ref} is not our world. As you read, notice what the first hearers would have assumed — about honor, family, work, and God — and let those differences sharpen, not dull, the meaning.`,
      'text',
    );
    push(
      'Author & Audience',
      `Ask who wrote these words and to whom. The author's situation and the audience's struggles shape why this passage says what it says, in the way that it says it.`,
      'text',
    );
    push(
      'Literary Context',
      `No verse stands alone. Read the verses before and after ${seed.ref}: how does this passage fit the larger argument or story? What question is it answering?`,
      'text',
    );
    push(
      'Original Languages',
      seed.terms && seed.terms.length > 0
        ? seed.terms.map((t) => `${t.term} — ${t.definition}`).join('\n')
        : `Key Hebrew or Greek terms for this passage will appear here as word studies are added. For now, linger over repeated words in ${seed.ref} — repetition is the author's highlighter.`,
      'list',
    );
    push(
      'Themes',
      [`${seed.topic}`, 'The character of God', 'The response of faith'].join('\n'),
      'list',
    );
    push(
      'Theology',
      `What does ${seed.ref} teach us about who God is and what he has done? Hold that truth next to the rest of Scripture — sound doctrine is the whole counsel of God, not a single verse alone.`,
      'text',
    );
    push('Reflection Questions', reflections.join('\n'), 'list');
  } else {
    push('Reflect', reflections[0], 'text');
  }

  if (minutes >= 30 && seed.quiz && seed.quiz.length > 0) {
    push('Check Understanding', '', 'quiz');
  }

  push('Prayer', seed.prayer, 'prayer');

  if (minutes >= 60) {
    push(
      'Deeper Study',
      [
        `Memorize one verse from ${seed.ref} this week.`,
        `Read the full chapter that contains ${seed.ref} in one sitting.`,
        `Teach what you learned to someone else — explaining it will anchor it.`,
      ].join('\n'),
      'list',
    );
  }

  return {
    title: seed.title,
    ref: seed.ref,
    minutes,
    difficulty: seed.difficulty,
    topic: seed.topic,
    sections,
    quiz: seed.quiz,
  };
}

/** Human-friendly difficulty label derived from session length. */
export function difficultyForMinutes(minutes: number): string {
  if (minutes <= 10) return 'Beginner';
  if (minutes <= 30) return 'Intermediate';
  return 'Deep dive';
}
