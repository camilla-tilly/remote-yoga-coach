import { useEffect, useRef, useState } from 'react';
import { Check, X, Minus } from 'lucide-react';

/**
 * Shared marketing building blocks for Remote Yoga Coach.
 * On-brand: Fraunces headings, Inter body, clay accent, sage + cream bands,
 * charcoal for dark sections. Dependency-free scroll reveals and branded SVG.
 */

/* ------------------------------------------------------------------ *
 * Reveal — lightweight scroll-in animation (no framer-motion needed).
 * Never wrap the hero H1/subcopy in this: keep above-the-fold instant.
 * ------------------------------------------------------------------ */
export const Reveal = ({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(18px)',
        transition: `opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
};

/* ------------------------------------------------------------------ *
 * Branded decorative glow field — soft clay/sage radial blobs.
 * Matches the footer's warm glows. Purely decorative, aria-hidden.
 * ------------------------------------------------------------------ */
export const GlowField = ({ tone = 'warm' }: { tone?: 'warm' | 'sage' }) => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div
      className="absolute -top-24 -right-16 w-[440px] h-[440px] rounded-full opacity-[0.10] blur-3xl animate-drift"
      style={{ background: `radial-gradient(circle, ${tone === 'sage' ? '#CE9A82' : '#B67A5E'} 0%, transparent 70%)` }}
    />
    <div
      className="absolute -bottom-28 -left-20 w-[420px] h-[420px] rounded-full opacity-[0.09] blur-3xl animate-drift"
      style={{ background: 'radial-gradient(circle, #CE9A82 0%, transparent 70%)', animationDelay: '3s' }}
    />
  </div>
);

/* ------------------------------------------------------------------ *
 * HeroArt — a warm, branded "breathing rings" banner. Stands in as a
 * hero image: concentric arcs rising like a calm dawn, in clay tones.
 * ------------------------------------------------------------------ */
export const HeroArt = ({ className = '' }: { className?: string }) => (
  <div
    className={`relative w-full overflow-hidden rounded-[28px] border border-sage-light ${className}`}
    style={{ background: 'linear-gradient(135deg, #F7F1EA 0%, #EFDFD0 55%, #E7CDB8 100%)' }}
  >
    <svg viewBox="0 0 640 300" className="w-full h-auto block" role="img" aria-label="Concentric rings rising like a calm dawn">
      <defs>
        <radialGradient id="haSun" cx="50%" cy="100%" r="80%">
          <stop offset="0%" stopColor="#C88A64" />
          <stop offset="100%" stopColor="#B67A5E" />
        </radialGradient>
      </defs>
      {/* concentric arcs, fading outward */}
      {[
        { r: 260, o: 0.13 },
        { r: 210, o: 0.2 },
        { r: 160, o: 0.28 },
        { r: 110, o: 0.4 },
        { r: 60, o: 0.55 },
      ].map(({ r, o }) => (
        <path
          key={r}
          d={`M ${320 - r} 300 A ${r} ${r} 0 0 1 ${320 + r} 300`}
          fill="none"
          stroke="#B67A5E"
          strokeOpacity={o}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
      {/* soft sun */}
      <path d="M 280 300 A 40 40 0 0 1 360 300 Z" fill="url(#haSun)" fillOpacity="0.9" />
      {/* scattered calm particles */}
      {[
        [120, 90, 3], [500, 70, 4], [430, 150, 2.5], [200, 175, 2.5], [560, 190, 3], [95, 205, 2.5],
      ].map(([cx, cy, rr], i) => (
        <circle key={i} cx={cx} cy={cy} r={rr} fill="#B67A5E" fillOpacity="0.28" />
      ))}
    </svg>
  </div>
);

/* ------------------------------------------------------------------ *
 * Section heading kit.
 * ------------------------------------------------------------------ */
export const Eyebrow = ({ children, tone = 'sage' }: { children: React.ReactNode; tone?: 'sage' | 'clay' | 'light' }) => (
  <span
    className={`inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4 ${
      tone === 'clay' ? 'text-clay' : tone === 'light' ? 'text-clay' : 'text-sage'
    }`}
  >
    {children}
  </span>
);

/* ------------------------------------------------------------------ *
 * Stat — one big number. StatBand — a row of them on a band.
 * ------------------------------------------------------------------ */
export const StatBand = ({
  items,
  variant = 'dark',
  eyebrow,
  heading,
  footnote,
}: {
  items: Array<{ value: string; label: string }>;
  variant?: 'dark' | 'cream';
  eyebrow?: string;
  heading?: string;
  footnote?: string;
}) => {
  const dark = variant === 'dark';
  return (
    <section className={`relative overflow-hidden py-16 md:py-20 ${dark ? 'bg-forest-gradient text-white' : 'bg-cream'}`}>
      {dark && <GlowField tone="warm" />}
      <div className="relative max-w-[1000px] mx-auto px-5">
        {(eyebrow || heading) && (
          <div className="text-center max-w-[640px] mx-auto mb-12">
            {eyebrow && (
              <span className={`inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4 ${dark ? 'text-clayLight' : 'text-sage'}`}>
                {eyebrow}
              </span>
            )}
            {heading && (
              <h2 className={`font-fraunces font-semibold text-2xl md:text-4xl leading-tight ${dark ? 'text-white' : 'text-heading'}`}>
                {heading}
              </h2>
            )}
          </div>
        )}
        <div className={`grid gap-8 sm:gap-6 ${items.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3'}`}>
          {items.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <p className={`font-fraunces font-semibold text-4xl md:text-5xl leading-none ${dark ? 'text-clayLight' : 'text-clay'}`}>
                {s.value}
              </p>
              <p className={`mt-3 text-[15px] leading-relaxed ${dark ? 'text-white/75' : 'text-charcoal/70'}`}>{s.label}</p>
            </Reveal>
          ))}
        </div>
        {footnote && (
          <p className={`mt-10 text-center text-xs ${dark ? 'text-white/45' : 'text-charcoal/45'}`}>{footnote}</p>
        )}
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ *
 * ComparisonTable — live sessions vs apps vs EAP, the buyer's core
 * objection. Table on desktop, stacked cards on mobile. Cell value can
 * be true (check), false (cross), 'partial' (minus), or a string.
 * ------------------------------------------------------------------ */
type Cell = boolean | 'partial' | string;

const CellMark = ({ value, highlight = false }: { value: Cell; highlight?: boolean }) => {
  if (value === true)
    return <Check className={highlight ? 'text-clay' : 'text-sage'} size={19} strokeWidth={2.5} aria-label="Yes" />;
  if (value === false) return <X className="text-charcoal/25" size={18} strokeWidth={2.5} aria-label="No" />;
  if (value === 'partial') return <Minus className="text-charcoal/30" size={18} strokeWidth={2.5} aria-label="Partial" />;
  return <span className={`text-[13px] leading-snug ${highlight ? 'text-charcoal font-medium' : 'text-charcoal/60'}`}>{value}</span>;
};

export const ComparisonTable = ({
  columns,
  rows,
  highlightIndex = 0,
}: {
  columns: string[];
  rows: Array<{ label: string; values: Cell[] }>;
  highlightIndex?: number;
}) => {
  return (
    <div>
      {/* Desktop / tablet table */}
      <div className="hidden sm:block overflow-hidden rounded-2xl border border-sage-light">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-5 bg-cream w-[34%]" />
              {columns.map((c, i) => (
                <th
                  key={c}
                  className={`p-5 text-center align-bottom ${i === highlightIndex ? 'bg-clay/[0.06]' : 'bg-cream'}`}
                >
                  <span
                    className={`font-fraunces font-semibold text-lg leading-tight block ${
                      i === highlightIndex ? 'text-clay' : 'text-heading'
                    }`}
                  >
                    {c}
                  </span>
                  {i === highlightIndex && (
                    <span className="mt-1.5 inline-block text-[10px] font-semibold uppercase tracking-widest text-clay">You, with us</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-t border-sage-light">
                <th scope="row" className="text-left p-5 font-medium text-charcoal/80 text-[15px]">{r.label}</th>
                {r.values.map((v, i) => (
                  <td key={i} className={`p-5 text-center ${i === highlightIndex ? 'bg-clay/[0.06]' : ''}`}>
                    <span className="inline-flex justify-center">
                      <CellMark value={v} highlight={i === highlightIndex} />
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="sm:hidden space-y-4">
        {columns.map((c, colI) => (
          <div
            key={c}
            className={`rounded-xl border p-5 ${colI === highlightIndex ? 'border-clay bg-clay/[0.05]' : 'border-sage-light bg-white'}`}
          >
            <p className={`font-fraunces font-semibold text-lg ${colI === highlightIndex ? 'text-clay' : 'text-heading'}`}>
              {c}
              {colI === highlightIndex && <span className="ml-2 text-[10px] font-semibold uppercase tracking-widest align-middle">You, with us</span>}
            </p>
            <ul className="mt-3 space-y-2">
              {rows.map((r) => (
                <li key={r.label} className="flex items-center justify-between gap-4 text-[14px]">
                  <span className="text-charcoal/70">{r.label}</span>
                  <span className="shrink-0"><CellMark value={r.values[colI]} highlight={colI === highlightIndex} /></span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
