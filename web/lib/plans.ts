/**
 * Reading plan definitions for Lumen Bible.
 *
 * Three plans:
 * - bible-in-a-year: all 1189 chapters in canonical order, ~3 chapters/day
 * - chronological: simplified chronological order, 365 days
 * - topical-faith: 30-day faith foundations series
 *
 * Chapter counts below are the standard Protestant canon totals.
 */

export interface PlanDay {
  day: number;
  label: string;
  refs: string[];
}

export interface ReadingPlan {
  id: string;
  title: string;
  description: string;
  days: PlanDay[];
}

interface BookInfo {
  short: string;
  chapters: number;
}

/** 66 books with verified chapter counts (sums to 1189). */
const BOOKS: BookInfo[] = [
  { short: 'Gen', chapters: 50 },
  { short: 'Exod', chapters: 40 },
  { short: 'Lev', chapters: 27 },
  { short: 'Num', chapters: 36 },
  { short: 'Deut', chapters: 34 },
  { short: 'Josh', chapters: 24 },
  { short: 'Judg', chapters: 21 },
  { short: 'Ruth', chapters: 4 },
  { short: '1 Sam', chapters: 31 },
  { short: '2 Sam', chapters: 24 },
  { short: '1 Kgs', chapters: 22 },
  { short: '2 Kgs', chapters: 25 },
  { short: '1 Chr', chapters: 29 },
  { short: '2 Chr', chapters: 36 },
  { short: 'Ezra', chapters: 10 },
  { short: 'Neh', chapters: 13 },
  { short: 'Esth', chapters: 10 },
  { short: 'Job', chapters: 42 },
  { short: 'Ps', chapters: 150 },
  { short: 'Prov', chapters: 31 },
  { short: 'Eccl', chapters: 12 },
  { short: 'Song', chapters: 8 },
  { short: 'Isa', chapters: 66 },
  { short: 'Jer', chapters: 52 },
  { short: 'Lam', chapters: 5 },
  { short: 'Ezek', chapters: 48 },
  { short: 'Dan', chapters: 12 },
  { short: 'Hos', chapters: 14 },
  { short: 'Joel', chapters: 3 },
  { short: 'Amos', chapters: 9 },
  { short: 'Obad', chapters: 1 },
  { short: 'Jonah', chapters: 4 },
  { short: 'Mic', chapters: 7 },
  { short: 'Nah', chapters: 3 },
  { short: 'Hab', chapters: 3 },
  { short: 'Zeph', chapters: 3 },
  { short: 'Hag', chapters: 2 },
  { short: 'Zech', chapters: 14 },
  { short: 'Mal', chapters: 4 },
  { short: 'Matt', chapters: 28 },
  { short: 'Mark', chapters: 16 },
  { short: 'Luke', chapters: 24 },
  { short: 'John', chapters: 21 },
  { short: 'Acts', chapters: 28 },
  { short: 'Rom', chapters: 16 },
  { short: '1 Cor', chapters: 16 },
  { short: '2 Cor', chapters: 13 },
  { short: 'Gal', chapters: 6 },
  { short: 'Eph', chapters: 6 },
  { short: 'Phil', chapters: 4 },
  { short: 'Col', chapters: 4 },
  { short: '1 Thess', chapters: 5 },
  { short: '2 Thess', chapters: 3 },
  { short: '1 Tim', chapters: 6 },
  { short: '2 Tim', chapters: 4 },
  { short: 'Titus', chapters: 3 },
  { short: 'Phlm', chapters: 1 },
  { short: 'Heb', chapters: 13 },
  { short: 'Jas', chapters: 5 },
  { short: '1 Pet', chapters: 5 },
  { short: '2 Pet', chapters: 3 },
  { short: '1 John', chapters: 5 },
  { short: '2 John', chapters: 1 },
  { short: '3 John', chapters: 1 },
  { short: 'Jude', chapters: 1 },
  { short: 'Rev', chapters: 22 },
];

/**
 * Simplified chronological ordering (by canonical index): Job early with the
 * patriarchs, Psalms and wisdom literature with the monarchy, the prophets
 * before the exile/restoration books, then the New Testament in order.
 */
const CHRONO_ORDER: number[] = [
  0, 17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 18, 19, 21, 20, 10, 11, 13,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
  14, 15, 16,
  ...Array.from({ length: 27 }, (_, i) => 39 + i),
];

interface ChapterRef {
  short: string;
  ch: number;
}

function flatten(order: BookInfo[]): ChapterRef[] {
  const out: ChapterRef[] = [];
  for (const b of order) {
    for (let c = 1; c <= b.chapters; c += 1) out.push({ short: b.short, ch: c });
  }
  return out;
}

/** Turn a contiguous run of chapters into compact range strings like "Gen 1–3". */
function toRanges(slice: ChapterRef[]): string[] {
  const refs: string[] = [];
  let start: ChapterRef | null = null;
  let prev: ChapterRef | null = null;
  const flush = () => {
    if (!start || !prev) return;
    if (start.short === prev.short && start.ch === prev.ch) {
      refs.push(`${start.short} ${start.ch}`);
    } else if (start.short === prev.short) {
      refs.push(`${start.short} ${start.ch}–${prev.ch}`);
    } else {
      refs.push(`${start.short} ${start.ch} – ${prev.short} ${prev.ch}`);
    }
  };
  for (const c of slice) {
    if (!start || !prev) {
      start = c;
      prev = c;
      continue;
    }
    if (c.short === prev.short && c.ch === prev.ch + 1) {
      prev = c;
    } else {
      flush();
      start = c;
      prev = c;
    }
  }
  flush();
  return refs;
}

