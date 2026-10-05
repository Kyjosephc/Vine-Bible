// Bundled key passages in public-domain World English Bible (WEB) text.
// Used offline and as a fast path for well-known references.
// Keyed by lowercase ref slug, e.g. 'john-3-16'.

export interface FallbackPassage {
  ref: string;
  text: string;
}

export const FALLBACK_PASSAGES: Record<string, FallbackPassage> = {
  'john-3-16': {
    ref: 'John 3:16',
    text: 'For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.',
  },
  'psalm-23-1-6': {
    ref: 'Psalm 23:1-6',
    text: 'Yahweh is my shepherd: I shall lack nothing. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He guides me in the paths of righteousness for his name\u2019s sake. Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me. Your rod and your staff, they comfort me. You prepare a table before me in the presence of my enemies. You anoint my head with oil. My cup runs over. Surely goodness and loving kindness shall follow me all the days of my life, and I will dwell in Yahweh\u2019s house forever.',
  },
  'romans-8-28': {
    ref: 'Romans 8:28',
    text: 'We know that all things work together for good for those who love God, for those who are called according to his purpose.',
  },
  'philippians-4-13': {
    ref: 'Philippians 4:13',
    text: 'I can do all things through Christ, who strengthens me.',
  },
  'genesis-1-1-3': {
    ref: 'Genesis 1:1-3',
    text: 'In the beginning, God created the heavens and the earth. The earth was formless and empty. Darkness was on the surface of the deep and God\u2019s Spirit was hovering over the surface of the waters. God said, \u201cLet there be light,\u201d and there was light.',
  },
  '1-corinthians-13-4-7': {
    ref: '1 Corinthians 13:4-7',
    text: 'Love is patient and is kind. Love doesn\u2019t envy. Love doesn\u2019t brag, is not proud, doesn\u2019t behave itself inappropriately, doesn\u2019t seek its own way, is not provoked, takes no account of evil; doesn\u2019t rejoice in unrighteousness, but rejoices with the truth; bears all things, believes all things, hopes all things, and endures all things.',
  },
  'proverbs-3-5-6': {
    ref: 'Proverbs 3:5-6',
    text: 'Trust in Yahweh with all your heart, and don\u2019t lean on your own understanding. In all your ways acknowledge him, and he will make your paths straight.',
  },
  'isaiah-40-31': {
    ref: 'Isaiah 40:31',
    text: 'But those who wait for Yahweh will renew their strength. They will mount up with wings like eagles. They will run, and not be weary. They will walk, and not faint.',
  },
  'joshua-1-9': {
    ref: 'Joshua 1:9',
    text: 'Haven\u2019t I commanded you? Be strong and courageous. Don\u2019t be afraid. Don\u2019t be dismayed, for Yahweh your God is with you wherever you go.',
  },
  'matthew-11-28-30': {
    ref: 'Matthew 11:28-30',
    text: 'Come to me, all you who labor and are heavily burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart; and you will find rest for your souls. For my yoke is easy, and my burden is light.',
  },
  'romans-10-9': {
    ref: 'Romans 10:9',
    text: 'That if you will confess with your mouth that Jesus is Lord, and believe in your heart that God raised him from the dead, you will be saved.',
  },
  'ephesians-2-8-9': {
    ref: 'Ephesians 2:8-9',
    text: 'For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast.',
  },
  'micah-6-8': {
    ref: 'Micah 6:8',
    text: 'He has shown you, O man, what is good. What does Yahweh require of you, but to act justly, to love mercy, and to walk humbly with your God?',
  },
  'matthew-5-3-10': {
    ref: 'Matthew 5:3-10',
    text: 'Blessed are the poor in spirit, for theirs is the Kingdom of Heaven. Blessed are those who mourn, for they shall be comforted. Blessed are the gentle, for they shall inherit the earth. Blessed are those who hunger and thirst for righteousness, for they shall be filled. Blessed are the merciful, for they shall obtain mercy. Blessed are the pure in heart, for they shall see God. Blessed are the peacemakers, for they shall be called children of God. Blessed are those who have been persecuted for righteousness\u2019 sake, for theirs is the Kingdom of Heaven.',
  },
  'john-14-6': {
    ref: 'John 14:6',
    text: 'Jesus said to him, \u201cI am the way, the truth, and the life. No one comes to the Father, except through me.\u201d',
  },
  'acts-1-8': {
    ref: 'Acts 1:8',
    text: 'But you will receive power when the Holy Spirit has come upon you. You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth.',
  },
  'galatians-5-22-23': {
    ref: 'Galatians 5:22-23',
    text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faith, gentleness, and self-control. Against such things there is no law.',
  },
  'hebrews-11-1': {
    ref: 'Hebrews 11:1',
    text: 'Now faith is assurance of things hoped for, proof of things not seen.',
  },
  '1-john-4-8': {
    ref: '1 John 4:8',
    text: 'He who doesn\u2019t love doesn\u2019t know God, for God is love.',
  },
  'revelation-21-4': {
    ref: 'Revelation 21:4',
    text: 'He will wipe away every tear from their eyes. Death will be no more; neither will there be mourning, nor crying, nor pain any more. The first things have passed away.',
  },
  'psalm-46-1': {
    ref: 'Psalm 46:1',
    text: 'God is our refuge and strength, a very present help in trouble.',
  },
  'isaiah-41-10': {
    ref: 'Isaiah 41:10',
    text: 'Don\u2019t you be afraid, for I am with you. Don\u2019t be dismayed, for I am your God. I will strengthen you. Yes, I will help you. Yes, I will uphold you with the right hand of my righteousness.',
  },
  'jeremiah-29-11': {
    ref: 'Jeremiah 29:11',
    text: '\u2018For I know the thoughts that I think toward you,\u2019 says Yahweh, \u2018thoughts of peace, and not of evil, to give you hope and a future.\u2019',
  },
  'romans-6-23': {
    ref: 'Romans 6:23',
    text: 'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.',
  },
};

/** All fallback passage refs, in a stable order (used for verse-of-the-day rotation). */
export const FALLBACK_REFS: string[] = Object.keys(FALLBACK_PASSAGES);
