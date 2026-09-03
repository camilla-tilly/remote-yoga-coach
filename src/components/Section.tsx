/**
 * The one section wrapper.
 *
 * Before this existed the site used nine container widths, three vertical
 * padding systems and a `md:py-18` that emitted no CSS at all, several of them
 * varying within a single page. A Tailwind token scale would have renamed that
 * problem without fixing it: nine widths at nine call sites, nothing stopping a
 * tenth. A prop union is enforced by the compiler, so the typo class is
 * structurally impossible.
 *
 * Band rhythm is also solved here by construction. Hero is always `top`, CTA is
 * always `bottom`, and content sections strictly alternate paper / cream. Two
 * cream bands in a row (which the guides were patching with a `border-t`
 * hairline) can still be written, but they now look wrong in the source rather
 * than only on the page.
 *
 * `data-section` lets the legacy `section + section` rule in App.css bow out
 * wherever this component is used, while leaving the untouched homepage exactly
 * as it was.
 */

type Width = 'prose' | 'hero' | 'wide' | 'full';
type Tone = 'paper' | 'cream' | 'top' | 'bottom';
type Size = 'default' | 'tight' | 'cta' | 'hero';

const WIDTH: Record<Width, string> = {
  // 680px is ~70 characters at this body size. The old 760px reading column ran
  // to 85-95, which is past where the eye reliably finds the next line.
  prose: 'max-w-[680px]',
  hero: 'max-w-[820px]',
  wide: 'max-w-[900px]',
  full: 'max-w-[1040px]',
};

const TONE: Record<Tone, string> = {
  paper: '',
  cream: 'bg-cream',
  top: 'bg-cream-soft',
  bottom: 'bg-cream-soft-b',
};

const SIZE: Record<Size, string> = {
  default: 'py-20 md:py-24',
  tight: 'py-16 md:py-20',
  cta: 'py-24 md:py-28',
  // The navbar is fixed, so every hero carries its own top clearance.
  hero: 'pt-36 pb-16 md:pt-44 md:pb-20',
};

export const Section = ({
  width = 'prose',
  tone = 'paper',
  size = 'default',
  id,
  center = false,
  className = '',
  innerClassName = '',
  children,
}: {
  width?: Width;
  tone?: Tone;
  size?: Size;
  id?: string;
  center?: boolean;
  /** Escape hatch for `relative overflow-hidden`, needed by GlowField. */
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) => (
  <section id={id} data-section className={`${TONE[tone]} ${SIZE[size]} ${className}`.trim()}>
    <div
      className={`${WIDTH[width]} mx-auto px-5 sm:px-6 md:px-8 ${center ? 'text-center' : ''} ${innerClassName}`.trim()}
    >
      {children}
    </div>
  </section>
);

export default Section;
