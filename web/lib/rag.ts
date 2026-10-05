/**
 * rag.ts — tiny dependency-free retrieval layer over Halo's trusted content.
 *
 * The index is built once (lazily) at module load from the in-code content
 * modules. Scoring is token-overlap with boosts for tags and Bible references.
 * No embeddings, no network, no DB — the content ships with the app.
 */

import { BEGINNER_PATH } from '@/content/lessons';
import { LAYERED_LESSONS } from '@/content/path-lessons';
import { PEOPLE } from '@/content/people';
import { PLACES } from '@/content/places';
import { BOOKS } from '@/content/books';
import { LIFE_TOPICS } from '@/content/life';
import { JESUS_PATH } from '@/content/jesus';
import { TIMELINE } from '@/content/timeline';
import { CHAPTER_STUDIES } from '@/content/chapters';
import { DEVOTIONALS } from '@/content/devotionals';
import { LEXICON } from '@/content/lexicon';
import { COURSES } from '@/content/courses';

export interface RagChunk {
  id: string;
  /** Human label, e.g. 'Book Guide', 'Person', 'Devotional'. */
  source: string;
  /** Display title, e.g. 'Romans — Book Guide'. */
  title: string;
  /** Verse/passage reference when one applies, e.g. 'Romans 8'. */
  ref?: string;
  /** In-app deep link when one exists. */
  url?: string;
  /** Normalized keyword tokens used for scoring boosts. */
  tags: string[];
  /** Chunk body (truncated for prompt size). */
  text: string;
}

export interface RagHit extends RagChunk {
  score: number;
}

export interface ParsedRef {
  bookId: string;
  bookName: string;
  chapter?: number;
  verse?: number;
}

const MAX_CHUNK_CHARS = 900;

function norm(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
}

function clip(s: string, max = MAX_CHUNK_CHARS): string {
  const t = s.replace(/\s+/g, ' ').trim();
  return t.length > max ? t.slice(0, max - 1).trimEnd() + '…' : t;
}

function join(...parts: (string | undefined)[]): string {
  return parts.filter(Boolean).join('\n');
}

function tagTokens(...parts: (string | string[] | undefined)[]): string[] {
  const out = new Set<string>();
  for (const p of parts) {
    if (!p) continue;
    for (const w of norm(Array.isArray(p) ? p.join(' ') : p).split(/\s+/)) {
      if (w.length > 2) out.add(w);
    }
  }
  return [...out];
}

/* ------------------------------------------------------------------ */
/* Index builders                                                      */
/* ------------------------------------------------------------------ */

let index: RagChunk[] | null = null;

function push(chunks: RagChunk[], c: Omit<RagChunk, 'text'> & { text: string }) {
  chunks.push({ ...c, text: clip(c.text) });
}

