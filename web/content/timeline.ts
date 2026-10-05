export interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  ref?: string;
}

export interface TimelineEra {
  id: string;
  title: string;
  period: string;
  description: string;
  events: TimelineEvent[];
}

export const TIMELINE: TimelineEra[] = [
  {
    id: 'creation',
    title: 'Creation',
    period: 'In the beginning',
    description:
      'God creates the heavens and the earth, crowning His work with humanity made in His image. The fall brings sin and death, but God immediately promises a Redeemer — and preserves a godly line through Seth, Enoch, and Noah.',
    events: [
      {
        title: 'Creation of the world',
        date: 'In the beginning',
        description:
          'God speaks the universe into existence over six days and rests on the seventh, declaring it "very good."',
        ref: 'Genesis 1–2',
      },
      {
        title: 'The fall',
        date: 'In the beginning',
        description:
          'Adam and Eve disobey God; sin, shame, and death enter the world. God promises the woman\'s offspring will crush the serpent.',
        ref: 'Genesis 3',
      },
      {
        title: 'Cain and Abel; the line of Seth',
        date: 'Early human history',
        description:
          'Cain murders Abel; God preserves the godly line through Seth, "and at that time people began to call upon the name of the LORD."',
        ref: 'Genesis 4',
      },
      {
        title: 'The flood',
        date: 'c. 2500 BC (traditional)',
        description:
          'God judges a corrupt world with a global flood, preserving Noah\'s family and the animals in the ark, then covenants never to flood the earth again.',
        ref: 'Genesis 6–9',
      },
      {
        title: 'The tower of Babel',
        date: 'After the flood',
        description:
          'Humanity\'s prideful unity project is scattered by confused languages; the nations disperse across the earth.',
        ref: 'Genesis 11:1–9',
      },
    ],
  },
  {
    id: 'patriarchs',
    title: 'The Patriarchs',
    period: 'c. 2100–1800 BC',
    description:
      'God calls Abraham from Ur and covenants to make him a great nation and bless all peoples through him. The promise passes to Isaac, then to Jacob (Israel) and his twelve sons — the fathers of Israel\'s tribes.',
    events: [
      {
        title: 'The call of Abraham',
        date: 'c. 2091 BC',
        description:
          'God calls Abram to leave Ur for Canaan, promising land, descendants, and blessing to all nations through him.',
        ref: 'Genesis 12',
      },
      {
        title: 'The covenant with Abraham',
        date: 'c. 2080 BC',
        description:
          'God formalizes His covenant; Abraham believes, "and he counted it to him as righteousness." Circumcision becomes the covenant sign.',
        ref: 'Genesis 15, 17',
      },
      {
        title: 'Birth of Isaac; the offering on Moriah',
        date: 'c. 2066 BC',
        description:
          'Isaac, the child of promise, is born to aged Abraham and Sarah; later God tests Abraham by asking for Isaac, then provides a ram.',
        ref: 'Genesis 21–22',
      },
      {
        title: 'Jacob becomes Israel',
        date: 'c. 1900 BC',
        description:
          'Jacob wrestles with God at Peniel and is renamed Israel; his twelve sons become the twelve tribes.',
        ref: 'Genesis 32, 35',
      },
      {
        title: 'Joseph in Egypt',
        date: 'c. 1880–1800 BC',
        description:
          'Sold by his brothers, Joseph rises to rule Egypt and saves his family from famine; Israel settles in Goshen.',
        ref: 'Genesis 37–50',
      },
    ],
  },
  {
    id: 'exodus',
    title: 'The Exodus',
    period: 'c. 1446–1406 BC',
    description:
      'After 400 years of slavery, God raises up Moses to deliver Israel through the plagues and the Red Sea, gives the Law at Sinai, and leads the people through 40 years of wilderness wandering to the edge of Canaan.',
    events: [
      {
        title: 'The birth and call of Moses',
        date: 'c. 1526 BC',
        description:
          'Moses is saved from Pharaoh\'s decree, raised in the palace, flees to Midian, and is called at the burning bush at age 80.',
        ref: 'Exodus 2–4',
      },
      {
        title: 'The ten plagues and the Passover',
        date: 'c. 1446 BC',
        description:
          'God strikes Egypt with ten plagues; Israel is spared through the Passover lamb\'s blood and leaves Egypt laden with wealth.',
        ref: 'Exodus 7–12',
      },
      {
        title: 'Crossing the Red Sea',
        date: 'c. 1446 BC',
        description:
          'God parts the sea; Israel crosses on dry ground while Pharaoh\'s army is destroyed. Moses sings the song of deliverance.',
        ref: 'Exodus 14–15',
      },
      {
        title: 'The Law at Sinai',
        date: 'c. 1446 BC',
        description:
          'At Mount Sinai God gives the Ten Commandments and the covenant law; Israel becomes His treasured nation.',
        ref: 'Exodus 19–24',
      },
      {
        title: 'Wilderness wanderings',
        date: 'c. 1446–1406 BC',
        description:
          'Unbelief at Kadesh condemns the Exodus generation to 40 years in the desert; the new generation reaches Moab under Moses\' farewell.',
        ref: 'Numbers 13–14; Deuteronomy',
      },
    ],
  },
  {
    id: 'conquest',
    title: 'Conquest of Canaan',
    period: 'c. 1406–1370 BC',
    description:
      'Under Joshua, Israel crosses the Jordan, conquers Canaan\'s strongholds, and divides the land among the tribes. God fulfills His promise to give Abraham\'s descendants the land.',
    events: [
      {
        title: 'Crossing the Jordan',
        date: 'c. 1406 BC',
        description:
          'God stops the Jordan\'s flow; Israel crosses on dry ground and sets up memorial stones at Gilgal.',
        ref: 'Joshua 3–4',
      },
      {
        title: 'The fall of Jericho',
        date: 'c. 1406 BC',
        description:
          'After seven days of marching, Jericho\'s walls collapse; only Rahab\'s household is spared.',
        ref: 'Joshua 6',
      },
      {
        title: 'The campaigns and division of the land',
        date: 'c. 1406–1390 BC',
        description:
          'Joshua leads southern and northern campaigns, then allots the land to the nine and a half tribes.',
        ref: 'Joshua 10–21',
      },
      {
        title: 'Joshua\'s farewell',
        date: 'c. 1370 BC',
        description:
          'Joshua renews the covenant at Shechem: "Choose this day whom you will serve... as for me and my house, we will serve the LORD."',
        ref: 'Joshua 23–24',
      },
    ],
  },
  {
    id: 'judges',
    title: 'The Judges',
    period: 'c. 1370–1050 BC',
    description:
      'Without central leadership, Israel cycles through sin, oppression, repentance, and deliverance. God raises judges — Deborah, Gideon, Samson — but the era ends in moral chaos: "everyone did what was right in his own eyes."',
    events: [
      {
        title: 'Othniel, Ehud, and Deborah',
        date: 'c. 1360–1200 BC',
        description:
          'The first judges deliver Israel from Mesopotamian, Moabite, and Canaanite oppression; Deborah and Barak defeat Sisera.',
        ref: 'Judges 3–5',
      },
      {
        title: 'Gideon',
        date: 'c. 1160 BC',
        description:
          'With 300 men, Gideon routs the Midianites; he refuses kingship but his legacy falters.',
        ref: 'Judges 6–8',
      },
      {
        title: 'Samson',
        date: 'c. 1080 BC',
        description:
          'The Nazirite strongman battles the Philistines; betrayed by Delilah, he dies destroying their temple.',
        ref: 'Judges 13–16',
      },
      {
        title: 'Ruth',
        date: 'During the judges',
        description:
          'Amid the darkness, Ruth\'s loyalty leads to Boaz and the line of David — grace in the shadows.',
        ref: 'Ruth',
      },
      {
        title: 'Samuel, the last judge',
        date: 'c. 1070–1050 BC',
        description:
          'Samuel leads Israel back to God, defeats the Philistines at Mizpah, and anoints Israel\'s first kings.',
        ref: '1 Samuel 1–12',
      },
    ],
  },
  {
    id: 'united-kingdom',
    title: 'The United Kingdom',
    period: 'c. 1050–930 BC',
    description:
      'Israel demands a king. Saul fails, David establishes the dynasty and Jerusalem, and Solomon builds the temple at Israel\'s golden height — but his idolatry sets up the kingdom\'s fracture.',
    events: [
      {
        title: 'Saul anointed king',
        date: 'c. 1050 BC',
        description:
          'Israel demands a king "like all the nations"; Saul is anointed but rejected for disobedience.',
        ref: '1 Samuel 8–15',
      },
      {
        title: 'David becomes king',
        date: 'c. 1010 BC',
        description:
          'After years fleeing Saul, David unites Israel, captures Jerusalem, and receives the covenant of an everlasting dynasty.',
        ref: '2 Samuel 5, 7',
      },
      {
        title: 'Solomon\'s reign and the temple',
        date: 'c. 970–930 BC',
        description:
          'Solomon\'s wisdom and wealth peak with the temple\'s dedication; then foreign wives turn his heart to idols.',
        ref: '1 Kings 3–11',
      },
    ],
  },
  {
    id: 'divided-kingdom',
    title: 'The Divided Kingdom',
    period: '930–722 BC',
    description:
      'The kingdom splits into Israel (north) and Judah (south). Israel never has a good king and falls to Assyria; Judah wavers between reform and idolatry while prophets — Elijah, Elisha, Isaiah, Amos, Hosea — thunder.',
    events: [
      {
        title: 'The kingdom divides',
        date: '930 BC',
        description:
          'Rehoboam\'s harshness splits the kingdom; Jeroboam leads ten northern tribes into calf worship at Bethel and Dan.',
        ref: '1 Kings 12',
      },
      {
        title: 'Elijah on Mount Carmel',
        date: 'c. 865 BC',
        description:
          'Elijah confronts 850 prophets of Baal; fire falls, the prophets are slain, and rain returns.',
        ref: '1 Kings 18',
      },
      {
        title: 'Fall of Samaria',
        date: '722 BC',
        description:
          'Assyria conquers the northern kingdom; Israel\'s ten tribes are exiled and scattered.',
        ref: '2 Kings 17',
      },
      {
        title: 'Hezekiah\'s reforms and deliverance',
        date: 'c. 715–686 BC',
        description:
          'Hezekiah cleanses the temple and trusts God when Assyria besieges Jerusalem; 185,000 Assyrians die in a night.',
        ref: '2 Kings 18–19',
      },
      {
        title: 'Josiah\'s revival',
        date: 'c. 622 BC',
        description:
          'The rediscovered Book of the Law sparks Judah\'s last great reformation under boy-king Josiah.',
        ref: '2 Kings 22–23',
      },
    ],
  },
  {
    id: 'exile',
    title: 'The Exile',
    period: '605–536 BC',
    description:
      'Nebuchadnezzar destroys Jerusalem and the temple, carrying Judah to Babylon. Yet in exile God preserves a remnant — Daniel in the palace, Ezekiel among the captives — and promises restoration.',
    events: [
      {
        title: 'First deportation; Daniel taken',
        date: '605 BC',
        description:
          'Nebuchadnezzar\'s first siege carries off Daniel and other nobles to Babylon.',
        ref: 'Daniel 1',
      },
      {
        title: 'Fall of Jerusalem',
        date: '586 BC',
        description:
          'After an 18-month siege, Jerusalem falls; the temple burns; Zedekiah is blinded and exiled.',
        ref: '2 Kings 25',
      },
      {
        title: 'Daniel in Babylon',
        date: '605–536 BC',
        description:
          'Daniel serves kings with integrity, survives the lions\' den, and receives visions of God\'s everlasting kingdom.',
        ref: 'Daniel 2, 6–7',
      },
      {
        title: 'Ezekiel\'s visions of restoration',
        date: '593–571 BC',
        description:
          'Among the exiles, Ezekiel sees the valley of dry bones live and a new temple where God\'s glory returns.',
        ref: 'Ezekiel 37, 40–48',
      },
    ],
  },
  {
    id: 'return',
    title: 'Return from Exile',
    period: '536–430 BC',
    description:
      'Cyrus of Persia lets the Jews return. Zerubbabel rebuilds the temple, Ezra restores the Law, and Nehemiah rebuilds Jerusalem\'s walls — while Esther saves the Jews in Persia and Malachi closes the Old Testament.',
    events: [
      {
        title: 'Cyrus\'s decree; first return',
        date: '538 BC',
        description:
          'Cyrus permits the Jews to return; Zerubbabel leads some 50,000 back to Jerusalem.',
        ref: 'Ezra 1–2',
      },
      {
        title: 'The temple rebuilt',
        date: '520–516 BC',
        description:
          'Spurred by Haggai and Zechariah, the returned exiles complete the second temple.',
        ref: 'Ezra 6; Haggai; Zechariah',
      },
      {
        title: 'Esther saves the Jews',
        date: 'c. 480 BC',
        description:
          'Queen Esther exposes Haman\'s genocidal plot; the Jews are delivered and Purim is established.',
        ref: 'Esther',
      },
      {
        title: 'Ezra\'s reforms',
        date: '458 BC',
        description:
          'Ezra the scribe arrives, teaches the Law, and leads the people in repentance.',
        ref: 'Ezra 7–10',
      },
      {
        title: 'Nehemiah rebuilds the walls',
        date: '445 BC',
        description:
          'Nehemiah completes Jerusalem\'s walls in 52 days despite fierce opposition, then leads covenant renewal.',
        ref: 'Nehemiah 1–13',
      },
      {
        title: 'Malachi: the last prophet',
        date: 'c. 430 BC',
        description:
          'Malachi confronts spiritual apathy and promises the coming Messenger — closing the Old Testament.',
        ref: 'Malachi 3–4',
      },
    ],
  },
  {
    id: 'intertestamental',
    title: 'The Intertestamental Period',
    period: '430 BC–AD 6',
    description:
      'Four hundred "silent years" between the Testaments: Persia falls to Alexander, Greek culture spreads, the Maccabees revolt, and Rome takes Judea — setting the stage for Christ.',
    events: [
      {
        title: 'Alexander the Great conquers Persia',
        date: '333–323 BC',
        description:
          'Greek language and culture spread across the Near East; the Hebrew Scriptures are translated into Greek (the Septuagint).',
      },
      {
        title: 'The Maccabean revolt',
        date: '167–160 BC',
        description:
          'Judas Maccabeus leads a revolt against Antiochus Epiphanes\' desecration of the temple; Jewish independence is restored and Hanukkah instituted.',
      },
      {
        title: 'Rome takes Judea',
        date: '63 BC',
        description:
          'Pompey captures Jerusalem; Judea becomes a Roman client state under the Herods.',
      },
      {
        title: 'Herod the Great',
        date: '37–4 BC',
        description:
          'Herod rebuilds the temple magnificently while ruling with paranoid cruelty; Jesus is born near the end of his reign.',
        ref: 'Matthew 2',
      },
    ],
  },
  {
    id: 'jesus',
    title: 'The Life of Jesus',
    period: 'c. 6 BC–AD 33',
    description:
      'The Word becomes flesh: born in Bethlehem, baptized by John, ministering for three years in Galilee and Judea, crucified under Pilate, and raised on the third day — "God was in Christ reconciling the world to himself."',
    events: [
      {
        title: 'The birth of Jesus',
        date: 'c. 6–4 BC',
        description:
          'Born of the virgin Mary in Bethlehem; angels announce Him to shepherds; Magi worship Him.',
        ref: 'Matthew 1–2; Luke 1–2',
      },
      {
        title: 'Baptism and temptation',
        date: 'c. AD 27',
        description:
          'John baptizes Jesus; the Spirit descends and the Father speaks. Jesus overcomes Satan\'s temptations in the wilderness.',
        ref: 'Matthew 3–4',
      },
      {
        title: 'Galilean ministry',
        date: 'c. AD 27–30',
        description:
          'Jesus preaches the kingdom, calls the Twelve, heals multitudes, and teaches in parables and the Sermon on the Mount.',
        ref: 'Matthew 5–7; Mark 1–9; Luke 4–9',
      },
      {
        title: 'Journey to Jerusalem; final week',
        date: 'c. AD 30',
        description:
          'Triumphal entry, temple cleansing, Last Supper, Gethsemane, trials before Caiaphas and Pilate.',
        ref: 'Matthew 21–27; John 12–19',
      },
      {
        title: 'Crucifixion and resurrection',
        date: 'c. AD 30 (or 33)',
        description:
          'Jesus dies for our sins, is buried, and rises on the third day; He appears to His disciples over 40 days, then ascends.',
        ref: 'Matthew 28; Luke 24; John 20–21; Acts 1',
      },
    ],
  },
  {
    id: 'early-church',
    title: 'The Early Church',
    period: 'AD 33–47',
    description:
      'The Spirit falls at Pentecost and the church explodes from Jerusalem into Judea and Samaria. Stephen is martyred, Saul is converted, and Peter opens the door to the Gentiles.',
    events: [
      {
        title: 'Pentecost',
        date: 'AD 33',
        description:
          'The Holy Spirit falls; Peter preaches; 3,000 are baptized — the church is born.',
        ref: 'Acts 2',
      },
      {
        title: 'Stephen martyred; persecution scatters the church',
        date: 'c. AD 34',
        description:
          'Stephen\'s bold witness ends in stoning; persecution drives believers to Judea and Samaria, spreading the gospel.',
        ref: 'Acts 7–8',
      },
      {
        title: 'Saul converted',
        date: 'c. AD 34',
        description:
          'The persecutor meets the risen Jesus on the Damascus road and becomes Paul, apostle to the Gentiles.',
        ref: 'Acts 9',
      },
      {
        title: 'The gospel to the Gentiles',
        date: 'c. AD 40',
        description:
          'Peter preaches to Cornelius\'s household; the Spirit falls on Gentiles. The Antioch church sends relief and missionaries.',
        ref: 'Acts 10–11',
      },
      {
        title: 'The Jerusalem council',
        date: 'c. AD 49',
        description:
          'The apostles affirm that Gentiles are saved by faith without circumcision, preserving the gospel of grace.',
        ref: 'Acts 15',
      },
    ],
  },
  {
    id: 'pauls-journeys',
    title: "Paul's Missionary Journeys",
    period: 'AD 47–62',
    description:
      'Paul carries the gospel across the Roman Empire — Cyprus, Asia Minor, Greece, and finally Rome — planting churches, writing letters, and suffering for Christ.',
    events: [
      {
        title: 'First journey: Cyprus and Galatia',
        date: 'AD 47–48',
        description:
          'Paul and Barnabas preach in Cyprus, Pisidian Antioch, Iconium, Lystra, and Derbe; churches are planted amid persecution.',
        ref: 'Acts 13–14',
      },
      {
        title: 'Second journey: Macedonia and Greece',
        date: 'AD 49–52',
        description:
          'The Macedonian call; Philippi, Thessalonica, Berea, Athens, and 18 months in Corinth. Paul writes 1–2 Thessalonians.',
        ref: 'Acts 15:36–18:22',
      },
      {
        title: 'Third journey: Ephesus',
        date: 'AD 53–57',
        description:
          'Over two years in Ephesus; "all Asia heard the word." Paul writes 1 Corinthians, 2 Corinthians, Galatians, Romans.',
        ref: 'Acts 18:23–21:16',
      },
      {
        title: 'Arrest, shipwreck, and Rome',
        date: 'AD 57–62',
        description:
          'Arrested in Jerusalem, Paul appeals to Caesar, survives shipwreck, and preaches two years under house arrest in Rome.',
        ref: 'Acts 21–28',
      },
    ],
  },
  {
    id: 'early-christianity',
    title: 'Early Christianity',
    period: 'AD 62–100',
    description:
      'The apostles finish their course under persecution; the New Testament is completed; the church, though pressed by Rome, spreads through the empire on the apostles\' foundation.',
    events: [
      {
        title: 'Paul\'s final imprisonment and death',
        date: 'c. AD 64–67',
        description:
          'Paul writes 2 Timothy from a Roman dungeon — "I have fought the good fight" — and is martyred under Nero.',
        ref: '2 Timothy 4',
      },
      {
        title: 'Peter\'s martyrdom; fall of Jerusalem',
        date: 'AD 64–70',
        description:
          'Peter is crucified in Rome (tradition); in AD 70 Titus destroys Jerusalem and the temple, fulfilling Jesus\' prophecy.',
        ref: '2 Peter; Matthew 24:2',
      },
      {
        title: 'John\'s writings',
        date: 'c. AD 85–95',
        description:
          'From Ephesus, John writes his Gospel and epistles; exiled to Patmos, he receives Revelation.',
        ref: 'John 20:31; Revelation 1:9',
      },
      {
        title: 'The apostolic age closes',
        date: 'c. AD 100',
        description:
          'John\'s death ends the apostolic era; the completed Scriptures and the Spirit-empowered church carry the gospel to the nations.',
      },
    ],
  },
];
