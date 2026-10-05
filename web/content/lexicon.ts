export interface LexiconEntry {
  term: string;
  language: 'hebrew' | 'greek';
  transliteration: string;
  definition: string;
  verses: string[];
}

export const LEXICON: LexiconEntry[] = [
  {
    term: 'hesed',
    language: 'hebrew',
    transliteration: 'hesed',
    definition:
      'Steadfast, loyal love — God\'s covenant faithfulness to His people. One of the richest words in the Old Testament, describing love that persists, forgives, and keeps promises. Often translated "mercy," "lovingkindness," or "steadfast love."',
    verses: ['Exodus 34:6', 'Psalm 136', 'Micah 6:8'],
  },
  {
    term: 'shalom',
    language: 'hebrew',
    transliteration: 'shalom',
    definition:
      'Peace in its fullest sense: wholeness, well-being, harmony, and flourishing — not merely the absence of conflict but the presence of everything good. The blessing God\'s people extend to one another.',
    verses: ['Numbers 6:26', 'Isaiah 9:6', 'John 14:27'],
  },
  {
    term: 'ruach',
    language: 'hebrew',
    transliteration: 'ruach',
    definition:
      'Wind, breath, or spirit — the life-giving power of God. The same word describes the wind over the waters (Gen. 1:2), human breath, and the Holy Spirit who empowers and regenerates.',
    verses: ['Genesis 1:2', 'Ezekiel 37:9–10', 'Psalm 51:11'],
  },
  {
    term: 'torah',
    language: 'hebrew',
    transliteration: 'torah',
    definition:
      'Instruction or teaching — God\'s revealed guidance for life. Broader than "law": it includes narrative, wisdom, and covenant. To delight in the torah (Ps. 1:2) is to love God\'s whole revealed will.',
    verses: ['Psalm 1:2', 'Psalm 19:7', 'Joshua 1:8'],
  },
  {
    term: 'bereshit',
    language: 'hebrew',
    transliteration: 'bereshit',
    definition:
      '"In the beginning" — the first word of the Hebrew Bible (Gen. 1:1) and the Hebrew title of Genesis. It declares that the universe had a beginning and a Beginner.',
    verses: ['Genesis 1:1', 'John 1:1'],
  },
  {
    term: 'amen',
    language: 'hebrew',
    transliteration: 'amen',
    definition:
      'Truly, surely, so be it — an affirmation of truth and agreement. From a root meaning firmness or faithfulness. Jesus uniquely used "Amen, amen" ("truly, truly") to introduce His own authoritative teaching.',
    verses: ['Deuteronomy 27:15', 'John 3:3', 'Revelation 3:14'],
  },
  {
    term: 'hallelujah',
    language: 'hebrew',
    transliteration: 'hallelu-yah',
    definition:
      '"Praise the LORD!" — a command to praise (hallelu) joined to God\'s covenant name (Yah). The church\'s eternal song, echoing from the Psalms to Revelation\'s throne room.',
    verses: ['Psalm 150:6', 'Revelation 19:1–6'],
  },
  {
    term: 'yada',
    language: 'hebrew',
    transliteration: 'yada',
    definition:
      'To know — but deeper than facts: intimate, experiential, relational knowledge. Adam "knew" Eve; God "knows" those who are His. Eternal life is knowing God (John 17:3).',
    verses: ['Genesis 4:1', 'Psalm 139:1', 'Jeremiah 9:24'],
  },
  {
    term: 'qodesh',
    language: 'hebrew',
    transliteration: 'qodesh',
    definition:
      'Holy, set apart — God\'s defining attribute and His call to His people: "Be holy, for I am holy." Holiness is separateness from sin and consecration to God.',
    verses: ['Leviticus 19:2', 'Isaiah 6:3', '1 Peter 1:16'],
  },
  {
    term: 'tsedeq',
    language: 'hebrew',
    transliteration: 'tsedeq',
    definition:
      'Righteousness or justice — conformity to God\'s standard. The righteous are those in right relationship with God; God\'s righteousness is both His character and His saving action.',
    verses: ['Genesis 15:6', 'Psalm 89:14', 'Isaiah 51:6'],
  },
  {
    term: 'goel',
    language: 'hebrew',
    transliteration: 'goel',
    definition:
      'Kinsman-redeemer — the near relative who buys back family land, frees debt-slaves, or avenges wrongs. Boaz is the great example; the title ultimately belongs to Christ, our Redeemer.',
    verses: ['Ruth 4', 'Job 19:25', 'Isaiah 59:20'],
  },
  {
    term: 'mashiach',
    language: 'hebrew',
    transliteration: 'mashiach',
    definition:
      '"Anointed one" — the promised King from David\'s line whom God would anoint with the Spirit to save His people. The Greek equivalent is Christos (Christ).',
    verses: ['Psalm 2:2', 'Daniel 9:25', 'John 1:41'],
  },
  {
    term: 'sabaoth',
    language: 'hebrew',
    transliteration: 'tsvaot',
    definition:
      '"Hosts" or "armies" — as in "LORD of hosts": God as commander of heaven\'s armies and sovereign over all powers, earthly and spiritual.',
    verses: ['1 Samuel 1:3', 'Isaiah 6:3', 'Romans 9:29'],
  },
  {
    term: 'agape',
    language: 'greek',
    transliteration: 'agape',
    definition:
      'Self-giving, sacrificial love — love of the will that seeks the other\'s highest good regardless of feelings or merit. God\'s love for the world (John 3:16) and the love believers must show.',
    verses: ['John 3:16', '1 Corinthians 13', '1 John 4:8'],
  },
  {
    term: 'charis',
    language: 'greek',
    transliteration: 'charis',
    definition:
      'Grace — God\'s unmerited favor and empowering gift. The foundation of salvation ("by grace you have been saved") and the Christian life. Never earned, always given.',
    verses: ['Ephesians 2:8', 'John 1:16', '2 Corinthians 12:9'],
  },
  {
    term: 'logos',
    language: 'greek',
    transliteration: 'logos',
    definition:
      'Word, reason, or message — John\'s title for Jesus as God\'s eternal self-expression. The divine Word who was with God, was God, and became flesh.',
    verses: ['John 1:1', 'John 1:14', 'Revelation 19:13'],
  },
  {
    term: 'pistis',
    language: 'greek',
    transliteration: 'pistis',
    definition:
      'Faith, trust, or faithfulness — confident reliance on God and His promises. The means by which sinners are justified and saints live ("the righteous shall live by faith").',
    verses: ['Romans 1:17', 'Hebrews 11:1', 'Ephesians 2:8'],
  },
  {
    term: 'soteria',
    language: 'greek',
    transliteration: 'soteria',
    definition:
      'Salvation — rescue and deliverance in its full scope: forgiveness, new life, and final glory. God\'s great rescue accomplished by Christ and applied by the Spirit.',
    verses: ['Luke 19:10', 'Romans 1:16', 'Ephesians 2:8'],
  },
  {
    term: 'ekklesia',
    language: 'greek',
    transliteration: 'ekklesia',
    definition:
      '"Called-out assembly" — the church: God\'s people summoned out of the world to belong to Christ. Both the universal body and local congregations.',
    verses: ['Matthew 16:18', 'Acts 2:47', 'Ephesians 5:25'],
  },
  {
    term: 'metanoia',
    language: 'greek',
    transliteration: 'metanoia',
    definition:
      'Repentance — literally "change of mind": turning from sin to God. The first word of Jesus\' preaching and the necessary response to the gospel.',
    verses: ['Matthew 4:17', 'Acts 2:38', '2 Corinthians 7:10'],
  },
  {
    term: 'dikaiosyne',
    language: 'greek',
    transliteration: 'dikaiosyne',
    definition:
      'Righteousness or justice — right standing with God and right living before Him. God\'s gift in justification and the believer\'s pursuit in sanctification.',
    verses: ['Matthew 5:6', 'Romans 3:22', 'Philippians 3:9'],
  },
  {
    term: 'pneuma',
    language: 'greek',
    transliteration: 'pneuma',
    definition:
      'Spirit, wind, or breath — the New Testament word for the Holy Spirit, the third Person of the Trinity who regenerates, indwells, empowers, and seals believers.',
    verses: ['John 3:8', 'Acts 1:8', 'Galatians 5:22'],
  },
  {
    term: 'kurios',
    language: 'greek',
    transliteration: 'kurios',
    definition:
      'Lord or Master — the title of supreme authority. Applied to Jesus, it confesses His deity and demands obedience: "Jesus is Lord" is Christianity\'s earliest creed.',
    verses: ['Romans 10:9', 'Philippians 2:11', '1 Corinthians 12:3'],
  },
  {
    term: 'doxa',
    language: 'greek',
    transliteration: 'doxa',
    definition:
      'Glory — God\'s radiant majesty, weight, and splendor. The goal of creation, the content of worship, and the believer\'s destiny ("glorified with Him").',
    verses: ['John 1:14', 'Romans 3:23', '2 Corinthians 3:18'],
  },
  {
    term: 'koinonia',
    language: 'greek',
    transliteration: 'koinonia',
    definition:
      'Fellowship, sharing, participation — the deep communal life of believers with God and each other: shared faith, shared table, shared possessions, shared mission.',
    verses: ['Acts 2:42', '1 John 1:3', 'Philippians 2:1'],
  },
  {
    term: 'euangelion',
    language: 'greek',
    transliteration: 'euangelion',
    definition:
      '"Good news" — the gospel: the announcement of what God has done in Christ\'s death and resurrection to save sinners. The church\'s central message.',
    verses: ['Mark 1:1', 'Romans 1:16', '1 Corinthians 15:1–4'],
  },
  {
    term: 'hamartia',
    language: 'greek',
    transliteration: 'hamartia',
    definition:
      'Sin — literally "missing the mark": falling short of God\'s glory. Not just bad deeds but a condition of the heart, requiring redemption.',
    verses: ['Romans 3:23', '1 John 3:4', 'John 8:34'],
  },
  {
    term: 'hilasterion',
    language: 'greek',
    transliteration: 'hilasterion',
    definition:
      'Propitiation or mercy seat — the sacrifice that turns away God\'s wrath. Christ\'s blood is the true mercy seat where holy God and sinners meet in peace.',
    verses: ['Romans 3:25', 'Hebrews 9:5', '1 John 2:2'],
  },
  {
    term: 'parakletos',
    language: 'greek',
    transliteration: 'parakletos',
    definition:
      '"One called alongside" — Advocate, Helper, Comforter. Jesus\' title for the Holy Spirit, who continues Christ\'s own ministry in believers forever.',
    verses: ['John 14:16', 'John 16:7', '1 John 2:1'],
  },
  {
    term: 'musterion',
    language: 'greek',
    transliteration: 'musterion',
    definition:
      'Mystery — a truth hidden in past ages but now revealed by God: notably, that Gentiles are fellow heirs with Jews in Christ, and Christ in believers.',
    verses: ['Ephesians 3:3–6', 'Colossians 1:27', 'Romans 16:25'],
  },
  {
    term: 'elpis',
    language: 'greek',
    transliteration: 'elpis',
    definition:
      'Hope — not wishful thinking but confident expectation of God\'s promised future: resurrection, glory, and Christ\'s return. An anchor for the soul.',
    verses: ['Romans 5:5', 'Hebrews 6:19', '1 Peter 1:3'],
  },
  {
    term: 'eirene',
    language: 'greek',
    transliteration: 'eirene',
    definition:
      'Peace — the New Testament counterpart of shalom: reconciliation with God through Christ, harmony among believers, and inner rest. Christ Himself is our peace.',
    verses: ['John 14:27', 'Romans 5:1', 'Ephesians 2:14'],
  },
  {
    term: 'sophia',
    language: 'greek',
    transliteration: 'sophia',
    definition:
      'Wisdom — skillful, godly insight for living. God gives it generously to those who ask; Christ Himself is "the wisdom of God."',
    verses: ['James 1:5', '1 Corinthians 1:24', 'Colossians 2:3'],
  },
  {
    term: 'doulos',
    language: 'greek',
    transliteration: 'doulos',
    definition:
      'Bondservant or slave — Paul\'s favorite self-title. The believer belongs wholly to Christ the Master — yet this slavery is perfect freedom.',
    verses: ['Romans 1:1', 'Philippians 2:7', 'Galatians 1:10'],
  },
  {
    term: 'hagios',
    language: 'greek',
    transliteration: 'hagios',
    definition:
      'Holy one or saint — not a spiritual elite but every believer, set apart by God for God. Sainthood is a status received by grace, then lived out.',
    verses: ['Romans 1:7', '1 Corinthians 1:2', 'Ephesians 1:1'],
  },
  {
    term: 'martus',
    language: 'greek',
    transliteration: 'martus',
    definition:
      'Witness — one who testifies to what they have seen. The church\'s calling (Acts 1:8); the word came to mean "martyr" because faithful witness often cost lives.',
    verses: ['Acts 1:8', 'Revelation 2:13', 'Hebrews 12:1'],
  },
  {
    term: 'baptizo',
    language: 'greek',
    transliteration: 'baptizo',
    definition:
      'To immerse or dip — baptism: the believer\'s immersion in water in the triune name, picturing union with Christ in His death and resurrection.',
    verses: ['Matthew 28:19', 'Acts 2:38', 'Romans 6:3–4'],
  },
  {
    term: 'anastasis',
    language: 'greek',
    transliteration: 'anastasis',
    definition:
      'Resurrection — rising from the dead. Christ\'s resurrection is the cornerstone of faith; believers will share it. Jesus doesn\'t merely give it — He is it.',
    verses: ['John 11:25', '1 Corinthians 15:20', 'Philippians 3:10'],
  },
  {
    term: 'diatheke',
    language: 'greek',
    transliteration: 'diatheke',
    definition:
      'Covenant or testament — God\'s binding commitment to His people. The new covenant in Christ\'s blood fulfills and surpasses the old.',
    verses: ['Luke 22:20', 'Hebrews 8:6', 'Jeremiah 31:31'],
  },
  {
    term: 'apolutrosis',
    language: 'greek',
    transliteration: 'apolutrosis',
    definition:
      'Redemption — release secured by payment of a price. Christ\'s death purchased sinners\' freedom from sin\'s penalty and power.',
    verses: ['Romans 3:24', 'Ephesians 1:7', 'Hebrews 9:12'],
  },
  {
    term: 'huiothesia',
    language: 'greek',
    transliteration: 'huiothesia',
    definition:
      'Adoption — God\'s act of placing believers as His sons and daughters with full rights of inheritance. The Spirit prompts the cry "Abba, Father."',
    verses: ['Romans 8:15', 'Galatians 4:5', 'Ephesians 1:5'],
  },
  {
    term: 'makarios',
    language: 'greek',
    transliteration: 'makarios',
    definition:
      'Blessed — the deep well-being of those approved by God. Jesus\' Beatitudes redefine blessedness around kingdom character, not worldly success.',
    verses: ['Matthew 5:3–11', 'Psalm 1:1', 'Revelation 1:3'],
  },
  {
    term: 'teleios',
    language: 'greek',
    transliteration: 'teleios',
    definition:
      'Perfect, complete, mature — brought to its intended end. God\'s goal for believers (Matt. 5:48); love "perfected" casts out fear (1 John 4:18).',
    verses: ['Matthew 5:48', 'James 1:4', '1 John 4:18'],
  },
];

export function lookupLexicon(term: string): LexiconEntry | undefined {
  const t = term.trim().toLowerCase();
  return LEXICON.find((e) => e.term.toLowerCase() === t || e.transliteration.toLowerCase() === t);
}
