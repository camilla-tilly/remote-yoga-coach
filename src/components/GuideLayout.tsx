import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Shared building blocks for the pillar guide pages under /guides/.
 * Visual language follows TeamWellness.tsx: cream section bands,
 * Fraunces headings, clay accents.
 */

export const GuideEyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-clay mb-4">{children}</span>
);

/**
 * Two heading scales, named. The site was using three interchangeably, often
 * within one page. `lg` leads a substantial section; `md` suits a short one, and
 * four `lg` headings in a row down a page like /compare read as shouting.
 * The rule is one size per page, not one size per site.
 */
export const GuideHeading = ({
  id,
  eyebrow,
  size = 'lg',
  children,
}: {
  id?: string;
  eyebrow?: string;
  size?: 'lg' | 'md';
  children: React.ReactNode;
}) => (
  <div id={id} className="scroll-mt-28">
    {eyebrow && <GuideEyebrow>{eyebrow}</GuideEyebrow>}
    <h2
      className={
        size === 'md'
          ? 'font-fraunces font-normal text-heading text-3xl md:text-4xl tracking-[-0.015em] leading-tight'
          : 'font-fraunces font-normal text-heading text-4xl md:text-5xl tracking-[-0.02em] leading-tight'
      }
    >
      {children}
    </h2>
  </div>
);

export const GuideProse = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-7 md:mt-8 space-y-5 text-charcoal/75 text-lg leading-relaxed">{children}</div>
);

export const GuideList = ({ items }: { items: Array<[string, string]> }) => (
  <ul className="mt-8 space-y-4">
    {items.map(([title, text]) => (
      <li key={title} className="bg-card rounded-lg border border-sage-light p-6 md:p-7">
        <p className="text-charcoal/80 text-[16px] leading-relaxed">
          <span className="font-fraunces font-normal text-heading text-lg">{title}</span>
          {'. '}{text}
        </p>
      </li>
    ))}
  </ul>
);