function buildIndex(): RagChunk[] {
  const chunks: RagChunk[] = [];

  for (const b of BOOKS) {
    push(chunks, {
      id: `book-${b.id}`,
      source: 'Book Guide',
      title: `${b.name} — Book Guide`,
      ref: b.name,
      url: `/bible/${b.id}`,
      tags: tagTokens(b.name, b.id, b.author, b.themes, b.keyPeople, b.keyEvents),
      text: join(
        `Author: ${b.author}. Date: ${b.date}. Audience: ${b.audience}.`,
        `Purpose: ${b.purpose}`,
        `Overview: ${b.overview}`,
        `Themes: ${b.themes.join('; ')}`,
        `Key people: ${b.keyPeople.join(', ')}`,
        `Key events: ${b.keyEvents.join('; ')}`,
      ),
    });
  }

  for (const [key, cs] of Object.entries(CHAPTER_STUDIES)) {
    const book = BOOKS.find((b) => b.id === cs.bookId);
    const bookName = book?.name ?? cs.bookId;
    push(chunks, {
      id: `chapter-${key}`,
      source: 'Chapter Study',
      title: `${bookName} ${cs.chapter} — ${cs.title}`,
      ref: `${bookName} ${cs.chapter}`,
      url: `/bible/${cs.bookId}/${cs.chapter}`,
      tags: tagTokens(bookName, cs.bookId, cs.title, cs.themes, cs.people, cs.words.map((w) => w.term)),
      text: join(
        `Summary: ${cs.summary}`,
        `Understand: ${cs.understand}`,
        `Context: ${cs.context}`,
        `Themes: ${cs.themes.join('; ')}`,
        `Key words: ${cs.words.map((w) => `${w.term} — ${w.definition}`).join('; ')}`,
        `Cross-references: ${cs.crossRefs.map((c) => `${c.ref}: ${c.note}`).join('; ')}`,
        `Application: ${cs.application}`,
      ),
    });
  }

  for (const p of PEOPLE) {
    push(chunks, {
      id: `person-${p.id}`,
      source: 'Person',
      title: `${p.name} — Bible Person`,
      url: `/people/${p.id}`,
      tags: tagTokens(p.name, p.id, p.family, p.keyPassages),
      text: join(
        p.who,
        `Context: ${p.context}`,
        `Key events: ${p.events.join('; ')}`,
        `Key passages: ${p.keyPassages.join(', ')}`,
        `Lessons: ${p.lessons.join('; ')}`,
        `Faith examples: ${p.faithExamples.join('; ')}`,
      ),
    });
  }

  for (const t of LIFE_TOPICS) {
    push(chunks, {
      id: `life-${t.id}`,
      source: 'Life Topic',
      title: `${t.title} — What the Bible Says`,
      url: `/life/${t.id}`,
      tags: tagTokens(t.title, t.id, t.passages.map((x) => x.ref)),
      text: join(
        `What Scripture teaches: ${t.teaches}`,
        `Context: ${t.context}`,
        `Passages: ${t.passages.map((x) => `${x.ref} — ${x.note}`).join('; ')}`,
        `What it does NOT say: ${t.notSays}`,
        `Application: ${t.application}`,
      ),
    });
  }

  for (const pl of PLACES) {
    push(chunks, {
      id: `place-${pl.id}`,
      source: 'Place',
      title: `${pl.name} — Bible Place`,
      tags: tagTokens(pl.name, pl.id, pl.keyPassages),
      text: join(pl.description, `Significance: ${pl.significance}`, `Key passages: ${pl.keyPassages.join(', ')}`),
    });
  }

  for (const j of JESUS_PATH) {
    push(chunks, {
      id: `jesus-${j.id}`,
      source: 'Jesus',
      title: `${j.title} — Life of Jesus`,
      url: '/jesus',
      tags: tagTokens(j.title, j.period, j.events.map((e) => e.title)),
      text: join(
        `Period: ${j.period}. ${j.summary}`,
        `Events: ${j.events.map((e) => `${e.title} (${e.ref}): ${e.description}`).join('; ')}`,
        `Key passages: ${j.keyPassages.join(', ')}`,
      ),
    });
  }

  for (const era of TIMELINE) {
    for (const e of era.events) {
      push(chunks, {
        id: `timeline-${era.id}-${e.title.slice(0, 24)}`,
        source: 'Timeline',
        title: `${e.title} — Bible Timeline`,
        ref: e.ref,
        url: '/timeline',
        tags: tagTokens(era.title, e.title, e.ref),
        text: `Era: ${era.title} (${era.period}). ${e.title}, ${e.date}: ${e.description}`,
      });
    }
  }

  for (const d of DEVOTIONALS) {
    push(chunks, {
      id: `dev-${d.id}`,
      source: 'Devotional',
      title: `${d.title} — Devotional`,
      ref: d.ref,
      url: `/devotional/${d.id}`,
      tags: tagTokens(d.title, d.topic, d.ref),
      text: join(
        `Passage: ${d.ref}. ${d.passageText}`,
        `Explanation: ${d.explanation}`,
        `Context: ${d.context}`,
        `Lesson: ${d.lesson}`,
        `Application: ${d.application}`,
      ),
    });
  }

  for (const l of LEXICON) {
    push(chunks, {
      id: `lex-${l.language}-${l.term.slice(0, 24)}`,
      source: 'Word Study',
      title: `${l.term} (${l.transliteration}) — ${l.language === 'hebrew' ? 'Hebrew' : 'Greek'} Word Study`,
      tags: tagTokens(l.term, l.transliteration, l.language),
      text: `${l.term} (${l.transliteration}, ${l.language}): ${l.definition} Seen in: ${l.verses.join(', ')}.`,
    });
  }

  for (const les of BEGINNER_PATH) {
    push(chunks, {
      id: `lesson-${les.id}`,
      source: 'Lesson',
      title: `${les.title} — Study Lesson`,
      url: '/paths',
      tags: tagTokens(les.title, les.keyTerms.map((k) => k.term)),
      text: join(les.body, `Key terms: ${les.keyTerms.map((k) => `${k.term}: ${k.definition}`).join('; ')}`),
    });
  }

  for (const ll of LAYERED_LESSONS) {
    push(chunks, {
      id: `player-${ll.id}`,
      source: 'Study Path',
      title: `${ll.title} — Study Path Lesson`,
      url: '/paths',
      tags: tagTokens(ll.title, ll.pathId),
      text: join(ll.summary, ll.layers.core.concept, ll.layers.core.teaching, ll.layers.expanded.teaching),
    });
  }

  for (const c of COURSES) {
    for (const cl of c.lessons) {
      push(chunks, {
        id: `course-${c.id}-${cl.id}`,
        source: 'Course',
        title: `${cl.title} — ${c.title}`,
        url: '/courses',
        tags: tagTokens(c.title, cl.title),
        text: cl.body,
      });
    }
  }

  return chunks;
}

