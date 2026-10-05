import type { QuizQuestion } from '@/lib/types';

export interface ChapterStudy {
  bookId: string;
  chapter: number;
  title: string;
  summary: string;
  understand: string;
  context: string;
  people: string[];
  words: { term: string; transliteration?: string; definition: string }[];
  themes: string[];
  crossRefs: { ref: string; note: string }[];
  application: string;
  reflection: string[];
  quiz: QuizQuestion[];
  prayer: string;
}

export const CHAPTER_STUDIES: Record<string, ChapterStudy> = {
  'genesis-1': {
    bookId: 'genesis',
    chapter: 1,
    title: 'The Creation of the World',
    summary:
      'In the beginning, God speaks the universe into existence over six days — light, sky, land, sun and moon, sea life and birds, animals and humanity — and rests on the seventh. Human beings, made in God\'s image, are given dominion over creation. "And God saw everything that he had made, and behold, it was very good." (Gen. 1:31, WEB)',
    understand:
      'Genesis 1 is not written as a scientific manual but as a theological declaration: one God, not many gods, made everything by His word. Against the ancient world\'s stories of creation through divine violence, Moses presents a God who creates effortlessly — "God said... and it was so." The repeated refrain "and God saw that it was good" builds to the climax: humanity, male and female, bearing the image of God.\n\nTo be made in God\'s image means human beings uniquely reflect their Creator — in reason, moral capacity, creativity, and relationship. This gives every person inherent dignity and worth. It also gives us a task: to steward creation as God\'s representatives, ruling it the way He would rule — with wisdom and care.\n\nThe seventh day, when God rests, establishes the pattern of Sabbath rest woven into creation itself. God was not tired; He was savoring and blessing His work, inviting humanity to rest in the goodness of what He has made.',
    context:
      'Moses wrote Genesis for Israelites who had just come out of Egypt, where they had been steeped in Egyptian religion. The Egyptians worshiped the sun, the Nile, and Pharaoh himself as divine. Genesis 1 quietly dethrones every one of those gods: the sun and moon are merely "lights" God hung in the sky, the sea monsters are creatures He made, and Pharaoh is not divine — every human being bears God\'s image. This chapter was revolutionary polemic disguised as a simple story.\n\nIt also sets the foundation for the entire Bible. Everything that follows — the fall, the flood, the covenant, the coming of Christ — is God\'s work of restoring a creation that began "very good."',
    people: ['God (Elohim)', 'Adam', 'Eve'],
    words: [
      {
        term: 'Elohim',
        transliteration: 'elohim',
        definition:
          'The Hebrew word for God used throughout Genesis 1 — a plural form with singular verbs, hinting at the majesty (and, Christians believe, the Trinity) of the one Creator.',
      },
      {
        term: 'Image of God',
        transliteration: 'tselem elohim',
        definition:
          'The status given to humanity alone: bearing God\'s likeness in a way that confers dignity, moral responsibility, and a calling to represent Him in creation.',
      },
      {
        term: 'Very good',
        transliteration: 'tov me\'od',
        definition:
          'God\'s verdict on completed creation — not merely functional but delightful, whole, and exactly as He intended.',
      },
    ],
    themes: ['Creation', 'The image of God', 'God\'s sovereignty', 'The goodness of creation', 'Sabbath rest'],
    crossRefs: [
      { ref: 'John 1:1–3', note: 'The Word (Christ) was with God and was God; all things were made through Him.' },
      { ref: 'Psalm 19:1', note: '"The heavens declare the glory of God" — creation proclaims its Maker.' },
      { ref: 'Hebrews 11:3', note: 'By faith we understand that the worlds were framed by the word of God.' },
      { ref: 'Colossians 1:16–17', note: 'In Christ all things were created and hold together.' },
    ],
    application:
      'Because you bear God\'s image, your life has unshakeable worth — and so does the life of every person you meet, including the difficult ones. This week, treat one person with the dignity their Creator gave them. Also, receive God\'s gift of rest: build a Sabbath rhythm into your week, trusting that the world does not depend on your constant labor.',
    reflection: [
      'What does it mean for your daily work that you are made in God\'s image?',
      'How does "it was very good" challenge the way you view the physical world — your body, nature, ordinary work?',
      'Where do you struggle to rest, and what does that reveal about your trust in God?',
    ],
    quiz: [
      {
        id: 'gen1-q1',
        type: 'mc',
        prompt: 'According to Genesis 1, how did God create the world?',
        choices: ['Through a great cosmic battle', 'By speaking it into existence', 'By shaping pre-existing gods', 'Through gradual natural processes'],
        answer: 'By speaking it into existence',
        explanation: 'Ten times the chapter repeats "God said... and it was so." Creation is effortless for God — He speaks, and reality obeys.',
        tags: ['genesis', 'creation'],
      },
      {
        id: 'gen1-q2',
        type: 'tf',
        prompt: 'Genesis 1 teaches that only kings and rulers bear the image of God.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: 'Genesis 1:27 says God created "man" — male and female — in His image. Every human being bears God\'s image, not just the powerful.',
        tags: ['genesis', 'image-of-god'],
      },
      {
        id: 'gen1-q3',
        type: 'mc',
        prompt: 'What was God\'s final verdict on everything He had made?',
        choices: ['It was acceptable', 'It was very good', 'It needed improvement', 'It was unfinished'],
        answer: 'It was very good',
        explanation: 'Genesis 1:31: "God saw everything that he had made, and behold, it was very good." Creation began in perfection.',
        tags: ['genesis', 'creation'],
      },
      {
        id: 'gen1-q4',
        type: 'fill',
        prompt: 'God created humanity on the _____ day and rested on the seventh.',
        answer: 'sixth',
        explanation: 'Humans were created on day six (Gen. 1:26–31), and God rested on the seventh day, blessing it (Gen. 2:2–3).',
        tags: ['genesis', 'creation'],
      },
    ],
    prayer:
      'Creator God, thank You for making me in Your image and for calling Your creation very good. Teach me to see Your handiwork with wonder, to treat every person with the dignity You gave them, and to rest in Your finished work. Amen.',
  },
  'genesis-3': {
    bookId: 'genesis',
    chapter: 3,
    title: 'The Fall of Humanity',
    summary:
      'The serpent deceives Eve, and she and Adam eat from the tree of the knowledge of good and evil — the one thing God forbade. Sin, shame, blame, and death enter the world. Yet even in judgment, God promises that the woman\'s offspring will crush the serpent\'s head (Gen. 3:15), the first glimmer of the gospel.',
    understand:
      'Genesis 3 explains why the world is broken. The serpent\'s temptation follows a timeless pattern: doubt God\'s word ("Has God indeed said?"), deny God\'s warning ("You will not surely die"), and desire what God has withheld ("you will be like God"). Eve saw the fruit was desirable; Adam, who was with her, ate too. Their eyes were opened — not to godhood, but to shame.\n\nNotice the anatomy of sin\'s aftermath: hiding from God, blaming others (Adam blames Eve, and even God; Eve blames the serpent), and fractured relationships — with God, with each other, and with creation itself, which is now cursed. Work becomes toil, childbirth becomes pain, and death becomes certain.\n\nBut the chapter is not only darkness. God comes seeking — "Where are you?" — and He clothes the guilty pair, a first picture of covering shame by sacrifice. And in verse 15, God promises enmity between the serpent and the woman\'s offspring: He will bruise the serpent\'s head. Christians have always read this as the first promise of Christ, who would crush Satan at the cross.',
    context:
      'Genesis 3 stands at the hinge of the whole Bible. Chapters 1–2 show the world as God made it; everything after chapter 3 shows the world as sin made it — until Revelation 21–22, where God makes all things new. Without this chapter, suffering and evil are inexplicable; with it, we understand that the world is not as it should be, and that God has been working redemption from the very beginning.\n\nThe serpent is later identified as Satan (Rev. 12:9), the ancient enemy. His strategy in Eden — twisting God\'s words — is the same strategy he used against Jesus in the wilderness (Matt. 4), and the same one he uses against believers today.',
    people: ['Adam', 'Eve', 'The serpent (Satan)'],
    words: [
      {
        term: 'The Fall',
        definition:
          'The theological term for humanity\'s first sin and its consequences — the entrance of sin, death, and brokenness into God\'s good creation.',
      },
      {
        term: 'Protoevangelium',
        transliteration: 'protoevangelium',
        definition:
          'Latin for "first gospel" — the promise in Genesis 3:15 that the woman\'s offspring would crush the serpent\'s head, the Bible\'s first prophecy of Christ\'s victory.',
      },
      {
        term: 'Enmity',
        transliteration: 'eyvah',
        definition:
          'The hostility God Himself placed between the serpent\'s offspring and the woman\'s offspring — the beginning of the cosmic conflict between evil and redemption.',
      },
    ],
    themes: ['The origin of sin', 'Temptation', 'Shame and blame', 'Judgment', 'The first promise of redemption'],
    crossRefs: [
      { ref: 'Romans 5:12', note: 'Through one man sin entered the world, and death through sin.' },
      { ref: '1 Corinthians 15:22', note: 'As in Adam all die, so in Christ all shall be made alive.' },
      { ref: 'Revelation 12:9', note: 'The serpent of old is identified as Satan, the deceiver.' },
      { ref: 'Galatians 4:4', note: 'Christ, "born of a woman," fulfills the promise of the woman\'s offspring.' },
    ],
    application:
      'Temptation still follows the Eden pattern: doubting God\'s word, minimizing His warnings, and grasping at what He has withheld. When you feel that pull, name it for what it is — the serpent\'s old lie. And when you fail, don\'t hide like Adam; run to the God who came seeking, who clothes sinners and promised a Rescuer.',
    reflection: [
      'Where in your life do you hear the whisper "Has God really said...?"',
      'When you sin, do you tend to hide, blame, or run to God? Why?',
      'How does Genesis 3:15 give you hope in the middle of a broken world?',
    ],
    quiz: [
      {
        id: 'gen3-q1',
        type: 'mc',
        prompt: 'What was the serpent\'s first move in tempting Eve?',
        choices: ['Offering her the fruit directly', 'Casting doubt on God\'s word', 'Threatening her with death', 'Appearing as an angel of light'],
        answer: 'Casting doubt on God\'s word',
        explanation: 'The serpent began with "Has God indeed said...?" (Gen. 3:1) — planting doubt about God\'s word before offering the lie.',
        tags: ['genesis', 'temptation'],
      },
      {
        id: 'gen3-q2',
        type: 'tf',
        prompt: 'Genesis 3:15 contains the Bible\'s first promise of a coming Redeemer.',
        choices: ['True', 'False'],
        answer: 'True',
        explanation: 'God promised that the woman\'s offspring would crush the serpent\'s head — the "protoevangelium," fulfilled in Christ.',
        tags: ['genesis', 'gospel'],
      },
      {
        id: 'gen3-q3',
        type: 'mc',
        prompt: 'After sinning, what did Adam and Eve do first?',
        choices: ['They repented immediately', 'They hid from God', 'They left the garden', 'They prayed for forgiveness'],
        answer: 'They hid from God',
        explanation: 'Genesis 3:8: they hid themselves among the trees. Sin\'s first instinct is hiding; grace\'s first move is God seeking.',
        tags: ['genesis', 'sin'],
      },
      {
        id: 'gen3-q4',
        type: 'fill',
        prompt: 'God promised that the woman\'s offspring would crush the serpent\'s _____.',
        answer: 'head',
        explanation: 'Genesis 3:15: "He shall bruise your head, and you shall bruise His heel" — a mortal wound for the serpent, fulfilled at the cross.',
        tags: ['genesis', 'prophecy'],
      },
    ],
    prayer:
      'Holy God, I confess that like Adam and Eve, I have doubted Your word and grasped at what You withheld. Thank You for seeking me when I hide, for clothing my shame, and for the promise of the One who crushed the serpent. Help me walk in the light with You. Amen.',
  },
  'genesis-12': {
    bookId: 'genesis',
    chapter: 12,
    title: 'The Call of Abraham',
    summary:
      'God calls Abram to leave his country, his family, and his father\'s house for a land He will show him. God promises to make him a great nation, to bless him, and to bless all the families of the earth through him. Abram believes and goes — and God\'s covenant plan for the world begins.',
    understand:
      'Genesis 12 is the hinge of the entire Old Testament. After eleven chapters of humanity\'s rebellion — the fall, Cain, the flood, Babel — God begins His rescue plan with one man. The call is radical: leave everything familiar for a destination unknown. And Abram goes, not knowing where, trusting the God who called.\n\nThe promise has three parts: land ("to a land that I will show you"), seed ("I will make of you a great nation"), and blessing ("in you all the families of the earth shall be blessed"). That last phrase is the key to the whole Bible: God\'s plan was never just about one family but about blessing the entire world through Abraham\'s offspring — ultimately Jesus Christ (Gal. 3:16).\n\nThe chapter also shows Abram\'s imperfect faith. In Egypt, fearing for his life, he lies about Sarai being his sister. Yet God protects the promise despite Abram\'s failure. From the very start, God\'s plan rests on His faithfulness, not ours.',
    context:
      'Abram lived in Ur of the Chaldeans (southern Mesopotamia), a center of moon-god worship, around 2000 BC. God\'s call to leave was a call out of idolatry into a relationship with the true God. The journey to Canaan — roughly 1,000 miles — meant abandoning security, status, and family networks in a world where survival depended on all three.\n\nThe promise of blessing to "all the families of the earth" directly reverses the curse of Babel in Genesis 11, where the nations were scattered. God is beginning to gather what sin scattered — a project completed when people from every nation worship the Lamb (Rev. 7:9).',
    people: ['Abram (Abraham)', 'Sarai (Sarah)', 'Lot', 'Pharaoh'],
    words: [
      {
        term: 'Covenant',
        transliteration: 'berit',
        definition:
          'A binding promise or agreement. God\'s covenant with Abraham (expanded in Gen. 15 and 17) is unilateral — God obligates Himself to bless, depending on His faithfulness alone.',
      },
      {
        term: 'Blessing',
        transliteration: 'berakah',
        definition:
          'God\'s favor and life-giving power. The promise that all nations would be blessed through Abraham finds its fulfillment in Christ (Gal. 3:8–9).',
      },
    ],
    themes: ['The call of God', 'Faith and obedience', 'The covenant promise', 'Blessing to the nations', 'God\'s faithfulness despite human failure'],
    crossRefs: [
      { ref: 'Genesis 15:6', note: 'Abram believed the LORD, and He counted it to him as righteousness.' },
      { ref: 'Galatians 3:8', note: 'Scripture preached the gospel beforehand to Abraham: "In you shall all nations be blessed."' },
      { ref: 'Hebrews 11:8', note: 'By faith Abraham obeyed when called, going out not knowing where he was going.' },
      { ref: 'Acts 7:2–4', note: 'Stephen recounts Abraham\'s call from Mesopotamia.' },
    ],
    application:
      'God still calls people to trust Him with the unknown — a new direction, a hard obedience, a step that doesn\'t make sense yet. Like Abram, you don\'t need the full map; you need the Caller. What is God asking you to leave or to begin? And remember: God\'s purposes for you don\'t depend on your perfection — He protected His promise even when Abram lied.',
    reflection: [
      'What "Ur" might God be calling you to leave — a comfort, a habit, a security?',
      'How does it encourage you that God\'s plan advanced despite Abram\'s failure in Egypt?',
      'In what ways are you part of God\'s promise to bless "all the families of the earth"?',
    ],
    quiz: [
      {
        id: 'gen12-q1',
        type: 'mc',
        prompt: 'What three things did God promise Abram in Genesis 12?',
        choices: [
          'Wealth, power, and long life',
          'Land, descendants, and blessing to all nations',
          'A kingdom, an army, and a temple',
          'Wisdom, peace, and prosperity',
        ],
        answer: 'Land, descendants, and blessing to all nations',
        explanation: 'God promised a land, a great nation from his descendants, and blessing to all families of the earth through him (Gen. 12:2–3).',
        tags: ['genesis', 'abraham', 'covenant'],
      },
      {
        id: 'gen12-q2',
        type: 'tf',
        prompt: 'Abram knew exactly where God was sending him when he left Haran.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: 'God said "to a land that I will show you" — Abram went out not knowing where he was going (Heb. 11:8). That is faith.',
        tags: ['genesis', 'abraham', 'faith'],
      },
      {
        id: 'gen12-q3',
        type: 'mc',
        prompt: 'How did Abram respond to God\'s call?',
        choices: ['He asked for a sign first', 'He sent Lot ahead to scout', 'He departed as the LORD had told him', 'He waited until he was old'],
        answer: 'He departed as the LORD had told him',
        explanation: '"So Abram departed, as the LORD had told him" (Gen. 12:4). Immediate obedience is the mark of his faith.',
        tags: ['genesis', 'abraham', 'obedience'],
      },
    ],
    prayer:
      'Lord, like Abram, I want to trust You with the unknown. Give me faith to go when You call, even without the full map. Thank You that Your promises rest on Your faithfulness, not mine. Make me a blessing to others as You have blessed me. Amen.',
  },
  'genesis-22': {
    bookId: 'genesis',
    chapter: 22,
    title: 'The Testing of Abraham',
    summary:
      'God tests Abraham by asking him to offer his beloved son Isaac as a burnt offering on Mount Moriah. Abraham obeys without hesitation; at the last moment God stops him and provides a ram. God reaffirms the covenant, and Abraham names the place "The LORD will provide."',
    understand:
      'This is the most agonizing test in Scripture. After decades of waiting, Isaac — the child of promise, the one through whom all God\'s promises would come — is to be surrendered. Abraham\'s obedience is immediate and unquestioning: he rises early, travels three days, and raises the knife. Hebrews 11 tells us why: Abraham reasoned that God could raise Isaac from the dead. He trusted the Promise-Giver more than the promise.\n\nIsaac\'s question — "where is the lamb?" — receives Abraham\'s prophetic answer: "God will provide for Himself the lamb." And He does: a ram caught in the thicket. Abraham names the place Yahweh-Yireh, "the LORD will provide." For two thousand years, God\'s people have read this mountain — Moriah, where Jerusalem would stand — as a foreshadowing of the greater sacrifice: God providing His own Son as the Lamb.\n\nThe chapter ends with God swearing by Himself to bless Abraham and multiply his offspring, "because you have obeyed My voice." Testing proved and deepened Abraham\'s faith; it did not create God\'s love, but displayed it.',
    context:
      'Child sacrifice was practiced by Canaanite religions surrounding Abraham — but the true God never desired it; He was testing Abraham\'s heart and foreshadowing His own sacrifice. Mount Moriah is traditionally identified with the Temple Mount in Jerusalem, where Solomon would later build the temple (2 Chron. 3:1) — and where, just outside the city, Jesus would be crucified.\n\nThe parallels to Christ are striking: a beloved only son, carrying the wood, climbing the mountain, a substitute provided by God. Early Christians saw Genesis 22 as one of the clearest Old Testament pictures of the cross.',
    people: ['Abraham', 'Isaac', 'The Angel of the LORD'],
    words: [
      {
        term: 'Yahweh-Yireh',
        transliteration: 'yhwh yireh',
        definition:
          'Hebrew for "the LORD will provide" — the name Abraham gave Mount Moriah after God provided the ram, a perpetual memorial of God\'s provision.',
      },
      {
        term: 'Test',
        transliteration: 'nissah',
        definition:
          'God\'s proving of Abraham\'s faith. Unlike Satan\'s tempting (which aims to destroy), God\'s testing aims to strengthen and reveal genuine faith.',
      },
    ],
    themes: ['Testing and faith', 'Obedience', 'God\'s provision', 'Sacrifice', 'Foreshadowing of Christ'],
    crossRefs: [
      { ref: 'Hebrews 11:17–19', note: 'Abraham reasoned God could raise Isaac from the dead.' },
      { ref: 'John 3:16', note: 'God gave His only Son — the true fulfillment of Moriah.' },
      { ref: 'James 2:21–23', note: 'Abraham\'s faith was completed by his works when he offered Isaac.' },
      { ref: '2 Chronicles 3:1', note: 'Solomon built the temple on Mount Moriah.' },
    ],
    application:
      'God may ask you to surrender what you love most — not because He wants to take it, but because He wants your heart undivided. Abraham\'s story teaches that obedience before understanding is the path of faith, and that God always provides — often at the last moment, always enough. What "Isaac" are you holding onto? Place it on the altar in trust.',
    reflection: [
      'What would be hardest for you to surrender if God asked? What does that reveal?',
      'How does Abraham\'s confidence that "God will provide" challenge your anxieties?',
      'In what ways does this chapter deepen your understanding of what God did at the cross?',
    ],
    quiz: [
      {
        id: 'gen22-q1',
        type: 'mc',
        prompt: 'On which mountain did God tell Abraham to offer Isaac?',
        choices: ['Mount Sinai', 'Mount Moriah', 'Mount Carmel', 'Mount Gerizim'],
        answer: 'Mount Moriah',
        explanation: 'Genesis 22:2 names Moriah — later the site of Jerusalem and the temple (2 Chron. 3:1).',
        tags: ['genesis', 'abraham'],
      },
      {
        id: 'gen22-q2',
        type: 'tf',
        prompt: 'Abraham believed God could raise Isaac from the dead.',
        choices: ['True', 'False'],
        answer: 'True',
        explanation: 'Hebrews 11:19 says Abraham "considered that God was able even to raise him from the dead." That faith made his obedience possible.',
        tags: ['genesis', 'abraham', 'faith'],
      },
      {
        id: 'gen22-q3',
        type: 'mc',
        prompt: 'What name did Abraham give the place where God provided the ram?',
        choices: ['Bethel', 'Yahweh-Yireh (The LORD will provide)', 'Peniel', 'Beersheba'],
        answer: 'Yahweh-Yireh (The LORD will provide)',
        explanation: 'Genesis 22:14: "Abraham called the name of that place, The-LORD-Will-Provide."',
        tags: ['genesis', 'abraham'],
      },
      {
        id: 'gen22-q4',
        type: 'fill',
        prompt: 'When Isaac asked where the lamb was, Abraham answered: "God will _____ for Himself the lamb."',
        answer: 'provide',
        explanation: 'Genesis 22:8 — a prophetic answer fulfilled ultimately in Christ, "the Lamb of God" (John 1:29).',
        tags: ['genesis', 'prophecy'],
      },
    ],
    prayer:
      'Father, You did not spare Your own Son but gave Him for me. Teach me Abraham\'s faith — to trust You with what I love most, believing You will provide. When tests come, let me obey first and understand later. Amen.',
  },
  'genesis-37': {
    bookId: 'genesis',
    chapter: 37,
    title: 'Joseph and the Coat of Many Colors',
    summary:
      'Jacob favors his son Joseph, giving him an ornate robe and earning his brothers\' hatred — deepened by Joseph\'s dreams of ruling over them. The brothers plot murder but sell Joseph to traders bound for Egypt instead. Jacob is deceived into believing Joseph is dead.',
    understand:
      'Genesis 37 opens the Joseph narrative, the longest single story in Genesis, and it begins in family dysfunction. Jacob repeats his parents\' sin of favoritism — he loved Joseph more than all his children "because he was the son of his old age." The special robe was a public declaration of that favoritism, and the brothers\' hatred was the predictable harvest.\n\nJoseph is not innocent either: at seventeen, he tattles on his brothers and shares dreams that — true as they were — sound like boasting. Yet God is at work even in this mess. The dreams are genuinely prophetic: the sheaves and the stars bowing point to a future no one can yet imagine.\n\nThe chapter\'s horror — brothers plotting murder, then callously eating lunch while Joseph pleads from the pit (Gen. 42:21) — sets up the Bible\'s great statement on providence. What the brothers meant for evil, God meant for good (Gen. 50:20). The descent into Egypt begins here, in a pit in Dothan.',
    context:
      'The "coat of many colors" was likely a long-sleeved ornamented tunic — the garment of a prince, not a working shepherd. In giving it to Joseph, Jacob effectively designated him heir over the older sons, a explosive act in a culture of primogeniture. The traders — Ishmaelites/Midianites — carried Joseph down the well-traveled trade route to Egypt, where slavery awaited.\n\nThis chapter also connects to the larger Genesis theme: the chosen younger son (Abel, Isaac, Jacob, Joseph) and God\'s sovereignty over human evil. Judah\'s suggestion to sell rather than kill Joseph foreshadows his later transformation into the brother who will offer himself for Benjamin.',
    people: ['Joseph', 'Jacob (Israel)', 'Reuben', 'Judah', 'The brothers', 'Potiphar (implied buyer)'],
    words: [
      {
        term: 'Coat of many colors',
        transliteration: 'ketonet passim',
        definition:
          'An ornate, long-sleeved tunic — a mark of favor and of exemption from manual labor, signaling Jacob\'s designation of Joseph as heir.',
      },
      {
        term: 'Providence',
        definition:
          'God\'s sovereign governance of all events — even evil ones — to accomplish His good purposes, climactically stated in Genesis 50:20.',
      },
    ],
    themes: ['Favoritism and family conflict', 'God\'s sovereignty', 'Dreams and prophecy', 'Suffering before glory'],
    crossRefs: [
      { ref: 'Genesis 50:20', note: '"You meant evil against me, but God meant it for good" — the key to the whole story.' },
      { ref: 'Genesis 45:5–8', note: 'Joseph tells his brothers God sent him ahead to preserve life.' },
      { ref: 'Acts 7:9', note: 'Stephen: the patriarchs sold Joseph, "but God was with him."' },
      { ref: 'Psalm 105:17', note: 'God "sent a man before them, Joseph, who was sold as a slave."' },
    ],
    application:
      'Joseph\'s story begins with betrayal by the people who should have loved him most. If you\'ve been wounded by family or friends, this chapter promises that God is not absent from the pit — He is writing a larger story. Don\'t rush to the happy ending; trust the Author in the dark middle chapters.',
    reflection: [
      'Have you experienced favoritism or rejection in your family? How did it shape you?',
      'Where in your life is it hardest to believe God is working through painful circumstances?',
      'What does Joseph\'s story teach about responding to betrayal without bitterness?',
    ],
    quiz: [
      {
        id: 'gen37-q1',
        type: 'mc',
        prompt: 'Why did Jacob love Joseph more than his other sons?',
        choices: [
          'Joseph was the strongest',
          'He was the son of his old age (born to Rachel)',
          'Joseph was the firstborn',
          'Joseph could interpret dreams',
        ],
        answer: 'He was the son of his old age (born to Rachel)',
        explanation: 'Genesis 37:3: Jacob loved Joseph "because he was the son of his old age" — Rachel\'s long-awaited firstborn.',
        tags: ['genesis', 'joseph'],
      },
      {
        id: 'gen37-q2',
        type: 'tf',
        prompt: 'Joseph\'s brothers sold him to traders heading for Egypt.',
        choices: ['True', 'False'],
        answer: 'True',
        explanation: 'At Judah\'s suggestion, they sold Joseph to Ishmaelite traders for twenty shekels of silver (Gen. 37:26–28).',
        tags: ['genesis', 'joseph'],
      },
      {
        id: 'gen37-q3',
        type: 'mc',
        prompt: 'What did Joseph\'s dreams predict?',
        choices: ['A great famine', 'His family bowing down to him', 'His death in Egypt', 'The Exodus from Egypt'],
        answer: 'His family bowing down to him',
        explanation: 'The sheaves and the sun, moon, and stars bowing to him (Gen. 37:5–11) foretold his future authority over his family.',
        tags: ['genesis', 'joseph', 'dreams'],
      },
    ],
    prayer:
      'Sovereign Lord, when I am in the pit — betrayed, forgotten, or confused — remind me that You are writing a bigger story. Give me Joseph\'s patience and a heart free of bitterness, trusting that what others mean for evil, You mean for good. Amen.',
  },
};
Object.assign(CHAPTER_STUDIES, {
  'exodus-3': {
    bookId: 'exodus',
    chapter: 3,
    title: 'The Burning Bush',
    summary:
      'Moses, tending sheep in Midian, sees a bush that burns without being consumed. God calls to him from the flames, commissions him to deliver Israel from Egypt, and reveals His name: "I AM WHO I AM" (Yahweh). Moses objects; God promises His presence.',
    understand:
      'Moses was eighty years old, forty years removed from Pharaoh\'s palace, a fugitive shepherd in the wilderness. In human terms his life was over. It is precisely then that God appears — in a bush that burns but is not consumed, a picture of God\'s holy presence that blazes without destroying. The first command is reverence: "Take your sandals off your feet, for the place on which you are standing is holy ground."\n\nGod\'s self-revelation centers on His name. When Moses asks who to say sent him, God answers: "I AM WHO I AM" — Yahweh, the self-existent, eternal, faithful One. This name becomes Israel\'s covenant name for God, the guarantee behind every promise: the God who is will be present and will act.\n\nMoses raises five objections across chapters 3–4 (Who am I? Who are You? What if they don\'t believe? I can\'t speak well. Send someone else.), and God patiently answers each — not by boosting Moses\' confidence in himself but by promising His own presence: "I will be with you." That promise, not Moses\' ability, is the foundation of the mission.',
    context:
      'The Israelites had been enslaved in Egypt for generations, crying out under brutal oppression (Ex. 2:23–25). God "remembered His covenant with Abraham" — not that He had forgotten, but that He was now acting on it. The burning bush appears at Horeb, "the mountain of God," later called Sinai, where Israel would receive the Law.\n\nYahweh\'s name (likely pronounced "Yahweh") was so revered that later Jews would not speak it aloud, substituting "Adonai" (Lord). Jesus would later apply the divine "I am" to Himself repeatedly in John\'s Gospel ("I am the bread of life... I am the resurrection"), claiming the very name revealed here.',
    people: ['Moses', 'God (Yahweh)', 'Jethro (Moses\' father-in-law, background)'],
    words: [
      {
        term: 'Yahweh',
        transliteration: 'yhwh',
        definition:
          'God\'s personal covenant name, revealed at the burning bush — "I AM WHO I AM" — expressing His self-existence, eternity, and faithful presence with His people.',
      },
      {
        term: 'Holy ground',
        transliteration: 'admat qodesh',
        definition:
          'Ground made holy not by nature but by God\'s presence. Holiness is God\'s separateness and purity, demanding reverence from all who approach.',
      },
    ],
    themes: ['God\'s call', 'The name of God', 'God\'s presence', 'Deliverance', 'Holy reverence'],
    crossRefs: [
      { ref: 'Exodus 6:2–8', note: 'God reaffirms His name and covenant promises to Moses.' },
      { ref: 'John 8:58', note: 'Jesus: "Before Abraham was, I am" — claiming Yahweh\'s name.' },
      { ref: 'Acts 7:30–34', note: 'Stephen recounts the burning bush at Moses\' trial.' },
      { ref: 'Isaiah 6:1–8', note: 'Another holy-ground commissioning: Isaiah\'s call.' },
    ],
    application:
      'God\'s answer to Moses\' inadequacy was not "You\'re more capable than you think" but "I will be with you." When God calls you to something beyond you — a hard conversation, a new ministry, a step of obedience — His presence is the qualification. Take off your sandals: approach Him with reverence, then go with confidence.',
    reflection: [
      'What "burning bush" moments — unexpected encounters with God — have shaped your life?',
      'Which of Moses\' objections do you most identify with, and how does God\'s answer speak to it?',
      'What does God\'s name "I AM" teach you about His reliability in your current circumstances?',
    ],
    quiz: [
      {
        id: 'ex3-q1',
        type: 'mc',
        prompt: 'What name did God reveal to Moses at the burning bush?',
        choices: ['El Shaddai', 'I AM WHO I AM (Yahweh)', 'Adonai', 'El Elyon'],
        answer: 'I AM WHO I AM (Yahweh)',
        explanation: 'Exodus 3:14: "God said to Moses, \'I AM WHO I AM.\'" This became Israel\'s covenant name for God.',
        tags: ['exodus', 'moses', 'name-of-god'],
      },
      {
        id: 'ex3-q2',
        type: 'tf',
        prompt: 'God promised Moses success because of Moses\' great leadership abilities.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: 'God\'s promise was "I will be with you" (Ex. 3:12). The mission rested on God\'s presence, not Moses\' ability.',
        tags: ['exodus', 'moses', 'calling'],
      },
      {
        id: 'ex3-q3',
        type: 'mc',
        prompt: 'Why did God tell Moses to remove his sandals?',
        choices: [
          'The ground was hot',
          'It was a sign of mourning',
          'The place was holy ground because of God\'s presence',
          'It was an Egyptian custom',
        ],
        answer: 'The place was holy ground because of God\'s presence',
        explanation: 'Exodus 3:5: "the place on which you are standing is holy ground." God\'s presence makes the ordinary holy.',
        tags: ['exodus', 'holiness'],
      },
      {
        id: 'ex3-q4',
        type: 'fill',
        prompt: 'God said to Moses, "I have surely _____ the affliction of my people in Egypt."',
        answer: 'seen',
        explanation: 'Exodus 3:7 — God sees, hears, and knows His people\'s suffering, and He comes down to deliver them.',
        tags: ['exodus', 'deliverance'],
      },
    ],
    prayer:
      'Great I AM, You see my weakness and still call me. Thank You that Your presence — not my ability — is the promise I stand on. Make me reverent before Your holiness and bold in Your mission. Here I am; send me. Amen.',
  },
  'exodus-14': {
    bookId: 'exodus',
    chapter: 14,
    title: 'The Crossing of the Red Sea',
    summary:
      'Trapped between Pharaoh\'s army and the sea, Israel panics — but Moses declares, "The LORD will fight for you." God parts the waters, Israel crosses on dry ground, and the sea closes over the Egyptians. Israel sings: salvation belongs to the LORD.',
    understand:
      'This is the Old Testament\'s defining moment of salvation. Israel is utterly helpless: the sea before them, Pharaoh\'s chariots behind, no weapons, no way out. Their response is complaint — "Were there no graves in Egypt?" — yet God saves them anyway. Moses\' command captures the gospel pattern: "Fear not, stand firm, and see the salvation of the LORD... The LORD will fight for you, and you have only to be silent."\n\nThe crossing itself is both deliverance and judgment: the same waters that are walls of salvation for Israel become the grave of Egypt\'s army. God saves His people and judges their oppressors in a single act. When Israel sees the Egyptians dead on the shore, they fear the LORD, believe in Him, and sing — the response true deliverance always produces.\n\nFor the rest of Scripture, the Exodus becomes the template for understanding salvation. The prophets, the psalms, and the New Testament all look back to this moment: as God brought Israel through the waters out of bondage, so Christ brings His people through death into life. Paul even calls the crossing a "baptism" (1 Cor. 10:2).',
    context:
      'The "Red Sea" (literally "Sea of Reeds") was likely a marshy extension of the Red Sea or one of the northern lakes. God deliberately led Israel into this trap — "I will get glory over Pharaoh" (v. 4, 17) — so that both Egypt and Israel would know that He is the LORD. The pillar of cloud moved behind Israel, standing between them and the Egyptians all night: God Himself as their rear guard.\n\nPharaoh\'s pursuit was irrational — he had just lost his firstborn and begged Israel to leave — showing how sin hardens the heart. The 600 chosen chariots represented Egypt\'s supreme military technology, utterly useless against the God who commands the sea.',
    people: ['Moses', 'Pharaoh', 'The Israelites', 'The Angel of God (pillar of cloud/fire)'],
    words: [
      {
        term: 'Salvation',
        transliteration: 'yeshuah',
        definition:
          'Deliverance or rescue. Moses\' phrase "see the salvation of the LORD" (Ex. 14:13) became Israel\'s summary of God\'s saving acts — and the root of Jesus\' name, Yeshua, "the LORD saves."',
      },
      {
        term: 'Fear of the LORD',
        transliteration: 'yir\'at yhwh',
        definition:
          'The awed reverence Israel felt seeing God\'s power (v. 31) — the proper response to God\'s mighty acts, leading to faith and obedience.',
      },
    ],
    themes: ['Salvation', 'God fights for His people', 'Faith vs. fear', 'Judgment and deliverance', 'Baptism foreshadowed'],
    crossRefs: [
      { ref: 'Exodus 15:1–21', note: 'The Song of Moses celebrating the victory at the sea.' },
      { ref: '1 Corinthians 10:1–2', note: 'Paul sees the crossing as a "baptism into Moses."' },
      { ref: 'Psalm 77:16–20', note: 'Remembering how God led His people through the waters.' },
      { ref: 'Hebrews 11:29', note: 'By faith Israel crossed the Red Sea as on dry land.' },
    ],
    application:
      'You will face Red Sea moments — trapped, with no human solution. God\'s word to Israel is His word to you: "Fear not, stand firm, and see the salvation of the LORD." Your job is not to part the sea but to trust the God who does. Stop striving, stand still, and watch Him fight for you.',
    reflection: [
      'What "Red Sea" are you facing right now — where is God asking you to stand firm instead of striving?',
      'How does Israel\'s grumbling challenge your own response to fear?',
      'What would it look like for you to "sing" after a deliverance — to mark God\'s salvation with worship?',
    ],
    quiz: [
      {
        id: 'ex14-q1',
        type: 'mc',
        prompt: 'What did Moses tell the terrified Israelites at the Red Sea?',
        choices: [
          'Build boats quickly',
          'Fear not, stand firm, and see the salvation of the LORD',
          'Fight the Egyptians bravely',
          'Retreat back to Egypt',
        ],
        answer: 'Fear not, stand firm, and see the salvation of the LORD',
        explanation: 'Exodus 14:13–14: "The LORD will fight for you, and you have only to be silent." Salvation is God\'s work.',
        tags: ['exodus', 'red-sea', 'faith'],
      },
      {
        id: 'ex14-q2',
        type: 'tf',
        prompt: 'The same waters that saved Israel destroyed the Egyptian army.',
        choices: ['True', 'False'],
        answer: 'True',
        explanation: 'The sea was a wall of deliverance for Israel and a grave for Pharaoh\'s army (Ex. 14:26–28) — salvation and judgment in one act.',
        tags: ['exodus', 'red-sea'],
      },
      {
        id: 'ex14-q3',
        type: 'mc',
        prompt: 'How did Israel respond after crossing the sea?',
        choices: ['They immediately complained about food', 'They feared the LORD and believed in Him', 'They built a golden calf', 'They turned back toward Egypt'],
        answer: 'They feared the LORD and believed in Him',
        explanation: 'Exodus 14:31: seeing God\'s great power, "the people feared the LORD, and they believed in the LORD and in his servant Moses."',
        tags: ['exodus', 'red-sea', 'faith'],
      },
    ],
    prayer:
      'Lord, when I am trapped with no way forward, teach me to stand firm and watch You fight for me. Forgive my panic and grumbling. You parted the sea for Israel; part the way for me, and I will sing of Your salvation. Amen.',
  },
  'exodus-20': {
    bookId: 'exodus',
    chapter: 20,
    title: 'The Ten Commandments',
    summary:
      'At Mount Sinai, amid thunder and smoke, God speaks the Ten Commandments — the moral core of the covenant. They begin with exclusive loyalty to God and extend to honoring parents, protecting life, marriage, property, and truth, ending with the inner command against coveting.',
    understand:
      'The Ten Commandments are not the way to earn God\'s favor — Israel had already been redeemed from Egypt by grace. They are the way redeemed people live: "I am the LORD your God, who brought you out of the land of Egypt" comes before "you shall have no other gods." Obedience is the response to salvation, not its price.\n\nThe commandments fall into two tables: duties to God (1–4: no other gods, no idols, no misuse of His name, keep the Sabbath) and duties to neighbor (5–10: honor parents, no murder, no adultery, no stealing, no false witness, no coveting). Jesus summarized them as love for God and love for neighbor (Matt. 22:37–40).\n\nThe tenth commandment is uniquely searching: it forbids not an act but a desire. Coveting reveals that God cares about the heart, not just behavior — a truth Jesus pressed further in the Sermon on the Mount, and Paul discovered when the commandment "exposed" his own sin (Rom. 7:7).',
    context:
      'God gave the Law at Sinai about three months after the Exodus, with the mountain wrapped in smoke, fire, and trumpet blasts — a theophany so terrifying the people begged Moses to mediate (Ex. 20:18–19). The commandments were written by God\'s own finger on stone tablets (Ex. 31:18), underscoring their divine authority.\n\nIn the ancient Near East, law codes (like Hammurabi\'s) existed — but no other code began with the character of God and addressed the inner life. The Sabbath command rooted Israel\'s rest in creation itself, and the whole law was a gift: a holy nation needed to know what holiness looked like.',
    people: ['God', 'Moses', 'The Israelites'],
    words: [
      {
        term: 'Commandments',
        transliteration: 'debarim',
        definition:
          'Literally "words" or "matters" — the Hebrew calls them the "Ten Words" (Decalogue). They are covenant stipulations from the King to His redeemed people.',
      },
      {
        term: 'Covet',
        transliteration: 'chamad',
        definition:
          'To desire wrongfully what belongs to another. The tenth commandment reaches the heart, showing that sin begins in desire before it becomes action.',
      },
    ],
    themes: ['The Law', 'Covenant obedience', 'Love for God and neighbor', 'Holiness', 'The heart'],
    crossRefs: [
      { ref: 'Matthew 22:37–40', note: 'Jesus sums up the Law: love God and love your neighbor.' },
      { ref: 'Romans 7:7', note: 'Paul: "I would not have known coveting if the law had not said, You shall not covet."' },
      { ref: 'Deuteronomy 5:6–21', note: 'The Ten Commandments repeated for the new generation.' },
      { ref: 'James 2:10', note: 'Whoever keeps the whole law but fails in one point is guilty of all.' },
    ],
    application:
      'Read the Ten Commandments slowly as a mirror, not a ladder. Where do they expose you — a divided heart, a misused tongue, a covetous eye? Let the Law do its work: drive you to Christ, who kept it perfectly for you. Then, as a redeemed person, let these commands shape your loves: God first, neighbor as yourself.',
    reflection: [
      'Which commandment most searches your heart right now, and why?',
      'How does "I am the LORD your God, who brought you out" change the way you read these commands — as gift rather than burden?',
      'What would change in your relationships if you truly loved your neighbor as yourself?',
    ],
    quiz: [
      {
        id: 'ex20-q1',
        type: 'mc',
        prompt: 'What comes BEFORE the commandments in Exodus 20:2?',
        choices: [
          'A threat of punishment',
          'A reminder of redemption: "I am the LORD your God, who brought you out of Egypt"',
          'A list of sacrifices',
          'A genealogy of Moses',
        ],
        answer: 'A reminder of redemption: "I am the LORD your God, who brought you out of Egypt"',
        explanation: 'Grace precedes law: God redeemed Israel first, then showed the redeemed how to live.',
        tags: ['exodus', 'ten-commandments', 'grace'],
      },
      {
        id: 'ex20-q2',
        type: 'tf',
        prompt: 'The tenth commandment addresses inner desires, not just outward actions.',
        choices: ['True', 'False'],
        answer: 'True',
        explanation: '"You shall not covet" targets the heart — showing God cares about desires, not only deeds (see Rom. 7:7).',
        tags: ['exodus', 'ten-commandments'],
      },
      {
        id: 'ex20-q3',
        type: 'mc',
        prompt: 'How did Jesus summarize the Ten Commandments?',
        choices: [
          'Obey your parents and honor the Sabbath',
          'Love the Lord your God and love your neighbor as yourself',
          'Do not kill and do not steal',
          'Fear God and keep the feasts',
        ],
        answer: 'Love the Lord your God and love your neighbor as yourself',
        explanation: 'Matthew 22:37–40: all the Law and the Prophets hang on these two commands.',
        tags: ['exodus', 'ten-commandments', 'jesus'],
      },
      {
        id: 'ex20-q4',
        type: 'fill',
        prompt: 'The Hebrew literally calls the Ten Commandments the "Ten _____.',
        answer: 'Words',
        explanation: 'They are the "Ten Words" (Decalogue) — covenant words from God to His people.',
        tags: ['exodus', 'ten-commandments'],
      },
    ],
    prayer:
      'Holy Lord, You redeemed me before You commanded me. Write Your law on my heart by Your Spirit. Expose my hidden coveting, cleanse my divided loves, and make me one who loves You wholly and my neighbor truly. Amen.',
  },
  'psalms-1': {
    bookId: 'psalms',
    chapter: 1,
    title: 'The Blessed Person',
    summary:
      'Psalm 1 contrasts two ways of life: the blessed person who delights in God\'s law is like a fruitful tree planted by streams of water, while the wicked are like chaff blown away. "The LORD knows the way of the righteous, but the way of the wicked will perish."',
    understand:
      'Psalm 1 is the gateway to the whole Psalter, laying out its fundamental choice: two people, two paths, two destinies. The blessed person is described first by what he avoids — he does not walk, stand, or sit with the wicked, sinners, and scoffers. Notice the progression: walking becomes standing becomes sitting; casual contact becomes settled companionship. Sin is a slope.\n\nBut the psalm is positive at its core: the blessed person\'s "delight is in the law of the LORD, and on his law he meditates day and night." Meditation here is not emptying the mind but filling it — chewing over Scripture like a cow chews cud, until it nourishes. The result is organic, not forced: like a tree planted by water, such a person bears fruit in season, does not wither, and prospers.\n\nThe wicked, by contrast, are chaff — the weightless husks winnowed away. They cannot stand in the judgment. The psalm ends with God\'s verdict: He "knows" (watches over, approves) the way of the righteous; the other way perishes. Jesus\' Sermon on the Mount echoes this two-ways structure (Matt. 7:13–27).',
    context:
      'Psalm 1 (with Psalm 2) forms the introduction to the Psalter. Where Psalm 2 focuses on God\'s anointed King, Psalm 1 focuses on the godly individual — together they announce the Psalter\'s twin themes: the righteous person and the righteous King. Jewish tradition pairs them as one psalm.\n\n"Law" (torah) here means instruction broadly — God\'s revealed will — not just legal codes. To meditate on it "day and night" echoes God\'s charge to Joshua (Josh. 1:8): Scripture-shaped thinking is the ancient path to a fruitful life.',
    people: ['The blessed (righteous) person', 'The wicked'],
    words: [
      {
        term: 'Blessed',
        transliteration: 'ashrei',
        definition:
          'A state of deep well-being and favor — the same word Jesus uses to open the Beatitudes ("Blessed are the poor in spirit").',
      },
      {
        term: 'Meditate',
        transliteration: 'hagah',
        definition:
          'To murmur, ponder, or chew over — the slow, repetitive reflecting on God\'s word until it shapes the heart.',
      },
      {
        term: 'Torah',
        transliteration: 'torah',
        definition:
          'Instruction or teaching — God\'s revealed guidance for life, broader than "law" in the legal sense.',
      },
    ],
    themes: ['The two ways', 'Delight in God\'s Word', 'Fruitfulness', 'Judgment', 'Meditation'],
    crossRefs: [
      { ref: 'Joshua 1:8', note: 'Meditate on the Book of the Law day and night, and you will prosper.' },
      { ref: 'Matthew 7:13–14', note: 'Jesus\' two ways: the narrow gate of life and the broad way of destruction.' },
      { ref: 'Jeremiah 17:7–8', note: 'The blessed person is like a tree planted by water.' },
    ],
    application:
      'Blessedness is not luck; it is the fruit of planted-ness. Ask: what am I planted in? Scrolling, worry, and the counsel of scoffers produce chaff-lives. Delighting in God\'s word — reading it slowly, thinking it over, praying it back — produces deep roots. Choose one passage this week to meditate on day and night.',
    reflection: [
      'Who are the "scoffers" whose counsel shapes you more than you\'d like to admit?',
      'What would "meditating day and night" practically look like in your current schedule?',
      'Are you more like the tree or the chaff right now — and what would change that?',
    ],
    quiz: [
      {
        id: 'ps1-q1',
        type: 'mc',
        prompt: 'The blessed person in Psalm 1 is compared to what?',
        choices: ['A mighty fortress', 'A tree planted by streams of water', 'A soaring eagle', 'A well-built house'],
        answer: 'A tree planted by streams of water',
        explanation: 'Psalm 1:3 — planted, nourished, fruitful in season, unwithered. Stability and fruitfulness come from being rooted in God\'s word.',
        tags: ['psalms', 'wisdom'],
      },
      {
        id: 'ps1-q2',
        type: 'tf',
        prompt: 'Psalm 1 says the blessed person never encounters wicked people.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: 'The point is not isolation but non-conformity: he does not walk in their counsel, stand in their way, or sit in their seat (v. 1).',
        tags: ['psalms', 'holiness'],
      },
      {
        id: 'ps1-q3',
        type: 'mc',
        prompt: 'What is the blessed person\'s delight?',
        choices: ['Wealth and success', 'The law of the LORD', 'The approval of others', 'Freedom from trouble'],
        answer: 'The law of the LORD',
        explanation: 'Psalm 1:2 — "his delight is in the law of the LORD, and on his law he meditates day and night."',
        tags: ['psalms', 'word-of-god'],
      },
    ],
    prayer:
      'Lord, plant me deep by Your streams. Turn my delight toward Your word and away from the counsel of the wicked. Make my life fruitful in its season, and keep me from withering. I choose Your way. Amen.',
  },
  'psalms-23': {
    bookId: 'psalms',
    chapter: 23,
    title: 'The LORD Is My Shepherd',
    summary:
      'David\'s most beloved psalm confesses the LORD as Shepherd and Host: He provides, restores, guides, protects through the darkest valley, and prepares a table of blessing. "Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the LORD forever."',
    understand:
      'Psalm 23 divides into two pictures: the Shepherd (vv. 1–4) and the Host (vv. 5–6). As Shepherd, the LORD provides ("I shall not want"), gives rest ("green pastures... still waters"), restores the soul, and guides "in paths of righteousness for his name\'s sake." The shepherd\'s reputation is at stake in the sheep\'s welfare — God cares for you because His name is on the line.\n\nThe turn comes in verse 4: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me." Notice the pronoun shift — from talking about God ("he") to talking to God ("you"). Trouble drives the psalmist closer. The rod and staff — instruments of protection and guidance — become comforts.\n\nThen the scene shifts to a banquet: God as Host anoints the guest\'s head with oil and fills his cup to overflowing, even "in the presence of my enemies." The psalm ends with twin certainties: goodness and mercy pursuing us all our days, and dwelling with God forever. It is a psalm for green pastures and dark valleys alike.',
    context:
      'David wrote as a former shepherd who knew what sheep need and what shepherds do — and as a king who had walked through literal valleys of the shadow of death, hunted by Saul and betrayed by Absalom. The shepherd metaphor was also royal: ancient kings called themselves shepherds of their people. David says the true Shepherd-King is the LORD.\n\nJesus claimed this imagery for Himself: "I am the good shepherd" (John 10:11), who lays down His life for the sheep. The psalm\'s final hope — dwelling in God\'s house forever — points to the eternal home Christ prepares (John 14:2–3).',
    people: ['David', 'The LORD as Shepherd and Host'],
    words: [
      {
        term: 'Shepherd',
        transliteration: 'roeh',
        definition:
          'One who feeds, guides, and protects the flock — in Scripture a title for God Himself and for the Messiah (John 10:11).',
      },
      {
        term: 'Anoint',
        transliteration: 'mashach',
        definition:
          'To smear or pour oil — a sign of honor, refreshment, and consecration for the honored guest at the Host\'s table.',
      },
    ],
    themes: ['God\'s provision', 'Guidance', 'Protection in trouble', 'God\'s presence', 'Eternal hope'],
    crossRefs: [
      { ref: 'John 10:11', note: 'Jesus: "I am the good shepherd. The good shepherd lays down his life for the sheep."' },
      { ref: 'Isaiah 40:11', note: 'He will tend His flock like a shepherd, gathering the lambs in His arms.' },
      { ref: 'Philippians 4:19', note: 'God will supply every need — "I shall not want" in New Testament dress.' },
      { ref: 'Revelation 7:17', note: 'The Lamb will shepherd them and guide them to springs of living water.' },
    ],
    application:
      'Say it personally: "The LORD is MY shepherd." Not just the world\'s shepherd, not just the church\'s — yours. In provision, trust Him instead of anxiously striving. In the valley, talk to Him ("you are with me") instead of only about Him. And remember: goodness and mercy are not just ahead of you — they are following you, chasing you down, all the days of your life.',
    reflection: [
      'Which picture do you need more right now — the Shepherd who provides, or the Host who honors you at His table?',
      'What "valley of the shadow" are you walking through, and how does "you are with me" change it?',
      'Do you believe goodness and mercy are pursuing you? What would change if you did?',
    ],
    quiz: [
      {
        id: 'ps23-q1',
        type: 'mc',
        prompt: 'Why does the Shepherd lead in "paths of righteousness"?',
        choices: ['Because the sheep deserve it', 'For His name\'s sake', 'Because the paths are easy', 'To earn the sheep\'s love'],
        answer: 'For His name\'s sake',
        explanation: 'Psalm 23:3 — God guides and provides to uphold His own reputation and character. Your care is a matter of His honor.',
        tags: ['psalms', 'shepherd'],
      },
      {
        id: 'ps23-q2',
        type: 'tf',
        prompt: 'Psalm 23 promises believers will never walk through dark valleys.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: '"Even though I walk through the valley of the shadow of death" — valleys come; the promise is His presence in them ("you are with me").',
        tags: ['psalms', 'suffering'],
      },
      {
        id: 'ps23-q3',
        type: 'mc',
        prompt: 'What two things does David say will follow him all his days?',
        choices: ['Wealth and honor', 'Goodness and mercy', 'Health and strength', 'Peace and quiet'],
        answer: 'Goodness and mercy',
        explanation: 'Psalm 23:6 — "Surely goodness and mercy shall follow me all the days of my life." God\'s grace pursues His sheep.',
        tags: ['psalms', 'grace'],
      },
      {
        id: 'ps23-q4',
        type: 'fill',
        prompt: '"The LORD is my _____, I shall not want."',
        answer: 'shepherd',
        explanation: 'The opening confession of Psalm 23 — everything else in the psalm flows from this relationship.',
        tags: ['psalms', 'shepherd'],
      },
    ],
    prayer:
      'Lord, my Shepherd, I shall not want. Lead me beside still waters when I am restless, restore my soul when I am empty, and walk with me through every dark valley. Thank You that goodness and mercy chase me, and that my forever-home is with You. Amen.',
  },
  'psalms-51': {
    bookId: 'psalms',
    chapter: 51,
    title: 'A Broken and Contrite Heart',
    summary:
      'After Nathan confronts him about Bathsheba, David pours out the Bible\'s greatest prayer of repentance: "Have mercy on me, O God... Wash me thoroughly... Create in me a clean heart." He pleads for cleansing, restoration, and a willing spirit.',
    understand:
      'Psalm 51 was written after David\'s adultery with Bathsheba and murder of Uriah (2 Sam. 11–12) — about a year of unconfessed sin that, David says elsewhere, made his "bones waste away" (Ps. 32:3). When Nathan said "You are the man," David broke. This psalm is that breaking, set to music.\n\nDavid\'s confession is strikingly God-centered: "Against you, you only, have I sinned." He had sinned horribly against Bathsheba and Uriah — but he sees that every sin is ultimately against God. He makes no excuses, offers no bribes of good works; he appeals only to God\'s "steadfast love" and "abundant mercy."\n\nThe psalm\'s petitions ascend: blot out, wash, cleanse — then deeper: "Create in me a clean heart" (the word "create" is the Genesis 1 word; only God can make a new heart), "restore to me the joy of your salvation." And God\'s desired sacrifice is named: "a broken and contrite heart, O God, you will not despise." True repentance is not groveling but honest brokenness that God meets with grace.',
    context:
      'The superscription ties the psalm to 2 Samuel 12, when Nathan confronted David. David was Israel\'s greatest king, "a man after God\'s own heart" — which makes his fall, and his repentance, all the more instructive. This psalm has been prayed by repenting sinners for 3,000 years, from Augustine to today.\n\n"Create in me a clean heart" anticipates the new covenant promise of a new heart (Ezek. 36:26). "Do not take your Holy Spirit from me" reflects the Old Testament experience of the Spirit; in Christ, the Spirit seals believers permanently (Eph. 1:13) — yet the prayer\'s spirit of humble dependence remains our model.',
    people: ['David', 'Nathan the prophet (background)'],
    words: [
      {
        term: 'Steadfast love',
        transliteration: 'hesed',
        definition:
          'God\'s loyal, covenant love — the ground of David\'s appeal. He asks for mercy not because he deserves it but because God is hesed.',
      },
      {
        term: 'Contrite',
        transliteration: 'nidkeh',
        definition:
          'Crushed or broken — the state of heart God will not despise. True repentance is a brokenness over sin itself, not just its consequences.',
      },
      {
        term: 'Create',
        transliteration: 'bara',
        definition:
          'The Genesis 1 word for divine creation from nothing. A clean heart is not a renovation project; it requires God\'s creative act.',
      },
    ],
    themes: ['Repentance', 'Confession', 'God\'s mercy', 'A clean heart', 'Restoration'],
    crossRefs: [
      { ref: '2 Samuel 12:1–13', note: 'Nathan\'s confrontation: "You are the man!" and David\'s confession.' },
      { ref: 'Psalm 32', note: 'David\'s companion psalm on the blessedness of forgiven sin.' },
      { ref: '1 John 1:9', note: 'If we confess our sins, He is faithful and just to forgive.' },
      { ref: 'Ezekiel 36:26', note: 'The promise of a new heart and a new spirit.' },
    ],
    application:
      'Unconfessed sin festers; confessed sin is cleansed. Don\'t do what David did for a year — don\'t manage, minimize, or hide it. Name it before God specifically, appeal to His mercy (not your record), and ask Him to create what you cannot: a clean heart. Then receive His restoration and get back to the work He gave you.',
    reflection: [
      'Is there a sin you\'ve been "managing" instead of confessing? What keeps you from bringing it into the light?',
      'David appealed to God\'s mercy, not his own merit. How does that reshape your approach to confession?',
      'What would "the joy of your salvation" restored look like in your life?',
    ],
    quiz: [
      {
        id: 'ps51-q1',
        type: 'mc',
        prompt: 'What event prompted Psalm 51?',
        choices: [
          'David\'s victory over Goliath',
          'Nathan confronting David about Bathsheba and Uriah',
          'Absalom\'s rebellion',
          'The dedication of the temple',
        ],
        answer: 'Nathan confronting David about Bathsheba and Uriah',
        explanation: 'The superscription: "when Nathan the prophet went to him, after he had gone in to Bathsheba" (see 2 Sam. 12).',
        tags: ['psalms', 'david', 'repentance'],
      },
      {
        id: 'ps51-q2',
        type: 'tf',
        prompt: 'David believed his good works and sacrifices could earn God\'s forgiveness.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: '"You will not delight in sacrifice... The sacrifices of God are a broken spirit" (vv. 16–17). David appealed to mercy alone.',
        tags: ['psalms', 'repentance', 'grace'],
      },
      {
        id: 'ps51-q3',
        type: 'mc',
        prompt: 'What did David ask God to create in him?',
        choices: ['A new kingdom', 'A clean heart', 'A great army', 'A lasting dynasty'],
        answer: 'A clean heart',
        explanation: 'Psalm 51:10: "Create in me a clean heart, O God, and renew a right spirit within me."',
        tags: ['psalms', 'repentance'],
      },
      {
        id: 'ps51-q4',
        type: 'fill',
        prompt: '"A broken and _____ heart, O God, you will not despise."',
        answer: 'contrite',
        explanation: 'Psalm 51:17 — the sacrifice God desires is a crushed, repentant heart.',
        tags: ['psalms', 'repentance'],
      },
    ],
    prayer:
      'Have mercy on me, O God, according to Your steadfast love. Wash me, cleanse me, create in me a clean heart. Restore to me the joy of Your salvation, and I will sing of Your righteousness. I bring You my broken heart — receive it. Amen.',
  },
  'psalms-91': {
    bookId: 'psalms',
    chapter: 91,
    title: 'The Shelter of the Most High',
    summary:
      'Psalm 91 is the great psalm of divine protection: whoever dwells "in the secret place of the Most High" abides under His shadow. God promises deliverance from peril, angels\' guard, and long life to the one who loves Him and calls on His name.',
    understand:
      'Psalm 91 opens with one of the most comforting sentences in Scripture: "He who dwells in the secret place of the Most High shall abide under the shadow of the Almighty." The promise is not for the occasional visitor but for the dweller — the one who makes God his habitual home. Protection flows from proximity.\n\nThe psalm piles up images of refuge: a fortress, a shield, wings under which the believer nests like a chick. It names real dangers — the snare of the fowler, deadly pestilence, the terror of night, arrows by day — and answers each with God\'s covering. Verse 11\'s promise of angelic guard was quoted by Satan when tempting Jesus (Matt. 4:6) — a reminder that even true promises can be twisted when ripped from trustful context.\n\nThe psalm closes with God Himself speaking: seven "I will" promises for the one who loves Him and knows His name — deliver, protect, answer, be with in trouble, rescue, honor, satisfy with long life, and show salvation. It is God\'s personal pledge to the trusting heart.',
    context:
      'Psalm 91 is anonymous (traditionally linked with Moses and Psalm 90). It may have been used as a soldier\'s psalm or a prayer for pilgrims facing dangerous roads. Its promises are not a magic charm — the righteous still suffer (see Job, Paul, Christ Himself) — but a revelation of God\'s faithful character toward those who trust Him.\n\nJesus\' use of this psalm is instructive: when Satan quoted verse 11 to urge Him to throw Himself from the temple, Jesus answered with Deuteronomy 6:16 — "You shall not put the Lord your God to the test." Trusting God\'s protection never means manufacturing danger to force His hand.',
    people: ['The psalmist', 'The one who dwells in God', 'God the Protector'],
    words: [
      {
        term: 'Secret place',
        transliteration: 'seter',
        definition:
          'A hiding place or shelter — intimate, personal communion with God, the "dwelling" from which all protection flows.',
      },
      {
        term: 'Shadow',
        transliteration: 'tsel',
        definition:
          'The cool shade of God\'s presence — in the desert, shade is survival. To abide in His shadow is to live under His constant care.',
      },
    ],
    themes: ['Divine protection', 'Trust', 'God\'s presence', 'Deliverance', 'God\'s promises'],
    crossRefs: [
      { ref: 'Matthew 4:6', note: 'Satan quotes Psalm 91:11–12 when tempting Jesus — and Jesus answers with Scripture.' },
      { ref: 'Psalm 27:5', note: 'God will hide the believer in His shelter in the day of trouble.' },
      { ref: 'Proverbs 18:10', note: 'The name of the LORD is a strong tower; the righteous run into it and are safe.' },
      { ref: 'Romans 8:31', note: 'If God is for us, who can be against us?' },
    ],
    application:
      'Make God your dwelling place, not your emergency shelter. Daily prayer, Scripture, and conscious trust are how you "dwell in the secret place." Then, when terrors come — and they will — you\'ll find you\'re already home: under His wings, behind His shield, within earshot of His "I wills."',
    reflection: [
      'Do you tend to visit God in emergencies or dwell with Him daily? What would change that?',
      'Which of God\'s seven "I will" promises in verses 14–16 do you most need to hear today?',
      'How does Jesus\' response to Satan\'s misuse of this psalm guard you from presumption?',
    ],
    quiz: [
      {
        id: 'ps91-q1',
        type: 'mc',
        prompt: 'According to Psalm 91, who receives God\'s protection?',
        choices: [
          'Everyone, automatically',
          'The one who dwells in the secret place of the Most High',
          'Only kings and priests',
          'Those who never face danger',
        ],
        answer: 'The one who dwells in the secret place of the Most High',
        explanation: 'Psalm 91:1 — the promise belongs to the dweller, the one who makes God his habitual home.',
        tags: ['psalms', 'trust', 'protection'],
      },
      {
        id: 'ps91-q2',
        type: 'tf',
        prompt: 'Satan quoted Psalm 91 when tempting Jesus in the wilderness.',
        choices: ['True', 'False'],
        answer: 'True',
        explanation: 'Matthew 4:6 — Satan quoted verses 11–12 about angelic protection; Jesus answered that we must not test God.',
        tags: ['psalms', 'jesus', 'temptation'],
      },
      {
        id: 'ps91-q3',
        type: 'mc',
        prompt: 'How does the psalm close?',
        choices: [
          'With a curse on enemies',
          'With God Himself speaking seven "I will" promises',
          'With a call to sacrifice',
          'With a genealogy',
        ],
        answer: 'With God Himself speaking seven "I will" promises',
        explanation: 'Psalm 91:14–16 — God personally pledges to deliver, protect, answer, and save those who love Him.',
        tags: ['psalms', 'promises'],
      },
    ],
    prayer:
      'Most High, I choose to dwell in Your secret place and abide under Your shadow. You are my refuge and fortress. When terrors rise, remind me that You have said "I will" — and You never break Your word. Amen.',
  },
  'proverbs-3': {
    bookId: 'proverbs',
    chapter: 3,
    title: 'Trust in the LORD',
    summary:
      'Proverbs 3 is the book\'s beloved center: "Trust in the LORD with all your heart... and he will make straight your paths." It teaches wholehearted trust, honoring God with wealth, embracing discipline, the supreme value of wisdom, and peace for those who walk uprightly.',
    understand:
      'Proverbs 3 opens with a father\'s appeal: don\'t forget my teaching; let steadfast love and faithfulness be bound around your neck like a necklace — visible, close to the heart, written on its tablet. Then comes the chapter\'s famous core (vv. 5–6): "Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths."\n\nThis is not a ban on thinking — it\'s a ban on self-sufficiency. "Leaning on your own understanding" means making yourself the final authority. Trusting with "all your heart" means bringing God into "all your ways" — decisions, relationships, money, plans — and letting Him straighten the path. The promise is direction, not necessarily ease.\n\nThe chapter continues with practical wisdom: honor God with your wealth (the "firstfruits" principle of giving), don\'t despise His discipline (He disciplines those He loves — quoted in Heb. 12), prize wisdom above riches (she is "more precious than jewels"), and walk securely without fear. Wisdom is a "tree of life" to those who hold her.',
    context:
      'Proverbs 3 belongs to the opening discourses (ch. 1–9), a father\'s extended appeal to his son to choose wisdom over folly. Solomon, famed for wisdom (1 Kings 3), writes as the ideal father-king instructing the next generation — though his own later life would tragically illustrate what happens when wisdom is abandoned.\n\nVerses 5–6 are among the most memorized in the Bible, and Hebrews 12:5–6 quotes verses 11–12 to explain suffering: God\'s discipline proves His fatherhood. The "tree of life" image (v. 18) reaches back to Eden and forward to Revelation 22 — wisdom reconnects us to what sin lost.',
    people: ['The father (Solomon)', 'The son', 'Wisdom (personified)'],
    words: [
      {
        term: 'Trust',
        transliteration: 'batach',
        definition:
          'To rely on with confident security — like lying down on a bed. Wholehearted trust means God is your support, not your backup plan.',
      },
      {
        term: 'Acknowledge',
        transliteration: 'yada',
        definition:
          'To know intimately and recognize — bringing God consciously into every decision rather than compartmentalizing Him.',
      },
      {
        term: 'Firstfruits',
        transliteration: 'reshit',
        definition:
          'The first and best of the harvest, given to God — the principle that honoring God with wealth means giving Him the first portion, not the leftovers.',
      },
    ],
    themes: ['Trust in God', 'Wisdom', 'Honoring God with wealth', 'Divine discipline', 'Peace'],
    crossRefs: [
      { ref: 'Proverbs 3:5–6', note: 'The chapter\'s heart: trust wholly, acknowledge God in all ways.' },
      { ref: 'Hebrews 12:5–6', note: 'Quotes Proverbs 3:11–12: God disciplines those He loves.' },
      { ref: 'James 1:5', note: 'If any lacks wisdom, let him ask God who gives generously.' },
      { ref: 'Matthew 6:33', note: 'Seek first the kingdom — the New Testament echo of firstfruits.' },
    ],
    application:
      'Memorize Proverbs 3:5–6 — then live it. This week, when facing a decision, practice "acknowledging Him": pause, pray, and invite God into the process before leaning on your own analysis. Honor Him with your firstfruits — your money, your morning, your best energy. And when discipline comes, receive it as a father\'s love, not an enemy\'s attack.',
    reflection: [
      'What does "leaning on your own understanding" look like in your life right now?',
      'In which of "all your ways" have you not yet acknowledged God?',
      'How do you typically respond to God\'s discipline — and how should a loved child respond?',
    ],
    quiz: [
      {
        id: 'pr3-q1',
        type: 'mc',
        prompt: 'Complete the proverb: "Trust in the LORD with all your heart, and..."',
        choices: [
          'He will give you whatever you desire',
          'Do not lean on your own understanding',
          'You will never face trouble',
          'Wealth will surely follow',
        ],
        answer: 'Do not lean on your own understanding',
        explanation: 'Proverbs 3:5 — wholehearted trust excludes self-sufficiency as the final authority.',
        tags: ['proverbs', 'trust', 'wisdom'],
      },
      {
        id: 'pr3-q2',
        type: 'tf',
        prompt: 'Proverbs 3 teaches that God\'s discipline is a sign of His love.',
        choices: ['True', 'False'],
        answer: 'True',
        explanation: '"The LORD reproves him whom he loves, as a father the son in whom he delights" (v. 12; quoted in Heb. 12:6).',
        tags: ['proverbs', 'discipline'],
      },
      {
        id: 'pr3-q3',
        type: 'mc',
        prompt: 'According to Proverbs 3, wisdom is more precious than what?',
        choices: ['Silver, gold, and jewels', 'Long life', 'Fame', 'Friendship'],
        answer: 'Silver, gold, and jewels',
        explanation: 'Verses 14–15: wisdom\'s profit is better than silver and gold; "she is more precious than jewels."',
        tags: ['proverbs', 'wisdom'],
      },
      {
        id: 'pr3-q4',
        type: 'fill',
        prompt: '"In all your ways acknowledge him, and he will make _____ your paths."',
        answer: 'straight',
        explanation: 'Proverbs 3:6 — God promises direction to those who bring Him into every way.',
        tags: ['proverbs', 'trust'],
      },
    ],
    prayer:
      'Lord, I trust You with all my heart — not leaning on my own understanding. In all my ways I acknowledge You: straighten my paths. Teach me to honor You with my first and best, to receive Your discipline as love, and to treasure wisdom above riches. Amen.',
  },
  'isaiah-53': {
    bookId: 'isaiah',
    chapter: 53,
    title: 'The Suffering Servant',
    summary:
      'Isaiah 53 paints the most detailed Old Testament portrait of the Messiah: despised and rejected, "wounded for our transgressions," crushed for our iniquities, led like a lamb to slaughter, buried with the wicked — yet vindicated, seeing His offspring and justifying many.',
    understand:
      'Written 700 years before Christ, Isaiah 53 reads like an eyewitness account of the crucifixion. The Servant has "no form or majesty that we should look at him" — the Messiah would not come as the conquering hero Israel expected, but as one "despised and rejected by men, a man of sorrows." His own people would misread His suffering as God\'s punishment.\n\nThen the great reversal: "Surely he has borne our griefs and carried our sorrows... he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed." The chapter hammers substitution — our sin, His punishment; our peace, His chastisement. "All we like sheep have gone astray," and "the LORD has laid on him the iniquity of us all."\n\nThe Servant is silent before His accusers, dies among the wicked, is buried with the rich, and then — triumphantly — "he shall see his offspring; he shall prolong his days." Death is not the end. The righteous Servant "shall make many to be accounted righteous." This is the gospel in the Old Testament: penal substitution, resurrection hope, and justification, seven centuries before Bethlehem.',
    context:
      'Isaiah 53 is the climax of the four "Servant Songs" (42, 49, 50, 53). The Servant is both Israel and, ultimately, the individual Messiah who fulfills what Israel could not. The Ethiopian eunuch was reading this very passage when Philip found him and "beginning with this Scripture he told him the good news about Jesus" (Acts 8:35).\n\nEvery detail found fulfillment: despised and rejected (John 1:11), silent before accusers (Matt. 27:12–14), numbered with transgressors (Luke 22:37), grave with the wicked and the rich — crucified between criminals, buried in Joseph of Arimathea\'s rich man\'s tomb (Matt. 27:57–60).',
    people: ['The Suffering Servant (the Messiah)', 'Isaiah', '"We" — the confessing people'],
    words: [
      {
        term: 'Servant',
        transliteration: 'eved',
        definition:
          'God\'s chosen agent for His redemptive work — in Isaiah, both Israel and ultimately the Messiah who fulfills Israel\'s mission through suffering.',
      },
      {
        term: 'Pierced',
        transliteration: 'mecholal',
        definition:
          'Bored through or wounded fatally — the Servant\'s death is violent and substitutionary: "pierced for our transgressions."',
      },
      {
        term: 'Intercession',
        definition:
          'The Servant "makes intercession for the transgressors" (v. 12) — His ongoing priestly work, fulfilled as Christ "always lives to make intercession" (Heb. 7:25).',
      },
    ],
    themes: ['Substitutionary atonement', 'The suffering Messiah', 'Justification', 'The silence of the Servant', 'Triumph through suffering'],
    crossRefs: [
      { ref: 'Acts 8:32–35', note: 'Philip uses this passage to preach Jesus to the Ethiopian eunuch.' },
      { ref: '1 Peter 2:24', note: '"He himself bore our sins in his body on the tree... by his wounds you have been healed."' },
      { ref: 'Mark 10:45', note: 'The Son of Man came "to give his life as a ransom for many."' },
      { ref: 'Romans 5:8–9', note: 'Christ died for us while we were sinners; we are justified by His blood.' },
    ],
    application:
      'Read Isaiah 53 slowly and personally: "wounded for MY transgressions... crushed for MY iniquities." Let the weight of substitution crush your pride and lift your gratitude. You cannot add to what the Servant finished. Rest in it — and then, like the "many" He justified, live as one who was bought at the highest price.',
    reflection: [
      'What emotions rise as you read "the LORD has laid on him the iniquity of us all"?',
      'How does the Servant\'s silence before His accusers challenge your instinct to self-defend?',
      'In what ways are you still trying to "pay" for sins Christ already bore?',
    ],
    quiz: [
      {
        id: 'isa53-q1',
        type: 'mc',
        prompt: 'According to Isaiah 53, why did the Servant suffer?',
        choices: [
          'For His own sins',
          'For our transgressions and iniquities — as our substitute',
          'By accident of politics',
          'To set a moral example only',
        ],
        answer: 'For our transgressions and iniquities — as our substitute',
        explanation: '"He was pierced for our transgressions; he was crushed for our iniquities" (v. 5). His suffering was substitutionary.',
        tags: ['isaiah', 'atonement', 'messiah'],
      },
      {
        id: 'isa53-q2',
        type: 'tf',
        prompt: 'Isaiah 53 was written about 700 years before Jesus\' crucifixion.',
        choices: ['True', 'False'],
        answer: 'True',
        explanation: 'Isaiah prophesied c. 740–680 BC, yet chapter 53 describes the crucifixion in striking detail — evidence of divine inspiration.',
        tags: ['isaiah', 'prophecy'],
      },
      {
        id: 'isa53-q3',
        type: 'mc',
        prompt: 'To what animal is the Servant compared as He goes to His death?',
        choices: ['A lion', 'A lamb led to the slaughter', 'A dove', 'An ox'],
        answer: 'A lamb led to the slaughter',
        explanation: 'Isaiah 53:7 — fulfilled when John the Baptist cried, "Behold, the Lamb of God" (John 1:29).',
        tags: ['isaiah', 'messiah'],
      },
      {
        id: 'isa53-q4',
        type: 'fill',
        prompt: '"All we like _____ have gone astray; we have turned every one to his own way."',
        answer: 'sheep',
        explanation: 'Isaiah 53:6 — the universal confession of sin that makes the Servant\'s substitution necessary.',
        tags: ['isaiah', 'sin'],
      },
    ],
    prayer:
      'Lord Jesus, Suffering Servant, You were pierced for my transgressions and crushed for my iniquities. I confess I am the straying sheep; You are the Lamb who took my place. Thank You for wounds that heal me and chastisement that brought me peace. Amen.',
  },
  'daniel-6': {
    bookId: 'daniel',
    chapter: 6,
    title: 'Daniel in the Lions\' Den',
    summary:
      'Jealous officials trick King Darius into outlawing prayer to anyone but the king. Daniel prays openly anyway, is thrown to the lions, and God shuts their mouths. Darius rejoices, Daniel\'s accusers are punished, and the king decrees that all should fear Daniel\'s God.',
    understand:
      'Daniel was about eighty years old, a Jewish exile who had served Babylonian and Persian kings for decades with "an excellent spirit." His enemies could find no corruption in him — so they attacked his devotion: they made his faithfulness illegal. The decree forbade petitioning any god or man but Darius for thirty days.\n\nDaniel\'s response is the chapter\'s quiet thunder: he went home, opened his windows toward Jerusalem, and prayed three times a day, "as he had done previously." No protest march, no compromise, no hiding — just continued faithfulness. He didn\'t pray to provoke; he prayed because prayer was his life. The open window was not defiance for show but consistency under pressure.\n\nGod honored it: an angel shut the lions\' mouths, and Daniel emerged unhurt — "because he had trusted in his God." Darius, who had spent a sleepless night fasting, issued a decree honoring the living God "who delivers and rescues." Faithfulness in exile became a witness to an empire.',
    context:
      'Darius the Mede had just taken Babylon (539 BC). Daniel\'s high position — one of three presidents over 120 satraps — bred jealousy among Persian nobles who resented a Jewish exile\'s power. Persian law was considered irrevocable ("the law of the Medes and Persians"), which is why even the sympathetic king could not reverse his own decree.\n\nDaniel\'s thrice-daily prayer toward Jerusalem followed Solomon\'s dedication prayer (1 Kings 8:48) — exiles were to pray toward the temple. His integrity ("no error or fault was found in him," v. 4) is the foundation of the whole story: a lifetime of faithfulness made one more day of faithfulness natural.',
    people: ['Daniel', 'Darius the Mede', 'The jealous satraps and presidents'],
    words: [
      {
        term: 'Excellent spirit',
        transliteration: 'ruach yattira',
        definition:
          'An extraordinary spirit of wisdom and integrity — the reason Daniel was distinguished above all his colleagues.',
      },
      {
        term: 'Interdict',
        definition:
          'The royal decree forbidding prayer to any god or man except the king — an attempt to criminalize Daniel\'s devotion.',
      },
    ],
    themes: ['Faithfulness under pressure', 'Prayer', 'Integrity', 'God\'s deliverance', 'Witness in exile'],
    crossRefs: [
      { ref: 'Daniel 3', note: 'The parallel story: the fiery furnace and God\'s deliverance.' },
      { ref: 'Hebrews 11:33', note: 'Faith "stopped the mouths of lions" — Daniel in the hall of faith.' },
      { ref: '1 Peter 2:12', note: 'Honorable conduct silences accusers and glorifies God.' },
      { ref: 'Acts 5:29', note: 'The apostles\' principle: "We must obey God rather than men."' },
    ],
    application:
      'Build your "as he had done previously" now — the prayer habits, the integrity, the open windows — before the pressure comes. When faithfulness becomes costly, you won\'t rise to the occasion; you\'ll fall to the level of your habits. And remember: your quiet consistency may be the very thing God uses to make a Darius write a decree.',
    reflection: [
      'What spiritual habits are you building "previously" — before you need them?',
      'Where is your faithfulness currently costing you something? How does Daniel encourage you?',
      'Who is watching your life the way Darius watched Daniel\'s?',
    ],
    quiz: [
      {
        id: 'dan6-q1',
        type: 'mc',
        prompt: 'Why couldn\'t Daniel\'s enemies find a charge against him?',
        choices: [
          'He had powerful friends',
          'He was faithful, with no error or fault found in him',
          'He bribed the officials',
          'He hid all his activities',
        ],
        answer: 'He was faithful, with no error or fault found in him',
        explanation: 'Daniel 6:4 — his integrity was so complete they could only attack him "with regard to the law of his God."',
        tags: ['daniel', 'integrity'],
      },
      {
        id: 'dan6-q2',
        type: 'tf',
        prompt: 'Daniel stopped praying publicly once the decree was signed.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: 'He prayed three times a day with windows open "as he had done previously" (v. 10). Consistency, not defiance, was his witness.',
        tags: ['daniel', 'prayer', 'courage'],
      },
      {
        id: 'dan6-q3',
        type: 'mc',
        prompt: 'How was Daniel delivered from the lions?',
        choices: [
          'The lions were already fed',
          'God sent His angel and shut the lions\' mouths',
          'Darius lowered a ladder',
          'Daniel fought them off',
        ],
        answer: 'God sent His angel and shut the lions\' mouths',
        explanation: 'Daniel 6:22: "My God sent his angel and shut the lions\' mouths" — because Daniel trusted in God.',
        tags: ['daniel', 'deliverance'],
      },
    ],
    prayer:
      'Faithful God, give me Daniel\'s excellent spirit — integrity no one can fault and prayer no law can stop. When faithfulness costs me, let me be consistent rather than spectacular, trusting You to shut the lions\' mouths. Make my life a witness. Amen.',
  },
});
Object.assign(CHAPTER_STUDIES, {
  'matthew-5': {
    bookId: 'matthew',
    chapter: 5,
    title: 'The Sermon on the Mount Begins: The Beatitudes',
    summary:
      'Jesus opens His most famous sermon with the Beatitudes — blessings on the poor in spirit, mourners, the meek, and those who hunger for righteousness. He then calls His disciples salt and light, and begins teaching a righteousness that exceeds the scribes and Pharisees.',
    understand:
      'The Sermon on the Mount (Matt. 5–7) is Jesus\' definitive portrait of kingdom life. He begins not with commands but with blessings — the Beatitudes, eight declarations of who is truly "blessed" (makarios: deeply favored, genuinely well-off). The list is shocking: the poor in spirit, mourners, the meek, the persecuted. Jesus turns the world\'s values upside down: blessedness belongs not to the strong and self-sufficient but to the humble, the grieving, the merciful, the pure in heart.\n\nEach beatitude pairs a character quality with a kingdom promise: the poor in spirit receive the kingdom; mourners are comforted; the meek inherit the earth; those who hunger for righteousness are filled. These are not eight kinds of people but eight marks of one kind of person — the citizen of heaven.\n\nJesus then gives His disciples their mission in two metaphors: salt (preserving, flavoring, inconspicuous but essential) and light (visible, illuminating, placed on a stand). "Let your light shine before others, so that they may see your good works and give glory to your Father." The chapter closes by raising the bar: true righteousness exceeds mere external rule-keeping — a theme Jesus develops through six "You have heard... but I say" teachings.',
    context:
      'Jesus spoke to crowds of Jewish disciples in Galilee, people living under Roman occupation and longing for the Messiah\'s kingdom. Many expected a political liberator; Jesus announced a kingdom of the heart. The mountain setting deliberately echoes Moses receiving the Law at Sinai — Jesus is the greater Moses, giving the greater law.\n\n"Poor in spirit" means spiritual bankruptcy — recognizing one has nothing to offer God. This first beatitude is the doorway to all the rest: only those who know their need can mourn their sin, inherit meekness, and hunger for righteousness.',
    people: ['Jesus', 'The disciples', 'The crowds'],
    words: [
      {
        term: 'Blessed',
        transliteration: 'makarios',
        definition:
          'Deeply favored and truly well-off — not a fleeting happiness based on circumstances but a settled state of God\'s approval.',
      },
      {
        term: 'Poor in spirit',
        transliteration: 'ptochos to pneumati',
        definition:
          'Spiritually bankrupt — recognizing one\'s utter need before God. The first beatitude and the foundation of all the rest.',
      },
      {
        term: 'Meek',
        transliteration: 'praus',
        definition:
          'Strength under control — not weakness but power surrendered to God. The meek inherit the earth (Ps. 37:11).',
      },
    ],
    themes: ['The kingdom of heaven', 'True blessedness', 'Humility', 'Salt and light', 'Righteousness of the heart'],
    crossRefs: [
      { ref: 'Luke 6:20–26', note: 'Luke\'s parallel Sermon on the Plain with blessings and woes.' },
      { ref: 'Psalm 37:11', note: '"The meek shall inherit the land" — the promise Jesus echoes.' },
      { ref: 'Isaiah 61:1–3', note: 'Good news to the poor, comfort for mourners — Jesus\' mission text.' },
      { ref: 'Philippians 2:5–8', note: 'Christ\'s own meekness and poverty of spirit as our pattern.' },
    ],
    application:
      'Read the Beatitudes as a mirror: which one describes you least? That\'s likely where God wants to grow you. And embrace your calling this week: be salt — a preserving, flavoring presence in a decaying conversation — and be light — doing visible good that points people to your Father, not to yourself.',
    reflection: [
      'Which beatitude is hardest for you to believe is truly "blessed"?',
      'Where is God calling you to be salt and light this week — specifically?',
      'How does "poor in spirit" challenge the self-sufficiency our culture celebrates?',
    ],
    quiz: [
      {
        id: 'mt5-q1',
        type: 'mc',
        prompt: 'Who does Jesus say will "inherit the earth"?',
        choices: ['The strong', 'The meek', 'The wealthy', 'The educated'],
        answer: 'The meek',
        explanation: 'Matthew 5:5 — "Blessed are the meek, for they shall inherit the earth," echoing Psalm 37:11.',
        tags: ['matthew', 'beatitudes'],
      },
      {
        id: 'mt5-q2',
        type: 'tf',
        prompt: 'Jesus taught that His followers should hide their good works so no one ever sees them.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: '"Let your light shine before others, so that they may see your good works and give glory to your Father" (Matt. 5:16). Visibility serves God\'s glory, not ours.',
        tags: ['matthew', 'discipleship'],
      },
      {
        id: 'mt5-q3',
        type: 'mc',
        prompt: 'What two metaphors does Jesus use for His disciples\' role in the world?',
        choices: ['Sheep and shepherds', 'Salt and light', 'Vines and branches', 'Wheat and tares'],
        answer: 'Salt and light',
        explanation: 'Matthew 5:13–14 — salt preserves and flavors; light illuminates. Both describe essential, active influence.',
        tags: ['matthew', 'discipleship'],
      },
      {
        id: 'mt5-q4',
        type: 'fill',
        prompt: '"Blessed are the pure in heart, for they shall _____ God."',
        answer: 'see',
        explanation: 'Matthew 5:8 — purity of heart brings the vision of God, now by faith and one day face to face.',
        tags: ['matthew', 'beatitudes'],
      },
    ],
    prayer:
      'Lord Jesus, make me poor in spirit, gentle, hungry for righteousness, merciful, and pure in heart. Make me salt that preserves and light that shines — not for my glory but for my Father\'s. Teach me the blessedness of Your upside-down kingdom. Amen.',
  },
  'matthew-28': {
    bookId: 'matthew',
    chapter: 28,
    title: 'The Resurrection and the Great Commission',
    summary:
      'On the first Easter morning, the angel announces to the women: "He is not here, for he has risen." The risen Jesus meets His disciples in Galilee and gives the Great Commission: "Go therefore and make disciples of all nations... And behold, I am with you always, to the end of the age."',
    understand:
      'Matthew 28 is the hinge of history. The chapter opens with an earthquake, a dazzling angel, and terrified guards — and the most important sentence ever spoken: "He is not here, for he has risen, as he said." The resurrection vindicates everything Jesus claimed and promised. The women, first witnesses, run with "fear and great joy" — the fitting mixture for Easter morning.\n\nThe religious leaders\' response is telling: rather than investigate, they bribe the soldiers to lie. Unbelief is rarely a lack of evidence; it is a refusal to bow. Meanwhile the eleven go to Galilee, where Jesus gives the Great Commission — the church\'s marching orders for 2,000 years.\n\nThe Commission rests on Christ\'s authority ("All authority in heaven and on earth has been given to me"), commands disciple-making among "all nations" through going, baptizing, and teaching obedience, and closes with Christ\'s presence ("I am with you always"). Authority, mission, presence: the church never goes alone, never goes aimlessly, and never goes unauthorized.',
    context:
      'Matthew wrote for Jewish readers, and his resurrection account is carefully evidenced: the guarded tomb, the official seal, the bribed soldiers, the named women witnesses (in a culture where women\'s testimony was discounted — an unlikely invention), and the appearances in Galilee. The Great Commission\'s "all nations" fulfills the Abrahamic promise (Gen. 12:3) and Isaiah\'s vision of the nations streaming to God.\n\n"Make disciples" is the single imperative; "go," "baptizing," and "teaching" describe how. Baptism in the triune name initiates converts into the church; teaching them "to observe all that I have commanded" makes discipleship a lifelong apprenticeship, not a one-time decision.',
    people: ['Jesus (risen)', 'Mary Magdalene', 'The other Mary', 'The angel', 'The eleven disciples', 'The guards', 'The chief priests'],
    words: [
      {
        term: 'Great Commission',
        definition:
          'Christ\'s command in Matthew 28:18–20 to make disciples of all nations — the church\'s central mission until His return.',
      },
      {
        term: 'Disciple',
        transliteration: 'mathetes',
        definition:
          'A learner-apprentice — one who follows Jesus, is baptized into His name, and learns to obey all He commanded.',
      },
    ],
    themes: ['The resurrection', 'Christ\'s authority', 'The mission of the church', 'Christ\'s presence', 'Discipleship'],
    crossRefs: [
      { ref: '1 Corinthians 15:3–8', note: 'Paul\'s summary of the resurrection appearances and witnesses.' },
      { ref: 'Acts 1:8', note: 'The Commission\'s companion: witnesses "to the end of the earth."' },
      { ref: 'Romans 1:4', note: 'Jesus "declared to be the Son of God... by his resurrection from the dead."' },
      { ref: 'Genesis 12:3', note: 'The promise now fulfilled: blessing to "all the families of the earth."' },
    ],
    application:
      'The Great Commission is not only for missionaries — it\'s for every disciple. "Go" might mean across the street before it means across the sea. Who is one person you can invest in — praying for them, sharing Christ, teaching them to obey? And take courage: the One who sends you has all authority and promises His presence to the end of the age.',
    reflection: [
      'How does the resurrection change the way you face your own fears and "tombs"?',
      'Who is your "one" — the person God is calling you to disciple?',
      'What does Christ\'s promise "I am with you always" mean for a task that feels too big for you?',
    ],
    quiz: [
      {
        id: 'mt28-q1',
        type: 'mc',
        prompt: 'What were the angel\'s first words about Jesus at the tomb?',
        choices: [
          '"He is not here, for he has risen, as he said."',
          '"Touch him and see."',
          '"Peace be with you."',
          '"Do not be afraid; go in peace."',
        ],
        answer: '"He is not here, for he has risen, as he said."',
        explanation: 'Matthew 28:6 — the resurrection was exactly "as he said," fulfilling His repeated predictions.',
        tags: ['matthew', 'resurrection'],
      },
      {
        id: 'mt28-q2',
        type: 'tf',
        prompt: 'The Great Commission commands Christians to make disciples of all nations.',
        choices: ['True', 'False'],
        answer: 'True',
        explanation: 'Matthew 28:19 — "make disciples of all nations" is the central command, fulfilled through going, baptizing, and teaching.',
        tags: ['matthew', 'mission'],
      },
      {
        id: 'mt28-q3',
        type: 'mc',
        prompt: 'On what basis does Jesus give the Great Commission?',
        choices: [
          'The disciples\' proven courage',
          'All authority in heaven and on earth given to Him',
          'The wealth of the church',
          'The fall of Rome',
        ],
        answer: 'All authority in heaven and on earth given to Him',
        explanation: 'Matthew 28:18 — the risen Christ\'s universal authority is the ground of the church\'s universal mission.',
        tags: ['matthew', 'mission', 'authority'],
      },
      {
        id: 'mt28-q4',
        type: 'fill',
        prompt: 'Jesus promised: "Behold, I am with you _____, to the end of the age."',
        answer: 'always',
        explanation: 'Matthew 28:20 — the Commission closes with the promise of Christ\'s continual presence.',
        tags: ['matthew', 'mission', 'presence'],
      },
    ],
    prayer:
      'Risen Lord, all authority is Yours — so I will go. Give me courage to share You, wisdom to teach others to obey, and confidence in Your promise: You are with me always, to the end of the age. Amen.',
  },
  'luke-10': {
    bookId: 'luke',
    chapter: 10,
    title: 'The Good Samaritan',
    summary:
      'Jesus sends out seventy-two disciples, then answers a lawyer\'s question — "Who is my neighbor?" — with the parable of the Good Samaritan: a despised outsider who shows mercy when the religious pass by. "Go, and do likewise." The chapter closes with Mary and Martha.',
    understand:
      'The chapter opens with mission: Jesus sends seventy-two ahead of Him with authority, joy, and warnings — "the harvest is plentiful, but the laborers are few." Their return rejoicing ("even the demons are subject to us!") prompts Jesus\' deeper joy: "rejoice that your names are written in heaven." Power is exciting; salvation is better.\n\nThen a lawyer asks, "What shall I do to inherit eternal life?" — and, pressed, "Who is my neighbor?" He wants to limit his obligation. Jesus\' parable demolishes the limit. A man is beaten and left half-dead; a priest and a Levite — the religious professionals — pass by on the other side. Then a Samaritan, a member of a despised group, stops: he bandages wounds, pays for the inn, and promises to return. The question is reversed: it\'s not "who is my neighbor?" but "to whom will I be a neighbor?"\n\nThe chapter ends in a home in Bethany: Martha, distracted with serving, complains about Mary sitting at Jesus\' feet. Jesus gently corrects: "one thing is necessary." Service is good, but sitting with Jesus comes first — the same priority the seventy-two needed, and the Samaritan lived.',
    context:
      'Jews and Samaritans despised each other (John 4:9). Samaritans were of mixed ancestry with their own temple on Mount Gerizim; to a Jewish lawyer, making a Samaritan the hero was deliberately offensive — and deliberately instructive. The road from Jerusalem to Jericho was notoriously dangerous, a 17-mile descent through robber-haunted ravines.\n\nThe lawyer\'s first question ("what shall I do?") reveals a works-mindset; Jesus answers with the Law (love God, love neighbor) to expose need, then the parable to expose the heart. Eternal life is inherited, not earned — received through the mercy the Samaritan pictures.',
    people: ['Jesus', 'The seventy-two', 'The lawyer', 'The Good Samaritan', 'The priest', 'The Levite', 'Mary', 'Martha'],
    words: [
      {
        term: 'Neighbor',
        transliteration: 'plesion',
        definition:
          'One who is near — but Jesus redefines it: not the one near you, but the one to whom you draw near in mercy.',
      },
      {
        term: 'Samaritan',
        definition:
          'A member of the mixed-race people of Samaria, despised by Jews — Jesus\' shocking choice of hero to teach mercy without boundaries.',
      },
    ],
    themes: ['Mercy', 'Love of neighbor', 'Mission', 'Compassion in action', 'Priorities: sitting before serving'],
    crossRefs: [
      { ref: 'Luke 10:25–28', note: 'The great commandment: love God and love your neighbor.' },
      { ref: 'Matthew 22:39', note: '"You shall love your neighbor as yourself."' },
      { ref: 'James 2:15–16', note: 'Faith without works of mercy is dead.' },
      { ref: '1 John 3:17–18', note: 'Love "not in word or talk but in deed and in truth."' },
    ],
    application:
      'Don\'t ask "who is my neighbor?" to limit your mercy — ask "to whom can I be a neighbor?" this week. Notice the people you\'re tempted to pass by: the inconvenient, the difficult, the ones who can\'t repay. Stop, bandage, pay the cost. And like Mary, guard your time at Jesus\' feet — mercy flows from presence.',
    reflection: [
      'Who are you most tempted to "pass by on the other side"? Why?',
      'What would it cost you — time, money, reputation — to be a Good Samaritan this week?',
      'Are you more like Martha (distracted serving) or Mary (sitting with Jesus) right now?',
    ],
    quiz: [
      {
        id: 'lk10-q1',
        type: 'mc',
        prompt: 'In the parable, who stopped to help the wounded man?',
        choices: ['A priest', 'A Levite', 'A Samaritan', 'A Roman soldier'],
        answer: 'A Samaritan',
        explanation: 'Luke 10:33 — the despised outsider showed mercy while the religious professionals passed by.',
        tags: ['luke', 'good-samaritan', 'mercy'],
      },
      {
        id: 'lk10-q2',
        type: 'tf',
        prompt: 'Jesus said the greatest joy of the seventy-two was that demons were subject to them.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: 'Jesus redirected them: "rejoice that your names are written in heaven" (Luke 10:20). Salvation outranks spiritual power.',
        tags: ['luke', 'mission'],
      },
      {
        id: 'lk10-q3',
        type: 'mc',
        prompt: 'What did Jesus say was "necessary" when correcting Martha?',
        choices: ['More efficient serving', 'One thing: sitting at His feet like Mary', 'Sending Mary to help', 'A bigger house'],
        answer: 'One thing: sitting at His feet like Mary',
        explanation: 'Luke 10:42 — "one thing is necessary. Mary has chosen the good portion." Presence before service.',
        tags: ['luke', 'mary-martha', 'priorities'],
      },
      {
        id: 'lk10-q4',
        type: 'fill',
        prompt: 'Jesus\' final word to the lawyer was: "Go, and do _____."',
        answer: 'likewise',
        explanation: 'Luke 10:37 — "Go, and do likewise": be the neighbor who shows mercy.',
        tags: ['luke', 'good-samaritan'],
      },
    ],
    prayer:
      'Lord Jesus, Good Samaritan of my soul, You found me beaten and left for dead, and You paid for my healing. Make me merciful as You are merciful. Show me my neighbor today — and keep me at Your feet first. Amen.',
  },
  'luke-15': {
    bookId: 'luke',
    chapter: 15,
    title: 'The Lost Sheep, the Lost Coin, and the Lost Son',
    summary:
      'Jesus tells three parables of the lost: a shepherd seeks one sheep, a woman sweeps for one coin, and a father runs to welcome a rebellious son home. "There is joy before the angels of God over one sinner who repents."',
    understand:
      'The Pharisees grumbled, "This man receives sinners and eats with them" — and Jesus answered with three stories. Each follows the same pattern: something lost, a diligent search, joyful recovery, and a celebration. The shepherd leaves ninety-nine for one sheep; the woman lights a lamp and sweeps for one coin; the father watches the road for his son. Heaven, Jesus says, throws a party over one repentant sinner.\n\nThe third parable — the Prodigal Son — is the crown. The younger son demands his inheritance (effectively wishing his father dead), squanders it in "reckless living," and ends in a pigpen. "He came to himself" — repentance begins with clear sight — and rehearses a confession. But the father, seeing him "a long way off," runs, embraces, and robes him: no probation, no lecture, just restoration. The robe, ring, and sandals declare him son, not servant.\n\nThen the twist: the older brother, who never left, refuses to come in. He has obeyed without loving, served without joy, and resents grace given to another. The parable ends unresolved — with the father pleading at the door. The question hangs over every Pharisee, and every one of us: will you come in to the feast?',
    context:
      'Jesus told these parables to defend His table fellowship with "tax collectors and sinners" — the very people the religious elite shunned. In first-century Judaism, eating with someone meant accepting them; the Pharisees saw Jesus\' open table as scandalous compromise. Jesus saw it as the mission.\n\nThe father\'s running was culturally shocking: dignified Middle Eastern patriarchs did not run — it meant hiking up robes and exposing legs, incurring shame. The father takes the son\'s shame on himself. Every detail preaches the gospel: God absorbs our disgrace to restore us.',
    people: ['Jesus', 'The Pharisees and scribes', 'The shepherd', 'The woman', 'The father', 'The younger (prodigal) son', 'The older brother'],
    words: [
      {
        term: 'Prodigal',
        definition:
          'Recklessly wasteful — describing the younger son who squandered his inheritance. (The father is the truly "prodigal" one — recklessly lavish in grace.)',
      },
      {
        term: 'Repent',
        transliteration: 'metanoeo',
        definition:
          'To change one\'s mind and turn around — pictured in the son\'s journey from the pigpen to the father\'s embrace.',
      },
    ],
    themes: ['God\'s seeking love', 'Repentance', 'Grace', 'Joy in heaven', 'The danger of self-righteousness'],
    crossRefs: [
      { ref: 'Luke 19:10', note: '"The Son of Man came to seek and to save the lost" — the chapter\'s thesis.' },
      { ref: 'Ezekiel 34:16', note: 'God promises: "I will seek the lost, and I will bring back the strayed."' },
      { ref: 'Romans 5:8', note: 'While we were sinners, Christ died for us — the father running, in gospel form.' },
      { ref: '1 John 1:9', note: 'Confession meets the father\'s embrace: forgiveness and cleansing.' },
    ],
    application:
      'Which son are you? If you\'re in the far country, come to yourself and come home — the Father is already watching the road, and He will run. If you\'re the older brother — obedient but joyless, keeping score — hear the Father pleading: come in to the feast. Grace is not a wage; it\'s a gift, and gifts can\'t be earned or envied.',
    reflection: [
      'What keeps you in the "far country" — or what would it take for you to come home?',
      'Do you ever feel like the older brother toward people God welcomes? What does the father\'s plea say to you?',
      'How does the father\'s running reshape your picture of God?',
    ],
    quiz: [
      {
        id: 'lk15-q1',
        type: 'mc',
        prompt: 'What did the father do when he saw his returning son far off?',
        choices: ['He waited sternly at the door', 'He ran, embraced, and kissed him', 'He sent a servant to lecture him', 'He made him work off his debt first'],
        answer: 'He ran, embraced, and kissed him',
        explanation: 'Luke 15:20 — the father\'s undignified, joyful run pictures God\'s eager grace toward repentant sinners.',
        tags: ['luke', 'prodigal-son', 'grace'],
      },
      {
        id: 'lk15-q2',
        type: 'tf',
        prompt: 'The older brother joyfully joined the celebration for his returned brother.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: 'He was angry and refused to go in (Luke 15:28) — a portrait of self-righteous resentment of grace.',
        tags: ['luke', 'prodigal-son'],
      },
      {
        id: 'lk15-q3',
        type: 'mc',
        prompt: 'What causes joy in heaven, according to Luke 15?',
        choices: ['The obedience of the righteous', 'One sinner who repents', 'The building of temples', 'The punishment of the wicked'],
        answer: 'One sinner who repents',
        explanation: 'Luke 15:7, 10 — "there is joy before the angels of God over one sinner who repents."',
        tags: ['luke', 'repentance', 'joy'],
      },
      {
        id: 'lk15-q4',
        type: 'fill',
        prompt: 'The younger son "came to _____" in the pigpen — the beginning of repentance.',
        answer: 'himself',
        explanation: 'Luke 15:17 — repentance starts with seeing clearly: his need, his father\'s goodness, and the way home.',
        tags: ['luke', 'prodigal-son', 'repentance'],
      },
    ],
    prayer:
      'Father, I have wandered like the younger son and judged like the older. Thank You for running to meet me, for robes instead of rags, for a feast instead of a trial. Teach my heart to celebrate every sinner who comes home — starting with me. Amen.',
  },
  'john-1': {
    bookId: 'john',
    chapter: 1,
    title: 'The Word Became Flesh',
    summary:
      'John\'s majestic prologue declares Jesus the eternal Word — God Himself — through whom all things were made, who became flesh and dwelt among us. John the Baptist testifies, disciples are called, and Nathanael confesses, "You are the Son of God!"',
    understand:
      'John opens not in Bethlehem but in eternity: "In the beginning was the Word, and the Word was with God, and the Word was God." The Greek Logos — divine reason, God\'s self-expression — echoes Genesis 1:1 ("In the beginning, God..."). John claims that the creating Word, the eternal God, became flesh: "and dwelt among us" (literally "tabernacled" — pitching God\'s tent in our midst, as in the wilderness).\n\nThe prologue holds glory and grace together: "we have seen his glory, glory as of the only Son from the Father, full of grace and truth." Light shines in darkness; darkness cannot overcome it. To all who receive Him, He gives "the right to become children of God" — not by blood or willpower but by being "born of God."\n\nThe rest of the chapter introduces the witnesses: John the Baptist ("Behold, the Lamb of God, who takes away the sin of the world!"), then the first disciples — Andrew, Peter, Philip, Nathanael. Each encounter is personal: "Come and see," "We have found the Messiah." The chapter ends with Jesus\' promise to Nathanael of heaven opened — the Son of Man as the ladder between God and humanity.',
    context:
      'John wrote decades after the other Gospels (c. AD 85–95), to a church facing false teaching that denied Christ\'s full deity or full humanity. His prologue answers both errors at once: the Word was God (fully divine) and became flesh (fully human). "Logos" also spoke to Greek philosophers who used the term for the universe\'s rational principle — John announces that the universe\'s Logic has a face.\n\nJohn the Baptist\'s title "Lamb of God" would have evoked the Passover lamb and Isaiah\'s suffering Servant — a stunning first sermon: the Messiah comes not first as conquering king but as sacrifice.',
    people: ['Jesus (the Word)', 'John the Baptist', 'Andrew', 'Peter', 'Philip', 'Nathanael'],
    words: [
      {
        term: 'Logos',
        transliteration: 'logos',
        definition:
          'Greek for "Word" — God\'s eternal self-expression and reason. John identifies Jesus as the divine Logos through whom all things were made.',
      },
      {
        term: 'Dwelt',
        transliteration: 'skenoo',
        definition:
          'Literally "tabernacled" or "pitched His tent" — the Word dwelling among us as God\'s presence dwelt in the tabernacle.',
      },
      {
        term: 'Grace',
        transliteration: 'charis',
        definition:
          'God\'s unmerited favor — "grace upon grace" (v. 16): wave after wave of gift in Christ, replacing the law given through Moses.',
      },
    ],
    themes: ['The deity of Christ', 'The incarnation', 'Light vs. darkness', 'Grace and truth', 'Witness'],
    crossRefs: [
      { ref: 'Genesis 1:1–3', note: '"In the beginning" — the Word who spoke creation into being.' },
      { ref: 'Colossians 1:15–17', note: 'Christ, the image of the invisible God, creator of all.' },
      { ref: '1 John 1:1–2', note: 'John\'s epistle opens with the same eyewitness claim: the Word of life.' },
      { ref: 'Philippians 2:6–7', note: 'Christ, in the form of God, took the form of a servant.' },
    ],
    application:
      'Christianity is not advice about climbing to God; it\'s news that God came down — tabernacled — among us. When God feels distant, remember: distance was His problem to solve, and He solved it in Bethlehem. Receive Him today — not by pedigree or performance, but by faith — and take your place as a child of God. Then, like Andrew, go find someone and say, "We have found the Messiah. Come and see."',
    reflection: [
      'What difference does it make that Jesus is fully God and fully man — not one or the other?',
      '"The light shines in the darkness, and the darkness has not overcome it." Where do you need that promise?',
      'Who in your life needs to hear your "come and see"?',
    ],
    quiz: [
      {
        id: 'jn1-q1',
        type: 'mc',
        prompt: 'According to John 1:1, the Word was...',
        choices: ['A created angel', 'With God, and was God', 'A great prophet', 'A symbol of wisdom'],
        answer: 'With God, and was God',
        explanation: 'John 1:1 declares both the Word\'s distinction from the Father ("with God") and full deity ("was God").',
        tags: ['john', 'deity-of-christ'],
      },
      {
        id: 'jn1-q2',
        type: 'tf',
        prompt: '"The Word became flesh" means Jesus only appeared to be human.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: 'John 1:14 teaches the true incarnation: the eternal Word became genuinely, fully human.',
        tags: ['john', 'incarnation'],
      },
      {
        id: 'jn1-q3',
        type: 'mc',
        prompt: 'What did John the Baptist call Jesus?',
        choices: ['The Lion of Judah', 'The Lamb of God', 'The Good Shepherd', 'The True Vine'],
        answer: 'The Lamb of God',
        explanation: '"Behold, the Lamb of God, who takes away the sin of the world!" (John 1:29) — the sacrifice before the King.',
        tags: ['john', 'john-the-baptist'],
      },
      {
        id: 'jn1-q4',
        type: 'fill',
        prompt: '"And the Word became _____ and dwelt among us."',
        answer: 'flesh',
        explanation: 'John 1:14 — the heart of the incarnation: eternal God truly became man.',
        tags: ['john', 'incarnation'],
      },
    ],
    prayer:
      'Eternal Word, You were with God and You were God — and You became flesh for me. Thank You for tabernacling among us, full of grace and truth. I receive You; make me Your child. Let Your light shine through my darkness. Amen.',
  },
  'john-3': {
    bookId: 'john',
    chapter: 3,
    title: 'Born Again: Jesus and Nicodemus',
    summary:
      'Nicodemus, a Pharisee, comes to Jesus by night. Jesus tells him he must be born again to see God\'s kingdom. The conversation leads to the most famous verse in the Bible: "For God so loved the world, that he gave his only Son..." (John 3:16).',
    understand:
      'Nicodemus had everything religion could offer: a Pharisee, a ruler of the Jews, a teacher of Israel, morally rigorous. He comes "by night" — perhaps from fear, perhaps for uninterrupted conversation — and opens with respect: "Rabbi, we know you are a teacher come from God." Jesus cuts to the heart: "Unless one is born again he cannot see the kingdom of God."\n\nNicodemus is baffled — how can an old man re-enter the womb? Jesus explains: the new birth is spiritual, "of water and the Spirit," like the wind — invisible, mysterious, sovereign, undeniable in its effects. Flesh produces flesh; only the Spirit produces spiritual life. Religion can reform behavior; only God can regenerate the heart.\n\nThen comes John 3:16, the gospel in a sentence: God\'s love (the motive), the world (the scope — rebels, not the deserving), the gift of His Son (the cost), belief (the means), and eternal life (the result). Verse 17 adds the mission\'s heart: God sent His Son not to condemn the world but to save it. The chapter ends with John the Baptist\'s joyful humility: "He must increase, but I must decrease."',
    context:
      'As a "ruler of the Jews" (a Sanhedrin member) and "the teacher of Israel," Nicodemus represented Judaism\'s best. If anyone could enter the kingdom by credentials, it was he — which is precisely why Jesus\' demand of new birth is so radical. Being "born of water and the Spirit" likely echoes Ezekiel 36:25–27\'s promise of cleansing and a new spirit.\n\nJohn 3:16 sits in a Gospel written "so that you may believe" (John 20:31). The verse\'s "world" (kosmos) is striking: God loves not a sanitized world but the rebellious one. Nicodemus reappears in John 7:50 (defending Jesus) and 19:39 (burying Him) — suggesting the night visitor eventually came into the light.',
    people: ['Jesus', 'Nicodemus', 'John the Baptist'],
    words: [
      {
        term: 'Born again',
        transliteration: 'gennethe anothen',
        definition:
          'Literally "born from above" — the spiritual regeneration by the Holy Spirit required to enter God\'s kingdom. Not self-improvement but new creation.',
      },
      {
        term: 'Believe',
        transliteration: 'pisteuo',
        definition:
          'John\'s favorite verb (used ~98 times): trusting, relying on Christ — not mere intellectual assent but personal entrustment.',
      },
    ],
    themes: ['The new birth', 'God\'s love', 'Faith', 'The Spirit\'s work', 'Humility ("He must increase")'],
    crossRefs: [
      { ref: 'Ezekiel 36:26–27', note: 'The promise of a new heart and God\'s Spirit — the Old Testament background.' },
      { ref: 'Titus 3:5', note: 'God saved us "by the washing of regeneration and renewal of the Holy Spirit."' },
      { ref: '2 Corinthians 5:17', note: 'If anyone is in Christ, he is a new creation.' },
      { ref: 'John 20:31', note: 'John\'s purpose: "that you may believe that Jesus is the Christ... and have life."' },
    ],
    application:
      'You cannot renovate your way into God\'s kingdom — you must be reborn. If you\'ve been trusting in your religious résumé, hear Jesus\' gentle verdict: it\'s not enough, but grace is. Come to Him in the "night" of your need, believe in the lifted-up Son (John 3:14–15), and receive eternal life. And like John the Baptist, make it your joy for Christ to increase as you decrease.',
    reflection: [
      'Are you trusting in being "born again" or in being "good enough"? What\'s the difference in your daily life?',
      'What does John 3:16 mean when it says God loved "the world" — including people you find hard to love?',
      'Where do you need to say, "He must increase, but I must decrease"?',
    ],
    quiz: [
      {
        id: 'jn3-q1',
        type: 'mc',
        prompt: 'What did Jesus say is necessary to see the kingdom of God?',
        choices: ['Keeping the Law perfectly', 'Being born again', 'Becoming a Pharisee', 'Performing miracles'],
        answer: 'Being born again',
        explanation: 'John 3:3, 5 — "unless one is born again he cannot see the kingdom of God." Spiritual rebirth, not religious credentials.',
        tags: ['john', 'new-birth'],
      },
      {
        id: 'jn3-q2',
        type: 'tf',
        prompt: 'John 3:16 says God sent His Son to condemn the world.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: 'John 3:17: "God did not send his Son into the world to condemn the world, but in order that the world might be saved through him."',
        tags: ['john', 'gospel'],
      },
      {
        id: 'jn3-q3',
        type: 'mc',
        prompt: 'To what did Jesus compare the work of the Spirit in the new birth?',
        choices: ['Fire', 'The wind', 'Water', 'A seed'],
        answer: 'The wind',
        explanation: 'John 3:8 — "The wind blows where it wishes... so it is with everyone who is born of the Spirit." Mysterious, sovereign, evident in effect.',
        tags: ['john', 'holy-spirit'],
      },
      {
        id: 'jn3-q4',
        type: 'fill',
        prompt: 'John the Baptist said of Jesus: "He must _____, but I must decrease."',
        answer: 'increase',
        explanation: 'John 3:30 — the joyful humility of the forerunner: Christ at the center, self at the edge.',
        tags: ['john', 'humility'],
      },
    ],
    prayer:
      'Lord Jesus, I cannot birth myself into Your kingdom — so I come to be born from above. Thank You for loving the world, for giving Yourself, for promising eternal life to all who believe. I believe. Increase in my life; I gladly decrease. Amen.',
  },
  'john-11': {
    bookId: 'john',
    chapter: 11,
    title: 'The Raising of Lazarus',
    summary:
      'When Lazarus of Bethany dies, Jesus delays, then comes and weeps with the sisters before calling Lazarus from the tomb: "Lazarus, come out." The seventh sign reveals Jesus as "the resurrection and the life" — and seals the plot to kill Him.',
    understand:
      'John 11 is the climactic sign of Jesus\' ministry — His greatest miracle and the direct trigger of His death. When Jesus hears Lazarus is ill, He stays two more days, telling the disciples, "This illness... is for the glory of God." God\'s delays are not God\'s denials; the four-day-dead Lazarus will display more glory than a healed one.\n\nThe chapter\'s emotional center is stunning: Jesus, knowing He will raise Lazarus in minutes, still weeps at the tomb. "Jesus wept" — the shortest verse, the deepest comfort. He is not weeping from helplessness but from love: He enters our grief even when He plans our deliverance. Martha\'s confession — "I believe that you are the Christ, the Son of God" — is John\'s purpose statement in a single voice.\n\nThen the command that previews Easter: "Lazarus, come out." The dead man emerges bound in graveclothes, and Jesus says, "Unbind him, and let him go" — a picture of every believer\'s liberation. The result is division: many believe, but the religious leaders resolve to kill Jesus. The Resurrection and the Life must die to give life.',
    context:
      'Bethany was two miles from Jerusalem; Lazarus had been dead four days — beyond the Jewish belief that the soul hovered three days — so no one could claim he merely swooned. Martha\'s and Mary\'s identical words ("Lord, if you had been here...") express both faith and reproach; Jesus answers Martha with theology ("I am the resurrection") and Mary with tears.\n\nThis seventh sign fulfills Jesus\' claim in John 5:25: "an hour is coming when the dead will hear the voice of the Son of God." Caiaphas\' cynical prophecy — "it is better that one man should die for the people" (v. 50) — unwittingly preaches substitutionary atonement.',
    people: ['Jesus', 'Lazarus', 'Martha', 'Mary', 'The disciples', 'Caiaphas'],
    words: [
      {
        term: 'Resurrection',
        transliteration: 'anastasis',
        definition:
          'Rising from the dead — Jesus doesn\'t merely give resurrection; He IS it: "I am the resurrection and the life."',
      },
      {
        term: 'Glory',
        transliteration: 'doxa',
        definition:
          'God\'s revealed majesty — the purpose of Lazarus\'s illness and death: "for the glory of God, so that the Son of God may be glorified."',
      },
    ],
    themes: ['Jesus\' power over death', 'The resurrection and the life', 'Grief and comfort', 'Faith', 'God\'s timing'],
    crossRefs: [
      { ref: 'John 5:25', note: 'The dead will hear the voice of the Son of God and live.' },
      { ref: '1 Thessalonians 4:14', note: 'God will bring with Jesus those who have fallen asleep.' },
      { ref: 'Hebrews 2:14–15', note: 'Christ destroyed the devil\'s power of death and freed its slaves.' },
      { ref: 'John 20:31', note: 'These signs are written "so that you may believe."' },
    ],
    application:
      'Bring your grief to Jesus honestly — "Lord, if you had been here" is a prayer He welcomes. Trust His timing when He delays; His delays serve greater glory. And hear His voice today: whatever is dead in your life — hope, a relationship, a dream — the Resurrection and the Life still calls dead things out of tombs. Believe, and watch.',
    reflection: [
      'Where are you waiting on God\'s "delay"? How does this chapter reframe it?',
      'What does it mean to you that Jesus wept even knowing the outcome?',
      'What "graveclothes" — old patterns, old shame — is Jesus telling others to help unbind from you?',
    ],
    quiz: [
      {
        id: 'jn11-q1',
        type: 'mc',
        prompt: 'What did Jesus declare to Martha before raising Lazarus?',
        choices: [
          '"I am the resurrection and the life."',
          '"I am the bread of life."',
          '"I am the good shepherd."',
          '"I am the true vine."',
        ],
        answer: '"I am the resurrection and the life."',
        explanation: 'John 11:25 — the fifth "I am" saying, proven moments later at the tomb.',
        tags: ['john', 'i-am', 'resurrection'],
      },
      {
        id: 'jn11-q2',
        type: 'tf',
        prompt: 'Jesus wept at Lazarus\'s tomb even though He knew He would raise him.',
        choices: ['True', 'False'],
        answer: 'True',
        explanation: 'John 11:35 — "Jesus wept." He enters our grief with genuine compassion, even with resurrection planned.',
        tags: ['john', 'compassion'],
      },
      {
        id: 'jn11-q3',
        type: 'mc',
        prompt: 'How long had Lazarus been dead when Jesus arrived?',
        choices: ['One day', 'Two days', 'Four days', 'Seven days'],
        answer: 'Four days',
        explanation: 'John 11:17, 39 — four days dead, eliminating any doubt about the miracle\'s magnitude.',
        tags: ['john', 'miracles'],
      },
      {
        id: 'jn11-q4',
        type: 'fill',
        prompt: 'Jesus cried with a loud voice, "Lazarus, come _____."',
        answer: 'out',
        explanation: 'John 11:43 — the authoritative call of the Resurrection and the Life, previewing His own Easter triumph.',
        tags: ['john', 'resurrection'],
      },
    ],
    prayer:
      'Lord Jesus, Resurrection and Life, thank You for weeping with me in my grief and for holding power over my tombs. I believe You are the Christ, the Son of God. Call forth what is dead in my life, and unbind me to walk free. Amen.',
  },
  'john-14': {
    bookId: 'john',
    chapter: 14,
    title: 'The Way, the Truth, and the Life',
    summary:
      'On the night before the cross, Jesus comforts His troubled disciples: He is going to prepare a place for them, He is the only way to the Father, and He will send the Holy Spirit — "another Helper" — to be with them forever. "Peace I leave with you."',
    understand:
      'The farewell discourses (John 13–17) are Jesus\' parting words, spoken hours before His arrest. He begins with comfort: "Let not your hearts be troubled." The disciples are losing His physical presence; He promises something better — a prepared place ("In my Father\'s house are many rooms"), His return, and their eternal dwelling with Him. Christian hope is not vague; it is a address prepared by Christ Himself.\n\nThomas\'s question — "we do not know where you are going; how can we know the way?" — draws Jesus\' most exclusive claim: "I am the way, and the truth, and the life. No one comes to the Father except through me." Not a way among many, but the Way. Christianity\'s exclusivity is not arrogance but the logic of the incarnation: if God came in person, the person is the path.\n\nJesus then promises the Holy Spirit — "another Helper" (one like Himself), the Spirit of truth, who will dwell in believers forever, teach them, and remind them of Christ\'s words. He closes with His legacy gift: "Peace I leave with you; my peace I give to you" — not the world\'s fragile peace, but His own, given on the eve of the cross.',
    context:
      'This discourse unfolds in the upper room after Judas\'s departure, during the Last Supper. The disciples are confused and frightened: Jesus has predicted betrayal, Peter\'s denial, and His own departure. Every promise in the chapter answers their fear — troubled hearts meet a prepared place, an unknown way meets the Way Himself, coming abandonment meets the indwelling Spirit.\n\n"The Father\'s house" with "many rooms" pictures the eternal dwelling — some see temple imagery (God\'s house), others a wedding image (the bridegroom preparing rooms). Either way, the point is personal: Jesus goes to prepare a place for His own, and He will return for them.',
    people: ['Jesus', 'Thomas', 'Philip', 'Judas (not Iscariot)', 'The disciples'],
    words: [
      {
        term: 'Helper',
        transliteration: 'parakletos',
        definition:
          'Greek for "one called alongside" — advocate, comforter, counselor. Jesus promises "another Helper": the Holy Spirit, continuing His own ministry in believers.',
      },
      {
        term: 'Peace',
        transliteration: 'eirene',
        definition:
          'Christ\'s own peace (the Hebrew shalom: wholeness, well-being) — given as His legacy, "not as the world gives."',
      },
    ],
    themes: ['Christ the only way', 'Heavenly hope', 'The Holy Spirit', 'Peace', 'Abiding'],
    crossRefs: [
      { ref: 'John 10:9', note: 'Jesus the door: "If anyone enters by me, he will be saved."' },
      { ref: 'Acts 4:12', note: '"There is salvation in no one else" — the apostles\' echo of John 14:6.' },
      { ref: '1 Timothy 2:5', note: '"One mediator between God and men, the man Christ Jesus."' },
      { ref: 'Revelation 21:2–3', note: 'The prepared place fulfilled: God dwelling with His people.' },
    ],
    application:
      'When your heart is troubled — and Jesus expects it will be — preach John 14 to yourself: a prepared place, a personal Way, a present Helper, a promised peace. Cling to Christ exclusively and unapologetically; He is not one option but the Way. And welcome the Spirit\'s ministry: He teaches, reminds, and keeps you company forever.',
    reflection: [
      'What is troubling your heart right now? Which promise of John 14 speaks most directly to it?',
      'How do you graciously but firmly hold to Christ as the only way in a pluralistic world?',
      'In what ways have you experienced the Holy Spirit as Helper — teaching, reminding, comforting?',
    ],
    quiz: [
      {
        id: 'jn14-q1',
        type: 'mc',
        prompt: 'What did Jesus call Himself in John 14:6?',
        choices: [
          'A way among many',
          'The way, and the truth, and the life',
          'The teacher of the way',
          'The gate of the sheep only',
        ],
        answer: 'The way, and the truth, and the life',
        explanation: 'John 14:6 — "No one comes to the Father except through me." Exclusive, personal, definitive.',
        tags: ['john', 'i-am', 'salvation'],
      },
      {
        id: 'jn14-q2',
        type: 'tf',
        prompt: 'Jesus promised the Holy Spirit would be with believers forever.',
        choices: ['True', 'False'],
        answer: 'True',
        explanation: 'John 14:16 — "another Helper, to be with you forever." The Spirit\'s indwelling is permanent.',
        tags: ['john', 'holy-spirit'],
      },
      {
        id: 'jn14-q3',
        type: 'mc',
        prompt: 'What "legacy gift" did Jesus leave His disciples in John 14:27?',
        choices: ['Wealth', 'His peace', 'Political power', 'A written will'],
        answer: 'His peace',
        explanation: '"Peace I leave with you; my peace I give to you. Not as the world gives do I give to you."',
        tags: ['john', 'peace'],
      },
      {
        id: 'jn14-q4',
        type: 'fill',
        prompt: '"In my Father\'s house are many _____."',
        answer: 'rooms',
        explanation: 'John 14:2 — Jesus goes to prepare a place; there is room for all who come to Him.',
        tags: ['john', 'heaven'],
      },
    ],
    prayer:
      'Lord Jesus, Way, Truth, and Life, calm my troubled heart. Thank You for preparing my place, for being the only road to the Father, and for sending Your Spirit to stay with me forever. Fill me with Your peace — not the world\'s, but Yours. Amen.',
  },
  'acts-2': {
    bookId: 'acts',
    chapter: 2,
    title: 'Pentecost: The Coming of the Holy Spirit',
    summary:
      'Fifty days after the resurrection, the Holy Spirit falls on the disciples with wind and fire. Peter preaches Christ crucified and risen, 3,000 believe and are baptized, and the church is born — devoted to teaching, fellowship, breaking of bread, and prayer.',
    understand:
      'Pentecost is the church\'s birthday. The disciples are waiting in Jerusalem as Jesus commanded when suddenly "a sound like a mighty rushing wind" fills the house, "tongues as of fire" rest on each one, and they speak in languages they never learned. The Spirit\'s arrival is dramatic because the mission is momentous: the same power that raised Jesus will now fill His witnesses.\n\nPeter\'s sermon is the model gospel sermon. He explains the phenomenon (Joel\'s prophecy: God pouring out His Spirit), proclaims the facts (Jesus\' miracles, crucifixion, resurrection — "God raised him up, loosing the pangs of death"), proves them from Scripture (Psalms 16 and 110), and presses for response: "Repent and be baptized... for the forgiveness of your sins, and you will receive the gift of the Holy Spirit." Cut to the heart, 3,000 respond in a single day.\n\nThe chapter\'s closing portrait (vv. 42–47) is the church\'s charter: devoted to the apostles\' teaching, fellowship, breaking of bread, and prayers — sharing possessions, praising God, "and the Lord added to their number day by day those who were being saved."',
    context:
      'Pentecost (the Feast of Weeks) was a Jewish harvest festival drawing pilgrims "from every nation under heaven" — which is why the miracle of languages had such impact: each heard "the mighty works of God" in his own tongue. The "tongues" were real human languages, a reversal of Babel (Gen. 11): where sin scattered languages in judgment, the Spirit unites them in gospel proclamation.\n\nPeter, who had denied Jesus weeks earlier, now preaches with boldness — the Spirit\'s transformation on display. His quotation of Joel 2:28–32 places the church in the "last days," the era of the Spirit that continues until Christ returns.',
    people: ['Peter', 'The apostles', 'The 3,000 converts', 'The pilgrims from every nation'],
    words: [
      {
        term: 'Pentecost',
        transliteration: 'pentekoste',
        definition:
          'Greek for "fiftieth" — the Jewish Feast of Weeks, fifty days after Passover; the day the Spirit fell and the church was born.',
      },
      {
        term: 'Tongues',
        transliteration: 'glossai',
        definition:
          'Real human languages given by the Spirit for gospel proclamation — the sign that the gospel is for all nations.',
      },
      {
        term: 'Fellowship',
        transliteration: 'koinonia',
        definition:
          'Deep sharing and participation — the early church\'s life of shared faith, meals, possessions, and mission.',
      },
    ],
    themes: ['The Holy Spirit', 'The birth of the church', 'Preaching Christ', 'Repentance and baptism', 'Christian community'],
    crossRefs: [
      { ref: 'Joel 2:28–32', note: 'The prophecy Peter says is fulfilled: God pouring out His Spirit on all flesh.' },
      { ref: 'Acts 1:8', note: 'The program: Spirit-power for witness "to the end of the earth."' },
      { ref: 'Genesis 11:1–9', note: 'Babel\'s scattered languages reversed at Pentecost.' },
      { ref: '1 Corinthians 12:13', note: 'All believers baptized by one Spirit into one body.' },
    ],
    application:
      'The same Spirit who fell at Pentecost indwells you. Stop trying to witness in your own strength — ask daily to be filled. Then imitate the first church\'s devotions: root yourself in apostolic teaching, real fellowship, the Lord\'s table, and prayer. Churches that live Acts 2:42 still see the Lord add to their number.',
    reflection: [
      'What would change if you truly believed the Spirit\'s power in you matches the Spirit\'s power at Pentecost?',
      'Which of the four devotions in Acts 2:42 is weakest in your life right now?',
      'Who needs to hear your "Pentecost sermon" — your testimony of the risen Christ?',
    ],
    quiz: [
      {
        id: 'ac2-q1',
        type: 'mc',
        prompt: 'What three phenomena accompanied the Spirit\'s coming at Pentecost?',
        choices: [
          'Thunder, lightning, and hail',
          'Wind, fire, and speaking in other languages',
          'Darkness, earthquake, and silence',
          'Rain, snow, and clouds',
        ],
        answer: 'Wind, fire, and speaking in other languages',
        explanation: 'Acts 2:2–4 — rushing wind, tongues of fire, and Spirit-given languages marked the church\'s birth.',
        tags: ['acts', 'pentecost', 'holy-spirit'],
      },
      {
        id: 'ac2-q2',
        type: 'tf',
        prompt: 'About 3,000 people believed and were baptized on the day of Pentecost.',
        choices: ['True', 'False'],
        answer: 'True',
        explanation: 'Acts 2:41 — "there were added that day about three thousand souls."',
        tags: ['acts', 'pentecost', 'church'],
      },
      {
        id: 'ac2-q3',
        type: 'mc',
        prompt: 'What four things did the first church devote themselves to?',
        choices: [
          'Fasting, tithing, singing, and travel',
          'The apostles\' teaching, fellowship, breaking of bread, and prayers',
          'Building projects, politics, feasts, and trade',
          'Silence, solitude, study, and service',
        ],
        answer: 'The apostles\' teaching, fellowship, breaking of bread, and prayers',
        explanation: 'Acts 2:42 — the fourfold pattern of healthy church life from the very beginning.',
        tags: ['acts', 'church'],
      },
      {
        id: 'ac2-q4',
        type: 'fill',
        prompt: 'Peter\'s command: "_____ and be baptized every one of you in the name of Jesus Christ."',
        answer: 'Repent',
        explanation: 'Acts 2:38 — the gospel response: repentance, baptism, forgiveness, and the gift of the Spirit.',
        tags: ['acts', 'repentance'],
      },
    ],
    prayer:
      'Holy Spirit, fall on me afresh. Fill me with boldness to witness, deepen my devotion to Your word and Your people, and make my life a Pentecost sermon. Add to Your church through my witness, Lord. Amen.',
  },
});
Object.assign(CHAPTER_STUDIES, {
  'romans-3': {
    bookId: 'romans',
    chapter: 3,
    title: 'All Have Sinned: Justification by Faith',
    summary:
      'Paul concludes his indictment: "all have sinned and fall short of the glory of God." But now God\'s righteousness is revealed — sinners are "justified by his grace as a gift, through the redemption that is in Christ Jesus," received by faith alone.',
    understand:
      'Romans 1–3 is the Bible\'s most thorough diagnosis of the human condition. Paul has shown the Gentile world guilty (ch. 1), the moralist guilty (ch. 2), and now the Jew — with all his privileges — equally guilty (ch. 3). The verdict lands in verses 10–18, a catena of Old Testament texts: "None is righteous, no, not one... All have turned aside." The Law\'s function is not to save but to silence: "that every mouth may be stopped, and the whole world may be held accountable to God."\n\nThen the great "But now" (v. 21) — two words that change everything. Apart from law-keeping, God\'s righteousness is revealed through faith in Jesus Christ. God justifies (declares righteous) the ungodly "by his grace as a gift, through the redemption that is in Christ Jesus, whom God put forward as a propitiation by his blood." Propitiation means the sacrifice that turns away wrath: at the cross, God\'s justice and mercy meet — He is "just and the justifier of the one who has faith in Jesus."\n\nPaul closes by excluding boasting: if salvation is by faith apart from works, no one can brag. Yet faith upholds the law rather than overthrowing it — the law\'s righteous demands are fulfilled in Christ and established in the believer\'s life.',
    context:
      'Paul wrote Romans to a mixed church of Jewish and Gentile believers in Rome, some of whom looked down on each other. Chapters 1–3 level the ground: Jew and Gentile alike stand condemned, so that Jew and Gentile alike can stand justified — by the same faith. This chapter became the engine of the Reformation: Luther\'s breakthrough came through "the righteous shall live by faith" (Rom. 1:17), expounded here.\n\n"Propitiation" (hilasterion) also named the mercy seat — the lid of the ark where blood was sprinkled on the Day of Atonement. Paul deliberately evokes it: Christ is the true mercy seat, the place where God meets sinners in atoning blood.',
    people: ['Paul', 'The Jew and the Gentile (representative figures)'],
    words: [
      {
        term: 'Justified',
        transliteration: 'dikaioo',
        definition:
          'Declared righteous by God — a legal verdict, not a moral improvement. God justifies the ungodly by grace through faith (vv. 24, 28).',
      },
      {
        term: 'Propitiation',
        transliteration: 'hilasterion',
        definition:
          'The sacrifice that satisfies God\'s wrath against sin — Christ\'s blood "put forward" by God Himself (v. 25), echoing the mercy seat.',
      },
      {
        term: 'Redemption',
        transliteration: 'apolutrosis',
        definition:
          'Release secured by payment of a price — Christ\'s death purchases sinners\' freedom from sin\'s bondage and penalty.',
      },
    ],
    themes: ['Universal sin', 'Justification by faith alone', 'Grace', 'Propitiation', 'No boasting'],
    crossRefs: [
      { ref: 'Romans 1:17', note: '"The righteous shall live by faith" — the theme verse of Romans.' },
      { ref: 'Ephesians 2:8–9', note: 'Saved by grace through faith — "not a result of works, so that no one may boast."' },
      { ref: 'Galatians 2:16', note: 'No one is justified by works of the law but through faith in Christ.' },
      { ref: 'Isaiah 53:5–6', note: 'The prophetic background: pierced for our transgressions.' },
    ],
    application:
      'Stop negotiating with God. You cannot be "good enough" — the verdict is in: all have sinned. But the gift is offered: righteousness as a gift, through faith in Christ. Receive it today if you never have. If you have, kill your boasting: your standing before God is 100% gift. Then live gratefully — faith that justifies never remains alone; it works through love.',
    reflection: [
      'Why is it so hard to accept that salvation is entirely a gift? Where do you still try to earn it?',
      'What does "just and the justifier" teach you about the cross — that God didn\'t simply overlook sin?',
      'How should "no boasting" shape the way you view other believers — and unbelievers?',
    ],
    quiz: [
      {
        id: 'ro3-q1',
        type: 'mc',
        prompt: 'According to Romans 3:23, who has sinned?',
        choices: ['Only Gentiles', 'Only the worst offenders', 'All — Jew and Gentile alike', 'Everyone except the righteous'],
        answer: 'All — Jew and Gentile alike',
        explanation: '"All have sinned and fall short of the glory of God" (Rom. 3:23). No exceptions, no excuses.',
        tags: ['romans', 'sin', 'justification'],
      },
      {
        id: 'ro3-q2',
        type: 'tf',
        prompt: 'Romans 3 teaches that a person is justified by faith apart from works of the law.',
        choices: ['True', 'False'],
        answer: 'True',
        explanation: 'Romans 3:28: "one is justified by faith apart from works of the law." The Reformation\'s cornerstone text.',
        tags: ['romans', 'justification', 'faith'],
      },
      {
        id: 'ro3-q3',
        type: 'mc',
        prompt: 'What does "propitiation" mean in Romans 3:25?',
        choices: [
          'A good example to follow',
          'The sacrifice that turns away God\'s wrath against sin',
          'A prayer for forgiveness',
          'A religious ceremony',
        ],
        answer: 'The sacrifice that turns away God\'s wrath against sin',
        explanation: 'Christ\'s blood, put forward by God, satisfies divine justice — making God both "just and the justifier."',
        tags: ['romans', 'atonement'],
      },
      {
        id: 'ro3-q4',
        type: 'fill',
        prompt: '"For all have sinned and fall short of the _____ of God."',
        answer: 'glory',
        explanation: 'Romans 3:23 — the universal diagnosis that makes the gospel necessary.',
        tags: ['romans', 'sin'],
      },
    ],
    prayer:
      'Holy God, I confess: I have sinned and fall short of Your glory. I bring no works, no boasting — only faith in Jesus, my propitiation. Thank You for justifying me freely by Your grace. Keep me from trusting anything but Christ. Amen.',
  },
  'romans-8': {
    bookId: 'romans',
    chapter: 8,
    title: 'Life in the Spirit: No Condemnation',
    summary:
      'Romans 8 is the Bible\'s great chapter of assurance: "There is therefore now no condemnation for those who are in Christ Jesus." The Spirit gives life, makes us God\'s children, intercedes in our weakness, and guarantees that nothing can separate us from God\'s love.',
    understand:
      'If Romans 3 is the gospel\'s foundation, Romans 8 is its crown. It opens with the most liberating sentence in Scripture: "There is therefore now no condemnation for those who are in Christ Jesus." Not "less condemnation" or "delayed condemnation" — none. For the believer, the trial is over; the verdict is in; the Judge is the Father who gave His Son.\n\nThe chapter then unfolds the Spirit\'s ministry: He frees from sin\'s law, enables us to fulfill righteousness, leads us as God\'s children (prompting the cry "Abba! Father!"), and testifies with our spirits that we are heirs. Even our groaning — and creation\'s groaning — is folded into hope: "we know that for those who love God all things work together for good."\n\nThe climax is a courtroom scene turned celebration: "Who shall bring any charge against God\'s elect? It is God who justifies. Who is to condemn? Christ Jesus is the one who died... who is at the right hand of God, who indeed is interceding for us." Then the unbreakable chain: nothing — "neither death nor life... nor anything else in all creation" — can separate us from the love of God in Christ. Read it when you feel condemned; it is God\'s answer.',
    context:
      'Romans 8 follows the anguish of chapter 7 ("Wretched man that I am!"), answering it with the Spirit\'s triumph. Paul wrote to believers in Rome who faced misunderstanding and coming persecution under Nero; assurance of God\'s unbreakable love was not abstract theology but survival truth.\n\n"Abba" was the intimate Aramaic word for father — Jesus\' own word for God (Mark 14:36). That Gentile believers in Rome could cry "Abba" shows the Spirit makes us true sons, not distant servants. The chapter\'s "golden chain" (vv. 29–30: foreknew, predestined, called, justified, glorified) traces salvation from eternity past to eternity future — and speaks of glorification in the past tense, so certain is it.',
    people: ['Paul', 'The Holy Spirit', 'Believers ("those who are in Christ Jesus")'],
    words: [
      {
        term: 'Abba',
        transliteration: 'abba',
        definition:
          'Aramaic for "Father" — intimate, trusting address. The Spirit enables believers to cry "Abba! Father!" as true children.',
      },
      {
        term: 'Intercede',
        transliteration: 'entynchano',
        definition:
          'To plead on behalf of another — the Spirit intercedes with "groanings too deep for words," and the risen Christ intercedes at God\'s right hand.',
      },
    ],
    themes: ['No condemnation', 'The Holy Spirit', 'Adoption', 'Assurance', 'God\'s unbreakable love', 'Suffering and glory'],
    crossRefs: [
      { ref: 'Romans 5:1', note: '"We have peace with God through our Lord Jesus Christ" — the foundation of chapter 8.' },
      { ref: 'John 10:28–29', note: 'No one can snatch Christ\'s sheep from His hand.' },
      { ref: 'Galatians 4:6', note: 'God sent the Spirit of His Son into our hearts, crying, "Abba! Father!"' },
      { ref: 'Philippians 1:6', note: 'He who began a good work will bring it to completion.' },
    ],
    application:
      'When condemnation whispers — and it will — answer with Romans 8:1 out loud: "There is now no condemnation for those in Christ Jesus." That includes you. Then walk by the Spirit today: set your mind on His things, cry "Abba" in prayer, and trust that even today\'s pain is being worked for your good and His glory. Nothing can separate you. Nothing.',
    reflection: [
      'What accusation does condemnation level at you most often? How does Romans 8:1, 33–34 answer it specifically?',
      'What does it mean to you, personally, that you can call God "Abba"?',
      'How does "all things work together for good" reframe a current hardship — without minimizing its pain?',
    ],
    quiz: [
      {
        id: 'ro8-q1',
        type: 'mc',
        prompt: 'How does Romans 8:1 begin?',
        choices: [
          '"There is therefore now no condemnation for those who are in Christ Jesus."',
          '"All have sinned and fall short."',
          '"The wages of sin is death."',
          '"Be strong and courageous."',
        ],
        answer: '"There is therefore now no condemnation for those who are in Christ Jesus."',
        explanation: 'The chapter\'s thesis: for believers, condemnation is entirely removed — the verdict is final.',
        tags: ['romans', 'assurance'],
      },
      {
        id: 'ro8-q2',
        type: 'tf',
        prompt: 'According to Romans 8, the Holy Spirit helps believers pray when they don\'t know what to pray.',
        choices: ['True', 'False'],
        answer: 'True',
        explanation: 'Romans 8:26 — "the Spirit himself intercedes for us with groanings too deep for words."',
        tags: ['romans', 'holy-spirit', 'prayer'],
      },
      {
        id: 'ro8-q3',
        type: 'mc',
        prompt: 'What can separate believers from the love of God in Christ?',
        choices: ['Tribulation and distress', 'Death', 'Persecution', 'Nothing in all creation'],
        answer: 'Nothing in all creation',
        explanation: 'Romans 8:38–39 — Paul\'s exhaustive list ends: nothing "will be able to separate us from the love of God in Christ Jesus our Lord."',
        tags: ['romans', 'assurance', 'love'],
      },
      {
        id: 'ro8-q4',
        type: 'fill',
        prompt: 'The Spirit prompts believers to cry, "_____, Father!"',
        answer: 'Abba',
        explanation: 'Romans 8:15 — the intimate cry of adopted children, made possible by the Spirit.',
        tags: ['romans', 'adoption'],
      },
    ],
    prayer:
      'Father, thank You that there is no condemnation for me in Christ Jesus. Spirit, lead me, assure me, and intercede for me. When I feel accused, let me hear Your verdict; when I suffer, let me trust Your love. Nothing can separate me from You. Amen.',
  },
  '1corinthians-13': {
    bookId: '1-corinthians',
    chapter: 13,
    title: 'The Way of Love',
    summary:
      'Paul\'s famous "love chapter" teaches that without love, spiritual gifts are noise and nothing. He describes love\'s character — patient, kind, not envious or proud — and declares that love never ends: "So now faith, hope, and love abide... but the greatest of these is love."',
    understand:
      'First Corinthians 13 sits between chapters on spiritual gifts (12 and 14) — and that placement is the point. The Corinthians prized spectacular gifts, especially tongues; Paul says gifts without love are "a noisy gong or a clanging cymbal." Even mountain-moving faith and total self-sacrifice gain nothing without love. Love is not the decoration of ministry; it is the substance.\n\nVerses 4–7 are love\'s portrait — and it\'s worth reading as a description of Christ Himself: "Love is patient and kind; love does not envy or boast..." Each phrase exposes us: patience with difficult people, kindness without agenda, no envy of others\' gifts, no rude self-assertion. "Love... keeps no record of wrongs" strikes at our bookkeeping. This is agape — self-giving, willful love, not sentimental feeling.\n\nPaul closes with maturity and permanence: gifts are partial and temporary ("when the perfect comes, the partial will pass away"), but love never ends. "Now we see in a mirror dimly, but then face to face." Faith will become sight, hope will become possession — but love endures into eternity, because God Himself is love.',
    context:
      'Corinth was a status-obsessed, competitive culture, and the church had imported it: members competed over gifts, sued each other, and divided over leaders. Chapter 13 confronts a church using spiritual gifts as tools of self-promotion. Paul\'s "still more excellent way" (12:31) reframes everything around cruciform love.\n\nThough often read at weddings (and beautifully so), the chapter was written to a church, about church life. Its first application is not romance but community: how gifted people treat one another when no one\'s watching.',
    people: ['Paul', 'The Corinthian church'],
    words: [
      {
        term: 'Agape',
        transliteration: 'agape',
        definition:
          'Self-giving, willful love that seeks the other\'s good — the love God is (1 John 4:8) and the love believers must show.',
      },
      {
        term: 'Clanging cymbal',
        transliteration: 'kymbalon alalazon',
        definition:
          'A loud, empty noise — Paul\'s image for giftedness without love: impressive sound signifying nothing.',
      },
    ],
    themes: ['Love', 'Spiritual gifts', 'Maturity', 'Eternity of love', 'Christlike character'],
    crossRefs: [
      { ref: '1 John 4:8', note: '"God is love" — the source of the love described here.' },
      { ref: 'John 13:35', note: '"By this all people will know that you are my disciples, if you have love."' },
      { ref: 'Galatians 5:22', note: 'The Spirit\'s first fruit is love.' },
      { ref: 'Colossians 3:14', note: '"Above all these put on love, which binds everything together."' },
    ],
    application:
      'Substitute your name for "love" in verses 4–7 and read it aloud: "[Your name] is patient, [your name] is kind..." Convicting? That\'s the mirror working. Pick one phrase to practice this week — patience with that person, kindness without strings, letting go of a recorded wrong. Gifts impress; love transforms. Be known for the greater.',
    reflection: [
      'Which phrase in verses 4–7 most convicts you, and which most encourages you?',
      'Where are you tempted to use giftedness or service as a substitute for love?',
      'What would change in your church, family, or friendships if love "never failing" were the standard?',
    ],
    quiz: [
      {
        id: '1co13-q1',
        type: 'mc',
        prompt: 'According to 1 Corinthians 13, what is speaking in tongues without love like?',
        choices: ['A beautiful song', 'A noisy gong or clanging cymbal', 'A quiet prayer', 'A wise teaching'],
        answer: 'A noisy gong or clanging cymbal',
        explanation: 'Verse 1 — gifts without love are impressive noise signifying nothing.',
        tags: ['1-corinthians', 'love'],
      },
      {
        id: '1corinthians-13-q2',
        type: 'tf',
        prompt: 'Paul says love keeps a careful record of wrongs suffered.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: 'Verse 5: love "keeps no record of wrongs" — it forgives rather than bookkeeping.',
        tags: ['1-corinthians', 'love', 'forgiveness'],
      },
      {
        id: '1co13-q3',
        type: 'mc',
        prompt: 'Which of these will remain forever, according to verse 13?',
        choices: ['Prophecies', 'Tongues', 'Faith, hope, and love', 'Knowledge'],
        answer: 'Faith, hope, and love',
        explanation: 'Gifts are temporary; "faith, hope, and love abide, these three; but the greatest of these is love."',
        tags: ['1-corinthians', 'love'],
      },
      {
        id: '1co13-q4',
        type: 'fill',
        prompt: '"Love is patient and _____; love does not envy or boast."',
        answer: 'kind',
        explanation: '1 Corinthians 13:4 — the opening pair of love\'s portrait: patience and kindness.',
        tags: ['1-corinthians', 'love'],
      },
    ],
    prayer:
      'God of love, I confess how unlike love I am — impatient, envious, record-keeping. Fill me with Your agape, the love that never ends. Make my gifts meaningful by making my heart loving. Let them know I am Yours by my love. Amen.',
  },
  'galatians-5': {
    bookId: 'galatians',
    chapter: 5,
    title: 'Freedom and the Fruit of the Spirit',
    summary:
      'Paul proclaims freedom: "For freedom Christ has set us free." Believers must not return to law-keeping for salvation but live by the Spirit — walking away from the works of the flesh and bearing the Spirit\'s fruit: "love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control."',
    understand:
      'Galatians 5 is the practical climax of Paul\'s defense of justification by faith. "For freedom Christ has set us free; stand firm therefore, and do not submit again to a yoke of slavery." The Galatians were being pressured to add circumcision to faith; Paul says adding anything to Christ subtracts everything from Christ: "if you accept circumcision, Christ will be of no advantage to you."\n\nBut freedom is not license: "do not use your freedom as an opportunity for the flesh, but through love serve one another." The whole law is fulfilled in "You shall love your neighbor as yourself." Then Paul contrasts two ways of living: the "works of the flesh" (a grim catalog from sexual immorality to envy and drunkenness — "those who do such things will not inherit the kingdom") and the "fruit of the Spirit."\n\nNote: fruit, singular — one cluster with nine facets, produced by the Spirit, not manufactured by willpower. "Those who belong to Christ Jesus have crucified the flesh with its passions and desires. If we live by the Spirit, let us also keep in step with the Spirit." The Christian life is a walk — daily, dependent, Spirit-led.',
    context:
      'The crisis in Galatia was "Judaizers" — teachers insisting Gentile converts must be circumcised and keep the Mosaic law. Paul sees this as abandoning the gospel itself (Gal. 1:6). Chapter 5 applies the theology of chapters 3–4: justification by faith must produce freedom, not a new legalism — and freedom must produce love, not license.\n\n"Keep in step with the Spirit" uses a military marching term: stay in formation with the Spirit\'s leading. The flesh-Spirit conflict (v. 17) describes the believer\'s ongoing inner war — normal Christian experience, not defeat.',
    people: ['Paul', 'The Galatian believers', 'The Judaizers (false teachers)'],
    words: [
      {
        term: 'Flesh',
        transliteration: 'sarx',
        definition:
          'The sinful nature — human life lived apart from God\'s Spirit, producing the "works of the flesh."',
      },
      {
        term: 'Fruit of the Spirit',
        transliteration: 'karpos tou pneumatos',
        definition:
          'The ninefold character the Holy Spirit produces in believers: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control.',
      },
      {
        term: 'Yoke of slavery',
        transliteration: 'zygos douleias',
        definition:
          'Paul\'s image for law-keeping as a means of salvation — a burden Christ came to remove.',
      },
    ],
    themes: ['Freedom in Christ', 'Faith vs. legalism', 'Walking by the Spirit', 'The fruit of the Spirit', 'Love fulfills the law'],
    crossRefs: [
      { ref: 'John 8:36', note: '"If the Son sets you free, you will be free indeed."' },
      { ref: 'Romans 6:14', note: '"You are not under law but under grace" — and sin shall not dominate.' },
      { ref: 'Romans 8:13–14', note: 'By the Spirit put to death the deeds of the body; the led are sons of God.' },
      { ref: '1 Peter 2:16', note: 'Live as free people — not using freedom as a cover-up for evil.' },
    ],
    application:
      'Examine your life for the two ditches: legalism (adding rules to earn God\'s favor) and license (using grace as an excuse for sin). Freedom\'s road is the Spirit\'s: daily surrender, daily dependence. Ask the Spirit each morning to produce His fruit in you — then "keep in step": when He prompts love, obey; when He convicts, repent quickly.',
    reflection: [
      'Where do you lean — toward legalism (earning) or license (excusing)? What would Spirit-led freedom look like there?',
      'Which facet of the Spirit\'s fruit is most lacking in your life right now? Ask Him to grow it.',
      'What "yoke of slavery" — rule, habit, expectation — is Christ calling you to lay down?',
    ],
    quiz: [
      {
        id: 'ga5-q1',
        type: 'mc',
        prompt: 'Complete the verse: "For freedom Christ has set us free; stand firm therefore, and..."',
        choices: [
          'Do whatever you want',
          'Do not submit again to a yoke of slavery',
          'Keep every rule perfectly',
          'Separate from all unbelievers',
        ],
        answer: 'Do not submit again to a yoke of slavery',
        explanation: 'Galatians 5:1 — gospel freedom must be guarded against returning to law-based salvation.',
        tags: ['galatians', 'freedom'],
      },
      {
        id: 'ga5-q2',
        type: 'tf',
        prompt: 'The fruit of the Spirit is produced by human willpower and effort.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: 'It is the Spirit\'s fruit (Gal. 5:22) — produced by Him as we walk in dependence, not manufactured by effort.',
        tags: ['galatians', 'holy-spirit'],
      },
      {
        id: 'ga5-q3',
        type: 'mc',
        prompt: 'Which list is part of the fruit of the Spirit?',
        choices: [
          'Power, wealth, fame',
          'Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control',
          'Wisdom, strength, courage',
          'Fasting, tithing, pilgrimage',
        ],
        answer: 'Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control',
        explanation: 'Galatians 5:22–23 — the ninefold fruit; "against such things there is no law."',
        tags: ['galatians', 'fruit-of-the-spirit'],
      },
      {
        id: 'ga5-q4',
        type: 'fill',
        prompt: '"If we live by the Spirit, let us also keep in _____ with the Spirit."',
        answer: 'step',
        explanation: 'Galatians 5:25 — the Christian life is a daily walk in formation with the Spirit.',
        tags: ['galatians', 'holy-spirit'],
      },
    ],
    prayer:
      'Lord Jesus, thank You for setting me free — truly free. Keep me from both legalism and license. Holy Spirit, crucify my flesh daily and grow Your fruit in me: love, joy, peace, and all the rest. I will keep in step with You. Amen.',
  },
  'ephesians-2': {
    bookId: 'ephesians',
    chapter: 2,
    title: 'Saved by Grace Through Faith',
    summary:
      'Ephesians 2 moves from death to life: we were "dead in trespasses," but God "made us alive together with Christ — by grace you have been saved." Salvation is God\'s gift through faith, not works. In Christ, Jew and Gentile become one new humanity, a temple for God\'s dwelling.',
    understand:
      'Verses 1–3 give the bleak diagnosis: we were dead — not sick, not struggling, but spiritually dead — "following the course of this world," "the prince of the power of the air," living in "the passions of our flesh," and "by nature children of wrath." Dead people don\'t contribute to their resurrection.\n\nThen the two greatest words in the Bible for sinners: "But God." "But God, being rich in mercy, because of the great love with which he loved us... made us alive together with Christ — by grace you have been saved." Salvation is entirely God\'s work: His mercy, His love, His grace, His gift. Verses 8–9 are the gospel\'s clearest statement: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast."\n\nVerse 10 completes the picture: we are God\'s "workmanship" (poiema — His poem, His masterpiece), "created in Christ Jesus for good works, which God prepared beforehand." Good works don\'t save us; saved people do good works — the ones God designed for them. The chapter ends with reconciliation: Christ\'s cross demolishes the "dividing wall of hostility" between Jew and Gentile, creating "one new man" and building all believers into God\'s dwelling place.',
    context:
      'Ephesus was a proud, cosmopolitan city dominated by the temple of Artemis; its Christians — mostly Gentile converts — needed to grasp both the wonder of their salvation and their unity with Jewish believers. Paul wrote from prison, yet the chapter soars with the riches of grace.\n\nThe "dividing wall" (v. 14) likely alludes to the barrier in Herod\'s temple separating Gentiles from the inner courts, with inscriptions threatening death to trespassers. Christ doesn\'t merely open a gate in the wall — He abolishes it, making one new humanity.',
    people: ['Paul', 'The Ephesian believers (Gentiles)', 'God the Father', 'Christ'],
    words: [
      {
        term: 'Grace',
        transliteration: 'charis',
        definition:
          'God\'s unmerited favor — the entire basis of salvation: "by grace you have been saved" (vv. 5, 8).',
      },
      {
        term: 'Workmanship',
        transliteration: 'poiema',
        definition:
          'God\'s crafted masterpiece — believers are His "poem," created in Christ for the good works He prepared.',
      },
      {
        term: 'Reconciliation',
        transliteration: 'katallage',
        definition:
          'The restoration of relationship — Christ reconciles both Jew and Gentile "to God in one body through the cross."',
      },
    ],
    themes: ['Salvation by grace', 'From death to life', 'Faith not works', 'Unity in Christ', 'The church as God\'s temple'],
    crossRefs: [
      { ref: 'Romans 3:23–24', note: 'All sinned; justified "by his grace as a gift."' },
      { ref: 'Titus 3:5', note: 'He saved us "not because of works done by us in righteousness."' },
      { ref: 'Galatians 3:28', note: 'In Christ there is neither Jew nor Greek — one in Christ Jesus.' },
      { ref: '1 Corinthians 3:16', note: 'Believers together are God\'s temple.' },
    ],
    application:
      'Let "But God" become your testimony\'s turning point: you were dead, but God made you alive. If you\'ve never received this gift, receive it now — by faith, not works. If you have, stop performing for acceptance you already own, and start walking in the good works God prepared for you. And tear down dividing walls: in Christ, your brothers and sisters across every barrier are family.',
    reflection: [
      'What does it mean to you that you were "dead" — not merely broken — before Christ?',
      'Where do you still functionally try to earn God\'s favor? How does "not a result of works" free you?',
      'What "good works, which God prepared beforehand" might He have designed specifically for you?',
    ],
    quiz: [
      {
        id: 'ep2-q1',
        type: 'mc',
        prompt: 'How does Ephesians 2 describe our condition before Christ?',
        choices: ['Spiritually sick but recovering', 'Dead in trespasses and sins', 'Mostly good with minor flaws', 'Ignorant but innocent'],
        answer: 'Dead in trespasses and sins',
        explanation: 'Ephesians 2:1, 5 — dead people need resurrection, not advice. Salvation is entirely God\'s work.',
        tags: ['ephesians', 'salvation', 'grace'],
      },
      {
        id: 'ep2-q2',
        type: 'tf',
        prompt: 'Ephesians 2:8–9 teaches we are saved by grace through faith, not by works.',
        choices: ['True', 'False'],
        answer: 'True',
        explanation: '"For by grace you have been saved through faith... not a result of works, so that no one may boast."',
        tags: ['ephesians', 'grace', 'faith'],
      },
      {
        id: 'ep2-q3',
        type: 'mc',
        prompt: 'According to verse 10, what is the purpose of good works in the believer\'s life?',
        choices: [
          'To earn salvation',
          'They are the works God prepared for His saved "workmanship" to walk in',
          'To impress others',
          'They are optional extras',
        ],
        answer: 'They are the works God prepared for His saved "workmanship" to walk in',
        explanation: 'We are saved by grace, then created "for good works, which God prepared beforehand, that we should walk in them."',
        tags: ['ephesians', 'good-works'],
      },
      {
        id: 'ep2-q4',
        type: 'fill',
        prompt: '"But _____, being rich in mercy, because of the great love with which he loved us..."',
        answer: 'God',
        explanation: 'Ephesians 2:4 — the turning point of the chapter and of every testimony.',
        tags: ['ephesians', 'grace'],
      },
    ],
    prayer:
      'Father, rich in mercy, I was dead — but You made me alive with Christ. By grace I am saved through faith, Your gift alone. Thank You. Now show me the good works You prepared for me, and make me a peacemaker who tears down walls. Amen.',
  },
  'philippians-4': {
    bookId: 'philippians',
    chapter: 4,
    title: 'Rejoice and Be Content',
    summary:
      'Paul closes his joyful letter with the secret of contentment: "Rejoice in the Lord always." He teaches how to conquer anxiety through prayer, what to think about, and how he learned to be content in every circumstance through Christ\'s strength.',
    understand:
      'Philippians 4 is one of the most practical chapters in the New Testament, written from prison. Paul begins with relational wisdom: he pleads with Euodia and Syntyche — two women in conflict — to "agree in the Lord," showing that joy and unity are inseparable. Then the famous command: "Rejoice in the Lord always; again I will say, rejoice." Joy is not a mood but a discipline, anchored "in the Lord" — circumstances change; He doesn\'t.\n\nVerses 6–7 give God\'s prescription for anxiety: "do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God." The promise is stunning: "the peace of God, which surpasses all understanding, will guard your hearts and your minds." Prayer trades anxiety for peace — not always changed circumstances, but a guarded heart.\n\nPaul then shares his secret: "I have learned in whatever situation I am to be content... I can do all things through him who strengthens me." Contentment is learned, not natural; strength is Christ\'s, not ours. The chapter closes with God\'s provision promise: "my God will supply every need of yours according to his riches in glory in Christ Jesus."',
    context:
      'The Philippians had supported Paul financially, sending Epaphroditus with a gift to his prison. Paul thanks them while teaching that his contentment never depended on their gifts — though he deeply appreciates them. "I can do all things" (v. 13) is often ripped from context as a slogan for achievement; in context, it\'s about enduring both plenty and need through Christ\'s strength.\n\nThe "peace... will guard" uses a military term: God\'s peace stands sentry over heart and mind. And verse 8\'s "think about these things" — whatever is true, honorable, just, pure, lovely — is cognitive discipleship: what we dwell on shapes who we become.',
    people: ['Paul', 'Euodia', 'Syntyche', 'Epaphroditus', 'The Philippian church'],
    words: [
      {
        term: 'Content',
        transliteration: 'autarkes',
        definition:
          'Self-sufficient through Christ — Paul\'s learned ability to be satisfied in any circumstance, independent of externals.',
      },
      {
        term: 'Guard',
        transliteration: 'phroureo',
        definition:
          'To stand sentry as a military guard — God\'s peace actively protects the believer\'s heart and mind from anxiety.',
      },
    ],
    themes: ['Joy', 'Contentment', 'Peace vs. anxiety', 'Prayer', 'God\'s provision', 'Right thinking'],
    crossRefs: [
      { ref: 'Matthew 6:25–34', note: 'Jesus\' teaching on anxiety: seek first the kingdom.' },
      { ref: '1 Peter 5:7', note: '"Cast all your anxieties on him, because he cares for you."' },
      { ref: '1 Timothy 6:6', note: '"Godliness with contentment is great gain."' },
      { ref: '2 Corinthians 12:9', note: 'Christ\'s strength perfected in weakness — the same dynamic as v. 13.' },
    ],
    application:
      'Practice the anxiety exchange today: when worry rises, turn it into prayer "with thanksgiving" — thanksgiving is the key that unlocks peace. Curate your thought diet per verse 8: starve anxiety-feeding inputs, feed on what is true and lovely. And learn contentment progressively: name one circumstance you\'re discontent with, and ask Christ for His strength to be sufficient in it.',
    reflection: [
      'What are you anxious about right now? Have you actually brought it to God "in everything... with thanksgiving"?',
      'What does your mental diet (v. 8) look like — and how is it shaping your peace or anxiety?',
      'Where do you need to learn Paul\'s secret: contentment independent of circumstances?',
    ],
    quiz: [
      {
        id: 'pp4-q1',
        type: 'mc',
        prompt: 'What is Paul\'s command about rejoicing in Philippians 4:4?',
        choices: ['Rejoice when things go well', 'Rejoice in the Lord always', 'Rejoice only on Sundays', 'Rejoice after problems are solved'],
        answer: 'Rejoice in the Lord always',
        explanation: '"Rejoice in the Lord always; again I will say, rejoice." Joy is anchored in the Lord, not circumstances.',
        tags: ['philippians', 'joy'],
      },
      {
        id: 'pp4-q2',
        type: 'tf',
        prompt: 'Philippians 4:13 ("I can do all things") is primarily about achieving personal ambitions.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: 'In context (vv. 11–12), it\'s about enduring both need and plenty through Christ\'s strength — contentment, not achievement.',
        tags: ['philippians', 'contentment'],
      },
      {
        id: 'pp4-q3',
        type: 'mc',
        prompt: 'According to verses 6–7, what guards the believer\'s heart and mind?',
        choices: ['Positive thinking', 'The peace of God', 'Careful planning', 'Avoiding all risk'],
        answer: 'The peace of God',
        explanation: 'Prayer with thanksgiving trades anxiety for "the peace of God, which surpasses all understanding," standing guard over us.',
        tags: ['philippians', 'peace', 'prayer'],
      },
      {
        id: 'pp4-q4',
        type: 'fill',
        prompt: '"And my God will supply every _____ of yours according to his riches in glory in Christ Jesus."',
        answer: 'need',
        explanation: 'Philippians 4:19 — God\'s provision promise: every need (not every want), from His glorious riches.',
        tags: ['philippians', 'provision'],
      },
    ],
    prayer:
      'Lord, I choose rejoicing — in You, always. I bring my anxieties to You now with thanksgiving; guard my heart with Your peace. Teach me contentment in every circumstance, and strengthen me for whatever today holds. You supply every need. Amen.',
  },
  'hebrews-11': {
    bookId: 'hebrews',
    chapter: 11,
    title: 'The Hall of Faith',
    summary:
      'Hebrews 11 defines faith — "the assurance of things hoped for, the conviction of things not seen" — then parades the heroes who lived by it: Abel, Enoch, Noah, Abraham, Sarah, Moses, Rahab, and many more, "of whom the world was not worthy."',
    understand:
      'Hebrews 11 is Scripture\'s great gallery of faith, written to Christians tempted to give up under pressure. It opens with the definition: faith is "the assurance of things hoped for, the conviction of things not seen" — not wishful thinking but confident trust in God\'s unseen realities, "by which the elders received their commendation."\n\nThe roll call moves through redemptive history: Abel\'s acceptable offering, Enoch\'s walk with God, Noah\'s ark-building obedience ("in reverent fear"), Abraham\'s departure to an unknown land and his offering of Isaac, Sarah\'s miraculous motherhood, Moses\' choice of suffering with God\'s people over Egypt\'s treasures, the fall of Jericho, Rahab\'s rescue. Then a rapid-fire list — Gideon, David, Samuel, the prophets — who "conquered kingdoms... stopped the mouths of lions."\n\nBut the chapter refuses triumphalism: "others suffered mocking and flogging... they were stoned, they were sawn in two" — and "the world was not worthy" of them. Faith doesn\'t guarantee earthly success; it guarantees God\'s approval. All these died without receiving the full promise, "that apart from us they should not be made perfect" — we complete their story as we run our leg of the race (Heb. 12:1).',
    context:
      'Hebrews was written to Jewish Christians facing persecution and tempted to drift back to Judaism. Chapter 11 anchors them in their own story: the faith they\'re tempted to abandon is the faith of their fathers. Each example proves that God honors those who trust His promises against all appearances.\n\nVerse 6 is the chapter\'s theological center: "without faith it is impossible to please him, for whoever would draw near to God must believe that he exists and that he rewards those who seek him." Faith has two components: believing God is, and believing He is good to seekers.',
    people: ['Abel', 'Enoch', 'Noah', 'Abraham', 'Sarah', 'Isaac', 'Jacob', 'Joseph', 'Moses', 'Rahab', 'Gideon', 'David', 'Samuel'],
    words: [
      {
        term: 'Faith',
        transliteration: 'pistis',
        definition:
          'Assured conviction in God\'s unseen realities — trusting His character and promises enough to act on them.',
      },
      {
        term: 'Commended',
        transliteration: 'martyreo',
        definition:
          'Bore witness to / received God\'s testimony — the elders\' faith earned God\'s own attestation (vv. 2, 4, 5, 39).',
      },
    ],
    themes: ['Faith', 'Perseverance', 'God\'s promises', 'Suffering', 'The cloud of witnesses'],
    crossRefs: [
      { ref: 'Hebrews 12:1–2', note: 'The application: run the race with endurance, looking to Jesus, surrounded by this cloud.' },
      { ref: 'Romans 4:20–21', note: 'Abraham "fully convinced that God was able to do what he had promised."' },
      { ref: 'Genesis 15:6', note: 'Abraham believed God, and it was counted as righteousness.' },
      { ref: 'James 2:21–23', note: 'Abraham\'s faith completed by works — the living faith Hebrews celebrates.' },
    ],
    application:
      'Faith acts on what God said before you see the result. Noah built before rain; Abraham left before the map; Moses chose suffering before deliverance. What has God said to you that you\'re waiting to "see" before obeying? The hall of faith has an empty frame with your name on it — step in. And when faith costs you, remember: the world was not worthy of them, and God is not ashamed to be called their God (v. 16).',
    reflection: [
      'Which hero\'s faith do you most need to imitate right now — and what would that look like practically?',
      'Where are you demanding sight before obedience? What promise of God addresses it?',
      'How does the suffering half of the chapter (vv. 35–38) correct a "faith equals success" mindset?',
    ],
    quiz: [
      {
        id: 'hb11-q1',
        type: 'mc',
        prompt: 'How does Hebrews 11:1 define faith?',
        choices: [
          'Believing whatever feels right',
          'The assurance of things hoped for, the conviction of things not seen',
          'Perfect understanding of theology',
          'Never having doubts',
        ],
        answer: 'The assurance of things hoped for, the conviction of things not seen',
        explanation: 'Faith is confident trust in God\'s unseen realities — assurance and conviction, not wishful thinking.',
        tags: ['hebrews', 'faith'],
      },
      {
        id: 'hb11-q2',
        type: 'tf',
        prompt: 'Everyone listed in Hebrews 11 experienced earthly triumph and success.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: 'Verses 35–38 describe faithful sufferers — tortured, mocked, destitute — "of whom the world was not worthy."',
        tags: ['hebrews', 'faith', 'suffering'],
      },
      {
        id: 'hb11-q3',
        type: 'mc',
        prompt: 'Why did Moses refuse to be called the son of Pharaoh\'s daughter?',
        choices: [
          'He wanted political power',
          'Choosing rather to be mistreated with God\'s people than enjoy sin\'s fleeting pleasures',
          'He disliked Egypt',
          'He was forced to leave',
        ],
        answer: 'Choosing rather to be mistreated with God\'s people than enjoy sin\'s fleeting pleasures',
        explanation: 'Hebrews 11:24–26 — Moses valued "the reproach of Christ" above Egypt\'s treasures, "for he was looking to the reward."',
        tags: ['hebrews', 'moses', 'faith'],
      },
      {
        id: 'hb11-q4',
        type: 'fill',
        prompt: '"And without faith it is _____ to please him."',
        answer: 'impossible',
        explanation: 'Hebrews 11:6 — drawing near to God requires believing He exists and rewards seekers.',
        tags: ['hebrews', 'faith'],
      },
    ],
    prayer:
      'Father, give me the faith of the elders — assurance in Your promises, conviction in Your unseen reality. When obedience costs, remind me that You reward those who seek You. Let me run my leg of the race well, looking to Jesus. Amen.',
  },
  'james-1': {
    bookId: 'james',
    chapter: 1,
    title: 'Joy in Trials and Wisdom from God',
    summary:
      'James opens with a surprise: "Count it all joy... when you meet trials." Trials produce steadfastness; God gives wisdom generously to those who ask in faith. The chapter warns against double-mindedness, the deceit of riches, and hearing the Word without doing it.',
    understand:
      'James writes to scattered, suffering Jewish Christians, and his first word is counterintuitive: count trials as joy — not because pain is pleasant, but because of what God does through it: "the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing." Trials are God\'s workshop for maturity.\n\nLacking wisdom for the trial? "Ask God, who gives generously to all without reproach" — but ask in faith, not doubting. The "double-minded man" — divided in loyalty, unstable in all his ways — shouldn\'t expect to receive. Then James traces temptation\'s genealogy: desire conceives, gives birth to sin, and sin "when it is fully grown brings forth death." God never tempts; He only gives good gifts.\n\nThe chapter\'s famous close defines true religion: be "quick to hear, slow to speak, slow to anger"; receive the implanted word; be "doers of the word, and not hearers only, deceiving yourselves." Hearing without doing is like glancing in a mirror and forgetting your face. Pure religion: visit orphans and widows, and keep unstained from the world.',
    context:
      'James, Jesus\' brother and leader of the Jerusalem church, wrote the earliest New Testament letter (c. AD 45–50) to Jewish believers scattered by persecution. His style echoes Jesus\' Sermon on the Mount (which James heard, perhaps skeptically, before the resurrection — 1 Cor. 15:7 records Jesus appearing to him).\n\n"Perfect and complete" (teleios) means mature, fully developed — not sinless. James\'s "faith without works is dead" (ch. 2) complements, not contradicts, Paul: Paul fights legalism (works for salvation); James fights dead orthodoxy (faith without fruit).',
    people: ['James', 'The twelve tribes in the Dispersion'],
    words: [
      {
        term: 'Steadfastness',
        transliteration: 'hypomone',
        definition:
          'Endurance under trial — the staying power God produces through tested faith, leading to maturity.',
      },
      {
        term: 'Double-minded',
        transliteration: 'dipsychos',
        definition:
          'Literally "two-souled" — divided in loyalty between God and the world; unstable and unreceiving.',
      },
      {
        term: 'Implanted word',
        transliteration: 'emphytos logos',
        definition:
          'God\'s word planted in the heart like seed — to be received with meekness and obeyed, not merely heard.',
      },
    ],
    themes: ['Trials and joy', 'Wisdom', 'Faith vs. doubt', 'Temptation', 'Hearing and doing'],
    crossRefs: [
      { ref: 'Romans 5:3–4', note: 'Suffering produces endurance, character, and hope — Paul\'s parallel.' },
      { ref: 'Matthew 7:24–27', note: 'Hearing and doing: the wise builder on the rock.' },
      { ref: '1 Peter 1:6–7', note: 'Tested faith, more precious than gold, resulting in praise at Christ\'s return.' },
      { ref: 'Proverbs 2:6', note: 'The LORD gives wisdom — the Old Testament background of James 1:5.' },
    ],
    application:
      'Reframe your trial: instead of "Why is this happening?" ask "What is God producing?" Then ask for wisdom — specifically, faith-filled, not double-minded. Audit your hearing-to-doing ratio: what has God\'s word told you recently that you haven\'t acted on? Do it today. And practice pure religion this week: one concrete act of care for someone vulnerable.',
    reflection: [
      'What trial are you facing, and what might "steadfastness having its full effect" look like in it?',
      'Where are you double-minded — wanting God\'s wisdom while keeping your options open?',
      'What\'s one thing you\'ve heard from God\'s word but haven\'t done? What\'s stopping you?',
    ],
    quiz: [
      {
        id: 'jm1-q1',
        type: 'mc',
        prompt: 'Why should believers "count it all joy" when facing trials?',
        choices: [
          'Because trials are enjoyable',
          'Because the testing of faith produces steadfastness, leading to maturity',
          'Because trials prove God is angry',
          'Because joy removes the trial',
        ],
        answer: 'Because the testing of faith produces steadfastness, leading to maturity',
        explanation: 'James 1:2–4 — joy is rooted in the trial\'s purpose: God producing complete, mature character.',
        tags: ['james', 'trials'],
      },
      {
        id: 'jm1-q2',
        type: 'tf',
        prompt: 'James says God tempts people to test their faithfulness.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: 'James 1:13 — "God cannot be tempted with evil, and he himself tempts no one." Temptation comes from our own desires.',
        tags: ['james', 'temptation'],
      },
      {
        id: 'jm1-q3',
        type: 'mc',
        prompt: 'What does James say about merely hearing the Word without doing it?',
        choices: [
          'It is enough for salvation',
          'It is self-deception — like forgetting your face after looking in a mirror',
          'It earns extra blessing',
          'It is better than not hearing',
        ],
        answer: 'It is self-deception — like forgetting your face after looking in a mirror',
        explanation: 'James 1:22–24 — "be doers of the word, and not hearers only, deceiving yourselves."',
        tags: ['james', 'obedience'],
      },
      {
        id: 'jm1-q4',
        type: 'fill',
        prompt: '"Be quick to hear, slow to _____, slow to anger."',
        answer: 'speak',
        explanation: 'James 1:19 — the rhythm of true religion: listen first, speak carefully, master anger.',
        tags: ['james', 'speech'],
      },
    ],
    prayer:
      'Father, give me joy in trials and wisdom for them. Make me single-minded, not double-minded. Plant Your word deep in me — and make me a doer, not just a hearer. Show me pure religion to practice today. Amen.',
  },
  '1john-4': {
    bookId: '1-john',
    chapter: 4,
    title: 'God Is Love',
    summary:
      'John teaches believers to test the spirits, then unfolds the nature of love: "God is love." God\'s love was revealed in sending His Son; perfect love casts out fear; and love for God is proven by love for one\'s brother.',
    understand:
      'First John 4 has two movements: discernment (vv. 1–6) and love (vv. 7–21). "Beloved, do not believe every spirit, but test the spirits" — false teachers were denying that Jesus Christ came in the flesh. The test: every spirit confessing Jesus Christ come in the flesh is from God. Believers overcome because "he who is in you is greater than he who is in the world."\n\nThen the chapter\'s heart: "Beloved, let us love one another, for love is from God... God is love." John doesn\'t say God is loving (true, but smaller) — love is His essence. This love was "made manifest": "God sent his only Son into the world, so that we might live through him... not that we loved God but that he loved us and sent his Son to be the propitiation for our sins." The cross is love\'s definition and demonstration.\n\nThe logic is inescapable: "if God so loved us, we also ought to love one another." No one has seen God, but when we love, God abides in us and His love is "perfected" (completed, matured) in us. "There is no fear in love, but perfect love casts out fear" — fear of judgment dissolves as we grasp His love. The chapter\'s final hammer: "If anyone says, \'I love God,\' and hates his brother, he is a liar." Love for the invisible God is verified by love for the visible brother.',
    context:
      'John wrote to churches threatened by proto-Gnostic teachers (later called Docetists) who denied Christ\'s true humanity — if Jesus wasn\'t really human, His death couldn\'t really save. John\'s tests of genuine faith run through the letter: right belief about Christ, obedience to His commands, and love for the brothers. Chapter 4 weaves all three together.\n\n"Propitiation" (hilasmos) echoes Romans 3:25: Christ\'s sacrifice turns away God\'s wrath. John pairs God\'s love with God\'s holiness — love that cost the Son\'s blood, not sentimentality that ignores sin.',
    people: ['John', 'Believers ("beloved")', 'False prophets / the spirit of antichrist'],
    words: [
      {
        term: 'Propitiation',
        transliteration: 'hilasmos',
        definition:
          'The atoning sacrifice that turns away God\'s wrath — God\'s love demonstrated in sending His Son for our sins (v. 10).',
      },
      {
        term: 'Perfect love',
        transliteration: 'teleia agape',
        definition:
          'Mature, completed love — love brought to its full expression, which casts out fear of judgment (v. 18).',
      },
      {
        term: 'Abide',
        transliteration: 'meno',
        definition:
          'To remain, dwell, continue — John\'s key word for the mutual indwelling of God and the believer who loves.',
      },
    ],
    themes: ['God is love', 'Testing the spirits', 'The incarnation', 'Love for one another', 'Perfect love casts out fear'],
    crossRefs: [
      { ref: 'John 3:16', note: 'God\'s love in giving His Son — the gospel John 4 expounds.' },
      { ref: 'Romans 5:8', note: 'God shows His love: Christ died for us while we were sinners.' },
      { ref: '1 Corinthians 13:4–7', note: 'Love\'s character — the practice of the God who is love.' },
      { ref: 'John 13:35', note: 'Love as the mark of Christ\'s disciples.' },
    ],
    application:
      'Test what you hear — even this — by the apostolic confession: Jesus Christ come in the flesh. Then let God\'s love do its work: meditate on the cross until fear of judgment melts into confident sonship, and let that love overflow to the brother or sister you find hardest to love. You cannot claim the invisible while hating the visible.',
    reflection: [
      'How do you "test the spirits" of teachings you encounter? What\'s your standard?',
      'What fear does God\'s perfect love need to cast out of your heart today?',
      'Who is the "brother" your love for God requires you to love better?',
    ],
    quiz: [
      {
        id: '1jn4-q1',
        type: 'mc',
        prompt: 'How does 1 John 4 say to test whether a spirit is from God?',
        choices: [
          'By how spiritual it feels',
          'By whether it confesses Jesus Christ has come in the flesh',
          'By the miracles it performs',
          'By its popularity',
        ],
        answer: 'By whether it confesses Jesus Christ has come in the flesh',
        explanation: '1 John 4:2 — right confession about the incarnate Christ is the test of true teaching.',
        tags: ['1-john', 'discernment'],
      },
      {
        id: '1jn4-q2',
        type: 'tf',
        prompt: 'According to 1 John 4, someone can love God while hating his brother.',
        choices: ['True', 'False'],
        answer: 'False',
        explanation: 'Verse 20: "If anyone says, \'I love God,\' and hates his brother, he is a liar." Love for God is verified by love for others.',
        tags: ['1-john', 'love'],
      },
      {
        id: '1jn4-q3',
        type: 'mc',
        prompt: 'How was God\'s love "made manifest" among us?',
        choices: [
          'Through prosperity and health',
          'God sent His only Son into the world as the propitiation for our sins',
          'Through angels appearing',
          'Through inner feelings of peace',
        ],
        answer: 'God sent His only Son into the world as the propitiation for our sins',
        explanation: '1 John 4:9–10 — the cross is love\'s definition: not our love for God, but His for us.',
        tags: ['1-john', 'love', 'atonement'],
      },
      {
        id: '1jn4-q4',
        type: 'fill',
        prompt: '"There is no fear in love, but _____ love casts out fear."',
        answer: 'perfect',
        explanation: '1 John 4:18 — mature, completed love drives out fear of judgment.',
        tags: ['1-john', 'love', 'fear'],
      },
    ],
    prayer:
      'Father, You are love — and You proved it at the cross. Cast out my fear with Your perfect love. Teach me to test what I hear, to abide in You, and to love my brother as You have loved me. Let Your love be perfected in me. Amen.',
  },
  'revelation-21': {
    bookId: 'revelation',
    chapter: 21,
    title: 'The New Heaven and New Earth',
    summary:
      'John sees "a new heaven and a new earth," the New Jerusalem descending, and hears God\'s promise: "Behold, I am making all things new." God dwells with His people, wiping every tear — no more death, mourning, crying, or pain. The city\'s glory is described in radiant detail.',
    understand:
      'Revelation 21 is the Bible\'s answer to Genesis 3 — the end that restores the beginning. "Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away." This is not annihilation but renewal: God doesn\'t scrap creation; He resurrects it, just as He resurrects our bodies.\n\nThe center of the vision is relational: "Behold, the dwelling place of God is with man. He will dwell with them, and they will be his people, and God himself will be with them as their God." Eden\'s fellowship, Exodus\'s tabernacle, the incarnation — all were previews of this: God with us, permanently. "He will wipe away every tear from their eyes, and death shall be no more."\n\nThe New Jerusalem descends "prepared as a bride adorned for her husband" — the church, glorified. Its description staggers: walls of jasper, twelve foundations of precious stones, streets of transparent gold, gates of single pearls. There is "no temple in the city, for its temple is the Lord God the Almighty and the Lamb" — and no sun or moon, "for the glory of God gives it light." The curse is gone; the river of life flows; God\'s people see His face.',
    context:
      'John received this vision on Patmos while exiled for his faith, writing to seven persecuted churches in Asia Minor. Revelation 21 was survival hope: Rome seemed eternal and the church seemed doomed, but John shows the opposite — Babylon falls, the Lamb reigns, and suffering believers inherit a city whose builder is God.\n\nThe "new heaven and new earth" fulfills Isaiah 65:17 and 66:22, and Peter\'s promise of "new heavens and a new earth in which righteousness dwells" (2 Pet. 3:13). The twelve gates bear Israel\'s tribes\' names, the twelve foundations the apostles\' names — one people of God, Old and New Testament saints together.',
    people: ['John', 'God (on the throne)', 'The Lamb', 'The bride (the church)', 'The nations'],
    words: [
      {
        term: 'New Jerusalem',
        definition:
          'The glorified church and eternal dwelling of God with His people — descending from heaven, radiant with God\'s glory.',
      },
      {
        term: 'Alpha and Omega',
        definition:
          'The first and last letters of the Greek alphabet — God\'s title as the beginning and the end, the guarantor of the new creation.',
      },
    ],
    themes: ['The new creation', 'God dwelling with His people', 'The end of suffering', 'The bride of Christ', 'Hope'],
    crossRefs: [
      { ref: 'Genesis 1–2', note: 'The beginning restored: creation "very good" again, God walking with His people.' },
      { ref: 'Isaiah 65:17', note: 'The promised new heavens and new earth.' },
      { ref: '2 Peter 3:13', note: 'Waiting for new heavens and a new earth "in which righteousness dwells."' },
      { ref: 'Revelation 22:1–5', note: 'The river of life, the tree of life, and seeing God\'s face.' },
    ],
    application:
      'Let the future shape your present. When suffering tempts you to despair, remember: "death shall be no more" is not wishful thinking but God\'s sworn future. Live as a citizen of that city now — practicing its righteousness, its worship, its tear-wiping compassion. And take comfort: the story doesn\'t end with a whimper but with a wedding.',
    reflection: [
      'Which promise of Revelation 21 do you most long for — no tears, no death, God\'s presence, seeing His face?',
      'How should the certainty of the new creation change the way you face loss and grief today?',
      'What would it mean to live now as a citizen of the New Jerusalem?',
    ],
    quiz: [
      {
        id: 'rev21-q1',
        type: 'mc',
        prompt: 'What will God do in the new creation, according to Revelation 21:4?',
        choices: [
          'Give everyone wealth',
          'Wipe away every tear; no more death, mourning, crying, or pain',
          'Remove all work and responsibility',
          'Erase all memories',
        ],
        answer: 'Wipe away every tear; no more death, mourning, crying, or pain',
        explanation: 'The former things pass away; God Himself tenderly removes every sorrow.',
        tags: ['revelation', 'new-creation', 'hope'],
      },
      {
        id: 'rev21-q2',
        type: 'tf',
        prompt: 'The New Jerusalem has no temple because God and the Lamb are its temple.',
        choices: ['True', 'False'],
        answer: 'True',
        explanation: 'Revelation 21:22 — mediated worship gives way to God\'s direct presence; no sun or moon either, for God\'s glory is its light.',
        tags: ['revelation', 'new-creation'],
      },
      {
        id: 'rev21-q3',
        type: 'mc',
        prompt: 'How is the New Jerusalem described in relation to Christ?',
        choices: ['As a fortress', 'As a bride adorned for her husband', 'As a marketplace', 'As a mountain'],
        answer: 'As a bride adorned for her husband',
        explanation: 'Revelation 21:2 — the glorified church, Christ\'s bride, in wedding beauty.',
        tags: ['revelation', 'church'],
      },
      {
        id: 'rev21-q4',
        type: 'fill',
        prompt: '"Behold, I am making all things _____."',
        answer: 'new',
        explanation: 'Revelation 21:5 — God\'s promise from the throne: renewal, not mere repair.',
        tags: ['revelation', 'new-creation'],
      },
    ],
    prayer:
      'Alpha and Omega, thank You that the story ends with You making all things new. Wipe my tears even now with the hope of that day. Make me homesick for the city where You dwell with Your people, and let me live as its citizen today. Come, Lord Jesus. Amen.',
  },
});

export function getChapterStudy(bookId: string, chapter: number): ChapterStudy | undefined {
  return CHAPTER_STUDIES[`${bookId}-${chapter}`];
}
