// Natural-language search: maps everyday questions ("verses about being
// afraid", "where does Jesus talk about forgiveness?") to Halo's content
// modules. Fast, typo-tolerant, dependency-free.
//
// How it works:
//  1. Normalize the query (lowercase, strip punctuation) and tokenize,
//     dropping stopwords.
//  2. Score each index entry by matching query tokens against its keywords:
//     exact = 3, prefix = 2, fuzzy (levenshtein <= 1, min length 5) = 1.
//  3. Small boost when the query's intent ("who is…", "verses about…")
//     matches the entry kind.

import { LIFE_TOPICS } from '@/content/life';
import { APOLOGETICS_TOPICS } from '@/content/apologetics';
import { DENOMINATION_ISSUES } from '@/content/denominations';

export type NLKind = 'life' | 'apologetics' | 'denominations';

export interface NLHit {
  kind: NLKind;
  title: string;
  subtitle: string;
  href: string;
  score: number;
}

const STOPWORDS = new Set(
  'a,an,the,about,on,for,of,to,in,is,was,were,are,be,being,been,do,does,did,where,what,when,why,how,who,whom,whose,which,i,me,my,you,your,we,our,and,or,but,with,from,that,this,it,its,as,at,by,have,has,had,can,could,should,would,there,their,them,they,he,she,him,her,his,talk,talks,talking,say,says,speak,speaks,tell,tells,teach,teaches,bible,scripture,verse,verses,passage,god,jesus,christ,lord,happen,happens,happening,get,getting'.split(
    ',',
  ),
);

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function queryTokens(raw: string): string[] {
  return normalize(raw)
    .split(' ')
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));
}

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  const m = a.length;
  const n = b.length;
  if (Math.abs(m - n) > 1) return 2;
  const dp: number[] = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const cur = dp[j];
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
  }
  return dp[n];
}

/** 3 = exact, 2 = prefix, 1 = fuzzy, 0 = no match. */
function tokenScore(qt: string, kw: string): number {
  if (qt === kw) return 3;
  const q = qt.endsWith('s') && qt.length > 3 ? qt.slice(0, -1) : qt;
  const k = kw.endsWith('s') && kw.length > 3 ? kw.slice(0, -1) : kw;
  if (q === k) return 3;
  if (q.length >= 4 && k.startsWith(q)) return 2;
  if (k.length >= 4 && q.startsWith(k)) return 2;
  if (q.length >= 5 && k.length >= 5 && levenshtein(q, k) <= 1) return 1;
  return 0;
}

// Extra everyday words people type, beyond each topic's own title.
const LIFE_SYNONYMS: Record<string, string[]> = {
  anxiety: ['anxious', 'worry', 'worried', 'panic', 'nervous', 'overwhelmed', 'restless', 'uneasy'],
  fear: ['afraid', 'fearful', 'scared', 'fright', 'terror', 'courage', 'brave', 'boldness'],
  marriage: ['married', 'wife', 'husband', 'spouse', 'wedding', 'divorce', 'marital'],
  parenting: ['parent', 'parents', 'children', 'kids', 'child', 'mother', 'father', 'mom', 'dad', 'raising', 'teen'],
  friendship: ['friend', 'friends', 'companionship', 'buddy'],
  anger: ['angry', 'rage', 'furious', 'temper', 'resentment', 'bitter', 'irritated'],
  forgiveness: ['forgive', 'forgiven', 'mercy', 'pardon', 'reconcile', 'reconciliation', 'grudge', 'offense'],
  money: ['finances', 'financial', 'wealth', 'rich', 'poor', 'poverty', 'giving', 'tithe', 'debt', 'greed', 'materialism'],
  work: ['job', 'career', 'vocation', 'labor', 'boss', 'workplace', 'calling', 'employment'],
  purpose: ['meaning', 'destiny', 'direction', 'calling', 'plan', 'future'],
  temptation: ['tempted', 'lust', 'resist', 'enticed', 'craving'],
  addiction: ['addicted', 'habit', 'drugs', 'alcohol', 'porn', 'pornography', 'compulsion', 'sober'],
  grief: ['grieving', 'loss', 'mourning', 'died', 'death', 'bereavement', 'sorrow', 'sorrowful'],
  suffering: ['suffer', 'pain', 'painful', 'trials', 'hardship', 'persecution', 'hurt', 'hurting', 'tragedy'],
  pride: ['proud', 'arrogant', 'arrogance', 'humility', 'humble', 'ego', 'boast'],
  relationships: ['dating', 'boyfriend', 'girlfriend', 'romance', 'single', 'singleness', 'crush'],
  leadership: ['leader', 'lead', 'influence', 'authority', 'servant'],
  'decision-making': ['decision', 'decisions', 'choose', 'choice', 'wisdom', 'guidance', 'discernment', 'direction'],
  discipline: ['self-control', 'habits', 'diligence', 'lazy', 'laziness', 'procrastination', 'consistent'],
  integrity: ['honest', 'honesty', 'truth', 'truthful', 'lying', 'lie', 'character', 'cheat'],
  loneliness: ['lonely', 'alone', 'isolated', 'isolation', 'solitude', 'friendless', 'abandoned'],
  stress: ['stressed', 'burnout', 'busy', 'busyness', 'pressure', 'rest', 'overwhelmed', 'exhausted'],
  doubt: ['doubts', 'doubting', 'skeptical', 'skeptic', 'questions', 'questioning', 'uncertain', 'unbelief'],
  faith: ['believe', 'belief', 'believing', 'trust', 'trusting', 'confidence'],
};