/**
 * Distribute chapters across exactly totalDays days, taking
 * ceil(remaining / daysLeft) each day so the plan always lands on the
 * final day with no leftover chapters.
 */
function distribute(order: BookInfo[], totalDays: number): PlanDay[] {
  const chapters = flatten(order);
  const total = chapters.length;
  const days: PlanDay[] = [];
  let i = 0;
  for (let day = 1; day <= totalDays; day += 1) {
    const remaining = total - i;
    const daysLeft = totalDays - day + 1;
    const take = Math.max(1, Math.ceil(remaining / daysLeft));
    const slice = chapters.slice(i, i + take);
    i += slice.length;
    days.push({ day, label: `Day ${day}`, refs: toRanges(slice) });
  }
  return days;
}

const TOPICAL_FAITH: { label: string; refs: string[] }[] = [
  { label: 'What Is Faith?', refs: ['Heb 11:1', 'Heb 11:6', 'Rom 10:17'] },
  { label: 'Saved by Grace', refs: ['Eph 2:8–9', 'Titus 3:5', 'Rom 5:1'] },
  { label: 'Who Is Jesus?', refs: ['John 1:1', 'John 14:6', 'Col 1:15–17'] },
  { label: 'The New Birth', refs: ['John 3:3', 'John 3:16', '2 Cor 5:17'] },
  { label: 'Assurance of Salvation', refs: ['1 John 5:13', 'Rom 8:1', 'John 10:28'] },
  { label: 'Talking with God', refs: ['Phil 4:6', 'Matt 6:9–13', '1 Thess 5:17'] },
  { label: 'Listening to God', refs: ['Ps 119:105', '2 Tim 3:16', 'Jas 1:22'] },
  { label: 'The Holy Spirit', refs: ['John 14:26', 'Acts 1:8', 'Gal 5:22–23'] },
  { label: 'Love in Action', refs: ['1 Cor 13:4–7', 'John 13:34', '1 John 4:7'] },
  { label: 'Forgiveness', refs: ['Matt 6:14', 'Col 3:13', '1 John 1:9'] },
  { label: 'Repentance', refs: ['Acts 3:19', '2 Cor 7:10', 'Luke 15:7'] },
  { label: 'Overcoming Temptation', refs: ['1 Cor 10:13', 'Jas 4:7', 'Matt 26:41'] },
  { label: 'Trusting God', refs: ['Prov 3:5–6', 'Ps 37:5', 'Isa 26:3'] },
  { label: 'Peace in Anxiety', refs: ['Phil 4:6–7', '1 Pet 5:7', 'John 14:27'] },
  { label: 'Joy', refs: ['Neh 8:10', 'Phil 4:4', 'John 15:11'] },
  { label: 'Hope', refs: ['Rom 15:13', 'Heb 6:19', '1 Pet 1:3'] },
  { label: 'Worship', refs: ['Ps 95:6', 'John 4:24', 'Rom 12:1'] },
  { label: 'Gratitude', refs: ['1 Thess 5:18', 'Ps 100:4', 'Col 3:17'] },
  { label: 'Serving Others', refs: ['Mark 10:45', 'Gal 5:13', '1 Pet 4:10'] },
  { label: 'Giving', refs: ['2 Cor 9:7', 'Mal 3:10', 'Luke 6:38'] },
  { label: 'Humility', refs: ['Phil 2:3', 'Mic 6:8', 'Jas 4:10'] },
  { label: 'Patience', refs: ['Jas 5:8', 'Rom 12:12', 'Eccl 7:8'] },
  { label: 'Wisdom', refs: ['Jas 1:5', 'Prov 2:6', 'Ps 111:10'] },
  { label: 'Integrity', refs: ['Prov 10:9', 'Ps 15:1–2', '2 Cor 8:21'] },
  { label: 'Courage', refs: ['Josh 1:9', '2 Tim 1:7', 'Deut 31:6'] },
  { label: 'Suffering and Comfort', refs: ['Rom 5:3–5', '2 Cor 1:3–4', 'Ps 34:18'] },
  { label: 'The Church', refs: ['Heb 10:25', 'Acts 2:42', 'Eph 4:16'] },
  { label: "Sharing Your Faith", refs: ['Matt 28:19', 'Rom 1:16', '1 Pet 3:15'] },
  { label: 'Growing as a Disciple', refs: ['Luke 9:23', '2 Pet 3:18', 'Col 2:6–7'] },
  { label: 'Eternal Life', refs: ['John 3:16', 'Rom 6:23', 'Rev 21:4'] },
];

export const PLANS: Record<string, ReadingPlan> = {
  'bible-in-a-year': {
    id: 'bible-in-a-year',
    title: 'Bible in a Year',
    description:
      'Read the whole Bible in 365 days, about three chapters a day, straight through from Genesis to Revelation.',
    days: distribute(BOOKS, 365),
  },
  chronological: {
    id: 'chronological',
    title: 'Chronological Journey',
    description:
      'Walk through the story of Scripture in the order events happened, over 365 daily readings.',
    days: distribute(CHRONO_ORDER.map((i) => BOOKS[i]), 365),
  },
  'topical-faith': {
    id: 'topical-faith',
    title: 'Faith Foundations',
    description:
      'A 30-day topical series on the essentials of the Christian faith — perfect for new believers or a refresher.',
    days: TOPICAL_FAITH.map((t, i) => ({ day: i + 1, label: t.label, refs: t.refs })),
  },
};

export function getPlan(planId: string): ReadingPlan | null {
  return PLANS[planId] ?? null;
}
