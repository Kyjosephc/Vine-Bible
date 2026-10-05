import type { Verse } from './types';
import { FALLBACK_PASSAGES } from '@/content/fallback-passages';
import { BOOKS, getBook } from '@/content/books';
import { CHAPTER_STUDIES } from '@/content/chapters';
import type { ChapterStudy } from '@/content/chapters';

export interface ChapterText {
  ref: string;
  verses: Verse[];
  translation: string;
}

export type TranslationCode = 'web' | 'kjv' | 'asv';

export interface TranslationInfo {
  code: TranslationCode;
  /** Short label shown in the UI. */
  name: string;
  /** Full name for settings/about screens. */
  fullName: string;
  /** Licensing status — determines how text may be distributed. */
  license: 'public-domain' | 'licensed';
  /** Where the text comes from at runtime. */
  source: string;
}

/**
 * Registry of Bible translations Halo can display.
 *
 * Today every entry is public-domain (World English Bible, King James
 * Version, American Standard Version), so the app can fetch, cache, and
 * quote them freely, including offline.
 *
 * HOW TO ADD A LICENSED TRANSLATION (e.g. ESV, NIV, CSB):
 *  1. Obtain a distribution license from the rights holder (e.g.
 *     Crossway for ESV, Biblica/Zondervan for NIV) covering your platform
 *     and expected volume; most require an API key and attribution.
 *  2. Add an entry here with `license: 'licensed'` and the provider's
 *     endpoint in `source`. Add the code to `TranslationCode`.
 *  3. In `getChapterText`/`getVerseText`, route that code to the licensed
 *     provider (authenticated fetch, never bolls.life), and enforce any
 *     contractual limits (e.g. max verses per request, required
 *     copyright notice) before rendering.
 *  4. Never bundle licensed text into the repo, IndexedDB cache, or
 *     offline fallback passages — public-domain text only.
 * Scripture quotations inside content files likewise use only
 * public-domain wording (WEB/KJV/ASV).
 */
export const TRANSLATIONS: Record<TranslationCode, TranslationInfo> = {
  web: {
    code: 'web',
    name: 'WEB',
    fullName: 'World English Bible',
    license: 'public-domain',
    source: 'bolls.life API (public domain text), cached in IndexedDB',
  },
  kjv: {
    code: 'kjv',
    name: 'KJV',
    fullName: 'King James Version',
    license: 'public-domain',
    source: 'bolls.life API (public domain text), cached in IndexedDB',
  },
  asv: {
    code: 'asv',
    name: 'ASV',
    fullName: 'American Standard Version',
    license: 'public-domain',
    source: 'bolls.life API (public domain text), cached in IndexedDB',
  },
};

/** The translation used when none is specified. */
export const DEFAULT_TRANSLATION: TranslationCode = 'web';

interface BollsVerse {
  pk: number;
  verse: number;
  text: string;
}

const memCache = new Map<string, ChapterText>();

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function bookSlug(b: { id?: string; name: string }): string {
  return b.id ?? slugify(b.name);
}

export function refToSlug(ref: string): string {
  return slugify(ref);
}

/** Look up bundled chapter study material, e.g. ('genesis', 1). */
export function getChapterStudy(bookId: string, chapter: number): ChapterStudy | undefined {
  return CHAPTER_STUDIES[`${bookId}-${chapter}`];
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('halo', 1);
    req.onupgradeneeded = () => {
      req.result.createObjectStore('chapters');
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function idbGet(key: string): Promise<ChapterText | undefined> {
  const db = await openDb();
  try {
    const value = await new Promise<ChapterText | undefined>((resolve, reject) => {
      const tx = db.transaction('chapters', 'readonly');
      const req = tx.objectStore('chapters').get(key);
      req.onsuccess = () => resolve(req.result as ChapterText | undefined);
      req.onerror = () => reject(req.error);
    });
    return value;
  } finally {
    db.close();
  }
}

async function idbPut(key: string, value: ChapterText): Promise<void> {
  const db = await openDb();
  try {
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction('chapters', 'readwrite');
      tx.objectStore('chapters').put(value, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } finally {
    db.close();
  }
}

async function fetchWithTimeout(url: string, ms = 8000): Promise<Response> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { signal: ctrl.signal });
  } finally {
    clearTimeout(timer);
  }
}

