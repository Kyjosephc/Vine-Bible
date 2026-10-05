import type { QuizQuestion } from '@/lib/types';

export interface Lesson {
  id: string;
  title: string;
  body: string;
  keyTerms: { term: string; definition: string }[];
  quiz: QuizQuestion[];
  prayer: string;
}

export const BEGINNER_PATH: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'What Is the Bible?',
    body: `## One Book, Many Books
The Bible is actually a library: 66 books written over roughly 1,500 years by more than 40 authors — kings, fishermen, prophets, a doctor, a tax collector — on three continents and in three languages. Yet it tells one unified story: God's plan to rescue humanity and restore creation through Jesus Christ. That unity across centuries is the first clue that the Bible is more than human literature.

## God's Word in Human Words
Christians believe the Bible is "God-breathed" (2 Timothy 3:16) — inspired by God while written through real human personalities. Luke investigated carefully like a historian (Luke 1:1-4); David poured out poetry; Paul reasoned like a theologian. God didn't dictate mechanically; he worked through each author's mind, style, and experience. The result is fully human and fully divine — like Christ himself.

## What the Bible Does
Scripture describes itself as a lamp (Psalm 119:105), a sword (Ephesians 6:17), food (Matthew 4:4), and a mirror (James 1:23-25). It reveals who God is, who we are, and what God has done to save us. "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness" (2 Timothy 3:16, WEB). Its central subject, from Genesis to Revelation, is Jesus Christ (Luke 24:27).

## How to Approach It
Come to the Bible expecting to meet God, not just gather information. Read prayerfully, read regularly, and read with others — the church has always read Scripture in community. Start with one of the Gospels (Mark is shortest), and don't be discouraged by difficult passages; even Peter admitted Paul's letters contain things "hard to understand" (2 Peter 3:16).`,
    keyTerms: [
      { term: 'Inspiration', definition: 'The belief that God guided the human authors of Scripture so that their writings are his word.' },
      { term: 'Canon', definition: 'The recognized list of 66 books that make up the Bible.' },
      { term: 'Testament', definition: 'Meaning "covenant" — the Old Testament records God\'s covenant with Israel; the New records the new covenant in Christ.' },
      { term: 'Revelation', definition: 'God making himself known to humanity — supremely through Scripture and through Jesus Christ.' },
    ],
    quiz: [
      { id: 'lesson-1-q1', type: 'mc', prompt: 'About how many books are in the Bible?', choices: ['27', '66', '40', '150'], answer: '66', explanation: 'The Protestant canon contains 66 books: 39 in the Old Testament and 27 in the New.', tags: ['theology'] },
      { id: 'lesson-1-q2', type: 'tf', prompt: 'Christians believe the Bible was written by God dictating every word mechanically, bypassing human personality.', answer: 'False', explanation: 'Scripture is "God-breathed" (2 Timothy 3:16) — God worked through real human authors with distinct styles and personalities.', tags: ['theology'] },
      { id: 'lesson-1-q3', type: 'mc', prompt: 'According to Luke 24:27, who is the central subject of all Scripture?', choices: ['Israel', 'Jesus Christ', 'The church', 'Moral living'], answer: 'Jesus Christ', explanation: 'Jesus taught that all the Scriptures testify about him.', tags: ['theology', 'jesus-ministry'] },
      { id: 'lesson-1-q4', type: 'mc', prompt: 'Which Gospel is the shortest and a good starting point for new readers?', choices: ['Matthew', 'Mark', 'Luke', 'John'], answer: 'Mark', explanation: 'Mark is the shortest Gospel — fast-paced and action-focused, ideal for first-time readers.', tags: ['nt-overview'] },
    ],
    prayer: `Father, thank you for speaking. Thank you for a book that is both ancient and alive, human and divine. As I begin learning your word, open my eyes to see wonderful things in it. Make me not just a learner but a lover of Scripture. In Jesus' name, amen.`,
  },
  {
    id: 'lesson-2',
    title: 'How the Bible Is Organized',
    body: `## Two Testaments
The Bible divides into the Old Testament (39 books) and New Testament (27 books). "Testament" means covenant — the Old records God's covenant with Israel, pointing forward to a promised Savior; the New records the new covenant established by Jesus's death and resurrection. The Old was written mostly in Hebrew (with some Aramaic); the New entirely in Greek.

## Old Testament Sections
The Old Testament has four parts. The **Pentateuch** (Genesis–Deuteronomy): the five books of Moses — creation, the patriarchs, the exodus, and the Law. **History** (Joshua–Esther): Israel's conquest, kingdom, exile, and return. **Poetry & Wisdom** (Job–Song of Songs): Psalms, Proverbs, and reflections on suffering, love, and life. **Prophets** (Isaiah–Malachi): Major Prophets (longer books) and Minor Prophets (shorter) calling Israel back to God and foretelling the Messiah.

## New Testament Sections
The New Testament also has four parts. The **Gospels** (Matthew–John): four accounts of Jesus's life, death, and resurrection — not biographies in the modern sense but proclamations of good news. **History** (Acts): the spread of the church through the apostles. **Letters** (Romans–Jude): Epistles teaching doctrine and Christian living to churches and individuals. **Prophecy** (Revelation): John's vision of Christ's victory and the new creation.

## Finding Your Way
Every verse has an address: book, chapter, verse. "John 3:16" means the Gospel of John, chapter 3, verse 16. Chapters were added in the 1200s and verses in the 1500s to help navigation — they're not inspired, but they're useful. Most Bibles include a table of contents; with practice, you'll learn the order. Don't feel you must read cover to cover immediately — but knowing the map helps every journey.`,
    keyTerms: [
      { term: 'Pentateuch', definition: 'The first five books of the Bible (Genesis–Deuteronomy), traditionally attributed to Moses.' },
      { term: 'Gospels', definition: 'The four New Testament accounts of Jesus\'s life, death, and resurrection (Matthew, Mark, Luke, John).' },
      { term: 'Epistles', definition: 'Letters in the New Testament (Romans–Jude) teaching Christian belief and practice.' },
      { term: 'Chapter and verse', definition: 'Numbering system added centuries later to help locate passages; useful but not part of the inspired text.' },
    ],
    quiz: [
      { id: 'lesson-2-q1', type: 'mc', prompt: 'How many books are in the Old Testament?', choices: ['27', '39', '66', '46'], answer: '39', explanation: 'The Old Testament has 39 books; the New Testament has 27.', tags: ['ot-overview'] },
      { id: 'lesson-2-q2', type: 'mc', prompt: 'Which section contains the books of Joshua through Esther?', choices: ['Poetry & Wisdom', 'The Prophets', 'History', 'The Pentateuch'], answer: 'History', explanation: 'Joshua–Esther narrate Israel\'s history from conquest through exile and return.', tags: ['ot-overview'] },
      { id: 'lesson-2-q3', type: 'tf', prompt: 'The chapter and verse numbers in our Bibles were part of the original inspired text.', answer: 'False', explanation: 'Chapters were added in the 1200s and verses in the 1500s as navigation aids.', tags: ['theology'] },
      { id: 'lesson-2-q4', type: 'mc', prompt: 'In the reference "Romans 8:28," what does the "8" indicate?', choices: ['The verse', 'The chapter', 'The book number', 'The page'], answer: 'The chapter', explanation: 'The standard format is Book Chapter:Verse — Romans 8:28 is Romans, chapter 8, verse 28.', tags: ['nt-overview'] },
    ],
    prayer: `Lord, thank you for giving your word such careful order. As I learn to navigate it, teach me to find not just verses but you. Make me at home in Scripture. In Jesus' name, amen.`,
  },
  {
    id: 'lesson-3',
    title: 'Old Testament vs New Testament',
    body: `## Continuity, Not Contradiction
Some imagine the Old Testament as the "angry God" book and the New as the "loving God" book. Scripture rejects this split: "I the LORD do not change" (Malachi 3:6), and "Jesus Christ is the same yesterday, today, and forever" (Hebrews 13:8). The Old Testament reveals God's love profoundly (Exodus 34:6; Psalm 103), and the New Testament reveals his judgment seriously (Revelation; Hebrews 10:31). One God, one character, one story.

## Promise and Fulfillment
The key relationship is promise and fulfillment. The Old Testament promises a Savior — the "seed" who will crush the serpent (Genesis 3:15), the prophet like Moses (Deuteronomy 18:15), the suffering servant (Isaiah 53), the son of David whose kingdom never ends (2 Samuel 7:16). The New Testament announces fulfillment: "Do not think that I came to destroy the Law or the Prophets. I did not come to destroy but to fulfill" (Matthew 5:17). Every sacrifice pointed to his sacrifice; every festival foreshadowed his work.

## Shadow and Substance
Hebrews calls the Old Testament system "a shadow of the good things to come" (Hebrews 10:1). The tabernacle, priesthood, and sacrifices were God-given pictures teaching sin's seriousness and atonement's necessity. Christ is the substance casting the shadow. That's why Christians don't offer animal sacrifices or follow ceremonial laws — not because the Old Testament was wrong, but because what it pointed to has arrived.

## Reading Both Well
Read the Old Testament as Christian Scripture: asking how each passage fits the story leading to Christ (Luke 24:27). Its moral law still reveals God's character; its history still teaches (1 Corinthians 10:11); its promises still encourage. And read the New Testament as the Old's fulfillment — every page echoes with older Scriptures. Together they are one book with one hero.`,
    keyTerms: [
      { term: 'Covenant', definition: 'A binding relationship-commitment God makes with his people; the Bible records the old covenant and the new covenant in Christ.' },
      { term: 'Fulfillment', definition: 'How Jesus completes and accomplishes what the Old Testament promised and foreshadowed.' },
      { term: 'Messiah', definition: 'Hebrew for "anointed one" — the promised Savior; "Christ" is the Greek equivalent.' },
      { term: 'Typology', definition: 'How Old Testament persons, events, or institutions foreshadow Christ (e.g., the Passover lamb pointing to Jesus).' },
    ],
    quiz: [
      { id: 'lesson-3-q1', type: 'tf', prompt: 'The Old Testament reveals an angry God while the New Testament reveals a loving God — two different characters.', answer: 'False', explanation: '"I the LORD do not change" (Malachi 3:6). Both Testaments reveal God\'s love and his judgment.', tags: ['theology'] },
      { id: 'lesson-3-q2', type: 'mc', prompt: 'According to Matthew 5:17, Jesus came to the Law and Prophets to...', choices: ['Destroy them', 'Ignore them', 'Fulfill them', 'Replace them with new laws'], answer: 'Fulfill them', explanation: '"I did not come to destroy but to fulfill."', tags: ['teachings'] },
      { id: 'lesson-3-q3', type: 'mc', prompt: 'Hebrews describes the Old Testament sacrificial system as...', choices: ['A mistake', 'A shadow of the good things to come', 'Unnecessary', 'Only for priests'], answer: 'A shadow of the good things to come', explanation: 'Hebrews 10:1 — the sacrifices were God-given pictures pointing to Christ, the substance.', tags: ['theology'] },
      { id: 'lesson-3-q4', type: 'mc', prompt: 'Genesis 3:15, the first promise of a Savior, is often called the...', choices: ['Protoevangelium (first gospel)', 'Decalogue', 'Shema', 'Beatitudes'], answer: 'Protoevangelium (first gospel)', explanation: 'Genesis 3:15 promises the woman\'s "seed" will crush the serpent — the first gospel promise.', tags: ['genesis', 'theology'] },
    ],
    prayer: `Father, thank you for one unified story, not two contradictory books. Open my eyes to see Christ on every page — promised in the Old, revealed in the New. Teach me to read all of Scripture as your one word. In Jesus' name, amen.`,
  },
  {
    id: 'lesson-4',
    title: 'Who Wrote the Bible?',
    body: `## Forty Authors, One Author
Over 40 human authors wrote the Bible across 1,500 years: Moses the lawgiver, David the king, Solomon the sage, Isaiah the prophet, Amos the shepherd, Daniel the statesman, Ezra the scribe, Luke the doctor, Paul the apostle, Peter and John the fishermen, Matthew the tax collector, James and Jude (Jesus's brothers). They wrote in palaces and prisons, in exile and at home, in Hebrew, Aramaic, and Greek. Yet behind them all stands one divine Author, the Holy Spirit, who "carried along" the writers (2 Peter 1:21).

## How Inspiration Worked
"All Scripture is God-breathed" (2 Timothy 3:16). The word suggests God breathing out his word through human instruments. Peter explains: "no prophecy of Scripture is of private interpretation... but men spoke from God, being moved by the Holy Spirit" (2 Peter 1:20-21). "Moved" is a sailing term — the Spirit filled the authors' sails while they steered their own ships. That's why Paul sounds like Paul and John sounds like John, yet both speak God's word.

## Why It Matters
Because Scripture has a divine Author, it carries divine authority — it isn't good advice but God's word. Because it has human authors, we read it as real literature: poetry as poetry, history as history, letters as letters. Both truths protect us: the divine authorship keeps us from treating the Bible as merely human opinions; the human authorship keeps us from reading it flatly, ignoring genre and context.

## The Authors Point Beyond Themselves
Remarkably, the biblical authors consistently point away from themselves to Christ. Moses wrote about him (John 5:46); the prophets searched their own writings about him (1 Peter 1:10-11); the apostles preached him from the Scriptures (Acts 17:2-3). The best authors are signposts — and every signpost in Scripture points to Jesus.`,
    keyTerms: [
      { term: 'Inspiration', definition: 'God the Holy Spirit guiding human authors so their writings are truly God\'s word.' },
      { term: '2 Peter 1:21', definition: 'Key verse: "men spoke from God, being moved by the Holy Spirit."' },
      { term: 'Authority', definition: 'Because Scripture is God\'s word, it carries God\'s authority over belief and life.' },
      { term: 'Genre', definition: 'The literary type of a passage (poetry, history, letter, prophecy) which guides how we interpret it.' },
    ],
    quiz: [
      { id: 'lesson-4-q1', type: 'mc', prompt: 'About how many human authors wrote the Bible?', choices: ['12', 'Over 40', '66', '7'], answer: 'Over 40', explanation: 'More than 40 authors wrote across ~1,500 years, from kings to fishermen.', tags: ['theology'] },
      { id: 'lesson-4-q2', type: 'mc', prompt: 'According to 2 Peter 1:21, the human authors were...', choices: ['Dictated to word-by-word like robots', 'Moved by the Holy Spirit', 'Writing only their own opinions', 'Copying older myths'], answer: 'Moved by the Holy Spirit', explanation: '"Men spoke from God, being moved by the Holy Spirit."', tags: ['theology'] },
      { id: 'lesson-4-q3', type: 'tf', prompt: 'Because God is the ultimate author, the human authors\' personalities and styles don\'t matter.', answer: 'False', explanation: 'God worked through real personalities — Paul sounds like Paul, John like John. Genre and context matter for interpretation.', tags: ['theology'] },
      { id: 'lesson-4-q4', type: 'mc', prompt: 'Which author was a doctor?', choices: ['Matthew', 'Mark', 'Luke', 'John'], answer: 'Luke', explanation: 'Luke, author of the Gospel of Luke and Acts, was a physician (Colossians 4:14).', tags: ['people-nt'] },
    ],
    prayer: `Holy Spirit, divine Author of Scripture, thank you for moving through shepherds and kings, fishermen and doctors to give us your word. As I read their writings, speak through them to me. In Jesus' name, amen.`,
  },

  {
    id: 'lesson-5',
    title: 'How We Got the Bible',
    body: `## From Scrolls to Your Hands
The journey from ancient manuscripts to your Bible is one of history's great stories. The Old Testament was copied by hand for centuries by scribes so careful they counted every letter. The New Testament books were copied and circulated among churches within decades of writing. In 1947, the Dead Sea Scrolls confirmed that the Hebrew text had been transmitted with remarkable accuracy over 1,000 years.

## The Canon: Recognizing, Not Creating
"Canon" means measuring rod — the list of books recognized as Scripture. The church didn't create the canon by vote; it recognized books that were already functioning as God's word. The tests: Was it written by an apostle or prophet (or their close associate)? Was it consistent with known truth? Was it widely accepted by the churches? By the late 300s AD, the 27 New Testament books were universally recognized. The Old Testament canon was settled even earlier — Jesus himself affirmed it (Luke 24:44).

## Translation: God's Word in Your Language
The Bible is the most translated book in history — now in over 3,000 languages. Early translations include the Septuagint (Hebrew Old Testament into Greek, ~250 BC) and the Latin Vulgate (~AD 400). English milestones: Wycliffe (1380s), Tyndale (1520s, martyred for it), the King James Version (1611), and modern translations like the WEB, ESV, and NIV. Every translation involves choices, but the core message is stable across all faithful versions.

## Can We Trust It?
We have over 5,800 Greek manuscripts of the New Testament — far more than any other ancient work (Homer's Iliad has ~1,800; most ancient books survive in a handful). The time gap between originals and earliest copies is decades, not centuries. Variants exist (mostly spelling), but no major doctrine depends on any disputed text. The Bible we hold is essentially the Bible as written — transmitted with extraordinary care because believers considered it God's word.`,
    keyTerms: [
      { term: 'Canon', definition: 'The recognized collection of books acknowledged as Holy Scripture.' },
      { term: 'Manuscript', definition: 'A hand-written copy of a biblical book, made before printing existed.' },
      { term: 'Septuagint', definition: 'The ancient Greek translation of the Hebrew Old Testament, widely used in Jesus\'s day.' },
      { term: 'Textual criticism', definition: 'The scholarly discipline of comparing manuscripts to reconstruct the original text.' },
    ],
    quiz: [
      { id: 'lesson-5-q1', type: 'mc', prompt: 'The Dead Sea Scrolls (discovered 1947) demonstrated that...', choices: ['The Bible was invented in the Middle Ages', 'The Hebrew text was transmitted with remarkable accuracy', 'The New Testament was written in Hebrew', 'The canon is still open'], answer: 'The Hebrew text was transmitted with remarkable accuracy', explanation: 'Scrolls 1,000 years older than previous copies showed the text had been copied with extraordinary fidelity.', tags: ['theology'] },
      { id: 'lesson-5-q2', type: 'tf', prompt: 'The church created the Bible\'s authority by voting on which books to include.', answer: 'False', explanation: 'The church recognized books already functioning as God\'s word; it acknowledged rather than created their authority.', tags: ['theology'] },
      { id: 'lesson-5-q3', type: 'mc', prompt: 'About how many Greek manuscripts of the New Testament survive?', choices: ['Fewer than 100', 'About 500', 'Over 5,800', 'Exactly 27'], answer: 'Over 5,800', explanation: 'The New Testament is by far the best-attested work of antiquity.', tags: ['theology'] },
      { id: 'lesson-5-q4', type: 'mc', prompt: 'Which English translator was martyred for making the Bible available in English?', choices: ['John Wycliffe', 'William Tyndale', 'King James', 'John Knox'], answer: 'William Tyndale', explanation: 'Tyndale was executed in 1536 for translating Scripture into English; his work shaped later versions.', tags: ['timeline'] },
    ],
    prayer: `Father, thank you for preserving your word through centuries — through faithful scribes, courageous translators, and your providential care. Give me confidence in Scripture and gratitude for those who sacrificed so I could read it. In Jesus' name, amen.`,
  },
  {
    id: 'lesson-6',
    title: 'Understanding the Gospel',
    body: `## What "Gospel" Means
"Gospel" translates the Greek euangelion — good news. In the Roman world, euangelion announced military victories or a new emperor. The New Testament hijacks the word: the good news is that God has won the decisive victory over sin and death through Jesus Christ. It's news before it's advice — something done, not something to do.

## The Gospel in Four Movements
**God:** The holy Creator made us for himself; he is perfectly good and just. **Man:** We have rebelled — "all have sinned, and fall short of the glory of God" (Romans 3:23). Our sin separates us from God and deserves judgment. **Christ:** "But God commends his own love toward us, in that while we were yet sinners, Christ died for us" (Romans 5:8). Jesus lived the perfect life we couldn't, died the death we deserved, and rose victorious. **Response:** We receive this gift through repentance (turning from sin) and faith (trusting Christ alone). "Believe in the Lord Jesus Christ, and you will be saved" (Acts 16:31).

## Why It's Good News
Every religion says "do"; the gospel says "done." We contribute nothing but the sin that made it necessary. Salvation is "not of works, that no one would boast" (Ephesians 2:9). This humbles the proud (you can't earn it) and comforts the broken (you don't have to). The gospel is good news precisely because we couldn't save ourselves.

## The Gospel Changes Everything
The gospel isn't just how we begin the Christian life; it's how we live it. We never graduate from needing grace. Daily we repent, daily we believe, daily we rest in Christ's finished work. And the gospel compels mission: good news is meant to be shared. "How will they hear without a preacher?" (Romans 10:14). Those who've received the best news carry the joyful obligation to tell it.`,
    keyTerms: [
      { term: 'Gospel', definition: 'The "good news" that God saves sinners through the death and resurrection of Jesus Christ.' },
      { term: 'Repentance', definition: 'Turning away from sin and toward God — a change of mind leading to a change of direction.' },
      { term: 'Faith', definition: 'Trusting in Christ alone for salvation — receiving, not achieving.' },
      { term: 'Atonement', definition: 'Christ\'s work of reconciling sinners to God through his sacrificial death.' },
    ],
    quiz: [
      { id: 'lesson-6-q1', type: 'mc', prompt: 'The word "gospel" literally means...', choices: ['Good rules', 'Good news', 'God\'s book', 'Great story'], answer: 'Good news', explanation: 'From the Greek euangelion — the announcement of God\'s victory in Christ.', tags: ['theology'] },
      { id: 'lesson-6-q2', type: 'mc', prompt: 'According to Romans 3:23...', choices: ['Only some have sinned', 'All have sinned and fall short of God\'s glory', 'Sin is not serious', 'Good people go to heaven'], answer: 'All have sinned and fall short of God\'s glory', explanation: 'Every person has sinned — this universal need is why the gospel is necessary.', tags: ['salvation', 'theology'] },
      { id: 'lesson-6-q3', type: 'tf', prompt: 'The gospel is primarily good advice about how to live a better life.', answer: 'False', explanation: 'The gospel is news — something God has done in Christ — before it is advice.', tags: ['theology', 'salvation'] },
      { id: 'lesson-6-q4', type: 'mc', prompt: 'According to Acts 16:31, what must a person do to be saved?', choices: ['Be baptized and do good works', 'Believe in the Lord Jesus Christ', 'Join a church', 'Keep the Ten Commandments perfectly'], answer: 'Believe in the Lord Jesus Christ', explanation: '"Believe in the Lord Jesus Christ, and you will be saved."', tags: ['salvation'] },
    ],
    prayer: `Lord Jesus, thank you for the good news — that you lived, died, and rose for me. I turn from my sin and trust you alone. Keep the gospel central in my life every day, and make me bold to share it. In your name, amen.`,
  },
  {
    id: 'lesson-7',
    title: 'Who Is God?',
    body: `## One God
"Hear, O Israel: the LORD our God, the LORD is one" (Deuteronomy 6:4). Christianity is fiercely monotheistic: there is one God, and all other "gods" are idols — human inventions. This one God is personal (he speaks, loves, acts), not an impersonal force. He is the Creator of all things, distinct from his creation, yet intimately involved in it.

## God's Character
Scripture reveals God's attributes — who he is. He is **holy** (perfectly pure, Isaiah 6:3), **loving** ("God is love," 1 John 4:8), **just** (he judges sin fairly), **merciful** (compassionate to sinners, Exodus 34:6), **omnipotent** (all-powerful), **omniscient** (all-knowing), **eternal** (without beginning or end), and **unchanging** ("I the LORD do not change," Malachi 3:6). His attributes never conflict: his love is holy love; his justice is loving justice.

## Trinity: One God, Three Persons
The Bible teaches one God who exists eternally as three distinct persons: Father, Son, and Holy Spirit. Each is fully God; there are not three gods but one. We see all three at Jesus's baptism (Matthew 3:16-17) and in the Great Commission's single "name" of the three (Matthew 28:19). The Trinity is a mystery — not illogical but beyond full human comprehension, like trying to pour the ocean into a teacup.

## Knowing God Personally
Theology isn't just for scholars — eternal life itself is "that they should know you, the only true God, and him whom you sent, Jesus Christ" (John 17:3). God wants to be known. He has revealed himself in creation (Psalm 19:1), in Scripture, and supremely in Jesus: "He who has seen me has seen the Father" (John 14:9). To know God is the greatest pursuit in life.`,
    keyTerms: [
      { term: 'Monotheism', definition: 'Belief in one God — central to Christianity, Judaism, and Islam.' },
      { term: 'Trinity', definition: 'One God existing eternally as three distinct persons: Father, Son, and Holy Spirit.' },
      { term: 'Attributes', definition: 'The perfections of God\'s character — holiness, love, justice, omnipotence, etc.' },
      { term: 'Holy', definition: 'Perfectly pure and set apart; God\'s defining attribute (Isaiah 6:3).' },
    ],
    quiz: [
      { id: 'lesson-7-q1', type: 'mc', prompt: 'Deuteronomy 6:4 declares...', choices: ['There are many gods', 'The LORD our God, the LORD is one', 'God is unknowable', 'God changes'], answer: 'The LORD our God, the LORD is one', explanation: 'The Shema — Christianity\'s foundational confession of monotheism.', tags: ['theology'] },
      { id: 'lesson-7-q2', type: 'mc', prompt: 'The Trinity means...', choices: ['Three gods', 'One God in three persons', 'God changes forms over time', 'Three parts of God'], answer: 'One God in three persons', explanation: 'One divine being, three distinct persons — Father, Son, Holy Spirit — each fully God.', tags: ['theology'] },
      { id: 'lesson-7-q3', type: 'mc', prompt: 'According to 1 John 4:8...', choices: ['God has love', 'God is love', 'God needs love', 'Love is God'], answer: 'God is love', explanation: '"He who doesn\'t love doesn\'t know God, for God is love."', tags: ['theology'] },
      { id: 'lesson-7-q4', type: 'tf', prompt: 'God\'s love and God\'s justice are in conflict with each other.', answer: 'False', explanation: 'God\'s attributes are perfectly harmonious — his love is holy and his justice is loving. They meet at the cross.', tags: ['theology'] },
    ],
    prayer: `Father, Son, and Holy Spirit — one God — I worship you. Thank you for revealing yourself: holy, loving, just, merciful, eternal. Teach me to know you, not just know about you, for eternal life is knowing you. In Jesus' name, amen.`,
  },
  {
    id: 'lesson-8',
    title: 'Who Is Jesus?',
    body: `## Fully God
The New Testament unambiguously calls Jesus God. "In the beginning was the Word, and the Word was with God, and the Word was God... The Word became flesh" (John 1:1, 14). Thomas called him "My Lord and my God!" (John 20:28). Jesus claimed God's name ("Before Abraham was born, I am," John 8:58), received worship (Matthew 14:33), and forgave sins (Mark 2:5-7) — things only God can do. He is "the image of the invisible God" (Colossians 1:15), fully divine.

## Fully Man
Jesus was also truly human: born of Mary (Luke 2:7), he grew (Luke 2:52), got hungry (Matthew 4:2), thirsty (John 19:28), tired (John 4:6), and wept (John 11:35). He was tempted as we are (Hebrews 4:15) yet without sin. His humanity matters enormously: only a true man could represent humanity and die in our place; only God could bear the infinite weight of sin. He had to be both.

## The God-Man
Theologians call this the hypostatic union: two natures (divine and human) united in one person, without confusion or division. It's mystery, not math. Because he is God, his death has infinite value; because he is man, it counts for us. "There is one God, and one mediator between God and men, the man Christ Jesus" (1 Timothy 2:5) — the bridge must touch both sides.

## What He Did
Jesus lived the perfect life we couldn't live, died the death we deserved ("Christ died for our sins," 1 Corinthians 15:3), rose bodily on the third day, ascended to heaven, and will return to judge and restore. Right now he intercedes for believers (Hebrews 7:25). Christianity isn't advice from a teacher — it's rescue by the God-man who did what we couldn't and offers what we don't deserve.`,
    keyTerms: [
      { term: 'Incarnation', definition: 'The eternal Son of God taking on full humanity — "the Word became flesh" (John 1:14).' },
      { term: 'Hypostatic union', definition: 'The union of Christ\'s divine and human natures in one person.' },
      { term: 'Mediator', definition: 'One who bridges two parties — Jesus mediates between God and humanity (1 Timothy 2:5).' },
      { term: 'Resurrection', definition: 'Jesus\'s bodily rising from the dead on the third day, vindicating his claims and defeating death.' },
    ],
    quiz: [
      { id: 'lesson-8-q1', type: 'mc', prompt: 'John 1:1 says of "the Word"...', choices: ['The Word was a wise teacher', 'The Word was God', 'The Word was an angel', 'The Word was a prophet'], answer: 'The Word was God', explanation: '"In the beginning was the Word, and the Word was with God, and the Word was God."', tags: ['theology'] },
      { id: 'lesson-8-q2', type: 'tf', prompt: 'Jesus was truly human — he experienced hunger, tiredness, and temptation.', answer: 'True', explanation: 'Hebrews 4:15: tempted as we are, yet without sin. His true humanity was necessary for our salvation.', tags: ['theology'] },
      { id: 'lesson-8-q3', type: 'mc', prompt: 'Why must Jesus be both fully God and fully man?', choices: ['To be a good example', 'Only God could bear sin\'s infinite weight; only a man could represent humanity', 'To perform miracles', 'To start a religion'], answer: 'Only God could bear sin\'s infinite weight; only a man could represent humanity', explanation: 'The mediator must touch both sides — divine enough to save, human enough to substitute.', tags: ['theology', 'salvation'] },
      { id: 'lesson-8-q4', type: 'mc', prompt: 'What did Thomas call Jesus in John 20:28?', choices: ['Good teacher', 'My Lord and my God', 'Son of David', 'Prophet'], answer: 'My Lord and my God', explanation: 'Thomas\'s confession is one of Scripture\'s clearest declarations of Christ\'s deity.', tags: ['jesus-ministry'] },
    ],
    prayer: `Lord Jesus, my Lord and my God — thank you for becoming man, living perfectly, dying for my sins, and rising again. You are fully God and fully man, my mediator and my Savior. I worship you. In your name, amen.`,
  },

  {
    id: 'lesson-9',
    title: 'What Is the Holy Spirit?',
    body: `## A Person, Not a Force
The Holy Spirit is not an impersonal energy but the third person of the Trinity — fully God. He speaks (Acts 13:2), teaches (John 14:26), can be grieved (Ephesians 4:30), and intercedes (Romans 8:26). Jesus called him "another Counselor" (John 14:16) — another like Jesus himself. To lie to the Spirit is to lie to God (Acts 5:3-4).

## His Work in Salvation
The Spirit convicts of sin (John 16:8), gives new birth ("born of the Spirit," John 3:5-6), and seals believers as God's own (Ephesians 1:13). No one becomes a Christian without the Spirit's work — he opens blind eyes, softens hard hearts, and gives faith. If you are in Christ, the Spirit did it.

## His Work in the Christian Life
The Spirit indwells every believer (1 Corinthians 6:19 — your body is his temple), guides into truth (John 16:13), produces character ("the fruit of the Spirit," Galatians 5:22-23), gives gifts for serving the church (1 Corinthians 12:7), empowers witness (Acts 1:8), helps us pray (Romans 8:26), and assures us we're God's children (Romans 8:16). The Christian life is impossible without him — and we never face it without him.

## Walking by the Spirit
Paul's command is present-tense and continuous: "Walk by the Spirit, and you won't fulfill the lust of the flesh" (Galatians 5:16). This means daily dependence — yielding control, listening, obeying promptings, confessing when we "quench" (1 Thessalonians 5:19) or "grieve" him. Being filled with the Spirit (Ephesians 5:18) isn't a one-time event but an ongoing posture: surrendered, dependent, obedient. The Spirit-filled life is the normal Christian life.`,
    keyTerms: [
      { term: 'Holy Spirit', definition: 'The third person of the Trinity — fully God, active in creation, salvation, and the Christian life.' },
      { term: 'Indwelling', definition: 'The Spirit\'s permanent residence in every believer (1 Corinthians 6:19).' },
      { term: 'Fruit of the Spirit', definition: 'The ninefold character the Spirit produces: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control.' },
      { term: 'Spiritual gifts', definition: 'Abilities the Spirit gives believers for serving the church and its mission (1 Corinthians 12).' },
    ],
    quiz: [
      { id: 'lesson-9-q1', type: 'tf', prompt: 'The Holy Spirit is an impersonal force, not a person.', answer: 'False', explanation: 'The Spirit speaks, teaches, can be grieved, and intercedes — he is the third person of the Trinity.', tags: ['theology'] },
      { id: 'lesson-9-q2', type: 'mc', prompt: 'According to John 3:5-6, the new birth is...', choices: ['A human decision alone', 'Born of the Spirit', 'Baptism only', 'Church membership'], answer: 'Born of the Spirit', explanation: '"That which is born of the Spirit is spirit" — regeneration is the Spirit\'s work.', tags: ['theology', 'salvation'] },
      { id: 'lesson-9-q3', type: 'mc', prompt: 'Galatians 5:16 commands believers to...', choices: ['Try harder', 'Walk by the Spirit', 'Follow the law perfectly', 'Avoid all pleasure'], answer: 'Walk by the Spirit', explanation: '"Walk by the Spirit, and you won\'t fulfill the lust of the flesh."', tags: ['theology'] },
      { id: 'lesson-9-q4', type: 'mc', prompt: 'Which of these is NOT listed as fruit of the Spirit?', choices: ['Patience', 'Kindness', 'Wealth', 'Self-control'], answer: 'Wealth', explanation: 'The ninefold fruit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control (Galatians 5:22-23).', tags: ['theology'] },
    ],
    prayer: `Holy Spirit, thank you for giving me new birth, for living in me, for guiding and empowering me. Forgive me for grieving and quenching you. Fill me afresh — I yield control. Produce your fruit in me today. In Jesus' name, amen.`,
  },
  {
    id: 'lesson-10',
    title: 'What Is Sin?',
    body: `## Missing the Mark
The Greek word for sin, hamartia, was an archery term meaning "to miss the mark." God's glory is the bullseye; every sin falls short (Romans 3:23). Sin isn't just breaking rules — it's falling short of God's perfect standard in thought, word, and deed, by what we do and what we fail to do.

## Rebellion, Not Just Mistakes
Scripture defines sin more deeply: "Everyone who sins also commits lawlessness. Sin is lawlessness" (1 John 3:4). At its root, sin is rebellion — saying to God, "Not your will, but mine." It began with Adam and Eve (Genesis 3), and every human inherits both a sinful nature and personal guilt (Romans 5:12; Ephesians 2:3). We're not sinners because we sin; we sin because we're sinners.

## The Seriousness of Sin
Our culture trivializes sin; Scripture doesn't. Sin separates us from God (Isaiah 59:2), enslaves us (John 8:34), deceives us (Hebrews 3:13), and earns death: "the wages of sin is death" (Romans 6:23). Sin is cosmic treason against a holy God. We can't understand the cross until we understand sin — the cross's horror measures sin's seriousness.

## The Only Cure
Morality can't cure sin; only grace can. "If we confess our sins, he is faithful and righteous to forgive us the sins, and to cleanse us from all unrighteousness" (1 John 1:9). At the cross, God dealt with sin fully: Christ bore it, paid for it, defeated it. Christians still battle sin (Romans 7), but its penalty is removed and its power is broken. One day, its presence will be gone forever (Revelation 21:27).`,
    keyTerms: [
      { term: 'Sin', definition: 'Any thought, word, or deed — or failure to act — that falls short of God\'s perfect standard.' },
      { term: 'Lawlessness', definition: 'John\'s definition of sin (1 John 3:4): rebellion against God\'s rightful rule.' },
      { term: 'Original sin', definition: 'The sinful nature and guilt inherited from Adam, affecting every person (Romans 5:12).' },
      { term: 'Confession', definition: 'Agreeing with God about our sin — the path to forgiveness (1 John 1:9).' },
    ],
    quiz: [
      { id: 'lesson-10-q1', type: 'mc', prompt: 'The Greek word hamartia literally means...', choices: ['Evil deed', 'To miss the mark', 'Rebellion', 'Darkness'], answer: 'To miss the mark', explanation: 'An archery term — God\'s glory is the target; all sin falls short.', tags: ['theology'] },
      { id: 'lesson-10-q2', type: 'mc', prompt: 'According to Romans 6:23, "the wages of sin is..."', choices: ['Sickness', 'Death', 'Poverty', 'Shame'], answer: 'Death', explanation: '"The wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord."', tags: ['salvation', 'theology'] },
      { id: 'lesson-10-q3', type: 'tf', prompt: 'Sin is only about bad actions; thoughts and failures to act don\'t count.', answer: 'False', explanation: 'Jesus taught lust and hatred violate the law (Matthew 5), and James 4:17 says knowing good and not doing it is sin.', tags: ['teachings'] },
      { id: 'lesson-10-q4', type: 'mc', prompt: 'According to 1 John 1:9, what should we do with our sins?', choices: ['Hide them', 'Confess them', 'Make excuses', 'Punish ourselves'], answer: 'Confess them', explanation: '"If we confess our sins, he is faithful and righteous to forgive us."', tags: ['theology'] },
    ],
    prayer: `Holy God, I confess my sin — not just my actions but my heart's rebellion. Thank you that you take sin seriously enough to judge it, and love me enough to bear that judgment yourself in Christ. Cleanse me from all unrighteousness. In Jesus' name, amen.`,
  },
  {
    id: 'lesson-11',
    title: 'What Is Salvation?',
    body: `## Rescued, Not Improved
"Salvation" means rescue — and the Bible insists we needed rescuing, not renovating. "He delivered us out of the power of darkness, and translated us into the Kingdom of the Son of his love" (Colossians 1:13). We were dead in sin (Ephesians 2:1), enemies of God (Romans 5:10), headed for judgment. Salvation is God doing for us what we could never do for ourselves.

## By Grace Through Faith
"For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast" (Ephesians 2:8-9). Grace is God's undeserved favor; faith is the empty hand receiving it. We repent (turn from sin) and believe (trust Christ). The moment a sinner trusts Christ, they are justified — declared righteous (Romans 5:1), forgiven (Colossians 2:13-14), adopted as God's child (John 1:12), and given eternal life (John 3:16).

## Past, Present, Future
Salvation has three tenses. **Past:** "you have been saved" (Ephesians 2:8) — justification, complete and finished. **Present:** "work out your own salvation" (Philippians 2:12) — sanctification, the ongoing process of becoming holy. **Future:** "we shall be saved" (Romans 5:9) — glorification, when Christ returns and we are made perfect. Christians are saved, being saved, and will be saved.

## Assurance
Can you know you're saved? Yes: "These things I have written to you who believe in the name of the Son of God, that you may know that you have eternal life" (1 John 5:13). Assurance rests on God's promise, not our feelings — though genuine faith produces good works (Ephesians 2:10) and the Spirit's witness (Romans 8:16). If you have truly trusted Christ, you are secure: "no one will snatch them out of my hand" (John 10:28).`,
    keyTerms: [
      { term: 'Salvation', definition: 'God\'s rescue of sinners from sin and judgment, giving forgiveness and eternal life through Christ.' },
      { term: 'Justification', definition: 'God\'s legal declaration that a believing sinner is righteous, based on Christ\'s work.' },
      { term: 'Sanctification', definition: 'The ongoing process of growing in holiness after conversion.' },
      { term: 'Glorification', definition: 'The future completion of salvation when believers are made perfect at Christ\'s return.' },
    ],
    quiz: [
      { id: 'lesson-11-q1', type: 'mc', prompt: 'Ephesians 2:8-9 says we are saved...', choices: ['By works, so we can boast', 'By grace through faith, not of works', 'By baptism alone', 'By keeping the law'], answer: 'By grace through faith, not of works', explanation: 'Salvation is God\'s gift, received by faith — "not of works, that no one would boast."', tags: ['salvation', 'grace'] },
      { id: 'lesson-11-q2', type: 'mc', prompt: 'Which is NOT one of the three tenses of salvation?', choices: ['Justification (past)', 'Sanctification (present)', 'Glorification (future)', 'Canonization (eternal)'], answer: 'Canonization (eternal)', explanation: 'The three tenses: justified (saved), being sanctified (being saved), to be glorified (will be saved).', tags: ['salvation'] },
      { id: 'lesson-11-q3', type: 'tf', prompt: 'According to 1 John 5:13, believers can know they have eternal life.', answer: 'True', explanation: 'John wrote "that you may know that you have eternal life" — assurance is God\'s intention.', tags: ['salvation', 'faith'] },
      { id: 'lesson-11-q4', type: 'mc', prompt: 'Colossians 1:13 describes salvation as...', choices: ['Self-improvement', 'Delivered from darkness into Christ\'s kingdom', 'A second chance to earn heaven', 'Joining a church'], answer: 'Delivered from darkness into Christ\'s kingdom', explanation: 'Salvation is rescue and transfer — from darkness to the kingdom of God\'s Son.', tags: ['salvation'] },
    ],
    prayer: `Father, thank you for rescuing me — not improving me but delivering me from darkness into your Son's kingdom. I rest in your finished work: justified, adopted, secure. Grow me in holiness until the day I'm glorified. In Jesus' name, amen.`,
  },
  {
    id: 'lesson-12',
    title: 'What Is Grace?',
    body: `## Undeserved Favor
Grace is God's favor toward those who deserve the opposite. The Greek charis means gift, kindness, favor — always unearned. "The wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord" (Romans 6:23). Wages are earned; gifts are given. Grace is the difference between what we've earned (judgment) and what we receive (life).

## Grace in Salvation
Every part of salvation is grace: chosen by grace (Ephesians 1:4-6), called by grace (2 Timothy 1:9), justified by grace (Romans 3:24), kept by grace (1 Peter 1:5). Even faith itself is God's gift (Ephesians 2:8). This is why no one can boast — from first to last, salvation is God's work. Grace humbles human pride and exalts divine mercy.

## Grace for Daily Life
Grace isn't just the door into Christianity; it's the air we breathe inside it. "My grace is sufficient for you" (2 Corinthians 12:9) — for weakness, suffering, temptation, ministry. We grow by grace (2 Peter 3:18), serve by grace (1 Corinthians 15:10), and give by grace (2 Corinthians 8:7). Legalism tries to live by rules; grace lives by relationship, empowered by the Spirit.

## Grace Never Leads to License
"Shall we continue in sin, that grace may abound? May it never be!" (Romans 6:1-2). True grace transforms: "the grace of God... teaches us to say 'No' to ungodliness" (Titus 2:11-12). Grace that doesn't change you isn't grace you've understood. We don't obey to earn grace; we obey because we've received it. Gratitude, not guilt, is grace's engine.`,
    keyTerms: [
      { term: 'Grace', definition: 'God\'s undeserved favor — giving sinners blessing instead of the judgment they\'ve earned.' },
      { term: 'Charis', definition: 'The Greek word for grace, meaning gift, favor, or kindness.' },
      { term: 'Legalism', definition: 'Trying to earn God\'s favor or grow spiritually through rule-keeping rather than grace.' },
      { term: 'License', definition: 'The false idea that grace means sin doesn\'t matter — refuted in Romans 6.' },
    ],
    quiz: [
      { id: 'lesson-12-q1', type: 'mc', prompt: 'Grace is best defined as...', choices: ['God helping those who help themselves', 'God\'s undeserved favor toward sinners', 'A feeling of peace', 'Good manners'], answer: 'God\'s undeserved favor toward sinners', explanation: 'Grace gives blessing instead of deserved judgment — always unearned.', tags: ['grace', 'theology'] },
      { id: 'lesson-12-q2', type: 'mc', prompt: 'Romans 6:1-2 responds to "shall we continue in sin that grace may abound?" with...', choices: ['Yes, grace covers it', 'May it never be!', 'Only small sins', 'Ask your pastor'], answer: 'May it never be!', explanation: 'True grace transforms; it never excuses ongoing sin.', tags: ['grace', 'paul'] },
      { id: 'lesson-12-q3', type: 'tf', prompt: 'According to Titus 2:11-12, God\'s grace teaches us to say "No" to ungodliness.', answer: 'True', explanation: 'Grace trains us in godliness — gratitude, not guilt, drives holy living.', tags: ['grace'] },
      { id: 'lesson-12-q4', type: 'mc', prompt: 'Ephesians 2:8 says even our faith is...', choices: ['Our achievement', 'God\'s gift', 'Unnecessary', 'Temporary'], answer: 'God\'s gift', explanation: '"...and that not of yourselves; it is the gift of God."', tags: ['grace', 'faith'] },
    ],
    prayer: `Father of grace, I bring nothing but need, and you give everything in Christ. Forgive my pride that tries to earn, and my presumption that treats grace cheaply. Teach me to live by grace daily — grateful, holy, humble. In Jesus' name, amen.`,
  },

  {
    id: 'lesson-13',
    title: 'What Is Faith?',
    body: `## Trust, Not Just Belief
"Faith is assurance of things hoped for, proof of things not seen" (Hebrews 11:1). Biblical faith has three elements: knowledge (understanding the gospel), assent (agreeing it's true), and trust (personally relying on Christ). Demons have the first two (James 2:19) — saving faith adds the third: entrusting yourself to Jesus the way you'd trust a bridge with your weight.

## Faith's Object Matters Most
Faith is only as good as its object. Faith in a thin sheet of ice is dangerous; faith in solid rock is safe — the difference isn't the amount of faith but what it's placed in. Jesus said faith "like a grain of mustard seed" moves mountains (Matthew 17:20) — small faith in a great God accomplishes everything. Don't measure your faith's size; check its object: Christ himself.

## Faith Comes by Hearing
"Faith comes by hearing, and hearing by the word of God" (Romans 10:17). Faith isn't manufactured by effort; it's birthed by the message. As the gospel is heard — in preaching, reading, witness — the Spirit creates trust. That's why Scripture intake is faith's food and why sharing the gospel is faith's seedbed. Starve on God's word and faith weakens; feast and it strengthens.

## Faith That Works
"Faith, if it has no works, is dead in itself" (James 2:17). Genuine faith always acts: Abraham offered Isaac, Rahab hid the spies, the thief on the cross spoke up. Works don't earn salvation (Ephesians 2:9) but they prove faith is alive (Ephesians 2:10). A faith that never obeys, gives, forgives, or loves is mere opinion. True faith receives Christ, rests in Christ, and follows Christ — all three, always.`,
    keyTerms: [
      { term: 'Faith', definition: 'Confident trust in Christ based on knowledge of the gospel — receiving, not achieving.' },
      { term: 'Assurance', definition: 'Confidence of salvation based on God\'s promise, not fluctuating feelings.' },
      { term: 'Hebrews 11', definition: 'The "hall of faith" — examples of living trust from Abel to the prophets.' },
      { term: 'Doubt', definition: 'Questioning that can coexist with faith ("help my unbelief," Mark 9:24) but must be brought to Christ.' },
    ],
    quiz: [
      { id: 'lesson-13-q1', type: 'mc', prompt: 'Hebrews 11:1 defines faith as...', choices: ['Blind leap', 'Assurance of things hoped for, proof of things not seen', 'Positive thinking', 'Religious feeling'], answer: 'Assurance of things hoped for, proof of things not seen', explanation: 'Biblical faith is confident trust based on evidence, not wishful thinking.', tags: ['faith', 'theology'] },
      { id: 'lesson-13-q2', type: 'mc', prompt: 'According to Romans 10:17, faith comes by...', choices: ['Trying harder', 'Hearing the word of God', 'Good works', 'Meditation alone'], answer: 'Hearing the word of God', explanation: 'Faith is birthed as the gospel message is heard — Scripture intake feeds faith.', tags: ['faith'] },
      { id: 'lesson-13-q3', type: 'tf', prompt: 'James 2:17 teaches that faith without works is dead.', answer: 'True', explanation: 'Genuine faith always acts — works prove faith is alive; they don\'t earn salvation.', tags: ['faith'] },
      { id: 'lesson-13-q4', type: 'mc', prompt: 'What matters most about faith?', choices: ['Its size', 'Its object — who it trusts', 'Its emotional intensity', 'Its duration'], answer: 'Its object — who it trusts', explanation: 'Mustard-seed faith in a great God moves mountains (Matthew 17:20).', tags: ['faith'] },
    ],
    prayer: `Father, thank you for the gift of faith. Grow my trust in Christ — feed it with your word, exercise it through obedience, steady it in doubt. I believe; help my unbelief. In Jesus' name, amen.`,
  },
  {
    id: 'lesson-14',
    title: 'What Does It Mean to Follow Jesus?',
    body: `## More Than Admiring
Many admire Jesus; few follow him. Following means allegiance: "If anyone desires to come after me, let him deny himself, take up his cross daily, and follow me" (Luke 9:23). Deny self (dethrone self-rule), take up your cross (daily death to self), follow (walk where he walks). Discipleship is not a higher tier for the committed — it's the definition of Christian.

## Learning His Way
"Disciple" means learner. We learn by his word (abiding in his teaching, John 8:31), by his example ("walk just like he walked," 1 John 2:6), and by his people (the church teaches and corrects us). Following is concrete: forgiving as forgiven, serving as served, loving as loved. The Sermon on the Mount (Matthew 5-7) is the disciple's constitution.

## Counting the Cost — and the Worth
Jesus urged counting the cost (Luke 14:28) — following may cost comfort, relationships, even life. But he also promised the trade is worth it: "whoever loses his life for my sake will find it" (Matthew 16:25). Paul called everything loss "for the excellency of the knowledge of Christ Jesus" (Philippians 3:8). The cross is real; so is the joy. Missionaries, martyrs, and ordinary faithful believers testify: he is worth it.

## Following Together
Discipleship was never solo: Jesus called twelve, sent them in pairs, and built a church. "Follow me" is plural as well as singular — we follow in community, bearing burdens (Galatians 6:2), sharpening one another (Proverbs 27:17), and holding each other accountable. Find a church, join a small group, walk with mature believers. Lone-ranger Christianity isn't Christianity.`,
    keyTerms: [
      { term: 'Disciple', definition: 'A learner-follower of Jesus — committed to his teaching, example, and mission.' },
      { term: 'Cross-bearing', definition: 'Daily dying to self-rule in order to follow Christ (Luke 9:23).' },
      { term: 'Lordship', definition: 'Christ\'s rightful authority over every area of the believer\'s life.' },
      { term: 'Community', definition: 'The church as the God-given context for discipleship and growth.' },
    ],
    quiz: [
      { id: 'lesson-14-q1', type: 'mc', prompt: 'According to Luke 9:23, following Jesus requires...', choices: ['Admiring his teachings', 'Denying self, taking up the cross daily, following him', 'Attending church at Easter', 'Being a good person'], answer: 'Denying self, taking up the cross daily, following him', explanation: 'Discipleship is allegiance — daily self-denial and following, not mere admiration.', tags: ['teachings', 'jesus-ministry'] },
      { id: 'lesson-14-q2', type: 'tf', prompt: 'Discipleship is an optional higher level of Christianity for especially committed believers.', answer: 'False', explanation: 'Following Jesus is the definition of Christian — there is no category of non-disciple believer.', tags: ['theology'] },
      { id: 'lesson-14-q3', type: 'mc', prompt: '1 John 2:6 says whoever claims to abide in Christ ought to...', choices: ['Be perfect', 'Walk just like he walked', 'Leave society', 'Perform miracles'], answer: 'Walk just like he walked', explanation: 'Following means imitating Christ\'s character and conduct.', tags: ['teachings'] },
      { id: 'lesson-14-q4', type: 'mc', prompt: 'Jesus sent his disciples out...', choices: ['Alone', 'In pairs', 'Only after seminary', 'Without instructions'], answer: 'In pairs', explanation: 'Mark 6:7 — discipleship was never solo; community is God\'s design.', tags: ['disciples', 'jesus-ministry'] },
    ],
    prayer: `Lord Jesus, I don't just want to admire you — I want to follow you. Teach me to deny myself, take up my cross daily, and walk where you walk. Put me in community and make me faithful. You are worth everything. In your name, amen.`,
  },
  {
    id: 'lesson-15',
    title: 'How to Read the Bible',
    body: `## Pray Before You Read
Begin by asking the Author for help: "Open my eyes, that I may see wondrous things from your law" (Psalm 119:18). The Spirit who inspired Scripture illuminates it. A 30-second prayer — "Lord, speak to me" — transforms reading from duty to encounter.

## Observe, Interpret, Apply
Use three simple steps. **Observe:** What does it say? Who, what, when, where? Read slowly; notice repeated words. **Interpret:** What did it mean to the original readers? Consider context — the surrounding verses, the book's purpose, the historical setting. Ask: what is the main point? **Apply:** What does it mean for me? Is there a command to obey, a promise to claim, a sin to confess, an example to follow? "Be doers of the word, and not hearers only" (James 1:22).

## Read in Context
Never build doctrine on a single verse ripped from context. Read whole paragraphs, chapters, and books. Ask how a passage fits the Bible's storyline and how the New Testament fulfills the Old. Let clear passages interpret unclear ones. And remember genre: read poetry as poetry (Psalms), narrative as narrative (Acts), commands as commands (Epistles), imagery as imagery (Revelation).

## Build a Sustainable Rhythm
Start small and stay consistent: a chapter a day beats sporadic marathons. Read whole books (Mark, Philippians, Psalms) rather than verse-hopping. Keep a simple journal: date, passage, one observation, one application, one prayer. Read with others — discuss in a group. And when you don't feel like it, read anyway; feelings follow obedience. The goal isn't finishing plans but meeting God.`,
    keyTerms: [
      { term: 'Observation', definition: 'The first step of study: carefully noting what the text actually says.' },
      { term: 'Interpretation', definition: 'Discovering what the text meant to its original readers in context.' },
      { term: 'Application', definition: 'Bridging the text to your life — obeying, believing, becoming.' },
      { term: 'Context', definition: 'The surrounding verses, book, history, and whole-Bible storyline that give a passage meaning.' },
    ],
    quiz: [
      { id: 'lesson-15-q1', type: 'mc', prompt: 'What are the three basic steps of Bible study?', choices: ['Read, memorize, teach', 'Observe, interpret, apply', 'Pray, sing, serve', 'Skim, skip, summarize'], answer: 'Observe, interpret, apply', explanation: 'See what it says, understand what it meant, then apply it to your life.', tags: ['theology'] },
      { id: 'lesson-15-q2', type: 'mc', prompt: 'Psalm 119:18 prays...', choices: ['Give me wealth', 'Open my eyes to see wondrous things in your law', 'Make me famous', 'Remove my enemies'], answer: 'Open my eyes to see wondrous things in your law', explanation: 'Prayerful dependence on the Spirit is the starting point of reading.', tags: ['psalms', 'prayer'] },
      { id: 'lesson-15-q3', type: 'tf', prompt: 'It\'s fine to build a doctrine on a single verse taken out of context.', answer: 'False', explanation: 'Context — surrounding verses, book, genre, whole Bible — guards against misinterpretation.', tags: ['theology'] },
      { id: 'lesson-15-q4', type: 'mc', prompt: 'James 1:22 commands us to be...', choices: ['Hearers only', 'Doers of the word, not hearers only', 'Critics of the word', 'Memorizers only'], answer: 'Doers of the word, not hearers only', explanation: 'Reading must lead to obedience — application completes study.', tags: ['prayer'] },
    ],
    prayer: `Lord, open my eyes to see wonderful things in your word. Teach me to observe carefully, interpret faithfully, and apply obediently. Make Scripture my delight and my guide. In Jesus' name, amen.`,
  },
  {
    id: 'lesson-16',
    title: 'How to Pray',
    body: `## What Prayer Is
Prayer is talking with God — the Father, through the Son, by the Spirit. It's relationship, not ritual: "pray without ceasing" (1 Thessalonians 5:17) describes ongoing communion, not nonstop words. Jesus prayed regularly (Luke 5:16), honestly (Matthew 26:39), and expectantly. If the Son of God needed prayer, how much more do we?

## A Pattern: ACTS
Use the Lord's Prayer (Matthew 6:9-13) as a pattern, or the ACTS model: **Adoration** — praise God for who he is. **Confession** — agree with God about sin (1 John 1:9). **Thanksgiving** — gratitude for blessings (1 Thessalonians 5:18). **Supplication** — ask for needs, yours and others' (Philippians 4:6). Most of us rush to supplication; ACTS reorders us God-first.

## Praying in Jesus's Name
"Whatever you will ask in my name, that will I do" (John 14:13). Praying "in Jesus's name" isn't a magic closing — it means praying as his representative, according to his character and will. "If we ask anything according to his will, he listens to us" (1 John 5:14). God's answers include yes, no, and wait — and his wisdom exceeds ours. Unanswered prayer isn't unheard prayer.

## Growing in Prayer
Start where you are: short, honest prayers beat long, fake ones. Pray Scripture (turn psalms into prayers). Pray with others (Matthew 18:20). Keep a prayer list and note answers — nothing builds faith like recorded faithfulness. Pray at set times (Daniel prayed three times daily) and spontaneously through the day. And listen: prayer is conversation, so leave space for God to speak through his word and Spirit.`,
    keyTerms: [
      { term: 'ACTS', definition: 'A prayer pattern: Adoration, Confession, Thanksgiving, Supplication.' },
      { term: 'Intercession', definition: 'Praying on behalf of others — following Christ, our intercessor (Hebrews 7:25).' },
      { term: 'In Jesus\'s name', definition: 'Praying as Christ\'s representative, according to his will and character.' },
      { term: 'The Lord\'s Prayer', definition: 'Jesus\'s model prayer in Matthew 6:9-13 — a pattern, not just a recitation.' },
    ],
    quiz: [
      { id: 'lesson-16-q1', type: 'mc', prompt: 'In the ACTS prayer model, "A" stands for...', choices: ['Asking', 'Adoration', 'Anxiety', 'Agreement'], answer: 'Adoration', explanation: 'Begin with praise for who God is before bringing requests.', tags: ['prayer'] },
      { id: 'lesson-16-q2', type: 'mc', prompt: 'According to 1 John 5:14, God hears prayers asked...', choices: ['Loudly', 'According to his will', 'With many words', 'Only in church'], answer: 'According to his will', explanation: 'Confidence in prayer rests on alignment with God\'s will, not technique.', tags: ['prayer'] },
      { id: 'lesson-16-q3', type: 'tf', prompt: '1 Thessalonians 5:17 ("pray without ceasing") means Christians must never stop speaking prayers aloud.', answer: 'False', explanation: 'It describes ongoing communion with God throughout the day, not nonstop verbal prayer.', tags: ['prayer'] },
      { id: 'lesson-16-q4', type: 'mc', prompt: 'Which of these is a good way to grow in prayer?', choices: ['Only pray when you feel like it', 'Pray Scripture and keep a record of answers', 'Use as many words as possible', 'Pray only in King James English'], answer: 'Pray Scripture and keep a record of answers', explanation: 'Praying God\'s words back to him and tracking his faithfulness builds a praying life.', tags: ['prayer'] },
    ],
    prayer: `Father, teach me to pray. I adore you for who you are; I confess my sins; I thank you for your blessings; I ask for my needs and others'. Make prayer my ongoing conversation with you, not a ritual. In Jesus' name, amen.`,
  },
  {
    id: 'lesson-17',
    title: 'How to Understand Difficult Passages',
    body: `## Expect Some Difficulty
Even Peter said Paul's letters contain "some things hard to understand" (2 Peter 3:16). If an apostle found Scripture challenging, we shouldn't be surprised when we do. Difficulty isn't a defect — it's an invitation to dig deeper. The Ethiopian eunuch needed Philip's help (Acts 8:31); God gave teachers to the church for this reason (Ephesians 4:11).

## Common Reasons for Confusion
Most difficulties come from a few sources: **cultural distance** (ancient customs we don't share), **language** (Hebrew/Greek nuances), **genre** (poetry, prophecy, and apocalyptic use symbolism), **context** (we're missing the historical situation), or **our assumptions** (reading modern ideas into ancient text). Identifying which barrier you're facing is half the solution.

## Tools for the Dig
**Context first:** read the surrounding chapter and book; check cross-references. **Let Scripture interpret Scripture:** clear passages illuminate unclear ones. **Consider genre:** don't read Revelation's dragons as zoology or Psalms' poetry as science. **Check the original setting:** a study Bible or commentary explains customs and history. **Ask:** what did this mean to the first readers? That's the anchor for what it means for us. **Be patient:** some questions resolve with maturity; "we know in part" (1 Corinthians 13:9).

## Humility and Confidence Together
Hold two truths: Scripture is clear on what's essential (the gospel is plain), and some things remain mysterious (Deuteronomy 29:29). Don't build doctrines on obscure verses; do keep studying. And never let a difficult passage shake a clear one — interpret the unclear by the clear, not vice versa. The goal is knowing God, not winning arguments. Stay humble, stay curious, keep digging.`,
    keyTerms: [
      { term: 'Exegesis', definition: 'Drawing meaning out of the text (vs. eisegesis — reading meaning into it).' },
      { term: 'Hermeneutics', definition: 'The principles and methods of interpreting Scripture.' },
      { term: 'Genre', definition: 'Literary type (history, poetry, prophecy, letter) that guides interpretation.' },
      { term: 'Study Bible', definition: 'A Bible with notes explaining context, customs, and difficult passages.' },
    ],
    quiz: [
      { id: 'lesson-17-q1', type: 'mc', prompt: 'According to 2 Peter 3:16, even Peter found some of Paul\'s writings...', choices: ['Boring', 'Hard to understand', 'Too long', 'Contradictory'], answer: 'Hard to understand', explanation: 'Difficulty in Scripture is normal — even apostles experienced it.', tags: ['theology'] },
      { id: 'lesson-17-q2', type: 'mc', prompt: 'The first tool for understanding a difficult passage is...', choices: ['Guessing', 'Context — the surrounding chapter and book', 'Ignoring it', 'Asking social media'], answer: 'Context — the surrounding chapter and book', explanation: 'Most confusion clears when we read the surrounding verses and the book\'s flow.', tags: ['theology'] },
      { id: 'lesson-17-q3', type: 'tf', prompt: 'We should interpret unclear passages in light of clear ones, not the reverse.', answer: 'True', explanation: 'Let Scripture interpret Scripture — clear passages anchor our understanding of difficult ones.', tags: ['theology'] },
      { id: 'lesson-17-q4', type: 'mc', prompt: 'Deuteronomy 29:29 teaches that...', choices: ['Everything is fully explainable', 'Some things remain God\'s secret; we obey what is revealed', 'We should not study', 'Mystery means error'], answer: 'Some things remain God\'s secret; we obey what is revealed', explanation: '"The secret things belong to the LORD our God, but the things that are revealed belong to us."', tags: ['theology'] },
    ],
    prayer: `Lord, when your word is hard to understand, give me humility to keep digging and patience to wait for light. Let clear passages anchor me, and let difficulty drive me deeper, not away. Teach me through your word and your people. In Jesus' name, amen.`,
  },
];

export function getLesson(id: string): Lesson | undefined {
  return BEGINNER_PATH.find((l) => l.id === id);
}
