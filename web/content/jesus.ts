export interface JesusSection {
  id: string;
  title: string;
  period: string;
  summary: string;
  events: { title: string; description: string; ref: string }[];
  keyPassages: string[];
  reflection: string[];
}

export const JESUS_PATH: JesusSection[] = [
  {
    id: 'birth',
    title: 'The Birth of Jesus',
    period: 'c. 6–4 BC',
    summary: `The birth of Jesus is the hinge of human history — the moment eternity entered time. After centuries of prophecy and 400 years of prophetic silence, "in the fullness of time, God sent out his Son, born to a woman" (Galatians 4:4). Every detail was foretold: born of a virgin (Isaiah 7:14), in Bethlehem (Micah 5:2), of David's line (2 Samuel 7:16), preceded by a forerunner (Malachi 3:1). The God who promised kept his promises with startling precision.

Yet the King arrived in obscurity: no room in the inn, a manger for a cradle, shepherds for witnesses. This was no accident but revelation — God's kingdom comes not through power and prestige but through humility and grace. From his first breath, Jesus identified with the lowly. The Magi's worship and Herod's rage previewed the world's divided response: adoration or opposition, never indifference.

The birth narratives establish who Jesus is: fully God (conceived by the Holy Spirit, Matthew 1:20) and fully man (born of Mary, Luke 2:7). The virgin birth means he did not inherit Adam's sinful nature — the sinless second Adam, qualified to save. Christmas is not merely a heartwarming story; it is the invasion of grace, God with us (Immanuel, Matthew 1:23), come to save his people from their sins.`,
    events: [
      { title: 'The Annunciation to Mary', description: 'The angel Gabriel tells the virgin Mary she will conceive by the Holy Spirit and bear the Son of the Most High. Her response — "let it be to me according to your word" — is the model of surrendered faith.', ref: 'Luke 1:26-38' },
      { title: 'The Annunciation to Joseph', description: 'Joseph, discovering Mary pregnant, plans a quiet divorce until an angel reveals the child is conceived by the Holy Spirit. Joseph obeys, naming him Jesus — "for he will save his people from their sins."', ref: 'Matthew 1:18-25' },
      { title: 'The Birth in Bethlehem', description: 'Caesar\'s census brings Joseph and Mary to Bethlehem, where Jesus is born and laid in a manger. Angels announce his birth to shepherds: "a Savior, who is Christ the Lord."', ref: 'Luke 2:1-20' },
      { title: 'The Visit of the Magi', description: 'Wise men from the east follow the star to worship the newborn king with gold, frankincense, and myrrh — gifts fit for royalty, deity, and burial. Their worship contrasts Herod\'s hostility.', ref: 'Matthew 2:1-12' },
      { title: 'The Flight to Egypt', description: 'Warned in a dream, Joseph flees with Mary and Jesus to Egypt, escaping Herod\'s massacre of Bethlehem\'s infants. Like Israel of old, God\'s Son comes "out of Egypt" (Hosea 11:1).', ref: 'Matthew 2:13-18' },
      { title: 'The Presentation at the Temple', description: 'Mary and Joseph present Jesus at the temple, where Simeon prophesies he is God\'s salvation — "a light for revelation to the nations" — and Anna gives thanks. Simeon warns Mary a sword will pierce her soul.', ref: 'Luke 2:21-38' },
      { title: 'Jesus in the Temple at Twelve', description: 'At twelve, Jesus stays behind in Jerusalem, astonishing teachers with his understanding. "Didn\'t you know that I must be in my Father\'s house?" — his first recorded words reveal his divine sonship and mission.', ref: 'Luke 2:41-52' },
    ],
    keyPassages: ['Matthew 1:18-25', 'Matthew 2:1-12', 'Luke 1:26-38', 'Luke 2:1-20', 'John 1:14', 'Galatians 4:4-5'],
    reflection: [
      'The King of kings was born in a stable and laid in a manger. What does God\'s choice of obscurity reveal about his kingdom\'s values — and yours?',
      'Mary said "let it be to me according to your word." Is there an area where God is asking for that same surrendered "yes" from you?',
      'From birth, people responded to Jesus with worship (Magi, shepherds) or hostility (Herod). What is your response to him today?',
    ],
  },
  {
    id: 'ministry',
    title: 'The Ministry of Jesus',
    period: 'c. AD 27–30',
    summary: `For about three years, Jesus of Nazareth conducted the most consequential public ministry in history. It began at his baptism, where the Father declared "This is my beloved Son" and the Spirit descended (Matthew 3:17), and continued through the wilderness temptation, where he defeated Satan with Scripture (Matthew 4:1-11). From Capernaum as his base, he preached "the gospel of the kingdom" (Mark 1:14-15) throughout Galilee, Judea, and beyond.

His ministry had three intertwined strands: preaching, healing, and discipling. He taught with unprecedented authority (Matthew 7:29) — in the Sermon on the Mount, in parables, in confrontations with religious leaders. He healed "every disease and every sickness" (Matthew 9:35), demonstrating the kingdom's power breaking into a broken world. And he invested deeply in twelve ordinary men, training them to carry the mission after his departure.

What distinguished his ministry was its character: holy yet merciful, truthful yet gracious. He ate with tax collectors and sinners while denouncing Pharisaic hypocrisy; he wept over Jerusalem while cleansing its temple. "He went about doing good" (Acts 10:38) — every act revealed the Father's heart. His growing popularity provoked growing opposition, setting the trajectory toward the cross. The ministry years show us not just what Jesus did but who God is.`,
    events: [
      { title: 'The Baptism of Jesus', description: 'John baptizes Jesus in the Jordan; the Spirit descends like a dove and the Father declares, "This is my beloved Son, in whom I am well pleased." The Trinity is revealed at the ministry\'s launch.', ref: 'Matthew 3:13-17' },
      { title: 'The Temptation in the Wilderness', description: 'For forty days Jesus is tempted by Satan — appetite, presumption, power — and defeats each with "It is written." Where Adam and Israel failed, the Son succeeds.', ref: 'Matthew 4:1-11' },
      { title: 'The Calling of the Disciples', description: 'Jesus calls fishermen — Peter, Andrew, James, John — with "Follow me, and I will make you fishers of men." He appoints twelve apostles to be with him and to preach.', ref: 'Mark 1:16-20; 3:13-19' },
      { title: 'The Sermon on the Mount', description: 'From a Galilean hillside, Jesus delivers his most famous teaching: kingdom character (Beatitudes), deeper righteousness, prayer, trust, and the narrow way. The crowds are astonished at his authority.', ref: 'Matthew 5-7' },
      { title: 'Ministry Throughout Galilee', description: 'Jesus preaches in synagogues, heals the sick, casts out demons, and forgives sins — provoking controversy when he claims divine prerogatives. "The Son of Man has authority on earth to forgive sins."', ref: 'Mark 1:21-2:12' },
      { title: 'The Transfiguration', description: 'On a mountain, Jesus is transfigured before Peter, James, and John — his face shining, Moses and Elijah appearing, the Father declaring, "Listen to him!" A preview of glory before the cross.', ref: 'Matthew 17:1-8' },
      { title: 'The Triumphal Entry', description: 'Jesus enters Jerusalem riding a donkey, fulfilling Zechariah 9:9. Crowds shout "Hosanna!" — but within days the same voices will cry "Crucify him." The King comes in peace; the city rejects him.', ref: 'Matthew 21:1-11' },
    ],
    keyPassages: ['Matthew 3:13-17', 'Matthew 4:1-11', 'Matthew 5-7', 'Mark 1:14-15', 'Luke 4:16-21', 'John 3:1-21'],
    reflection: [
      'Jesus defeated temptation with memorized Scripture ("It is written"). What specific verses do you have ready for your battles?',
      'He invested deeply in twelve ordinary people rather than chasing crowds. Who are you investing in — and who is investing in you?',
      'The same crowds shouted "Hosanna!" then "Crucify him!" Where might your own devotion to Jesus be more fickle than you admit?',
    ],
  },
  {
    id: 'miracles',
    title: 'The Miracles of Jesus',
    period: 'c. AD 27–30',
    summary: `John calls Jesus's miracles "signs" (semeia) — they point beyond themselves to who he is. The Gospels record about 37 specific miracles, displaying authority over every realm: nature (calming storms, walking on water), disease (healing lepers, the blind, the paralyzed), demons ("even the demons are subject," Luke 10:17), and death itself (raising Jairus's daughter, the widow's son, Lazarus). Each miracle is a preview of the kingdom — creation being healed, the curse being reversed.

The miracles flowed from compassion as well as power. "Moved with compassion" (Matthew 14:14) precedes the feeding of the 5,000; Jesus wept before raising Lazarus (John 11:35). His power never served spectacle — he refused to perform for Herod (Luke 23:8) — but always served love. The miracles authenticated his claims: "the works that I do in my Father's name, these testify about me" (John 10:25).

Yet miracles alone didn't produce faith. Many who saw signs still rejected him (John 12:37). Signs point; they don't compel. The greatest miracle — the resurrection — would divide the world permanently. Jesus's miracles invite us to see beyond the wonder to the Wonder-worker: a Savior both willing and able to save, who does in souls what he did in bodies — making dead things live.`,
    events: [
      { title: 'Water to Wine at Cana', description: 'At a wedding in Cana, Jesus turns water into wine — his first sign, revealing his glory. His disciples believed. Joy, abundance, and transformation mark his kingdom.', ref: 'John 2:1-11' },
      { title: 'Calming the Storm', description: 'Asleep in a storm-tossed boat, Jesus awakens to rebuke wind and waves: "Peace! Be still!" The disciples ask, "Who then is this, that even the wind and the sea obey him?"', ref: 'Mark 4:35-41' },
      { title: 'Feeding the Five Thousand', description: 'With five loaves and two fish, Jesus feeds about 5,000 men — the only miracle in all four Gospels. Twelve baskets remain. He is the Bread of Life.', ref: 'John 6:1-14' },
      { title: 'Walking on Water', description: 'At night on the Sea of Galilee, Jesus walks to his disciples on the waves. Peter walks briefly, then sinks: "You of little faith, why did you doubt?" "It is I; do not be afraid."', ref: 'Matthew 14:22-33' },
      { title: 'Healing the Blind and Lame', description: 'Jesus heals Bartimaeus ("your faith has made you well"), the paralytic lowered through the roof ("your sins are forgiven"), and the man born blind — each displaying kingdom restoration.', ref: 'Mark 10:46-52; 2:1-12; John 9:1-7' },
      { title: 'Casting Out Demons', description: 'Jesus silences demons with a word — the Gerasene demoniac ("Legion"), the boy with seizures. Even unclean spirits obey, testifying: "You are the Son of God."', ref: 'Mark 5:1-20; 9:14-29' },
      { title: 'Raising the Dead', description: 'Jairus\'s daughter ("Talitha koum"), the widow of Nain\'s son, and Lazarus after four days — each a greater display, culminating in "I am the resurrection and the life."', ref: 'Mark 5:35-43; Luke 7:11-15; John 11:1-44' },
    ],
    keyPassages: ['John 2:1-11', 'Mark 4:35-41', 'John 6:1-14', 'John 11:1-44', 'John 20:30-31'],
    reflection: [
      'John says the signs were written "that you may believe." Which miracle most strengthens your faith in who Jesus is — and why?',
      'Jesus\'s miracles flowed from compassion, not showmanship. How does that shape the way you use whatever power or influence you have?',
      'Many saw miracles yet didn\'t believe (John 12:37). What does that tell you about the relationship between evidence and faith?',
    ],
  },
  {
    id: 'parables',
    title: 'The Parables of Jesus',
    period: 'c. AD 27–30',
    summary: `About a third of Jesus's teaching came in parables — earthly stories with heavenly meanings. He used farming, fishing, weddings, and money to reveal the kingdom's mysteries. Parables are simultaneously simple and profound: a child can follow the story while scholars plumb its depths for lifetimes. They engage the imagination before they instruct the mind, slipping past defenses to confront the heart.

Jesus explained why he taught this way: "To you it has been given to know the mysteries of the Kingdom... but to them it has not been given" (Matthew 13:11). Parables reveal truth to hungry hearts and conceal it from the hardened — the same sun that melts wax hardens clay. They demand response: hearers must wrestle, decide, and act. The parable of the sower is itself about hearing parables — what kind of soil are you?

The parables cluster around great themes: the kingdom's nature (mustard seed, leaven, treasure, pearl), God's grace toward sinners (lost sheep, lost coin, prodigal son), the call to readiness (ten virgins, talents), prayer (persistent widow, Pharisee and tax collector), and neighbor love (Good Samaritan). Each ends with an implicit question: will you enter the kingdom, receive grace, stay ready, pray, love? "He who has ears to hear, let him hear."`,
    events: [
      { title: 'The Sower and the Soils', description: 'Seed falls on path, rocky, thorny, and good soil — the same word, different hearts. "He who has ears, let him hear." The parable is about hearing itself.', ref: 'Matthew 13:1-23' },
      { title: 'The Good Samaritan', description: 'Asked "who is my neighbor?", Jesus tells of a Samaritan who shows costly mercy to a beaten Jew. "Go and do likewise." Neighbor is not a category but a calling.', ref: 'Luke 10:25-37' },
      { title: 'The Prodigal Son', description: 'Two lost sons: the rebellious younger and the self-righteous elder. The father runs to the returning and pleads with the resentful. Grace offends the religious and rescues the rebellious.', ref: 'Luke 15:11-32' },
      { title: 'The Lost Sheep, Coin, and Son', description: 'Luke 15\'s trilogy answers grumbling Pharisees: heaven rejoices over one sinner who repents. Jesus receives sinners because seeking the lost is God\'s heart.', ref: 'Luke 15:1-32' },
      { title: 'The Talents', description: 'A master entrusts talents to servants; the faithful are rewarded, the fearful rebuked. "Well done, good and faithful servant." Stewardship, not success, is the measure.', ref: 'Matthew 25:14-30' },
      { title: 'The Pharisee and the Tax Collector', description: 'Two men pray; the self-righteous goes home unjustified, the penitent justified. "Everyone who exalts himself will be humbled." God hears humble hearts.', ref: 'Luke 18:9-14' },
      { title: 'The Ten Virgins', description: 'Five wise and five foolish virgins await the bridegroom. The foolish run out of oil. "Watch therefore" — readiness for Christ\'s return cannot be borrowed.', ref: 'Matthew 25:1-13' },
    ],
    keyPassages: ['Matthew 13:1-23', 'Luke 10:25-37', 'Luke 15:1-32', 'Matthew 25:1-30', 'Luke 18:9-14'],
    reflection: [
      'In the sower parable, which soil best describes your heart right now — path, rocky, thorny, or good? What needs to change?',
      'Are you more like the younger son (needing to come home) or the elder son (needing to come in)? What is God saying to you?',
      'The Good Samaritan\'s love had hands, feet, and a wallet. Who is the "beaten man on your road" — and what would "go and do likewise" cost you?',
    ],
  },
  {
    id: 'teachings',
    title: 'The Teachings of Jesus',
    period: 'c. AD 27–30',
    summary: `"Never did a man speak like this man!" (John 7:46). Jesus taught with an authority that astonished crowds and enraged religious leaders. His teaching was revolutionary in content and form: he internalized the law (anger is murder's root, lust is adultery's heart), inverted values (the last shall be first, the meek inherit the earth), and centered everything on himself ("come to me," "believe in me," "I am the way").

The Sermon on the Mount (Matthew 5-7) is his most concentrated teaching: kingdom character in the Beatitudes, God-first practices (giving, praying, fasting), the reordering of treasure and trust ("seek first the kingdom"), and the final choice between two gates, two builders. The standard he sets — "be perfect as your Father is perfect" (5:48) — is impossible, which is precisely the point: it crushes self-righteousness and drives us to grace.

His most distinctive claims were about himself. The seven "I am" sayings in John (bread of life, light of the world, door, good shepherd, resurrection and life, way/truth/life, true vine) echo God's name from Exodus 3:14. "Before Abraham was born, I am" (John 8:58) — his listeners picked up stones because they understood exactly what he claimed. Jesus's teaching always leads to the same crisis: who do you say that I am? Neutrality is not an option his words allow.`,
    events: [
      { title: 'The Beatitudes', description: 'Jesus congratulates the poor in spirit, mourners, the meek, and the hungry for righteousness — upside-down blessedness with kingdom promises attached to each.', ref: 'Matthew 5:1-12' },
      { title: 'The Lord\'s Prayer', description: 'Asked to teach prayer, Jesus gives the model: God\'s name, kingdom, and will first; then daily bread, forgiveness, and guidance. A pattern, not just words.', ref: 'Matthew 6:9-13' },
      { title: 'The Golden Rule', description: '"Whatever you desire for men to do to you, you shall also do to them, for this is the law and the prophets." All ethics in one sentence.', ref: 'Matthew 7:12' },
      { title: 'Love Your Enemies', description: 'Jesus commands love for enemies, blessing for cursers, prayer for persecutors — "that you may be children of your Father." The family mark of God\'s children.', ref: 'Matthew 5:43-48' },
      { title: 'The "I Am" Sayings', description: 'Seven self-revelations in John — bread, light, door, shepherd, resurrection, way, vine — each claiming deity and meeting human need. "I am the way, the truth, and the life."', ref: 'John 6:35; 8:12; 10:9, 11; 11:25; 14:6; 15:1' },
      { title: 'The Olivet Discourse', description: 'On the Mount of Olives, Jesus teaches about Jerusalem\'s fall and his return: wars, persecution, the gospel preached to all nations — "watch therefore, for you don\'t know the day."', ref: 'Matthew 24-25' },
      { title: 'The Upper Room Discourse', description: 'On the night before the cross: foot-washing, the new commandment, the promise of the Spirit, the vine and branches, and his high-priestly prayer. "Peace I leave with you."', ref: 'John 13-17' },
    ],
    keyPassages: ['Matthew 5-7', 'John 8:12', 'John 14:6', 'John 15:1-8', 'Matthew 22:37-40'],
    reflection: [
      'The Sermon on the Mount\'s standard ("be perfect") is impossible by effort. Does it drive you to despair, to grace, or to lowering the bar?',
      'Which "I am" saying meets your deepest need right now — bread, light, shepherd, resurrection, way, or vine?',
      '"Who do you say that I am?" (Matthew 16:15). How would you answer Jesus if he asked you today?',
    ],
  },
  {
    id: 'disciples',
    title: 'The Disciples',
    period: 'c. AD 27–30',
    summary: `Jesus chose twelve ordinary men — fishermen, a tax collector, a zealot, a skeptic — to be his apostles. They were not the religious elite; they were uneducated, impulsive, argumentative, and slow to understand. "He appointed twelve, that they might be with him, and that he might send them out to preach" (Mark 3:14). Being with him came before being sent by him — presence before mission, a pattern for all ministry.

The Gospels honestly record their failures: they argued about greatness, fell asleep in Gethsemane, fled at his arrest, and Peter denied him three times. Yet Jesus didn't discard them. After the resurrection, he restored Peter ("feed my sheep," John 21:17), commissioned all eleven ("make disciples of all nations," Matthew 28:19), and empowered them at Pentecost. The cowards became martyrs; the deserters became founders.

Their transformation is Christianity's quiet apologetic: something turned these frightened men into bold witnesses willing to die. That something was the risen Christ and the indwelling Spirit. The disciples remind us that Jesus doesn't call the qualified; he qualifies the called. If he could use them — impulsive Peter, doubting Thomas, betraying Judas's replacements — he can use us.`,
    events: [
      { title: 'The Calling of the Twelve', description: 'After a night of prayer, Jesus appoints twelve apostles from his followers — giving them authority to preach, heal, and cast out demons. Ordinary men for an extraordinary mission.', ref: 'Mark 3:13-19; Luke 6:12-16' },
      { title: 'Peter\'s Confession', description: 'At Caesarea Philippi, Peter declares, "You are the Christ, the Son of the living God." Jesus blesses him — then rebukes him when Peter resists the cross. Confession and correction together.', ref: 'Matthew 16:13-23' },
      { title: 'Sent Out in Pairs', description: 'Jesus sends the twelve (then seventy-two) to preach, heal, and announce the kingdom — with minimal provisions and maximum dependence. "The harvest indeed is plentiful, but the laborers are few."', ref: 'Mark 6:7-13; Luke 10:1-12' },
      { title: 'Failure in Gethsemane', description: 'Asked to "watch and pray," Peter, James, and John sleep — three times. At his arrest, all flee. Peter follows at a distance, then denies Jesus three times before the rooster crows.', ref: 'Matthew 26:36-75' },
      { title: 'The Restoration of Peter', description: 'By the Sea of Galilee, the risen Jesus asks Peter three times, "Do you love me?" — matching the three denials. Each "yes" brings a commission: "Feed my sheep." Failure is not final.', ref: 'John 21:1-19' },
      { title: 'The Great Commission', description: 'On a Galilean mountain, the risen Christ commissions the eleven: "Go and make disciples of all nations... I am with you always." The mission that defines the church begins.', ref: 'Matthew 28:16-20' },
      { title: 'Pentecost: Empowered Witnesses', description: 'The Spirit falls; Peter preaches; 3,000 are saved. The frightened disciples become fearless witnesses — the birth of the church and the proof of their transformation.', ref: 'Acts 2:1-41' },
    ],
    keyPassages: ['Mark 3:13-19', 'Matthew 16:13-23', 'Matthew 28:16-20', 'John 21:1-19', 'Acts 2:1-41'],
    reflection: [
      '"That they might be with him" came before "that he might send them." Is your life ordered presence-before-mission, or have you reversed it?',
      'Peter\'s denials were met with Christ\'s restoration, not rejection. What failure of yours needs to hear "Do you love me? Feed my sheep"?',
      'Jesus chose ordinary, flawed people and changed the world through them. What excuse of inadequacy do you need to surrender?',
    ],
  },
  {
    id: 'death',
    title: 'The Death of Jesus',
    period: 'c. AD 30 (Passover)',
    summary: `The death of Jesus is the center of human history and the heart of the Christian faith. Betrayed by Judas for thirty pieces of silver, abandoned by his disciples, tried unjustly before the Sanhedrin and Pilate, mocked, flogged, and crucified between criminals — Jesus died the most shameful death Rome devised. Yet the Gospels present this not as tragedy but as triumph: the deliberate, planned, loving self-sacrifice of God for sinners.

The theological meaning is substitution. "Christ died for our sins" (1 Corinthians 15:3). On the cross, God "made him who knew no sin to be sin on our behalf" (2 Corinthians 5:21). Isaiah saw it 700 years early: "he was pierced for our transgressions... the LORD has laid on him the iniquity of us all" (Isaiah 53:5-6). Divine justice and divine love meet at the cross: sin fully punished, sinners fully pardoned. "It is finished" (John 19:30) — tetelestai, paid in full.

The events surrounding the death confirm its significance: darkness at noon, the temple curtain torn from top to bottom (access to God opened), an earthquake, the centurion's confession ("Truly this was the Son of God!"). Even in dying, Jesus forgave ("Father, forgive them"), saved (the thief: "today you will be with me in Paradise"), and cared (entrusting Mary to John). The cross is where God proved his love beyond question: "while we were yet sinners, Christ died for us" (Romans 5:8).`,
    events: [
      { title: 'The Last Supper', description: 'In the upper room, Jesus institutes the Lord\'s Supper — bread as his body, cup as his blood "poured out for many." He predicts betrayal and Peter\'s denial, then washes their feet.', ref: 'Matthew 26:17-30; John 13:1-17' },
      { title: 'Gethsemane', description: 'In anguish, Jesus prays, "If it is possible, let this cup pass... nevertheless, not my will, but yours." Betrayed by Judas\'s kiss, he is arrested while disciples flee.', ref: 'Matthew 26:36-56' },
      { title: 'The Trials', description: 'Before Annas, Caiaphas, the Sanhedrin, Pilate, and Herod — illegal night proceedings, false witnesses, political cowardice. "Are you the Christ?" "You have said it." Pilate washes his hands.', ref: 'Matthew 26:57-27:26' },
      { title: 'The Crucifixion', description: 'At Golgotha, Jesus is nailed to the cross between criminals. He forgives his executioners, saves the repentant thief, entrusts Mary to John. Darkness covers the land; he cries, "My God, my God, why have you forsaken me?"', ref: 'Matthew 27:27-54; Luke 23:26-49' },
      { title: '"It Is Finished"', description: 'Jesus\' final words: "It is finished" — the debt paid in full. He bows his head and gives up his spirit. The temple curtain tears; the earth shakes; the centurion confesses.', ref: 'John 19:28-37' },
      { title: 'The Burial', description: 'Joseph of Arimathea and Nicodemus bury Jesus in a new tomb, fulfilling Isaiah 53:9 ("with the rich in his death"). The tomb is sealed and guarded — setting the stage for resurrection.', ref: 'Matthew 27:57-66' },
    ],
    keyPassages: ['Isaiah 53', 'Matthew 26-27', 'Luke 23:26-49', 'John 19', '1 Corinthians 15:3-4', 'Romans 5:6-8'],
    reflection: [
      '"It is finished" — paid in full. Are you still trying to add payments to a completed transaction through guilt or performance?',
      'Jesus forgave his executioners from the cross. Who do you need to forgive — and what does his example demand of you?',
      'The centurion confessed at the foot of the cross. What keeps you from full surrender to the crucified Christ?',
    ],
  },
  {
    id: 'resurrection',
    title: 'The Resurrection of Jesus',
    period: 'c. AD 30 (First day of the week)',
    summary: `On the third day, the tomb was empty. The stone was rolled away not to let Jesus out but to let witnesses in. Mary Magdalene, Peter, John, the Emmaus disciples, the eleven, 500 at once, James, and Paul — all saw him alive (1 Corinthians 15:5-8). This was no resuscitation but transformation: the same body, now glorified — touchable, eating fish, yet passing through locked doors.

The resurrection is Christianity's non-negotiable center. "If Christ has not been raised, your faith is vain; you are still in your sins" (1 Corinthians 15:17). It vindicates Christ's claims (Romans 1:4), defeats death itself (1 Corinthians 15:54-57), guarantees believers' future resurrection (1 Corinthians 15:20-23), and empowers present life — "the exceeding greatness of his power... which he worked in Christ, when he raised him" (Ephesians 1:19-20).

The evidence convinced skeptics then and still does: the empty tomb (enemies never produced the body), the transformed disciples (cowards became martyrs — people don't die for what they know is a lie), the women witnesses (invented stories wouldn't use discredited witnesses), and the church's explosive birth in the very city of the crucifixion. The resurrection turned "do you believe this?" (John 11:26) from a question into the hinge of eternity. He is risen — and because he lives, we shall live also (John 14:19).`,
    events: [
      { title: 'The Empty Tomb', description: 'Before dawn, women find the stone rolled away and the tomb empty. Angels announce: "He is not here, but is risen!" Peter and John run to see the linen cloths lying alone.', ref: 'Luke 24:1-12; John 20:1-10' },
      { title: 'Appearance to Mary Magdalene', description: 'Weeping at the tomb, Mary meets a man she thinks is the gardener — until he says her name: "Mary!" She clings to him: "Rabboni!" The first witness is a formerly demon-possessed woman.', ref: 'John 20:11-18' },
      { title: 'The Road to Emmaus', description: 'Two disciples walk with the risen Jesus without recognizing him until he breaks bread. "Didn\'t our hearts burn within us?" He opens the Scriptures: all point to him.', ref: 'Luke 24:13-35' },
      { title: 'Appearance to Thomas', description: 'Doubting Thomas demands proof; a week later Jesus offers his wounds: "Reach here your finger... do not be unbelieving, but believing." Thomas confesses, "My Lord and my God!"', ref: 'John 20:24-29' },
      { title: 'The Galilean Appearances', description: 'By the Sea of Galilee, Jesus cooks breakfast, restores Peter, and commissions the disciples. On a mountain, 500 see him at once — the Great Commission follows.', ref: 'John 21:1-19; Matthew 28:16-20; 1 Corinthians 15:6' },
      { title: 'The Ascension Preview', description: 'For forty days Jesus appears, "speaking of the things concerning God\'s Kingdom" and proving himself alive "by many infallible proofs." The resurrection appearances establish the church\'s foundation.', ref: 'Acts 1:1-3' },
    ],
    keyPassages: ['Matthew 28:1-10', 'Luke 24', 'John 20-21', '1 Corinthians 15:1-28', 'Romans 1:4'],
    reflection: [
      'Paul says without the resurrection, faith is "vain" (1 Corinthians 15:17). How central is the resurrection in your actual belief and hope — peripheral doctrine or daily power?',
      'Thomas\'s doubts were met with evidence, not rebuke. What doubts about the resurrection have you honestly investigated — and what did you find?',
      '"Because I live, you shall live also" (John 14:19). How does Christ\'s resurrection reshape your view of death, grief, and the future?',
    ],
  },
  {
    id: 'ascension',
    title: 'The Ascension and Reign of Jesus',
    period: 'c. AD 30 (40 days after resurrection)',
    summary: `Forty days after the resurrection, on the Mount of Olives, Jesus "was taken up, and a cloud received him out of their sight" (Acts 1:9). Two angels promised, "This Jesus, who was received up from you into the sky, will come back in the same way" (Acts 1:11). The ascension is not Jesus's absence but his enthronement — the God-man taking his seat at the Father's right hand, "far above all rule and authority" (Ephesians 1:21).

The ascended Christ is actively reigning and ministering now. He intercedes for believers: "he always lives to make intercession for them" (Hebrews 7:25) — your defense attorney never sleeps. He sends the Spirit (John 16:7 — the ascension was necessary for Pentecost). He rules the church as its head (Ephesians 1:22) and directs its mission ("I am with you always," Matthew 28:20). He prepares a place for us (John 14:2-3). The ascension means Christianity has a living, reigning, praying Lord — not a memory but a monarch.

And he is coming back. "Behold, he is coming with the clouds" (Revelation 1:7) — bodily, visibly, gloriously. The ascension's promise shapes the church's posture: looking up in worship, looking out in mission, looking forward in hope. Between the ascension and the return, we live in the age of the Spirit-empowered church — Christ's body continuing his work until the King returns to make all things new.`,
    events: [
      { title: 'The Final Instructions', description: 'For forty days the risen Jesus teaches about the kingdom, commands the disciples to wait in Jerusalem for the Spirit, and renews the mission: witnesses "to the ends of the earth."', ref: 'Acts 1:1-8' },
      { title: 'The Ascension', description: 'On the Mount of Olives, Jesus is lifted up; a cloud receives him. The disciples worship and return to Jerusalem "with great joy, continually in the temple, praising God."', ref: 'Luke 24:50-53; Acts 1:9-12' },
      { title: 'The Angelic Promise', description: 'As they gaze upward, two men in white declare: "This Jesus... will come back in the same way as you saw him going." The ascension guarantees the return.', ref: 'Acts 1:10-11' },
      { title: 'Seated at the Right Hand', description: 'The New Testament\'s favorite description of Christ\'s present state: exalted, reigning, interceding. "Sit at my right hand" (Psalm 110:1) — quoted more than any other OT verse.', ref: 'Ephesians 1:20-23; Hebrews 1:3; 10:12' },
      { title: 'The Sending of the Spirit', description: 'From the throne, the ascended Christ pours out the Spirit at Pentecost (Acts 2:33). His departure was gain: the Spirit now indwells every believer.', ref: 'John 16:7; Acts 2:32-33' },
      { title: 'The Promise of Return', description: 'The ascended King will return bodily and visibly to judge and restore. "Come, Lord Jesus!" (Revelation 22:20) — the church\'s prayer between ascension and advent.', ref: 'Revelation 1:7; 22:20; 1 Thessalonians 4:16-17' },
    ],
    keyPassages: ['Acts 1:1-11', 'Luke 24:50-53', 'Ephesians 1:20-23', 'Hebrews 7:25', 'Revelation 22:20'],
    reflection: [
      'Hebrews says Jesus "always lives to make intercession" for you. How does knowing your defense never sleeps change your approach to guilt and prayer?',
      'The angels promised he will return "in the same way." Are you living more in expectation of his return, or as if this age is all there is?',
      'Between ascension and return, Christ works through his church — his body. What is your part in his ongoing mission right now?',
    ],
  },
];
