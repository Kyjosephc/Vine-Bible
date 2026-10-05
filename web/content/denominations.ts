// Denominations: where Christians genuinely disagree.
//
// Content rules for this module (read before extending):
// - Describe each tradition's view the way its own thoughtful adherents
//   would recognize it. No strawmen, no winners, no false unity.
// - Distinguish "Scripture says..." (the text) from "this tradition
//   understands it to mean..." (the interpretation).
// - Keep history brief: how did this disagreement arise?
// - Name the common ground honestly, without pretending the differences
//   don't matter.
// - Scripture references are refs only (no invented quotations).

export interface TraditionView {
  tradition: string;
  /** What this tradition believes, in its own terms. */
  view: string;
  /** Why — the reasoning and key Scriptures behind it. */
  why: string;
  scripture: string[];
}

export interface DenominationIssue {
  id: string;
  /** The question Christians disagree about. */
  title: string;
  shortAnswer: string;
  intro: string;
  positions: TraditionView[];
  history: string;
  commonGround: string;
  reflection: string[];
}

export const DENOMINATION_ISSUES: DenominationIssue[] = [
  {
    id: 'baptism',
    title: 'Baptism: who, how, and what does it do?',
    shortAnswer:
      'All Christians baptize with water in the name of the Father, Son, and Holy Spirit — but they differ on whether infants should be baptized, whether immersion is required, and whether baptism saves or symbolizes.',
    intro:
      'Baptism is one of two practices nearly every Christian tradition shares (the other is communion) — and one of the most divisive. Jesus commanded it (Matthew 28:19), the apostles practiced it immediately (Acts 2:41), and everyone agrees it matters deeply. The disagreements are about whom it\u2019s for, how it\u2019s done, and what exactly happens in it.',
    positions: [
      {
        tradition: 'Catholic',
        view: 'Infants are baptized by pouring or immersion; baptism washes away original sin, infuses grace, and initiates into the Church. It is a sacrament — God acting through the rite.',
        why: 'Catholics read household baptisms in Acts (16:15, 33) as including children, see baptism as the New Testament counterpart to circumcision (given to infants in Colossians 2:11–12), and point to the early church\u2019s universal practice of infant baptism. "Baptism now saves you" (1 Peter 3:21) is taken at face value.',
        scripture: ['Matthew 28:19', 'John 3:5', 'Acts 2:38–39', '1 Peter 3:21', 'Colossians 2:11–12'],
      },
      {
        tradition: 'Orthodox',
        view: 'Infants are baptized by triple immersion; baptism unites the person to Christ\u2019s death and resurrection, washes away sin, and is followed immediately by chrismation (confirmation) and communion — even for babies.',
        why: 'Orthodoxy holds the ancient, undivided church\u2019s practice: baptism is entry into the new humanity in Christ. The emphasis is on mystery and union rather than legal categories — baptism is how one "puts on Christ" (Galatians 3:27).',
        scripture: ['Galatians 3:27', 'Romans 6:3–4', 'Titus 3:5'],
      },
      {
        tradition: 'Lutheran & Anglican',
        view: 'Infants are baptized (usually by sprinkling or pouring); baptism is God\u2019s promise made visible — it creates and strengthens faith, forgives sin, and saves.',
        why: 'Luther insisted baptism is not our work but God\u2019s: "Baptism is not just plain water, but water used by God\u2019s command and connected with God\u2019s Word." Infants can receive it because faith itself is God\u2019s gift, not an adult achievement. Anglicans historically agree, with a broader range of views today.',
        scripture: ['Mark 10:13–16', 'Acts 2:38–39', '1 Peter 3:21', 'Titus 3:5'],
      },
      {
        tradition: 'Reformed (Presbyterian)',
        view: 'Infants of believing parents are baptized as a sign and seal of the covenant — parallel to circumcision — though baptism itself doesn\u2019t automatically save; it marks out the covenant community.',
        why: 'The Reformed see one covenant of grace running through Scripture: as circumcision marked Israel\u2019s infants, baptism marks the church\u2019s. Its efficacy isn\u2019t automatic — the Spirit works through it in the elect — but withholding it from believers\u2019 children breaks covenant continuity.',
        scripture: ['Genesis 17:7–12', 'Acts 2:39', '1 Corinthians 7:14', 'Colossians 2:11–12'],
      },
      {
        tradition: 'Baptist',
        view: 'Only professing believers are baptized, by full immersion; baptism is an ordinance — a symbolic act of obedience picturing death, burial, and resurrection with Christ. It follows conversion and does not save.',
        why: 'Baptists note that every baptism in the New Testament follows personal faith and repentance — there is no explicit infant baptism in Scripture. The Greek word baptiz\u014d means "immerse," and Romans 6\u2019s burial imagery fits immersion best. A symbol done to someone who can\u2019t yet believe, they argue, empties the symbol.',
        scripture: ['Matthew 28:19', 'Acts 2:41', 'Acts 8:36–38', 'Romans 6:3–4'],
      },
      {
        tradition: 'Pentecostal / Charismatic',
        view: 'Same as Baptists on the whole — believer\u2019s baptism by immersion as an act of obedience — with strong emphasis on baptism as a moment of spiritual breakthrough and public witness.',
        why: 'Pentecostals share the Baptist reading of the New Testament pattern, adding experiential weight: baptism is often accompanied by powerful encounters with the Spirit, and many testify to deliverance or fresh filling at their baptism.',
        scripture: ['Acts 2:38', 'Acts 8:36–38', 'Acts 19:5'],
      },
    ],
    history:
      'Infant baptism appears in the historical record by the late 2nd century and became universal after Christianity\u2019s legalization. The first major challenge came from the Anabaptists in the 1520s — persecuted by Catholics and Protestants alike for re-baptizing adult converts. Baptists emerged from English Separatism in the 1600s carrying the believer\u2019s-baptism conviction. The mode debate (immersion vs. pouring) is ancient too — the Didache (c. AD 100) already allowed pouring when water was scarce.',
    commonGround:
      'Every tradition baptizes with water in the triune name, connects baptism to union with Christ, and treats it as the normal entry point of Christian life. No tradition treats it as optional or meaningless — the argument is about what it means, not whether it matters.',
    reflection: [
      'Which reading of the household baptisms in Acts do you find more natural — and why?',
      'Is baptism primarily God\u2019s promise to us, or our testimony to others? How does your answer shape the infant question?',
      'If you were baptized as an infant, how do believers\u2019-baptism Christians honor your baptism while disagreeing? If baptized as a believer, how do infant-baptism Christians view it?',
    ],
  },
  {
    id: 'communion',
    title: 'Communion: what happens at the Lord\u2019s table?',
    shortAnswer:
      'All Christians share bread and wine in remembrance of Christ — but they differ profoundly on whether Christ is truly present in the elements, and what "this is my body" means.',
    intro:
      'On the night He was betrayed, Jesus took bread, said "this is my body," and told His followers to repeat the meal in remembrance of Him. Every Christian tradition obeys — weekly, monthly, or quarterly. But what is happening when they do? Is Christ truly present? How? The answers range from literal transformation to pure memorial, and this question split the Reformation.',
    positions: [
      {
        tradition: 'Catholic',
        view: 'Transubstantiation: the bread and wine truly become the body and blood of Christ (while retaining the appearance of bread and wine). The Mass is a sacrifice — the same sacrifice of the cross, re-presented.',
        why: 'Catholics take "this is my body" (Matthew 26:26) and "unless you eat the flesh of the Son of Man... you have no life in you" (John 6:53) literally, and see the early church fathers unanimously teaching a real, sacrificial presence. The philosophical term "transubstantiation" (1215) explains how: the substance changes, the appearances remain.',
        scripture: ['Matthew 26:26–28', 'John 6:51–58', '1 Corinthians 10:16', '1 Corinthians 11:27–29'],
      },
      {
        tradition: 'Orthodox',
        view: 'The bread and wine truly become Christ\u2019s body and blood — a holy mystery. Orthodoxy affirms the real presence without insisting on a philosophical explanation of how.',
        why: 'The East never adopted scholastic categories like transubstantiation; it simply confesses the mystery, calling the change a transformation by the Holy Spirit invoked in the liturgy. The emphasis is on communion with Christ and the unity of the Church, not on defining the metaphysics.',
        scripture: ['Matthew 26:26–28', '1 Corinthians 10:16–17', 'John 6:55'],
      },
      {
        tradition: 'Lutheran',
        view: 'Sacramental union: Christ\u2019s true body and blood are present "in, with, and under" the bread and wine. Communicants truly receive Christ — but the bread remains bread.',
        why: 'Luther refused to spiritualize "this is my body": "is means is." But he rejected the philosophical machinery of transubstantiation and the idea of the Mass as a repeated sacrifice. Christ is really given, received by faith — and even by the unworthy, to their judgment (1 Corinthians 11:29).',
        scripture: ['Matthew 26:26', '1 Corinthians 10:16', '1 Corinthians 11:27–29'],
      },
      {
        tradition: 'Anglican',
        view: 'A real spiritual presence: Christ is truly received by faith in communion, though Anglicans have historically allowed a range of views from near-Lutheran to near-Reformed.',
        why: 'The Anglican formularies (39 Articles) reject transubstantiation but affirm that believers "truly and indeed" partake of Christ\u2019s body and blood — spiritually, by faith. The breadth reflects Anglicanism\u2019s via media between Catholic and Reformed instincts.',
        scripture: ['1 Corinthians 10:16', 'John 6:63'],
      },
      {
        tradition: 'Reformed',
        view: 'Spiritual presence: Christ is truly present by the Holy Spirit and received by faith — but His physical body remains in heaven. The sacrament is a means of grace, not a bare symbol.',
        why: 'Calvin taught that the Spirit lifts believers to commune with the ascended Christ; the elements are instruments, not containers. "The flesh profits nothing" (John 6:63) is read as ruling out a physical eating, while "participation" (1 Corinthians 10:16) rules out mere symbolism.',
        scripture: ['1 Corinthians 10:16', 'John 6:63', 'Acts 3:21'],
      },
      {
        tradition: 'Baptist & Pentecostal',
        view: 'Memorial: the bread and cup symbolize Christ\u2019s body and blood; communion is an act of remembrance, proclamation, and self-examination — "do this in remembrance of me."',
        why: 'Jesus said "do this in remembrance" (Luke 22:19), and Paul says "you proclaim the Lord\u2019s death until he comes" (1 Corinthians 11:26) — the meal points backward to the cross and forward to the feast. Christ is present by His Spirit among gathered believers, not in the elements. Most also see it as a powerful moment of spiritual encounter, not an empty ritual.',
        scripture: ['Luke 22:19', '1 Corinthians 11:23–26', 'Matthew 18:20'],
      },
    ],
    history:
      'The early church universally spoke of the Eucharist in realistic terms. The medieval West developed transubstantiation; the Reformation fractured over the issue — Luther and Zwingli\u2019s 1529 Marburg Colloquy famously failed to reach agreement, with Luther chalking "this is my body" on the table. The Catholic Council of Trent (1545–63) dogmatized transubstantiation in response. The memorial view spread with the Radical Reformation and later evangelicalism.',
    commonGround:
      'All traditions celebrate the meal Jesus instituted, connect it to His death, expect self-examination (1 Corinthians 11:28), and see it as nourishment for the Christian life. Everyone agrees something real happens at the table — the disagreement is about what, and how.',
    reflection: [
      'Read John 6:51–58 slowly. What did Jesus\u2019 first hearers think He meant — and why did many leave?',
      'Does it matter whether Christ is present "in" the bread or "by faith" at the table? What changes practically?',
      'How does your tradition\u2019s view shape the reverence (or simplicity) of its communion service?',
    ],
  },
  {
    id: 'predestination',
    title: 'Predestination and free will: who chooses whom?',
    shortAnswer:
      'All Christians affirm both God\u2019s sovereignty and human responsibility — but they differ on how God\u2019s choice and ours fit together, and whether grace can be resisted.',
    intro:
      'Scripture teaches both that God chose us before the foundation of the world (Ephesians 1:4) and that "whoever believes" will be saved (John 3:16) — that God hardens whom He wills (Romans 9:18) and that He desires all to be saved (1 Timothy 2:4). Every Christian holds both truths. The centuries-long debate is about how they fit: does God\u2019s choice determine ours, or does He enable a choice we genuinely make?',
    positions: [
      {
        tradition: 'Reformed (Calvinist)',
        view: 'Unconditional election: before creation, God chose specific individuals for salvation — not based on anything in them, but by His sovereign grace. Grace is irresistible; the elect will certainly be saved and preserved.',
        why: 'The Reformed read Romans 9, Ephesians 1, and John 6:44 ("no one can come to me unless the Father draws him") as teaching that fallen humans cannot choose God unless God first chooses them. Election magnifies grace: salvation is 100% God\u2019s work, leaving no room for human boasting.',
        scripture: ['Romans 9:10–24', 'Ephesians 1:4–5', 'John 6:44', 'Acts 13:48'],
      },
      {
        tradition: 'Arminian (Methodist, Pentecostal, many Baptists)',
        view: 'Conditional election: God chose those He foreknew would believe. Prevenient grace — grace that "goes before" — frees every person to accept or resist salvation. Grace can be resisted; believers can forfeit salvation.',
        why: 'Arminians (following Jacob Arminius, c. 1600) argue that love requires genuine freedom, and that Scripture\u2019s warnings against falling away (Hebrews 6, 2 Peter 2) only make sense if apostasy is possible. God\u2019s foreknowledge, not arbitrary decree, grounds election — preserving both sovereignty and real human choice.',
        scripture: ['1 Timothy 2:4', '2 Peter 3:9', 'John 3:16', 'Hebrews 6:4–6', 'Romans 8:29'],
      },
      {
        tradition: 'Catholic',
        view: 'God predestines no one to hell; He wills all to be saved. Grace initiates and sustains salvation, but humans freely cooperate with it — and can reject it, even after baptism.',
        why: 'Catholic theology (shaped by Augustine and Aquinas) holds that grace is entirely God\u2019s gift, yet genuinely enables free cooperation rather than overriding freedom. Predestination to heaven is affirmed; "double predestination" (God actively destining some to damnation) is rejected. Mortal sin can forfeit grace, which is why confession and perseverance matter.',
        scripture: ['Philippians 2:12–13', '1 Timothy 2:4', 'Sirach 15:14', 'Hebrews 10:26–27'],
      },
      {
        tradition: 'Orthodox',
        view: 'Synergy: salvation is the cooperation of divine grace and human freedom. God foreknows and predestines in the sense of preparing salvation for all; humans must freely respond and persevere.',
        why: 'The East never framed the debate in Western legal categories. Drawing on the Greek fathers, Orthodoxy teaches that grace enables but never coerces — "God cannot save us without us." Foreknowledge is not causation: God knows who will respond without forcing the response.',
        scripture: ['Philippians 2:12–13', 'Revelation 3:20', '2 Peter 1:10'],
      },
      {
        tradition: 'Lutheran',
        view: 'Single predestination: God elects some to salvation by pure grace; He does not predestine anyone to damnation — the lost are lost by their own rejection. The "why some and not others" is left as mystery.',
        why: 'Lutherans affirm election as strongly as the Reformed (it\u2019s pure gospel — God chose you) but refuse to draw the logical conclusion of double predestination, calling it an intrusion into God\u2019s hidden will. Scripture reveals God\u2019s mercy in Christ; beyond that, silence is reverence.',
        scripture: ['Ephesians 1:4–5', '2 Peter 3:9', 'Deuteronomy 29:29'],
      },
    ],
    history:
      'Augustine (5th century) first systematized predestination against Pelagius, who taught humans could earn salvation. The medieval church held Augustine\u2019s framework loosely. Calvin (1500s) sharpened it into double predestination; Arminius\u2019s followers protested (the Remonstrance, 1610), and the Synod of Dort (1618–19) condemned them — producing the "five points of Calvinism" (TULIP). Methodism later carried Arminianism worldwide; the debate remains evangelicalism\u2019s most enduring family argument.',
    commonGround:
      'Every tradition affirms: salvation is by grace, not earned; God is sovereign over salvation; humans are genuinely responsible; no one is saved against their will or lost without fault. The dispute is about the mechanics of grace — a mystery all sides admit they see "in a mirror, dimly."',
    reflection: [
      'How does each view answer a struggling believer\u2019s question: "Am I one of the elect?" Which answer comforts you most?',
      'If God\u2019s grace is irresistible, why evangelize? If it\u2019s resistible, why pray for the lost? Notice both sides evangelize and pray — what does that tell you?',
      'Where does mystery properly end the argument for you — and where does it become an excuse to stop thinking?',
    ],
  },
  {
    id: 'spiritual-gifts',
    title: 'Spiritual gifts: have tongues and prophecy ceased?',
    shortAnswer:
      'All Christians affirm the Spirit gives gifts — but they differ on whether the miraculous gifts (tongues, prophecy, healing) continue today, and what Spirit-baptism means.',
    intro:
      'The New Testament describes a church alive with spiritual gifts: prophecy, tongues, healing, miracles (1 Corinthians 12–14). But are those gifts still given today, or did they cease with the apostles? And is there a "baptism in the Holy Spirit" distinct from conversion? Roughly 600 million Pentecostal and charismatic Christians say yes to both; many other Christians say no — or "not necessarily."',
    positions: [
      {
        tradition: 'Cessationist (many Reformed, some Baptists)',
        view: 'The miraculous "sign gifts" (tongues, prophecy, miraculous healing) were given to authenticate the apostles and ceased with the apostolic age. The Spirit still works — through Scripture, providence, and ordinary gifts — but not through new revelation or miracles on demand.',
        why: 'Cessationists argue the sign gifts were "the signs of an apostle" (2 Corinthians 12:12), that 1 Corinthians 13:8–10 predicts their passing when "the perfect comes" (read as the completed canon), and that church history shows their decline. Continuing revelation, they warn, threatens Scripture\u2019s sufficiency.',
        scripture: ['1 Corinthians 13:8–10', '2 Corinthians 12:12', 'Hebrews 2:3–4', 'Revelation 22:18'],
      },
      {
        tradition: 'Continuationist (most Pentecostals, charismatics, many others)',
        view: 'All the gifts continue today. The Spirit still speaks through prophecy, heals, and gives tongues — not adding to Scripture, but applying and confirming it. Expect the Book of Acts as normal Christianity.',
        why: 'Continuationists note Scripture never says the gifts would cease before Christ\u2019s return (1 Corinthians 1:7 says believers "do not lack any spiritual gift" as they wait), that church history records miracles in every century, and that millions of credible global testimonies — especially in the Global South — confirm the gifts\u2019 ongoing reality.',
        scripture: ['1 Corinthians 1:7', 'Joel 2:28–29', 'Mark 16:17–18', 'James 5:14–15'],
      },
      {
        tradition: 'Pentecostal (classical)',
        view: 'Beyond continuation: there is a distinct "baptism in the Holy Spirit" after conversion, normally evidenced by speaking in tongues, empowering believers for witness and holy living.',
        why: 'Pentecostals trace a pattern in Acts: believers who were already Christians (the Samaritans in Acts 8, the Ephesians in Acts 19) later "received the Holy Spirit" with visible signs. This experience — the movement\u2019s birth at Azusa Street (1906) — is available to every believer who asks.',
        scripture: ['Acts 1:8', 'Acts 2:4', 'Acts 8:14–17', 'Acts 19:1–6'],
      },
      {
        tradition: 'Catholic & Orthodox',
        view: 'The Spirit\u2019s charisms continue — including miracles, healing, and prophecy, richly documented in the saints — but they are discerned within the Church\u2019s sacramental life, not sought as a separate "second blessing" apart from it.',
        why: 'Both traditions point to two millennia of saints\u2019 miracles as proof the gifts never ceased. But charisms are ordered to holiness and unity under the Church\u2019s discernment; private revelation never rivals public revelation (Scripture and Tradition). The Catholic Charismatic Renewal (from 1967) brought Pentecostal experience inside Catholic structures.',
        scripture: ['1 Corinthians 12:7–11', 'Galatians 5:22–23', '1 Thessalonians 5:19–21'],
      },
    ],
    history:
      'Montanists in the 2nd century were early "charismatics" — deemed excessive by the wider church. For centuries, miraculous claims clustered around saints and revivals. The modern debate ignited at Azusa Street, Los Angeles (1906), launching Pentecostalism — now Christianity\u2019s fastest-growing movement. The charismatic renewal (1960s–70s) carried the gifts into Catholic, Anglican, and mainline churches, making "continuationist" the global majority position by sheer numbers.',
    commonGround:
      'All agree the Holy Spirit is active today, gives gifts for building up the church, and that love outweighs every gift (1 Corinthians 13). All agree gifts must be tested (1 John 4:1) and ordered to unity. The dispute is about which gifts continue and how they\u2019re received — not whether the Spirit still works.',
    reflection: [
      'What has been your experience — or lack of experience — with the charismatic gifts? How has that shaped your view?',
      'How would you test a claimed prophecy or healing? What would count as genuine?',
      'If the gifts continue, are you open to them? If they\u2019ve ceased, how do you explain the global testimonies?',
    ],
  },
  {
    id: 'church-leadership',
    title: 'Church leadership: who\u2019s in charge?',
    shortAnswer:
      'All Christians affirm Christ is the head of the Church — but they differ on whether He governs through a pope, bishops, elders, or the whole congregation.',
    intro:
      'Jesus gave His apostles authority (Matthew 18:18), appointed leaders (Acts 14:23), and promised the Spirit would guide the Church (John 16:13). But how is that authority structured today? The answers — papal, conciliar, episcopal, presbyterian, congregational — have divided Christians for a thousand years, and each claims to be the New Testament\u2019s pattern.',
    positions: [
      {
        tradition: 'Catholic',
        view: 'The pope, as successor of Peter, holds supreme authority over the worldwide Church; bishops govern dioceses in communion with him. When defining doctrine solemnly, the pope is preserved from error (infallibility).',
        why: 'Catholics read "you are Peter, and on this rock I will build my church" (Matthew 16:18) plus "feed my sheep" (John 21:17) as establishing Peter\u2019s primacy, passed to his successors as bishops of Rome. Early popes (e.g., Clement, Leo) exercised wide authority, and the church\u2019s unity, Catholics argue, requires a visible center.',
        scripture: ['Matthew 16:18–19', 'John 21:15–17', 'Luke 22:32'],
      },
      {
        tradition: 'Orthodox',
        view: 'The Church is led by bishops in council, with the Ecumenical Patriarch as "first among equals" — honored, not obeyed as a supreme ruler. Authority rests in the consensus of bishops expressing the whole Church\u2019s faith.',
        why: 'The East points to the Council of Jerusalem (Acts 15) as the model: apostles and elders deciding together. Rome\u2019s claim to universal jurisdiction was a major cause of the 1054 schism. For Orthodoxy, truth is guarded by the whole Church\u2019s consensus across time, not by one office.',
        scripture: ['Acts 15:1–29', 'Matthew 18:20'],
      },
      {
        tradition: 'Anglican & Lutheran (episcopal)',
        view: 'Bishops in historic succession govern the church, but without papal supremacy. Authority is shared between bishops, clergy, and laity (synods); Scripture is the supreme norm.',
        why: 'The Reformation in England and Germany kept the historic episcopate while rejecting Rome\u2019s jurisdiction — reforming the church\u2019s doctrine while preserving its order. Bishops guard apostolic teaching; but councils and synods check them, and Scripture judges all.',
        scripture: ['Acts 20:28', '1 Timothy 3:1–7', 'Titus 1:5–9'],
      },
      {
        tradition: 'Reformed (presbyterian)',
        view: 'The church is governed by elders (presbyters) — teaching elders (pastors) and ruling elders — in graded councils: session, presbytery, general assembly. No bishops over elders; no pope over councils.',
        why: 'Presbyterians argue the New Testament uses "elder" and "bishop/overseer" interchangeably (Titus 1:5–7; Acts 20:17, 28) — one office, not two. Authority flows upward from congregations through representative courts, balancing local initiative with wider accountability.',
        scripture: ['Titus 1:5–7', 'Acts 14:23', '1 Timothy 5:17', 'Acts 15:1–29'],
      },
      {
        tradition: 'Baptist & congregational',
        view: 'Each local congregation is autonomous under Christ, governed democratically by its members; pastors and deacons serve, they don\u2019t rule. Associations advise but cannot command.',
        why: 'Congregationalists emphasize the priesthood of all believers (1 Peter 2:9) and the gathered church\u2019s authority (Matthew 18:17–20). No New Testament evidence, they argue, shows one church governing another. Christ rules His church directly through His Word and Spirit in the congregation.',
        scripture: ['Matthew 18:17–20', '1 Peter 2:9', 'Acts 6:1–6'],
      },
    ],
    history:
      'Bishops emerged early as churches\u2019 leaders; Rome\u2019s bishop gradually claimed primacy, formalized at Vatican I (1870) with papal infallibility. The East rejected this, splitting in 1054. Reformers split three ways: Lutherans and Anglicans kept bishops, the Reformed replaced them with elder-councils, and the Anabaptists/Baptists made the congregation sovereign. Each structure was forged partly in reaction to abuses of the others.',
    commonGround:
      'Every tradition affirms Christ as the Church\u2019s only ultimate head, the need for godly, qualified leaders (1 Timothy 3), and that authority exists to serve, not dominate ("not lording it over" — 1 Peter 5:3). Every structure has produced both saints and scandals — no polity guarantees holiness.',
    reflection: [
      'What does your tradition\u2019s structure protect against — and what is it blind to?',
      'Jesus tied authority to servanthood (Mark 10:42–45). How does your church\u2019s leadership embody that?',
      'If you visited a church with a completely different polity, what might you learn from it?',
    ],
  },
  {
    id: 'end-times',
    title: 'The end times: how will Christ return?',
    shortAnswer:
      'All Christians affirm Christ will return bodily to judge and renew creation — but they differ on the millennium, the tribulation, and how literally to read Revelation.',
    intro:
      'The New Testament ends with a promise — "Behold, I am coming soon" (Revelation 22:20) — and Christians have been debating the details ever since. Will there be a literal thousand-year reign? A rapture? A great tribulation? The main views differ on how to read apocalyptic literature: as a timeline of the future, a portrait of the present age, or something in between.',
    positions: [
      {
        tradition: 'Amillennial (Catholic, Orthodox, Lutheran, Reformed)',
        view: 'The "thousand years" of Revelation 20 symbolizes the present church age: Christ reigns now from heaven, Satan is bound in the sense that the gospel goes to the nations, and history ends with Christ\u2019s visible return, final judgment, and the new creation.',
        why: 'Amillennialists note Revelation is highly symbolic (beasts, dragons, numbers), that the New Testament describes Christ\u2019s reign as present (Ephesians 1:20–22; 1 Corinthians 15:25), and that the church fathers\u2019 dominant reading was non-literal. This was the mainstream view for most of church history.',
        scripture: ['Revelation 20:1–6', 'Ephesians 1:20–22', '1 Corinthians 15:24–26', 'Matthew 28:18'],
      },
      {
        tradition: 'Historic premillennial',
        view: 'Christ will return before a literal thousand-year reign on earth — a golden age of peace and justice — followed by the final judgment. The church will face tribulation before His coming.',
        why: 'Early church fathers (Papias, Justin Martyr, Irenaeus) held this view, reading Revelation 20 straightforwardly. Premillennialists argue the Old Testament\u2019s unfulfilled promises to Israel (a restored kingdom, worldwide peace) require a future earthly fulfillment.',
        scripture: ['Revelation 20:1–6', 'Isaiah 11:6–9', 'Zechariah 14:9', 'Acts 1:6–7'],
      },
      {
        tradition: 'Dispensational premillennial (many evangelicals, Baptists)',
        view: 'Christ will secretly "rapture" believers before a seven-year tribulation, then return visibly to establish the millennial kingdom centered on a restored national Israel, with distinct plans for Israel and the Church.',
        why: 'Developed by J.N. Darby (1800s) and popularized by the Scofield Bible and "Left Behind" novels, dispensationalism reads prophecy literally and distinguishes God\u2019s programs for Israel and the Church. Its adherents see modern Israel\u2019s existence as prophetically significant.',
        scripture: ['1 Thessalonians 4:16–17', 'Daniel 9:27', 'Revelation 20:1–6', 'Romans 11:25–26'],
      },
      {
        tradition: 'Postmillennial (some Reformed)',
        view: 'The gospel will gradually Christianize the world, ushering in a golden age of righteousness (the "millennium") — after which Christ returns to judge and renew.',
        why: 'Postmillennialists read the Great Commission optimistically: "all nations" will be discipled (Matthew 28:19), the earth "will be filled with the knowledge of the LORD" (Isaiah 11:9). This view fueled 19th-century missions and social reform; two world wars dimmed its popularity.',
        scripture: ['Matthew 28:19', 'Isaiah 11:9', 'Psalm 110:1', '1 Corinthians 15:25'],
      },
    ],
    history:
      'The early church was largely premillennial; Augustine\u2019s "City of God" (5th century) made amillennialism dominant for a thousand years. The Reformation kept it. Dispensationalism arose in 19th-century Britain, crossed to America, and — via revivalism, Bible colleges, and popular fiction — became the best-known view in American evangelicalism, though it remains a minority view historically and globally.',
    commonGround:
      'Every view affirms the non-negotiables: Christ\u2019s bodily return, the resurrection of the dead, final judgment, the defeat of evil, and the new heavens and new earth. Christians have always treated the millennium\u2019s details as secondary — important enough to study, never worth dividing the Church over. And every view agrees on the practical point: "be ready" (Matthew 24:44).',
    reflection: [
      'Why do you think end-times speculation attracts so much energy — and so many false predictions?',
      'How does your view of the future shape your view of the present: optimism, pessimism, urgency, patience?',
      'What would change in your life if you truly lived "ready" for Christ\u2019s return?',
    ],
  },
  {
    id: 'salvation',
    title: 'Salvation: faith alone — or faith plus works?',
    shortAnswer:
      'All Christians agree we are saved by God\u2019s grace through Christ — but they differ on whether faith alone saves, what role works play, and whether salvation can be lost.',
    intro:
      'This is the disagreement that split Western Christianity. Paul writes "by grace you have been saved through faith... not of works" (Ephesians 2:8–9); James writes "faith without works is dead" (James 2:26). Both are Scripture. The question is how they fit — and the answers define the traditions.',
    positions: [
      {
        tradition: 'Lutheran & Reformed',
        view: 'Justification by faith alone: sinners are declared righteous before God solely through trusting Christ\u2019s finished work. Works contribute nothing to justification — though genuine faith always produces them.',
        why: 'The Reformers read Paul as teaching that justification is a legal declaration based on Christ\u2019s righteousness credited to the believer (Romans 3–5). Adding any human work, they argued, insults Christ\u2019s sufficiency and destroys assurance. Good works are the fruit and evidence of salvation, never its basis.',
        scripture: ['Romans 3:28', 'Ephesians 2:8–9', 'Galatians 2:16', 'Romans 5:1'],
      },
      {
        tradition: 'Catholic',
        view: 'Salvation by grace, received through faith working in love: initial justification comes in baptism apart from works, but believers must cooperate with grace through good works and the sacraments; mortal sin can forfeit justification.',
        why: 'Catholics read Paul and James together: we are justified by grace through faith, but the faith that justifies is "faith working through love" (Galatians 5:6). Justification is not a one-time legal declaration but a real transformation that must be preserved. Trent condemned "faith alone" as excluding the works grace produces.',
        scripture: ['James 2:24', 'Galatians 5:6', 'Philippians 2:12', '1 Corinthians 13:2'],
      },
      {
        tradition: 'Orthodox',
        view: 'Salvation as theosis — union with God: by grace, humans are gradually transformed to share in God\u2019s life. Faith, works, sacraments, and ascetic struggle cooperate synergistically; salvation is a lifelong journey, not a one-time transaction.',
        why: 'The East frames salvation less as a courtroom (declared righteous) and more as a hospital (healed and deified): "God became man that man might become god" (Athanasius). Justification language is used, but within the larger story of transformation. Assurance is humble hope, not legal certainty.',
        scripture: ['2 Peter 1:4', 'Philippians 2:12–13', 'Matthew 5:48'],
      },
      {
        tradition: 'Baptist & Pentecostal (Arminian-leaning)',
        view: 'Salvation by grace through faith alone at the moment of belief — a definite new birth. Most hold eternal security ("once saved, always saved"); Pentecostals and Methodists more often teach that persistent, unrepented sin can forfeit salvation.',
        why: 'The revivalist tradition emphasizes the crisis moment of conversion: "whoever believes has eternal life" (John 6:47). Assurance rests on Christ\u2019s promise, not our performance. Those who allow for falling away point to Scripture\u2019s warnings (Hebrews 6; 2 Peter 2:20–22) as meaningless if apostasy is impossible.',
        scripture: ['John 3:16', 'John 10:28–29', 'Romans 8:38–39', 'Hebrews 6:4–6'],
      },
    ],
    history:
      'Luther\u2019s "faith alone" (1517) ignited the Reformation; Trent (1547) anathematized it, hardening the divide. In 1999, Catholics and Lutherans signed the Joint Declaration on the Doctrine of Justification, agreeing that sinners are saved by grace through faith and that good works are grace\u2019s fruit — a landmark, though differences remain on merit, assurance, and the role of the sacraments.',
    commonGround:
      'Every tradition confesses: salvation is God\u2019s gift, not human achievement; Christ\u2019s death and resurrection are its sole basis; genuine faith transforms life; and final judgment considers how we lived. The argument is about the order and logic of grace — not whether grace is everything.',
    reflection: [
      'Do you tend to trust Christ\u2019s work or your own progress for your standing with God? Be honest.',
      'How does your view handle James 2 ("faith without works is dead") alongside Ephesians 2 ("not of works")?',
      'What does healthy assurance look like — confidence without complacency?',
    ],
  },
  {
    id: 'women-in-ministry',
    title: 'Women in ministry: who can lead and teach?',
    shortAnswer:
      'All Christians affirm women\u2019s full dignity and vital ministry — but they differ on whether Scripture permits women to serve as pastors, priests, or elders.',
    intro:
      'Few debates stir stronger feelings. Scripture portrays women as prophets (Deborah, Huldah), apostles\u2019 coworkers (Priscilla, Phoebe — called a deacon), the first resurrection witnesses, and leaders of house churches. It also contains Paul\u2019s restrictions: "I don\u2019t permit a woman to teach or to exercise authority over a man" (1 Timothy 2:12). Christians who all revere Scripture read these texts very differently.',
    positions: [
      {
        tradition: 'Catholic & Orthodox',
        view: 'Only men can be ordained priests/bishops; women serve in every other ministry — as theologians, monastics, catechists, and (in Orthodoxy) deaconesses historically. Mary is honored above all saints.',
        why: 'Both churches argue Christ chose only male apostles and the Church has never ordained women — an unbroken tradition reflecting Christ\u2019s intention, not cultural bias. Priesthood represents Christ the bridegroom to the Church His bride; the symbolism, they hold, requires male priests. Pope John Paul II declared the matter settled (Ordinatio Sacerdotalis, 1994).',
        scripture: ['Mark 3:13–19', '1 Timothy 3:2', 'Luke 8:1–3'],
      },
      {
        tradition: 'Complementarian (many Reformed, Baptists, Anglicans)',
        view: 'Men and women are equal in worth and giftedness, but God assigns distinct roles: the offices of elder/pastor are reserved for qualified men; women teach, lead, and minister extensively in other roles.',
        why: 'Complementarians read 1 Timothy 2:12–13 as grounded in creation ("for Adam was formed first"), not culture — making it transcultural. Headship (Ephesians 5) is about humble, Christlike leadership, not superiority. They point to the breadth of women\u2019s ministry in their churches as proof the position isn\u2019t about capability.',
        scripture: ['1 Timothy 2:12–13', '1 Corinthians 14:33–35', 'Ephesians 5:22–33', 'Titus 1:6'],
      },
      {
        tradition: 'Egalitarian (Methodists, Pentecostals, many Anglicans/Lutherans)',
        view: 'Women may serve in every ministry, including senior pastor, priest, and bishop. Gifts, not gender, determine calling; Galatians 3:28 ("neither male nor female") announces the new creation\u2019s equality.',
        why: 'Egalitarians argue Paul\u2019s restrictions addressed specific local problems (false teaching in Ephesus; disorderly worship in Corinth), while his practice — commending Phoebe, Junia ("outstanding among the apostles," Romans 16:7), Priscilla who taught Apollos — shows his deeper theology. Pentecostals add Joel\u2019s prophecy: "your sons and your daughters shall prophesy" (Acts 2:17).',
        scripture: ['Galatians 3:28', 'Romans 16:1–7', 'Acts 2:17–18', 'Acts 18:26'],
      },
    ],
    history:
      'For most of church history, ordained leadership was male across all traditions — though women led powerfully as abbesses, mystics, missionaries, and reformers. The modern debate ignited in the 20th century: mainline Protestants began ordaining women (1940s–70s), evangelical feminism organized (1970s–80s), and complementarianism formalized in response (Danvers Statement, 1987). Pentecostalism ordained women from its 1906 beginnings — Aimee Semple McPherson founded a denomination in the 1920s.',
    commonGround:
      'All sides affirm women\u2019s full equality in dignity, salvation, and giftedness; all honor the biblical women who led, prophesied, and funded Jesus\u2019 ministry; all agree the Church has often failed women and must repent of it. The disagreement is specifically about the ordained offices — not about women\u2019s worth or the value of their ministry.',
    reflection: [
      'Which biblical women have shaped your faith? What did their leadership look like?',
      'How do you distinguish a timeless command from a culturally situated one in Paul\u2019s letters?',
      'Whatever your view, how does your church tangibly honor and develop women\u2019s gifts?',
    ],
  },
];

export function getDenominationIssue(id: string): DenominationIssue | undefined {
  return DENOMINATION_ISSUES.find((i) => i.id === id);
}
