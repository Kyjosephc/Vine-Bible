export interface Devotional {
  id: string;
  title: string;
  minutes: 5 | 10 | 15 | 30 | 60;
  topic: string;
  ref: string;
  passageText: string;
  explanation: string;
  context: string;
  lesson: string;
  application: string;
  reflection: string[];
  prayer: string;
}

export const DEVOTIONALS: Devotional[] = [
  {
    id: 'dev-5-1',
    topic: 'Trust',
    title: 'The Shepherd Who Provides',
    minutes: 5,
    ref: 'Psalm 23:1',
    passageText: 'The LORD is my shepherd; I shall not want. (KJV)',
    explanation: `David, a former shepherd, knew exactly what this claim meant. A shepherd's job is total provision: food, water, protection, guidance. To say "the LORD is my shepherd" is to say: I am cared for by Someone competent and committed. "I shall not want" doesn't mean we get everything we wish for — it means we lack nothing we truly need, because our Shepherd knows the difference.`,
    context: `Psalm 23 is perhaps the most beloved psalm ever written, composed by David from his years tending sheep in Bethlehem's hills. He wrote it not as a young shepherd but as a king looking back — having learned through caves, battles, and betrayal that God's care never failed.`,
    lesson: `Contentment is not having everything; it is being held by the One who provides everything you need. When anxiety whispers "what if there's not enough?", the shepherd answers, "I am enough, and I am yours."`,
    application: `Today, when a "want" surfaces — for security, approval, control — pause and say aloud: "The LORD is my shepherd; I shall not want." Name the specific need and hand it to him before you try to meet it yourself.`,
    reflection: [
      'What is one thing you are afraid of lacking right now?',
      'How does picturing God as your shepherd (not just your king or judge) change how you bring him that fear?',
    ],
    prayer: `Lord, my Shepherd, I confess I often live as if I have no shepherd — anxious, striving, afraid of lack. Remind me today that you are mine and I am yours, and that you know what I need before I ask. Give me contentment in your care. In Jesus' name, amen.`,
  },
  {
    id: 'dev-5-2',
    topic: 'Hope',
    title: 'New Every Morning',
    minutes: 5,
    ref: 'Lamentations 3:22-23',
    passageText: 'It is because of the LORD\'s loving kindnesses that we are not consumed, because his compassion doesn\'t fail. They are new every morning. Great is your faithfulness. (WEB)',
    explanation: `Jeremiah wrote these words sitting in the rubble of Jerusalem — his city destroyed, his people exiled. "Great is your faithfulness" was not sung from comfort but declared in ruins. God's mercies are "new every morning" — not recycled, not rationed, not dependent on yesterday's performance. Each sunrise is a fresh delivery of grace.`,
    context: `Lamentations is a funeral song for Jerusalem after Babylon destroyed it in 586 BC. Jeremiah, the "weeping prophet," had warned of this judgment for decades. Yet in the middle of the darkest chapter, he preaches to his own soul: God's compassions never fail.`,
    lesson: `Your worst day does not exhaust God's mercy. Yesterday's failures, griefs, and sins do not determine today's supply — his faithfulness is the constant; our circumstances are the variable.`,
    application: `Start today by speaking this verse over your morning before you check your phone: "Your mercies are new this morning. Great is your faithfulness." Let today's grace be enough for today.`,
    reflection: [
      'What from yesterday are you carrying into today that God\'s "new mercies" could replace?',
      'Where have you doubted God\'s faithfulness lately — and what would it look like to declare it anyway, like Jeremiah?',
    ],
    prayer: `Father, great is your faithfulness. Thank you that your mercies are new this morning — not worn out, not withheld. Whatever yesterday held, today I receive fresh grace. Teach me to trust your compassions more than my circumstances. In Jesus' name, amen.`,
  },
  {
    id: 'dev-5-3',
    topic: 'Peace',
    title: 'Be Still',
    minutes: 5,
    ref: 'Psalm 46:10',
    passageText: 'Be still, and know that I am God. I will be exalted among the nations. I will be exalted in the earth. (WEB)',
    explanation: `"Be still" is not a suggestion for a quiet morning — in Hebrew it carries the force of "stop striving, let your hands drop." It was written for people whose world was shaking. The command pairs stillness with knowledge: we can stop striving precisely because we know who God is. He will be exalted — with or without our frantic help. Our stillness is not passivity; it is trust in his sovereignty.`,
    context: `Psalm 46 was likely written during a national crisis — perhaps the Assyrian siege of Jerusalem. "Though the earth changes... though the mountains shake" (v.2), God is "a very present help in trouble" (v.1). The stillness commanded is the stillness of a fortress people, not a defeated one.`,
    lesson: `You can stop striving because God never stops reigning. Stillness before God is not doing nothing — it is the most active trust there is.`,
    application: `Take 60 seconds right now: stop, breathe, and consciously drop one thing you've been striving to control. Pray: "You are God; I am not. I release this to you."`,
    reflection: [
      'What are you striving to control right now that you need to release?',
      'What would "being still" look like practically in your schedule today?',
    ],
    prayer: `God, I confess my striving — my clenched fists, my racing mind, my illusion of control. You are God and I am not. I drop my striving now and rest in your sovereignty. Be exalted in my life today, especially in the places I cannot fix. In Jesus' name, amen.`,
  },
  {
    id: 'dev-5-4',
    topic: "God's Word",
    title: 'The Word That Lights the Path',
    minutes: 5,
    ref: 'Psalm 119:105',
    passageText: 'Your word is a lamp to my feet, and a light for my path. (WEB)',
    explanation: `A lamp in the ancient world didn't flood the whole road with light — it lit just the next few steps. That's how God's word guides: not with a floodlight revealing the next ten years, but with enough light for the next faithful step. We want the whole map; God gives us the next step. Walking with the lamp means trusting him step by step.`,
    context: `Psalm 119 is the longest psalm — 176 verses celebrating God's word, written as an acrostic poem. Verse 105 sits at its heart, confessing what every verse demonstrates: Scripture is not just informative but illuminating, guiding real feet on real paths.`,
    lesson: `God's guidance usually comes as a lamp, not a floodlight. Faithfulness with today's step is how we discover tomorrow's direction.`,
    application: `Read one short passage of Scripture today (even five verses) and ask: "What is the next step this lights up?" Then take it — make the call, confess the sin, extend the kindness.`,
    reflection: [
      'What decision are you waiting for a "floodlight" on, where God may be offering only a lamp?',
      'What is the next faithful step his word is already lighting up?',
    ],
    prayer: `Lord, your word is a lamp to my feet. Forgive me for demanding the whole map before I'll take a step. Light my next step today through your word, and give me courage to walk in it. I trust you with the path I cannot yet see. In Jesus' name, amen.`,
  },
  {
    id: 'dev-5-5',
    topic: 'Strength',
    title: 'Strength for Today',
    minutes: 5,
    ref: 'Isaiah 40:31',
    passageText: 'But those who wait for the LORD will renew their strength. They will mount up with wings like eagles. They will run, and not be weary. They will walk, and not faint. (WEB)',
    explanation: `This promise was given to exhausted exiles who felt God had forgotten them. Notice the order: waiting comes before strength. "Wait" here means active, hopeful dependence — like a waiter attending to a guest. God doesn't promise to remove the need to run and walk; he promises strength for the running and walking. Eagles don't flap harder; they catch the wind. Waiting on God is catching his wind.`,
    context: `Isaiah 40 opens the "book of comfort" (chapters 40-66), spoken to Jews in Babylonian exile who felt abandoned. After 39 chapters of judgment, God speaks tenderly: "Comfort, comfort my people." The promise of renewed strength answered their deepest fear — that God was too tired, or too distant, to save.`,
    lesson: `Strength is not mustered; it is received. Those who wait on the Lord don't just survive the race — they soar, run, and walk without fainting, carried by a strength not their own.`,
    application: `Identify where you feel weary today. Instead of pushing harder in your own strength, pause to "wait" — pray honestly about your weariness, rest if you can, and ask God to renew you. Then walk today's path in his strength, not yours.`,
    reflection: [
      'Where are you running on empty right now — and have you actually waited on God about it, or just pushed through?',
      'What would "catching the wind" look like instead of "flapping harder" in your current season?',
    ],
    prayer: `Everlasting God, Creator of the ends of the earth, you never faint and never grow weary. I confess I am weary. I have been flapping hard in my own strength. Teach me to wait on you — actively, hopefully — and renew my strength. Let me mount up, run, and walk today in your power. In Jesus' name, amen.`,
  },
  {
    id: 'dev-5-6',
    topic: 'Love',
    title: 'Loved to the End',
    minutes: 5,
    ref: 'John 13:1',
    passageText: 'Now before the feast of the Passover, Jesus, knowing that his time had come that he would depart from this world to the Father, having loved his own who were in the world, he loved them to the end. (WEB)',
    explanation: `"To the end" means both to the end of time and to the uttermost degree. Jesus loved his disciples knowing exactly what was coming — betrayal, denial, abandonment — and knowing exactly who they were. His love wasn't based on their performance; it was based on his character. And if he loved them to the end, knowing all, he loves you to the end, knowing all.`,
    context: `John 13 opens the "upper room discourse" — Jesus's final evening with his disciples before the cross. Within hours, Judas would betray him, Peter would deny him, and all would flee. John wants us to know: Jesus loved them with full knowledge and loved them anyway, all the way to the cross.`,
    lesson: `Christ's love for you is not fragile, conditional, or surprised by your failures. He knew everything and loved to the uttermost — and still does.`,
    application: `When shame whispers that you've gone too far, answer with this verse: "He loved them to the end." Bring your worst failure to him today in confession, and receive the love that already knew.`,
    reflection: [
      'What failure or pattern makes you doubt Christ\'s love? How does "knowing... he loved them to the end" address it?',
      'Who in your life needs to experience this kind of "to the end" love from you?',
    ],
    prayer: `Lord Jesus, you loved your own to the end — knowing their betrayal, knowing mine. Thank you that your love is not surprised by my sin or exhausted by my failures. Teach me to rest in your uttermost love, and to love others the way you have loved me. In your name, amen.`,
  },

  {
    id: 'dev-10-1',
    topic: 'Comfort',
    title: 'The God Who Sees You',
    minutes: 10,
    ref: 'Genesis 16:13',
    passageText: 'She called the name of the LORD who spoke to her, "You are a God who sees me," for she said, "Have I even stayed alive after seeing him?" (WEB)',
    explanation: `Hagar — an Egyptian slave, used and discarded by Abram and Sarai, fleeing pregnant into the desert — becomes the first person in Scripture to give God a name: El Roi, "the God who sees me." She was invisible to everyone who mattered in her world, but she was seen by the One who matters most. This is the gospel in miniature: God finds the cast-off, the runaway, the nobody, and looks at them with knowing love.

Notice what God's seeing includes. The angel had found her, asked where she came from and where she was going, and told her to return — not with condemnation but with a promise: her son would become a great nation. Being seen by God is never mere observation; it is always accompanied by care. He sees your situation completely — the injustice done to you, the fear ahead of you — and he sees you, personally, with compassion.

We often live as if God sees our sin but not our suffering, or our service but not our sorrow. Hagar's testimony corrects both: the God who sees, sees all of you. Nothing about your story is hidden from him, and nothing about it makes him look away.`,
    context: `Hagar's story (Genesis 16) unfolds in the messy aftermath of Abram and Sarai trying to fulfill God's promise their own way. Given to Abram as a surrogate, Hagar conceived and was then mistreated by Sarai until she fled toward Egypt. In the ancient world, a runaway pregnant slave had no rights, no future, and no one looking for her — except God. The angel of the LORD found her by a spring in the wilderness, the first such divine encounter with an outsider in Genesis.`,
    lesson: `You are fully seen by God — your pain, your injustice, your fear — and his seeing is always joined to his caring. No one is too marginal, too broken, or too far gone to be found by El Roi.`,
    application: `Where do you feel unseen right now — at work, at home, in your grief? Bring that specific invisibility to God today: "You are the God who sees me in [name it]." Then look for one person in your world who feels unseen, and be God's eyes for them — notice them, ask how they are, truly listen.`,
    reflection: [
      'In what area of your life do you most feel invisible? What would change if you truly believed El Roi sees you there?',
      'Hagar named God from her experience. What name would you give God based on how he has met you?',
      'Who is a "Hagar" in your world — someone discarded or overlooked — and how could you reflect God\'s seeing to them this week?',
    ],
    prayer: `God who sees me, thank you that I am never invisible to you. You saw Hagar in the desert, and you see me now — in my pain, my fear, my ordinary struggles. Forgive me for living as if I\'m on my own. Open my eyes to see the unseen people around me, and make me an instrument of your noticing love. In Jesus\' name, amen.`,
  },
  {
    id: 'dev-10-2',
    topic: 'Peace',
    title: 'Peace in the Storm',
    minutes: 10,
    ref: 'Mark 4:39-40',
    passageText: 'He awoke, and rebuked the wind, and said to the sea, "Peace! Be still!" The wind ceased, and there was a great calm. He said to them, "Why are you so afraid? How is it that you have no faith?" (WEB)',
    explanation: `The disciples' terror was reasonable — seasoned fishermen feared for their lives. Jesus's sleep was also reasonable — he was exhausted. But the contrast reveals the heart of faith: they woke him crying "don't you care?", and he answered first the storm, then their fear. Notice the order of his rebukes: he rebuked the wind before he questioned their faith. Jesus deals with our danger before he disciplines our doubt.

"Peace! Be still!" — literally "be muzzled," as one would silence a raging animal. The same voice that spoke galaxies into being speaks to chaos, and chaos obeys. The disciples' awed question — "Who then is this, that even the wind and the sea obey him?" — is the right response. Every storm is an invitation to discover more of who Jesus is.

His question to them, "Why are you so afraid?", wasn't condemnation but diagnosis. Fear and faith both look at the future; fear imagines it without Jesus, faith imagines it with him. The difference isn't the size of the storm — it's the size of the Savior in our sight.`,
    context: `This event (Mark 4:35-41) happened on the Sea of Galilee, notorious for sudden violent storms as cool air from the mountains collided with warm air over the water. Jesus had been teaching crowds all day in parables and told the disciples to cross to the other side — into Gentile territory, itself a faith-stretch. Mark emphasizes that Jesus was "asleep on the cushion" in the stern — utterly at rest in the Father's care while chaos raged.`,
    lesson: `Jesus is never panicked by your storm, never indifferent to it, and never powerless before it. Fear shrinks when Christ grows larger in your sight — the question is never "how big is the storm?" but "who is in the boat?"`,
    application: `Name your current storm specifically. Then do what the disciples did: wake Jesus — bring it to him in honest, urgent prayer rather than rehearsing it anxiously. After praying, sit with his question: "Why are you so afraid?" Let him answer your danger before you demand he explain your doubt.`,
    reflection: [
      'What "storm" is raging in your life right now, and have you brought it to Jesus or just worried about it?',
      'The disciples cried "don\'t you care?" — what does Jesus\'s response (calming the storm first) tell you about his care?',
      'What would change if you measured your situation by the size of your Savior rather than the size of your storm?',
    ],
    prayer: `Lord Jesus, you are never panicked and never indifferent. I bring you my storm: [name it]. Speak your "Peace! Be still!" over the chaos — and over my heart. Forgive my fearful "don\'t you care?" and grow my faith in who you are. You are in my boat; that is enough. In your name, amen.`,
  },
  {
    id: 'dev-10-3',
    topic: 'Forgiveness',
    title: 'The Prodigal\'s Father',
    minutes: 10,
    ref: 'Luke 15:20',
    passageText: 'He arose and came to his father. But while he was still far off, his father saw him and was moved with compassion, and ran, embraced him, and kissed him. (WEB)',
    explanation: `Every detail of this verse is scandalous. In the ancient Middle East, dignified patriarchs did not run — running required hiking up robes, exposing legs, abandoning dignity. Yet the father runs. He runs while the son is "still far off" — before any apology, before any evidence of change, before the rehearsed speech. The father's compassion outruns the son's repentance.

This is the heart of the gospel: God doesn't wait at the door with crossed arms, tallying our failures. He watches the road. Theologians call this God's "prodigal" grace — recklessly extravagant, shamelessly eager. The embrace comes before the confession is finished; the kiss interrupts the apology. Forgiveness isn't the reward for a perfect repentance speech — it's the Father's nature, unleashed the moment we turn toward home.

And notice: the son had to "arise and come." The father ran, but the son first turned. Repentance is simply the turn — however stumbling, however far off — that lets the Father's running meet you.`,
    context: `Jesus told this parable (Luke 15:11-32) in response to Pharisees grumbling that he "receives sinners and eats with them" (v.2). The parable has two lost sons: the younger who ran to far-off sin, and the elder who stayed home in self-righteousness. Both were lost; only one knew it. The father's running would have shocked Jesus's audience — it violated every convention of patriarchal honor — which was exactly the point: God's grace violates our conventions of merit.`,
    lesson: `God the Father watches the road for returning sinners and runs to meet them — before the apology is finished, before the record is cleaned. No one is too far off for his compassion to reach.`,
    application: `If you are "far off" — through sin, drift, or shame — arise and come today. You don't need a perfect repentance speech; you need a turn. Pray honestly, confess specifically, and trust the Father's running. If you are the "elder brother," ask God to break your grumbling at grace and teach you to celebrate the found.`,
    reflection: [
      'Are you more like the younger son (far off, needing to turn) or the elder son (near in body, far in heart) right now?',
      'What keeps you from "arising and coming" — shame, pride, the belief you must clean up first?',
      'How does the father\'s running reshape your picture of God?',
    ],
    prayer: `Father, thank you for watching the road and running to meet me. I arise and come to you now — with my failures, my shame, my rehearsed excuses. Forgive me, embrace me, restore me. Break any elder-brother pride in me that resents your grace to others. Let me live as a found child who helps other lost ones come home. In Jesus\' name, amen.`,
  },
  {
    id: 'dev-10-4',
    topic: 'Strength',
    title: 'Strength in Weakness',
    minutes: 10,
    ref: '2 Corinthians 12:9',
    passageText: 'He has said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Most gladly therefore I will rather glory in my weaknesses, that the power of Christ may rest on me. (WEB)',
    explanation: `Paul prayed three times for his "thorn" to be removed — and God's answer was no. Not a rebuke, but a revelation: "My grace is sufficient." The thorn stayed; the grace proved enough. This overturns our entire approach to weakness. We treat weakness as a problem to eliminate; God treats it as a platform for his power. "Made perfect" means brought to full expression — Christ's power shows most clearly not in our strength but in our admitted weakness.

Paul's response is startling: "Most gladly therefore I will rather glory in my weaknesses." He doesn't just accept weakness; he boasts in it. Why? Because every weakness is an opportunity for Christ's power to "rest" on him — the Greek word pictures the Shekinah glory tabernacling, pitching its tent, over his life. Our weaknesses become landing places for divine power.

This doesn't mean we celebrate sin or neglect growth. It means we stop pretending, stop performing strength, and let our need become the doorway to grace. The Christian life isn't God helping those who help themselves — it's Christ's power resting on those who admit they can't.`,
    context: `Paul wrote 2 Corinthians to defend his apostleship against "super-apostles" who boasted of visions and strength. Ironically, Paul boasts of the opposite: beatings, shipwrecks, anxiety, and an unnamed "thorn in the flesh" — possibly a physical ailment, persecution, or spiritual opposition. His point: true apostleship is validated not by impressive power but by evident weakness through which Christ's power shines.`,
    lesson: `God's grace doesn't just comfort you in weakness — it works through weakness. Your thorn may stay, but his power will rest on you more visibly because of it. Boast in the weakness; trust in the power.`,
    application: `Name your "thorn" — the weakness, limitation, or chronic struggle you keep asking God to remove. Today, instead of only praying for removal, pray for power: "Let your strength rest on me in this." Then take one step you've been avoiding because of the weakness, trusting his sufficiency.`,
    reflection: [
      'What "thorn" have you begged God to remove? How might it become a platform for his power?',
      'Where are you still performing strength instead of admitting weakness — and what would honest dependence look like?',
      'How does "my grace is sufficient" change your prayers about your hardest struggle?',
    ],
    prayer: `Lord, I have prayed for removal; teach me to pray for power. Your grace is sufficient for me — for my thorn, my weakness, my limitation. I stop pretending to be strong. Let the power of Christ rest on me, pitch its tent over my weakness, and show through my cracks. I will glory in my weakness so that you get the glory for the strength. In Jesus\' name, amen.`,
  },
  {
    id: 'dev-10-5',
    topic: 'Guidance',
    title: 'The Good Shepherd\'s Voice',
    minutes: 10,
    ref: 'John 10:27-28',
    passageText: 'My sheep hear my voice, and I know them, and they follow me. I give eternal life to them. They will never perish, and no one will snatch them out of my hand. (WEB)',
    explanation: `Three verbs describe the relationship: hear, know, follow. Sheep hear the shepherd's voice — not as one noise among many, but as the recognized voice of the one who feeds and protects them. "I know them" — deeply, personally, individually; the Good Shepherd doesn't manage a flock, he knows sheep by name (v.3). And "they follow me" — hearing and knowing naturally lead to following. This is the rhythm of the Christian life: listen, be known, follow.

Then comes one of Scripture's greatest promises of security: "They will never perish, and no one will snatch them out of my hand." "Never" is absolute; "no one" is universal. Your eternal security rests not on your grip on Christ but on his grip on you — and his hand, as verse 29 adds, is inside the Father's hand. Double security. You are held by omnipotence twice over.

This doesn't produce carelessness but confidence. The sheep who knows it cannot be snatched doesn't wander recklessly — it stays near the Shepherd out of love, following the voice it has learned to trust. Assurance fuels obedience; security produces love.`,
    context: `Jesus spoke these words during the Feast of Dedication (Hanukkah) in winter, in Solomon's porch of the temple (John 10:22-23). The religious leaders demanded plainly whether he was the Christ; Jesus pointed to his works and their unbelief, then described his true sheep. The shepherd imagery would resonate deeply: Israel's leaders were often condemned as bad shepherds (Ezekiel 34), and God had promised, "I myself will be the shepherd of my sheep" (Ezekiel 34:15). Jesus was claiming to be that divine Shepherd.`,
    lesson: `Your security rests on Christ's grip, not yours — you are doubly held, by the Son's hand inside the Father's hand. Hearing his voice and following him is both the evidence and the joy of belonging to him.`,
    application: `Practice hearing today: read a short passage slowly, listening for the Shepherd's voice rather than rushing for information. Ask: "What is he saying to me?" Then follow in one small obedience. When doubts about your security arise, return to this promise: no one — not even you on your worst day — can snatch you from his hand.`,
    reflection: [
      'Do you more often try to hold onto Christ, or rest in his holding onto you? What difference does it make?',
      'What "other voices" compete with the Shepherd\'s voice in your life right now?',
      'What is one specific way you can "follow" him today in response to hearing his voice?',
    ],
    prayer: `Good Shepherd, thank you that you know me by name and hold me in your hand — and your hand is in the Father\'s. I rest in your grip, not mine. Tune my ears to your voice above all others, and give me grace to follow where you lead today. Keep me close; I am yours and you are mine. In your name, amen.`,
  },
  {
    id: 'dev-10-6',
    topic: 'Forgiveness',
    title: 'Forgiven Much, Loving Much',
    minutes: 10,
    ref: 'Luke 7:47',
    passageText: 'Therefore I tell you, her sins, which are many, are forgiven, for she loved much. But to whom little is forgiven, the same loves little. (WEB)',
    explanation: `Simon's dinner party became a parable in action. The "sinful woman" — likely a prostitute — crashed the gathering, wept over Jesus's feet, and anointed them with expensive perfume. Simon the Pharisee saw a scandal; Jesus saw worship. His explanation reverses Simon's logic: her extravagant love wasn't earning forgiveness — it was the evidence of it. "Her sins, which are many, are forgiven, for she loved much." Those who know they've been forgiven much, love much.

Simon's problem wasn't that he'd sinned little — it was that he thought he'd sinned little. "To whom little is forgiven, the same loves little." The most dangerous spiritual condition isn't great sin; it's small self-awareness. The forgiven-much love much because they know the size of the debt canceled. Cold, dutiful, minimal Christianity usually traces back to an under-appreciation of grace.

This is why the gospel must be preached to Christians daily, not just to unbelievers once. The more clearly you see your forgiven "much," the more extravagantly you will love — in worship, in generosity, in forgiveness of others. Love is the echo of forgivenness.`,
    context: `This scene (Luke 7:36-50) occurred in the home of Simon the Pharisee, who had invited Jesus to dinner but omitted the customary courtesies — no water for feet, no kiss of greeting, no oil for the head. The unnamed woman's actions supplied everything Simon withheld, and more. Jesus's parable of the two debtors (500 vs. 50 denarii) exposed Simon's heart: he who feels little debt shows little love. Jesus then declared to the woman, "Your faith has saved you. Go in peace."`,
    lesson: `Love for Christ is proportionate to your sense of forgiven debt. The way to love more is not to try harder but to see more clearly how much you've been forgiven.`,
    application: `Spend a few minutes remembering specific sins Christ has forgiven — not to wallow, but to worship. Let the size of the canceled debt move you to one extravagant act of love today: generous giving, lavish forgiveness, wholehearted worship. Ask: "Where has my love grown cold, dutiful, or minimal — and is it because I've forgotten how much I've been forgiven?"`,
    reflection: [
      'Do you tend to see yourself more as Simon (little debt) or the woman (much forgiven)? How does that shape your love for Christ?',
      'What would "extravagant" love for Jesus look like in your life this week — in worship, generosity, or forgiveness?',
      'Is there someone you struggle to forgive whose debt is small compared to what Christ forgave you?',
    ],
    prayer: `Lord Jesus, my sins are many, and you have forgiven them all. Forgive me for the Simon in me — the self-righteousness that feels little debt and loves little. Open my eyes to the size of your grace, and let forgiven-much become loving-much in me: in worship, in generosity, in forgiveness toward others. In your name, amen.`,
  },

  {
    id: 'dev-15-1',
    topic: 'Hope',
    title: 'The Valley of Dry Bones',
    minutes: 15,
    ref: 'Ezekiel 37:9-10',
    passageText: 'Then he said to me, "Prophesy to the wind, prophesy, son of man, and tell the wind, \'The Lord GOD says: Come from the four winds, breath, and breathe on these slain, that they may live.\'" So I prophesied as he commanded me, and the breath came into them, and they lived, and stood up on their feet, an exceedingly great army. (WEB)',
    explanation: `Ezekiel's vision begins with a valley full of bones — "very many" and "very dry" (v.2). This wasn't a recent battlefield; these bones were long dead, bleached, hopeless. When God asks, "Son of man, can these bones live?" Ezekiel answers with the only honest reply: "Lord GOD, you know" (v.3). He doesn't manufacture optimism; he defers to God's knowledge. That's where revival always starts — not with our confidence but with God's capability.

Then comes the strange partnership: God commands Ezekiel to prophesy — to speak God's word to dead bones, then to the wind. The Hebrew word for wind, breath, and spirit is the same: ruach. The same Spirit who hovered over the waters in Genesis 1, who breathed life into Adam, now breathes into a valley of death. And the result is staggering: the bones live, stand, and become "an exceedingly great army."

The interpretation (vv.11-14) is explicit: this is Israel in exile saying "our bones are dried up, our hope is lost." God's answer to hopelessness is not pep talks but his Spirit. The same applies to every dead place in our lives — dead marriages, dead dreams, dead churches, dead hearts. The question is never "is it too far gone?" but "will we prophesy?" — speak God's word in faith and call on his Spirit. What is dead in your life is not beyond the breath of God.`,
    context: `Ezekiel prophesied among Jewish exiles in Babylon after Jerusalem's destruction (586 BC). Chapters 37-39 form the heart of his message of restoration. The exiles' lament — "our hope is lost; we are cut off" (v.11) — was understandable: temple destroyed, king blinded, nation scattered. Into this despair God gave the most vivid resurrection vision in the Old Testament, centuries before Christ's resurrection made it literal. The vision promised both national restoration and, ultimately, spiritual resurrection through God's Spirit.`,
    lesson: `No situation is too dead for God's Spirit — but revival comes through his word spoken in faith and his breath received in dependence. Our part is to prophesy; God's part is to breathe. Hopelessness is never the final word where the Spirit moves.`,
    application: `Identify the "valley of dry bones" in your life — the relationship, dream, habit, or church that feels long dead. This week, practice Ezekiel's two actions: (1) Prophesy — speak God's promises over it in prayer, out loud, specifically. Don't just think hopeful thoughts; declare his word. (2) Call on the wind — ask the Holy Spirit to breathe where you cannot. Then watch, wait, and obey whatever small step of "sinew and flesh" (practical action) God shows you. Revival often comes in stages: first the rattling, then the breath.`,
    reflection: [
      'What in your life feels like "very dry bones" — long dead, beyond hope? Have you brought it to God or just mourned it?',
      'Ezekiel answered "Lord GOD, you know" instead of giving up or faking optimism. What would that honest deference look like in your situation?',
      'What specific promise of God could you "prophesy" — speak aloud in prayer — over your dead place this week?',
    ],
    prayer: `Lord GOD, you know. You know the dead places in my life — the hopes dried up, the relationships lifeless, the dreams buried. I confess I have called them hopeless. Breathe, O breath of God: come from the four winds and breathe on these slain, that they may live. Teach me to prophesy your word in faith and to wait on your Spirit in dependence. Raise what I cannot raise. In Jesus\' name, amen.`,
  },
  {
    id: 'dev-15-2',
    topic: 'Discipleship',
    title: 'The Cost of Discipleship',
    minutes: 15,
    ref: 'Luke 9:23',
    passageText: 'He said to all, "If anyone desires to come after me, let him deny himself, take up his cross daily, and follow me." (WEB)',
    explanation: `This is Jesus's most concentrated summary of discipleship — three verbs, each harder than the last. "Deny himself": say no to self as the center, the boss, the ultimate authority. This isn't self-hatred; it's self-dethronement. The self remains, but no longer reigns. "Take up his cross": in Jesus's day, the cross had one meaning — a condemned man carrying his execution instrument to his death. Cross-bearing is not enduring annoyances ("my cross to bear" trivializes it); it is daily death to self-rule. "Daily": this isn't a one-time decision but a morning-by-morning surrender. "And follow me": the positive direction — denying self and dying daily are not ends in themselves but the way to walk with Jesus.

Notice who this is for: "If anyone desires to come after me." This isn't a special calling for missionaries and martyrs; it's the baseline for everyone. There is no category of "admirer of Jesus" distinct from "follower of Jesus." To come after him is to deny, die, and follow — or not to come at all.

But the context transforms the cost into gain. The very next verses promise that whoever loses his life for Jesus will save it (v.24). The cross is not God's cruelty but God's surgery — cutting away the self-centered life that was killing us so the Christ-centered life can flourish. What feels like loss is actually rescue.`,
    context: `Luke places this teaching immediately after Peter's confession ("You are the Christ of God," v.20) and Jesus's first prediction of his suffering and death (v.22). The disciples expected a conquering Messiah; Jesus revealed a crucified one — and then said his followers' path would rhyme with his. This was spoken "to all" (v.23), including the crowds: no one gets a cross-free Christianity. The daily cross was as shocking then as now — Roman listeners knew exactly what cross-bearing looked like.`,
    lesson: `Following Jesus means daily self-denial and cross-bearing — not as miserable duty but as the path to true life. There is no cross-free Christianity, but there is also no cross without resurrection: whoever loses his life for Christ saves it.`,
    application: `Make this verse a daily morning prayer: "Lord, I deny myself today — my plans, my rights, my comfort are yours. I take up my cross — I accept whatever dying-to-self today requires. I follow you — lead, and I will go." Then watch for the day's specific cross: the apology you owe, the generosity that costs, the obedience that's inconvenient. Take it up — don't drag it resentfully, carry it willingly.`,
    reflection: [
      'What does "deny himself" concretely mean for you today — what self-rule do you need to dethrone?',
      'Have you treated the cross as a metaphor for annoyances, or as Jesus meant it — daily death to self? What\'s the difference in practice?',
      'What are you afraid of losing by following Jesus fully — and what does verse 24 promise about that loss?',
    ],
    prayer: `Lord Jesus, you did not hide the cost: deny myself, take up my cross daily, follow you. I confess I have wanted following without denying, resurrection without death. Today I say yes to all three. Show me today\'s cross and give me grace to carry it willingly. I trust your promise: whoever loses his life for you will save it. In your name, amen.`,
  },
  {
    id: 'dev-15-3',
    topic: 'Patience',
    title: 'Waiting on God\'s Timing',
    minutes: 15,
    ref: 'Psalm 27:14',
    passageText: 'Wait for the LORD. Be strong, and let your heart take courage. Yes, wait for the LORD. (WEB)',
    explanation: `David ends Psalm 27 — a psalm of confidence under threat — with a command he repeats for emphasis: "Wait for the LORD... Yes, wait for the LORD." The repetition is the point. Waiting is so hard, so unnatural, that it must be commanded twice. And notice what waiting is paired with: strength and courage. Biblical waiting is not passive resignation; it is courageous, active trust. The Hebrew word qavah suggests twisting together like cords — waiting braids our weakness into God's strength.

Why is waiting so central to faith? Because waiting reveals what we truly trust. When God delays, we discover whether we trust his timing or only his gifts, his wisdom or only our schedule. Abraham waited 25 years for Isaac. Joseph waited 13 years from pit to palace. David waited 15 years from anointing to throne. Israel waited centuries for the Messiah. God's delays are not his denials; they are his classrooms. In the waiting, he forms patience, deepens dependence, and often prepares us for what we're asking for.

"I would have despaired," David says in the previous verse, "unless I had believed that I would see the goodness of the LORD in the land of the living." Waiting is sustained by confident expectation — not that God will do what we want when we want, but that we will see his goodness. The wait itself becomes worship when we trust the Waited-One.`,
    context: `Psalm 27 moves from triumphant confidence ("The LORD is my light and my salvation; whom shall I fear?") through desperate pleading ("Do not hide your face from me") to this final charge to wait. David wrote as a man who knew both battlefield terror and the long ache of unfulfilled promise — anointed king as a teenager, then hunted by Saul for years before the throne. His command to wait came from lived experience, not theory.`,
    lesson: `Waiting on the Lord is courageous, active trust — not passive resignation. God's delays are classrooms, not denials. Those who wait will see his goodness; the wait itself becomes worship when we trust his timing.`,
    application: `Name what you're waiting for — the answer, the healing, the breakthrough, the person. Then practice active waiting this week: (1) Pray expectantly, not anxiously — thank God in advance for his goodness. (2) Obey in the meantime — do today's duty while waiting for tomorrow's answer. (3) Refuse shortcuts — don't seize what God hasn't given (remember Abraham and Hagar). (4) Let the wait deepen you — ask "What are you forming in me?" not just "When will you act?"`,
    reflection: [
      'What are you waiting for God to do — and is your waiting more like anxious demanding or courageous trusting?',
      'Where might you be tempted to take a shortcut (like Abraham with Hagar) instead of waiting on God\'s timing?',
      'How has a past season of waiting formed you in ways instant answers never could?',
    ],
    prayer: `Lord, I confess my impatience — I want your gifts on my schedule. Teach me to wait as David waited: strongly, courageously, expectantly. While I wait for [name it], form in me patience, dependence, and trust. I believe I will see your goodness. I will wait for you — yes, I will wait. In Jesus\' name, amen.`,
  },
  {
    id: 'dev-15-4',
    topic: 'Spiritual Warfare',
    title: 'The Armor of God',
    minutes: 15,
    ref: 'Ephesians 6:13',
    passageText: 'Therefore put on the whole armor of God, that you may be able to withstand in the evil day, and having done all, to stand. (WEB)',
    explanation: `Paul's famous armor passage (Ephesians 6:10-18) makes a crucial assumption: you are in a battle. "Our wrestling is not against flesh and blood" (v.12) — the real war is spiritual, against the devil's "schemes" (v.11). Many Christians live as if life were a playground; Paul says it's a battlefield. The armor isn't optional equipment for spiritual elites — it's standard issue for every believer, because every believer is targeted.

Note the emphasis: "the whole armor" and "having done all, to stand." The goal isn't advancing spectacularly but standing firmly — holding your ground when the evil day comes. Each piece protects a vulnerability: truth (belt) against deception, righteousness (breastplate) against accusation, the gospel of peace (shoes) for stability, faith (shield) against the flaming arrows of doubt and temptation, salvation (helmet) guarding the mind, and the word of God (sword) — the only offensive weapon — for counterattack. Prayer (v.18) is the power supply for it all.

"Put on" is active and daily. Armor doesn't help in the closet; it helps when worn. Most Christians own the armor but don't wear it — they know the truth but don't belt it on, they have the word but don't wield it. The evil day will come; the question is whether you'll be dressed for it.`,
    context: `Paul wrote Ephesians from prison in Rome, likely chained to a Roman soldier — the armor imagery was literally in front of him. But he transforms it: Roman armor served empire; God's armor serves truth. He wrote to Ephesian believers surrounded by occultism and idolatry (Acts 19), people who knew spiritual warfare was real. His command "be strengthened in the Lord" (v.10) precedes the armor — our strength is borrowed, not manufactured.`,
    lesson: `You are in a spiritual battle, and God has provided complete armor — but you must put it on daily. The goal is to stand firm in the evil day, drawing strength from the Lord, wielding truth and Scripture in prayerful dependence.`,
    application: `Pray through the armor piece by piece this week as a morning practice: "Lord, I belt on truth — show me where I'm deceived. I put on righteousness — guard my heart from accusation. I shod my feet with the gospel of peace — make me stable and ready. I take up faith — extinguish today's arrows. I put on salvation — guard my mind. I take your word as my sword — [quote one verse for today's battle]. And I pray — in the Spirit, for myself and others." Wear it; don't just own it.`,
    reflection: [
      'Which piece of the armor do you most often leave "in the closet" — truth, righteousness, peace, faith, salvation, or the word?',
      'What "flaming arrows" (doubts, temptations, accusations) has the enemy been shooting at you lately?',
      'How would your days change if you consciously "put on" the armor each morning in prayer?',
    ],
    prayer: `Lord, I acknowledge the battle — not against flesh and blood, but against spiritual forces of evil. Strengthen me in you and in your mighty power. Today I put on the whole armor of God: truth, righteousness, peace, faith, salvation, and your word. Teach me to stand firm in the evil day, praying always in the Spirit. In Jesus\' mighty name, amen.`,
  },
  {
    id: 'dev-15-5',
    topic: 'Prayer',
    title: 'The Lord\'s Prayer: A Pattern',
    minutes: 15,
    ref: 'Matthew 6:9-10',
    passageText: 'Pray like this: "Our Father in heaven, may your name be kept holy. Let your Kingdom come. Let your will be done on earth as it is in heaven." (WEB)',
    explanation: `When the disciples asked Jesus to teach them to pray, he didn't give a mantra to repeat but a pattern to follow. The prayer's structure is revolutionary: it begins with God, not us. "Our Father" — intimate ("Father") yet reverent ("in heaven"), personal yet communal ("our"). Before we mention a single need, we orient ourselves: we are children speaking to a holy Father whose name, kingdom, and will are the priorities.

"May your name be kept holy" — the first petition is for God's glory, that he be honored as he deserves. "Let your Kingdom come" — we pray for his reign to break into our world, our hearts, our situations. "Let your will be done on earth as it is in heaven" — the ultimate surrender: what the angels do instantly and joyfully in heaven, we ask to do on earth. Only after these God-centered petitions does Jesus turn to our needs (daily bread, forgiveness, guidance) — and even those are framed within his kingdom.

This order heals our prayer lives. We naturally pray "my name, my kingdom, my will" — a wishlist addressed to heaven. Jesus retrains us: start with his name, his kingdom, his will, and watch your needs shrink to proper size while your confidence grows. Prayer isn't bending God's will to ours; it's bending our hearts to his.`,
    context: `Jesus taught this prayer in the Sermon on the Mount (Matthew 5-7), contrasting it with pagan babbling ("they think they will be heard for their much speaking," 6:7) and hypocritical showmanship. Luke's version (11:1-4) came when the disciples, watching Jesus pray, asked "Lord, teach us to pray." They didn't ask for teaching or miracle-working power — they asked for prayer, because they'd seen its evident power in his life.`,
    lesson: `Prayer begins with God — his name, his kingdom, his will — before it turns to our needs. This God-first order doesn't minimize our concerns; it puts them in the hands of the Father whose priorities we've embraced.`,
    application: `Pray through the Lord's Prayer phrase by phrase today, expanding each: "Our Father in heaven" — praise him as your Father. "May your name be kept holy" — ask where his name needs honoring in your life. "Let your kingdom come" — invite his reign into your family, work, struggles. "Your will be done" — surrender one specific thing. Then bring your daily bread, your need for forgiveness, and your need for guidance. Let the pattern reshape your praying.`,
    reflection: [
      'Do your prayers tend to start with your needs or with God\'s glory? What would reordering them change?',
      'What specific situation in your life needs "your kingdom come, your will be done" prayed over it?',
      'What is one thing you need to surrender with "your will be done" today?',
    ],
    prayer: `Our Father in heaven, may your name be kept holy in my life and words today. Let your kingdom come — into my heart, my home, my work, my struggles. Let your will be done in me as it is done in heaven: instantly, joyfully, completely. I surrender [name it] to your perfect will. Teach me to pray as Jesus taught. In his name, amen.`,
  },
  {
    id: 'dev-15-6',
    topic: 'Love',
    title: 'Love Your Enemies',
    minutes: 15,
    ref: 'Matthew 5:44',
    passageText: 'But I tell you, love your enemies, bless those who curse you, do good to those who hate you, and pray for those who mistreat you and persecute you. (WEB)',
    explanation: `This is Jesus's most counterintuitive command — and the clearest proof of whether we've understood the gospel. "Love your enemies" was scandalous in a world (and a religion) that taught love for neighbors and hatred for enemies. Jesus doesn't soften it: love, bless, do good, pray — four active verbs directed at the people who curse, hate, mistreat, and persecute you. This isn't feeling warmly toward them; it's willing and working for their good.

Why? "That you may be children of your Father who is in heaven. For he makes his sun to rise on the evil and the good" (v.45). We love enemies because God loved us when we were his enemies: "while we were enemies, we were reconciled to God through the death of his Son" (Romans 5:10). Enemy-love isn't a higher standard for spiritual elites; it's the family resemblance of God's children. Anyone can love those who love them — "even the tax collectors do the same" (v.46). What's distinctive, what's divine, is loving those who don't.

This doesn't mean approving evil, ignoring injustice, or maintaining unsafe relationships. It means refusing hatred, releasing vengeance to God (Romans 12:19), and actively seeking the good of those who've harmed you — supremely through prayer, which is often the first crack in hatred's armor.`,
    context: `This command comes in the Sermon on the Mount's series of "You have heard... but I tell you" antitheses, where Jesus deepens the law's demands. "Love your neighbor" was Scripture (Leviticus 19:18); "hate your enemy" was popular addition, not Scripture. Jesus restores and transcends: love is now boundless. He spoke to people living under Roman occupation — with real, oppressive enemies — making this intensely practical, not theoretical.`,
    lesson: `Loving enemies — blessing, doing good, praying for those who harm you — is the family mark of God's children, flowing from the God who loved us while we were his enemies. It's active goodwill, not warm feelings; and it begins with prayer.`,
    application: `Name your "enemy" — the person who cursed, harmed, or mistreated you. This week: (1) Pray for them daily by name — for their good, not their punishment. Start with 2 minutes; let God soften you. (2) Refuse revenge in thought and speech — don't rehearse their wrongs or recruit others' hatred. (3) Do one concrete good toward them if possible and safe — a kindness that expects nothing back. Watch what happens in your heart before you watch what happens in theirs.`,
    reflection: [
      'Who is your "enemy" right now — and what would it cost you to pray for their good daily?',
      'Do you tend to rehearse wrongs and recruit allies, or release vengeance to God? What\'s the difference in your heart?',
      'How does remembering "while we were enemies, we were reconciled" change your willingness to love yours?',
    ],
    prayer: `Father, you loved me while I was your enemy and reconciled me through Christ\'s death. Now you command me to love mine. I confess my hatred, my rehearsed grievances, my desire for revenge. I release [name] to you. Teach me to bless, to do good, to pray — starting now. Make me look like my Father. In Jesus\' name, amen.`,
  },

  {
    id: 'dev-30-1',
    topic: 'Jesus',
    title: 'The Suffering Servant',
    minutes: 30,
    ref: 'Isaiah 53:5-6',
    passageText: 'But he was pierced for our transgressions. He was crushed for our iniquities. The punishment that brought our peace was on him; and by his wounds we are healed. All we like sheep have gone astray. Everyone has turned to his own way; and the LORD has laid on him the iniquity of us all. (WEB)',
    explanation: `Isaiah 53 is the Mount Everest of Old Testament prophecy — written 700 years before Christ, describing his suffering with the precision of an eyewitness. Every phrase of verses 5-6 is substitutionary: "for our transgressions," "for our iniquities," "our peace was on him," "we are healed" by "his wounds." The suffering described isn't random or merely exemplary — it's penal and vicarious. He was pierced; we were guilty. He was crushed; we find peace. The great exchange of the gospel is here in seed form: our sin for his suffering, our wound for his healing.

Notice the pronouns: "our," "we," "us." Isaiah includes himself — the great prophet confesses he is among the straying sheep. "All we like sheep have gone astray" is the Bible's universal diagnosis: not that some are worse than others, but that every one of us "has turned to his own way." Sheep don't rebel dramatically; they wander thoughtlessly. That's the damning accuracy of the metaphor — our sin is often less defiant rebellion than careless drift, but drift still leads off the cliff.

Then the verse's hinge: "and the LORD has laid on him the iniquity of us all." The Father is not a passive observer of the Son's suffering — he is its architect. God laid our iniquity on Christ. This is both the most sobering truth (our sin required this) and the most comforting (God himself provided the substitute). The cross wasn't cosmic child abuse or a tragic accident — it was the Father's deliberate, loving plan to punish sin fully while sparing sinners completely. Divine justice and divine mercy meet and kiss at the cross.

"By his wounds we are healed" — healing here is primarily spiritual (forgiveness, reconciliation) though it ripples into every broken place. We come to God not with our righteousness but with Christ's wounds as our plea. When conscience accuses, when shame overwhelms, when the accuser whispers "too far gone," Isaiah 53:5-6 is the answer: pierced for our transgressions, crushed for our iniquities, and the LORD laid it all on him.`,
    context: `Isaiah 53 is the fourth and climactic "Servant Song" (along with 42, 49, 50), written during the Babylonian exile era (8th-6th century BC). The Jewish Targums and early church unanimously saw the Messiah here; Philip used this very chapter to lead the Ethiopian eunuch to Christ (Acts 8:32-35). The New Testament quotes or alludes to Isaiah 53 more than any other Old Testament passage — Matthew 8:17, John 12:38, Romans 10:16, 1 Peter 2:24-25, and others. It is, as one scholar said, "the gospel in the Old Testament." The suffering described — despised, rejected, silent before shearers, cut off, buried with the rich — matches Christ's passion in detail after detail.`,
    lesson: `The cross was substitution: Christ was pierced for our transgressions and crushed for our iniquities so that we could have peace and healing. God the Father laid our sin on his Son deliberately and lovingly. Our only contribution to salvation was the sin that made it necessary — which is why boasting is excluded forever.`,
    application: `Let this passage do three things this week. First, deepen your repentance: read verse 6 slowly — "everyone has turned to his own way" — and confess your specific wanderings, not just sin in general. Second, deepen your assurance: when guilt or the accuser attacks, answer with verse 5 — "the punishment that brought our peace was on him." Your peace was purchased; don't try to re-purchase it with performance. Third, deepen your worship: the proper response to substitution is gratitude that overflows into obedience. Ask: "How shall I live today in light of wounds borne for me?" Then share this chapter with someone who needs the gospel — it's the most evangelistic passage in the Old Testament.`,
    reflection: [
      'Which phrase in verses 5-6 most convicts you of your sin — and which most comforts you with Christ\'s substitution?',
      'Do you tend to add your own "payment" to Christ\'s finished work through guilt-driven performance? How does "the punishment that brought our peace was on him" address that?',
      '"All we like sheep have gone astray" — where have you wandered "to your own way" recently, even in subtle, thoughtless drift?',
      'Who in your life needs to hear this chapter? How could you share it naturally this month?',
    ],
    prayer: `Father, I stand amazed at Isaiah\'s vision: pierced for my transgressions, crushed for my iniquities. You laid on Jesus the iniquity of us all — my wandering, my rebellion, my thoughtless drift. Forgive me for the ways I have turned to my own way even this week. Thank you that my peace was purchased by his punishment, my healing by his wounds. I bring nothing but my sin; I receive everything in Christ. Make me grateful, make me holy, make me a witness to this great exchange. In Jesus\' name, amen.`,
  },
  {
    id: 'dev-30-2',
    topic: 'Holy Spirit',
    title: 'The Fruit of the Spirit',
    minutes: 30,
    ref: 'Galatians 5:22-23',
    passageText: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. Against such there is no law. (WEB)',
    explanation: `Paul's list is carefully chosen and carefully ordered. First, note the singular: "fruit," not "fruits." These nine qualities are not a menu to pick from but a cluster that grows together — one fruit with nine facets, like a diamond. You don't get to choose love but skip self-control; the Spirit produces the whole character of Christ. Where one facet is missing, growth is needed — but the direction is always toward all nine.

Second, note the contrast: this fruit grows in opposition to the "works of the flesh" (vv.19-21) — a catalog of destruction including sexual sin, idolatry, hatred, discord, jealousy, fits of rage, selfish ambition, envy, and drunkenness. The flesh produces works (human effort, striving); the Spirit produces fruit (organic growth, abiding). You cannot manufacture love, joy, or peace by trying harder — any more than a branch can manufacture apples by straining. Fruit grows by connection: "Remain in me, and I in you... he who remains in me... bears much fruit" (John 15:4-5).

Third, note the order. Love heads the list — the soil in which all else grows, the summary of the law (Galatians 5:14), the mark of discipleship (John 13:35). Joy and peace follow — the inner climate of the Spirit-filled life. Then the relational virtues: patience, kindness, goodness — how we treat others. Then faithfulness, gentleness — character under pressure. And self-control closes the list — mastery over self, the opposite of the flesh's compulsion. "Against such there is no law" — no one ever needed legislation against too much kindness.

The diagnostic question is not "how hard are you trying?" but "how deeply are you abiding?" Fruit inspectors don't yell at branches; they check the connection to the vine. If love is thin, joy is rare, or self-control is failing, the answer isn't white-knuckled effort but deeper abiding — more time in the word, in prayer, in yielded dependence on the Spirit who alone can grow what we cannot manufacture.`,
    context: `Paul wrote Galatians to churches being pulled back into legalism — the idea that Gentile converts must follow Jewish law to be truly saved. After establishing justification by faith alone (chapters 1-4), Paul addresses the inevitable question: "If we're free from the law, won't we just sin?" His answer (chapters 5-6): freedom in Christ, lived by the Spirit, produces better righteousness than law ever could — not through rule-keeping but through fruit-bearing. The Spirit accomplishes what the law demanded but couldn't deliver.`,
    lesson: `Christian character is fruit, not manufacture — grown by the Spirit through abiding in Christ, not produced by striving. The nine facets grow together as one; love leads, self-control completes, and the diagnostic is always connection to the Vine, not intensity of effort.`,
    application: `Do a fruit inspection this week — not to condemn yourself but to diagnose your connection. Rate each of the nine honestly: where is fruit abundant? Where is it thin or absent? Pick the thinnest one and ask: "What would deeper abiding look like here?" — not "how do I try harder?" but "how do I remain in Christ more fully?" Memorize the list. Pray it: "Spirit, grow your fruit in me — especially [weakest area]." And remember: fruit takes time. An apple tree isn't ashamed of blossoms in spring; growth is seasonal, but the direction should always be toward ripeness.`,
    reflection: [
      'Which of the nine facets is most abundant in your life right now, and which is thinnest? What might that reveal about your abiding?',
      'Do you tend to approach character growth as manufacturing (trying harder) or as fruit-bearing (abiding deeper)? What would shift?',
      'How does "against such there is no law" challenge both legalism and license in your thinking?',
      'What specific practice — Scripture, prayer, fellowship, service — would deepen your connection to the Vine this week?',
    ],
    prayer: `Holy Spirit, you are the grower of fruit I cannot manufacture. I confess my striving — trying to produce love, joy, peace by effort, and failing. Teach me to abide: to remain in Christ as a branch in the vine. Grow your fruit in me, especially [name the thinnest area]. Make me like Jesus in character, not just in creed. Against such fruit there is no law — only delight. In his name, amen.`,
  },
  {
    id: 'dev-30-3',
    topic: 'Character',
    title: 'The Beatitudes: Kingdom Character',
    minutes: 30,
    ref: 'Matthew 5:3-6',
    passageText: 'Blessed are the poor in spirit, for theirs is the Kingdom of Heaven. Blessed are those who mourn, for they shall be comforted. Blessed are the gentle, for they shall inherit the earth. Blessed are those who hunger and thirst for righteousness, for they shall be filled. (WEB)',
    explanation: `The Beatitudes are Jesus's portrait of kingdom character — and it's upside down from every human value system. Each "blessed" (makarios — deeply favored, congratulated by God) is attached to a condition the world pities: spiritual poverty, mourning, gentleness (meekness), hunger. Jesus isn't describing how to get blessed; he's describing who the blessed are — citizens of his kingdom, already favored, already promised the future.

"Poor in spirit" heads the list because it's the doorway to everything else. Spiritual poverty is the opposite of the Pharisee's prayer ("I thank you that I am not like..."); it's the tax collector's cry ("God, be merciful to me, a sinner"). It's recognizing your complete spiritual bankruptcy before God — bringing nothing, deserving nothing, needing everything. This isn't self-hatred; it's accurate self-assessment that makes grace possible. Only the poor in spirit can receive a kingdom, because only they know they need one.

"Those who mourn" — not just the grieving but those who mourn over sin, over the world's brokenness, over what should be. Kingdom people feel the fallenness deeply; they don't shrug at evil or numb themselves to pain. Their comfort is promised — present in the Spirit, future in the new creation.

"The gentle" (meek) — power under control, strength submitted to God. Moses was meek (Numbers 12:3); Jesus was meek (Matthew 11:29). Meekness isn't weakness; it's the refusal to grasp, manipulate, or dominate. And astonishingly, the meek "shall inherit the earth" — the graspers lose what they clutch; the yielded receive what they release.

"Those who hunger and thirst for righteousness" — the deepest appetite image in Scripture. Not a casual preference but desperate craving — as for food and water. Note: for righteousness, not happiness, success, or comfort. The promise is absolute: "they shall be filled." God never disappoints a genuine hunger for himself. The tragedy is not that he's stingy but that we're too full of other things to hunger.

Together, these four beatitudes trace the gospel's inner logic: recognize your poverty, mourn your sin, submit your strength, hunger for his righteousness — and receive the kingdom, comfort, inheritance, and filling. This is the character Jesus forms in his people, and the character that makes them "salt" and "light" (vv.13-16) to the world.`,
    context: `The Sermon on the Mount (Matthew 5-7) is Jesus's most famous teaching, delivered early in his Galilean ministry to disciples with crowds listening. The Beatitudes open the sermon as its foundation — before any commands, Jesus describes the kind of people who inhabit his kingdom. His audience included the poor, the oppressed, the mourning — people the religious elite dismissed. Jesus congratulates precisely those the world overlooks, announcing that God's favor rests on them. This was revolutionary then and remains so now.`,
    lesson: `Kingdom character is upside-down: spiritual poverty, mourning over sin, gentle strength, and desperate hunger for righteousness. These aren't achievements to earn blessing but descriptions of those who've received the kingdom — and each carries an unbreakable promise.`,
    application: `Let each beatitude examine you this week. Poor in spirit: where are you still self-sufficient, bringing your résumé to God instead of your need? Practice the tax collector's prayer daily. Mourn: what sin or brokenness have you grown numb to? Let yourself feel it and bring it to the Comforter. Gentle: where are you grasping, manipulating, or dominating? Release control in one specific area. Hunger: what are you actually hungry for — trace your time, money, and thoughts. Then deliberately hunger for righteousness: feast on Scripture, pray "fill me," and watch the promise hold.`,
    reflection: [
      'Which beatitude most describes you right now, and which most convicts you?',
      '"Poor in spirit" is the doorway — do you approach God with your need or your résumé? What would change?',
      'What are you truly hungry for? Audit your appetites (time, money, thoughts) and ask whether righteousness tops the list.',
      'How do these upside-down values challenge the success metrics of your workplace, social circle, or own heart?',
    ],
    prayer: `Lord Jesus, your kingdom values turn my world upside down. Make me poor in spirit — stripped of self-sufficiency, rich only in your grace. Teach me to mourn over sin and brokenness rather than shrug. Make me gentle — strong but submitted, refusing to grasp. And give me a desperate hunger for righteousness above all else. Fulfill your promises: yours is the kingdom, yours the comfort, yours the filling. In your name, amen.`,
  },
  {
    id: 'dev-30-4',
    topic: 'Compassion',
    title: 'The Good Samaritan: Who Is My Neighbor?',
    minutes: 30,
    ref: 'Luke 10:33-35',
    passageText: 'But a certain Samaritan, as he traveled, came where he was. When he saw him, he was moved with compassion, came to him, and bound up his wounds, pouring on oil and wine. He set him on his own animal, brought him to an inn, and took care of him. On the next day, when he departed, he took out two denarii, gave them to the host, and said to him, "Take care of him. Whatever you spend beyond that, I will repay you when I return." (WEB)',
    explanation: `Jesus told this parable to answer a lawyer's self-justifying question: "Who is my neighbor?" (v.29). The lawyer wanted a definition that limited his obligation; Jesus gave a story that explodes all limits. The setup is deliberately provocative: a priest and a Levite — the religious professionals — see the beaten man and pass by. Their reasons might have been "practical" (ritual purity, safety, schedule), but Jesus presents their inaction as damning. Knowing the law without loving the neighbor is worthless.

Then the shock: the hero is a Samaritan — a member of the despised ethnic group Jews considered heretical half-breeds. Jesus's audience would have gasped. The Samaritan's compassion is detailed and costly: he sees, feels, comes, binds wounds, pours oil and wine (medicine), transports the man on his own animal (walking himself), brings him to shelter, stays the night caring for him, pays two denarii (two days' wages), and promises unlimited further payment. This isn't minimal charity; it's extravagant, open-ended mercy.

The parable's genius is its reversal. The lawyer asked "who is my neighbor?" (who qualifies for my love?). Jesus ends by asking, "which of these three do you think seemed to be a neighbor to him?" (v.36) — flipping the question from "who deserves my love?" to "am I being a neighbor?" Neighbor isn't a category of people; it's a way of being toward whoever God puts in your path. The hated Samaritan becomes the model; the questioner becomes the questioned.

"Go and do likewise" (v.37) is Jesus's final word — not "go and feel likewise" or "go and believe likewise." Compassion that doesn't act isn't compassion; it's sentiment. The Samaritan's love had hands, feet, wallet, and follow-through. Ours must too.`,
    context: `Luke 10:25-37 records this exchange during Jesus's journey to Jerusalem. Samaritans and Jews had centuries of hostility — Samaritans were descendants of Israelites who intermarried with Assyrian settlers, with their own temple on Mount Gerizim. Jews traveling between Galilee and Judea often crossed the Jordan to avoid Samaria. For Jesus to make a Samaritan the hero — to a Jewish lawyer, no less — was deliberately offensive, designed to shatter ethnic and religious pride. The road from Jerusalem to Jericho was notoriously dangerous, called the "Way of Blood."`,
    lesson: `Your neighbor is anyone in need whom God puts in your path — regardless of ethnicity, religion, or deserving. True neighbor-love is compassionate, costly, and concrete: it sees, feels, comes, and pays. The question is never "who qualifies?" but "will I be a neighbor?"`,
    application: `This week, practice Samaritan vision: who is "on your road" — the overlooked coworker, the struggling neighbor, the difficult family member, the person you'd rather pass by? Then practice Samaritan action in stages: see (notice them truly), feel (let compassion move you), come (close the distance), bind (address the wound practically), and pay (give what it costs — time, money, reputation). Start small but start concretely. And examine: are you more like the priest (too busy/important), the Levite (fearful of involvement), or the Samaritan? "Go and do likewise."`,
    reflection: [
      'Who is the "beaten man on your road" right now — the person in need you\'ve been passing by?',
      'Are your reasons for passing by more like the priest\'s (religious busyness) or the Levite\'s (fear, inconvenience)? Be honest.',
      'What would "oil and wine, two denarii, and I\'ll repay" look like concretely in that situation — what would it cost you?',
      'Who is your "Samaritan" — the person or group you\'d least expect God to use as your example? What does that reveal?',
    ],
    prayer: `Lord Jesus, you are the ultimate Good Samaritan — you found me beaten on the road and paid everything to save me. Forgive me for passing by: for religious busyness, for fear, for calculating who deserves my love. Open my eyes to see the needy on my road. Move me with your compassion. Give me hands, feet, wallet, and follow-through. Make me a neighbor — go, and let me do likewise. In your name, amen.`,
  },
  {
    id: 'dev-30-5',
    topic: 'Faith',
    title: 'Abiding in Christ',
    minutes: 30,
    ref: 'John 15:4-5',
    passageText: 'Remain in me, and I in you. As the branch can\'t bear fruit by itself unless it remains in the vine, so neither can you, unless you remain in me. I am the vine. You are the branches. He who remains in me and I in him bears much fruit, for apart from me you can do nothing. (WEB)',
    explanation: `These verses contain the entire secret of the Christian life in one agricultural metaphor. "Remain" (meno — abide, dwell, stay put) is the command, repeated like a drumbeat through John 15. It's present tense, continuous action: keep remaining, keep abiding, keep staying connected. Christianity isn't a decision you made once but a connection you maintain always.

The logic is absolute: "apart from me you can do nothing." Not "little," not "less" — nothing. Zero. This is both humbling and liberating. Humbling, because all our striving, strategizing, and self-improvement produce nothing of eternal value disconnected from Christ. Liberating, because fruitfulness was never about our effort but our connection. Branches don't strain to produce fruit; they stay connected to the vine, and fruit happens. Our job is abiding; God's job is producing.

What does abiding look like practically? Jesus gives three interwoven threads in this chapter: his words abiding in us (v.7) — Scripture saturating our minds; his love abiding in us (v.9-10) — obedience flowing from love, not legalism; and prayer shaped by abiding (v.7) — "ask whatever you desire, and it will be done" — because abiding aligns our desires with his. Abiding isn't mystical passivity; it's active dependence expressed through word, obedience, and prayer.

The Father's role completes the picture: he is the vinedresser (v.1) who prunes fruitful branches (v.2) — cutting away even good things that hinder greater fruitfulness. Pruning hurts, but it's proof of the Father's care, not his anger. "Every branch that bears fruit, he prunes, that it may bear more fruit." If you're being pruned — losing something good for something better — take heart: the Vinedresser only prunes branches he's keeping.

"Apart from me you can do nothing" also means with him you can do much: "he who remains in me... bears much fruit." Much fruit — not some, not occasionally, but much. This is God's will for every believer, not just spiritual elites. The bar is high (much fruit) but the method is simple (remain). Stop trying to be fruitful; start learning to abide.`,
    context: `John 15 is part of the Upper Room Discourse (John 13-17), Jesus's final teaching on the night before the cross. He had just instituted the Lord's Supper, predicted his betrayal, and told the disciples he was leaving. They were confused and afraid. Into that anxiety, Jesus gave the vine metaphor — likely as they walked toward Gethsemane, possibly passing vineyards in the Kidron Valley. The Old Testament often pictured Israel as God's vine (Psalm 80, Isaiah 5) — usually a failed vine. Jesus declares himself the true vine, the fulfillment of what Israel never was.`,
    lesson: `Fruitfulness comes from abiding, not striving: remain in Christ through his word, obedient love, and prayer, and he produces "much fruit" through you. Apart from him — nothing. The Father prunes fruitful branches for greater yield; pruning is care, not punishment.`,
    application: `Audit your "abiding" this week across Jesus's three threads. His words in you: are you in Scripture daily, letting it saturate — or just skimming? Set a specific time and place. His love through obedience: is there a known command you're resisting? Abiding includes obeying (v.10). Prayer: are you asking from abiding — desires shaped by his word — or just presenting a wishlist? Practice one concrete abiding rhythm: morning Scripture before phone, prayer throughout the day (1 Thessalonians 5:17), and evening reflection on where you sensed his presence. And if you're being pruned — something good being cut away — receive it as the Vinedresser's care, not abandonment.`,
    reflection: [
      'Do you approach the Christian life more as striving to produce fruit or abiding in the Vine? What\'s the practical difference in your daily routine?',
      'Which of the three threads is weakest in your abiding: his word in you, obedient love, or prayer? What\'s one step to strengthen it?',
      'Are you experiencing "pruning" right now — the loss of something good? How does seeing the Vinedresser\'s hand change your response?',
      '"Apart from me you can do nothing" — what are you currently attempting apart from him?',
    ],
    prayer: `Lord Jesus, true Vine, I confess my striving — trying to bear fruit by effort, attempting much apart from you, which is nothing. Teach me to remain: your word abiding in me, your love shaping my obedience, my prayers rising from connection. Prune what hinders, even when it hurts. I want to bear much fruit — not by straining, but by staying. Apart from you, nothing; in you, everything. In your name, amen.`,
  },
  {
    id: 'dev-30-6',
    topic: 'Resurrection',
    title: 'The Resurrection and the Life',
    minutes: 30,
    ref: 'John 11:25-26',
    passageText: 'Jesus said to her, "I am the resurrection and the life. He who believes in me will live, even if he dies. Whoever lives and believes in me will never die. Do you believe this?" (WEB)',
    explanation: `Jesus spoke these words at a tomb — Lazarus had been dead four days, and Martha was grieving with a theology that placed hope safely in the future: "I know that he will rise again in the resurrection at the last day" (v.24). Jesus gently explodes her timeline: resurrection isn't just an event at the end of history; it's a Person standing in front of her. "I AM the resurrection and the life." Not "I will bring resurrection" or "I teach about life" — I am. Resurrection is not merely something Jesus does; it's who he is.

The two promises that follow address both sides of death. "He who believes in me will live, even if he dies" — physical death cannot end the believer's life; it merely transitions it. The body dies; the person lives on, present with the Lord (2 Corinthians 5:8). "Whoever lives and believes in me will never die" — spiritual death, the second death (Revelation 20:14), will never touch the believer. We die once physically (unless Christ returns first) but never spiritually. Death has been defanged: "O death, where is your sting?" (1 Corinthians 15:55).

Then the question that still echoes: "Do you believe this?" Jesus doesn't ask Martha for theological precision or emotional certainty — he asks for personal trust. Martha's answer is the model: "Yes, Lord. I have believed that you are the Christ, the Son of God" (v.27). She confesses who he is, and the what follows. Belief in the resurrection is ultimately belief in a Person.

Minutes later, Jesus wept (v.35) — the resurrection and the life grieving at a tomb he was about to empty. This is the Christian paradox: we grieve, but not as those without hope (1 Thessalonians 4:13). Tears and triumph coexist. Jesus's tears dignify our grief; his power guarantees our hope. The same voice that called "Lazarus, come out!" will one day call every believer from every grave (John 5:28-29).`,
    context: `John 11 is the climactic "sign" in John's Gospel — the seventh and greatest, deliberately provoking the Sanhedrin's decision to kill Jesus (11:53). Lazarus of Bethany was Jesus's beloved friend; his sisters Martha and Mary sent word of his illness, yet Jesus waited two days — allowing death, so the resurrection would be undeniable (four days meant decomposition had begun; Martha warns "he stinks"). This miracle previewed Christ's own resurrection and demonstrated his power over death itself, not just disease.`,
    lesson: `Jesus doesn't merely give resurrection — he is the resurrection and the life. Believers live even when they die physically, and never die spiritually. Grief and hope coexist: Jesus wept at the tomb he was about to empty, dignifying our sorrow while guaranteeing our future.`,
    application: `Let this "I am" reshape your relationship with death and grief. If you're grieving: grieve honestly (Jesus wept) but hopefully (he is the resurrection). Read 1 Thessalonians 4:13-18 and let resurrection hope reframe your sorrow. If you fear death: meditate on "will never die" until the second death loses its terror — memorize these verses. If you're comfortable and death feels distant: let Martha's confession become yours — "I have believed that you are the Christ" — and live today in resurrection power (Ephesians 1:19-20 says the same power that raised Christ works in believers). Share this hope: who in your life is grieving or fearing death and needs to hear "I am the resurrection and the life"?`,
    reflection: [
      'Jesus asked Martha, "Do you believe this?" — how would you answer today, honestly?',
      'Do you tend to grieve "as those who have no hope," or does resurrection genuinely reframe your sorrow? What\'s the difference in practice?',
      'What would change in your daily life if you truly lived in the power of the resurrection (Ephesians 1:19-20) rather than just believing it as doctrine?',
      'Who in your life needs to hear "I am the resurrection and the life" — and how could you share it sensitively?',
    ],
    prayer: `Lord Jesus, resurrection and life, I believe that you are the Christ, the Son of God. Thank you that death could not hold Lazarus, could not hold you, and cannot hold me. When I grieve, let me grieve with hope. When I fear, remind me I will never die. Fill me with resurrection power for today\'s living, and use me to carry this hope to those who sorrow. Do you believe this? Yes, Lord — I believe. In your name, amen.`,
  },

  {
    id: 'dev-60-1',
    topic: 'Discipleship',
    title: 'The Sermon on the Mount: The Narrow Way',
    minutes: 60,
    ref: 'Matthew 7:13-14',
    passageText: 'Enter in by the narrow gate; for the gate is wide and the way is broad that leads to destruction, and there are many who enter in by it. How narrow is the gate and the way is restricted that leads to life! There are few who find it. (WEB)',
    explanation: `Jesus ends the Sermon on the Mount — his most famous teaching — not with inspiration but with decision. After three chapters describing kingdom life (character in the Beatitudes, righteousness exceeding the Pharisees', prayer, trust, judgment), he lays out two gates, two ways, two destinations, two crowds. There is no third option, no middle path, no "spiritual but undecided." The Sermon demands a verdict.

The narrow gate is Christ himself: "I am the way, the truth, and the life. No one comes to the Father except through me" (John 14:6). It's narrow because it's exclusive — one way, not many; through repentance and faith, not achievement or heritage. The wide gate is every alternative: moralism, religiosity, secularism, syncretism — all the broad, comfortable paths that ask little and promise much. Notice Jesus's honesty about popularity: "many" enter the wide gate; "few" find the narrow. Truth has never been determined by majority vote, and the crowd is usually wrong about ultimate things.

"The way is restricted that leads to life" — the Greek word for "restricted" (thlibo) means pressed, afflicted, like grapes in a press. The narrow way isn't just hard to find; it's hard to walk. It involves the daily cross (Luke 9:23), persecution (2 Timothy 3:12), and swimming against cultural currents. Jesus never marketed Christianity as easy — he marketed it as worth it. The narrow way leads to life: not just length of existence but quality — eternal life, knowing God (John 17:3), beginning now and perfected forever.

But don't miss the invitation in the command: "Enter in." The gate is narrow but it's open. "Few find it" is not God's desire — he wants all to be saved (1 Timothy 2:4) — but the reality of human choice. The narrow gate stands open today; the question is whether you will enter. And entering is not a one-time event but the beginning of a way — a restricted, pressed, glorious path walked daily with Christ.

This passage also reframes the entire Sermon. The Beatitudes, the Lord's Prayer, the commands about anger, lust, love of enemies — these aren't suggestions for a better life but descriptions of the narrow way. You can't walk it without entering the gate (faith in Christ), and you haven't truly entered if you're not walking the way (obedience). Gate and way belong together: justification and sanctification, faith and following, decision and discipleship.`,
    context: `The Sermon on the Mount (Matthew 5-7) was delivered early in Jesus's Galilean ministry to disciples, with crowds listening. Matthew 7:13-27 forms the sermon's conclusion — four warnings: the two gates (vv.13-14), false prophets (vv.15-20), false professors (vv.21-23), and the two builders (vv.24-27). Each contrasts true and false response to Jesus's teaching. The sermon ends with the crowds "astonished at his teaching, for he taught them with authority" (7:28-29). The narrow gate teaching would have shocked listeners who assumed all Israel was on the way to life — Jesus says most are on the way to destruction, and religious heritage doesn't change the gate.`,
    lesson: `There are two gates, two ways, two destinations — and no third option. The narrow gate is Christ himself, entered by repentant faith; the narrow way is daily discipleship, pressed but leading to life. The crowd takes the wide gate; the few who find the narrow one discover it's worth everything. Gate (justification) and way (sanctification) belong inseparably together.`,
    application: `Spend this hour in honest self-examination. First, the gate: have you truly entered — repented of sin and trusted Christ alone? Or are you standing near the gate (religious, moral, interested) without entering? If unsure, enter today — pray in repentance and faith. Second, the way: are you walking the narrow way described in the Sermon — the Beatitudes' character, the Lord's Prayer's priorities, enemy-love, non-judgmental mercy? Where have you drifted onto the broad way of comfort, compromise, or cultural Christianity? Confess specifically. Third, the witness: who in your life is on the broad way? Pray for them by name, and ask God for an opportunity to point them to the narrow gate. The gate is open; the way is walkable — but only through Christ, only by grace, only daily.`,
    reflection: [
      'Have you entered the narrow gate — true repentance and faith in Christ alone — or are you merely near it (religious, moral, interested)? How do you know?',
      'Where has your walk drifted from the narrow way onto the broad way? Name the specific compromises honestly.',
      'Jesus says "few find it" — does the exclusivity of the narrow gate trouble you? How do John 14:6 and 1 Timothy 2:4 hold together?',
      'Who in your life is on the broad way, and what is one step you could take to point them to the gate?',
    ],
    prayer: `Lord Jesus, you are the narrow gate and the narrow way. I confess I have often preferred the broad way — comfortable, popular, undemanding. If I have never truly entered, I enter now: I repent of my sin and trust you alone for salvation. If I have entered but drifted, draw me back to the restricted, pressed, glorious path. Give me grace for the daily cross and joy in the life it leads to. And burden me for the many on the broad way — use me to point them to you. In your name, amen.`,
  },
  {
    id: 'dev-60-2',
    topic: "God's Word",
    title: 'Psalm 1: The Blessed Life',
    minutes: 60,
    ref: 'Psalm 1:1-3',
    passageText: 'Blessed is the man who doesn\'t walk in the counsel of the wicked, nor stand on the path of sinners, nor sit in the seat of scoffers; but his delight is in the LORD\'s law. On his law he meditates day and night. He will be like a tree planted by the streams of water, that produces its fruit in its season, and whose leaf doesn\'t wither. Whatever he does shall prosper. (WEB)',
    explanation: `Psalm 1 stands as the gateway to the entire Psalter — and as Scripture's foundational wisdom on human flourishing. Its structure is a study in contrasts: two ways (the righteous and the wicked), two delights (God's law vs. sin's counsel), two destinies (the planted tree vs. driven chaff). Every life is heading somewhere; Psalm 1 insists there are only two directions.

The blessed person's life is described first negatively — what he doesn't do. The progression is deliberate and chilling: walk → stand → sit. Walking in the counsel of the wicked (casual exposure to godless advice), then standing on the path of sinners (lingering, participating), then sitting in the seat of scoffers (settled, comfortable, mocking). Sin is progressive; nobody starts as a scoffer. They start by walking — by entertaining the counsel, the podcast, the friend, the feed that subtly reframes reality without God. The blessed person refuses the first step, knowing where the path leads.

Then the positive: "his delight is in the LORD's law." Not duty, not obligation — delight. The Hebrew word for law (torah) means instruction, teaching — God's revealed guidance for life. The blessed person doesn't merely obey Scripture; he loves it, savors it, returns to it. "On his law he meditates day and night" — the Hebrew for meditate (hagah) suggests murmuring, muttering — like a cow chewing cud or a person repeating something under their breath. This is Scripture internalized: read, repeated, pondered, prayed, until it shapes thought from the inside.

The result is the tree: "planted by the streams of water." Note "planted" — deliberate placement, not accidental growth. The tree doesn't chase water; it's positioned by it. Roots go deep unseen; fruit comes "in its season" (not constantly, not on demand — seasonally, as God gives); leaves "don't wither" even in drought. "Whatever he does shall prosper" — not a prosperity-gospel promise of wealth, but the deep flourishing of a life rooted in God: fruitful, resilient, enduring.

The contrast (vv.4-6) is stark: the wicked are "like the chaff which the wind drives away" — rootless, weightless, directionless, ultimately "will not stand in the judgment." Two ways, two trees (one planted, one scattered), two destinies. "The LORD knows the way of the righteous, but the way of the wicked shall perish."

Psalm 1's ultimate fulfillment is Christ — the truly blessed man who never walked in wicked counsel, whose delight was perfectly in God's law, the tree of life planted by living water. In him, we are transplanted: from chaff to tree, from perishing way to known way. Our blessedness is his blessedness credited to us, then cultivated in us by the Spirit.`,
    context: `Psalm 1 is unattributed and serves as the introduction to the entire book of Psalms — a wisdom psalm in the tradition of Proverbs, presenting the "two ways" motif found throughout Scripture (Deuteronomy 30:19, Jeremiah 17:5-8, Matthew 7:13-14). Jeremiah 17:7-8 directly echoes it: "Blessed is the man who trusts in the LORD... he will be as a tree planted by the waters." The psalm was likely compiled as Israel's hymnbook took shape, teaching every worshiper the foundational choice before the prayers, laments, and praises that follow.`,
    lesson: `Blessedness comes from delighting in and meditating on God's word while refusing the progressive path of wicked counsel. The result is tree-like flourishing: planted, rooted, fruitful in season, unwithered in drought. There are only two ways — the known way of the righteous and the perishing way of the wicked — and the choice is made daily in what we delight in.`,
    application: `Use this hour to reposition yourself by the streams. First, examine the negative: where are you walking in wicked counsel? What voices — media, friends, feeds, inner narratives — are shaping you away from God? Name them; refuse the first step. Second, cultivate the positive: delight in God's law. Read a psalm slowly, meditate (murmur, repeat, ponder) on one verse, pray it back to God. Establish or renew a daily meditation rhythm — even 10 minutes of unhurried Scripture before the day's noise. Third, assess your "tree": are you fruitful in season (serving, giving, growing)? Are your leaves withering (joyless, brittle, anxious)? Withering leaves signal shallow roots — the answer is always deeper digging into the streams, not more frantic leaf-polishing. Plant yourself deliberately this week.`,
    reflection: [
      'Where are you on the walk → stand → sit progression? What "counsel of the wicked" are you entertaining that you should refuse?',
      'Is God\'s word your delight or your duty? What would move it from obligation to savoring?',
      'What does "meditate day and night" practically look like in your schedule? What\'s one concrete rhythm you could start?',
      'Are your leaves withering anywhere — joy, peace, resilience? What might shallow roots have to do with it?',
    ],
    prayer: `Lord, I want to be the tree planted by your streams — rooted, fruitful, unwithered. Forgive me for walking in counsel that leads away from you, for treating your word as duty instead of delight. Teach me to meditate — to murmur your truth day and night until it shapes me from within. Plant me deliberately by your water. Let my life prosper in the deep sense: fruitful in season, resilient in drought, known by you. In Jesus\' name, the truly blessed man, amen.`,
  },
  {
    id: 'dev-60-3',
    topic: 'Holy Spirit',
    title: 'Romans 8: Life in the Spirit',
    minutes: 60,
    ref: 'Romans 8:1-2',
    passageText: 'There is therefore now no condemnation to those who are in Christ Jesus, who don\'t walk according to the flesh, but according to the Spirit. For the law of the Spirit of life in Christ Jesus made me free from the law of sin and of death. (WEB)',
    explanation: `Romans 8 is the Himalayas of Scripture — the chapter believers turn to in suffering, in doubt, in spiritual warfare. It opens with the most liberating declaration in the Bible: "no condemnation." Not "little condemnation," not "condemnation for big sins but not small ones" — none. Zero. For "those who are in Christ Jesus." Your standing before God is not determined by your performance today but by your position in Christ. The gavel has fallen, the verdict is rendered: not guilty. And "now" — present tense, already true, not merely future hope.

Why no condemnation? Because "the law of the Spirit of life in Christ Jesus made me free from the law of sin and of death." Paul pictures two "laws" — governing principles, like gravity. The law of sin and death pulls everything downward: sin leads to death, inevitably, universally. But a greater law has overridden it: the Spirit's life in Christ. Like aerodynamics overcoming gravity, the Spirit lifts what sin dragged down. This isn't self-improvement; it's regime change. You have been transferred from one jurisdiction to another (Colossians 1:13).

The chapter then unfolds the Spirit's comprehensive work. The Spirit frees from the flesh's control (vv.5-11): the mind set on the Spirit is life and peace. The Spirit assures our adoption (vv.14-16): we cry "Abba, Father," and the Spirit witnesses that we are God's children — the answer to every "am I really his?" doubt. The Spirit helps our weakness in prayer (v.26): when we don't know what to pray, he intercedes with groanings — your weakest prayers are carried by the Spirit's strongest intercession. The Spirit guarantees our glory (vv.18-30): present sufferings can't compare; God works all things for good; nothing separates us from his love (vv.38-39).

Each of these addresses a specific human fear. Fear of condemnation? "No condemnation." Fear of being controlled by sin? The Spirit gives life and peace. Fear you're not really God's child? The Spirit witnesses. Fear your prayers are inadequate? The Spirit intercedes. Fear suffering is meaningless? God works it for good. Fear something will separate you? Nothing can — "neither death, nor life... nor any other created thing."

Romans 8 moves from "no condemnation" (v.1) to "no separation" (v.39) — the Christian life bracketed by absolute security. Between those bookends: the Spirit's transforming, assuring, interceding, glorifying work. This is life in the Spirit — not a higher tier for elites but the normal Christian life, available to all who are in Christ Jesus.`,
    context: `Romans 8 follows the anguish of Romans 7 — Paul's honest description of the war with indwelling sin ("the evil which I do not want, that I practice"). Chapter 8 is the answer: the Spirit does what the law couldn't. Paul wrote Romans to a church he'd never visited, systematically explaining the gospel; chapter 8 is the climax of the doctrinal section (chapters 1-8) before turning to Israel (9-11) and practice (12-16). Many scholars consider it the greatest chapter in the Bible — Luther called Romans "the purest gospel," and chapter 8 its crown.`,
    lesson: `In Christ, there is now no condemnation and never any separation — the Christian life is bracketed by absolute security. Between those bookends, the Holy Spirit frees, assures, intercedes, and glorifies. This is not elite spirituality but normal Christianity: life in the Spirit for all who are in Christ.`,
    application: `Let Romans 8 search and comfort you this hour. Read the whole chapter slowly (it's 39 verses — take your time). First, receive "no condemnation": where are you living under condemnation — from conscience, from others, from the accuser? Preach verse 1 to yourself until it lands. Second, examine your "mindset": is your mind set on the flesh (v.6 — death) or the Spirit (life and peace)? What feeds each? Third, practice "Abba": pray to God as Father with childlike confidence, asking the Spirit to witness to your spirit. Fourth, bring your groanings: what can't you articulate in prayer? Offer the groans; trust the intercession. Fifth, reframe your suffering: what "all things" in your life need Romans 8:28 faith? Finally, memorize 8:1 and 8:38-39 — bookends for every battle.`,
    reflection: [
      'Where do you functionally live under condemnation despite verse 1\'s "no condemnation"? What keeps the verdict from landing?',
      'Is your mind more often "set on the flesh" or "set on the Spirit" (v.6)? What inputs feed each mindset?',
      'Do you pray as an "Abba" child or a fearful servant? How does the Spirit\'s witness (v.16) address your adoption doubts?',
      'What suffering or "groaning" in your life needs the perspective of verses 18, 26, and 28?',
    ],
    prayer: `Father, thank you for Romans 8 — for no condemnation and no separation. I receive the verdict: not guilty in Christ. Holy Spirit, set my mind on you: give me life and peace. Witness to my spirit that I am your child; teach me to cry "Abba." Intercede for me in my groanings when I don\'t know how to pray. Work all things — even this suffering — for good. And convince me daily that nothing can separate me from your love in Christ Jesus. In his name, amen.`,
  },
  {
    id: 'dev-60-4',
    topic: 'Forgiveness',
    title: 'The Prodigal Son: Two Lost Sons',
    minutes: 60,
    ref: 'Luke 15:31-32',
    passageText: 'He said to him, "Son, you are always with me, and all that is mine is yours. But it was appropriate to celebrate and be glad, for this, your brother, was dead, and is alive again. He was lost, and is found." (WEB)',
    explanation: `We call it the parable of the prodigal son, but Jesus told it about two lost sons — and the second is the point. The younger son's rebellion is obvious: demanding his inheritance (wishing his father dead), squandering it in "riotous living," ending in a pigsty. His repentance is equally clear: "I will arise and go to my father." But the elder son — the "good" one — is lost in a subtler, more dangerous way, and the parable ends with him outside the feast, his fate unresolved. Jesus leaves the ending open because he's speaking directly to the Pharisees listening — and to every religious heart since.

The elder son's lostness is revealed in his anger at grace. He won't go in. He complains: "these many years I have served you... you never gave me a goat." Notice the language: served (not loved), you never gave (keeping score). He views the father as a master to be appeased, not a father to be enjoyed. He's been "always with" the father yet never understood him — proximity without intimacy, obedience without love, duty without delight. This is the lostness of the religious: lost at home.

The father's response to the elder son is as tender as his running to the younger: "Son [teknon — dear child], you are always with me, and all that is mine is yours." He goes out to the angry son just as he ran to the returning one. He doesn't argue the theology; he pleads: come in. "It was appropriate to celebrate" — the Greek dei means "it was necessary, it had to be." Grace isn't optional decorum; it's cosmic necessity. When the dead come alive and the lost are found, heaven throws a party (v.7, 10) — and we're invited to join, not judge.

The parable's genius is that both sons wanted the father's things, not the father. The younger wanted his wealth (and got misery); the elder wanted his approval (and got bitterness). Only the father's love — running to the rebellious, pleading with the religious — offers what both truly needed: himself. "All that is mine is yours" was true all along for the elder son; he just never enjoyed it, too busy earning what was already his.

Which son are you? The answer is usually both, at different times. We all have younger-son seasons of obvious rebellion and elder-son seasons of subtle self-righteousness. The gospel addresses both: to the rebellious, "come home — the Father runs to meet you"; to the religious, "come in — stop earning what's already yours, and celebrate grace instead of resenting it." The feast is for the found; the only ones excluded are those who exclude themselves.`,
    context: `Luke 15 contains three parables — the lost sheep, the lost coin, the lost sons — all answering the Pharisees' grumbling: "This man receives sinners and eats with them" (v.1). Each parable escalates: the sheep is 1 of 100, the coin 1 of 10, the son 1 of 2. Each ends in celebration. The trilogy defends Jesus's mission: he came to seek and save the lost (Luke 19:10), and heaven rejoices over every one found. The open ending — we never learn if the elder son enters — is Jesus's direct challenge to his critics: will you come in, or stay outside grumbling while grace feasts?`,
    lesson: `There are two ways to be lost: the younger son's obvious rebellion and the elder son's subtle self-righteousness — both want the father's things rather than the father. The Father runs to the rebellious and pleads with the religious; both are invited to the feast of grace. The only ones excluded are those who exclude themselves.`,
    application: `Spend this hour with both sons. First, the younger: is there rebellion — obvious or subtle — you need to bring home? "Arise and go" today: confess specifically, trust the Father's running. Second, the elder: examine your religious heart. Do you serve God with score-keeping ("I have served... you never gave")? Are you angry at grace given to others — the forgiven sinner, the blessed rival? Do you enjoy the Father, or merely work for him? The father's words are for you: "all that is mine is yours" — stop earning what's already yours. Third, the feast: who is your "younger brother" — someone whose restoration you'd resent rather than celebrate? Pray for grace to rejoice. Finally, consider: the parable's ending is open. How will your story end — inside celebrating, or outside grumbling?`,
    reflection: [
      'Which son do you most resemble right now — the rebellious younger or the resentful elder? What\'s the evidence?',
      'Elder-son symptoms: score-keeping service, anger at others\' grace, duty without delight. Which do you recognize in yourself?',
      'The father says "all that is mine is yours" — are you enjoying your inheritance as God\'s child, or anxiously earning it?',
      'Who is hard for you to celebrate — whose restoration or blessing triggers your inner elder brother? Will you "come in"?',
    ],
    prayer: `Father, I see myself in both sons — the rebellion that runs and the self-righteousness that stays home resenting. Forgive my younger-son wanderings and my elder-son score-keeping. Thank you for running to meet the returning and pleading with the resistant. I stop earning what you\'ve already given: all that is yours is mine in Christ. Teach me to enjoy you, not just serve you — and to celebrate every lost one found. I\'m coming in to the feast. In Jesus\' name, amen.`,
  },
  {
    id: 'dev-60-5',
    topic: 'Prayer',
    title: 'Gethsemane: The Cup and the Surrender',
    minutes: 60,
    ref: 'Matthew 26:39',
    passageText: 'He went forward a little, fell on his face, and prayed, saying, "My Father, if it is possible, let this cup pass away from me; nevertheless, not what I desire, but what you desire." (WEB)',
    explanation: `Gethsemane is the most human moment of Christ's life and the most instructive for ours. Here is the sinless Son of God — "exceedingly sorrowful, even to death" (v.38), falling on his face, sweating "like great drops of blood" (Luke 22:44), asking if there's another way. If Jesus felt this, our anguish is not faithlessness — it's humanity. Gethsemane sanctifies our sorrow: the Man of Sorrows entered our dread and showed us what to do with it.

"The cup" is rich Old Testament imagery for God's wrath against sin (Psalm 75:8, Isaiah 51:17, Jeremiah 25:15). Jesus wasn't dreading physical pain primarily — though crucifixion was horrific — but the spiritual horror of bearing sin and facing the Father's wrath: "him who knew no sin he made to be sin on our behalf" (2 Corinthians 5:21). The holy Son recoiled at becoming sin, at the prospect of abandonment ("My God, my God, why have you forsaken me?"). His anguish measures the cost of our salvation — the price was not just pain but the Son's unbroken fellowship with the Father, shattered for us.

"If it is possible" — Jesus asks honestly. There's no stoic pretense, no pious resignation before the wrestling. He brings his true desire to the Father: let this pass. This is the model for our praying: bring the real request, the unedited heart. God can handle our "if possible." What he wants is our honesty, not our performance.

"Nevertheless, not what I desire, but what you desire" — the hinge of human history. In Eden, the first Adam said "my will" and brought death; in Gethsemane, the last Adam said "your will" and brought life. Notice: Jesus doesn't feel like surrendering — his desire is clear. Surrender here is not the absence of contrary desire but the overruling of it by trust. "Nevertheless" is the most important word in the prayer: feeling everything, wanting otherwise, yet choosing the Father. This is what obedience looks like when it costs.

He prayed it three times (vv.39, 42, 44). Repetition wasn't unbelief — it was perseverance. Some surrenders require multiple passes; the flesh doesn't yield in one round. And after the third prayer, he rose: "Arise, let us be going" (v.46). Prayer didn't remove the cup, but it gave him strength to drink it. That's often God's answer to our Gethsemanes: not removal but resolve, not escape but empowerment. The angel strengthened him (Luke 22:43); the Father will strengthen us.

Gethsemane also exposes our weakness and his grace toward it. "Watch and pray, that you don't enter into temptation. The spirit indeed is willing, but the flesh is weak" (v.41). The disciples slept — three times. Yet Jesus didn't abandon them; he woke them gently and took them to the cross anyway. Our Gethsemane failures don't disqualify us; they reveal why we needed his Gethsemane victory.

Finally, Gethsemane is where Jesus won the battle the cross only executed. Theologians note: the victory was decided in the garden's surrender; Calvary was its outworking. Our victories work the same way — won in prayerful surrender before they're lived out in obedient action.`,
    context: `Gethsemane (meaning "oil press" — fitting for a place of crushing) sat on the Mount of Olives, across the Kidron Valley from Jerusalem. It was Thursday night after the Last Supper; Jesus would be arrested within hours, tried through the night, and crucified Friday morning. He took Peter, James, and John — his inner circle — and asked them to "watch with me." Luke, the physician, records the hematidrosis (sweating blood), a rare stress response. Matthew emphasizes the threefold prayer and the disciples' threefold sleeping — a deliberate parallel highlighting human weakness against divine resolve.`,
    lesson: `Gethsemane teaches us to bring honest anguish to the Father ("if it is possible") and then surrender ("nevertheless, your will") — not by feeling like it but by trusting him. Prayer may not remove the cup, but it gives strength to drink it. Victory is won in surrendered prayer before it's lived in obedient action.`,
    application: `Bring your Gethsemane to God this hour. First, name your "cup" — the suffering, decision, or obedience you're dreading. Be as honest as Jesus: "if it is possible, let this pass." Write the unedited prayer. Second, pray the "nevertheless": surrender the outcome to the Father's will, even while the desire remains. You may need to pray it three times — or thirty. Persevere. Third, "watch and pray": identify where your flesh is weak (the sleep, the avoidance, the numbing) and ask for the Spirit's strengthening. Fourth, rise and go: after surrender, take the next obedient step — "arise, let us be going." Don't wait to feel ready; Jesus went to the cross still sorrowful but resolved. Finally, receive his grace for your sleepings: where you've failed in the garden, he's still taking you with him.`,
    reflection: [
      'What is your "cup" right now — the thing you\'d ask to pass if you were honest? Have you prayed the unedited prayer?',
      'What does "nevertheless" require of you — where do you need to overrule your desire with trust in the Father?',
      'Where is your flesh weak (sleeping) while your spirit is willing? What would "watch and pray" look like practically?',
      'How does Jesus\'s gentleness with his sleeping disciples reshape your view of God when you fail?',
    ],
    prayer: `My Father, if it is possible, let this cup pass from me — [name it honestly]. I bring you my unedited heart: my dread, my desire for another way. Nevertheless — not what I desire, but what you desire. I surrender the outcome to your perfect will. Strengthen me as you strengthened your Son; give me resolve to rise and go. Forgive my sleeping when I should watch. Thank you that Jesus drank the cup I deserved, so I can trust you with the cups I fear. In his name, amen.`,
  },
  {
    id: 'dev-60-6',
    topic: 'Hope',
    title: 'The New Creation: All Things New',
    minutes: 60,
    ref: 'Revelation 21:4-5',
    passageText: 'He will wipe away every tear from their eyes. Death will be no more; neither will there be mourning, nor crying, nor pain any more. The first things have passed away. He who sits on the throne said, "Behold, I am making all things new." He said, "Write, for these words are faithful and true." (WEB)',
    explanation: `The Bible ends where it began — with a garden, a tree of life, and God dwelling with his people — but better. Revelation 21-22 is Scripture's final vision: not disembodied souls floating on clouds but a renewed heaven and earth, a New Jerusalem descending, God himself wiping tears. This is the hope that has sustained martyrs, comforted grievers, and steadied sufferers for two thousand years. Every tear will be wiped — by God's own hand. Every source of tears — death, mourning, crying, pain — abolished. "The first things have passed away": the entire order of fallenness, gone.

"I am making all things new" — present tense, already underway. The new creation isn't just future; it's breaking in now. Every conversion is a new creation (2 Corinthians 5:17). Every act of justice, mercy, and beauty is a foretaste. Every healing — physical, relational, spiritual — is a preview. We live between the "already" (Christ risen, Spirit given) and the "not yet" (all things made new). This tension explains the Christian life: we taste the future now, but we still weep, still bury, still ache. The vision doesn't deny present pain; it puts an expiration date on it.

Note who does the making: "I am making" — God himself. We don't build the new creation; we receive it. Our good works matter enormously, but they don't construct eternity — they witness to it. This frees us from both despair (it's not up to us) and passivity (we're called to live as citizens of the coming kingdom now). The throne's occupant guarantees it: "these words are faithful and true." The promise rests on God's character, not our worthiness.

The vision's details repay meditation. No more sea (v.1) — in ancient symbolism, the sea was chaos, danger, separation; its absence means perfect peace and unity. No temple (v.22) — because God himself is the temple; mediated worship gives way to face-to-face presence. No night (v.25) — no darkness, no danger, no closing of gates. No curse (22:3) — Genesis 3 fully reversed. The tree of life, lost in Eden, returns with leaves "for the healing of the nations" (22:2). God's servants "will see his face" (22:4) — the beatific vision, the longing of every saint fulfilled.

This hope is intensely practical. Paul argues that resurrection hope transforms present suffering: "our light affliction, which is for the moment, works for us more and more exceedingly an eternal weight of glory" (2 Corinthians 4:17). The "weight" of glory dwarfs the "lightness" of affliction — not because affliction is trivial but because glory is massive. Grief counselors note that hope doesn't remove pain but gives it context; Revelation 21 gives pain its ultimate context: temporary, purposeful, and headed for reversal.

C.S. Lewis captured it: "They say of some temporal suffering, 'No future bliss can make up for it,' not knowing that Heaven, once attained, will work backwards and turn even that agony into a glory." The new creation doesn't just compensate for suffering — it transfigures it. Every tear wiped by God's hand becomes part of the story's beauty.

Live today as a citizen of that coming world. Forgive — because in the new creation, all wrongs are righted. Show mercy — because mercy triumphs. Create beauty — because beauty will last. Endure suffering — because it's "for the moment." And weep when you must — because the God who will wipe every tear counts every one now (Psalm 56:8).`,
    context: `Revelation was written by the apostle John in exile on Patmos (~AD 95) to seven churches facing Roman persecution. After visions of tribulation, judgment, and Babylon's fall, chapters 21-22 give the climax: the new heaven and new earth. This fulfills Old Testament promises — Isaiah 65:17 ("I create new heavens and a new earth"), Isaiah 25:8 ("he will wipe away tears"), Ezekiel 37 (new life), and Eden's garden imagery. The New Jerusalem's dimensions (12,000 stadia cube) echo the Holy of Holies — the entire city becomes God's dwelling place. "Behold, the tabernacle of God is with men" (21:3) is the Bible's goal stated plainly: God with us, forever.`,
    lesson: `The Bible ends with God's promise to make all things new — wiping every tear, ending death, mourning, crying, and pain. This new creation is already breaking in (present tense) and guaranteed by God's faithfulness. It gives suffering an expiration date, transfigures present pain, and calls us to live now as citizens of the coming kingdom.`,
    application: `Let this vision do its work this hour. First, grieve with hope: what tears are you crying now? Bring them to the God who will wipe them — and who counts them today (Psalm 56:8). Name the death, mourning, crying, or pain, and set it against verse 4's promise. Second, reframe your suffering: read 2 Corinthians 4:16-18 and ask how "eternal weight of glory" changes the weight of today's affliction. Third, live as a citizen: what does new-creation living look like this week — forgiving (wrongs will be righted), showing mercy (mercy triumphs), creating beauty (beauty lasts), sharing the gospel (the invitation is open, 22:17)? Fourth, worship: the vision ends with "Come, Lord Jesus" (22:20) — make it your prayer. Long for his appearing (2 Timothy 4:8); let hope purify (1 John 3:3).`,
    reflection: [
      'What tears are you crying — or holding back — right now? How does picturing God\'s own hand wiping them change your grief?',
      'Do you live more in the "already" (tasting new creation now) or the "not yet" (aching for it)? How should the tension shape your days?',
      '"I am making all things new" is present tense — where do you see new creation breaking into your life or world already?',
      'How does the guaranteed future ("faithful and true") change your present priorities — what deserves more weight, what less?',
    ],
    prayer: `Lord Jesus, you who sit on the throne and declare "I am making all things new" — I believe your words are faithful and true. Thank you for the hope that death, mourning, crying, and pain have an expiration date. Wipe my tears now as you will wipe them then; count them as precious. Teach me to live as a citizen of the new creation: forgiving, merciful, beautiful, bold with the gospel. Sustain me in suffering with eternal weight. Come, Lord Jesus — and until you come, make me new. In your name, amen.`,
  },
];

export function getDevotional(id: string): Devotional | undefined {
  return DEVOTIONALS.find((d) => d.id === id);
}
