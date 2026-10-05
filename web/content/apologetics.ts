// Apologetics: honest, approachable answers to the big questions people ask
// about God, Jesus, and the Bible.
//
// Content rules for this module (read before extending):
// - Distinguish EVIDENCE (what can be observed/verified) from
//   INTERPRETATION (what the evidence is taken to mean).
// - Name honest uncertainties. Never manipulate, never strawman the
//   other side, never claim more than the evidence supports.
// - Scripture quotations use public-domain wording (WEB/KJV) from memory;
//   keep them short. Never invent or paraphrase-into-quote a verse.
// - Tone: warm, curious, non-combative. The reader may be skeptical,
//   hurting, or exploring — write for all three.

export interface ApologeticEvidence {
  /** 'evidence' = observable/verifiable fact; 'interpretation' = what Christians conclude from it. */
  kind: 'evidence' | 'interpretation';
  title: string;
  text: string;
}

export interface ApologeticScripture {
  ref: string;
  /** Short public-domain quotation, or '' when the note alone suffices. */
  quote: string;
  note: string;
}

export interface ApologeticsTopic {
  id: string;
  question: string;
  /** One-sentence honest summary. */
  shortAnswer: string;
  intro: string;
  evidence: ApologeticEvidence[];
  uncertainties: string[];
  doesntProve: string[];
  scripture: ApologeticScripture[];
  reflection: string[];
  /** Related routes, e.g. '/apologetics/resurrection'. */
  related: { href: string; label: string }[];
}

