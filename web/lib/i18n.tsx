// i18n: useT() -> { t(key, fallback?), lang, setLang } and LanguageProvider.
// Intentionally hook-free and WITHOUT 'use client' so it is safe to import
// from both server and client components (calling it inside a server
// component works because there are no React hooks involved).
// Language is persisted to localStorage ('lumen-lang'); changing it takes
// effect on the next render/navigation — callers that switch language should
// reload or navigate afterwards.

import type { ReactNode } from 'react';
import { en } from '@/i18n/en';
import { es } from '@/i18n/es';
import { pt } from '@/i18n/pt';

const LOCALES: Record<string, Record<string, string>> = { en, es, pt };
export const SUPPORTED_LANGS = ['en', 'es', 'pt'] as const;

const STORAGE_KEY = 'lumen-lang';
let memoryLang = 'en';

function storedLang(): string | null {
  try {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      const s = window.localStorage.getItem(STORAGE_KEY);
      if (s && LOCALES[s]) return s;
    }
  } catch {
    /* ignore */
  }
  return null;
}

export function getLang(): string {
  return storedLang() ?? memoryLang;
}

// Extra strings needed by the core learning routes. Only English is filled;
// other languages fall back to English until the locale files gain them.
const EXTRA: Record<string, Record<string, string>> = {
  en: {
    greeting: 'Welcome back',
    tagline: 'Learn the Bible, deeply',
    login_title: 'Begin your journey through Scripture',
    login_text: 'Log in to track studies, lessons, quizzes and review streaks.',
    login_button: 'Log in / Sign up',
    duration: 'Session length',
    minutes: 'min',
    continue: 'Continue',
    start: 'Start',
    start_course: 'Start course',
    login_required: 'Log in to save your progress.',
    all_caught_up: "You're all caught up!",
    view_all: 'View all',
    details: 'Details',
    no_lessons: 'No lessons yet',

    complete_session: 'Complete session',
    session_saved: 'Session saved. Well done!',
    read_aloud: 'Read aloud',
    stop_reading: 'Stop',
    login_to_track: 'Log in to track this session and build your review queue.',
    study_not_found: 'Study not found. Pick another devotional.',

    select_match: 'Choose…',
    type_answer: 'Type your answer',
    finished: 'Finished',
    retake: 'Retake quiz',

    review_title: 'Review',
    due_now: 'Due now',
    tap_to_reveal: 'Tap to reveal',
    forgot: 'Forgot',
    hard: 'Hard',
    easy: 'Easy',
    next_review: 'Next review',

    chapters: 'chapters',
    author: 'Author',
    date: 'Date',
    audience: 'Audience',
    purpose: 'Purpose',
    themes: 'Themes',
    key_people: 'Key people',
    key_events: 'Key events',
    structure: 'Structure',

    key_terms: 'Key terms',
    test_yourself: 'Test yourself',
    course_complete: 'Course complete!',

    life_topics: 'Life topics',
    key_passages: 'Key passages',
    application: 'Application',
    reflection: 'Reflection',
    teaches: 'What Scripture teaches',
    not_says: 'What it does not say',
    deeper: 'Go deeper',
    context: 'Context',

    devotionals: 'Devotionals',
    all_lengths: 'All lengths',
    start_study_session: 'Start study session',

    jesus_title: 'The Life of Jesus',
    people_title: 'People of the Bible',
    people_search: 'Search people…',
    places_title: 'Places of the Bible',
    view_map: 'View map',
    timeline_title: 'Bible Timeline',
    quizzes_title: 'Quizzes',
    pick_topic: 'Pick a topic',
    weak_area: 'Keep growing',
    search_title: 'Search',
    search_hint: 'Try "love", "faith", "prayer", "David"…',
    no_results: 'No results. Try another word.',
    search_books: 'Books',
    search_people: 'People',
    search_places: 'Places',
    search_topics: 'Life topics',
    search_words: 'Word study',
    search_passages: 'Passages',

    tab_summary: 'Overview',
    tab_understand: 'Understand',
    tab_context: 'Context',
    tab_people: 'People',
    tab_words: 'Key words',
    tab_themes: 'Themes',
    tab_crossrefs: 'Cross-references',
    tab_apply: 'Apply',
    tab_reflect: 'Reflect',
    tab_quiz: 'Quiz',
    tab_pray: 'Pray',

    listen: 'Listen',
    stop: 'Stop',
    sleep_timer: 'Sleep timer',
    off: 'Off',
    tap_verse: 'Tap a verse to highlight it',
    offline_note: 'Offline — showing a saved passage instead.',
    highlights: 'Highlights',

    more_title: 'More',
    more_hint: 'Everything else in Lumen Bible.',
  },
  es: {},
  pt: {},
};

function humanize(key: string): string {
  const words = key
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[._]/g, ' ');
  return words.charAt(0).toUpperCase() + words.slice(1);
}

export function translate(key: string, lang: string, fallback?: string): string {
  const hit =
    EXTRA[lang]?.[key] ?? LOCALES[lang]?.[key] ?? EXTRA.en[key] ?? LOCALES.en[key];
  if (hit !== undefined) return hit;
  return fallback ?? humanize(key);
}

export interface I18nApi {
  t: (key: string, fallback?: string) => string;
  lang: string;
  setLang: (lang: string) => void;
}

export function useT(): I18nApi {
  const lang = getLang();
  return {
    t: (key: string, fallback?: string) => translate(key, lang, fallback),
    lang,
    setLang: (l: string) => {
      if (!LOCALES[l]) return;
      memoryLang = l;
      try {
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
          window.localStorage.setItem(STORAGE_KEY, l);
        }
      } catch {
        /* ignore */
      }
    },
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
