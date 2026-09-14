import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  slug: 'chair-yoga-at-your-desk',
  title: 'Chair yoga at your desk in 5 minutes',
  metaDescription:
    '8 gentle chair yoga poses you can do at your desk in 5 minutes, between calls. No mat, no changing, camera off. Eases tense shoulders and a stiff back.',
  publishDate: '2026-06-17',
  readingTime: '5 min',
  category: 'Desk and posture',
  excerpt:
    'Five minutes between calls is enough. Here are eight gentle chair yoga poses you can do at your desk, seated the whole time, with no mat, no changing and no camera needed.',
  language: 'en',
  relatedServiceHref: '/services/team-wellness',
  relatedServiceLabel: 'See how a team version works',
  tableOfContents: false,
  relatedPosts: [
    { slug: 'tech-neck-exercises-desk', label: 'Tech neck' },
    { slug: 'breathing-exercises-for-work-stress', label: 'Breathing exercises for work stress' },
    { slug: 'how-to-meditate-at-work', label: 'How to meditate at work' },
    { slug: 'meditation-breathing-or-chair-yoga-for-your-team', label: 'Meditation, breathing or chair yoga' },
  ],
  content: [
    {
      type: 'paragraph',
      text: "If you spend your day at a desk, you already know where it ends up: a stiff neck, tight shoulders, a back that aches by four o'clock. The good news: you can undo a surprising amount of that tension without leaving your chair, changing your clothes, or doing anything that makes you look strange to the rest of the team.",
    },
    {
      type: 'paragraph',
      text: 'Here are eight chair yoga poses you can do at your desk in about five minutes, the length of a typical gap between two calls. Move gently, breathe slowly, and stop short of any sharp pain. This should feel like relief, not effort.',
    },
    { type: 'heading', text: 'Before you start' },
    {
      type: 'paragraph',
      text: 'Sit toward the front of your chair, both feet flat on the floor, and take three slow breaths: in through the nose for a count of four, out for a count of six. That longer exhale is what tells your nervous system to settle. Keep it going through the whole sequence.',
    },
    { type: 'subheading', text: '1. Seated neck release' },
    {
      type: 'paragraph',
      text: 'Drop your right ear toward your right shoulder. Let the weight of your head do the work, no pulling. Three slow breaths, then the other side. This is where most desk tension lives.',
    },
    { type: 'subheading', text: '2. Shoulder rolls' },
    {
      type: 'paragraph',
      text: 'Roll both shoulders up toward your ears, back, and down, in slow circles. Five one way, five the other. Feel the difference between holding your shoulders and letting them drop.',
    },
    { type: 'subheading', text: '3. Seated cat-cow' },
    {
      type: 'paragraph',
      text: 'Hands on knees. As you breathe in, lift your chest and look slightly up (cow). As you breathe out, round your back and drop your chin (cat). Move with your breath for five rounds. The simplest, best thing you can do for a stiff spine.',
    },
    { type: 'subheading', text: '4. Seated twist' },
    {
      type: 'paragraph',
      text: 'Sit tall. Place your right hand on the outside of your left knee and gently turn to look over your left shoulder. Three breaths, then switch. Grow tall on each inhale rather than cranking yourself around; the breath does more than the force.',
    },
    { type: 'subheading', text: '5. Wrist and finger stretch' },
    {
      type: 'paragraph',
      text: 'For everyone who types all day. Extend one arm, palm up, and use the other hand to gently draw the fingers back toward you. Hold, then turn the palm down and repeat. Swap arms. Then make slow fists and spread wide, a few times.',
    },
    { type: 'subheading', text: '6. Seated forward fold' },
    {
      type: 'paragraph',
      text: 'Feet wide, fold gently forward from the hips and let your head and arms hang toward the floor. Three breaths. Roll up slowly. A small reset for the lower back, skip the deep version if your back is sensitive.',
    },
    { type: 'subheading', text: '7. Chest opener and side reach' },
    {
      type: 'paragraph',
      text: 'Sit tall, clasp your hands behind your back (or hold the sides of the chair), and gently draw the shoulder blades together to open the chest. Three breaths. Then interlace your fingers, turn the palms up and reach overhead to lengthen your sides for three more. The direct antidote to the hunched-over-keyboard shape.',
    },
    { type: 'subheading', text: '8. Seated figure-four (optional)' },
    {
      type: 'paragraph',
      text: 'Cross your right ankle over your left knee and, sitting tall, lean forward slightly until you feel a gentle stretch in the hip. Three breaths, then switch. Hips get tight from sitting too, and this eases them.',
    },
    { type: 'heading', text: 'Fitting it between calls' },
    {
      type: 'paragraph',
      text: 'Finish where you started, with three slow breaths, then open the next call. If the gap is only three minutes, do the breaths, the neck release, cat-cow and the twist, and leave the rest. None of it needs the camera on.',
    },
    {
      type: 'paragraph',
      text: "The trick isn't doing this perfectly once, it's doing a little, often. A few short resets across the day do more than the long session you keep meaning to fit in, and each one lets you arrive at the next meeting steadier instead of carrying the last one into it. Pair it with something you already do (your mid-morning coffee, the end of a call) so it doesn't rely on willpower.",
    },
    { type: 'heading', text: 'Even better with a team' },
    {
      type: 'paragraph',
      text: 'Stretching alone helps. Doing it together, at the same time, with someone guiding you, helps more, because the hardest part of any wellbeing habit is starting, and a scheduled session does that for you. That is the idea behind a live weekly reset: a short, guided chair-yoga and breathing session your whole team joins from wherever they are, camera optional.',
    },
    { type: 'callout', text: 'If you want the fuller picture, I keep a longer [guide to desk yoga](/guides/desk-yoga) that pulls the practical routines together in one place.' },
    {
      type: 'cta',
      text: 'If your desk-bound team could use that, it might be worth mentioning to whoever looks after wellbeing where you work.',
      ctaHref: '/services/team-wellness',
      ctaLabel: 'See how a team version works',
    },
    {
      type: 'paragraph',
      text: 'They can also [book a pilot](/demo) to try it before committing to a subscription.',
    },
    {
      type: 'callout',
      text: 'Health note: these are gentle mobility movements, not medical advice. If you have an injury or ongoing pain, check with a professional first.',
    },
  ],
};

export default post;