function getIndex(): RagChunk[] {
  if (!index) index = buildIndex();
  return index;
}

/* ------------------------------------------------------------------ */
/* Reference parsing                                                   */
/* ------------------------------------------------------------------ */

/** Parse "Romans 8", "John 3:16", "1 Samuel 5" out of free text. */
export function parseBibleRef(text: string): ParsedRef | null {
  const sorted = [...BOOKS].sort((a, b) => b.name.length - a.name.length);
  for (const b of sorted) {
    const re = new RegExp(`\\b${b.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    const m = re.exec(text);
    if (!m) continue;
    const after = text.slice(m.index + m[0].length);
    const cv = after.match(/^\s*(\d{1,3})(?::(\d{1,3}))?/);
    return {
      bookId: b.id,
      bookName: b.name,
      chapter: cv ? Number(cv[1]) : undefined,
      verse: cv?.[2] ? Number(cv[2]) : undefined,
    };
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* Scoring                                                             */
/* ------------------------------------------------------------------ */

const STOP = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'of', 'to', 'in', 'on', 'for', 'with',
  'is', 'are', 'was', 'were', 'be', 'been', 'what', 'does', 'do', 'did', 'how',
  'why', 'who', 'when', 'where', 'which', 'that', 'this', 'it', 'its', 'about',
  'from', 'you', 'your', 'me', 'my', 'we', 'they', 'them', 'their', 'he', 'she',
  'his', 'her', 'say', 'says', 'said', 'mean', 'means', 'bible', 'verse',
]);

function queryTokens(q: string): string[] {
  return norm(q)
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w));
}

/**
 * Retrieve the top-k most relevant chunks for a query.
 * `refHint` (e.g. from ?ref=) boosts chunks matching that Bible reference.
 */
export function retrieve(query: string, k = 6, opts?: { refHint?: string }): RagHit[] {
  const idx = getIndex();
  const ref = parseBibleRef(opts?.refHint ? `${query} ${opts.refHint}` : query);
  const tokens = queryTokens(query);
  const tagSet = new Set(tokens);

  const scored: RagHit[] = [];
  for (const c of idx) {
    let score = 0;
    const hay = norm(c.title + ' ' + c.text);
    for (const t of tokens) {
      const occ = hay.split(t).length - 1;
      if (occ > 0) score += Math.min(occ, 4);
      if (c.tags.includes(t)) score += 4;
      // Partial name match, e.g. query "David" vs tag "david"
      if (tagSet.has(t) && c.tags.some((tag) => tag.startsWith(t) || t.startsWith(tag))) score += 1;
    }
    if (ref) {
      const bookHit = c.tags.includes(ref.bookId) || c.tags.includes(norm(ref.bookName).trim());
      if (bookHit) score += 12;
      if (ref.chapter !== undefined && c.ref) {
        const cRef = norm(c.ref);
        const bn = norm(ref.bookName).trim();
        if (cRef.includes(bn)) score += 8;
        if (cRef.includes(`${bn} ${ref.chapter}`)) score += 10;
        // Chapter studies / devotionals pinned to that chapter win big.
        if (c.source === 'Chapter Study' && cRef === `${bn} ${ref.chapter}`) score += 20;
      }
    }
    if (score > 0) scored.push({ ...c, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, k);
}
