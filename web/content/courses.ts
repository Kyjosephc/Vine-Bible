import type { QuizQuestion } from '@/lib/types';

export interface CourseLesson {
  id: string;
  title: string;
  body: string;
  quiz: QuizQuestion[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  lessons: CourseLesson[];
}

export const COURSES: Course[] = [
  {
    id: 'christianity-101',
    title: 'Christianity 101',
    description: 'The essential foundations of the Christian faith: who God is, what Jesus did, and how to begin the Christian life. Perfect for new believers and curious seekers.',
    level: 'beginner',
    lessons: [
      {
        id: 'christianity-101-l1',
        title: 'Who Is God?',
        body: `## One God, Three Persons\nChristianity teaches there is one God who exists eternally as three persons: Father, Son, and Holy Spirit. This is the Trinity — not three gods, but one God in three persons, each fully divine. We see all three at Jesus's baptism: the Son baptized, the Spirit descending, the Father speaking (Matthew 3:16-17).\n\n## What God Is Like\nGod is holy (perfectly pure), loving ("God is love," 1 John 4:8), just, merciful, all-powerful, all-knowing, eternal, and unchanging. His attributes work in harmony — his love is holy, his justice is loving. He is personal: he speaks, acts, and invites relationship.\n\n## Why It Matters\nWhat you believe about God shapes everything. A distant God produces distant religion; the biblical God — holy yet near, just yet merciful — invites worship and trust. "This is eternal life, that they should know you, the only true God" (John 17:3).`,
        quiz: [
          { id: 'christianity-101-l1-q1', type: 'mc', prompt: 'The Trinity means...', choices: ['Three gods', 'One God in three persons', 'God with three moods', 'Three parts of God'], answer: 'One God in three persons', explanation: 'One divine being, three distinct persons — Father, Son, Holy Spirit.', tags: ['theology'] },
          { id: 'christianity-101-l1-q2', type: 'mc', prompt: '1 John 4:8 says...', choices: ['God has love', 'God is love', 'Love is optional', 'God needs love'], answer: 'God is love', explanation: 'Love is not just something God does; it is who he is.', tags: ['theology'] },
          { id: 'christianity-101-l1-q3', type: 'tf', prompt: 'Christians believe God is personal — he speaks, loves, and acts.', answer: 'True', explanation: 'God is not an impersonal force but a personal being who invites relationship.', tags: ['theology'] },
        ],
      },
      {
        id: 'christianity-101-l2',
        title: 'Who Is Jesus?',
        body: `## Fully God, Fully Man\nJesus is the eternal Son of God who became human: "the Word became flesh" (John 1:14). He is fully God (John 1:1; 20:28) and fully man (he hungered, wept, was tempted). Only as God could he bear sin's infinite penalty; only as man could he represent us. The bridge must touch both sides.\n\n## What He Did\nJesus lived a perfect life, died on the cross for our sins ("Christ died for our sins," 1 Corinthians 15:3), rose bodily on the third day, ascended to heaven, and will return. His death was substitutionary — he took our place. His resurrection proves his victory and guarantees ours.\n\n## Why It Matters\nChristianity stands or falls on Jesus. He is not merely a teacher but the Savior. "There is salvation in no one else, for there is no other name under heaven... by which we must be saved" (Acts 4:12).`,
        quiz: [
          { id: 'christianity-101-l2-q1', type: 'mc', prompt: 'John 1:14 says...', choices: ['The Word stayed in heaven', 'The Word became flesh', 'The Word was a metaphor', 'The Word was hidden'], answer: 'The Word became flesh', explanation: 'The eternal Son took on full humanity — the incarnation.', tags: ['theology'] },
          { id: 'christianity-101-l2-q2', type: 'tf', prompt: 'Jesus was truly tempted as we are, yet without sin.', answer: 'True', explanation: 'Hebrews 4:15 — his real temptation makes him a sympathetic high priest.', tags: ['theology'] },
          { id: 'christianity-101-l2-q3', type: 'mc', prompt: 'According to 1 Corinthians 15:3, Christ died...', choices: ['As a martyr example', 'For our sins', 'By accident', 'For political reasons'], answer: 'For our sins', explanation: 'His death was substitutionary — for our sins, in our place.', tags: ['salvation'] },
        ],
      },
      {
        id: 'christianity-101-l3',
        title: 'What Is the Gospel?',
        body: `## Good News, Not Good Advice\n"Gospel" means good news — the announcement that God has saved sinners through Jesus Christ. It's news (something done) before advice (something to do). Every other religion says "do"; Christianity says "done."\n\n## The Four Movements\n**God** made us and is holy. **We** rebelled — "all have sinned" (Romans 3:23). **Christ** died for sinners and rose again (Romans 5:8; 1 Corinthians 15:3-4). **We respond** by repenting (turning from sin) and believing (trusting Christ alone). "Believe in the Lord Jesus Christ, and you will be saved" (Acts 16:31).\n\n## Why It's Good\nWe couldn't save ourselves, so God did. Salvation is "not of works, that no one would boast" (Ephesians 2:9). This humbles the proud and comforts the broken — the best news ever announced.`,
        quiz: [
          { id: 'christianity-101-l3-q1', type: 'mc', prompt: '"Gospel" means...', choices: ['Good rules', 'Good news', 'God\'s book', 'Moral code'], answer: 'Good news', explanation: 'From Greek euangelion — God\'s announced victory in Christ.', tags: ['theology'] },
          { id: 'christianity-101-l3-q2', type: 'mc', prompt: 'Romans 3:23 teaches...', choices: ['Some have sinned', 'All have sinned and fall short of God\'s glory', 'Sin is minor', 'Only non-Christians sin'], answer: 'All have sinned and fall short of God\'s glory', explanation: 'Universal sinfulness is why everyone needs the gospel.', tags: ['salvation'] },
          { id: 'christianity-101-l3-q3', type: 'mc', prompt: 'Ephesians 2:9 says salvation is "not of works" so that...', choices: ['We can sin freely', 'No one would boast', 'Works don\'t matter at all', 'Faith is unnecessary'], answer: 'No one would boast', explanation: 'Salvation is entirely God\'s gift, eliminating human pride.', tags: ['grace', 'salvation'] },
        ],
      },
      {
        id: 'christianity-101-l4',
        title: 'Beginning the Christian Life',
        body: `## The New Birth\nJesus told Nicodemus, "unless one is born again, he can't see God's Kingdom" (John 3:3). Becoming a Christian is spiritual rebirth — the Holy Spirit giving new life to those who repent and believe. It's God's work received by faith, not human achievement.\n\n## Marks of New Life\nNew believers receive forgiveness (1 John 1:9), the Holy Spirit (Ephesians 1:13), adoption as God's children (John 1:12), and eternal life (John 3:16). Growth follows: prayer, Scripture, fellowship, obedience, and witness. "If anyone is in Christ, he is a new creation" (2 Corinthians 5:17).\n\n## Next Steps\nBe baptized (Acts 2:38) — the public declaration of faith. Join a local church (Hebrews 10:25) — Christians grow in community. Start reading Scripture (begin with Mark) and praying daily. Tell someone what Christ has done. The Christian life is a journey; today you take the first step.`,
        quiz: [
          { id: 'christianity-101-l4-q1', type: 'mc', prompt: 'Jesus told Nicodemus one must be...', choices: ['Baptized as an infant', 'Born again', 'Morally perfect', 'Wealthy'], answer: 'Born again', explanation: 'John 3:3 — spiritual rebirth by the Spirit is necessary to enter God\'s kingdom.', tags: ['salvation', 'jesus-ministry'] },
          { id: 'christianity-101-l4-q2', type: 'mc', prompt: '2 Corinthians 5:17 says anyone in Christ is...', choices: ['Slightly improved', 'A new creation', 'Automatically perfect', 'Exempt from trouble'], answer: 'A new creation', explanation: 'Conversion is radical transformation, not minor adjustment.', tags: ['salvation'] },
          { id: 'christianity-101-l4-q3', type: 'tf', prompt: 'Baptism and church involvement are suggested next steps for new believers.', answer: 'True', explanation: 'Baptism (Acts 2:38) and gathering with believers (Hebrews 10:25) are the biblical pattern.', tags: ['theology'] },
        ],
      },
    ],
  },
  {
    id: 'understanding-the-bible',
    title: 'Understanding the Bible',
    description: 'How the Bible came to be, how it\'s organized, and why Christians trust it. Build confidence in Scripture as God\'s word.',
    level: 'beginner',
    lessons: [
      {
        id: 'understanding-the-bible-l1',
        title: 'What Is the Bible?',
        body: `## A Library, Not Just a Book\nThe Bible is 66 books by 40+ authors over 1,500 years — yet one unified story of God's rescue through Christ. "All Scripture is God-breathed" (2 Timothy 3:16): divine authorship through human personalities. Luke researched like a historian; David wrote poetry; Paul reasoned theologically.\n\n## What It Does\nScripture is a lamp (Psalm 119:105), food (Matthew 4:4), a sword (Ephesians 6:17), and a mirror (James 1:23-25). It reveals God, exposes us, and proclaims Christ — "all the Scriptures" testify of him (Luke 24:27).\n\n## How to Approach It\nRead prayerfully, regularly, and in community. Start with Mark's Gospel. Expect to meet God, not just collect facts. Even Peter found parts "hard to understand" (2 Peter 3:16) — difficulty is normal.`,
        quiz: [
          { id: 'understanding-the-bible-l1-q1', type: 'mc', prompt: 'How many books are in the Bible?', choices: ['27', '40', '66', '100'], answer: '66', explanation: '39 Old Testament + 27 New Testament.', tags: ['theology'] },
          { id: 'understanding-the-bible-l1-q2', type: 'mc', prompt: '2 Timothy 3:16 says all Scripture is...', choices: ['Human opinion', 'God-breathed', 'Mostly reliable', 'Symbolic only'], answer: 'God-breathed', explanation: 'Divine inspiration through human authors.', tags: ['theology'] },
          { id: 'understanding-the-bible-l1-q3', type: 'tf', prompt: 'The whole Bible, including the Old Testament, points to Jesus Christ.', answer: 'True', explanation: 'Luke 24:27 — Jesus showed how all the Scriptures testify of him.', tags: ['theology'] },
        ],
      },
      {
        id: 'understanding-the-bible-l2',
        title: 'Old and New Testaments',
        body: `## One Story, Two Covenants\n"Testament" means covenant. The Old (39 books) records God's covenant with Israel, promising a Savior. The New (27 books) announces the new covenant in Christ's blood (Luke 22:20). Same God, same story — promise then fulfillment.\n\n## Not Two Gods\nThe Old reveals God's love (Exodus 34:6) and the New his judgment (Revelation) — one unchanging character (Malachi 3:6). Jesus came to fulfill the Law and Prophets, not destroy them (Matthew 5:17). The sacrifices, festivals, and temple were shadows; Christ is the substance (Hebrews 10:1).\n\n## Reading Both\nRead the Old as promise pointing to Christ; read the New as fulfillment. Its history teaches (1 Corinthians 10:11), its law reveals God's heart, its psalms voice our prayers. Together: one book, one hero.`,
        quiz: [
          { id: 'understanding-the-bible-l2-q1', type: 'mc', prompt: '"Testament" means...', choices: ['Old book', 'Covenant', 'Testimony of men', 'Collection'], answer: 'Covenant', explanation: 'The Bible records God\'s covenant relationship with his people, old and new.', tags: ['theology'] },
          { id: 'understanding-the-bible-l2-q2', type: 'mc', prompt: 'Matthew 5:17: Jesus came to the Law...', choices: ['To destroy it', 'To fulfill it', 'To ignore it', 'To add rules'], answer: 'To fulfill it', explanation: 'Christ completes what the Old Testament promised and pictured.', tags: ['teachings'] },
          { id: 'understanding-the-bible-l2-q3', type: 'tf', prompt: 'The Old and New Testaments reveal two different Gods.', answer: 'False', explanation: '"I the LORD do not change" (Malachi 3:6) — one God, one story.', tags: ['theology'] },
        ],
      },
      {
        id: 'understanding-the-bible-l3',
        title: 'How We Got the Bible',
        body: `## Copying and Canon\nScribes copied the Old Testament with meticulous care; the Dead Sea Scrolls (1947) confirmed 1,000 years of accuracy. The New Testament spread rapidly among churches. The canon — the recognized book list — was acknowledged, not invented, by the church using tests of apostolicity, consistency, and acceptance.\n\n## Translation\nFrom the Septuagint (Greek OT, ~250 BC) to Wycliffe, Tyndale (martyred 1536), the KJV (1611), and modern versions — the Bible is translated into 3,000+ languages. Faithful translations agree on the core message.\n\n## Trustworthy\nOver 5,800 Greek New Testament manuscripts survive — far more than any other ancient text. No major doctrine rests on a disputed reading. The Bible we hold is essentially the Bible as written.`,
        quiz: [
          { id: 'understanding-the-bible-l3-q1', type: 'mc', prompt: 'The Dead Sea Scrolls confirmed...', choices: ['The Bible was medieval fiction', 'Remarkable accuracy of the Hebrew text', 'The NT was written in Hebrew', 'New books to add'], answer: 'Remarkable accuracy of the Hebrew text', explanation: 'A 1,000-year transmission with extraordinary fidelity.', tags: ['theology'] },
          { id: 'understanding-the-bible-l3-q2', type: 'tf', prompt: 'The church created biblical authority by voting on books.', answer: 'False', explanation: 'The church recognized books already functioning as God\'s word.', tags: ['theology'] },
          { id: 'understanding-the-bible-l3-q3', type: 'mc', prompt: 'About how many Greek NT manuscripts exist?', choices: ['Under 100', 'About 1,000', 'Over 5,800', 'Exactly 66'], answer: 'Over 5,800', explanation: 'The best-attested book of antiquity by far.', tags: ['theology'] },
        ],
      },
      {
        id: 'understanding-the-bible-l4',
        title: 'Why Trust the Bible?',
        body: `## Jesus Trusted It\nJesus treated Scripture as God's authoritative word: "Scripture can't be broken" (John 10:35). He answered temptation with "It is written" (Matthew 4:4). If Christ is Lord, his view of Scripture is ours.\n\n## It Bears Fruit\nThe Bible has transformed lives, cultures, and nations for millennia — freeing slaves, founding hospitals, inspiring art and science. Its moral vision (human dignity, forgiveness, love of enemy) reshaped civilization. Truth proves itself in transformed lives.\n\n## The Spirit Confirms It\nUltimately, confidence in Scripture is the Spirit's work: "the Spirit of truth... will guide you into all truth" (John 16:13). Evidence supports faith; the Spirit creates it. Read it expecting God to speak — he will.`,
        quiz: [
          { id: 'understanding-the-bible-l4-q1', type: 'mc', prompt: 'Jesus said of Scripture...', choices: ['It contains errors', 'Scripture can\'t be broken', 'It\'s outdated', 'Only parts matter'], answer: 'Scripture can\'t be broken', explanation: 'John 10:35 — Christ\'s high view of Scripture grounds ours.', tags: ['teachings'] },
          { id: 'understanding-the-bible-l4-q2', type: 'mc', prompt: 'How did Jesus answer Satan\'s temptations?', choices: ['With miracles', 'With "It is written"', 'With silence', 'With debate'], answer: 'With "It is written"', explanation: 'Matthew 4 — Scripture was Christ\'s sword; it is ours too.', tags: ['jesus-ministry'] },
          { id: 'understanding-the-bible-l4-q3', type: 'tf', prompt: 'The Holy Spirit confirms Scripture\'s truth to believers\' hearts.', answer: 'True', explanation: 'The Spirit of truth guides into all truth (John 16:13).', tags: ['theology'] },
        ],
      },
    ],
  },
  {
    id: 'how-to-read-the-bible',
    title: 'How to Read the Bible',
    description: 'Practical skills for reading Scripture well: observation, interpretation, application, and building a lifelong habit.',
    level: 'beginner',
    lessons: [
      {
        id: 'how-to-read-the-bible-l1',
        title: 'Start with Prayer',
        body: `## Ask the Author\nBefore reading, pray: "Open my eyes, that I may see wondrous things from your law" (Psalm 119:18). The Spirit who inspired Scripture illuminates it (1 Corinthians 2:12). Thirty seconds of prayer turns reading from duty into encounter.\n\n## Come Humbly\nApproach Scripture to be shaped, not just informed. "Receive with meekness the implanted word" (James 1:21). Come expecting God to speak — through comfort, conviction, or calling. The goal is meeting God, not mastering content.\n\n## Read Expectantly\nGod promises his word won't return empty (Isaiah 55:11). Read with faith that he will speak. Keep a notebook: date, passage, one insight, one prayer. Expectancy transforms routine into relationship.`,
        quiz: [
          { id: 'how-to-read-the-bible-l1-q1', type: 'mc', prompt: 'Psalm 119:18 prays...', choices: ['Give me riches', 'Open my eyes to see wondrous things in your law', 'Bless my plans', 'Judge my enemies'], answer: 'Open my eyes to see wondrous things in your law', explanation: 'Prayerful dependence opens Scripture.', tags: ['psalms', 'prayer'] },
          { id: 'how-to-read-the-bible-l1-q2', type: 'tf', prompt: 'The main goal of Bible reading is gathering information.', answer: 'False', explanation: 'The goal is meeting God and being shaped by his word.', tags: ['theology'] },
          { id: 'how-to-read-the-bible-l1-q3', type: 'mc', prompt: 'Isaiah 55:11 promises God\'s word...', choices: ['Will return empty', 'Will not return void but accomplish his purpose', 'Is hard to find', 'Only works for pastors'], answer: 'Will not return void but accomplish his purpose', explanation: 'God\'s word always achieves what he intends.', tags: ['theology'] },
        ],
      },
      {
        id: 'how-to-read-the-bible-l2',
        title: 'Observe: What Does It Say?',
        body: `## Slow Down\nObservation is careful noticing: who, what, when, where, why? Read slowly — even aloud. Notice repeated words, contrasts, commands, promises. Ask: what does this actually say (not what I assume)?\n\n## Mark It Up\nUnderline, circle repeated words, note connections. In narrative: track characters and plot. In letters: follow the argument. In poetry: feel the imagery. Good observation asks dozens of small questions before jumping to answers.\n\n## Example\nRead Mark 1:29-34 slowly. Who's there? What does Jesus do? Notice: he heals "many" — then rises "a great while before day" to pray. Observation: ministry output flowed from prayer input. Don't rush past details; they're the doorway to meaning.`,
        quiz: [
          { id: 'how-to-read-the-bible-l2-q1', type: 'mc', prompt: 'The first step of Bible study, observation, asks...', choices: ['What does it mean for me?', 'What does the text actually say?', 'What do scholars debate?', 'What should I skip?'], answer: 'What does the text actually say?', explanation: 'Careful noticing precedes interpretation.', tags: ['theology'] },
          { id: 'how-to-read-the-bible-l2-q2', type: 'tf', prompt: 'Noticing repeated words and contrasts is part of good observation.', answer: 'True', explanation: 'Repetition and structure reveal emphasis and meaning.', tags: ['theology'] },
          { id: 'how-to-read-the-bible-l2-q3', type: 'mc', prompt: 'In Mark 1:35, Jesus rose early to...', choices: ['Plan strategy', 'Pray', 'Eat breakfast', 'Avoid crowds'], answer: 'Pray', explanation: 'Ministry flowed from prayer — an observed pattern.', tags: ['jesus-ministry'] },
        ],
      },
      {
        id: 'how-to-read-the-bible-l3',
        title: 'Interpret: What Did It Mean?',
        body: `## Context Is King\nInterpretation asks: what did this mean to the original readers? Read surrounding verses, the chapter, the book. A verse ripped from context becomes a pretext. "You have heard... but I tell you" (Matthew 5) only makes sense within the Sermon on the Mount.\n\n## Honor the Genre\nRead poetry as poetry (Psalms' imagery isn't science), narrative as narrative (descriptions aren't always prescriptions), letters as letters (occasional, argumentative), prophecy and apocalyptic as symbolic. Genre guides expectations.\n\n## Let Scripture Interpret Scripture\nClear passages illuminate unclear ones. If a verse seems to contradict the gospel, you've misread it — reinterpret the unclear by the clear. Cross-references and study Bibles help. The main point of a passage is usually plain; major on the majors.`,
        quiz: [
          { id: 'how-to-read-the-bible-l3-q1', type: 'mc', prompt: 'The key question of interpretation is...', choices: ['What does this mean to me?', 'What did this mean to the original readers?', 'What is the hidden code?', 'What do I wish it said?'], answer: 'What did this mean to the original readers?', explanation: 'Original meaning anchors faithful application.', tags: ['theology'] },
          { id: 'how-to-read-the-bible-l3-q2', type: 'tf', prompt: 'Different genres (poetry, narrative, letter) should be read the same way.', answer: 'False', explanation: 'Genre shapes how we interpret — poetry isn\'t read like history.', tags: ['theology'] },
          { id: 'how-to-read-the-bible-l3-q3', type: 'mc', prompt: 'When a passage seems unclear, we should...', choices: ['Build doctrine on it anyway', 'Interpret it by clear passages', 'Ignore the clear passages', 'Guess'], answer: 'Interpret it by clear passages', explanation: 'Let Scripture interpret Scripture.', tags: ['theology'] },
        ],
      },
      {
        id: 'how-to-read-the-bible-l4',
        title: 'Apply: What Will I Do?',
        body: `## From Hearing to Doing\n"Be doers of the word, and not hearers only, deceiving yourselves" (James 1:22). Application bridges ancient text to present life. Ask: Is there a command to obey? A promise to claim? A sin to confess? An example to follow? A truth to believe?\n\n## Make It Specific\nVague applications change nothing. Instead of "trust God more," try: "When anxious about the meeting Thursday, I will pray Philippians 4:6 instead of rehearsing fears." Specific, measurable, dated. Share it with someone for accountability.\n\n## Build the Rhythm\nRead whole books, not just verses. Keep it sustainable — a chapter a day beats sporadic marathons. Journal briefly. Discuss with others. And on days you don't feel like it, read anyway: feelings follow obedience, and the goal is meeting God, not finishing plans.`,
        quiz: [
          { id: 'how-to-read-the-bible-l4-q1', type: 'mc', prompt: 'James 1:22 commands us to be...', choices: ['Hearers only', 'Doers of the word, not hearers only', 'Critics', 'Spectators'], answer: 'Doers of the word, not hearers only', explanation: 'Application completes Bible study.', tags: ['prayer'] },
          { id: 'how-to-read-the-bible-l4-q2', type: 'tf', prompt: 'Good applications are specific and measurable, not vague.', answer: 'True', explanation: 'Specific obedience ("I will pray Thursday") beats vague intentions.', tags: ['theology'] },
          { id: 'how-to-read-the-bible-l4-q3', type: 'mc', prompt: 'A sustainable Bible reading rhythm is...', choices: ['The whole Bible in a week', 'A chapter a day, consistently', 'Only on holidays', 'Only difficult passages'], answer: 'A chapter a day, consistently', explanation: 'Consistency beats intensity for lifelong growth.', tags: ['theology'] },
        ],
      },
    ],
  },
  {
    id: 'life-of-jesus',
    title: 'The Life of Jesus',
    description: 'Walk through Jesus\'s birth, ministry, miracles, death, and resurrection. Meet the central figure of history and faith.',
    level: 'beginner',
    lessons: [
      {
        id: 'life-of-jesus-l1',
        title: 'The Birth of Jesus',
        body: `## Promised and Born\nCenturies of prophecy culminated in Bethlehem: "a virgin will conceive" (Isaiah 7:14), born in Bethlehem (Micah 5:2), of David's line (2 Samuel 7:16). Jesus was born to Mary by the Holy Spirit (Luke 1:35), laid in a manger because there was no room (Luke 2:7) — the King arriving in obscurity.\n\n## Why the Virgin Birth Matters\nIt fulfills prophecy, shows Jesus is fully God (conceived by the Spirit) and fully man (born of Mary), and means he didn't inherit Adam's sinful nature. He is the sinless second Adam.\n\n## The World's Response\nShepherds worshiped; Magi brought gifts; Herod tried to kill him. From birth, Jesus divided the world — adored by the humble, opposed by the proud. The question of Christmas is still: what will you do with this child?`,
        quiz: [
          { id: 'life-of-jesus-l1-q1', type: 'mc', prompt: 'Micah 5:2 prophesied the Messiah would be born in...', choices: ['Nazareth', 'Bethlehem', 'Jerusalem', 'Capernaum'], answer: 'Bethlehem', explanation: 'Fulfilled in Matthew 2:1 and Luke 2:4-7.', tags: ['jesus-birth'] },
          { id: 'life-of-jesus-l1-q2', type: 'mc', prompt: 'Jesus was conceived by...', choices: ['Joseph', 'The Holy Spirit', 'Human planning', 'Adoption'], answer: 'The Holy Spirit', explanation: 'Luke 1:35 — the virgin birth shows his deity and sinlessness.', tags: ['jesus-birth'] },
          { id: 'life-of-jesus-l1-q3', type: 'tf', prompt: 'Herod the Great welcomed the newborn Jesus.', answer: 'False', explanation: 'Herod tried to kill him (Matthew 2:16) — Jesus divided responses from birth.', tags: ['jesus-birth'] },
        ],
      },
      {
        id: 'life-of-jesus-l2',
        title: 'The Ministry of Jesus',
        body: `## Baptism and Temptation\nAt about 30, Jesus was baptized by John (Matthew 3:13-17) — the Father's voice, the Spirit's descent. Then 40 days in the wilderness, tempted by Satan, victorious by Scripture: "It is written" (Matthew 4:4). He faced our temptations and won.\n\n## Teaching and Calling\nJesus preached "the gospel of the kingdom" (Mark 1:14-15): repent and believe. He taught with authority (Matthew 7:29) — in parables, sermons, and conversations. He called twelve disciples, ordinary men, to follow him and become "fishers of men" (Mark 1:17).\n\n## A Ministry of Compassion\n"He went about doing good" (Acts 10:38) — healing, feeding, forgiving, welcoming outcasts. His ministry revealed God's heart: holy yet merciful, truthful yet gracious. Everything he did displayed the kingdom he proclaimed.`,
        quiz: [
          { id: 'life-of-jesus-l2-q1', type: 'mc', prompt: 'How did Jesus defeat Satan\'s temptations?', choices: ['With miracles', 'With "It is written" — Scripture', 'With angels\' help', 'By avoiding them'], answer: 'With "It is written" — Scripture', explanation: 'Matthew 4 — God\'s word is the sword against temptation.', tags: ['jesus-ministry'] },
          { id: 'life-of-jesus-l2-q2', type: 'mc', prompt: 'How many apostles did Jesus choose?', choices: ['10', '12', '70', '7'], answer: '12', explanation: 'Twelve apostles, mirroring Israel\'s twelve tribes.', tags: ['disciples'] },
          { id: 'life-of-jesus-l2-q3', type: 'tf', prompt: 'Jesus\'s core message was "repent and believe the gospel."', answer: 'True', explanation: 'Mark 1:14-15 summarizes his preaching.', tags: ['jesus-ministry'] },
        ],
      },
      {
        id: 'life-of-jesus-l3',
        title: 'The Miracles of Jesus',
        body: `## Signs of the Kingdom\nJohn calls miracles "signs" — they point beyond themselves to who Jesus is. He healed the sick, calmed storms, fed thousands, raised the dead, and cast out demons. Each miracle displayed kingdom power breaking into a broken world.\n\n## Compassion and Authority\nMiracles flowed from compassion ("moved with compassion," Matthew 14:14) and demonstrated authority — over nature, disease, demons, and death. They authenticated his claims: "the works that I do... testify about me" (John 10:25).\n\n## The Greatest Miracle\nEvery miracle foreshadowed the resurrection — Jesus's victory over death itself. The miracles invite faith: they show a Savior both willing and able to save. What he did in bodies, he does in souls: he makes dead things live.`,
        quiz: [
          { id: 'life-of-jesus-l3-q1', type: 'mc', prompt: 'John calls Jesus\'s miracles...', choices: ['Tricks', 'Signs', 'Myths', 'Coincidences'], answer: 'Signs', explanation: 'Signs point to Jesus\'s identity and the kingdom\'s arrival.', tags: ['miracles'] },
          { id: 'life-of-jesus-l3-q2', type: 'mc', prompt: 'Jesus\'s miracles demonstrated authority over...', choices: ['Nature, disease, demons, and death', 'Only disease', 'Only nature', 'Roman government'], answer: 'Nature, disease, demons, and death', explanation: 'Comprehensive authority proving his divine identity.', tags: ['miracles'] },
          { id: 'life-of-jesus-l3-q3', type: 'tf', prompt: 'Jesus\'s miracles were motivated by compassion as well as power.', answer: 'True', explanation: '"Moved with compassion" (Matthew 14:14) — power serving love.', tags: ['miracles'] },
        ],
      },
      {
        id: 'life-of-jesus-l4',
        title: 'The Death of Jesus',
        body: `## The Cross\nBetrayed, tried unjustly, beaten, and crucified — Jesus died a criminal's death. But the cross was God's plan: "Christ died for our sins" (1 Corinthians 15:3). He bore God's wrath in our place (Isaiah 53:5-6). "Father, forgive them" (Luke 23:34) — even dying, he interceded.\n\n## Why He Had to Die\nSin's penalty is death (Romans 6:23). Either we pay it forever or a substitute pays it once. Jesus, sinless and divine, could pay for all. The cross displays God's justice (sin punished) and love (sinners spared) simultaneously.\n\n## It Is Finished\n"Tetelestai" — paid in full (John 19:30). The temple curtain tore (Matthew 27:51): access to God opened. The cross isn't defeat but victory — the serpent's head crushed (Genesis 3:15) through apparent defeat.`,
        quiz: [
          { id: 'life-of-jesus-l4-q1', type: 'mc', prompt: '1 Corinthians 15:3 says Christ died...', choices: ['As an example only', 'For our sins', 'By mistake', 'For Israel only'], answer: 'For our sins', explanation: 'Substitutionary atonement — in our place, for our sins.', tags: ['death-resurrection'] },
          { id: 'life-of-jesus-l4-q2', type: 'mc', prompt: 'Jesus\'s final word from the cross, "It is finished," means...', choices: ['I give up', 'Paid in full', 'It\'s over', 'I\'m tired'], answer: 'Paid in full', explanation: 'Tetelestai — the debt of sin fully paid.', tags: ['death-resurrection'] },
          { id: 'life-of-jesus-l4-q3', type: 'tf', prompt: 'The tearing of the temple curtain symbolized opened access to God.', answer: 'True', explanation: 'Matthew 27:51 — the barrier removed through Christ\'s death.', tags: ['death-resurrection'] },
        ],
      },
      {
        id: 'life-of-jesus-l5',
        title: 'The Resurrection of Jesus',
        body: `## He Is Risen\nOn the third day, the tomb was empty. Jesus appeared to Mary Magdalene, the disciples, 500 at once (1 Corinthians 15:6), and Paul. The resurrection was bodily — he ate, was touched, yet passed through walls. Not resuscitation but transformation.\n\n## Why It Matters\nThe resurrection vindicates Christ's claims (Romans 1:4), defeats death (1 Corinthians 15:54-57), guarantees our resurrection (1 Corinthians 15:20), and empowers present life (Ephesians 1:19-20). Without it, "your faith is vain" (1 Corinthians 15:17). With it, everything changes.\n\n## The Evidence\nThe empty tomb, the transformed disciples (cowards to martyrs), the women witnesses (unlikely invented), the 500 eyewitnesses, and the church's explosive birth all point to the same fact. Christianity's central claim is historical: Jesus rose. "Do you believe this?" (John 11:26).`,
        quiz: [
          { id: 'life-of-jesus-l5-q1', type: 'mc', prompt: 'On which day did Jesus rise?', choices: ['The second', 'The third', 'The seventh', 'The fortieth'], answer: 'The third', explanation: '1 Corinthians 15:4 — "he was raised on the third day."', tags: ['death-resurrection'] },
          { id: 'life-of-jesus-l5-q2', type: 'mc', prompt: '1 Corinthians 15:17 says without the resurrection...', choices: ['Faith is still fine', 'Your faith is vain', 'We\'d never know', 'It doesn\'t matter'], answer: 'Your faith is vain', explanation: 'The resurrection is essential, not optional.', tags: ['death-resurrection'] },
          { id: 'life-of-jesus-l5-q3', type: 'tf', prompt: 'Jesus appeared to over 500 eyewitnesses at once after rising.', answer: 'True', explanation: '1 Corinthians 15:6 — Paul cites verifiable eyewitnesses.', tags: ['death-resurrection'] },
        ],
      },
    ],
  },

  {
    id: 'teachings-of-jesus',
    title: 'Teachings of Jesus',
    description: 'Go deeper into Christ\'s most important teachings: the Sermon on the Mount, his parables, and his claims about himself. For those ready to move beyond the basics.',
    level: 'intermediate',
    lessons: [
      {
        id: 'teachings-of-jesus-l1',
        title: 'The Sermon on the Mount I: Kingdom Character',
        body: `## The Beatitudes (Matthew 5:1-12)\nJesus opens his most famous sermon by congratulating the world's "losers": the poor in spirit, mourners, the meek, the hungry for righteousness. Each receives a kingdom promise. This is upside-down blessedness — God's favor rests on the humble, not the impressive. "Poor in spirit" is the doorway: spiritual bankruptcy that receives grace.\n\n## Salt and Light (5:13-16)\nDisciples are salt (preserving, flavoring a decaying world) and light (exposing darkness, guiding home). Both work by contact, not withdrawal. "Let your light shine before men... that they may... glorify your Father" — good works point to God, not us.\n\n## The Deeper Righteousness (5:17-48)\nJesus fulfills the Law by deepening it: anger equals murder's root, lust equals adultery's heart. Six "you have heard... but I tell you" statements internalize obedience. The standard — "be perfect as your Father is perfect" (5:48) — crushes self-righteousness and drives us to grace.`,
        quiz: [
          { id: 'teachings-of-jesus-l1-q1', type: 'mc', prompt: 'The first Beatitude blesses...', choices: ['The rich', 'The poor in spirit', 'The powerful', 'The popular'], answer: 'The poor in spirit', explanation: 'Matthew 5:3 — spiritual poverty is the doorway to the kingdom.', tags: ['teachings'] },
          { id: 'teachings-of-jesus-l1-q2', type: 'mc', prompt: 'Jesus calls disciples...', choices: ['Salt and light', 'Hidden and quiet', 'Judges and rulers', 'Tourists'], answer: 'Salt and light', explanation: 'Matthew 5:13-16 — preserving, flavoring, illuminating the world.', tags: ['teachings'] },
          { id: 'teachings-of-jesus-l1-q3', type: 'tf', prompt: 'In Matthew 5, Jesus lowers God\'s standards to make them achievable.', answer: 'False', explanation: 'He deepens them (anger=murder\'s root) to crush self-righteousness and point to grace.', tags: ['teachings'] },
        ],
      },
      {
        id: 'teachings-of-jesus-l2',
        title: 'The Sermon on the Mount II: Kingdom Practices',
        body: `## Giving, Praying, Fasting (Matthew 6:1-18)\nJesus assumes disciples will give, pray, and fast — but warns against performing for applause. "When you give... do not let your left hand know what your right hand does" (6:3). God rewards secrecy; hypocrites already have their reward (human praise). The Lord's Prayer models God-first praying: his name, kingdom, will — then our needs.\n\n## Treasure and Trust (6:19-34)\n"Where your treasure is, there your heart will be" (6:21). You cannot serve God and Mammon. Worry about provision betrays functional atheism — "your heavenly Father knows" (6:32). "Seek first God's Kingdom... and all these things will be given to you" (6:33) — the great reordering.\n\n## Judgment and Discernment (7:1-12)\n"Don't judge" forbids hypocritical condemnation, not all discernment (we must recognize "dogs" and "pigs," 7:6). Remove your plank before addressing specks. Then the promise: "Ask... seek... knock" — the Father gives good gifts. The Golden Rule summarizes the Law: treat others as you'd be treated (7:12).`,
        quiz: [
          { id: 'teachings-of-jesus-l2-q1', type: 'mc', prompt: 'The Lord\'s Prayer begins with...', choices: ['Our needs', 'God\'s name, kingdom, and will', 'Our enemies', 'Our plans'], answer: 'God\'s name, kingdom, and will', explanation: 'Matthew 6:9-10 — prayer starts God-first, then turns to our needs.', tags: ['teachings', 'prayer'] },
          { id: 'teachings-of-jesus-l2-q2', type: 'mc', prompt: 'Matthew 6:33 commands...', choices: ['Seek wealth first', 'Seek first God\'s Kingdom and righteousness', 'Avoid all planning', 'Worry about tomorrow'], answer: 'Seek first God\'s Kingdom and righteousness', explanation: 'The great reordering: kingdom first, provision follows.', tags: ['teachings'] },
          { id: 'teachings-of-jesus-l2-q3', type: 'tf', prompt: '"Do not judge" means Christians can never make moral distinctions.', answer: 'False', explanation: 'It forbids hypocritical condemnation; discernment is still required (Matthew 7:6, 15-20).', tags: ['teachings'] },
        ],
      },
      {
        id: 'teachings-of-jesus-l3',
        title: 'The Parables of the Kingdom',
        body: `## Stories That Reveal and Conceal\nJesus taught in parables — earthly stories with heavenly meanings. They reveal truth to hungry hearts and conceal it from the hardened (Matthew 13:11-13). Parables demand response: hearers must wrestle, not just listen.\n\n## The Sower (Matthew 13:1-23)\nSeed (God's word) falls on four soils: path (hard hearts), rocky (shallow), thorny (distracted by wealth/worry), good (fruitful). The variable isn't the seed but the soil. "He who has ears, let him hear" — what soil are you?\n\n## The Prodigal Son (Luke 15:11-32)\nTwo lost sons: the rebellious younger and the self-righteous elder. The father runs to the returning and pleads with the resentful. Both wanted the father's things, not the father. Grace offends the religious and rescues the rebellious — "go and do likewise" in celebrating the found.`,
        quiz: [
          { id: 'teachings-of-jesus-l3-q1', type: 'mc', prompt: 'In the parable of the sower, the seed represents...', choices: ['Money', 'God\'s word', 'The church', 'Good deeds'], answer: 'God\'s word', explanation: 'Matthew 13:19 — the variable is the soil (the heart), not the seed.', tags: ['parables'] },
          { id: 'teachings-of-jesus-l3-q2', type: 'mc', prompt: 'The parable of the prodigal son features how many lost sons?', choices: ['One', 'Two', 'Three', 'None'], answer: 'Two', explanation: 'The rebellious younger and the self-righteous elder — both lost, differently.', tags: ['parables'] },
          { id: 'teachings-of-jesus-l3-q3', type: 'tf', prompt: 'Jesus\'s parables were simple moral tales everyone immediately understood.', answer: 'False', explanation: 'They reveal to the hungry and conceal from the hardened (Matthew 13:11-13).', tags: ['parables'] },
        ],
      },
      {
        id: 'teachings-of-jesus-l4',
        title: 'The "I Am" Sayings',
        body: `## Claiming God's Name\nIn John's Gospel, Jesus makes seven "I am" statements echoing God's name revealed to Moses ("I AM," Exodus 3:14): Bread of Life (6:35), Light of the World (8:12), Door (10:9), Good Shepherd (10:11), Resurrection and Life (11:25), Way, Truth, Life (14:6), True Vine (15:1). Each claims deity and meets human need.\n\n## Bread and Light\n"I am the bread of life" — Jesus satisfies spiritual hunger permanently (6:35). "I am the light of the world" — he exposes darkness and guides home (8:12). These aren't metaphors for self-improvement but claims to be what only God can be.\n\n## The Way, the Truth, the Life\n"No one comes to the Father except through me" (14:6) — the most exclusive claim ever made, and the most loving: there IS a way. Jesus doesn't show the way; he IS the way. Every "I am" invites the same response: come, believe, abide.`,
        quiz: [
          { id: 'teachings-of-jesus-l4-q1', type: 'mc', prompt: 'Jesus\'s "I am" sayings echo...', choices: ['Greek philosophy', 'God\'s name revealed to Moses (Exodus 3:14)', 'Roman titles', 'Poetry'], answer: 'God\'s name revealed to Moses (Exodus 3:14)', explanation: '"I AM" is God\'s covenant name — Jesus claims it for himself.', tags: ['teachings'] },
          { id: 'teachings-of-jesus-l4-q2', type: 'mc', prompt: '"I am the way, the truth, and the life" appears in...', choices: ['John 14:6', 'Matthew 5:1', 'Luke 2:7', 'Mark 1:1'], answer: 'John 14:6', explanation: 'Followed by "No one comes to the Father except through me."', tags: ['teachings'] },
          { id: 'teachings-of-jesus-l4-q3', type: 'mc', prompt: 'How many "I am" sayings with metaphors does John record?', choices: ['Three', 'Five', 'Seven', 'Twelve'], answer: 'Seven', explanation: 'Bread, Light, Door, Shepherd, Resurrection/Life, Way/Truth/Life, Vine.', tags: ['teachings'] },
        ],
      },
      {
        id: 'teachings-of-jesus-l5',
        title: 'The Narrow Way and Final Warnings',
        body: `## Two Gates (Matthew 7:13-14)\nJesus ends the Sermon with decision: the wide gate/road leading to destruction (many enter) vs. the narrow gate/restricted way leading to life (few find). The narrow gate is Christ himself (John 14:6); the narrow way is daily discipleship. No third option exists.\n\n## False Prophets and Professors (7:15-23)\n"By their fruits you will know them" (7:16) — teaching is tested by life. Terrifyingly, some who prophesied and cast out demons in Jesus's name will hear "I never knew you" (7:23). Activity for Christ ≠ relationship with Christ. Obedience, not performance, proves discipleship.\n\n## Two Builders (7:24-27)\nHearing without doing is sand; hearing and doing is rock. Storms reveal foundations. The Sermon demands not admiration but obedience — "everyone who hears these words of mine and does them" (7:24). The crowds were astonished at his authority (7:28-29). The question remains: will you build on rock?`,
        quiz: [
          { id: 'teachings-of-jesus-l5-q1', type: 'mc', prompt: 'The narrow gate leads to...', choices: ['Destruction', 'Life', 'Popularity', 'Wealth'], answer: 'Life', explanation: 'Matthew 7:14 — the restricted way leads to life; few find it.', tags: ['teachings'] },
          { id: 'teachings-of-jesus-l5-q2', type: 'mc', prompt: 'Jesus says false prophets are recognized by...', choices: ['Their popularity', 'Their fruits', 'Their education', 'Their miracles'], answer: 'Their fruits', explanation: 'Matthew 7:16 — life and character test teaching.', tags: ['teachings'] },
          { id: 'teachings-of-jesus-l5-q3', type: 'tf', prompt: 'In Matthew 7:21-23, Jesus warns that religious activity guarantees relationship with him.', answer: 'False', explanation: 'He warns the opposite: some active "in his name" will hear "I never knew you."', tags: ['teachings'] },
        ],
      },
    ],
  },
  {
    id: 'understanding-paul',
    title: 'Understanding Paul',
    description: 'Meet the apostle to the Gentiles: his conversion, his letters, and his core teachings on grace, faith, and the church.',
    level: 'intermediate',
    lessons: [
      {
        id: 'understanding-paul-l1',
        title: 'From Persecutor to Apostle',
        body: `## Saul the Pharisee\nSaul of Tarsus was a zealous Pharisee, trained under Gamaliel, "advancing in Judaism beyond many" (Galatians 1:14). He persecuted the church violently — guarding Stephen's executioners' clothes (Acts 7:58), dragging Christians to prison (Acts 8:3). His zeal was real; his target was wrong.\n\n## The Damascus Road (Acts 9)\nTraveling to arrest Christians, Saul was struck by blinding light. "Saul, Saul, why do you persecute me?" — Jesus identified with his church. Blinded, humbled, converted: the persecutor became the persecuted. Ananias baptized him; "immediately he proclaimed Jesus" (Acts 9:20).\n\n## Why It Matters\nPaul's conversion proves no one is beyond grace. If the church's greatest enemy became its greatest missionary, your past doesn't disqualify you. "Christ Jesus came into the world to save sinners, of whom I am chief" (1 Timothy 1:15).`,
        quiz: [
          { id: 'understanding-paul-l1-q1', type: 'mc', prompt: 'Saul was converted on the road to...', choices: ['Jerusalem', 'Damascus', 'Rome', 'Antioch'], answer: 'Damascus', explanation: 'Acts 9 — traveling to arrest Christians when Christ confronted him.', tags: ['paul', 'people-nt'] },
          { id: 'understanding-paul-l1-q2', type: 'mc', prompt: 'Before conversion, Saul was a...', choices: ['Fisherman', 'Pharisee', 'Tax collector', 'Roman soldier'], answer: 'Pharisee', explanation: 'Trained under Gamaliel; zealous for Judaism (Galatians 1:14).', tags: ['paul'] },
          { id: 'understanding-paul-l1-q3', type: 'tf', prompt: 'Paul considered himself the "chief" of sinners.', answer: 'True', explanation: '1 Timothy 1:15 — his past magnified grace, it didn\'t disqualify him.', tags: ['paul'] },
        ],
      },
      {
        id: 'understanding-paul-l2',
        title: 'Paul\'s Missionary Journeys',
        body: `## Three Journeys (Acts 13-21)\nFrom Antioch, Paul carried the gospel across the Roman Empire: Cyprus and Galatia (1st), Macedonia and Achaia — Philippi, Thessalonica, Corinth, Ephesus (2nd and 3rd). He planted churches, appointed elders, and wrote letters to strengthen them. His strategy: synagogues first, then Gentiles; cities as gospel hubs.\n\n## Suffering for the Gospel\n"Five times... forty lashes less one... three times beaten with rods... shipwrecked" (2 Corinthians 11:24-25). Paul's resume of suffering authenticates his ministry. He counted it joy: "for me to live is Christ, to die is gain" (Philippians 1:21).\n\n## To Rome and Beyond\nArrested in Jerusalem, Paul appealed to Caesar, preached in Rome under house arrest (Acts 28:30-31), and tradition says was martyred under Nero (~AD 67). Acts ends with the gospel "unhindered" — the mission continues through us.`,
        quiz: [
          { id: 'understanding-paul-l2-q1', type: 'mc', prompt: 'Paul\'s missionary journeys are recorded in...', choices: ['Romans', 'Acts 13-21', 'Revelation', 'Matthew'], answer: 'Acts 13-21', explanation: 'Luke narrates three journeys planting churches across the empire.', tags: ['paul', 'timeline'] },
          { id: 'understanding-paul-l2-q2', type: 'mc', prompt: 'Philippians 1:21: "For me to live is..."', choices: ['Comfort', 'Christ', 'Success', 'Safety'], answer: 'Christ', explanation: '"...to die is gain." Paul\'s life-purpose in one sentence.', tags: ['paul'] },
          { id: 'understanding-paul-l2-q3', type: 'tf', prompt: 'Paul\'s sufferings validated rather than discredited his apostleship.', answer: 'True', explanation: '2 Corinthians 11 — his scars were his credentials.', tags: ['paul'] },
        ],
      },
      {
        id: 'understanding-paul-l3',
        title: 'Paul\'s Core Teaching: Justification by Faith',
        body: `## The Problem: All Have Sinned\nRomans 1-3 builds the case: Gentiles suppress truth (ch.1), moralists are hypocrites (ch.2), Jews break the law they boast in (ch.3). Conclusion: "all have sinned" (3:23), "no one righteous" (3:10). The law diagnoses; it cannot cure.\n\n## The Solution: Righteousness by Faith\n"But now... the righteousness of God has been revealed" (Romans 3:21): God justifies sinners through faith in Christ's atoning death. Abraham was justified by faith before circumcision or law (Romans 4) — faith has always been the way. "Therefore, being justified by faith, we have peace with God" (5:1).\n\n## The Result: No Condemnation, No Separation\nRomans 8: "no condemnation" (v.1) to "no separation" (v.39). Justification is legal (declared righteous), complete (finished), and secure (kept by God). Good works follow as fruit (Ephesians 2:10), never as root.`,
        quiz: [
          { id: 'understanding-paul-l3-q1', type: 'mc', prompt: 'Romans 5:1: "Therefore, being justified by faith..."', choices: ['We must work harder', 'We have peace with God', 'We are perfect', 'We need not obey'], answer: 'We have peace with God', explanation: 'Justification ends the war — peace through Christ.', tags: ['paul', 'salvation'] },
          { id: 'understanding-paul-l3-q2', type: 'mc', prompt: 'Paul uses Abraham to prove...', choices: ['Circumcision saves', 'Justification was always by faith', 'The law came first', 'Gentiles are excluded'], answer: 'Justification was always by faith', explanation: 'Romans 4 — Abraham believed before circumcision or Sinai.', tags: ['paul', 'genesis'] },
          { id: 'understanding-paul-l3-q3', type: 'tf', prompt: 'According to Paul, good works are the root of salvation.', answer: 'False', explanation: 'Works are fruit, not root (Ephesians 2:8-10).', tags: ['paul', 'grace'] },
        ],
      },
      {
        id: 'understanding-paul-l4',
        title: 'Paul on the Church and Christian Living',
        body: `## The Body of Christ\nPaul's favorite church image: a body (1 Corinthians 12). Many members, one Spirit, diverse gifts, mutual dependence. "The eye can't say to the hand, 'I have no need of you.'" Every believer is gifted (12:7) and needed. No lone-ranger Christianity.\n\n## The Armor and the Fruit\nEphesians 6: put on God's armor for spiritual battle — truth, righteousness, gospel, faith, salvation, the word, prayer. Galatians 5: walk by the Spirit and bear fruit — love, joy, peace... against which "there is no law." Battle and growth: the normal Christian life.\n\n## Living Worthy\n"Walk worthily of the calling" (Ephesians 4:1): unity, humility, purity, love, thanksgiving. Paul's letters move from doctrine (chapters 1-3) to duty (4-6) — belief fuels behavior. Theology that doesn't change life isn't understood.`,
        quiz: [
          { id: 'understanding-paul-l4-q1', type: 'mc', prompt: 'Paul\'s favorite image for the church is...', choices: ['An army', 'A body', 'A building only', 'A business'], answer: 'A body', explanation: '1 Corinthians 12 — many members, one Spirit, mutual need.', tags: ['paul'] },
          { id: 'understanding-paul-l4-q2', type: 'mc', prompt: 'The only offensive weapon in Ephesians 6 is...', choices: ['The shield', 'The sword of the Spirit — God\'s word', 'The helmet', 'The breastplate'], answer: 'The sword of the Spirit — God\'s word', explanation: 'Ephesians 6:17 — Scripture is our counterattack.', tags: ['paul'] },
          { id: 'understanding-paul-l4-q3', type: 'tf', prompt: 'Paul\'s letters typically move from doctrine to duty — belief fuels behavior.', answer: 'True', explanation: 'Ephesians 1-3 (doctrine) then 4-6 (duty) — the standard Pauline pattern.', tags: ['paul'] },
        ],
      },
    ],
  },
  {
    id: 'ot-overview',
    title: 'Old Testament Overview',
    description: 'Survey the 39 books of the Old Testament: creation to exile to return, and the promises that point to Christ.',
    level: 'intermediate',
    lessons: [
      {
        id: 'ot-overview-l1',
        title: 'Beginnings: Genesis',
        body: `## Creation to Covenant\nGenesis (meaning "beginnings") covers creation (1-2), the fall (3), the flood (6-9), Babel (11), and the patriarchs: Abraham (12-25), Isaac, Jacob (25-36), Joseph (37-50). Four great events, four great people — the foundation of everything.\n\n## Key Themes\nGod creates good; humanity falls; God promises rescue (3:15, the first gospel). God chooses Abraham to bless "all families of the earth" (12:3) — election for mission. Joseph's story (37-50) shows providence: "you meant evil... God meant it for good" (50:20).\n\n## Pointing to Christ\nAdam foreshadows Christ (Romans 5:14); Isaac's near-sacrifice pictures substitution (Genesis 22); Joseph's suffering-then-glory anticipates Jesus. Genesis is the seedbed of the whole Bible's story.`,
        quiz: [
          { id: 'ot-overview-l1-q1', type: 'mc', prompt: 'Genesis 3:15 is called the...', choices: ['Decalogue', 'Protoevangelium — the first gospel promise', 'Shema', 'Benediction'], answer: 'Protoevangelium — the first gospel promise', explanation: 'The seed of the woman will crush the serpent — Christ promised in Eden.', tags: ['genesis'] },
          { id: 'ot-overview-l1-q2', type: 'mc', prompt: 'God promised Abraham...', choices: ['Wealth only', 'That all families of earth would be blessed through him', 'A long life only', 'Political power'], answer: 'That all families of earth would be blessed through him', explanation: 'Genesis 12:3 — election for global mission, fulfilled in Christ.', tags: ['genesis'] },
          { id: 'ot-overview-l1-q3', type: 'tf', prompt: 'Joseph\'s words in Genesis 50:20 show God\'s providence over human evil.', answer: 'True', explanation: '"You meant evil against me, but God meant it for good."', tags: ['genesis'] },
        ],
      },
      {
        id: 'ot-overview-l2',
        title: 'Exodus to Deuteronomy: Redemption and Law',
        body: `## The Exodus\nGod delivers Israel from Egyptian slavery through Moses: ten plagues, the Passover (lamb's blood saves), the Red Sea parted. "I am the LORD your God, who brought you out" (Exodus 20:2) — redemption precedes commandments. Grace first, then law.\n\n## Sinai and the Law\nAt Sinai, God gives the Ten Commandments and the covenant law — revealing his holiness and Israel's need. The tabernacle (God dwelling among them) and sacrifices (atonement for sin) teach that sin is serious and forgiveness is costly.\n\n## Wilderness and Deuteronomy\nForty years of wandering for unbelief (Numbers 14). Deuteronomy is Moses's farewell: "choose life" (30:19). The pattern — redemption, covenant, failure, grace — previews the whole Old Testament and our need for a greater Moses.`,
        quiz: [
          { id: 'ot-overview-l2-q1', type: 'mc', prompt: 'The Passover lamb\'s blood...', choices: ['Was symbolic only', 'Caused the destroyer to pass over Israel\'s homes', 'Fed the people', 'Was for priests only'], answer: 'Caused the destroyer to pass over Israel\'s homes', explanation: 'Exodus 12 — pointing to Christ, our Passover lamb (1 Corinthians 5:7).', tags: ['exodus'] },
          { id: 'ot-overview-l2-q2', type: 'mc', prompt: 'The Ten Commandments were given...', choices: ['Before the exodus', 'At Mount Sinai after redemption from Egypt', 'By Aaron', 'In the Promised Land'], answer: 'At Mount Sinai after redemption from Egypt', explanation: 'Exodus 20:2 — grace (rescue) precedes law (commands).', tags: ['exodus'] },
          { id: 'ot-overview-l2-q3', type: 'tf', prompt: 'Israel wandered 40 years because of unbelief at Kadesh.', answer: 'True', explanation: 'Numbers 14 — refusing to enter the land brought a generation of wandering.', tags: ['exodus'] },
        ],
      },
      {
        id: 'ot-overview-l3',
        title: 'Kingdom Rise and Fall: Joshua to 2 Kings',
        body: `## Conquest and Judges\nJoshua leads Israel into Canaan — "not one good thing failed" of God's promises (Joshua 21:45). Judges follows: a dark cycle of sin, oppression, crying out, deliverance. "Everyone did what was right in his own eyes" (Judges 21:25) — humanity without a king.\n\n## United and Divided Kingdom\nSaul, David (the man after God's heart, recipient of the eternal-kingdom covenant, 2 Samuel 7), Solomon (wisdom, temple, then decline). The kingdom splits: Israel (north, 19 bad kings) and Judah (south, some good kings). Prophets warn; kings ignore.\n\n## Exile\nAssyria destroys Israel (722 BC); Babylon destroys Judah and the temple (586 BC). But prophets promise return and a new covenant (Jeremiah 31:31-34). Judgment is real; mercy has the last word.`,
        quiz: [
          { id: 'ot-overview-l3-q1', type: 'mc', prompt: 'God\'s covenant with David promised...', choices: ['Wealth', 'An eternal kingdom through his descendant', 'Many wives', 'A big army'], answer: 'An eternal kingdom through his descendant', explanation: '2 Samuel 7:16 — fulfilled in Christ, the Son of David.', tags: ['ot-overview'] },
          { id: 'ot-overview-l3-q2', type: 'mc', prompt: 'The northern kingdom of Israel fell to...', choices: ['Babylon in 586 BC', 'Assyria in 722 BC', 'Egypt', 'Rome'], answer: 'Assyria in 722 BC', explanation: '2 Kings 17 — judgment for persistent idolatry.', tags: ['ot-overview', 'timeline'] },
          { id: 'ot-overview-l3-q3', type: 'tf', prompt: 'Every king of the northern kingdom of Israel was evil.', answer: 'True', explanation: 'All 19 northern kings did evil; Judah had a few reformers (Asa, Hezekiah, Josiah).', tags: ['ot-overview'] },
        ],
      },
      {
        id: 'ot-overview-l4',
        title: 'Return, Wisdom, and Prophets',
        body: `## Return from Exile\nEzra-Nehemiah-Chronicles: Cyrus's decree (538 BC), temple rebuilt (Ezra 6), walls restored under Nehemiah, Esther preserving Jews in Persia. God keeps his remnant and his promises — the stage is set for the Messiah.\n\n## Wisdom Literature\nJob (suffering's mystery), Psalms (prayer book — lament to praise), Proverbs (skill for living), Ecclesiastes (life's vanity apart from God), Song of Songs (marital love). Wisdom is "the fear of the LORD" (Proverbs 9:10) applied to real life.\n\n## The Prophets\nMajor (Isaiah-Malachi's longer books) and Minor (shorter) prophets: forthtelling (calling to repentance) and foretelling (Messiah's coming — born of virgin, Isaiah 7:14; suffering servant, Isaiah 53; Bethlehem, Micah 5:2). Malachi ends with 400 years of silence — then "the fullness of time" (Galatians 4:4).`,
        quiz: [
          { id: 'ot-overview-l4-q1', type: 'mc', prompt: 'Proverbs 9:10 says the fear of the LORD is...', choices: ['The end of joy', 'The beginning of wisdom', 'For priests only', 'Outdated'], answer: 'The beginning of wisdom', explanation: 'Wisdom starts with reverent submission to God.', tags: ['proverbs'] },
          { id: 'ot-overview-l4-q2', type: 'mc', prompt: 'Isaiah 53 describes...', choices: ['A military hero', 'The suffering servant who bears our sins', 'King David', 'The temple'], answer: 'The suffering servant who bears our sins', explanation: 'The clearest OT prophecy of Christ\'s atoning death.', tags: ['ot-overview'] },
          { id: 'ot-overview-l4-q3', type: 'tf', prompt: 'Between Malachi and Matthew lie about 400 years of prophetic silence.', answer: 'True', explanation: 'The intertestamental period ended with Christ\'s birth "in the fullness of time."', tags: ['timeline'] },
        ],
      },
    ],
  },
  {
    id: 'nt-overview',
    title: 'New Testament Overview',
    description: 'Survey the 27 books of the New Testament: the Gospels, the church\'s birth, the letters, and the final victory.',
    level: 'beginner',
    lessons: [
      {
        id: 'nt-overview-l1',
        title: 'The Four Gospels',
        body: `## Four Portraits, One Christ\nMatthew (King — written to Jews, "kingdom of heaven"), Mark (Servant — fast-paced, to Romans), Luke (Son of Man — orderly, to Gentiles, emphasizing compassion), John (Son of God — theological, "that you may believe," 20:31). Four perspectives, one Jesus.\n\n## Why Four?\nLike witnesses at an event, each Gospel highlights different facets. Together they give a rich, multi-dimensional portrait no single account could. The early church treasured all four — never choosing just one.\n\n## The Gospel Story\nBirth, baptism, temptation, ministry (teaching, miracles), opposition, Last Supper, arrest, crucifixion, resurrection, ascension, promised return. The Gospels are "good news" proclamations, not modern biographies — every page preaches Christ.`,
        quiz: [
          { id: 'nt-overview-l1-q1', type: 'mc', prompt: 'John\'s stated purpose (20:31) is...', choices: ['Historical record only', 'That you may believe Jesus is the Christ, the Son of God', 'Entertainment', 'Political manifesto'], answer: 'That you may believe Jesus is the Christ, the Son of God', explanation: 'John wrote evangelistically — for faith and life.', tags: ['nt-overview'] },
          { id: 'nt-overview-l1-q2', type: 'mc', prompt: 'Which Gospel is the shortest and most action-packed?', choices: ['Matthew', 'Mark', 'Luke', 'John'], answer: 'Mark', explanation: 'Mark\'s "immediately" drives a fast-paced Servant portrait.', tags: ['nt-overview'] },
          { id: 'nt-overview-l1-q3', type: 'tf', prompt: 'The four Gospels contradict each other on who Jesus is.', answer: 'False', explanation: 'Four complementary portraits of one Christ — different emphases, same Lord.', tags: ['nt-overview'] },
        ],
      },
      {
        id: 'nt-overview-l2',
        title: 'Acts: The Church Is Born',
        body: `## The Spirit Comes (Acts 1-2)\nJesus ascends, promising the Spirit. At Pentecost, the Spirit falls — tongues of fire, 3,000 saved. The church is born: Spirit-empowered witness "to the ends of the earth" (1:8).\n\n## The Gospel Spreads (Acts 3-28)\nJerusalem → Judea → Samaria → ends of the earth. Peter preaches to Jews; Philip to Samaritans; Peter to Gentiles (Cornelius, ch.10); Paul to the empire. Persecution scatters believers — and the gospel spreads faster (8:4).\n\n## Key Lessons\nThe church grows by the Spirit through witness, not by strategy alone. Opposition can't stop God's mission. Acts ends "unhindered" (28:31) — the story continues in us. Every Christian is part of Acts 29.`,
        quiz: [
          { id: 'nt-overview-l2-q1', type: 'mc', prompt: 'About how many were saved at Pentecost?', choices: ['120', '3,000', '500', '12'], answer: '3,000', explanation: 'Acts 2:41 — the church\'s explosive birth.', tags: ['nt-overview'] },
          { id: 'nt-overview-l2-q2', type: 'mc', prompt: 'Acts 1:8 outlines gospel expansion...', choices: ['Randomly', 'Jerusalem, Judea, Samaria, ends of the earth', 'Only in Jerusalem', 'Only to Jews'], answer: 'Jerusalem, Judea, Samaria, ends of the earth', explanation: 'The book\'s geographical and theological outline.', tags: ['nt-overview'] },
          { id: 'nt-overview-l2-q3', type: 'tf', prompt: 'Persecution in Acts slowed the gospel\'s spread.', answer: 'False', explanation: 'Scattered believers preached everywhere (Acts 8:4) — persecution accelerated mission.', tags: ['nt-overview'] },
        ],
      },
      {
        id: 'nt-overview-l3',
        title: 'The Letters: Doctrine and Life',
        body: `## Paul's Letters (Romans–Philemon)\nThirteen letters to churches and individuals: Romans (the gospel systematically), Corinthians (church problems), Galatians (grace vs. law), Ephesians (the church), Philippians (joy), Colossians (Christ's supremacy), Thessalonians (Christ's return), Timothy/Titus (leadership), Philemon (forgiveness). Doctrine → duty in each.\n\n## General Letters (Hebrews–Jude)\nHebrews (Christ's superiority), James (faith works), Peter (suffering), John (love and truth), Jude (contend for the faith). Written to scattered, suffering, or drifting believers — deeply practical.\n\n## Reading Letters Well\nRemember they're occasional — written to real situations. Find the original problem, then the timeless principle. "All Scripture is God-breathed" (2 Timothy 3:16) — these ancient letters are God's word to us today.`,
        quiz: [
          { id: 'nt-overview-l3-q1', type: 'mc', prompt: 'How many letters did Paul write in the New Testament?', choices: ['7', '13', '21', '4'], answer: '13', explanation: 'Romans through Philemon (Hebrews\' authorship is debated).', tags: ['paul', 'nt-overview'] },
          { id: 'nt-overview-l3-q2', type: 'mc', prompt: 'The book of James emphasizes...', choices: ['Faith without works is dead', 'The end times', 'Church buildings', 'Genealogies'], answer: 'Faith without works is dead', explanation: 'James 2:26 — genuine faith acts.', tags: ['nt-overview', 'faith'] },
          { id: 'nt-overview-l3-q3', type: 'tf', prompt: 'Paul\'s letters typically move from doctrine (belief) to duty (behavior).', answer: 'True', explanation: 'E.g., Romans 1-11 then 12-16; Ephesians 1-3 then 4-6.', tags: ['paul'] },
        ],
      },
      {
        id: 'nt-overview-l4',
        title: 'Revelation: The Final Victory',
        body: `## The Big Picture\nRevelation is apocalyptic prophecy — symbolic visions revealing spiritual reality. Written to persecuted churches: despite present suffering, Christ wins. "Behold, he is coming" (1:7). The message: persevere; the Lamb triumphs.\n\n## Key Visions\nThe glorified Christ (ch.1), letters to seven churches (2-3), the throne (4-5), judgments (6-16), Babylon's fall (17-18), Christ's return (19), the millennium (20), new heaven and earth (21-22). Symbols (beasts, seals, trumpets) depict the cosmic war behind history.\n\n## How to Read It\nFocus on the clear center: Christ reigns, evil falls, God makes all things new (21:5). Don't get lost in timelines; get found in worship. Revelation is meant to comfort the afflicted and sober the comfortable — "Come, Lord Jesus" (22:20).`,
        quiz: [
          { id: 'nt-overview-l4-q1', type: 'mc', prompt: 'Revelation was written to...', choices: ['Comfortable churches', 'Persecuted churches needing hope', 'Non-believers', 'Angels'], answer: 'Persecuted churches needing hope', explanation: 'Its message: Christ wins — persevere.', tags: ['revelation'] },
          { id: 'nt-overview-l4-q2', type: 'mc', prompt: 'Revelation 21:5: God declares...', choices: ['I am finished', 'Behold, I am making all things new', 'Good luck', 'Try harder'], answer: 'Behold, I am making all things new', explanation: 'The Bible\'s climactic promise — total renewal.', tags: ['revelation'] },
          { id: 'nt-overview-l4-q3', type: 'tf', prompt: 'The main point of Revelation is predicting exact dates of future events.', answer: 'False', explanation: 'Its center: Christ reigns, evil falls, persevere in hope.', tags: ['revelation'] },
        ],
      },
    ],
  },

  {
    id: 'biblical-history',
    title: 'Biblical History',
    description: 'Place the Bible\'s story in real history: empires, archaeology, and the timeline from Abraham to the apostles.',
    level: 'intermediate',
    lessons: [
      {
        id: 'biblical-history-l1',
        title: 'The Ancient World of the Patriarchs',
        body: `## Mesopotamia and Egypt\nAbraham left Ur (~2000 BC), a sophisticated Sumerian city. The patriarchs lived among Canaanite city-states while Egypt's Middle Kingdom rose and fell. Archaeology confirms the world Genesis describes: Nuzi tablets reflect patriarchal customs; Mari letters mention names like Abraham.\n\n## Joseph in Egypt\nJoseph's rise (Genesis 41) fits Egypt's Hyksos period, when Semites held influence. The "seven years of plenty and famine" match Egyptian records of Nile failures. God positioned his people through real politics.\n\n## Why History Matters\nChristianity is historical, not mythical. The patriarchs lived in a verifiable world — and God worked through it. Faith isn't blind; it's grounded in events that happened in time and place.`,
        quiz: [
          { id: 'biblical-history-l1-q1', type: 'mc', prompt: 'Abraham came from the city of...', choices: ['Babylon', 'Ur', 'Nineveh', 'Memphis'], answer: 'Ur', explanation: 'Genesis 11:31 — Ur of the Chaldeans in Mesopotamia.', tags: ['genesis', 'places'] },
          { id: 'biblical-history-l1-q2', type: 'tf', prompt: 'Archaeological finds like the Nuzi tablets illuminate the patriarchal world.', answer: 'True', explanation: 'Ancient Near Eastern discoveries confirm Genesis\'s cultural setting.', tags: ['timeline'] },
          { id: 'biblical-history-l1-q3', type: 'mc', prompt: 'About when did Abraham live?', choices: ['500 BC', 'Around 2000 BC', 'AD 100', '1000 AD'], answer: 'Around 2000 BC', explanation: 'The early second millennium BC — the Middle Bronze Age.', tags: ['timeline', 'genesis'] },
        ],
      },
      {
        id: 'biblical-history-l2',
        title: 'Exodus, Conquest, and Kingdoms',
        body: `## Exodus (~1446 or ~1260 BC)\nScholars debate the date, but the event is certain: Israel escaped Egypt. The Merneptah Stele (~1208 BC) mentions "Israel" in Canaan — the earliest extra-biblical reference. The Red Sea crossing and Sinai covenant shaped Israel's identity forever.\n\n## Monarchy (~1050-586 BC)\nSaul, David (whose "House of David" appears on the Tel Dan inscription), Solomon — then division. Assyria's records confirm Israelite kings (Jehu on the Black Obelisk). Babylon's Chronicles record Jerusalem's fall (586 BC) — matching 2 Kings 25.\n\n## Exile and Return\nBabylonian ration tablets mention King Jehoiachin in exile — the Bible's world is the real world. Cyrus's decree (538 BC) is confirmed by the Cyrus Cylinder. God works through emperors and archaeology alike.`,
        quiz: [
          { id: 'biblical-history-l2-q1', type: 'mc', prompt: 'The Tel Dan inscription mentions...', choices: ['Moses', 'The House of David', 'Solomon\'s temple', 'The ark'], answer: 'The House of David', explanation: 'A 9th-century BC Aramean monument confirming David\'s dynasty.', tags: ['timeline', 'places'] },
          { id: 'biblical-history-l2-q2', type: 'mc', prompt: 'Jerusalem fell to Babylon in...', choices: ['722 BC', '586 BC', '538 BC', 'AD 70'], answer: '586 BC', explanation: '2 Kings 25 — confirmed by Babylonian Chronicles.', tags: ['timeline'] },
          { id: 'biblical-history-l2-q3', type: 'tf', prompt: 'Extra-biblical sources confirm several biblical kings and events.', answer: 'True', explanation: 'Assyrian, Babylonian, and Persian records corroborate the biblical narrative.', tags: ['timeline'] },
        ],
      },
      {
        id: 'biblical-history-l3',
        title: 'Between the Testaments',
        body: `## Persia, Greece, Rome\nAfter Persia (Cyrus to Darius), Alexander the Great (332 BC) spread Greek culture — the New Testament was written in common Greek because of him. Antiochus Epiphanes desecrated the temple (167 BC), sparking the Maccabean revolt (celebrated in Hanukkah, John 10:22).\n\n## Rome's Peace\nRome conquered Judea (63 BC). Herod the Great rebuilt the temple — the temple Jesus knew. "Pax Romana" (Roman peace), roads, and common language prepared the world: "in the fullness of time, God sent his Son" (Galatians 4:4).\n\n## 400 Silent Years?\nNo prophets spoke, but God was working: synagogues spread, the Septuagint translated Scripture, expectations of Messiah grew. Silence wasn't absence — it was preparation.`,
        quiz: [
          { id: 'biblical-history-l3-q1', type: 'mc', prompt: 'The New Testament was written in Greek because...', choices: ['Jews preferred it', 'Alexander spread Greek culture', 'Rome required it', 'Paul invented it'], answer: 'Alexander spread Greek culture', explanation: 'Hellenization made Koine Greek the common language.', tags: ['timeline'] },
          { id: 'biblical-history-l3-q2', type: 'mc', prompt: 'Galatians 4:4 says Christ came...', choices: ['Too late', 'In the fullness of time', 'By accident', 'Too early'], answer: 'In the fullness of time', explanation: 'God\'s perfect historical timing — Roman peace, roads, language.', tags: ['timeline'] },
          { id: 'biblical-history-l3-q3', type: 'tf', prompt: 'Hanukkah (mentioned in John 10:22) celebrates the Maccabean revolt.', answer: 'True', explanation: 'The temple\'s rededication after Antiochus\'s desecration.', tags: ['timeline', 'places'] },
        ],
      },
      {
        id: 'biblical-history-l4',
        title: 'The World of Jesus and the Apostles',
        body: `## First-Century Judea\nJesus lived under Roman occupation: Herod's sons ruled as tetrarchs, Pilate governed Judea, the Sanhedrin managed Jewish affairs. The Dead Sea Scrolls reveal diverse Jewish groups — Pharisees, Sadducees, Essenes, Zealots — the world of the Gospels.\n\n## The Early Church\nPentecost (~AD 30) launched the church. Paul's journeys (AD 47-57) spread the gospel through Roman roads and cities. Nero persecuted Christians (AD 64); Jerusalem fell (AD 70) as Jesus predicted. The New Testament was complete by ~AD 95.\n\n## Why It Matters\nJesus didn't appear in a mythic "once upon a time" but under Caesar Augustus (Luke 2:1), crucified under Pontius Pilate. Christianity's claims are checkable — and they check out.`,
        quiz: [
          { id: 'biblical-history-l4-q1', type: 'mc', prompt: 'Luke dates Jesus\'s birth by reference to...', choices: ['Herod only', 'Caesar Augustus\'s decree', 'No one', 'The Sanhedrin'], answer: 'Caesar Augustus\'s decree', explanation: 'Luke 2:1 — anchoring the nativity in world history.', tags: ['jesus-birth', 'timeline'] },
          { id: 'biblical-history-l4-q2', type: 'mc', prompt: 'Jerusalem and the temple were destroyed in...', choices: ['AD 30', 'AD 70', 'AD 64', 'AD 95'], answer: 'AD 70', explanation: 'By Rome, as Jesus foretold (Luke 21:6).', tags: ['timeline'] },
          { id: 'biblical-history-l4-q3', type: 'tf', prompt: 'The Dead Sea Scrolls illuminate the diverse Jewish world Jesus lived in.', answer: 'True', explanation: 'They reveal Pharisees, Essenes, and messianic expectations of the era.', tags: ['timeline'] },
        ],
      },
    ],
  },
  {
    id: 'theology-basics',
    title: 'Theology Basics',
    description: 'Systematic foundations: the Trinity, Christ, salvation, the church, and last things. Think deeply about what Christians believe and why.',
    level: 'intermediate',
    lessons: [
      {
        id: 'theology-basics-l1',
        title: 'The Doctrine of God',
        body: `## Theology Proper\n"Theology proper" is the study of God himself. He is one (Deuteronomy 6:4), triune (Matthew 28:19), self-existent ("I AM," Exodus 3:14), and perfect in all attributes: holiness, love, justice, mercy, omnipotence, omniscience, eternity, immutability.\n\n## Incommunicable vs. Communicable\nSome attributes are God's alone (incommunicable): self-existence, eternality, omnipresence, immutability. Others he shares with us by grace (communicable): love, holiness, mercy, justice, wisdom. We reflect him without equaling him — "be holy, for I am holy" (1 Peter 1:16).\n\n## Knowing vs. Knowing About\nTheology's goal isn't information but transformation: "that they should know you" (John 17:3). Right thinking about God fuels right worship, right trust, right obedience. Bad theology produces bad living; knowing God truly changes everything.`,
        quiz: [
          { id: 'theology-basics-l1-q1', type: 'mc', prompt: '"Theology proper" is the study of...', choices: ['The church', 'God himself', 'The end times', 'Angels'], answer: 'God himself', explanation: 'The foundation of all theology.', tags: ['theology'] },
          { id: 'theology-basics-l1-q2', type: 'mc', prompt: 'Which is an incommunicable attribute (God\'s alone)?', choices: ['Love', 'Self-existence', 'Mercy', 'Holiness'], answer: 'Self-existence', explanation: 'Only God exists necessarily and eternally; we reflect his moral attributes.', tags: ['theology'] },
          { id: 'theology-basics-l1-q3', type: 'tf', prompt: 'The goal of theology is transformation, not just information.', answer: 'True', explanation: 'Eternal life is knowing God (John 17:3) — theology serves worship.', tags: ['theology'] },
        ],
      },
      {
        id: 'theology-basics-l2',
        title: 'Christology: The Person of Christ',
        body: `## Two Natures, One Person\nThe Council of Chalcedon (AD 451) confessed Christ as truly God and truly man, two natures "without confusion, without change, without division, without separation" in one person. Fully divine (John 1:1), fully human (John 1:14) — the hypostatic union.\n\n## His Offices\nChrist fulfills three offices: Prophet (revealing God, Deuteronomy 18:15), Priest (offering himself, Hebrews 7:27), and King (ruling forever, 2 Samuel 7:16). As mediator (1 Timothy 2:5), he bridges God and humanity.\n\n## His States\nHumiliation: incarnation, suffering, death, burial. Exaltation: resurrection, ascension, session (seated at God's right hand), return. "Therefore God highly exalted him" (Philippians 2:9) — the cross leads to the crown, for him and for us.`,
        quiz: [
          { id: 'theology-basics-l2-q1', type: 'mc', prompt: 'The hypostatic union means...', choices: ['Jesus was half God, half man', 'Two natures united in one person', 'Jesus switched natures', 'Two persons in Jesus'], answer: 'Two natures united in one person', explanation: 'Chalcedon (AD 451): fully God and fully man, one person.', tags: ['theology'] },
          { id: 'theology-basics-l2-q2', type: 'mc', prompt: 'Christ\'s three offices are...', choices: ['Apostle, elder, deacon', 'Prophet, Priest, King', 'Teacher, healer, friend', 'Judge, jury, witness'], answer: 'Prophet, Priest, King', explanation: 'He reveals (prophet), atones (priest), and rules (king).', tags: ['theology'] },
          { id: 'theology-basics-l2-q3', type: 'tf', prompt: 'Christ\'s humiliation (suffering, death) was followed by exaltation (resurrection, ascension).', answer: 'True', explanation: 'Philippians 2:5-11 — the cross leads to the crown.', tags: ['theology'] },
        ],
      },
      {
        id: 'theology-basics-l3',
        title: 'Soteriology: The Doctrine of Salvation',
        body: `## The Order of Salvation\nTheologians trace salvation's steps: election (chosen in Christ, Ephesians 1:4), calling (gospel invitation), regeneration (new birth, John 3:3), conversion (repentance and faith), justification (declared righteous, Romans 5:1), adoption (made God's children, Romans 8:15), sanctification (growing holy), perseverance (kept by God), glorification (made perfect, Romans 8:30).\n\n## By Grace Alone, Through Faith Alone\nThe Reformation's battle cry: sola gratia, sola fide. Salvation is God's gift from start to finish (Ephesians 2:8-9). Faith is the instrument, not the merit. Works follow as fruit (Ephesians 2:10) — necessary as evidence, impossible as payment.\n\n## Assurance and Security\nTrue believers persevere because God preserves: "he who began a good work... will complete it" (Philippians 1:6). Assurance rests on Christ's finished work, the Spirit's witness (Romans 8:16), and a transformed life (1 John). Security produces holiness, not license.`,
        quiz: [
          { id: 'theology-basics-l3-q1', type: 'mc', prompt: 'Justification means...', choices: ['Being made perfect instantly', 'Being declared righteous by God through faith', 'Earning heaven', 'Feeling saved'], answer: 'Being declared righteous by God through faith', explanation: 'Romans 5:1 — a legal declaration based on Christ\'s work.', tags: ['salvation', 'theology'] },
          { id: 'theology-basics-l3-q2', type: 'mc', prompt: '"Sola fide" means...', choices: ['Faith plus works saves', 'By faith alone', 'Faith is unnecessary', 'Only pastors need faith'], answer: 'By faith alone', explanation: 'Faith is the alone instrument receiving God\'s grace.', tags: ['salvation', 'faith'] },
          { id: 'theology-basics-l3-q3', type: 'tf', prompt: 'Good works are the fruit of salvation, not its root.', answer: 'True', explanation: 'Ephesians 2:10 — created for good works, not by them.', tags: ['salvation', 'grace'] },
        ],
      },
      {
        id: 'theology-basics-l4',
        title: 'Ecclesiology and Eschatology',
        body: `## The Church\nEcclesiology is the doctrine of the church — Christ's body (1 Corinthians 12), bride (Ephesians 5), and temple (1 Peter 2:5). Its marks: gospel preaching, sacraments (baptism, Lord's Supper), and discipline. Its mission: make disciples (Matthew 28:19). The church is God's plan A — there is no plan B.\n\n## Last Things\nEschatology covers Christ's return (Acts 1:11), the resurrection (1 Corinthians 15), final judgment (Revelation 20), and the new creation (Revelation 21-22). Christians disagree on millennial details but agree: Christ returns bodily, judges justly, and makes all things new.\n\n## Living in Light of the End\nEschatology isn't speculation but motivation: "everyone who has this hope... purifies himself" (1 John 3:3). The future certainties — resurrection, justice, renewal — produce present holiness, comfort in grief (1 Thessalonians 4:18), and urgency in mission.`,
        quiz: [
          { id: 'theology-basics-l4-q1', type: 'mc', prompt: 'Ecclesiology is the doctrine of...', choices: ['The end times', 'The church', 'Salvation', 'Angels'], answer: 'The church', explanation: 'Christ\'s body, bride, and temple.', tags: ['theology'] },
          { id: 'theology-basics-l4-q2', type: 'mc', prompt: '1 John 3:3 says hope in Christ\'s return leads to...', choices: ['Fear', 'Purification and holiness', 'Speculation', 'Withdrawal'], answer: 'Purification and holiness', explanation: 'Future hope produces present holiness.', tags: ['theology'] },
          { id: 'theology-basics-l4-q3', type: 'tf', prompt: 'The church\'s mission is to make disciples of all nations.', answer: 'True', explanation: 'Matthew 28:19 — the Great Commission.', tags: ['theology'] },
        ],
      },
    ],
  },
  {
    id: 'prayer',
    title: 'Prayer',
    description: 'Learn to pray with confidence: what prayer is, how Jesus taught it, and how to build a thriving prayer life.',
    level: 'beginner',
    lessons: [
      {
        id: 'prayer-l1',
        title: 'What Is Prayer?',
        body: `## Talking with God\nPrayer is communion with God — Father, Son, and Spirit. It's relationship, not ritual. "Pray without ceasing" (1 Thessalonians 5:17) means ongoing fellowship, not nonstop words. We pray because God invites us: "Call to me, and I will answer you" (Jeremiah 33:3).\n\n## Why Pray?\nPrayer expresses dependence ("we don't know... but our eyes are on you," 2 Chronicles 20:12), aligns us with God's will, releases burdens (1 Peter 5:7), and unleashes God's power (James 5:16). Jesus — the Son of God — prayed constantly (Luke 5:16). If he needed it, we do.\n\n## Hindrances\nUnconfessed sin (Psalm 66:18), wrong motives (James 4:3), unbelief (James 1:6-7), and broken relationships (1 Peter 3:7) hinder prayer. The solution isn't technique but heart: confess, believe, forgive, align. God hears the humble (Psalm 51:17).`,
        quiz: [
          { id: 'prayer-l1-q1', type: 'mc', prompt: '"Pray without ceasing" means...', choices: ['Never stop talking', 'Ongoing communion with God', 'Only pray in church', 'Pray once daily'], answer: 'Ongoing communion with God', explanation: '1 Thessalonians 5:17 — continual fellowship, not constant words.', tags: ['prayer'] },
          { id: 'prayer-l1-q2', type: 'mc', prompt: 'Jeremiah 33:3 promises...', choices: ['Wealth', '"Call to me, and I will answer you"', 'Long life', 'No trouble'], answer: '"Call to me, and I will answer you"', explanation: 'God invites prayer and promises to answer.', tags: ['prayer'] },
          { id: 'prayer-l1-q3', type: 'tf', prompt: 'Unconfessed sin can hinder prayer.', answer: 'True', explanation: 'Psalm 66:18 — "If I cherished sin in my heart, the Lord wouldn\'t have listened."', tags: ['prayer'] },
        ],
      },
      {
        id: 'prayer-l2',
        title: 'The Lord\'s Prayer',
        body: `## A Pattern, Not Just Words\n"When you pray, say..." (Luke 11:2) — Jesus gave a model, not a mantra. Its structure: God first (his name, kingdom, will), then us (bread, forgiveness, guidance). Prayer reorders our loves before listing our needs.\n\n## Line by Line\n"Our Father" — intimate yet reverent, communal ("our"). "Hallowed be your name" — God's glory first. "Your kingdom come... will be done" — surrender. "Daily bread" — dependent trust. "Forgive us... as we forgive" — grace received and given. "Lead us not into temptation" — guidance and protection.\n\n## Praying It Today\nUse it as scaffolding: expand each phrase into your own words. "Your kingdom come" — pray it over your family, workplace, nation. The pattern prevents prayer from becoming a wishlist and makes it worship.`,
        quiz: [
          { id: 'prayer-l2-q1', type: 'mc', prompt: 'The Lord\'s Prayer is found in...', choices: ['Matthew 6 and Luke 11', 'John 3', 'Psalm 23', 'Romans 8'], answer: 'Matthew 6 and Luke 11', explanation: 'Jesus\'s model prayer, given in the Sermon on the Mount and to the disciples.', tags: ['prayer', 'teachings'] },
          { id: 'prayer-l2-q2', type: 'mc', prompt: 'The prayer\'s structure is...', choices: ['Us first, then God', 'God first (name, kingdom, will), then our needs', 'Only requests', 'Only praise'], answer: 'God first (name, kingdom, will), then our needs', explanation: 'Worship and surrender precede supplication.', tags: ['prayer'] },
          { id: 'prayer-l2-q3', type: 'tf', prompt: '"Forgive us our debts, as we also forgive our debtors" links receiving and giving forgiveness.', answer: 'True', explanation: 'Matthew 6:12 — forgiven people forgive.', tags: ['prayer'] },
        ],
      },
      {
        id: 'prayer-l3',
        title: 'Praying with Confidence',
        body: `## In Jesus's Name\n"Whatever you ask in my name, I will do" (John 14:13). Praying in Jesus's name means praying as his representative — according to his character and will. It's alignment, not a magic formula.\n\n## According to His Will\n"If we ask anything according to his will, he listens to us" (1 John 5:14). God's will is revealed in Scripture — pray his promises back to him. His answers: yes, no, wait. All are love; his wisdom exceeds ours (Isaiah 55:9).\n\n## Persevering Prayer\nJesus taught persistence: the friend at midnight (Luke 11:5-8), the persistent widow (Luke 18:1-8). "Keep asking" isn't bothering God — it's trusting him. Delay deepens dependence. Don't give up; God's timing is perfect.`,
        quiz: [
          { id: 'prayer-l3-q1', type: 'mc', prompt: 'Praying "in Jesus\'s name" means...', choices: ['Saying magic words', 'Praying as his representative, per his will', 'Only pastors can do it', 'Shouting loudly'], answer: 'Praying as his representative, per his will', explanation: 'Alignment with Christ, not a formula.', tags: ['prayer'] },
          { id: 'prayer-l3-q2', type: 'mc', prompt: '1 John 5:14 grounds confidence in...', choices: ['Our worthiness', 'Asking according to his will', 'Long prayers', 'Perfect faith'], answer: 'Asking according to his will', explanation: 'God hears prayers aligned with his revealed will.', tags: ['prayer'] },
          { id: 'prayer-l3-q3', type: 'tf', prompt: 'Jesus taught persistent, persevering prayer.', answer: 'True', explanation: 'Luke 11 and 18 — keep asking, seeking, knocking.', tags: ['prayer', 'parables'] },
        ],
      },
      {
        id: 'prayer-l4',
        title: 'Building a Prayer Life',
        body: `## Start Small, Stay Consistent\nBetter five faithful minutes than sporadic hours. Set a time and place (Jesus had his "custom," Luke 22:39). Daniel prayed three times daily (Daniel 6:10) — rhythm beats intensity.\n\n## Pray Scripture\nTurn psalms into prayers: "The LORD is my shepherd" becomes "Lord, shepherd me today through..." Praying God's words back aligns your heart with his. Paul's prayers (Ephesians 1, 3) are models for intercession.\n\n## Track and Share\nKeep a prayer journal: requests, dates, answers. Nothing builds faith like recorded faithfulness. Pray with others (Matthew 18:20) — agreement multiplies power. And listen: leave silence for God to speak. Prayer is conversation, not monologue.`,
        quiz: [
          { id: 'prayer-l4-q1', type: 'mc', prompt: 'A sustainable prayer habit emphasizes...', choices: ['Long sessions only', 'Consistency — a set time and place', 'Only crisis prayers', 'Public prayers'], answer: 'Consistency — a set time and place', explanation: 'Rhythm beats intensity; Daniel prayed three times daily.', tags: ['prayer'] },
          { id: 'prayer-l4-q2', type: 'mc', prompt: 'Praying Scripture means...', choices: ['Reading only', 'Turning God\'s words into your prayers', 'Memorizing Greek', 'Chanting'], answer: 'Turning God\'s words into your prayers', explanation: 'The psalms and Paul\'s prayers model this.', tags: ['prayer'] },
          { id: 'prayer-l4-q3', type: 'tf', prompt: 'Keeping a record of answered prayers builds faith.', answer: 'True', explanation: 'Remembering God\'s faithfulness fuels future trust.', tags: ['prayer'] },
        ],
      },
    ],
  },
  {
    id: 'spiritual-growth',
    title: 'Spiritual Growth',
    description: 'Grow in Christlikeness through spiritual disciplines, community, and perseverance. Move from milk to maturity.',
    level: 'intermediate',
    lessons: [
      {
        id: 'spiritual-growth-l1',
        title: 'The Goal: Christlikeness',
        body: `## Conformed to His Image\nGod's goal for you: "to be conformed to the image of his Son" (Romans 8:29). Not comfort, success, or happiness — Christlikeness. Everything in your life — blessings and trials — serves this end. "We all... are transformed into the same image" (2 Corinthians 3:18).\n\n## Growth Is Normal\nBabies grow; so do believers. "Like newborn babies, long for the pure milk of the word, that you may grow" (1 Peter 2:2). Stagnation isn't neutral — it's regression. God expects progress: "let us go on to perfection [maturity]" (Hebrews 6:1).\n\n## God's Part and Ours\n"Work out your own salvation... for it is God who works in you" (Philippians 2:12-13). We strive; God empowers. Disciplines are the means; grace is the engine. Growth is guaranteed for the truly planted (Philippians 1:6) — but we participate actively.`,
        quiz: [
          { id: 'spiritual-growth-l1-q1', type: 'mc', prompt: 'Romans 8:29 says God\'s goal is...', choices: ['Our comfort', 'Conformity to Christ\'s image', 'Our wealth', 'Our fame'], answer: 'Conformity to Christ\'s image', explanation: 'Christlikeness is the destination of every believer.', tags: ['theology'] },
          { id: 'spiritual-growth-l1-q2', type: 'mc', prompt: 'Philippians 2:12-13 teaches...', choices: ['Work without God', 'God works without us', 'We work out what God works in', 'Growth is optional'], answer: 'We work out what God works in', explanation: 'Divine empowerment and human effort together.', tags: ['theology'] },
          { id: 'spiritual-growth-l1-q3', type: 'tf', prompt: 'Spiritual stagnation is spiritually neutral.', answer: 'False', explanation: 'Hebrews warns against dullness — growth is expected, stagnation is regression.', tags: ['theology'] },
        ],
      },
      {
        id: 'spiritual-growth-l2',
        title: 'Spiritual Disciplines',
        body: `## Means of Grace\nDisciplines don't earn grace; they position us to receive it. "Exercise yourself toward godliness" (1 Timothy 4:7) — athletes train; Christians practice. Core disciplines: Scripture intake, prayer, worship, fellowship, service, fasting, silence, journaling.\n\n## Inward, Outward, Corporate\nInward (meditation, prayer, fasting, study) — shaping the inner life. Outward (simplicity, solitude, submission, service) — shaping engagement with the world. Corporate (worship, confession, guidance, celebration) — shaping community life. All three dimensions matter.\n\n## Grace, Not Legalism\nDisciplines become legalism when they're about earning. Keep the gospel central: we practice because we're loved, not to become lovable. Miss a day? Receive grace and resume. The goal is knowing Christ (Philippians 3:10), not checking boxes.`,
        quiz: [
          { id: 'spiritual-growth-l2-q1', type: 'mc', prompt: '1 Timothy 4:7 commands...', choices: ['Avoid exercise', 'Exercise yourself toward godliness', 'Ignore discipline', 'Only physical training'], answer: 'Exercise yourself toward godliness', explanation: 'Spiritual training, like physical, requires practice.', tags: ['theology'] },
          { id: 'spiritual-growth-l2-q2', type: 'tf', prompt: 'Spiritual disciplines earn God\'s grace.', answer: 'False', explanation: 'They position us to receive grace; they don\'t purchase it.', tags: ['grace'] },
          { id: 'spiritual-growth-l2-q3', type: 'mc', prompt: 'The ultimate goal of the disciplines is...', choices: ['Checking boxes', 'Knowing Christ', 'Impressing others', 'Earning heaven'], answer: 'Knowing Christ', explanation: 'Philippians 3:10 — "that I may know him."', tags: ['theology'] },
        ],
      },
      {
        id: 'spiritual-growth-l3',
        title: 'Growing Through Trials',
        body: `## Trials as Training\n"Count it all joy... when you fall into various temptations, knowing that the testing of your faith produces endurance" (James 1:2-3). God uses hardship as a gym: suffering → endurance → character → hope (Romans 5:3-4). Trials aren't interruptions to growth; they're instruments of it.\n\n## God's Discipline\n"Whom the Lord loves, he disciplines" (Hebrews 12:6). Discipline isn't punishment (Christ bore that) but training — "the peaceful fruit of righteousness" (12:11). Don't despise hardship; ask what the Father is forming.\n\n## Responding Well\nLament honestly (the psalms model it), trust God's character when you can't trace his hand, stay in community (isolation amplifies pain), and look for the "afterward" — what is this producing? "Our light affliction... works... an eternal weight of glory" (2 Corinthians 4:17).`,
        quiz: [
          { id: 'spiritual-growth-l3-q1', type: 'mc', prompt: 'James 1:2-3 says testing produces...', choices: ['Despair', 'Endurance', 'Doubt', 'Anger'], answer: 'Endurance', explanation: 'Trials are faith\'s gym — producing proven character.', tags: ['faith'] },
          { id: 'spiritual-growth-l3-q2', type: 'mc', prompt: 'Hebrews 12:11 says discipline yields...', choices: ['Punishment', 'The peaceful fruit of righteousness', 'Rejection', 'Shame'], answer: 'The peaceful fruit of righteousness', explanation: 'God\'s discipline is training, not payback.', tags: ['theology'] },
          { id: 'spiritual-growth-l3-q3', type: 'tf', prompt: 'God\'s discipline of believers is punishment for forgiven sin.', answer: 'False', explanation: 'Christ bore punishment; discipline is loving training for holiness.', tags: ['grace'] },
        ],
      },
      {
        id: 'spiritual-growth-l4',
        title: 'Growing in Community',
        body: `## You Can't Grow Alone\n"We are members of one another" (Romans 12:5). The New Testament knows nothing of solo Christianity — 59 "one another" commands assume community. Growth happens in relationships: sharpening (Proverbs 27:17), burden-bearing (Galatians 6:2), confession (James 5:16).\n\n## The Local Church\nCommit to a local body: gather weekly (Hebrews 10:25), serve with your gifts (1 Peter 4:10), submit to leaders (Hebrews 13:17), practice the ordinances. Church isn't a service to consume but a family to belong to.\n\n## Mentoring and Being Mentored\nPaul told Timothy: "what you have heard... entrust to faithful men who will teach others also" (2 Timothy 2:2) — four generations of discipleship. Find a mentor ahead of you; invest in someone behind you. Growth multiplies through relationships.`,
        quiz: [
          { id: 'spiritual-growth-l4-q1', type: 'mc', prompt: 'Hebrews 10:25 commands believers...', choices: ['To pray alone', 'Not to neglect gathering together', 'To travel', 'To build temples'], answer: 'Not to neglect gathering together', explanation: 'Committed gathering is God\'s design for growth.', tags: ['theology'] },
          { id: 'spiritual-growth-l4-q2', type: 'mc', prompt: '2 Timothy 2:2 describes...', choices: ['Solo study', 'Four generations of discipleship', 'Church buildings', 'Seminary degrees'], answer: 'Four generations of discipleship', explanation: 'Paul → Timothy → faithful men → others also.', tags: ['paul', 'disciples'] },
          { id: 'spiritual-growth-l4-q3', type: 'tf', prompt: 'Every believer has a spiritual gift meant for serving others.', answer: 'True', explanation: '1 Peter 4:10 — "as each has received a gift, employ it in serving one another."', tags: ['theology'] },
        ],
      },
    ],
  },

  {
    id: 'the-gospel',
    title: 'The Gospel',
    description: 'Understand, embrace, and share the good news: its content, its power, and its call to mission.',
    level: 'beginner',
    lessons: [
      {
        id: 'the-gospel-l1',
        title: 'The Bad News First',
        body: `## Why the Gospel Is Necessary\nGood news is only good against bad news. The bad news: "all have sinned, and fall short of the glory of God" (Romans 3:23). Sin isn't minor — it's cosmic treason separating us from a holy God (Isaiah 59:2). "The wages of sin is death" (Romans 6:23).\n\n## No Exceptions\nReligious or rebellious, moral or immoral — Romans 1-3 indicts all. Good deeds can't offset guilt: "by the works of the law, no flesh will be justified" (Galatians 2:16). We needed rescue, not advice.\n\n## Feeling the Weight\nUntil sin's seriousness lands, grace feels optional. The law is a tutor leading to Christ (Galatians 3:24) — showing our sickness so we'll take the cure. Honest diagnosis precedes joyful cure.`,
        quiz: [
          { id: 'the-gospel-l1-q1', type: 'mc', prompt: 'Romans 6:23: "The wages of sin is..."', choices: ['Sickness', 'Death', 'Bad luck', 'Nothing'], answer: 'Death', explanation: 'Sin earns death; eternal life is God\'s gift.', tags: ['salvation'] },
          { id: 'the-gospel-l1-q2', type: 'mc', prompt: 'Galatians 3:24 says the law was our...', choices: ['Savior', 'Tutor to lead us to Christ', 'Enemy', 'Option'], answer: 'Tutor to lead us to Christ', explanation: 'The law diagnoses sin, driving us to grace.', tags: ['salvation', 'paul'] },
          { id: 'the-gospel-l1-q3', type: 'tf', prompt: 'Good deeds can offset our guilt before God.', answer: 'False', explanation: '"By the works of the law, no flesh will be justified" (Galatians 2:16).', tags: ['salvation', 'grace'] },
        ],
      },
      {
        id: 'the-gospel-l2',
        title: 'Christ Died for Sinners',
        body: `## The Great Exchange\n"Christ died for our sins" (1 Corinthians 15:3). At the cross, God "made him who knew no sin to be sin on our behalf" (2 Corinthians 5:21). Our guilt transferred to Christ; his righteousness transferred to us. Divine justice satisfied, divine love displayed.\n\n## Propitiation and Redemption\nPropitiation: Christ's death turned away God's wrath (Romans 3:25). Redemption: he bought us out of slavery (Galatians 3:13). Reconciliation: enemies made friends (Romans 5:10). One cross, many facets — all necessary, all glorious.\n\n## It Is Finished\n"Tetelestai" — paid in full (John 19:30). Nothing to add, nothing to earn. The resurrection vindicates it all (Romans 4:25). The gospel is done, not do.`,
        quiz: [
          { id: 'the-gospel-l2-q1', type: 'mc', prompt: '2 Corinthians 5:21 describes...', choices: ['Moral example', 'The great exchange — our sin for his righteousness', 'A tragic accident', 'Political execution'], answer: 'The great exchange — our sin for his righteousness', explanation: 'He became sin for us; we become God\'s righteousness in him.', tags: ['salvation'] },
          { id: 'the-gospel-l2-q2', type: 'mc', prompt: '"Propitiation" means Christ\'s death...', choices: ['Was symbolic', 'Turned away God\'s wrath', 'Was unnecessary', 'Only helped Jews'], answer: 'Turned away God\'s wrath', explanation: 'Romans 3:25 — justice satisfied, wrath averted.', tags: ['salvation'] },
          { id: 'the-gospel-l2-q3', type: 'tf', prompt: 'Christ\'s "It is finished" means the debt of sin is fully paid.', answer: 'True', explanation: 'John 19:30 — tetelestai, paid in full.', tags: ['death-resurrection'] },
        ],
      },
      {
        id: 'the-gospel-l3',
        title: 'Responding: Repent and Believe',
        body: `## Two Sides of One Turn\n"Repent, and believe in the gospel" (Mark 1:15). Repentance: turning from sin to God (Acts 26:20). Faith: trusting Christ alone (Acts 16:31). Not two steps but one turn — away from self, toward Savior.\n\n## What Faith Isn't\nNot mere agreement (demons believe, James 2:19), not a feeling, not a work. Faith is receiving — "as many as received him... he gave the right to become God's children" (John 1:12). The hand doesn't earn the gift; it takes it.\n\n## Assurance\n"If you confess with your mouth... and believe in your heart... you will be saved" (Romans 10:9). Assurance rests on God's promise, not our performance. The Spirit witnesses (Romans 8:16); a changed life confirms (1 John). Rest in Christ's finished work.`,
        quiz: [
          { id: 'the-gospel-l3-q1', type: 'mc', prompt: 'Mark 1:15: Jesus\'s first command was...', choices: ['Be happy', 'Repent, and believe in the gospel', 'Try harder', 'Join a group'], answer: 'Repent, and believe in the gospel', explanation: 'One turn: from sin (repentance) to Christ (faith).', tags: ['salvation', 'jesus-ministry'] },
          { id: 'the-gospel-l3-q2', type: 'mc', prompt: 'John 1:12 says becoming God\'s child comes by...', choices: ['Birth', 'Receiving Christ', 'Good works', 'Church membership'], answer: 'Receiving Christ', explanation: '"As many as received him... he gave the right to become God\'s children."', tags: ['salvation', 'faith'] },
          { id: 'the-gospel-l3-q3', type: 'tf', prompt: 'Saving faith is mere intellectual agreement with gospel facts.', answer: 'False', explanation: 'Demons believe facts (James 2:19); saving faith trusts and receives.', tags: ['faith'] },
        ],
      },
      {
        id: 'the-gospel-l4',
        title: 'Sharing the Gospel',
        body: `## Our Commission\n"Go... and make disciples of all nations" (Matthew 28:19). Evangelism isn't optional for the outgoing — it's every Christian's calling. We are "ambassadors for Christ" (2 Corinthians 5:20).\n\n## How to Share\nKnow the gospel clearly (God, man, Christ, response). Share your story — what Christ did for you. Ask questions, listen well, invite response. "Always be ready to give an answer... with gentleness and respect" (1 Peter 3:15). The Spirit converts; we witness.\n\n## Overcoming Fear\nFear of rejection is normal — the apostles felt it (Acts 4:29). Pray for boldness, remember results belong to God (1 Corinthians 3:6), and start with one person. "How will they hear without a preacher?" (Romans 10:14). Someone told you; tell someone.`,
        quiz: [
          { id: 'the-gospel-l4-q1', type: 'mc', prompt: 'Matthew 28:19 commands...', choices: ['Stay comfortable', 'Go and make disciples of all nations', 'Only pastors evangelize', 'Wait for seekers'], answer: 'Go and make disciples of all nations', explanation: 'The Great Commission — every believer\'s calling.', tags: ['teachings'] },
          { id: 'the-gospel-l4-q2', type: 'mc', prompt: '1 Peter 3:15 says to defend the faith with...', choices: ['Aggression', 'Gentleness and respect', 'Sarcasm', 'Silence'], answer: 'Gentleness and respect', explanation: 'Boldness and kindness together.', tags: ['faith'] },
          { id: 'the-gospel-l4-q3', type: 'tf', prompt: 'In evangelism, we witness and the Holy Spirit converts.', answer: 'True', explanation: '1 Corinthians 3:6 — we plant and water; God gives growth.', tags: ['theology'] },
        ],
      },
    ],
  },
  {
    id: 'understanding-salvation',
    title: 'Understanding Salvation',
    description: 'Explore the riches of salvation: election, calling, justification, adoption, sanctification, and glorification.',
    level: 'intermediate',
    lessons: [
      {
        id: 'understanding-salvation-l1',
        title: 'Chosen and Called',
        body: `## Election\n"He chose us in him before the foundation of the world" (Ephesians 1:4). Election is God's sovereign choice of sinners for salvation — "not of works, but of him who calls" (Romans 9:11). It's meant to humble pride and comfort hearts: your salvation originated in God's love before you existed.\n\n## Effectual Calling\nGod's call through the gospel actually brings sinners to Christ: "those whom he called, he also justified" (Romans 8:30). The outward call goes to all; the inward call regenerates. "No one can come to me unless the Father... draws him" (John 6:44).\n\n## Mystery and Responsibility\nScripture holds sovereignty and responsibility together: God chooses, and "whoever will" may come (Revelation 22:17). We preach to all; God saves his own. Don't let mystery paralyze mission — "how will they hear without a preacher?" (Romans 10:14).`,
        quiz: [
          { id: 'understanding-salvation-l1-q1', type: 'mc', prompt: 'Ephesians 1:4 says God chose us...', choices: ['After we chose him', 'Before the foundation of the world', 'Because of our works', 'Randomly'], answer: 'Before the foundation of the world', explanation: 'Election is eternal, gracious, and humbling.', tags: ['salvation', 'theology'] },
          { id: 'understanding-salvation-l1-q2', type: 'mc', prompt: 'John 6:44 teaches...', choices: ['Everyone comes naturally', 'No one comes unless the Father draws him', 'Drawing is unnecessary', 'Free will alone saves'], answer: 'No one comes unless the Father draws him', explanation: 'Salvation requires God\'s initiating grace.', tags: ['salvation'] },
          { id: 'understanding-salvation-l1-q3', type: 'tf', prompt: 'God\'s sovereignty in election removes our responsibility to preach the gospel.', answer: 'False', explanation: 'Romans 10:14 — God saves through the preached word; mystery fuels mission.', tags: ['salvation'] },
        ],
      },
      {
        id: 'understanding-salvation-l2',
        title: 'Regeneration and Conversion',
        body: `## Born Again\n"You must be born again" (John 3:7). Regeneration is the Spirit's act of giving spiritual life to the dead (Ephesians 2:5). It's monergistic — God alone does it. We don't birth ourselves; we're born. The result: new heart (Ezekiel 36:26), new desires, new life.\n\n## Conversion: Our Response\nConversion is our turn: repentance (mind, heart, will turning from sin) and faith (trusting Christ). God's work (regeneration) precedes and enables our response (conversion). "Work out your salvation... for God works in you" (Philippians 2:12-13).\n\n## Evidence\n"By their fruits you will know them" (Matthew 7:16): love for God, hatred of sin, love for believers, obedience, perseverance. Not perfection — direction. True conversion produces new life that lasts.`,
        quiz: [
          { id: 'understanding-salvation-l2-q1', type: 'mc', prompt: 'Regeneration is...', choices: ['Our decision', 'The Spirit giving life to the spiritually dead', 'Baptism', 'Self-improvement'], answer: 'The Spirit giving life to the spiritually dead', explanation: 'John 3:5-8; Ephesians 2:5 — God\'s monergistic work.', tags: ['salvation'] },
          { id: 'understanding-salvation-l2-q2', type: 'mc', prompt: 'Conversion consists of...', choices: ['Baptism and confirmation', 'Repentance and faith', 'Church attendance', 'Good intentions'], answer: 'Repentance and faith', explanation: 'Our Spirit-enabled turn from sin to Christ.', tags: ['salvation'] },
          { id: 'understanding-salvation-l2-q3', type: 'tf', prompt: 'True conversion produces lasting fruit, though not perfection.', answer: 'True', explanation: 'Matthew 7:16 — direction matters more than perfection.', tags: ['salvation', 'faith'] },
        ],
      },
      {
        id: 'understanding-salvation-l3',
        title: 'Justification and Adoption',
        body: `## Declared Righteous\nJustification is God's legal declaration: sinners who believe are counted righteous because of Christ's work (Romans 5:1). It's instantaneous, complete, and by faith alone. God "justifies the ungodly" (Romans 4:5) — the scandal and glory of grace.\n\n## Double Imputation\nOur sin imputed to Christ; his righteousness imputed to us (2 Corinthians 5:21). God sees believers clothed in Christ's perfection. This is why there's "no condemnation" (Romans 8:1) — the verdict is final.\n\n## Adopted as Children\nBeyond acquittal: adoption. "You received the Spirit of adoption, by whom we cry, 'Abba! Father!'" (Romans 8:15). From courtroom to family room — heirs of God, co-heirs with Christ (8:17). Justification changes status; adoption changes relationship.`,
        quiz: [
          { id: 'understanding-salvation-l3-q1', type: 'mc', prompt: 'Justification is...', choices: ['Gradual improvement', 'God\'s declaration that believers are righteous through faith', 'A feeling', 'Earned status'], answer: 'God\'s declaration that believers are righteous through faith', explanation: 'Romans 5:1 — legal, instantaneous, complete.', tags: ['salvation', 'theology'] },
          { id: 'understanding-salvation-l3-q2', type: 'mc', prompt: 'Romans 8:15 says believers received...', choices: ['A spirit of fear', 'The Spirit of adoption', 'A new law', 'A second chance'], answer: 'The Spirit of adoption', explanation: 'Crying "Abba! Father!" — from courtroom to family.', tags: ['salvation'] },
          { id: 'understanding-salvation-l3-q3', type: 'tf', prompt: 'In justification, Christ\'s righteousness is credited to believers.', answer: 'True', explanation: '2 Corinthians 5:21 — the double imputation.', tags: ['salvation', 'grace'] },
        ],
      },
      {
        id: 'understanding-salvation-l4',
        title: 'Sanctification and Glorification',
        body: `## Growing Holy\nSanctification is the Spirit's ongoing work of making believers holy (1 Thessalonians 4:3). Definitive (set apart at conversion, 1 Corinthians 6:11), progressive (growing daily, 2 Corinthians 3:18), and final (complete at Christ's return). We cooperate: "pursue... sanctification" (Hebrews 12:14).\n\n## Means of Growth\nWord (John 17:17), prayer, fellowship, suffering (Romans 5:3-4), obedience. "Walk by the Spirit" (Galatians 5:16) — dependence, not willpower. Growth is often slow and uneven, but the trajectory is certain: "he who began... will complete it" (Philippians 1:6).\n\n## Glorification: The Finish\n"Whom he justified, he also glorified" (Romans 8:30) — so certain it's past tense. At Christ's return: resurrection bodies (1 Corinthians 15:42-44), sinless perfection (1 John 3:2), eternal joy (Revelation 21:4). Salvation's story ends in glory — "to the praise of his glory" (Ephesians 1:14).`,
        quiz: [
          { id: 'understanding-salvation-l4-q1', type: 'mc', prompt: 'Sanctification is...', choices: ['Instant perfection', 'The Spirit\'s ongoing work of making believers holy', 'Optional', 'By works alone'], answer: 'The Spirit\'s ongoing work of making believers holy', explanation: '1 Thessalonians 4:3 — God\'s will: your sanctification.', tags: ['salvation'] },
          { id: 'understanding-salvation-l4-q2', type: 'mc', prompt: 'Philippians 1:6 promises...', choices: ['We finish ourselves', 'He who began a good work will complete it', 'Growth is instant', 'Failure is final'], answer: 'He who began a good work will complete it', explanation: 'God finishes what he starts — perseverance is his promise.', tags: ['salvation', 'faith'] },
          { id: 'understanding-salvation-l4-q3', type: 'tf', prompt: 'Glorification is so certain Scripture speaks of it in the past tense.', answer: 'True', explanation: 'Romans 8:30 — "whom he justified, he also glorified."', tags: ['salvation'] },
        ],
      },
    ],
  },
  {
    id: 'faith-and-doubt',
    title: 'Faith and Doubt',
    description: 'Honest help for hard questions: what faith is, why doubt comes, and how to wrestle well without walking away.',
    level: 'intermediate',
    lessons: [
      {
        id: 'faith-and-doubt-l1',
        title: 'What Faith Is (and Isn\'t)',
        body: `## Assurance, Not Wishing\n"Faith is assurance of things hoped for, proof of things not seen" (Hebrews 11:1). Biblical faith is confident trust based on evidence — not blind leap, positive thinking, or strong feeling. We trust Christ because of who he is and what he's done.\n\n## Object Over Amount\nMustard-seed faith moves mountains (Matthew 17:20) — the power is in the object, not the size. Weak faith in a strong Christ saves; strong faith in a weak object doesn't. Don't measure faith's volume; check its direction.\n\n## Faith Comes by Hearing\n"Faith comes by hearing... the word of God" (Romans 10:17). Starve on Scripture and faith weakens; feast and it strengthens. Doubt often signals malnutrition, not apostasy — feed it truth.`,
        quiz: [
          { id: 'faith-and-doubt-l1-q1', type: 'mc', prompt: 'Hebrews 11:1 defines faith as...', choices: ['Blind leap', 'Assurance of things hoped for, proof of things not seen', 'Positive thinking', 'Emotion'], answer: 'Assurance of things hoped for, proof of things not seen', explanation: 'Confident trust grounded in evidence.', tags: ['faith'] },
          { id: 'faith-and-doubt-l1-q2', type: 'mc', prompt: 'What matters most about faith?', choices: ['Its size', 'Its object', 'Its age', 'Its feelings'], answer: 'Its object', explanation: 'Mustard-seed faith in a great God suffices (Matthew 17:20).', tags: ['faith'] },
          { id: 'faith-and-doubt-l1-q3', type: 'tf', prompt: 'Romans 10:17 says faith comes by hearing God\'s word.', answer: 'True', explanation: 'Scripture intake feeds faith; neglect starves it.', tags: ['faith'] },
        ],
      },
      {
        id: 'faith-and-doubt-l2',
        title: 'Why We Doubt',
        body: `## Common Causes\nUnmet expectations (John the Baptist in prison, Matthew 11:3), suffering (Psalm 13), unanswered questions, intellectual challenges, moral failure (guilt whispers "you can't be his"), and spiritual attack. Doubt has many doors; identifying yours is the first step.\n\n## Doubt vs. Unbelief\nDoubt says "I believe; help my unbelief" (Mark 9:24) — struggling toward Christ. Unbelief refuses light (John 3:19). God welcomes wrestlers (Jacob's name means "wrestles with God") and warns the hardened. Bring doubts to Jesus, not away from him.\n\n## Biblical Doubters\nAbraham laughed (Genesis 17:17), Moses hesitated (Exodus 3:11), David despaired (Psalm 13:1), Thomas demanded proof (John 20:25) — yet all are heroes of faith. Doubt didn't disqualify them; processed honestly, it deepened them.`,
        quiz: [
          { id: 'faith-and-doubt-l2-q1', type: 'mc', prompt: 'John the Baptist doubted because...', choices: ['He never believed', 'Prison and unmet expectations', 'He was evil', 'He hated Jesus'], answer: 'Prison and unmet expectations', explanation: 'Matthew 11:3 — circumstances shook even the greatest prophet.', tags: ['faith', 'people-nt'] },
          { id: 'faith-and-doubt-l2-q2', type: 'mc', prompt: 'The father in Mark 9:24 prayed...', choices: ['I have no doubts', 'I believe; help my unbelief', 'Prove it first', 'I give up'], answer: 'I believe; help my unbelief', explanation: 'Honest doubt brought to Jesus — the model prayer.', tags: ['faith', 'jesus-ministry'] },
          { id: 'faith-and-doubt-l2-q3', type: 'tf', prompt: 'Doubt is the same as unbelief.', answer: 'False', explanation: 'Doubt wrestles toward truth; unbelief refuses it.', tags: ['faith'] },
        ],
      },
      {
        id: 'faith-and-doubt-l3',
        title: 'How Jesus Treats Doubters',
        body: `## With Evidence, Not Rebuke\nTo John's doubts: "Go report... the blind receive sight" (Matthew 11:4-5) — evidence, fulfilling Isaiah 35. To Thomas: "Reach here your finger... do not be unbelieving, but believing" (John 20:27) — he offered his wounds. Jesus answers honest doubt with reasons.\n\n## With Patience, Not Contempt\nHe didn't shame Thomas or abandon John. A week later he appeared specifically for Thomas. The risen Christ pursues doubters. "Blessed are those who have not seen, and have believed" (John 20:29) — gentle redirection, not rejection.\n\n## With a Question\n"Do you believe this?" (John 11:26) — Jesus presses Martha (and us) toward decision. Doubt processed with Christ leads somewhere: deeper faith. Doubt nursed alone curdles into cynicism. Bring it to him.`,
        quiz: [
          { id: 'faith-and-doubt-l3-q1', type: 'mc', prompt: 'Jesus answered John\'s doubts with...', choices: ['Rebuke', 'Evidence of messianic miracles', 'Silence', 'Anger'], answer: 'Evidence of messianic miracles', explanation: 'Matthew 11:4-5 — pointing to Isaiah 35 fulfilled.', tags: ['faith', 'jesus-ministry'] },
          { id: 'faith-and-doubt-l3-q2', type: 'mc', prompt: 'What did Jesus offer doubting Thomas?', choices: ['A lecture', 'His wounds to touch', 'A book', 'Dismissal'], answer: 'His wounds to touch', explanation: 'John 20:27 — the risen Christ meets doubt with evidence.', tags: ['faith', 'death-resurrection'] },
          { id: 'faith-and-doubt-l3-q3', type: 'tf', prompt: 'Jesus shamed Thomas for doubting.', answer: 'False', explanation: 'He met him with patience and proof, then gently redirected.', tags: ['faith'] },
        ],
      },
      {
        id: 'faith-and-doubt-l4',
        title: 'Wrestling Well',
        body: `## Practices for Doubters\nName doubts specifically (vague doubt paralyzes; specific doubt can be investigated). Study the evidence — Gospels, resurrection, prophecy. Pray honestly ("help my unbelief"). Stay in community and the means of grace (worship, Scripture, fellowship). Keep obeying what's clear while wrestling with what's not.\n\n## The Church's Role\n"Have mercy on some, who are doubting" (Jude 22). Churches should be safe for questions — not celebrating cynicism, not shaming seekers. If you doubt, find mature believers who won't panic. If others doubt, offer mercy, evidence, and presence.\n\n## Stronger on the Other Side\nTested faith is proven faith: "the testing of your faith produces endurance" (James 1:3). Many saints testify their deepest doubts preceded their deepest confidence. Don't waste the wrestling — let it drive you to Christ, not from him.`,
        quiz: [
          { id: 'faith-and-doubt-l4-q1', type: 'mc', prompt: 'Jude 22 commands the church to...', choices: ['Shame doubters', 'Have mercy on those who doubt', 'Ignore doubt', 'Celebrate cynicism'], answer: 'Have mercy on those who doubt', explanation: 'Mercy, not shame, is the prescription.', tags: ['faith'] },
          { id: 'faith-and-doubt-l4-q2', type: 'mc', prompt: 'James 1:3 says the testing of faith produces...', choices: ['Apostasy', 'Endurance', 'Confusion', 'Apathy'], answer: 'Endurance', explanation: 'Wrestled-through doubt often yields stronger faith.', tags: ['faith'] },
          { id: 'faith-and-doubt-l4-q3', type: 'tf', prompt: 'It\'s best to resolve all doubts before obeying what Scripture clearly teaches.', answer: 'False', explanation: 'Obey what\'s clear while wrestling with what\'s not — obedience often precedes understanding.', tags: ['faith'] },
        ],
      },
    ],
  },
  {
    id: 'christian-ethics',
    title: 'Christian Ethics',
    description: 'Think biblically about moral decisions: ethical foundations, life issues, sexuality, work, and engaging culture.',
    level: 'advanced',
    lessons: [
      {
        id: 'christian-ethics-l1',
        title: 'Foundations of Christian Ethics',
        body: `## God's Character as Norm\nChristian ethics flows from who God is: "be holy, for I am holy" (1 Peter 1:16). Morality isn't arbitrary rules but reflection of God's nature. His law reveals his character; obedience images him.\n\n## Scripture, Not Culture\n"Do not be conformed to this world, but be transformed by the renewing of your mind" (Romans 12:2). Culture shifts; God's word stands (Isaiah 40:8). Christians think from Scripture outward, not from culture inward — discerning, not absorbing, the age.\n\n## The Two Great Commandments\n"Love God... love your neighbor" (Matthew 22:37-39) — all ethics hang here. Love defines the goal; God's commands define love's shape (1 John 5:3). Neither legalism (rules without love) nor license (love without rules) — but love-shaped obedience.`,
        quiz: [
          { id: 'christian-ethics-l1-q1', type: 'mc', prompt: 'Christian ethics is grounded in...', choices: ['Cultural consensus', 'God\'s character', 'Personal feelings', 'Majority vote'], answer: 'God\'s character', explanation: '"Be holy, for I am holy" (1 Peter 1:16).', tags: ['theology'] },
          { id: 'christian-ethics-l1-q2', type: 'mc', prompt: 'Romans 12:2 commands...', choices: ['Conform to culture', 'Be transformed by renewed minds', 'Withdraw completely', 'Follow feelings'], answer: 'Be transformed by renewed minds', explanation: 'Scripture-shaped thinking resists cultural conformity.', tags: ['theology'] },
          { id: 'christian-ethics-l1-q3', type: 'tf', prompt: 'Love and God\'s commands are opposed to each other.', answer: 'False', explanation: '"This is the love of God, that we keep his commandments" (1 John 5:3).', tags: ['theology'] },
        ],
      },
      {
        id: 'christian-ethics-l2',
        title: 'The Sanctity of Life',
        body: `## Made in God's Image\n"God created man in his own image" (Genesis 1:27) — the foundation of human dignity. Every person, from womb to tomb, bears divine image and possesses immeasurable worth. This grounds opposition to murder (Exodus 20:13), abortion (Psalm 139:13-16), euthanasia, and racism.\n\n## The Unborn\n"You knit me together in my mother's womb" (Psalm 139:13). Scripture treats the unborn as persons: John leapt in the womb (Luke 1:41); God called prophets before birth (Jeremiah 1:5). Christians defend the vulnerable — "rescue those being taken away to death" (Proverbs 24:11).\n\n## A Consistent Ethic\nImage-bearing dignity also opposes racism (Acts 17:26 — "one blood"), affirms care for the poor (Proverbs 19:17), the elderly (Leviticus 19:32), and enemies (Matthew 5:44). Pro-life means whole-life: every person matters to God.`,
        quiz: [
          { id: 'christian-ethics-l2-q1', type: 'mc', prompt: 'Human dignity is grounded in...', choices: ['Usefulness', 'Being made in God\'s image', 'Intelligence', 'Wealth'], answer: 'Being made in God\'s image', explanation: 'Genesis 1:27 — the basis of all human rights.', tags: ['genesis', 'theology'] },
          { id: 'christian-ethics-l2-q2', type: 'mc', prompt: 'Psalm 139:13 says God...', choices: ['Ignores the womb', 'Knit us together in our mother\'s womb', 'Starts life at birth only', 'Values adults only'], answer: 'Knit us together in our mother\'s womb', explanation: 'God\'s personal formation of the unborn affirms their personhood.', tags: ['psalms'] },
          { id: 'christian-ethics-l2-q3', type: 'tf', prompt: 'Acts 17:26 ("one blood") undermines racism.', answer: 'True', explanation: 'God "made from one blood every nation" — shared humanity, equal dignity.', tags: ['theology'] },
        ],
      },
      {
        id: 'christian-ethics-l3',
        title: 'Sexuality and Marriage',
        body: `## God's Design\n"Male and female he created them" (Genesis 1:27); marriage is one man and one woman becoming "one flesh" (Genesis 2:24; Matthew 19:4-6). Sex is God's good gift within covenant marriage (Hebrews 13:4; Song of Songs) — and reserved for it.\n\n## Sexual Immorality\n"Flee sexual immorality" (1 Corinthians 6:18). Adultery, fornication, pornography, homosexual practice (Romans 1:26-27; 1 Corinthians 6:9-10) — all violate God's design. Our bodies are temples (6:19); sexual sin is uniquely self-destructive.\n\n## Grace and Truth\nChristians uphold God's design while loving strugglers — as Christ loved the adulterous woman: "neither do I condemn you... go and sin no more" (John 8:11). No condemnation for the repentant; no compromise on truth. All sexual brokenness finds healing at the cross.`,
        quiz: [
          { id: 'christian-ethics-l3-q1', type: 'mc', prompt: 'Genesis 2:24 defines marriage as...', choices: ['Any loving union', 'One man and one woman becoming one flesh', 'A temporary contract', 'A human invention'], answer: 'One man and one woman becoming one flesh', explanation: 'Affirmed by Jesus in Matthew 19:4-6.', tags: ['genesis'] },
          { id: 'christian-ethics-l3-q2', type: 'mc', prompt: '1 Corinthians 6:18 commands...', choices: ['Discuss', 'Flee sexual immorality', 'Tolerate everything', 'Judge others'], answer: 'Flee sexual immorality', explanation: 'Not fight, not flirt — flee. Joseph\'s model (Genesis 39).', tags: ['paul'] },
          { id: 'christian-ethics-l3-q3', type: 'tf', prompt: 'Jesus combined "neither do I condemn you" with "go and sin no more."', answer: 'True', explanation: 'John 8:11 — grace and truth together.', tags: ['jesus-ministry'] },
        ],
      },
      {
        id: 'christian-ethics-l4',
        title: 'Work, Wealth, and Justice',
        body: `## Work as Calling\nWork predates the fall (Genesis 2:15) — it's dignified, not cursed. "Whatever you do, work heartily, as for the Lord" (Colossians 3:23). Christians work with excellence and integrity, providing for families (1 Timothy 5:8) and the needy (Ephesians 4:28).\n\n## Wealth as Stewardship\n"You cannot serve God and Mammon" (Matthew 6:24). Wealth is a tool and test: earn honestly, save wisely, give generously (1 Timothy 6:17-19). "The love of money is a root of all kinds of evil" (6:10) — love, not money, is the problem.\n\n## Justice and Mercy\n"Do justice, love mercy, walk humbly" (Micah 6:8). Christians defend the vulnerable (Proverbs 31:8-9), care for the poor (Galatians 2:10), and pursue reconciliation (2 Corinthians 5:18). Personal holiness and public justice belong together — the gospel transforms both hearts and societies.`,
        quiz: [
          { id: 'christian-ethics-l4-q1', type: 'mc', prompt: 'Colossians 3:23 teaches...', choices: ['Work only for pay', 'Work heartily as for the Lord', 'Avoid work', 'Work for approval'], answer: 'Work heartily as for the Lord', explanation: 'All legitimate work is worship when done for God.', tags: ['theology'] },
          { id: 'christian-ethics-l4-q2', type: 'mc', prompt: '1 Timothy 6:10 warns against...', choices: ['Money itself', 'The love of money', 'Hard work', 'Saving'], answer: 'The love of money', explanation: 'Money is a tool; loving it is the root of evil.', tags: ['paul'] },
          { id: 'christian-ethics-l4-q3', type: 'tf', prompt: 'Micah 6:8 summarizes God\'s requirement as doing justice, loving mercy, and walking humbly.', answer: 'True', explanation: 'Personal piety and public justice together.', tags: ['ot-overview'] },
        ],
      },
      {
        id: 'christian-ethics-l5',
        title: 'Engaging Culture Faithfully',
        body: `## In the World, Not of It\nJesus prayed not to take us out of the world but to keep us from evil (John 17:15). Withdrawal abandons mission; assimilation abandons holiness. The call: distinct presence — "in the world" as salt and light (Matthew 5:13-16), "not of it" in values.\n\n## Winsome Conviction\n"Speak the truth in love" (Ephesians 4:15). Hold convictions courageously (Daniel), communicate graciously (Colossians 4:6), and love opponents genuinely (Matthew 5:44). The early church transformed the empire not by seizing power but by serving sacrificially and speaking truthfully.\n\n## Hope, Not Despair\nCulture may darken, but "the gates of Hades will not prevail" (Matthew 16:18). Christians engage with hope: voting, serving, creating, advocating — as citizens of heaven (Philippians 3:20) working for earthly good (Jeremiah 29:7). Faithfulness is success; results belong to God.`,
        quiz: [
          { id: 'christian-ethics-l5-q1', type: 'mc', prompt: 'John 17:15 shows Jesus wants believers...', choices: ['Removed from the world', 'In the world but kept from evil', 'Isolated in communes', 'Indistinguishable from culture'], answer: 'In the world but kept from evil', explanation: 'Distinct presence: engaged yet holy.', tags: ['teachings'] },
          { id: 'christian-ethics-l5-q2', type: 'mc', prompt: 'Ephesians 4:15 commands...', choices: ['Truth without love', 'Love without truth', 'Speaking the truth in love', 'Silence'], answer: 'Speaking the truth in love', explanation: 'Conviction and kindness together.', tags: ['paul'] },
          { id: 'christian-ethics-l5-q3', type: 'tf', prompt: 'Jeremiah 29:7 calls exiles to seek their city\'s welfare.', answer: 'True', explanation: 'Christians work for earthly good as heavenly citizens.', tags: ['ot-overview'] },
        ],
      },
    ],
  },

  {
    id: 'marriage-relationships',
    title: 'Marriage & Relationships',
    description: 'Biblical wisdom for marriage, family, friendship, and community: God\'s design for our closest bonds.',
    level: 'intermediate',
    lessons: [
      {
        id: 'marriage-relationships-l1',
        title: 'God\'s Design for Marriage',
        body: `## Covenant, Not Contract\n"A man will leave his father and his mother, and will join with his wife, and they will be one flesh" (Genesis 2:24). Marriage is covenant — permanent, exclusive, sacred. "What God has joined together, let no man separate" (Matthew 19:6). Contracts protect rights; covenants bind hearts.\n\n## A Picture of Christ and the Church\n"Husbands, love your wives, even as Christ also loved the church, and gave himself up for it" (Ephesians 5:25). Marriage preaches the gospel: sacrificial, faithful, enduring love. Every Christian marriage is a sermon.\n\n## Mutual Honor\nWives and husbands are "joint heirs of the grace of life" (1 Peter 3:7) — equal in worth, distinct in role. "Be devoted to one another... give preference to one another in honor" (Romans 12:10). Marriage flourishes when both outdo each other in honor, not when one wins.`,
        quiz: [
          { id: 'marriage-relationships-l1-q1', type: 'mc', prompt: 'Genesis 2:24 establishes marriage as...', choices: ['A temporary arrangement', 'Leaving, cleaving, and becoming one flesh', 'A business deal', 'Optional'], answer: 'Leaving, cleaving, and becoming one flesh', explanation: 'Covenant union creating a new family.', tags: ['genesis'] },
          { id: 'marriage-relationships-l1-q2', type: 'mc', prompt: 'Ephesians 5:25 commands husbands to...', choices: ['Rule harshly', 'Love as Christ loved the church', 'Provide only money', 'Demand respect'], answer: 'Love as Christ loved the church', explanation: 'Sacrificial, self-giving love — the gospel in marriage.', tags: ['paul'] },
          { id: 'marriage-relationships-l1-q3', type: 'tf', prompt: '1 Peter 3:7 calls husbands and wives "joint heirs of the grace of life."', answer: 'True', explanation: 'Equal worth and dignity before God.', tags: ['theology'] },
        ],
      },
      {
        id: 'marriage-relationships-l2',
        title: 'Love in Action: 1 Corinthians 13',
        body: `## Love's Job Description\n"Love is patient, love is kind..." (1 Corinthians 13:4-7). Paul describes love as action, not feeling: patient with flaws, kind in deeds, humble (not jealous or boastful), selfless, calm, forgiving ("keeps no record of wrongs"), truthful, enduring. This is marriage's daily standard.\n\n## The Test\nSubstitute your name for "love": "[Name] is patient, [Name] is kind..." — convicting? That's the point. Love is measured at home first: "if I have not love, I am nothing" (13:2). Ministry success can't compensate for loveless marriage.\n\n## Love Never Fails\nFeelings fluctuate; covenant love endures. "Love... endures all things" (13:7). Marriages don't survive on romance but on daily 1 Corinthians 13 choices. The Spirit produces this love (Galatians 5:22) — pray it, practice it, watch it grow.`,
        quiz: [
          { id: 'marriage-relationships-l2-q1', type: 'mc', prompt: '1 Corinthians 13:4 says love is...', choices: ['Patient and kind', 'Jealous and proud', 'Rude and selfish', 'Temporary'], answer: 'Patient and kind', explanation: 'Love\'s first two marks — action, not just feeling.', tags: ['paul'] },
          { id: 'marriage-relationships-l2-q2', type: 'mc', prompt: 'According to 1 Corinthians 13:5, love...', choices: ['Keeps a record of wrongs', 'Keeps no record of wrongs', 'Never forgives', 'Seeks revenge'], answer: 'Keeps no record of wrongs', explanation: 'Forgiving love doesn\'t stockpile grievances.', tags: ['paul'] },
          { id: 'marriage-relationships-l2-q3', type: 'tf', prompt: '1 Corinthians 13 was originally written specifically as wedding material.', answer: 'False', explanation: 'Paul wrote it to correct a loveless church — it applies to all relationships.', tags: ['paul'] },
        ],
      },
      {
        id: 'marriage-relationships-l3',
        title: 'Communication and Conflict',
        body: `## Quick to Listen\n"Be quick to hear, slow to speak, slow to anger" (James 1:19). Most marital conflict escalates because both speak quickly and listen slowly. Listening is love: seeking to understand before being understood. "A gentle answer turns away wrath" (Proverbs 15:1).\n\n## Fight Fair\n"Don't let the sun go down on your wrath" (Ephesians 4:26) — resolve quickly. Attack problems, not persons. No contempt, no stonewalling, no bringing up settled past. "Be kind... forgiving each other, just as God also in Christ forgave you" (4:32).\n\n## When It's Hard\nSome marriages face serious brokenness — seek help early: pastors, counselors, mature couples. "In the multitude of counselors there is safety" (Proverbs 11:14). Getting help is wisdom. And pray together — couples who pray together stay together, united before God.`,
        quiz: [
          { id: 'marriage-relationships-l3-q1', type: 'mc', prompt: 'James 1:19 prescribes...', choices: ['Quick to speak', 'Quick to hear, slow to speak, slow to anger', 'Quick to anger', 'Slow to listen'], answer: 'Quick to hear, slow to speak, slow to anger', explanation: 'Listening-first defuses conflict.', tags: ['theology'] },
          { id: 'marriage-relationships-l3-q2', type: 'mc', prompt: 'Ephesians 4:26 warns...', choices: ['Never be angry', 'Don\'t let the sun go down on your wrath', 'Avoid all conflict', 'Keep records'], answer: 'Don\'t let the sun go down on your wrath', explanation: 'Resolve conflict quickly; don\'t nurse grievances.', tags: ['paul'] },
          { id: 'marriage-relationships-l3-q3', type: 'tf', prompt: 'Seeking counseling for marriage problems is a sign of failure.', answer: 'False', explanation: '"In the multitude of counselors there is safety" (Proverbs 11:14).', tags: ['proverbs'] },
        ],
      },
      {
        id: 'marriage-relationships-l4',
        title: 'Friendship and Community',
        body: `## Friends as Gifts\n"A friend loves at all times" (Proverbs 17:17). "Iron sharpens iron" (27:17) — friends refine us. Jesus called disciples friends (John 15:15). Deep friendship isn't optional; it's God's provision for the journey.\n\n## Choosing Wisely\n"He who walks with wise men will be wise" (Proverbs 13:20). Friendships shape us — choose companions who pull you toward Christ. And be that friend: loyal in adversity, honest in love ("faithful are the wounds of a friend," 27:6).\n\n## The Church as Family\nBeyond marriage and friendship: the church. "Devoted to one another in brotherly love" (Romans 12:10). Singles, widows, orphans — all belong (Psalm 68:6). Invest in church family; it's eternal (marriage isn't, Matthew 22:30 — but the church is Christ's forever bride).`,
        quiz: [
          { id: 'marriage-relationships-l4-q1', type: 'mc', prompt: 'Proverbs 17:17: "A friend loves..."', choices: ['When convenient', 'At all times', 'Only when agreed with', 'From a distance'], answer: 'At all times', explanation: 'Constancy, especially in adversity, marks true friendship.', tags: ['proverbs'] },
          { id: 'marriage-relationships-l4-q2', type: 'mc', prompt: '"Iron sharpens iron" means friends...', choices: ['Avoid hard truths', 'Refine and improve each other', 'Stay comfortable', 'Compete'], answer: 'Refine and improve each other', explanation: 'Proverbs 27:17 — growth through honest relationship.', tags: ['proverbs'] },
          { id: 'marriage-relationships-l4-q3', type: 'tf', prompt: 'Proverbs 13:20 warns that companions shape character.', answer: 'True', explanation: '"The companion of fools will suffer harm" — choose friends wisely.', tags: ['proverbs'] },
        ],
      },
    ],
  },
  {
    id: 'proverbs-wisdom',
    title: 'Proverbs & Wisdom',
    description: 'Learn skill for living from Proverbs: wisdom\'s call, the fear of the Lord, and practical righteousness for every area of life.',
    level: 'intermediate',
    lessons: [
      {
        id: 'proverbs-wisdom-l1',
        title: 'The Call of Wisdom',
        body: `## What Is Wisdom?\nWisdom (chokmah) is skill for living — applying God's truth to real life. Not mere knowledge but practiced righteousness. Proverbs was written mainly by Solomon, the wisest man, to give "prudence to the simple" (1:4) — especially the young.\n\n## The Foundation\n"The fear of the LORD is the beginning of wisdom" (9:10). Fear here is reverent awe, not terror. Wisdom starts with God — knowing him, submitting to him. All other learning without this is folly's decoration.\n\n## Wisdom Cries Out\nLady Wisdom calls in the streets (1:20; 8:1) — available to all who listen. But Folly also calls (9:13-18). Every day we choose which voice to heed. "How long, you simple ones, will you love simplicity?" (1:22) — urgency marks wisdom's invitation.`,
        quiz: [
          { id: 'proverbs-wisdom-l1-q1', type: 'mc', prompt: 'Proverbs 9:10: "The fear of the LORD is..."', choices: ['The end of fun', 'The beginning of wisdom', 'For priests only', 'Unnecessary'], answer: 'The beginning of wisdom', explanation: 'Reverent awe of God is wisdom\'s foundation.', tags: ['proverbs'] },
          { id: 'proverbs-wisdom-l1-q2', type: 'mc', prompt: 'Biblical wisdom (chokmah) is best described as...', choices: ['High IQ', 'Skill for living God\'s way', 'Academic degrees', 'Cleverness'], answer: 'Skill for living God\'s way', explanation: 'Applied truth — righteousness practiced, not just known.', tags: ['proverbs'] },
          { id: 'proverbs-wisdom-l1-q3', type: 'tf', prompt: 'Proverbs was written mainly to give wisdom to the young and simple.', answer: 'True', explanation: 'Proverbs 1:4 — "to give prudence to the simple, knowledge to the young man."', tags: ['proverbs'] },
        ],
      },
      {
        id: 'proverbs-wisdom-l2',
        title: 'Wisdom for Work and Wealth',
        body: `## Diligence\n"Go to the ant, you sluggard" (6:6). Proverbs honors hard work: "the hand of the diligent makes rich" (10:4); "in all labor there is profit" (14:23). Laziness is folly's mark — excuses, sleep, poverty as consequence (6:9-11).\n\n## Honest Wealth\n"Wealth gained by dishonesty dwindles" (13:11). "A false balance is an abomination" (11:1) — God cares about business ethics. Get rich slowly and honestly; "better is a little with righteousness" (16:8).\n\n## Generosity\n"Honor the LORD with your substance" (3:9). "He who has pity on the poor lends to the LORD" (19:17). Wealth is stewardship: earn diligently, spend wisely, give generously. The wise hold money loosely and God tightly.`,
        quiz: [
          { id: 'proverbs-wisdom-l2-q1', type: 'mc', prompt: 'Proverbs 6:6 tells the sluggard to...', choices: ['Rest more', 'Go to the ant and be wise', 'Find excuses', 'Blame others'], answer: 'Go to the ant and be wise', explanation: 'The ant\'s diligence without supervision shames laziness.', tags: ['proverbs'] },
          { id: 'proverbs-wisdom-l2-q2', type: 'mc', prompt: 'Proverbs 11:1 says a false balance is...', choices: ['Smart business', 'An abomination to the LORD', 'Acceptable', 'Necessary'], answer: 'An abomination to the LORD', explanation: 'God cares about honest business practices.', tags: ['proverbs'] },
          { id: 'proverbs-wisdom-l2-q3', type: 'tf', prompt: 'Proverbs 19:17 says kindness to the poor is lending to the LORD.', answer: 'True', explanation: 'God takes personally how we treat the poor.', tags: ['proverbs'] },
        ],
      },
      {
        id: 'proverbs-wisdom-l3',
        title: 'Wisdom for Words',
        body: `## The Power of the Tongue\n"Death and life are in the power of the tongue" (18:21). Words build or destroy, heal or wound. Proverbs returns to speech constantly — it's wisdom's litmus test.\n\n## Speak Wisely\n"A word fitly spoken is like apples of gold" (25:11). Be truthful (12:22 — lying lips are abomination), timely (15:23), gentle (15:1 — soft answer turns wrath), and restrained: "he who guards his mouth guards his soul" (13:3). "Even a fool, when he keeps silent, is counted wise" (17:28).\n\n## Avoid Foolish Speech\nGossip ("talebearer," 18:8), flattery (26:28), quarreling (20:3 — honor to avoid strife), hasty words (29:20). The wise think before speaking; fools vent (29:11). In an age of hot takes, Proverbs' cool wisdom is revolutionary.`,
        quiz: [
          { id: 'proverbs-wisdom-l3-q1', type: 'mc', prompt: 'Proverbs 18:21: "Death and life are in..."', choices: ['The hands of kings', 'The power of the tongue', 'Chance', 'Money'], answer: 'The power of the tongue', explanation: 'Words carry life-or-death weight.', tags: ['proverbs'] },
          { id: 'proverbs-wisdom-l3-q2', type: 'mc', prompt: 'Proverbs 15:1: "A gentle answer..."', choices: ['Is weak', 'Turns away wrath', 'Never works', 'Is optional'], answer: 'Turns away wrath', explanation: 'Gentleness defuses anger; harsh words stir it.', tags: ['proverbs'] },
          { id: 'proverbs-wisdom-l3-q3', type: 'tf', prompt: 'Proverbs 17:28 says even a fool seems wise when silent.', answer: 'True', explanation: 'Restraint is wisdom\'s mark; venting is folly\'s.', tags: ['proverbs'] },
        ],
      },
      {
        id: 'proverbs-wisdom-l4',
        title: 'Wisdom for Relationships',
        body: `## Choosing Friends\n"He who walks with wise men will be wise" (13:20). Avoid the angry (22:24), the gossip (20:19), the drunkard (23:20-21). "Faithful are the wounds of a friend" (27:6) — welcome honest correction.\n\n## Family Wisdom\n"Train up a child in the way he should go" (22:6) — intentional, consistent formation. "Children's children are the crown of old men" (17:6). Honor parents (23:22); discipline in love (13:24 — not harshness but consistent correction).\n\n## The Virtuous Woman (31:10-31)\nProverbs ends with the eshet chayil — capable, dignified, God-fearing. "Charm is deceitful, beauty is vain; but a woman who fears the LORD shall be praised" (31:30). Character over appearance, for women and men alike. Wisdom's goal: people who fear God and bless others.`,
        quiz: [
          { id: 'proverbs-wisdom-l4-q1', type: 'mc', prompt: 'Proverbs 13:20 teaches...', choices: ['Walk alone', 'He who walks with wise men will be wise', 'Avoid all people', 'Wisdom is inherited'], answer: 'He who walks with wise men will be wise', explanation: 'Companions shape character — choose wisely.', tags: ['proverbs'] },
          { id: 'proverbs-wisdom-l4-q2', type: 'mc', prompt: 'Proverbs 22:6: "Train up a child..."', choices: ['In strict harshness', 'In the way he should go', 'To be rich', 'To avoid church'], answer: 'In the way he should go', explanation: 'Intentional, grace-shaped formation sets direction.', tags: ['proverbs'] },
          { id: 'proverbs-wisdom-l4-q3', type: 'tf', prompt: 'Proverbs 31:30 says charm is deceitful and beauty vain, but a God-fearing woman is praised.', answer: 'True', explanation: 'Character over appearance — wisdom\'s valuation.', tags: ['proverbs'] },
        ],
      },
    ],
  },
  {
    id: 'psalms',
    title: 'Psalms',
    description: 'Pray through Israel\'s hymnbook: lament, praise, thanksgiving, and the full range of honest prayer.',
    level: 'intermediate',
    lessons: [
      {
        id: 'psalms-l1',
        title: 'What Are the Psalms?',
        body: `## Israel's Hymnbook\n150 psalms — prayers set to music, spanning Moses (Psalm 90) to the exile. David wrote about half. They cover every emotion: joy, grief, anger, hope, guilt, wonder. "The Bible's prayer book," teaching us to pray honestly.\n\n## Five Books\nThe Psalter divides into five books (1-41, 42-72, 73-89, 90-106, 107-150), each ending in doxology — mirroring the Pentateuch. Book I is mostly David's personal prayers; Book V overflows with praise (146-150).\n\n## Jesus and the Psalms\nJesus quoted psalms constantly — on the cross (22:1; 31:5), in teaching (110:1). The psalms are about him (Luke 24:44). Praying them unites us with Christ, who prayed them first. The psalms teach us God's heart language.`,
        quiz: [
          { id: 'psalms-l1-q1', type: 'mc', prompt: 'About how many psalms did David write?', choices: ['All 150', 'About half', 'None', 'Ten'], answer: 'About half', explanation: '73 are attributed to David; others to Asaph, Korah, Moses, Solomon.', tags: ['psalms', 'people-ot'] },
          { id: 'psalms-l1-q2', type: 'mc', prompt: 'Jesus quoted Psalm 22:1...', choices: ['At his baptism', 'On the cross', 'In the temple', 'At the Last Supper'], answer: 'On the cross', explanation: '"My God, my God, why have you forsaken me?" (Matthew 27:46).', tags: ['psalms', 'death-resurrection'] },
          { id: 'psalms-l1-q3', type: 'tf', prompt: 'The Psalms only express happy emotions.', answer: 'False', explanation: 'They cover lament, anger, guilt, and grief — full honest prayer.', tags: ['psalms'] },
        ],
      },
      {
        id: 'psalms-l2',
        title: 'Psalms of Lament',
        body: `## Honest Sorrow\nOver a third of psalms are laments — "How long, O LORD?" (13:1), "Why are you so far?" (22:1). Lament brings pain to God instead of away from him. It's worship, not whining — faith refusing to let go.\n\n## The Shape of Lament\nAddress ("O LORD"), complaint (honest pain), request ("consider and answer"), expression of trust ("but I have trusted"), vow of praise ("I will sing"). Most laments turn — sometimes barely — toward hope. Psalm 13 moves from "how long?" to "I will sing" in six verses.\n\n## Praying Lament\nWhen words fail, borrow the psalmists'. Pray Psalm 13, 42, or 77 aloud as your own. Lament doesn't resolve pain instantly; it places pain in God's hands. "Weeping may stay for the night, but joy comes in the morning" (30:5).`,
        quiz: [
          { id: 'psalms-l2-q1', type: 'mc', prompt: 'About what fraction of psalms are laments?', choices: ['None', 'Over a third', 'All', 'One tenth'], answer: 'Over a third', explanation: 'Lament is a major biblical prayer language.', tags: ['psalms'] },
          { id: 'psalms-l2-q2', type: 'mc', prompt: 'Psalm 13 moves from...', choices: ['Praise to complaint', '"How long?" to "I will sing"', 'Joy to despair', 'Silence to shouting'], answer: '"How long?" to "I will sing"', explanation: 'The classic lament arc: honest pain turning to trust.', tags: ['psalms'] },
          { id: 'psalms-l2-q3', type: 'tf', prompt: 'Lament is bringing pain to God, not complaining against him.', answer: 'True', explanation: 'It\'s faith holding on through sorrow — worship in the dark.', tags: ['psalms'] },
        ],
      },
      {
        id: 'psalms-l3',
        title: 'Psalms of Praise and Thanksgiving',
        body: `## Praise the LORD\n"Hallelujah" means "praise the LORD" — the psalms' constant refrain. Praise focuses on who God is: holy (99:3), loving (136 — "his loving kindness endures forever," 26 times), mighty (147), faithful (89). Praise is truth about God spoken back to him.\n\n## Thanksgiving\n"Give thanks to the LORD, for he is good" (107:1). Thanksgiving remembers specific mercies: deliverance (107), forgiveness (103), provision (65). "Bless the LORD... and forget none of his benefits" (103:2) — gratitude fights amnesia.\n\n## The Hallel Psalms (146-150)\nThe Psalter ends in crescendo: five "hallelujah" psalms, the last calling "everything that has breath" to praise (150:6). The Bible's prayer book ends where eternity begins — in endless praise. Practice now what you'll do forever.`,
        quiz: [
          { id: 'psalms-l3-q1', type: 'mc', prompt: '"Hallelujah" means...', choices: ['Amen', 'Praise the LORD', 'Holy, holy', 'Forever'], answer: 'Praise the LORD', explanation: 'The psalms\' constant refrain and the Psalter\'s ending note.', tags: ['psalms'] },
          { id: 'psalms-l3-q2', type: 'mc', prompt: 'Psalm 136 repeats 26 times...', choices: ['Hallelujah', 'His loving kindness endures forever', 'Amen', 'Selah'], answer: 'His loving kindness endures forever', explanation: 'Thanksgiving anchored in God\'s enduring covenant love.', tags: ['psalms'] },
          { id: 'psalms-l3-q3', type: 'tf', prompt: 'Psalm 150 calls everything with breath to praise the LORD.', answer: 'True', explanation: 'The Psalter\'s climax — universal, eternal praise.', tags: ['psalms'] },
        ],
      },
      {
        id: 'psalms-l4',
        title: 'Messianic Psalms',
        body: `## The King Who Comes\nSeveral psalms prophesy the Messiah: Psalm 2 (God's anointed King), 16 (resurrection — "you will not leave my soul in Sheol," quoted Acts 2:27), 22 (crucifixion details), 45 (royal wedding), 72 (universal reign), 110 (priest-king — most quoted OT verse in NT).\n\n## Psalm 22: The Cross Foretold\n"My God, my God, why have you forsaken me?" (v.1) — Jesus's cry. Pierced hands and feet (v.16), lots cast for clothing (v.18), mockery (vv.7-8). Written 1,000 years before crucifixion existed. Yet it ends in triumph (vv.22-31) — resurrection hope.\n\n## Praying Christ's Psalms\nJesus prayed these; we pray them in him. Psalm 110:1 ("sit at my right hand") is quoted everywhere in the NT — the ascended Christ. The psalms are not just about Jesus; they're his own prayers, now ours.`,
        quiz: [
          { id: 'psalms-l4-q1', type: 'mc', prompt: 'Psalm 22 prophesies...', choices: ['David\'s palace', 'The crucifixion in detail', 'The temple', 'The exodus'], answer: 'The crucifixion in detail', explanation: 'Pierced hands/feet, lots for clothing — 1,000 years early.', tags: ['psalms', 'death-resurrection'] },
          { id: 'psalms-l4-q2', type: 'mc', prompt: 'Which psalm verse is most quoted in the New Testament?', choices: ['Psalm 23:1', 'Psalm 110:1', 'Psalm 1:1', 'Psalm 150:6'], answer: 'Psalm 110:1', explanation: '"Sit at my right hand" — the ascended Christ, quoted throughout the NT.', tags: ['psalms'] },
          { id: 'psalms-l4-q3', type: 'tf', prompt: 'Acts 2:27 applies Psalm 16:10 to Christ\'s resurrection.', answer: 'True', explanation: 'Peter preaches it at Pentecost — David\'s words fulfilled in Jesus.', tags: ['psalms', 'death-resurrection'] },
        ],
      },
    ],
  },
  {
    id: 'revelation',
    title: 'Revelation',
    description: 'Understand the Bible\'s final book: its symbols, its message of hope for persecuted believers, and the promise of all things made new.',
    level: 'advanced',
    lessons: [
      {
        id: 'revelation-l1',
        title: 'How to Read Revelation',
        body: `## Apocalyptic Literature\nRevelation is prophecy in apocalyptic form — symbolic visions revealing spiritual reality (like Daniel, Zechariah). Numbers, colors, beasts are symbols, not newspaper predictions. "Blessed is he who reads" (1:3) — it's meant to be understood, not just decoded.\n\n## Old Testament Roots\nOf 404 verses, ~278 allude to the Old Testament. The images come from Exodus (plagues), Daniel (beasts), Ezekiel (throne), Isaiah (new creation). Know the OT and Revelation opens up. John expects Bible-saturated readers.\n\n## The Main Point\nWritten to persecuted churches (~AD 95): Christ reigns now, evil's doom is certain, persevere. Don't start with timelines; start with worship (chapters 4-5). The details serve the center: "the Lamb" conquers through sacrifice, and his people overcome "by the blood of the Lamb" (12:11).`,
        quiz: [
          { id: 'revelation-l1-q1', type: 'mc', prompt: 'Revelation\'s genre is...', choices: ['Modern biography', 'Apocalyptic prophecy — symbolic visions', 'Poetry only', 'Legal code'], answer: 'Apocalyptic prophecy — symbolic visions', explanation: 'Like Daniel — symbols revealing spiritual reality.', tags: ['revelation'] },
          { id: 'revelation-l1-q2', type: 'mc', prompt: 'Revelation 1:3 promises blessing to...', choices: ['Scholars only', 'He who reads and keeps its words', 'Prophets', 'Angels'], answer: 'He who reads and keeps its words', explanation: 'It\'s meant to be read, understood, and obeyed.', tags: ['revelation'] },
          { id: 'revelation-l1-q3', type: 'tf', prompt: 'Revelation\'s symbols draw heavily on the Old Testament.', answer: 'True', explanation: '~278 of 404 verses allude to OT imagery.', tags: ['revelation'] },
        ],
      },
      {
        id: 'revelation-l2',
        title: 'Letters to the Seven Churches',
        body: `## Real Churches, Timeless Messages\nChapters 2-3: Christ addresses seven real churches in Asia Minor — Ephesus to Laodicea. Each letter: Christ's description, commendation, rebuke, exhortation, promise "to him who overcomes." Every church age finds itself here.\n\n## The Dangers\nEphesus: lost first love (2:4). Pergamum/Thyatira: compromise with idolatry and immorality. Sardis: dead orthodoxy — "you have a name that you live, and are dead" (3:1). Laodicea: lukewarm self-sufficiency — "wretched, miserable, poor, blind, naked" (3:17) while claiming wealth.\n\n## The Promises\n"To him who overcomes" — tree of life, hidden manna, white stone, morning star, white garments, pillar in God's temple, throne with Christ. Present faithfulness, future reward. "Behold, I stand at the door and knock" (3:20) — Christ seeks even lukewarm Laodicea.`,
        quiz: [
          { id: 'revelation-l2-q1', type: 'mc', prompt: 'Christ rebuked Ephesus for...', choices: ['False teaching', 'Leaving its first love', 'Persecution', 'Poverty'], answer: 'Leaving its first love', explanation: 'Revelation 2:4 — orthodoxy without affection.', tags: ['revelation'] },
          { id: 'revelation-l2-q2', type: 'mc', prompt: 'Laodicea\'s problem was...', choices: ['Poverty', 'Lukewarm self-sufficiency', 'Heresy', 'Division'], answer: 'Lukewarm self-sufficiency', explanation: 'Revelation 3:15-17 — "rich" yet wretched.', tags: ['revelation'] },
          { id: 'revelation-l2-q3', type: 'tf', prompt: 'Each letter promises a reward "to him who overcomes."', answer: 'True', explanation: 'Present perseverance, future glory — the letters\' pattern.', tags: ['revelation'] },
        ],
      },
      {
        id: 'revelation-l3',
        title: 'The Throne, the Lamb, and the Judgments',
        body: `## The Throne Room (Chapters 4-5)\nBefore any judgment: worship. God on the throne, the Lamb "standing as though slain" — power through sacrifice. The scroll (God's plan) only the Lamb can open. All heaven sings: "Worthy is the Lamb!" Theology before tribulation: God reigns, Christ redeems.\n\n## Seals, Trumpets, Bowls (6-16)\nJudgments unfold in threes — each cycle intensifying, each interrupted by mercy (sealing of saints, gospel preached, calls to repent). Like Egypt's plagues, they harden the hard and vindicate the faithful. God judges justly; people "did not repent" (9:20-21).\n\n## Babylon Falls (17-18)\nBabylon — the seductive world system of wealth, power, and idolatry — collapses in "one hour." "Come out of her, my people" (18:4). The merchants weep; heaven rejoices. Every empire built against God ends here. Choose your city: Babylon or Jerusalem.`,
        quiz: [
          { id: 'revelation-l3-q1', type: 'mc', prompt: 'In Revelation 5, only the Lamb can open the scroll because...', choices: ['He is strongest', 'He was slain and redeemed by his blood', 'He is oldest', 'He is an angel'], answer: 'He was slain and redeemed by his blood', explanation: 'Worthiness through sacrifice — the gospel at Revelation\'s center.', tags: ['revelation'] },
          { id: 'revelation-l3-q2', type: 'mc', prompt: '"Babylon" in Revelation represents...', choices: ['A literal city only', 'The seductive world system opposed to God', 'Jerusalem', 'Rome\'s army'], answer: 'The seductive world system opposed to God', explanation: 'Wealth, power, idolatry — doomed to fall (ch. 17-18).', tags: ['revelation'] },
          { id: 'revelation-l3-q3', type: 'tf', prompt: 'Revelation\'s judgments, like Egypt\'s plagues, reveal hearts rather than merely punishing.', answer: 'True', explanation: 'The wicked "did not repent" (9:20-21) — judgment exposes rebellion.', tags: ['revelation', 'exodus'] },
        ],
      },
      {
        id: 'revelation-l4',
        title: 'The Return and the New Creation',
        body: `## Christ Returns (19-20)\nHeaven opens; the Rider on the white horse — "Faithful and True" — judges and makes war in righteousness. The beast and false prophet fall; Satan is bound, released, then cast into the lake of fire. The dead are judged "according to their works" (20:12) — and "anyone not found written in the book of life" faces the second death.\n\n## All Things New (21-22)\nNew heaven, new earth — "the first things have passed away" (21:4). No temple (God is the temple), no night, no curse. The tree of life returns; "they will see his face" (22:4). Eden restored and surpassed: God dwelling with his people forever.\n\n## Come, Lord Jesus\nThe Bible's last prayer: "Come, Lord Jesus!" (22:20). Revelation ends with invitation ("let him who thirsts come," 22:17) and benediction ("the grace of the Lord Jesus be with all," 22:21). Live ready, long for his appearing, and invite others into the story.`,
        quiz: [
          { id: 'revelation-l4-q1', type: 'mc', prompt: 'Revelation 19 depicts Christ returning as...', choices: ['A suffering servant', 'A Rider called Faithful and True', 'A hidden figure', 'A politician'], answer: 'A Rider called Faithful and True', explanation: 'Judging and making war in righteousness.', tags: ['revelation'] },
          { id: 'revelation-l4-q2', type: 'mc', prompt: 'In the new creation there is no temple because...', choices: ['Worship ends', 'The Lord God and the Lamb are its temple', 'It was forgotten', 'No one is worthy'], answer: 'The Lord God and the Lamb are its temple', explanation: 'Revelation 21:22 — mediated worship gives way to direct presence.', tags: ['revelation'] },
          { id: 'revelation-l4-q3', type: 'tf', prompt: 'The Bible\'s final prayer is "Come, Lord Jesus!"', answer: 'True', explanation: 'Revelation 22:20 — the church\'s longing and hope.', tags: ['revelation'] },
        ],
      },
    ],
  },
];
