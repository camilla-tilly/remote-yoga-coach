import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Shared building blocks for the pillar guide pages under /guides/.
 * Visual language follows TeamWellness.tsx: cream section bands,
 * Fraunces headings, clay accents.
 */

export const GuideEyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-sage mb-4">{children}</span>
);

export const GuideHeading = ({ id, eyebrow, children }: { id?: string; eyebrow?: string; children: React.ReactNode }) => (
  <div id={id} className="scroll-mt-28">
    {eyebrow && <GuideEyebrow>{eyebrow}</GuideEyebrow>}
    <h2 className="font-fraunces font-semibold text-heading text-3xl md:text-4xl leading-tight">{children}</h2>
  </div>
);

export const GuideProse = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">{children}</div>
);

export const GuideList = ({ items }: { items: Array<[string, string]> }) => (
  <ul className="mt-8 space-y-4">
    {items.map(([title, text]) => (
      <li key={title} className="bg-white rounded-lg border border-sage-light p-5">
        <p className="text-charcoal/80 text-[16px] leading-relaxed">
          <span className="font-fraunces font-semibold text-heading text-lg">{title}</span>
          {'. '}{text}
        </p>
      </li>
    ))}
  </ul>
);

export const KeyTakeaways = ({ items }: { items: string[] }) => (
  <div className="mt-8 rounded-xl border border-sage-light bg-cream/60 p-6 md:p-7">
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
  <nav aria-label="On this page" className="mt-10 bg-cream rounded-xl border border-sage-light p-6 md:p-8">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage mb-4">In this guide</p>
    <ol className="space-y-2.5">
      {items.map((item, i) => (
        <li key={item.href}>
          <a href={item.href} className="group inline-flex items-baseline gap-3 text-charcoal/80 hover:text-clay transition-colors">
            <span className="font-fraunces font-semibold text-clay/70 text-sm">{String(i + 1).padStart(2, '0')}</span>
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
    className="group block bg-white rounded-lg border border-sage-light hover:border-clay/60 p-5 transition-colors"
  >
    <p className="font-fraunces font-semibold text-heading text-lg leading-snug group-hover:text-clay transition-colors">{label}</p>
    <p className="text-charcoal/70 text-[15px] leading-relaxed mt-1.5">{description}</p>
    <span className="mt-3 inline-flex items-center gap-1.5 text-clay text-xs font-semibold uppercase tracking-wider">
      Read the full post <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
    </span>
  </Link>
);

export const GuideFAQ = ({ items }: { items: Array<[string, string]> }) => (
  <div className="mt-8 divide-y divide-sage-light border-y border-sage-light">
    {items.map(([q, a]) => (
      <div key={q} className="py-6">
        <h3 className="font-fraunces font-semibold text-heading text-xl leading-snug">{q}</h3>
        <p className="mt-2.5 text-charcoal/75 text-[16px] leading-relaxed">{a}</p>
      </div>
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
    <div className="max-w-[680px] mx-auto px-5 text-center">
      <h2 className="font-fraunces font-semibold text-heading text-3xl md:text-4xl leading-tight">{heading}</h2>
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
    <div className="max-w-[900px] mx-auto px-5">
      <GuideEyebrow>Keep reading</GuideEyebrow>
      <h2 className="font-fraunces font-semibold text-heading text-2xl md:text-3xl leading-tight">The other guides</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {guides.map((g) => (
          <SpokeCard key={g.to} to={g.to} label={g.label} description={g.description} />
        ))}
      </div>
    </div>
  </section>
);
