'use client';

import type { ReactNode } from 'react';
import type { Book } from '@/content/books';
import type { ChapterStudy } from '@/content/chapters';
import { Badge } from '@/components/ui';

// StudyBibleView: a beginner-friendly study-Bible panel for a passage.
// Sources: Book metadata (author/date/audience/purpose), the chapter's
// ChapterStudy entry, plus curated genre / cultural-context / interpretation
// maps below. Everything interpretive is explicitly labeled as such.

const GENRE: Record<string, string> = {
  genesis: 'Narrative · primeval & patriarchal history',
  exodus: 'Narrative · law',
  leviticus: 'Law · priestly instruction',
  numbers: 'Narrative · law',
  deuteronomy: 'Sermon · covenant renewal',
  joshua: 'Narrative · conquest history',
  judges: 'Narrative · cyclical history',
  ruth: 'Narrative · short story',
  '1samuel': 'Narrative · monarchy history',
  '2samuel': 'Narrative · monarchy history',
  '1kings': 'Narrative · monarchy history',
  '2kings': 'Narrative · monarchy history',
  '1chronicles': 'Narrative · retold history',
  '2chronicles': 'Narrative · retold history',
  ezra: 'Narrative · restoration history',
  nehemiah: 'Narrative · memoir & restoration',
  esther: 'Narrative · diaspora story',
  job: 'Poetry · wisdom dialogue',
  psalms: 'Poetry · songs & prayers',
  proverbs: 'Poetry · wisdom sayings',
  ecclesiastes: 'Poetry · philosophical reflection',
  songofsolomon: 'Poetry · love song',
  isaiah: 'Prophecy · oracle & poetry',
  jeremiah: 'Prophecy · oracle & lament',
  lamentations: 'Poetry · funeral lament',
  ezekiel: 'Prophecy · visions & sign-acts',
  daniel: 'Apocalyptic · court narrative',
  hosea: 'Prophecy · oracle',
  joel: 'Prophecy · oracle',
  amos: 'Prophecy · oracle',
  obadiah: 'Prophecy · oracle',
  jonah: 'Narrative · prophetic satire',
  micah: 'Prophecy · oracle',
  nahum: 'Prophecy · oracle',
  habakkuk: 'Prophecy · dialogue & prayer',
  zephaniah: 'Prophecy · oracle',
  haggai: 'Prophecy · oracle',
  zechariah: 'Prophecy · visions',
  malachi: 'Prophecy · disputation',
  matthew: 'Gospel · narrative & teaching',
  mark: 'Gospel · fast-paced narrative',
  luke: 'Gospel · ordered narrative',
  john: 'Gospel · theological narrative',
  acts: 'Narrative · church history',
  romans: 'Letter · theological treatise',
  '1corinthians': 'Letter · pastoral correction',
  '2corinthians': 'Letter · defense & comfort',
  galatians: 'Letter · defense of grace',
  ephesians: 'Letter · cosmic theology',
  philippians: 'Letter · joy & partnership',
  colossians: 'Letter · Christ\u2019s supremacy',
  '1thessalonians': 'Letter · encouragement',
  '2thessalonians': 'Letter · clarification',
  '1timothy': 'Letter · pastoral instruction',
  '2timothy': 'Letter · farewell charge',
  titus: 'Letter · pastoral instruction',
  philemon: 'Letter · personal appeal',
  hebrews: 'Sermon-letter · exposition',
  james: 'Letter · wisdom & practice',
  '1peter': 'Letter · hope in suffering',
  '2peter': 'Letter · warning & reminder',
  '1john': 'Letter · assurance & love',
  '2john': 'Letter · brief exhortation',
  '3john': 'Letter · personal commendation',
  jude: 'Letter · warning',
  revelation: 'Apocalyptic · prophecy in letters',
};

