import { useEffect, useState } from 'react';

/**
 * Revolving reviews banner for the homepage. Auto-rotates through real,
 * genuine feedback about Camilla's teaching (from people who have practised
 * with her), fading between quotes. Honest attribution: first name plus a
 * light source label, never invented companies or roles.
 */

type Review = { quote: string; name: string };

const reviews: Review[] = [
  { quote: 'You have such a soothing voice.', name: 'Kris' },
  { quote: 'This felt amazing. Thank you, Camilla.', name: 'Miles' },
  { quote: 'Thanks for this beautiful flow. I felt great afterwards.', name: 'Susanne' },
  {
    quote: 'I have done yoga for 20 years and never done this. I really enjoyed it, and feel really stretched out.',
    name: 'Anonymous',
  },
  { quote: 'Wonderful practice, especially all the balance poses. Thank you.', name: 'Nina' },
  { quote: 'This was lovely. Thank you for sharing.', name: 'Kris' },
];

const ReviewsBanner = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((n) => (n + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-cream py-16 md:py-24 overflow-hidden" aria-label="What people say about practising with Camilla">
      <div className="max-w-[780px] mx-auto px-5 text-center">
        <span className="inline-block font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-clay mb-8">
          What people say about practising with me
        </span>

        <div className="relative min-h-[190px] sm:min-h-[160px] md:min-h-[150px]">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ease-out ${
                i === active ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              aria-hidden={i !== active}
            >
              <blockquote
                className="font-fraunces font-normal text-heading text-2xl md:text-[2rem] leading-snug"
                style={{ fontVariationSettings: '"SOFT" 40' }}
              >
                {'“'}{r.quote}{'”'}
              </blockquote>
              <figcaption className="mt-6 text-charcoal/60 text-sm">
                <span className="font-medium text-charcoal/80">{r.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2.5" role="tablist" aria-label="Choose a review">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show review ${i + 1}`}
              aria-selected={i === active}
              role="tab"
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'w-7 bg-clay' : 'w-2 bg-sage-light hover:bg-sage'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsBanner;
