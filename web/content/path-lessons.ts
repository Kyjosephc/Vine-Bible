import type { QuizQuestion } from '@/lib/types';

/**
 * Time-layered lessons for the Halo learning paths.
 *
 * Every lesson is written in four layers so a learner can go as deep as
 * their time allows: core (5 min), expanded (15 min), deep (30 min),
 * study (60 min). All Scripture quotations are public-domain wording in
 * the style of the World English Bible (WEB) / King James tradition,
 * kept to short excerpts of 1–3 verses.
 */

export interface LessonLayer {
  minutes: 5 | 15 | 30 | 60;
  concept: string;
  scripture: { ref: string; text: string }[];
  teaching: string;
  keyTerms?: { term: string; definition: string }[];
  crossRefs?: string[];
  reflection: string[];
  application: string;
  prayer: string;
  quiz?: QuizQuestion[];
}

export interface LayeredLesson {
  id: string;
  pathId: 'beginner' | 'intermediate' | 'advanced';
  order: number;
  title: string;
  summary: string;
  status?: 'full' | 'stub';
  layers: { core: LessonLayer; expanded: LessonLayer; deep: LessonLayer; study: LessonLayer };
}

/* ------------------------------------------------------------------ */
/* BEGINNER PATH — full flagship content                               */
/* ------------------------------------------------------------------ */

const BEGINNER: LayeredLesson[] = [
  {
    id: 'path-beg-1',
    pathId: 'beginner',
    order: 1,
    title: 'What Is the Bible?',
    summary:
      'The Bible is God\u2019s written word to humanity: 66 books, one unified story of rescue through Jesus Christ.',
    layers: {
      core: {
        minutes: 5,
        concept:
          'The Bible is God\u2019s written word to humanity \u2014 one true story, told through 66 books, of God rescuing his creation through Jesus Christ.',
        scripture: [
          {
            ref: '2 Timothy 3:16',
            text: 'Every Scripture is God-breathed and profitable for teaching, for reproof, for correction, and for instruction in righteousness,',
          },
        ],
        teaching: `The Bible is not one book but a small library: 66 books written over roughly 1,500 years by more than 40 authors \u2014 kings and fishermen, prophets and a doctor, a tax collector and a tentmaker. Yet across all those centuries and voices, it tells a single story: God\u2019s plan to rescue humanity and restore creation through Jesus.

Christians call Scripture "God-breathed" (2 Timothy 3:16). That means God guided the human writers so that their words carry his authority \u2014 fully human in style and personality, fully divine in truth. Luke wrote like a careful historian; David wrote poetry; Paul reasoned like a theologian. God worked through each of them.

Above all, the Bible is about Jesus. He himself said the Scriptures testify about him (John 5:39). From the first promise in Genesis to the final hope of Revelation, every page moves toward Christ.`,
        reflection: [
          'When you pick up the Bible, do you expect to meet God \u2014 or just to collect information? What would change if you expected to meet him?',
          'The Bible claims to be God\u2019s word, not merely wise advice. How does that claim change the way you approach it?',
        ],
        application: `Begin simply: read a little every day, prayerfully. A good place to start is the Gospel of Mark \u2014 the shortest Gospel, fast-paced and vivid. Before you read, pray: "Lord, open my eyes to see wonderful things in your word" (Psalm 119:18). After you read, ask two questions: What does this show me about God? What does this ask of me?`,
        prayer: `Father, thank you for speaking. Thank you for a book that is ancient yet alive, human yet divine. As I open it, open my eyes \u2014 help me not just to learn about you, but to know you. In Jesus\u2019 name, amen.`,
      },
      expanded: {
        minutes: 15,
        concept:
          'Scripture is God\u2019s inspired, unified, and sufficient word \u2014 a lamp for our feet that points us to Christ on every page.',
        scripture: [
          {
            ref: '2 Timothy 3:16-17',
            text: 'Every Scripture is God-breathed and profitable for teaching, for reproof, for correction, and for instruction in righteousness, that each person who belongs to God may be complete, thoroughly equipped for every good work.',
          },
          {
            ref: 'Psalm 119:105',
            text: 'Your word is a lamp to my feet, and a light for my path.',
          },
        ],
        teaching: `## One Story, Many Books
The Bible\u2019s unity is remarkable. Written on three continents, in three languages (Hebrew, Aramaic, Greek), over fifteen centuries, it never loses its thread: creation, fall, redemption, restoration. Genesis opens with a garden; Revelation closes with a garden-city. Between them runs one plot \u2014 God pursuing a broken world \u2014 and one hero \u2014 Jesus Christ. That coherence across millennia is itself a quiet testimony that these writings have one ultimate Author.

## God-Breathed
"Inspiration" does not mean God dictated words while the writers took dictation like secretaries. Peter explains that "holy men of God spoke, being moved by the Holy Spirit" (2 Peter 1:21) \u2014 carried along, the way wind carries a sailboat. The writers\u2019 personalities, vocabularies, and experiences remain fully visible, yet the result is exactly what God intended to say. This is why Christians read the Bible with unique confidence: behind the human authors stands God himself.

## What Scripture Does
The Bible describes its own work with vivid pictures: a lamp for dark paths (Psalm 119:105), a sword for spiritual battle (Ephesians 6:17), food for the hungry soul (Matthew 4:4), a mirror showing us our true face (James 1:23-25). Paul says it makes us "complete, thoroughly equipped for every good work" (2 Timothy 3:17). It is not given merely to inform us but to transform us.

## How to Begin Well
Come expecting to meet God, not just to gather facts. Read regularly rather than in occasional bursts \u2014 a chapter a day will take you through the whole Bible in about three years. Read with others when you can; the church has always read Scripture in community. And do not be discouraged by hard passages. Even Peter admitted that Paul\u2019s letters contain things "hard to understand" (2 Peter 3:16). Keep going; clarity grows with time.`,
        keyTerms: [
          { term: 'Inspiration', definition: 'The belief that God guided the human authors of Scripture so that their writings are truly his word.' },
          { term: 'Canon', definition: 'The recognized list of 66 books \u2014 39 Old Testament, 27 New Testament \u2014 that make up the Bible.' },
          { term: 'Testament', definition: 'From the word "covenant": the Old Testament records God\u2019s covenant with Israel; the New records the new covenant in Christ.' },
          { term: 'Revelation', definition: 'God making himself known to humanity \u2014 supremely through Scripture and through Jesus Christ.' },
        ],
        reflection: [
          'The Bible\u2019s unity across 1,500 years points to one divine Author. What other explanations have you heard, and how do they hold up?',
          'Which picture of Scripture \u2014 lamp, sword, food, mirror \u2014 do you most need right now? Why?',
          'What keeps you from reading the Bible regularly, and what is one small change that could help?',
        ],
        application: `This week, read one chapter of Mark\u2019s Gospel each day (there are 16 chapters \u2014 that\u2019s just over two weeks). Keep a simple journal: each day write one sentence about what the passage shows you about Jesus, and one sentence about what it asks of you. If a passage confuses you, write down the question instead of skipping it \u2014 bring it to a trusted Christian friend or pastor. The goal is not speed but meeting God in his word.`,
        prayer: `Lord, your word is a lamp to my feet and a light to my path. Thank you for speaking clearly across the centuries. Give me hunger for Scripture the way I hunger for food. Make me a doer of your word, not a hearer only. Shape my life by what I read. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-beg-1-exp-q1',
            type: 'mc',
            prompt: 'About how many books make up the Bible?',
            choices: ['27', '40', '66', '150'],
            answer: '66',
            explanation: 'The Protestant canon has 66 books: 39 in the Old Testament and 27 in the New.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-1-exp-q2',
            type: 'tf',
            prompt: 'Christians believe the Bible was dictated word-for-word with the human authors acting as lifeless secretaries.',
            answer: 'False',
            explanation: 'Scripture is "God-breathed" (2 Timothy 3:16): God carried the authors along (2 Peter 1:21) while their personalities and styles remained fully visible.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-1-exp-q3',
            type: 'mc',
            prompt: 'According to Jesus himself, what is the central subject of the Scriptures?',
            choices: ['Israel\u2019s history', 'Jesus Christ', 'Moral living', 'The end times'],
            answer: 'Jesus Christ',
            explanation: 'Jesus said the Scriptures testify about him (John 5:39), and on the road to Emmaus he showed how all of them concern himself (Luke 24:27).',
            tags: ['theology'],
          },
        ],
      },
      deep: {
        minutes: 30,
        concept:
          'The Bible\u2019s divine inspiration, remarkable unity, and transforming power make it unlike any other book \u2014 worthy of our trust, study, and obedience.',
        scripture: [
          {
            ref: '2 Timothy 3:16-17',
            text: 'Every Scripture is God-breathed and profitable for teaching, for reproof, for correction, and for instruction in righteousness, that each person who belongs to God may be complete, thoroughly equipped for every good work.',
          },
          {
            ref: 'Hebrews 4:12',
            text: 'For the word of God is living and active, and sharper than any two-edged sword, piercing even to the dividing of soul and spirit, of both joints and marrow, and is able to discern the thoughts and intentions of the heart.',
          },
          {
            ref: 'Luke 24:27',
            text: 'Beginning from Moses and from all the prophets, he explained to them in all the Scriptures the things concerning himself.',
          },
        ],
        teaching: `## The Claim: God-Breathed
Paul\u2019s word in 2 Timothy 3:16 is theopneustos \u2014 literally "God-breathed." Just as God breathed life into Adam, he breathed out Scripture. Notice what Paul does not say: he does not say Scripture contains God\u2019s word, or becomes God\u2019s word when we feel moved by it. He says Scripture is God-breathed \u2014 all of it. Peter adds the mechanism: "no prophecy ever came by the will of man: but holy men of God spoke, being moved by the Holy Spirit" (2 Peter 1:21). The Spirit "carried" them, yet their minds, emotions, and literary gifts were fully engaged. David\u2019s psalms sound like David; Paul\u2019s letters sound like Paul \u2014 and both sound like God.

## The Evidence: A Unified Story
Consider what this unity required. Moses wrote Genesis around 1400 BC; John wrote Revelation around AD 95. Between them stand shepherds and kings, priests and fishermen, writing in palaces, prisons, deserts, and exile \u2014 in Hebrew, Aramaic, and Greek. No committee coordinated them. Yet the storyline never breaks: a perfect creation marred by sin, a God who refuses to abandon it, covenants and promises narrowing toward one man, and finally the arrival, death, resurrection, and promised return of Jesus. The Old Testament ends looking forward ("lest I come and strike the earth with a curse," Malachi 4:6); the New Testament opens with the fulfillment ("She shall give birth to a son... he shall save his people from their sins," Matthew 1:21). No merely human anthology holds together like this.

## The Power: Living and Active
Hebrews 4:12 warns us not to treat the Bible as ordinary literature. It is "living and active" \u2014 it reads us while we read it, discerning "the thoughts and intentions of the heart." That is why two people can read the same passage and one walks away unchanged while the other is undone: the Spirit wields the word like a surgeon\u2019s scalpel. This also explains why Scripture reading can feel like work some days and like water in a desert on others. The power is in the word itself, not in our feelings about it.

## The Center: Christ on Every Page
On the road to Emmaus, the risen Jesus gave two confused disciples a Bible study: "beginning from Moses and from all the prophets, he explained to them in all the Scriptures the things concerning himself" (Luke 24:27). The Old Testament is full of him \u2014 not only in direct prophecies like Isaiah 53, but in patterns: the Passover lamb, the bronze serpent lifted up, the temple, the sacrificial system. Each is a shadow; Christ is the substance (Colossians 2:17). This Christ-centered reading is the key that unlocks the whole Bible. Ask of any passage: how does this fit the story that leads to Jesus?

## The Response: Trust and Obedience
Paul says Scripture\u2019s purpose is practical: teaching, reproof, correction, training in righteousness \u2014 so that God\u2019s people are "complete, thoroughly equipped for every good work." James presses the point: "be doers of the word, and not only hearers, deluding your own selves" (James 1:22). A Bible that is read but not obeyed becomes a mirror glanced at and forgotten (James 1:23-24). The right response to a God-breathed book is a yielded life.`,
        keyTerms: [
          { term: 'Inspiration (theopneustos)', definition: 'Literally "God-breathed" (2 Timothy 3:16): God is the ultimate author of Scripture, working through human writers.' },
          { term: 'Canon', definition: 'The recognized list of 66 books \u2014 39 Old Testament, 27 New Testament \u2014 received by the church as Scripture.' },
          { term: 'Testament', definition: 'From "covenant": the Old Testament records God\u2019s covenant with Israel; the New records the new covenant in Christ\u2019s blood.' },
          { term: 'Revelation', definition: 'God making himself known \u2014 generally through creation and conscience, specially through Scripture and Christ.' },
          { term: 'Sufficiency', definition: 'The belief that Scripture contains everything needed for faith and godly living (2 Timothy 3:17).' },
        ],
        crossRefs: ['Joshua 1:8', 'Psalm 1:2-3', 'Psalm 119:9-11', 'Matthew 4:4', 'John 5:39', '2 Peter 1:20-21'],
        reflection: [
          'If all Scripture is God-breathed, are there parts you tend to treat as less inspired (genealogies, Old Testament law, difficult passages)? What would change if you received them as God\u2019s word too?',
          'Hebrews 4:12 says the word discerns the thoughts of the heart. Has Scripture ever "read you" \u2014 exposing something you wanted hidden? What happened?',
          'How does seeing Christ as the center of the whole Bible change the way you read the Old Testament?',
          'James warns against being a hearer only. What is one specific obedience \u2014 not just a new insight \u2014 this lesson is pressing on you?',
        ],
        application: `Build a simple, sustainable Scripture habit this month. Choose a fixed time and place (mornings work best for most people), start with Mark\u2019s Gospel, and read one chapter a day. Use three questions as your compass: What does this teach me about God? What does this teach me about myself? What will I do about it? Write brief answers in a notebook. When you hit a confusing passage, mark it and keep going \u2014 ask a mature Christian about it later. Remember the goal: not finishing a reading plan as an achievement, but being "thoroughly equipped for every good work" (2 Timothy 3:17). Review your notebook weekly and note where obedience actually happened.`,
        prayer: `Father, I stand in awe that you have spoken \u2014 not in vague impressions but in written words I can return to again and again. Thank you for breathing out Scripture through faithful servants across the centuries. Forgive me for the times I have treated your word as optional or ordinary. Make it living and active in me: teaching me, correcting me, training me. Above all, show me Jesus on every page, and make me a doer of your word. In his name I pray, amen.`,
        quiz: [
          {
            id: 'path-beg-1-deep-q1',
            type: 'mc',
            prompt: 'The Greek word theopneustos in 2 Timothy 3:16 literally means...',
            choices: ['Written by angels', 'God-breathed', 'Historically accurate', 'Poetically beautiful'],
            answer: 'God-breathed',
            explanation: 'Theopneustos means "God-breathed": Scripture is breathed out by God himself.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-1-deep-q2',
            type: 'mc',
            prompt: 'According to 2 Peter 1:21, how did the human authors of prophecy write?',
            choices: ['By their own will and invention', 'Being moved (carried along) by the Holy Spirit', 'By copying older documents', 'In a trance with no awareness'],
            answer: 'Being moved (carried along) by the Holy Spirit',
            explanation: '"Holy men of God spoke, being moved by the Holy Spirit" \u2014 carried along, yet fully themselves.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-1-deep-q3',
            type: 'tf',
            prompt: 'Hebrews 4:12 describes God\u2019s word as "living and active," able to discern the thoughts and intentions of the heart.',
            answer: 'True',
            explanation: 'Scripture reads us while we read it \u2014 it is no ordinary book.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-1-deep-q4',
            type: 'mc',
            prompt: 'On the road to Emmaus, what did the risen Jesus show his disciples from the Scriptures?',
            choices: ['The laws they must keep', 'The things concerning himself', 'Predictions about Rome', 'The names of the apostles'],
            answer: 'The things concerning himself',
            explanation: '"Beginning from Moses and from all the prophets, he explained to them in all the Scriptures the things concerning himself" (Luke 24:27).',
            tags: ['theology'],
          },
        ],
      },
      study: {
        minutes: 60,
        concept:
          'A full study of bibliology: Scripture\u2019s inspiration, canon, unity, Christ-centeredness, authority, and sufficiency \u2014 and how to build a lifetime of reading it.',
        scripture: [
          {
            ref: '2 Timothy 3:16-17',
            text: 'Every Scripture is God-breathed and profitable for teaching, for reproof, for correction, and for instruction in righteousness, that each person who belongs to God may be complete, thoroughly equipped for every good work.',
          },
          {
            ref: '2 Peter 1:20-21',
            text: 'knowing this first, that no prophecy of Scripture is of private interpretation. For no prophecy ever came by the will of man: but holy men of God spoke, being moved by the Holy Spirit.',
          },
          {
            ref: 'Hebrews 4:12',
            text: 'For the word of God is living and active, and sharper than any two-edged sword, piercing even to the dividing of soul and spirit, of both joints and marrow, and is able to discern the thoughts and intentions of the heart.',
          },
          {
            ref: 'Luke 24:27',
            text: 'Beginning from Moses and from all the prophets, he explained to them in all the Scriptures the things concerning himself.',
          },
        ],
        teaching: `## 1. What Christians Claim About the Bible
Every worldview must answer: has God spoken, and if so, how can we know? Christianity\u2019s answer is that God has spoken in written words \u2014 breathed out by him, carried along by his Spirit through human authors. This claim (called the doctrine of inspiration) is the foundation for everything else. If the Bible is merely human religious insight, we may admire it; if it is God-breathed, we must obey it. There is no stable middle ground.

Notice the scope of Paul\u2019s claim: "every Scripture." Not just the red letters, not just the New Testament, not just the parts we find moving. The genealogies, the laws about mold in Leviticus, the imprecatory psalms \u2014 all God-breathed, all profitable. Peter adds a guardrail: Scripture is not "of private interpretation" (2 Peter 1:20). Its meaning is not whatever we wish it to be; it has an intended meaning, given by God through the author, that we must carefully discover.

## 2. How We Got the 66 Books
The word "canon" means a measuring rod \u2014 the list of books recognized as Scripture. The church did not create the canon by vote, as if a council could make a book inspired; rather, the church recognized the books that bore the marks of divine authorship: apostolic origin (or close association), consistency with the rest of Scripture, and widespread reception by God\u2019s people. The Old Testament canon was settled long before Christ \u2014 it is the Scriptures Jesus himself quoted as authoritative. The New Testament books were all written in the first century by apostles or their close companions, and the church\u2019s recognition of them was essentially complete within a few generations. What we hold is not an accident of history but the preserved word of God.

## 3. The Unity That Testifies
Trace the storyline: creation (Genesis 1-2), fall (Genesis 3), promise (Genesis 3:15; 12:1-3), exodus and law, kingdom and exile, prophets pointing forward \u2014 then the Gospels announce the arrival, Acts the expansion, the Epistles the explanation, and Revelation the consummation. The Bible opens with God dwelling with humanity in a garden and closes with God dwelling with humanity in a garden-city (Revelation 21-22). The serpent is defeated; the curse is reversed; the tree of life returns. This is not the shape of a random anthology. It is the shape of one Author\u2019s story.

## 4. Christ at the Center
Jesus claimed the Old Testament was about him (John 5:39; Luke 24:27, 44). The apostles read it the same way: the Passover lamb points to "Christ, our Passover" (1 Corinthians 5:7); the rock in the wilderness "was Christ" (1 Corinthians 10:4); the entire sacrificial system was "a shadow of the good things to come" with Christ as the substance (Hebrews 10:1). This does not mean every verse is a hidden code about Jesus \u2014 it means every part serves the one story that climaxes in him. Read this way, the Old Testament comes alive for Christians instead of feeling like someone else\u2019s mail.

## 5. Authority and Sufficiency
Because Scripture is God-breathed, it carries God\u2019s authority. Jesus treated it that way: "Scripture can\u2019t be broken" (John 10:35), and he answered temptation with "It is written" (Matthew 4:4). And because it makes us "complete, thoroughly equipped for every good work," it is sufficient \u2014 we need no new revelations to know God and live for him. Tradition, reason, and experience all have their place, but Scripture sits in judgment over them, not beneath them. When they conflict with God\u2019s word, God\u2019s word wins.

## 6. Reading for a Lifetime
A few practices for the long road. First, read the whole counsel of God: it is easy to camp in favorite passages, but "every Scripture" is profitable \u2014 even Leviticus repays patient reading. Second, read repeatedly: the Bible is a book you never finish, because you are never finished being shaped by it. Third, read obediently: James 1:22 is the key verse of the Christian life \u2014 hear and do. Fourth, read dependently: pray Psalm 119:18 every time you open it, and ask the Spirit who inspired the word to illumine it. Fifth, read communally: sermons, small groups, and trusted teachers are God\u2019s gifts for understanding (Ephesians 4:11-13). The Christian life is, in large measure, a life of being read by the Book.`,
        keyTerms: [
          { term: 'Inspiration (theopneustos)', definition: '"God-breathed" (2 Timothy 3:16): God is Scripture\u2019s ultimate author, working through \u2014 not bypassing \u2014 human writers.' },
          { term: 'Canon', definition: 'The 66 books recognized by the church as Scripture: 39 Old Testament, 27 New Testament.' },
          { term: 'Illumination', definition: 'The Holy Spirit\u2019s work of opening our minds to understand and love Scripture (Psalm 119:18; Luke 24:45).' },
          { term: 'Authority', definition: 'Because Scripture is God\u2019s word, it has the right to command our belief and obedience.' },
          { term: 'Sufficiency', definition: 'Scripture contains everything needed for salvation and godly living (2 Timothy 3:17).' },
          { term: 'Christocentric reading', definition: 'Reading all of Scripture \u2014 including the Old Testament \u2014 as the story that leads to and flows from Jesus Christ.' },
        ],
        crossRefs: ['Joshua 1:8', 'Psalm 1:2-3', 'Psalm 119:9-11', 'Psalm 119:18', 'Matthew 4:4', 'John 5:39', 'John 10:35', 'Acts 17:11', 'James 1:22-25'],
        reflection: [
          'Why do you think God chose to speak through a written book \u2014 spanning centuries and cultures \u2014 rather than through constant direct revelation to each person?',
          'What is the difference between the church "creating" the canon and "recognizing" it? Why does that distinction matter?',
          'Which part of the Bible do you find hardest to receive as God-breathed? What might God be teaching you through that resistance?',
          'How does the Bible\u2019s unity across 1,500 years strengthen your confidence \u2014 or raise questions you want to explore?',
          'What would it look like for Scripture to function as the authority over your traditions, feelings, and opinions rather than beneath them?',
          'James 1:22 calls for doing, not just hearing. Name one concrete obedience from your recent reading \u2014 or commit to one from this lesson.',
        ],
        application: `Design your personal Scripture rhythm for the next 90 days. (1) Pick a translation you will actually read \u2014 the WEB is free and faithful; many also love the KJV, ESV, or NIV. (2) Set a daily time and place, and start with the Gospel of Mark, then continue through the New Testament. (3) Journal with three prompts: What does this show me about God? About me? What will I do? (4) Memorize one verse per week \u2014 start with 2 Timothy 3:16, Psalm 119:105, and Hebrews 4:12. (5) Join or start a habit of discussing what you read with another Christian weekly. At the end of 90 days, review your journal: you will hold in your hands a record of God speaking. That record becomes fuel for a lifetime.`,
        prayer: `Everlasting God, you have not left us in the dark. You breathed out words \u2014 carried along prophets and apostles, preserved through centuries \u2014 so that I could know you. I confess how casually I have treated this treasure: unread Bibles, hurried readings, heard words left undone. Forgive me. Give me a hunger for your word that outlasts my moods. Open my eyes to see wonderful things in your law. Show me Christ on every page, and make me \u2014 by your Spirit \u2014 a doer of the word and not a hearer only, complete and equipped for every good work you have prepared for me. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-beg-1-study-q1',
            type: 'mc',
            prompt: 'The church\u2019s relationship to the biblical canon is best described as...',
            choices: ['Creating it by majority vote', 'Recognizing books that bore marks of divine authorship', 'Inventing it in the Middle Ages', 'Choosing the most popular writings'],
            answer: 'Recognizing books that bore marks of divine authorship',
            explanation: 'The church recognized (did not create) the canon, discerning apostolic origin, consistency with Scripture, and reception by God\u2019s people.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-1-study-q2',
            type: 'tf',
            prompt: '2 Peter 1:20 teaches that Scripture\u2019s meaning is essentially whatever the reader feels it to be.',
            answer: 'False',
            explanation: '"No prophecy of Scripture is of private interpretation" \u2014 Scripture has a God-intended meaning we must carefully discover.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-1-study-q3',
            type: 'mc',
            prompt: 'Which best describes the Bible\u2019s overall storyline?',
            choices: ['Random moral stories', 'Creation, fall, redemption, restoration \u2014 climaxing in Christ', 'Israel\u2019s history only', 'Philosophical reflections'],
            answer: 'Creation, fall, redemption, restoration \u2014 climaxing in Christ',
            explanation: 'From garden to garden-city, the Bible tells one unified story of God rescuing creation through Jesus.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-1-study-q4',
            type: 'mc',
            prompt: 'Why is Scripture called "sufficient"?',
            choices: ['It answers every trivia question', 'It contains everything needed for faith and godly living', 'It replaces the need for prayer', 'It was the first book printed'],
            answer: 'It contains everything needed for faith and godly living',
            explanation: 'Scripture makes the believer "complete, thoroughly equipped for every good work" (2 Timothy 3:17).',
            tags: ['theology'],
          },
        ],
      },
    },
  },
  {
    id: 'path-beg-2',
    pathId: 'beginner',
    order: 2,
    title: 'Who Is God?',
    summary:
      'One eternal, holy, loving God \u2014 Father, Son, and Holy Spirit \u2014 who made all things and makes himself known.',
    layers: {
      core: {
        minutes: 5,
        concept:
          'There is one God \u2014 eternal, all-powerful, holy, and loving \u2014 who created everything and personally reveals himself to us.',
        scripture: [
          {
            ref: 'Deuteronomy 6:4',
            text: 'Hear, Israel: Yahweh is our God; Yahweh is one.',
          },
        ],
        teaching: `The Bible\u2019s first sentence introduces its main character: "In the beginning God created the heavens and the earth" (Genesis 1:1). Before anything else existed \u2014 before time, space, or matter \u2014 God was. He is eternal, without beginning or end, and everything else depends on him.

God is one. "Hear, Israel: Yahweh is our God; Yahweh is one" (Deuteronomy 6:4). There are no rival gods, no divine committee \u2014 one true and living God. Yet this one God has revealed himself as Father, Son, and Holy Spirit: three persons, one being. It is a mystery, not a math problem \u2014 and it means that at the very heart of reality is a God who is, in himself, loving relationship.

What is he like? Scripture gives us his own self-description: "Yahweh, a merciful and gracious God, slow to anger, and abundant in loving kindness and truth" (Exodus 34:6). He is perfectly holy \u2014 without any evil \u2014 and perfectly loving: "God is love" (1 John 4:8). His holiness means he cannot ignore wrong; his love means he moved to rescue wrongdoers. Both meet at the cross.`,
        reflection: [
          'If God is eternal \u2014 with no beginning \u2014 what does that tell you about how much he needs you versus how much he wants you?',
          'Which is harder for you to grasp: God\u2019s holiness or God\u2019s love? Why do you think that is?',
        ],
        application: `This week, practice beginning your prayers the way Jesus taught: "Our Father in heaven, may your name be kept holy" (Matthew 6:9). Before asking for anything, spend a minute praising God for who he is \u2014 his holiness, his mercy, his faithfulness. Let who God is shape what you ask of him.`,
        prayer: `Holy Father, you are eternal \u2014 you were before all things and you will be after all things. You are perfectly holy and perfectly loving, merciful and gracious, slow to anger. Teach me to know you as you truly are, not as I imagine you to be. In Jesus\u2019 name, amen.`,
      },
      expanded: {
        minutes: 15,
        concept:
          'God is one being in three persons \u2014 infinite in power, perfect in holiness, abounding in love \u2014 and he has made himself known so we can know him.',
        scripture: [
          {
            ref: 'Exodus 34:6',
            text: 'Yahweh passed by before him, and proclaimed, "Yahweh! Yahweh, a merciful and gracious God, slow to anger, and abundant in loving kindness and truth,"',
          },
          {
            ref: '1 John 4:8',
            text: "He who doesn't love doesn't know God, for God is love.",
          },
        ],
        teaching: `## God\u2019s Own Self-Portrait
When Moses asked to see God\u2019s glory, God proclaimed his own name and character: "merciful and gracious... slow to anger, and abundant in loving kindness and truth" (Exodus 34:6). This is the description Scripture returns to more than any other (see Numbers 14:18; Psalm 103:8; Joel 2:13). God wants to be known first as compassionate \u2014 not as a distant force or a harsh judge, but as a merciful and gracious God.

## One God, Three Persons
The Bible is fiercely monotheistic: "Yahweh is one" (Deuteronomy 6:4). Yet it also reveals the Father as God, the Son as God (John 1:1), and the Holy Spirit as God (Acts 5:3-4) \u2014 distinct persons who relate to one another. At Jesus\u2019 baptism, all three appear at once: the Son in the water, the Spirit descending like a dove, the Father\u2019s voice from heaven (Matthew 3:16-17). Christians call this the Trinity: one God in three persons. We cannot fully explain it \u2014 no illustration is perfect \u2014 but we worship it with joy, because it means love and relationship are eternal: the Father has loved the Son from before creation (John 17:24).

## Holy and Loving
Two words capture God\u2019s character. He is holy \u2014 utterly pure, set apart from all evil: "God is light, and in him is no darkness at all" (1 John 1:5). His holiness is why sin matters so much; it cannot coexist with him. And he is love \u2014 not merely loving, but love itself (1 John 4:8). His love moved him to create, to pursue, and to redeem. Never separate the two: a "loving" God without holiness excuses evil; a "holy" God without love crushes sinners. In the true God, both are perfect \u2014 and both are satisfied at the cross, where Christ bore sin in love.

## Knowable
The most astonishing claim of all: this infinite God wants to be known. "Let him who glories glory in this, that he has understanding, and knows me" (Jeremiah 9:24). He has revealed himself in creation (Psalm 19:1), in Scripture, and supremely in Jesus \u2014 "He who has seen me has seen the Father" (John 14:9). Knowing God is not just the subject of this lesson; it is the purpose of your existence.`,
        keyTerms: [
          { term: 'Trinity', definition: 'One God eternally existing in three distinct persons: Father, Son, and Holy Spirit.' },
          { term: 'Holiness', definition: 'God\u2019s perfect purity and separateness from all evil.' },
          { term: 'Eternal', definition: 'Without beginning or end; God exists outside of and before time.' },
          { term: 'Yahweh', definition: 'God\u2019s personal covenant name, revealed to Moses (Exodus 3:14), often rendered "LORD" in English Bibles.' },
        ],
        reflection: [
          'God describes himself first as "merciful and gracious." Does that match the picture of God you grew up with? What shaped your picture?',
          'The Trinity means relationship and love are eternal \u2014 God didn\u2019t need creation in order to love. How does that reshape the way you see yourself?',
          'Why do you think God\u2019s holiness and God\u2019s love must be held together? What goes wrong when one is emphasized without the other?',
        ],
        application: `Memorize Exodus 34:6 this week \u2014 God\u2019s own self-description. Each morning, pray through it slowly, pausing on each phrase: merciful... gracious... slow to anger... abundant in loving kindness and truth. Ask: which of these do I most need to believe today? Then watch for one opportunity to reflect that same character to someone else \u2014 showing mercy, being slow to anger, speaking truth.`,
        prayer: `Merciful and gracious God, slow to anger and abounding in steadfast love \u2014 you have told me who you are, and I believe you. Forgive me for shrinking you into my image. You are holy beyond my understanding and loving beyond my deserving. Draw me to know you truly: Father, Son, and Holy Spirit, one God, my God. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-beg-2-exp-q1',
            type: 'mc',
            prompt: 'In Exodus 34:6, how does God first describe himself to Moses?',
            choices: ['All-powerful and mighty', 'Merciful and gracious, slow to anger', 'Mysterious and unknowable', 'Just and vengeful'],
            answer: 'Merciful and gracious, slow to anger',
            explanation: 'God\u2019s own self-portrait leads with mercy and grace \u2014 the description Scripture repeats most often.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-2-exp-q2',
            type: 'tf',
            prompt: 'The Trinity means Christians worship three gods.',
            answer: 'False',
            explanation: 'Christians worship one God ("Yahweh is one," Deuteronomy 6:4) eternally existing in three distinct persons.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-2-exp-q3',
            type: 'mc',
            prompt: 'According to 1 John 4:8, "God is..."',
            choices: ['Power', 'Light only', 'Love', 'Justice only'],
            answer: 'Love',
            explanation: '"God is love" \u2014 love is not just something God does; it is who he is.',
            tags: ['theology'],
          },
        ],
      },
      deep: {
        minutes: 30,
        concept:
          'Scripture reveals God as eternal, unchanging, all-powerful, all-knowing, everywhere-present, perfectly holy, and perfectly loving \u2014 one God in three persons who invites us to know him.',
        scripture: [
          {
            ref: 'Exodus 34:6-7',
            text: 'Yahweh passed by before him, and proclaimed, "Yahweh! Yahweh, a merciful and gracious God, slow to anger, and abundant in loving kindness and truth, keeping loving kindness for thousands, forgiving iniquity and disobedience and sin; and who will by no means clear the guilty,"',
          },
          {
            ref: 'Isaiah 40:28',
            text: "Haven't you known? Haven't you heard? The everlasting God, Yahweh, the Creator of the ends of the earth, doesn't faint. He doesn't grow weary. His understanding is unsearchable.",
          },
          {
            ref: 'Matthew 3:16-17',
            text: 'Jesus, when he was baptized, went up directly from the water: and behold, the heavens were opened to him. He saw the Spirit of God descending as a dove, and coming on him. Behold, a voice out of the heavens said, "This is my beloved Son, with whom I am well pleased."',
          },
        ],
        teaching: `## Eternal and Unchanging
God has no beginning: "In the beginning God" \u2014 he was already there (Genesis 1:1). He has no end: he is "the Alpha and the Omega... who is and who was and who is to come" (Revelation 1:8). And he does not change: "I, Yahweh, don\u2019t change" (Malachi 3:6). This is immensely comforting. God\u2019s love for you is not a mood that shifts with the weather; his promises do not expire; the God who was faithful to Abraham is faithful to you today. Because he is eternal, he is never rushed, never panicked, never caught off guard by your life.

## All-Powerful, All-Knowing, Everywhere-Present
Scripture ascribes to God power without limit \u2014 "nothing is too hard" for him (Jeremiah 32:17); knowledge without limit \u2014 he knows every thought before we think it (Psalm 139:2-4); and presence without limit \u2014 "Where can I go from your Spirit?... If I ascend up into heaven, you are there" (Psalm 139:7-8). These are not abstract doctrines. An all-powerful God can actually save you. An all-knowing God truly understands you. An everywhere-present God never leaves you \u2014 there is no place, no pit, no night where he is not.

## Perfectly Holy
" Holy, holy, holy is Yahweh of Armies!" cry the seraphim (Isaiah 6:3) \u2014 the only attribute of God repeated three times in Scripture\u2019s worship. God\u2019s holiness means absolute moral purity: "in him is no darkness at all" (1 John 1:5). It is why sin is so serious \u2014 not because God is petty, but because evil is the contradiction of everything he is. And it is why we cannot approach him casually or on our own terms. Yet remarkably, this holy God invites sinners near \u2014 through the way he himself provided.

## Perfectly Loving
"God is love" (1 John 4:8). His love is not a sentiment but a self-giving action: "God commends his own love toward us, in that while we were yet sinners, Christ died for us" (Romans 5:8). Notice the timing \u2014 while we were yet sinners. God\u2019s love is not a reward for the worthy; it pursues the unworthy. And his love is faithful: "I have loved you with an everlasting love" (Jeremiah 31:3). Everything God does \u2014 even his judgments \u2014 flows from who he is: holy love.

## One God, Three Persons
Hold two truths together. First: there is exactly one God (Deuteronomy 6:4; 1 Timothy 2:5). Second: the Father is God, the Son is God (John 1:1; Colossians 2:9), and the Holy Spirit is God (Acts 5:3-4) \u2014 each distinct, each relating to the others. At Jesus\u2019 baptism all three are present and distinct at once (Matthew 3:16-17). The church\u2019s word for this is Trinity. Every analogy limps \u2014 water\u2019s three states suggests one person changing forms; a three-leaf clover suggests three parts of God \u2014 so hold the biblical pattern rather than a picture: one being, three persons, each fully God, each loving the others from eternity (John 17:24). The practical wonder: the universe is, at its root, not a lonely power but an eternal fellowship of love \u2014 and we are invited in (John 17:21-23).

## Made to Know Him
Jeremiah records God\u2019s own priority: "Let him who glories glory in this, that he has understanding, and knows me" (Jeremiah 9:24). Eternal life itself is defined as knowing God: "This is eternal life, that they should know you, the only true God, and him whom you sent, Jesus Christ" (John 17:3). Theology is not trivia; it is the knowledge of the One you were made for.`,
        keyTerms: [
          { term: 'Trinity', definition: 'One divine being eternally existing in three distinct persons: Father, Son, and Holy Spirit \u2014 each fully God.' },
          { term: 'Omnipotence', definition: 'God\u2019s unlimited power; nothing is too hard for him.' },
          { term: 'Omniscience', definition: 'God\u2019s complete knowledge of all things, past, present, and future.' },
          { term: 'Omnipresence', definition: 'God\u2019s presence everywhere; there is nowhere he is not.' },
          { term: 'Immutability', definition: 'God does not change in his being, character, or promises (Malachi 3:6).' },
          { term: 'Holiness', definition: 'God\u2019s absolute purity and separateness from evil.' },
        ],
        crossRefs: ['Genesis 1:1', 'Psalm 139:1-12', 'Jeremiah 9:24', 'John 1:1', 'John 14:9', '2 Corinthians 13:14'],
        reflection: [
          'God\u2019s unchanging nature means his promises cannot expire. Which promise of God do you most need to trust as unchanging right now?',
          'Psalm 139 says God knows your every thought and is present in every place. Is that comforting or confronting to you \u2014 or both? Why?',
          'How would you explain the Trinity to a friend using the Bible\u2019s own pattern (one God; Father, Son, and Spirit each God; distinct persons) rather than a flawed analogy?',
          'If eternal life is knowing God (John 17:3), what does your weekly schedule suggest you believe eternal life is?',
        ],
        application: `This week, pray through God\u2019s attributes using the ACTS pattern \u2014 Adoration, Confession, Thanksgiving, Supplication \u2014 giving extra weight to adoration. Each day take one attribute (eternal, all-powerful, all-knowing, ever-present, holy, loving) and praise God specifically for it, using a verse: e.g., for holiness, Isaiah 6:3; for love, Romans 5:8. Then bring one real need to him in light of that attribute: "Because you are all-knowing, I trust you with what I don\u2019t understand about..." Let who God is reshape how you pray.`,
        prayer: `Everlasting God, unchanging in all your perfections \u2014 I worship you. You are all-powerful, yet gentle; all-knowing, yet patient with me; everywhere-present, yet near. You are holy \u2014 light with no darkness \u2014 and you are love \u2014 giving your Son while I was still a sinner. Father, Son, and Holy Spirit: one God, eternal fellowship of love, thank you for inviting me to know you. Teach me your name, and plant it deep in my heart. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-beg-2-deep-q1',
            type: 'mc',
            prompt: 'Which verse declares that God does not change?',
            choices: ['Genesis 1:1', 'Malachi 3:6', 'Psalm 23:1', 'John 3:16'],
            answer: 'Malachi 3:6',
            explanation: '"For I, Yahweh, don\u2019t change" (Malachi 3:6) \u2014 God\u2019s character and promises are unchanging.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-2-deep-q2',
            type: 'mc',
            prompt: 'At Jesus\u2019 baptism (Matthew 3:16-17), which persons of the Trinity are distinctly present?',
            choices: ['Only the Son', 'Father, Son, and Holy Spirit', 'Only the Father and Son', 'The Spirit alone'],
            answer: 'Father, Son, and Holy Spirit',
            explanation: 'The Son is baptized, the Spirit descends like a dove, and the Father speaks from heaven \u2014 all three, distinct, at once.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-2-deep-q3',
            type: 'tf',
            prompt: 'According to Romans 5:8, God demonstrated his love by sending Christ to die for us while we were still sinners.',
            answer: 'True',
            explanation: '"While we were yet sinners, Christ died for us" \u2014 God\u2019s love pursues the unworthy.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-2-deep-q4',
            type: 'mc',
            prompt: 'How does Jesus define eternal life in John 17:3?',
            choices: ['Living forever in heaven', 'Knowing the only true God and Jesus Christ', 'Keeping all the commandments', 'Never sinning again'],
            answer: 'Knowing the only true God and Jesus Christ',
            explanation: '"This is eternal life, that they should know you, the only true God, and him whom you sent, Jesus Christ."',
            tags: ['theology'],
          },
        ],
      },
      study: {
        minutes: 60,
        concept:
          'A full study of the doctrine of God: his existence and knowability, his incommunicable and communicable attributes, the Trinity, and what it means to live before his face.',
        scripture: [
          {
            ref: 'Exodus 34:6-7',
            text: 'Yahweh passed by before him, and proclaimed, "Yahweh! Yahweh, a merciful and gracious God, slow to anger, and abundant in loving kindness and truth, keeping loving kindness for thousands, forgiving iniquity and disobedience and sin; and who will by no means clear the guilty,"',
          },
          {
            ref: 'Psalm 139:1-4',
            text: 'Yahweh, you have searched me, and you know me. You know my sitting down and my rising up. You perceive my thoughts from afar. You search out my path and my lying down, and are acquainted with all my ways. For there is not a word on my tongue, but behold, Yahweh, you know it altogether.',
          },
          {
            ref: 'John 17:3',
            text: 'This is eternal life, that they should know you, the only true God, and him whom you sent, Jesus Christ.',
          },
          {
            ref: '2 Corinthians 13:14',
            text: 'The grace of the Lord Jesus Christ, the love of God, and the fellowship of the Holy Spirit be with you all. Amen.',
          },
        ],
        teaching: `## 1. God Is, and Can Be Known
The Bible never argues God\u2019s existence; it announces it: "In the beginning God created the heavens and the earth" (Genesis 1:1). Denial of God is treated not as an intellectual conclusion but as a moral posture \u2014 "The fool has said in his heart, \u2018There is no God\u2019" (Psalm 14:1). Yet this God who needs no defense has chosen to be known. He reveals himself in creation \u2014 "The heavens declare the glory of God" (Psalm 19:1) \u2014 leaving humanity "without excuse" (Romans 1:20). He reveals himself in Scripture, supremely in his Son: "No one has seen God at any time. The one and only Son... has declared him" (John 1:18). And he reveals himself personally: "You will seek me, and find me, when you search for me with all your heart" (Jeremiah 29:13). We can know God truly, though never exhaustively \u2014 like knowing the ocean truly by wading in, without draining it.

## 2. What Only God Is: The Incommunicable Attributes
Some of God\u2019s perfections belong to him alone. He is self-existent \u2014 he depends on nothing: "I AM WHO I AM" (Exodus 3:14). He is eternal \u2014 "from everlasting to everlasting, you are God" (Psalm 90:2). He is unchanging \u2014 "I, Yahweh, don\u2019t change" (Malachi 3:6); even "Jesus Christ is the same yesterday, today, and forever" (Hebrews 13:8). He is all-powerful \u2014 "with God all things are possible" (Matthew 19:26). He is all-knowing \u2014 his understanding is "unsearchable" (Isaiah 40:28), and he knows the end from the beginning. He is everywhere-present \u2014 no height, depth, or darkness can hide us from him (Psalm 139:7-12). These attributes humble us: God is not a bigger version of us. He is in a category of one.

## 3. What We Are Called to Reflect: The Communicable Attributes
Other perfections of God are shared \u2014 imperfectly \u2014 with his creatures, and we are called to reflect them. He is holy, and commands: "Be holy, for I am holy" (1 Peter 1:16). He is loving, and commands: "just as I have loved you, you also love one another" (John 13:34). He is merciful, gracious, slow to anger, abounding in steadfast love (Exodus 34:6) \u2014 and Jesus says, "Be merciful, even as your Father is merciful" (Luke 6:36). He is truthful \u2014 "it is impossible for God to lie" (Hebrews 6:18) \u2014 and calls us to truthfulness. He is just, faithful, good, patient. Every virtue we admire is a dim reflection of who God is in full brightness. To grow in godliness is, quite literally, to become more like God.

## 4. The Trinity: One God, Three Persons
The doctrine unfolds across Scripture. The Old Testament insists on one God (Deuteronomy 6:4) while hinting at plurality within the Godhead ("Let us make man in our image," Genesis 1:26; the Angel of Yahweh who is both distinct from and identified as Yahweh). The New Testament reveals the persons distinctly: the Father is God (John 6:27), the Son is God (John 1:1; Colossians 2:9; Titus 2:13), the Spirit is God (Acts 5:3-4; 1 Corinthians 3:16). They relate to one another \u2014 the Father sends the Son (John 3:16), the Son prays to the Father (John 17), the Spirit proceeds from the Father and is sent by the Son (John 15:26). The baptism of Jesus displays all three at once (Matthew 3:16-17); the Great Commission baptizes "in the name [singular] of the Father and of the Son and of the Holy Spirit" (Matthew 28:19); Paul\u2019s benediction names all three in one grace (2 Corinthians 13:14).

What does the Trinity mean for us? First, love is eternal: before creation, the Father loved the Son (John 17:24) \u2014 love is not something God does; it is who God is. Second, unity and diversity coexist perfectly: the church\u2019s oneness-in-many is meant to mirror God\u2019s own being (John 17:21-23). Third, salvation is Trinitarian through and through: the Father plans, the Son accomplishes, the Spirit applies. Every blessing you enjoy has passed through all three persons.

## 5. Living Coram Deo \u2014 Before the Face of God
The Reformers spoke of living coram Deo, "before the face of God." Because God is everywhere-present and all-knowing, there is no secular compartment of life \u2014 no thought unobserved, no motive hidden, no moment outside his gaze. This is both searching and sweet: searching, because pretense is pointless before him (Hebrews 4:13); sweet, because we never face anything alone \u2014 "I am with you always" (Matthew 28:20). The person who truly knows God lives differently: with reverence (he is holy), with confidence (he is almighty), with honesty (he knows all), with rest (he never changes), and with love (he is love). "The fear of Yahweh is the beginning of wisdom" (Proverbs 9:10) \u2014 not cringing terror, but awe that orders everything else rightly.

## 6. From Knowledge to Worship
All theology aims at doxology. Paul, after eleven chapters of the deepest theology ever written, erupts: "Oh the depth of the riches both of the wisdom and the knowledge of God!" (Romans 11:33). If your study of God does not move you to worship, you have not yet understood it. End this lesson the way Moses ended his encounter: bowed down, worshiping, and asking this glorious God to go with you (Exodus 34:8-9).`,
        keyTerms: [
          { term: 'Trinity', definition: 'One divine being in three co-equal, co-eternal persons: Father, Son, and Holy Spirit.' },
          { term: 'Incommunicable attributes', definition: 'Perfections belonging to God alone: self-existence, eternity, immutability, omnipotence, omniscience, omnipresence.' },
          { term: 'Communicable attributes', definition: 'Perfections we are called to reflect: holiness, love, mercy, truthfulness, justice, faithfulness, goodness.' },
          { term: 'Self-existence (aseity)', definition: 'God depends on nothing outside himself; he is "I AM" (Exodus 3:14).' },
          { term: 'Coram Deo', definition: 'Latin for "before the face of God": living all of life in conscious awareness of God\u2019s presence.' },
          { term: 'Doxology', definition: 'An expression of praise to God; the proper end of all true theology.' },
        ],
        crossRefs: ['Genesis 1:1', 'Exodus 3:14', 'Psalm 19:1', 'Psalm 90:2', 'Isaiah 6:3', 'Jeremiah 29:13', 'John 1:1-3', 'John 1:18', 'Romans 1:20', 'Hebrews 13:8'],
        reflection: [
          'The Bible announces rather than argues God\u2019s existence. Why do you think Scripture treats unbelief as a heart issue (Psalm 14:1) rather than merely an intellectual one?',
          'Which incommunicable attribute (self-existence, eternity, immutability, omnipotence, omniscience, omnipresence) most humbles you? Which most comforts you?',
          'Of the communicable attributes, which one is God currently pressing you to reflect more faithfully \u2014 holiness, love, mercy, truthfulness, patience?',
          'How does the Trinity guard against two opposite errors: a cold, solitary view of God and a divided, polytheistic view of God?',
          'What would change in your daily life if you truly lived coram Deo \u2014 conscious that every moment is before the face of God?',
          'Paul responds to deep theology with worship (Romans 11:33). What truth about God from this lesson most moves you to praise?',
        ],
        application: `Spend an unhurried hour this week on a "God retreat": no phone, just your Bible and a notebook. Read Psalm 139 slowly, then Exodus 34:6-7, then John 17. After each passage, write: (1) What this shows me about who God is; (2) What this exposes in me; (3) One way I will respond this week. End by writing your own doxology \u2014 a paragraph of praise in your own words, like Paul\u2019s in Romans 11:33-36. Keep it where you\u2019ll see it. Theology that ends in worship is theology that lasts.`,
        prayer: `O Lord, our Lord, how majestic is your name in all the earth! You are self-existent, needing nothing, yet you have chosen to make yourself known to me. You are eternal and unchanging \u2014 my rock when everything shifts. You are all-powerful and all-knowing and everywhere-present \u2014 able to save, understanding all, never absent. You are holy, holy, holy \u2014 and you are love, loving me while I was still a sinner. Father, Son, and Holy Spirit \u2014 one God in eternal fellowship \u2014 I bow before you. Make me holy as you are holy. Make me loving as you are love. Let my whole life be lived coram Deo, before your face, to your glory. Oh the depth of your riches \u2014 to you be glory forever. Amen.`,
        quiz: [
          {
            id: 'path-beg-2-study-q1',
            type: 'mc',
            prompt: 'God\u2019s name "I AM WHO I AM" (Exodus 3:14) most directly teaches which attribute?',
            choices: ['Omnipresence', 'Self-existence', 'Holiness', 'Love'],
            answer: 'Self-existence',
            explanation: '"I AM" declares that God depends on nothing outside himself \u2014 he simply, eternally is.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-2-study-q2',
            type: 'mc',
            prompt: 'Which of these is an incommunicable attribute \u2014 belonging to God alone?',
            choices: ['Love', 'Mercy', 'Omniscience', 'Patience'],
            answer: 'Omniscience',
            explanation: 'Omniscience (complete knowledge of all things) belongs to God alone; love, mercy, and patience are communicable \u2014 we are called to reflect them.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-2-study-q3',
            type: 'tf',
            prompt: 'The Old Testament hints at plurality within the one Godhead (e.g., Genesis 1:26), which the New Testament reveals as Father, Son, and Holy Spirit.',
            answer: 'True',
            explanation: 'From "Let us make man" to the baptism of Jesus, Scripture progressively reveals one God in three persons.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-2-study-q4',
            type: 'mc',
            prompt: 'Living "coram Deo" means...',
            choices: ['Living in a monastery', 'Living all of life consciously before the face of God', 'Fearing God\u2019s punishment constantly', 'Avoiding all secular work'],
            answer: 'Living all of life consciously before the face of God',
            explanation: 'Because God is everywhere-present and all-knowing, every moment is lived before his face \u2014 with reverence, honesty, and rest.',
            tags: ['theology'],
          },
        ],
      },
    },
  },
];

const BEGINNER_B: LayeredLesson[] = [
  {
    id: 'path-beg-3',
    pathId: 'beginner',
    order: 3,
    title: 'Who Is Jesus?',
    summary:
      'Jesus is fully God and fully man \u2014 the promised Messiah who lived, died, and rose again to save sinners.',
    layers: {
      core: {
        minutes: 5,
        concept:
          'Jesus of Nazareth is the eternal Son of God who became truly human \u2014 lived a sinless life, died for our sins, and rose again.',
        scripture: [
          {
            ref: 'John 1:1, 14',
            text: 'In the beginning was the Word, and the Word was with God, and the Word was God. The Word became flesh, and lived among us.',
          },
        ],
        teaching: `Jesus is the most important person who ever lived \u2014 and the most important question you will ever answer is the one he asked his disciples: "Who do you say that I am?" (Matthew 16:15).

The Bible\u2019s answer is stunning: Jesus is fully God and fully man. John\u2019s Gospel opens by calling him the eternal "Word" who "was God" \u2014 and then says this Word "became flesh, and lived among us" (John 1:1, 14). He did not stop being God; he took on full humanity. He got tired, hungry, and thirsty; he wept at a friend\u2019s grave \u2014 yet he calmed storms, forgave sins, and rose from the dead.

Why did he come? "The Son of Man came to seek and to save that which was lost" (Luke 19:10). He lived the sinless life we could not live, died the death our sins deserved, and rose again \u2014 defeating sin and death. Everything in Christianity stands or falls on who Jesus is and what he did.`,
        reflection: [
          'Jesus asked, "Who do you say that I am?" How would you answer him right now \u2014 honestly?',
          'If Jesus is truly God who became man to seek and save the lost, what does that tell you about how much you matter to God?',
        ],
        application: `Read the Gospel of Mark this month \u2014 it\u2019s the shortest, most action-packed account of Jesus\u2019 life. As you read, keep a list titled "Who Jesus is" and add to it each day: what he does, what he says, how people respond. By the end, you\u2019ll have your own portrait of Christ drawn straight from Scripture.`,
        prayer: `Lord Jesus, you are the eternal Son of God who became flesh and lived among us. Thank you for coming to seek and save the lost \u2014 thank you for coming for me. Open my eyes to see you clearly, and give me the grace to follow you fully. Amen.`,
      },
      expanded: {
        minutes: 15,
        concept:
          'Jesus is the promised Messiah: truly God, truly man, sinless Savior \u2014 his life, death, and resurrection are the center of history and of our hope.',
        scripture: [
          {
            ref: 'John 1:1, 14',
            text: 'In the beginning was the Word, and the Word was with God, and the Word was God. The Word became flesh, and lived among us. We saw his glory, such glory as of the one and only Son of the Father, full of grace and truth.',
          },
          {
            ref: 'Luke 19:10',
            text: 'For the Son of Man came to seek and to save that which was lost.',
          },
        ],
        teaching: `## Truly God
Jesus claimed divine identity openly. "I and the Father are one" (John 10:30). "Before Abraham was born, I am" (John 8:58) \u2014 taking God\u2019s own name, "I AM." His enemies understood exactly what he meant, and picked up stones for blasphemy (John 10:33). The apostles worshiped him as God: Thomas cried, "My Lord and my God!" (John 20:28), and Paul wrote that "in him all the fullness of the Godhead dwells bodily" (Colossians 2:9). He received worship \u2014 something no mere prophet or angel may accept (Revelation 22:8-9).

## Truly Man
Yet he was fully, genuinely human. Born of Mary in Bethlehem (Luke 2:7), he grew, learned, hungered (Matthew 4:2), thirsted (John 19:28), slept (Mark 4:38), and wept (John 11:35). He was tempted in every way we are \u2014 yet without sin (Hebrews 4:15). This matters enormously: only a true man could represent humanity and die in our place; only true God could bear infinite guilt and defeat death. Take away either nature and salvation collapses.

## The Promised Messiah
Jesus did not appear out of nowhere. For centuries God promised a coming Savior: the "seed" who would crush the serpent (Genesis 3:15), a prophet like Moses (Deuteronomy 18:15), a son of David whose kingdom would never end (2 Samuel 7:16), a suffering servant pierced for our transgressions (Isaiah 53:5). Jesus fulfilled them \u2014 born in Bethlehem (Micah 5:2), of a virgin (Isaiah 7:14), entering Jerusalem on a donkey (Zechariah 9:9), betrayed for thirty pieces of silver (Zechariah 11:12). "Messiah" (Hebrew) and "Christ" (Greek) both mean "Anointed One" \u2014 the promised King.

## His Work: Life, Death, Resurrection
He lived the sinless life we owed God but could not live. He died the death our sins deserved: "the Son of Man also came not to be served, but to serve, and to give his life as a ransom for many" (Mark 10:45). And he rose on the third day \u2014 seen by hundreds of witnesses (1 Corinthians 15:6) \u2014 proving his claims, defeating death, and guaranteeing the resurrection of all who trust him. He now reigns at God\u2019s right hand and will return to judge and to make all things new.`,
        keyTerms: [
          { term: 'Messiah / Christ', definition: '"Anointed One" (Hebrew/Greek): the promised Savior-King foretold in the Old Testament.' },
          { term: 'Incarnation', definition: 'The eternal Son of God taking on full humanity \u2014 "the Word became flesh" (John 1:14).' },
          { term: 'Sinless', definition: 'Jesus lived a fully human life without ever sinning (Hebrews 4:15; 1 Peter 2:22).' },
          { term: 'Resurrection', definition: 'Jesus\u2019 bodily rising from the dead on the third day, witnessed by hundreds.' },
        ],
        reflection: [
          'C.S. Lewis argued Jesus must be liar, lunatic, or Lord \u2014 there is no room for "merely a good teacher." How do his claims force a decision?',
          'Why is it essential that Jesus be both fully God and fully man? What would be lost if either were denied?',
          'The Old Testament promised the Messiah centuries in advance. How does fulfilled prophecy strengthen your trust in God\u2019s word?',
        ],
        application: `This week, read one chapter of John\u2019s Gospel per day and answer Jesus\u2019 question for yourself each day: "Who do you say that I am?" Write your answer in a sentence or two, and watch it deepen. Then tell one person this week one true thing about Jesus you learned \u2014 sharing what you\u2019re learning cements it and may plant a seed in someone else.`,
        prayer: `Lord Jesus Christ, Son of God and Son of Man \u2014 my Lord and my God. You are the promised Messiah, the sinless one who gave your life as a ransom for many. I believe you died for my sins and rose again. Be my Savior and my King; teach me to follow you with my whole life. Amen.`,
        quiz: [
          {
            id: 'path-beg-3-exp-q1',
            type: 'mc',
            prompt: '"The Word became flesh, and lived among us" (John 1:14) teaches...',
            choices: ['Jesus was only a spirit', 'The eternal Son of God became truly human', 'Jesus stopped being God', 'God only seemed to be human'],
            answer: 'The eternal Son of God became truly human',
            explanation: 'The incarnation: fully God and fully man, one person \u2014 without ceasing to be God.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-3-exp-q2',
            type: 'tf',
            prompt: 'The titles "Messiah" and "Christ" both mean "Anointed One" \u2014 the promised Savior-King.',
            answer: 'True',
            explanation: 'Messiah is Hebrew, Christ is Greek; both mean "Anointed One."',
            tags: ['theology'],
          },
          {
            id: 'path-beg-3-exp-q3',
            type: 'mc',
            prompt: 'According to Luke 19:10, why did the Son of Man come?',
            choices: ['To condemn the world', 'To seek and to save the lost', 'To overthrow Rome', 'To teach philosophy'],
            answer: 'To seek and to save the lost',
            explanation: 'Jesus\u2019 mission was rescue: seeking and saving lost sinners.',
            tags: ['theology'],
          },
        ],
      },
      deep: {
        minutes: 30,
        concept:
          'The deity and humanity of Christ, his fulfillment of prophecy, his sinless life, atoning death, and bodily resurrection \u2014 and why each is non-negotiable for our salvation.',
        scripture: [
          {
            ref: 'Colossians 1:15-16',
            text: 'He is the image of the invisible God, the firstborn of all creation. For by him all things were created, in the heavens and on the earth, things visible and things invisible.',
          },
          {
            ref: 'Isaiah 53:5',
            text: 'But he was pierced for our transgressions. He was crushed for our iniquities. The punishment that brought our peace was on him; and by his wounds we are healed.',
          },
          {
            ref: '1 Corinthians 15:3-4',
            text: 'For I delivered to you first of all that which I also received: that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures,',
          },
        ],
        teaching: `## The Eternal Son
Before Bethlehem, Jesus was. "In the beginning was the Word" (John 1:1) \u2014 the same opening as Genesis 1:1, deliberately: the One through whom all things were made (John 1:3; Colossians 1:16). He shared the Father\u2019s glory "before the world existed" (John 17:5). He is not a created being who became divine; he is the eternal God who became human. When we say Jesus is God, we mean everything true of God is true of him: eternal, all-powerful, all-knowing, worthy of worship.

## The Claims He Made
Jesus forgave sins \u2014 a prerogative of God alone (Mark 2:5-7). He called himself "I am," God\u2019s covenant name (John 8:58). He said knowing him is knowing the Father: "He who has seen me has seen the Father" (John 14:9). He accepted worship from Thomas (John 20:28) and from his disciples (Matthew 28:17). He claimed authority to judge all humanity (John 5:22) and promised to return in glory (Matthew 24:30). These are not the claims of a humble moral teacher. As C.S. Lewis observed, a man who said these things is either a liar, a lunatic, or exactly who he claimed to be: Lord.

## The Prophecies He Fulfilled
Peter told his hearers that the prophets foretold Christ\u2019s sufferings and glories (1 Peter 1:10-11). Consider the record: born of a virgin (Isaiah 7:14; Matthew 1:23), in Bethlehem (Micah 5:2; Matthew 2:6), from David\u2019s line (2 Samuel 7:16; Romans 1:3), entering Jerusalem on a donkey (Zechariah 9:9; Matthew 21:5), betrayed for thirty silver pieces (Zechariah 11:12; Matthew 26:15), silent before his accusers (Isaiah 53:7; Matthew 27:14), pierced hands and feet (Psalm 22:16; John 20:27), lots cast for his clothing (Psalm 22:18; John 19:24), buried with the rich (Isaiah 53:9; Matthew 27:57-60). Written centuries beforehand, fulfilled in one man. Coincidence cannot carry this weight; only providence can.

## The Life He Lived
Jesus was tempted as we are \u2014 hunger in the wilderness, pressure from crowds, anguish in Gethsemane \u2014 "yet without sin" (Hebrews 4:15). Pilate, no friend of his, declared three times, "I find no basis for a charge against him" (John 19:4-6). Even a Roman centurion at the cross confessed, "Truly this was the Son of God!" (Matthew 27:54). His sinlessness qualifies him uniquely: an unblemished lamb for the sacrifice (1 Peter 1:19), a sympathetic high priest who understands our weakness (Hebrews 4:15), and the perfect example we are called to follow (1 Peter 2:21).

## The Death He Died
The cross was no accident and no mere martyrdom. Jesus said he came "to give his life as a ransom for many" (Mark 10:45). Isaiah saw it 700 years early: "he was pierced for our transgressions... the punishment that brought our peace was on him" (Isaiah 53:5). On the cross, our sin was laid on him and God\u2019s judgment fell \u2014 so that in him we could be forgiven and reconciled. "God... has reconciled us to himself through Jesus Christ" (2 Corinthians 5:18). Never treat the cross as only an example of love; it is first an act of atonement \u2014 the holy God dealing decisively with sin.

## The Resurrection and Reign
Paul makes the resurrection the load-bearing wall of Christianity: "If Christ has not been raised, your faith is vain; you are still in your sins" (1 Corinthians 15:17). But Christ has been raised \u2014 seen by Peter, the Twelve, more than five hundred at once, James, and Paul himself (1 Corinthians 15:5-8). The tomb was empty; the grave clothes were folded; the disciples were transformed from cowards into martyrs. The risen Jesus ascended to the Father\u2019s right hand, where he reigns, intercedes for us (Hebrews 7:25), and from where he will return "to judge the living and the dead."`,
        keyTerms: [
          { term: 'Deity of Christ', definition: 'Jesus is fully God \u2014 eternal, all-powerful, worthy of worship (John 1:1; Colossians 2:9).' },
          { term: 'Humanity of Christ', definition: 'Jesus is fully man \u2014 born, tempted, suffering, dying \u2014 yet without sin.' },
          { term: 'Atonement', definition: 'Christ\u2019s death making amends for sin, reconciling sinners to a holy God.' },
          { term: 'Ransom', definition: 'The price paid to free captives \u2014 Christ gave his life to free us from sin\u2019s bondage (Mark 10:45).' },
          { term: 'Messianic prophecy', definition: 'Old Testament predictions about the coming Savior, fulfilled in Jesus.' },
        ],
        crossRefs: ['Genesis 3:15', '2 Samuel 7:16', 'Psalm 22', 'John 8:58', 'John 10:30', 'Philippians 2:5-11'],
        reflection: [
          'Which of Jesus\u2019 claims to deity ("I and the Father are one," forgiving sins, accepting worship) do you find most striking? Why?',
          'How does the sheer number of fulfilled prophecies affect your confidence that Jesus is who he claimed to be?',
          'Why does it matter \u2014 practically, for your daily faith \u2014 that Jesus was tempted yet without sin?',
          'Paul says if Christ is not raised, our faith is worthless. What difference does the resurrection make in how you face suffering and death?',
        ],
        application: `Set aside time this week to read Isaiah 53 slowly \u2014 all twelve verses \u2014 and after each verse, write one sentence connecting it to Jesus\u2019 cross. Then read 1 Corinthians 15:1-8 and list the resurrection witnesses Paul names. End by writing a short prayer of thanks for three specific things Christ\u2019s death and resurrection secured for you personally (forgiveness, reconciliation, hope \u2014 name them concretely). Keep this page; return to it whenever your faith feels thin.`,
        prayer: `Lord Jesus, eternal Son of God, promised Messiah \u2014 I bow before you. You are truly God and truly man; you lived without sin, died in my place, and rose in triumph. Thank you for the wounds by which I am healed, the ransom by which I am freed, the resurrection by which I have hope. You reign now at the Father\u2019s right hand, and you are coming again. Make me faithful until that day. Amen.`,
        quiz: [
          {
            id: 'path-beg-3-deep-q1',
            type: 'mc',
            prompt: 'When Jesus said "Before Abraham was born, I am" (John 8:58), he was...',
            choices: ['Claiming to be older than Abraham only', 'Taking God\u2019s covenant name "I AM" for himself', 'Speaking in parables', 'Denying his humanity'],
            answer: 'Taking God\u2019s covenant name "I AM" for himself',
            explanation: '"I AM" is God\u2019s name from Exodus 3:14 \u2014 his hearers understood and tried to stone him for blasphemy.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-3-deep-q2',
            type: 'mc',
            prompt: 'Isaiah 53:5 says the Servant was "pierced for our transgressions" \u2014 written about 700 years before Christ. This is an example of...',
            choices: ['Poetry with no meaning', 'Messianic prophecy fulfilled in Jesus', 'A law of Moses', 'A psalm of David'],
            answer: 'Messianic prophecy fulfilled in Jesus',
            explanation: 'Isaiah foretold the suffering Servant centuries before the crucifixion \u2014 a cornerstone of the case for Christ.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-3-deep-q3',
            type: 'tf',
            prompt: 'According to 1 Corinthians 15:17, if Christ has not been raised, Christian faith is worthless and believers are still in their sins.',
            answer: 'True',
            explanation: 'Paul stakes everything on the bodily resurrection \u2014 it is the vindication of Christ\u2019s claims and our justification.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-3-deep-q4',
            type: 'mc',
            prompt: 'Why must Jesus be fully human to save us?',
            choices: ['So he could be a good example', 'Only a true man could represent humanity and die in our place', 'So he could understand angels', 'It was not necessary'],
            answer: 'Only a true man could represent humanity and die in our place',
            explanation: 'A true man to represent us and die for us; true God to bear infinite guilt and conquer death \u2014 both natures are essential.',
            tags: ['theology'],
          },
        ],
      },
      study: {
        minutes: 60,
        concept:
          'A full Christology: the eternal Son, his incarnation, his claims and works, fulfilled prophecy, atoning death, resurrection, ascension, and return \u2014 and what it means to confess him as Lord.',
        scripture: [
          {
            ref: 'Philippians 2:6-8',
            text: 'who, existing in the form of God, didn\u2019t consider equality with God a thing to be grasped, but emptied himself, taking the form of a servant, being made in the likeness of men. And being found in human form, he humbled himself, becoming obedient to death, yes, the death of the cross.',
          },
          {
            ref: 'Colossians 2:9',
            text: 'For in him all the fullness of the Godhead dwells bodily,',
          },
          {
            ref: '1 Corinthians 15:17, 20',
            text: 'If Christ has not been raised, your faith is vain; you are still in your sins. But now Christ has been raised from the dead, the first fruits of those who are asleep.',
          },
          {
            ref: 'Revelation 1:8',
            text: '\u2018I am the Alpha and the Omega,\u2019 says the Lord God, \u2018who is and who was and who is to come, the Almighty.\u2019',
          },
        ],
        teaching: `## 1. The Person: Two Natures, One Christ
The church\u2019s confession, hammered out over centuries of controversy, is simple to state and infinite to ponder: Jesus Christ is one person with two natures \u2014 fully God and fully man \u2014 united without confusion, change, division, or separation. Deny his deity and you have a mere martyr who cannot save; deny his humanity and you have a phantom who cannot represent. Philippians 2:6-8 traces the arc: existing "in the form of God," he "emptied himself" \u2014 not of deity but of its privileges \u2014 "taking the form of a servant, being made in the likeness of men," and humbled himself "to death, yes, the death of the cross." The incarnation is not God pretending to be human; it is God truly becoming human while remaining truly God. "In him all the fullness of the Godhead dwells bodily" (Colossians 2:9) \u2014 and that fullness walked dusty roads, touched lepers, and wept.

## 2. The Names: What He Is Called
His names are theology in miniature. Jesus ("Yahweh saves," Matthew 1:21) \u2014 his mission in a word. Christ/Messiah ("Anointed One") \u2014 the promised King. Son of God \u2014 his unique divine sonship (John 3:16; 10:36). Son of Man \u2014 his favorite self-designation, drawn from Daniel 7:13-14, where the Son of Man receives "dominion, glory, and a kingdom" from the Ancient of Days: a human figure wielding divine authority. Lord (kyrios) \u2014 the title of Yahweh himself in the Greek Old Testament, confessed of Jesus by the earliest church (Romans 10:9). Emmanuel ("God with us," Matthew 1:23). Lamb of God (John 1:29). Each name opens a room in the mansion of who he is.

## 3. The Evidence: Prophecy, Miracles, Resurrection
Three great witnesses confirm his claims. First, prophecy: dozens of specific predictions \u2014 lineage, birthplace, manner of death, resurrection \u2014 fulfilled in one life, many written centuries prior. Second, his works: the Gospels record authority over nature (calming the storm), disease (healing the blind), demons, and death itself (raising Lazarus) \u2014 "the works that I do in my Father\u2019s name, these testify about me" (John 10:25). His miracles were not magic tricks but signs of the kingdom breaking in. Third, and decisively, the resurrection: an empty tomb, grave clothes left behind, appearances to individuals and crowds, and the explosive transformation of terrified disciples into bold witnesses willing to die for what they had seen. As Paul argues, everything hangs on this event (1 Corinthians 15:14-19).

## 4. The Work: Prophet, Priest, and King
Theologians have long summarized Christ\u2019s work in three offices. As Prophet, he is God\u2019s final word \u2014 "God... has in these last days spoken to us by his Son" (Hebrews 1:2); his teaching carries divine authority ("but I tell you," Matthew 5). As Priest, he offered himself as the once-for-all sacrifice and now intercedes for us: "he lives forever to make intercession for them" (Hebrews 7:25). As King, he reigns now at the Father\u2019s right hand (Ephesians 1:20-22) and will return visibly to judge and to establish the new creation. Prophet reveals God to us; Priest reconciles us to God; King rules us for God. We need all three \u2014 truth, atonement, and lordship.

## 5. The Present Ministry: What Jesus Is Doing Now
Christ is not idle between the ascension and the return. He intercedes: "we have a Counselor with the Father, Jesus Christ, the righteous" (1 John 2:1) \u2014 when you sin, your Advocate is already speaking. He builds his church: "I will build my church, and the gates of Hades will not prevail against it" (Matthew 16:18). He prepares a place: "I go to prepare a place for you... I will come again" (John 14:3). He is present with his people: "Behold, I am with you always, even to the end of the age" (Matthew 28:20). The ascended Christ is not distant; through the Spirit, he is nearer than your breath.

## 6. The Confession: "Jesus Is Lord"
Romans 10:9 makes confession the doorway: "if you will confess with your mouth that Jesus is Lord, and believe in your heart that God raised him from the dead, you will be saved." To call Jesus "Lord" is to surrender the throne of your life \u2014 your plans, possessions, relationships, future \u2014 to him. It is the end of self-rule and the beginning of true freedom, for his yoke is easy and his burden light (Matthew 11:30). This confession will cost you: "Whoever wants to save his life will lose it, but whoever loses his life for my sake will find it" (Matthew 16:25). But it gains you everything: forgiveness, adoption, purpose, and a King who loved you enough to die for you. There is no neutral ground before Jesus \u2014 only worship or rejection. Choose worship.`,
        keyTerms: [
          { term: 'Incarnation', definition: 'The eternal Son taking on full humanity without ceasing to be God (John 1:14).' },
          { term: 'Hypostatic union', definition: 'The union of Christ\u2019s two natures \u2014 fully God, fully man \u2014 in one person.' },
          { term: 'Christ (Messiah)', definition: '"Anointed One": the promised Savior-King of Old Testament prophecy.' },
          { term: 'Atonement', definition: 'Christ\u2019s sacrificial death reconciling sinners to God.' },
          { term: 'Intercession', definition: 'Christ\u2019s ongoing priestly work of pleading for believers before the Father (Hebrews 7:25).' },
          { term: 'Second coming', definition: 'Christ\u2019s promised visible return to judge and to make all things new.' },
        ],
        crossRefs: ['Daniel 7:13-14', 'Micah 5:2', 'Matthew 16:15-16', 'John 14:6', 'Acts 4:12', 'Hebrews 1:1-3', 'Hebrews 7:25', '1 Timothy 2:5'],
        reflection: [
          'Philippians 2 says Christ "emptied himself." What did he lay aside \u2014 and what does his self-emptying teach you about the nature of true greatness?',
          'Which of Christ\u2019s offices \u2014 Prophet (truth), Priest (atonement), King (rule) \u2014 do you most need to embrace right now? Which do you tend to neglect?',
          'The resurrection is Christianity\u2019s load-bearing wall. How would you summarize the evidence for it to a skeptical friend in two minutes?',
          'What does it mean, concretely, for Jesus to be "Lord" of your calendar, your money, your relationships, and your future?',
          '"There is salvation in no one else" (Acts 4:12). How does the exclusivity of Christ shape the way you pray for and speak to unbelieving friends?',
          'Hebrews 7:25 says Jesus "lives forever to make intercession" for you. How does his present intercession change the way you approach God after you sin?',
        ],
        application: `Write your own confession of Christ this week \u2014 a page answering "Who do you say that I am?" in your own words, drawing on what you\u2019ve learned: his deity, humanity, death, resurrection, and present reign. Be specific and personal, not generic. Then identify one area of your life where Jesus is Savior but not yet fully Lord \u2014 a habit, a relationship, a financial decision, a secret \u2014 and take one concrete step of surrender this week: confess it, change it, or bring it into the light with a trusted Christian. Lordship is proven in particulars.`,
        prayer: `Lord Jesus Christ \u2014 eternal Word, promised Messiah, Son of God and Son of Man \u2014 I confess you. You existed before all things and made all things; you emptied yourself and became obedient to death on a cross; God has highly exalted you and given you the name above every name. You died for my sins according to the Scriptures, you were buried, you rose on the third day, and you reign now \u2014 interceding for me, building your church, preparing a place, and coming again. I bow the knee: you are my Prophet, my Priest, my King. Forgive my divided loyalties. Rule every room of my heart. Make me faithful until you return in glory \u2014 to you, with the Father and the Spirit, be all honor forever. Amen.`,
        quiz: [
          {
            id: 'path-beg-3-study-q1',
            type: 'mc',
            prompt: 'The "hypostatic union" refers to...',
            choices: ['The union of Jews and Gentiles', 'Christ\u2019s two natures (fully God, fully man) united in one person', 'The union of the Old and New Testaments', 'The marriage of Christ and the church'],
            answer: 'Christ\u2019s two natures (fully God, fully man) united in one person',
            explanation: 'One person, two natures \u2014 without confusion, change, division, or separation.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-3-study-q2',
            type: 'mc',
            prompt: 'Jesus\u2019 favorite self-designation, "Son of Man," comes from Daniel 7 \u2014 where the Son of Man...',
            choices: ['Is merely human', 'Receives dominion, glory, and an everlasting kingdom from God', 'Is rejected by God', 'Serves only Israel'],
            answer: 'Receives dominion, glory, and an everlasting kingdom from God',
            explanation: 'Daniel 7:13-14 gives the Son of Man divine authority \u2014 Jesus\u2019 claim was staggering, not modest.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-3-study-q3',
            type: 'tf',
            prompt: 'As Priest, Christ offered himself once for all and now lives forever to intercede for believers (Hebrews 7:25).',
            answer: 'True',
            explanation: 'His priestly work includes both the finished sacrifice and the ongoing intercession.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-3-study-q4',
            type: 'mc',
            prompt: 'According to Romans 10:9, what two things together lead to salvation?',
            choices: ['Baptism and church membership', 'Confessing Jesus as Lord with the mouth and believing God raised him from the dead', 'Good works and sincerity', 'Prayer and fasting'],
            answer: 'Confessing Jesus as Lord with the mouth and believing God raised him from the dead',
            explanation: 'Confession of Christ\u2019s lordship plus heart-belief in the resurrection \u2014 the doorway of salvation.',
            tags: ['theology'],
          },
        ],
      },
    },
  },
  {
    id: 'path-beg-4',
    pathId: 'beginner',
    order: 4,
    title: 'What Is Sin?',
    summary:
      'Sin is rebellion against our holy God \u2014 in thought, word, and deed \u2014 and it separates us from him and brings death.',
    layers: {
      core: {
        minutes: 5,
        concept:
          'Sin is any failure to love and obey our holy God \u2014 in what we do, say, think, or fail to do \u2014 and it separates us from him.',
        scripture: [
          {
            ref: 'Romans 3:23',
            text: 'for all have sinned, and fall short of the glory of God;',
          },
        ],
        teaching: `Sin is not just "being bad." The Bible\u2019s word for it means missing the mark \u2014 like an arrow falling short of the target. God\u2019s target is his own perfect holiness, and "all have sinned, and fall short of the glory of God" (Romans 3:23). All \u2014 no exceptions.

Sin takes many forms. Sometimes it is doing what God forbids: lying, stealing, hatred, lust. John calls this lawlessness: "Sin is lawlessness" (1 John 3:4). Sometimes it is failing to do what God commands: "to him therefore who knows to do good, and doesn\u2019t do it, to him it is sin" (James 4:17). And sin lives deeper than actions \u2014 Jesus traced murder back to anger and adultery back to lust (Matthew 5:21-28). Sin is a condition of the heart before it is ever an act of the hands.

Why does it matter? Because sin separates us from our holy God: "your iniquities have separated you and your God" (Isaiah 59:2). And its wage is death (Romans 6:23). This is the bad news that makes the good news good: we cannot fix this ourselves, which is exactly why we need a Savior.`,
        reflection: [
          'The Bible says sin includes wrong thoughts and neglected good \u2014 not just bad actions. How does that wider definition change your self-assessment?',
          'Why do you think honestly facing our sin is necessary before we can appreciate grace?',
        ],
        application: `Ask God today the prayer of Psalm 139:23-24: "Search me, God, and know my heart... See if there is any wicked way in me." Write down what comes to mind \u2014 specific sins, not vague guilt. Then confess them directly to God (1 John 1:9 promises forgiveness), and if your sin has hurt someone, take one step toward making it right this week.`,
        prayer: `Holy God, you are light with no darkness at all, and I confess I have sinned and fallen short of your glory \u2014 in what I have done and in what I have left undone, in my thoughts as well as my actions. Thank you that you do not leave me in my sin but sent a Savior. Create in me a clean heart. In Jesus\u2019 name, amen.`,
      },
      expanded: {
        minutes: 15,
        concept:
          'Sin is rebellion against God rooted in the heart, inherited from Adam, universal in scope \u2014 and its wages are death, making a Savior absolutely necessary.',
        scripture: [
          {
            ref: 'Romans 3:23',
            text: 'for all have sinned, and fall short of the glory of God;',
          },
          {
            ref: 'Isaiah 59:2',
            text: 'but your iniquities have separated you and your God, and your sins have hidden his face from you, so that he will not hear.',
          },
        ],
        teaching: `## Missing the Mark
The Bible uses several vivid pictures for sin. It is missing the mark (the most common word) \u2014 falling short of God\u2019s glory (Romans 3:23). It is lawlessness \u2014 crossing God\u2019s lines (1 John 3:4). It is rebellion \u2014 the creature shaking its fist at the Creator. It is going astray: "All we like sheep have gone astray; everyone has turned to his own way" (Isaiah 53:6). Notice the direction: sin is turning to our own way instead of God\u2019s. At its root, sin is idolatry \u2014 putting anything in God\u2019s place \u2014 and pride \u2014 putting ourselves in God\u2019s place.

## Deeper Than Actions
Jesus relentlessly traced sin to the heart. Anger is murder\u2019s seed; lust is adultery\u2019s root (Matthew 5:21-28). "For out of the heart come evil thoughts, murders, adulteries, sexual sins, thefts, false testimony, and blasphemies" (Matthew 15:19). This is why behavior management never cures sin: you can prune the branches while the root thrives. We do not just commit sins; we are sinners by nature. David confessed, "I was born in iniquity. My mother conceived me in sin" (Psalm 51:5). We sin because we are sinners \u2014 not the other way around.

## How It Started
Genesis 3 tells the story: Adam and Eve, placed in a perfect world with one prohibition, believed the serpent\u2019s lie that God was holding out on them \u2014 and ate. The pattern of every sin since: doubting God\u2019s goodness, desiring what he forbade, and hiding afterward. Paul explains the fall\u2019s reach: "sin entered into the world through one man, and death through sin; so death passed to all men, because all sinned" (Romans 5:12). We inherit both Adam\u2019s guilt and his corrupted nature \u2014 which is why even our best deeds are tainted and why no one is exempt.

## What It Costs
Sin separates: "your iniquities have separated you and your God" (Isaiah 59:2). Sin enslaves: "everyone who commits sin is the bondservant of sin" (John 8:34). And sin kills: "the wages of sin is death" (Romans 6:23) \u2014 not only physical death but spiritual death now and eternal separation to come. This is why the gospel is urgent news, not optional advice. The diagnosis is terminal; only God\u2019s intervention \u2014 a Savior \u2014 can cure it.`,
        keyTerms: [
          { term: 'Sin', definition: 'Missing God\u2019s mark: any thought, word, deed, or omission contrary to his holy character and law.' },
          { term: 'Lawlessness', definition: 'John\u2019s definition of sin (1 John 3:4): living as though God\u2019s law does not bind us.' },
          { term: 'Original sin', definition: 'The corrupted nature and guilt inherited from Adam\u2019s fall (Romans 5:12).' },
          { term: 'Repentance', definition: 'Turning from sin to God \u2014 a change of mind, heart, and direction.' },
        ],
        reflection: [
          'Which picture of sin \u2014 missing the mark, lawlessness, rebellion, going astray \u2014 most accurately describes your own experience? Why?',
          'If sin is rooted in the heart rather than just behavior, what does that say about self-improvement as a cure?',
          'How does understanding sin\u2019s seriousness (separation, slavery, death) deepen your gratitude for the cross?',
        ],
        application: `Do a thorough, honest inventory this week using the Ten Commandments (Exodus 20:1-17) as a mirror \u2014 including the heart-level meanings Jesus gave them (Matthew 5:21-30). Write specific confessions, then pray 1 John 1:9 over each one, trusting God\u2019s promise to forgive and cleanse. Where your sin has wounded others, plan one act of restitution or apology. The goal is not wallowing in guilt but clearing the ground so grace can be fully enjoyed.`,
        prayer: `Righteous Father, I confess the truth: I have sinned and fallen short of your glory \u2014 in thought, word, and deed, in what I have done and left undone. My sin separates me from you, and I cannot rescue myself. Thank you that while I was still a sinner, Christ died for me. Wash me clean, turn my heart fully toward you, and teach me to hate what you hate. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-beg-4-exp-q1',
            type: 'mc',
            prompt: 'According to 1 John 3:4, sin is...',
            choices: ['A mistake', 'Lawlessness', 'Only serious crimes', 'A lack of education'],
            answer: 'Lawlessness',
            explanation: '"Sin is lawlessness" \u2014 living as though God\u2019s law does not apply to us.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-4-exp-q2',
            type: 'tf',
            prompt: 'Jesus taught that sin is only about outward actions, not the thoughts and desires of the heart.',
            answer: 'False',
            explanation: 'Jesus traced murder to anger and adultery to lust (Matthew 5:21-28) \u2014 sin begins in the heart.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-4-exp-q3',
            type: 'mc',
            prompt: 'According to Isaiah 59:2, what does sin do?',
            choices: ['Nothing important', 'Separates us from God', 'Makes us interesting', 'Only affects others'],
            answer: 'Separates us from God',
            explanation: '"Your iniquities have separated you and your God" \u2014 sin breaks fellowship with a holy God.',
            tags: ['theology'],
          },
        ],
      },
      deep: {
        minutes: 30,
        concept:
          'A biblical doctrine of sin: its nature, origin in the fall, universal corruption, deceitfulness, and wages \u2014 the dark backdrop that makes grace shine.',
        scripture: [
          {
            ref: 'Romans 5:12',
            text: 'Therefore as sin entered into the world through one man, and death through sin; so death passed to all men, because all sinned.',
          },
          {
            ref: 'Jeremiah 17:9',
            text: 'The heart is deceitful above all things, and it is exceedingly corrupt: who can know it?',
          },
          {
            ref: 'Romans 6:23',
            text: 'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.',
          },
        ],
        teaching: `## The Nature of Sin: Cosmic Treason
We tend to grade sin on a curve \u2014 white lies versus murder. God grades it against his own holiness, and the verdict is uniform: "whoever keeps the whole law, and yet stumbles in one point, he has become guilty of all" (James 2:10). Why so severe? Because sin is not merely rule-breaking; it is treason against our Maker. Every sin says to God: "I know better than you. My way, not yours." It is the creature rejecting the Creator\u2019s right to rule. That is why even "small" sins are infinitely serious \u2014 they are committed against an infinitely holy God. David, guilty of adultery and murder, prayed: "Against you, and you only, have I sinned" (Psalm 51:4). He had wronged people terribly, yet he saw that every sin is ultimately vertical.

## The Origin: The Fall
Genesis 3 is the saddest chapter in the Bible and the most explanatory. Adam and Eve enjoyed perfect fellowship with God, every tree but one \u2014 and the serpent\u2019s strategy has not changed: cast doubt on God\u2019s word ("Has God really said?"), deny God\u2019s judgment ("You won\u2019t surely die"), and impugn God\u2019s goodness ("God knows... you will be like God"). They ate \u2014 and immediately knew shame, hid from God, and blamed each other. Every sin since follows the same script: doubting God\u2019s word, desiring the forbidden, hiding afterward. But even there, grace: God promised a Savior \u2014 the woman\u2019s seed who would crush the serpent (Genesis 3:15) \u2014 and clothed them himself, the first hint that covering for sin requires death and must come from God.

## The Extent: Total Corruption
Paul\u2019s indictment in Romans 3:10-18 is comprehensive: "There is no one righteous, no, not one... There is no one who seeks after God." This does not mean every person is as bad as they could be \u2014 God\u2019s common grace restrains evil, and unbelievers do genuinely good deeds. It means sin has corrupted every part of us: mind (we suppress the truth, Romans 1:18), heart (deceitful above all things, Jeremiah 17:9), will (we cannot submit to God\u2019s law, Romans 8:7), conscience, imagination. We are not spiritually sick, needing only medicine; we are spiritually dead, needing resurrection (Ephesians 2:1). This doctrine \u2014 total depravity \u2014 is not pessimism; it is the honest diagnosis that makes the cure glorious.

## The Deceitfulness: Sin Lies
Sin never presents its bill upfront. It promises freedom and delivers slavery: "everyone who commits sin is the bondservant of sin" (John 8:34). It promises pleasure and delivers emptiness; promises control and delivers addiction. Hebrews warns of "the deceitfulness of sin" (Hebrews 3:13) \u2014 sin hardens the heart gradually, like arteries clogging silently. That is why we must "exhort one another day by day" and deal with sin while it is small. The sins we tolerate today become the chains of tomorrow.

## The Wages: Death
" The wages of sin is death" (Romans 6:23). Wages are earned \u2014 death is what our sin deserves, not an arbitrary punishment. Physical death entered through sin; spiritual death (separation from God now) reigns in every unredeemed heart; and eternal death \u2014 "the second death" (Revelation 20:14) \u2014 awaits those who finally reject God\u2019s remedy. This is the Bible\u2019s hardest truth and its most loving warning. God tells us plainly because he wants us to flee to Christ, in whom the same verse promises "the free gift of God is eternal life."`,
        keyTerms: [
          { term: 'Total depravity', definition: 'Sin has corrupted every part of human nature \u2014 mind, heart, and will \u2014 though not making everyone as evil as possible.' },
          { term: 'Original sin', definition: 'The guilt and corrupted nature inherited from Adam (Romans 5:12; Psalm 51:5).' },
          { term: 'Spiritual death', definition: 'Separation from God caused by sin \u2014 the state of every person apart from Christ (Ephesians 2:1).' },
          { term: 'Deceitfulness of sin', definition: 'Sin\u2019s power to lie to us, promising good while delivering slavery and death (Hebrews 3:13).' },
        ],
        crossRefs: ['Genesis 3:1-19', 'Psalm 51:1-5', 'Isaiah 53:6', 'John 8:34', 'Ephesians 2:1-3', 'James 1:14-15'],
        reflection: [
          'David said his sin was "against you, and you only" (Psalm 51:4) even though he had deeply wronged people. What does it mean that all sin is ultimately against God?',
          'Where do you see the serpent\u2019s three lies from Genesis 3 (doubt God\u2019s word, deny judgment, question his goodness) at work in your own temptations?',
          'How does the doctrine of total corruption \u2014 spiritual death, not mere sickness \u2014 change the way you view both evangelism and your own sanctification?',
          'What sin are you currently tolerating as "small"? What might it look like to deal with it today, while your heart is still soft?',
        ],
        application: `Practice the discipline of specific confession this week. Each evening, review your day before God using these prompts: Where did I doubt God\u2019s word? Where did I choose my way over his? Whom did I wrong? What good did I neglect? Write brief, honest entries \u2014 naming sins specifically, not "forgive my sins" in general. Then pray 1 John 1:9 slowly, receiving forgiveness as a promised fact, not a feeling. If a pattern emerges (anger, lust, dishonesty, pride), share it with a trusted Christian friend and ask them to check in weekly. Sin thrives in secrecy and dies in the light.`,
        prayer: `Holy and righteous God, I come with no excuses. I have sinned against you \u2014 in thought, word, and deed \u2014 and my heart is deceitful even about my own sin. Your word says the wages of my sin is death, and I deserve it. But your word also says the free gift of God is eternal life in Christ Jesus my Lord. Thank you for not leaving me dead in my trespasses. Break sin\u2019s deceitful power in me; give me a hatred of evil and a hunger for holiness. Search me, cleanse me, and make me alive. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-beg-4-deep-q1',
            type: 'mc',
            prompt: 'According to Romans 5:12, how did sin and death enter the world?',
            choices: ['Through Satan alone', 'Through one man (Adam), spreading to all because all sinned', 'Through the law of Moses', 'They have always existed'],
            answer: 'Through one man (Adam), spreading to all because all sinned',
            explanation: 'Adam\u2019s fall brought sin and death into the world, passed to all humanity.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-4-deep-q2',
            type: 'mc',
            prompt: 'Jeremiah 17:9 describes the human heart as...',
            choices: ['Basically good', 'Deceitful above all things and exceedingly corrupt', 'Neutral and unbiased', 'Incapable of love'],
            answer: 'Deceitful above all things and exceedingly corrupt',
            explanation: 'The heart deceives even itself \u2014 which is why we need God\u2019s word and Spirit to show us our true condition.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-4-deep-q3',
            type: 'tf',
            prompt: '"The wages of sin is death" means death is what our sin earns and deserves \u2014 while eternal life is God\u2019s free gift.',
            answer: 'True',
            explanation: 'Romans 6:23 contrasts earned wages (death) with the free gift (eternal life in Christ).',
            tags: ['theology'],
          },
          {
            id: 'path-beg-4-deep-q4',
            type: 'mc',
            prompt: 'In Genesis 3:15, God promises that the woman\u2019s "seed" will...',
            choices: ['Rule Egypt', 'Crush the serpent\u2019s head', 'Build a temple', 'Write the law'],
            answer: 'Crush the serpent\u2019s head',
            explanation: 'The first gospel promise: a coming Savior would defeat Satan \u2014 fulfilled in Christ.',
            tags: ['theology'],
          },
        ],
      },
      study: {
        minutes: 60,
        concept:
          'A full study of hamartiology: the definition, origin, extent, deceitfulness, and consequences of sin \u2014 ending at the foot of the cross where sin is decisively dealt with.',
        scripture: [
          {
            ref: 'Genesis 3:15',
            text: 'I will put enmity between you and the woman, and between your offspring and her offspring. He will bruise your head, and you will bruise his heel.',
          },
          {
            ref: 'Romans 3:10-12',
            text: 'As it is written, "There is no one righteous; no, not one. There is no one who understands. There is no one who seeks after God. They have all turned aside. They have together become unprofitable. There is no one who does good, no, not so much as one."',
          },
          {
            ref: 'Ephesians 2:1-5',
            text: 'You were made alive when you were dead in transgressions and sins... But God, being rich in mercy, for his great love with which he loved us, even when we were dead through our trespasses, made us alive together with Christ.',
          },
          {
            ref: 'Romans 6:23',
            text: 'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.',
          },
        ],
        teaching: `## 1. Defining Sin Biblically
Scripture\u2019s vocabulary for sin is rich, and each word reveals a facet. Chata (Hebrew) and hamartia (Greek): missing the mark. Pesha/transgression: crossing a boundary. Avon/iniquity: twistedness, perversity. Parabasis: overstepping. Together they paint sin as both failure and rebellion \u2014 falling short of God\u2019s glory and actively defying his rule. John\u2019s summary \u2014 "sin is lawlessness" (1 John 3:4) \u2014 captures the essence: living as if God\u2019s law does not bind us. And James adds the sin of omission: knowing the good and not doing it (James 4:17). A complete definition: sin is any lack of conformity to, or transgression of, the law of God \u2014 in thought, desire, word, deed, or neglect \u2014 rooted in a heart turned away from him.

## 2. The Fall: Genesis 3 Up Close
Read Genesis 3 slowly and watch the anatomy of temptation. The serpent begins with God\u2019s word ("Has God really said?") \u2014 because every fall starts by doubting what God said. Then he denies the consequence ("You won\u2019t surely die") and impugns God\u2019s motive ("God knows... you\u2019ll be like God"). Eve "saw that the tree was good for food, and that it was a delight to the eyes, and that the tree was to be desired to make one wise" \u2014 John later names the same trio: "the lust of the flesh, the lust of the eyes, and the pride of life" (1 John 2:16). She ate, gave to Adam, "and he ate." Immediately: shame (they knew they were naked), hiding (from the God they once walked with), blame-shifting ("the woman whom you gave me"). Consequences fall: pain, toil, broken relationships, exile, death. Yet verse 15 \u2014 the protoevangelium, "first gospel" \u2014 promises the serpent-crusher. And verse 21: God makes garments of skin \u2014 the first death in Scripture, covering human shame by divine provision. The whole gospel is in seed form: human rebellion, divine judgment, promised Savior, God-provided covering.

## 3. The Ruin: How Deep It Goes
Romans 1:18-3:20 is the Bible\u2019s most systematic diagnosis. All humanity \u2014 religious and irreligious, Jew and Gentile \u2014 stands guilty. The mind suppresses truth (1:18); the heart darkens (1:21); desires degrade (1:24-27); and the catalog of 3:10-18 leaves no room for exception. Total depravity means every faculty is corrupted: intellect, emotions, will, conscience, body. It does not mean utter depravity \u2014 people still do outwardly good things by God\u2019s restraining grace \u2014 but even our best deeds are tainted by mixed motives: "all our righteous deeds are like a filthy garment" (Isaiah 64:6). We are not drowning people who need a life preserver thrown; we are dead people who need resurrection (Ephesians 2:1). Only this diagnosis explains both the horrors of history and the stubbornness of our own hearts.

## 4. The Deceiver: How Sin Works in Us
James 1:14-15 maps temptation\u2019s progression: desire conceives, gives birth to sin, and sin "when it is full grown, brings forth death." Sin works by deceit (Hebrews 3:13): minimizing ("it\u2019s not that bad"), delaying ("I\u2019ll deal with it later"), comparing ("at least I\u2019m not like them"), and isolating (shame drives us from God and others \u2014 the Genesis 3 pattern). It enslaves progressively: what begins as choice becomes habit, habit becomes bondage (John 8:34; 2 Peter 2:19). This is why Scripture commands radical action: "If your right eye causes you to stumble, pluck it out" (Matthew 5:29) \u2014 not literal self-harm but ruthless removal of occasions for sin. Half-measures never defeated an enemy this cunning.

## 5. The Reckoning: Judgment Is Real
The Bible will not let us sentimentalize sin\u2019s end. "It is appointed for men to die once, and after this, judgment" (Hebrews 9:27). Jesus spoke of hell more than anyone in Scripture \u2014 not to frighten but to warn, like a doctor describing the disease plainly. God\u2019s judgment is the necessary expression of his holiness and justice; a God who did not judge evil would not be good. The coming judgment gives evangelism its urgency (2 Corinthians 5:11) and holiness its seriousness (1 Peter 1:17). Fleeing to Christ is not one option among many \u2014 it is the only refuge from the wrath to come (1 Thessalonians 1:10).

## 6. The Remedy: Behold the Lamb
Here the darkness breaks. Every thread of this lesson \u2014 the promised seed, the God-provided covering, the wages of death \u2014 converges at the cross. "God made him who knew no sin to be sin on our behalf; so that in him we might become the righteousness of God" (2 Corinthians 5:21). The holy God did not lower his standard; he met it himself, in Christ, in our place. Confession is the doorway: "If we confess our sins, he is faithful and righteous to forgive us the sins, and to cleanse us from all unrighteousness" (1 John 1:9). And the Spirit\u2019s ongoing work \u2014 conviction, repentance, sanctification \u2014 progressively frees us from sin\u2019s power even now. The one who hates his sin enough to bring it to Christ will find not condemnation but cleansing, not a lecture but a Father running to meet him (Luke 15:20).`,
        keyTerms: [
          { term: 'Hamartiology', definition: 'The theological study of sin \u2014 its nature, origin, extent, and consequences.' },
          { term: 'The Fall', definition: 'Adam and Eve\u2019s rebellion in Genesis 3, bringing sin and death into the world.' },
          { term: 'Protoevangelium', definition: '"First gospel": God\u2019s promise in Genesis 3:15 of a Savior who would crush the serpent.' },
          { term: 'Total depravity', definition: 'Sin\u2019s corruption of every human faculty; spiritually dead apart from grace.' },
          { term: 'Conviction', definition: 'The Holy Spirit\u2019s work of making us see our sin truly, leading to repentance.' },
        ],
        crossRefs: ['Genesis 3:1-24', 'Psalm 51', 'Isaiah 64:6', 'John 8:34', 'Romans 1:18-32', 'Hebrews 9:27', '1 John 1:5-10'],
        reflection: [
          'Trace your most common temptation through James 1:14-15 (desire \u2192 sin \u2192 death). At which stage do you usually wake up \u2014 and what would catching it earlier look like?',
          'How does seeing sin as cosmic treason against a holy God \u2014 rather than mere mistakes \u2014 change the way you confess?',
          'The first death in Scripture (Genesis 3:21) was God covering human shame. How does that preview the gospel?',
          'Why is the doctrine of hell \u2014 as hard as it is \u2014 actually necessary for God to be good? What would a God who never judged evil be like?',
          '2 Corinthians 5:21 describes the great exchange: Christ made sin for us, we made righteous in him. Put that exchange into your own words as a prayer of thanks.',
          'What would "ruthless removal" (Matthew 5:29) of your most persistent temptation look like this week \u2014 practically, specifically?',
        ],
        application: `This week, combine confession with replacement. Each evening: (1) Name specific sins from the day before God \u2014 no vague "forgive my sins." (2) For each, identify the lie it believed (about God\u2019s goodness, word, or judgment). (3) Write the truth of Scripture that answers the lie. (4) Plan one concrete "put off / put on" step (Ephesians 4:22-24): not just "stop looking at that" but "when tempted, I will ___ instead." Share your plan with a trusted believer who will ask you about it weekly. Sin loses power when it is named, answered with truth, replaced with obedience, and dragged into the light of fellowship.`,
        prayer: `O holy God, I have seen my sin in your mirror and I do not turn away. I confess: I have doubted your word, desired what you forbade, and hidden like Adam. My heart is deceitful; my best deeds are stained; the wages I have earned are death. But you promised a seed who would crush the serpent \u2014 and you kept your promise in Jesus, who was made sin for me so I might become your righteousness. I bring my specific sins to you now, trusting your promise: you are faithful and just to forgive and cleanse. Break sin\u2019s deceit in me. Teach me to hate what you hate and love what you love. Make me alive, keep me awake, and use even my story of rescue to point others to the Lamb. In his name, amen.`,
        quiz: [
          {
            id: 'path-beg-4-study-q1',
            type: 'mc',
            prompt: 'The "protoevangelium" (first gospel) is found in...',
            choices: ['Genesis 3:15', 'Exodus 20:1', 'Psalm 23:1', 'Matthew 1:1'],
            answer: 'Genesis 3:15',
            explanation: 'God\u2019s first promise of a Savior \u2014 the woman\u2019s seed crushing the serpent \u2014 given in the very chapter of the fall.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-4-study-q2',
            type: 'mc',
            prompt: 'James 1:14-15 describes temptation\u2019s progression as...',
            choices: ['Sin \u2192 desire \u2192 death', 'Desire conceives \u2192 gives birth to sin \u2192 sin brings forth death', 'Death \u2192 sin \u2192 desire', 'Desire \u2192 death \u2192 sin'],
            answer: 'Desire conceives \u2192 gives birth to sin \u2192 sin brings forth death',
            explanation: 'Temptation has stages \u2014 catching it at desire prevents the birth of sin and its deadly maturity.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-4-study-q3',
            type: 'tf',
            prompt: 'Total depravity means every person is as evil as they could possibly be.',
            answer: 'False',
            explanation: 'Total depravity means sin corrupts every part of our nature \u2014 not that everyone is as bad as possible (God\u2019s common grace restrains evil).',
            tags: ['theology'],
          },
          {
            id: 'path-beg-4-study-q4',
            type: 'mc',
            prompt: 'According to 2 Corinthians 5:21, the "great exchange" of the gospel is...',
            choices: ['Our good deeds for God\u2019s favor', 'Christ made sin for us, so we might become God\u2019s righteousness in him', 'Our money for blessings', 'Our suffering for others\u2019 salvation'],
            answer: 'Christ made sin for us, so we might become God\u2019s righteousness in him',
            explanation: 'The sinless one bore our sin; believing sinners receive his righteousness \u2014 grace upon grace.',
            tags: ['theology'],
          },
        ],
      },
    },
  },
];

const BEGINNER_C: LayeredLesson[] = [
  {
    id: 'path-beg-5',
    pathId: 'beginner',
    order: 5,
    title: 'What Is Salvation?',
    summary:
      'Salvation is God\u2019s rescue of sinners through Christ\u2019s death and resurrection \u2014 received by repentance and faith, never earned.',
    layers: {
      core: {
        minutes: 5,
        concept:
          'Salvation is God rescuing sinners from sin and death through Jesus\u2019 death and resurrection \u2014 received by turning from sin and trusting Christ, not by earning it.',
        scripture: [
          {
            ref: 'John 3:16',
            text: 'For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.',
          },
        ],
        teaching: `Salvation means rescue. The Bible\u2019s story is that humanity is lost \u2014 separated from God by sin, under his just judgment, unable to save itself \u2014 and God did what we could not: he came to save us.

The heart of it is John 3:16, the most famous verse in the Bible: "For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life." Notice who acts: God loved, God gave. Salvation starts with God, not us.

How is it received? Two words: repent and believe. Repent means turning away from sin and toward God \u2014 a change of mind, heart, and direction. Believe means trusting Jesus \u2014 not just agreeing he existed, but relying on his death and resurrection as your only hope. "If you will confess with your mouth that Jesus is Lord, and believe in your heart that God raised him from the dead, you will be saved" (Romans 10:9).

And it cannot be earned. Salvation is a gift \u2014 "not of works, that no one would boast" (Ephesians 2:9). You receive a gift with empty hands, not with payment.`,
        reflection: [
          'Have you personally turned from sin and trusted Christ \u2014 or is your faith still mostly ideas about God? What would it take to make it personal?',
          'Why do you think it\u2019s so hard for people to receive salvation as a free gift rather than trying to earn it?',
        ],
        application: `If you have never personally trusted Christ, you can today: turn from your sin, confess Jesus as Lord, and believe God raised him from the dead (Romans 10:9). Tell a Christian friend or pastor about your decision \u2014 faith was never meant to stay private. If you have trusted Christ, thank God today for your salvation specifically: name what he saved you from and what he saved you for.`,
        prayer: `Lord Jesus, I confess I am a sinner who cannot save myself. I turn from my sin and I trust you \u2014 your death for my sins, your resurrection for my hope. Be my Savior and my Lord. Thank you for the free gift of eternal life. Amen.`,
      },
      expanded: {
        minutes: 15,
        concept:
          'God saves sinners by grace through faith in Christ: repentance turns us from sin, faith unites us to Christ, and the result is forgiveness, new life, and unshakeable assurance.',
        scripture: [
          {
            ref: 'Ephesians 2:8-9',
            text: 'for by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast.',
          },
          {
            ref: 'Acts 4:12',
            text: 'There is salvation in no one else, for there is no other name under heaven that is given among men, by which we must be saved!',
          },
        ],
        teaching: `## Rescue, Not Self-Improvement
The Bible never presents salvation as God helping those who help themselves. We were "dead in transgressions" (Ephesians 2:1) \u2014 and dead people don\u2019t contribute to their rescue. Salvation is God\u2019s work from first to last: he planned it before creation (Ephesians 1:4), accomplished it at the cross, and applies it by his Spirit. Our part is to receive it. This is why Christianity is fundamentally different from every other religion: every other system says "do"; Christianity says "done" \u2014 "It is finished" (John 19:30).

## Repent and Believe
Jesus began his ministry with a two-word sermon: "Repent, and believe in the Good News" (Mark 1:15). Repentance (metanoia) is a change of mind that produces a change of direction \u2014 turning from sin the way you\u2019d turn from a cliff edge. It is not perfection (we still stumble) but a settled direction: away from self-rule, toward God. Faith is trust \u2014 leaning your whole weight on Christ. It has three elements: knowing the gospel facts, agreeing they are true, and personally relying on Christ alone. Demons know the facts and agree (James 2:19); saving faith goes further \u2014 it trusts.

## What Salvation Includes
Salvation is richer than "going to heaven." It includes justification \u2014 declared righteous before God, as if you\u2019d never sinned (Romans 5:1); forgiveness \u2014 sins removed "as far as the east is from the west" (Psalm 103:12); reconciliation \u2014 brought near to God as a friend, not just pardoned as a criminal (2 Corinthians 5:18); adoption \u2014 made God\u2019s child with full rights (John 1:12); new birth \u2014 made spiritually alive (John 3:3); and the gift of the Holy Spirit, God\u2019s down payment guaranteeing our future (Ephesians 1:13-14). Past, present, future: we have been saved, are being saved, and will be saved.

## No Other Name
Salvation is exclusive because the problem is universal and the price was infinite. "There is salvation in no one else" (Acts 4:12), and Jesus said, "No one comes to the Father, except through me" (John 14:6). This is not narrowness but honesty: if sin is as serious as the Bible says, only God himself could atone for it \u2014 and he did, in Christ. The exclusivity of the gospel is what makes its offer so urgent for the whole world.`,
        keyTerms: [
          { term: 'Repentance', definition: 'Turning from sin to God \u2014 a change of mind, heart, and direction (Mark 1:15).' },
          { term: 'Faith', definition: 'Trusting reliance on Christ alone for salvation \u2014 not mere intellectual agreement.' },
          { term: 'Justification', definition: 'God\u2019s declaration that a believing sinner is righteous, based on Christ\u2019s work (Romans 5:1).' },
          { term: 'Regeneration', definition: 'The new birth: God making a spiritually dead person alive (John 3:3; Titus 3:5).' },
        ],
        reflection: [
          'What is the difference between "trying to be good enough for God" and "repenting and believing"? Which pattern describes your life?',
          'Which aspect of salvation \u2014 justification, forgiveness, adoption, new birth \u2014 do you most need to savor right now?',
          'If salvation is truly by grace alone, how should that shape the way you share the gospel with others?',
        ],
        application: `Memorize Romans 10:9 this week and share your testimony \u2014 or the gospel \u2014 with one person. A simple outline: (1) My life before Christ (or what I understood about my need); (2) How I came to trust him; (3) The difference he has made. Keep it under three minutes. If you\u2019ve never been baptized since trusting Christ, talk to your pastor about taking that step of obedience \u2014 baptism is the Bible\u2019s appointed way of publicly professing faith (Acts 2:38).`,
        prayer: `Saving God, thank you for doing what I could never do. You planned my rescue, Christ accomplished it, and your Spirit opened my heart to receive it. I repent of my sin and I believe in Jesus \u2014 his death for me, his resurrection for my hope. Thank you for justifying me, forgiving me, adopting me, and making me new. Keep me trusting, keep me turning, keep me yours. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-beg-5-exp-q1',
            type: 'mc',
            prompt: 'According to Ephesians 2:8-9, we are saved...',
            choices: ['By grace through faith, not by works', 'By good works outweighing bad', 'By sincerity alone', 'By church attendance'],
            answer: 'By grace through faith, not by works',
            explanation: 'Salvation is "the gift of God, not of works, that no one would boast."',
            tags: ['theology'],
          },
          {
            id: 'path-beg-5-exp-q2',
            type: 'mc',
            prompt: 'Jesus summarized the required response to the gospel in Mark 1:15 as...',
            choices: ['Pray and fast', 'Repent and believe', 'Study and serve', 'Wait and hope'],
            answer: 'Repent and believe',
            explanation: '"Repent, and believe in the Good News" \u2014 turning from sin and trusting Christ.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-5-exp-q3',
            type: 'tf',
            prompt: 'Acts 4:12 teaches that salvation can be found in many names and many religions equally.',
            answer: 'False',
            explanation: '"There is salvation in no one else... no other name under heaven... by which we must be saved!"',
            tags: ['theology'],
          },
        ],
      },
      deep: {
        minutes: 30,
        concept:
          'The full scope of salvation: God\u2019s eternal plan, Christ\u2019s finished work, the Spirit\u2019s application \u2014 justification, adoption, sanctification, glorification \u2014 received by repentant faith and sealed with assurance.',
        scripture: [
          {
            ref: 'Titus 3:5',
            text: 'not by works of righteousness which we did ourselves, but according to his mercy, he saved us through the washing of regeneration and renewing by the Holy Spirit,',
          },
          {
            ref: 'Romans 5:1',
            text: 'Being therefore justified by faith, we have peace with God through our Lord Jesus Christ;',
          },
          {
            ref: '1 John 5:13',
            text: 'These things I have written to you who believe in the name of the Son of God, that you may know that you have eternal life, and that you may continue to believe in the name of the Son of God.',
          },
        ],
        teaching: `## Planned Before Time
Salvation did not begin at Bethlehem or even at the fall \u2014 it began in eternity. God "chose us in him before the foundation of the world" (Ephesians 1:4), and Christ was "foreknown... before the foundation of the world" as the Lamb (1 Peter 1:20). The cross was not God\u2019s plan B after Adam\u2019s failure; it was plan A from before creation. This means your salvation rests on God\u2019s eternal purpose, not on your fluctuating performance. What God planned before time, he will complete: "he who began a good work in you will complete it" (Philippians 1:6).

## Accomplished at the Cross
At the center of history stands a Roman cross where the eternal Son bore our sin. "He was pierced for our transgressions... the punishment that brought our peace was on him" (Isaiah 53:5). On the cross, God\u2019s justice and love met: justice, because sin was truly punished; love, because God himself bore it in Christ. Jesus\u2019 final word \u2014 "It is finished" (John 19:30) \u2014 is a cry of completion, not defeat. The debt is paid. The work is done. Nothing can be added to it, and nothing needs to be.

## Applied by the Spirit
The Spirit takes Christ\u2019s finished work and makes it ours. He convicts of sin (John 16:8), grants the new birth \u2014 "unless one is born anew, he can\u2019t see God\u2019s Kingdom" (John 3:3) \u2014 and produces repentance and faith in us. This is why no one can boast: even our believing is God\u2019s gift (Ephesians 2:8). The Spirit then seals us \u2014 "sealed with the promised Holy Spirit, who is the guarantee of our inheritance" (Ephesians 1:13-14). A seal marks ownership and security; God\u2019s own Spirit in you is his down payment that he will finish what he started.

## The Golden Chain: From Justification to Glorification
Paul traces salvation\u2019s unbreakable chain: "whom he predestined, those he also called. Whom he called, those he also justified. Whom he justified, those he also glorified" (Romans 8:30) \u2014 glorification in the past tense, so certain it is spoken of as done. Unpack the links: Justification \u2014 declared righteous the moment we believe (Romans 5:1), giving us peace with God. Adoption \u2014 brought into God\u2019s family with the Spirit crying "Abba, Father!" in our hearts (Galatians 4:6). Sanctification \u2014 progressively made holy in this life (1 Thessalonians 4:3). Glorification \u2014 finally made perfect, body and soul, at Christ\u2019s return (Romans 8:23). Salvation spans eternity past to eternity future, and every link is God\u2019s doing.

## Assurance: Knowing You Have Eternal Life
John wrote his first letter "that you may know that you have eternal life" (1 John 5:13) \u2014 know, not guess. Assurance rests on three legs: God\u2019s promise (his word cannot fail), Christ\u2019s finished work (nothing left to pay), and the Spirit\u2019s witness with our spirit (Romans 8:16) producing a changed life. Feelings fluctuate; facts don\u2019t. When doubts come \u2014 and they come to most believers \u2014 don\u2019t look inward at your faith\u2019s strength; look outward at Christ\u2019s sufficiency. The question is not "am I holding on tightly enough?" but "is he able to keep me?" \u2014 and "he is able to save to the uttermost" (Hebrews 7:25).`,
        keyTerms: [
          { term: 'Justification', definition: 'God\u2019s legal declaration that a believing sinner is righteous, through faith in Christ (Romans 5:1).' },
          { term: 'Adoption', definition: 'God making believers his children with full family rights (John 1:12; Galatians 4:6).' },
          { term: 'Sanctification', definition: 'The Spirit\u2019s ongoing work of making believers holy in practice (1 Thessalonians 4:3).' },
          { term: 'Glorification', definition: 'The final perfection of believers \u2014 body and soul \u2014 at Christ\u2019s return (Romans 8:30).' },
          { term: 'Assurance', definition: 'Confident knowledge of salvation, grounded in God\u2019s promise and Christ\u2019s work (1 John 5:13).' },
        ],
        crossRefs: ['John 1:12', 'John 10:28-29', 'Romans 8:1', 'Romans 8:30', 'Ephesians 1:4-14', 'Philippians 1:6', 'Hebrews 7:25'],
        reflection: [
          'If salvation was planned before creation and secured by Christ\u2019s finished work, what does that say about the security of a true believer?',
          'Which link in the "golden chain" (Romans 8:30) do you understand least well? How could you grow in grasping it?',
          'When doubts about your salvation come, do you tend to look inward (at your performance) or outward (at Christ)? What would change if you consistently looked outward?',
          'How does assurance of salvation \u2014 rightly understood \u2014 produce holiness rather than carelessness?',
        ],
        application: `Write out your own "assurance page" this week: (1) The promise \u2014 copy 1 John 5:13 and John 10:28-29 in your own handwriting. (2) The work \u2014 write two sentences on what Christ finished at the cross for you. (3) The evidence \u2014 list three ways the Spirit has changed you since you believed (desires, habits, loves). Keep this page in your Bible. When doubts come, read it aloud \u2014 preach the facts to your feelings. And if you lack assurance because you\u2019ve never truly repented and believed, settle it today: turn from sin, trust Christ, and tell someone.`,
        prayer: `Father, you chose me before the foundation of the world; Son, you finished my rescue at the cross; Spirit, you gave me new birth and sealed me as God\u2019s own. I was dead and you made me alive; I was guilty and you declared me righteous; I was a stranger and you adopted me as your child. Give me full assurance \u2014 not in my grip on you but in your grip on me. And make my saved life count: holy, fruitful, and bold for your glory. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-beg-5-deep-q1',
            type: 'mc',
            prompt: 'According to Ephesians 1:4, when did God choose believers in Christ?',
            choices: ['When they first believed', 'Before the foundation of the world', 'At their baptism', 'After they proved faithful'],
            answer: 'Before the foundation of the world',
            explanation: 'Salvation was planned in eternity \u2014 it rests on God\u2019s purpose, not our performance.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-5-deep-q2',
            type: 'mc',
            prompt: 'In Romans 8:30\u2019s "golden chain," which link is spoken of as already completed?',
            choices: ['Calling', 'Justification', 'Glorification', 'Predestination'],
            answer: 'Glorification',
            explanation: '"Whom he justified, those he also glorified" \u2014 past tense, so certain it is spoken of as done.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-5-deep-q3',
            type: 'tf',
            prompt: 'John wrote 1 John so that believers may know \u2014 not merely hope \u2014 that they have eternal life.',
            answer: 'True',
            explanation: '"These things I have written to you... that you may know that you have eternal life" (1 John 5:13).',
            tags: ['theology'],
          },
          {
            id: 'path-beg-5-deep-q4',
            type: 'mc',
            prompt: 'The Holy Spirit\u2019s sealing of believers (Ephesians 1:13-14) functions as...',
            choices: ['A reward for good behavior', 'God\u2019s down payment guaranteeing our future inheritance', 'A temporary blessing', 'A sign only apostles received'],
            answer: 'God\u2019s down payment guaranteeing our future inheritance',
            explanation: 'The Spirit is God\u2019s guarantee \u2014 his own pledge that he will complete our salvation.',
            tags: ['theology'],
          },
        ],
      },
      study: {
        minutes: 60,
        concept:
          'A full study of soteriology: the need, the plan, the accomplishment, the application, the order of salvation, assurance, and the mission it launches.',
        scripture: [
          {
            ref: 'Ephesians 2:1-10',
            text: 'You were made alive when you were dead in transgressions and sins... for by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast. For we are his workmanship, created in Christ Jesus for good works, which God prepared before that we would walk in them.',
          },
          {
            ref: '2 Corinthians 5:21',
            text: 'For him who knew no sin he made to be sin on our behalf; so that in him we might become the righteousness of God.',
          },
          {
            ref: 'Romans 8:29-30',
            text: 'For whom he foreknew, he also predestined to be conformed to the image of his Son... Whom he predestined, those he also called. Whom he called, those he also justified. Whom he justified, those he also glorified.',
          },
          {
            ref: 'John 10:28-29',
            text: 'I give eternal life to them. They will never perish, and no one will snatch them out of my hand. My Father who has given them to me is greater than all. No one is able to snatch them out of my Father\u2019s hand.',
          },
        ],
        teaching: `## 1. The Need: Dead, Not Merely Sick
Ephesians 2:1-3 gives the bleakest \u2014 and most necessary \u2014 diagnosis in Scripture: we were "dead in transgressions and sins," walking "according to the prince of the power of the air," "by nature children of wrath." Dead people do not need advice; they need resurrection. This is why every human attempt at self-salvation fails: morality, religion, sincerity, and effort are the twitching of a corpse, not the breathing of the living. Until we feel the weight of "children of wrath," grace will seem like a nice bonus rather than a desperate rescue. The bad news must be believed before the good news can be loved.

## 2. The Plan: Grace from Eternity
"But God..." \u2014 the two most hopeful words in the Bible (Ephesians 2:4). Salvation originates in God\u2019s eternal counsel: the Father chose, the Son agreed to come, the Spirit agreed to apply. Revelation pictures the Lamb "slain from the foundation of the world" (Revelation 13:8) \u2014 the cross was not an emergency measure but the eternal plan. This grounds our security: what God purposed before time cannot be undone by our failures in time. "He who began a good work in you will complete it until the day of Jesus Christ" (Philippians 1:6).

## 3. The Accomplishment: The Great Exchange
At the cross, the most concentrated act of divine love and justice in history took place. "For him who knew no sin he made to be sin on our behalf; so that in him we might become the righteousness of God" (2 Corinthians 5:21). Our sin was imputed to Christ; his righteousness is imputed to believers. He bore the curse (Galatians 3:13), satisfied divine justice (Romans 3:25-26), disarmed the powers (Colossians 2:15), and cried "It is finished" (John 19:30). Then the resurrection vindicated him and guarantees ours: he is "the first fruits of those who are asleep" (1 Corinthians 15:20). Every blessing of salvation flows from this finished, historical, objective work \u2014 outside of us before it is ever inside us.

## 4. The Application: The Spirit\u2019s Work and Our Response
The Spirit applies Christ\u2019s work through the preached word: he convicts (John 16:8), regenerates (John 3:5-8; Titus 3:5), and grants repentance and faith. Our response \u2014 repent and believe \u2014 is genuinely ours, yet entirely God\u2019s gift: "it has been granted to you... to believe" (Philippians 1:29). The classic "order of salvation": effectual calling \u2192 regeneration \u2192 conversion (repentance and faith) \u2192 justification \u2192 adoption \u2192 sanctification \u2192 perseverance \u2192 glorification. Each is God\u2019s work; our faith is the empty hand that receives, never the currency that purchases.

## 5. The Security: Held, Not Just Helped
Jesus promises: "I give eternal life to them. They will never perish, and no one will snatch them out of my hand" (John 10:28) \u2014 and the Father\u2019s hand holds Christ\u2019s hand. Paul asks, "Who shall separate us from the love of Christ?" and answers: nothing \u2014 "neither death, nor life... nor any other created thing" (Romans 8:35-39). True believers persevere not because they are strong but because God preserves them (Jude 1:24). This security does not produce carelessness but gratitude-driven holiness: those who know they are kept want to live worthy of the Keeper. Warnings in Scripture (Hebrews 6; 10) are God\u2019s means of keeping his people \u2014 they drive us to cling to Christ, which is exactly what the preserved do.

## 6. The Purpose: Saved for Good Works
Ephesians 2:10 is the often-forgotten finale: "we are his workmanship, created in Christ Jesus for good works, which God prepared before that we would walk in them." We are not saved by works, but we are saved for works \u2014 God has prepared specific good works for each believer to walk in. Salvation is not a ticket to heaven but a transfer of kingdoms (Colossians 1:13) into a life of fruitful service. The saved become servants, witnesses, and worshipers. Grace that does not change a life has not been understood \u2014 for "faith apart from works is dead" (James 2:26), not because works save, but because saving faith always works.`,
        keyTerms: [
          { term: 'Soteriology', definition: 'The theological study of salvation.' },
          { term: 'Imputation', definition: 'God crediting our sin to Christ and Christ\u2019s righteousness to believers (2 Corinthians 5:21).' },
          { term: 'Effectual calling', definition: 'God\u2019s sovereign summons that unfailingly brings sinners to Christ (Romans 8:30).' },
          { term: 'Perseverance', definition: 'True believers continuing in faith to the end, kept by God\u2019s preserving grace.' },
          { term: 'Ordo salutis', definition: 'Latin for "order of salvation": the logical sequence of God\u2019s saving acts.' },
        ],
        crossRefs: ['Isaiah 53:5-6', 'John 3:3-8', 'John 6:37-40', 'Romans 8:35-39', 'Galatians 3:13', 'Colossians 1:13-14', '1 Peter 1:3-5', 'Jude 1:24'],
        reflection: [
          'Why is it essential that Christ\u2019s work be finished and objective \u2014 outside of us \u2014 before it is ever applied inside us?',
          'How do you hold together God\u2019s sovereignty in salvation ("it has been granted to you to believe") with the genuine urgency of "repent and believe"?',
          'What is the difference between the security that produces holiness and the presumption that produces carelessness? How can you tell which one you have?',
          'Ephesians 2:10 says God prepared specific good works for you to walk in. What might some of yours be in this season of life?',
          'How would you explain to an unbelieving friend why Christianity\u2019s "done" is better news than every other religion\u2019s "do"?',
          'If someone asked you, "How can I know I\u2019m really saved?" \u2014 what would you say, using Scripture?',
        ],
        application: `This week, do two things. First, write a one-page "gospel brief" in your own words: the need (dead in sin), the provision (Christ\u2019s death and resurrection), the response (repent and believe), the result (forgiveness, new life, assurance). Practice saying it aloud in under three minutes. Second, identify one person in your life who needs this news \u2014 and pray for them daily by name, asking God for an open door (Colossians 4:3). Salvation received becomes salvation shared: "you will be witnesses to me" (Acts 1:8). The rescued become rescuers.`,
        prayer: `O God of salvation \u2014 Father who planned, Son who accomplished, Spirit who applied \u2014 I worship you. I was dead and you made me alive; I was condemned and you justified me; I was a stranger and you adopted me; I am being made holy and I will one day be glorified. Nothing in my hands I bring; simply to your cross I cling. Keep me by your power, assure me by your promises, and use me in your mission. Make my life a witness to the great exchange: Christ made sin for me, that I might become your righteousness in him. Until faith becomes sight, hold me fast \u2014 for no one can snatch me from your hand. In Jesus\u2019 mighty name, amen.`,
        quiz: [
          {
            id: 'path-beg-5-study-q1',
            type: 'mc',
            prompt: 'In the classic order of salvation (ordo salutis), what immediately precedes justification?',
            choices: ['Glorification', 'Conversion (repentance and faith)', 'Sanctification', 'Adoption'],
            answer: 'Conversion (repentance and faith)',
            explanation: 'Effectual calling \u2192 regeneration \u2192 conversion (repentance and faith) \u2192 justification \u2192 adoption \u2192 sanctification \u2192 glorification.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-5-study-q2',
            type: 'tf',
            prompt: 'Ephesians 2:10 teaches that believers are saved FOR good works that God prepared beforehand \u2014 though not BY those works.',
            answer: 'True',
            explanation: 'Not saved by works, but saved for works: "created in Christ Jesus for good works, which God prepared before."',
            tags: ['theology'],
          },
          {
            id: 'path-beg-5-study-q3',
            type: 'mc',
            prompt: 'According to John 10:28-29, the security of believers rests on...',
            choices: ['Their strong grip on Christ', 'Christ\u2019s hand and the Father\u2019s hand holding them', 'Their church membership', 'Their consistent feelings'],
            answer: 'Christ\u2019s hand and the Father\u2019s hand holding them',
            explanation: '"No one will snatch them out of my hand... No one is able to snatch them out of my Father\u2019s hand."',
            tags: ['theology'],
          },
          {
            id: 'path-beg-5-study-q4',
            type: 'mc',
            prompt: '"Imputation" in salvation means...',
            choices: ['God ignores our sin', 'God credits our sin to Christ and Christ\u2019s righteousness to believers', 'We must pay for our own sin', 'Sin is transferred to other people'],
            answer: 'God credits our sin to Christ and Christ\u2019s righteousness to believers',
            explanation: 'The great exchange of 2 Corinthians 5:21: our sin to him, his righteousness to us.',
            tags: ['theology'],
          },
        ],
      },
    },
  },
  {
    id: 'path-beg-6',
    pathId: 'beginner',
    order: 6,
    title: 'What Is Grace?',
    summary:
      'Grace is God\u2019s undeserved favor \u2014 saving us freely in Christ, sustaining us daily, and teaching us to live godly lives.',
    layers: {
      core: {
        minutes: 5,
        concept:
          'Grace is God giving us what we don\u2019t deserve: salvation as a free gift in Christ, plus daily help and strength for living.',
        scripture: [
          {
            ref: 'Ephesians 2:8',
            text: 'for by grace you have been saved through faith, and that not of yourselves; it is the gift of God,',
          },
        ],
        teaching: `Grace is one of the most beautiful words in the Bible. It means God\u2019s undeserved favor \u2014 his kindness toward people who have done nothing to earn it and everything to forfeit it. "For by grace you have been saved through faith, and that not of yourselves; it is the gift of God" (Ephesians 2:8).

Think of it this way: justice is getting what we deserve. Mercy is not getting what we deserve. Grace is getting what we don\u2019t deserve \u2014 forgiveness, adoption, eternal life, all freely given in Christ. We were spiritually bankrupt; God credited Christ\u2019s riches to our account.

But grace is not only how we are saved \u2014 it is how we live. God\u2019s grace forgives our past, empowers our present ("My grace is sufficient for you," 2 Corinthians 12:9), and guarantees our future. And grace trains us: it "instructs us... that, denying ungodliness and worldly lusts, we would live soberly, righteously, and godly" (Titus 2:12). True grace never leaves us where it found us.`,
        reflection: [
          'What is the difference between justice, mercy, and grace? Which one describes how God has treated you in Christ?',
          'Can you think of a time you received kindness you clearly didn\u2019t deserve? How does that small picture point to God\u2019s grace?',
        ],
        application: `Today, practice receiving: spend five minutes thanking God for three specific gifts of grace \u2014 things you did not earn (salvation, a relationship, daily provision, strength in weakness). Then practice giving: show one act of undeserved kindness to someone today \u2014 forgive a debt, encourage the overlooked, serve without being asked. "Freely you received, so freely give" (Matthew 10:8).`,
        prayer: `Gracious God, I bring you empty hands and a full heart. Thank you for saving me by grace \u2014 not by my works, so I cannot boast, only worship. Thank you that your grace is sufficient for my weakness today. Teach me to live by grace and to give grace freely. In Jesus\u2019 name, amen.`,
      },
      expanded: {
        minutes: 15,
        concept:
          'Grace saves, sustains, and trains: God\u2019s free favor in Christ justifies the ungodly, strengthens the weak, and produces godly living.',
        scripture: [
          {
            ref: 'Ephesians 2:8-9',
            text: 'for by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast.',
          },
          {
            ref: '2 Corinthians 12:9',
            text: 'He has said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Most gladly therefore I will rather glory in my weaknesses, that the power of Christ may rest on me.',
          },
        ],
        teaching: `## Grace That Saves
Paul\u2019s logic in Ephesians 2 is airtight: we were dead (verse 1), God made us alive (verse 5), "for by grace you have been saved" (verse 8) \u2014 and lest we smuggle in our contribution, "not of yourselves... not of works, that no one would boast." Grace and works are mutually exclusive as grounds of salvation: "if by grace, then it is no longer of works; otherwise grace is no longer grace" (Romans 11:6). You cannot earn a gift; the moment you try, it stops being grace. This is why boasting is excluded \u2014 and why worship is the only fitting response.

## Grace That Sustains
Paul begged God three times to remove his "thorn in the flesh." God\u2019s answer was not removal but grace: "My grace is sufficient for you, for my power is made perfect in weakness" (2 Corinthians 12:9). Notice \u2014 God\u2019s power shows up most clearly not in our strength but in our weakness. Grace is not just the door of the Christian life; it is the air we breathe every day. We come "with boldness to the throne of grace, that we may receive mercy and find grace for help in time of need" (Hebrews 4:16) \u2014 and there is always a time of need.

## Grace That Trains
Here is the surprise: grace is a teacher. "For the grace of God has appeared, bringing salvation to all men, instructing us to the intent that, denying ungodliness and worldly lusts, we would live soberly, righteously, and godly in this present age" (Titus 2:11-12). Grace does not say "sin doesn\u2019t matter"; it says "sin has been dealt with \u2014 now live like someone who\u2019s been rescued." Anyone who uses grace as an excuse for sin has not understood grace at all: "Shall we continue in sin, that grace may abound? May it never be!" (Romans 6:1-2). True grace produces gratitude, and gratitude produces obedience.

## Grace Upon Grace
John says, "From his fullness we all received grace upon grace" (John 1:16) \u2014 literally "grace in place of grace," wave after wave, like breakers on a shore. You will never exhaust it. Yesterday\u2019s grace does not cover today\u2019s need \u2014 but today\u2019s grace is already waiting: "his mercies are new every morning" (Lamentations 3:23). The Christian life is learning to live as a perpetual receiver who becomes a channel: "Freely you received, so freely give" (Matthew 10:8).`,
        keyTerms: [
          { term: 'Grace', definition: 'God\u2019s undeserved favor \u2014 giving sinners what they could never earn and do not deserve.' },
          { term: 'Mercy', definition: 'God withholding the punishment we deserve.' },
          { term: 'Justice', definition: 'God giving what is deserved \u2014 what our sin earned apart from Christ.' },
          { term: 'Common grace', definition: 'God\u2019s kindness to all people: sun, rain, beauty, conscience, restrained evil (Matthew 5:45).' },
        ],
        reflection: [
          'Romans 11:6 says grace and works are mutually exclusive as the basis of salvation. Where do you still catch yourself trying to earn God\u2019s favor?',
          'How does "my power is made perfect in weakness" reframe the weakness or limitation you most want removed?',
          'What is the difference between using grace as an excuse for sin and letting grace train you toward godliness?',
        ],
        application: `Identify one area where you\u2019ve been striving to earn God\u2019s approval (performance, perfectionism, comparison) \u2014 and consciously rest this week: when the striving thought comes, answer it with Ephesians 2:8-9 out loud. Then identify one "thorn" \u2014 a weakness, limitation, or unanswered prayer \u2014 and instead of only asking for removal, ask: "Lord, show me how your power is made perfect in this weakness." Journal what he shows you.`,
        prayer: `Father of grace, I confess I am a striver \u2014 always trying to earn what you long to give. Forgive my works-righteousness. Thank you that my salvation rests on grace alone, from first to last. Thank you that your grace is sufficient for my weakness \u2014 that your power shines brightest where I am weakest. Train me by your grace: teach me to deny ungodliness and live godly, not from fear but from gratitude. Make me a channel of grace to others. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-beg-6-exp-q1',
            type: 'mc',
            prompt: 'Which best defines "grace"?',
            choices: ['Getting what we deserve', 'God\u2019s undeserved favor toward sinners', 'A feeling of gratitude', 'Natural talent'],
            answer: 'God\u2019s undeserved favor toward sinners',
            explanation: 'Grace is God giving what we don\u2019t deserve \u2014 supremely, salvation in Christ.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-6-exp-q2',
            type: 'mc',
            prompt: 'When Paul asked three times for his thorn to be removed, God answered...',
            choices: ['"Yes, immediately"', '"My grace is sufficient for you"', '"Try harder"', '"You lack faith"'],
            answer: '"My grace is sufficient for you"',
            explanation: 'God\u2019s power is made perfect in weakness \u2014 grace sustains where strength fails (2 Corinthians 12:9).',
            tags: ['theology'],
          },
          {
            id: 'path-beg-6-exp-q3',
            type: 'tf',
            prompt: 'According to Titus 2:11-12, God\u2019s grace instructs believers to deny ungodliness and live godly lives.',
            answer: 'True',
            explanation: 'Grace is a teacher: it trains the saved toward sober, righteous, godly living.',
            tags: ['theology'],
          },
        ],
      },
      deep: {
        minutes: 30,
        concept:
          'Grace in all its fullness: sovereign and free, sufficient for weakness, opposed to earning yet productive of holiness \u2014 the heartbeat of the Christian life.',
        scripture: [
          {
            ref: 'Romans 11:6',
            text: 'And if by grace, then it is no longer of works; otherwise grace is no longer grace.',
          },
          {
            ref: 'Hebrews 4:16',
            text: 'Let us therefore draw near with boldness to the throne of grace, that we may receive mercy and find grace for help in time of need.',
          },
          {
            ref: 'Titus 2:11-12',
            text: 'For the grace of God has appeared, bringing salvation to all men, instructing us to the intent that, denying ungodliness and worldly lusts, we would live soberly, righteously, and godly in this present age;',
          },
        ],
        teaching: `## Grace Is Free \u2014 or It Isn\u2019t Grace
Paul draws the sharpest line in Romans 11:6: "if by grace, then it is no longer of works; otherwise grace is no longer grace." Grace and wage-earning are different economies. A wage is owed; a gift is free. The moment we add "...but you must also..." to Christ\u2019s finished work as a condition of salvation, we have left grace behind. This is why the Reformation\u2019s cry \u2014 sola gratia, "by grace alone" \u2014 mattered enough to divide Christendom: it protects the freeness of God\u2019s favor. Examine your heart: do you relate to God as an employee hoping for a bonus, or as a child receiving an inheritance? One exhausts; the other liberates.

## Grace Is Sovereign
Grace is not God responding to our worth; it is God acting from his own kind intention: "according to the good pleasure of his will" (Ephesians 1:5). He loved us "while we were yet sinners" (Romans 5:8) \u2014 not after we cleaned up. This offends our pride and heals our despair simultaneously. It offends pride: there is nothing in us that attracted his favor. It heals despair: there is nothing in us that can repel it, either. If grace depended on our loveliness, we\u2019d never be sure we were lovely enough. Because it depends on his character, we can rest.

## Grace Is Sufficient for Today
We tend to treat grace as past-tense (saved by grace) and future-tense (going to heaven by grace) while living the present by grit. But Paul\u2019s thorn teaches present-tense grace: "My grace is sufficient for you" \u2014 present, ongoing, enough. Hebrews invites us to "draw near with boldness to the throne of grace" for "help in time of need" (Hebrews 4:16) \u2014 and need is now. Parenting, temptation, grief, decisions, exhaustion: grace is not just forgiveness for yesterday\u2019s sins but strength for today\u2019s duties. "He gives more grace" (James 4:6) \u2014 to the humble, in the moment, for the task.

## Grace Produces What Law Demands
Here is the paradox: the law commands holiness but gives no power; grace gives no condemnation and produces holiness. "Sin will not have dominion over you, for you are not under law, but under grace" (Romans 6:14). Why? Because grace changes the heart\u2019s engine from fear to love. The law says "do this or else"; grace says "this is who you now are \u2014 live like it." Titus 2:11-12 shows grace as instructor, training us to deny ungodliness. The most godly people are not the most frightened of punishment but the most amazed by grace. Legalism produces either pride ("I\u2019m doing well") or despair ("I\u2019m failing"); grace produces gratitude, and gratitude produces obedience that law never could.

## Grace Received Becomes Grace Given
Jesus ties the two inseparably: "Forgive us our debts, as we also forgive our debtors" (Matthew 6:12), and the parable of the unforgiving servant warns that grace hoarded becomes grace forfeited (Matthew 18:23-35). We are most like God when we give what isn\u2019t deserved: forgiving enemies, serving the ungrateful, loving the difficult. "Be kind to one another, tenderhearted, forgiving each other, just as God also in Christ forgave you" (Ephesians 4:32). The vertical always creates the horizontal. If God\u2019s grace has truly reached you, it will leak out of you.`,
        keyTerms: [
          { term: 'Sola gratia', definition: '"By grace alone": salvation is entirely God\u2019s free gift, not a cooperation of grace plus human merit.' },
          { term: 'Common grace', definition: 'God\u2019s goodness to all humanity: rain, beauty, conscience, civil order (Matthew 5:45).' },
          { term: 'Saving grace', definition: 'God\u2019s favor that regenerates, justifies, and keeps believers \u2014 given only in Christ.' },
          { term: 'Legalism', definition: 'Trying to earn God\u2019s favor or be justified by rule-keeping \u2014 the opposite of grace.' },
        ],
        crossRefs: ['Genesis 6:8', 'Exodus 34:6', 'Lamentations 3:22-23', 'John 1:16', 'Romans 5:8', 'James 4:6'],
        reflection: [
          'Where in your life are you still operating in the "wage economy" with God \u2014 trying to earn what he gives freely? What would resting in grace look like there?',
          'How does the sovereignty of grace (given while we were sinners) simultaneously humble pride and comfort despair?',
          'What "thorn" are you asking God to remove? How might you pray differently in light of "my grace is sufficient for you"?',
          'Is there someone you\u2019re withholding grace from \u2014 forgiveness, kindness, patience? What does the parable of the unforgiving servant say to you?',
        ],
        application: `Practice a "grace audit" this week. Each evening, list: (1) One way you experienced undeserved grace today (a kindness, strength in weakness, a temptation resisted). (2) One way you extended grace to someone else. (3) One moment you slipped into earning-mode \u2014 and the truth that answers it. End each audit by praying Hebrews 4:16, boldly approaching the throne of grace for tomorrow\u2019s needs in advance. Watch how consciously tracking grace multiplies gratitude \u2014 and how gratitude quietly starves both pride and despair.`,
        prayer: `God of all grace, I confess my default is earning \u2014 I keep trying to pay for what you give free. Forgive my legalism, my pride in my performance, my despair in my failure. Thank you that your grace is sovereign: you loved me while I was still a sinner. Thank you that it is sufficient: your power is made perfect in my weakness. Thank you that it trains me: teaching me to deny ungodliness and live godly from gratitude, not fear. Make me a person so full of received grace that it spills onto everyone I meet. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-beg-6-deep-q1',
            type: 'mc',
            prompt: 'Romans 11:6 teaches that grace and works as the basis of salvation are...',
            choices: ['Meant to be combined', 'Mutually exclusive \u2014 otherwise grace is no longer grace', 'The same thing', 'Both unnecessary'],
            answer: 'Mutually exclusive \u2014 otherwise grace is no longer grace',
            explanation: 'A gift stops being a gift the moment it must be earned \u2014 grace and wage-earning are different economies.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-6-deep-q2',
            type: 'mc',
            prompt: 'According to Romans 6:14, why will sin not dominate believers?',
            choices: ['Because they try harder', 'Because they are not under law but under grace', 'Because they avoid temptation', 'Because they are naturally good'],
            answer: 'Because they are not under law but under grace',
            explanation: 'Grace changes the heart\u2019s engine from fear to love \u2014 producing the holiness law demands but cannot give.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-6-deep-q3',
            type: 'tf',
            prompt: 'The parable of the unforgiving servant (Matthew 18) teaches that receiving God\u2019s grace obligates us to extend grace to others.',
            answer: 'True',
            explanation: 'Grace hoarded becomes grace forfeited \u2014 the forgiven must forgive (Ephesians 4:32).',
            tags: ['theology'],
          },
          {
            id: 'path-beg-6-deep-q4',
            type: 'mc',
            prompt: '"Sola gratia" means...',
            choices: ['Grace plus works', 'By grace alone', 'Grace for apostles only', 'Grace after death'],
            answer: 'By grace alone',
            explanation: 'Salvation is entirely God\u2019s free gift \u2014 the Reformation\u2019s guardrail around grace\u2019s freeness.',
            tags: ['theology'],
          },
        ],
      },
      study: {
        minutes: 60,
        concept:
          'A full study of grace: its meaning, its freeness, its sovereignty, its sufficiency, its training power, and its mission \u2014 from eternity past to the new creation.',
        scripture: [
          {
            ref: 'Ephesians 1:5-8',
            text: 'having predestined us for adoption as children through Jesus Christ to himself, according to the good pleasure of his will, to the praise of the glory of his grace, which he freely gave to us in the Beloved, in whom we have our redemption through his blood, the forgiveness of our trespasses, according to the riches of his grace,',
          },
          {
            ref: 'Romans 5:20-21',
            text: 'The law came in that the trespass might abound; but where sin abounded, grace abounded more exceedingly, that as sin reigned in death, even so grace might reign through righteousness to eternal life through Jesus Christ our Lord.',
          },
          {
            ref: '1 Corinthians 15:10',
            text: 'But by the grace of God I am what I am. His grace which was given to me was not futile, but I worked more than all of them; yet not I, but the grace of God which was with me.',
          },
          {
            ref: 'Revelation 22:21',
            text: 'The grace of the Lord Jesus Christ be with all the saints. Amen.',
          },
        ],
        teaching: `## 1. What Grace Is \u2014 and Isn\u2019t
Grace (charis) is God\u2019s free, undeserved favor \u2014 his kind disposition toward the ill-deserving, expressed in giving. Distinguish it carefully: justice gives what is deserved; mercy withholds what is deserved; grace gives what is not deserved. Patience delays what is deserved. All are true of God; grace is the word for his giving heart. Grace is not a substance God dispenses, not a mere attitude, and not opposed to effort \u2014 it is opposed to earning. "By the grace of God I am what I am... I worked more than all of them; yet not I, but the grace of God which was with me" (1 Corinthians 15:10): grace-fueled effort is the Christian norm. We work, but grace works in our working.

## 2. Grace in the Old Testament
Grace is not a New Testament invention. Noah "found grace in Yahweh\u2019s eyes" (Genesis 6:8) \u2014 the first mention of grace, given to a man in a wicked generation. God\u2019s self-revelation to Moses centers on grace: "merciful and gracious... abundant in loving kindness" (Exodus 34:6). The entire sacrificial system was grace \u2014 God providing a way for sinners to approach. The psalms swim in it: "his loving kindness endures forever" (Psalm 136, twenty-six times). Jonah knew God as "gracious... merciful, slow to anger, and abundant in loving kindness" \u2014 and resented it when shown to Nineveh (Jonah 4:2). From Eden\u2019s garments of skin to the prophets\u2019 promises, the Old Testament is grace from cover to cover, preparing for grace incarnate.

## 3. Grace Incarnate: Jesus
" The Word became flesh... full of grace and truth" (John 1:14), and "from his fullness we all received grace upon grace" (John 1:16). Jesus is grace with a face. Watch him with sinners: the woman caught in adultery (John 8) \u2014 no condemnation, plus "go and sin no more"; Zacchaeus the extortionist (Luke 19) \u2014 salvation coming to his house over dinner; the thief on the cross (Luke 23) \u2014 paradise today, no time for works. His harshest words were for the graceless \u2014 Pharisees who "trusted in themselves that they were righteous" (Luke 18:9). The gospel is not advice for the worthy but news for the unworthy, embodied in a Savior who touched lepers and ate with sinners.

## 4. The Mechanics: How Grace Saves
Ephesians 2:8-9 is the engine room: "by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works." Grace is the source, faith the instrument, Christ the ground, glory God\u2019s aim. Faith itself is grace\u2019s gift \u2014 we believe because God opens hearts (Acts 16:14). Justification is by grace (Romans 3:24); election is "according to the good pleasure of his will, to the praise of the glory of his grace" (Ephesians 1:5-6) \u2014 note the purpose: the praise of grace\u2019s glory. Heaven\u2019s song will be "Worthy is the Lamb" (Revelation 5:12), not "worthy are we." Grace excludes boasting absolutely \u2014 which is precisely why it produces the deepest worship.

## 5. Grace for the Long Obedience
The Christian life is not grace at conversion followed by self-effort after. "Are you so foolish? Having begun in the Spirit, are you now completed in the flesh?" (Galatians 3:3). We stand in grace (Romans 5:2), grow in grace (2 Peter 3:18), are strengthened by grace (2 Timothy 2:1), serve by grace (1 Peter 4:10), suffer by grace (2 Corinthians 12:9), and give by grace (2 Corinthians 8:7). Every verb of the Christian life takes grace as its fuel. Practically: preach the gospel to yourself daily (you are still a sinner, still loved, still kept); come boldly to the throne of grace (Hebrews 4:16) \u2014 boldly, because it is a throne of grace; and let gratitude, not guilt, drive your obedience. The most dangerous moment is not failure but self-sufficiency \u2014 "God resists the proud, but gives grace to the humble" (James 4:6).

## 6. Amazing Grace: From Eternity to Eternity
Trace grace\u2019s arc: chosen by grace before time (Ephesians 1:4), redeemed by grace at the cross (Ephesians 1:7), called by grace in time (Galatians 1:15), kept by grace each day (1 Peter 5:10), and crowned by grace in eternity \u2014 where "grace might reign through righteousness to eternal life" (Romans 5:21). The Bible\u2019s final prayer is fitting: "The grace of the Lord Jesus Christ be with all the saints. Amen" (Revelation 22:21). From "In the beginning God" to the last amen, Scripture is the story of grace \u2014 God\u2019s free favor pursuing rebels, at infinite cost to himself, to make them sons and daughters forever. Eternity will not exhaust it: we will spend forever discovering new depths of "the riches of his grace."`,
        keyTerms: [
          { term: 'Grace (charis)', definition: 'God\u2019s free, undeserved favor toward sinners, supremely shown in Christ.' },
          { term: 'Sola gratia', definition: '"By grace alone" \u2014 salvation is entirely God\u2019s gift, excluding all boasting.' },
          { term: 'Common grace', definition: 'God\u2019s kindness to all people, believer and unbeliever alike.' },
          { term: 'Prevenient grace', definition: 'Grace that goes before: God\u2019s initiating work that enables sinners to respond.' },
          { term: 'Means of grace', definition: 'The appointed channels through which God gives grace: word, prayer, sacraments, fellowship.' },
        ],
        crossRefs: ['Genesis 6:8', 'Psalm 103:8-14', 'Jonah 4:2', 'Luke 15:11-32', 'John 1:14-16', 'Galatians 3:3', 'Ephesians 1:3-8', '2 Peter 3:18'],
        reflection: [
          'Trace "grace" through the Old Testament (Noah, Exodus 34, the sacrifices, the psalms). How does this correct the idea that the Old Testament is "law" and the New Testament is "grace"?',
          '1 Corinthians 15:10 holds grace and hard work together. What is the difference between grace-fueled effort and fleshly striving \u2014 in your experience?',
          'Why does grace exclude boasting (Ephesians 2:9) \u2014 and why is that exclusion actually good news for the worst sinner?',
          'Which is your greater danger right now: trying to earn God\u2019s favor, or presuming on it? How does true grace address each?',
          'If heaven\u2019s song is "Worthy is the Lamb" rather than "worthy are we," what should earth\u2019s worship \u2014 and your daily attitude \u2014 sound like?',
          'Who in your life most needs to hear about grace from you \u2014 the proud who need humbling, or the broken who need hope?',
        ],
        application: `For the next 30 days, begin each morning with a two-minute "gospel reset": speak aloud \u2014 (1) "I am a sinner saved by grace alone" (Ephesians 2:8); (2) "His grace is sufficient for today" (2 Corinthians 12:9); (3) "I will work hard today, yet not I, but the grace of God with me" (1 Corinthians 15:10). Then end each day noting one grace received and one grace given. At month\u2019s end, review: you will have a written record of grace upon grace \u2014 wave after wave. Share the practice with one other believer; grace multiplies when it\u2019s spoken.`,
        prayer: `O God of all grace \u2014 who chose me before time, redeemed me at infinite cost, called me by your Spirit, and keeps me day by day \u2014 I am what I am by your grace alone. Forgive my earning, my striving, my pride, my presumption. Let your grace be sufficient for my weakness today; let it train me toward godliness; let it make me hardworking yet humble, confident yet dependent. Where sin abounded in me, let grace abound much more. Make me a channel: freely I have received, freely let me give \u2014 until the day grace reigns fully and I join the song: worthy is the Lamb. The grace of the Lord Jesus Christ be with me \u2014 amen.`,
        quiz: [
          {
            id: 'path-beg-6-study-q1',
            type: 'mc',
            prompt: 'The first mention of "grace" in the Bible (Genesis 6:8) concerns...',
            choices: ['Moses at the burning bush', 'Noah finding grace in God\u2019s eyes in a wicked generation', 'David and Goliath', 'The building of the temple'],
            answer: 'Noah finding grace in God\u2019s eyes in a wicked generation',
            explanation: 'Grace appears from Genesis onward \u2014 not a New Testament invention.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-6-study-q2',
            type: 'mc',
            prompt: 'In Ephesians 2:8-9, faith is best understood as...',
            choices: ['A work that earns salvation', 'The instrument (empty hand) by which we receive grace\u2019s gift', 'Unnecessary for salvation', 'The same as optimism'],
            answer: 'The instrument (empty hand) by which we receive grace\u2019s gift',
            explanation: 'Grace is the source, faith the receiving instrument \u2014 itself "not of yourselves... the gift of God."',
            tags: ['theology'],
          },
          {
            id: 'path-beg-6-study-q3',
            type: 'tf',
            prompt: 'Galatians 3:3 warns that having begun in the Spirit, we must not try to be "completed in the flesh" \u2014 the Christian life continues by grace, not self-effort.',
            answer: 'True',
            explanation: 'Grace is not just the door but the whole house: we stand, grow, serve, and suffer by grace.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-6-study-q4',
            type: 'mc',
            prompt: 'The Bible\u2019s final verse (Revelation 22:21) is...',
            choices: ['A warning of judgment', 'A prayer for grace to be with all the saints', 'A genealogy', 'A new commandment'],
            answer: 'A prayer for grace to be with all the saints',
            explanation: 'Scripture opens with God creating and closes with grace prayed over his people \u2014 grace from first to last.',
            tags: ['theology'],
          },
        ],
      },
    },
  },
];

const BEGINNER_D: LayeredLesson[] = [
  {
    id: 'path-beg-7',
    pathId: 'beginner',
    order: 7,
    title: 'What Is Faith?',
    summary:
      'Faith is trusting reliance on God and his promises \u2014 believing what he says and acting on it, supremely in Christ for salvation.',
    layers: {
      core: {
        minutes: 5,
        concept:
          'Faith is trusting God \u2014 taking him at his word and relying on Christ alone for salvation and for daily life.',
        scripture: [
          {
            ref: 'Hebrews 11:1',
            text: 'Now faith is assurance of things hoped for, proof of things not seen.',
          },
        ],
        teaching: `Faith is one of Christianity\u2019s most used \u2014 and most misunderstood \u2014 words. It is not wishful thinking, positive vibes, or believing hard enough to make things happen. The Bible defines it plainly: "faith is assurance of things hoped for, proof of things not seen" (Hebrews 11:1). Faith is confident trust in God based on who he is and what he has promised.

Think of sitting in a chair: you don\u2019t just believe chairs exist \u2014 you put your weight on one. Saving faith puts its weight on Christ: knowing the gospel, agreeing it\u2019s true, and personally relying on Jesus\u2019 death and resurrection as your only hope. "By grace you have been saved through faith" (Ephesians 2:8) \u2014 faith is the hand that receives the gift.

And faith doesn\u2019t stop at conversion. We "walk by faith, not by sight" (2 Corinthians 5:7) \u2014 trusting God\u2019s promises in daily decisions, difficulties, and darkness. Faith grows by feeding on God\u2019s word: "faith comes by hearing, and hearing by the word of God" (Romans 10:17).`,
        reflection: [
          'What\u2019s the difference between believing facts about God and actually trusting him? Where are you still "standing next to the chair" instead of sitting down?',
          'What is one promise of God you find hard to believe right now? What would trusting it change?',
        ],
        application: `Pick one specific worry you\u2019re carrying and deliberately "put your weight" on God\u2019s promise about it: find a relevant verse (e.g., Philippians 4:6-7 for anxiety, Proverbs 3:5-6 for decisions), write it on a card, and pray it back to God each morning this week. Faith grows by acting on God\u2019s word \u2014 so take one concrete step of obedience you\u2019ve been postponing, trusting him with the outcome.`,
        prayer: `Faithful God, I believe \u2014 help my unbelief. Thank you that faith is not my achievement but your gift, and that even small faith in a great God is enough. Teach me to take you at your word: to trust your promises in the dark as well as the light, and to put my full weight on Christ alone. Grow my faith as I feed on your word. In Jesus\u2019 name, amen.`,
      },
      expanded: {
        minutes: 15,
        concept:
          'Biblical faith is confident trust in God\u2019s character and promises \u2014 it saves, it works, it endures \u2014 and it grows through God\u2019s word and tested obedience.',
        scripture: [
          {
            ref: 'Hebrews 11:1',
            text: 'Now faith is assurance of things hoped for, proof of things not seen.',
          },
          {
            ref: 'Hebrews 11:6',
            text: 'Without faith it is impossible to be well-pleasing to him, for he who comes to God must believe that he exists, and that he is a rewarder of those who seek him.',
          },
        ],
        teaching: `## What Faith Is
Hebrews 11:1 gives the classic definition: faith is "assurance of things hoped for, proof of things not seen." Notice \u2014 faith is not blind. It is assurance and proof: a confident conviction based on God\u2019s trustworthy character and record. We trust God about the unseen future because of what we\u2019ve seen of him in the past \u2014 supremely at the cross. Faith has content (God\u2019s promises), a foundation (God\u2019s character), and an object (God himself, supremely Christ). Faith in faith is useless; faith in a faithful God moves mountains.

## What Faith Does
First, faith saves: "Believe in the Lord Jesus Christ, and you will be saved" (Acts 16:31). The thief on the cross had no time for works \u2014 only time to trust, and Jesus promised him paradise (Luke 23:43). Second, faith pleases God: "without faith it is impossible to be well-pleasing to him" (Hebrews 11:6) \u2014 because faith honors God by treating him as trustworthy. Third, faith works: genuine faith always produces action. "Faith apart from works is dead" (James 2:26) \u2014 not because works save, but because living faith can\u2019t help acting, the way a living tree can\u2019t help bearing leaves. Abraham\u2019s faith moved his feet (Genesis 12:1-4); Rahab\u2019s faith hid the spies (Joshua 2); ours should move us too.

## Faith\u2019s Heroes
Hebrews 11 \u2014 the "hall of faith" \u2014 walks through the Old Testament showing faith in action: Abel offering, Noah building an ark before rain existed, Abraham leaving home for a land he\u2019d never seen, Moses choosing mistreatment with God\u2019s people over Egypt\u2019s treasures. Each acted on God\u2019s word before seeing the outcome. That\u2019s the pattern: God speaks, faith believes, obedience follows, God proves faithful. "These all died in faith, not having received the promises, but having seen them and embraced them from afar" (Hebrews 11:13) \u2014 faith looks beyond this life to the city God is building.

## How Faith Grows
Faith is a gift (Ephesians 2:8) that grows by means. It grows by hearing God\u2019s word: "faith comes by hearing, and hearing by the word of God" (Romans 10:17) \u2014 starve on Scripture and faith withers; feast and it strengthens. It grows through testing: "the testing of your faith produces endurance" (James 1:3) \u2014 trials are faith\u2019s gym, not its grave. It grows by remembering: Israel was commanded to recount God\u2019s deeds (Psalm 78) because memory fuels trust. And it grows by obeying in small things \u2014 each act of trust makes the next one easier. Even mustard-seed faith, placed in a mountain-moving God, is enough (Matthew 17:20).`,
        keyTerms: [
          { term: 'Faith', definition: 'Confident trust in God\u2019s character and promises, acting on his word (Hebrews 11:1).' },
          { term: 'Assurance', definition: 'The confident conviction that what God promised, he will perform (Romans 4:21).' },
          { term: 'Doubt', definition: 'Wavering trust \u2014 normal in small doses, but faith\u2019s opposite when it refuses God\u2019s word.' },
          { term: 'Perseverance', definition: 'Faith continuing to trust and obey through trials to the end (Hebrews 10:36).' },
        ],
        reflection: [
          'Hebrews 11 shows faith always acting on God\u2019s word before seeing results. Where is God asking you to obey before you see the outcome?',
          'What\u2019s the difference between faith and presumption \u2014 between trusting God\u2019s promise and demanding your preference?',
          'Which feeds your faith most: God\u2019s word, remembering his past faithfulness, or tested obedience? Which do you need more of?',
        ],
        application: `Start a "faith journal" this month with two columns: "God\u2019s promise" and "My step of trust." Each week, write one promise from Scripture and one concrete action it calls for \u2014 then record what happened. Also memorize Hebrews 11:1 and Romans 10:17. When doubt comes, don\u2019t feed it with speculation; feed faith with God\u2019s word and with remembrance of specific times he proved faithful to you.`,
        prayer: `Lord, I believe \u2014 help my unbelief. Thank you that faith is your gift, not my achievement, and that you honor even mustard-seed trust. Forgive my wavering; I\u2019ve treated your promises as maybes instead of certainties. Grow my faith through your word, through trials, and through obedient steps. Make me one of whom it can be said: she believed God, and acted like it. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-beg-7-exp-q1',
            type: 'mc',
            prompt: 'Hebrews 11:1 defines faith as...',
            choices: ['Blind optimism', 'Assurance of things hoped for, proof of things not seen', 'Strong feelings', 'Religious rituals'],
            answer: 'Assurance of things hoped for, proof of things not seen',
            explanation: 'Biblical faith is confident conviction \u2014 grounded in God\u2019s character, not wishful thinking.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-7-exp-q2',
            type: 'tf',
            prompt: 'According to James 2:26, genuine faith always produces action \u2014 "faith apart from works is dead."',
            answer: 'True',
            explanation: 'Living faith works \u2014 not because works save, but because true trust can\u2019t remain passive.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-7-exp-q3',
            type: 'mc',
            prompt: 'According to Romans 10:17, faith grows by...',
            choices: ['Trying harder', 'Hearing the word of God', 'Avoiding all doubt', 'Positive thinking'],
            answer: 'Hearing the word of God',
            explanation: '"Faith comes by hearing, and hearing by the word of God" \u2014 Scripture is faith\u2019s food.',
            tags: ['theology'],
          },
        ],
      },
      deep: {
        minutes: 30,
        concept:
          'Faith\u2019s nature (knowledge, assent, trust), its object (Christ), its fruits (obedience, perseverance), and its growth \u2014 with Abraham as the model believer.',
        scripture: [
          {
            ref: 'Romans 4:20-21',
            text: 'Yet, looking to the promise of God, he didn\u2019t waver through unbelief, but grew strong through faith, giving glory to God, and being fully assured that what he had promised, he was also able to perform.',
          },
          {
            ref: 'James 2:22',
            text: 'You see that faith worked with his works, and by works faith was perfected.',
          },
          {
            ref: 'Mark 9:24',
            text: 'Immediately the father of the child cried out with tears, "I believe. Help my unbelief!"',
          },
        ],
        teaching: `## The Anatomy of Faith: Know, Agree, Trust
Theologians describe saving faith in three movements. Notitia \u2014 knowledge: faith needs content; you must know the gospel to believe it (Romans 10:14). Assensus \u2014 assent: agreeing the gospel is true; even demons get this far (James 2:19). Fiducia \u2014 trust: personal reliance, putting your weight on Christ alone. Many people stall at assent: they believe Christianity is true the way they believe Australia exists \u2014 without it changing anything. Saving faith goes all the way to trust: entrusting your sin, your future, your eternity to Jesus. Examine yourself: has your faith moved from facts to trust?

## Abraham: The Model of Faith
"Abraham believed in Yahweh, who credited it to him for righteousness" (Genesis 15:6) \u2014 the verse Paul builds the doctrine of justification on. Consider what Abraham\u2019s faith faced: called to leave everything for an unseen land (Genesis 12), promised a son through a barren wife (Genesis 15), waiting 25 years, then asked to offer that son back (Genesis 22). Paul\u2019s commentary is stunning: Abraham "didn\u2019t waver through unbelief, but grew strong through faith, giving glory to God, and being fully assured that what he had promised, he was also able to perform" (Romans 4:20-21). Note the pattern: promise \u2192 assurance of God\u2019s ability \u2192 glory to God \u2192 obedience. And James adds the completion: Abraham\u2019s works "perfected" his faith (James 2:22) \u2014 obedience didn\u2019t earn righteousness; it proved the faith was alive.

## Faith and Works: Friends, Not Enemies
Paul says we are justified by faith apart from works (Romans 3:28); James says faith without works is dead (James 2:26). Contradiction? No \u2014 different questions. Paul asks: how is a sinner made right with God? Answer: by faith alone. James asks: what does genuine faith look like? Answer: it works. Paul fights legalism (earning salvation); James fights dead orthodoxy (faith without fruit). Together: we are saved by faith alone, but saving faith is never alone \u2014 it always brings obedience, love, and good works in its wake. As Luther put it: faith alone saves, but the faith that saves is never alone.

## Honest Doubt vs. Refusing Faith
The desperate father cried, "I believe. Help my unbelief!" (Mark 9:24) \u2014 and Jesus honored that honest prayer. Doubt that drives you to Christ is very different from doubt that excuses you from him. Thomas doubted, investigated, and worshiped: "My Lord and my God!" (John 20:28). Bring your questions to God honestly \u2014 the psalms are full of raw "why?" and "how long?" (Psalm 13). But don\u2019t let questions become a permanent address. Faith is not the absence of questions; it is trust that holds on while asking them. "Lord, to whom would we go? You have the words of eternal life" (John 6:68).

## Faith for the Long Road
Faith is not only the door but the path: "the righteous will live by faith" (Romans 1:17). This means daily dependence \u2014 trusting God\u2019s promises about provision (Matthew 6:33), guidance (Proverbs 3:5-6), forgiveness (1 John 1:9), and presence (Hebrews 13:5). It means perseverance: "we are not of those who shrink back to destruction, but of those who have faith to the saving of the soul" (Hebrews 10:39). And it means finishing: Paul\u2019s dying boast was "I have kept the faith" (2 Timothy 4:7). The Christian life begins, continues, and ends the same way \u2014 by trusting God.`,
        keyTerms: [
          { term: 'Notitia, assensus, fiducia', definition: 'Knowledge, assent, trust \u2014 the three movements of genuine faith.' },
          { term: 'Justification by faith', definition: 'Declared righteous through trusting Christ alone, apart from works (Romans 3:28).' },
          { term: 'Perseverance of the saints', definition: 'True faith continues to the end, kept by God (Hebrews 10:39).' },
          { term: 'Mustard-seed faith', definition: 'Even small faith in a great God is enough (Matthew 17:20).' },
        ],
        crossRefs: ['Genesis 15:6', 'Genesis 22:1-14', 'Psalm 13', 'Romans 1:17', 'Galatians 2:20', 'Hebrews 11:1-40'],
        reflection: [
          'Where are you on the journey from knowledge to assent to trust? Is there an area where you believe the truth but haven\u2019t yet put your weight on it?',
          'How do Paul (justified by faith apart from works) and James (faith without works is dead) fit together? Why do we need both truths?',
          'What is the difference between honest doubt that drives you to Christ and doubt that excuses you from obeying him? Which do you tend toward?',
          'Abraham waited 25 years for the promised son. What promise are you waiting on \u2014 and how can you "grow strong through faith, giving glory to God" while you wait?',
        ],
        application: `Take the "Abraham test" this week: identify one area where you believe God\u2019s promise but haven\u2019t acted on it \u2014 a conversation you\u2019re avoiding, generosity you\u2019re postponing, a step of obedience that feels risky. Write the specific promise you\u2019re standing on, the specific action faith requires, and a deadline. Then do it \u2014 and journal the outcome. Also, begin memorizing Romans 4:20-21 as your definition of strong faith: fully assured that what God promised, he is able to perform.`,
        prayer: `Father, I believe \u2014 help my unbelief. Thank you for Abraham\u2019s example: fully assured that what you promised, you are able to perform. Forgive me for faith that stops at facts and never becomes trust. Grow my notitia into assensus, and my assensus into fiducia \u2014 whole-weight reliance on Christ. When I doubt, drive me to you, not from you. Keep my faith alive, working, and persevering to the end \u2014 so that I too may finish able to say: I have kept the faith. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-beg-7-deep-q1',
            type: 'mc',
            prompt: 'The three movements of genuine faith are traditionally described as...',
            choices: ['Hope, love, joy', 'Knowledge, assent, trust', 'Prayer, fasting, giving', 'Hearing, seeing, feeling'],
            answer: 'Knowledge, assent, trust',
            explanation: 'Notitia (know the gospel), assensus (agree it\u2019s true), fiducia (personally rely on Christ).',
            tags: ['theology'],
          },
          {
            id: 'path-beg-7-deep-q2',
            type: 'mc',
            prompt: 'How do Paul ("justified by faith apart from works") and James ("faith without works is dead") fit together?',
            choices: ['They contradict each other', 'Paul addresses how sinners are made right with God; James addresses what genuine faith looks like', 'James was correcting Paul\u2019s error', 'Paul wrote before James changed the doctrine'],
            answer: 'Paul addresses how sinners are made right with God; James addresses what genuine faith looks like',
            explanation: 'Saved by faith alone \u2014 but saving faith is never alone; it always produces fruit.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-7-deep-q3',
            type: 'tf',
            prompt: 'The desperate father\u2019s prayer "I believe. Help my unbelief!" (Mark 9:24) shows that honest doubt brought to Jesus is compatible with real faith.',
            answer: 'True',
            explanation: 'Faith isn\u2019t the absence of questions \u2014 it\u2019s trust that holds on while asking them.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-7-deep-q4',
            type: 'mc',
            prompt: 'According to Romans 4:20-21, Abraham "grew strong through faith" by...',
            choices: ['Ignoring the promise', 'Being fully assured that what God promised, he was able to perform', 'Working to earn the promise', 'Lowering his expectations'],
            answer: 'Being fully assured that what God promised, he was able to perform',
            explanation: 'Strong faith = full assurance of God\u2019s ability to keep his word, expressed in obedience and glory to God.',
            tags: ['theology'],
          },
        ],
      },
      study: {
        minutes: 60,
        concept:
          'A full study of faith: its definition, object, and anatomy; Abraham and Hebrews 11; faith and works; doubt and assurance; and living the life of faith daily.',
        scripture: [
          {
            ref: 'Hebrews 11:1-2',
            text: 'Now faith is assurance of things hoped for, proof of things not seen. For by this, the elders obtained testimony.',
          },
          {
            ref: 'Romans 10:17',
            text: 'So faith comes by hearing, and hearing by the word of God.',
          },
          {
            ref: 'Galatians 2:20',
            text: 'I have been crucified with Christ, and it is no longer I who live, but Christ lives in me. That life which I now live in the flesh, I live by faith in the Son of God, who loved me and gave himself up for me.',
          },
          {
            ref: 'Hebrews 12:2',
            text: 'looking to Jesus, the author and perfecter of faith, who for the joy that was set before him endured the cross, despising its shame, and has sat down at the right hand of the throne of God.',
          },
        ],
        teaching: `## 1. Defining Faith Precisely
Hebrews 11:1 is the Bible\u2019s dictionary entry: faith is hypostasis ("assurance," literally "that which stands under") of things hoped for, and elegchos ("proof" or "conviction") of things not seen. Two observations: faith concerns the future ("things hoped for") and the invisible ("things not seen") \u2014 exactly the two realms where we feel most uncertain. And faith is not less than knowledge but goes beyond sight: it is a Spirit-given conviction as solid as evidence. Crucially, faith\u2019s value lies entirely in its object. Faith in a false god is worthless; faith in the true God \u2014 even weak, trembling faith \u2014 connects us to infinite power. The question is never "how much faith do I have?" but "how faithful is the One I trust?"

## 2. Faith\u2019s Object: Christ Alone
Saving faith has a specific object: Jesus Christ as he is offered in the gospel. "Believe in the Lord Jesus Christ, and you will be saved" (Acts 16:31). This includes believing his person (fully God, fully man), his work (died for our sins, rose again), and his promise (whoever believes has eternal life). Faith is not generic spirituality or optimism; it is trust in a person \u2014 "I know him whom I have believed" (2 Timothy 1:12). This is why the gospel must be heard and understood: "faith comes by hearing, and hearing by the word of God" (Romans 10:17). Missions, preaching, and personal witness matter eternally because faith needs its object clearly presented.

## 3. The Hall of Faith: Hebrews 11 Up Close
Hebrews 11 parades believers whose faith acted before sight. Abel worshiped by faith (v.4). Enoch walked with God (v.5). Noah built an ark on dry land, "moved with godly fear" (v.7) \u2014 imagine the ridicule. Abraham obeyed "not knowing where he was going" (v.8). Sarah judged God faithful (v.11). Moses chose "to share ill treatment with God\u2019s people" over Egypt\u2019s treasures, "for he looked to the reward" (vv.25-26) \u2014 faith does math with eternity. Rahab the prostitute believed and was spared (v.31) \u2014 no one is beyond faith\u2019s reach. Then the summary: some conquered kingdoms; others were tortured, mocked, sawn apart \u2014 "of whom the world was not worthy" (vv.33-38). Faith does not guarantee comfort; it guarantees God\u2019s commendation. "These all died in faith" (v.13) \u2014 and God "has prepared for them a city" (v.16).

## 4. Faith Working: The James Question
James 2 is the most misunderstood chapter on faith. James\u2019 target is "faith" that produces nothing \u2014 illustrated by telling a freezing, hungry person "go in peace, be warmed" without giving clothes or food (vv.15-16). That "faith" is dead, demonic (v.19), useless (v.20). His positive examples \u2014 Abraham offering Isaac, Rahab hiding spies \u2014 show faith completing itself in obedience: "faith worked with his works, and by works faith was perfected" (v.22). The Reformers\u2019 summary stands: we are justified by faith alone, but not by a faith that remains alone. Examine your own faith by its fruit \u2014 not to earn assurance through works, but because living things grow.

## 5. Doubt, Darkness, and Perseverance
Even the greatest believers wrestled: John the Baptist, from prison, asked "Are you the one who is to come?" (Matthew 11:3); Elijah, after Carmel, despaired under a juniper tree (1 Kings 19); the psalmists cried "How long, Yahweh?" (Psalm 13:1). God\u2019s response is never contempt but compassion \u2014 Jesus answered John with evidence (Matthew 11:4-5); God fed Elijah and spoke in a still small voice (1 Kings 19:5-12). In darkness, faith clings to what it knows in the light: God\u2019s character, Christ\u2019s cross, the Spirit\u2019s seal. Perseverance is faith\u2019s long obedience \u2014 "he who endures to the end will be saved" (Matthew 24:13) \u2014 and God both commands it and guarantees it: "he who began a good work in you will complete it" (Philippians 1:6).

## 6. The Life of Faith: Daily Trust
"I live by faith in the Son of God, who loved me and gave himself up for me" (Galatians 2:20) \u2014 present tense, personal ("loved me"). The life of faith means: trusting God\u2019s promises over your perceptions (walk by faith, not by sight, 2 Corinthians 5:7); praying with expectancy ("whatever you pray and ask for, believe that you have received them," Mark 11:24); obeying before understanding (like Abraham); giving generously (trusting God\u2019s provision, 2 Corinthians 9:8); and fixing your eyes on Jesus, "the author and perfecter of faith" (Hebrews 12:2) \u2014 he both begins and completes our faith. Faith is not a one-time decision but a daily direction: leaning your whole weight on a faithful God, one step at a time, until faith becomes sight.`,
        keyTerms: [
          { term: 'Hypostasis / elegchos', definition: 'The Greek words in Hebrews 11:1: "assurance" (that which stands under) and "proof/conviction."' },
          { term: 'Fiducia', definition: 'Personal trust \u2014 the crowning movement of saving faith.' },
          { term: 'Perseverance', definition: 'Faith continuing in trust and obedience to the end, kept by God.' },
          { term: 'Assurance of faith', definition: 'Confident certainty that God will perform what he promised (Hebrews 10:22).' },
          { term: 'The life of faith', definition: 'Daily dependence on God\u2019s promises in every area of life (Galatians 2:20).' },
        ],
        crossRefs: ['Genesis 12:1-4', 'Psalm 13', 'Habakkuk 2:4', 'Matthew 17:20', 'Mark 11:24', 'Romans 4:1-25', '2 Timothy 1:12', '1 John 5:4'],
        reflection: [
          'Hebrews 11 says faith concerns "things hoped for" and "things not seen." Why are these exactly the areas where trust is hardest \u2014 and most necessary?',
          'Which hero of Hebrews 11 do you most identify with right now \u2014 and what does their story teach you about your situation?',
          'How would you counsel a Christian friend who says, "I believe the gospel is true, but I don\u2019t feel like it\u2019s changing me"?',
          'What is one promise of God you\u2019ve been treating as a "maybe" that you need to start treating as a certainty?',
          'Elijah and John the Baptist both wrestled with despair despite great faith. What does God\u2019s gentle response to them teach you about bringing darkness to him?',
          'Galatians 2:20 makes faith personal: "who loved me and gave himself up for me." How does personalizing the gospel change the way you trust God daily?',
        ],
        application: `Design a 30-day "faith experiment." Choose one specific area where trust is thin (finances, a relationship, a decision, a fear). Each day: (1) Read one verse of promise related to it. (2) Pray the promise back to God specifically. (3) Take one small obedient step aligned with trust. (4) Record what happens \u2014 including God\u2019s faithfulness and your growth. At day 30, review the journal with a friend and celebrate. Faith is like a muscle: it grows by being used against resistance. Also commit Hebrews 12:2 to memory \u2014 "looking to Jesus, the author and perfecter of faith" \u2014 as your anchor verse for the month.`,
        prayer: `O God, author and perfecter of faith \u2014 I thank you that faith is your gift, that its value is in its object, and that even mustard-seed trust in you is enough. Forgive my faith that stops at facts. Give me Abraham\u2019s assurance, Noah\u2019s obedience-before-sight, Moses\u2019 eternal math, and Rahab\u2019s wholehearted turn. When I doubt, drive me to you; when I\u2019m in darkness, help me cling to what I knew in the light. Make my faith alive and working \u2014 not alone, but fruitful. Teach me to live by faith in the Son of God who loved me and gave himself for me \u2014 daily, practically, perseveringly \u2014 until faith becomes sight and I see you face to face. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-beg-7-study-q1',
            type: 'mc',
            prompt: 'In Hebrews 11:1, faith\u2019s value lies primarily in...',
            choices: ['Its intensity', 'Its object \u2014 the faithful God it trusts', 'Its duration', 'Its emotional warmth'],
            answer: 'Its object \u2014 the faithful God it trusts',
            explanation: 'Faith in a false god is worthless; even weak faith in the true God connects to infinite power.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-7-study-q2',
            type: 'mc',
            prompt: 'Moses chose mistreatment with God\u2019s people over Egypt\u2019s treasures because (Hebrews 11:26)...',
            choices: ['He hated Egypt', 'He looked to the reward \u2014 faith does math with eternity', 'He had no choice', 'He wanted adventure'],
            answer: 'He looked to the reward \u2014 faith does math with eternity',
            explanation: 'Faith evaluates present costs by eternal gains \u2014 and chooses accordingly.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-7-study-q3',
            type: 'tf',
            prompt: 'According to Hebrews 12:2, Jesus is both the "author and perfecter" of faith \u2014 he begins it and completes it.',
            answer: 'True',
            explanation: 'Our faith rests on Christ from first to last \u2014 he originates and finishes it.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-7-study-q4',
            type: 'mc',
            prompt: 'Galatians 2:20 describes the Christian life as...',
            choices: ['Living by feelings', 'Living by faith in the Son of God, who loved me and gave himself for me', 'Living by strict rules', 'Living for personal success'],
            answer: 'Living by faith in the Son of God, who loved me and gave himself for me',
            explanation: 'Daily, personal, present-tense trust in Christ\u2019s love \u2014 the life of faith.',
            tags: ['theology'],
          },
        ],
      },
    },
  },
  {
    id: 'path-beg-8',
    pathId: 'beginner',
    order: 8,
    title: 'What Is the Holy Spirit?',
    summary:
      'The Holy Spirit is God himself \u2014 living in every believer, teaching, guiding, convicting, empowering, and producing Christlike character.',
    layers: {
      core: {
        minutes: 5,
        concept:
          'The Holy Spirit is the third person of the Trinity \u2014 fully God \u2014 who lives in every Christian, making us alive, guiding us, and changing us.',
        scripture: [
          {
            ref: 'John 14:16-17',
            text: 'I will pray to the Father, and he will give you another Counselor, that he may be with you forever: the Spirit of truth... You know him, for he lives with you, and will be in you.',
          },
        ],
        teaching: `The Holy Spirit is not a force, a feeling, or "God\u2019s energy" \u2014 he is a person. Jesus called him "another Counselor" (John 14:16): "another" meaning one like Jesus himself. The Spirit speaks (Acts 13:2), teaches (John 14:26), guides (John 16:13), can be grieved (Ephesians 4:30) \u2014 only a person does these things. And he is fully God: lying to the Spirit is lying to God (Acts 5:3-4).

What does he do? At conversion, the Spirit gives new birth (John 3:5-6) and comes to live inside every believer permanently: "he lives with you, and will be in you" (John 14:17). Your body is now "a temple of the Holy Spirit" (1 Corinthians 6:19). He convicts of sin (John 16:8), teaches God\u2019s word (John 14:26), guides into truth (John 16:13), produces Christlike character \u2014 "the fruit of the Spirit" (Galatians 5:22-23) \u2014 and empowers witness (Acts 1:8).

The Christian life is impossible without him \u2014 and gloriously possible with him: "walk by the Spirit, and you won\u2019t fulfill the lust of the flesh" (Galatians 5:16).`,
        reflection: [
          'If the Holy Spirit \u2014 fully God \u2014 personally lives in you, how should that change the way you view your body, your choices, and your daily moments?',
          'Which of the Spirit\u2019s works (convicting, teaching, guiding, empowering, fruit-bearing) do you most need right now?',
        ],
        application: `Each morning this week, consciously welcome the Spirit\u2019s presence with a simple prayer: "Holy Spirit, you live in me. Fill me today \u2014 guide my decisions, convict me of sin, produce your fruit in me, and empower me to represent Jesus." Then watch for his promptings: a nudge to pray, to encourage someone, to turn from temptation. When you sense it, respond quickly \u2014 "don\u2019t quench the Spirit" (1 Thessalonians 5:19).`,
        prayer: `Holy Spirit, you are God \u2014 my Counselor, Teacher, and Guide. Thank you for living in me. I confess I\u2019ve often ignored you, grieved you, and tried to live the Christian life in my own strength. Fill me afresh today. Convict me of sin, teach me God\u2019s word, guide my steps, and produce in me the fruit of love, joy, peace, and all the rest. Make me like Jesus. Amen.`,
      },
      expanded: {
        minutes: 15,
        concept:
          'The Spirit regenerates, indwells, seals, teaches, guides, convicts, and empowers believers \u2014 and fills those who walk in yielded dependence.',
        scripture: [
          {
            ref: 'Acts 1:8',
            text: 'But you will receive power when the Holy Spirit has come upon you. You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth.',
          },
          {
            ref: 'Galatians 5:22-23',
            text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faith, gentleness, and self-control. Against such there is no law.',
          },
        ],
        teaching: `## Who He Is: God the Spirit
The Spirit is not God\u2019s junior partner. He is called "the Spirit of God" and "the Spirit of Christ" interchangeably (Romans 8:9). He participated in creation (Genesis 1:2), inspired Scripture (2 Peter 1:21), and raised Jesus from the dead (Romans 8:11). Peter\u2019s confrontation of Ananias is decisive: lying to the Holy Spirit is lying "to God" (Acts 5:3-4). He has a mind (Romans 8:27), a will (1 Corinthians 12:11), and emotions \u2014 he can be grieved (Ephesians 4:30) and insulted (Hebrews 10:29). Treat him as a person, because he is one: you can know him, love him, listen to him, and grieve him.

## What He Does in Salvation
No one becomes a Christian without the Spirit. He convicts "the world about sin, about righteousness, and about judgment" (John 16:8) \u2014 that uneasy sense of guilt is often his voice. He regenerates: "unless one is born of water and Spirit, he can\u2019t enter into God\u2019s Kingdom" (John 3:5). He indwells every believer at conversion \u2014 "if anyone doesn\u2019t have the Spirit of Christ, he is not his" (Romans 8:9). He seals us as God\u2019s own (Ephesians 1:13) and baptizes us into Christ\u2019s body, the church (1 Corinthians 12:13). If you are in Christ, the Spirit is in you \u2014 permanently. "He may be with you forever" (John 14:16).

## What He Does in Daily Life
The Spirit teaches: "he will teach you all things, and will remind you of all that I said to you" (John 14:26) \u2014 ever had a verse surface exactly when needed? That\u2019s often him. He guides: "he will guide you into all truth" (John 16:13). He intercedes: when we don\u2019t know how to pray, "the Spirit himself makes intercession for us with groanings which can\u2019t be uttered" (Romans 8:26). He produces character: the ninefold "fruit of the Spirit" (Galatians 5:22-23) \u2014 note "fruit," singular: one cluster, growing together as we walk with him. And he empowers witness: "you will receive power when the Holy Spirit has come upon you. You will be witnesses" (Acts 1:8) \u2014 the timid disciples became bold proclaimers.

## Walking by the Spirit
Paul\u2019s command is present-tense and continuous: "walk by the Spirit" (Galatians 5:16), "be filled with the Spirit" (Ephesians 5:18) \u2014 literally "keep being filled." This is not a one-time event but a daily dependence: yielding control, confessing sin quickly (don\u2019t grieve him, Ephesians 4:30), responding to his promptings (don\u2019t quench him, 1 Thessalonians 5:19), and feeding on the word he inspired. The Spirit-filled life is not primarily about spectacular experiences but about Christlike character and bold witness \u2014 love, joy, peace on the inside; courage and compassion on the outside.`,
        keyTerms: [
          { term: 'Holy Spirit', definition: 'The third person of the Trinity \u2014 fully God \u2014 who indwells and empowers believers.' },
          { term: 'Regeneration', definition: 'The Spirit\u2019s work of giving new spiritual life (John 3:5; Titus 3:5).' },
          { term: 'Indwelling', definition: 'The Spirit\u2019s permanent residence in every believer (1 Corinthians 6:19).' },
          { term: 'Fruit of the Spirit', definition: 'Christlike character the Spirit produces: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control.' },
        ],
        reflection: [
          'Which is easier for you to grasp: the Spirit as a person to know, or as power to use? Why does the distinction matter?',
          'Paul says to "keep being filled" with the Spirit. What tends to "quench" or "grieve" the Spirit in your daily life?',
          'Look at the fruit of the Spirit (Galatians 5:22-23). Which fruit is most evident in you \u2014 and which is most lacking?',
        ],
        application: `Do a "fruit inspection" this week: each evening, rate yourself honestly on the ninefold fruit \u2014 where did love, joy, peace show up? Where did impatience or harshness win? Don\u2019t aim for guilt; aim for awareness. Then pray specifically for the one fruit you lack most, asking the Spirit to produce what you cannot manufacture. Remember: fruit grows; it isn\u2019t stapled on. Stay connected to the Vine (John 15:5) through word, prayer, and obedience \u2014 and watch the fruit come.`,
        prayer: `Holy Spirit, Lord and giver of life \u2014 I worship you as God. Thank you for convicting me, giving me new birth, and making your home in me. Forgive me for grieving you with my sin and quenching you with my busyness and self-reliance. Fill me afresh \u2014 not as a one-time event but as a daily dependence. Teach me, guide me, intercede for me, and grow your fruit in me. Make me a bold and loving witness for Jesus. Amen.`,
        quiz: [
          {
            id: 'path-beg-8-exp-q1',
            type: 'mc',
            prompt: 'Which evidence best shows the Holy Spirit is a person, not just a force?',
            choices: ['He is invisible', 'He speaks, teaches, guides, and can be grieved', 'He is powerful', 'He is mentioned often'],
            answer: 'He speaks, teaches, guides, and can be grieved',
            explanation: 'Only a person speaks (Acts 13:2), teaches (John 14:26), and can be grieved (Ephesians 4:30).',
            tags: ['theology'],
          },
          {
            id: 'path-beg-8-exp-q2',
            type: 'tf',
            prompt: 'According to Romans 8:9, every true believer has the Holy Spirit dwelling in them.',
            answer: 'True',
            explanation: '"If anyone doesn\u2019t have the Spirit of Christ, he is not his" \u2014 the Spirit indwells all believers.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-8-exp-q3',
            type: 'mc',
            prompt: 'According to Acts 1:8, the Spirit\u2019s power is given primarily for...',
            choices: ['Personal comfort', 'Being witnesses for Christ to the ends of the earth', 'Performing miracles for entertainment', 'Gaining wealth'],
            answer: 'Being witnesses for Christ to the ends of the earth',
            explanation: '"You will receive power... You will be witnesses to me" \u2014 Spirit-power serves mission.',
            tags: ['theology'],
          },
        ],
      },
      deep: {
        minutes: 30,
        concept:
          'The person and deity of the Spirit, his work in creation, Scripture, Christ, and the church \u2014 regeneration, sealing, gifting, fruit \u2014 and the Spirit-filled life.',
        scripture: [
          {
            ref: 'John 16:13-14',
            text: 'However when he, the Spirit of truth, has come, he will guide you into all truth... He will glorify me, for he will take from what is mine, and will declare it to you.',
          },
          {
            ref: '1 Corinthians 6:19-20',
            text: 'Or don\u2019t you know that your body is a temple of the Holy Spirit which is in you, which you have from God? You are not your own, for you were bought with a price. Therefore glorify God in your body and in your spirit, which are God\u2019s.',
          },
          {
            ref: 'Ephesians 4:30',
            text: 'Don\u2019t grieve the Holy Spirit of God, in whom you were sealed for the day of redemption.',
          },
        ],
        teaching: `## The Spirit in the Whole Story
The Spirit is there from the first verse: "God\u2019s Spirit was hovering over the surface of the waters" (Genesis 1:2) \u2014 present at creation. He empowered Old Testament leaders selectively and temporarily: Bezalel for craftsmanship (Exodus 31:3), Samson for strength, David who pleaded "don\u2019t take your holy Spirit from me" (Psalm 51:11). The prophets promised a day when God would pour out his Spirit on all flesh (Joel 2:28) and put his Spirit within his people, causing them to obey (Ezekiel 36:27). At Pentecost (Acts 2), the promise arrived: the Spirit now indwells every believer permanently. We live in the age of the Spirit \u2014 the era the prophets longed to see.

## The Spirit and Christ
The Spirit\u2019s relationship with Jesus is intimate at every stage: Jesus was conceived by the Spirit (Luke 1:35), anointed by the Spirit at baptism (Luke 3:22), led by the Spirit into the wilderness (Luke 4:1), ministered "in the power of the Spirit" (Luke 4:14), offered himself "through the eternal Spirit" (Hebrews 9:14), and was raised by the Spirit (Romans 8:11). And the Spirit\u2019s great mission now is to glorify Christ: "He will glorify me, for he will take from what is mine, and will declare it to you" (John 16:14). This is the test of all spiritual experience: the true Spirit always spotlights Jesus, never himself. Any "spirituality" that bypasses Christ is not from the Holy Spirit.

## Regeneration, Sealing, Gifting
Unpack three key works. Regeneration: the Spirit gives new life to the spiritually dead \u2014 "that which is born of the Spirit is spirit" (John 3:6); "he saved us through the washing of regeneration and renewing by the Holy Spirit" (Titus 3:5). This is monergistic: God alone gives life; we contribute nothing but the need. Sealing: at conversion we are "sealed with the promised Holy Spirit, who is the guarantee of our inheritance" (Ephesians 1:13-14) \u2014 marked as God\u2019s property and secured for the final day. Gifting: the Spirit distributes spiritual gifts "to each one... for the profit of all" (1 Corinthians 12:7) \u2014 teaching, serving, encouraging, giving, leading, mercy, and more. Every believer is gifted; no believer has all gifts; all gifts are for building up the church, not building up self.

## Conviction, Guidance, Intercession
The Spirit convicts the world of sin, righteousness, and judgment (John 16:8) \u2014 without this, no one repents. He guides believers "into all truth" (John 16:13) \u2014 primarily through the Scripture he inspired, illuminated to our understanding (1 Corinthians 2:12-14). He intercedes when we are wordless: "the Spirit himself makes intercession for us with groanings which can\u2019t be uttered" (Romans 8:26) \u2014 your weakest prayers are carried by his perfect pleading. He leads: "as many as are led by the Spirit of God, these are children of God" (Romans 8:14) \u2014 a family trait of God\u2019s children.

## Grieving and Quenching
Two warnings. "Don\u2019t grieve the Holy Spirit of God" (Ephesians 4:30) \u2014 the context is sins of speech and attitude: bitterness, wrath, anger, slander (vv.31-32). The Spirit is holy and personal; he is grieved by our unholiness the way a close friend is grieved by betrayal. "Don\u2019t quench the Spirit" (1 Thessalonians 5:19) \u2014 like throwing water on a fire: ignoring his promptings, despising his gifts, resisting his leading. The remedy for both is quick confession and yielded obedience. The Spirit is not fragile \u2014 he will not abandon the sealed \u2014 but fellowship with him can be clouded, and power for service can be diminished.

## The Temple and the Mission
"You are not your own, for you were bought with a price. Therefore glorify God in your body" (1 Corinthians 6:19-20). The indwelling Spirit makes every believer a walking temple \u2014 which transforms ethics: what we do with our bodies, eyes, and appetites matters infinitely. And the Spirit\u2019s power has a direction: outward. From Jerusalem to the ends of the earth (Acts 1:8), the Spirit drives mission \u2014 giving boldness (Acts 4:31), words (Luke 12:12), and fruit that remains. A Spirit-filled church is not a comfortable club but a rescue operation.`,
        keyTerms: [
          { term: 'Pentecost', definition: 'The Spirit\u2019s outpouring on the church (Acts 2), fulfilling Joel 2:28 \u2014 the start of the Spirit\u2019s permanent indwelling of all believers.' },
          { term: 'Sealing', definition: 'The Spirit marking believers as God\u2019s own and guaranteeing their inheritance (Ephesians 1:13-14).' },
          { term: 'Spiritual gifts', definition: 'Abilities the Spirit distributes to believers for building up the church (1 Corinthians 12:7).' },
          { term: 'Illumination', definition: 'The Spirit opening believers\u2019 minds to understand and love Scripture (1 Corinthians 2:12).' },
          { term: 'Filling', definition: 'The Spirit\u2019s ongoing control of a yielded believer\u2019s life (Ephesians 5:18).' },
        ],
        crossRefs: ['Genesis 1:2', 'Joel 2:28', 'Ezekiel 36:26-27', 'John 3:5-8', 'Romans 8:9-16', '1 Corinthians 12:4-11', 'Galatians 5:16-25'],
        reflection: [
          'The Spirit\u2019s mission is to glorify Christ (John 16:14), not himself. How does this test help you evaluate spiritual claims and experiences?',
          'What\u2019s the difference between having the Spirit (true of all believers) and being filled with the Spirit (a repeated command)? Which needs attention in your life?',
          'How does knowing your body is the Spirit\u2019s temple change the way you think about habits, entertainment, and purity?',
          'Which spiritual gift(s) has God given you \u2014 and are you using them "for the profit of all" or letting them sit idle?',
        ],
        application: `This week, practice "prompt obedience": when you sense the Spirit\u2019s nudge \u2014 to pray for someone, encourage a stranger, confess a sin, share the gospel, give generously \u2014 act within the hour. Keep a log of promptings and responses. You\u2019ll be amazed how often he speaks when we start listening. Also, take an honest inventory: is there a sin you\u2019ve been tolerating that grieves him? Confess it specifically today (Ephesians 4:30-32), and ask a trusted believer to pray for your freedom. Don\u2019t quench the fire \u2014 feed it.`,
        prayer: `Holy Spirit, eternal God \u2014 hover over the chaos of my life as you hovered over the waters at creation, and bring order and life. Thank you for regenerating me, sealing me, gifting me, and making my body your temple. Forgive me for grieving you with tolerated sin and quenching you with ignored promptings. I yield control to you afresh: fill me, lead me, teach me, intercede for me. Produce your fruit and deploy your gifts through me. Glorify Christ in me \u2014 and make me a bold witness to the ends of my earth. Amen.`,
        quiz: [
          {
            id: 'path-beg-8-deep-q1',
            type: 'mc',
            prompt: 'According to John 16:14, the Holy Spirit\u2019s central mission regarding Jesus is to...',
            choices: ['Replace him', 'Glorify him', 'Explain him away', 'Compete with him'],
            answer: 'Glorify him',
            explanation: '"He will glorify me" \u2014 the true Spirit always spotlights Christ, never himself.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-8-deep-q2',
            type: 'mc',
            prompt: 'The difference between Old Testament and New Testament experience of the Spirit is best described as...',
            choices: ['No difference at all', 'Selective and temporary then; permanent indwelling of all believers now', 'The Spirit didn\u2019t exist in the Old Testament', 'Only kings received him then'],
            answer: 'Selective and temporary then; permanent indwelling of all believers now',
            explanation: 'At Pentecost, Joel 2:28\u2019s promise arrived: the Spirit now permanently indwells every believer.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-8-deep-q3',
            type: 'tf',
            prompt: 'Ephesians 4:30 warns believers not to grieve the Holy Spirit \u2014 showing he is a person who can be grieved by our sin.',
            answer: 'True',
            explanation: 'Only a person can be grieved \u2014 and the context (bitterness, anger, slander) shows what grieves him.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-8-deep-q4',
            type: 'mc',
            prompt: 'According to 1 Corinthians 12:7, spiritual gifts are given...',
            choices: ['For personal status', 'To each believer for the profit of all', 'Only to pastors', 'Only in the first century'],
            answer: 'To each believer for the profit of all',
            explanation: 'Every believer is gifted; gifts are for building up the church, not the self.',
            tags: ['theology'],
          },
        ],
      },
      study: {
        minutes: 60,
        concept:
          'A full pneumatology: the Spirit\u2019s person, deity, and work across redemptive history \u2014 in creation, Scripture, Christ, conversion, sanctification, gifting, and mission.',
        scripture: [
          {
            ref: 'John 14:16-17, 26',
            text: 'I will pray to the Father, and he will give you another Counselor, that he may be with you forever: the Spirit of truth... he lives with you, and will be in you. But the Counselor, the Holy Spirit, whom the Father will send in my name, will teach you all things, and will remind you of all that I said to you.',
          },
          {
            ref: 'Romans 8:11',
            text: 'But if the Spirit of him who raised up Jesus from the dead dwells in you, he who raised up Christ Jesus from the dead will also give life to your mortal bodies through his Spirit who dwells in you.',
          },
          {
            ref: 'Zechariah 4:6',
            text: '\u2018Not by might, nor by power, but by my Spirit,\u2019 says Yahweh of Armies.',
          },
          {
            ref: 'Ephesians 5:18',
            text: 'Don\u2019t be drunken with wine, in which is dissipation, but be filled with the Spirit,',
          },
        ],
        teaching: `## 1. The Person: He, Not It
The Bible uses personal pronouns for the Spirit (John 16:13-14: "he... he... he"), ascribes personal acts (speaking, Acts 13:2; testifying, John 15:26; interceding, Romans 8:26; distributing gifts "as he desires," 1 Corinthians 12:11), and personal experiences (grieved, Ephesians 4:30; lied to, Acts 5:3; blasphemed, Matthew 12:31). The Spirit is not God\u2019s energy field or an impersonal influence \u2014 he is the third person of the Trinity, to be known, loved, obeyed, and never grieved. Many Christians functionally treat him as "it"; Scripture will not let us. Begin relating to him as a person: thank him, listen to him, apologize to him.

## 2. The Deity: Fully God
The Spirit is called God outright (Acts 5:3-4), does what only God does (creation, Genesis 1:2; resurrection, Romans 8:11; inspiration, 2 Peter 1:21; omnipresence, Psalm 139:7), and is joined with Father and Son in the baptismal formula (Matthew 28:19) and apostolic benediction (2 Corinthians 13:14). Denying his deity \u2014 as some cults do \u2014 unravels the Trinity and the gospel: only God can regenerate, indwell, and seal. Worship him as God; pray to him; trust him as God.

## 3. The Work in History: From Creation to Consummation
Trace his footprints: hovering over creation\u2019s waters (Genesis 1:2); striving with pre-flood humanity (Genesis 6:3); empowering judges, kings, and prophets; inspiring every word of Scripture (2 Peter 1:21); conceiving, anointing, leading, and raising Christ; descending at Pentecost to birth the church (Acts 2); guiding the apostles into all truth (John 16:13); and one day \u2014 "the Spirit and the bride say, \u2018Come!'" (Revelation 22:17) \u2014 he will be there at the consummation, still inviting. The Spirit is not a New Testament afterthought; he is the executor of the Godhead\u2019s purposes from Genesis to Revelation.

## 4. The Work in Conversion: The Spirit Saves
Every element of conversion is the Spirit\u2019s work. He convicts (John 16:8) \u2014 apart from conviction, no one sees their need. He regenerates (John 3:5-8; Titus 3:5) \u2014 giving life to the dead, monergistically. He grants repentance and faith. He indwells (Romans 8:9) \u2014 immediately, permanently, every believer. He seals (Ephesians 1:13) and gives himself as the down payment of glory (2 Corinthians 1:22). He baptizes into Christ\u2019s body (1 Corinthians 12:13) \u2014 incorporating us into the church. He testifies with our spirit that we are God\u2019s children (Romans 8:16) and teaches us to cry "Abba, Father!" (Galatians 4:6). Salvation is Trinitarian: planned by the Father, accomplished by the Son, applied by the Spirit.

## 5. The Work in Sanctification: The Spirit Changes Us
After conversion, the Spirit\u2019s transforming work continues lifelong. He sanctifies (2 Thessalonians 2:13) \u2014 setting us apart and making us holy progressively. He produces fruit (Galatians 5:22-23) \u2014 character, not just gifts. He empowers against sin: "by the Spirit you put to death the deeds of the body" (Romans 8:13) \u2014 mortification is Spirit-powered, not willpower-driven. He illuminates Scripture (1 Corinthians 2:12-14; 1 John 2:27). He guides decisions (Acts 16:6-7; Romans 8:14). He intercedes in prayer (Romans 8:26-27). He distributes gifts for ministry (1 Corinthians 12; Romans 12; Ephesians 4; 1 Peter 4:10-11). The normal Christian life is a Spirit-dependent life: "walk by the Spirit" (Galatians 5:16) as a continuous way of being.

## 6. The Filling: Yielded, Repeated, Practical
"Be filled with the Spirit" (Ephesians 5:18) is a present-tense command to all believers \u2014 literally, "keep being filled." Contrast with drunkenness: as wine controls the drunk, the Spirit should control the believer. Filling is not about getting more of the Spirit (you have all of him) but the Spirit getting more of you \u2014 yielded areas, confessed sin, surrendered will. It is repeatable: Peter was filled at Pentecost (Acts 2:4) and again later (Acts 4:31). Its evidences in Ephesians 5:19-21 are corporate and joyful: singing, thanksgiving, mutual submission \u2014 not weirdness but worship and love. How to pursue it: confess all known sin, yield every area (hold nothing back), ask in faith (Luke 11:13 \u2014 the Father gives the Spirit to those who ask), walk in obedience, and keep short accounts. "Not by might, nor by power, but by my Spirit" (Zechariah 4:6) \u2014 this is both the church\u2019s hope and each believer\u2019s daily secret.`,
        keyTerms: [
          { term: 'Pneumatology', definition: 'The theological study of the Holy Spirit.' },
          { term: 'Monergism', definition: 'The Spirit alone regenerating the sinner; we contribute only the need.' },
          { term: 'Baptism of the Spirit', definition: 'The Spirit incorporating believers into Christ\u2019s body at conversion (1 Corinthians 12:13).' },
          { term: 'Filling of the Spirit', definition: 'The Spirit\u2019s repeated, ongoing control of a yielded believer\u2019s life (Ephesians 5:18).' },
          { term: 'Quenching / grieving', definition: 'Resisting the Spirit\u2019s promptings (1 Thessalonians 5:19) or offending him by sin (Ephesians 4:30).' },
        ],
        crossRefs: ['Psalm 139:7', 'Ezekiel 36:26-27', 'Joel 2:28-29', 'Luke 11:13', 'John 15:26', 'Acts 2:1-4', 'Romans 8:26-27', '1 John 2:27'],
        reflection: [
          'How would your prayer life change if you consistently related to the Spirit as a divine person \u2014 thanking, listening, apologizing \u2014 rather than a force?',
          'Trace the Spirit\u2019s work in your own conversion: conviction, new birth, assurance. Can you identify his fingerprints?',
          'What\u2019s the difference between the Spirit\u2019s baptism (once, at conversion) and filling (repeated, commanded)? Why does confusing them cause problems?',
          'Romans 8:13 says we put sin to death "by the Spirit." What does Spirit-powered mortification look like versus white-knuckled willpower?',
          'Which spiritual gift has God entrusted to you, and what specific "profit of all" could it serve in your church this month?',
          'Zechariah 4:6 \u2014 "not by might, nor by power, but by my Spirit." What are you currently trying to accomplish by might that needs to be surrendered to the Spirit?',
        ],
        application: `Conduct a "Spirit audit" this week across five areas, journaling honestly: (1) Yieldedness \u2014 is there any area you\u2019ve withheld from his control? (2) Sin \u2014 anything grieving him that needs confession? (3) Promptings \u2014 have you quenched any nudges lately? Act on one today. (4) Word \u2014 are you giving him Scripture to illuminate? Commit to daily reading. (5) Mission \u2014 who is he sending you to? Take one step. End the week by praying Luke 11:13 back to the Father \u2014 asking, in faith, for fresh filling \u2014 and then watch for the evidences: worship, gratitude, love, boldness.`,
        prayer: `O Holy Spirit \u2014 Lord, giver of life, third person of the blessed Trinity \u2014 I worship you as fully God. You hovered over creation, inspired the Scriptures, conceived and anointed and raised my Savior, and at Pentecost you came to dwell in people like me. Thank you for convicting me, regenerating me, sealing me, and never leaving me. Forgive my grieving and quenching \u2014 my tolerated sin, my ignored promptings, my self-reliant striving. I yield to you wholly: fill me afresh and keep filling me. Illuminate your word, intercede in my weakness, distribute your gifts through me, produce your fruit in me, and glorify Christ through me \u2014 until the day the Spirit and the bride say "Come," and faith becomes sight. Not by my might, nor by my power, but by your Spirit. Amen.`,
        quiz: [
          {
            id: 'path-beg-8-study-q1',
            type: 'mc',
            prompt: 'The Spirit\u2019s baptism (1 Corinthians 12:13) and the Spirit\u2019s filling (Ephesians 5:18) differ in that...',
            choices: ['They are identical', 'Baptism incorporates believers into Christ\u2019s body once at conversion; filling is the repeated, commanded experience of his control', 'Filling happens once; baptism repeats', 'Only apostles experienced baptism'],
            answer: 'Baptism incorporates believers into Christ\u2019s body once at conversion; filling is the repeated, commanded experience of his control',
            explanation: 'One baptism into the body; many fillings for yielded living \u2014 confusing them causes real problems.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-8-study-q2',
            type: 'tf',
            prompt: 'According to Romans 8:11, the same Spirit who raised Jesus from the dead dwells in believers and will give life to their mortal bodies.',
            answer: 'True',
            explanation: 'The resurrection Spirit in us is the guarantee of our own future resurrection.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-8-study-q3',
            type: 'mc',
            prompt: 'In Ephesians 5:18, "be filled with the Spirit" is literally...',
            choices: ['A past event', 'A present-tense command: "keep being filled"', 'An optional suggestion', 'A promise for heaven'],
            answer: 'A present-tense command: "keep being filled"',
            explanation: 'Continuous, repeated yieldedness \u2014 the Spirit getting more of us, not us getting more of him.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-8-study-q4',
            type: 'mc',
            prompt: 'Which best summarizes the Spirit\u2019s role in salvation?',
            choices: ['He only convicts', 'He convicts, regenerates, indwells, seals, and testifies \u2014 applying Christ\u2019s work', 'He only gives gifts', 'He is uninvolved until heaven'],
            answer: 'He convicts, regenerates, indwells, seals, and testifies \u2014 applying Christ\u2019s work',
            explanation: 'Salvation is Trinitarian: the Father plans, the Son accomplishes, the Spirit applies.',
            tags: ['theology'],
          },
        ],
      },
    },
  },
];

const BEGINNER_E: LayeredLesson[] = [
  {
    id: 'path-beg-9',
    pathId: 'beginner',
    order: 9,
    title: 'What Is Prayer?',
    summary:
      'Prayer is talking with God \u2014 our Father who hears \u2014 with praise, confession, thanks, and requests, in Jesus\u2019 name and by the Spirit\u2019s help.',
    layers: {
      core: {
        minutes: 5,
        concept:
          'Prayer is personal conversation with God our Father \u2014 speaking and listening \u2014 and he promises to hear his children when they pray.',
        scripture: [
          {
            ref: '1 Thessalonians 5:17',
            text: 'Pray without ceasing.',
          },
        ],
        teaching: `Prayer is simply talking with God \u2014 and listening. It is not a ritual for professionals; it is a child speaking to a Father. Because of Jesus, we can "draw near with boldness to the throne of grace" (Hebrews 4:16) \u2014 not timidly, not perfectly, but confidently, as beloved children.

Jesus taught us how to pray in the Lord\u2019s Prayer (Matthew 6:9-13): start with who God is ("Our Father in heaven, may your name be kept holy"), align with his will ("let your will be done"), then bring your needs ("give us today our daily bread"), your sins ("forgive us"), and your battles ("deliver us from the evil one"). A helpful pattern: praise, confession, thanksgiving, requests.

And God hears. "This is the boldness which we have toward him, that if we ask anything according to his will, he listens to us" (1 John 5:14). He always answers \u2014 sometimes "yes," sometimes "not yet," sometimes "I have something better" \u2014 but he always hears his children. "Pray without ceasing" (1 Thessalonians 5:17): not nonstop talking, but a life lived in ongoing conversation with God.`,
        reflection: [
          'Do you tend to treat prayer as a ritual, a last resort, or a relationship? What would "ongoing conversation with God" look like in your ordinary day?',
          'Jesus taught us to begin prayer with God\u2019s holiness before our needs. How might that order change the way you pray?',
        ],
        application: `Pray the Lord\u2019s Prayer slowly today \u2014 pausing after each line to make it your own: praise him as Father; surrender to his will; ask for today\u2019s needs; confess specific sins; ask for protection. Then set two daily prayer moments this week (e.g., morning and bedtime) and keep them. Start small and stay consistent \u2014 a few honest minutes beat an hour of guilt-driven duty.`,
        prayer: `Our Father in heaven, may your name be kept holy. Your kingdom come, your will be done \u2014 in my life today as it is in heaven. Give me today what I need; forgive my sins as I forgive others; lead me away from temptation and deliver me from evil. Thank you for hearing me \u2014 teach me to pray without ceasing. In Jesus\u2019 name, amen.`,
      },
      expanded: {
        minutes: 15,
        concept:
          'God invites bold, persistent, believing prayer in Jesus\u2019 name \u2014 shaped by his will, empowered by the Spirit, and answered by a Father who loves to give.',
        scripture: [
          {
            ref: 'Matthew 6:9-13',
            text: 'Our Father in heaven, may your name be kept holy. Let your Kingdom come. Let your will be done on earth as it is in heaven. Give us today our daily bread. Forgive us our debts, as we also forgive our debtors. Bring us not into temptation, but deliver us from the evil one.',
          },
          {
            ref: 'Philippians 4:6',
            text: 'In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God.',
          },
        ],
        teaching: `## Why Pray?
If God knows everything and is sovereign, why pray? Because he commands it (1 Thessalonians 5:17), because Jesus modeled it (Mark 1:35; Luke 5:16), and because God has ordained prayer as the means by which he gives: "You don\u2019t have, because you don\u2019t ask" (James 4:2). Prayer doesn\u2019t inform God; it involves us. It aligns our hearts with his will, expresses our dependence, and releases his power. E.M. Bounds said prayer is not preparation for the work \u2014 prayer is the work.

## How Jesus Taught Us
The Lord\u2019s Prayer (Matthew 6:9-13) is a pattern, not a mantra. "Our Father" \u2014 prayer is familial, and it\u2019s plural: we pray as a family. "May your name be kept holy" \u2014 worship first. "Your kingdom come, your will be done" \u2014 surrender before requests. "Give us today our daily bread" \u2014 bring real, daily needs. "Forgive us" \u2014 confession, tied to forgiving others. "Deliver us from the evil one" \u2014 spiritual battle is real. Notice the balance: God\u2019s glory first, our needs second; and notice the confidence \u2014 a child asking a good Father.

## Praying in Jesus\u2019 Name
"Whatever you will ask in my name, that will I do" (John 14:13). Praying "in Jesus\u2019 name" is not a magic sign-off; it means praying as his representative \u2014 asking what he would ask, for his glory. That\u2019s why 1 John 5:14 adds the key qualifier: "if we ask anything according to his will, he listens to us." Prayer is not bending God\u2019s will to ours but aligning ours with his \u2014 then asking boldly. "Ask, and it will be given you. Seek, and you will find. Knock, and it will be opened" (Matthew 7:7): asking, seeking, knocking \u2014 increasing intensity, persistent faith.

## When Answers Tarry
Jesus told a parable "that they must always pray, and not give up" (Luke 18:1). God\u2019s "no" or "wait" is never indifference. Sometimes he says no because we ask wrongly \u2014 "to spend it on your pleasures" (James 4:3). Sometimes he waits to grow our faith. Sometimes his answer is better than our request \u2014 Paul asked three times for his thorn\u2019s removal and received sufficient grace instead (2 Corinthians 12:9). And sometimes the answer is simply "trust me": Jesus himself prayed "not my will, but yours" in Gethsemane (Luke 22:42). Unanswered prayer is never unheard prayer.`,
        keyTerms: [
          { term: 'Intercession', definition: 'Praying on behalf of others \u2014 standing in the gap for them before God.' },
          { term: 'Petition', definition: 'Asking God for our own needs (Philippians 4:6).' },
          { term: 'In Jesus\u2019 name', definition: 'Praying as Christ\u2019s representative, according to his will and for his glory (John 14:13).' },
          { term: 'Persistence', definition: 'Continuing in prayer without giving up, as Jesus commanded (Luke 18:1).' },
        ],
        reflection: [
          'Which line of the Lord\u2019s Prayer do you rush past most quickly \u2014 and what might God want to teach you by slowing down there?',
          'Is there a prayer you\u2019ve given up on? What would "always pray and not give up" look like for that request?',
          'How do you typically respond when God\u2019s answer is "no" or "wait"? What does that reveal about your view of him?',
        ],
        application: `Build a simple prayer list this week with four columns: Praise (who God is), Confess (specific sins), Thank (specific gifts), Ask (needs \u2014 yours and others\u2019). Pray through it daily, dating each request \u2014 and record answers when they come. Reviewing answered prayers builds faith for the waiting ones. Also choose one person to intercede for daily this month; tell them you\u2019re praying. Persistent, specific, recorded prayer transforms vague wishing into real conversation.`,
        prayer: `Father, thank you for the astonishing privilege of prayer \u2014 that I, a sinner, may boldly approach your throne through Jesus. Teach me to pray as he taught: your name first, your will before mine, my daily needs honestly brought, my sins specifically confessed, my battles bravely faced. Make me persistent \u2014 one who asks, seeks, and knocks without giving up. And when your answer is "wait" or "no," give me grace to trust your wisdom over my wishes. In Jesus\u2019 name I pray, amen.`,
        quiz: [
          {
            id: 'path-beg-9-exp-q1',
            type: 'mc',
            prompt: 'In the Lord\u2019s Prayer, what comes first?',
            choices: ['Our daily needs', 'God\u2019s name, kingdom, and will', 'Confession of sin', 'Protection from evil'],
            answer: 'God\u2019s name, kingdom, and will',
            explanation: 'Worship and surrender precede requests: "may your name be kept holy... your will be done."',
            tags: ['theology'],
          },
          {
            id: 'path-beg-9-exp-q2',
            type: 'mc',
            prompt: 'According to 1 John 5:14, God hears us when we ask...',
            choices: ['Anything we want', 'According to his will', 'Only in church', 'With perfect words'],
            answer: 'According to his will',
            explanation: 'Confidence in prayer rests on alignment with God\u2019s will \u2014 not on demanding our preferences.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-9-exp-q3',
            type: 'tf',
            prompt: 'Jesus taught that we should always pray and not give up, even when answers seem delayed (Luke 18:1).',
            answer: 'True',
            explanation: 'Persistence in prayer is commanded \u2014 God\u2019s timing is not God\u2019s absence.',
            tags: ['theology'],
          },
        ],
      },
      deep: {
        minutes: 30,
        concept:
          'Prayer\u2019s theology and practice: our access through Christ, the Spirit\u2019s help, praying Scripture, fasting, corporate prayer, and persevering when heaven seems silent.',
        scripture: [
          {
            ref: 'Hebrews 4:16',
            text: 'Let us therefore draw near with boldness to the throne of grace, that we may receive mercy and find grace for help in time of need.',
          },
          {
            ref: 'Romans 8:26',
            text: 'In the same way, the Spirit also helps our weaknesses, for we don\u2019t know how to pray as we ought. But the Spirit himself makes intercession for us with groanings which can\u2019t be uttered.',
          },
          {
            ref: 'James 5:16',
            text: 'Confess your offenses to one another, and pray for one another, that you may be healed. The insistent prayer of a righteous person is powerfully effective.',
          },
        ],
        teaching: `## Our Access: Boldness Through Christ
Under the old covenant, only the high priest entered God\u2019s presence, once a year, with blood and fear. Now, because Jesus our great High Priest has passed through the heavens (Hebrews 4:14), we "draw near with boldness to the throne of grace" (Hebrews 4:16). Boldness \u2014 not arrogance but confident access, the way a beloved child bursts into a father\u2019s study. We come "in Jesus\u2019 name": his righteousness is our entry ticket, his mediation our standing. Never approach prayer groveling as if Christ\u2019s work were insufficient \u2014 and never approach casually as if his holiness were negotiable. Bold and reverent: that\u2019s the posture.

## The Spirit\u2019s Help: Praying in Weakness
"We don\u2019t know how to pray as we ought" (Romans 8:26) \u2014 an honest confession every believer recognizes. The Spirit helps our weakness by interceding "with groanings which can\u2019t be uttered." When grief, confusion, or exhaustion leaves you wordless, you are not prayerless: the Spirit translates your groans into perfect petitions "according to God the Father\u2019s will" (Romans 8:27). This means there is no such thing as a failed prayer from a sincere heart \u2014 the Spirit perfects our imperfect praying. Praying "in the Spirit" (Ephesians 6:18; Jude 1:20) means praying dependently, sincerely, and in line with God\u2019s word.

## Praying Scripture: God\u2019s Words Back to Him
One of the richest practices is praying the Bible itself. The psalms are God\u2019s prayer book \u2014 pray Psalm 23 in need, Psalm 51 in repentance, Psalm 103 in gratitude. Take a promise and turn it into petition: "You said you\u2019d never leave me (Hebrews 13:5) \u2014 I\u2019m holding you to your word." Take a command and turn it into confession: "You said love my neighbor \u2014 forgive my coldness." Praying Scripture guarantees we pray according to God\u2019s will (1 John 5:14), gives words when ours run dry, and slowly rewires our desires to match his. George M\u00fcller read Scripture until a verse became prayer, then prayed it \u2014 try his method.

## Fasting: Prayer\u2019s Intensifier
Fasting \u2014 voluntarily abstaining from food (or other goods) to seek God \u2014 appears throughout Scripture: Moses, David, Elijah, Esther, Daniel, Jesus, Paul. It is not a hunger strike to pressure God but a way to humble the soul (Psalm 35:13), sharpen spiritual hunger, and devote undivided attention to prayer. Jesus assumed his followers would fast ("when you fast," Matthew 6:16) and tied it to urgent seeking (Matthew 9:15). Start small \u2014 skip a meal to pray \u2014 and keep it between you and God ("your Father who sees in secret will reward you," Matthew 6:18). Fasting says with the body what prayer says with the lips: "God, you are more necessary than food."

## Corporate Prayer: Together Is Powerful
Private prayer is essential; corporate prayer is powerful. Jesus promised his presence "where two or three are gathered" in his name (Matthew 18:20). The early church "continued steadfastly... in prayers" together (Acts 2:42), and when they prayed, "the place was shaken" (Acts 4:31). James commands mutual confession and intercession: "the insistent prayer of a righteous person is powerfully effective" (James 5:16). Pray with your spouse, your family, your small group. There\u2019s a synergy in united prayer that private prayer alone doesn\u2019t capture \u2014 and shared answers build shared faith.

## When Heaven Seems Silent
Every praying believer meets silence. Remember: God\u2019s silence is not absence (Psalm 22:1-2 \u2014 even Jesus\u2019 cry was heard). Check your heart: unconfessed sin hinders prayer (Psalm 66:18), as do wrong motives (James 4:3) and broken relationships (1 Peter 3:7). Check your request: is it according to his will (1 John 5:14)? Then keep praying \u2014 "always pray, and not give up" (Luke 18:1). Daniel waited 21 days for his answer (Daniel 10:12-13); God\u2019s delays are not denials. And entrust the outcome: like Jesus in Gethsemane, end every prayer with "yet not my will, but yours" (Luke 22:42). The goal of prayer is not getting our will done in heaven but getting God\u2019s will done on earth \u2014 starting in us.`,
        keyTerms: [
          { term: 'Boldness (parrhesia)', definition: 'Confident, open access to God through Christ \u2014 not timidity, not arrogance (Hebrews 4:16).' },
          { term: 'Fasting', definition: 'Voluntarily abstaining from food to humble the soul and intensify seeking God.' },
          { term: 'Praying Scripture', definition: 'Turning God\u2019s word into prayer \u2014 his promises into petitions, his commands into confessions.' },
          { term: 'Corporate prayer', definition: 'Believers praying together, with Christ\u2019s promised presence (Matthew 18:20).' },
        ],
        crossRefs: ['Psalm 66:18', 'Matthew 7:7-11', 'Matthew 18:20', 'Luke 11:9-13', 'Luke 22:42', 'John 15:7', 'Ephesians 6:18'],
        reflection: [
          'Hebrews 4:16 invites "boldness." What keeps you from praying boldly \u2014 guilt, doubt, formality, busyness? How does Christ\u2019s mediation answer each?',
          'Have you ever experienced the Spirit\u2019s help in wordless prayer (Romans 8:26)? What does that promise mean for your hardest situations?',
          'What would change if you started praying Scripture \u2014 turning promises into petitions \u2014 instead of only praying your own words?',
          'Is there a "silent heaven" situation in your life right now? How do Daniel\u2019s 21 days and Jesus\u2019 Gethsemane shape your response?',
        ],
        application: `This week, upgrade your prayer life in three ways: (1) Pray one psalm aloud each day (try Psalms 23, 51, 63, 103, 139 across five days) \u2014 personalizing it as you go. (2) Fast one meal and devote that time to focused prayer for your most urgent need. (3) Pray with one other person at least once \u2014 spouse, friend, or small group \u2014 sharing one request each and praying aloud together. Note any differences you sense in boldness, focus, and faith. Prayer is caught as well as taught.`,
        prayer: `Father, I come with boldness through Jesus my great High Priest \u2014 not on my merit but on his. Thank you that I never pray alone: your Spirit helps my weakness and intercedes with groanings beyond words. Teach me to pray your word back to you, to fast with a hungry heart, to pray with your people in power, and to persist when heaven seems silent. Align my desires with yours until my prayers are your will on earth as it is in heaven. "Not my will, but yours be done." In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-beg-9-deep-q1',
            type: 'mc',
            prompt: 'According to Romans 8:26, when we don\u2019t know how to pray as we ought...',
            choices: ['We should stop praying', 'The Spirit himself intercedes for us', 'Only pastors can pray for us', 'God doesn\u2019t hear us'],
            answer: 'The Spirit himself intercedes for us',
            explanation: 'The Spirit translates our wordless groans into perfect petitions according to God\u2019s will.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-9-deep-q2',
            type: 'mc',
            prompt: 'Praying Scripture is valuable because it...',
            choices: ['Impresses others', 'Guarantees we pray according to God\u2019s will and gives words when ours fail', 'Replaces personal prayer', 'Is required for forgiveness'],
            answer: 'Guarantees we pray according to God\u2019s will and gives words when ours fail',
            explanation: 'Turning God\u2019s promises into petitions aligns our praying with his revealed will.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-9-deep-q3',
            type: 'tf',
            prompt: 'Fasting in Scripture is presented as a way to humble the soul and intensify seeking God \u2014 not as a way to pressure or manipulate him.',
            answer: 'True',
            explanation: '"I humbled my soul with fasting" (Psalm 35:13) \u2014 fasting expresses dependence, not leverage.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-9-deep-q4',
            type: 'mc',
            prompt: 'According to Psalm 66:18, what can hinder prayer?',
            choices: ['Praying too quietly', 'Cherishing sin in the heart', 'Praying alone', 'Using written prayers'],
            answer: 'Cherishing sin in the heart',
            explanation: '"If I cherished sin in my heart, the Lord wouldn\u2019t have listened" \u2014 unconfessed sin blocks fellowship in prayer.',
            tags: ['theology'],
          },
        ],
      },
      study: {
        minutes: 60,
        concept:
          'A full study of prayer: its basis, its patterns, its power, its hindrances \u2014 and a practical rule of prayer for a lifetime of communion with God.',
        scripture: [
          {
            ref: 'Matthew 6:9-13',
            text: 'Our Father in heaven, may your name be kept holy. Let your Kingdom come. Let your will be done on earth as it is in heaven. Give us today our daily bread. Forgive us our debts, as we also forgive our debtors. Bring us not into temptation, but deliver us from the evil one.',
          },
          {
            ref: 'Luke 11:9-10',
            text: 'I tell you, keep asking, and it will be given you. Keep seeking, and you will find. Keep knocking, and it will be opened for you. For everyone who asks receives. He who seeks finds. To him who knocks it will be opened.',
          },
          {
            ref: 'John 15:7',
            text: 'If you remain in me, and my words remain in you, you will ask whatever you desire, and it will be done for you.',
          },
          {
            ref: '1 John 5:14-15',
            text: 'This is the boldness which we have toward him, that if we ask anything according to his will, he listens to us. And if we know that he listens to us, whatever we ask, we know that we have the petitions which we have asked of him.',
          },
        ],
        teaching: `## 1. The Basis: Why We Can Pray at All
Prayer is astonishing when you think about it: finite, sinful creatures speaking directly to the infinite, holy God \u2014 and being heard. Three truths make it possible. The Father\u2019s fatherhood: through Christ we are adopted children, and children may approach their father (Matthew 6:9; Galatians 4:6). The Son\u2019s mediation: Jesus is our great High Priest who sympathizes with our weaknesses (Hebrews 4:15) and our Advocate with the Father (1 John 2:1) \u2014 we come "in his name," clothed in his righteousness. The Spirit\u2019s help: he intercedes for us and enables us to pray (Romans 8:26; Ephesians 6:18). Prayer is Trinitarian: to the Father, through the Son, by the Spirit. No mediation, no access; with it, boldness.

## 2. The Pattern: The Lord\u2019s Prayer as a Lifetime Curriculum
Unpack Matthew 6:9-13 phrase by phrase as a school of prayer. "Our Father in heaven" \u2014 intimacy ("Father") with transcendence ("in heaven"), and community ("our"). "May your name be kept holy" \u2014 the first petition is for God\u2019s glory, not our comfort; all prayer should begin here. "Let your Kingdom come" \u2014 praying for Christ\u2019s reign in hearts, churches, nations, and at his return. "Let your will be done on earth as it is in heaven" \u2014 surrender that measures our sincerity: do we want God\u2019s will, or merely his signature on ours? "Give us today our daily bread" \u2014 God cares about ordinary needs; "today" teaches daily dependence (like manna). "Forgive us our debts, as we also forgive our debtors" \u2014 confession tied inseparably to forgiving others (vv.14-15 warn the unforgiving). "Bring us not into temptation, but deliver us from the evil one" \u2014 humble awareness of our weakness and the real enemy. Six petitions: three Godward, three humanward \u2014 the perfect balance.

## 3. The Practice: Kinds and Rhythms of Prayer
Scripture models many kinds of prayer. Adoration: praising God for who he is (Psalm 103). Confession: agreeing with God about sin (Psalm 51; 1 John 1:9). Thanksgiving: gratitude for gifts (Philippians 4:6; 1 Thessalonians 5:18). Petition: asking for our needs (Matthew 7:7). Intercession: pleading for others (1 Timothy 2:1; think of Abraham for Sodom, Moses for Israel, Paul for the churches). Listening: "Speak, Yahweh, for your servant hears" (1 Samuel 3:10) \u2014 prayer includes silence before God and his word. As for rhythm: Jesus prayed early (Mark 1:35), often withdrew (Luke 5:16), prayed all night before big decisions (Luke 6:12), and taught persistence (Luke 18:1). Daniel prayed three times daily (Daniel 6:10). Build your own rule: a daily time, a weekly extended time, and "pray without ceasing" (1 Thessalonians 5:17) \u2014 arrow prayers through the day.

## 4. The Power: What Prayer Does
"The insistent prayer of a righteous person is powerfully effective" (James 5:16). Elijah \u2014 "a man with a nature like ours" \u2014 prayed and the rain stopped for three and a half years, then prayed and it returned (James 5:17-18). The early church prayed and "the place was shaken" (Acts 4:31); prayed and Peter walked out of prison (Acts 12:5-11). Prayer moves the hand that moves the world. It changes circumstances (God acts), and it changes us (we align with God). Note John 15:7\u2019s condition for "whatever you desire": "If you remain in me, and my words remain in you" \u2014 abiding shapes desiring, so that what we ask is what he wants to give. The most powerful prayers are prayed by the most surrendered hearts.

## 5. The Hindrances: What Blocks Prayer
Scripture is frank about blockages. Cherished sin: "If I cherished sin in my heart, the Lord wouldn\u2019t have listened" (Psalm 66:18). Wrong motives: "You ask, and don\u2019t receive, because you ask with wrong motives, so that you may spend it on your pleasures" (James 4:3). Unforgiveness: "if you don\u2019t forgive men... neither will your Father forgive your trespasses" (Matthew 6:15). Broken relationships: husbands\u2019 prayers hindered by dishonoring wives (1 Peter 3:7). Doubt: "let him ask in faith, without any doubting" (James 1:6). Neglect of God\u2019s word: "He who turns away his ear from hearing the law, even his prayer is an abomination" (Proverbs 28:9). The solution is never to stop praying but to clear the channel: confess, forgive, reconcile, believe, listen.

## 6. A Rule of Prayer for Life
End with something sustainable. A simple rule: (1) Daily \u2014 a fixed time and place; Scripture then prayer (let God speak first); the fourfold pattern (praise, confess, thank, ask); a written list with dates and answers. (2) Weekly \u2014 one longer session (30-60 minutes): extended worship, intercession for church/missionaries/nations, listening silence. (3) Continually \u2014 breath prayers through the day ("Lord, have mercy"; "Your will be done"); praying for people the moment they come to mind; gratitude as a reflex. (4) Seasonally \u2014 retreat days, fasting, prayer walking. Start where you are, not where the heroes are. Five faithful minutes daily will do more than sporadic hours. And remember the goal: not technique but communion \u2014 a Father and his child, talking through the day, about everything, forever.`,
        keyTerms: [
          { term: 'Adoration', definition: 'Praising God for who he is.' },
          { term: 'Intercession', definition: 'Pleading with God on behalf of others.' },
          { term: 'Rule of prayer', definition: 'A personal, sustainable pattern of daily, weekly, and continual prayer.' },
          { term: 'Unceasing prayer', definition: 'A life lived in ongoing conversation with God (1 Thessalonians 5:17).' },
          { term: 'Boldness (parrhesia)', definition: 'Confident access to God\u2019s throne through Christ (Hebrews 4:16).' },
        ],
        crossRefs: ['1 Samuel 3:10', 'Psalm 51', 'Daniel 6:10', 'Matthew 6:5-8', 'Luke 5:16', 'Luke 18:1-8', 'Ephesians 6:18', '1 Timothy 2:1-4'],
        reflection: [
          'Which of the six petitions of the Lord\u2019s Prayer have you been neglecting? What would praying the full pattern change?',
          'John 15:7 ties "whatever you desire" to remaining in Christ and his words remaining in you. How does abiding reshape our desires \u2014 and therefore our prayers?',
          'Review the hindrances list (Psalm 66:18; James 4:3; Matthew 6:15; 1 Peter 3:7). Is anything currently blocking your prayers? What will you do about it?',
          'What would a sustainable "rule of prayer" look like for your actual life \u2014 not an ideal monk\u2019s schedule, but yours?',
          'Who are three people God has laid on your heart to intercede for persistently? What specifically will you ask for each?',
          'How does viewing prayer as communion with a Father \u2014 rather than a technique for results \u2014 free you from both legalism and disappointment?',
        ],
        application: `Write your personal rule of prayer this week \u2014 one page, realistic: your daily time/place, your pattern (try: Scripture, then praise-confess-thank-ask), your prayer list format, one weekly extended time, and two "arrow prayer" triggers for the day (e.g., every red light, every meal). Share it with one person who will ask you about it monthly. Then begin \u2014 imperfectly but consistently. Review after 30 days: what\u2019s working, what needs adjusting, what has God done? A rule is a trellis, not a cage: it supports growth; it doesn\u2019t replace the Vine.`,
        prayer: `Our Father in heaven \u2014 may your name be kept holy in my life and on my lips. Let your kingdom come in my heart, my home, my church, and my city; let your will be done in me today as it is done in heaven. Give me today my daily bread \u2014 all I truly need \u2014 and teach me daily dependence. Forgive my debts as I forgive my debtors; soften every hard place in my heart toward others. Lead me not into temptation but deliver me from the evil one; make me watchful and brave. Yours is the kingdom, the power, and the glory \u2014 not mine. Teach me to pray without ceasing: in the morning with your word, through the day in communion, in the night with gratitude. Make prayer not my duty but my delight \u2014 a child talking with his Father, now and forever. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-beg-9-study-q1',
            type: 'mc',
            prompt: 'Prayer\u2019s Trinitarian basis is best summarized as...',
            choices: ['To ourselves, through feelings, by effort', 'To the Father, through the Son, by the Spirit', 'To angels, through saints, by rituals', 'To the universe, through meditation'],
            answer: 'To the Father, through the Son, by the Spirit',
            explanation: 'Adopted by the Father, mediated by the Son, helped by the Spirit \u2014 this is why we can pray with boldness.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-9-study-q2',
            type: 'mc',
            prompt: 'According to John 15:7, the condition for "whatever you desire" being granted is...',
            choices: ['Asking loudly', 'Remaining in Christ with his words remaining in us', 'Fasting for 40 days', 'Praying in a group'],
            answer: 'Remaining in Christ with his words remaining in us',
            explanation: 'Abiding shapes our desires to match God\u2019s \u2014 so what we ask is what he wants to give.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-9-study-q3',
            type: 'tf',
            prompt: 'Scripture teaches that cherished sin, wrong motives, unforgiveness, and neglecting God\u2019s word can all hinder prayer.',
            answer: 'True',
            explanation: 'Psalm 66:18; James 4:3; Matthew 6:15; Proverbs 28:9 \u2014 the solution is clearing the channel, not quitting prayer.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-9-study-q4',
            type: 'mc',
            prompt: '"Pray without ceasing" (1 Thessalonians 5:17) most likely means...',
            choices: ['Nonstop verbal praying 24 hours a day', 'A life lived in ongoing, continual conversation with God', 'Repeating one prayer endlessly', 'Praying only in church services'],
            answer: 'A life lived in ongoing, continual conversation with God',
            explanation: 'A continual communion \u2014 arrow prayers, gratitude reflexes, and constant awareness of God through the day.',
            tags: ['theology'],
          },
        ],
      },
    },
  },
  {
    id: 'path-beg-10',
    pathId: 'beginner',
    order: 10,
    title: 'How Should Christians Live?',
    summary:
      'Saved by grace, Christians live for God\u2019s glory \u2014 loving God and neighbor, growing in holiness, and shining as witnesses in the world.',
    layers: {
      core: {
        minutes: 5,
        concept:
          'Christians live as grateful, transformed people: loving God with all we are, loving our neighbors, and letting our light shine before the world.',
        scripture: [
          {
            ref: 'Matthew 22:37-39',
            text: 'Jesus said to him, "\u2018You shall love the Lord your God with all your heart, and with all your soul, and with all your mind.\u2019 This is the first and great commandment. A second likewise is this, \u2018You shall love your neighbor as yourself.\u2019"',
          },
        ],
        teaching: `Salvation is free \u2014 but it\u2019s not the end of the story. God saved us for a purpose: "we are his workmanship, created in Christ Jesus for good works, which God prepared before that we would walk in them" (Ephesians 2:10). The Christian life is the grateful response to grace.

Jesus summed up the whole life in two commandments: love God with everything you are, and love your neighbor as yourself (Matthew 22:37-39). Everything else \u2014 holiness, honesty, generosity, purity \u2014 flows from these two loves. We don\u2019t obey to earn God\u2019s love; we obey because we have it. "We love because he first loved us" (1 John 4:19).

This life has a direction: becoming like Jesus. God\u2019s goal for you is conformity to Christ (Romans 8:29) \u2014 growing in love, joy, peace, patience, and all the fruit of the Spirit (Galatians 5:22-23). And it has a mission: "let your light shine before men; that they may see your good works, and glorify your Father" (Matthew 5:16). Saved people become shining people \u2014 pointing the world to God by how they live and what they say.`,
        reflection: [
          'If someone watched your life for a week with no explanation, what would they conclude you love most?',
          'Which is harder for you right now: loving God with all your heart, or loving your neighbor as yourself? What\u2019s one step in the harder one?',
        ],
        application: `This week, practice the two great commandments deliberately: (1) Love God \u2014 start each day with five minutes of worship and Scripture before touching your phone. (2) Love neighbor \u2014 do one concrete, unprompted act of kindness for someone who can\u2019t repay you. Small, consistent loves are how the Christian life is built \u2014 and how the world sees Jesus in you.`,
        prayer: `Father, thank you for saving me by grace \u2014 now teach me to live by grace. Fill my heart with love for you above all, and love for my neighbor as myself. Make me like Jesus: holy, compassionate, and brave. Let my light shine before others so they glorify you, not me. In Jesus\u2019 name, amen.`,
      },
      expanded: {
        minutes: 15,
        concept:
          'The Christian life is worship-fueled obedience: a transformed mind, a holy life, loving relationships, and faithful witness \u2014 all for God\u2019s glory.',
        scripture: [
          {
            ref: 'Romans 12:1-2',
            text: 'Therefore I urge you, brothers, by the mercies of God, to present your bodies a living sacrifice, holy, acceptable to God, which is your spiritual service. Don\u2019t be conformed to this world, but be transformed by the renewing of your mind, so that you may prove what is the good, well-pleasing, and perfect will of God.',
          },
          {
            ref: 'Micah 6:8',
            text: 'He has shown you, O man, what is good. What does Yahweh require of you, but to act justly, to love mercy, and to walk humbly with your God?',
          },
        ],
        teaching: `## Worship Is the Engine
Paul\u2019s appeal for holy living begins "by the mercies of God" (Romans 12:1) \u2014 eleven chapters of gospel before one chapter of ethics. The order matters: mercy first, then sacrifice. We present our bodies as "living sacrifices" not to earn mercy but because we\u2019ve received it. Worship is not just Sunday singing; it\u2019s the whole life offered to God. When gratitude for grace is the engine, obedience stops feeling like duty and starts feeling like devotion.

## A Transformed Mind
"Don\u2019t be conformed to this world, but be transformed by the renewing of your mind" (Romans 12:2). The world is always discipling us \u2014 through screens, ads, peers, and pressures \u2014 pressing us into its mold. Transformation works from the inside out: as God\u2019s word renews our thinking, our living follows. This is why Scripture intake is non-negotiable for the Christian life: you become like what you behold (2 Corinthians 3:18). Guard your inputs; they\u2019re shaping your outputs.

## What God Requires
Micah\u2019s summary is timeless: "act justly, love mercy, walk humbly with your God" (Micah 6:8). Act justly \u2014 honesty, integrity, fairness in every dealing; God cares about how we treat people when no one\u2019s watching. Love mercy \u2014 not just doing merciful acts but loving mercy: a heart tender toward the suffering, the poor, the overlooked. Walk humbly with God \u2014 the daily, unhurried companionship of prayer, obedience, and dependence. Justice without mercy becomes harsh; mercy without justice becomes sentimental; both without humility become pride.

## Love in Action
Jesus said the world would know his disciples by their love for one another (John 13:35). Love is not a feeling but a doing: "let\u2019s not love in word only, neither with the tongue only, but in deed and truth" (1 John 3:18). It\u2019s patient and kind (1 Corinthians 13:4), it serves (Galatians 5:13), it forgives (Ephesians 4:32), it tells the truth (Ephesians 4:15). And it shines: "let your light shine before men; that they may see your good works, and glorify your Father" (Matthew 5:16). The goal of our goodness is never our reputation but God\u2019s glory.`,
        keyTerms: [
          { term: 'Sanctification', definition: 'The Spirit\u2019s ongoing work of making believers holy in practice.' },
          { term: 'Good works', definition: 'God-glorifying actions flowing from faith \u2014 the purpose of our salvation (Ephesians 2:10).' },
          { term: 'Witness', definition: 'Representing Christ to the world in word and deed (Acts 1:8).' },
          { term: 'Holiness', definition: 'Being set apart for God and growing in moral purity like his.' },
        ],
        reflection: [
          'Romans 12:1 says our sacrifice is motivated "by the mercies of God." How does gratitude-fueled obedience differ from guilt-driven or fear-driven obedience?',
          'What is currently "conforming" you most \u2014 shaping your thinking without you noticing? What would renewed thinking look like there?',
          'Which of Micah\u2019s three \u2014 act justly, love mercy, walk humbly \u2014 comes most naturally to you? Which needs the most growth?',
        ],
        application: `Choose one "justice," one "mercy," and one "humility" practice for this week: e.g., justice \u2014 make right one dishonest thing (a debt, an exaggeration); mercy \u2014 serve someone in need with no audience; humility \u2014 begin each day on your knees, acknowledging dependence. Keep it concrete and small. Then tell one person what God is teaching you \u2014 witness flows naturally from a transformed life.`,
        prayer: `Lord, by your mercies I present myself to you \u2014 a living sacrifice. Renew my mind by your word; don\u2019t let me be conformed to this world. Teach me to act justly, love mercy, and walk humbly with you. Fill me with love for you and for my neighbor. Let my light shine \u2014 not for my glory but for yours. Make me like Jesus, for your name\u2019s sake. Amen.`,
        quiz: [
          {
            id: 'path-beg-10-exp-q1',
            type: 'mc',
            prompt: 'According to Romans 12:1, our holy living is motivated by...',
            choices: ['Fear of punishment', 'The mercies of God', 'Peer pressure', 'Desire for reward'],
            answer: 'The mercies of God',
            explanation: 'Gospel mercy comes first; grateful obedience follows \u2014 never the reverse.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-10-exp-q2',
            type: 'mc',
            prompt: 'Micah 6:8 summarizes what God requires as...',
            choices: ['Rituals and sacrifices', 'Act justly, love mercy, walk humbly with God', 'Wealth and success', 'Isolation from the world'],
            answer: 'Act justly, love mercy, walk humbly with God',
            explanation: 'Justice, mercy, humility \u2014 the timeless shape of godly living.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-10-exp-q3',
            type: 'tf',
            prompt: 'According to Matthew 5:16, the purpose of our good works being seen is so that people glorify God, not us.',
            answer: 'True',
            explanation: '"That they may see your good works, and glorify your Father who is in heaven."',
            tags: ['theology'],
          },
        ],
      },
      deep: {
        minutes: 30,
        concept:
          'Holiness in every area: heart, speech, relationships, work, money, and witness \u2014 the Spirit-empowered, word-shaped life lived for God\u2019s glory alone.',
        scripture: [
          {
            ref: '1 Peter 1:15-16',
            text: 'but just as he who called you is holy, you yourselves also be holy in all of your behavior; because it is written, "You shall be holy, for I am holy."',
          },
          {
            ref: 'Colossians 3:17',
            text: 'Whatever you do, in word or in deed, do all in the name of the Lord Jesus, giving thanks to God the Father, through him.',
          },
          {
            ref: 'Matthew 5:16',
            text: 'Even so, let your light shine before men; that they may see your good works, and glorify your Father who is in heaven.',
          },
        ],
        teaching: `## Holy in All of Life
"Be holy in all of your behavior" (1 Peter 1:15) \u2014 all, not just Sunday mornings. Holiness is not a list of prohibitions but a whole-life orientation: set apart for God and growing like him. It touches the heart first: "Keep your heart with all diligence, for out of it is the wellspring of life" (Proverbs 4:23). Then it flows outward \u2014 because what fills the heart shapes the life.

## The Tongue
Few areas reveal holiness like speech. "If anyone doesn\u2019t bridle his tongue... this man\u2019s religion is worthless" (James 1:26). Our words should be truthful (Ephesians 4:25), necessary and gracious ("let no corrupt speech proceed out of your mouth, but only what is good for building up," Ephesians 4:29), and few enough to be wise ("In the multitude of words there is no lack of disobedience," Proverbs 10:19). Gossip, slander, crude joking, and complaining all fail the test. Ask daily: would I say this if Jesus were visibly in the room? He is.

## Relationships: Love\u2019s Laboratory
God uses people \u2014 especially difficult people \u2014 to make us like Christ. In marriage: "Husbands, love your wives, even as Christ also loved the church" (Ephesians 5:25). In family: "Children, obey your parents in the Lord" (Ephesians 6:1); "Fathers, don\u2019t provoke your children to anger" (Ephesians 6:4). In friendship: "A friend loves at all times" (Proverbs 17:17). With enemies: "Love your enemies... pray for those who mistreat you" (Luke 6:27-28). In church: "Be kind to one another, tenderhearted, forgiving each other, just as God also in Christ forgave you" (Ephesians 4:32). Relationships are where theology becomes biography.

## Work and Money
"Whatever you do, work heartily, as for the Lord, and not for men" (Colossians 3:23) \u2014 this sanctifies every job, from CEO to cleaner. Excellence, integrity, and diligence at work are acts of worship. With money: everything belongs to God (Psalm 24:1); we are managers, not owners. Give generously and cheerfully ("God loves a cheerful giver," 2 Corinthians 9:7), save wisely, avoid debt\u2019s slavery (Proverbs 22:7), and hold possessions loosely \u2014 "where your treasure is, there your heart will be also" (Matthew 6:21). Financial holiness is heart holiness made visible.

## Purity and the Body
"Your body is a temple of the Holy Spirit" (1 Corinthians 6:19) \u2014 so "flee sexual immorality" (1 Corinthians 6:18). God\u2019s design for sex is marriage alone (Hebrews 13:4); everything else \u2014 pornography, hookups, lust \u2014 is theft from God\u2019s design and from future or present spouses. Jesus raised the bar to the heart: "everyone who gazes at a woman to lust after her has committed adultery with her already in his heart" (Matthew 5:28). The path is radical: flee temptation (2 Timothy 2:22), feed purity (Philippians 4:8), and confess quickly when you fall (1 John 1:9). Purity is possible \u2014 by the Spirit, not by willpower alone.

## Witness: Light and Salt
"You are the salt of the earth... You are the light of the world" (Matthew 5:13-14) \u2014 statements of identity, not aspirations. Salt preserves and flavors; light exposes and guides. Our witness has two wings: deed ("let your light shine... that they may see your good works," Matthew 5:16) and word ("always be ready to give an answer... concerning the hope that is in you," 1 Peter 3:15). Deeds without words leave people admiring us; words without deeds leave them doubting us. Both, bathed in love and "with humility and fear" (1 Peter 3:15), point to Christ.`,
        keyTerms: [
          { term: 'Holiness', definition: 'Set apart for God and growing in moral likeness to him \u2014 in all of life.' },
          { term: 'Stewardship', definition: 'Managing God\u2019s gifts (time, money, abilities) faithfully as his manager, not owner.' },
          { term: 'Purity', definition: 'Sexual integrity according to God\u2019s design: chastity before marriage, fidelity within it.' },
          { term: 'Evangelism', definition: 'Sharing the gospel in word and deed so others may know Christ.' },
        ],
        crossRefs: ['Proverbs 4:23', 'Matthew 5:13-16', 'Ephesians 4:29', 'Ephesians 5:25', 'Colossians 3:23', '1 Thessalonians 4:3-5', '1 Peter 3:15'],
        reflection: [
          'Which area \u2014 tongue, relationships, work, money, purity \u2014 does the Spirit most convict you about right now? What\u2019s one concrete change?',
          'How does "whatever you do, do all in the name of the Lord Jesus" (Colossians 3:17) transform the most mundane parts of your week?',
          'What\u2019s the difference between holiness as joyful devotion and holiness as joyless rule-keeping? Which characterizes you?',
          'Who in your life needs both your good deeds and your gospel words? What\u2019s stopping you from giving both?',
        ],
        application: `Do a "holiness review" this week across five areas, rating 1-5 and writing one growth step for each: Speech (truthful? gracious? controlled?), Relationships (loving? forgiving? patient?), Work (excellent? honest? worshipful?), Money (generous? wise? God-owned?), Purity (thoughts? eyes? habits?). Share your lowest area with a trusted Christian friend and ask them to pray for you monthly. Holiness grows best in honest community, not hidden striving.`,
        prayer: `Holy Father, you command me to be holy as you are holy \u2014 in all my behavior. I confess the gap between my profession and my practice: my words, my relationships, my work, my money, my purity. Cleanse me and fill me with your Spirit. Make my speech gracious, my relationships loving, my work worshipful, my money generous, my body pure. Let my light shine before others \u2014 in deed and in word \u2014 so they glorify you. Make me like Jesus, little by little, day by day. Amen.`,
        quiz: [
          {
            id: 'path-beg-10-deep-q1',
            type: 'mc',
            prompt: 'According to 1 Peter 1:15, believers should be holy...',
            choices: ['Only on Sundays', 'In all of their behavior', 'Only in church', 'When others are watching'],
            answer: 'In all of their behavior',
            explanation: 'Holiness is whole-life: heart, speech, relationships, work, money, purity.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-10-deep-q2',
            type: 'mc',
            prompt: 'Colossians 3:23 teaches Christians to work...',
            choices: ['Only for Christian employers', 'Heartily, as for the Lord and not for men', 'As little as possible', 'Only for money'],
            answer: 'Heartily, as for the Lord and not for men',
            explanation: 'All legitimate work becomes worship when done for Christ.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-10-deep-q3',
            type: 'tf',
            prompt: 'Jesus taught that lustful looking is already adultery in the heart (Matthew 5:28) \u2014 purity begins inwardly.',
            answer: 'True',
            explanation: 'Holiness starts in the heart before it reaches the hands.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-10-deep-q4',
            type: 'mc',
            prompt: 'According to 1 Peter 3:15, our witness should combine...',
            choices: ['Arguments and debates', 'Good deeds and a ready verbal answer, given with gentleness', 'Silence only', 'Criticism of unbelievers'],
            answer: 'Good deeds and a ready verbal answer, given with gentleness',
            explanation: 'Deed and word, with humility and reverence \u2014 both wings of witness.',
            tags: ['theology'],
          },
        ],
      },
      study: {
        minutes: 60,
        concept:
          'A full study of Christian living: the gospel roots of obedience, the Spirit\u2019s power, holiness in every domain, love as the fulfilling of the law, and mission to the world.',
        scripture: [
          {
            ref: 'Galatians 5:16',
            text: 'But I say, walk by the Spirit, and you won\u2019t fulfill the lust of the flesh.',
          },
          {
            ref: '1 John 3:18',
            text: 'My little children, let\u2019s not love in word only, neither with the tongue only, but in deed and truth.',
          },
          {
            ref: 'Matthew 28:19-20',
            text: 'Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I commanded you. Behold, I am with you always, even to the end of the age.',
          },
          {
            ref: '2 Corinthians 3:18',
            text: 'But we all, with unveiled face seeing the glory of the Lord as in a mirror, are transformed into the same image from glory to glory, even as from the Lord, the Spirit.',
          },
        ],
        teaching: `## 1. The Roots: Gospel-Driven Obedience
All Christian ethics grow from gospel soil. The Bible\u2019s pattern is always indicative then imperative: you are saved (indicative), therefore live this way (imperative). "You were bought with a price. Therefore glorify God" (1 Corinthians 6:20). Reverse the order and you get legalism \u2014 obedience to earn love. Keep the order and you get love-driven obedience \u2014 the only kind God wants: "If you love me, keep my commandments" (John 14:15). Three corruptions to avoid: legalism (obeying to be accepted), license (disobeying because we\u2019re accepted), and lethargy (not caring either way). The gospel path is grateful, joyful, earnest obedience \u2014 "we love because he first loved us" (1 John 4:19).

## 2. The Power: Walking by the Spirit
"Walk by the Spirit, and you won\u2019t fulfill the lust of the flesh" (Galatians 5:16). The Christian life is not self-improvement with religious branding; it is supernatural life by supernatural power. The flesh \u2014 our fallen nature \u2014 and the Spirit are at war within every believer (Galatians 5:17). Victory comes not by white-knuckling but by walking: daily dependence, yielding, and step-by-step obedience as the Spirit leads. And transformation is by beholding: "we all, with unveiled face seeing the glory of the Lord... are transformed into the same image from glory to glory" (2 Corinthians 3:18). You become like what you gaze at. Gaze at Christ in the word, and the Spirit reshapes you into his likeness \u2014 gradually, genuinely, gloriously.

## 3. The Shape: Love Fulfilling the Law
"Love is the fulfillment of the law" (Romans 13:10). The Ten Commandments and all biblical ethics are love spelled out: love for God (commandments 1-4: no other gods, no idols, honor his name, keep his day) and love for neighbor (5-10: honor parents, no murder, no adultery, no theft, no false witness, no coveting). This reframes every "rule": each commandment is a love-protection. "Don\u2019t steal" protects your neighbor\u2019s good; "don\u2019t commit adultery" protects covenant love; "remember the Sabbath" protects your relationship with God from being crowded out. And 1 Corinthians 13 defines love\u2019s character: patient, kind, not envious or boastful, not self-seeking, rejoicing in truth, always protecting, trusting, hoping, persevering. Measure your relationships by this chapter regularly \u2014 it\u2019s a mirror.

## 4. The Domains: Holiness Everywhere
Work through the domains deliberately. Mind: "whatever things are true, honorable, just, pure, lovely... think about these things" (Philippians 4:8) \u2014 holiness begins between the ears. Speech: truthful, edifying, gracious (Ephesians 4:25, 29; Colossians 4:6). Body: a temple \u2014 purity, health, rest as stewardship (1 Corinthians 6:19-20). Sexuality: God\u2019s gift within marriage alone (Hebrews 13:4; 1 Thessalonians 4:3-5). Money: earn honestly, give generously, save wisely, spend thoughtfully \u2014 "do all to the glory of God" (1 Corinthians 10:31). Time: "redeeming the time, because the days are evil" (Ephesians 5:16). Relationships: forgive as forgiven (Ephesians 4:32), bear burdens (Galatians 6:2), speak truth in love (Ephesians 4:15). Citizenship: honor authorities (Romans 13:1), pray for leaders (1 Timothy 2:2), seek the city\u2019s good (Jeremiah 29:7). No domain is secular; all is sacred.

## 5. The Community: We Grow Together
Sanctification is a team sport. God gave the church \u2014 apostles, prophets, evangelists, pastors, teachers \u2014 "for the perfecting of the saints... until we all attain to the unity of the faith" (Ephesians 4:11-13). We need corporate worship (Hebrews 10:25), the Lord\u2019s Supper and baptism, mutual accountability ("exhort one another day by day," Hebrews 3:13), confession (James 5:16), and bearing one another\u2019s burdens (Galatians 6:2). Lone-ranger Christianity withers; connected Christianity flourishes. Commit to a local church \u2014 not as a consumer but as a member: serving, giving, submitting, loving. Your growth and others\u2019 depend on it.

## 6. The Mission: Blessed to Be a Blessing
The Christian life aims outward. The Great Commission: "Go and make disciples of all nations... teaching them to observe all things that I commanded you" (Matthew 28:19-20) \u2014 with the promise "I am with you always." Our mission has three dimensions: proclamation (telling the gospel, Romans 10:14-15), demonstration (mercy, justice, compassion \u2014 "pure religion... is this: to visit the fatherless and widows," James 1:27), and incarnation (living among people as salt and light). Every believer is a missionary \u2014 to a neighborhood, a workplace, a campus, a family. Pray for the lost by name, build genuine friendships, serve visibly, speak naturally about Christ, and trust God with results. "You are a chosen race, a royal priesthood... that you may proclaim the excellence of him who called you out of darkness into his marvelous light" (1 Peter 2:9). Saved to shine: that\u2019s the Christian life in four words.`,
        keyTerms: [
          { term: 'Indicative and imperative', definition: 'Gospel pattern: what God has done (indicative) grounds what we must do (imperative).' },
          { term: 'Mortification', definition: 'Putting sin to death by the Spirit\u2019s power (Romans 8:13; Colossians 3:5).' },
          { term: 'Vivification', definition: 'Coming alive to righteousness \u2014 cultivating new holy habits by the Spirit.' },
          { term: 'Great Commission', definition: 'Christ\u2019s command to make disciples of all nations (Matthew 28:19-20).' },
          { term: 'Salt and light', definition: 'Believers\u2019 identity: preserving/flavoring the world and illuminating it with truth (Matthew 5:13-16).' },
        ],
        crossRefs: ['Matthew 5:13-16', 'John 14:15', 'Romans 13:8-10', '1 Corinthians 10:31', 'Galatians 6:2', 'Ephesians 4:11-16', 'Philippians 4:8', 'James 1:27'],
        reflection: [
          'Where have you reversed the gospel order \u2014 trying to obey in order to be accepted rather than obeying because you are accepted?',
          'Galatians 5:17 describes the Spirit-flesh war within every believer. What does "walking by the Spirit" look like practically in your most contested area?',
          'Read 1 Corinthians 13 slowly, substituting your name for "love." Where does the mirror show the biggest gap \u2014 and what will you do about it?',
          'Which domain of your life (mind, speech, body, money, time, relationships) is least surrendered to Christ right now? What\u2019s one step of surrender?',
          'How are you currently engaged in the church\u2019s life \u2014 as a consumer or a member? What would deeper commitment look like?',
          'Who are the 3-5 unbelievers closest to you? What would faithful "salt and light" presence look like toward each this month?',
        ],
        application: `Create a personal "rule of life" this week \u2014 a one-page plan for gospel-shaped living: (1) Daily: Scripture + prayer time, one act of love, one moment of witness-awareness. (2) Weekly: Lord\u2019s Day worship, one serving act, Sabbath rest. (3) Monthly: generosity review, confession/accountability conversation, one hospitality meal. (4) Ongoing: 3-5 unbelievers prayed for by name; one skill or gift deployed for the church. Review it monthly with a friend. The Christian life isn\u2019t perfection \u2014 it\u2019s direction: "forgetting the things which are behind... I press on" (Philippians 3:13-14).`,
        prayer: `Lord Jesus, you saved me by grace \u2014 now shape me by grace. I am your workmanship, created for good works you prepared; show me my works and give me strength to walk in them. Fill me with your Spirit so I walk by the Spirit and not the flesh. Transform me by beholding your glory \u2014 from glory to glory. Make my love patient and kind, my speech gracious and true, my work worshipful, my money generous, my body pure, my relationships forgiving. Plant me deep in your church; make me salt and light in my world. And when I fail \u2014 as I will \u2014 let me run to your cross, not from it, and press on again. Use my life to proclaim your excellence, until you return and make all things new. In your name I pray, amen.`,
        quiz: [
          {
            id: 'path-beg-10-study-q1',
            type: 'mc',
            prompt: 'The Bible\u2019s pattern for Christian ethics is...',
            choices: ['Imperative then indicative (obey to be saved)', 'Indicative then imperative (saved, therefore obey)', 'Imperative only', 'No pattern at all'],
            answer: 'Indicative then imperative (saved, therefore obey)',
            explanation: 'Gospel indicatives ground ethical imperatives \u2014 "you were bought with a price, therefore glorify God."',
            tags: ['theology'],
          },
          {
            id: 'path-beg-10-study-q2',
            type: 'tf',
            prompt: 'According to 2 Corinthians 3:18, believers are transformed into Christ\u2019s image by beholding his glory \u2014 "from glory to glory" by the Spirit.',
            answer: 'True',
            explanation: 'You become like what you gaze at: beholding Christ in the word, the Spirit reshapes you.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-10-study-q3',
            type: 'mc',
            prompt: 'Romans 13:10 says "love is the fulfillment of the law" because...',
            choices: ['Love replaces all commands', 'Every commandment spells out love for God or neighbor in specific situations', 'Feelings matter more than actions', 'The law was abolished'],
            answer: 'Every commandment spells out love for God or neighbor in specific situations',
            explanation: 'The commandments are love made concrete \u2014 protections for our loves, not arbitrary rules.',
            tags: ['theology'],
          },
          {
            id: 'path-beg-10-study-q4',
            type: 'mc',
            prompt: 'The Great Commission (Matthew 28:19-20) commands disciples to...',
            choices: ['Build church buildings', 'Make disciples of all nations, baptizing and teaching them to observe Christ\u2019s commands', 'Avoid unbelievers', 'Wait for Christ\u2019s return passively'],
            answer: 'Make disciples of all nations, baptizing and teaching them to observe Christ\u2019s commands',
            explanation: 'Go, make disciples, baptize, teach \u2014 with Christ\u2019s abiding presence promised.',
            tags: ['theology'],
          },
        ],
      },
    },
  },
];

/* ------------------------------------------------------------------ */
/* INTERMEDIATE PATH — 3 full lessons, 7 stubs                         */
/* ------------------------------------------------------------------ */

/**
 * Builds a structurally valid stub lesson: a solid core layer plus brief
 * but coherent expanded/deep/study layers. The LessonView shows a note
 * that deeper layers are on the way.
 */
function stubLesson(
  id: string,
  order: number,
  title: string,
  summary: string,
  concept: string,
  scripture: { ref: string; text: string }[],
  coreTeaching: string,
  reflection: string[],
  application: string,
  prayer: string,
  notes: { expanded: string; deep: string; study: string },
): LayeredLesson {
  const core: LessonLayer = {
    minutes: 5,
    concept,
    scripture,
    teaching: coreTeaching,
    reflection: reflection.slice(0, 2),
    application,
    prayer,
  };
  const brief = (minutes: 15 | 30 | 60, teaching: string): LessonLayer => ({
    minutes,
    concept,
    scripture: scripture.slice(0, 1),
    teaching,
    reflection: reflection.slice(0, 2),
    application,
    prayer,
  });
  return {
    id,
    pathId: 'intermediate',
    order,
    title,
    summary,
    status: 'stub',
    layers: {
      core,
      expanded: brief(15, notes.expanded),
      deep: brief(30, notes.deep),
      study: brief(60, notes.study),
    },
  };
}

const INTERMEDIATE_FULL: LayeredLesson[] = [
  {
    id: 'path-int-1',
    pathId: 'intermediate',
    order: 1,
    title: 'Understanding Scripture',
    summary:
      'How to read the Bible well: observing what it says, interpreting what it means, and applying what it requires \u2014 in context and in community.',
    layers: {
      core: {
        minutes: 5,
        concept:
          'The Bible is meant to be understood: read it carefully in context, interpret each passage by its plain intended meaning, and apply it obediently.',
        scripture: [
          {
            ref: '2 Timothy 2:15',
            text: 'Give diligence to present yourself approved by God, a workman who doesn\u2019t need to be ashamed, properly handling the Word of Truth.',
          },
        ],
        teaching: `God gave us his word to be understood, not merely admired. Paul tells Timothy to be a workman who "properly handles the Word of Truth" (2 Timothy 2:15) \u2014 the image is a craftsman cutting straight, not crooked. Good Bible reading is careful work, but it\u2019s work anyone can learn.

Start with three simple steps. Observe: what does the passage actually say? Read slowly, notice repeated words, and ask who, what, when, where, why. Interpret: what did this mean to the original readers? A text cannot mean today what it never meant then \u2014 context (the surrounding verses, the book\u2019s purpose, the historical setting) controls meaning. Apply: what does this require of me? Knowledge without obedience puffs up (1 Corinthians 8:1); James says be "doers of the word, and not only hearers" (James 1:22).

Two guardrails: pray before you read \u2014 "Open my eyes, that I may see wondrous things out of your law" (Psalm 119:18) \u2014 and read in community. The Ethiopian eunuch needed Philip\u2019s help (Acts 8:31); you need teachers, friends, and the church too.`,
        reflection: [
          'When you read the Bible, do you tend to skip straight to "what does this mean for me?" without first asking what it meant originally? What might you be missing?',
          'Who helps you understand Scripture \u2014 a pastor, a friend, a study group? If no one, what\u2019s one step toward reading in community?',
        ],
        application: `This week, study one short passage (try Philippians 4:4-7) using the three steps: (1) Observe \u2014 read it five times slowly, list 10 observations. (2) Interpret \u2014 read the surrounding chapter for context; check a study Bible note on any confusing phrase. (3) Apply \u2014 write one specific obedience. Pray Psalm 119:18 before you begin. Notice how much richer careful reading is than skimming.`,
        prayer: `Father, thank you for a word meant to be understood. Open my eyes to see wonderful things in it. Make me a careful workman \u2014 observing closely, interpreting honestly in context, and applying obediently. Give me teachers and friends to read alongside. And keep me from twisting your word; let it shape me instead. In Jesus\u2019 name, amen.`,
      },
      expanded: {
        minutes: 15,
        concept:
          'Sound interpretation follows the author\u2019s intended meaning in context \u2014 honoring genre, history, and the whole counsel of Scripture.',
        scripture: [
          {
            ref: 'Acts 17:11',
            text: 'Now these were more noble than those in Thessalonica, in that they received the word with all readiness of mind, examining the Scriptures daily to see whether these things were so.',
          },
          {
            ref: 'Psalm 119:18',
            text: 'Open my eyes, that I may see wondrous things out of your law.',
          },
        ],
        teaching: `## Context Is King
The most important rule of interpretation: context determines meaning. Every verse sits in a paragraph, every paragraph in a book, every book in the Bible\u2019s storyline. "I can do all things through Christ, who strengthens me" (Philippians 4:13) is not a promise of athletic victory \u2014 in context, Paul is talking about contentment in plenty and in need (vv.11-12). Ripping verses from context is how cults are built and how believers get misled. Always ask: what did the author just say? What will he say next? What is this book about?

## Genre Matters
We instinctively read genres differently: poetry as poetry, law as law, parable as parable. The Bible needs the same sense. Psalms use vivid imagery \u2014 "the trees of the field shall clap their hands" (Isaiah 55:12) is poetry, not botany. Proverbs give general wisdom, not ironclad promises \u2014 "Train up a child in the way he should go, and when he is old he will not depart from it" (Proverbs 22:6) is a principle, not a guarantee that removes human choice. Parables make one main point; don\u2019t allegorize every detail. Apocalyptic (Daniel, Revelation) uses symbols. Narrative describes what happened \u2014 not everything described is prescribed (David\u2019s polygamy is recorded, not recommended).

## The Plain Sense
Seek the author\u2019s intended meaning \u2014 what the original author meant his original readers to understand. This is called the historical-grammatical method: history (what did words and customs mean then?) and grammar (how do the sentences actually work?). Avoid two ditches: hyper-literalism (demanding wooden literalness of obvious figures of speech) and unchecked spiritualizing (finding hidden meanings the author never intended). If the plain sense makes sense, seek no other sense.

## Scripture Interprets Scripture
The Bible is its own best commentary. Unclear passages yield to clear ones: let the plain explain the puzzling. Compare Scripture with Scripture \u2014 a concordance or cross-references reveal how the Bible uses its own terms. And read the whole counsel: "All Scripture is God-breathed" (2 Timothy 3:16), so no doctrine should rest on one verse alone. The Bereans were called "noble" because they "examined the Scriptures daily to see whether these things were so" (Acts 17:11) \u2014 test every teaching, including this lesson, by the word itself.`,
        keyTerms: [
          { term: 'Exegesis', definition: 'Drawing meaning out of the text \u2014 discovering the author\u2019s intended meaning.' },
          { term: 'Eisegesis', definition: 'Reading one\u2019s own ideas into the text \u2014 the opposite (and enemy) of exegesis.' },
          { term: 'Context', definition: 'The surrounding verses, book, and historical setting that determine a passage\u2019s meaning.' },
          { term: 'Genre', definition: 'The type of literature (poetry, law, narrative, parable, letter, prophecy) shaping how a passage should be read.' },
        ],
        reflection: [
          'Can you think of a verse you\u2019ve seen used out of context? What does its actual context change?',
          'Which genre do you find hardest to read well \u2014 prophecy, poetry, wisdom, apocalyptic? What would help?',
          'How do you currently test teachings you hear \u2014 sermons, books, podcasts \u2014 against Scripture like the Bereans?',
        ],
        application: `Pick a verse you\u2019ve quoted before and do a "context check": read the full chapter it sits in, note the book\u2019s genre and purpose (a study Bible introduction helps), and ask what the author meant for his original readers. Write down anything your new understanding changes. Then share one insight with a friend \u2014 teaching what you learn cements careful habits.`,
        prayer: `Lord, make me a noble Berean \u2014 receiving your word eagerly and examining it carefully. Guard me from twisting Scripture to fit my preferences; teach me to let context, genre, and your whole counsel shape my understanding. Open my eyes, and make me a doer of what I learn. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-int-1-exp-q1',
            type: 'mc',
            prompt: 'The most important rule of biblical interpretation is...',
            choices: ['Find the hidden code', 'Context determines meaning', 'Follow your feelings', 'Only read the New Testament'],
            answer: 'Context determines meaning',
            explanation: 'A text cannot mean today what it never meant in its original context.',
            tags: ['hermeneutics'],
          },
          {
            id: 'path-int-1-exp-q2',
            type: 'mc',
            prompt: 'Proverbs 22:6 ("Train up a child...") should be read as...',
            choices: ['An absolute guarantee with no exceptions', 'General wisdom literature \u2014 a principle, not an ironclad promise', 'A law of Moses', 'A prophecy about Christ'],
            answer: 'General wisdom literature \u2014 a principle, not an ironclad promise',
            explanation: 'Proverbs give Spirit-inspired general wisdom for life, not unconditional guarantees.',
            tags: ['hermeneutics'],
          },
          {
            id: 'path-int-1-exp-q3',
            type: 'tf',
            prompt: 'The Bereans were called "noble" because they tested Paul\u2019s teaching against the Scriptures daily (Acts 17:11).',
            answer: 'True',
            explanation: 'Examining teaching by Scripture \u2014 including apostolic teaching \u2014 is the noble pattern.',
            tags: ['hermeneutics'],
          },
        ],
      },
      deep: {
        minutes: 30,
        concept:
          'A working method for Bible study: observation, interpretation, application \u2014 with attention to covenants, the Christ-centered storyline, and the Spirit\u2019s illumination.',
        scripture: [
          {
            ref: 'Nehemiah 8:8',
            text: 'They read in the book, in the law of God, distinctly; and they gave the sense, so that they understood the reading.',
          },
          {
            ref: 'Luke 24:44-45',
            text: 'He said to them, "This is what I told you, while I was still with you, that all things which are written in the law of Moses, the prophets, and the psalms, concerning me must be fulfilled." Then he opened their minds, that they might understand the Scriptures.',
          },
          {
            ref: '1 Corinthians 2:14',
            text: 'Now the natural man doesn\u2019t receive the things of God\u2019s Spirit, for they are foolishness to him, and he can\u2019t know them, because they are spiritually discerned.',
          },
        ],
        teaching: `## The Three Steps, Done Well
Observation: slow down. Read the passage repeatedly \u2014 in different translations if possible. Mark repeated words, contrasts, commands, promises, and connecting words (for, therefore, but, so that). Ask the six journalistic questions: who, what, when, where, why, how. Note the structure: how does the author build his argument? Ten careful observations beat ten hasty conclusions.

Interpretation: answer "what did this mean then?" Consult context first (paragraph, chapter, book), then cross-references (how does Scripture elsewhere use these terms?), then background (customs, geography, history \u2014 a study Bible or commentary helps). Let the clear interpret the unclear. Remember the principle: one interpretation, many applications. A passage has one God-intended meaning (what the author meant), though it may apply to life in many ways.

Application: bridge from "then" to "now." Identify the timeless principle \u2014 what is true for all people in all times? Then ask: how does this confront my beliefs, desires, habits, relationships? Be specific: who, what, when. Vague application ("be nicer") produces vague change. And apply in dependence: "apart from me, you can do nothing" (John 15:5).

## Reading in the Storyline
Every passage sits somewhere in the Bible\u2019s unfolding story: creation \u2192 fall \u2192 redemption \u2192 consummation. Ask where your passage falls and how it moves the story toward Christ. Old Testament law? It exposes sin and points to the need for a Savior (Galatians 3:24). Wisdom? It shows life in God\u2019s world, fulfilled in Christ "in whom are all the treasures of wisdom" (Colossians 2:3). Prophecy? Promise straining toward fulfillment. This keeps us from moralizing every story (David and Goliath is not mainly "face your giants") and from treating the Old Testament as someone else\u2019s mail.

## The Spirit\u2019s Role: Illumination
Technique alone is insufficient: "the natural man doesn\u2019t receive the things of God\u2019s Spirit... because they are spiritually discerned" (1 Corinthians 2:14). We need illumination \u2014 the Spirit opening our minds as Jesus did for the disciples: "he opened their minds, that they might understand the Scriptures" (Luke 24:45). So pray before, during, and after study. Expect the Spirit to convict, comfort, and clarify \u2014 often through the very means of careful study. Diligence and dependence are friends, not rivals: "Think about what I say, for the Lord will give you understanding" (2 Timothy 2:7).

## Handling Hard Passages
You will meet difficulties \u2014 apparent contradictions, troubling commands, obscure symbols. Don\u2019t panic and don\u2019t ignore. First, check your understanding: most "contradictions" dissolve with context and genre awareness. Second, consult trusted resources: study Bibles, commentaries, pastors. Third, hold unclear passages loosely and clear ones firmly \u2014 never build a doctrine on an obscure verse. Fourth, trust God\u2019s character: if a passage seems to portray him as cruel or unjust, your interpretation \u2014 not his character \u2014 needs adjusting. Peter admitted some things in Paul are "hard to understand" (2 Peter 3:16); humility before hard texts is a mark of maturity, not weakness.`,
        keyTerms: [
          { term: 'Illumination', definition: 'The Spirit\u2019s work of opening minds to understand Scripture (Luke 24:45).' },
          { term: 'Historical-grammatical method', definition: 'Interpreting by the author\u2019s intended meaning, using history and grammar.' },
          { term: 'Analogy of faith', definition: 'The principle that Scripture interprets Scripture; unclear passages yield to clear ones.' },
          { term: 'Application', definition: 'Bridging the text\u2019s timeless principle to specific present obedience.' },
        ],
        crossRefs: ['Psalm 119:18', 'Acts 8:30-35', 'Acts 17:11', '2 Timothy 2:7', '2 Timothy 2:15', '2 Peter 3:16'],
        reflection: [
          'Walk through the three steps on a familiar passage (e.g., John 3:16): what do you observe that you\u2019d never noticed? What did it mean originally? What\u2019s one specific application?',
          'How does locating a passage in the Bible\u2019s storyline (creation-fall-redemption-consummation) change the way you read Old Testament narratives?',
          'What\u2019s your current practice when you hit a hard passage \u2014 skip, stress, or study? What resources could help you study better?',
          'How do you balance diligent study with dependence on the Spirit? Do you lean too far toward technique or toward passivity?',
        ],
        application: `Choose one chapter (try Ephesians 1 or Psalm 1) and work it fully this week: Day 1-2, observation \u2014 read repeatedly, mark structure, list 20 observations. Day 3-4, interpretation \u2014 study context, cross-references, and one commentary or study Bible. Day 5, application \u2014 write the timeless principle and three specific applications (belief to change, sin to confess, action to take). Day 6, pray it back to God. Day 7, share one insight with someone. This is the method in miniature \u2014 master it and you can study any passage.`,
        prayer: `Lord, you have given me your word and your Spirit \u2014 make me diligent and dependent. Teach me to observe carefully, interpret honestly in context, and apply specifically and obediently. Open my mind as you opened the disciples\u2019. Give me humility before hard passages and confidence in clear ones. Let me handle your word accurately \u2014 and let it handle me. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-int-1-deep-q1',
            type: 'mc',
            prompt: 'The principle "one interpretation, many applications" means...',
            choices: ['A passage can mean anything', 'A passage has one God-intended meaning but may apply to life in many ways', 'Only pastors can interpret', 'Application doesn\u2019t matter'],
            answer: 'A passage has one God-intended meaning but may apply to life in many ways',
            explanation: 'Meaning is fixed by the author\u2019s intent; applications multiply as the principle meets different lives.',
            tags: ['hermeneutics'],
          },
          {
            id: 'path-int-1-deep-q2',
            type: 'mc',
            prompt: 'According to 1 Corinthians 2:14, why is the Spirit\u2019s illumination necessary?',
            choices: ['The Bible is poorly written', 'Spiritual truths are spiritually discerned \u2014 the natural mind can\u2019t receive them', 'Only scholars can understand', 'Translation is impossible'],
            answer: 'Spiritual truths are spiritually discerned \u2014 the natural mind can\u2019t receive them',
            explanation: 'Technique without the Spirit is insufficient; diligence and dependence work together.',
            tags: ['hermeneutics'],
          },
          {
            id: 'path-int-1-deep-q3',
            type: 'tf',
            prompt: 'When facing an apparent contradiction, the right approach is to hold clear passages firmly, investigate carefully, and trust God\u2019s character.',
            answer: 'True',
            explanation: 'Most difficulties resolve with context and genre; humility before hard texts is maturity.',
            tags: ['hermeneutics'],
          },
          {
            id: 'path-int-1-deep-q4',
            type: 'mc',
            prompt: 'Nehemiah 8:8 describes the Levites as reading "distinctly" and giving "the sense" so people understood. This models...',
            choices: ['Entertainment', 'Expository teaching \u2014 explaining Scripture\u2019s meaning clearly', 'Silent meditation only', 'Skipping hard parts'],
            answer: 'Expository teaching \u2014 explaining Scripture\u2019s meaning clearly',
            explanation: 'Faithful teaching reads God\u2019s word clearly and explains its sense \u2014 the pattern for preachers and teachers.',
            tags: ['hermeneutics'],
          },
        ],
      },
      study: {
        minutes: 60,
        concept:
          'A full hermeneutics primer: the need for interpretation, the method (observe-interpret-apply), genre and context, biblical theology, the Spirit\u2019s illumination, and handling difficulties.',
        scripture: [
          {
            ref: '2 Timothy 2:15',
            text: 'Give diligence to present yourself approved by God, a workman who doesn\u2019t need to be ashamed, properly handling the Word of Truth.',
          },
          {
            ref: 'Acts 8:30-31',
            text: 'Philip ran to him, and heard him reading Isaiah the prophet, and said, "Do you understand what you are reading?" He said, "How can I, unless someone explains it to me?"',
          },
          {
            ref: '2 Peter 3:16',
            text: 'as also in all of his letters, speaking in them of these things. In those, there are some things that are hard to understand, which the ignorant and unsettled twist, as they do also to the other Scriptures, to their own destruction.',
          },
          {
            ref: 'Psalm 119:130',
            text: 'The entrance of your words gives light. It gives understanding to the simple.',
          },
        ],
        teaching: `## 1. Why Interpretation Needs Care
Peter warns that the "ignorant and unsettled twist" hard passages "to their own destruction" (2 Peter 3:16) \u2014 mishandling Scripture is spiritually dangerous, not merely academically sloppy. Every heresy in church history has quoted Bible verses; the difference between truth and error is usually not whether Scripture is cited but whether it is handled rightly. Add the distance: we read across millennia, languages, and cultures. The Ethiopian eunuch\u2019s honest question \u2014 "How can I, unless someone explains it to me?" (Acts 8:31) \u2014 is the beginning of wisdom. Interpretation is not optional expertise for scholars; it is faithful stewardship for every reader.

## 2. Observation: The Neglected Foundation
Most misinterpretation comes not from bad method but from hasty reading. Train yourself to see: read the passage in several translations; outline its flow; note repeated words and themes; mark contrasts, comparisons, commands, promises, and logical connectors (for, therefore, because, so that, but). Ask who is speaking, to whom, about what, when, where, why \u2014 and how the passage fits its book. Count: how many times does Paul say "in Christ" in Ephesians 1? What does John repeat in 1 John? Observation is 80% of interpretation: what you see determines what you conclude. Rushing here is like a detective skipping the crime scene.

## 3. Interpretation: Meaning Then
Determine the author\u2019s intended meaning for the original audience. Work outward in circles: immediate context (surrounding paragraphs), book context (the author\u2019s purpose \u2014 read the introduction in a study Bible), canonical context (where this sits in the storyline; how later Scripture uses it), historical context (customs, geography, situation). Honor genre at every step: read law as covenant stipulation, narrative as theological history (descriptive, not always prescriptive), poetry as emotive imagery, prophecy as forth-telling with fore-telling, parables as single-point stories, epistles as occasional letters (written to real situations \u2014 reconstruct the occasion), apocalyptic as symbolic visions of cosmic conflict. Consult cross-references and trusted commentaries \u2014 standing on scholars\u2019 shoulders is humility, not cheating.

## 4. Biblical Theology: The Storyline Lens
Beyond individual passages, trace themes across the whole canon: temple (Eden \u2192 tabernacle \u2192 temple \u2192 Christ \u2192 church \u2192 new creation), sacrifice, covenant, kingdom, exile and return. This "biblical theology" keeps us from flattening Scripture into timeless moralisms and shows how each part serves the whole. It also guards Christ-centered reading: Jesus claimed all Scripture testifies of him (John 5:39; Luke 24:27) \u2014 not that every verse is a secret code, but that every thread belongs to the tapestry culminating in him. Ask of any passage: how does this advance God\u2019s redemptive plan? How does it look different in light of Christ\u2019s coming?

## 5. Application: Truth Then, Obedience Now
Bridge the gap in two moves. First, distill the timeless principle: what does this teach about God, humanity, Christ, or godly living that transcends the original situation? (Paul\u2019s command to "greet one another with a holy kiss" (Romans 16:16) reflects the principle of warm Christian greeting \u2014 the form varies by culture.) Second, contextualize to your life: what belief must change? What sin must be confessed? What action must be taken \u2014 specifically, measurably, soon? Apply to heart before hands: God wants transformed affections, not just modified behavior. And apply corporately too: what does this mean for our church, our family, our witness?

## 6. Difficulties, Disputes, and Humility
You will encounter genuine difficulties: apparent contradictions (resolve with context, genre, and manuscript awareness \u2014 most evaporate under study), morally troubling passages (the conquest of Canaan, imprecatory psalms \u2014 read within the storyline, God\u2019s justice, and progressive revelation, never pitting Scripture against God\u2019s character), and disputed doctrines (baptism, end times, gifts \u2014 distinguish essentials from non-essentials; "in essentials unity, in non-essentials liberty, in all things charity"). Hold convictions with humility: the goal is not winning arguments but knowing God. And remember the end of interpretation is transformation: "The entrance of your words gives light. It gives understanding to the simple" (Psalm 119:130) \u2014 understanding that leads to worship and obedience. The best interpreter is not the most clever but the most surrendered.`,
        keyTerms: [
          { term: 'Hermeneutics', definition: 'The science and art of biblical interpretation.' },
          { term: 'Exegesis / eisegesis', definition: 'Drawing meaning out of the text versus reading meaning into it.' },
          { term: 'Biblical theology', definition: 'Tracing themes and the storyline across the whole canon.' },
          { term: 'Systematic theology', definition: 'Organizing biblical teaching by topic (God, Christ, salvation, etc.).' },
          { term: 'Progressive revelation', definition: 'God revealing truth gradually across redemptive history, culminating in Christ.' },
        ],
        crossRefs: ['Psalm 119:18', 'Psalm 119:130', 'Luke 24:27', 'John 5:39', 'Acts 17:11', '2 Timothy 2:7', '2 Timothy 2:15', '2 Peter 1:20'],
        reflection: [
          'Which step \u2014 observation, interpretation, or application \u2014 do you weakest at? What specific practice would strengthen it?',
          'How does reading with the whole storyline in view (biblical theology) change passages you\u2019ve previously moralized or flattened?',
          'What\u2019s a doctrine Christians disagree on that you\u2019ve treated as essential? How does "in essentials unity, in non-essentials liberty" apply?',
          'When you encounter a morally troubling passage, what\u2019s your instinct \u2014 defend, dismiss, or dig deeper? What would faithful digging look like?',
          'Who are your trusted guides for hard passages \u2014 commentaries, teachers, pastors? How could you use them more deliberately?',
          'What would it look like for your Bible study to consistently end in worship and obedience rather than just information?',
        ],
        application: `Launch a 4-week study project on one book (James or Philippians work well): Week 1 \u2014 read the whole book 5 times; outline its flow; research author, audience, occasion. Week 2 \u2014 work paragraph by paragraph: observe, interpret, note the timeless principle. Week 3 \u2014 write specific applications for each section; pray them. Week 4 \u2014 teach what you learned to one person (a friend, a small group, your family). Teaching is the final test of understanding \u2014 and the Ethiopian eunuch\u2019s story reminds us that explaining Scripture to others is one of the Spirit\u2019s great works.`,
        prayer: `Lord of the word \u2014 thank you for speaking clearly and for giving your Spirit to open my mind. Make me a workman who handles your truth accurately: observant in reading, honest in interpreting, specific in applying, humble before difficulties, and Christ-centered in all of it. Guard me from twisting your words; let your words straighten me. Give me teachers, give me community, and give me a heart that obeys what it understands. May the entrance of your words give me light \u2014 light that becomes worship, and worship that becomes obedience. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-int-1-study-q1',
            type: 'mc',
            prompt: 'Hermeneutics is...',
            choices: ['The study of church history', 'The science and art of biblical interpretation', 'A type of prayer', 'The study of angels'],
            answer: 'The science and art of biblical interpretation',
            explanation: 'Both science (principles) and art (skill) \u2014 for every reader, not just scholars.',
            tags: ['hermeneutics'],
          },
          {
            id: 'path-int-1-study-q2',
            type: 'mc',
            prompt: 'Biblical theology differs from systematic theology in that it...',
            choices: ['Ignores the Old Testament', 'Traces themes across the unfolding storyline of Scripture', 'Rejects doctrine', 'Only studies Paul'],
            answer: 'Traces themes across the unfolding storyline of Scripture',
            explanation: 'Biblical theology follows themes (temple, covenant, kingdom) through redemptive history toward Christ.',
            tags: ['hermeneutics'],
          },
          {
            id: 'path-int-1-study-q3',
            type: 'tf',
            prompt: '2 Peter 3:16 warns that mishandling hard passages of Scripture can lead to spiritual destruction \u2014 interpretation is serious stewardship.',
            answer: 'True',
            explanation: 'The ignorant and unsettled "twist" Scriptures "to their own destruction" \u2014 care matters.',
            tags: ['hermeneutics'],
          },
          {
            id: 'path-int-1-study-q4',
            type: 'mc',
            prompt: 'When applying an ancient command like "greet one another with a holy kiss" (Romans 16:16), the right move is to...',
            choices: ['Ignore it entirely', 'Distill the timeless principle (warm Christian greeting) and express it in culturally fitting form', 'Require literal kissing in all cultures', 'Treat it as an error'],
            answer: 'Distill the timeless principle (warm Christian greeting) and express it in culturally fitting form',
            explanation: 'Separate timeless principle from cultural form \u2014 then obey the principle specifically today.',
            tags: ['hermeneutics'],
          },
        ],
      },
    },
  },
];

const INTERMEDIATE_FULL_B: LayeredLesson[] = [
  {
    id: 'path-int-7',
    pathId: 'intermediate',
    order: 7,
    title: 'The Gospels',
    summary:
      'Four Spirit-inspired portraits of Jesus \u2014 Matthew, Mark, Luke, and John \u2014 each with a distinct audience, emphasis, and invitation to believe.',
    layers: {
      core: {
        minutes: 5,
        concept:
          'The four Gospels are four true, complementary portraits of Jesus \u2014 written so that we may believe he is the Christ, the Son of God.',
        scripture: [
          {
            ref: 'John 20:31',
            text: 'but these are written, that you may believe that Jesus is the Christ, the Son of God, and that believing you may have life in his name.',
          },
        ],
        teaching: `Why four Gospels instead of one? Because Jesus is too great for a single portrait. Matthew, Mark, Luke, and John each tell the true story of Jesus with a distinct emphasis \u2014 like four witnesses describing the same person from different angles. Together they give us a rich, multi-dimensional Christ.

Matthew writes for Jewish readers, presenting Jesus as the promised King \u2014 the Messiah of Old Testament prophecy. His Gospel opens with a genealogy proving Jesus is the son of David and son of Abraham, and he quotes the Old Testament more than any other Gospel.

Mark is the shortest and fastest \u2014 "immediately... immediately" \u2014 presenting Jesus as the Servant who acts. Written for Romans, it races from one mighty deed to another, climaxing at the cross: the Son of Man came "to give his life as a ransom for many" (Mark 10:45).

Luke, the careful historian and physician, writes for Gentiles \u2014 presenting Jesus as the perfect Son of Man, Savior of all people. His Gospel is full of outcasts welcomed: shepherds, Samaritans, tax collectors, the prodigal.

John is different \u2014 deeply theological, built around seven signs and seven "I am" statements, written with one stated purpose: "that you may believe that Jesus is the Christ, the Son of God, and that believing you may have life in his name" (John 20:31).

Read all four. Each shows you a facet of Christ the others highlight differently \u2014 and together they call for the same response: believe.`,
        reflection: [
          'Which Gospel have you read most \u2014 and which have you neglected? What might the neglected portrait show you about Jesus?',
          'John states his purpose plainly: that readers may believe. As you read the Gospels, is your goal information about Jesus or trust in Jesus?',
        ],
        application: `Read through one Gospel this month \u2014 Mark if you want fast and vivid (16 chapters), John if you want deep and theological (21 chapters). As you read, keep two lists: "What Jesus does" and "What Jesus says about himself." At the end, write a one-paragraph answer to his question: "Who do you say that I am?" (Matthew 16:15).`,
        prayer: `Lord Jesus, thank you for four faithful portraits \u2014 King, Servant, Son of Man, Son of God. Open each Gospel to me freshly. Let me see you clearly, believe you truly, and follow you fully. Give me life in your name. Amen.`,
      },
      expanded: {
        minutes: 15,
        concept:
          'Each Gospel\u2019s author, audience, portrait of Christ, and structure reveal why the church treasures four complementary accounts \u2014 and how to read them well.',
        scripture: [
          {
            ref: 'Luke 1:1-4',
            text: 'Seeing that many have undertaken to draw up an account of the matters that have been fulfilled among us... it seemed good to me also, having traced the course of all things accurately from the first, to write to you in order, most excellent Theophilus; that you might know the certainty concerning the things in which you were instructed.',
          },
          {
            ref: 'Mark 1:1',
            text: 'The beginning of the Good News of Jesus Christ, the Son of God.',
          },
        ],
        teaching: `## Matthew: The King and His Kingdom
Written by the former tax collector turned apostle, Matthew presents Jesus as the promised Messiah-King. Structure is built around five great teaching blocks (chapters 5-7, 10, 13, 18, 24-25) \u2014 a new Moses giving a new law. "Kingdom of heaven" appears 32 times. The genealogy (1:1-17) establishes royal credentials; the Sermon on the Mount (5-7) is the King\u2019s manifesto; the parables of chapter 13 reveal kingdom mysteries. Matthew ends with the risen King\u2019s universal commission: "All authority has been given to me... Go and make disciples of all nations" (28:18-19). Read Matthew to see Jesus as the fulfillment of Israel\u2019s hopes and the ruler of a global kingdom.

## Mark: The Servant Who Gives His Life
Probably Peter\u2019s preaching captured by John Mark, this is the earliest and briefest Gospel \u2014 breathless, vivid, action-driven ("immediately" appears 40+ times). Jesus the Servant acts more than he explains: healings, exorcisms, nature miracles cascade across the pages. Mark\u2019s structure pivots at 8:29 \u2014 Peter\u2019s confession ("You are the Christ") \u2014 after which Jesus "began to teach them that the Son of Man must suffer" (8:31). The second half marches to the cross. Mark\u2019s key verse: "the Son of Man also came not to be served, but to serve, and to give his life as a ransom for many" (10:45). Read Mark to feel the urgency of Christ\u2019s mission and the cost of discipleship ("take up his cross," 8:34).

## Luke: The Savior of All
Luke the physician writes the longest Gospel with a historian\u2019s precision \u2014 "having traced the course of all things accurately from the first" (1:3). His Jesus is the perfect Son of Man with a heart for outsiders: the good Samaritan, the prodigal son, Zacchaeus, the thief on the cross \u2014 all Luke exclusives. Women, the poor, and Gentiles feature prominently; joy and the Holy Spirit pulse through both Luke and Acts (his sequel). The journey to Jerusalem (9:51\u201319:27) forms the long center, teaching discipleship on the road. Read Luke to see the compassionate Savior who came "to seek and to save that which was lost" (19:10) \u2014 including you.

## John: The Son of God to Be Believed
John writes last, with open theological intent: "these are written, that you may believe" (20:31). Seven miraculous "signs" (water to wine, healings, feeding 5,000, walking on water, healing the blind man, raising Lazarus) point to Christ\u2019s glory, and seven "I am" statements reveal his identity: bread of life, light of the world, door, good shepherd, resurrection and life, way/truth/life, true vine. The long Farewell Discourse (14-17) and the High Priestly Prayer (17) are unmatched. John\u2019s prologue (1:1-18) soars highest: the eternal Word became flesh. Read John to believe deeply \u2014 and to find "life in his name."

## Reading the Gospels Well
Remember: the Gospels are theological biographies, not modern chronologies \u2014 authors arrange material to make their point (compare the order of temptations in Matthew 4 and Luke 4). Use a harmony of the Gospels to see parallels. Note each author\u2019s Old Testament quotations \u2014 they show how Jesus fulfills Scripture. And always move from study to worship: the Gospels were written to produce faith, not just knowledge.`,
        keyTerms: [
          { term: 'Gospel', definition: '"Good news": the announcement of Jesus\u2019 life, death, and resurrection \u2014 and the four books that record it.' },
          { term: 'Synoptic Gospels', definition: 'Matthew, Mark, and Luke \u2014 "seen together" for their similar structure and content.' },
          { term: '"I am" statements', definition: 'John\u2019s seven self-revelations of Jesus, echoing God\u2019s name "I AM" (Exodus 3:14).' },
          { term: 'Kingdom of God/heaven', definition: 'God\u2019s reign \u2014 present in Christ\u2019s ministry, future in its fullness.' },
        ],
        reflection: [
          'How does knowing each Gospel\u2019s distinct portrait change the way you\u2019ll read them \u2014 e.g., watching for kingdom themes in Matthew or outsiders in Luke?',
          'The Gospels arrange material theologically, not always chronologically. Why is that a strength rather than a problem?',
          'Which portrait of Jesus \u2014 King, Servant, Son of Man, Son of God \u2014 do you most need to encounter right now?',
        ],
        application: `Do a "four-portrait" study: read the birth narratives in Matthew 1-2 and Luke 1-2 side by side \u2014 note what each emphasizes (Matthew: kingship, prophecy, Gentile magi; Luke: humility, shepherds, Mary\u2019s song). Then read Mark\u2019s account of the cross (chapters 14-15) alongside John\u2019s (18-19) \u2014 note Mark\u2019s stark suffering and John\u2019s sovereign control. Write one paragraph on what the differences teach you. Complementary, not contradictory \u2014 that\u2019s the fourfold Gospel.`,
        prayer: `Lord Jesus \u2014 promised King, suffering Servant, compassionate Son of Man, eternal Son of God \u2014 I worship you in all four portraits. Thank you for Matthew\u2019s kingdom, Mark\u2019s urgency, Luke\u2019s compassion, John\u2019s depth. Make me a careful reader and a true believer. Give me life in your name, and make my life a fifth gospel \u2014 flawed, but pointing to you. Amen.`,
        quiz: [
          {
            id: 'path-int-7-exp-q1',
            type: 'mc',
            prompt: 'Matthew\u2019s Gospel distinctively presents Jesus as...',
            choices: ['The suffering servant only', 'The promised Messiah-King of Israel', 'A Greek philosopher', 'Only a miracle worker'],
            answer: 'The promised Messiah-King of Israel',
            explanation: 'Genealogy, fulfilled prophecy, and "kingdom of heaven" \u2014 Matthew\u2019s royal portrait.',
            tags: ['gospels'],
          },
          {
            id: 'path-int-7-exp-q2',
            type: 'mc',
            prompt: 'John states his Gospel\u2019s purpose in John 20:31 as...',
            choices: ['Recording history for Rome', 'That readers may believe Jesus is the Christ, the Son of God, and have life in his name', 'Replacing the other Gospels', 'Listing all Jesus\u2019 miracles'],
            answer: 'That readers may believe Jesus is the Christ, the Son of God, and have life in his name',
            explanation: 'John writes evangelistically: belief leading to life.',
            tags: ['gospels'],
          },
          {
            id: 'path-int-7-exp-q3',
            type: 'tf',
            prompt: 'The "Synoptic Gospels" are Matthew, Mark, and Luke \u2014 called "synoptic" because they can be "seen together" with similar structure.',
            answer: 'True',
            explanation: 'John stands apart in structure and style; the other three share much material and order.',
            tags: ['gospels'],
          },
        ],
      },
      deep: {
        minutes: 30,
        concept:
          'Going deeper into each Gospel: structure, key themes, distinctive material, and the historical reliability of the fourfold witness.',
        scripture: [
          {
            ref: 'Matthew 28:18-19',
            text: 'Jesus came to them and spoke to them, saying, "All authority has been given to me in heaven and on earth. Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit"',
          },
          {
            ref: 'Mark 10:45',
            text: 'For the Son of Man also came not to be served, but to serve, and to give his life as a ransom for many.',
          },
          {
            ref: 'Luke 19:10',
            text: 'For the Son of Man came to seek and to save that which was lost.',
          },
        ],
        teaching: `## Matthew in Depth
Matthew\u2019s five teaching blocks deliberately echo the five books of Moses \u2014 Jesus as the new and greater Moses. Watch his fulfillment formula: "this happened, that it might be fulfilled which was spoken through the prophet" (used 10+ times). Key themes: the kingdom of heaven (present and future), the church (Matthew alone uses the word ekkl\u0113sia in the Gospels, 16:18; 18:17), discipleship\u2019s cost and reward, and judgment. Distinctive material: the visit of the magi, the Sermon on the Mount\u2019s full form, many parables (weeds, treasure, pearl, net), Peter walking on water, the Great Commission. Matthew\u2019s Jesus is the authoritative King whose reign demands total allegiance \u2014 and whose authority sends the church to all nations.

## Mark in Depth
Mark\u2019s Gospel moves at a sprint: chapters 1-8 cover three years of ministry; chapters 11-16 cover one week. The "messianic secret" \u2014 Jesus repeatedly silencing witnesses (1:44; 8:30) \u2014 creates narrative tension: who is he? The answer unfolds through titles: the demons know (1:24), Peter confesses (8:29), and finally a Gentile centurion declares at the cross, "Truly this man was the Son of God!" (15:39) \u2014 Mark\u2019s climactic confession comes from the least expected lips, at the moment of greatest shame. Discipleship in Mark is stark: the disciples constantly misunderstand, and Jesus insists the way up is down \u2014 "whoever wants to become great among you shall be your servant" (10:43). Mark comforts suffering believers: our Servant-King knows the road.

## Luke in Depth
Luke-Acts is a two-volume work \u2014 the Gospel shows what Jesus began to do; Acts shows what the risen Jesus continues through the Spirit. Luke\u2019s themes: the Holy Spirit (more references than any Gospel), prayer (Jesus prays at every major turn), joy (the word "rejoice" saturates the birth narrative), women (Elizabeth, Mary, Anna, the widow of Nain, Mary and Martha), the poor and marginalized, and the universal offer \u2014 the genealogy runs back to Adam, not just Abraham (3:38). Distinctive parables \u2014 good Samaritan, prodigal son, rich man and Lazarus \u2014 redefine neighbor, repentance, and wealth. Luke\u2019s orderly account aims at certainty: "that you might know the certainty" (1:4). For doubters and outsiders, Luke is the invitation: there is room for you.

## John in Depth
John\u2019s structure: prologue (1:1-18), Book of Signs (1:19\u201312:50 \u2014 seven signs revealing glory), Book of Glory (13\u201320 \u2014 the cross as Jesus\u2019 glorification), epilogue (21). The seven "I am" sayings with predicates \u2014 bread of life (6:35), light of the world (8:12), door (10:9), good shepherd (10:11), resurrection and life (11:25), way/truth/life (14:6), true vine (15:1) \u2014 each meets a human need with a divine claim, echoing Exodus 3:14. John\u2019s irony is profound: the Light comes to darkness, his own don\u2019t receive him (1:11); he is "lifted up" on the cross \u2014 exalted in humiliation (12:32). Distinctive material: Nicodemus, the Samaritan woman, the man born blind, Lazarus, the Farewell Discourse, the High Priestly Prayer. John writes so that readers believe \u2014 and believing, live.

## Why Four? The Case for Reliability
Skeptics ask why the Gospels differ; historians answer that this is exactly what independent truthful witnesses do. Four accounts within living memory, overlapping yet distinct, with undesigned coincidences (details in one Gospel explaining another) \u2014 this is the texture of truth, not collusion. The early church, facing heresies that wanted one edited gospel (Marcion) or secret sayings (Gnostics), recognized all four as apostolic and authoritative. Differences in order or detail reflect theological arrangement, not error \u2014 ancient biography\u2019s conventions, not modern journalism\u2019s. Read them as the church has for 2,000 years: four voices, one Lord, worthy of our trust and demanding our faith.`,
        keyTerms: [
          { term: 'Messianic secret', definition: 'Mark\u2019s theme of Jesus silencing witnesses to his identity until the cross reveals its meaning.' },
          { term: 'Book of Signs / Book of Glory', definition: 'John\u2019s two halves: chapters 1-12 (signs revealing glory), 13-20 (the cross as glory).' },
          { term: 'Undesigned coincidences', definition: 'Details in one Gospel incidentally explaining another \u2014 evidence of independent truthful witnesses.' },
          { term: 'Kingdom parables', definition: 'Matthew 13\u2019s parables revealing the mysteries of God\u2019s kingdom.' },
        ],
        crossRefs: ['Isaiah 53', 'Daniel 7:13-14', 'Matthew 5-7', 'Matthew 13', 'John 1:1-18', 'John 14-17'],
        reflection: [
          'Which Gospel\u2019s distinctive material (Matthew\u2019s kingdom parables, Mark\u2019s urgency, Luke\u2019s outsiders, John\u2019s "I am"s) has shaped your picture of Jesus most? Which least?',
          'How does understanding ancient biography\u2019s conventions \u2014 theological arrangement rather than strict chronology \u2014 help you read the differences between Gospels?',
          'The centurion\u2019s confession at the cross (Mark 15:39) comes from unexpected lips. Who are the "unexpected" confessors of Christ today?',
          'John writes explicitly to produce belief. As you study the Gospels, how do you keep moving from knowledge to faith?',
        ],
        application: `Read one Gospel straight through this month in a single translation, noting its unique themes in the margin (use the portraits above as a guide). Then read the same events in a second Gospel and list 5 differences in emphasis \u2014 and what each teaches. Finish by writing a 200-word "gospel" of your own: the story of Jesus in your words, for one specific unbelieving friend. You\u2019ll discover what you truly believe \u2014 and what you still need to learn.`,
        prayer: `Lord Jesus, I thank you for four witnesses \u2014 Matthew\u2019s King, Mark\u2019s Servant, Luke\u2019s Savior of outsiders, John\u2019s Son of God. Give me Matthew\u2019s allegiance, Mark\u2019s urgency, Luke\u2019s compassion, John\u2019s depth of belief. Let the differences deepen my trust, not trouble it. Make me a faithful witness to the fifth gospel \u2014 my life \u2014 until I see you face to face. Amen.`,
        quiz: [
          {
            id: 'path-int-7-deep-q1',
            type: 'mc',
            prompt: 'Mark\u2019s Gospel pivots structurally at chapter 8:29 (Peter\u2019s confession) toward...',
            choices: ['More parables', 'The road to the cross and suffering', 'Genealogies', 'The birth narrative'],
            answer: 'The road to the cross and suffering',
            explanation: 'After the confession, Jesus "began to teach them that the Son of Man must suffer" (Mark 8:31).',
            tags: ['gospels'],
          },
          {
            id: 'path-int-7-deep-q2',
            type: 'mc',
            prompt: 'Luke\u2019s genealogy of Jesus (3:38) runs back to Adam (not just Abraham) because Luke emphasizes...',
            choices: ['Jewish ancestry only', 'Jesus as Savior of all humanity', 'Roman politics', 'Temple rituals'],
            answer: 'Jesus as Savior of all humanity',
            explanation: 'To Adam = to all mankind; Luke\u2019s universal Gospel for Gentiles and outsiders.',
            tags: ['gospels'],
          },
          {
            id: 'path-int-7-deep-q3',
            type: 'tf',
            prompt: 'John\u2019s seven "I am" statements (bread of life, light of the world, etc.) deliberately echo God\u2019s covenant name "I AM" from Exodus 3:14.',
            answer: 'True',
            explanation: 'Each claim meets a human need with divine identity \u2014 "before Abraham was, I AM" (John 8:58).',
            tags: ['gospels'],
          },
          {
            id: 'path-int-7-deep-q4',
            type: 'mc',
            prompt: 'Differences between the Gospels (order, selection, emphasis) are best explained by...',
            choices: ['Errors and contradictions', 'Independent truthful witnesses arranging material theologically, per ancient biography', 'Later editors inventing stories', 'Translation mistakes'],
            answer: 'Independent truthful witnesses arranging material theologically, per ancient biography',
            explanation: 'Undesigned coincidences and overlapping distinctness are the texture of truth, not collusion.',
            tags: ['gospels'],
          },
        ],
      },
      study: {
        minutes: 60,
        concept:
          'A full study of the four Gospels: authorship and audience, structure and theology of each, the historical Jesus, and a plan for lifelong Gospel immersion.',
        scripture: [
          {
            ref: 'John 1:1-3, 14',
            text: 'In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made through him... The Word became flesh, and lived among us. We saw his glory, such glory as of the one and only Son of the Father, full of grace and truth.',
          },
          {
            ref: '1 Timothy 3:16',
            text: 'Without controversy, the mystery of godliness is great: God was revealed in the flesh, justified in the spirit, seen by angels, preached among the nations, believed on in the world, and received up in glory.',
          },
          {
            ref: 'Matthew 16:15-16',
            text: 'He said to them, "But who do you say that I am?" Simon Peter answered, "You are the Christ, the Son of the living God."',
          },
          {
            ref: 'John 21:25',
            text: 'There are also many other things which Jesus did, which if they would all be written, I suppose that even the world itself wouldn\u2019t have room for the books that would be written.',
          },
        ],
        teaching: `## 1. The Fourfold Gospel: Why the Church Kept All Four
By AD 150, the church across the Roman world \u2014 from Gaul to Syria \u2014 used the same four Gospels. When heretics proposed cutting the list (Marcion\u2019s edited Luke) or adding secret gospels (Thomas, Judas), the church held the line: these four, no more, no fewer. Irenaeus argued the fourfold Gospel mirrors the four winds and four corners \u2014 fitting for a gospel to all nations. The Muratorian Fragment (~AD 170) and every early canon list confirm it. This was not a power play but recognition: these four bore apostolic authority, were received universally, and told the truth coherently. We read the same four today because the Spirit led the church to recognize his own voice in them.

## 2. Reading Each Gospel on Its Own Terms
Go deeper with each. Matthew: trace "kingdom of heaven" through the parables of chapter 13 \u2014 the kingdom is present yet hidden, priceless yet demanding all. Follow the conflict narrative (chapters 21-23) to see the King rejected. Mark: count the "immediately"s; feel the crowd pressing; notice Jesus\u2019 emotions \u2014 compassion (1:41), anger (3:5), sighing (8:12). Watch the disciples\u2019 blindness as a mirror. Luke: follow the travel narrative (9:51-19:27) as a discipleship manual; note Jesus\u2019 table fellowship with sinners as a enacted parable of grace. John: meditate on the prologue\u2019s cosmic claims; let each "I am" confront a specific fear or hunger in you; sit long in John 17 \u2014 Jesus\u2019 prayer for you.

## 3. The Historical Jesus: What the Gospels Establish
Even skeptical scholars grant the Gospels\u2019 core: Jesus of Nazareth lived, taught with authority, performed wonders, gathered disciples, clashed with authorities, was crucified under Pontius Pilate, and his followers claimed \u2014 explosively, within weeks \u2014 that he rose. Non-Christian sources corroborate the outline: Tacitus (crucifixion under Pilate), Josephus (Jesus\u2019 ministry and execution), Pliny (early Christian worship of Christ "as a god"). The Gospels were written within living memory (Mark ~AD 60s, John ~AD 90s) \u2014 far too early for legend to replace fact while eyewitnesses lived. The criterion of embarrassment strengthens the case: the Gospels record the disciples\u2019 cowardice, Jesus\u2019 cry of dereliction, women as first witnesses \u2014 details no inventor would fabricate. We are not asked to take these books on blind faith but on strong evidence.

## 4. Christ in the Gospels: The Unifying Center
Across all four, the same Jesus emerges: authoritative yet compassionate, divine yet human, confronting sin yet welcoming sinners, predicting his death yet promising his return. His teaching \u2014 the Sermon on the Mount, the parables, the Olivet Discourse \u2014 carries a self-referential authority no prophet claimed: "but I tell you" (Matthew 5). His miracles are kingdom signs: nature obeying its Maker, demons fleeing their Conqueror, death yielding to the Life. His death is the theological center of every Gospel \u2014 disproportionate space (Mark devotes 40% to the final week) because the cross is the purpose: "the Son of Man came... to give his life" (Mark 10:45). His resurrection is God\u2019s vindication and our hope. Every Gospel ends not with a tomb but with a commission \u2014 the story continues in us.

## 5. From Gospels to Life: A Lifelong Practice
Don\u2019t just study the Gospels; inhabit them. Practice 1: read one Gospel per month, rotating through the year \u2014 three full cycles annually keeps Christ central. Practice 2: memorize key passages (the Beatitudes, John 1:1-14, John 14-15) \u2014 the Gospels in your heart shape your reflexes. Practice 3: imitate deliberately \u2014 choose one trait of Jesus per month (compassion for outsiders like Luke\u2019s Jesus; prayer like Mark\u2019s Jesus; truth-speaking like John\u2019s Jesus) and practice it. Practice 4: tell the story \u2014 the Gospels are meant to be shared; learn to narrate Jesus\u2019 life, death, and resurrection in five minutes. The goal of Gospel study is Gospel formation: "until Christ is formed in you" (Galatians 4:19).`,
        keyTerms: [
          { term: 'Fourfold Gospel', definition: 'The church\u2019s recognition of Matthew, Mark, Luke, and John as the authoritative accounts of Jesus.' },
          { term: 'Criterion of embarrassment', definition: 'Historical principle: details embarrassing to the authors (disciples\u2019 failures, women witnesses) argue for authenticity.' },
          { term: 'Kingdom of God', definition: 'God\u2019s reign \u2014 inaugurated in Christ\u2019s ministry, consummated at his return.' },
          { term: 'Christology', definition: 'The study of Christ\u2019s person and work \u2014 the Gospels\u2019 central subject.' },
        ],
        crossRefs: ['Matthew 5-7', 'Mark 8:27-38', 'Luke 15', 'John 3', 'John 10', 'John 14-17', 'Acts 1:1-3'],
        reflection: [
          'Why do you think the early church \u2014 spread across the empire \u2014 converged on exactly these four Gospels? What does that unity suggest?',
          'Which historical evidences for the Gospels\u2019 reliability (early dating, non-Christian sources, embarrassing details) do you find most compelling? Why?',
          'If you had five minutes to narrate Jesus\u2019 story to an unbelieving friend, what would you include \u2014 and what would you leave out?',
          'What would change if you read one Gospel per month for a year? What\u2019s stopping you from starting?',
          'Which trait of Jesus \u2014 from any Gospel \u2014 do you most want formed in you this year? What would deliberate imitation look like?',
          'The Gospels end with commissions, not conclusions. How is the story continuing in your life right now?',
        ],
        application: `Begin the "Gospel year" this month: read Matthew in 28 days (one chapter a day), keeping a journal with three columns \u2014 "What this shows about Jesus," "What this shows about the kingdom," "What this asks of me." Next month, Mark; then Luke; then John \u2014 a full cycle every four months, three cycles a year. Alongside, memorize John 1:1-14 (one verse per week). And identify one unbelieving friend to pray for and eventually share your five-minute Jesus story with. The Gospels were written to be believed and shared \u2014 let them do both in you.`,
        prayer: `Lord Jesus \u2014 Word made flesh, full of grace and truth \u2014 I thank you for the fourfold witness: the King of Matthew, the Servant of Mark, the compassionate Son of Man of Luke, the eternal Son of God of John. Thank you for evidence that invites faith, not blind leaps. Form yourself in me as I dwell in these pages: your compassion, your courage, your prayerfulness, your truth. Make my life a living fifth gospel \u2014 and use my story to draw others to believe and have life in your name. Until I see you face to face, keep me in the story. Amen.`,
        quiz: [
          {
            id: 'path-int-7-study-q1',
            type: 'mc',
            prompt: 'The early church\u2019s recognition of exactly four Gospels is best described as...',
            choices: ['A fourth-century political decision', 'Recognition of apostolic, universally received, coherent accounts \u2014 evident by ~AD 150-170', 'An accident of history', 'A vote that barely passed'],
            answer: 'Recognition of apostolic, universally received, coherent accounts \u2014 evident by ~AD 150-170',
            explanation: 'From Irenaeus to the Muratorian Fragment, the church recognized \u2014 not created \u2014 the fourfold Gospel.',
            tags: ['gospels'],
          },
          {
            id: 'path-int-7-study-q2',
            type: 'mc',
            prompt: 'The "criterion of embarrassment" supports the Gospels\u2019 reliability because...',
            choices: ['The authors were embarrassed people', 'Embarrassing details (disciples\u2019 failures, women as first witnesses) are unlikely inventions', 'It proves every word is literal', 'It shows the authors were liars'],
            answer: 'Embarrassing details (disciples\u2019 failures, women as first witnesses) are unlikely inventions',
            explanation: 'Inventors don\u2019t fabricate details that hurt their case \u2014 these ring true.',
            tags: ['gospels'],
          },
          {
            id: 'path-int-7-study-q3',
            type: 'tf',
            prompt: 'Mark devotes a disproportionate amount of space to Jesus\u2019 final week because the cross is the theological center of his Gospel.',
            answer: 'True',
            explanation: 'Chapters 11-16 (one week) vs. 1-10 (three years) \u2014 the cross is the purpose: "to give his life as a ransom."',
            tags: ['gospels'],
          },
          {
            id: 'path-int-7-study-q4',
            type: 'mc',
            prompt: 'Non-Christian sources like Tacitus and Josephus corroborate which Gospel outline?',
            choices: ['Jesus\u2019 parables word-for-word', 'Jesus of Nazareth\u2019s ministry, crucifixion under Pilate, and early worship of him', 'The virgin birth details', 'The Sermon on the Mount'],
            answer: 'Jesus of Nazareth\u2019s ministry, crucifixion under Pilate, and early worship of him',
            explanation: 'External sources confirm the historical framework the Gospels narrate.',
            tags: ['gospels'],
          },
        ],
      },
    },
  },
  {
    id: 'path-int-8',
    pathId: 'intermediate',
    order: 8,
    title: 'Paul the Apostle',
    summary:
      'From persecutor to apostle: Paul\u2019s conversion, missionary journeys, thirteen letters, and the gospel of grace that shaped the church.',
    layers: {
      core: {
        minutes: 5,
        concept:
          'Paul \u2014 the church\u2019s greatest persecutor turned greatest missionary \u2014 received the gospel by revelation and spent his life preaching Christ to the nations.',
        scripture: [
          {
            ref: 'Acts 9:15',
            text: 'But the Lord said to him, "Go your way, for he is a chosen vessel to me, to bear my name before the Gentiles and kings, and the children of Israel."',
          },
        ],
        teaching: `No one in church history changed more dramatically than Saul of Tarsus. A brilliant Pharisee, he hunted Christians \u2014 arresting them, voting for their deaths, "breathing threats and slaughter" (Acts 9:1). Then, on the road to Damascus, the risen Jesus confronted him in blinding light: "Saul, Saul, why do you persecute me?" (Acts 9:4). The persecutor became the apostle.

God called Paul specifically to take the gospel to the Gentiles \u2014 "a chosen vessel to me, to bear my name before the Gentiles and kings, and the children of Israel" (Acts 9:15). Over three missionary journeys, he planted churches across the Roman world, endured beatings, shipwrecks, and imprisonments, and wrote thirteen letters that became nearly half the New Testament.

Paul\u2019s message never changed: "For I determined not to know anything among you except Jesus Christ and him crucified" (1 Corinthians 2:2). His life proves no one is beyond grace \u2014 and his letters explain that grace more deeply than anyone. "For to me to live is Christ, and to die is gain" (Philippians 1:21): that was Paul\u2019s whole philosophy in one sentence.`,
        reflection: [
          'Paul\u2019s story proves no one is beyond God\u2019s reach. Who in your life seems "too far gone" \u2014 and how does Paul\u2019s conversion reshape your prayers for them?',
          'What would it look like for you to say, with Paul, "for to me to live is Christ"? What would have to change?',
        ],
        application: `Read the story of Paul\u2019s conversion (Acts 9:1-19) and his own retellings (Acts 22, Acts 26) this week \u2014 notice what he emphasizes each time. Then write your own "Damascus road" testimony in one page: who you were, how Christ confronted you, who you are now. Keep it ready \u2014 like Paul, you\u2019ll get chances to tell it (and people need to hear that grace reaches real sinners).`,
        prayer: `Lord Jesus, thank you for Paul \u2014 proof that no persecutor is beyond your grace and no past disqualifies a future. Do in me what you did in him: confront me, convert me daily, and send me. Make my life, like his, able to say: to live is Christ. Amen.`,
      },
      expanded: {
        minutes: 15,
        concept:
          'Paul\u2019s life divides into persecutor, convert, missionary, prisoner \u2014 and his letters systematically unfold the gospel: sin, justification, sanctification, and God\u2019s purposes.',
        scripture: [
          {
            ref: '1 Corinthians 15:3-4',
            text: 'For I delivered to you first of all that which I also received: that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures,',
          },
          {
            ref: 'Galatians 1:11-12',
            text: 'But I make known to you, brothers, concerning the Good News which was preached by me, that it is not according to man. For I didn\u2019t receive it from man, nor was I taught it, but it came to me through revelation of Jesus Christ.',
          },
        ],
        teaching: `## The Man: Four Phases
Persecutor (Acts 7-9): Saul the Pharisee \u2014 "circumcised the eighth day, of the stock of Israel... concerning the law, a Pharisee; concerning zeal, persecuting the church" (Philippians 3:5-6). His zeal was real; his direction was deadly. Convert (Acts 9): blinded by glory on the Damascus road, led by the hand, baptized by Ananias \u2014 the mighty humbled, then filled with the Spirit. Note: Paul\u2019s gospel came "through revelation of Jesus Christ" (Galatians 1:12), not human teaching \u2014 his apostleship rests on direct commission. Missionary (Acts 13-20): three journeys across the empire \u2014 Cyprus, Asia Minor, Macedonia, Greece \u2014 planting churches, appointing elders, writing letters. "I have fully preached the Good News of Christ" from Jerusalem to Illyricum (Romans 15:19). Prisoner (Acts 21-28): arrested in Jerusalem, appealing to Caesar, shipwrecked, under house arrest in Rome \u2014 "an ambassador in chains" (Ephesians 6:20), writing Ephesians, Philippians, Colossians, Philemon. Chains advanced the gospel (Philippians 1:12).

## The Message: Christ Crucified
Paul\u2019s gospel in one paragraph: "Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures" (1 Corinthians 15:3-4). "According to the Scriptures" \u2014 twice: the cross and resurrection fulfill God\u2019s promises, not human plans. Everything else in Paul flows from this center: justification by faith (Romans, Galatians), union with Christ (Ephesians, Colossians), the Spirit\u2019s transforming work (Romans 8), the church as Christ\u2019s body (1 Corinthians 12; Ephesians 4), and the hope of resurrection (1 Corinthians 15; 1 Thessalonians 4).

## The Letters: Thirteen Windows
Group them to grasp them. Doctrinal foundations: Romans (the gospel systematically), Galatians (justification vs. legalism), Ephesians (the church\u2019s cosmic calling), Colossians (Christ\u2019s supremacy). Church life: 1-2 Corinthians (correction and comfort), 1-2 Thessalonians (the Lord\u2019s return), Philippians (joy in suffering), Philemon (gospel and reconciliation). Pastoral: 1-2 Timothy, Titus (church order, faithful ministry). Read each as a real letter to a real situation \u2014 then draw the timeless principle. Paul\u2019s logic is always: gospel indicative ("you are...") then ethical imperative ("therefore...").

## The Legacy: Grace\u2019s Theologian
No one plumbed grace\u2019s depths like Paul: "by grace you have been saved through faith" (Ephesians 2:8); "where sin abounded, grace abounded more exceedingly" (Romans 5:20). His dying testimony: "I have fought the good fight. I have finished the course. I have kept the faith" (2 Timothy 4:7). Tradition holds he was martyred under Nero \u2014 faithful to the end. His life asks every believer: is Christ your gain, your all, your "to live"?`,
        keyTerms: [
          { term: 'Apostle', definition: '"Sent one": an eyewitness of the risen Christ, directly commissioned \u2014 Paul qualifies (1 Corinthians 9:1).' },
          { term: 'Justification by faith', definition: 'Paul\u2019s central doctrine: sinners declared righteous through trusting Christ alone (Romans 3:28).' },
          { term: 'Union with Christ', definition: 'Believers\u2019 spiritual incorporation into Christ \u2014 "in Christ" appears 160+ times in Paul.' },
          { term: 'Missionary journeys', definition: 'Paul\u2019s three evangelistic tours planting churches across the Roman Empire (Acts 13-20).' },
        ],
        reflection: [
          'Paul\u2019s gospel came by revelation, not human teaching (Galatians 1:12). Why does the divine origin of his message matter for its authority?',
          'Trace Paul\u2019s "indicative then imperative" pattern in one letter you know. How does gospel-before-ethics change obedience?',
          'Which group of Paul\u2019s letters (doctrinal, church life, pastoral) have you read least? What might you be missing?',
        ],
        application: `Read Galatians this week (six short chapters) with one question: "What is Paul so angry about?" \u2014 trace his argument for justification by faith alone against the legalizers. List every verse about "faith" vs. "works of the law." Then ask: where do I add to Christ\u2019s finished work \u2014 performance, rule-keeping, comparison? Confess it specifically. Galatians is Paul\u2019s trumpet blast for freedom: "Stand firm therefore in the liberty by which Christ has made us free" (5:1).`,
        prayer: `Lord, thank you for your chosen vessel Paul \u2014 persecutor turned apostle, theologian of grace. Thank you for his gospel: Christ died for our sins, was buried, and rose again according to the Scriptures. Root me in justification by faith alone. Make me, like Paul, able to say "to live is Christ" \u2014 and to finish my course keeping the faith. Amen.`,
        quiz: [
          {
            id: 'path-int-8-exp-q1',
            type: 'mc',
            prompt: 'Before his conversion, Saul of Tarsus was...',
            choices: ['A Roman soldier', 'A Pharisee who persecuted the church', 'A fisherman', 'A Gentile merchant'],
            answer: 'A Pharisee who persecuted the church',
            explanation: 'Philippians 3:5-6; Acts 9:1 \u2014 zealous for the law, "breathing threats and slaughter."',
            tags: ['paul'],
          },
          {
            id: 'path-int-8-exp-q2',
            type: 'mc',
            prompt: 'Paul says his gospel came to him...',
            choices: ['From the other apostles\u2019 teaching', 'Through revelation of Jesus Christ', 'From Greek philosophy', 'Through dreams only'],
            answer: 'Through revelation of Jesus Christ',
            explanation: 'Galatians 1:11-12 \u2014 his apostleship and message rest on direct divine commission.',
            tags: ['paul'],
          },
          {
            id: 'path-int-8-exp-q3',
            type: 'tf',
            prompt: 'Paul\u2019s letters consistently put the gospel "indicative" (what God has done) before the ethical "imperative" (what we must do).',
            answer: 'True',
            explanation: 'Romans 1-11 (doctrine) then 12-16 (duty); Ephesians 1-3 then 4-6 \u2014 grace fuels obedience.',
            tags: ['paul'],
          },
        ],
      },
      deep: {
        minutes: 30,
        concept:
          'Paul\u2019s theology in depth: the gospel\u2019s logic in Romans, freedom in Galatians, the church in Ephesians, Christ\u2019s supremacy in Colossians \u2014 and his pastoral heart.',
        scripture: [
          {
            ref: 'Romans 1:16-17',
            text: 'For I am not ashamed of the Good News of Christ, because it is the power of God for salvation for everyone who believes, for the Jew first, and also for the Greek. For in it is revealed God\u2019s righteousness from faith to faith. As it is written, "But the righteous shall live by faith."',
          },
          {
            ref: 'Philippians 3:8',
            text: 'Yes most certainly, and I count all things to be loss for the excellency of the knowledge of Christ Jesus, my Lord, for whom I suffered the loss of all things, and count them nothing but refuse, that I may gain Christ',
          },
          {
            ref: '2 Timothy 4:7',
            text: 'I have fought the good fight. I have finished the course. I have kept the faith.',
          },
        ],
        teaching: `## Romans: The Gospel\u2019s Logic
Romans is Paul\u2019s systematic masterpiece \u2014 the gospel from every angle. Chapters 1-3: all guilty (Gentiles suppress truth, Jews break the law they boast in) \u2014 "there is no one righteous, no, not one." Chapters 3-5: justification by faith \u2014 "a man is justified by faith apart from works of the law" (3:28); Abraham believed and was credited righteous (4:3). Chapters 6-8: sanctification \u2014 dead to sin, alive in Christ (6), the Spirit\u2019s life versus the flesh (8), ending in the unbreakable promise: nothing "will be able to separate us from the love of God" (8:39). Chapters 9-11: God\u2019s purposes for Israel \u2014 his promises never fail. Chapters 12-16: the transformed life \u2014 living sacrifices, love, submission, welcome. Romans 1:16-17 is the thesis: the gospel is "the power of God for salvation," revealing righteousness "from faith to faith." Read Romans to think clearly about salvation.

## Galatians: Freedom Defended
Paul\u2019s angriest letter \u2014 no thanksgiving, immediate rebuke: "I marvel that you are so quickly deserting him" (1:6). Judaizers insisted Gentiles must be circumcised and keep the law to be fully Christian. Paul\u2019s response is absolute: add anything to Christ and you lose Christ \u2014 "if you receive circumcision, Christ will profit you nothing" (5:2). Justification is by faith alone, from Abraham (3:6) to us. But freedom is not license: "you were called for freedom... only don\u2019t use your freedom as an opportunity for the flesh, but through love be servants to one another" (5:13). The Spirit-flesh war (5:16-25) maps the Christian\u2019s daily battle. Read Galatians whenever legalism \u2014 in your church or your heart \u2014 threatens grace.

## Ephesians & Colossians: Cosmic Christ, Cosmic Church
Ephesians soars: chosen before creation (1:4), saved by grace (2:8), one new humanity from Jew and Gentile (2:14-16), the church as Christ\u2019s body displaying God\u2019s wisdom "to the principalities and powers" (3:10) \u2014 then the walk: unity, holiness, Spirit-filled relationships, spiritual armor (4-6). Colossians zooms in on Christ\u2019s supremacy against false teaching: "in him all the fullness of the Godhead dwells bodily" (2:9); "he is the head of the body, the church" (1:18). Both letters breathe "in Christ" \u2014 union with him is Paul\u2019s master-theme: every spiritual blessing (Ephesians 1:3) flows from being joined to Jesus.

## The Pastor\u2019s Heart
Paul was not only a theologian but a shepherd who wept: "I didn\u2019t cease to admonish everyone night and day with tears" (Acts 20:31). His farewell to the Ephesian elders (Acts 20:17-38) is the most moving passage in Acts \u2014 humility, tears, trials, and the charge to "shepherd the church of God." His pastoral letters (1-2 Timothy, Titus) set church order: qualified elders and deacons, sound doctrine, godly households, endurance in ministry. His final words \u2014 "I have kept the faith" (2 Timothy 4:7) \u2014 were written from a Roman dungeon to a young pastor. Theology with tears: that\u2019s Paul.

## Paul and Us
Three takeaways. First, grace reaches anyone: if the chief persecutor became the chief missionary, your past \u2014 or anyone\u2019s \u2014 is no obstacle. Second, the gospel is worth suffering for: beaten, stoned, shipwrecked, imprisoned \u2014 "I am not ashamed" (Romans 1:16). Comfort was never the goal; Christ was. Third, theology serves mission: Paul\u2019s deepest doctrines (Romans 9-11) erupt into doxology (11:33-36) and then into practical love (12-16). Right thinking about God fuels right living for God and right going to the world. "Follow me," Paul dared to say, "even as I also follow Christ" (1 Corinthians 11:1) \u2014 may we be worth following the same way.`,
        keyTerms: [
          { term: 'Justification', definition: 'Declared righteous by faith apart from law-works (Romans 3:28) \u2014 Paul\u2019s central doctrine.' },
          { term: 'In Christ', definition: 'Paul\u2019s master-theme: believers\u2019 union with Jesus, source of every blessing (Ephesians 1:3).' },
          { term: 'Judaizers', definition: 'False teachers demanding Gentile converts keep the Mosaic law for salvation \u2014 opposed in Galatians.' },
          { term: 'Pastoral Epistles', definition: '1-2 Timothy and Titus: Paul\u2019s instructions on church order and faithful ministry.' },
        ],
        crossRefs: ['Acts 9:1-19', 'Acts 20:17-38', 'Romans 8:28-39', 'Galatians 2:20', 'Ephesians 2:1-10', 'Philippians 1:21'],
        reflection: [
          'How does Romans\u2019 movement (guilt \u2192 grace \u2192 gratitude \u2192 godliness) map onto your own spiritual biography?',
          'Where do you see "Galatian" legalism today \u2014 adding requirements to Christ\u2019s finished work? Where do you see it in yourself?',
          'Paul wept over the churches (Acts 20:31). What would it look like for your theology to have tears \u2014 for truth to grip your heart, not just your head?',
          'Could you say with Paul, "Follow me, even as I follow Christ"? What would need to change for that to be true?',
        ],
        application: `Read Philippians this week \u2014 Paul\u2019s joy letter from prison \u2014 marking every occurrence of "joy/rejoice" and every mention of Christ. Note the paradox: chained, yet rejoicing; suffering, yet content (4:11-13). Then write your own "prison epistle" paragraph: what would you say about Christ from your hardest current circumstance? Paul\u2019s secret was "to live is Christ" \u2014 circumstances couldn\u2019t touch his center because his center wasn\u2019t circumstances. Ask God to make it yours.`,
        prayer: `Lord, I thank you for Paul \u2014 your chosen vessel, theologian of grace, shepherd with tears, missionary in chains. Root me in his gospel: justified by faith alone, united to Christ, sealed by the Spirit, destined for glory. Kill the legalist in me; kill the license in me; make me free indeed \u2014 free to love and serve. Give me his courage ("I am not ashamed"), his contentment ("to live is Christ"), and his finish ("I have kept the faith"). Send me as you sent him. Amen.`,
        quiz: [
          {
            id: 'path-int-8-deep-q1',
            type: 'mc',
            prompt: 'Romans 1:16-17 states Paul\u2019s thesis: the gospel is...',
            choices: ['Good advice for moral living', 'The power of God for salvation, revealing righteousness from faith to faith', 'Only for Jews', 'A mystery no one can understand'],
            answer: 'The power of God for salvation, revealing righteousness from faith to faith',
            explanation: 'Not advice but power; not achievement but gift received by faith.',
            tags: ['paul'],
          },
          {
            id: 'path-int-8-deep-q2',
            type: 'mc',
            prompt: 'In Galatians, Paul\u2019s central warning is that...',
            choices: ['Gentiles should avoid Jews', 'Adding law-keeping to Christ as a requirement for salvation destroys grace', 'Faith doesn\u2019t matter', 'The Old Testament is useless'],
            answer: 'Adding law-keeping to Christ as a requirement for salvation destroys grace',
            explanation: '"If you receive circumcision, Christ will profit you nothing" (Galatians 5:2) \u2014 Christ plus anything = nothing.',
            tags: ['paul'],
          },
          {
            id: 'path-int-8-deep-q3',
            type: 'tf',
            prompt: 'Paul\u2019s phrase "in Christ" (used 160+ times) expresses believers\u2019 union with Jesus \u2014 the source of every spiritual blessing.',
            answer: 'True',
            explanation: 'Union with Christ is Paul\u2019s master-theme, especially in Ephesians and Colossians.',
            tags: ['paul'],
          },
          {
            id: 'path-int-8-deep-q4',
            type: 'mc',
            prompt: 'Paul\u2019s farewell to the Ephesian elders (Acts 20) reveals him as...',
            choices: ['A distant administrator', 'A weeping shepherd who served with humility and tears', 'A political strategist', 'A retired scholar'],
            answer: 'A weeping shepherd who served with humility and tears',
            explanation: '"I didn\u2019t cease to admonish everyone night and day with tears" \u2014 theology with a pastor\u2019s heart.',
            tags: ['paul'],
          },
        ],
      },
      study: {
        minutes: 60,
        concept:
          'A full study of Paul: his world, conversion, missionary strategy, letters in context, core theology (gospel, justification, union, church, hope), and his model for ministry today.',
        scripture: [
          {
            ref: 'Acts 26:16-18',
            text: 'But arise, and stand on your feet, for I have appeared to you for this purpose: to appoint you a servant and a witness both of the things which you have seen, and of the things which I will reveal to you; delivering you from the people, and from the Gentiles, to whom I send you, to open their eyes, that they may turn from darkness to light and from the power of Satan to God, that they may receive remission of sins and an inheritance among those who are sanctified by faith in me.\u2019',
          },
          {
            ref: 'Romans 15:20',
            text: 'yes, making it my aim to preach the Good News, not where Christ was already named, that I might not build on another\u2019s foundation.',
          },
          {
            ref: '1 Corinthians 9:22',
            text: 'To the weak I became as weak, that I might gain the weak. I have become all things to all men, that I may by all means save some.',
          },
          {
            ref: '2 Timothy 2:2',
            text: 'The things which you have heard from me among many witnesses, commit the same to faithful men, who will be able to teach others also.',
          },
        ],
        teaching: `## 1. Paul\u2019s World: Why He Could Reach It
God prepared the world for Paul\u2019s mission with eerie precision. Politically: Rome\u2019s empire brought unprecedented peace (Pax Romana) and roads \u2014 a missionary could travel safely from Jerusalem to Rome. Culturally: Greek was the universal language \u2014 Paul\u2019s letters could be read everywhere. Religiously: the old paganisms were spiritually bankrupt, and the Jewish diaspora\u2019s synagogues gave Paul ready-made audiences of God-fearers in every city. "When the fullness of the time came" (Galatians 4:4) \u2014 God\u2019s timing is never accidental. Paul, a Roman citizen, Greek-educated, Hebrew-trained Pharisee, was the custom-built instrument: at home in synagogue and marketplace, with Jews and Gentiles, in chains and in lecture halls.

## 2. Conversion and Call: The Damascus Pattern
Acts tells Paul\u2019s conversion three times (9, 22, 26) \u2014 repetition signals importance. Note the elements: divine initiative (Jesus appears uninvited), conviction ("why do you persecute me?" \u2014 attacking the church is attacking Christ), surrender ("Lord, what do you want me to do?"), and commission (Acts 26:16-18: witness, suffering, Gentiles, "open their eyes... turn from darkness to light"). Paul never got over it: "I am the least of the apostles... but by the grace of God I am what I am" (1 Corinthians 15:9-10). His past didn\u2019t disqualify him; it equipped his testimony \u2014 "Christ Jesus came into the world to save sinners, of whom I am chief" (1 Timothy 1:15). Your testimony works the same way: the worse the past, the brighter the grace.

## 3. Missionary Strategy: Paul\u2019s Playbook
Paul\u2019s methods repay study. He targeted strategic cities (Corinth, Ephesus, Philippi, Thessalonica) \u2014 urban centers from which the gospel would radiate. He started with the synagogue (common ground in Scripture) then turned to Gentiles. He worked with teams (Barnabas, Silas, Timothy, Luke, Priscilla and Aquila) \u2014 never a lone ranger. He supported himself by tentmaking when needed (Acts 18:3) to avoid burdening young churches. He stayed long enough to establish elders (Acts 14:23) then moved on \u2014 "not where Christ was already named" (Romans 15:20). He adapted without compromising: "I have become all things to all men, that I may by all means save some" (1 Corinthians 9:22) \u2014 flexibility in method, rigidity in message. Modern missions still runs on Paul\u2019s playbook.

## 4. The Letters in Context
Read each letter against its occasion. Romans: written to a church he hadn\u2019t founded, introducing himself and his gospel before a planned Spain mission \u2014 hence its systematic fullness. 1 Corinthians: answering reports of division, immorality, and disorder \u2014 hence its practical corrections. Galatians: emergency intervention against legalism \u2014 hence its passion. Ephesians: circular letter on the church\u2019s cosmic identity. Philippians: thank-you note from prison, overflowing with joy. Colossians: countering proto-Gnostic heresy with Christ\u2019s supremacy. Thessalonians: young converts confused about the Lord\u2019s return. Timothy/Titus: passing the torch \u2014 multiply leaders (2 Timothy 2:2). The principle: every letter is occasional (written to a situation) yet universal (carrying timeless truth). Find the occasion; find the principle; apply it now.

## 5. Paul\u2019s Core Theology
Systematize his thought. God: sovereign in election (Romans 9), faithful to promises (Romans 11), worthy of doxology (Romans 11:33-36). Christ: preexistent, Creator, head of the church (Colossians 1:15-20); crucified and risen (1 Corinthians 15:3-4); returning (1 Thessalonians 4:16-17). Salvation: by grace through faith (Ephesians 2:8-9); justification as God\u2019s declarative act (Romans 3-5); union with Christ as the matrix of blessings (Ephesians 1:3). The Spirit: giver of life (Romans 8), fruit (Galatians 5), gifts (1 Corinthians 12). The church: Christ\u2019s body (1 Corinthians 12), God\u2019s temple (Ephesians 2:21), the pillar of truth (1 Timothy 3:15). The Christian life: dead to sin, alive to God (Romans 6); walking by the Spirit (Galatians 5:16); content in all circumstances (Philippians 4:11-13). The future: resurrection of the dead (1 Corinthians 15), new creation (Romans 8:19-23), "to die is gain" (Philippians 1:21).

## 6. Paul\u2019s Model for Ministry Today
Paul\u2019s life is a template. Theologically: know the gospel deeply \u2014 "I am not ashamed" because he understood what he proclaimed. Missionally: go where Christ isn\u2019t named; adapt methods, never the message. Pastorally: teach publicly and "from house to house" (Acts 20:20); weep over people; entrust the work to faithful multipliers (2 Timothy 2:2). Personally: content in plenty and need (Philippians 4:12); disciplined ("I beat my body and bring it into submission," 1 Corinthians 9:27); joyful in suffering ("rejoice in the Lord always," Philippians 4:4); finishing well ("I have kept the faith," 2 Timothy 4:7). Paul\u2019s ambition for every believer: "to live is Christ" \u2014 not Christ plus career, comfort, or reputation. Christ. Full stop. That\u2019s the apostle\u2019s legacy and our calling.`,
        keyTerms: [
          { term: 'Pax Romana', definition: 'Roman peace enabling safe travel \u2014 part of God\u2019s preparation for the gospel\u2019s spread.' },
          { term: 'Occasional letters', definition: 'Letters written to specific situations, carrying timeless principles.' },
          { term: 'Multiplication', definition: 'Paul\u2019s leadership strategy: entrust truth to faithful people who teach others (2 Timothy 2:2).' },
          { term: '"To live is Christ"', definition: 'Paul\u2019s life philosophy: Christ as the center, gain, and goal of existence (Philippians 1:21).' },
        ],
        crossRefs: ['Acts 13-14', 'Acts 16-18', 'Romans 1:16-17', '1 Corinthians 15:1-11', 'Galatians 1:11-24', 'Philippians 4:4-13'],
        reflection: [
          'How did God\u2019s preparation of the Roman world ("the fullness of the time," Galatians 4:4) encourage you about his sovereignty over your circumstances?',
          'Which element of Paul\u2019s missionary playbook (strategic cities, teams, tentmaking, establishing elders, adapting methods) could apply to your church\u2019s outreach?',
          'Paul adapted his methods radically while never bending his message. Where do you need more flexibility \u2014 or more firmness?',
          '2 Timothy 2:2 describes four generations: Paul \u2192 Timothy \u2192 faithful men \u2192 others. Who are you intentionally investing in as your "Timothy"?',
          'What would "to live is Christ" require you to stop \u2014 or start \u2014 this month?',
          'Paul finished well ("I have kept the faith"). What threatens your finish \u2014 and what would faithfulness look like over the next decade?',
        ],
        application: `Do two things this month. First, read Acts 13-28 straight through (Paul\u2019s missionary career) in two weeks, mapping his journeys and noting his methods \u2014 then discuss with a friend what your church could learn. Second, begin your own "2 Timothy 2:2 chain": identify one person to intentionally disciple \u2014 meet regularly, study Scripture together, pray together \u2014 with the explicit goal that they will one day disciple someone else. Paul\u2019s strategy wasn\u2019t just converts but multipliers. Be one; make one.`,
        prayer: `Lord of the harvest \u2014 who prepared an empire, converted a persecutor, and filled him with your Spirit \u2014 do it again. Make me a chosen vessel: gospel-clear like Paul, courageous like Paul, tearful like Paul, joyful in chains like Paul. Teach me his strategy and his theology, his mission and his heart. Root me in grace alone; send me to the unreached around me; multiply me into faithful men and women who teach others also. Let my life\u2019s epitaph be his: I fought the good fight, I finished the course, I kept the faith \u2014 for to me to live is Christ, and to die is gain. Amen.`,
        quiz: [
          {
            id: 'path-int-8-study-q1',
            type: 'mc',
            prompt: 'God\u2019s preparation of Paul\u2019s world included...',
            choices: ['Roman roads and peace, the Greek language, and synagogues in every city', 'The printing press', 'Air travel', 'The internet'],
            answer: 'Roman roads and peace, the Greek language, and synagogues in every city',
            explanation: '"When the fullness of the time came" (Galatians 4:4) \u2014 Pax Romana, koine Greek, and the diaspora set the stage.',
            tags: ['paul'],
          },
          {
            id: 'path-int-8-study-q2',
            type: 'mc',
            prompt: 'Paul\u2019s missionary principle in 1 Corinthians 9:22 ("all things to all men") means...',
            choices: ['Compromising the message for acceptance', 'Adapting methods flexibly while keeping the message rigid', 'Avoiding all cultural engagement', 'Preaching only to Jews'],
            answer: 'Adapting methods flexibly while keeping the message rigid',
            explanation: 'Flexibility in method, rigidity in message \u2014 "that I may by all means save some."',
            tags: ['paul'],
          },
          {
            id: 'path-int-8-study-q3',
            type: 'tf',
            prompt: '2 Timothy 2:2 outlines four generations of multiplication: Paul \u2192 Timothy \u2192 faithful men \u2192 others also.',
            answer: 'True',
            explanation: 'Paul\u2019s strategy was multipliers, not just converts \u2014 entrust truth to those who will teach others.',
            tags: ['paul'],
          },
          {
            id: 'path-int-8-study-q4',
            type: 'mc',
            prompt: 'Reading Paul\u2019s letters well requires understanding...',
            choices: ['Only the Greek alphabet', 'The original occasion/situation each letter addressed, then drawing the timeless principle', 'Roman cooking', 'Nothing \u2014 context doesn\u2019t matter'],
            answer: 'The original occasion/situation each letter addressed, then drawing the timeless principle',
            explanation: 'Occasional yet universal: find the situation, find the principle, apply it now.',
            tags: ['paul'],
          },
        ],
      },
    },
  },
];

const INTERMEDIATE_STUBS: LayeredLesson[] = [
  stubLesson(
    'path-int-2', 2, 'Biblical Theology',
    'Tracing God\u2019s redemptive storyline \u2014 creation, fall, redemption, new creation \u2014 and the great themes that run through the whole Bible.',
    'The Bible tells one unfolding story of God redeeming his creation, and tracing its themes (covenant, kingdom, temple, sacrifice) reveals Christ at the center.',
    [
      { ref: 'Luke 24:27', text: 'Beginning from Moses and from all the prophets, he explained to them in all the Scriptures the things concerning himself.' },
      { ref: 'Ephesians 1:10', text: 'to sum up all things in Christ, the things in the heavens and the things on the earth, in him.' },
    ],
    `Biblical theology traces the Bible\u2019s own storyline instead of jumping straight to topics. The plot has four great movements: creation (Genesis 1-2 \u2014 a good world, humans as God\u2019s image-bearers), fall (Genesis 3 \u2014 rebellion, curse, exile), redemption (Genesis 3:15 through the cross \u2014 God\u2019s long rescue mission), and new creation (Revelation 21-22 \u2014 God dwelling with his people forever).

Along the way, great themes develop like musical motifs: covenant (God binding himself to his people), kingdom (God\u2019s reign through his king), temple (God\u2019s presence dwelling with humanity), sacrifice (atonement through shed blood), and exile-and-return. Each theme starts as a seed, grows through the Old Testament, and blossoms in Christ \u2014 who is the true temple (John 2:19-21), the final sacrifice (Hebrews 10:10), the Davidic king (Revelation 22:16), and the mediator of the new covenant (Hebrews 9:15).

Reading this way protects us from flattening the Bible into disconnected moral lessons. Every passage has an address in the story \u2014 ask where yours sits, how it advances God\u2019s redemptive plan, and how it looks in light of Christ\u2019s coming. The whole Bible is, in Augustine\u2019s phrase, about Christ: the Old Testament reveals him in promise and pattern; the New reveals him in person.`,
    [
      'Where does your favorite Bible passage sit in the creation-fall-redemption-consummation storyline? How does that placement shape its meaning?',
      'Which theme \u2014 covenant, kingdom, temple, sacrifice \u2014 do you want to trace through Scripture next? Where would you start?',
    ],
    `Pick one theme (temple is a great start) and trace it for two weeks using a concordance or study Bible cross-references: Eden \u2192 tabernacle \u2192 temple \u2192 Christ \u2192 church \u2192 new creation. Note how each stage deepens the last. You\u2019ll never read the Bible flatly again.`,
    `Lord, thank you for one unfolding story, not a scrapbook of verses. Teach me to read each passage in its place in your redemptive plan \u2014 and to see Christ, in whom all things hold together and find their meaning. Make me a reader of the whole counsel of God. In Jesus\u2019 name, amen.`,
    {
      expanded: `## The Storyline in More Detail\nCreation: God makes a very good world and crowns it with image-bearers tasked to rule and fill it (Genesis 1:26-28). Fall: humanity\u2019s rebellion fractures four relationships \u2014 with God, self, others, and creation (Genesis 3-4). Redemption: God\u2019s patient rescue unfolds through covenants (Noah, Abraham, Moses, David) narrowing to one man, Jesus \u2014 his life, death, resurrection, and the Spirit\u2019s church. Consummation: Christ returns, judges, and makes all things new (Revelation 21-22) \u2014 Eden restored and surpassed.\n\n## Themes That Develop\nWatch how "seed" (Genesis 3:15) becomes "offspring" (Abraham, Genesis 12) becomes "son of David" (2 Samuel 7) becomes Jesus (Galatians 3:16). Watch "rest" move from Sabbath to Canaan to Christ\u2019s "I will give you rest" (Matthew 11:28) to the coming rest (Hebrews 4:9). Biblical theology is learning to hear these melodies across the canon \u2014 and they all resolve in Christ, "in whom are all the treasures" (Colossians 2:3).`,
      deep: `## Typology: Shadows and Substance\nThe Old Testament is full of "types" \u2014 persons, events, and institutions that foreshadow Christ. Adam is "a type of him who was to come" (Romans 5:14): one man\u2019s act affecting all. The Passover lamb\u2019s blood saves from judgment (Exodus 12) \u2014 "Christ, our Passover, has been sacrificed" (1 Corinthians 5:7). The tabernacle\u2019s sacrifices, priesthood, and holy places were "a shadow of the good things to come" (Hebrews 10:1). Jonah\u2019s three days prefigure the resurrection (Matthew 12:40). Reading typologically \u2014 with the New Testament\u2019s own guidance, not free imagination \u2014 shows the Old Testament as a gallery of Christ-portraits in shadow.\n\n## Continuity and Discontinuity\nBiblical theology also clarifies what carries forward and what doesn\u2019t. The moral law reflects God\u2019s unchanging character and still binds (Romans 13:9); the ceremonial law (sacrifices, purity codes) is fulfilled in Christ (Hebrews 10:1-10); the civil law governed old-covenant Israel as a theocracy. The Sabbath finds its rest in Christ (Colossians 2:16-17) while the principle of rest remains wise. Getting this right keeps us from both legalism and lawlessness \u2014 and shows the Bible\u2019s storyline as progress, not contradiction.`,
      study: `## A Method for Biblical-Theological Study\nChoose a theme and work it canonically: (1) Define it biblically \u2014 where does it first appear? (2) Trace it through the covenants \u2014 how does each stage add meaning? (3) Find its climax in Christ \u2014 how does he fulfill, transform, or embody it? (4) Note its church-age form \u2014 how does the New Testament apply it to believers? (5) Project its consummation \u2014 how does Revelation complete it? Try this with "kingdom": announced in creation (God\u2019s reign), lost at the fall, promised to David\u2019s son, inaugurated in Jesus\u2019 ministry ("the kingdom of God is at hand," Mark 1:15), expanded through the church, consummated at his return ("the kingdom of the world has become the kingdom of our Lord," Revelation 11:15). Then preach it to yourself: you are a citizen of that kingdom now (Philippians 3:20), living by its values while waiting for its fullness. This is biblical theology becoming doxology \u2014 and then obedience.`,
    },
  ),
  stubLesson(
    'path-int-3', 3, 'Old Testament Overview',
    'A guided tour of the Old Testament\u2019s 39 books \u2014 law, history, poetry, and prophets \u2014 telling the story of God\u2019s covenant people and his promises.',
    'The Old Testament tells how God created the world, chose Israel, gave his law, and promised a Savior \u2014 laying the foundation the New Testament fulfills.',
    [
      { ref: 'Romans 15:4', text: 'For whatever things were written before were written for our learning, that through perseverance and through encouragement of the Scriptures we might have hope.' },
      { ref: '2 Timothy 3:16', text: 'Every Scripture is God-breathed and profitable for teaching, for reproof, for correction, and for instruction in righteousness,' },
    ],
    `The Old Testament is 39 books spanning creation to about 400 BC \u2014 roughly three-quarters of your Bible. Many Christians neglect it; Paul says it was "written for our learning" and gives us hope (Romans 15:4). Here\u2019s the map.

The Pentateuch (Genesis\u2013Deuteronomy): foundations. Creation, fall, flood, Abraham\u2019s call, exodus from Egypt, the law at Sinai, wilderness wanderings. Everything starts here.

The Historical Books (Joshua\u2013Esther): Israel\u2019s story. Conquest of Canaan (Joshua), the judges\u2019 chaotic cycles (Judges, Ruth), the united monarchy (Samuel, Kings, Chronicles), exile to Babylon, and return (Ezra, Nehemiah, Esther). A long arc of faithfulness, failure, judgment, and mercy.

Poetry and Wisdom (Job\u2013Song of Songs): the heart\u2019s books. Job wrestles suffering; Psalms teach us to pray every emotion; Proverbs gives skill for living; Ecclesiastes faces life\u2019s vanity apart from God; Song of Songs celebrates marital love.

The Prophets (Isaiah\u2013Malachi): God\u2019s messengers. Major Prophets (Isaiah, Jeremiah, Ezekiel, Daniel \u2014 longer books) and twelve Minor Prophets (shorter, not lesser) called Israel back to covenant faithfulness, warned of judgment, and \u2014 crucially \u2014 foretold the coming Messiah in stunning detail.

Read the Old Testament as Christian Scripture: every section prepares for, points to, or is fulfilled by Christ (Luke 24:27).`,
    [
      'Which Old Testament section (law, history, poetry, prophets) have you read least? What first step could change that?',
      'How does seeing the Old Testament as "written for our learning" (Romans 15:4) change your motivation to read it?',
    ],
    `Start a 90-day Old Testament tour: read Genesis, Exodus 1-20, Joshua, 1 Samuel, 2 Samuel, 1 Kings 17-19, 2 Kings, Nehemiah, Esther, Job 1-2 & 38-42, 10 psalms of your choice, Proverbs (one chapter a day for a month), Isaiah 40 & 53, Daniel, and Jonah. You\u2019ll cover the storyline\u2019s spine \u2014 and find Christ foreshadowed everywhere.`,
    `Father, thank you for the Old Testament \u2014 for creation and covenant, law and prophets, psalms and promises. Forgive my neglect of three-quarters of your word. Teach me to read it as Christian Scripture: learning from Israel\u2019s story, praying the psalms, heeding the prophets, and finding Christ on every page. Give me hope through these Scriptures. In Jesus\u2019 name, amen.`,
    {
      expanded: `## Reading Each Section Well\nLaw: read as covenant instruction for Israel that reveals God\u2019s holiness and our need \u2014 the moral law still reflects his character; the ceremonial law points to Christ; the civil law governed ancient Israel. History: read theologically \u2014 the authors select and shape events to show God\u2019s faithfulness and human failure; descriptive is not always prescriptive. Poetry: feel it \u2014 Hebrew parallelism and imagery engage the heart, not just the mind. Wisdom: apply it as skill for godly living, recognizing proverbs as principles. Prophets: hear both judgment and hope \u2014 they spoke to their own crises first, then to the coming Messiah, then to the end of history.\n\n## Key Figures and Moments\nAdam, Noah, Abraham, Joseph, Moses, Joshua, Deborah, Ruth, David, Solomon, Elijah, Elisha, Isaiah, Jeremiah, Daniel \u2014 trace one life per month. Key moments: creation, fall, flood, exodus, Sinai, conquest, kingdom, exile, return. Each is a stone in the foundation the New Testament builds on.`,
      deep: `## The Prophets and the Messiah\nThe prophets\u2019 messianic predictions are Christianity\u2019s evidential treasure: born of a virgin (Isaiah 7:14), in Bethlehem (Micah 5:2), preceded by a forerunner (Malachi 3:1), entering Jerusalem humbly (Zechariah 9:9), betrayed for thirty silver pieces (Zechariah 11:12), silent before accusers (Isaiah 53:7), pierced (Psalm 22:16; Zechariah 12:10), buried with the rich (Isaiah 53:9), rising (Psalm 16:10). Written centuries before Christ, fulfilled in detail \u2014 study these with an unbelieving friend; they are among the strongest reasons to trust the Bible.\n\n## Wisdom for Suffering and Life\nJob dismantles tidy formulas about suffering: God is sovereign, Satan is limited, friends\u2019 clich\u00e9s are wrong, and God\u2019s answer is himself. Ecclesiastes strips life "under the sun" of illusion \u2014 wealth, pleasure, wisdom all vanity \u2014 driving us to "fear God, and keep his commandments" (12:13). Proverbs offers 31 chapters of practical righteousness. The Psalms give words for every season: lament (13, 42), confession (32, 51), trust (23, 91), praise (103, 150). The Old Testament is not prelude only \u2014 it is a complete school of the soul.`,
      study: `## A Canonical Reading Plan\nRead the Old Testament in a year alongside the New: about three OT chapters and one NT chapter daily takes you through both. Or follow the storyline chronologically: Genesis\u2013Kings straight through, then Chronicles\u2019 retelling, then Ezra\u2013Nehemiah\u2013Esther, slotting each prophet into his historical moment (use a study Bible\u2019s timeline), and the poetry/wisdom books as devotionals throughout. Keep a timeline notebook: creation, patriarchs (~2000 BC), exodus (~1446 BC), conquest, judges, united monarchy (~1010 BC), divided kingdom, Assyrian exile (722 BC), Babylonian exile (586 BC), return (~538 BC), silence, then Christ. Seeing where each book sits transforms confusion into clarity \u2014 and every exile-and-return whispers the greater Exodus Jesus would accomplish (Luke 9:31).`,
    },
  ),
  stubLesson(
    'path-int-4', 4, 'New Testament Overview',
    'A guided tour of the New Testament\u2019s 27 books \u2014 Gospels, Acts, letters, and Revelation \u2014 proclaiming Christ and building his church.',
    'The New Testament announces the fulfillment of God\u2019s promises in Jesus \u2014 his life, death, resurrection, the Spirit\u2019s church, and his coming return.',
    [
      { ref: 'John 20:31', text: 'but these are written, that you may believe that Jesus is the Christ, the Son of God, and that believing you may have life in his name.' },
      { ref: 'Acts 1:8', text: 'But you will receive power when the Holy Spirit has come upon you. You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth.' },
    ],
    `The New Testament\u2019s 27 books were all written in the first century, in Greek, within living memory of Jesus. Four sections:

The Gospels (Matthew\u2013John): four complementary portraits of Jesus \u2014 his birth, ministry, teaching, miracles, death, and resurrection. Matthew: the King; Mark: the Servant; Luke: the Son of Man; John: the Son of God. Together they call readers to believe (John 20:31).

Acts: the sequel \u2014 the risen Christ\u2019s continuing work through the Spirit-empowered church, from Jerusalem to Rome (Acts 1:8). Pentecost, persecutions, conversions (including Saul\u2019s), missionary journeys, and the gospel\u2019s unstoppable spread.

The Letters (Romans\u2013Jude): 21 epistles applying the gospel. Paul\u2019s thirteen (Romans through Philemon) cover doctrine, church life, and pastoral ministry; Hebrews expounds Christ\u2019s supremacy; James, Peter, John, and Jude address suffering, holiness, truth, and perseverance. Read each as a real letter to a real situation \u2014 then draw the timeless principle.

Revelation: John\u2019s apocalyptic vision of Christ\u2019s triumph \u2014 encouragement to persecuted churches that the Lamb wins, evil is judged, and God makes all things new. Read it for worship and hope, not just timelines.

One thread unites all 27: Jesus Christ \u2014 promised, present, proclaimed, and coming again.`,
    [
      'Which New Testament section do you know best \u2014 and which have you barely read (e.g., the smaller letters, Revelation)?',
      'How does reading each letter as a real letter to a real situation change the way you\u2019ll approach, say, 1 Corinthians or James?',
    ],
    `Read the New Testament in 90 days: Gospels (one per week for four weeks), Acts (one week), then two letters per week for the remaining weeks, ending with Revelation. Keep a one-sentence summary of each book. You\u2019ll finish with the whole NT\u2019s shape in your mind \u2014 and Christ at its center.`,
    `Lord Jesus, thank you for the New Testament \u2014 for the fourfold witness to your life, the story of your church, the letters of your apostles, and the vision of your victory. Make me a reader of all of it, not just favorite parts. Establish my faith, correct my life, and fill me with hope: you came, you reign, you are coming again. Amen.`,
    {
      expanded: `## The Letters at a Glance\nPaul\u2019s churches: Romans (systematic gospel), 1-2 Corinthians (correction and comfort), Galatians (freedom from legalism), Ephesians (the church\u2019s calling), Philippians (joy in suffering), Colossians (Christ supreme), 1-2 Thessalonians (the Lord\u2019s return), 1-2 Timothy and Titus (faithful ministry), Philemon (gospel reconciliation). General letters: Hebrews (Christ better than all), James (faith that works), 1-2 Peter (hope in suffering, guarding truth), 1-3 John (love and truth), Jude (contending for the faith). Each addresses real problems with gospel power \u2014 which is why they still address ours.\n\n## Acts: The Pattern of Mission\nActs gives the church\u2019s playbook: Spirit-empowered witness (1:8), bold preaching of Christ crucified and risen (2:22-36), conversions and baptisms (2:41), fellowship and prayer (2:42), persecution met with courage (4:29), deacons and organization (6), crossing cultural barriers (8, 10), missionary sending (13), church planting and elder appointment (14:23), and gospel advance despite chains (28:30-31). The book ends unfinished \u2014 because the story continues in us.`,
      deep: `## Revelation: Reading Apocalyptic Well\nRevelation is apocalyptic prophecy \u2014 highly symbolic, like Daniel and Ezekiel. Read it with three anchors: (1) It was written to seven real, persecuted churches (chapters 2-3) \u2014 its first meaning was comfort for them. (2) Its symbols come from the Old Testament \u2014 the Lamb (Passover/Isaiah 53), the dragon (Satan), Babylon (oppressive empire), the new Jerusalem (Eden restored). A cross-referenced Old Testament unlocks most images. (3) Its center is worship: throne-room scenes (4-5), the Lamb\u2019s victory (12, 19), the wedding supper (19), the new creation (21-22). Christians disagree on millennial details \u2014 hold your view humbly, hold Christ\u2019s triumph firmly. The book\u2019s message: "the Lamb wins \u2014 so endure."\n\n## The Canon\u2019s Shape\nNotice the New Testament\u2019s architecture: Gospels (the foundation \u2014 Christ), Acts (the expansion \u2014 the church), Letters (the explanation \u2014 doctrine and life), Revelation (the consummation \u2014 the victory). It mirrors the Christian life: meet Christ, join his mission, grow in truth, hope in his return. Read the whole New Testament this way and it becomes not 27 separate books but one symphony in four movements.`,
      study: `## A Year in the New Testament\nPlan: read each Gospel slowly (one per month, noting distinctive themes), Acts in two weeks (mapping Paul\u2019s journeys), then one letter per week \u2014 reading each letter straight through in one sitting first (most take 15-40 minutes), then studying it section by section with a commentary. End with Revelation over two weeks, using an Old Testament cross-reference guide. Journal per book: author, audience, occasion, key verse, one doctrine, one duty, one promise. By year\u2019s end you\u2019ll know the New Testament\u2019s terrain intimately \u2014 and, more importantly, its King. Supplement with a New Testament survey textbook or lecture series for historical background: intertestamental history, Second Temple Judaism, Greco-Roman culture. Background illuminates; the text transforms.`,
    },
  ),
  stubLesson(
    'path-int-5', 5, 'The Covenants',
    'God\u2019s binding promises through history \u2014 Noah, Abraham, Moses, David \u2014 climaxing in the new covenant in Christ\u2019s blood.',
    'God relates to his people through covenants \u2014 solemn, binding commitments \u2014 each advancing his plan until the new covenant fulfills them all in Christ.',
    [
      { ref: 'Hebrews 9:15', text: 'For this reason he is the mediator of a new covenant, since a death has occurred for the redemption of the transgressions that were under the first covenant, that those who have been called may receive the promise of the eternal inheritance.' },
      { ref: 'Jeremiah 31:33', text: 'But this is the covenant that I will make with the house of Israel after those days, says Yahweh: I will put my law in their inward parts, and I will write it in their heart. I will be their God, and they shall be my people.' },
    ],
    `A covenant is a solemn, binding relationship-commitment \u2014 stronger than a contract, sealed by oath and often by sacrifice. The Bible\u2019s story moves through God\u2019s covenants, each advancing his rescue plan.

The Noahic covenant (Genesis 9): God promises never again to flood the earth \u2014 a covenant with all creation, sealed by the rainbow. Common grace secured.

The Abrahamic covenant (Genesis 12, 15, 17): God promises Abraham land, offspring, and blessing \u2014 "in you all the families of the earth will be blessed." Unconditional, sealed by God alone passing through the pieces (Genesis 15). The gospel in advance (Galatians 3:8).

The Mosaic covenant (Exodus 19-24): the law given at Sinai. Conditional \u2014 blessings for obedience, curses for disobedience. It revealed God\u2019s holiness, exposed sin, and governed Israel as a theocracy. It was never the means of salvation (Galatians 3:21) but a tutor leading to Christ (Galatians 3:24).

The Davidic covenant (2 Samuel 7): God promises David an everlasting dynasty \u2014 a son whose throne endures forever. Fulfilled in Jesus, the Son of David (Luke 1:32-33).

The new covenant (Jeremiah 31:31-34; Luke 22:20): God writes his law on hearts, forgives sins completely, and gives his Spirit to all his people. Inaugurated by Christ\u2019s blood, it fulfills and surpasses all the rest. If you are in Christ, you are a new-covenant person \u2014 forgiven, indwelt, and secure.`,
    [
      'Which covenant promise speaks most directly to your current need \u2014 Abraham\u2019s blessing, Moses\u2019 holiness, David\u2019s eternal king, or the new covenant\u2019s forgiven heart?',
      'How does understanding the Mosaic covenant as a "tutor leading to Christ" (Galatians 3:24) change the way you read the Old Testament law?',
    ],
    `Read Jeremiah 31:31-34 and Luke 22:14-20 side by side this week \u2014 promise and fulfillment. List the new covenant\u2019s blessings (law on hearts, full forgiveness, all knowing God) and write one sentence for each on how you\u2019ve experienced it. Then take the Lord\u2019s Supper next opportunity with fresh awareness: "this cup is the new covenant in my blood."`,
    `Covenant-keeping God \u2014 thank you for binding yourself to sinners with unbreakable promises. Thank you for Noah\u2019s rainbow, Abraham\u2019s blessing, Moses\u2019 holiness, David\u2019s eternal Son \u2014 and above all for the new covenant in Jesus\u2019 blood: my sins forgiven, your law on my heart, your Spirit within me. Make me faithful as you are faithful. In Jesus\u2019 name, amen.`,
    {
      expanded: `## Covenant Signs and Seals\nEach covenant had a sign: the rainbow (Noah), circumcision (Abraham), the Sabbath (Moses), the throne (David) \u2014 and the new covenant\u2019s signs are baptism and the Lord\u2019s Supper. Signs don\u2019t create the covenant; they mark and seal it. This is why baptism marks entry into the new-covenant community and the Supper repeatedly seals its benefits to believers. Understanding signs guards both sacraments from superstition (they\u2019re not magic) and from neglect (they\u2019re God\u2019s appointed seals).\n\n## Conditional and Unconditional\nSome covenants are unconditional (God\u2019s promise stands regardless \u2014 Abrahamic, Davidic, new); the Mosaic was conditional (blessing tied to obedience). This distinction resolves much confusion: Israel\u2019s exile didn\u2019t cancel God\u2019s unconditional promises to Abraham and David \u2014 it enacted the Mosaic covenant\u2019s curses. And the new covenant is unconditionally secured by Christ\u2019s blood, which is why believers\u2019 salvation is sure even when our obedience falters.`,
      deep: `## Covenant Theology vs. Dispensationalism\nChristians organize the covenants differently. Covenant theology sees one covenant of grace unfolding through successive administrations \u2014 emphasizing continuity: one people of God, the law\u2019s moral core enduring, infant baptism as the new circumcision. Dispensationalism emphasizes discontinuity: distinct eras, a sharper Israel/church distinction, and (in classic forms) a future for ethnic Israel including a millennial kingdom. Both affirm the gospel; both have godly scholars. Study the key texts yourself (Romans 11, Galatians 3-4, Hebrews 8-10, Revelation 20), hold your view with conviction and charity, and major on what all agree: Christ is the mediator of the new covenant, and it is better by far (Hebrews 8:6).\n\n## The New Covenant\u2019s "Better" Blessings\nHebrews 8:6 says the new covenant is "enacted on better promises." Better how? Full forgiveness \u2014 sins remembered no more (Jeremiah 31:34; Hebrews 10:17). Internal transformation \u2014 the law written on hearts, not just tablets (Jeremiah 31:33; Ezekiel 36:26-27). Universal knowledge of God \u2014 from least to greatest (Jeremiah 31:34). The permanent indwelling Spirit (Joel 2:28; Acts 2). A perfect Mediator who "lives forever to make intercession" (Hebrews 7:25). Meditate on each: you are living in the "better" age the prophets longed to see.`,
      study: `## Tracing Each Covenant Canonically\nWork through the covenants in their biblical order, noting for each: the parties, the promises, the conditions, the sign, and the fulfillment in Christ. Noah (Genesis 6-9): preservation of creation \u2014 fulfilled as God sustains the world until redemption\u2019s completion. Abraham (Genesis 12-17): blessing to nations \u2014 fulfilled as Gentiles are justified by faith (Galatians 3:8-9). Moses (Exodus 19-24; Deuteronomy): holiness and the tutor-function \u2014 fulfilled as Christ keeps the law and bears its curse (Galatians 3:13). David (2 Samuel 7; Psalm 89): eternal throne \u2014 fulfilled in Christ\u2019s resurrection and reign (Acts 2:30-36). New (Jeremiah 31; Ezekiel 36; Luke 22): heart-transformation and full forgiveness \u2014 inaugurated at the cross, consummated at Christ\u2019s return. Chart them on a timeline; teach them to someone else. The covenants are the skeleton of the Bible\u2019s story \u2014 learn them and the whole body makes sense.`,
    },
  ),
  stubLesson(
    'path-int-6', 6, 'Understanding Prophecy',
    'How to read biblical prophecy \u2014 its purpose, patterns, and fulfillment \u2014 from Isaiah\u2019s suffering servant to Revelation\u2019s new creation.',
    'Biblical prophecy is God\u2019s forthtelling (speaking his truth to the present) and foretelling (revealing his future) \u2014 always pointing to Christ and calling for faithfulness now.',
    [
      { ref: '2 Peter 1:21', text: 'For no prophecy ever came by the will of man: but holy men of God spoke, being moved by the Holy Spirit.' },
      { ref: 'Revelation 19:10', text: 'For the testimony of Jesus is the Spirit of prophecy.' },
    ],
    `Prophecy is often misunderstood as mere future-prediction. In Scripture, prophets were primarily forthtellers \u2014 speaking God\u2019s word into their own moment: calling out idolatry and injustice, summoning repentance, comforting the afflicted. Foretelling the future served those present aims: warning of coming judgment to spur repentance, promising future restoration to sustain hope.

Read prophecy with three horizons in view. The near horizon: the prophet\u2019s own time (Isaiah warning Judah about Assyria). The messianic horizon: promises finding fulfillment in Christ (Isaiah 53\u2019s suffering servant; Micah 5:2\u2019s Bethlehem). The far horizon: the end of history and new creation (Isaiah 65-66; Daniel 7; Revelation 21-22). Prophecies often blend horizons \u2014 "prophetic foreshortening" \u2014 like mountain peaks appearing side by side though miles apart.

Two anchors keep interpretation sane: "the testimony of Jesus is the Spirit of prophecy" (Revelation 19:10) \u2014 all prophecy ultimately testifies to Christ; and prophecy\u2019s purpose is ethical \u2014 "what sort of people ought you to be in holy living and godliness?" (2 Peter 3:11). Prophecy was given to produce holiness and hope, not speculation and charts. The humble student asks not only "when?" but "what kind of person should I be?"`,
    [
      'How does seeing prophets as forthtellers (speaking to their own time) first change the way you read books like Amos or Jeremiah?',
      'What\u2019s the difference between prophecy producing "holiness and hope" versus mere speculation? Which characterizes your interest in the end times?',
    ],
    `Read Isaiah 53 and list every detail fulfilled in Christ\u2019s suffering \u2014 then share the list with one person. Next, read 2 Peter 3:10-14 and write down Peter\u2019s application of end-times prophecy ("what sort of people ought you to be?"). Let prophecy do its God-given work: deepening your trust in Christ and your holiness today.`,
    `Lord, thank you for speaking through your prophets \u2014 warning, comforting, and promising. Give me humility before prophecy: to read it in context, to see Christ at its center, and to let it produce holiness and hope rather than speculation. Make me the kind of person who is ready for your future. In Jesus\u2019 name, amen.`,
    {
      expanded: `## Prophetic Patterns\nProphets spoke in recognizable forms: the lawsuit oracle (God prosecuting his people, as in Micah 6:1-8), the woe oracle (judgment pronounced), the promise oracle (restoration pledged), and the sign-act (Ezekiel lying on his side, Hosea marrying Gomer \u2014 lived parables). Recognizing the form clarifies the force. Also note prophetic idiom: cosmic language ("sun darkened") often depicts political upheaval, not literal astronomy; numbers and images are frequently symbolic. Read poetry as poetry \u2014 its power is in vivid impression, not newspaper precision.\n\n## Fulfillment in Christ\nThe New Testament finds Christ everywhere in prophecy \u2014 sometimes in direct prediction (Micah 5:2 \u2192 Matthew 2:6), sometimes in pattern-fulfillment (Hosea 11:1, "out of Egypt I called my son" \u2192 Matthew 2:15 \u2014 Israel\u2019s story recapitulated in Jesus). Matthew\u2019s fulfillment quotations (ten "that it might be fulfilled" passages) show the apostles\u2019 method: Christ is the goal toward which all prophecy strains. This doesn\u2019t license fanciful allegorizing \u2014 follow the apostles\u2019 own use \u2014 but it does mean no prophecy is fully understood until seen in Christ\u2019s light.`,
      deep: `## Eschatology: Views of the End\nChristians agree Christ will return bodily, judge, and make all things new \u2014 but differ on the millennium (Revelation 20\u2019s "thousand years"). Premillennialism: Christ returns before a literal thousand-year earthly reign. Amillennialism: the millennium symbolizes the present church age; Christ returns to usher in the eternal state. Postmillennialism: the gospel will progressively Christianize the world before Christ\u2019s return. Each has serious biblical arguments and godly advocates. Study Revelation 20, Romans 11, and 1 Corinthians 15 yourself; hold your view with conviction but not divisiveness. What unites us dwarfs what divides: "we wait for... the Savior, the Lord Jesus Christ" (Philippians 3:20), and "everyone who has this hope in him purifies himself" (1 John 3:3).\n\n## Reading Revelation Responsibly\nFour main approaches: preterist (fulfilled in the first century, especially AD 70), historicist (unfolding through church history), futurist (mostly still future), idealist (timeless spiritual principles). Most scholars blend them. Practical rules: let the clear interpret the unclear; interpret symbols by their Old Testament roots; don\u2019t set dates (Matthew 24:36); major on the main point \u2014 the Lamb\u2019s victory and the call to endure. Revelation was written to comfort persecuted Christians, not to fuel speculation industries. Read it worshipfully: after every vision of judgment comes a song of praise.`,
      study: `## A Prophecy Study Project\nWork through Daniel and Revelation together over two months \u2014 Daniel is Revelation\u2019s Old Testament key. Week 1-2: Daniel 1-6 (stories of faithfulness in exile \u2014 the ethical foundation). Week 3-4: Daniel 7-12 (visions: four kingdoms, the Son of Man, the seventy weeks). Week 5-6: Revelation 1-3 (letters to seven churches \u2014 prophecy\u2019s pastoral purpose). Week 7-8: Revelation 4-22 (throne, seals, trumpets, bowls, Babylon\u2019s fall, the Lamb\u2019s victory, new creation) \u2014 tracking Old Testament allusions with cross-references. Throughout, journal two columns: "What this reveals about God/Christ" and "What this requires of me." End by writing your own summary of the Bible\u2019s end-times hope in one page \u2014 clear enough to comfort a grieving friend. That\u2019s prophecy doing its God-given work.`,
    },
  ),
  stubLesson(
    'path-int-9', 9, 'Early Christianity',
    'The church\u2019s first centuries \u2014 apostles, persecution, councils, and creeds \u2014 and what they teach us about faithfulness today.',
    'The early church turned the world upside down through Spirit-empowered witness, steadfast suffering, and careful defense of the apostolic faith.',
    [
      { ref: 'Acts 17:6', text: 'These who have turned the world upside down have come here also.' },
      { ref: 'Jude 1:3', text: 'I found it necessary to write to you exhorting you to contend earnestly for the faith which was once for all delivered to the saints.' },
    ],
    `In one generation, a crucified carpenter\u2019s followers "turned the world upside down" (Acts 17:6). How? The Spirit\u2019s power at Pentecost, bold preaching of Christ crucified and risen, radical love (care for the poor, sick, and dying \u2014 even during plagues), and unshakeable hope in the face of persecution.

The apostles spread the gospel across the empire; tradition holds most were martyred. By AD 100, churches dotted the Mediterranean. Then came waves of persecution \u2014 Nero, Domitian, and most severely Diocletian \u2014 yet the church grew. Tertullian\u2019s famous line: "the blood of the martyrs is the seed of the church." Their courage under torture \u2014 singing, forgiving, refusing to recant \u2014 was itself a witness.

Challenges forced clarity. Heresies \u2014 Gnosticism (secret knowledge, denying Christ\u2019s humanity), Arianism (denying Christ\u2019s deity), Pelagianism (denying grace) \u2014 compelled the church to define orthodoxy. The councils of Nicaea (325) and Chalcedon (451) gave us the creeds confessing Christ as fully God and fully man. Figures like Athanasius ("against the world" for the Trinity), Augustine (grace against Pelagius), and countless unnamed martyrs kept the faith.

Their lesson: faithfulness over success, truth over trend, courage over comfort. The church didn\u2019t conquer by the sword but by the cross \u2014 by loving enemies, serving the suffering, and refusing to bend.`,
    [
      'What most challenges you about the early church\u2019s courage under persecution? How does comfort shape your own witness?',
      'The early church defined orthodoxy under pressure. What pressures today require the same careful contending for the faith?',
    ],
    `Read the Apostles\u2019 Creed and Nicene Creed slowly this week \u2014 line by line, looking up the Scriptures behind each phrase. Then read one martyr story (Polycarp\u2019s is short and powerful) and ask: what would I refuse to recant? Let the early church\u2019s faithfulness sharpen your own.`,
    `Lord, thank you for the cloud of witnesses \u2014 apostles, martyrs, and confessors who kept the faith at great cost. Forgive my comfort-shaped Christianity. Give me their courage, their love, their clarity about truth. Make me one who contends earnestly for the faith once delivered \u2014 and one who loves enemies the way they did. In Jesus\u2019 name, amen.`,
    {
      expanded: `## Persecution and Growth\nRoman persecution was sporadic but brutal: Christians were scapegoated for disasters, demanded to offer incense to the emperor, and executed for refusing. Yet observers were stunned \u2014 by martyrs\u2019 joy, by Christians nursing plague victims (including pagans) at risk to themselves, by their sexual purity and care for the poor in a brutal age. Sociologist Rodney Stark argues these very traits \u2014 love, community, hope \u2014 drove the church\u2019s explosive growth from ~1,000 believers in AD 40 to millions by AD 300. The church didn\u2019t grow through marketing but through martyrdom and mercy.\n\n## Creeds and Councils\nNicaea (325) answered Arius: is Christ truly God? The Nicene Creed\u2019s homoousios ("of the same substance" with the Father) said yes \u2014 Athanasius defended it nearly alone for decades. Constantinople (381) clarified the Spirit\u2019s deity. Ephesus (431) and Chalcedon (451) defined Christ\u2019s two natures: fully God, fully man, one person. These weren\u2019t philosophical games \u2014 each definition protected the gospel: only a fully divine Christ can save; only a fully human Christ can represent us. The creeds remain the church\u2019s guardrails.`,
      deep: `## Key Figures\nAthanasius (c. 296-373): defended Nicaea against Arianism through five exiles \u2014 "Athanasius contra mundum" (against the world). Augustine of Hippo (354-430): the most influential theologian after Paul \u2014 Confessions (grace and conversion), City of God (Christian view of history), anti-Pelagian writings (grace alone). The Cappadocians (Basil, Gregory of Nyssa, Gregory of Nazianzus): defended the Trinity\u2019s full deity. Chrysostom ("golden-mouthed"): expository preaching\u2019s model. Perpetua and Felicitas (martyred 203): young mothers whose prison diary still moves readers. Polycarp (martyred ~155): "Eighty-six years I have served him, and he has done me no wrong" \u2014 then burned at the stake.\n\n## Monasticism and Mission\nAs persecution ended (Constantine, 313), some Christians feared comfort would corrupt \u2014 monasticism was born as a protest: Antony in the Egyptian desert, the Benedictine rule (ora et labora \u2014 pray and work), Celtic missionaries like Patrick evangelizing Ireland, Columba reaching Scotland. Monasteries preserved Scripture through the Dark Ages, copying manuscripts by hand. Mission advanced: Armenia (301, first Christian nation), Ethiopia, and eventually all Europe. The pattern: every generation must re-evangelize, and renewal often comes from the margins, not the centers.`,
      study: `## Learning from Church History\nStudy church history in four moves: (1) Read a solid survey (e.g., a one-volume history) covering AD 100-500 in detail. (2) Read primary sources: the Didache, Clement\u2019s letter, Ignatius\u2019 letters, Polycarp\u2019s martyrdom, Augustine\u2019s Confessions, Athanasius\u2019 On the Incarnation. (3) Visit the controversies: work through Nicaea\u2019s and Chalcedon\u2019s logic \u2014 why did each phrase matter for the gospel? (4) Draw lessons: what did faithfulness look like under pressure? Where did the church compromise (power, wealth, nominalism after Constantine)? How do we avoid both persecution-fear and comfort-corruption today? End by writing your own "rule of faithfulness": three convictions from the early church you will not surrender, whatever the cost. History doesn\u2019t just inform \u2014 it forms.`,
    },
  ),
  stubLesson(
    'path-int-10', 10, 'Christian Doctrine',
    'The core teachings of the faith \u2014 God, Christ, salvation, church, last things \u2014 organized clearly and held with conviction and humility.',
    'Sound doctrine is healthy teaching that shapes belief, worship, and life \u2014 worth knowing deeply, holding firmly, and living faithfully.',
    [
      { ref: 'Titus 2:1', text: 'But say the things which fit sound doctrine,' },
      { ref: '1 Timothy 4:16', text: 'Pay attention to yourself and to your teaching. Continue in these things, for in doing this you will save both yourself and those who hear you.' },
    ],
    `Doctrine simply means "teaching" \u2014 what the Bible teaches about any subject. Paul commands Titus to teach "the things which fit sound doctrine" (Titus 2:1) \u2014 "sound" means healthy, like sound physical health. Doctrine isn\u2019t cold academia; it\u2019s soul medicine.

The core doctrines form a coherent whole. Theology proper: one God, eternal, holy, loving \u2014 Trinity. Christology: Jesus fully God and fully man, crucified, risen, returning. Pneumatology: the Spirit regenerates, indwells, empowers. Anthropology: humans made in God\u2019s image, fallen in Adam. Soteriology: salvation by grace through faith \u2014 justification, adoption, sanctification, glorification. Ecclesiology: the church as Christ\u2019s body, gathered for worship, word, and witness. Eschatology: Christ\u2019s return, resurrection, judgment, new creation.

Why does doctrine matter? Because what you believe shapes how you live: "pay attention to yourself and to your teaching" (1 Timothy 4:16) \u2014 life and doctrine together. Bad doctrine produces bad living; sound doctrine produces godliness (Titus 1:1). And doctrine guards the gospel: Jude calls us to "contend earnestly for the faith once delivered" (Jude 1:3).

Hold doctrine with both conviction and humility: conviction about essentials (the gospel, the Trinity, Christ\u2019s deity, salvation by grace), humility about non-essentials (end-times timelines, worship styles). "In essentials unity, in non-essentials liberty, in all things charity."`,
    [
      'Which core doctrine do you understand least well? What\u2019s one step toward understanding it better?',
      'How have you seen the connection between what someone believes and how they live \u2014 in yourself or others?',
    ],
    `Pick one doctrine you\u2019re shaky on and study it for two weeks: find its key passages (a study Bible\u2019s topical index helps), write a one-page summary in your own words, and discuss it with a mature believer. Then teach it to someone else \u2014 perhaps a newer Christian. Doctrine learned is doctrine to be shared.`,
    `Lord, thank you for healthy doctrine \u2014 truth that gives life. Root me in the essentials: your triune being, Christ\u2019s person and work, salvation by grace, your church, and Christ\u2019s return. Make my doctrine sound and my life matching \u2014 pay attention to both. Give me conviction without arrogance and humility without compromise. In Jesus\u2019 name, amen.`,
    {
      expanded: `## The Doctrinal System\nSee how doctrines interlock: God\u2019s holiness (theology proper) explains sin\u2019s seriousness (anthropology/hamartiology), which explains why only a divine-human Savior suffices (Christology), which explains salvation by grace alone (soteriology), which creates a new people (ecclesiology) empowered by the Spirit (pneumatology) heading for glory (eschatology). Pull one thread and the whole fabric moves \u2014 which is why heresies about Christ inevitably corrupt salvation, and why sound doctrine is an integrated immune system, not a parts bin.\n\n## Essentials and Non-Essentials\nEssentials (worth dividing over): the Trinity, Christ\u2019s full deity and humanity, his bodily resurrection, salvation by grace through faith, Scripture\u2019s authority. Important but not church-dividing: baptism\u2019s mode and subjects, church government, millennial views, spiritual gifts\u2019 continuance. Adiaphora (matters of indifference): worship styles, Bible translations, meeting times. Wisdom knows which category a dispute belongs to \u2014 and treats people accordingly: conviction for essentials, charity for the rest.`,
      deep: `## Doctrine and Worship\nAll true theology ends in doxology. Paul\u2019s densest doctrine (Romans 1-11) erupts into worship: "Oh the depth of the riches both of the wisdom and the knowledge of God!" (Romans 11:33). Ephesians 1\u2019s election and redemption overflow into praise: "to the praise of the glory of his grace" (1:6). If your doctrine doesn\u2019t move you to worship, you haven\u2019t yet understood it \u2014 you\u2019ve only memorized it. Test every study session: did this make me love God more? The Pharisees had precise doctrine and cold hearts; the goal is precise doctrine with burning hearts \u2014 like the Emmaus disciples: "Didn\u2019t our hearts burn within us?" (Luke 24:32).\n\n## Guarding the Deposit\nPaul charges Timothy: "Guard the good deposit which was entrusted to you" (2 Timothy 1:14). Every generation must re-learn, re-articulate, and re-defend the faith. Creeds and confessions (Apostles\u2019, Nicene, Chalcedonian, and later confessions) are the church\u2019s guardrails \u2014 not above Scripture but summarizing it. Learn your church\u2019s confession; it\u2019s a map drawn by those who walked the terrain before you. And contend gently: "the Lord\u2019s servant must not quarrel, but be gentle toward all" (2 Timothy 2:24) \u2014 truth defended with arrogance dishonors the truth.`,
      study: `## Building Your Theological Framework\nConstruct a personal systematic theology over a year: one doctrine per month \u2014 Scripture, God, Christ, Spirit, humanity/sin, salvation, church, last things \u2014 plus electives (angels, providence, prayer). For each: (1) Collect key passages (use a topical Bible or systematic theology\u2019s Scripture index). (2) Write a 500-word summary in your own words. (3) Note common errors to avoid. (4) Write one paragraph on practical implications \u2014 how this doctrine changes prayer, worship, or obedience. (5) Discuss with a mentor or group. Use a trusted systematic theology as a guide (Grudem, Berkhof, or Calvin\u2019s Institutes for the ambitious). By year\u2019s end you\u2019ll have a personal reference work \u2014 and, more importantly, a well-furnished mind for a lifetime of worship and witness.`,
    },
  ),
];

/* ------------------------------------------------------------------ */
/* ADVANCED PATH — 3 full lessons, 7 stubs                            */
/* ------------------------------------------------------------------ */

const ADVANCED_FULL: LayeredLesson[] = [
  {
    id: 'path-adv-1',
    pathId: 'advanced',
    order: 1,
    title: 'Hermeneutics',
    summary:
      'The principles of biblical interpretation: authorial intent, historical-grammatical method, genre, the analogy of faith, and Christ-centered reading.',
    layers: {
      core: {
        minutes: 5,
        concept:
          'Hermeneutics is the disciplined art of discovering the biblical author\u2019s intended meaning \u2014 in context, by genre, with Scripture interpreting Scripture.',
        scripture: [
          {
            ref: '2 Timothy 2:15',
            text: 'Give diligence to present yourself approved by God, a workman who doesn\u2019t need to be ashamed, properly handling the Word of Truth.',
          },
        ],
        teaching: `Hermeneutics is the science and art of interpretation \u2014 the principles by which we move from ancient text to true meaning to present obedience. Paul\u2019s charge to Timothy sets the standard: a workman who "properly handles the Word of Truth" (2 Timothy 2:15) \u2014 literally, one who "cuts straight." Crooked handling produces crooked doctrine and crooked lives.

The controlling principle: seek the author\u2019s intended meaning. A text cannot mean today what it never meant to its original audience. This is the historical-grammatical method \u2014 historical (what did these words mean in their ancient setting?) and grammatical (how do the sentences actually function?). Meaning is discovered, not created; exegesis (drawing out) not eisegesis (reading in).

Three tools do most of the work. Context: every verse lives in a paragraph, book, and canon \u2014 context determines meaning. Genre: poetry, narrative, law, prophecy, parable, epistle, and apocalyptic each have reading rules; genre confusion is the mother of misinterpretation. The analogy of faith: Scripture interprets Scripture \u2014 the clear passages govern the unclear, and no doctrine rests on a single verse.

Finally, read christologically: Jesus claimed all Scripture testifies of him (John 5:39; Luke 24:27). And read dependently: "the natural man doesn\u2019t receive the things of God\u2019s Spirit" (1 Corinthians 2:14) \u2014 pray for illumination as you labor in interpretation. Diligence and dependence are partners.`,
        reflection: [
          'Where have you seen eisegesis (reading one\u2019s own ideas into the text) \u2014 in others\u2019 teaching or your own reading? What was the cost?',
          'How would your Bible study change if you treated "context, genre, and the analogy of faith" as non-negotiable steps rather than optional extras?',
        ],
        application: `Take one debated verse you\u2019ve heard used in conflicting ways and run the hermeneutical method: (1) Read the full chapter for context. (2) Identify the genre and its reading rules. (3) Find how Scripture elsewhere treats the same theme (cross-references). (4) State the author\u2019s intended meaning in one sentence. (5) Ask how it testifies to Christ. Write up your findings in a page \u2014 you\u2019ve just done hermeneutics.`,
        prayer: `Lord, giver of your word and your Spirit \u2014 make me a workman who cuts straight. Deliver me from twisting Scripture to serve my preferences; teach me to discover your intended meaning in context, by genre, with Scripture as its own interpreter. Open my mind as you opened the disciples\u2019, and let right interpretation lead to right worship and obedience. In Jesus\u2019 name, amen.`,
      },
      expanded: {
        minutes: 15,
        concept:
          'Sound hermeneutics honors authorial intent through the historical-grammatical method, respects genre, applies the analogy of faith, and reads all Scripture in light of Christ.',
        scripture: [
          {
            ref: 'Nehemiah 8:8',
            text: 'They read in the book, in the law of God, distinctly; and they gave the sense, so that they understood the reading.',
          },
          {
            ref: '2 Peter 1:20',
            text: 'knowing this first, that no prophecy of Scripture is of private interpretation.',
          },
        ],
        teaching: `## Authorial Intent: The Anchor
Meaning resides in the author\u2019s intention \u2014 what the human author, carried by the Spirit, meant his original readers to understand. This anchors interpretation against two modern errors: reader-response (the text means whatever it means "to me") and unchecked allegorizing (finding hidden codes). Peter\u2019s guardrail: "no prophecy of Scripture is of private interpretation" (2 Peter 1:20) \u2014 Scripture\u2019s meaning is public, intended, and discoverable, not privately invented. Our task is humble recovery, not creative production.

## The Historical-Grammatical Method
Historical: bridge the cultural gap. What did "holy kiss," "yoke," or "Gehenna" mean to first readers? Study Bibles, Bible dictionaries, and commentaries supply background \u2014 customs, geography, politics, religious parties. Grammatical: follow the syntax. In Greek and Hebrew, word order, verb tenses, and connecting words carry the argument \u2014 "therefore" in Romans 12:1 points back to eleven chapters of gospel. Even in English, tracing the author\u2019s flow (outlining paragraphs) reveals meaning that verse-plucking misses. The method is not academic pretension; it is love \u2014 taking the author seriously enough to hear him on his terms.

## Genre: Reading Rules
Each genre brings expectations. Narrative (much of the Old Testament, Acts): theological history \u2014 God\u2019s acts interpreted; descriptive is not always prescriptive. Law: covenant stipulations revealing holiness and need. Poetry/Wisdom: parallelism, imagery, general principles (not guarantees). Prophecy: forthtelling with foretelling; near and far horizons. Parables: typically one main point \u2014 don\u2019t allegorize details. Epistles: occasional letters \u2014 reconstruct the situation, then extract the principle. Apocalyptic: symbolic visions of cosmic conflict \u2014 interpret images by their Old Testament roots. Gospels: theological biography \u2014 arranged to reveal Christ, not to satisfy modern chronology. Master these, and most misreadings evaporate.

## The Analogy of Faith and the Rule of Love
The analogy of faith (analogia fidei): Scripture\u2019s clear teaching governs its obscure passages; the whole canon interprets the parts. Build no doctrine on an unclear verse alone. Related: the rule of faith \u2014 the church\u2019s historic summary of Scripture\u2019s plain teaching (creeds) \u2014 guards against novel readings; if your interpretation is new in 2,000 years, suspect it. And Augustine\u2019s rule of love: any interpretation that contradicts the love of God and neighbor misunderstands the text \u2014 Scripture\u2019s own purpose is love (1 Timothy 1:5). These are guardrails, not straitjackets: they keep the workman cutting straight.`,
        keyTerms: [
          { term: 'Hermeneutics', definition: 'The principles of biblical interpretation \u2014 the science and art of moving from text to meaning to application.' },
          { term: 'Authorial intent', definition: 'The meaning the biblical author intended his original audience to understand \u2014 interpretation\u2019s anchor.' },
          { term: 'Historical-grammatical method', definition: 'Interpreting by the author\u2019s intent using historical background and grammatical analysis.' },
          { term: 'Analogy of faith', definition: 'Scripture interprets Scripture: clear passages govern unclear ones; the whole interprets the parts.' },
        ],
        reflection: [
          'Why is "no prophecy of Scripture is of private interpretation" (2 Peter 1:20) both a guardrail against error and a comfort for the ordinary reader?',
          'Which genre do you most often misread by applying the wrong reading rules? What would correct reading look like?',
          'How does the "rule of faith" (historic Christian teaching) help you evaluate a novel interpretation you encounter online or in a book?',
        ],
        application: `Build a hermeneutics worksheet you\u2019ll reuse: Text & translation \u2192 Context (paragraph/book/canon) \u2192 Genre & its rules \u2192 Historical background \u2192 Grammatical flow (outline) \u2192 Cross-references (analogy of faith) \u2192 Author\u2019s intent (one sentence) \u2192 Christ connection \u2192 Timeless principle \u2192 Specific application. Run Philippians 2:5-11 through it this week. The worksheet disciplines haste \u2014 and haste is interpretation\u2019s greatest enemy.`,
        prayer: `Father, thank you for speaking with intention \u2014 meaning I can discover, not invent. Train me in the workman\u2019s craft: honoring what your authors meant, reading each genre by its rules, letting clear Scripture govern the unclear, and seeing Christ throughout. Keep me from private interpretations and novel errors; anchor me in the faith once delivered. And make my study end where Nehemiah\u2019s did \u2014 in understanding that leads to worship. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-adv-1-exp-q1',
            type: 'mc',
            prompt: 'The anchor of sound interpretation is...',
            choices: ['What the text means to me', 'The author\u2019s intended meaning for the original audience', 'The most novel reading', 'Whatever the majority believes'],
            answer: 'The author\u2019s intended meaning for the original audience',
            explanation: 'Meaning is discovered (exegesis), not created \u2014 anchored in authorial intent.',
            tags: ['hermeneutics'],
          },
          {
            id: 'path-adv-1-exp-q2',
            type: 'mc',
            prompt: 'The "analogy of faith" means...',
            choices: ['Faith replaces study', 'Scripture interprets Scripture \u2014 clear passages govern unclear ones', 'All interpretations are equally valid', 'Only the New Testament matters'],
            answer: 'Scripture interprets Scripture \u2014 clear passages govern unclear ones',
            explanation: 'The whole canon interprets the parts; no doctrine rests on an obscure verse alone.',
            tags: ['hermeneutics'],
          },
          {
            id: 'path-adv-1-exp-q3',
            type: 'tf',
            prompt: 'Parables should generally be read for their one main point rather than allegorizing every detail.',
            answer: 'True',
            explanation: 'Genre rules: parables are pointed stories \u2014 detail-allegorizing imports meanings the author never intended.',
            tags: ['hermeneutics'],
          },
        ],
      },
      deep: {
        minutes: 30,
        concept:
          'Advanced hermeneutical issues: the New Testament\u2019s use of the Old, typology, sensus plenior, the role of tradition, and moving faithfully from meaning to application.',
        scripture: [
          {
            ref: 'Matthew 22:29',
            text: 'But Jesus answered them, "You are mistaken, not knowing the Scriptures, nor the power of God."',
          },
          {
            ref: '1 Corinthians 2:13',
            text: 'Which things also we speak, not in words which man\u2019s wisdom teaches, but which the Holy Spirit teaches, comparing spiritual things with spiritual things.',
          },
          {
            ref: 'Galatians 4:24',
            text: 'These things contain an allegory, for these are two covenants. One is from Mount Sinai, bearing children to bondage, which is Hagar.',
          },
        ],
        teaching: `## How the Apostles Read the Old Testament
The New Testament\u2019s use of the Old is hermeneutics\u2019 most instructive \u2014 and most debated \u2014 classroom. The apostles quote directly (Matthew 1:23 \u2190 Isaiah 7:14), apply typologically (1 Corinthians 5:7 \u2014 Christ our Passover), and sometimes in ways that surprise modern readers (Matthew 2:15 citing Hosea 11:1, originally about Israel\u2019s exodus, of Jesus\u2019 return from Egypt). What authorizes this? Their conviction that all Scripture testifies of Christ (John 5:39) and that the Old Testament\u2019s patterns \u2014 exodus, exile, Davidic king, suffering servant \u2014 find their telos (goal) in him. This is not license for us to allegorize freely; it is apostolic, Spirit-inspired reading showing us the Bible\u2019s christological grain. We follow their trajectory \u2014 reading with the same Christ-centered lens \u2014 without claiming their inspiration.

## Typology and Sensus Plenior
Typology: God-designed correspondences between Old Testament persons/events/institutions and their New Testament fulfillments \u2014 Adam/Christ (Romans 5:14), Passover/Christ (1 Corinthians 5:7), the bronze serpent/the cross (John 3:14). Types are prospective (the Old Testament pattern genuinely points forward) and divinely intended \u2014 distinguishing them from mere illustration. Sensus plenior ("fuller sense"): the idea that the divine Author intended more than the human author consciously grasped \u2014 e.g., Isaiah\u2019s servant songs carrying messianic depths Isaiah may not have fully seen (1 Peter 1:10-12). Handle with care: the "fuller sense" never contradicts the human author\u2019s meaning; it extends it along the canon\u2019s trajectory toward Christ. Both concepts honor dual authorship \u2014 divine and human \u2014 without dissolving the text\u2019s historical meaning.

## Tradition, Community, and the Spirit
Interpretation is never done alone \u2014 nor should it be. The Ethiopian eunuch needed Philip (Acts 8:31); Apollos needed Priscilla and Aquila\u2019s fuller explanation (Acts 18:26). The church\u2019s historic interpretation (creeds, confessions, commentaries) is a guardrail: novel readings that contradict 2,000 years of consensus bear a heavy burden of proof. Yet tradition is a servant, not a master \u2014 the Reformers\u2019 ad fontes ("back to the sources") recovered Scripture over tradition when the two conflicted. And the Spirit\u2019s illumination remains essential: technique without dependence produces scholars without worship; dependence without technique produces enthusiasm without accuracy. "Comparing spiritual things with spiritual things" (1 Corinthians 2:13) \u2014 the Spirit teaches through the word, diligently studied.

## From Meaning to Application: The Hard Bridge
Application is where hermeneutics meets holiness \u2014 and where most errors occur. The path: original meaning \u2192 timeless principle \u2192 present contextualization. Distinguish principle from form: "greet with a holy kiss" (Romans 16:16) \u2014 principle: warm Christian affection; form: culturally expressed. Distinguish descriptive from prescriptive: narratives show what happened (and what God did about it); commands show what to do. Watch for the "then/now" gap: some texts apply directly (moral commands), some through Christ (ceremonial law fulfilled), some as wisdom (proverbs as principles). And apply to the heart first: behavior modification without affection transformation is Pharisaism. The goal is not just right doing but renewed loving \u2014 "the goal of this command is love" (1 Timothy 1:5).

## Errors to Avoid
Catalog the classic fallacies. Proof-texting: wielding verses as weapons divorced from context. Word-study fallacies: building doctrine on a word\u2019s etymology rather than its usage ("ekkl\u0113sia means \u2018called out\u2019 therefore the church must separate from culture" \u2014 no; usage determines meaning). Mirror-reading: reconstructing a whole false-teaching edifice from Paul\u2019s rebuttals. Over-allegorizing: finding Christ under every rock (the good Samaritan\u2019s innkeeper is not the church and the two coins are not the sacraments). Chronological snobbery: assuming ancient readers were naive. And the subtlest: studying to win arguments rather than to know God \u2014 Jesus\u2019 rebuke stands: "You search the Scriptures... but you are unwilling to come to me" (John 5:39-40). Handle the word to meet the Word.`,
        keyTerms: [
          { term: 'Typology', definition: 'God-intended Old Testament patterns (persons, events, institutions) fulfilled in Christ.' },
          { term: 'Sensus plenior', definition: '"Fuller sense": the divine Author\u2019s deeper meaning, extending \u2014 never contradicting \u2014 the human author\u2019s.' },
          { term: 'Ad fontes', definition: '"Back to the sources": the Reformation principle of Scripture over tradition when they conflict.' },
          { term: 'Proof-texting', definition: 'Citing verses divorced from context to support a predetermined position.' },
        ],
        crossRefs: ['Deuteronomy 29:29', 'Psalm 119:18', 'Isaiah 55:8-9', 'Luke 24:27', 'John 5:39-40', 'Acts 8:30-35', '2 Timothy 2:7'],
        reflection: [
          'How does the apostles\u2019 Christ-centered reading of the Old Testament authorize \u2014 and limit \u2014 our own typological reading?',
          'Where have you seen the "word-study fallacy" (etymology over usage) or over-allegorizing in teaching you\u2019ve heard? What was the effect?',
          'What role does church tradition play in your interpretation \u2014 servant, master, or ignored? What would a healthier balance look like?',
          'Jesus warned against searching Scripture without coming to him (John 5:39-40). How do you keep study aimed at knowing Christ rather than winning arguments?',
        ],
        application: `Choose a typological study: trace "the lamb" from Passover (Exodus 12) through Isaiah 53 to John 1:29 to Revelation 5 \u2014 noting at each stage what\u2019s revealed and what\u2019s still shadowed. Write a two-page study showing the type-antitype correspondence and what it teaches about Christ. Then check your work against a trusted commentary: did you stay within the apostles\u2019 trajectory or drift into free allegory? This exercise trains the most delicate hermeneutical skill \u2014 seeing Christ in the Old Testament without inventing him there.`,
        prayer: `Lord, you are the divine Author behind the human authors \u2014 give me reverence for both. Teach me to read as your apostles read: Christ-centered, canon-wide, careful with context and genre. Guard me from proof-texting, allegorizing fancy, and argument-driven study. Let tradition serve and your Spirit illuminate. And whatever I learn, bring me to Jesus \u2014 for he is the Word the words are about. In his name, amen.`,
        quiz: [
          {
            id: 'path-adv-1-deep-q1',
            type: 'mc',
            prompt: 'Typology differs from free allegorizing in that types are...',
            choices: ['Whatever the reader imagines', 'God-designed Old Testament patterns genuinely pointing forward to Christ', 'Secret codes for insiders', 'Contradictions of the plain meaning'],
            answer: 'God-designed Old Testament patterns genuinely pointing forward to Christ',
            explanation: 'Typology is prospective and divinely intended (Adam/Christ, Passover/Christ) \u2014 not creative invention.',
            tags: ['hermeneutics'],
          },
          {
            id: 'path-adv-1-deep-q2',
            type: 'mc',
            prompt: '"Sensus plenior" refers to...',
            choices: ['The plain meaning only', 'The divine Author\u2019s fuller meaning, extending but never contradicting the human author\u2019s', 'Reading without the Spirit', 'Ignoring context'],
            answer: 'The divine Author\u2019s fuller meaning, extending but never contradicting the human author\u2019s',
            explanation: 'Dual authorship means divine depths beyond \u2014 but never against \u2014 the human author\u2019s intent.',
            tags: ['hermeneutics'],
          },
          {
            id: 'path-adv-1-deep-q3',
            type: 'tf',
            prompt: 'The Reformers\u2019 "ad fontes" principle means Scripture outranks tradition when the two conflict.',
            answer: 'True',
            explanation: 'Tradition serves as a guardrail; Scripture alone is the supreme authority.',
            tags: ['hermeneutics'],
          },
          {
            id: 'path-adv-1-deep-q4',
            type: 'mc',
            prompt: 'In moving from meaning to application, the correct sequence is...',
            choices: ['Skip to application directly', 'Original meaning \u2192 timeless principle \u2192 present contextualization', 'Find the most emotional application', 'Apply the cultural form literally'],
            answer: 'Original meaning \u2192 timeless principle \u2192 present contextualization',
            explanation: 'Distinguish principle from form, descriptive from prescriptive \u2014 then apply to heart and hands.',
            tags: ['hermeneutics'],
          },
        ],
      },
      study: {
        minutes: 60,
        concept:
          'A full hermeneutics course: philosophy of interpretation, the history of exegesis, advanced method, preaching/teaching application, and the spiritual formation of the interpreter.',
        scripture: [
          {
            ref: 'Psalm 119:130',
            text: 'The entrance of your words gives light. It gives understanding to the simple.',
          },
          {
            ref: '2 Timothy 3:16-17',
            text: 'Every Scripture is God-breathed and profitable for teaching, for reproof, for correction, and for instruction in righteousness, that each person who belongs to God may be complete, thoroughly equipped for every good work.',
          },
          {
            ref: 'Hebrews 5:14',
            text: 'But solid food is for those who are full grown, who by reason of use have their senses exercised to discern good and evil.',
          },
          {
            ref: 'James 3:1',
            text: 'Let not many of you be teachers, my brothers, knowing that we will receive heavier judgment.',
          },
        ],
        teaching: `## 1. Philosophy of Interpretation: Why Meaning Is Real
Modern hermeneutics swims against strong currents: postmodern reader-response theory ("meaning is what readers make"), deconstruction ("texts undermine themselves"), and expressive individualism ("my truth"). The Christian response is theological: because God is the ultimate Author who speaks to be understood, meaning is real, stable, and communicable. Language is a divine gift (Genesis 1 \u2014 God speaks creation into being; Genesis 2 \u2014 humans speak back), not a prison. The incarnation itself is God\u2019s hermeneutical act: the Word became flesh to be understood (John 1:14). We reject both naive objectivism (pretending we read without presuppositions \u2014 we all bring them; the answer is examining them by Scripture, not denying them) and cynical relativism. The Spirit-illumined, community-situated, method-disciplined reader can truly \u2014 though never exhaustively \u2014 understand God\u2019s word.

## 2. History of Exegesis: Learning from the Cloud
Survey the tradition: the apostolic fathers (typological, christological); Alexandria (Origen\u2019s allegory \u2014 brilliant but undisciplined) vs. Antioch (Theodore, Chrysostom \u2014 historical-literal, the forerunner of grammatical-historical method); Augustine\u2019s synthesis (literal sense primary; charity as the rule); medieval quadriga (literal, allegorical, moral, anagogical \u2014 rich but often fanciful); the Reformers\u2019 recovery (Luther\u2019s "Scripture interprets itself," Calvin\u2019s commentaries modeling the method); Enlightenment criticism (historical-critical method\u2019s gains in background knowledge, losses in theological reading); and the modern evangelical synthesis (historical-grammatical method plus biblical theology plus canonical reading). Each era offers gifts and warnings. The lesson: we stand on shoulders \u2014 read the old commentators (Calvin, Matthew Henry) alongside the new.

## 3. Advanced Method: Putting It All Together
A mature exegetical workflow: (1) Text: establish the wording (compare translations; note significant variants). (2) Context: literary (paragraph\u2019s role in the book\u2019s argument), historical (occasion, background), canonical (place in redemptive history). (3) Genre analysis with its specific rules. (4) Lexical-grammatical study: key words\u2019 usage across Scripture (not just etymology), syntax, discourse flow. (5) Biblical-theological tracing: how this theme develops canon-wide toward Christ. (6) Theological synthesis: what this teaches about God, Christ, humanity, salvation \u2014 checked against the analogy of faith. (7) Application: timeless principle, contemporary contextualization, specific obedience. (8) Communication: if teaching, structure around the text\u2019s own shape (expository preaching) \u2014 "they gave the sense, so that they understood" (Nehemiah 8:8). Practice this on whole books, not just verses: "solid food is for those who... have their senses exercised" (Hebrews 5:14) \u2014 exercise builds the skill.

## 4. Preaching and Teaching: Stewardship with Judgment
"Let not many of you be teachers... knowing that we will receive heavier judgment" (James 3:1). Teaching is hermeneutics made public \u2014 and therefore doubly accountable. Expository preaching (working sequentially through books, letting the text set the agenda) best honors authorial intent; topical preaching has its place but risks proof-texting. Every sermon should answer: what did this mean then (exegesis), what is the timeless truth (theology), and what must we do now (application) \u2014 with Christ at the center of each. Avoid the twin ditches: moralism (the text as self-help) and abstraction (doctrine without duty). And remember Ezra\u2019s pattern: "he had set his heart to study the law of Yahweh, and to do it, and to teach" (Ezra 7:10) \u2014 study, obedience, then teaching, in that order.

## 5. Disputed Texts Workshop
Apply the method to famously difficult passages. 1 Timothy 2:12 (women teaching): examine context (Ephesian false teaching), genre (pastoral instruction), key words (authentein\u2019s usage), canonical parallels (Priscilla teaching Apollos, Acts 18:26; Phoebe, Romans 16:1) \u2014 then hold your conclusion with appropriate confidence. Hebrews 6:4-6 (falling away): context (warning passages\u2019 pastoral function), analogy of faith (John 10:28; Romans 8:30), genre (sermonic warning) \u2014 warnings as God\u2019s means of perseverance. Romans 9 (election): canonical context (chapters 9-11 on Israel), Old Testament roots (Exodus 33:19; Malachi 1:2-3), the doxological outcome (11:33-36). Baptism texts, gift texts, millennial texts \u2014 the method doesn\u2019t eliminate disagreement, but it elevates it: from proof-text ping-pong to careful, charitable, text-driven reasoning.

## 6. The Interpreter\u2019s Formation
Finally, hermeneutics forms the handler. The best interpreters are marked by: humility (the text masters me), patience (hard texts wait for study), honesty (following evidence where it leads, even against preference), courage (teaching unpopular truths), and love (the goal is edification, 1 Corinthians 14:12). Beware the occupational hazards: pride in knowledge (1 Corinthians 8:1), using study to avoid obedience (the longest delay tactic in the Christian life), and cynicism from critical overload. The end of hermeneutics is doxology and discipleship: "the entrance of your words gives light" (Psalm 119:130) \u2014 light to walk by, not just to admire. Cut straight, workman \u2014 and let the word cut you, too.`,
        keyTerms: [
          { term: 'Reader-response theory', definition: 'The view that meaning is created by readers \u2014 rejected by authorial-intent hermeneutics.' },
          { term: 'Quadriga', definition: 'The medieval fourfold sense: literal, allegorical, moral, anagogical.' },
          { term: 'Expository preaching', definition: 'Preaching that works through biblical books sequentially, letting the text set the agenda.' },
          { term: 'Analogia fidei', definition: 'Latin for "analogy of faith": Scripture interpreting Scripture.' },
          { term: 'Illumination', definition: 'The Spirit\u2019s work enabling understanding \u2014 necessary alongside method.' },
        ],
        crossRefs: ['Ezra 7:10', 'Psalm 119:18', 'Psalm 119:130', 'Luke 24:45', 'John 5:39-40', '1 Corinthians 2:12-14', '2 Timothy 2:7'],
        reflection: [
          'How do your own presuppositions (cultural, denominational, personal) shape your reading? Name one and test it against Scripture.',
          'Which era of exegesis\u2019s gifts do you most need \u2014 Antioch\u2019s literal care, Augustine\u2019s charity-rule, the Reformers\u2019 Scripture-principle? Why?',
          'Work through one disputed text using the full workflow. Where did the method clarify \u2014 and where did mystery remain? How do you hold both?',
          'Ezra\u2019s order was study \u2192 do \u2192 teach (Ezra 7:10). Where are you tempted to reverse it \u2014 teaching what you haven\u2019t obeyed?',
          'What are your occupational hazards as a Bible student \u2014 pride, delay-by-study, cynicism? What\u2019s the antidote for each?',
          'How will you know your hermeneutics is working \u2014 what fruit should right interpretation bear in your life and teaching?',
        ],
        application: `Undertake a six-week exegesis project on a short book (Jonah, Habakkuk, or Philippians): Week 1 \u2014 read 10x, outline, research background. Week 2 \u2014 paragraph-by-paragraph observation and genre analysis. Week 3 \u2014 word studies and cross-references on key terms. Week 4 \u2014 biblical-theological tracing and doctrinal synthesis. Week 5 \u2014 application: principles and specific obediences. Week 6 \u2014 teach it: prepare and deliver a 30-minute lesson to a friend or group, structured on the text\u2019s shape. Ask for feedback on faithfulness to the text. This is seminary-level work \u2014 and it\u2019s within your reach. "By reason of use," senses are exercised (Hebrews 5:14).`,
        prayer: `O God of truth \u2014 who speaks to be understood, who gave your Word and your Spirit \u2014 I want to handle your truth rightly. Forgive my hasty readings, my proof-texting, my preference-driven interpretations. Train me as a workman: philosophical clarity about meaning, historical awareness, grammatical care, genre wisdom, canonical breadth, and Christ at the center of it all. Make me humble before hard texts, honest with evidence, courageous with unpopular truths, and loving in all teaching. Let me study to obey, obey to teach, and teach to edify \u2014 until your word\u2019s entrance gives light that becomes worship and obedience. Keep me from ever searching the Scriptures yet refusing to come to Christ. In his name, amen.`,
        quiz: [
          {
            id: 'path-adv-1-study-q1',
            type: 'mc',
            prompt: 'The Antiochene school (Theodore, Chrysostom) is significant as the forerunner of...',
            choices: ['Allegorical excess', 'The historical-grammatical method\u2019s emphasis on the literal/historical sense', 'Reader-response theory', 'Deconstruction'],
            answer: 'The historical-grammatical method\u2019s emphasis on the literal/historical sense',
            explanation: 'Antioch\u2019s historical-literal care stands behind the modern grammatical-historical method.',
            tags: ['hermeneutics'],
          },
          {
            id: 'path-adv-1-study-q2',
            type: 'mc',
            prompt: 'Ezra 7:10 models the interpreter\u2019s order as...',
            choices: ['Teach, then study, then obey', 'Study the law, do it, then teach it', 'Obey without studying', 'Teach without studying'],
            answer: 'Study the law, do it, then teach it',
            explanation: '"He had set his heart to study... and to do it, and to teach" \u2014 study, obedience, then teaching.',
            tags: ['hermeneutics'],
          },
          {
            id: 'path-adv-1-study-q3',
            type: 'tf',
            prompt: 'Acknowledging our presuppositions means abandoning objectivity; the answer is to examine them by Scripture, not deny them.',
            answer: 'True',
            explanation: 'Naive objectivism pretends presupposition-less reading; faithful reading tests presuppositions against the text.',
            tags: ['hermeneutics'],
          },
          {
            id: 'path-adv-1-study-q4',
            type: 'mc',
            prompt: 'The ultimate goal of hermeneutics, per this lesson, is...',
            choices: ['Winning debates', 'Doxology and discipleship \u2014 light that becomes worship and obedience', 'Publishing papers', 'Mastering trivia'],
            answer: 'Doxology and discipleship \u2014 light that becomes worship and obedience',
            explanation: '"The entrance of your words gives light" (Psalm 119:130) \u2014 light to walk by, ending in worship.',
            tags: ['hermeneutics'],
          },
        ],
      },
    },
  },
  {
    id: 'path-adv-2',
    pathId: 'advanced',
    order: 2,
    title: 'Apologetics',
    summary:
      'Defending the faith with gentleness and respect: arguments for God\u2019s existence, Christ\u2019s resurrection, Scripture\u2019s reliability, and answering objections.',
    layers: {
      core: {
        minutes: 5,
        concept:
          'Apologetics is giving a reasoned defense of Christian hope \u2014 with gentleness and respect \u2014 because the faith is true and worth defending.',
        scripture: [
          {
            ref: '1 Peter 3:15',
            text: 'But sanctify the Lord God in your hearts. Always be ready to give an answer to everyone who asks you a reason concerning the hope that is in you, with humility and fear,',
          },
        ],
        teaching: `Apologetics comes from the Greek apologia \u2014 a legal defense, the speech you\u2019d give in court. Peter commands every believer: "Always be ready to give an answer to everyone who asks you a reason concerning the hope that is in you" (1 Peter 3:15). Notice: this isn\u2019t for scholars only \u2014 it\u2019s for everyone. And notice the manner: "with humility and fear" (gentleness and respect). We defend truth the way Christ embodied it: full of grace and truth (John 1:14).

Why bother? Because people have real questions \u2014 about suffering, science, other religions, the Bible\u2019s reliability \u2014 and because Christianity is true. We don\u2019t argue people into the kingdom (the Spirit converts), but we remove obstacles and give reasons: "we are destroying speculations and every lofty thing raised up against the knowledge of God" (2 Corinthians 10:5).

Three starting arguments every Christian should know. The resurrection: Jesus\u2019 bodily resurrection is the best-attested miracle in history \u2014 empty tomb, eyewitnesses (1 Corinthians 15:6), transformed disciples, and the church\u2019s explosive birth. If Christ is risen, Christianity is true (1 Corinthians 15:17). Changed lives: millions \u2014 including you \u2014 transformed by Christ is evidence no lab can dismiss. And fulfilled prophecy: specific predictions (Isaiah 53, Micah 5:2, Psalm 22) fulfilled centuries later in one man.

Apologetics serves evangelism: it clears the brush so the gospel seed can land. Learn the reasons \u2014 then speak them gently.`,
        reflection: [
          'What question about Christianity do you find hardest to answer \u2014 from others or in your own heart? What would it take to become "ready"?',
          'How do you balance "giving an answer" with "gentleness and respect"? Where do you lean too far toward combat or toward silence?',
        ],
        application: `Learn one argument well this week \u2014 the resurrection\u2019s minimal facts (death by crucifixion, appearances, empty tomb, disciples\u2019 transformation) \u2014 and practice explaining it in three minutes to a friend. Then ask a non-Christian friend what their biggest objection to Christianity is, and listen without arguing. Understanding the real question is half the answer \u2014 and listening with respect opens hearts that debating never will.`,
        prayer: `Lord, sanctify my heart \u2014 make Christ Lord there first. Make me ready with reasons for the hope in me, and make me gentle in giving them. Remove obstacles from seekers\u2019 paths through me; let me destroy speculations raised against knowing you. Give me love for skeptics, courage for hard questions, and humility always. In Jesus\u2019 name, amen.`,
      },
      expanded: {
        minutes: 15,
        concept:
          'The classical arguments for God, the historical case for the resurrection, and answering the problem of evil \u2014 the core toolkit for defending the faith.',
        scripture: [
          {
            ref: 'Psalm 19:1',
            text: 'The heavens declare the glory of God. The expanse shows his handiwork.',
          },
          {
            ref: 'Romans 1:20',
            text: 'For the invisible things of him since the creation of the world are clearly seen, being perceived through the things that are made, even his everlasting power and divinity, that they may be without excuse.',
          },
        ],
        teaching: `## Arguments for God\u2019s Existence
The cosmological argument: everything that begins to exist has a cause; the universe began (Big Bang cosmology agrees); therefore the universe has a cause \u2014 timeless, spaceless, immaterial, powerful, personal. The teleological (design) argument: the universe\u2019s fine-tuning \u2014 the precise calibration of physical constants for life \u2014 and biology\u2019s information-rich systems point to a Designer. "The heavens declare the glory of God" (Psalm 19:1) \u2014 and Romans 1:20 says creation renders unbelief "without excuse." The moral argument: objective moral duties (torturing children is really wrong, not just distasteful) require a moral Lawgiver; atheism can describe morality\u2019s evolution but not its authority. None of these alone proves the Christian God \u2014 but together they show theism is far more reasonable than atheism, clearing the ground for Christ.

## The Resurrection: History\u2019s Hinge
Paul stakes everything on it: "If Christ has not been raised, your faith is vain" (1 Corinthians 15:17). The minimal-facts case uses data even skeptical scholars grant: Jesus died by crucifixion; his disciples believed they saw him risen; Paul, the persecutor, was converted; James the skeptic became a leader; the tomb was empty (the Jerusalem factor \u2014 Christianity exploded in the very city where the body could have been produced). Alternative theories \u2014 swoon, hallucination, stolen body, legend \u2014 each collapse under the evidence: hallucinations don\u2019t convert persecutors or produce empty tombs; legends don\u2019t develop in weeks among eyewitnesses. The resurrection is the best explanation \u2014 and if God raised Jesus, Jesus\u2019 claims (including his deity) are vindicated.

## The Problem of Evil
"How can a good, all-powerful God allow suffering?" \u2014 the hardest question, and often more emotional than intellectual. The logical version fails: God\u2019s existence and evil\u2019s existence are not contradictory \u2014 God may have good reasons for permitting evil (soul-making, free will, greater goods). Christianity uniquely answers existentially: God didn\u2019t stay distant from suffering \u2014 he entered it. The cross is God\u2019s answer to evil: he bore it himself. And the resurrection promises its end: "He will wipe away every tear... Death will be no more" (Revelation 21:4). We don\u2019t have all the answers \u2014 but we have a suffering Savior, a purposeful God, and a guaranteed future. Often the best apologetic here is presence: weep with those who weep (Romans 12:15) before offering reasons.

## Scripture\u2019s Reliability
The New Testament\u2019s textual foundation is unmatched: ~5,800 Greek manuscripts, the earliest within decades of writing \u2014 compare Homer\u2019s Iliad (fewer than 2,000 manuscripts, earliest centuries later). The Gospels were written within living memory of eyewitnesses (Luke 1:1-4 claims careful investigation). Archaeology repeatedly confirms biblical details once doubted. And the Old Testament\u2019s messianic prophecies \u2014 written centuries before Christ \u2014 provide a divine fingerprint. We don\u2019t believe the Bible blindly; we believe it on evidence that would convince in any other historical inquiry.`,
        keyTerms: [
          { term: 'Apologetics', definition: 'The reasoned defense of the Christian faith (from apologia, "defense").' },
          { term: 'Cosmological argument', definition: 'Everything that begins has a cause; the universe began; therefore it has a transcendent Cause.' },
          { term: 'Teleological argument', definition: 'The universe\u2019s design and fine-tuning point to a Designer.' },
          { term: 'Minimal facts', definition: 'The resurrection case built on historical facts granted even by skeptical scholars.' },
        ],
        reflection: [
          'Which argument for God (cosmological, design, moral) do you find most persuasive \u2014 and which would most persuade your skeptical friend? (They may differ.)',
          'How do you respond \u2014 emotionally and intellectually \u2014 when someone raises the problem of evil? What have you learned about leading with presence over arguments?',
          'What evidence for Scripture\u2019s reliability surprised you most? How does it strengthen your confidence?',
        ],
        application: `Prepare a 5-minute "case for Christ" talk: (1) The resurrection\u2019s minimal facts in your own words. (2) One fulfilled prophecy (Isaiah 53). (3) Your own changed life \u2014 specific before/after. Practice it aloud twice. Then identify the skeptic in your life you\u2019ve been avoiding engaging \u2014 pray for them daily this month, and look for a natural opening. Apologetics without love is noise (1 Corinthians 13:1); love without reasons leaves questions unanswered. Bring both.`,
        prayer: `God of truth \u2014 thank you that faith is not blind: you\u2019ve given reasons \u2014 creation\u2019s witness, prophecy fulfilled, Christ risen, lives transformed. Make me ready with answers and gentle in giving them. For skeptics I know, remove blinders; give me the right word at the right time. And when suffering raises hard questions, teach me to weep first and reason second \u2014 pointing always to the cross, where you entered our pain, and the empty tomb, where you defeated it. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-adv-2-exp-q1',
            type: 'mc',
            prompt: '1 Peter 3:15 commands believers to be ready with answers, given with...',
            choices: ['Aggression and dominance', 'Gentleness and respect', 'Silence', 'Sarcasm'],
            answer: 'Gentleness and respect',
            explanation: '"With humility and fear" \u2014 truth defended Christ\u2019s way: grace and truth together.',
            tags: ['apologetics'],
          },
          {
            id: 'path-adv-2-exp-q2',
            type: 'mc',
            prompt: 'The "minimal facts" approach to the resurrection builds its case on...',
            choices: ['Church tradition alone', 'Historical facts granted even by skeptical scholars (crucifixion, appearances, empty tomb, transformed disciples)', 'Personal feelings', 'Philosophical speculation'],
            answer: 'Historical facts granted even by skeptical scholars (crucifixion, appearances, empty tomb, transformed disciples)',
            explanation: 'Common-ground facts + best explanation (resurrection) = a case skeptics must reckon with.',
            tags: ['apologetics'],
          },
          {
            id: 'path-adv-2-exp-q3',
            type: 'tf',
            prompt: 'Christianity\u2019s distinctive answer to evil is that God entered human suffering himself at the cross and promises its final end.',
            answer: 'True',
            explanation: 'No other worldview has a suffering God \u2014 and a guaranteed future without tears (Revelation 21:4).',
            tags: ['apologetics'],
          },
        ],
      },
      deep: {
        minutes: 30,
        concept:
          'Apologetic method (classical, evidential, presuppositional), worldview comparison, answering major objections, and the relationship between faith and reason.',
        scripture: [
          {
            ref: 'Colossians 4:5-6',
            text: 'Walk in wisdom toward those who are outside, redeeming the time. Let your speech always be with grace, seasoned with salt, that you may know how you ought to answer each one.',
          },
          {
            ref: 'Jude 1:3',
            text: 'Beloved, while I was very eager to write to you about our common salvation, I found it necessary to write to you exhorting you to contend earnestly for the faith which was once for all delivered to the saints.',
          },
          {
            ref: '2 Corinthians 10:5',
            text: 'throwing down imaginations and every high thing that is exalted against the knowledge of God and bringing every thought into captivity to the obedience of Christ,',
          },
        ],
        teaching: `## Methods: How to Defend
Three main approaches. Classical apologetics: establish theism first (cosmological, teleological, moral arguments), then present the historical evidence for Christianity (miracles, resurrection) \u2014 the two-step method. Evidentialism: go straight to the historical evidence \u2014 the resurrection, fulfilled prophecy, manuscript reliability \u2014 letting facts speak. Presuppositionalism: expose that every worldview (including atheism) rests on unprovable presuppositions, then show only the Christian worldview makes sense of logic, morality, and meaning \u2014 "the fear of Yahweh is the beginning of knowledge" (Proverbs 1:7). Each has strengths; most effective defenders blend them. Know your audience: philosophers need presuppositional probing; historians need evidence; hurting people need presence before propositions.

## Worldviews in Comparison
Test worldviews by three questions: Is it coherent? Does it fit the facts? Does it work in life? Atheism struggles with objective morality and meaning \u2014 if we\u2019re cosmic accidents, "wrong" is just preference. Pantheism (all is God) can\u2019t ground evil\u2019s reality or personality\u2019s value. Islam affirms one God but denies the Trinity and Christ\u2019s deity \u2014 yet the historical evidence for the resurrection challenges it directly. Mormonism and Jehovah\u2019s Witnesses fail the test of historic Christian orthodoxy and textual evidence. Secular humanism borrows Christian capital (human dignity, rights) while sawing off the branch it sits on. Only biblical Christianity accounts for: a rational, moral universe (created by a rational, moral God), human dignity and depravity (image-bearers, fallen), and a solution to evil (the cross) with a guaranteed future (resurrection). Show, don\u2019t just tell: live the worldview\u2019s fruit.

## Answering Major Objections
"The Bible is full of contradictions": most dissolve with context, genre, and manuscript awareness \u2014 and the objector rarely has studied them; offer to examine one together. "Christians are hypocrites": true, we\u2019re sinners \u2014 but hypocrisy in followers doesn\u2019t falsify the Leader; judge Christ by Christ. "All religions are basically the same": they\u2019re not \u2014 they contradict on God, Christ, and salvation; and only Christianity offers grace (done) versus works (do). "Science has disproved God": science describes mechanisms; it can\u2019t disprove agency \u2014 many great scientists were Christians, and fine-tuning points toward design. "I can\u2019t believe in a God who sends people to hell": hell is the necessary corollary of human freedom and divine justice \u2014 and God has done everything short of coercion to rescue us. Always answer the person, not just the argument: "know how you ought to answer each one" (Colossians 4:6) \u2014 the same question needs different answers for different hearts.

## Faith and Reason: Friends, Not Enemies
Christianity never asks for blind faith. "Come now, and let us reason together" (Isaiah 1:18). Jesus gave "many infallible proofs" of his resurrection (Acts 1:3). Paul "reasoned" in the synagogues (Acts 17:2) \u2014 the word is dialogomai, from which we get "dialogue." Faith goes beyond reason but never against it: we trust what we have good reason to believe is true, then commit beyond what we can prove \u2014 as with any relationship. The Spirit\u2019s witness doesn\u2019t bypass evidence; it opens blind eyes to see it (1 Corinthians 2:14). So study the reasons \u2014 and pray for the eyes. Apologetics plants and waters; God gives the growth (1 Corinthians 3:6).`,
        keyTerms: [
          { term: 'Presuppositionalism', definition: 'Apologetic method exposing rival worldviews\u2019 presuppositions and showing Christianity alone grounds reason and morality.' },
          { term: 'Evidentialism', definition: 'Method centering on historical evidences \u2014 resurrection, prophecy, manuscripts.' },
          { term: 'Worldview', definition: 'A comprehensive framework answering: what\u2019s real, what\u2019s right, what\u2019s wrong, and what\u2019s the remedy.' },
          { term: 'The problem of evil', definition: 'The objection that suffering disproves a good, all-powerful God \u2014 answered logically, existentially, and at the cross.' },
        ],
        crossRefs: ['Isaiah 1:18', 'Acts 17:2-3', 'Acts 17:22-31', '1 Corinthians 1:18-25', '1 Corinthians 15:14-19', '1 Peter 3:15'],
        reflection: [
          'Which apologetic method (classical, evidential, presuppositional) fits your thinking best \u2014 and which might fit your skeptical friend best?',
          'How would you answer "all religions are basically the same" in two minutes, graciously but clearly?',
          'When has someone\u2019s objection been more emotional than intellectual? How did \u2014 or should \u2014 you respond differently?',
          'Where do you need to grow: in knowing the reasons, in gentleness of manner, or in actually engaging skeptics? What\u2019s one step?',
        ],
        application: `Study one major worldview or objection deeply this month: read one solid book (e.g., on the resurrection\u2019s evidence, or a worldview comparison), summarize its arguments in two pages, and discuss with a Christian friend \u2014 steelmanning the opposing view first (arguing it better than its own advocates) before answering it. Then write a gracious 300-word response to the most common objection you hear. Steelmanning builds intellectual honesty; graciousness builds bridges. Both honor Christ.`,
        prayer: `Lord God of truth \u2014 thank you that you invite reasoning, not blind leaps. Train my mind: teach me the methods, the evidences, the worldviews \u2014 and train my heart: gentleness, respect, love for skeptics. Make me wise toward outsiders, gracious in speech, ready with answers tailored to each person. Tear down speculations raised against knowing you \u2014 through me, yet by your Spirit, for only you open blind eyes. Contend through me, Father \u2014 earnestly for the faith, gently with people. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-adv-2-deep-q1',
            type: 'mc',
            prompt: 'Presuppositional apologetics argues that...',
            choices: ['Evidence doesn\u2019t matter', 'All worldviews rest on presuppositions; only Christianity\u2019s make sense of logic, morality, and meaning', 'Philosophy is useless', 'Only emotions persuade'],
            answer: 'All worldviews rest on presuppositions; only Christianity\u2019s make sense of logic, morality, and meaning',
            explanation: 'Expose rival foundations, then show Christianity alone grounds rationality itself.',
            tags: ['apologetics'],
          },
          {
            id: 'path-adv-2-deep-q2',
            type: 'mc',
            prompt: 'A key problem with "all religions are basically the same" is that...',
            choices: ['It\u2019s impolite', 'Religions make contradictory claims about God, Christ, and salvation \u2014 they can\u2019t all be true', 'Christians are nicer', 'It\u2019s too simple'],
            answer: 'Religions make contradictory claims about God, Christ, and salvation \u2014 they can\u2019t all be true',
            explanation: 'Contradictory truth claims can\u2019t all be right \u2014 and only Christianity offers grace versus works.',
            tags: ['apologetics'],
          },
          {
            id: 'path-adv-2-deep-q3',
            type: 'tf',
            prompt: 'Paul "reasoned" (dialogomai) in the synagogues \u2014 Christianity invites rational dialogue, not blind faith.',
            answer: 'True',
            explanation: 'Acts 17:2; Isaiah 1:18 \u2014 faith goes beyond reason but never against it.',
            tags: ['apologetics'],
          },
          {
            id: 'path-adv-2-deep-q4',
            type: 'mc',
            prompt: 'Colossians 4:6\u2019s "know how you ought to answer each one" implies...',
            choices: ['One script for everyone', 'Tailoring answers to each person\u2019s heart and questions', 'Avoiding hard questions', 'Only answering scholars'],
            answer: 'Tailoring answers to each person\u2019s heart and questions',
            explanation: 'The same objection needs different answers for different hearts \u2014 answer the person, not just the argument.',
            tags: ['apologetics'],
          },
        ],
      },
      study: {
        minutes: 60,
        concept:
          'A full apologetics course: biblical foundations, philosophical arguments, historical evidences, worldview analysis, cultural engagement, and the spiritual dynamics of persuasion.',
        scripture: [
          {
            ref: 'Acts 17:22-28',
            text: 'Paul stood in the middle of the Areopagus, and said, "You men of Athens, I perceive that you are very religious in all things. For as I passed along and observed the objects of your worship, I found also an altar with this inscription: \u2018TO AN UNKNOWN GOD.\u2019 What therefore you worship in ignorance, I announce to you."',
          },
          {
            ref: '1 Corinthians 1:23-24',
            text: 'but we preach Christ crucified, a stumbling block to Jews, and foolishness to Gentiles, but to those who are called, both Jews and Greeks, Christ the power of God and the wisdom of God.',
          },
          {
            ref: '2 Timothy 2:24-26',
            text: 'The Lord\u2019s servant must not quarrel, but be gentle toward all, able to teach, patient, in gentleness correcting those who oppose him: if perhaps God may give them repentance leading to a full knowledge of the truth,',
          },
          {
            ref: '1 Peter 3:15-16',
            text: 'But sanctify the Lord God in your hearts. Always be ready to give an answer to everyone who asks you a reason concerning the hope that is in you, with humility and fear, having a good conscience, that while you are spoken against as evildoers, they may be disappointed who curse your good way of life in Christ.',
          },
        ],
        teaching: `## 1. Biblical Foundations of Apologetics
Apologetics is not a modern invention \u2014 it\u2019s biblical obedience. The Old Testament prophets contended against idols with mockery and logic (1 Kings 18:27; Isaiah 44:9-20). Jesus answered critics with devastating questions (Matthew 22:41-46) and gave "many infallible proofs" (Acts 1:3). Paul\u2019s ministry was apologetic throughout: reasoning in synagogues (Acts 17:2), confronting philosophers on Mars Hill (Acts 17:22-31), "persuading" in Corinth and Ephesus (Acts 18:4; 19:8). Peter commands readiness (1 Peter 3:15); Jude commands contending (Jude 1:3); Paul commands demolishing arguments (2 Corinthians 10:5). The pattern: know the culture, find the point of contact, proclaim Christ, answer objections \u2014 always with the goal of persuasion, never mere victory.

## 2. Theistic Arguments in Depth
Develop each argument rigorously. Cosmological (kalam): whatever begins to exist has a cause; the universe began (philosophical arguments against infinite regress + Big Bang cosmology); therefore a transcendent, timeless, spaceless, immaterial, enormously powerful, personal Cause. Teleological: fine-tuning (constants like the cosmological constant, calibrated to 1 part in 10^120) and biological information (DNA\u2019s specified complexity) are best explained by design \u2014 chance and necessity fail as explanations. Moral: objective moral values and duties exist (torturing children for fun is truly evil); they require a transcendent moral standard \u2014 grounding them in evolution or society makes them subjective illusions. Ontological (Anselm): a maximally great being must exist in all possible worlds, including ours. Consciousness and reason: materialism can\u2019t account for the soul\u2019s reality or reason\u2019s reliability \u2014 yet atheists trust both. Cumulative case: no single argument compels, but together they make theism vastly more probable than atheism \u2014 like strands in a rope.

## 3. The Historical Case for Christianity
Christianity\u2019s uniqueness: it stands or falls on public historical events, not private experiences. The Gospels\u2019 reliability: early dating (within eyewitness lifetimes), manuscript wealth (~5,800 Greek copies), undesigned coincidences, embarrassing details, and external corroboration (Tacitus, Josephus, Pliny). The resurrection\u2019s minimal facts: crucifixion death, disciples\u2019 experiences of the risen Jesus, Paul\u2019s conversion, James\u2019 transformation, the empty tomb \u2014 granted by skeptical scholars, best explained by resurrection; naturalistic alternatives (hallucination, swoon, theft, legend, cognitive dissonance) fail on multiple facts each. Fulfilled prophecy: the Old Testament\u2019s messianic predictions (Isaiah 53, Psalm 22, Micah 5:2, Daniel 9) written centuries prior, confirmed by the Dead Sea Scrolls\u2019 pre-Christian dating. The church\u2019s rise: an explosively growing movement centered on a crucified man \u2014 inexplicable without the resurrection.

## 4. Worldviews and Cultural Engagement
Map the rivals. Naturalism: only matter exists \u2014 self-refuting (if thoughts are just brain chemistry, why trust them? including the thought "naturalism is true"). Postmodernism: truth is constructed \u2014 yet it asserts its own truth absolutely. Islam: affirms Jesus as prophet but denies crucifixion and deity \u2014 the historical evidence for both challenges it; the Qur\u2019an\u2019s late date (7th century) versus the Gospels\u2019 early witness matters. Eastern pantheism: evil as illusion contradicts lived experience; impersonality can\u2019t ground personhood. New spirituality ("spiritual but not religious"): borrows Christian ethics while rejecting Christian authority \u2014 ask "says who?" Engage culture like Paul at Athens (Acts 17): study the idols (observe), find the altar to the unknown (point of contact), quote their poets (common ground), proclaim the unknown God (gospel), call for repentance (verdict). Cultural apologetics \u2014 through story, art, and beauty \u2014 reaches hearts that arguments alone can\u2019t.

## 5. Hard Questions Workshop
Practice full responses. Evil and suffering: distinguish logical (no contradiction \u2014 God may have justifying reasons), evidential (suffering\u2019s amount doesn\u2019t disprove God; and Christianity uniquely answers with the cross and resurrection), and emotional (presence before propositions; the sufferer needs comfort, not syllogisms). Hell: God\u2019s justice requires it; human freedom involves it; Christ\u2019s cross shows God\u2019s lengths to avoid it for all who\u2019ll come. Old Testament violence: read within ancient Near Eastern context, God\u2019s patience (Genesis 15:16), the Canaanites\u2019 wickedness, and progressive revelation \u2014 difficult, but not the caricature. Unreached peoples: God judges justly (Romans 2:12-16); general revelation leaves none without witness (Romans 1:20); and the question should drive us to missions, not excuse us from them. Doubt: distinguish intellectual questions (answer with evidence) from volitional resistance (the heart\u2019s issue) \u2014 and be honest about mystery (Deuteronomy 29:29).

## 6. The Spirit\u2019s Work and the Apologist\u2019s Character
The deepest truth: arguments don\u2019t convert \u2014 God does. "No one can come to me unless the Father... draws him" (John 6:44); "the natural man doesn\u2019t receive the things of God\u2019s Spirit" (1 Corinthians 2:14). Our role: plant and water faithfully (1 Corinthians 3:6), pray persistently, live consistently (1 Peter 3:16 \u2014 "having a good conscience" silences slanderers), and speak the truth in love (Ephesians 4:15). The apologist\u2019s character per 2 Timothy 2:24-26: not quarrelsome, gentle, able to teach, patient \u2014 "if perhaps God may give them repentance." Perhaps: humility about outcomes, faithfulness in means. Study hard, argue well, love deeply, pray constantly \u2014 and trust the Lord of the harvest with the results. Some plant, some water; God gives growth. Always.`,
        keyTerms: [
          { term: 'Kalam cosmological argument', definition: 'Whatever begins to exist has a cause; the universe began; therefore a transcendent Cause.' },
          { term: 'Fine-tuning', definition: 'The universe\u2019s physical constants precisely calibrated for life \u2014 evidence of design.' },
          { term: 'Steelmanning', definition: 'Arguing the opposing view in its strongest form before responding \u2014 intellectual honesty.' },
          { term: 'Cultural apologetics', definition: 'Defending the faith through story, art, beauty, and cultural analysis \u2014 reaching hearts.' },
          { term: 'The "perhaps" of 2 Timothy 2:25', definition: '"If perhaps God may give them repentance" \u2014 humility about outcomes, faithfulness in means.' },
        ],
        crossRefs: ['Deuteronomy 29:29', '1 Kings 18:20-40', 'Isaiah 44:9-20', 'Matthew 22:41-46', 'Acts 1:3', 'Acts 17:16-34', '1 Corinthians 2:14'],
        reflection: [
          'Which theistic argument (cosmological, teleological, moral, ontological) would you most want to master \u2014 and which skeptic in your life needs it?',
          'How does Paul\u2019s Mars Hill approach (observe idols, find contact point, proclaim, call to repentance) shape how you\u2019d engage your city\u2019s culture?',
          'What\u2019s the hardest question you\u2019ve ever faced about the faith \u2014 and how would you answer it now, combining evidence and gentleness?',
          'Where do you need the "perhaps" humility of 2 Timothy 2:25 \u2014 trusting God with outcomes while being faithful in witness?',
          'How does your life itself function as apologetic evidence (1 Peter 3:16)? What would slanderers find \u2014 and what would seekers find?',
          'What\u2019s one step this month toward becoming "ready" \u2014 a book, a course, a conversation, a prayer commitment for a skeptic?',
        ],
        application: `Design a 3-month apologetics growth plan: Month 1 \u2014 foundations: read one book on the resurrection\u2019s evidence and summarize the minimal-facts case in your own words. Month 2 \u2014 worldviews: study one rival worldview deeply, steelman it in writing, then write your gracious response. Month 3 \u2014 practice: have three real conversations with skeptics (or role-play with a Christian friend), focusing on listening well and answering gently. Throughout: pray weekly for one unbeliever by name, and keep an "objections journal" \u2014 every hard question you hear, researched and answered. Readiness is built, not wished for.`,
        prayer: `O Lord God of truth \u2014 Father who draws, Son who is the truth, Spirit who guides into all truth \u2014 make me your apologist. Sanctify Christ as Lord in my heart first; then make me ready with reasons, gentle in manner, wise toward outsiders, gracious in speech. Teach me the arguments and the evidences, the worldviews and the answers \u2014 but keep me from quarrelsomeness, pride, and trust in cleverness. Give repentance to those who oppose; use my planting and watering; give the growth yourself. Let my life silence slanderers and my words open blind eyes. Contend through me \u2014 earnestly for the faith once delivered, lovingly for the people you died to save. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-adv-2-study-q1',
            type: 'mc',
            prompt: 'The kalam cosmological argument concludes...',
            choices: ['The universe is eternal', 'A transcendent, timeless, spaceless, immaterial, powerful, personal Cause of the universe', 'Causes don\u2019t exist', 'The universe caused itself'],
            answer: 'A transcendent, timeless, spaceless, immaterial, powerful, personal Cause of the universe',
            explanation: 'Whatever begins has a cause; the universe began; therefore \u2014 a Cause matching God\u2019s description.',
            tags: ['apologetics'],
          },
          {
            id: 'path-adv-2-study-q2',
            type: 'mc',
            prompt: 'Naturalism (only matter exists) is self-refuting because...',
            choices: ['Scientists disagree', 'If thoughts are just brain chemistry, there\u2019s no reason to trust them \u2014 including the thought "naturalism is true"', 'It\u2019s unpopular', 'It\u2019s new'],
            answer: 'If thoughts are just brain chemistry, there\u2019s no reason to trust them \u2014 including the thought "naturalism is true"',
            explanation: 'Naturalism undercuts rationality itself \u2014 it can\u2019t account for the reliability of reason.',
            tags: ['apologetics'],
          },
          {
            id: 'path-adv-2-study-q3',
            type: 'tf',
            prompt: 'According to 2 Timothy 2:24-26, the apologist\u2019s manner must be gentle, patient, and non-quarrelsome \u2014 trusting God to grant repentance.',
            answer: 'True',
            explanation: '"If perhaps God may give them repentance" \u2014 arguments don\u2019t convert; God does, through faithful, gentle witness.',
            tags: ['apologetics'],
          },
          {
            id: 'path-adv-2-study-q4',
            type: 'mc',
            prompt: 'Paul\u2019s Mars Hill method (Acts 17) models cultural engagement as...',
            choices: ['Avoiding culture entirely', 'Observing idols, finding a point of contact, proclaiming Christ, calling for repentance', 'Agreeing with everything', 'Only debating philosophers'],
            answer: 'Observing idols, finding a point of contact, proclaiming Christ, calling for repentance',
            explanation: 'The altar "to an unknown God" became the bridge \u2014 common ground serving gospel proclamation.',
            tags: ['apologetics'],
          },
        ],
      },
    },
  },
  {
    id: 'path-adv-3',
    pathId: 'advanced',
    order: 3,
    title: 'Systematic Theology',
    summary:
      'Organizing the whole counsel of God: the doctrines of Scripture, God, Christ, Spirit, humanity, salvation, church, and last things \u2014 and why they matter for life.',
    layers: {
      core: {
        minutes: 5,
        concept:
          'Systematic theology organizes everything Scripture teaches by topic \u2014 giving us a coherent, worship-fueling understanding of God and his ways.',
        scripture: [
          {
            ref: '2 Timothy 3:16-17',
            text: 'Every Scripture is God-breathed and profitable for teaching, for reproof, for correction, and for instruction in righteousness, that each person who belongs to God may be complete, thoroughly equipped for every good work.',
          },
        ],
        teaching: `Systematic theology is the organized study of what the whole Bible teaches about any topic \u2014 God, Christ, salvation, the church, the end times. While biblical theology traces themes through the story, systematic theology gathers everything Scripture says on a subject and arranges it coherently. Both are needed: the story and the system.

Why do this work? Because "every Scripture is God-breathed and profitable for teaching" (2 Timothy 3:16) \u2014 and teaching requires organizing. Because error thrives on isolated verses; sound doctrine needs the whole counsel (Acts 20:27). And because knowing God deeply is eternal life itself (John 17:3).

The major loci (topics): bibliology (Scripture), theology proper (God), Christology (Christ), pneumatology (the Spirit), anthropology (humanity), hamartiology (sin), soteriology (salvation), ecclesiology (the church), and eschatology (last things). Each connects to the others \u2014 pull one thread and the fabric moves.

But systematics must never become mere system. Its goal is doxology: Paul\u2019s deepest theology erupts in worship \u2014 "Oh the depth of the riches both of the wisdom and the knowledge of God!" (Romans 11:33). Right thinking about God should produce right worship of God and right living before God. Theology that doesn\u2019t lead to doxology isn\u2019t yet understood.`,
        reflection: [
          'Which theological topic (God, Christ, salvation, church, end times) most fires your worship \u2014 and which feels driest? What might that reveal?',
          'How have you seen "isolated verses" used to support error? How does systematic study guard against that?',
        ],
        application: `Choose one doctrine to study systematically this month: collect 10-15 key passages on it (a study Bible\u2019s cross-references help), summarize what they teach in your own words (one page), note one common error to avoid, and write one paragraph on how it changes your worship or obedience. You\u2019ve just done systematic theology \u2014 and it will stick because you built it yourself.`,
        prayer: `God of truth \u2014 thank you for revealing yourself coherently, not confusingly. Teach me your whole counsel: Scripture, your triune being, Christ, the Spirit, humanity, salvation, your church, and the end. Keep me from error and from coldness \u2014 make my theology fuel for worship and obedience. Let my study end where Paul\u2019s did: in doxology. In Jesus\u2019 name, amen.`,
      },
      expanded: {
        minutes: 15,
        concept:
          'The loci of systematic theology interlock: Scripture\u2019s authority grounds our knowledge of the triune God, whose plan centers on Christ and unfolds in salvation, church, and consummation.',
        scripture: [
          {
            ref: 'Titus 2:1',
            text: 'But say the things which fit sound doctrine,',
          },
          {
            ref: 'Romans 11:33',
            text: 'Oh the depth of the riches both of the wisdom and the knowledge of God! How unsearchable are his judgments, and his ways past tracing out!',
          },
        ],
        teaching: `## The System\u2019s Foundation: Scripture
Systematics begins with bibliology because everything else depends on it: if Scripture is God-breathed (2 Timothy 3:16), authoritative, clear (perspicuous) on essentials, and sufficient, then theology is discovery, not invention. The Reformers\u2019 sola Scriptura didn\u2019t mean "Scripture only, ignoring all else" but "Scripture alone as the supreme authority" \u2014 tradition, reason, and experience serve it. Every doctrine must be built from exegesis, not imposed on texts.

## God, Christ, Spirit: The Trinity at the Center
Theology proper: one God, infinite, eternal, unchangeable, omnipotent, omniscient, omnipresent \u2014 holy, just, loving, merciful, faithful. Then the Trinity: one being, three persons \u2014 the Father unbegotten, the Son eternally begotten, the Spirit proceeding \u2014 each fully God, distinct in relation and role. Christology: the incarnation (fully God, fully man, one person), his offices (prophet, priest, king), his work (atonement, resurrection, intercession, return). Pneumatology: the Spirit\u2019s deity and personhood; his work in creation, inspiration, Christ, regeneration, sanctification, and mission. Get the Trinity right and everything else finds its place \u2014 salvation itself is Trinitarian: planned by the Father, accomplished by the Son, applied by the Spirit.

## Humanity, Sin, Salvation
Anthropology: humans as God\u2019s image-bearers \u2014 dignified, rational, moral, relational \u2014 created for glory. Hamartiology: the fall\u2019s corruption \u2014 total depravity (every faculty tainted), guilt, and death. Soteriology: God\u2019s gracious rescue \u2014 election, calling, regeneration, conversion, justification, adoption, sanctification, perseverance, glorification. Note the order\u2019s logic: God\u2019s holiness makes sin serious; sin\u2019s seriousness makes the cross necessary; the cross\u2019s sufficiency makes grace alone certain. Each doctrine guards the others: deny depravity and grace becomes optional; deny Christ\u2019s deity and atonement collapses.

## Church and Last Things
Ecclesiology: the church as Christ\u2019s body, God\u2019s temple, the pillar of truth \u2014 its marks (word, sacraments, discipline), its offices (elder, deacon), its mission (worship, edification, evangelism). Eschatology: Christ\u2019s bodily return, the resurrection of the dead, final judgment, and the new heavens and earth \u2014 inaugurated already in Christ\u2019s first coming, consummated at his second ("already/not yet"). The system ends where the Bible ends: "Behold, I am making all things new" (Revelation 21:5) \u2014 theology\u2019s goal is not a tidy chart but a renewed cosmos and a worshiping people.`,
        keyTerms: [
          { term: 'Systematic theology', definition: 'Organizing the whole Bible\u2019s teaching by topic into a coherent doctrinal system.' },
          { term: 'Loci', definition: 'The major topics: Scripture, God, Christ, Spirit, humanity, sin, salvation, church, last things.' },
          { term: 'Sola Scriptura', definition: 'Scripture alone as the supreme authority over tradition, reason, and experience.' },
          { term: 'Already / not yet', definition: 'The kingdom inaugurated in Christ\u2019s first coming, consummated at his return.' },
        ],
        reflection: [
          'How does seeing doctrines as interlocking (rather than isolated topics) change the way you study \u2014 e.g., how Christology guards soteriology?',
          'Where have you seen the "already/not yet" tension in your own life \u2014 victory and struggle coexisting? How does eschatology give hope there?',
          'What\u2019s the difference between sola Scriptura and "me and my Bible alone"? Why does the distinction matter?',
        ],
        application: `Map the system visually: draw nine boxes (Scripture, God, Christ, Spirit, Humanity, Sin, Salvation, Church, Last Things) and draw arrows showing how each connects to the others \u2014 e.g., Scripture \u2192 authority for all; God\u2019s holiness \u2192 sin\u2019s seriousness \u2192 Christ\u2019s necessity \u2192 grace\u2019s freeness. Write one sentence per box summarizing its core. Keep the map in your Bible \u2014 it\u2019s your theological compass, and watching the connections will transform isolated facts into coherent worship.`,
        prayer: `O Lord, our Lord \u2014 how majestic is your truth! Thank you for revealing yourself coherently: your word as foundation, your triune being as center, Christ as the hinge of history, salvation as your gracious work, your church as your people, and a new creation as our hope. Guard me from error and from apathy. Make my theology burn \u2014 like Paul\u2019s, erupting in doxology: Oh the depth of your riches! In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-adv-3-exp-q1',
            type: 'mc',
            prompt: 'Systematic theology differs from biblical theology in that it...',
            choices: ['Ignores history', 'Organizes the whole Bible\u2019s teaching by topic rather than tracing themes through the story', 'Rejects the Old Testament', 'Only studies Paul'],
            answer: 'Organizes the whole Bible\u2019s teaching by topic rather than tracing themes through the story',
            explanation: 'Biblical theology follows the story; systematic theology gathers the topics \u2014 both needed.',
            tags: ['theology'],
          },
          {
            id: 'path-adv-3-exp-q2',
            type: 'mc',
            prompt: '"Already / not yet" describes...',
            choices: ['A contradiction in Scripture', 'The kingdom inaugurated at Christ\u2019s first coming and consummated at his return', 'A debate about baptism', 'Two different gospels'],
            answer: 'The kingdom inaugurated at Christ\u2019s first coming and consummated at his return',
            explanation: 'Eschatological tension: victory secured, consummation awaited \u2014 shaping hope amid struggle.',
            tags: ['theology'],
          },
          {
            id: 'path-adv-3-exp-q3',
            type: 'tf',
            prompt: 'Sola Scriptura means Scripture is the supreme authority, with tradition, reason, and experience serving \u2014 not rivaling \u2014 it.',
            answer: 'True',
            explanation: 'Not "me and my Bible alone" but Scripture as the final court of appeal over all other authorities.',
            tags: ['theology'],
          },
        ],
      },
      deep: {
        minutes: 30,
        concept:
          'Going deeper into key loci: the attributes of God, the person of Christ, the application of redemption, and the doctrine of the church \u2014 with historical context.',
        scripture: [
          {
            ref: '1 Timothy 4:16',
            text: 'Pay attention to yourself and to your teaching. Continue in these things, for in doing this you will save both yourself and those who hear you.',
          },
          {
            ref: 'Ephesians 4:11-13',
            text: 'He gave some to be apostles; and some, prophets; and some, evangelists; and some, shepherds and teachers; for the perfecting of the saints, to the work of serving, to the building up of the body of Christ, until we all attain to the unity of the faith and of the knowledge of the Son of God, to a full grown man, to the measure of the stature of the fullness of Christ.',
          },
          {
            ref: 'Revelation 21:5',
            text: 'He who sits on the throne said, "Behold, I am making all things new."',
          },
        ],
        teaching: `## Theology Proper: Knowing God Deeply
Move beyond listing attributes to seeing their harmony. God\u2019s simplicity: he is not composed of parts \u2014 his love is holy love, his holiness is loving holiness; each attribute qualifies the others. His aseity (self-existence, Exodus 3:14) grounds everything: needing nothing, he creates from fullness, not lack \u2014 which makes grace sheer gift. His immutability (Malachi 3:6; Hebrews 13:8) secures his promises \u2014 the God who was faithful will be. His impassibility (properly understood): not that God is unfeeling \u2014 Scripture shows his compassion, grief, and joy \u2014 but that his inner life isn\u2019t hostage to creation; his emotions are perfect, voluntary, and consistent with his unchanging character. Wrestling with these deepens worship: we praise not a bigger man but Being itself, personal and perfect.

## Christology: The Two Natures
Chalcedon (451) confessed Christ as "truly God and truly man... in two natures, without confusion, without change, without division, without separation." The negative boundaries matter: without confusion/change (against blending the natures \u2014 his deity didn\u2019t swallow his humanity), without division/separation (against splitting the person \u2014 Nestorianism\u2019s two Christs). The communication of attributes: what\u2019s true of either nature is true of the person \u2014 "the Son of Man who is in heaven" (John 3:13) even while on earth. His humiliation (incarnation, suffering, death, burial) and exaltation (resurrection, ascension, session, return) trace the gospel\u2019s arc. And his three offices: prophet (God\u2019s final word, Hebrews 1:2), priest (once-for-all sacrifice and ongoing intercession, Hebrews 7:25), king (reigning now, returning in glory). Deny any office and the gospel frays: no prophet, no truth; no priest, no atonement; no king, no lordship.

## Soteriology: The Application of Redemption
Distinguish redemption accomplished (Christ\u2019s objective work: atonement, resurrection) from redemption applied (the Spirit\u2019s subjective work in us). The ordo salutis (order of salvation): election \u2192 effectual calling \u2192 regeneration \u2192 conversion (faith and repentance) \u2192 justification \u2192 adoption \u2192 sanctification \u2192 perseverance \u2192 glorification. Debates cluster here: the extent of the atonement (for whom did Christ die? \u2014 all agree his death is sufficient for all; the debate is its design), the nature of election (unconditional vs. conditional), perseverance vs. the possibility of apostasy. Study Romans 8-9, Ephesians 1, John 6 and 10, Hebrews\u2019 warnings \u2014 and hold your conclusions with the humility these texts\u2019 difficulty demands. What all orthodox affirm: salvation is by grace alone through faith alone in Christ alone, and true faith perseveres.

## Ecclesiology: The Doctrine of the Church
The church is Christ\u2019s body (1 Corinthians 12), God\u2019s temple (Ephesians 2:21), the bride (Ephesians 5:25-27), God\u2019s family (1 Timothy 3:15). Its marks (Reformed): faithful preaching of the word, right administration of the sacraments, and discipline. Its government: episcopal (bishops), presbyterian (elders), congregational \u2014 each with biblical arguments; all agree on qualified, servant leadership (1 Timothy 3; Titus 1). Its ordinances: baptism (entry sign, Romans 6:3-4) and the Lord\u2019s Supper (covenant meal, 1 Corinthians 11:23-26) \u2014 with deep disagreements on mode, subjects, and presence that require charity. Its mission: worship, nurture, and witness \u2014 "the pillar and ground of the truth" (1 Timothy 3:15). Ecclesiology corrects both individualism ("I don\u2019t need church") and institutionalism (the church as mere organization): the church is an organism \u2014 Christ\u2019s living body \u2014 with organized structure.

## Eschatology: The End That Gives Hope
Individual eschatology: death, the intermediate state (present with the Lord, 2 Corinthians 5:8; Philippians 1:23), resurrection, judgment. Cosmic: Christ\u2019s bodily return (Acts 1:11), the millennium debate (premillennial, amillennial, postmillennial \u2014 see the prophecy lesson), final judgment (Revelation 20:11-15), new heavens and earth (Revelation 21-22; Romans 8:19-23). The already/not yet shapes ethics: we live resurrection life now (Colossians 3:1) while groaning for full redemption (Romans 8:23). Eschatology\u2019s pastoral payoff: comfort for the grieving (1 Thessalonians 4:13-18), motivation for holiness (1 John 3:3; 2 Peter 3:11), and fuel for mission (Matthew 24:14). The end is not escape from creation but its renewal \u2014 "making all things new" (Revelation 21:5), not making all new things.`,
        keyTerms: [
          { term: 'Divine simplicity', definition: 'God is not composed of parts; his attributes are his unified being.' },
          { term: 'Chalcedonian Definition', definition: 'Christ: two natures, without confusion, change, division, or separation, in one person (AD 451).' },
          { term: 'Ordo salutis', definition: '"Order of salvation": the logical sequence of God\u2019s saving acts from election to glorification.' },
          { term: 'Already / not yet', definition: 'Eschatological tension: redemption inaugurated, consummation awaited.' },
        ],
        crossRefs: ['Exodus 3:14', 'Malachi 3:6', 'John 3:13', 'Romans 8:28-30', 'Ephesians 1:3-14', 'Hebrews 7:25', '1 Timothy 3:15'],
        reflection: [
          'How does divine simplicity (God\u2019s attributes as his unified being, not parts) deepen \u2014 or challenge \u2014 your picture of God?',
          'Why do Chalcedon\u2019s negative boundaries (without confusion, change, division, separation) matter practically for your salvation?',
          'Where do you land on the debated soteriological questions (extent of atonement, nature of election, perseverance)? How firmly should you hold your view?',
          'How does a robust ecclesiology challenge both church-neglecting individualism and institution-worshiping traditionalism in you?',
        ],
        application: `Choose the locus you understand least and spend two weeks in it: read its chapter in a systematic theology, collect its 15 most important passages, write a 2-page summary, and identify the two most common errors to avoid. Then find the doxological payoff: write a prayer of worship based solely on that doctrine. Theology\u2019s test is worship \u2014 if your study of, say, election doesn\u2019t end in "Oh the depth!" (Romans 11:33), keep digging until it does.`,
        prayer: `O God \u2014 simple in being, infinite in perfection, unchanging in faithfulness \u2014 I worship you. Thank you for Christ: two natures, one person, my prophet, priest, and king. Thank you for salvation\u2019s unbreakable order, from election to glorification. Thank you for your church \u2014 Christ\u2019s body, truth\u2019s pillar \u2014 and for the end that is a beginning: all things made new. Make me pay attention to both life and doctrine (1 Timothy 4:16). Keep me from error and coldness alike. Let my theology burn into doxology and spill into obedience. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-adv-3-deep-q1',
            type: 'mc',
            prompt: 'The Chalcedonian Definition (AD 451) confesses Christ\u2019s two natures as united...',
            choices: ['By blending into one nature', 'Without confusion, change, division, or separation, in one person', 'As two separate persons', 'Only apparently'],
            answer: 'Without confusion, change, division, or separation, in one person',
            explanation: 'The four negative boundaries guard both the natures\u2019 integrity and the person\u2019s unity.',
            tags: ['theology'],
          },
          {
            id: 'path-adv-3-deep-q2',
            type: 'mc',
            prompt: 'In the ordo salutis, justification is...',
            choices: ['The same as sanctification', 'God\u2019s declarative act pardoning sinners and crediting Christ\u2019s righteousness \u2014 distinct from the progressive work of sanctification', 'Achieved by works', 'Unnecessary'],
            answer: 'God\u2019s declarative act pardoning sinners and crediting Christ\u2019s righteousness \u2014 distinct from the progressive work of sanctification',
            explanation: 'Justification is instantaneous and declarative; sanctification is progressive and transformative \u2014 confusing them corrupts both.',
            tags: ['theology'],
          },
          {
            id: 'path-adv-3-deep-q3',
            type: 'tf',
            prompt: 'Revelation 21:5 ("Behold, I am making all things new") teaches renewal of creation, not its annihilation and replacement.',
            answer: 'True',
            explanation: 'Redemption renews: resurrection bodies, new heavens and earth \u2014 continuity through transformation.',
            tags: ['theology'],
          },
          {
            id: 'path-adv-3-deep-q4',
            type: 'mc',
            prompt: 'Divine simplicity means...',
            choices: ['God is easy to understand', 'God is not composed of parts; his attributes are his unified being', 'God has only one attribute', 'God changes simply'],
            answer: 'God is not composed of parts; his attributes are his unified being',
            explanation: 'His love is holy love; his holiness is loving holiness \u2014 each attribute qualifies the others.',
            tags: ['theology'],
          },
        ],
      },
      study: {
        minutes: 60,
        concept:
          'A full systematic theology survey: prolegomena, each locus in depth, theological method, historical theology, and the integration of doctrine with worship and mission.',
        scripture: [
          {
            ref: 'Acts 20:27',
            text: 'for I didn\u2019t shrink from declaring to you the whole counsel of God.',
          },
          {
            ref: 'Ephesians 4:14-15',
            text: 'that we may no longer be children, tossed back and forth and carried about with every wind of doctrine, by the trickery of men, in craftiness, after the wiles of error; but speaking truth in love, we may grow up in all things into him who is the head, Christ.',
          },
          {
            ref: '2 Timothy 1:13-14',
            text: 'Hold the pattern of sound words which you have heard from me, in faith and love which is in Christ Jesus. That good thing which was committed to you, guard through the Holy Spirit who dwells in us.',
          },
          {
            ref: 'Jude 1:3',
            text: 'Beloved, while I was very eager to write to you about our common salvation, I found it necessary to write to you exhorting you to contend earnestly for the faith which was once for all delivered to the saints.',
          },
        ],
        teaching: `## 1. Prolegomena: Before Theology Begins
Every system rests on foundations \u2014 prolegomena ("things said beforehand"). Revelation: God has spoken (general: creation, conscience; special: Scripture, Christ) \u2014 theology is possible because God is knowable, yet always analogical (we know truly, not exhaustively). Scripture\u2019s attributes: inspiration (God-breathed), inerrancy (without error in all it affirms), authority (supreme), clarity (understandable on essentials), necessity, sufficiency. Theological method: exegesis (text) \u2192 biblical theology (storyline) \u2192 systematic synthesis (topics) \u2192 historical awareness (what the church concluded) \u2192 practical application (worship, life, mission). Skip any step and the system wobbles: exegesis without synthesis fragments; synthesis without exegesis speculates; both without history repeats old errors; all without application deadens.

## 2. The Loci in Full
Work each locus with its classic questions. Bibliology: canon, inspiration, inerrancy, authority, clarity, sufficiency. Theology proper: God\u2019s being (spirit, personal, triune), attributes (incommunicable: aseity, eternity, immutability, omnipotence, omniscience, omnipresence; communicable: holiness, love, justice, mercy, faithfulness), the Trinity\u2019s persons and relations, decrees and providence. Christology: person (two natures, one person), states (humiliation, exaltation), offices (prophet, priest, king), work (atonement theories\u2019 biblical core: penal substitution central, Christus Victor, moral influence as fruit). Pneumatology: personhood, deity, work (creation to consummation), gifts, filling. Anthropology/hamartiology: image of God, constitution (body/soul), the fall, original sin, total depravity. Soteriology: ordo salutis in full, the atonement\u2019s extent and nature, faith and repentance, assurance. Ecclesiology: nature, marks, government, ordinances, mission. Eschatology: individual and cosmic, millennial views, the eternal state. Angelology/demonology: often neglected \u2014 angels as ministering spirits (Hebrews 1:14), Satan as defeated foe (Colossians 2:15), spiritual warfare as gospel-grounded resistance (Ephesians 6:10-18; James 4:7).

## 3. Historical Theology: The Church\u2019s Lab
Doctrines were forged in controversy \u2014 study the forge. Trinity: Nicaea (325) vs. Arianism; Constantinople (381) on the Spirit. Christ: Chalcedon (451) vs. Nestorianism/Eutychianism. Grace: Augustine vs. Pelagius; the Reformation\u2019s sola gratia/sola fide vs. merit theology; the Synod of Dort (1618-19) on election and perseverance. Scripture: the Reformation\u2019s sola Scriptura; modern inerrancy debates (Chicago Statement, 1978). Each controversy clarifies: read the primary sources (creeds, confessions, key treatises), understand both sides\u2019 biblical arguments, and see why the orthodox conclusion guarded the gospel. Historical theology humbles novelty and steadies conviction: "hold the pattern of sound words" (2 Timothy 1:13).

## 4. Theological Triage and Controversy
Not all doctrines carry equal weight \u2014 triage wisely. First-order: Trinity, Christ\u2019s deity/humanity, justification by faith, resurrection, Scripture\u2019s authority \u2014 deny these and Christianity collapses; division is necessary. Second-order: baptism, church government, millennial views, gifts \u2014 important enough to shape church membership, but godly Christians disagree; charity within conviction. Third-order: worship styles, eschatological details, Bible translations \u2014 liberty. Apply triage to controversy: contend earnestly for first-order truth (Jude 1:3), discuss second-order with conviction and kindness, and refuse to divide over third-order preferences. And contend well: "speaking truth in love" (Ephesians 4:15) \u2014 the goal is persuasion and protection, not domination. The church\u2019s unity and purity both matter; wisdom knows which the moment requires.

## 5. Doctrine into Doxology, Ethics, and Mission
Systematics must land in three places. Worship: every locus ends in praise \u2014 election in gratitude (Ephesians 1:6), providence in trust (Romans 8:28), eschatology in hope (Revelation 22:20). Ethics: doctrine drives duty \u2014 the indicative-imperative pattern everywhere (Romans 12:1; Ephesians 4:1; Colossians 3:1); holiness is theology applied. Mission: the Trinity sends (John 20:21), the gospel compels (2 Corinthians 5:14), eschatology hastens (Matthew 24:14; 2 Peter 3:12). A theology that doesn\u2019t worship is cold; that doesn\u2019t obey is dead; that doesn\u2019t go is disobedient. Paul\u2019s model: "I didn\u2019t shrink from declaring to you the whole counsel of God" (Acts 20:27) \u2014 the whole counsel, declared fully, for worship, holiness, and mission.

## 6. Building Your Theological Library and Life
Invest for the long haul. A starter library: one solid systematic theology (work through it over two years), one biblical theology, one church history survey, one commentary set\u2019s worth of key volumes (or a good study Bible), the creeds and your church\u2019s confession, and primary sources (Augustine\u2019s Confessions, Calvin\u2019s Institutes selections, Lewis\u2019s Mere Christianity). A rhythm: daily Scripture (the text first), weekly theological reading (30 minutes), monthly doctrine study with a friend, yearly re-reading of a classic. And a rule: for every hour of theological input, practice an hour of output \u2014 teaching, writing, discussing, obeying. "Be doers of the word" (James 1:22) applies to systematics too. The goal was never a full head but a full heart: knowing God, loving him, and making him known \u2014 until theology gives way to sight, and faith to face-to-face vision.`,
        keyTerms: [
          { term: 'Prolegomena', definition: 'Foundational issues before theology: revelation, Scripture\u2019s nature, theological method.' },
          { term: 'Theological triage', definition: 'Ranking doctrines by importance: first-order (essential), second-order (important), third-order (liberty).' },
          { term: 'Historical theology', definition: 'Studying how doctrines were formulated through church history\u2019s controversies.' },
          { term: 'Inerrancy', definition: 'Scripture without error in all it affirms \u2014 the foundation of theological authority.' },
          { term: 'Doxology', definition: 'Praise to God \u2014 the proper end of all theology.' },
        ],
        crossRefs: ['Deuteronomy 29:29', 'Psalm 119:160', 'John 17:3', 'Acts 20:27', 'Romans 11:33-36', 'Ephesians 4:11-16', '2 Timothy 2:15'],
        reflection: [
          'Which prolegomena issue (revelation, inerrancy, method) most needs shoring up in your thinking? What will you read to strengthen it?',
          'Apply theological triage to a current controversy you care about: which order is it, and are you treating it accordingly?',
          'Which historical controversy (Nicaea, Chalcedon, the Reformation) do you understand least? How would studying it guard your faith today?',
          'Where is your theology thinnest \u2014 worship, ethics, or mission? What would integration look like in the weak area?',
          'What\u2019s your current ratio of theological input to output (teaching, obeying, discussing)? What needs adjusting?',
          'If you were discipling a new believer through the loci, where would you start \u2014 and why?',
        ],
        application: `Begin a two-year systematic theology project: work through one trusted systematic theology at a pace of one chapter per week, keeping a notebook with four columns per doctrine \u2014 "Key passages," "Summary in my words," "Errors to avoid," "Worship/obedience response." Meet monthly with a friend doing the same to discuss and pray. Supplement with the creeds (memorize the Nicene Creed) and one primary source per quarter. In two years you\u2019ll have a theological education rivaling many seminarians\u2019 \u2014 and more importantly, a heart trained to "grow up in all things into Christ" (Ephesians 4:15). Start this week; future-you will thank present-you.`,
        prayer: `O God of the whole counsel \u2014 who has spoken truly, clearly, and sufficiently \u2014 I give you my mind. Teach me your Scriptures\u2019 authority, your triune being, Christ\u2019s person and work, your Spirit\u2019s power, humanity\u2019s dignity and fall, salvation\u2019s grace, your church\u2019s calling, and the end\u2019s sure hope. Make me neither a cold scholastic nor a careless enthusiast, but a theologian of worship: declaring your whole counsel, contending for the faith, speaking truth in love, and guarding the good deposit. Let my doctrine produce doxology, my doxology produce obedience, and my obedience produce mission \u2014 until the day theology becomes sight and I know even as I am known. In Jesus\u2019 name, amen.`,
        quiz: [
          {
            id: 'path-adv-3-study-q1',
            type: 'mc',
            prompt: 'Theological method\u2019s proper sequence is...',
            choices: ['Application first, then texts', 'Exegesis \u2192 biblical theology \u2192 systematic synthesis \u2192 historical awareness \u2192 application', 'History only', 'Speculation then proof-texts'],
            answer: 'Exegesis \u2192 biblical theology \u2192 systematic synthesis \u2192 historical awareness \u2192 application',
            explanation: 'Each step guards the others; skipping steps produces fragmentation, speculation, or dead orthodoxy.',
            tags: ['theology'],
          },
          {
            id: 'path-adv-3-study-q2',
            type: 'mc',
            prompt: 'In theological triage, baptism\u2019s mode and subjects belong to...',
            choices: ['First-order (gospel-essential)', 'Second-order (important, church-shaping, but godly Christians disagree)', 'Unimportant', 'Forbidden topics'],
            answer: 'Second-order (important, church-shaping, but godly Christians disagree)',
            explanation: 'Conviction with charity: important enough for church practice, not for breaking fellowship with all who differ.',
            tags: ['theology'],
          },
          {
            id: 'path-adv-3-study-q3',
            type: 'tf',
            prompt: 'Paul\u2019s "whole counsel of God" (Acts 20:27) implies systematic theology should cover all of Scripture\u2019s teaching, not just favorite doctrines.',
            answer: 'True',
            explanation: 'Selectivity breeds imbalance; the whole counsel produces maturity ("no longer children... carried about," Ephesians 4:14).',
            tags: ['theology'],
          },
          {
            id: 'path-adv-3-study-q4',
            type: 'mc',
            prompt: 'The Chicago Statement on Biblical Inerrancy (1978) addressed...',
            choices: ['Worship music', 'Scripture\u2019s without-error authority as theology\u2019s foundation', 'Church budgets', 'Political endorsements'],
            answer: 'Scripture\u2019s without-error authority as theology\u2019s foundation',
            explanation: 'Inerrancy undergirds authority: if Scripture errs, the system\u2019s foundation cracks.',
            tags: ['theology'],
          },
        ],
      },
    },
  },
];

/** Stub builder for the advanced path (same shape as intermediate stubs). */
function stubAdv(
  id: string,
  order: number,
  title: string,
  summary: string,
  concept: string,
  scripture: { ref: string; text: string }[],
  coreTeaching: string,
  reflection: string[],
  application: string,
  prayer: string,
  notes: { expanded: string; deep: string; study: string },
): LayeredLesson {
  const l = stubLesson(id, order, title, summary, concept, scripture, coreTeaching, reflection, application, prayer, notes);
  return { ...l, pathId: 'advanced' };
}

const ADVANCED_STUBS: LayeredLesson[] = [
  stubAdv(
    'path-adv-4', 4, 'Biblical Languages',
    'Opening the original tongues: Hebrew, Aramaic, and Greek \u2014 how word studies, grammar, and translation deepen (never replace) faithful reading.',
    'The Bible was written in Hebrew, Aramaic, and Greek; learning to use the original languages \u2014 even through tools \u2014 enriches exegesis and guards against error.',
    [
      { ref: 'Matthew 5:18', text: 'For most certainly, I tell you, until heaven and earth pass away, not even one smallest letter or one tiny pen stroke shall in any way pass away from the law, until all things are accomplished.' },
      { ref: '2 Timothy 2:15', text: 'Give diligence to present yourself approved by God, a workman who doesn\u2019t need to be ashamed, properly handling the Word of Truth.' },
    ],
    `Jesus affirmed the Old Testament down to its "smallest letter" and "tiny pen stroke" (Matthew 5:18) \u2014 God\u2019s word matters in its original detail. The Old Testament was written mostly in Hebrew (with Aramaic portions in Ezra, Daniel, and one verse in Jeremiah); the New Testament entirely in Koine Greek, the common tongue of the Roman world.

You don\u2019t need seminary Greek to benefit. Start with tools: an interlinear Bible, a concordance (Strong\u2019s numbers), and lexicons (BDAG for Greek, HALOT/BDB for Hebrew via study software). Learn the alphabets \u2014 even recognizing words transforms word studies. Understand that meaning comes from usage in context, not etymology: the classic fallacy is building sermons on a word\u2019s root rather than its actual use.

Key payoffs: seeing wordplays (lost in translation), grasping verb tenses (Greek aorist vs. present \u2014 "keep on asking" in Matthew 7:7\u2019s present imperatives), and weighing translation differences wisely. But remember: no major doctrine hangs on disputed lexical trivia, and godly scholars disagree on fine points. Languages serve exegesis; they never replace the Spirit, context, or the church\u2019s consensus. Use them as a workman\u2019s tools \u2014 with diligence and humility.`,
    [
      'What\u2019s one word study you could do this week with a concordance \u2014 e.g., "grace" (charis), "love" (agap\u0113), or "covenant" (berith)? What might usage-across-Scripture reveal?',
      'How do you currently handle translation differences between Bibles \u2014 confusion, curiosity, or indifference? What would a healthier approach look like?',
    ],
    `Learn the Greek alphabet this month (24 letters \u2014 a weekend\u2019s work) and get an interlinear New Testament or app. Pick John 1:1 and work through it word by word: look up logos, theos, \u0113n \u2014 noting how each is used elsewhere. Then compare three translations\u2019 renderings and ask why they differ. You\u2019ll never read "In the beginning was the Word" the same way again.`,
    `Lord of every language \u2014 who spoke creation into being and gave your word in Hebrew and Greek \u2014 thank you for the precision of your revelation down to letters and pen strokes. Give me diligence to study deeply and humility to hold fine points loosely. Let the original tongues serve my understanding, never my pride. In Jesus\u2019 name, amen.`,
    {
      expanded: `## Hebrew Essentials\nBiblical Hebrew\u2019s root system: most words built from three-consonant roots (e.g., q-d-sh, "holy"), with patterns modifying meaning \u2014 learn to recognize roots and you unlock vocabulary fast. Poetry\u2019s parallelism (synonymous, antithetic, synthetic) structures the Psalms and prophets. Key concepts: hesed (steadfast love/covenant loyalty \u2014 richer than "mercy"), shalom (wholeness/peace), nephesh (soul/life). Hebrew narrative\u2019s sparseness is deliberate \u2014 gaps invite meditation, not speculation.\n\n## Greek Essentials\nKoine Greek\u2019s precision tools: cases (nominative, genitive, dative, accusative) showing each word\u2019s function; verb aspect (aorist: whole action; present: ongoing; perfect: completed with continuing results \u2014 "it is written," gegraptai, perfect tense!); the article\u2019s subtleties ("the God" vs. "God" in John 1:1 \u2014 qualitative, not indefinite); prepositions\u2019 richness (en, eis, dia, hyper). Paul\u2019s long sentences (Ephesians 1:3-14 is one sentence in Greek!) carry arguments English chops into pieces \u2014 diagramming them reveals the logic.`,
      deep: `## Translation Theory\nFormal equivalence (word-for-word: KJV, ESV, NASB) prioritizes transparency to the original \u2014 best for study. Functional/dynamic equivalence (thought-for-thought: NIV, NLT) prioritizes readability \u2014 best for devotional flow. Paraphrases (The Message) are commentaries, not translations. No translation is perfect; all involve interpretation (e.g., "flesh" vs. "sinful nature" for sarx in Romans 8). The wise student compares several, consults the original where possible, and holds disputed renderings loosely. Textual variants (see the Manuscripts lesson) rarely affect meaning \u2014 and no doctrine depends on a disputed reading.\n\n## Avoiding Word-Study Fallacies\nD.A. Carson\u2019s classic warnings: the etymological fallacy (meaning from roots, not usage); illegitimate totality transfer (importing all a word\u2019s meanings into one occurrence); anachronism (reading later meanings back); and over-precision (treating synonyms as technical distinctions \u2014 agapa\u014d vs. phile\u014d in John 21 are largely stylistic variation, as John uses them interchangeably elsewhere). The rule: usage in context determines meaning \u2014 always. Let the languages humble your dogmatism and sharpen your care.`,
      study: `## A Self-Study Plan for the Languages\nYear 1 \u2014 Greek: work through a beginning grammar (one chapter per week), memorizing vocabulary with flashcards; read 1 John in Greek by year\u2019s end (simple syntax, profound theology). Year 2 \u2014 Hebrew: alphabet and pointing, noun patterns, then the strong verb; read Jonah or Ruth (narrative Hebrew is the gentlest entry). Throughout: use Bible software\u2019s parsing tools to check your work, not replace it; keep a vocabulary journal; translate one verse per day devotionally. Supplement with a linguistics primer (how languages actually work) to avoid amateur fallacies. Goal: not scholarship for its own sake but workmanlike handling of the word \u2014 "properly handling the Word of Truth" (2 Timothy 2:15) in its own tongues, to the glory of the God who spoke them.`,
    },
  ),
  stubAdv(
    'path-adv-5', 5, 'Historical Context',
    'The world behind the text: ancient Near Eastern culture, Second Temple Judaism, and the Greco-Roman world \u2014 illuminating Scripture without overwhelming it.',
    'Scripture was written in real history; understanding its ancient cultural, political, and religious context illuminates meaning and answers objections.',
    [
      { ref: 'Galatians 4:4', text: 'But when the fullness of the time came, God sent out his Son, born to a woman, born under the law,' },
      { ref: 'Acts 17:22-23', text: 'Paul stood in the middle of the Areopagus, and said, "You men of Athens, I perceive that you are very religious in all things. For as I passed along and observed the objects of your worship, I found also an altar with this inscription: \u2018TO AN UNKNOWN GOD.\u2019 What therefore you worship in ignorance, I announce to you."' },
    ],
    `The Bible didn\u2019t drop from the sky into a vacuum \u2014 God spoke "in the fullness of the time" (Galatians 4:4), into real cultures. Historical context is the "historical" half of the historical-grammatical method: what did this mean to people who lived then?

Three worlds matter most. The ancient Near East: Israel\u2019s neighbors \u2014 Egypt, Assyria, Babylon, Canaan \u2014 whose treaties illuminate biblical covenants (suzerain-vassal treaties mirror Deuteronomy\u2019s structure), whose creation/flood myths highlight Genesis\u2019 uniqueness (one sovereign God, creation good, humans dignified \u2014 not divine warfare and human slavery), and whose laws throw Moses\u2019 law into relief (Hammurabi vs. Sinai: similar forms, radically different justice and compassion).

Second Temple Judaism (516 BC\u2013AD 70): the world of Jesus and Paul \u2014 Pharisees, Sadducees, Essenes, zealots; synagogues; expectations of Messiah; the apocalyptic hope. Knowing this world explains the Gospels\u2019 conflicts (Sabbath disputes, purity debates) and Paul\u2019s arguments (justification against works-righteousness).

The Greco-Roman world: Roman roads, peace, and law (Paul\u2019s citizenship, his appeals); Greek language and philosophy (Paul quoting poets at Athens, Acts 17:28); mystery religions and emperor worship (Revelation\u2019s backdrop). Paul at the Areopagus models engagement: he studied their culture ("I observed the objects of your worship"), found a point of contact, and proclaimed Christ.

Context illuminates; it never overrides. Background serves the text \u2014 the text judges the background.`,
    [
      'Which biblical passage has confused you that historical background might clarify? What resource could you consult this week?',
      'How does Paul\u2019s Areopagus approach (study culture, find contact point, proclaim Christ) apply to engaging your own culture?',
    ],
    `Pick one book to background-study before reading it: for example, before reading Galatians, spend an hour learning about first-century Judaism\u2019s view of law and the Jerusalem council (Acts 15). Use a study Bible\u2019s introduction plus one article. Then read the letter \u2014 notice how much sharper Paul\u2019s arguments sound. Background first, text second, worship always.`,
    `Lord, you spoke in history \u2014 to real people in real cultures \u2014 and you speak to me now. Thank you for the fullness of your timing. Give me diligence to learn the worlds behind the text and wisdom to let background serve, never supplant, your word. Make me like Paul at Athens: culturally literate, gospel-faithful, and bold. In Jesus\u2019 name, amen.`,
    {
      expanded: `## The Ancient Near East and the Old Testament\nCovenant treaties: Hittite suzerainty treaties (preamble, historical prologue, stipulations, blessings/curses, witnesses) match Deuteronomy\u2019s structure \u2014 Moses\u2019 audience recognized the form: Yahweh as great King, Israel as vassal, with a crucial difference \u2014 covenant love, not mere power. Creation accounts: Enuma Elish\u2019s divine combat vs. Genesis 1\u2019s effortless "and God said" \u2014 polemic by contrast. Law codes: Hammurabi\u2019s lex talionis limited vengeance; Moses\u2019 law goes further \u2014 protecting slaves, foreigners, the poor (Exodus 22-23). Wisdom literature: Egyptian and Mesopotamian parallels show Proverbs\u2019 international form but Yahweh-centered content. Archaeology (Mari letters, Nuzi tablets, Ugarit) repeatedly illuminates customs \u2014 patriarchal practices, Canaanite religion \u2014 confirming the text\u2019s ancient roots.\n\n## Judaism and the New Testament\nKnow the parties: Pharisees (lay experts, oral tradition, resurrection hope), Sadducees (priestly aristocracy, Torah only, no resurrection), Essenes (separatist community \u2014 Qumran\u2019s Dead Sea Scrolls), Zealots (revolutionaries). Know the institutions: temple (sacrifices, priesthood), synagogue (Scripture reading, prayer \u2014 Jesus\u2019 and Paul\u2019s mission base), Sanhedrin. Know the hopes: Messiah as conquering king (hence the scandal of a crucified Messiah \u2014 1 Corinthians 1:23), the kingdom\u2019s arrival, resurrection. This world explains nearly every Gospel conflict and most of Paul\u2019s theology \u2014 justification by faith answers a Judaism of boundary-markers (circumcision, food laws, Sabbath) as identity badges.`,
      deep: `## Rome and the Church\u2019s World\nRoman power shaped the New Testament\u2019s stage: the census (Luke 2), Pilate\u2019s tribunal (John 18-19), Paul\u2019s citizenship and appeals (Acts 16, 22, 25), the imperial cult ("Caesar is lord" vs. "Jesus is Lord" \u2014 the church\u2019s most political claim), persecution under Nero and Domitian (Revelation\u2019s "Babylon"). Roman roads and sea routes enabled Paul\u2019s journeys; Roman law gave him platforms (Areopagus, Felix, Agrippa, Caesar\u2019s household \u2014 Philippians 4:22). Social structures \u2014 patronage, honor/shame, household codes (Ephesians 5-6; Colossians 3) \u2014 illuminate the epistles\u2019 ethics: Paul both uses and subverts them ("there is neither slave nor free," Galatians 3:28 \u2014 revolutionary in a slave economy).\n\n## Using Background Well: Promises and Pitfalls\nPromises: background resolves obscurities (what is a "yoke"? Gehenna? a "holy kiss"?), answers skeptics (archaeology\u2019s confirmations), and enriches preaching (the Good Shepherd against ancient shepherding). Pitfalls: parallelomania (forcing parallels \u2014 similarity isn\u2019t dependence); background overpowering text (reconstructing a "historical Jesus" against the Gospels); and chronological snobbery in reverse (assuming ancients were primitive). The rule: background proposes, the text disposes. Let archaeology and history serve exegesis \u2014 and let exegesis keep its throne.`,
      study: `## Building Historical Literacy\nA two-year plan: Year 1 \u2014 Old Testament world: read a solid ANE survey; study one background topic per month (covenant treaties, creation accounts, law codes, wisdom, prophecy\u2019s context, exile and return); visit a museum\u2019s ancient Near East collection if possible \u2014 artifacts make history tangible. Year 2 \u2014 New Testament world: Second Temple Judaism (read Josephus selections, the Dead Sea Scrolls\u2019 key texts); Greco-Roman background (daily life, philosophy, religion); Acts as a historical source (trace Paul\u2019s journeys on a map \u2014 geography is theology\u2019s stage). Throughout: keep a "background notebook" \u2014 one page per topic, with the biblical passages it illuminates. End goal: not trivia collection but text illumination \u2014 "the fullness of the time" (Galatians 4:4) appreciated, the incarnation\u2019s historical concreteness savored, and the gospel\u2019s first-century power felt afresh.`,
    },
  ),
  stubAdv(
    'path-adv-6', 6, 'Manuscripts & Transmission',
    'How the Bible reached us: ancient manuscripts, textual criticism, translations \u2014 and why we can trust the text we hold.',
    'God has preserved his word through thousands of manuscripts; textual criticism lets us recover the original text with remarkable confidence.',
    [
      { ref: 'Isaiah 40:8', text: 'The grass withers, the flower fades; but the word of our God stands forever.' },
      { ref: 'Matthew 24:35', text: 'Heaven and earth will pass away, but my words will by no means pass away.' },
    ],
    `We don\u2019t possess the apostles\u2019 original manuscripts (the autographs) \u2014 but we have something remarkable: for the New Testament, about 5,800 Greek manuscripts plus 10,000+ Latin and thousands in other languages, with fragments (like P52, a piece of John\u2019s Gospel) dating within decades of writing. No other ancient work comes close: Homer\u2019s Iliad has under 2,000 manuscripts, the earliest centuries after composition.

Hand-copying introduced variants \u2014 mostly trivial (spelling, word order). Textual criticism is the science of comparing manuscripts to recover the original wording: weighing external evidence (manuscript age, distribution, quality) and internal evidence (which reading best explains the others \u2014 scribes tended to smooth difficulties, not create them).

The result: the New Testament text is over 99% certain, and no doctrine depends on any disputed reading. Modern translations note significant variants in footnotes \u2014 transparency, not conspiracy. For the Old Testament, the Dead Sea Scrolls (discovered 1947) confirmed the Masoretic Text\u2019s remarkable accuracy across 1,000 years of copying \u2014 e.g., Isaiah\u2019s scroll predates Christ yet matches our Bibles.

God\u2019s promise stands: "my words will by no means pass away" (Matthew 24:35). We hold in our hands essentially what the apostles wrote \u2014 translated faithfully into our tongue. That\u2019s not blind faith; it\u2019s evidence-based confidence.`,
    [
      'How does the manuscript evidence for the New Testament compare to other ancient works you know? What does that comparison suggest?',
      'If no doctrine depends on any disputed textual variant, how should that shape debates about Bible translations?',
    ],
    `Compare three translations\u2019 footnotes on a known variant (e.g., Mark 16:9-20 or John 7:53-8:11 \u2014 check your Bible\u2019s notes) and read a short article on why scholars reach their conclusions. Notice: the process is transparent and the core text undisputed. Then thank God for preservation \u2014 and read the undisputed 99% with fresh confidence.`,
    `Lord, keeper of your word \u2014 thank you for preserving it through centuries of faithful copying, from scrolls in caves to the Bible in my hands. Thank you that heaven and earth will pass away but your words will not. Give me confidence grounded in evidence and humility before mysteries. Let me treasure the text \u2014 and obey it. In Jesus\u2019 name, amen.`,
    {
      expanded: `## How Textual Criticism Works\nExternal evidence: age (earlier generally better), geographical distribution (readings found across regions less likely to be local corruptions), and manuscript quality (careful vs. sloppy copying traditions \u2014 Alexandrian vs. Byzantine text-types). Internal evidence: transcriptional probability (which reading best explains the rise of the others? \u2014 the harder reading is often original, since scribes smoothed difficulties) and intrinsic probability (which reading best fits the author\u2019s style and theology?). Example: Mark 1:41 \u2014 "moved with compassion" vs. "moved with anger": anger is the harder reading (scribes would soften it), with decent manuscript support \u2014 many scholars now favor it, showing Jesus\u2019 emotional complexity. The method is detective work, not guesswork.\n\n## The Old Testament Text\nThe Masoretic Text (MT), standardized ~AD 1000, was long our basis \u2014 skeptics wondered about 2,000 years of copying. Then the Dead Sea Scrolls: a complete Isaiah scroll from ~125 BC, matching the MT\u2019s consonants ~95%, differences mostly spelling. The Septuagint (Greek OT, ~250 BC) and Samaritan Pentateuch provide additional witnesses; where they differ from the MT, scholars weigh each case. The conclusion: the Old Testament text is remarkably stable \u2014 God\u2019s promise that his word "stands forever" (Isaiah 40:8) visibly kept.`,
      deep: `## Famous Variants, Honestly Assessed\nMark 16:9-20 (the "longer ending"): absent from the earliest manuscripts; likely a later compilation of resurrection appearances \u2014 most Bibles bracket it. John 7:53-8:11 (the woman caught in adultery): absent from early manuscripts, though the story rings true to Jesus \u2014 probably authentic tradition, not originally John\u2019s. 1 John 5:7-8 (the "Comma Johanneum"): the Trinity\u2019s clearest proof-text \u2014 absent from Greek manuscripts before the 1500s; the doctrine stands on abundant other texts. None affects core doctrine \u2014 which itself testifies to the text\u2019s integrity: 2,000 years of copying couldn\u2019t corrupt the essentials. Honest footnotes are a feature, not a bug \u2014 they show scholarship\u2019s transparency.\n\n## Canon and Text: Related but Distinct\nTextual criticism asks "what did the author write?"; canon asks "which books are Scripture?" Both were settled by recognition, not invention: the church recognized apostolic books (see the earlier lesson) and preserved their text with extraordinary care. Modern critical editions (NA28/UBS5 for Greek; BHS for Hebrew) represent scholarly consensus \u2014 and every major translation is made from them. The takeaway: when you open your Bible, you read \u2014 to a certainty exceeding any other ancient book \u2014 the words God breathed out.`,
      study: `## Going Deeper into Textual Criticism\nA study track: (1) Read an introduction to textual criticism (one solid volume) \u2014 learn the manuscript families, the canons of criticism, and the major variants. (2) Work through ten famous variants yourself using an apparatus or commentary: list external and internal evidence, reach your own conclusion, then compare with scholars. (3) Study the canon\u2019s formation: the criteria (apostolicity, orthodoxy, catholicity), the key historical moments, and the heretical challenges (Marcion, Gnosticism) that forced clarity. (4) Evaluate translation philosophy (see Biblical Languages lesson) \u2014 compare how translations handle disputed texts. End by writing a 5-page paper: "Why I trust the Bible\u2019s text" \u2014 evidence-based, honest about variants, confident in preservation. You\u2019ll be equipped to answer skeptics and to reassure doubting believers \u2014 including yourself on hard days.`,
    },
  ),
  stubAdv(
    'path-adv-7', 7, 'Difficult Passages',
    'Facing the hard texts honestly: apparent contradictions, divine judgment, and morally troubling passages \u2014 with humility, context, and trust.',
    'Hard passages deserve honest wrestling, not avoidance: most difficulties resolve with context and genre, and all must be read in light of God\u2019s revealed character.',
    [
      { ref: '2 Peter 3:16', text: 'as also in all of his letters, speaking in them of these things. In those, there are some things that are hard to understand, which the ignorant and unsettled twist, as they do also to the other Scriptures, to their own destruction.' },
      { ref: 'Deuteronomy 29:29', text: 'The secret things belong to Yahweh our God; but the things that are revealed belong to us and to our children forever, that we may do all the words of this law.' },
    ],
    `Peter admits it: some Scriptures are "hard to understand" (2 Peter 3:16) \u2014 and mishandling them is dangerous. Honest Christians don\u2019t pretend difficulties away; they wrestle faithfully. A framework for hard texts:

First, categorize the difficulty. Apparent contradictions (did both thieves mock Jesus, or one? \u2014 compare Matthew 27:44 with Luke 23:39-43): most resolve with careful reading \u2014 different perspectives, complementary details, or sequential events. The resurrection accounts differ in detail precisely because they\u2019re independent witnesses, not collusion.

Second, divine judgment passages (the flood, Canaan\u2019s conquest, Ananias and Sapphira): read them within the whole canon \u2014 God\u2019s patience first (Genesis 15:16 gave Canaan 400 years), the wickedness judged (child sacrifice, etc.), and God\u2019s right as Creator and Judge. We\u2019re not asked to enjoy these texts but to reckon with holiness: "our God is a consuming fire" (Hebrews 12:29) \u2014 and the same God bore that fire at the cross.

Third, morally troubling texts (imprecatory psalms, slavery regulations, gender passages): distinguish description from prescription, principle from cultural form, and progressive revelation\u2019s trajectory \u2014 then let the clear (God is love, 1 John 4:8) interpret the unclear, never reverse.

Finally, trust and wait: "the secret things belong to Yahweh" (Deuteronomy 29:29). Some tensions remain this side of heaven \u2014 faith holds what it can\u2019t yet harmonize, anchored in Christ, the clearest revelation of God\u2019s character.`,
    [
      'Which difficult passage have you avoided or been troubled by? What would honest wrestling \u2014 rather than avoidance or dismissal \u2014 look like?',
      'How does anchoring hard texts in God\u2019s character revealed in Christ keep you from both dismissing Scripture and maligning God?',
    ],
    `Choose one difficult passage that\u2019s bothered you and work it for two weeks: read it in three translations, study its context and genre, consult two trusted commentaries, and write a one-page "honest assessment" \u2014 what\u2019s clear, what\u2019s resolved, what remains mysterious, and why you still trust God. Wrestling builds stronger faith than avoidance ever could.`,
    `Lord, you are not afraid of my questions \u2014 so I bring you the hard texts honestly. Give me diligence to study, humility to admit mystery, and faith to trust your character when I can\u2019t trace your hand. Keep me from twisting Scriptures to my destruction; anchor me in Christ, your clearest word. The secret things are yours; the revealed things are mine to obey. In Jesus\u2019 name, amen.`,
    {
      expanded: `## Apparent Contradictions: A Method\nWork systematically: (1) Verify the problem \u2014 read both passages fully in context; many "contradictions" are misreadings. (2) Consider perspective differences \u2014 two witnesses describing one event from different angles (the blind men at Jericho: Matthew 20:30 mentions two, Mark 10:46 names Bartimaeus \u2014 Mark focuses on one). (3) Consider sequence \u2014 events narrated selectively (both thieves mocked at first; one repented \u2014 Matthew 27:44 and Luke 23:39-43 harmonize chronologically). (4) Consider genre and idiom \u2014 phenomenological language ("the sun rose"), round numbers, hyperbole. (5) Hold unresolved cases loosely: an unharmonized difficulty is not a disproof \u2014 it\u2019s an invitation to further study, held within massive positive evidence for Scripture\u2019s reliability.\n\n## The Conquest of Canaan Up Close\nThe hardest Old Testament texts deserve the most careful treatment. Context: 400 years of divine patience (Genesis 15:16); Canaanite practices included child sacrifice and ritual prostitution (Deuteronomy 12:31; Leviticus 18). The command was judicial, not ethnic \u2014 Israel faced the same judgment for the same sins (Deuteronomy 28; the exile). It was historically limited, not a standing order \u2014 and the New Testament explicitly reframes warfare as spiritual (Ephesians 6:12). God as Creator has rights over life that creatures don\u2019t; his justice is real even when his mercy is our focus. We tremble before these texts \u2014 as we should \u2014 and we see at the cross how seriously God takes sin: he judged it fully, in Christ, for us.`,
      deep: `## Imprecatory Psalms and Holy Anger\nPsalms that pray judgment on enemies (69, 109, 137) shock modern readers \u2014 "blessed shall he be who takes your little ones and dashes them against the rock" (137:9). Read them rightly: they\u2019re prayers, not programs \u2014 the psalmist hands vengeance to God rather than taking it himself (Romans 12:19). They express righteous indignation at real evil (137\u2019s context: Babylon\u2019s atrocities). They\u2019re ultimately messianic \u2014 quoted of Christ\u2019s suffering (Psalm 69:21 \u2192 John 19:28-29) and of judgment on his betrayers (Psalm 109:8 \u2192 Acts 1:20). And they teach us to pray our anger honestly to God rather than acting on it \u2014 a pastoral gift. The trajectory: personal imprecations give way to Christ\u2019s "Father, forgive them" (Luke 23:34) and Stephen\u2019s echo (Acts 7:60) \u2014 while final judgment remains God\u2019s prerogative (Revelation 19).\n\n## Slavery, Gender, and Trajectory\nThe Bible regulates slavery without endorsing it \u2014 and plants the seeds of its abolition: every person bears God\u2019s image (Genesis 1:27), kidnapping is capital (Exodus 21:16), Paul calls the slave Onesimus "a brother" (Philemon 1:16), and "there is neither slave nor free... in Christ Jesus" (Galatians 3:28). The trajectory from regulation to abolition is the Bible\u2019s own logic \u2014 which is why Christians led abolition movements. Similarly with gender: the Bible affirms male-female equality in dignity and gifting while assigning distinct roles \u2014 read each passage in its redemptive-historical place, letting the clearest texts (Genesis 1:27; Galatians 3:28; Ephesians 5:25) frame the debated ones. Trajectory hermeneutics: ask not only "what did this command then?" but "where is the canon heading?" \u2014 and move with it.`,
      study: `## A Difficult-Texts Research Project\nBuild a personal "hard passages file" over six months: each entry with the text, the difficulty stated fairly (steelman the objection), your research (context, genre, commentaries, cross-references), your best resolution, what remains mysterious, and the pastoral takeaway. Cover at least: one apparent contradiction (resurrection accounts), one judgment text (the flood or conquest), one imprecation (Psalm 137), one slavery/gender text, one theological tension (divine sovereignty and human responsibility \u2014 Romans 9 and 1 Timothy 2:4), and one eschatological puzzle. End by writing a 10-page paper: "How to wrestle faithfully with hard texts" \u2014 method, examples, and testimony. You\u2019ll emerge with tested faith, honest answers for others, and the humility that only wrestling produces. The goal isn\u2019t eliminating all tension \u2014 it\u2019s trusting the God who\u2019s bigger than our questions.`,
    },
  ),
  stubAdv(
    'path-adv-8', 8, 'Major Theological Debates',
    'Navigating the church\u2019s great disagreements \u2014 sovereignty and freedom, baptism, gifts, the millennium \u2014 with conviction, charity, and triage.',
    'Godly Christians disagree on important doctrines; theological triage \u2014 ranking truths by importance \u2014 lets us contend without dividing unnecessarily.',
    [
      { ref: 'Ephesians 4:14-15', text: 'that we may no longer be children, tossed back and forth and carried about with every wind of doctrine, by the trickery of men, in craftiness, after the wiles of error; but speaking truth in love, we may grow up in all things into him who is the head, Christ.' },
      { ref: '2 Timothy 2:24-25', text: 'The Lord\u2019s servant must not quarrel, but be gentle toward all, able to teach, patient, in gentleness correcting those who oppose him: if perhaps God may give them repentance leading to a full knowledge of the truth,' },
    ],
    `Every generation of Christians has debated important doctrines \u2014 and every generation needs wisdom for disagreeing well. The key tool is theological triage: ranking doctrines by importance.

First-order doctrines are gospel-essential: the Trinity, Christ\u2019s full deity and humanity, his bodily resurrection, salvation by grace through faith alone, Scripture\u2019s authority. Deny these and Christianity collapses \u2014 division here is necessary (Galatians 1:8-9; 1 John 4:2-3).

Second-order doctrines are church-shaping but not gospel-destroying: baptism\u2019s mode and subjects (infant vs. believer\u2019s), church government (elder-led, congregational, episcopal), the millennium\u2019s nature, the continuation of miraculous gifts. Godly, Bible-believing Christians disagree \u2014 with conviction, but recognizing the other side\u2019s orthodoxy. These properly shape which church you join, not whether you break fellowship.

Third-order matters are adiaphora \u2014 things indifferent: worship styles, Bible translations, eschatological details, alcohol, schooling choices. Liberty reigns (Romans 14).

The great debates map onto these orders. Sovereignty vs. human freedom (Calvinism vs. Arminianism): both sides affirm grace alone and human responsibility \u2014 the debate is how they fit. Most place it second-order (some first). Baptism: second-order \u2014 both sides baptize in the triune name. Gifts: second-order. Millennium: second-order. The rule: "speaking truth in love" (Ephesians 4:15) \u2014 conviction about truth, gentleness toward people. "The Lord\u2019s servant must not quarrel" (2 Timothy 2:24) \u2014 debate ideas vigorously; love people consistently.`,
    [
      'Which theological debate tempts you most toward quarrelsomeness or contempt? What would "speaking truth in love" look like there?',
      'Apply triage to a disagreement in your church or circle: is it first, second, or third order \u2014 and are you treating it accordingly?',
    ],
    `Pick one debate you\u2019ve only heard from your side and study the other side fairly for two weeks: read its best advocates (not its worst caricatures), list its strongest biblical arguments, then write a one-page steelman \u2014 the other view stated so well its defenders would approve. Then decide your position with reasons. You may not change your mind \u2014 but you\u2019ll debate like a Christian, not a partisan.`,
    `Lord, lover of truth and of people \u2014 give me conviction without contempt. Teach me triage: to contend earnestly for the gospel, to hold secondary doctrines firmly yet charitably, and to grant liberty where you grant it. Make me gentle, patient, and able to teach \u2014 never quarrelsome. Unite your church in essentials; keep me humble in all. In Jesus\u2019 name, amen.`,
    {
      expanded: `## Sovereignty and Freedom: The Classic Tension\nCalvinism emphasizes God\u2019s sovereign election (Romans 9; Ephesians 1:4-5): salvation from first to last is God\u2019s work; faith itself his gift. Arminianism emphasizes human response-ability (John 3:16; 1 Timothy 2:4; 2 Peter 3:9): God\u2019s grace is resistible; election is conditioned on foreseen faith. Both affirm what Scripture affirms \u2014 divine sovereignty and human responsibility \u2014 and both face mysteries: Calvinism, how God\u2019s sovereignty coexists with genuine human choice; Arminianism, how God\u2019s foreknowledge relates to his purposes. Key texts for study: Romans 8:28-30; 9; Ephesians 1:3-14; John 6:37-44; 1 Timothy 2:3-4; 2 Peter 3:9. Whatever you conclude, preach the gospel to all (the command is universal) and pray for all (God commands it) \u2014 practice unites what theory debates.\n\n## Baptism and the Church\u2019s Children\nPaedobaptists (infant baptism): the covenant argument \u2014 circumcision marked covenant children (Genesis 17); baptism is the new covenant\u2019s sign (Colossians 2:11-12); household baptisms (Acts 16:33) suggest inclusion. Credobaptists (believer\u2019s baptism): the New Testament pattern \u2014 repent, believe, then be baptized (Acts 2:38); no clear infant baptism text; baptism as conscious identification (Romans 6:3-4). Both baptize in the triune name; both affirm baptism\u2019s importance; both have godly scholars and centuries of practice. Study Romans 6, Colossians 2, Acts 2, and the covenant arguments \u2014 then hold your view with conviction while honoring the other as Christian.`,
      deep: `## Gifts of the Spirit: Continuation or Cessation?\nContinuationists: the Spirit\u2019s miraculous gifts (tongues, prophecy, healing) continue today \u2014 1 Corinthians 12-14 gives no expiration date; "do not forbid speaking in tongues" (14:39); church history shows ongoing occurrences. Cessationists: the revelatory and sign gifts served a foundational era (Ephesians 2:20 \u2014 apostles and prophets as foundation); 1 Corinthians 13:8-10\u2019s "when the perfect comes" points to the canon\u2019s completion; the New Testament itself shows gifts fading (Paul couldn\u2019t heal Timothy\u2019s stomach, 1 Timothy 5:23, or Trophimus, 2 Timothy 4:20). Both affirm the Spirit\u2019s power today; both warn against abuse \u2014 continuationists against quenching, cessationists against counterfeit. Test everything: does it exalt Christ (1 John 4:1-3), align with Scripture (Isaiah 8:20), and produce godliness (Matthew 7:15-20)?\n\n## The Millennium and Israel\nPremillennialism: Christ returns before a literal 1,000-year earthly reign (Revelation 20); often (not always) includes a future for ethnic Israel (Romans 11:25-26) and a pre-tribulation rapture (dispensational forms). Amillennialism: the millennium symbolizes the present church age \u2014 Christ reigns now from heaven; his return brings the eternal state. Postmillennialism: the gospel will progressively triumph before Christ\u2019s return. Study Revelation 20, Romans 11, 1 Corinthians 15:20-28, 1 Thessalonians 4-5. Note: all three affirm Christ\u2019s bodily return, final judgment, and new creation \u2014 the debated details are second-order. Hold your view, love those who differ, and live ready regardless: "everyone who has this hope in him purifies himself" (1 John 3:3).`,
      study: `## A Debate Study Method\nFor any major debate, work this method over a month: (1) Define terms precisely \u2014 most debates dissolve into semantics; insist on definitions. (2) Collect each side\u2019s key texts \u2014 read them in context, not as proof-texts. (3) Read the best advocate of each side (not popular caricatures \u2014 read scholars). (4) Write a steelman of each position \u2014 so fair the other side would sign it. (5) Identify the real dividing issue \u2014 often a hermeneutical or philosophical presupposition beneath the biblical texts. (6) Reach a tentative conclusion with a confidence level (first/second/third order) \u2014 and name what could change your mind. (7) Discuss with someone who disagrees \u2014 practicing 2 Timothy 2:24-25\u2019s gentleness. Do this for two debates this year. You\u2019ll gain convictions that survive scrutiny \u2014 and the charity that survives disagreement. That\u2019s theological maturity.`,
    },
  ),
  stubAdv(
    'path-adv-9', 9, 'Comparing Interpretations',
    'Evaluating competing readings fairly: weighing exegetical arguments, testing traditions, and deciding with humility and conviction.',
    'Faithful interpreters compare competing readings by exegesis, canonical fit, and historical wisdom \u2014 deciding firmly where Scripture is clear and humbly where it isn\u2019t.',
    [
      { ref: 'Acts 17:11', text: 'Now these were more noble than those in Thessalonica, in that they received the word with all readiness of mind, examining the Scriptures daily to see whether these things were so.' },
      { ref: '1 Thessalonians 5:21', text: 'Test all things, and hold firmly that which is good.' },
    ],
    `You will constantly encounter competing interpretations \u2014 of baptism, the millennium, spiritual gifts, election, creation\u2019s timing. The noble Bereans\u2019 model: receive teaching eagerly, then "examine the Scriptures daily to see whether these things were so" (Acts 17:11). "Test all things, and hold firmly that which is good" (1 Thessalonians 5:21). Here\u2019s how.

First, understand each view on its own terms \u2014 steelman before you critique. Read the best defenders, not the worst caricatures. Ask: what biblical texts drive this view? What problem is it solving? What would its advocates say is at stake?

Second, weigh exegetically: which reading best fits the text\u2019s context, genre, grammar, and historical setting? Which handles all the relevant passages \u2014 not just favorites? Beware views that explain one verse brilliantly while ignoring ten others.

Third, test canonically: does this view cohere with Scripture\u2019s clear teaching elsewhere (the analogy of faith)? Does it fit the Bible\u2019s storyline and center on Christ? Novel readings that contradict the church\u2019s historic consensus bear a heavy burden of proof.

Fourth, decide with appropriate confidence: some issues are clear (first-order \u2014 decide firmly); others genuinely difficult (hold with humility). It\u2019s mature to say "I lean X, but I could be wrong" about second-order matters \u2014 and immature to be dogmatic everywhere or doubtful everywhere.

Finally, relate charitably: you can fellowship deeply with Christians who disagree on secondary matters. Truth matters \u2014 and so does love.`,
    [
      'What competing interpretations are you currently weighing? Have you steelmanned the other side \u2014 or only heard caricatures?',
      'Where do you need more conviction (treating clear truth as uncertain) \u2014 or more humility (treating debatable matters as certain)?',
    ],
    `Take one disputed interpretation you\u2019ve adopted mostly by tradition and test it this month: list its key texts, read one strong defense of the alternative view, write a fair comparison (strengths/weaknesses of each), and reach a reasoned conclusion \u2014 noting your confidence level. Share your findings with a mentor. Testing strengthens true convictions and corrects false ones; either outcome is gain.`,
    `Lord, giver of discernment \u2014 make me noble like the Bereans: eager to receive, diligent to examine. Teach me to test all things and hold firmly to what is good. Give me conviction where your word is clear and humility where it isn\u2019t. Keep me from both gullibility and cynicism \u2014 and from ever valuing winning over truth, or truth over love. In Jesus\u2019 name, amen.`,
    {
      expanded: `## Case Study: The Days of Genesis 1\nCompeting readings: (1) Calendar-day (24-hour days, young earth): "evening and morning" + numbered days throughout Scripture mean normal days; Exodus 20:11 grounds the Sabbath in six literal days. (2) Day-age (long eras): "day" (yom) can mean an age (as in "the day of the Lord"); nature\u2019s apparent age needs accounting. (3) Framework (literary structure): days 1-3 (forming) parallel days 4-6 (filling) \u2014 a poetic architecture, not chronology; the text\u2019s theology (God\u2019s ordered sovereignty) is the point. (4) Analogical day (God\u2019s workdays analogous to ours). Evaluate each: exegetical fit (what does yom + evening/morning + number signify elsewhere?), canonical coherence (how does each handle Exodus 20:11? Romans 5:12?), and theological stakes (all affirm God as Creator; the gospel doesn\u2019t hang on the timeline \u2014 though biblical authority does shape how we weigh each). Notice: godly scholars hold each view. Practice triage: creation ex nihilo by God \u2014 first-order; the days\u2019 precise nature \u2014 second/third.\n\n## Case Study: Divine Sovereignty and Human Freedom\nAlready covered in the debates lesson \u2014 revisit it as an interpretations comparison: collect Romans 9, Ephesians 1, John 6, 1 Timothy 2:4, 2 Peter 3:9; read one Calvinist and one Arminian exegete on each; note where each reading shines and strains. The skill being trained: holding biblical tensions without flattening them \u2014 letting each text speak fully, even when synthesis is mysterious.`,
      deep: `## Evaluating Theological Systems\nMove beyond single issues to whole systems: covenant theology vs. dispensationalism (continuity/discontinuity, Israel/church, hermeneutics of prophecy); Calvinism vs. Arminianism (sovereignty/freedom, atonement\u2019s extent); charismatic vs. cessationist (Spirit\u2019s gifts today). For each system: (1) State its core distinctives fairly. (2) Identify its controlling hermeneutic \u2014 what principle organizes its reading? (3) List its strongest biblical arguments. (4) List the texts it handles least well \u2014 every system has them; honesty requires admitting it. (5) Assess its historical pedigree and fruit. (6) Decide where you land \u2014 and what would change your mind. Systems are tools, not identities: be a Christian first, a system\u2019s adherent second. The moment a system matters more than the text, the system has become an idol.\n\n## When Smart People Disagree\nWhy do brilliant, godly scholars reach opposite conclusions? Presuppositions (philosophical frameworks), weighting (which texts are "clear" vs. "difficult" differs), tradition (we all read within streams), and genuine biblical tension (Scripture holds paradoxes \u2014 divine sovereignty and human responsibility \u2014 that no system fully resolves). This should produce humility, not skepticism: truth is real and knowable on essentials; on some matters, the very best minds differ \u2014 which tells you something about the matter\u2019s difficulty, not truth\u2019s existence. Learn from all sides; decide where you must; hold loosely where you should; love always.`,
      study: `## A Comparative Interpretations Project\nOver three months, work through three disputed issues using the full method: one exegetical (e.g., the Genesis days), one theological (e.g., the millennium), one practical (e.g., baptism). For each: (1) Write the question precisely. (2) Survey the major views with their key texts. (3) Read one top-tier defender per view. (4) Do your own exegesis of the 3-5 most decisive passages. (5) Write a 5-page comparative analysis: views, arguments, weaknesses, your conclusion with confidence level. (6) Discuss with a pastor or mentor \u2014 inviting correction. Compile the three papers into a personal reference document. You\u2019ll own your convictions \u2014 tested, text-grounded, and charitable. And you\u2019ll have learned the meta-skill: how to think theologically about anything the church debates, now and for the rest of your life.`,
    },
  ),
  stubAdv(
    'path-adv-10', 10, 'Advanced Bible Study',
    'Mastering the tools of deep study: original languages, commentaries, biblical theology, and a lifelong plan for knowing Scripture deeply.',
    'Advanced Bible study combines exegesis, biblical theology, historical awareness, and prayerful dependence \u2014 in a sustainable lifelong rhythm.',
    [
      { ref: 'Ezra 7:10', text: 'For Ezra had set his heart to study the law of Yahweh, and to do it, and to teach his statutes and ordinances in Israel.' },
      { ref: 'Hebrews 5:14', text: 'But solid food is for those who are full grown, who by reason of use have their senses exercised to discern good and evil.' },
    ],
    `Ezra\u2019s pattern is the advanced student\u2019s charter: "he had set his heart to study the law of Yahweh, and to do it, and to teach" (Ezra 7:10) \u2014 study, obedience, teaching, in that order. Advanced study isn\u2019t about impressing others with knowledge; it\u2019s about knowing God deeply and serving his people faithfully.

The advanced toolkit builds on everything in this path. Exegesis: work in the original languages where possible (or with strong tools); outline the author\u2019s argument; do word studies by usage, not etymology. Biblical theology: trace themes canon-wide; read each passage in redemptive-historical context. Historical awareness: know the world behind the text; learn from the church\u2019s interpretive tradition. Systematics: synthesize findings into coherent doctrine; test against the analogy of faith.

Use commentaries wisely: first wrestle with the text yourself (observation, outline, questions), then consult \u2014 starting with one solid expository commentary, then a technical one for hard passages. Commentaries are conversation partners, not oracles: weigh their arguments, check their exegesis, and never let them replace your own study.

And keep the main thing the main thing: "solid food is for those who... have their senses exercised" (Hebrews 5:14) \u2014 maturity is proven by discernment and obedience, not information. The goal of advanced study is advanced godliness: deeper worship, holier living, more faithful teaching. Study to do; do to teach.`,
    [
      'Where are you in Ezra\u2019s sequence \u2014 studying, doing, teaching? Which link needs strengthening?',
      'What would a sustainable "advanced" study rhythm look like in your actual life \u2014 not an ideal, but your real schedule?',
    ],
    `Design your personal study plan this week: choose one book to master over the next three months (Ephesians, Hebrews, or Isaiah are excellent), select one commentary to work through alongside, set a weekly study appointment, and identify one person you\u2019ll teach what you learn. Start this week \u2014 "by reason of use," senses are exercised. Mastery comes to those who begin.`,
    `Lord, like Ezra I set my heart to study your word, to do it, and to teach it. Make me a workman who needs no shame: diligent in exegesis, steeped in your story, aware of history, coherent in doctrine \u2014 and above all, obedient and useful to your people. Let my study end in worship, my worship in obedience, and my obedience in teaching others. Until I know even as I am known. In Jesus\u2019 name, amen.`,
    {
      expanded: `## The Commentator\u2019s Workshop\nBuild a commentaries strategy: (1) Start with expository sets that model faithful preaching (e.g., volumes that stay close to the text\u2019s flow). (2) Add one technical commentary per book you study deeply \u2014 for grammar, background, and hard passages. (3) Consult across traditions on disputed texts \u2014 hearing the other side sharpens your own exegesis. (4) Read introductions carefully: authorship, date, occasion, and structure shape everything. (5) Use Bible dictionaries and encyclopedias for background; atlases for geography; timelines for chronology. Digital tools (Bible software) multiply efficiency \u2014 original-language parsing, cross-references, and library search in seconds. But tools serve study; they don\u2019t replace the slow work of thinking. The best commentary is the one you\u2019ve wrestled with, not just read.\n\n## From Study to Teaching\nTeaching is study\u2019s final exam \u2014 and its greatest multiplier. Prepare lessons and sermons from your exegesis: structure around the text\u2019s own shape (not your outline imposed on it), aim each session at head (understanding), heart (affections), and hands (obedience). Write out your main point in one sentence \u2014 if you can\u2019t, you\u2019re not ready. Anticipate questions; illustrate from life; apply specifically. Then invite feedback: did the teaching reflect the text? Where was it unclear? The teacher learns twice \u2014 and the church grows as you give away what you\u2019ve gained.`,
      deep: `## Biblical Theology as a Study Method\nMake biblical theology your advanced-study engine: for any book or passage, ask the redemptive-historical questions \u2014 Where are we in the story? What has God already revealed? What\u2019s new here? How does this anticipate Christ? Trace the book\u2019s themes forward and backward: e.g., studying Hebrews, trace "rest" from Genesis 2 through the exodus, the psalms, and Jesus\u2019 "I will give you rest" to Hebrews 4\u2019s "Sabbath rest" and Revelation\u2019s consummation. This method prevents both moralism (flattening narratives into life-lessons) and fragmentation (verses without context). It also fuels preaching that\u2019s canonically rich: every text preached with its storyline address \u2014 creation, fall, redemption, consummation \u2014 and its Christ-connection.\n\n## The Scholar\u2019s Devotion\nAdvanced study\u2019s greatest danger is professional distance \u2014 knowing about God without knowing God. Guard the devotion: begin every study session with prayer (Psalm 119:18); end with worship and obedience commitments; keep a "worship journal" alongside your exegetical notes \u2014 what did this text show you about God worth praising? Maintain devotional reading distinct from study reading: lectio divina\u2019s slow savoring alongside exegesis\u2019s careful analysis. Remember the scholars who finished well \u2014 Augustine\u2019s "our hearts are restless," Calvin\u2019s doxologies, Edwards\u2019 resolutions \u2014 all united rigorous study with burning devotion. The mind\u2019s fullness should never empty the heart.`,
      study: `## A Lifetime Study Plan\nYear 1-2: Master the method \u2014 work through 4-6 books deeply (one per quarter) using the full exegetical workflow; begin Greek (alphabet to reading 1 John); build your commentary shelf strategically. Year 3-4: Go canonical \u2014 read the whole Bible annually with a redemptive-historical lens; trace 6 major themes (covenant, kingdom, temple, sacrifice, exile, wisdom) across the canon in writing; begin Hebrew. Year 5+: Teach regularly \u2014 a small group, a class, mentoring one person; write up your studies (articles, lessons, a commentary on one book); read historical theology alongside exegesis. Throughout: memorize Scripture systematically (one passage per month); pray the word daily; keep short accounts with God. Review annually: what did I learn? Whom did I teach? How did I obey? The advanced student\u2019s epitaph should read like Ezra\u2019s life: studied, did, taught \u2014 to the glory of God.`,
    },
  ),
];

/* ------------------------------------------------------------------ */
/* Assembly + lookups                                                 */
/* ------------------------------------------------------------------ */

export const LAYERED_LESSONS: LayeredLesson[] = [
  ...BEGINNER,
  ...BEGINNER_B,
  ...BEGINNER_C,
  ...BEGINNER_D,
  ...BEGINNER_E,
  ...INTERMEDIATE_FULL,
  ...INTERMEDIATE_FULL_B,
  ...INTERMEDIATE_STUBS,
  ...ADVANCED_FULL,
  ...ADVANCED_STUBS,
];

export function getLayeredLesson(id: string): LayeredLesson | undefined {
  return LAYERED_LESSONS.find((l) => l.id === id);
}

export function getPathLessons(pathId: string): LayeredLesson[] {
  return LAYERED_LESSONS.filter((l) => l.pathId === pathId).sort((a, b) => a.order - b.order);
}
