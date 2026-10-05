export interface Place {
  id: string;
  name: string;
  description: string;
  significance: string;
  keyPassages: string[];
  mapQuery: string;
}

export const PLACES: Place[] = [
  {
    id: 'jerusalem',
    name: 'Jerusalem',
    description:
      'The holy city, set in the Judean hills about 2,500 feet above sea level. Originally the Jebusite stronghold captured by David (c. 1000 BC), it became Israel\'s political and spiritual capital — home to Solomon\'s temple, the city of the great King.',
    significance:
      'Jerusalem is the Bible\'s most mentioned city: the place God chose for His name, where Jesus was crucified and rose, where the Spirit fell at Pentecost, and the pattern for the New Jerusalem of Revelation 21. To pray for its peace (Ps. 122:6) is to long for God\'s kingdom.',
    keyPassages: ['2 Samuel 5:6–10', '1 Kings 8', 'Psalm 122', 'Luke 19:41–44', 'Acts 2', 'Revelation 21:2'],
    mapQuery: 'Jerusalem, Israel',
  },
  {
    id: 'bethlehem',
    name: 'Bethlehem',
    description:
      'A small town five miles south of Jerusalem in the Judean hill country. Known as the city of David — his birthplace and anointing place — and the setting of the book of Ruth.',
    significance:
      'Micah prophesied that from little Bethlehem would come Israel\'s Ruler (Mic. 5:2), fulfilled when Jesus was born there (Matt. 2:1). God\'s habit of choosing the small and overlooked shines in this village: the King of kings arrived not in a palace but a stable.',
    keyPassages: ['Ruth 1–4', '1 Samuel 16', 'Micah 5:2', 'Matthew 2:1–12', 'Luke 2:1–20'],
    mapQuery: 'Bethlehem, Palestine',
  },
  {
    id: 'nazareth',
    name: 'Nazareth',
    description:
      'A modest village in the hills of lower Galilee, off the main trade routes. Joseph and Mary settled here after returning from Egypt, and Jesus grew up here — "Jesus of Nazareth" was His common designation.',
    significance:
      'Nazareth\'s obscurity fulfilled the prophetic theme that the Messiah would be despised: "Can anything good come out of Nazareth?" (John 1:46). Jesus\' quiet decades there dignify ordinary life and hidden years — most of His earthly life was spent in faithful obscurity.',
    keyPassages: ['Matthew 2:23', 'Luke 2:39–52', 'Luke 4:16–30', 'John 1:45–46'],
    mapQuery: 'Nazareth, Israel',
  },
  {
    id: 'galilee',
    name: 'Galilee',
    description:
      'The northern region of Israel surrounding the Sea of Galilee, a fertile area of mixed Jewish and Gentile population — "Galilee of the Gentiles." Its towns included Capernaum, Nazareth, and Cana.',
    significance:
      'Galilee was the stage for most of Jesus\' ministry: He called His disciples by its lake, preached the Sermon on the Mount on its hills, calmed its storms, and fed multitudes on its shores. Isaiah\'s prophecy — "the people who walked in darkness have seen a great light" (Isa. 9:2) — was fulfilled there (Matt. 4:14–16).',
    keyPassages: ['Isaiah 9:1–2', 'Matthew 4:12–25', 'Mark 1:16–39', 'John 6', 'Matthew 28:16–20'],
    mapQuery: 'Sea of Galilee, Israel',
  },
  {
    id: 'judea',
    name: 'Judea',
    description:
      'The southern region of Israel, centered on Jerusalem, home to the temple and the religious establishment. Its wilderness east of Jerusalem was rugged and sparsely populated.',
    significance:
      'Judea was the heartland of Jewish faith — and of opposition to Jesus. He was born in Bethlehem of Judea, baptized in the Jordan at its border, tempted in its wilderness, and crucified outside Jerusalem. The gospel spread from Jerusalem in Judea outward (Acts 1:8).',
    keyPassages: ['Matthew 2:1', 'Matthew 4:1–11', 'Luke 3:1–3', 'John 4:1–3', 'Acts 1:8'],
    mapQuery: 'Judea',
  },
  {
    id: 'samaria',
    name: 'Samaria',
    description:
      'The hill country between Judea and Galilee, homeland of the Samaritans — people of mixed Jewish-Gentile ancestry with their own temple on Mount Gerizim, despised by Jews as compromisers.',
    significance:
      'Jesus deliberately crossed Samaria\'s hatred barrier: He talked theology with the Samaritan woman (John 4), made a Samaritan the hero of His parable (Luke 10), and commanded witness there (Acts 1:8). Philip\'s mission in Acts 8 showed the gospel breaking ethnic walls.',
    keyPassages: ['2 Kings 17', 'John 4:1–42', 'Luke 10:25–37', 'Acts 8:4–25'],
    mapQuery: 'Samaria, Palestine',
  },
  {
    id: 'egypt',
    name: 'Egypt',
    description:
      'The ancient Nile civilization southwest of Canaan — a place of both refuge and bondage in Scripture. Abraham, Joseph, and the infant Jesus all found shelter there; Israel endured 400 years of slavery there.',
    significance:
      'Egypt embodies the world\'s allure and oppression: God delivered Israel from it in the Exodus (the Old Testament\'s defining salvation), yet Israel kept looking back. Hosea\'s "out of Egypt I called my son" (Hos. 11:1) was fulfilled both in the Exodus and in Jesus\' return from Egypt (Matt. 2:15).',
    keyPassages: ['Genesis 37–50', 'Exodus 1–14', 'Hosea 11:1', 'Matthew 2:13–15', 'Revelation 11:8'],
    mapQuery: 'Cairo, Egypt',
  },
  {
    id: 'babylon',
    name: 'Babylon',
    description:
      'The great Mesopotamian empire on the Euphrates that destroyed Jerusalem in 586 BC and carried Judah into exile. Its capital was famed for wealth, idolatry, and the tower of Babel\'s legacy.',
    significance:
      'Babylon is Scripture\'s archetype of proud, God-defying empire — from Babel (Gen. 11) to the exile to Revelation\'s "Babylon the great." Yet God used it as His instrument of judgment, preserved Daniel there, and ended the exile through Persia\'s conquest of it. "Come out of her, my people" remains the call.',
    keyPassages: ['Genesis 11:1–9', '2 Kings 25', 'Daniel 1–5', 'Isaiah 13–14', 'Revelation 17–18'],
    mapQuery: 'Babylon, Iraq',
  },
  {
    id: 'rome',
    name: 'Rome',
    description:
      'Capital of the empire that ruled the Mediterranean world in Jesus\' day — the power behind Herod, Pilate, and the Pax Romana. Its roads, laws, and common language providentially aided the gospel\'s spread.',
    significance:
      'Rome crucified Jesus and persecuted the early church, yet Paul longed to preach there (Rom. 1:15), was imprisoned there, and wrote his deepest theology to its church. The gospel\'s march "to the ends of the earth" reached the empire\'s heart — and outlived the empire itself.',
    keyPassages: ['Luke 2:1', 'John 19', 'Acts 28', 'Romans 1:7–17', 'Philippians 1:12–14'],
    mapQuery: 'Rome, Italy',
  },
  {
    id: 'corinth',
    name: 'Corinth',
    description:
      'A wealthy, cosmopolitan Greek port city notorious for immorality and idolatry — home to the temple of Aphrodite. Paul planted a church there on his second missionary journey (c. AD 50).',
    significance:
      'Corinth shows the gospel\'s power in the toughest soil: a gifted but divided, immoral church received Paul\'s two most corrective letters. From Corinth we learn about unity, love (1 Cor. 13), the resurrection (1 Cor. 15), and generous giving (2 Cor. 8–9).',
    keyPassages: ['Acts 18:1–18', '1 Corinthians 1–16', '2 Corinthians 1–13'],
    mapQuery: 'Corinth, Greece',
  },
  {
    id: 'ephesus',
    name: 'Ephesus',
    description:
      'The leading city of Roman Asia (modern Turkey), famed for the temple of Artemis — one of the seven wonders of the ancient world. Paul ministered there for over two years, his longest stay anywhere.',
    significance:
      'Ephesus became a missionary hub: "all who lived in Asia heard the word" (Acts 19:10). Paul wrote Ephesians to its church, Timothy pastored it, and John addressed it first among the seven churches of Revelation — warning that it had abandoned its first love (Rev. 2:4).',
    keyPassages: ['Acts 19', 'Ephesians 1–6', '1 Timothy 1', 'Revelation 2:1–7'],
    mapQuery: 'Ephesus, Turkey',
  },
  {
    id: 'antioch',
    name: 'Antioch',
    description:
      'The third-largest city of the Roman Empire, capital of Syria, where the gospel first went intentionally to Gentiles and believers were first called "Christians."',
    significance:
      'Antioch was the early church\'s missionary sending base: the Spirit set apart Paul and Barnabas there (Acts 13:1–3), launching the Gentile mission. Its multi-ethnic church modeled the "one new man" of Ephesians 2 — and its generosity to famine-struck Jerusalem modeled gospel love.',
    keyPassages: ['Acts 11:19–30', 'Acts 13:1–3', 'Acts 14:26–28', 'Galatians 2:11–14'],
    mapQuery: 'Antakya, Turkey',
  },
];

export function getPlace(id: string): Place | undefined {
  return PLACES.find((p) => p.id === id);
}