export const KeyTakeaways = ({ items }: { items: string[] }) => (
  <div className="mt-8 rounded-xl border border-sage-light bg-cream/60 p-7 md:p-9">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay mb-4">Key takeaways</p>
    <ul className="space-y-3">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3 text-charcoal/80 text-[15px] md:text-[16px] leading-relaxed">
          <Check className="text-clay shrink-0 mt-1" size={15} strokeWidth={2.5} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const GuideTOC = ({ items }: { items: Array<{ href: string; label: string }> }) => (
  <nav aria-label="On this page" className="mt-10 bg-cream rounded-xl border border-sage-light p-7 md:p-9">
    <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-clay mb-4">In this guide</p>
    <ol className="space-y-2.5">
      {items.map((item, i) => (
        <li key={item.href}>
          <a href={item.href} className="group inline-flex items-baseline gap-3 text-charcoal/80 hover:text-clay transition-colors">
            <span className="font-fraunces font-normal text-clay/70 text-sm">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-[16px] leading-relaxed group-hover:underline underline-offset-4">{item.label}</span>
          </a>
        </li>
      ))}
    </ol>
  </nav>
);

export const SpokeCard = ({ to, label, description }: { to: string; label: string; description: string }) => (
  <Link
    to={to}
    className="group block bg-card rounded-lg border border-sage-light hover:border-clay/60 p-6 md:p-7 transition-colors"
  >
    <p className="font-fraunces font-normal text-heading text-lg leading-snug group-hover:text-clay transition-colors">{label}</p>
    <p className="text-charcoal/70 text-[15px] leading-relaxed mt-1.5">{description}</p>
    <span className="mt-3 inline-flex items-center gap-1.5 text-clay text-xs font-semibold uppercase tracking-wider">
      Read the full post <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
    </span>
  </Link>
);

/**
 * The single FAQ implementation. There were four: this one, two hand-rolled
 * <dl> blocks on Pricing and the Swedish page, and a <details> block in the
 * blog renderer that put <details> inside a <dl> with no <dt>.
 *
 * Native <details>, deliberately, NOT the Radix accordion sitting unused in
 * ui/. Radix `type="single"` unmounts closed content, and scripts/prerender.mjs
 * snapshots the rendered DOM -- that would strip 21 answers out of /faq's static
 * HTML and 9 out of /compare while the FAQPage JSON-LD still claimed they were
 * there. Native <details> keeps every answer in the markup with zero JS, which
 * is what Google asks for and what the schema promises.
 *
 * The <h3> is kept inside <summary> so the document's heading outline is
 * unchanged. <summary>'s content model allows exactly one heading element, so
 * the +/x marker lives inside the h3 as phrasing content rather than as a
 * sibling div.
 */
export const GuideFAQ = ({
  items,
  defaultOpen = false,
}: {
  items: Array<[string, string]>;
  defaultOpen?: boolean;
}) => (
  <div className="mt-8 divide-y divide-sage-light border-y border-sage-light">
    {items.map(([q, a]) => (
      <details key={q} open={defaultOpen} className="faq-item group py-5 md:py-6">
        <summary className="relative cursor-pointer list-none pr-9 [&::-webkit-details-marker]:hidden">
          <h3 className="font-fraunces font-normal text-heading text-xl leading-snug transition-colors group-hover:text-clay">
            {q}
          </h3>
        </summary>
        <p className="mt-3 text-charcoal/75 text-[16px] leading-relaxed pr-9">{a}</p>
      </details>
    ))}
  </div>
);

export const GuideCTA = ({
  heading,
  text,
  buttonLabel = 'Book a pilot',
}: {
  heading: string;
  text: string;
  buttonLabel?: string;
}) => (
  <section className="bg-cream-soft-b py-24 md:py-28">
    <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8 text-center">
      <h2 className="font-fraunces font-normal text-heading text-4xl md:text-5xl tracking-[-0.02em] leading-tight">{heading}</h2>
      <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">{text}</p>
      <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to="/demo">
          <Button className="bg-clay hover:bg-clayDark text-white font-medium text-[15px] rounded-full px-8 py-6">
            {buttonLabel}
          </Button>
        </Link>
        <Link to="/pricing">
          <Button variant="outline" className="border-sage text-charcoal hover:bg-sage-light/40 font-medium text-[15px] rounded-full px-8 py-6">
            See pricing
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export const RelatedGuides = ({ guides }: { guides: Array<{ to: string; label: string; description: string }> }) => (
  <section className="py-16 md:py-20">
    <div className="max-w-[900px] mx-auto px-5 sm:px-6 md:px-8">
      <GuideEyebrow>Keep reading</GuideEyebrow>
      <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl tracking-[-0.015em] leading-tight">The other guides</h2>
      <div className="mt-8 grid gap-6 md:gap-8 sm:grid-cols-2">
        {guides.map((g) => (
          <SpokeCard key={g.to} to={g.to} label={g.label} description={g.description} />
        ))}
      </div>
    </div>
  </section>
);

/**
 * A sentence lifted out of a paragraph and given room to breathe.
 *
 * Strictly a lift-out, never a repeat: the sentence is REMOVED from its
 * paragraph and rendered here. Repeating it would put the same sentence on the
 * page twice, which is duplicate content and reads as padding.
 *
 * Not italic. The site's voice is warm and plain, and italic serif at this size
 * starts to look like a pull quote in a magazine profile.
 */
export const PullQuote = ({ children, attribution }: { children: React.ReactNode; attribution?: string }) => (
  <blockquote className="my-10 border-l-2 border-clay pl-6 md:pl-7">
    <p className="font-fraunces font-normal text-heading text-2xl md:text-[1.75rem] leading-snug tracking-[-0.015em]">
      {children}
    </p>
    {attribution && (
      <footer className="mt-3 font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-clay">{attribution}</footer>
    )}
  </blockquote>
);

/**
 * The workhorse. Re-splitting one paragraph into one sentence per bullet
 * changes zero words and is the single highest-yield readability move
 * available here.
 *
 * Neither existing list fits: GuideList needs a [title, text] pair, and
 * inventing titles would be new copy; KeyTakeaways stamps its own "Key
 * takeaways" label and heavy box chrome on whatever it wraps.
 */
export const ProseList = ({ items, marker = 'bullet' }: { items: React.ReactNode[]; marker?: 'bullet' | 'dash' }) => (
  <ul className="mt-6 space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3.5 text-charcoal/75 text-lg leading-relaxed">
        <span aria-hidden="true" className="shrink-0 select-none text-clay/70">
          {marker === 'dash' ? (
            <span className="inline-block w-3 border-t border-clay/50 align-middle" style={{ marginTop: '0.85em' }} />
          ) : (
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-clay/60" style={{ marginTop: '0.62em' }} />
          )}
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

/**
 * For the two sections that were already definition tables written as prose.
 *
 * Injects NO separator between term and definition. GuideList renders
 * `{title}{'. '}{text}`, which is why it can't be reused here: the source
 * sentences read straight through ("Chair yoga is seated and gentle..."), so
 * anything inserted between the two halves would be a word that wasn't there.
 */
export const DefinitionList = ({ items }: { items: Array<[string, React.ReactNode]> }) => (
  <dl className="mt-8 divide-y divide-sage-light border-y border-sage-light">
    {items.map(([term, definition], i) => (
      <div key={i} className="py-6 md:py-7 md:grid md:grid-cols-[minmax(0,13rem)_1fr] md:gap-x-8">
        <dt className="font-fraunces font-normal text-heading text-lg leading-snug">{term}</dt>
        <dd className="mt-1.5 md:mt-0 text-charcoal/75 text-[17px] leading-relaxed">{definition}</dd>
      </div>
    ))}
  </dl>
);

/**
 * GuideList, but ordered and numbered, for content that is already a sequence.
 *
 * The default separator matches GuideList's `'. '` exactly, so swapping a
 * genuine sequence over is a one-word import change with byte-identical text
 * output. `separator=": "` covers the one page that joined with a colon.
 */
export const NumberedSteps = ({
  items,
  separator = '. ',
}: {
  items: Array<[string, string]>;
  separator?: string;
}) => (
  <ol className="numbered-steps mt-8 space-y-4">
    {items.map(([title, text]) => (
      <li key={title} className="flex gap-5 bg-card rounded-lg border border-sage-light p-6 md:p-7">
        <p className="text-charcoal/80 text-[16px] leading-relaxed">
          <span className="font-fraunces font-normal text-heading text-lg">{title}</span>
          {separator}
          {text}
        </p>
      </li>
    ))}
  </ol>
);

/**
 * An optional content image.
 *
 * Renders NOTHING without a src. CoachPhoto's illustrated placeholder is right
 * for a portrait slot that is always meant to be filled; it would be wrong
 * here, where a missing photo should simply be a section without a photo. That
 * is what lets these slots ship before the shoot happens.
 */
export const Figure = ({
  src,
  alt,
  caption,
  ratio = '3/2',
  className = '',
}: {
  src?: string;
  alt: string;
  caption?: string;
  ratio?: '4/5' | '3/2' | '1/1';
  className?: string;
}) => {
  if (!src) return null;
  const aspect = ratio === '4/5' ? 'aspect-[4/5]' : ratio === '1/1' ? 'aspect-square' : 'aspect-[3/2]';
  return (
    <figure className={`my-9 ${className}`.trim()}>
      <div className={`overflow-hidden rounded-xl border border-sage-light ${aspect}`}>
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
      </div>
      {caption && <figcaption className="mt-2.5 text-charcoal/55 text-[14px] leading-relaxed">{caption}</figcaption>}
    </figure>
  );
};