const APOLOGETICS_SYNONYMS: Record<string, string[]> = {
  'does-god-exist': ['exist', 'existence', 'creator', 'atheist', 'atheism', 'agnostic', 'prove', 'proof', 'cosmological', 'fine-tuning', 'moral'],
  'did-jesus-exist': ['historical', 'myth', 'mythicism', 'lived', 'real', 'invented', 'legend'],
  resurrection: ['resurrection', 'rose', 'risen', 'easter', 'tomb', 'empty'],
  suffering: ['suffering', 'evil', 'tragedy', 'innocent', 'tsunami', 'cancer', 'allow'],
  'bible-reliable': ['reliable', 'trust', 'trustworthy', 'inspired', 'word', 'accurate', 'telephone'],
  contradictions: ['contradictions', 'contradiction', 'errors', 'error', 'mistakes', 'mistake', 'inconsistencies', 'discrepancies'],
  science: ['science', 'scientific', 'scientist', 'evolution', 'darwin', 'creation', 'bang', 'physics'],
  archaeology: ['archaeology', 'archaeological', 'discovered', 'discovery', 'excavation', 'evidence', 'artifacts'],
  manuscripts: ['manuscripts', 'manuscript', 'copies', 'copyists', 'textual', 'criticism', 'preserved', 'scrolls'],
  prophecy: ['prophecy', 'prophecies', 'prophesied', 'predicted', 'prediction', 'foretold', 'foretell', 'messianic'],
  'other-religions': ['religions', 'religion', 'islam', 'muslim', 'buddhism', 'buddhist', 'hinduism', 'hindu', 'exclusive', 'pluralism', 'mormon', 'jehovah'],
  doubt: ['doubt', 'doubts', 'doubting', 'skeptical', 'skeptic', 'skepticism', 'questions', 'struggle'],
};

const DENOMINATION_SYNONYMS: Record<string, string[]> = {
  baptism: ['baptism', 'baptize', 'baptized', 'baptizing', 'immersion', 'infant', 'christening'],
  communion: ['communion', 'eucharist', 'supper', 'transubstantiation', 'bread', 'wine', 'mass'],
  predestination: ['predestination', 'predestined', 'election', 'elect', 'calvinism', 'calvinist', 'arminian', 'sovereignty', 'chosen'],
  'spiritual-gifts': ['tongues', 'prophecy', 'prophetic', 'healing', 'miracles', 'miraculous', 'charismatic', 'pentecostal', 'cessation'],
  'church-leadership': ['pope', 'papal', 'bishop', 'bishops', 'elders', 'elder', 'deacon', 'priest', 'government', 'authority'],
  'end-times': ['rapture', 'millennium', 'tribulation', 'antichrist', 'revelation', 'apocalypse', 'coming', 'return'],
  salvation: ['salvation', 'saved', 'save', 'justification', 'justified', 'grace', 'alone', 'eternal', 'security'],
  'women-in-ministry': ['women', 'woman', 'female', 'pastor', 'pastors', 'ordain', 'ordination', 'complementarian', 'egalitarian'],
};