export const APOLOGETICS_TOPICS: ApologeticsTopic[] = [
  {
    id: 'does-god-exist',
    question: 'Does God exist?',
    shortAnswer:
      'Philosophy and science both point toward a cause beyond the universe — but no argument compels belief; this is an invitation to consider, not a proof to submit to.',
    intro:
      'For most of human history, the existence of some kind of God was the default assumption, not the thing needing proof. The modern question usually means something more specific: is there a personal, intelligent Creator behind the universe — or is matter and energy all there is? Christians have never claimed this can be settled like a math problem. What we claim is that several independent lines of reasoning all point in the same direction, and that direction is a mind behind reality. This topic walks through the strongest of them — and their limits — honestly.',
    evidence: [
      {
        kind: 'evidence',
        title: 'The universe began to exist',
        text: 'Modern cosmology holds that the universe — space, time, matter, and energy — had a beginning (the Big Bang model). Philosophically, whatever begins to exist has a cause. A cause of space and time themselves would have to be spaceless, timeless, and immensely powerful — which is very close to what theists mean by God.',
      },
      {
        kind: 'evidence',
        title: 'The universe is fine-tuned for life',
        text: 'The fundamental constants of physics (the strength of gravity, the mass of particles, the cosmological constant) fall within an astonishingly narrow range that permits stars, chemistry, and life. Tiny changes would yield a universe of black holes or diffuse gas with no observers. This fine-tuning is acknowledged across the field; the debate is over what best explains it.',
      },
      {
        kind: 'evidence',
        title: 'Objective moral values seem real',
        text: 'Almost everyone lives as though some things are genuinely right and wrong — not merely preferences or evolutionary habits. Torturing children for fun is not "disfavored"; it is wrong. If humans are only molecules in motion, it is hard to ground that kind of objective moral duty. A moral law suggests a Moral Lawgiver.',
      },
      {
        kind: 'evidence',
        title: 'Consciousness resists physical explanation',
        text: 'Physics describes particles and fields beautifully — but no one has explained how unconscious matter produces subjective experience: the redness of red, the ache of grief, the sense of self. Consciousness looks like a fundamental feature of reality, not an accident of it.',
      },
      {
        kind: 'interpretation',
        title: 'What Christians conclude',
        text: 'Taken together — a beginning needing a beginner, fine-tuning suggesting a tuner, moral law suggesting a lawgiver, minds suggesting a Mind — Christians see a cumulative case: the universe looks like the work of an intelligent, moral, personal Creator. Each argument is a thread; the case is the rope.',
      },
    ],
    uncertainties: [
      'These are pointers, not laboratory proofs. A committed skeptic can always propose an alternative (a multiverse for fine-tuning, moral anti-realism for ethics). The arguments make belief reasonable, not unavoidable.',
      'They point to a Creator in general, not specifically to the God of the Bible. Getting from "a cause exists" to "Jesus is Lord" requires the historical evidence for Christ, not philosophy alone.',
      'God\u2019s hiddenness is real: if God wants to be known, why isn\u2019t He more obvious? Christians answer partly that God wants free trust, not compelled acknowledgment — but the question deserves its weight.',
    ],
    doesntProve: [
      'It does not prove which religion is true, or that the Bible is God\u2019s word.',
      'It does not prove God is good — the moral argument suggests a moral source, but the character of God is revealed in Christ, not in cosmology.',
      'It does not replace personal experience; millions believe because they have encountered God, not because they won a debate.',
    ],
    scripture: [
      {
        ref: 'Psalm 19:1',
        quote: 'The heavens declare the glory of God. The expanse shows his handiwork.',
        note: 'Creation itself is presented as a witness — available to everyone, everywhere.',
      },
      {
        ref: 'Romans 1:20',
        quote: '',
        note: 'Paul argues that God\u2019s "invisible things" — His eternal power and divine nature — have been "clearly seen" through what He made, so that people are without excuse.',
      },
    ],
    reflection: [
      'Which of these lines of reasoning do you find most compelling, and which leaves you cold? Why?',
      'If the universe had no cause or purpose, how would that change the way you live — honestly?',
      'What would it take for you to move from "a Creator might exist" to "I want to know Him"?',
    ],
    related: [
      { href: '/apologetics/science', label: 'Science and Christianity' },
      { href: '/apologetics/suffering', label: 'Why does God allow suffering?' },
      { href: '/apologetics/did-jesus-exist', label: 'Did Jesus really exist?' },
    ],
  },
  {
    id: 'did-jesus-exist',
    question: 'Did Jesus really exist?',
    shortAnswer:
      'Yes — the historical existence of Jesus is one of the most secure facts of ancient history, affirmed by virtually all scholars including skeptics.',
    intro:
      'You may have heard it claimed online that Jesus never existed — that He was invented by the early church, copied from pagan myths. It sounds bold. Among professional historians, though, including atheist and agnostic ones, this view (called "mythicism") is a fringe position. The question of who Jesus was is fiercely debated; the question of whether He lived is not. Here is why.',
    evidence: [
      {
        kind: 'evidence',
        title: 'Non-Christian writers mention Him',
        text: 'The Roman historian Tacitus (c. AD 116) records that "Christus" was executed under Pontius Pilate during Tiberius\u2019 reign. The Jewish historian Josephus (c. AD 93) describes Jesus as a wise man who was crucified under Pilate. The Roman governor Pliny the Younger (c. AD 112) writes of Christians worshiping Christ "as a god." None of these men were Christians; they had no motive to invent Him.',
      },
      {
        kind: 'evidence',
        title: 'The criterion of embarrassment',
        text: 'The Gospels report things no inventor would fabricate: Jesus is baptized by John (implying John\u2019s superiority), rejected by His family, abandoned by His followers, and executed as a criminal — the most shameful death in the Roman world. Ancient biographers invented flattering stories about heroes, not humiliating ones.',
      },
      {
        kind: 'evidence',
        title: 'Paul\u2019s letters are very early',
        text: 'Paul wrote within 20–30 years of Jesus\u2019 death, and he personally knew Jesus\u2019 brother James and the apostle Peter (Galatians 1:18–19). Myths need generations to develop; the Christian claim was public while eyewitnesses — including hostile ones — were still alive to contradict it.',
      },
      {
        kind: 'evidence',
        title: 'The "pagan copycat" claim collapses',
        text: 'The popular claim that Jesus was copied from myths like Horus or Mithras falls apart on inspection: the supposed parallels (virgin birth, December 25th, resurrection) either postdate Christianity or don\u2019t actually appear in the original myths. Serious scholars abandoned this theory a century ago.',
      },
      {
        kind: 'interpretation',
        title: 'What Christians conclude',
        text: 'Jesus of Nazareth was a real Jewish teacher, crucified under Pontius Pilate around AD 30, whose followers claimed He rose from the dead. That much is history. Whether He was who He claimed to be — that is the question the Gospels force on every reader.',
      },
    ],
    uncertainties: [
      'Non-Christian sources confirm the outline (a man named Jesus, crucified under Pilate, worshiped by followers) but give few details of His teaching. The details come from Christian sources — which is expected, since His followers were the ones who cared enough to write.',
      'Josephus\u2019s longer passage about Jesus was likely touched up by later Christian copyists; scholars reconstruct an authentic core, but the exact original wording is debated.',
      'Establishing that Jesus existed does not establish that He rose from the dead — that requires its own evidence.',
    ],
    doesntProve: [
      'It does not prove Jesus was divine, performed miracles, or rose from the dead.',
      'It does not prove the Gospels are inerrant — only that their central figure is historical.',
    ],
    scripture: [
      {
        ref: '1 Timothy 6:13',
        quote: '',
        note: 'Paul refers to "Christ Jesus, who testified the good confession before Pontius Pilate" — anchoring Jesus in datable Roman history.',
      },
      {
        ref: 'Luke 3:1–2',
        quote: '',
        note: 'Luke dates John the Baptist\u2019s ministry by naming seven contemporary rulers — the habit of a historian, not a mythmaker.',
      },
    ],
    reflection: [
      'Why do you think the "Jesus never existed" claim persists online despite the scholarly consensus?',
      'If Jesus definitely lived, what is the most important question left to answer about Him?',
      'C.S. Lewis argued Jesus leaves us only three options: liar, lunatic, or Lord. Do you find that framing fair?',
    ],
    related: [
      { href: '/apologetics/resurrection', label: 'Is the resurrection historically credible?' },
      { href: '/apologetics/manuscripts', label: 'Can we trust the manuscripts?' },
    ],
  },
  {
    id: 'resurrection',
    question: 'Is the resurrection historically credible?',
    shortAnswer:
      'The resurrection is the best explanation of several agreed-upon historical facts — but history can show it is plausible, not force you to believe it.',
    intro:
      'Christianity stands or falls here. Paul himself said that if Christ was not raised, Christian faith is "vain" (1 Corinthians 15:17). So this deserves the hardest scrutiny we can give it. Historians — including skeptical ones — broadly agree on a set of facts surrounding Jesus\u2019 death. The debate is over what best explains them. Here are the facts, the leading explanations, and an honest assessment.',
    evidence: [
      {
        kind: 'evidence',
        title: 'Jesus died by crucifixion',
        text: 'This is as certain as anything in ancient history, affirmed by Christian, Jewish, and Roman sources. The "swoon theory" (Jesus merely fainted) requires Him to survive scourging, crucifixion, a spear wound, and burial — then convince His followers He had conquered death. Physicians and historians alike find this medically absurd.',
      },
      {
        kind: 'evidence',
        title: 'The tomb was found empty',
        text: 'All four Gospels report women discovering the empty tomb — and in the ancient world, women\u2019s testimony was discounted, so no one inventing the story would make them the first witnesses. Moreover, the earliest Jewish polemic claimed the disciples stole the body (Matthew 28:13–15) — an accusation that concedes the tomb was empty.',
      },
      {
        kind: 'evidence',
        title: 'The disciples claimed appearances — and died for it',
        text: 'The earliest creed (1 Corinthians 15:3–8) dates to within a few years of the crucifixion and lists resurrection appearances to Peter, the Twelve, 500 people at once, James, and Paul. The disciples went from hiding in fear to public proclamation, and most were martyred. People die for lies they believe are true — but not for what they know is false. They claimed to be eyewitnesses.',
      },
      {
        kind: 'evidence',
        title: 'Two skeptics were converted: James and Paul',
        text: 'James, Jesus\u2019 brother, did not believe during Jesus\u2019 ministry (John 7:5) — then became the leader of the Jerusalem church and died a martyr. Paul was actively persecuting Christians when he claimed an encounter with the risen Jesus turned him into Christianity\u2019s greatest missionary. What transforms hostile skeptics? They both said: they saw Him alive.',
      },
      {
        kind: 'interpretation',
        title: 'What Christians conclude',
        text: 'Alternative theories — hallucination (mass shared hallucinations don\u2019t happen, and don\u2019t empty tombs), stolen body (doesn\u2019t explain the disciples\u2019 transformation or martyrdom), legend (too early, while eyewitnesses lived) — each explain one fact while ignoring others. The resurrection explains all of them at once. That is why historian N.T. Wright calls it the only explanation that does justice to the data.',
      },
    ],
    uncertainties: [
      'History deals in probabilities, not proofs. A historian can conclude the resurrection is the best explanation of the evidence; whether you believe it happened also involves your worldview — whether you think God exists and acts in history.',
      'The Gospel accounts differ in secondary details (how many angels, who arrived first). Christians see this as the mark of independent eyewitness testimony rather than collusion; skeptics see contradictions. (See "What about contradictions?")',
      'We cannot rerun the experiment. The evidence is historical and testimonial, like a court case — compelling, but not the same as watching it happen.',
    ],
    doesntProve: [
      'It does not prove every doctrine Christians hold — it proves, at minimum, that God vindicated Jesus. The rest of Christian theology builds on what Jesus taught.',
      'It does not remove the need for faith. As Jesus told Thomas: "Blessed are those who have not seen, and have believed" (John 20:29).',
    ],
    scripture: [
      {
        ref: '1 Corinthians 15:3–6',
        quote:
          'Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures, and that he appeared to Cephas, then to the twelve. Then he appeared to over five hundred brothers at once.',
        note: 'Paul quotes a creed scholars date to within 3–5 years of the crucifixion — far too early for legend.',
      },
      {
        ref: 'John 20:29',
        quote: 'Because you have seen me, you have believed. Blessed are those who have not seen, and have believed.',
        note: 'Jesus anticipates exactly our situation: believing on the testimony of witnesses.',
      },
    ],
    reflection: [
      'If the resurrection happened, what does it change about everything — death, meaning, Jesus\u2019 claims?',
      'Which alternative explanation do you find strongest, and what facts does it struggle with?',
      'Paul says 500 people saw Jesus at once, "most of whom remain alive" — an invitation to check. What does that confidence suggest about the early Christians?',
    ],
    related: [
      { href: '/apologetics/did-jesus-exist', label: 'Did Jesus really exist?' },
      { href: '/apologetics/contradictions', label: 'What about contradictions?' },
      { href: '/apologetics/prophecy', label: 'Prophecy and Jesus' },
    ],
  },
  {
    id: 'suffering',
    question: 'Why does God allow suffering?',
    shortAnswer:
      'There is no tidy answer — and the Bible doesn\u2019t offer one. It offers something better: a God who enters suffering Himself, and reasons to trust Him in the dark.',
    intro:
      'This is the hardest question, and any honest treatment starts by admitting it. Abstract arguments feel hollow beside a hospital bed. The Bible never treats suffering as a puzzle to be solved from a distance; it treats it as an enemy God Himself came to defeat. What follows is not a full explanation — no one has that — but the pieces Christians hold together in the face of pain.',
    evidence: [
      {
        kind: 'interpretation',
        title: 'Love requires freedom, and freedom allows evil',
        text: 'Much suffering comes from human choices — cruelty, greed, war, abuse. For love to be real, it must be freely given; a world of free creatures is a world where creatures can choose evil. God could prevent every wrong choice, but only by unmaking our freedom — and with it, the possibility of genuine love.',
      },
      {
        kind: 'interpretation',
        title: 'Character is forged, not granted',
        text: 'Courage, compassion, perseverance, and forgiveness cannot exist in a world without danger, need, hardship, and offense. A world with no suffering would be a world with no moral depth — no heroes, no sacrifice, no growth. This doesn\u2019t explain every instance of pain, but it explains why a good God might allow a world where pain is possible.',
      },
      {
        kind: 'evidence',
        title: 'The Bible\u2019s own answer is a Person, not a theory',
        text: 'When Job demands an explanation for his suffering, God doesn\u2019t give him a philosophy lecture — He gives him Himself (Job 38–42). And in Christ, God does something no other religion\u2019s God does: He enters suffering. The cross means God is not watching pain from a distance; He has been tortured, abandoned, and killed. Whatever the reason for suffering, "God doesn\u2019t care" is off the table.',
      },
      {
        kind: 'interpretation',
        title: 'Suffering is temporary; redemption is eternal',
        text: 'Christianity claims suffering is real and evil — not an illusion — but also not the end of the story. "Our light affliction, which is for the moment, works for us more and more exceedingly an eternal weight of glory" (2 Corinthians 4:17). The resurrection is God\u2019s promise that every tear will be answered, not just explained.',
      },
    ],
    uncertainties: [
      'We do not get the reasons for specific sufferings. Why this child, this disease, this disaster? Scripture is honest: we see "in a mirror, dimly" (1 Corinthians 13:12). Anyone who claims to know why a particular tragedy happened is speculating.',
      '"Natural evil" — earthquakes, cancer, birth defects — is harder to explain than human cruelty. Christians offer partial answers (a fallen, "groaning" creation — Romans 8:22; the laws of nature that make life possible also make earthquakes possible), but the mystery remains.',
      'The Bible warns against the friends-of-Job error: assuming someone\u2019s suffering is punishment for their sin. Jesus explicitly rejected that (John 9:3; Luke 13:1–5).',
    ],
    doesntProve: [
      'It does not prove God is cruel, absent, or powerless. Christianity\u2019s central claim is the opposite: God defeated evil by suffering it.',
      'It does not mean every pain has a silver lining you should be able to see now. Some griefs will only make sense — if ever — from the other side of eternity.',
      'It does not give anyone the right to minimize another person\u2019s pain with explanations. Presence first; theology second.',
    ],
    scripture: [
      {
        ref: 'Psalm 34:18',
        quote: 'The LORD is near to those who have a broken heart, and saves those who have a crushed spirit.',
        note: 'God\u2019s first move toward sufferers is nearness, not answers.',
      },
      {
        ref: 'Romans 8:28',
        quote:
          'We know that all things work together for good for those who love God, for those who are called according to his purpose.',
        note: 'Not "all things are good" — they aren\u2019t — but God weaves even evil into His good purposes.',
      },
      {
        ref: 'John 11:35',
        quote: 'Jesus wept.',
        note: 'The shortest verse in the Bible: God Himself weeps at a grave — knowing He is about to raise the dead.',
      },
    ],
    reflection: [
      'When have you (or someone you love) suffered? Did explanations help, or did presence help more?',
      'How does it change things that Christianity\u2019s God has scars?',
      'What would it look like to bring your unanswered "why" to God honestly, the way the psalmists did?',
    ],
    related: [
      { href: '/apologetics/does-god-exist', label: 'Does God exist?' },
      { href: '/apologetics/doubt', label: 'What about doubt?' },
      { href: '/life/anxiety', label: 'Life topic: Anxiety' },
    ],
  },
  {
    id: 'bible-reliable',
    question: 'How do we know the Bible is reliable?',
    shortAnswer:
      'More manuscripts, earlier copies, and better historical confirmation than any other ancient book — the text we read is overwhelmingly what was written.',
    intro:
      'Many people assume the Bible is a centuries-long game of telephone: stories passed down, changed, and finally written by people with agendas. The actual history of the text is strikingly different. Between the number of surviving manuscripts, how early they date, and how the text was copied, the Bible — especially the New Testament — is the best-attested book of the ancient world by an enormous margin.',
    evidence: [
      {
        kind: 'evidence',
        title: 'An avalanche of manuscripts',
        text: 'We have over 5,800 Greek manuscripts of the New Testament, plus 10,000+ Latin and thousands in other languages — more than 25,000 total. Compare: Caesar\u2019s Gallic Wars survives in ~10 manuscripts, Plato in ~7, Homer\u2019s Iliad (the runner-up) in ~1,800. The New Testament isn\u2019t slightly better attested; it\u2019s in another universe.',
      },
      {
        kind: 'evidence',
        title: 'Copies very close to the originals',
        text: 'Fragments of John\u2019s Gospel date to within decades of its writing (P52, c. AD 125). Large portions of Paul\u2019s letters and the Gospels survive from the 200s. For most ancient works the gap between writing and our earliest copy is 500–1,000 years; for the New Testament it\u2019s a few generations.',
      },
      {
        kind: 'evidence',
        title: 'The variants don\u2019t touch core doctrine',
        text: 'Yes, copyists made mistakes — spelling, word order, the occasional skipped line. Textual critics have catalogued every variant across all manuscripts, and the result: no core Christian doctrine depends on any disputed passage. About 99% of the text is stable across all manuscripts; the remaining 1% involves footnotes, not faith.',
      },
      {
        kind: 'evidence',
        title: 'Written by eyewitnesses or their associates',
        text: 'Luke opens his Gospel describing careful investigation and eyewitness sources (Luke 1:1–4). John insists "we have seen with our eyes" (1 John 1:1). Peter denies following "cleverly devised myths" (2 Peter 1:16). These are the claims of people inviting verification, not demanding blind trust.',
      },
      {
        kind: 'interpretation',
        title: 'What Christians conclude',
        text: 'We can be confident we are reading essentially what Matthew, Paul, and the others wrote. Whether what they wrote is true is a separate question — but the "corrupted telephone game" objection is simply false as a matter of manuscript evidence.',
      },
    ],
    uncertainties: [
      'We don\u2019t have the original documents (autographs) — only copies. Textual criticism reconstructs the originals with high confidence, but a handful of passages remain genuinely uncertain (e.g., the ending of Mark, the woman caught in adultery in John 8). Honest Bibles footnote these.',
      'Manuscript reliability proves the text was preserved, not that its claims are true. A perfectly preserved fiction is still fiction — which is why the historical evidence for Jesus and the resurrection matters too.',
      'The canon — which books belong — was recognized over centuries. Christians believe the church discerned, rather than invented, the canon; the criteria were apostolic origin, consistency, and widespread use.',
    ],
    doesntProve: [
      'It does not prove the Bible is inspired by God — only that it has been faithfully transmitted. Inspiration is a theological claim built on the text\u2019s own claims and Jesus\u2019 view of Scripture.',
      'It does not mean every translation is perfect. Translations differ because languages differ; comparing a few good ones is wise, not faithless.',
    ],
    scripture: [
      {
        ref: '2 Timothy 3:16',
        quote:
          'Every Scripture is God-breathed and profitable for teaching, for reproof, for correction, and for instruction in righteousness.',
        note: 'The Bible\u2019s own claim about itself: not merely human wisdom, but breathed out by God.',
      },
      {
        ref: '2 Peter 1:21',
        quote: '',
        note: '"No prophecy ever came by the will of man: but holy men of God spoke, being moved by the Holy Spirit." Human authors, divine Author.',
      },
    ],
    reflection: [
      'How does the manuscript evidence compare with what you previously assumed about the Bible\u2019s transmission?',
      'If the text is reliable, the question shifts from "can I trust the book?" to "what will I do with what it says?" — where are you on that shift?',
      'What would change if you read the Gospels as investigated history rather than religious legend?',
    ],
    related: [
      { href: '/apologetics/manuscripts', label: 'Can we trust the manuscripts?' },
      { href: '/apologetics/contradictions', label: 'What about contradictions?' },
      { href: '/apologetics/archaeology', label: 'Archaeology and the Bible' },
    ],
  },
  {
    id: 'contradictions',
    question: 'What about contradictions in the Bible?',
    shortAnswer:
      'Most alleged contradictions dissolve with context — different perspectives, ancient writing conventions, or copyist slips — and a few hard cases remain where honesty is better than forced harmonizing.',
    intro:
      'Lists of "Bible contradictions" circulate widely, and some entries look damning at first glance. Christians shouldn\u2019t wave them away — many have thoughtful answers, and wrestling with them leads to a richer understanding of how the Bible was written. The key insight: the Bible was written in ancient literary conventions, not modern ones, and judging it by standards its authors never held creates false contradictions.',
    evidence: [
      {
        kind: 'interpretation',
        title: 'Different perspectives, not contradictions',
        text: 'The Gospels are four portraits, not four security-camera feeds. Matthew writes for Jews, Luke for Gentiles; John selects different episodes than Mark. Two witnesses describing the same accident from different corners will differ in details — that\u2019s the mark of independent testimony, not collusion. Demanding identical wording would actually be suspicious.',
      },
      {
        kind: 'interpretation',
        title: 'Ancient conventions: rounding, ordering, compression',
        text: 'Ancient writers rounded numbers, arranged material thematically rather than chronologically, and compressed speeches to their essence. When Matthew and Luke order Jesus\u2019 temptations differently, or when crowd counts are round numbers, that\u2019s normal ancient historiography — not error.',
      },
      {
        kind: 'evidence',
        title: 'Copyist slips in numbers',
        text: 'The Old Testament\u2019s numbers (army sizes, ages, dates in Kings vs. Chronicles) were the hardest to copy by hand — Hebrew numerals were easily confused. Textual critics recognize these as transmission slips in a small number of passages. They affect statistics, never doctrine.',
      },
      {
        kind: 'interpretation',
        title: 'Context resolves the famous cases',
        text: '"Did Paul contradict James on faith vs. works?" — Paul opposes works as the basis of salvation; James opposes faith that produces no works. They\u2019re fighting different errors. "Who bought the field — Judas or the priests?" (Matthew 27 vs. Acts 1) — the priests bought it with Judas\u2019s returned money; both true. Patient reading resolves the great majority of cases.',
      },
    ],
    uncertainties: [
      'A small number of cases are genuinely difficult — e.g., the timing details around Jesus\u2019 birth (Quirinius\u2019 census in Luke 2), or the precise chronology of the conquest. Scholars propose solutions, but some remain open questions. Honest Christians admit this.',
      'There is a difference between "there is an answer I haven\u2019t found" and "there is no answer." Intellectual humility cuts both ways: skeptics shouldn\u2019t assume the hardest reading is the right one either.',
      'Our understanding of ancient conventions is still growing — some "contradictions" of the past century were resolved by archaeology and better knowledge of the ancient world.',
    ],
    doesntProve: [
      'Resolving most contradictions does not prove inerrancy — it removes an objection to it. The positive case for Scripture\u2019s authority rests on Jesus\u2019 view of it and the church\u2019s experience of it.',
      'It does not mean every reading is equally valid, or that hard passages should be flattened. Some texts remain genuinely puzzling, and that\u2019s okay.',
    ],
    scripture: [
      {
        ref: 'Proverbs 18:17',
        quote: 'He who pleads his cause first seems right; until another comes and questions him.',
        note: 'A list of contradictions is one side of the case. Wisdom hears the other side too.',
      },
      {
        ref: 'Acts 17:11',
        quote: '',
        note: 'The Bereans were commended for examining the Scriptures daily to check Paul\u2019s claims. Questioning is biblical — bring the questions, not just the conclusions.',
      },
    ],
    reflection: [
      'Pick one alleged contradiction you\u2019ve heard. What happens when you read both passages in full context?',
      'Do you hold the Bible to a stricter standard than other ancient histories? Should you?',
      'How do you respond when you meet a passage you can\u2019t yet resolve — with curiosity, or with a verdict?',
    ],
    related: [
      { href: '/apologetics/bible-reliable', label: 'How do we know the Bible is reliable?' },
      { href: '/apologetics/doubt', label: 'What about doubt?' },
    ],
  },
  {
    id: 'science',
    question: 'Are science and Christianity in conflict?',
    shortAnswer:
      'No — modern science was largely founded by Christians, and the "warfare" story is a 19th-century myth. Real tensions exist on specific questions, but the two answer different kinds of questions.',
    intro:
      'The Galileo affair and a few loud modern voices have created an impression that faith and science are natural enemies. History tells a different story: the scientific revolution was driven overwhelmingly by Christians who believed a rational God made a rational, investigable universe. Science and Christianity conflict only when one of them overreaches — when religion dictates the age of rocks, or when science claims to disprove purpose.',
    evidence: [
      {
        kind: 'evidence',
        title: 'Science was born in a Christian worldview',
        text: 'The founders of modern science — Kepler (astronomy), Boyle (chemistry), Newton (physics), Mendel (genetics), Pasteur (microbiology) — were Christians who saw science as "thinking God\u2019s thoughts after Him." The belief that nature follows discoverable laws made sense if a Lawgiver wrote them. Science flourished where this worldview held, not where the universe was seen as divine, illusory, or chaotic.',
      },
      {
        kind: 'evidence',
        title: 'The Big Bang fits creation better than its rivals',
        text: 'For centuries, many scientists preferred an eternal universe — no beginning, no Beginner. The Big Bang\u2019s discovery that the universe began was initially resisted partly because it sounded too much like Genesis 1:1. Atheist astronomer Fred Hoyle coined "Big Bang" as a mockery. The evidence won.',
      },
      {
        kind: 'interpretation',
        title: 'Different questions, different tools',
        text: 'Science answers how the heavens go; Scripture tells how to go to heaven (Galileo\u2019s famous line). Asking science whether life has purpose is like asking a thermometer whether soup is delicious — a category error. Conflict arises when scientism (the philosophy that only science yields truth) is smuggled in as science itself.',
      },
      {
        kind: 'interpretation',
        title: 'On evolution, Christians differ — honestly',
        text: 'Faithful Christians hold a range of views: young-earth creationism, old-earth creationism, and evolutionary creationism (God creating through evolutionary processes). What unites them: God as Creator, humans as His image-bearers, and a historical fall with real consequences. The church has not settled the mechanism; it has settled the meaning.',
      },
    ],
    uncertainties: [
      'Specific tensions are real and shouldn\u2019t be minimized: the age of the earth, the historicity of Adam, the mechanism of human origins. Christians land in different places, and charity is required.',
      'Both "God of the gaps" (inserting God where science is currently ignorant) and "science will explain everything eventually" are faith claims, not scientific ones. Gaps close; the deeper question — why is the universe intelligible at all — remains.',
      'Miracle claims can\u2019t be adjudicated by science\u2019s method, which assumes natural regularity. That\u2019s a limit of the method, not a disproof of miracles — but it means the case for miracles is historical and philosophical, not experimental.',
    ],
    doesntProve: [
      'It does not prove any particular view of creation — Christians in good faith disagree on the details.',
      'It does not mean Christians should be anti-science. Rejecting vaccines or climate data in God\u2019s name is not faithfulness; it\u2019s confusion of categories.',
      'It does not prove God from a laboratory. Science describes the painting; it can\u2019t, by itself, prove there\u2019s a Painter — though many scientists find the painting suggestive.',
    ],
    scripture: [
      {
        ref: 'Psalm 19:1',
        quote: 'The heavens declare the glory of God. The expanse shows his handiwork.',
        note: 'The Bible invites scientific wonder — studying creation is studying the Creator\u2019s work.',
      },
      {
        ref: 'Colossians 1:17',
        quote: '',
        note: '"In him all things hold together." Christians see Christ as the reason nature is orderly enough for science to work at all.',
      },
    ],
    reflection: [
      'Have you absorbed the "warfare" story? Where did you first hear it, and what evidence was offered?',
      'What questions can science not answer even in principle — and where do you look for those answers?',
      'If you\u2019re a science-minded person, what would change if you saw lab work as exploring God\u2019s craftsmanship?',
    ],
    related: [
      { href: '/apologetics/does-god-exist', label: 'Does God exist?' },
      { href: '/apologetics/archaeology', label: 'Archaeology and the Bible' },
    ],
  },
  {
    id: 'archaeology',
    question: 'Does archaeology support the Bible?',
    shortAnswer:
      'Repeatedly, yes — discoveries keep confirming the Bible\u2019s historical setting, though archaeology confirms places and people, not miracles.',
    intro:
      'A century ago, skeptical scholars dismissed much of the Bible\u2019s history as legend: no evidence for King David, for Pontius Pilate, for the Exodus-era customs of Genesis. Then the spades hit the dirt. Again and again, archaeology has confirmed the world the Bible describes — down to titles, customs, and names critics said were invented.',
    evidence: [
      {
        kind: 'evidence',
        title: 'King David: from myth to history',
        text: 'For decades critics called David a legend. In 1993, the Tel Dan inscription was found — a 9th-century BC Aramaic monument boasting of victory over the "House of David." A century after David\u2019s reign, Israel\u2019s enemies knew his dynasty by name. David is now firmly in the history books.',
      },
      {
        kind: 'evidence',
        title: 'Pontius Pilate: the inscription',
        text: 'Skeptics once doubted Pilate existed outside the Gospels. In 1961, excavators at Caesarea found a stone inscription naming "Pontius Pilate, Prefect of Judea" — exactly the title and place Luke and the Gospels give him.',
      },
      {
        kind: 'evidence',
        title: 'The Dead Sea Scrolls',
        text: 'Discovered in 1947, these scrolls (dating to 250 BC–AD 68) included a complete copy of Isaiah 1,000 years older than any Hebrew manuscript then known. Comparison showed the text had been copied with remarkable fidelity across a millennium — powerful confirmation of the Old Testament\u2019s preservation.',
      },
      {
        kind: 'evidence',
        title: 'Gospel details check out',
        text: 'The Pool of Bethesda\u2019s five porticoes (John 5:2), the Pool of Siloam (John 9:7), the pavement called Gabbatha (John 19:13), the synagogue at Capernaum, the ossuary of Caiaphas the high priest — each was unknown or doubted until excavated. The Gospels read like the work of people who knew first-century Judea firsthand.',
      },
      {
        kind: 'evidence',
        title: 'The wider ancient world matches',
        text: 'The fall of Jericho\u2019s walls, the Babylonian records of the siege of Jerusalem (586 BC), the Cyrus Cylinder matching Ezra\u2019s account of the exiles\u2019 return, Assyrian records of Israel\u2019s kings — the Bible\u2019s historical framework keeps intersecting with independent evidence.',
      },
    ],
    uncertainties: [
      'Archaeology confirms the stage, not the play: it can verify that Pilate existed, not that Jesus rose. Miracles leave no pottery shards. The evidence supports the Bible\u2019s historical reliability; faith in its message goes further.',
      'Some events remain debated — notably the scale of the Exodus and the conquest of Canaan. Evidence is interpreted differently, and absence of evidence isn\u2019t always evidence of absence (nomads leave few traces). Honest scholars disagree.',
      'Archaeology is a young, incomplete science. New finds regularly overturn old certainties — in both directions. Hold conclusions with appropriate humility.',
    ],
    doesntProve: [
      'It does not prove the Bible\u2019s theology — that God spoke, that Christ is divine. History can show the setting is real; the meaning requires more.',
      'It does not settle every debate. Some finds are over-claimed by enthusiasts; careful scholars distinguish confirmed facts from exciting possibilities.',
    ],
    scripture: [
      {
        ref: 'Luke 1:3–4',
        quote: '',
        note: 'Luke wrote so Theophilus "might know the certainty" of what he\u2019d been taught — after "having traced the course of all things accurately from the first." Archaeology keeps vindicating his confidence.',
      },
    ],
    reflection: [
      'Why do you think the "Bible as legend" narrative persists when so much has been confirmed?',
      'If the Bible is accurate about checkable details (names, places, titles), what does that suggest about its uncheckable claims?',
      'What would it take for you to visit these places — or at least look at the photos of the finds?',
    ],
    related: [
      { href: '/apologetics/bible-reliable', label: 'How do we know the Bible is reliable?' },
      { href: '/apologetics/manuscripts', label: 'Can we trust the manuscripts?' },
    ],
  },
  {
    id: 'manuscripts',
    question: 'Can we trust the Bible\u2019s manuscripts?',
    shortAnswer:
      'The New Testament is the best-preserved book of the ancient world — thousands of early copies let scholars reconstruct the original text with overwhelming confidence.',
    intro:
      'This is the "telephone game" objection made precise: even if the originals were accurate, haven\u2019t centuries of copying corrupted the text beyond recovery? The answer from textual criticism — the science of reconstructing ancient documents — is a clear no. No other ancient book comes close to the New Testament\u2019s manuscript wealth, and that wealth is exactly what lets scholars spot and correct every copyist\u2019s slip.',
    evidence: [
      {
        kind: 'evidence',
        title: '5,800+ Greek manuscripts (and counting)',
        text: 'We possess over 5,800 Greek manuscripts of the New Testament, from tiny fragments to complete Bibles, plus over 10,000 Latin copies and thousands more in Syriac, Coptic, and other languages. The average classical author survives in a handful of copies made a millennium after the original. The comparison isn\u2019t close.',
      },
      {
        kind: 'evidence',
        title: 'Copies within living memory of the originals',
        text: 'A fragment of John\u2019s Gospel (P52) dates to around AD 125 — within 30 years of writing. Major collections of Paul\u2019s letters and the Gospels (P46, P66, P75) date to the 100s–200s. For most ancient works, the earliest copy is 500–1,000 years removed from the author. Here, eyewitnesses\u2019 grandchildren could have checked the copies.',
      },
      {
        kind: 'evidence',
        title: 'Variants are catalogued — and theologically trivial',
        text: 'Because we have so many copies from different regions, scholars can compare them and identify every place copyists differed. The vast majority are spelling and word-order differences. Of the meaningful variants, none affects any core Christian doctrine — the deity of Christ, the resurrection, salvation by grace all stand on undisputed text.',
      },
      {
        kind: 'evidence',
        title: 'The Dead Sea Scrolls proved the Old Testament too',
        text: 'Before 1947, our oldest complete Hebrew Bible dated to ~AD 1000 — raising doubts about 2,000 years of copying. The Dead Sea Scrolls pushed Hebrew manuscripts back to 250 BC–AD 68, including a complete Isaiah. A thousand years of hand-copying, and the text was essentially unchanged. Scribal fidelity was extraordinary.',
      },
    ],
    uncertainties: [
      'We don\u2019t possess the autographs (originals). A few passages have genuine textual questions — the longer ending of Mark (16:9–20), the story of the adulterous woman (John 7:53–8:11). Good translations bracket or footnote these; none affects doctrine, and honesty about them strengthens rather than weakens confidence.',
      'Textual criticism is a scholarly discipline with its own debates (which manuscript families to weight most). The broad conclusions are settled; fine details are still refined.',
      'Preservation proves faithful transmission, not truth. The Quran is also well-preserved; Mormons preserve the Book of Mormon carefully. Manuscript evidence answers the telephone-game objection — other questions need other evidence.',
    ],
    doesntProve: [
      'It does not prove inspiration or inerrancy — those are theological conclusions drawn from the text\u2019s own claims and Christ\u2019s authority, not from manuscript counts.',
      'It does not mean your translation is flawless. Translation always involves judgment; that\u2019s why comparing translations and checking footnotes is wisdom, not doubt.',
    ],
    scripture: [
      {
        ref: 'Isaiah 40:8',
        quote: 'The grass withers, the flower fades; but the word of our God stands forever.',
        note: 'The Bible\u2019s own promise about its preservation — a promise the manuscript evidence remarkably confirms.',
      },
      {
        ref: 'Matthew 5:18',
        quote: '',
        note: 'Jesus said not the smallest letter or stroke would pass from the Law — reflecting His confidence in Scripture\u2019s preservation down to the details.',
      },
    ],
    reflection: [
      'If you\u2019d assumed the Bible was corrupted by copying, how does the actual evidence land?',
      'Why do you think this evidence isn\u2019t more widely known?',
      'Next time you open your Bible, what does it mean to know you\u2019re reading essentially what the apostles wrote?',
    ],
    related: [
      { href: '/apologetics/bible-reliable', label: 'How do we know the Bible is reliable?' },
      { href: '/apologetics/archaeology', label: 'Archaeology and the Bible' },
    ],
  },
  {
    id: 'prophecy',
    question: 'Does fulfilled prophecy point to Jesus?',
    shortAnswer:
      'The Old Testament\u2019s portrait of the coming Messiah matches Jesus with striking specificity — though prophecy is debated, and honest handling matters more than impressive lists.',
    intro:
      'Long before Jesus was born, the Hebrew Scriptures painted a detailed portrait of a coming figure: where He\u2019d be born, how He\u2019d die, what He\u2019d accomplish. Christians claim Jesus fits that portrait too precisely for coincidence. Skeptics counter that the "prophecies" are vague, taken out of context, or written after the fact. Both sides deserve a hearing — so let\u2019s look at the strongest cases and the honest objections.',
    evidence: [
      {
        kind: 'evidence',
        title: 'Isaiah 53: the suffering servant',
        text: 'Written ~700 BC, Isaiah 53 describes a servant who is "pierced for our transgressions," "crushed for our iniquities," silent before His accusers, buried with the rich, and whose suffering brings healing to others. The Dead Sea Scrolls prove this text predates Jesus by centuries. It reads like a description of the crucifixion — written seven centuries early.',
      },
      {
        kind: 'evidence',
        title: 'Micah 5:2: born in Bethlehem',
        text: 'The prophet Micah (~700 BC) named the tiny village of Bethlehem as the birthplace of Israel\u2019s coming ruler, "whose goings out are from of old, from ancient times." Jesus\u2019 Bethlehem birth is multiply attested — an odd detail to invent, since everyone knew Him as "Jesus of Nazareth."',
      },
      {
        kind: 'evidence',
        title: 'The details multiply',
        text: 'Betrayed for thirty pieces of silver (Zechariah 11:12–13; Matthew 26:15); money thrown into the temple and used to buy a potter\u2019s field (Zechariah 11:13; Matthew 27:5–7); hands and feet pierced, garments divided by lot (Psalm 22:16–18; John 19:23–24); no bones broken (Psalm 34:20; John 19:36); buried in a rich man\u2019s tomb (Isaiah 53:9; Matthew 27:57–60). Any one could be coincidence; the pattern is the argument.',
      },
      {
        kind: 'interpretation',
        title: 'What Christians conclude',
        text: 'Jesus didn\u2019t just fulfill a prediction or two — He stepped into a centuries-old portrait: lineage (David), birthplace (Bethlehem), manner of death (piercing, lots cast for clothing), and meaning of death (for others\u2019 sins). The apostles didn\u2019t invent this; they were surprised by it, and had to be shown (Luke 24:27).',
      },
    ],
    uncertainties: [
      'Context matters: some prophecies had an immediate meaning for their own time as well as a later fulfillment (e.g., Isaiah 7:14). Christians see a pattern of prophecy working on two levels; critics see Christians reading Jesus back into texts. This requires careful, passage-by-passage work — beware of anyone who treats it as simple.',
      'A few alleged fulfillments are debated even among Christians (e.g., exactly how Daniel\u2019s "seventy weeks" map to history). Don\u2019t build your faith on the most disputed calculations; build it on the clearest texts.',
      'Prophecy alone rarely convinces skeptics, because interpretation is involved. Its power is cumulative and best appreciated alongside the historical evidence for the resurrection.',
    ],
    doesntProve: [
      'It does not license date-setting or newspaper exegesis. Every generation that has predicted Christ\u2019s return from prophecy headlines has been wrong; Jesus said no one knows the day (Matthew 24:36).',
      'It does not prove every Old Testament passage is a direct prediction of Jesus. Some are patterns and foreshadowings (typology), not predictions — and the distinction matters.',
    ],
    scripture: [
      {
        ref: 'Isaiah 53:5',
        quote: 'He was pierced for our transgressions. He was crushed for our iniquities. The punishment that brought our peace was on him; and by his wounds we are healed.',
        note: 'The heart of the prophetic portrait — written centuries before crucifixion was even a Roman practice.',
      },
      {
        ref: 'Luke 24:27',
        quote: '',
        note: 'On the road to Emmaus, the risen Jesus showed His disciples "in all the Scriptures the things concerning himself." The Old Testament is, Christians believe, His story in advance.',
      },
    ],
    reflection: [
      'Read Isaiah 53 slowly. What strikes you about a 700-year-old text describing crucifixion-like suffering "for our transgressions"?',
      'Why do you think the religious experts of Jesus\u2019 day missed what seems clear in hindsight?',
      'How does fulfilled prophecy affect your confidence that God keeps His promises — including the ones He\u2019s made to you?',
    ],
    related: [
      { href: '/apologetics/resurrection', label: 'Is the resurrection historically credible?' },
      { href: '/denominations/end-times', label: 'What Christians believe about the end times' },
    ],
  },
  {
    id: 'other-religions',
    question: 'What about other religions?',
    shortAnswer:
      'Christianity claims to be true for everyone — but that claim is made with humility and love, not arrogance. Here\u2019s what\u2019s distinctive, and how Christians should treat neighbors of other faiths.',
    intro:
      'In a pluralistic world, Christianity\u2019s claim — "no one comes to the Father except through me" (John 14:6) — sounds exclusive, even offensive. It\u2019s worth asking what exactly is being claimed, what other religions actually teach (they differ enormously), and how Christians are called to hold their convictions: with confidence, yes, but "with gentleness and respect" (1 Peter 3:15).',
    evidence: [
      {
        kind: 'interpretation',
        title: 'Religions don\u2019t all teach the same thing',
        text: 'The popular idea that "all religions are basically the same" collapses on contact with the facts. Islam denies Jesus\u2019 divinity; Buddhism denies a personal God; Hinduism affirms millions of gods; Christianity centers on a crucified and risen Savior. They can\u2019t all be true in the same way — they make contradictory claims. Sincerity is admirable, but sincerity doesn\u2019t make contradictory claims simultaneously true.',
      },
      {
        kind: 'interpretation',
        title: 'What\u2019s distinctive: grace, not achievement',
        text: 'Most religions are systems of human ascent — do this, avoid that, climb toward God. Christianity is divine descent: God comes down. "For by grace you have been saved through faith... not of works" (Ephesians 2:8–9). Every other system says "do"; Christianity says "done." That\u2019s either the best news in the world or a scandal — but it\u2019s not the same message.',
      },
      {
        kind: 'interpretation',
        title: 'The incarnation and resurrection are unique',
        text: 'No other major religion claims God became a man, lived a sinless life, died for sinners, and rose bodily from the dead — with named eyewitnesses and an empty tomb in history. Christianity\u2019s claims are historical and therefore investigable in a way purely philosophical or mystical claims are not.',
      },
      {
        kind: 'evidence',
        title: 'Common ground is real',
        text: 'Christians recognize truth wherever it appears: other religions grasp real moral insights, real human longing, real glimpses of transcendence. Paul quoted pagan poets approvingly (Acts 17:28). Affirming Christianity\u2019s uniqueness doesn\u2019t require pretending other faiths contain nothing true or good.',
      },
    ],
    uncertainties: [
      'The fate of those who never hear the gospel is one of theology\u2019s hardest questions. Christians agree God is perfectly just and merciful, and that salvation is through Christ — but how God judges those without access to the gospel is debated (see Romans 2:12–16; Acts 10). Humility is required.',
      'Christianity\u2019s exclusive claim has sometimes been wielded arrogantly or violently. That history is real and shameful — and it contradicts the gospel it claimed to serve.',
      'We should be careful about caricaturing other religions. Fair representation — describing a faith the way its own thoughtful adherents would recognize — is a Christian duty.',
    ],
    doesntProve: [
      'Christianity\u2019s uniqueness does not prove Christians are better people. "There is no distinction... for all have sinned" (Romans 3:22–23) — the claim is about Christ, not about us.',
      'It does not license contempt, coercion, or dehumanizing language toward people of other faiths. Jesus\u2019 harshest words were for religious hypocrites, not outsiders.',
      'It does not mean every non-Christian is "lost" in some simple, smug sense. Judgment belongs to God, who sees hearts we cannot.',
    ],
    scripture: [
      {
        ref: 'John 14:6',
        quote: 'I am the way, the truth, and the life. No one comes to the Father, except through me.',
        note: 'The exclusive claim, in Jesus\u2019 own words — spoken the night before He died for the people He was excluding no one from loving.',
      },
      {
        ref: '1 Peter 3:15',
        quote:
          'Always be ready to give an answer to everyone who asks you a reason concerning the hope that is in you, with humility and fear.',
        note: 'The manner of defending the faith is part of the faith: humility and reverence, not combat.',
      },
    ],
    reflection: [
      'Do you know what your non-Christian friends actually believe — or only a caricature? What would fair representation require of you?',
      'How does "grace, not achievement" challenge both religious pride and secular self-sufficiency?',
      'If Christianity is true for everyone, what does love require of you toward those who disagree?',
    ],
    related: [
      { href: '/apologetics/does-god-exist', label: 'Does God exist?' },
      { href: '/apologetics/doubt', label: 'What about doubt?' },
    ],
  },
  {
    id: 'doubt',
    question: 'Is it okay to doubt?',
    shortAnswer:
      'Yes. Doubt is not the opposite of faith — it\u2019s often the doorway to deeper faith. The Bible is full of doubters God loved and answered.',
    intro:
      'Many people assume faith means certainty and doubt means failure — so they hide their questions until the questions hollow out their faith from the inside. The Bible tells a different story. Some of its greatest heroes doubted openly: Abraham laughed, Moses argued, David lamented, John the Baptist questioned from prison, Thomas refused to believe. God didn\u2019t rebuke their honesty; He met it. Doubt isn\u2019t the enemy of faith. Unexamined doubt, left to curdle into cynicism, can be — but honest doubt is often faith in the making.',
    evidence: [
      {
        kind: 'evidence',
        title: 'The Bible normalizes doubt',
        text: 'Over a third of the Psalms are laments — raw complaints and questions directed at God ("How long, O LORD?"). Jesus\u2019 own forerunner, John the Baptist, sent messengers from prison asking, "Are you the one who is to come, or should we look for another?" (Matthew 11:3). Jesus didn\u2019t scold him; He gave him evidence and called him the greatest of prophets.',
      },
      {
        kind: 'interpretation',
        title: 'Faith and certainty are different things',
        text: 'Biblical faith isn\u2019t the absence of questions — it\u2019s trust in a Person despite unanswered questions. "Faith is assurance of things hoped for, proof of things not seen" (Hebrews 11:1). You can be 70% convinced and still trust, the way you board a plane without understanding aerodynamics. Waiting for 100% certainty before believing means never believing anything that matters.',
      },
      {
        kind: 'interpretation',
        title: 'Doubt has directions',
        text: 'Doubt can move toward God ("I have questions and I\u2019m bringing them to You") or away from Him ("I have questions so I\u2019m done"). The same question functions completely differently depending on its direction. Thomas doubted toward Jesus — "unless I see" — and Jesus showed up. Bring the doubt; just bring it to the right address.',
      },
      {
        kind: 'interpretation',
        title: 'Questions deserve real answers',
        text: 'Christianity has nothing to fear from investigation — which is why this whole section exists. Many doubts dissolve with better information (manuscript evidence, historical context, answers to alleged contradictions). Some doubts are really about pain, not evidence, and need presence more than arguments. Naming which kind you have is half the battle.',
      },
    ],
    uncertainties: [
      'Not every question gets answered in this life. "The secret things belong to the LORD our God" (Deuteronomy 29:29). Mature faith makes peace with mystery without pretending the mystery isn\u2019t real.',
      'There\u2019s a difference between honest doubt and a settled refusal to believe regardless of evidence. The Bible distinguishes the seeker from the scoffer — be honest about which one you\u2019re being.',
      'If doubt is rooted in unaddressed hurt — suffering, church wounds, unanswered prayer — arguments alone won\u2019t reach it. That kind of doubt needs healing, community, and time.',
    ],
    doesntProve: [
      'Normalizing doubt does not mean all doubts are equally valid, or that truth is unknowable. Some questions have good answers; finding them matters.',
      'It does not mean faith is just a leap in the dark. Christian faith is trust based on evidence — historical, experiential, and rational — not blind guessing.',
      'It does not excuse intellectual laziness. "Love the Lord your God... with all your mind" (Matthew 22:37) — the questions deserve your best thinking, not your first Google result.',
    ],
    scripture: [
      {
        ref: 'Mark 9:24',
        quote: 'I believe. Help my unbelief!',
        note: 'The most honest prayer in the Bible: faith and doubt in the same breath — and Jesus answered it.',
      },
      {
        ref: 'Jude 22',
        quote: '',
        note: '"Have mercy on those who doubt." Not "argue them into submission" — mercy. That\u2019s the church\u2019s job description toward doubters.',
      },
      {
        ref: 'John 20:27–28',
        quote: '',
        note: 'Jesus didn\u2019t shame Thomas for doubting; He offered His wounds as evidence. Thomas\u2019s doubt became the occasion for the highest confession in the Gospels: "My Lord and my God!"',
      },
    ],
    reflection: [
      'What are your actual doubts — stated as specifically as you can? Vague unease is harder to address than concrete questions.',
      'Are your doubts moving toward God or away from Him? What would "doubting toward God" look like this week?',
      'Who is one safe person you could voice your hardest question to?',
    ],
    related: [
      { href: '/apologetics/suffering', label: 'Why does God allow suffering?' },
      { href: '/apologetics/contradictions', label: 'What about contradictions?' },
      { href: '/apologetics/does-god-exist', label: 'Does God exist?' },
    ],
  },
];

export function getApologeticsTopic(id: string): ApologeticsTopic | undefined {
  return APOLOGETICS_TOPICS.find((t) => t.id === id);
}