const CULTURAL_CONTEXT: Record<string, string> = {
  genesis:
    'Written for Israelites fresh out of Egypt, surrounded by pagan creation myths of warring gods. Genesis answers with one sovereign God who speaks creation into being — and dignifies every human as His image-bearer, a radical claim in a world of god-kings and slaves.',
  exodus:
    'Egypt was the ancient superpower: Pharaoh was worshiped as a god, and Israel were his slaves. The Exodus is God defeating Egypt\u2019s gods (each plague targets one) and forming a freed people by covenant law at Sinai — the pattern of salvation the whole Bible replays.',
  psalms:
    'Israel\u2019s songbook, used in temple worship and private prayer. Ancient Near Eastern peoples all had hymns — but only Israel\u2019s address a personal God with complaint as well as praise. About a third are laments: grief was worship too.',
  isaiah:
    'Isaiah prophesied as Assyria — history\u2019s cruelest empire — devoured Israel\u2019s neighbors. His hearers faced invasion, exile, and despair. Into that darkness he spoke the Bible\u2019s clearest promises of a coming Servant-King and a new creation.',
  daniel:
    'Written for Jews living under foreign empires (Babylon, then Persia). Its message: earthly kingdoms rise and fall, but "the God of heaven will set up a kingdom that shall never be destroyed." Apocalyptic visions used symbolic beasts to say what couldn\u2019t be said openly.',
  matthew:
    'Written for Jewish readers: Matthew constantly shows Jesus fulfilling Old Testament prophecy ("this was to fulfill..."). His community lived between synagogue and church, needing to see Jesus as Israel\u2019s promised Messiah-King, not a break from their Scriptures.',
  mark:
    'The shortest, fastest Gospel — "immediately" is its favorite word — likely written for Romans facing persecution. Mark\u2019s Jesus is the suffering Servant-King: discipleship means taking up a cross, a pointed message for believers under Nero.',
  luke:
    'Luke writes as a careful historian for a Gentile audience (Theophilus), emphasizing Jesus\u2019 compassion for outsiders — women, the poor, Samaritans, tax collectors. His orderly account stresses that Christianity is rooted in verifiable events, not myths.',
  john:
    'Written a generation after the other Gospels, for believers needing depth: John selects seven signs and long discourses to answer "who is Jesus?" — the Word made flesh. His community faced expulsion from synagogues and needed assurance of who they believed in.',
  acts:
    'The Roman Empire prized order and suspected new religions. Luke shows Christianity as innocent of sedition and unstoppable by persecution — the gospel advancing from Jerusalem to Rome itself, "with all boldness, unhindered."',
  romans:
    'Rome\u2019s church mixed Jewish and Gentile believers arguing over food laws, holy days, and who truly belonged. Paul\u2019s letter is his fullest gospel presentation: all are sinners, all are justified by faith, all are one body — written before he\u2019d ever visited.',
  '1corinthians':
    'Corinth was wealthy, immoral, status-obsessed — a port city of temples, lawsuits, and division. Its young church imported the city\u2019s values into worship: factions, pride in gifts, sexual compromise. Paul\u2019s corrections apply wherever church mirrors culture.',
  galatians:
    'New Gentile converts were being told they must be circumcised and keep Jewish law to be fully Christian. Paul\u2019s fiercest letter defends grace: adding any requirement to faith alone empties the cross. Freedom, not rule-keeping, is the gospel\u2019s fruit.',
  hebrews:
    'Jewish Christians tempted to abandon Christ and return to Judaism under persecution. Hebrews argues Christ is superior — to angels, Moses, priests, sacrifices — and warns against drifting. Its audience knew the Old Testament intimately; every argument is steeped in it.',
  revelation:
    'Written to seven churches in Roman Asia facing pressure to worship the emperor. Apocalyptic symbolism (beasts, numbers, cosmic visions) let John unmask Rome as a beastly parody of God\u2019s kingdom — and promise the Lamb\u2019s certain victory. It\u2019s resistance literature, not a puzzle book.',
};

const TESTAMENT_CULTURE: Record<string, string> = {
  OT: 'The Old Testament world was dominated by empires — Egypt, Assyria, Babylon, Persia — and by pagan religions of many gods, temple prostitution, and child sacrifice. Israel\u2019s Scriptures constantly contrast the one holy God with these neighbors: no idols, no magic, justice for the vulnerable, and a covenant relationship instead of ritual manipulation.',
  NT: 'The New Testament world was the Roman Empire: Greek language, Roman roads and law, emperor worship, and a Jewish people living under occupation, longing for a Messiah. Into this world of power and patronage came a crucified King whose kingdom advances through service, suffering, and love of enemies.',
};

interface Interpretation {
  label: string;
  text: string;
}