interface IndexEntry {
  kind: NLKind;
  title: string;
  subtitle: string;
  href: string;
  keywords: string[];
  /** Non-stopword title tokens — used for the exact-question bonus. */
  titleTokens: string[];
}

function buildIndex(): IndexEntry[] {
  const entries: IndexEntry[] = [];
  for (const t of LIFE_TOPICS) {
    const extra = LIFE_SYNONYMS[t.id] ?? [];
    const titleTokens = queryTokens(t.title);
    entries.push({
      kind: 'life',
      title: t.title,
      subtitle: t.teaches.split('\n\n')[0].slice(0, 140) + '…',
      href: `/life/${t.id}`,
      keywords: [...titleTokens, ...normalize(t.id).split('-'), ...extra],
      titleTokens,
    });
  }
  for (const t of APOLOGETICS_TOPICS) {
    const extra = APOLOGETICS_SYNONYMS[t.id] ?? [];
    const titleTokens = queryTokens(t.question);
    entries.push({
      kind: 'apologetics',
      title: t.question,
      subtitle: t.shortAnswer.slice(0, 140) + '…',
      href: `/apologetics/${t.id}`,
      keywords: [...titleTokens, ...extra],
      titleTokens,
    });
  }
  for (const i of DENOMINATION_ISSUES) {
    const extra = DENOMINATION_SYNONYMS[i.id] ?? [];
    const titleTokens = queryTokens(i.title);
    entries.push({
      kind: 'denominations',
      title: i.title,
      subtitle: i.shortAnswer.slice(0, 140) + '…',
      href: `/denominations/${i.id}`,
      keywords: [...titleTokens, ...extra],
      titleTokens,
    });
  }
  return entries;
}

let INDEX: IndexEntry[] | null = null;
function index(): IndexEntry[] {
  if (!INDEX) INDEX = buildIndex();
  return INDEX;
}

/** Intent hints that boost a result kind. */
function intentBoost(raw: string, kind: NLKind): number {
  const q = raw.toLowerCase();
  if (kind === 'life' && /(verses?|passages?|scripture|quote|jesus.*(talk|speak|say|teach)|what.*say)/.test(q)) return 2;
  if (kind === 'apologetics' && /(why|how|prove|evidence|true|really|exist)/.test(q)) return 2;
  if (kind === 'denominations' && /(catholic|protestant|baptist|church|denomination)/.test(q)) return 2;
  return 0;
}

/**
 * Score the query against the topical index. Returns hits sorted by
 * score (best first): entries need a solid keyword match (score >= 3),
 * except single-token queries where any match (even fuzzy) qualifies.
 * An exact-question bonus ranks "does God exist?" above near-neighbors.
 */
export function nlSearch(rawQuery: string, limit = 12): NLHit[] {
  const tokens = queryTokens(rawQuery);
  if (tokens.length === 0) return [];
  const hits: NLHit[] = [];
  for (const e of index()) {
    let score = 0;
    for (const qt of tokens) {
      let best = 0;
      for (const kw of e.keywords) {
        const s = tokenScore(qt, kw);
        if (s > best) best = s;
        if (best === 3) break;
      }
      score += best;
    }
    // Exact-question bonus: the query covers every meaningful title word.
    if (
      e.titleTokens.length > 0 &&
      e.titleTokens.every((tt) => tokens.some((qt) => tokenScore(qt, tt) >= 2))
    ) {
      score += 4;
    }
    const qualifies = score >= 3 || (tokens.length === 1 && score >= 1);
    if (qualifies) {
      hits.push({
        kind: e.kind,
        title: e.title,
        subtitle: e.subtitle,
        href: e.href,
        score: score + intentBoost(rawQuery, e.kind),
      });
    }
  }
  hits.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
  return hits.slice(0, limit);
}
