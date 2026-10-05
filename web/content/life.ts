export interface LifeTopic {
  id: string;
  title: string;
  teaches: string;
  passages: { ref: string; note: string }[];
  context: string;
  notSays: string;
  application: string;
  reflection: string[];
  prayer: string;
  deeper: string[];
}

export const LIFE_TOPICS: LifeTopic[] = [
  {
    id: 'anxiety',
    title: 'Anxiety',
    teaches: `Scripture never treats anxiety as a sin to be scolded away or a feeling to be embarrassed about. It treats it as a real human experience that God meets with real presence. Philippians 4:6 begins, "In nothing be anxious" — but it does not stop with a command. It immediately gives a practice: "by prayer and petition with thanksgiving, let your requests be made known to God." The Bible's answer to anxiety is not "try harder to feel calm." It is to carry your specific fears to a specific God and let his peace stand guard over your heart like a soldier at a gate.

The psalmists model this honestly. David writes of his soul being "in turmoil" (Psalm 42:11) and does not pretend otherwise; he preaches to himself, "Hope in God." Jesus himself, in Gethsemane, was "exceedingly sorrowful, even to death" (Matthew 26:38). Anxiety, then, is not a sign that your faith is fake. It is an invitation to do what Jesus did: name the dread, bring it to the Father, and ask trusted friends to watch with you.

What Scripture adds is a gentle reordering of our cares. First Peter 5:7 says to cast "all your anxiety on him, because he cares for you." The Greek picture is of throwing a heavy burden onto someone strong enough to carry it. God is not annoyed by your worry. He is the one strong back your worry was always meant to rest on.`,
    passages: [
      { ref: 'Philippians 4:6-7', note: 'The core practice: turn anxiety into prayer, and receive the peace of God as a guard over heart and mind.' },
      { ref: '1 Peter 5:7', note: 'Anxiety is a burden to be cast — thrown — onto God, because he personally cares for you.' },
      { ref: 'Psalm 42:11', note: 'The psalmist talks to his own anxious soul: "Hope in God." Honest lament plus deliberate hope.' },
      { ref: 'Matthew 6:25-34', note: 'Jesus on worry: your Father feeds the birds and clothes the lilies; seek first his kingdom and trust him for the rest.' },
      { ref: 'Isaiah 41:10', note: '"Do not be afraid, for I am with you." God\'s presence, not the absence of trouble, is the antidote to fear.' },
      { ref: 'Matthew 26:38-39', note: 'Even Jesus felt anguish and brought it to the Father — anxiety is not faithlessness.' },
    ],
    context: `Philippians was written by Paul from prison — a man with every reason to be anxious, writing about peace to a church facing opposition. The peace he describes is not the calm of good circumstances; it is the calm of a guarded heart in bad ones. Similarly, Jesus spoke Matthew 6 to disciples who were poor, marginalized, and unsure where their next meal would come from. His words about birds and lilies were not poetry for the comfortable. They were survival wisdom for the vulnerable: your Father knows, your Father sees, your Father provides.

The biblical world knew anxiety intimately — famine, persecution, exile. Scripture never minimizes the causes of worry. It magnifies the character of the God who meets us inside it.`,
    notSays: `The Bible does not say that anxious people lack faith, that Christians should never feel afraid, or that prayer is a technique that guarantees instant calm. It does not promise that casting your cares on God removes the circumstances causing them. What it promises is God's care, God's presence, and a peace that guards you while you walk through the trouble — not a life with nothing to be anxious about.`,
    application: `Practice the Philippians 4:6 exchange daily: when a worry surfaces, turn it into a specific prayer on the spot — name it, hand it over, and add one thanksgiving. Many people find it powerful to write worries down in a "cast your cares" journal, then literally close the book as an act of entrustment. Pair this with the psalmist's habit of preaching to yourself: when your soul is in turmoil, speak truth to it out loud.

Build rhythms that lower anxiety's volume: Sabbath rest, honest community where you can say "I'm not okay" (Galatians 6:2), and limiting the noise of constant news. And hear this clearly: seeking counseling or medical help for anxiety is not a failure of faith. Luke was a physician, and God regularly works through doctors, counselors, and wise friends. Faith and help are not enemies.`,
    reflection: [
      'What specific worry keeps circling in your mind? Have you named it to God in prayer as specifically as you name it to yourself?',
      'The psalmist preached to his own soul ("Hope in God"). What truth do you most need to preach to yourself right now?',
      'Who is one trusted person you could ask to "watch and pray" with you, the way Jesus asked his disciples in Gethsemane?',
    ],
    prayer: `Father, you tell me to cast my anxiety on you because you care for me — so here it is. I hand you the worries I have been carrying alone: the ones about tomorrow, the ones about the people I love, the ones I am almost afraid to say out loud. Guard my heart and my mind with your peace, the peace that passes understanding. When fear rises, remind me that you are with me. Teach me to pray instead of spiral, to thank instead of dread. And when I need help beyond prayer — wise counsel, a doctor, a friend — give me humility to receive it. In Jesus' name, amen.`,
    deeper: [
      'Read Psalm 42 and 43 slowly as one prayer, noticing how the psalmist repeats his refrain of hope.',
      'Study Matthew 6:25-34 in context — what does "seek first the kingdom" look like in your actual schedule this week?',
      'Memorize Philippians 4:6-7 and 1 Peter 5:7 so the practice is ready when anxiety strikes.',
    ],
  },
  {
    id: 'fear',
    title: 'Fear',
    teaches: `The Bible speaks of two kinds of fear, and keeping them straight changes everything. The "fear of the LORD" — reverent awe at who God is — is "the beginning of wisdom" (Proverbs 9:10). But the fear of people, of the future, of suffering, is something Scripture repeatedly tells us to lay down. "Do not be afraid" is one of the most repeated commands in the Bible, appearing in some form hundreds of times. God does not say it because fear is irrational; he says it because he is present.

Notice the pattern: nearly every "do not be afraid" in Scripture is followed by a reason anchored in God's character. "Do not be afraid, for I am with you" (Isaiah 41:10). "Do not be afraid... for it is your Father's good pleasure to give you the Kingdom" (Luke 12:32). God never asks us to conquer fear by willpower. He asks us to let a bigger reality — his presence, his promises, his love — displace it. "There is no fear in love; but perfect love casts out fear" (1 John 4:18). Fear shrinks when love grows.

Courage in the Bible is not the absence of fear; it is obedience in the presence of fear. Joshua was told "be strong and courageous" precisely because the task ahead was terrifying (Joshua 1:9). Godly courage means feeling the fear and stepping forward anyway, because the One who goes with you is greater than what stands against you.`,
    passages: [
      { ref: 'Isaiah 41:10', note: 'God\'s fourfold promise to the fearful: I am with you, I am your God, I will strengthen you, I will uphold you.' },
      { ref: '1 John 4:18', note: 'Perfect love casts out fear — fear is displaced by growing in the experience of God\'s love.' },
      { ref: 'Joshua 1:9', note: 'Courage is commanded precisely when the mission is frightening; God\'s presence is the ground of it.' },
      { ref: 'Psalm 56:3', note: '"When I am afraid, I will put my trust in you" — fear and trust can coexist; trust is the choice made inside fear.' },
      { ref: '2 Timothy 1:7', note: 'God has not given us a spirit of fear, but of power, love, and self-control.' },
      { ref: 'Luke 12:32', note: 'Jesus to his "little flock": do not be afraid — it is the Father\'s pleasure to give you the kingdom.' },
    ],
    context: `When God told Joshua "be strong and courageous," Joshua was about to lead an inexperienced nation against fortified cities after the death of Moses, the only leader they had ever known. The command was not "stop feeling afraid" but "do not let fear decide." Similarly, Isaiah 41 was spoken to exiles in Babylon — people who had lost their land, temple, and king. God's answer to their fear was not an escape plan but himself: "I am with you."

The New Testament deepens this. The disciples feared the storm, feared the authorities, feared the cross — and Jesus met each fear with his presence ("It is I; do not be afraid," John 6:20). After the resurrection, fearful disciples hiding behind locked doors became bold witnesses. What changed was not their temperament but their encounter with the risen Christ.`,
    notSays: `The Bible does not say that feeling afraid means you are failing God, or that faith makes fear disappear. It does not promise that courageous obedience removes danger — many faithful people suffered greatly. What it promises is that you never face what you fear alone, and that God's presence is a sufficient reason to move forward even when your hands shake.`,
    application: `When fear rises, practice Psalm 56:3 as a sentence prayer: "When I am afraid, I will put my trust in you." Say it out loud; naming your trust redirects your mind from the threat to the Protector. Identify what your fear is really about — often fear of the future is fear of being alone in it — and answer it with the specific promise that fits: his presence (Isaiah 41:10), his provision (Matthew 6), his sovereignty (Romans 8:28).

Take one small obedient step in the direction of the fear rather than waiting until you feel brave. Courage is a muscle built by use: make the call, have the conversation, take the step, while praying. And bring fear into the light with a trusted believer; fear grows in secrecy and shrinks in honest community.`,
    reflection: [
      'What are you most afraid of right now — and what does that fear assume about God?',
      'Which promise of God\'s presence (Isaiah 41:10, Joshua 1:9, Matthew 28:20) do you most need to memorize this week?',
      'What is one small, obedient step you could take this week despite the fear?',
    ],
    prayer: `Lord, you know the fears I carry — the ones I admit and the ones I hide. Your word says "do not be afraid" more times than I can count, and every time you give the same reason: you are with me. So I choose trust inside the fear. Drive out my fear with your perfect love. Make me strong and courageous, not because the path is safe, but because you walk it with me. When I am afraid, I will put my trust in you. In Jesus' name, amen.`,
    deeper: [
      'Read Psalm 27 and 91 as fear-fighting psalms; note how each moves from threat to trust.',
      'Study the "fear not" passages in Isaiah 40-44 and list every reason God gives.',
      'Memorize 2 Timothy 1:7 and 1 John 4:18 as short fear responses.',
    ],
  },
  {
    id: 'marriage',
    title: 'Marriage',
    teaches: `Marriage in Scripture is far more than a contract or a romance — it is a covenant that pictures Christ's love for the church. Ephesians 5:25 commands husbands to "love your wives, even as Christ also loved the church, and gave himself up for it." That single sentence sets the bar impossibly high and beautifully clear: marriage is meant to be a living parable of the gospel, where self-giving love is the daily language.

Genesis 2:24 establishes the pattern: a man leaves his father and mother, is joined to his wife, and they become "one flesh." Marriage creates a new family unit with a oneness that is physical, emotional, and spiritual. Jesus quotes this verse when teaching that marriage is meant to be permanent — "what God has joined together, let no man separate" (Matthew 19:6). The Bible is realistic about marriage's difficulty (1 Corinthians 7:28 speaks of "trouble in the flesh" for the married) but unwavering about its dignity and design.

Crucially, Scripture assigns mutual honor, not hierarchy of worth. Husbands and wives are "joint heirs of the grace of life" (1 Peter 3:7). Wives are called to respect, husbands to love sacrificially; both are called to the mutual submission of Ephesians 5:21. A marriage flourishes not when one spouse wins but when both outdo one another in honor (Romans 12:10).`,
    passages: [
      { ref: 'Genesis 2:24', note: 'The founding pattern: leaving, cleaving, and becoming one flesh — marriage creates a new covenant family.' },
      { ref: 'Ephesians 5:25, 33', note: 'Husbands: love as Christ loved the church, sacrificially. Wives: respect. A gospel-shaped marriage.' },
      { ref: '1 Corinthians 13:4-7', note: 'Love\'s job description: patient, kind, not self-seeking, enduring — the daily standard for spouses.' },
      { ref: '1 Peter 3:7', note: 'Husbands must honor wives as fellow heirs, "so that your prayers may not be hindered" — how you treat your spouse affects your walk with God.' },
      { ref: 'Song of Songs 2:16', note: 'Delight and belonging in marriage are God-given: "My beloved is mine, and I am his."' },
      { ref: 'Malachi 2:14-15', note: 'Marriage is covenant before God; faithfulness matters because God seeks "godly offspring" and covenant honor.' },
    ],
    context: `In the ancient world, marriage was often a property arrangement, and wives had few rights. Into that world, the New Testament spoke with startling dignity: Paul tells husbands to love their wives with the same self-sacrifice Christ showed the church — a command that had no parallel in surrounding culture. Peter commands husbands to treat wives with understanding and honor, warning that mistreatment hinders prayer. The Song of Songs celebrates mutual delight and desire within marriage as good and God-given, not shameful.

Marriage in Scripture is also eschatological — it points beyond itself. Revelation pictures the church as Christ's bride. Every faithful marriage is a rehearsal and a signpost of that final union, which is why covenant faithfulness carries such weight.`,
    notSays: `The Bible does not say marriage will make you happy, complete you, or fix your loneliness — only God completes (Psalm 73:25-26). It does not teach that wives are inferior, that husbands are dictators, or that singleness is second-class (Paul calls singleness a gift, 1 Corinthians 7:7-8). It does not promise that a godly spouse guarantees an easy marriage, nor that divorce is unforgivable — Scripture permits it in cases like adultery and abandonment while still holding marriage as lifelong covenant.`,
    application: `Treat your marriage as a daily gospel rehearsal. Ask each morning: "How can I lay down my life for my spouse today in one concrete way?" Practice 1 Corinthians 13 as a checklist when conflict comes: am I being patient right now? Kind? Keeping no record of wrongs? Many couples find a weekly "marriage check-in" — sharing appreciations, concerns, and prayer — keeps small cracks from widening.

Guard the covenant actively: maintain appropriate boundaries with others, keep short accounts (Ephesians 4:26 — don't let the sun go down on anger), and pray together regularly. If your marriage is struggling, seek help early — a pastor, counselor, or mature couple — without shame. Getting help is wisdom, not failure. And if you are single, invest in becoming the kind of person described in 1 Corinthians 13 now.`,
    reflection: [
      'In what one specific way could you show Christ-like, self-giving love to your spouse (or future spouse) this week?',
      'Where has "keeping a record of wrongs" crept into your marriage or closest relationships?',
      'How does seeing marriage as a picture of Christ and the church change the way you handle conflict?',
    ],
    prayer: `Father, thank you for the gift of marriage — a covenant that pictures Christ's love for the church. Forgive me for the ways I have loved selfishly, kept score, or spoken harshly. Teach me to love as Christ loved: patiently, sacrificially, without keeping records. Give my spouse and me unity of heart, quick forgiveness, and delight in one another. Where we are weak, be our strength; where we are divided, be our peace. Make our marriage a signpost of your faithful love. In Jesus' name, amen.`,
    deeper: [
      'Read Ephesians 5:21-33 slowly, noting that verse 21 ("submitting to one another") frames everything.',
      'Study 1 Corinthians 13 as a marriage manual — rewrite verses 4-7 with your spouse\'s name in place of "love."',
      'Read the Song of Songs to recover a biblical view of delight and romance in marriage.',
    ],
  },
  {
    id: 'parenting',
    title: 'Parenting',
    teaches: `Children are described in Scripture as "a heritage of the LORD" and "a reward" (Psalm 127:3) — not as possessions, interruptions, or projects, but as gifts entrusted to parents as stewards. Parenting, then, is stewardship: God lends us his children for a season, and our task is to raise them to know and love him. "Train up a child in the way he should go, and when he is old he will not depart from it" (Proverbs 22:6) is a proverb — a general principle of wisdom, not an ironclad guarantee — but it captures the direction: intentional, consistent, grace-shaped formation.

Deuteronomy 6:6-7 gives the method: God's words are to be on parents' hearts first, then impressed on children "when you sit in your house, when you walk by the way, when you lie down, and when you rise up." Faith is caught in the ordinary rhythms of home life, not just taught in formal lessons. Ephesians 6:4 balances the task: "do not provoke your children to anger, but nurture them in the discipline and instruction of the Lord." Discipline yes — but never harsh, shaming, or exasperating. The father's discipline should resemble the Father's: firm, consistent, and tender.

Perhaps most comforting: Scripture shows God as the perfect parent dealing with imperfect children — patient, corrective, never giving up. Our parenting will be imperfect. God's grace covers our failures with our children just as it covers everything else, and our repentance before our kids may be one of the most powerful lessons we ever teach them.`,
    passages: [
      { ref: 'Deuteronomy 6:6-7', note: 'Faith formation happens in ordinary rhythms — sitting, walking, lying down, rising — not just formal teaching.' },
      { ref: 'Ephesians 6:4', note: 'The balance: discipline and instruction, but never provoking children to anger.' },
      { ref: 'Proverbs 22:6', note: 'Intentional training sets a direction; a wise principle for the long road of parenting.' },
      { ref: 'Psalm 127:3-5', note: 'Children are a heritage and reward from God — gifts, not burdens.' },
      { ref: 'Colossians 3:21', note: 'Fathers: do not provoke your children, "that they may not be discouraged" — harshness crushes spirit.' },
      { ref: 'Luke 15:20', note: 'The prodigal\'s father models God\'s parenting: watching, running, embracing — grace for the returning child.' },
    ],
    context: `In ancient Israel, the family was the primary school of faith — there were no youth pastors or Sunday schools. Deuteronomy 6 was given to a people about to enter the Promised Land, with a warning: prosperity would tempt them to forget God, and only deliberate, daily, home-centered teaching would keep the next generation faithful. The Shema ("Hear, O Israel") was to be talked about constantly.

In the Roman world, fathers held absolute power, including life and death over children. Paul's command not to provoke children to anger was radically countercultural — it limited paternal authority by the character of God himself. Christian parenting was, from the start, meant to look different: authority exercised in love, never as domination.`,
    notSays: `The Bible does not promise that godly parenting guarantees godly children — Proverbs 22:6 is wisdom, not a formula, and Scripture is full of faithful parents with wayward children (consider Samuel and his sons). It does not endorse harsh, shaming, or abusive discipline; "do not provoke" rules that out. It does not say parents must be perfect — only faithful, repentant, and dependent on grace. And it does not define parenting success as children's achievement, but as faithfully pointing them to Christ.`,
    application: `Build Deuteronomy 6 rhythms into your week: a short Scripture or prayer at meals, talking about God on drives, bedtime prayers that invite your kids' honest questions. Aim for consistency over intensity — ten faithful minutes daily shapes more than an occasional lecture. Discipline with the goal of the child's heart, not just behavior: explain the "why," apply consequences calmly and consistently, and always reconnect with affection afterward.

Model repentance: when you sin against your child — harsh words, unfair anger — confess it to them and ask forgiveness. This teaches the gospel more powerfully than any lesson. Pray for each child by name regularly, and remember you are parenting with God, not for his approval. Rest in grace on the hard days.`,
    reflection: [
      'What "ordinary rhythm" of your day (meals, drives, bedtime) could become a moment of faith formation?',
      'Do your children more often experience your discipline as harsh or as loving? What would they say?',
      'When did you last ask your child\'s forgiveness? What keeps you from doing it?',
    ],
    prayer: `Father, thank you for entrusting these children to me — they are yours first, and mine only for a season. Forgive me for parenting in anger, for demanding perfection I do not have, for the times I provoked instead of nurtured. Fill my heart with your word so it overflows to them in ordinary moments. Give me patience that reflects your patience, discipline that reflects your love, and humility to say "I was wrong" when I fail. Draw each of my children to yourself, and let them see Jesus in me — imperfectly, but truly. In his name, amen.`,
    deeper: [
      'Study Deuteronomy 6:4-9 and list every "when" — then match each to your family\'s actual schedule.',
      'Read Luke 15:11-32 as a parenting parable: what does the father do, and what does he refuse to do?',
      'Memorize Ephesians 6:4 and Colossians 3:21 as guardrails for discipline.',
    ],
  },

  {
    id: 'friendship',
    title: 'Friendship',
    teaches: `Friendship is not a side dish of the Christian life; it is one of God's main provisions for it. "A friend loves at all times, and a brother is born for adversity" (Proverbs 17:17). Scripture presents friendship as covenantal, honest, and sharpening: "Iron sharpens iron; so a man sharpens his friend's countenance" (Proverbs 27:17). True friends do not merely affirm us — they refine us, sometimes through wounds we need: "Faithful are the wounds of a friend" (Proverbs 27:6).

Jesus himself elevates friendship to a staggering place. On the night before the cross he told his disciples, "I have called you friends" (John 15:15) — moving them from servants to friends by sharing everything the Father had given him. And he defined the highest form of friendship: "Greater love has no one than this, that someone lay down his life for his friends" (John 15:13) — which is exactly what he was about to do. Christian friendship, then, is cruciform: it gives, it stays, it tells the truth in love.

Proverbs is also realistic: friendships shape us for better or worse. "He who walks with wise men will be wise, but the companion of fools will suffer harm" (Proverbs 13:20). Choosing friends is choosing a future. And Ecclesiastes reminds us why friendship matters in suffering: "two are better than one... if they fall, the one will lift up his fellow" (Ecclesiastes 4:9-10). God designed us to need each other.`,
    passages: [
      { ref: 'Proverbs 17:17', note: 'The definition: a friend loves at all times — constancy, especially in adversity, marks true friendship.' },
      { ref: 'Proverbs 27:17', note: 'Friends sharpen each other like iron on iron — growth, not just comfort, is friendship\'s fruit.' },
      { ref: 'Proverbs 27:6', note: 'Faithful wounds: a true friend will tell you hard truths an enemy would flatter you about.' },
      { ref: 'John 15:13-15', note: 'Jesus calls his disciples friends and defines friendship by self-giving love.' },
      { ref: 'Ecclesiastes 4:9-12', note: 'Two are better than one — for help, warmth, and strength; "a threefold cord is not quickly broken."' },
      { ref: 'Proverbs 13:20', note: 'Choose friends wisely: companions shape character, for wisdom or for harm.' },
    ],
    context: `In the ancient world, friendship was often treated by philosophers as the highest human relationship — Aristotle wrote extensively about it. But biblical friendship goes further: David and Jonathan's covenant friendship (1 Samuel 18-20) involved self-sacrificial loyalty that cost Jonathan a throne. In the New Testament, the church is described with the language of deep mutual belonging — "devoted to one another in brotherly love" (Romans 12:10).

Notably, Jesus practiced friendship across his ministry: he wept at Lazarus's tomb (John 11:35), he shared meals with friends in Bethany, he confided in Peter, James, and John. The Son of God did not live above friendship; he lived inside it, showing us that needing friends is not weakness but humanity as God designed it.`,
    notSays: `The Bible does not say you need dozens of friends — Jesus had multitudes, twelve disciples, three close friends, and one beloved disciple; depth matters more than breadth. It does not say friendship means never confronting or always agreeing; faithful wounds are part of it. It does not promise friends will never fail you — even Jesus was betrayed and abandoned — but it does promise that God himself is the friend who never leaves (John 15, Hebrews 13:5).`,
    application: `Be the friend Proverbs describes before demanding one: love at all times, show up in adversity, speak truth kindly. Invest deeply in a few relationships rather than collecting acquaintances — initiate, ask real questions, remember what matters to them. Practice "iron sharpens iron" friendship by inviting one trusted believer to speak honestly into your life, and offer the same.

Evaluate your closest influences with Proverbs 13:20: are your companions making you wiser or duller? You cannot always choose your coworkers or family, but you can choose your confidants. And if you feel friendless, remember the church is God's answer — commit to a local body, serve alongside people, and let shared mission grow into shared life. Friendship often grows in the soil of serving together.`,
    reflection: [
      'Who are the two or three people who truly "sharpen" you — and do you give them permission to wound you faithfully?',
      'Are you more often the friend who shows up in adversity, or the one who disappears? What would change that?',
      'What influence are your closest companions having on your character — wiser or duller?',
    ],
    prayer: `Lord Jesus, you called your disciples friends and laid down your life for them — for me. Teach me to love my friends the way you love: constantly, honestly, sacrificially. Give me friends who sharpen me and the courage to receive their faithful wounds. Make me the kind of friend who shows up in adversity, who listens well, who points others to you. Where I am lonely, lead me into genuine community. And thank you for being the friend who sticks closer than a brother. In your name, amen.`,
    deeper: [
      'Read 1 Samuel 18-20 and note what Jonathan\'s friendship cost him — then ask what yours costs you.',
      'Study John 15:12-17 as Jesus\'s theology of friendship.',
      'Memorize Proverbs 17:17 and 27:17 as friendship standards.',
    ],
  },
  {
    id: 'anger',
    title: 'Anger',
    teaches: `Scripture treats anger with striking nuance: it is not always sin. God himself is described as angry at injustice and oppression, Jesus overturned the money changers' tables (John 2:15), and Paul commands, "Be angry, and do not sin" (Ephesians 4:26). Anger at genuine evil — abuse, exploitation, cruelty — is a right response of a heart made in God's image. The problem is never that we feel anger; it is what our anger does to us and through us.

James gives the diagnostic: "the anger of man doesn't produce the righteousness of God" (James 1:20). Human anger, left unchecked, becomes a controlling, destructive force. That is why Scripture surrounds anger with guardrails: be "slow to anger" (James 1:19), don't let the sun go down on it (Ephesians 4:26), and "don't sin by letting anger control you" (Psalm 4:4). Anger is like fire — useful in the fireplace, devastating in the curtains.

The deeper issue is what anger reveals. Jesus traced anger to the heart, equating murderous contempt with murder itself (Matthew 5:21-22). Anger often signals a blocked goal, a wounded pride, or an unmet expectation we have crowned as a right. The gospel addresses anger at the root: we who have been forgiven an infinite debt can release our grip on others' smaller debts, and we who are deeply loved do not need to defend our worth with rage.`,
    passages: [
      { ref: 'Ephesians 4:26-27', note: 'Be angry without sinning; resolve it quickly — lingering anger gives the devil a foothold.' },
      { ref: 'James 1:19-20', note: 'Be quick to listen, slow to speak, slow to anger — human anger does not produce God\'s righteousness.' },
      { ref: 'Proverbs 29:11', note: 'A fool vents all his anger; the wise hold it back. Self-control, not venting, is wisdom.' },
      { ref: 'Matthew 5:21-22', note: 'Jesus traces anger to the heart: contempt for a brother is a heart-murder, serious before God.' },
      { ref: 'Psalm 4:4', note: '"Be angry, and do not sin" — search your heart in the quiet; anger examined loses its power.' },
      { ref: 'Proverbs 15:1', note: 'A gentle answer turns away wrath — our words can defuse or detonate anger, ours and others\'.' },
    ],
    context: `In the ancient world, anger — especially a man's anger — was often seen as a sign of honor and strength. Aristotle considered righteous anger virtuous. Scripture subverts this: the "slow to anger" person is praised, and God himself is repeatedly described as "slow to anger and abundant in loving kindness" (Exodus 34:6; Psalm 103:8). The character trait God celebrates in himself is the one he commands in us.

Jesus's teaching in Matthew 5 was revolutionary: he internalized the command against murder, showing that anger-fueled contempt violates the law's spirit. And his own anger was always other-centered — directed at hard hearts that kept people from God (Mark 3:5) and at exploitation in the temple — never at personal insult. When personally attacked, "he did not threaten" (1 Peter 2:23). His anger served love; ours usually serves self.`,
    notSays: `The Bible does not say all anger is sin — God is angry at evil, and anger at injustice can be holy. It does not say to suppress anger and pretend it isn't there; "be angry and do not sin" assumes anger will come. It does not teach that venting is healthy — Proverbs calls venting folly. And it does not promise anger disappears instantly; it gives practices (slowness, quick resolution, gentle speech) for a lifetime of growth.`,
    application: `Build the James 1:19 sequence into your reflexes: when anger flares, listen first, speak slowly, and give yourself time before responding. Never send the message, make the decision, or have the conversation at peak anger — wait, pray, and examine what is underneath (hurt? fear? pride?). Practice Ephesians 4:26 literally: resolve conflicts the same day when possible; don't rehearse grievances in bed.

When anger is justified — at injustice, abuse, or wrongdoing — channel it the way Jesus did: into courageous, loving action rather than contempt or revenge. And when your anger has sinned, confess quickly to God and to the person wounded. Quick repentance keeps anger from hardening into bitterness.`,
    reflection: [
      'What tends to trigger your anger most — and what does that reveal about what you treasure or demand?',
      'Is there an anger you have let "the sun go down on" — a grievance you are nursing instead of resolving?',
      'When you are angry, do your words more often reflect Proverbs 15:1 (gentle answer) or Proverbs 29:11 (venting)?',
    ],
    prayer: `Father, you are slow to anger and abounding in love — make me like you. Forgive me for the times my anger has wounded people I love, for harsh words I cannot take back, for nursing grievances instead of resolving them. Show me what is underneath my anger: the hurt, the fear, the pride. Teach me to be quick to listen, slow to speak, and slow to anger. Where anger at injustice is right, channel it into courageous love, not contempt. Guard my tongue and soften my heart. In Jesus' name, amen.`,
    deeper: [
      'Read James 1:19-27 and 3:1-12 together — note the connection between anger and the tongue.',
      'Study Mark 3:1-6 and John 2:13-17: what made Jesus angry, and what did he do with it?',
      'Memorize Ephesians 4:26-27 and Proverbs 15:1 as anger guardrails.',
    ],
  },
  {
    id: 'forgiveness',
    title: 'Forgiveness',
    teaches: `Forgiveness stands at the very center of the Christian faith because it stands at the very center of what God has done for us. "Be kind to one another, tenderhearted, forgiving each other, just as God also in Christ forgave you" (Ephesians 4:32). Our forgiveness of others is not the basis of God's forgiveness — it is the overflow of it. We forgive because we have been forgiven an immeasurable debt, as Jesus's parable of the unforgiving servant makes unforgettable (Matthew 18:21-35).

Forgiveness, biblically, is a decision before it is a feeling. It means releasing the debt — choosing not to exact revenge, not to rehearse the offense endlessly, not to hold it over the person forever. Joseph forgave brothers who sold him into slavery (Genesis 50:20); Stephen forgave his murderers as they stoned him (Acts 7:60); Jesus forgave his executioners from the cross (Luke 23:34). None of these waited until the feeling arrived. They chose, and the feeling followed — sometimes slowly.

Forgiveness does not mean pretending the wrong didn't matter, and it does not always mean restoring trust immediately. Trust is rebuilt through repentance and changed behavior over time. But forgiveness means the ledger is cleared: you will not make them pay. This is possible only because at the cross, God in Christ absorbed the cost of sin rather than making us pay it. Every act of forgiveness is a small echo of that great one.`,
    passages: [
      { ref: 'Ephesians 4:32', note: 'The pattern: forgive as God in Christ forgave you — received forgiveness fuels given forgiveness.' },
      { ref: 'Matthew 18:21-35', note: 'The unforgiving servant: forgiven an unpayable debt, he choked a fellow servant over pennies — a warning.' },
      { ref: 'Colossians 3:13', note: 'Bear with one another and forgive "even as Christ forgave you" — forgiveness is a command, not a suggestion.' },
      { ref: 'Luke 23:34', note: 'From the cross: "Father, forgive them" — Jesus forgave his executioners mid-crucifixion.' },
      { ref: 'Genesis 50:20', note: 'Joseph to his brothers: "you meant evil against me, but God meant it for good" — forgiveness with clear eyes.' },
      { ref: 'Matthew 6:14-15', note: 'A sobering link: our willingness to forgive others reflects whether we have grasped God\'s forgiveness.' },
    ],
    context: `In the ancient world, forgiveness was widely considered weakness — honor demanded revenge. The Roman ideal was to repay injury with injury. Into this world, Jesus commanded love of enemies and limitless forgiveness ("seventy times seven," Matthew 18:22), and the early church practiced it so visibly that it became one of Christianity's most distinctive marks. When plagues struck the Roman Empire, Christians stayed to care for the sick — including those who persecuted them.

The parable of the unforgiving servant uses deliberately absurd numbers: ten thousand talents was more money than existed in circulation — an unpayable debt. Jesus's point: what God forgave you dwarfs anything anyone owes you. Refusing to forgive is not just unkind; it is a failure to understand the gospel.`,
    notSays: `The Bible does not say forgiveness means forgetting in the sense of pretending it never happened, or that you must immediately trust someone who has not repented. It does not require staying in abusive or dangerous situations — you can forgive and still set firm boundaries, seek protection, and pursue justice. It does not say forgiveness is a single event; deep wounds may require choosing forgiveness repeatedly. And it does not say forgiving earns God's forgiveness — we forgive because we have been forgiven, not in order to be.`,
    application: `Start where Jesus starts: remember how much you have been forgiven. Spend time with the parable of the unforgiving servant until the size of your own forgiven debt feels real — forgiving others flows from this, not from willpower. Then name the specific debt: who do you need to forgive, and for what? Vague forgiveness rarely heals; specific forgiveness does.

Make the decision out loud in prayer: "I release [name] from the debt of [offense]. I will not seek revenge or nurse this." If safe and wise, communicate forgiveness to the person. Expect the feelings to lag behind the decision — when the memory resurfaces, reaffirm the choice rather than reopening the case. And distinguish forgiveness from trust: forgive freely, rebuild trust slowly, and maintain boundaries where safety requires them.`,
    reflection: [
      'Whose debt are you still holding — replaying the offense, hoping they pay? What would releasing it look like?',
      'How does the size of what Christ forgave you compare to what you are withholding from someone else?',
      'Is there a boundary you need to set (for safety or health) that you have confused with unforgiveness?',
    ],
    prayer: `Father, you forgave me an unpayable debt through the blood of Jesus — and I have held others' small debts against them. Forgive me for my unforgiveness. Right now, I choose to release [name the person] from what they owe me for [name the offense]. I will not seek revenge, I will not nurse this wound, I will not hold it over them. When the memory returns, help me reaffirm this choice. Soften my heart where it has hardened. Make me as quick to forgive as you have been with me. In Jesus' name, amen.`,
    deeper: [
      'Read Matthew 18:21-35 slowly, calculating the debts — let the absurdity of the forgiven servant\'s refusal sink in.',
      'Study Genesis 50:15-21: notice Joseph forgives with clear eyes about what his brothers did.',
      'Memorize Ephesians 4:32 and Colossians 3:13 as forgiveness anchors.',
    ],
  },
  {
    id: 'money',
    title: 'Money',
    teaches: `The Bible talks about money constantly — Jesus spoke about it more than about heaven and hell combined — because money is one of the clearest windows into the heart. "For where your treasure is, there your heart will be also" (Matthew 6:21). Money itself is not evil; it is a tool, a provision, and a test. What Scripture warns against relentlessly is the love of money: "the love of money is a root of all kinds of evil" (1 Timothy 6:10). The issue is never the amount in the account; it is who sits on the throne of the heart.

Scripture gives a balanced, three-part wisdom about money: work diligently and honestly to earn it (Proverbs 10:4; 2 Thessalonians 3:10), steward it generously and wisely rather than hoarding it (Proverbs 3:9-10; Luke 12:33), and hold it loosely, remembering that everything belongs to God (Psalm 24:1; 1 Timothy 6:17-19). Wealth is a responsibility, not an identity. The rich are warned not against being rich but against being "high-minded" and trusting in "uncertain riches" instead of God.

Generosity is the great antidote to money's power over us. God is the ultimate giver — "he gave his one and only Son" (John 3:16) — and his people are meant to reflect him. "God loves a cheerful giver" (2 Corinthians 9:7), not because he needs our money, but because giving breaks money's grip and proves our trust is in him. Every act of generosity is a declaration: God, not gold, is my security.`,
    passages: [
      { ref: 'Matthew 6:21, 24', note: 'Treasure reveals the heart; you cannot serve both God and Mammon — money demands to be master.' },
      { ref: '1 Timothy 6:10, 17-19', note: 'It is the love of money that is the root of evil; the rich must trust God, not wealth, and be generous.' },
      { ref: 'Proverbs 3:9-10', note: 'Honor the LORD with your wealth and the firstfruits — giving first, not last, orders the heart.' },
      { ref: '2 Corinthians 9:7', note: 'God loves a cheerful giver — generosity is worship, given willingly, not under compulsion.' },
      { ref: 'Luke 12:15', note: 'Jesus\'s warning: "a man\'s life doesn\'t consist of the abundance of his possessions."' },
      { ref: 'Malachi 3:10', note: 'Bring the tithe and "test me" — God invites his people to prove his faithfulness in giving.' },
    ],
    context: `Jesus taught about money to people living under Roman taxation and economic insecurity — day laborers, fishermen, widows. His parables about talents, minas, stewards, and rich fools assumed listeners who understood both poverty and the temptations of wealth. The early church took his teaching so seriously that believers shared possessions radically (Acts 2:44-45; 4:32-35) — not by command but by transformed hearts.

The Old Testament tithe (a tenth) supported the Levites and the poor; the New Testament never repeals generosity but deepens it — from a required tenth to cheerful, sacrificial, proportionate giving (1 Corinthians 16:2; 2 Corinthians 8-9). The Macedonian churches gave "beyond their power" out of deep poverty because "they first gave themselves to the Lord" (2 Corinthians 8:5). Giving follows devotion; it cannot be manufactured apart from it.`,
    notSays: `The Bible does not say money is evil or that poverty is holier than wealth — Abraham, Job, and Lydia were wealthy and faithful. It does not promise that giving guarantees financial return (the "prosperity gospel" twists Malachi 3:10 and 2 Corinthians 9 beyond recognition). It does not command a specific percentage for New Testament believers, though the tithe remains a wise starting benchmark. And it does not say Christians must take a vow of poverty — it says to hold wealth loosely, earn honestly, and give generously.`,
    application: `Put God first in your finances literally: give first, save second, live on the rest. Start (or restart) with a committed percentage given cheerfully and regularly to your local church and the poor. Budget honestly — a budget is simply telling your money where to go instead of wondering where it went. Avoid debt for depreciating wants (Proverbs 22:7: "the borrower is servant to the lender"); save patiently; live below your means.

Examine your heart with two questions: does my spending reveal trust in God or in wealth? And am I generous in a way that costs me something? Generosity that never pinches has not yet broken money's grip. Teach your children (and remind yourself) that everything you have is a stewardship — "The earth is the LORD's" (Psalm 24:1) — and stewards will give an account with joy, not fear, when they have been faithful.`,
    reflection: [
      'If someone audited your bank statements, what would they conclude you treasure most?',
      'Is your giving first-fruits (planned, priority, cheerful) or leftovers (occasional, guilt-driven)?',
      'What is one financial fear you need to hand to God, trusting him rather than your reserves?',
    ],
    prayer: `Father, everything I have is yours — my money, my possessions, my future. Forgive me for serving Mammon while claiming to serve you, for trusting my savings more than your promises, for giving you leftovers instead of firstfruits. Break money's grip on my heart. Teach me to earn honestly, spend wisely, save patiently, and give cheerfully — reflecting your generosity. Provide for my needs as you promise, and make me a channel of your provision to others. You, not wealth, are my security. In Jesus' name, amen.`,
    deeper: [
      'Read Luke 12:13-34 as one teaching — note how Jesus connects greed, anxiety, and trust.',
      'Study 2 Corinthians 8-9, the New Testament\'s fullest teaching on giving.',
      'Memorize Matthew 6:21 and 1 Timothy 6:17-19 as money heart-checks.',
    ],
  },

  {
    id: 'work',
    title: 'Work',
    teaches: `Work is not a curse; it is a calling that predates the curse. Before sin entered the world, God placed Adam in the garden "to cultivate and keep it" (Genesis 2:15). Work is part of what it means to bear God's image — he is a worker (Genesis 1; John 5:17), and so are we. The fall made work painful ("thorns and thistles," Genesis 3:18), but it did not make work bad. Every honest job, from farming to coding to caregiving, can be an act of worship when done for God's glory.

Colossians 3:23 reframes all labor: "Whatever you do, work heartily, as for the Lord, and not for men." The audience matters more than the task. A Christian barista and a Christian executive have the same Boss, and the same opportunity to display diligence, honesty, and excellence as worship. This dignifies so-called ordinary work enormously — there is no secular-sacred divide in vocation. Changing diapers, writing code, mopping floors: all of it can be "for the Lord."

Scripture also sets boundaries around work. The Sabbath command (Exodus 20:8-11) declares that we are not what we produce; rest is an act of trust that God runs the world without our help. And work must never become identity or idol. Ecclesiastes warns against the driven life of endless accumulation (Ecclesiastes 4:7-8). We work from rest and acceptance in Christ, not for rest and acceptance. The gospel frees us to work excellently without being enslaved by work.`,
    passages: [
      { ref: 'Genesis 2:15', note: 'Work predates the fall: God put man in the garden to cultivate and keep it — work is original design, not punishment.' },
      { ref: 'Colossians 3:23', note: 'Work heartily "as for the Lord" — the audience of your labor transforms its meaning.' },
      { ref: 'Exodus 20:8-11', note: 'The Sabbath: rest is commanded, declaring that we are not what we produce.' },
      { ref: 'Proverbs 10:4', note: '"The hand of the diligent makes rich" — Scripture honors hard work and warns against laziness.' },
      { ref: '2 Thessalonians 3:10', note: '"If anyone is not willing to work, neither let him eat" — provision comes through responsible labor.' },
      { ref: 'Ecclesiastes 4:7-8', note: 'A warning against joyless toil: the man who works endlessly but enjoys nothing has missed the point.' },
    ],
    context: `In the Greco-Roman world, manual labor was despised — fit for slaves, not free citizens. Philosophers praised leisure and looked down on workers. Christianity subverted this entirely: Jesus was a carpenter, Paul a tentmaker who worked with his hands to support his ministry (Acts 18:3), and the apostles commanded believers to "work with your hands" (1 Thessalonians 4:11). The dignity of labor is a Christian inheritance the modern world takes for granted.

The Sabbath was equally radical: in a world of relentless production, Israel was commanded to stop one day in seven — slaves included. Rest was a weekly declaration that God, not Pharaoh (or the employer, or the market), is Lord. Jesus later clarified that the Sabbath was made for man, not man for the Sabbath (Mark 2:27): rest is God's gift, not another burden.`,
    notSays: `The Bible does not say your job is your identity or your worth — you are God's child before you are anyone's employee. It does not promise that faithful work guarantees promotion or prosperity; Joseph and Daniel were faithful in obscurity and in palaces, and many godly workers suffer injustice. It does not teach that only "ministry" jobs matter to God — the sacred-secular divide is unbiblical. And it does not bless workaholism; relentless work that destroys rest, family, and health violates the Sabbath principle.`,
    application: `Begin each workday by consciously offering it to God: "Lord, I work for you today." Pursue excellence not to impress people but to honor him — meet deadlines, keep promises, do honest work even when no one checks. Let your integrity be your witness: refuse to cut corners, gossip about coworkers, or steal time, and watch how distinct that is.

Guard the Sabbath rhythm: take a real weekly rest from productive labor, trusting God with what is unfinished. If work has become your identity, practice saying "I am a child of God who happens to do X" rather than "I am an X." And if you are between jobs or in a job you dislike, remember Joseph in prison and Daniel in exile — faithfulness in the small, hard place is never wasted; God sees, and your labor "in the Lord is not in vain" (1 Corinthians 15:58).`,
    reflection: [
      'Do you functionally work "for men" (boss, approval, image) or "for the Lord"? What would change tomorrow if it were truly for him?',
      'Is your weekly rhythm marked by real rest — or has work swallowed the Sabbath?',
      'How much of your identity is tied to your job title? What would remain if the job disappeared?',
    ],
    prayer: `Lord, thank you for the dignity of work — you worked in creation, Jesus worked as a carpenter, and you have given me work to do. Forgive me for working for applause, for finding my worth in my output, for neglecting rest. Teach me to work heartily as for you: with excellence, honesty, and joy. Give me a true Sabbath rest each week, trusting you with what is undone. Where my work is hard or thankless, remind me that nothing done for you is in vain. In Jesus' name, amen.`,
    deeper: [
      'Read Genesis 1-2 noting every instance of God working — then read Genesis 3:17-19 on how work changed.',
      'Study Colossians 3:22-4:1 in context: Paul\'s vision for transformed labor relations.',
      'Memorize Colossians 3:23 and Exodus 20:8 as work-and-rest anchors.',
    ],
  },
  {
    id: 'purpose',
    title: 'Purpose',
    teaches: `The question "What is my purpose?" has a gloriously clear biblical answer before it has a personal one. The Westminster Shorter Catechism captured it: our chief end is "to glorify God, and to enjoy him forever." Scripture agrees: "you were created" for God's pleasure (Revelation 4:11); "whether you eat, or drink, or whatever you do, do all to the glory of God" (1 Corinthians 10:31). Purpose is not first something we find within ourselves — it is something we receive from our Maker. A tool discovers its purpose from its designer, not from introspection.

Within that great purpose, God gives each person specific good works to walk in: "we are his workmanship, created in Christ Jesus for good works, which God prepared before that we would walk in them" (Ephesians 2:10). Your particular calling — the intersection of your gifts, burdens, and opportunities — was prepared beforehand. Purpose is discovered more than invented: as you walk with God, serve where you are, and steward what he has given, the path clarifies.

Crucially, purpose in Scripture is not reserved for the extraordinary. Most of God's servants lived ordinary, faithful lives — farming, raising families, working trades — and their quiet obedience mattered eternally. "Well done, good and faithful servant" (Matthew 25:21) is spoken to faithfulness, not fame. Your purpose is not to be impressive; it is to be faithful with what God entrusted to you, for his glory.`,
    passages: [
      { ref: 'Ephesians 2:10', note: 'You are God\'s workmanship, created for good works he prepared beforehand — purpose is discovered in walking with him.' },
      { ref: '1 Corinthians 10:31', note: 'The all-of-life purpose: do everything — eating, drinking, working — to God\'s glory.' },
      { ref: 'Matthew 25:21', note: '"Well done, good and faithful servant" — God measures faithfulness, not fame or scale.' },
      { ref: 'Micah 6:8', note: 'Purpose distilled: do justice, love mercy, walk humbly with God.' },
      { ref: 'Jeremiah 29:11', note: 'God\'s plans for his people are good — "a future and a hope" — even spoken in exile.' },
      { ref: 'Colossians 3:17', note: 'Whatever you do, in word or deed, do all in the name of the Lord Jesus.' },
    ],
    context: `Jeremiah 29:11 is often quoted on graduation cards, but it was written to exiles in Babylon — people whose plans had collapsed. God's "plans to prosper you" were seventy-year plans fulfilled in captivity, not instant success. Biblical purpose includes suffering, waiting, and obscurity; it is bigger than personal fulfillment.

Similarly, Ephesians 2:10 follows the great passage on salvation by grace (2:8-9). Purpose is not how we earn God's favor; it is what saved people get to do. The order matters enormously: identity first (workmanship, beloved), then activity (good works). Modern culture reverses this — do, then be. Scripture insists: you are his, therefore you have work to do. Purpose flows from belonging, not the other way around.`,
    notSays: `The Bible does not promise you will always feel purposeful — David, Elijah, and Jeremiah all had seasons of despair and confusion about their calling. It does not say purpose equals a career, a platform, or a single "one thing" you must discover or miss forever. It does not teach that ordinary, unseen faithfulness is second-rate — the kingdom runs on it. And it does not say your purpose is self-actualization; it is God-glorification, which sometimes costs comfort.`,
    application: `Start with the great purpose: orient each day around glorifying God and enjoying him — in prayer, work, relationships, rest. Then steward your specific calling: list your gifts, burdens, and open doors, and ask where they overlap. Serve somewhere now rather than waiting for clarity; purpose is usually discovered in motion, not in contemplation alone. Faithfulness in small assignments is the apprenticeship for larger ones (Luke 16:10).

Hold your specific plans loosely and your ultimate purpose tightly. God may redirect — as he did Paul, Joseph, and Moses — and redirection is not failure. Ask regularly: "Am I seeking to be faithful or to be impressive?" And remember that seasons change: raising children, caring for aging parents, and quiet prayer are kingdom work even when they earn no applause.`,
    reflection: [
      'If your purpose is to glorify God and enjoy him, what in your current schedule actually serves that — and what competes with it?',
      'Where do your gifts, burdens, and opportunities overlap right now? What good work might God have prepared there?',
      'Are you chasing faithfulness or impressiveness? What would change if "well done, good and faithful servant" were your only ambition?',
    ],
    prayer: `Father, you made me for yourself — to glorify you and enjoy you forever. Forgive me for chasing purposes of my own making: success, comfort, applause. Show me the good works you prepared for me to walk in. Give me faithfulness in the small things, courage for the hard things, and contentment in the ordinary things. When my plans collapse, remind me that your plans stand. Make my life — eating, drinking, working, resting — an offering to your glory. In Jesus' name, amen.`,
    deeper: [
      'Read Ephesians 2:1-10 as one arc: from death to life to good works — purpose as the fruit of grace.',
      'Study the parable of the talents (Matthew 25:14-30): what does faithfulness look like with what you have?',
      'Memorize 1 Corinthians 10:31 and Micah 6:8 as purpose statements.',
    ],
  },
  {
    id: 'temptation',
    title: 'Temptation',
    teaches: `Temptation is not sin — being tempted means you are human, not that you have failed. Jesus himself "has been tempted in all things as we are, yet without sin" (Hebrews 4:15). The sin begins when temptation is entertained and obeyed: "each one is tempted when he is drawn away by his own lust and enticed. Then the lust, when it has conceived, bears sin" (James 1:14-15). Understanding this distinction lifts crushing false guilt and focuses the battle where it belongs: at the point of choice.

Scripture is honest about how temptation works. It comes from our own desires, from the world, and from the devil — who tempted even Jesus in the wilderness (Matthew 4:1-11). Notice Jesus's defense: Scripture, quoted accurately and applied precisely, three times. "It is written" was his sword. We fight the same way: with truth memorized and wielded, not with willpower alone.

And here is the great promise: "No temptation has taken you except what is common to man. God is faithful, who will not allow you to be tempted above what you are able, but will with the temptation also make the way of escape, that you may be able to endure it" (1 Corinthians 10:13). You are never tempted without a God-given exit. The way of escape is always there — the question is whether we take it. Because Jesus was tempted, he can "help those who are tempted" (Hebrews 2:18). You do not fight alone.`,
    passages: [
      { ref: '1 Corinthians 10:13', note: 'Every temptation is common, God limits it, and he always provides a way of escape.' },
      { ref: 'Hebrews 4:15', note: 'Jesus was tempted in every way as we are, yet without sin — temptation is not sin.' },
      { ref: 'James 1:14-15', note: 'The anatomy: desire entices, lust conceives, sin is born — the battle is at the point of entertaining.' },
      { ref: 'Matthew 4:1-11', note: 'Jesus defeats Satan\'s three temptations with "It is written" — Scripture is the sword.' },
      { ref: 'Hebrews 2:18', note: 'Because he suffered being tempted, Jesus is able to help those who are tempted — run to him.' },
      { ref: '2 Timothy 2:22', note: '"Flee youthful lusts" — sometimes the godly strategy is not fighting but running.' },
    ],
    context: `The wilderness temptation (Matthew 4) came immediately after Jesus's baptism, where the Father declared "This is my beloved Son." Satan's first words — "If you are the Son of God" — attacked his identity. Temptation often strikes right after spiritual highs and targets our identity and appetites: turn stones to bread (appetite), throw yourself down (spectacle), worship me (shortcut to glory). Jesus answered each with Deuteronomy — Scripture he had internalized long before the crisis.

James wrote to scattered, suffering believers tempted to doubt God's goodness. His point in 1:13-15 is pastoral: don't blame God for temptation; understand its mechanics in your own desires so you can fight it at the root. And Paul's "way of escape" in 1 Corinthians 10:13 was written to confident Corinthians flirting with idolatry — a warning that no one is beyond falling, and a promise that no one is beyond help.`,
    notSays: `The Bible does not say temptation is sin — Jesus was tempted and sinless. It does not promise temptation disappears after conversion or after years of maturity; it promises a way of escape, not a life without battle. It does not say willpower alone is enough — the strategy includes fleeing, Scripture, prayer, and community. And it does not say God tempts you (James 1:13 is explicit); he tests to strengthen, never to trap.`,
    application: `Learn your patterns: when are you most vulnerable (tired, lonely, stressed, celebrating)? Temptation thrives in predictable conditions — change the conditions. Memorize two or three "It is written" verses targeted at your specific battle, so truth is loaded before the fight. And plan your escape in advance: 1 Corinthians 10:13 promises the exit exists, but you must take it — decide now what you will do when temptation comes (call someone, leave the room, shut the laptop).

Bring the battle into the light. Secret temptation grows; confessed temptation shrinks (James 5:16). Find one trusted believer who knows your struggle and checks on you. And when you fall, run to Christ, not from him — "we have an Advocate with the Father, Jesus Christ the righteous" (1 John 2:1). Confess quickly, receive cleansing (1 John 1:9), and get back up.`,
    reflection: [
      'What are your predictable conditions of vulnerability — and what "way of escape" could you plan in advance?',
      'Which specific Scripture could be your "It is written" sword for your most frequent temptation?',
      'Who knows about your battle? What keeps you from bringing it into the light with a trusted believer?',
    ],
    prayer: `Lord Jesus, you were tempted in every way yet without sin, and you know exactly how hard this fight is. Thank you that temptation is not sin and that you always provide a way of escape. Show me my patterns — when and where I am weakest — and give me the humility to flee rather than flirt. Plant your word deep in me so I can answer "It is written." Give me a brother or sister to fight alongside. And when I fall, let me run to you quickly, receive your cleansing, and rise again. You are my helper and my escape. In your name, amen.`,
    deeper: [
      'Read Matthew 4:1-11 noting which Scriptures Jesus quotes — all from Deuteronomy, all about Israel\'s wilderness testing.',
      'Study James 1:12-18 as the full anatomy of temptation and the contrasting "good gifts" of God.',
      'Memorize 1 Corinthians 10:13 and Hebrews 4:15-16 as battle promises.',
    ],
  },
  {
    id: 'addiction',
    title: 'Addiction',
    teaches: `Scripture does not use the modern word "addiction," but it describes the reality with piercing accuracy: "a man is a slave to whatever masters him" (2 Peter 2:19, paraphrase of "by whom a man is overcome, by him he is brought into bondage"). Whatever we cannot stop — substance, pornography, gambling, food, scrolling, approval — has become a master, and Scripture names that bondage honestly. But it never leaves us there. The gospel is, at its core, a liberation story: "if the Son makes you free, you will be free indeed" (John 8:36).

Paul describes the inner war of compulsive sin with raw honesty in Romans 7: "the evil which I do not want, that I practice." Then comes the turning point: "Who will deliver me...? Thanks be to God through Jesus Christ our Lord!" (Romans 7:24-25). Deliverance is a person, not a technique. And 1 Corinthians 6:12 gives the freedom test: "'All things are lawful for me,' but not all things are beneficial... I will not be brought under the power of anything." If it masters you, it is not freedom — no matter how lawful or culturally accepted.

Recovery in Scripture is never solo. James 5:16 commands confession to one another for healing. The church is meant to be the community where strugglers find grace without shame and accountability without condemnation. And freedom is a process of "putting off" the old and "putting on" the new (Ephesians 4:22-24) — replacing the compulsive pattern with new habits, new community, and new worship, one day at a time.`,
    passages: [
      { ref: 'John 8:36', note: 'The liberation promise: "If the Son makes you free, you will be free indeed."' },
      { ref: 'Romans 7:24-25', note: 'Paul\'s cry from compulsive sin — and the answer: deliverance through Jesus Christ.' },
      { ref: '1 Corinthians 6:12', note: 'The freedom test: "I will not be brought under the power of anything."' },
      { ref: '2 Peter 2:19', note: 'Whatever overcomes a person enslaves them — Scripture names addiction as bondage honestly.' },
      { ref: 'James 5:16', note: 'Confess to one another and be healed — recovery happens in the light of community.' },
      { ref: 'Ephesians 4:22-24', note: 'Put off the old, be renewed in mind, put on the new — freedom is replacement, not just removal.' },
    ],
    context: `The Bible's world knew bondage intimately — literal slavery, debt bondage, and the compulsive patterns of idolatry. When Paul wrote "you are slaves of the one whom you obey" (Romans 6:16), his readers understood viscerally: everyone serves something. The question is never whether you will be mastered, but by whom. The gospel offers a transfer of masters — from sin to righteousness, from compulsion to willing service of a good Lord.

Proverbs personifies addiction-like patterns in its warnings about wine ("at the last it bites like a serpent," Proverbs 23:32) and the adulteress. The wisdom is practical: don't start down the path (23:31 — "do not look on the wine when it is red"), because the path masters the traveler. Prevention and escape both begin with honest naming of the danger.`,
    notSays: `The Bible does not say addiction is only a moral failure with no physical or psychological dimensions — Scripture acknowledges the body's weakness (Matthew 26:41) and God works through medical and professional help. It does not promise instant, effortless deliverance; freedom is usually a fought-for process. It does not say relapse means God has abandoned you — his mercies are new every morning (Lamentations 3:23). And it does not say strugglers are second-class Christians; some of God's greatest servants fought their own thorns.`,
    application: `Name it honestly — to God, to yourself, and to at least one trusted person. Secrecy is addiction's oxygen; confession is its antidote (James 5:16). Remove access where you can: install blockers, change routes, end enabling relationships — "flee" is biblical strategy (2 Timothy 2:22). Don't negotiate with the compulsion; plan your escape before the craving comes.

Build replacement, not just removal: new rhythms (prayer, exercise, service), new community (a recovery group, an accountability partner who asks hard questions weekly), and new worship (the heart must love something more than the idol). Consider professional counseling or a Christ-centered recovery program without shame — God heals through means. And anchor each day in Romans 6: you are dead to sin and alive to God; live from that identity, one day at a time, celebrating progress without demanding perfection.`,
    reflection: [
      'What has mastered you — what can you not stop, no matter how lawful or normal it seems? Name it specifically.',
      'Who knows about your struggle? What is one step toward the light you could take this week?',
      'What "put on" replacement — new habit, community, worship — could fill the space the compulsion occupies?',
    ],
    prayer: `Lord Jesus, you came to set captives free, and I am captive. I confess that [name it] has mastered me, and I cannot free myself. Thank you that you are not ashamed of me and that your mercies are new every morning. Break these chains — do what I cannot do. Give me courage to confess to a trusted believer, wisdom to remove access and flee temptation, and perseverance for the long road of recovery. Fill the empty spaces with yourself. I am dead to sin and alive to you; teach me to live like it, one day at a time. In your mighty name, amen.`,
    deeper: [
      'Read Romans 6-8 as the charter of freedom: dead to sin, alive to God, no condemnation, life in the Spirit.',
      'Study Proverbs 23:29-35 on alcohol as a case study in how Scripture describes compulsive patterns.',
      'Memorize John 8:36 and 1 Corinthians 6:12 as freedom declarations.',
    ],
  },

  {
    id: 'grief',
    title: 'Grief',
    teaches: `Grief is not the opposite of faith; in Scripture, it is often the evidence of love. Jesus wept at Lazarus's tomb (John 11:35) — the shortest verse in the Bible and one of the most profound. He knew he would raise Lazarus in minutes, yet he wept. Grief is not a failure to trust God's plan; it is the heart's honest response to loss in a world that was not meant to contain death. "Blessed are those who mourn, for they shall be comforted" (Matthew 5:4) — not "blessed are those who move on quickly."

The Bible gives grief a language: lament. Over a third of the Psalms are laments — raw, honest prayers of sorrow directed at God. "How long, O LORD?" (Psalm 13:1). "My God, my God, why have you forsaken me?" (Psalm 22:1, quoted by Jesus on the cross). Lament is not complaining against God; it is bringing pain to God instead of away from him. The psalmists weep and question, but they weep toward God, and most laments turn — sometimes barely, sometimes gloriously — toward trust.

And grief has a horizon. "Weeping may stay for the night, but joy comes in the morning" (Psalm 30:5). For the Christian, grief is real but not final: "we do not grieve as those who have no hope" (1 Thessalonians 4:13). We grieve — deeply — but we grieve within the larger story of resurrection. Tears are not wasted; God collects them: "Put my tears in your bottle" (Psalm 56:8). Every tear matters to him.`,
    passages: [
      { ref: 'John 11:35', note: '"Jesus wept" — the Son of God grieved at a tomb he was about to empty. Grief is holy.' },
      { ref: 'Matthew 5:4', note: '"Blessed are those who mourn" — God\'s comfort is promised specifically to the grieving.' },
      { ref: 'Psalm 13', note: 'A model lament: honest "how long?", bold asking, and a turn toward trust.' },
      { ref: '1 Thessalonians 4:13', note: 'We grieve, but not "as those who have no hope" — resurrection reframes sorrow.' },
      { ref: 'Psalm 56:8', note: 'God puts our tears in his bottle — no tear is unnoticed or wasted.' },
      { ref: 'Revelation 21:4', note: 'The final horizon: God will wipe every tear; death, mourning, and pain will end.' },
    ],
    context: `Israel's faith made room for public, prolonged grief: Jacob was mourned seventy days (Genesis 50:3), Aaron and Moses thirty days each (Numbers 20:29; Deuteronomy 34:8). Tearing clothes, wearing sackcloth, sitting in ashes — grief had rituals and time. Our culture rushes grief; Scripture honors it.

The lament psalms were Israel's hymnbook — sung in worship, not hidden in private. This means God's people were taught to bring their darkest feelings into his presence as worship. Jesus himself prayed Psalm 22:1 from the cross, showing that even the Son of God lamented. And the early church grieved its martyrs deeply while singing of resurrection hope — sorrow and hope held together, never one canceling the other.`,
    notSays: `The Bible does not say grief has a timetable — there is no "should be over it by now" in Scripture. It does not say strong Christians don't cry; Jesus wept, David wept, Paul wept. It does not promise explanations for every loss — Job never got one. It does not say "everything happens for a reason" as a platitude to the grieving; Romans 8:28 is true, but it is a promise to cling to, not a slogan to wield. And it does not treat hope as the absence of pain, but as pain's larger context.`,
    application: `Give yourself permission to grieve at your own pace, and give others the same. Resist the urge to explain, fix, or hurry someone's sorrow — Job's friends were helpful only while they sat silently with him (Job 2:13); their trouble started when they opened their mouths. The best ministry to the grieving is presence: show up, listen, weep with those who weep (Romans 12:15).

Pray the laments. When you have no words, borrow the psalmists': read Psalm 13, 42, or 77 aloud as your own prayer. Write your grief in a journal addressed to God — lament is worship. And hold resurrection hope gently: let 1 Thessalonians 4:13-18 and Revelation 21:4 remind you that this sorrow has an expiration date, even when you cannot feel it yet. If grief becomes debilitating, seek counseling without shame; prolonged, complicated grief deserves skilled help.`,
    reflection: [
      'What loss are you carrying that you have not fully grieved — rushed past, minimized, or hidden?',
      'Which lament psalm (13, 22, 42, 77) most sounds like your heart right now? Could you pray it aloud?',
      'Who in your life is grieving and needs your silent presence more than your explanations?',
    ],
    prayer: `Father of mercies and God of all comfort, I bring you my grief — the loss I cannot undo and the sorrow I cannot explain. Thank you that Jesus wept, that you collect my tears, that you do not rush me. Teach me to lament honestly: to ask "how long?" without losing "yet I will trust." Comfort me as only you can — not with platitudes but with your presence. And when I cannot see it, hold before me the morning of resurrection, when you will wipe every tear from my eyes. Until then, carry me. In Jesus' name, amen.`,
    deeper: [
      'Read John 11:1-44 slowly, noticing when Jesus weeps and what moves him.',
      'Pray through Psalm 13 and Psalm 77 as personal laments, verse by verse.',
      'Study 1 Thessalonians 4:13-18 and Revelation 21:1-4 as grief\'s horizon of hope.',
    ],
  },
  {
    id: 'suffering',
    title: 'Suffering',
    teaches: `The Bible never pretends suffering is an illusion or a mistake. From Abel's murder to the cross to the martyrs of Revelation, Scripture is brutally honest: in a fallen world, suffering is certain. Jesus promised it plainly: "In the world you have tribulation" (John 16:33). But he finished the sentence: "but be of good cheer. I have overcome the world." Christianity does not offer an explanation for every instance of suffering; it offers a Person who entered it, a purpose within it, and a promise beyond it.

Scripture gives suffering several purposes without claiming any one explains every case. Suffering refines faith like fire refines gold (1 Peter 1:6-7). It produces endurance, character, and hope (Romans 5:3-5). It equips us to comfort others (2 Corinthians 1:3-4). It keeps us dependent on God rather than ourselves (2 Corinthians 1:9; 12:9). And it conforms us to Christ, who "learned obedience by the things which he suffered" (Hebrews 5:8). None of this makes suffering good in itself — Paul calls our troubles "light affliction" only by comparison to "eternal weight of glory" (2 Corinthians 4:17).

The deepest answer to suffering is not a reason but the cross. God did not stay distant from human pain; in Christ he entered it fully — betrayed, beaten, crucified. "We do not have a high priest who cannot sympathize with our weaknesses" (Hebrews 4:15). Whatever you suffer, you suffer with a God who knows suffering from the inside. And the story ends in resurrection: present sufferings "are not worthy to be compared with the glory that will be revealed" (Romans 8:18).`,
    passages: [
      { ref: 'John 16:33', note: 'Jesus\'s honest promise: tribulation is certain, but he has overcome the world.' },
      { ref: 'Romans 8:18', note: 'Present sufferings cannot compare with the glory to be revealed — suffering is real but temporary.' },
      { ref: '2 Corinthians 4:17', note: 'Light, momentary affliction prepares an eternal weight of glory — God wastes nothing.' },
      { ref: '1 Peter 1:6-7', note: 'Trials refine faith like fire refines gold, proving it genuine.' },
      { ref: '2 Corinthians 12:9', note: '"My grace is sufficient for you, for my power is made perfect in weakness."' },
      { ref: 'Romans 5:3-5', note: 'The chain: suffering produces endurance, endurance character, character hope — and hope does not disappoint.' },
    ],
    context: `Job is Scripture's great meditation on unexplained suffering. Job was righteous, yet lost everything — and God never told him why. God's answer from the whirlwind was not an explanation but a revelation of himself: his wisdom, power, and care are beyond our comprehension, and that is enough. Job's response — "I had heard of you... but now my eye sees you" (Job 42:5) — suggests that knowing God can satisfy where answers cannot.

The early church suffered severely — persecution, imprisonment, martyrdom — and the New Testament was largely written to suffering people. Peter wrote to persecuted believers, Paul wrote joy from prison, John wrote Revelation in exile. Their uniform testimony: suffering for Christ is not a sign of God's absence but often of his presence and purpose (Philippians 1:29; 1 Peter 4:12-14).`,
    notSays: `The Bible does not say all suffering is punishment for personal sin — Job's friends were wrong, and Jesus rejected that logic (John 9:3; Luke 13:1-5). It does not promise that faith removes suffering; it promises God's presence and purpose within it. It does not give a specific reason for every trial — some suffering remains mystery this side of heaven. It does not say Christians should seek suffering or pretend it doesn't hurt. And it never treats "everything happens for a reason" as a complete answer; Romans 8:28 promises God works all things for good, not that all things are good.`,
    application: `When suffering comes, do three things Job's story models: bring honest lament to God (don't perform fine), resist the urge to demand full explanations (trust God's character where you can't trace his hand), and stay in community (isolation amplifies suffering; shared burdens lighten). Ask "What is God forming in me?" alongside "Why is this happening?" — the first question usually yields more fruit.

Let suffering make you a comforter: "the God of all comfort... comforts us in all our affliction, that we may be able to comfort those who are in any affliction" (2 Corinthians 1:3-4). Your wounds can become someone else's hope. And fix your eyes on the horizon regularly — read Revelation 21, Romans 8:18-25, or 2 Corinthians 4:16-18 when the present pain feels permanent. It isn't. "Weeping may stay for the night, but joy comes in the morning" (Psalm 30:5).`,
    reflection: [
      'What suffering are you in (or emerging from), and what is it forming in you — endurance, character, hope, dependence?',
      'Do you tend to demand explanations from God, or to trust his character when you cannot trace his hand?',
      'How might your current or past suffering equip you to comfort someone else (2 Corinthians 1:3-4)?',
    ],
    prayer: `Father, I do not understand this suffering, and I will not pretend it doesn't hurt. Thank you that you do not ask me to — you gave me the psalms of lament, you gave me a Savior who wept and bled. When I cannot trace your hand, help me trust your heart. Use this affliction to refine my faith, deepen my dependence, and make me a comforter to others. Remind me daily that this is light and momentary compared to the eternal glory you are preparing. Sustain me by your grace, which is sufficient. In Jesus' name, amen.`,
    deeper: [
      'Read the book of Job (or Job 1-2 and 38-42) and notice what God does and doesn\'t explain.',
      'Study 2 Corinthians 1:3-11 and 4:7-18 as Paul\'s theology of suffering and comfort.',
      'Memorize Romans 8:18 and 2 Corinthians 12:9 as suffering anchors.',
    ],
  },
  {
    id: 'pride',
    title: 'Pride',
    teaches: `Pride is the original sin and the root of every other. Before Adam ate the fruit, Satan fell through pride — "I will ascend... I will make myself like the Most High" (Isaiah 14:13-14). At its core, pride is the attempt to be God: to rule our own lives, take credit for our gifts, look down on others, and live as if we don't need grace. "Pride goes before destruction, and a haughty spirit before a fall" (Proverbs 16:18). Scripture opposes pride more fiercely than almost any other sin: "God resists the proud, but gives grace to the humble" (James 4:6).

Pride is uniquely blinding. The proud rarely know they are proud — that is the nature of the disease. It hides in our strengths (intelligence, morality, success), in our spirituality (the Pharisee thanking God he wasn't like others, Luke 18:11), even in our humility (spiritual pride is the sneakiest kind). C.S. Lewis called pride "the complete anti-God state of mind." It is the one vice from which every other vice derives: anger defends pride, greed feeds it, lust serves it.

The gospel is pride's deathblow. We are saved "not of works, that no one would boast" (Ephesians 2:9) — there is nothing to boast about. And our model is Christ, who "emptied himself, taking the form of a servant... he humbled himself, becoming obedient to death" (Philippians 2:7-8). Humility is not thinking less of yourself; it is thinking of yourself less — because you are thinking of Christ more.`,
    passages: [
      { ref: 'Proverbs 16:18', note: 'The classic warning: pride goes before destruction — it is self-destructive, not just offensive.' },
      { ref: 'James 4:6', note: 'God resists the proud but gives grace to the humble — pride blocks grace; humility receives it.' },
      { ref: 'Philippians 2:5-8', note: 'Christ\'s humility: though God, he emptied himself and died — our model and our motive.' },
      { ref: 'Luke 18:9-14', note: 'The Pharisee\'s proud prayer vs. the tax collector\'s humble one — only the humble went home justified.' },
      { ref: '1 Peter 5:5-6', note: '"Clothe yourselves with humility" and humble yourselves under God\'s hand — he will exalt in time.' },
      { ref: 'Ephesians 2:8-9', note: 'Salvation is gift, not achievement — "not of works, that no one would boast."' },
    ],
    context: `In the Roman world, humility was considered a vice — the servile trait of the weak. The proud pursuit of honor (gloria) was the highest virtue. Christianity inverted this completely: the cross made humility glorious and pride shameful. This was one of the gospel's most countercultural claims, and it remains so in every honor-driven culture.

The Pharisees were not irreligious people; they were the most religious people of their day. Jesus's harshest words were for them precisely because religious pride is the hardest to see and the hardest to cure — it uses God himself as a prop for self-exaltation. The tax collector, who had nothing to boast about, is the model. Grace flows downhill: it pools in the low places of humility and runs off the high peaks of pride.`,
    notSays: `The Bible does not say humility means thinking you are worthless — you are fearfully and wonderfully made (Psalm 139:14) and deeply loved. It does not forbid excellence, confidence, or leadership; it forbids arrogance, self-reliance, and contempt for others. It does not say God humbles only the outwardly proud — he opposes the subtle pride of the "humble" too. And it does not teach that humiliation by others is the same as humility before God; true humility is voluntary, not victimhood.`,
    application: `Practice the disciplines that starve pride: confess sin specifically and regularly (pride hates confession), serve in hidden ways no one will applaud, receive criticism without defending yourself, and give credit generously. Ask a trusted friend: "Where do you see pride in me?" — and listen without arguing. Pride cannot survive honest community.

Preach the gospel to your pride daily: everything you have is a gift (1 Corinthians 4:7 — "What do you have that you did not receive?"), your righteousness is Christ's not yours, and your future depends on grace, not performance. When you succeed, practice immediate thanksgiving — redirecting glory to God before pride can pocket it. And when you fail, receive it as God's merciful surgery on your pride rather than an identity crisis.`,
    reflection: [
      'Where does pride hide in your life — your strengths, your spirituality, your suffering ("no one understands")?',
      'When did you last receive criticism without defending yourself, or confess a sin specifically to another person?',
      'What would change if you truly believed everything you have is a gift (1 Corinthians 4:7)?',
    ],
    prayer: `Father, pride is my oldest enemy and my blindest spot. Forgive me for the ways I exalt myself — taking credit for your gifts, looking down on others, living as if I don't need you. You resist the proud but give grace to the humble, so I humble myself now: I am nothing without you, I have nothing I did not receive, I deserve nothing but judgment and have received everything in Christ. Make me like Jesus, who emptied himself. Teach me to think of myself less by thinking of you more. In his name, amen.`,
    deeper: [
      'Read Luke 18:9-14 and ask honestly which prayer sounds more like yours.',
      'Study Philippians 2:1-11 as the charter of Christian humility.',
      'Memorize James 4:6 and 1 Corinthians 4:7 as pride antidotes.',
    ],
  },
  {
    id: 'relationships',
    title: 'Relationships',
    teaches: `Every relationship in your life is governed by one command with endless applications: "love your neighbor as yourself" (Matthew 22:39). Jesus called this, with love for God, the hinge of all Scripture. But biblical love is not sentiment — it is the deliberate, costly choice to seek another's good. "Love is patient, love is kind... it does not seek its own" (1 Corinthians 13:4-5). Every strained relationship is an invitation to practice this love in a specific direction.

Scripture is realistic about relational friction. Even Paul and Barnabas had a "sharp disagreement" (Acts 15:39). The New Testament is full of relational instruction precisely because Christians will hurt each other: "bearing with one another, and forgiving each other" (Colossians 3:13), "be devoted to one another in brotherly love; give preference to one another in honor" (Romans 12:10), "do not let the sun go down on your wrath" (Ephesians 4:26). Healthy relationships are not conflict-free; they are repair-rich.

The gospel transforms relationships at the root. We who were enemies have been reconciled to God (Romans 5:10); therefore we become reconcilers (2 Corinthians 5:18). We who received mercy show mercy. The cross both models relational love ("love as I have loved you," John 13:34) and supplies its power — you can love the difficult person because Christ loved you when you were difficult. No relationship is beyond the reach of grace, though not every relationship can or should be restored to the same closeness.`,
    passages: [
      { ref: 'Matthew 22:37-39', note: 'The two great commandments: love God wholly, love neighbor as self — the hinge of all relationships.' },
      { ref: '1 Corinthians 13:4-7', note: 'Love\'s concrete definition: patient, kind, humble, forgiving, enduring — a relational checklist.' },
      { ref: 'Colossians 3:12-14', note: 'Put on compassion, kindness, humility, patience, forgiveness — "above all, love, which is the bond of perfection."' },
      { ref: 'Romans 12:18', note: '"If it is possible, as much as it is up to you, be at peace with all men" — pursue peace without controlling outcomes.' },
      { ref: 'Ephesians 4:32', note: 'Be kind, tenderhearted, forgiving — as God in Christ forgave you.' },
      { ref: 'Proverbs 17:9', note: '"He who covers a transgression seeks love" — love overlooks minor offenses rather than broadcasting them.' },
    ],
    context: `The "one another" commands appear dozens of times in the New Testament — love, serve, forgive, encourage, bear with, submit to one another. This was radical in a culture of patronage and honor, where relationships were transactional: you helped those who could repay. Christian love was to be indiscriminate and sacrificial, extending even to enemies (Matthew 5:44).

Jesus's new commandment — "love one another, even as I have loved you" (John 13:34) — raised the standard from "as yourself" to "as Christ loved": sacrificially, to the point of death. And he said the world would recognize his disciples by this love (John 13:35). Relationships are not just personal; they are missional. How Christians love each other is meant to be evidence of the gospel to a watching world.`,
    notSays: `The Bible does not say all relationships must be equally close — Jesus loved everyone but confided in few. It does not command restoring abusive relationships to their former state; "as much as it is up to you" (Romans 12:18) acknowledges limits. It does not say love means never confronting — faithful wounds are love (Proverbs 27:6). It does not promise difficult people will change; it promises grace for you as you love them. And it does not teach that boundaries are unloving — even Jesus withdrew from crowds and said no to demands.`,
    application: `Audit your key relationships through 1 Corinthians 13: where are you impatient, unkind, score-keeping, or easily provoked? Pick one relationship to invest in this week with a specific act of patient, self-giving love. Practice quick repair: apologize first, don't wait to be 50% right, keep short accounts. "If it is possible, as much as it is up to you" — do your part for peace and release the outcome.

Set godly boundaries where needed: love does not mean unlimited access. It is loving to say no, to limit time with draining or destructive people, and to protect your family. Seek reconciliation where you have caused harm — go to the person (Matthew 5:23-24), own your part without excuses, and ask forgiveness. And invest in the church: committed, long-term relationships with believers are God's primary context for relational growth.`,
    reflection: [
      'Which relationship in your life most needs 1 Corinthians 13 love right now — and what would one concrete act look like?',
      'Is there someone you need to seek out for reconciliation (Matthew 5:23-24)? What is stopping you?',
      'Where do you need a boundary that you have avoided setting out of a false idea of love?',
    ],
    prayer: `Father, you have loved me with an everlasting love, and you call me to love others as Christ loved me. Forgive me for the ways I have loved poorly — impatient, score-keeping, harsh, or withdrawn. Fill me with your Spirit so that love, joy, peace, and patience mark my relationships. Give me courage to seek reconciliation where I have caused harm, wisdom to set boundaries where needed, and grace to love difficult people without becoming bitter. Make my relationships a witness to your reconciling love. In Jesus' name, amen.`,
    deeper: [
      'Read Romans 12:9-21 as a complete relational ethic — underline every actionable command.',
      'Study John 13:1-35: Jesus\'s love "to the end" as the pattern for ours.',
      'Memorize 1 Corinthians 13:4-7 and Romans 12:18 as relationship standards.',
    ],
  },

  {
    id: 'leadership',
    title: 'Leadership',
    teaches: `Biblical leadership turns the world's model upside down. When the disciples argued about greatness, Jesus said, "whoever desires to become great among you shall be your servant... even as the Son of Man came not to be served, but to serve, and to give his life as a ransom for many" (Matthew 20:26-28). In God's kingdom, leadership is not the top of a pyramid; it is the bottom — the leader carries the weight, washes the feet (John 13:14), and lays down his life. Authority is given for the good of those led, never for the glory of the leader.

Scripture holds leaders to a higher standard, not a lower one. "Let not many of you be teachers, knowing that we will receive heavier judgment" (James 3:1). The qualifications for elders in 1 Timothy 3 and Titus 1 are overwhelmingly about character — temperate, gentle, not greedy, managing one's household well — not charisma, vision, or talent. God cares more about who the leader is than what the leader achieves. Saul had the stature; David had the heart — and God chose the heart (1 Samuel 16:7).

The motive matters as much as the method. Peter charges leaders to shepherd "not for dishonest gain, but willingly; not as lording it over those entrusted to you, but making yourselves examples to the flock" (1 Peter 5:2-3). Leadership driven by ego, control, or profit is not biblical leadership, no matter how effective. The test of Christian leadership is simple: are the people you lead flourishing? "The good shepherd lays down his life for the sheep" (John 10:11) — the shepherd exists for the sheep, not vice versa.`,
    passages: [
      { ref: 'Matthew 20:26-28', note: 'The kingdom inversion: greatness comes through servanthood, as the Son of Man came to serve and give his life.' },
      { ref: '1 Peter 5:2-3', note: 'Shepherd willingly, not for gain, not lording it over others — be an example, not a dictator.' },
      { ref: '1 Timothy 3:1-7', note: 'Leadership qualifications are about character: blameless, temperate, gentle, respectable, hospitable.' },
      { ref: 'John 13:14-15', note: 'Jesus washed feet: "I have given you an example, that you also should do as I have done to you."' },
      { ref: 'Mark 10:42-45', note: 'Gentile rulers "lord it over" people; "it shall not be so among you" — a different operating system.' },
      { ref: '1 Samuel 16:7', note: '"Man looks at the outward appearance, but the LORD looks at the heart" — God\'s leadership criterion.' },
    ],
    context: `In the ancient world, leadership meant dominance. Roman authority was enforced by the sword; kings displayed power through conquest and tribute. Moses, the Bible's great leader, is described as "very humble, more than any man who was on the face of the earth" (Numbers 12:3) — humility, not assertiveness, was his defining trait. David, the warrior-king, wrote psalms of repentance and dependence.

Jesus's foot-washing (John 13) was shocking because foot-washing was slaves' work — disciples would never wash the teacher's feet, let alone the reverse. By doing it, Jesus permanently redefined leadership for his followers. The early church took this seriously: leaders were called servants (diakonos), overseers were to be examples, and Paul described his apostleship as being "the least" and "sorrowful yet always rejoicing" (2 Corinthians 6:10). Authority in the church was always tethered to sacrifice.`,
    notSays: `The Bible does not say leaders must be perfect — David, Peter, and Moses all failed significantly and were restored. It does not teach that leadership means never being challenged or always having the final word; even Moses accepted Jethro's correction (Exodus 18). It does not promise leadership will be appreciated — faithful leaders are often opposed (consider Jeremiah). It does not equate leadership with a title; many biblical leaders (like the unnamed servant girl who directed Naaman, 2 Kings 5) led through influence. And it never justifies abusive, controlling leadership as "strong" — domineering leaders are condemned, not commended.`,
    application: `If you lead — at home, at work, in church — audit your leadership by the foot-washing standard: when did you last do something for those you lead that cost you and gained you nothing? Shift from "How can they serve my vision?" to "How can I serve their flourishing?" Give credit, take blame, develop others even when it threatens your position. That is kingdom leadership.

If you aspire to lead, focus on character before competence: faithfulness in small things (Luke 16:10), a well-managed home and life, teachability. Seek feedback from those you lead — the people under your authority see your blind spots most clearly. And if you are under poor leadership, respond as David did to Saul: honor the position without imitating the sin, trust God with outcomes, and refuse to seize what God hasn't given.`,
    reflection: [
      'Do the people you lead experience you as a servant or as a boss? What would they say anonymously?',
      'What motivates your leadership most — serving others\' flourishing, or your own significance and control?',
      'If you aspire to lead, what character qualification (1 Timothy 3) most needs growth in you right now?',
    ],
    prayer: `Lord Jesus, you are the King who washed feet and the Shepherd who laid down his life. Forgive me for leading (or wanting to lead) for my own glory — for control, credit, and comfort. Make me a servant-leader: willing, humble, exemplary. Where I have lorded it over others, convict me; where I have served faithfully, sustain me. Form in me the character you require — blameless, gentle, self-controlled — before you entrust me with more. Let those I lead flourish because I served them. In your name, amen.`,
    deeper: [
      'Read John 13:1-17 slowly, imagining yourself as Peter — what does Jesus\'s example demand of you?',
      'Study Nehemiah as a case study: prayerful, courageous, servant-hearted leadership under opposition.',
      'Memorize Matthew 20:26-28 and 1 Peter 5:2-3 as leadership definitions.',
    ],
  },
  {
    id: 'decision-making',
    title: 'Decision-Making',
    teaches: `Scripture offers no magic formula for decisions — no verse that tells you which job to take or whom to marry. Instead, it gives something better: wisdom for the process and peace about the outcome. "Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make your paths straight" (Proverbs 3:5-6). The promise is not a detailed map but a faithful Guide. God's primary will for you is not a hidden blueprint to decode but a relationship to walk in.

The biblical decision process has clear elements. Pray — "If any of you lacks wisdom, let him ask of God, who gives to all liberally" (James 1:5). Search Scripture — God's revealed will (holiness, honesty, love) rules out many options immediately. Seek counsel — "in the multitude of counselors there is safety" (Proverbs 11:14). Consider your gifts, desires (shaped by God, Psalm 37:4), and open doors. Then decide in faith, trusting that God works through the decisions of his children.

And here is the liberating truth: for most decisions, there is no single "right" choice you must discover or ruin your life missing. Within God's moral will, he gives freedom. "The mind of man plans his way, but the LORD directs his steps" (Proverbs 16:9). You plan responsibly; he directs sovereignly. Romans 8:28 means even your mistaken decisions get woven into his good purposes. This frees you from paralysis: gather wisdom, decide, and trust.`,
    passages: [
      { ref: 'Proverbs 3:5-6', note: 'The core promise: trust God wholly, acknowledge him in all ways, and he will direct your paths.' },
      { ref: 'James 1:5', note: 'Ask God for wisdom and he gives "liberally and without reproach" — he is not annoyed by your asking.' },
      { ref: 'Proverbs 11:14', note: '"In the multitude of counselors there is safety" — wise decisions are rarely made alone.' },
      { ref: 'Proverbs 16:9', note: 'You plan your way; the LORD directs your steps — human responsibility within divine sovereignty.' },
      { ref: 'Psalm 37:4', note: '"Delight yourself in the LORD, and he will give you the desires of your heart" — shaped desires guide.' },
      { ref: 'Romans 8:28', note: 'God works all things for good for those who love him — even imperfect decisions are redeemable.' },
    ],
    context: `Biblical decision-making happened in community, not isolation. The early church chose leaders by prayer, fasting, and casting lots (Acts 1:24-26) — and later by the Spirit's guidance through gathered wisdom (Acts 15:28: "it seemed good to the Holy Spirit, and to us"). The pattern is consistent: seek God, seek counsel, decide together, trust the outcome.

The Old Testament warns against the two extremes we still face: rash impulse (like Esau selling his birthright, Genesis 25) and paralyzed indecision (like the Israelites at Kadesh, Numbers 14, whose fear masqueraded as prudence). Wisdom is neither impulsive nor paralyzed — it is prayerful, counsel-seeking, and courageous. Notably, God often guides through ordinary means: wise advisors, open and closed doors (Revelation 3:7-8), and the peace that follows obedience (Colossians 3:15).`,
    notSays: `The Bible does not promise a mystical sign for every decision — fleeces (Judges 6) are the exception, not the norm, and demanding signs can be unbelief. It does not teach that there is one perfect choice you must find or your life is ruined; within God's moral will there is genuine freedom. It does not say God's will is primarily about your circumstances (job, city, spouse) rather than your character (holiness, love, Christlikeness). And it does not guarantee outcomes — faithful decisions sometimes lead to hard roads (consider Paul's decision to go to Jerusalem, Acts 21).`,
    application: `For your current decision, work the process: (1) Pray specifically and repeatedly — ask for wisdom, not just the answer. (2) Check Scripture — does any option violate God's revealed will? Eliminate those. (3) Seek counsel from two or three wise, godly people who know you — and listen even when they challenge you. (4) Assess gifts, desires, and doors: where has God gifted you, what do you (as his child) desire, and what doors are open? (5) Decide, act, and trust — refusing both rashness and paralysis.

After deciding, don't second-guess endlessly. "The peace of God" ruling in your heart (Colossians 3:15) is a good confirmation, but feelings fluctuate — anchor in the process, not the emotion. If you realize you decided wrongly, repent where needed, adjust, and trust Romans 8:28: God is not derailed by your detours.`,
    reflection: [
      'What decision are you facing right now — and which step of the biblical process (prayer, Scripture, counsel, assessment) have you skipped?',
      'Are you more prone to rash impulse or paralyzed indecision? What would courageous wisdom look like?',
      'Do you treat God\'s will as a hidden blueprint to decode, or a relationship to walk in? How does that change your anxiety?',
    ],
    prayer: `Father, you promise wisdom to all who ask, generously and without reproach — so I ask. Guide my decision about [name it]. Close the doors you would close and open the ones you would open. Give me counselors who speak truth, desires shaped by delighting in you, and courage to decide without paralysis. Where your word is clear, make me obedient; where I have freedom, make me faithful. And whatever the outcome, I trust that you direct my steps and work all things for good. In Jesus' name, amen.`,
    deeper: [
      'Read Proverbs 3:1-12 as a complete wisdom-for-decisions passage.',
      'Study Acts 15:1-29: how the early church made a major decision together.',
      'Memorize Proverbs 3:5-6 and James 1:5 as decision anchors.',
    ],
  },
  {
    id: 'discipline',
    title: 'Discipline',
    teaches: `Discipline in Scripture has two faces, and both are acts of love. There is God's discipline of his children — "whom the LORD loves he reproves, even as a father reproves the son in whom he delights" (Proverbs 3:12) — and there is our self-discipline, the Spirit-produced fruit of a ordered life (Galatians 5:23). Both aim at the same thing: training us in righteousness so we can run the race well.

Hebrews 12 reframes hardship as training: "no chastening for the present seems to be joyous, but grievous; yet afterward it yields the peaceful fruit of righteousness to those who have been exercised thereby" (Hebrews 12:11). God's discipline is not punishment for past sin — Christ bore that — but training for future holiness. Like an athlete's coach or a surgeon's scalpel, it hurts with purpose. Despising it or fainting under it both miss the point; the right response is to be "exercised" by it — to let it train you.

Our part is self-discipline: "I beat my body and bring it into submission," Paul says, "lest... I myself should be disqualified" (1 Corinthians 9:27). The Christian life is repeatedly pictured as a race (Hebrews 12:1), a fight (1 Timothy 6:12), and farming (Galatians 6:9) — all requiring sustained, intentional effort. Grace does not replace discipline; grace empowers it. We work out what God works in (Philippians 2:12-13). Spiritual disciplines — prayer, Scripture, fasting, fellowship, service — are the training exercises of godliness (1 Timothy 4:7-8).`,
    passages: [
      { ref: 'Hebrews 12:11', note: 'Discipline seems grievous now but yields "the peaceful fruit of righteousness" to those trained by it.' },
      { ref: 'Proverbs 3:11-12', note: 'Do not despise the LORD\'s discipline — he reproves those he loves, as a father his son.' },
      { ref: '1 Corinthians 9:24-27', note: 'Run to win: beat your body into submission like an athlete — intentional, sustained self-discipline.' },
      { ref: '1 Timothy 4:7-8', note: '"Exercise yourself toward godliness" — spiritual training, like physical training, requires practice.' },
      { ref: 'Galatians 5:22-23', note: 'Self-control is fruit of the Spirit — discipline is Spirit-empowered, not mere willpower.' },
      { ref: 'Philippians 2:12-13', note: 'Work out your salvation — because God works in you. Divine power and human effort together.' },
    ],
    context: `The readers of Hebrews were tempted to abandon Christ under persecution; the writer frames their suffering as a father's training, quoting Proverbs 3. In the Roman world, fathers disciplined sons to prepare them for citizenship and inheritance — discipline was proof of sonship, not rejection. "If you are without chastening... then you are illegitimate, and not children" (Hebrews 12:8). Hardship, in this frame, is evidence you belong.

Paul's athletic metaphors drew on the Isthmian games near Corinth — his readers watched athletes train rigorously for a perishable crown. "We do it for an imperishable" (1 Corinthians 9:25). The disciplines of the Christian life — which the church has practiced for two thousand years — are not legalism but training: means by which grace shapes us, as practice shapes the athlete.`,
    notSays: `The Bible does not say God's discipline is punishment for forgiven sin — Christ exhausted punishment at the cross; discipline is training, not payback. It does not teach that self-discipline earns God's favor; we are saved by grace and disciplined within grace. It does not promise discipline is easy or quick — Hebrews says it "seems grievous" and requires being "exercised" over time. And it does not endorse harsh, joyless legalism; the goal is "the peaceful fruit of righteousness," not miserable rule-keeping.`,
    application: `Embrace one spiritual discipline consistently rather than five sporadically: daily Scripture reading, regular prayer, weekly fellowship, periodic fasting. Small, sustained rhythms shape more than heroic bursts. "Exercise yourself toward godliness" — schedule it like training, track it honestly, and give yourself grace when you stumble without abandoning the practice.

When hardship comes, ask the Hebrews 12 question: "What is the Father training in me through this?" rather than only "Why is this happening?" Receive correction — from Scripture, from godly friends, from circumstances — as love, not attack. And remember the order of Philippians 2:12-13: God's working empowers your working. Pray for desire before demanding performance from yourself; discipline fueled by delight lasts, discipline fueled by guilt collapses.`,
    reflection: [
      'Which spiritual discipline (Scripture, prayer, fasting, fellowship, service) is weakest in your life right now — and what is one small, sustainable step?',
      'Is there a current hardship you have interpreted as punishment or abandonment that might be the Father\'s training?',
      'Do you tend toward undisciplined drift or joyless legalism? What would grace-empowered discipline look like?',
    ],
    prayer: `Father, you discipline those you love, and I want to receive your training rather than resent it. Forgive me for despising your correction and for the undisciplined drift of my spiritual life. Teach me to exercise myself toward godliness — small, faithful rhythms of your word, prayer, and fellowship. Where you are training me through hardship, give me eyes to see it and a heart to be exercised by it. Work in me so that I may work out my salvation with reverence and joy. In Jesus' name, amen.`,
    deeper: [
      'Read Hebrews 12:1-13 as one argument: the race, the cloud of witnesses, and the Father\'s discipline.',
      'Study 1 Corinthians 9:24-27 and 2 Timothy 2:3-6: the athlete, soldier, and farmer as pictures of discipline.',
      'Memorize Hebrews 12:11 and 1 Timothy 4:8 as discipline motivations.',
    ],
  },
  {
    id: 'integrity',
    title: 'Integrity',
    teaches: `Integrity is wholeness — the same person in public and private, in prosperity and pressure. The Hebrew word for integrity, tom, means complete, whole, undivided. "The integrity of the upright shall guide them" (Proverbs 11:3): integrity is not just a trait but a compass. When who you are is undivided, decisions become clearer, because there is only one self to consult.

Scripture ties integrity directly to God's character and our witness. God is "a God of truth... just and right is he" (Deuteronomy 32:4); his people are to reflect him. Jesus commands simple truthfulness: "let your 'Yes' be 'Yes,' and your 'No,' 'No'" (Matthew 5:37) — no shading, spinning, or strategic honesty. And Proverbs warns that compromised integrity destroys from within: "he who perverts his ways will be found out" (Proverbs 10:9, paraphrase of "will become known").

The testing ground of integrity is secrecy — what you do when no one sees. Joseph refused Potiphar's wife with no witnesses present because "how then can I do this great wickedness, and sin against God?" (Genesis 39:9). His audience was God, not men. Daniel prayed openly though it meant the lions' den (Daniel 6:10). Integrity costs, sometimes dearly. But Scripture's verdict is steady: "Better is the poor who walks in his integrity than he who is perverse in his lips and is a fool" (Proverbs 19:1). Character outranks comfort, always.`,
    passages: [
      { ref: 'Proverbs 11:3', note: 'The integrity of the upright guides them — wholeness of character becomes a compass for decisions.' },
      { ref: 'Matthew 5:37', note: 'Let your Yes be Yes and your No be No — simple, unshaded truthfulness is Jesus\'s standard.' },
      { ref: 'Genesis 39:9', note: 'Joseph\'s integrity test: alone and tempted, he refused because it would be sin "against God."' },
      { ref: 'Proverbs 19:1', note: 'Better poor with integrity than rich and perverse — character outranks comfort.' },
      { ref: 'Daniel 6:10', note: 'Daniel prayed openly despite the decree — integrity under pressure, whatever the cost.' },
      { ref: 'Psalm 15:4', note: 'The godly person "swears to his own hurt, and does not change" — keeps promises even when costly.' },
    ],
    context: `In a culture of patronage and power like the ancient Near East, integrity often meant career suicide — telling the truth to a king could cost your head. Yet Daniel's integrity over decades in Babylonian and Persian courts earned him a reputation even enemies couldn't dent: they could find "no error or fault" in him (Daniel 6:3-4). His consistency became his protection and his witness.

The New Testament raises the stakes further: Christians are "the light of the world" (Matthew 5:14), and hypocrisy — the opposite of integrity — was Jesus's most condemned sin. The early church's radical honesty (no fraud, no false oaths, keeping promises) distinguished believers in a corrupt empire and drew outsiders to the faith. Integrity has always been evangelistic: people watch Christians' lives before they listen to Christians' words.`,
    notSays: `The Bible does not say integrity means brutal bluntness — truth must be spoken in love (Ephesians 4:15), and discretion is wisdom. It does not promise integrity always prospers in this life; Joseph went to prison and Daniel to the lions' den for theirs — vindication is certain but not always immediate. It does not teach that one failure destroys integrity forever; repentance restores (consider David, Peter). And it does not equate integrity with perfection — it means undivided direction, honest when you fail, not flawless.`,
    application: `Practice secret integrity: choose the honest path when no one would know — accurate expense reports, kept promises, unexaggerated stories. Let your Yes be Yes: stop shading the truth to look better, and stop making promises you won't keep. If you say you'll pray for someone, do it; if you commit, follow through. Small fidelities build the muscle for large ones (Luke 16:10).

Invite accountability into your blind spots: finances, internet habits, speech about others. Ask someone who loves you: "Where do you see a gap between my public and private self?" When integrity costs — a lost deal, an awkward confession, a stand no one applauds — remember you are storing treasure where moth and rust cannot touch, and that a clear conscience is worth more than any gain.`,
    reflection: [
      'Where is the gap between your public self and your private self widest right now?',
      'When did you last shade the truth to look better — and what would simple honesty have cost?',
      'What would change if you lived every hidden moment as "before God" (Genesis 39:9)?',
    ],
    prayer: `God of truth, you are just and right in all your ways, and you call me to walk in integrity. Forgive me for the divided places — the shading, the spin, the promises half-kept, the secret compromises. Make me whole: the same person alone as with others, under pressure as at ease. Give me Joseph\'s resolve to sin against no God for any gain, and Daniel\'s courage to do right whatever it costs. Let my Yes be Yes. And when I fail, let me confess quickly and return to the path. In Jesus\' name, amen.`,
    deeper: [
      'Read Psalm 15 as a portrait of the person of integrity — which verse convicts you most?',
      'Study Genesis 39 and Daniel 6 as integrity-under-pressure case studies.',
      'Memorize Proverbs 11:3 and Matthew 5:37 as integrity standards.',
    ],
  },

  {
    id: 'loneliness',
    title: 'Loneliness',
    teaches: `Loneliness is one of the most universal human experiences, and Scripture neither minimizes it nor leaves us alone in it. From the beginning, God declared, "It is not good for the man to be alone" (Genesis 2:18) — loneliness is not the design; connection is. Even Jesus, surrounded by disciples, experienced profound loneliness: in Gethsemane his closest friends slept while he agonized (Matthew 26:40), and on the cross he cried, "My God, my God, why have you forsaken me?" (Matthew 27:46). If the Son of God knew loneliness, it is not a mark of spiritual failure.

God's answer to loneliness is twofold: his presence and his people. "I will never leave you, nor forsake you" (Hebrews 13:5) is his unbreakable promise — you may feel alone, but you are never alone. And he "sets the lonely in families" (Psalm 68:6): the church is God's designed answer to isolation. The New Testament knows nothing of solo Christianity; believers are members of one body (1 Corinthians 12), devoted to one another (Romans 12:10), commanded to gather (Hebrews 10:25). Loneliness often lifts not when we find the perfect community but when we commit to an imperfect one.

There is also a loneliness that circumstances cannot fix — the ache for perfect understanding that only God can fill. Augustine prayed, "You have made us for yourself, and our hearts are restless until they rest in you." Human companionship is a gift, but it was never meant to be God. Bringing our loneliness to him — honestly, as the psalmists did ("Turn to me, and be gracious to me, for I am lonely and afflicted," Psalm 25:16) — turns isolation into intimacy.`,
    passages: [
      { ref: 'Genesis 2:18', note: '"It is not good for the man to be alone" — God designed us for connection; loneliness is not the original plan.' },
      { ref: 'Hebrews 13:5', note: '"I will never leave you, nor forsake you" — God\'s presence is the unbreakable answer to feeling alone.' },
      { ref: 'Psalm 68:6', note: 'God "sets the lonely in families" — he places isolated people into belonging, supremely the church.' },
      { ref: 'Psalm 25:16', note: 'David\'s honest prayer: "I am lonely and afflicted" — bring loneliness to God directly.' },
      { ref: 'Matthew 27:46', note: 'Jesus knew ultimate loneliness on the cross — so no lonely person is unknown to him.' },
      { ref: 'Hebrews 10:24-25', note: 'Do not neglect gathering — committed Christian community is God\'s prescription against isolation.' },
    ],
    context: `In the ancient world, identity was communal — to be cut off from family or tribe was among the worst fates. The psalmists' cries of loneliness often came in exile or persecution, when community was stripped away. Yet even there, they found God's presence sufficient: "Though my father and my mother forsake me, then the LORD will take me up" (Psalm 27:10).

The early church was a radical answer to loneliness in the Roman Empire, where the poor, widows, and slaves were socially invisible. Christians — across class, ethnicity, and status — ate together, cared for each other's sick, and buried each other's dead. This visible love was so striking that outsiders marveled: "See how they love one another." The church remains God's primary instrument for setting the lonely in families — which means loneliness is both a personal pain and a communal calling.`,
    notSays: `The Bible does not say loneliness means something is wrong with you — Jesus, David, Elijah, and Paul all experienced it. It does not promise that marriage, friendship, or church involvement will permanently end all loneliness; some ache remains until heaven. It does not teach that feeling lonely means God has left you — feelings are real but not always true, and his promise stands regardless. And it does not suggest loneliness is solved only by others pursuing you; Scripture also calls you to pursue community.`,
    application: `Bring loneliness to God first and honestly — pray Psalm 25:16 or 27:10 in your own words, and let his promised presence (Hebrews 13:5) be your anchor when feelings say otherwise. Then move toward people: commit to a local church, join a small group, serve somewhere. Don't wait to feel connected before committing; connection usually follows commitment, not the reverse. Be the friend you wish you had — invite someone for coffee, check on the quiet person, practice hospitality (Romans 12:13).

Examine whether loneliness has become identity or idol — whether you've decided "no one understands me" in a way that keeps you from trying. And if loneliness persists into depression or despair, seek counseling and tell someone; prolonged isolation is dangerous, and asking for help is wisdom. Remember: the God who sets the lonely in families often does it through your own first step.`,
    reflection: [
      'Do you bring your loneliness to God honestly (like Psalm 25:16), or do you numb it and never name it?',
      'What is one step toward community you could take this week — committing, serving, or inviting?',
      'Is there someone lonelier than you whom you could pursue — turning your pain into ministry?',
    ],
    prayer: `Father, you said it is not good to be alone, and I feel the truth of that. Thank you that I am never truly alone — you will never leave me nor forsake me. When loneliness aches, let your presence be real to me. Set me in family: lead me into genuine community, give me courage to commit and to reach out, and make me a friend to the lonely. Fill the deepest ache — the one only you can fill — with yourself. And thank you that Jesus knows this feeling from the inside. In his name, amen.`,
    deeper: [
      'Read Psalm 25 and 27 as loneliness prayers — note how David moves from ache to trust.',
      'Study Acts 2:42-47: the early church\'s shared life as God\'s answer to isolation.',
      'Memorize Hebrews 13:5 and Psalm 68:6 as loneliness promises.',
    ],
  },
  {
    id: 'stress',
    title: 'Stress',
    teaches: `Stress, in itself, is not sin — it is the body's God-given alarm system, and even Jesus felt its weight. In Gethsemane he was "exceedingly sorrowful, even to death" (Matthew 26:38); facing the cross, his soul was "troubled" (John 12:27). The question Scripture addresses is not whether we will feel pressure but where we will take it and what we will let it produce in us. Pressure reveals what we trust: our own capacity, or God's sufficiency.

The Bible's stress wisdom centers on three practices. First, cast it: "Cast your burden on the LORD, and he will sustain you" (Psalm 55:22). Stress becomes toxic when we carry what only God can carry — outcomes, other people's choices, the future. Second, rest: the Sabbath principle (Exodus 20:8-11) and Jesus's invitation, "Come to me, all you who labor and are heavily burdened, and I will give you rest" (Matthew 11:28). Rest is not laziness; it is trust made visible. Third, reorder: Martha's stress came from "distracted with much serving" while Mary chose "the good part" (Luke 10:38-42). Much stress is misordered priorities, not just heavy loads.

Paul adds a crucial reframe: pressure is the context in which God's power shows up. "We were weighed down exceedingly, beyond our power, so that we despaired even of life... that we should not trust in ourselves, but in God who raises the dead" (2 Corinthians 1:8-9). When stress exceeds your capacity, you are exactly where God wants you: at the end of yourself and the beginning of him.`,
    passages: [
      { ref: 'Psalm 55:22', note: '"Cast your burden on the LORD, and he will sustain you" — transfer the weight you were never meant to carry.' },
      { ref: 'Matthew 11:28-30', note: 'Jesus\'s invitation to the burdened: come, take his yoke, find rest for your souls.' },
      { ref: 'Luke 10:38-42', note: 'Martha\'s stress came from distraction; Mary chose the one necessary thing — presence with Jesus.' },
      { ref: '2 Corinthians 1:8-9', note: 'Pressed beyond capacity so "we should not trust in ourselves, but in God" — stress as a tutor in dependence.' },
      { ref: 'Exodus 20:8-11', note: 'The Sabbath: weekly rest as trust — God runs the world without your help for one day.' },
      { ref: 'Philippians 4:6-7', note: 'Turn stress into prayer "with thanksgiving" and receive peace as a guard.' },
    ],
    context: `Moses experienced crushing leadership stress — so much that he told God, "I am not able to bear all this people alone... kill me" (Numbers 11:14-15). God's answer was practical, not just spiritual: share the load (appoint seventy elders), and remember the promise. Similarly, Elijah's burnout in 1 Kings 19 was met by God with sleep, food, and gentle presence before any assignment — God treats stressed bodies with compassion, not condemnation.

Jesus lived the rhythm he preached: after intense ministry he withdrew to desolate places to pray (Luke 5:16), he slept in a storm (Mark 4:38), he took his disciples apart to rest (Mark 6:31). The Son of God did not run on empty, and he does not ask you to either. Sustainable pace is not unspiritual; it is obedient.`,
    notSays: `The Bible does not say all stress is a faith problem — Jesus, Moses, Elijah, and Paul all felt crushing pressure. It does not teach that rest is laziness or that saying no is unspiritual; even Jesus withdrew and declined demands. It does not promise stress disappears when you pray — it promises sustaining grace and peace within it. And it does not bless chronic overwork as dedication; relentless pace that destroys health, family, and soul violates Sabbath wisdom.`,
    application: `Practice the daily cast: each morning (or whenever pressure spikes), name your specific burdens and consciously hand them to God — "I cannot control this outcome; you can." Build non-negotiable rest into your week: a real Sabbath, real sleep, real breaks. Treat rest as obedience, not reward. Audit your load with Mary's wisdom: what "much serving" is distracting you from the one necessary thing? Say no to something good so you can say yes to what is best.

Address the physical: God gave Elijah sleep and food before assignment — care for your body as stewardship, not indulgence. And distinguish stress you can change (overcommitment, poor boundaries, disorganization) from stress you must carry (illness, loss, others' choices): change the first with courage, cast the second on God, and ask him for wisdom to know the difference.`,
    reflection: [
      'What specific burdens are you carrying that belong to God — outcomes, others\' choices, the future?',
      'Is your weekly rhythm marked by real rest, or has urgency swallowed the Sabbath?',
      'Are you more like Martha (distracted by much serving) or Mary right now — and what is your "one necessary thing"?',
    ],
    prayer: `Lord Jesus, you invite the weary and burdened to come to you for rest — so I come. I cast on you the pressures I cannot carry: [name them]. Forgive me for trusting my own capacity, for neglecting rest, for letting urgency crowd out presence with you. Teach me Martha\'s lesson: to choose the good part. Give me wisdom to change what I can, grace to carry what I must, and a real Sabbath rhythm of trust. Sustain me as you promise. In your name, amen.`,
    deeper: [
      'Read Luke 10:38-42 and ask: what is my "much serving," and what is the "good part" I\'m missing?',
      'Study 1 Kings 19:1-18: God\'s gentle treatment of Elijah\'s burnout.',
      'Memorize Psalm 55:22 and Matthew 11:28 as stress responses.',
    ],
  },
  {
    id: 'doubt',
    title: 'Doubt',
    teaches: `Doubt is not the opposite of faith — unbelief is. Doubt is faith wrestling, faith asking hard questions, faith refusing easy answers. Some of Scripture's greatest heroes doubted: Abraham laughed at God's promise (Genesis 17:17), Moses asked "Who am I?" (Exodus 3:11), David cried "How long?" (Psalm 13:1), John the Baptist — the greatest prophet — sent messengers from prison asking, "Are you the one who is coming?" (Matthew 11:3). Even Thomas, forever labeled "doubting," was simply unwilling to fake certainty. Jesus did not rebuke these doubters; he met them with evidence, patience, and presence.

Scripture distinguishes honest doubt from cynical unbelief. Honest doubt says, "I believe; help my unbelief!" (Mark 9:24) — it brings questions to Jesus. Cynical unbelief refuses evidence and hardens the heart (Hebrews 3:12). God welcomes the first and warns against the second. Notice what Jesus did with questioners: to John the Baptist he sent evidence ("the blind receive their sight..."), to Thomas he offered his wounds ("put your finger here"), to the father of the demon-possessed boy he responded to a desperate, doubting prayer with deliverance. Doubt brought to Jesus gets answers; doubt nursed in isolation curdles.

Jude gives the church's assignment regarding doubters: "have mercy on some, who are doubting" (Jude 1:22). Not shame, not quick answers — mercy. If you doubt, you are in good company, and the way forward is not to perform certainty but to bring your honest questions to Christ, to Scripture, and to trusted believers who will walk with you rather than judge you.`,
    passages: [
      { ref: 'Mark 9:24', note: '"I believe. Help my unbelief!" — the honest doubter\'s prayer, prayed to Jesus and answered.' },
      { ref: 'Matthew 11:2-6', note: 'John the Baptist doubted from prison; Jesus answered with evidence, not rebuke.' },
      { ref: 'John 20:24-29', note: 'Thomas doubted; Jesus offered his wounds and said "do not be unbelieving, but believing."' },
      { ref: 'Jude 1:22', note: '"Have mercy on some, who are doubting" — the church\'s assignment toward doubters is mercy.' },
      { ref: 'Psalm 13', note: 'David\'s "How long?" — lament as the biblical language of faithful doubt.' },
      { ref: 'James 1:5-6', note: 'Ask God for wisdom in faith — he gives generously; doubting his character, not asking questions, is the danger.' },
    ],
    context: `John the Baptist's doubt is remarkable: this was the man who baptized Jesus, saw the Spirit descend, and heard the Father's voice — yet prison and unmet expectations ("Are you the one?") shook him. Jesus's response is instructive: he didn't quote credentials or rebuke; he pointed to evidence (miracles fulfilling Isaiah 35) and blessed those "not offended" by his unexpected methods. Doubt often comes not from lack of evidence but from God not meeting our expectations.

Thomas gets a bad reputation, but the other disciples also disbelieved the resurrection initially (Luke 24:11; Mark 16:11) — Thomas just said out loud what they all felt. A week later, Jesus appeared specifically for him. The risen Christ pursues doubters; he doesn't wait for them to get their theology straight before showing up.`,
    notSays: `The Bible does not say doubt is the unforgivable sin or that questioning means you aren't a Christian — some of the greatest saints doubted deeply. It does not promise every question gets fully answered in this life; some mysteries remain (Deuteronomy 29:29). It does not say you must resolve all doubts before obeying — often obedience precedes understanding. And it does not teach that doubt is best handled alone; isolation feeds doubt, while honest community and the means of grace (Scripture, prayer, worship) starve it.`,
    application: `Bring your doubts to Jesus directly and specifically — write them down, pray them honestly, study them in Scripture. Vague doubt paralyzes; specific doubt can be investigated. Read the Gospels' evidence with an open mind: the resurrection, fulfilled prophecy, transformed lives. Talk to a mature believer who won't panic at your questions — and avoid both the cynics who celebrate doubt and the simplistic who shame it.

Keep practicing the faith you have while you wrestle: keep praying (even "help my unbelief"), keep gathering, keep obeying what is clear. Doubt thrives in disengagement; it shrinks in the presence of God and his people. And be patient with yourself: faith refined through doubt is often stronger than faith never tested — "the testing of your faith produces endurance" (James 1:3).`,
    reflection: [
      'What specific doubts or questions are you carrying? Have you named them honestly to God, or only ruminated on them alone?',
      'Are your doubts more like Thomas (wanting evidence) or more like cynicism (refusing evidence)? What is the difference in your case?',
      'Who is one mature believer you could trust with your honest questions — someone who will offer mercy, not shame?',
    ],
    prayer: `Lord Jesus, like the father in Mark 9, I say: I believe — help my unbelief. You did not rebuke John or Thomas for their questions; you met them with evidence and presence. Meet me too. I bring you my honest doubts about [name them]. Give me wisdom generously, as you promise. Keep me from cynical unbelief; keep me near you while I wrestle. Let my tested faith come out stronger, and use my questions to drive me deeper into truth, not away from you. In your name, amen.`,
    deeper: [
      'Read John 20:24-29 and Matthew 11:1-6 side by side: two doubters, two merciful responses.',
      'Study Psalm 73: doubt resolved through worship — "until I entered God\'s sanctuary."',
      'Memorize Mark 9:24 and Jude 1:22 as doubt companions.',
    ],
  },
  {
    id: 'faith',
    title: 'Faith',
    teaches: `Faith is the empty hand that receives God's gift. "For by grace you have been saved through faith, and that not of yourselves; it is the gift of God" (Ephesians 2:8). Hebrews defines it: "faith is assurance of things hoped for, proof of things not seen" (Hebrews 11:1). Biblical faith is not wishful thinking, positive vibes, or blind leap — it is confident trust in a trustworthy Person based on real evidence. We believe in Christ because of who he is and what he has done, testified by Scripture, confirmed by the Spirit, and corroborated by history.

Faith has an object, and the object matters more than the amount. Jesus said faith "like a grain of mustard seed" can move mountains (Matthew 17:20) — the power is not in the size of faith but in the greatness of its object. A small faith in a great God accomplishes more than great faith in a small god. This liberates strugglers: you don't need heroic certainty; you need to look to Christ, even weakly. "Lord, I believe; help my unbelief" was enough.

And genuine faith always acts. "Faith, if it has no works, is dead in itself" (James 2:17) — not because works earn salvation, but because living trust inevitably expresses itself. Abraham believed God and offered Isaac; Rahab believed and hid the spies; the thief on the cross believed and spoke. Hebrews 11 is a gallery of faith in motion. Faith that never moves, risks, obeys, or loves is not faith at all — it is mere opinion. True faith receives Christ, rests in Christ, and follows Christ.`,
    passages: [
      { ref: 'Hebrews 11:1', note: 'The definition: faith is assurance of hoped-for things, proof of unseen realities.' },
      { ref: 'Ephesians 2:8-9', note: 'Saved by grace through faith — gift, not achievement; no one can boast.' },
      { ref: 'Matthew 17:20', note: 'Mustard-seed faith moves mountains — the object of faith matters more than its size.' },
      { ref: 'James 2:17', note: 'Faith without works is dead — genuine trust inevitably acts.' },
      { ref: 'Romans 10:17', note: '"Faith comes by hearing, and hearing by the word of God" — faith grows through Scripture.' },
      { ref: 'Hebrews 11:6', note: '"Without faith it is impossible to please him" — God rewards those who diligently seek him.' },
    ],
    context: `Hebrews 11 was written to persecuted believers tempted to abandon Christ. The writer parades the heroes — Abel, Noah, Abraham, Moses, Rahab — not as moral examples primarily but as witnesses that faith holds on when it costs. Every story involves risk, waiting, or suffering. Faith in Scripture is rarely comfortable; it is the rope held in the dark because of who holds the other end.

The Reformation recovered the biblical truth that justification is by faith alone — but the Reformers insisted this faith is never alone; it always produces love and good works. Paul and James don't contradict: Paul says we are justified by faith apart from works (Romans 3:28); James says the faith that justifies is never without works (James 2:24). Together: we are saved by faith alone, but saving faith is never alone.`,
    notSays: `The Bible does not say faith is blind — it rests on evidence: eyewitness testimony, fulfilled prophecy, the resurrection. It does not teach that strong faith guarantees specific outcomes (health, wealth, success); Hebrews 11 includes those "tortured, not accepting deliverance" (11:35-38). It does not say doubts disqualify faith — the father cried "help my unbelief" and was heard. It does not make faith a work that earns salvation; even faith itself is God's gift. And it never reduces faith to intellectual agreement — demons believe facts about God (James 2:19); saving faith trusts and follows.`,
    application: `Direct your faith to its proper object: not faith in faith, but faith in Christ — his person, his finished work, his promises. Feed it daily: "faith comes by hearing... the word of God" (Romans 10:17) — Scripture is faith's food. When faith feels small, remember the mustard seed: bring your little faith to the great God and act on it.

Exercise faith through obedience: take the step faith suggests — forgive, give, go, speak, trust — because faith grows by use. Name one area where you believe God intellectually but aren't acting, and take one obedient step this week. And when faith wavers, don't fake it: pray "I believe; help my unbelief," return to the evidences (the Gospels, the resurrection), and lean on the community of faith until your own strength returns.`,
    reflection: [
      'Is your faith more in "faith itself" (positive thinking) or in Christ himself? What is the practical difference?',
      'Where do you believe God intellectually but are not acting? What is one obedient step faith requires?',
      'How are you feeding your faith — is Scripture its daily food, or is it starving?',
    ],
    prayer: `Father, thank you for the gift of faith — that I am saved by grace through trusting Christ, not by my works. Grow my faith: feed it with your word, exercise it through obedience, refine it through testing. When it is small as a mustard seed, remind me that its power is in its object — you. Help my unbelief where I doubt; make my faith living, active, and obedient. Let me walk by faith, not by sight, all the way home. In Jesus' name, amen.`,
    deeper: [
      'Read Hebrews 11 in full — note that every example involves action, risk, or waiting.',
      'Study Romans 10:5-17: the logic of faith — hearing, believing, calling, saved.',
      'Memorize Hebrews 11:1, 6 and Ephesians 2:8 as faith foundations.',
    ],
  },
];

export function getLifeTopic(id: string): LifeTopic | undefined {
  return LIFE_TOPICS.find((t) => t.id === id);
}