// Widely-held readings of famously debated passages, labeled as views —
// never presented as settled fact. Keyed by `${bookId}-${chapter}`.
const INTERPRETATIONS: Record<string, Interpretation[]> = {
  'genesis-1': [
    { label: 'Young-earth view', text: 'The days are six literal 24-hour days; creation is thousands, not billions, of years old. The text\u2019s plain sense is historical narrative.' },
    { label: 'Old-earth view', text: 'The "days" are long ages or a literary framework; Genesis teaches who created and why, while science investigates when and how. Many evangelical scientists hold this.' },
    { label: 'Literary-framework view', text: 'The six days are a poetic structure (days 1–3 form realms, days 4–6 fill them) proclaiming God as sole Creator against pagan myths — theology first, chronology second.' },
  ],
  'genesis-3': [
    { label: 'Historical fall', text: 'A real Adam and Eve really disobeyed, bringing sin and death into the world (Romans 5:12). The serpent is Satan working through a creature.' },
    { label: 'Archetypal reading', text: 'Some scholars read the story as the archetypal human story — true about every one of us — while still affirming humanity\u2019s real rebellion against God.' },
  ],
  'exodus-20': [
    { label: 'Continuing moral law', text: 'The Ten Commandments (except the Sabbath, debated) remain binding moral law for Christians, summarized by Jesus in love of God and neighbor.' },
    { label: 'Fulfilled in Christ', text: 'The whole Mosaic law, including the Ten Commandments as a covenant document, is fulfilled in Christ; Christians obey its moral substance through the "law of Christ" (Galatians 6:2), not as Sinai legislation.' },
  ],
  'psalms-22': [
    { label: 'Direct messianic prophecy', text: 'David\u2019s suffering foreshadows Christ so precisely ("they pierced my hands and feet," "they divide my garments") that the psalm is read as prophecy of the crucifixion.' },
    { label: 'Typological reading', text: 'The psalm is David\u2019s own lament, which Jesus deliberately quoted on the cross to identify His suffering with the righteous sufferer — and its vindication ending with His resurrection.' },
  ],
  'isaiah-7': [
    { label: 'Dual fulfillment', text: 'The "virgin/young woman" sign had an immediate meaning for King Ahaz\u2019s crisis and a fuller, ultimate fulfillment in Christ\u2019s virgin birth (Matthew 1:23) — prophecy working on two levels.' },
    { label: 'Christ-centered reading', text: 'Matthew, inspired by the Spirit, reveals the text\u2019s deepest intent: it was always about the coming Immanuel, with Ahaz\u2019s situation as the occasion, not the point.' },
  ],
  'matthew-5': [
    { label: 'Kingdom ethic for now', text: 'The Sermon on the Mount describes how kingdom citizens live today — an impossible standard that drives us to grace and shapes real discipleship.' },
    { label: 'Future kingdom law', text: 'Some dispensationalists read it as the constitution of the future millennial kingdom, with principles (not regulations) applying now.' },
  ],
  'matthew-24': [
    { label: 'Futurist', text: 'The Olivet Discourse primarily predicts events still future: tribulation, Christ\u2019s visible return, and the end of the age.' },
    { label: 'Preterist', text: 'Much of the discourse was fulfilled in AD 70 when Rome destroyed Jerusalem — "this generation will not pass away" (v. 34) — with Christ\u2019s final return still ahead.' },
  ],
  'john-3': [
    { label: '"Born of water and Spirit" as baptism', text: 'Many traditions read "water" as water baptism: new birth comes through baptism and the Spirit together (Titus 3:5).' },
    { label: '"Water" as the Word or repentance', text: 'Others read "water" as spiritual cleansing (Ezekiel 36:25–27) or John\u2019s baptism of repentance — the point being the Spirit\u2019s regenerating work, received by faith.' },
  ],
  'romans-9': [
    { label: 'Unconditional election', text: 'God sovereignly chooses specific individuals for salvation, apart from anything in them (see the predestination guide).' },
    { label: 'Corporate/national election', text: 'Paul is discussing Israel\u2019s corporate role in salvation history, not which individuals go to heaven — God\u2019s freedom to choose nations and purposes.' },
  ],
  '1corinthians-13': [
    { label: 'Love as the greatest gift', text: 'The chapter relativizes all spiritual gifts: without love they are noise. It\u2019s read at weddings, but Paul wrote it to a church weaponizing its gifts.' },
    { label: '"The perfect" debate', text: 'Cessationists read "when the perfect comes" (v. 10) as the completed New Testament; continuationists read it as Christ\u2019s return. The verse is a hinge in the gifts debate.' },
  ],
  'revelation-20': [
    { label: 'Premillennial', text: 'Christ will return before a literal thousand-year earthly reign — the earliest church\u2019s dominant view.' },
    { label: 'Amillennial', text: 'The thousand years symbolizes the present church age; Christ reigns now from heaven — the historic majority view (see the end-times guide).' },
    { label: 'Postmillennial', text: 'The gospel will bring a golden age before Christ\u2019s return; the millennium is the church\u2019s victorious future.' },
  ],
  'revelation-21': [
    { label: 'Renewed creation', text: 'The "new heavens and new earth" are this creation healed and transfigured — continuity with resurrection bodies, not annihilation and replacement.' },
    { label: 'Wholly new creation', text: 'God will replace the present order entirely; the new creation is discontinuous — a fresh start beyond the reach of sin and death.' },
  ],
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="group rounded-xl border border-ink/10 dark:border-white/10">
      <summary className="cursor-pointer list-none rounded-xl px-4 py-3 text-sm font-semibold text-ink transition hover:bg-ink/5 dark:text-parchment dark:hover:bg-white/5">
        <span className="mr-2 inline-block transition-transform group-open:rotate-90">▸</span>
        {title}
      </summary>
      <div className="px-4 pb-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{children}</div>
    </details>
  );
}