/** Build a ChapterText from bundled fallback passages when the network fails. */
function fallbackChapter(bookName: string, chapter: number, translation: string): ChapterText | undefined {
  const prefix = `${bookName.toLowerCase()} ${chapter}:`;
  const matches = Object.values(FALLBACK_PASSAGES).filter((p) =>
    p.ref.toLowerCase().startsWith(prefix),
  );
  if (matches.length === 0) return undefined;
  const verses: Verse[] = matches
    .map((p) => {
      const m = p.ref.match(/:(\d+)/);
      return { number: m ? Number(m[1]) : 1, text: p.text };
    })
    .sort((a, b) => a.number - b.number);
  return { ref: `${bookName} ${chapter}`, verses, translation };
}

export async function getChapterText(
  book: { bollsBook: number; name: string },
  chapter: number,
  translation: TranslationCode = 'web',
): Promise<ChapterText> {
  const key = `${translation}-${book.bollsBook}-${chapter}`;
  const mem = memCache.get(key);
  if (mem) return mem;

  if (typeof indexedDB !== 'undefined') {
    try {
      const fromDb = await idbGet(key);
      if (fromDb) {
        memCache.set(key, fromDb);
        return fromDb;
      }
    } catch {
      // IndexedDB unavailable — continue to network.
    }
  }

  try {
    const res = await fetchWithTimeout(
      `https://bolls.life/get-text/${translation.toUpperCase()}/${book.bollsBook}/${chapter}/`,
    );
    if (!res.ok) throw new Error(`bolls HTTP ${res.status}`);
    const json = (await res.json()) as BollsVerse[];
    if (!Array.isArray(json) || json.length === 0) throw new Error('bolls returned no verses');
    const verses: Verse[] = json.map((v) => ({
      number: v.verse,
      text: String(v.text).trim(),
    }));
    const out: ChapterText = { ref: `${book.name} ${chapter}`, verses, translation };
    memCache.set(key, out);
    if (typeof indexedDB !== 'undefined') {
      idbPut(key, out).catch(() => {});
    }
    return out;
  } catch {
    const fb = fallbackChapter(book.name, chapter, translation);
    if (fb) {
      memCache.set(key, fb);
      return fb;
    }
    throw new Error('offline');
  }
}

const REF_RE = /^(.+?)\s+(\d+):(\d+)(?:\s*[–—-]\s*(\d+))?$/;

/** Fetch the text of a single verse or verse range, e.g. "John 3:16". */
export async function getVerseText(
  ref: string,
  translation: TranslationCode = 'web',
): Promise<{ ref: string; text: string }> {
  const clean = ref.trim();
  const direct = FALLBACK_PASSAGES[refToSlug(clean)];
  if (direct) return { ref: direct.ref, text: direct.text };

  const m = clean.match(REF_RE);
  if (!m) throw new Error('offline');
  const bookName = m[1].trim();
  const chapterNum = Number(m[2]);
  const vStart = Number(m[3]);
  const vEnd = m[4] ? Number(m[4]) : vStart;

  let bollsBook: number | undefined;
  let displayName = bookName;
  try {
    const found =
      getBook(slugify(bookName)) ??
      BOOKS.find(
        (b) => slugify(b.name) === slugify(bookName) || b.name.toLowerCase() === bookName.toLowerCase(),
      );
    if (found) {
      bollsBook = found.bollsBook;
      displayName = found.name;
    }
  } catch {
    // content unavailable — fall through to offline error below
  }
  if (!bollsBook) throw new Error('offline');

  const chapter = await getChapterText({ bollsBook, name: displayName }, chapterNum, translation);
  const text = chapter.verses
    .filter((v) => v.number >= vStart && v.number <= vEnd)
    .map((v) => v.text)
    .join(' ');
  if (!text) throw new Error('offline');
  return { ref: clean, text };
}