export function StudyBibleView({
  book,
  chapter,
  study,
  compact = false,
}: {
  book: Book;
  chapter: number;
  study?: ChapterStudy;
  compact?: boolean;
}) {
  const key = `${book.id}-${chapter}`;
  const genre = GENRE[book.id] ?? (book.testament === 'OT' ? 'Old Testament writing' : 'New Testament writing');
  const culture = CULTURAL_CONTEXT[book.id] ?? TESTAMENT_CULTURE[book.testament];
  const interpretations = INTERPRETATIONS[key];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{genre}</Badge>
        <Badge>{book.testament === 'OT' ? 'Old Testament' : 'New Testament'}</Badge>
      </div>

      <Section title="About this book">
        <dl className="space-y-2">
          <div>
            <dt className="font-semibold text-gold">Author</dt>
            <dd>{book.author}</dd>
          </div>
          <div>
            <dt className="font-semibold text-gold">Date</dt>
            <dd>{book.date}</dd>
          </div>
          <div>
            <dt className="font-semibold text-gold">Written to</dt>
            <dd>{book.audience}</dd>
          </div>
          <div>
            <dt className="font-semibold text-gold">Purpose</dt>
            <dd>{book.purpose}</dd>
          </div>
        </dl>
      </Section>

      <Section title="Historical context">
        {study ? (
          study.context.split('\n\n').map((p, i) => (
            <p key={i} className="mb-2">
              {p}
            </p>
          ))
        ) : (
          <p>{book.overview}</p>
        )}
      </Section>

      <Section title="Cultural context">
        <p>{culture}</p>
        {!compact && (
          <p className="mt-2 text-xs opacity-70">
            Reading with the original audience\u2019s world in mind keeps us from importing our own assumptions into the text.
          </p>
        )}
      </Section>

      {study && (
        <Section title="What this chapter teaches">
          {study.understand.split('\n\n').map((p, i) => (
            <p key={i} className="mb-2">
              {p}
            </p>
          ))}
        </Section>
      )}

      {(study?.themes?.length ?? 0) > 0 || book.themes.length > 0 ? (
        <Section title="Major themes">
          <div className="flex flex-wrap gap-2">
            {(study?.themes?.length ? study.themes : book.themes).map((th) => (
              <Badge key={th}>{th}</Badge>
            ))}
          </div>
        </Section>
      ) : null}

      {(study?.words?.length ?? 0) > 0 && (
        <Section title="Key terms">
          <dl className="space-y-2">
            {study!.words.map((w) => (
              <div key={w.term}>
                <dt className="font-semibold text-gold">
                  {w.term}
                  {w.transliteration ? (
                    <span className="ml-2 font-normal opacity-70">{w.transliteration}</span>
                  ) : null}
                </dt>
                <dd>{w.definition}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      {(study?.crossRefs?.length ?? 0) > 0 && (
        <Section title="Cross references">
          <ul className="space-y-2">
            {study!.crossRefs.map((c) => (
              <li key={c.ref}>
                <span className="font-semibold text-gold">{c.ref}</span>
                <span className="opacity-80"> — {c.note}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {interpretations && (
        <Section title="Common interpretations">
          <p className="mb-3 rounded-lg bg-gold/10 px-3 py-2 text-xs">
            Christians who all love Scripture read debated passages differently. These are the main views — presented fairly, not settled here.
          </p>
          <dl className="space-y-3">
            {interpretations.map((it) => (
              <div key={it.label}>
                <dt className="font-semibold text-gold">{it.label}</dt>
                <dd>{it.text}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      {study && (
        <Section title="Application">
          {study.application.split('\n\n').map((p, i) => (
            <p key={i} className="mb-2">
              {p}
            </p>
          ))}
        </Section>
      )}

      {(study?.reflection?.length ?? 0) > 0 && (
        <Section title="Reflection questions">
          <ul className="list-disc space-y-1 pl-5">
            {study!.reflection.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}
