import { Link } from 'react-router-dom';

/**
 * The inner-page kit: the homepage's design language, for every other page.
 *
 * Before this, the inner pages shared an older template: a small centred title
 * in a gradient band, a narrow centred column, sections that alternated cream
 * and sand, a mono label over every heading and a centred CTA band at the end.
 * Next to the redesigned homepage that read as a different, more generic site.
 *
 * The rules this kit enforces:
 *  - One wide container (1320px, same as the homepage and navbar), left-aligned.
 *  - A hero with a large headline, not a small centred one.
 *  - One background. Sections are separated by a hairline, not a colour band.
 *  - Headings sit in a left column and the content in a right one, so a short
 *    section fills the width instead of floating in the middle.
 *  - Every page ends on the same dark panel as the homepage.
 */

export const WRAP = 'max-w-[1320px] mx-auto px-5 sm:px-6 md:px-12';

type PillVariant = 'primary' | 'outline' | 'light' | 'lightOutline';

const PILL: Record<PillVariant, string> = {
  primary: 'bg-clay text-white hover:bg-clayDark',
  outline: 'border border-sage-light text-heading hover:border-clay hover:text-clay',
  light: 'bg-offwhite text-heading hover:bg-cream',
  lightOutline: 'border border-offwhite/30 text-offwhite hover:border-offwhite/70',
};

export const PillLink = ({
  to,
  variant = 'primary',
  children,
}: {
  to: string;
  variant?: PillVariant;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className={`inline-flex items-center justify-center h-[52px] md:h-14 px-7 md:px-8 rounded-full font-semibold text-[15px] md:text-[16px] transition-colors ${PILL[variant]}`}
  >
    {children}
  </Link>
);

export const PageHero = ({
  eyebrow,
  title,
  children,
  actions,
  aside,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  /** The intro paragraph(s). */
  children?: React.ReactNode;
  actions?: React.ReactNode;
  /** Optional right-hand column, usually a photo. */
  aside?: React.ReactNode;
}) => {
  const heading = (
    <>
      {eyebrow && <p className="font-mono text-[13px] md:text-[14px] text-charcoal/70 mb-6 md:mb-8">{eyebrow}</p>}
      <h1 className="font-fraunces font-normal text-heading tracking-[-0.022em] leading-[1.04] text-[2.5rem] sm:text-[3.1rem] lg:text-[4.1rem] xl:text-[4.6rem] max-w-[17ch] [text-wrap:balance]">
        {title}
      </h1>
    </>
  );
  const body = (
    <>
      {children && (
        <div className="space-y-4 text-[18px] md:text-[20px] leading-[1.55] text-charcoal/80 max-w-[46ch]">{children}</div>
      )}
      {actions && <div className="mt-9 md:mt-10 flex flex-wrap gap-3">{actions}</div>}
    </>
  );

  // With a photo: text left, photo right. Without one: headline left, intro
  // and buttons right, so the first screen is filled either way.
  return (
    <section data-section className="pt-32 pb-14 md:pt-44 md:pb-20">
      {aside ? (
        <div className={`${WRAP} md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-14 lg:gap-24 md:items-center`}>
          <div>
            {heading}
            <div className="mt-7 md:mt-9">{body}</div>
          </div>
          <div className="mt-12 md:mt-0">{aside}</div>
        </div>
      ) : (
        <div className={`${WRAP} md:grid md:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] md:gap-14 lg:gap-20 md:items-end`}>
          <div>{heading}</div>
          <div className="mt-7 md:mt-0 md:pb-2">{body}</div>
        </div>
      )}
    </section>
  );
};

/**
 * A content section: heading on the left, content on the right, a hairline on
 * top. Stacks on mobile.
 */
export const PageSection = ({
  id,
  heading,
  children,
}: {
  id?: string;
  heading: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section id={id} data-section className="py-10 md:py-16 scroll-mt-24">
    <div className={WRAP}>
      <div className="border-t border-sage-light pt-10 md:pt-14 md:grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16 lg:gap-24">
        <h2 className="font-fraunces font-normal text-heading text-[1.9rem] md:text-[2.3rem] lg:text-[2.6rem] leading-[1.1] tracking-[-0.018em] max-w-[18ch] [text-wrap:balance]">
          {heading}
        </h2>
        <div className="mt-6 md:mt-1 max-w-[680px] text-charcoal/80 text-[17px] md:text-[18px] leading-relaxed [&>*:first-child]:mt-0">
          {children}
        </div>
      </div>
    </div>
  </section>
);

/** Plain rows instead of tick-mark cards: a serif title, then one line. */
export const FeatureRows = ({ items }: { items: Array<[string, React.ReactNode]> }) => (
  <ul className="grid sm:grid-cols-2 gap-x-10 border-t border-sage-light">
    {items.map(([title, text]) => (
      <li key={title} className="border-b border-sage-light py-5 md:py-6">
        <p className="text-charcoal/75 text-[16px] leading-relaxed">
          <span className="block font-fraunces font-normal text-heading text-[1.3rem] leading-snug mb-1">{title}</span>
          {text}
        </p>
      </li>
    ))}
  </ul>
);

/** A real photo, full width of its column. */
export const PagePhoto = ({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}) => (
  <figure className="m-0">
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className="w-full h-auto rounded-[16px] border border-sage-light"
    />
    {caption && <figcaption className="mt-3 text-[14px] text-charcoal/60">{caption}</figcaption>}
  </figure>
);

/** The homepage's closing panel: dark, one message, one or two buttons. */
export const ClosingCTA = ({
  heading,
  children,
  actions,
}: {
  heading: React.ReactNode;
  children?: React.ReactNode;
  actions: React.ReactNode;
}) => (
  <section data-section className="pt-10 pb-20 md:pt-16 md:pb-28">
    <div className={WRAP}>
      <div className="rounded-[20px] bg-heading px-6 py-14 md:px-16 md:py-20 text-center">
        <h2 className="font-fraunces font-normal text-offwhite text-[2rem] md:text-[2.8rem] leading-[1.1] tracking-[-0.018em] max-w-[22ch] mx-auto [text-wrap:balance]">
          {heading}
        </h2>
        {children && (
          <div className="mt-5 space-y-5 text-[17px] md:text-[18px] leading-relaxed text-offwhite/75 max-w-[52ch] mx-auto [&_a]:!text-offwhite [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-offwhite/40">
            {children}
          </div>
        )}
        <div className="mt-9 flex flex-wrap justify-center gap-3">{actions}</div>
      </div>
    </div>
  </section>
);

/**
 * A list of links as plain rows: serif title, one line of text, an arrow.
 * The same pattern as the class list on the homepage.
 */
export const LinkRows = ({
  items,
  small = false,
}: {
  items: Array<{ to: string; title: React.ReactNode; text?: React.ReactNode; meta?: React.ReactNode }>;
  small?: boolean;
}) => (
  <ul className="border-t border-sage-light">
    {items.map((item) => (
      <li key={item.to} className="border-b border-sage-light">
        <Link
          to={item.to}
          className="group grid grid-cols-[minmax(0,1fr)_auto] gap-6 items-center py-5 md:py-6 text-inherit"
        >
          <span>
            {item.meta && <span className="block text-[13px] text-charcoal/55 mb-1.5">{item.meta}</span>}
            <span
              className={`block font-fraunces font-normal text-heading leading-snug group-hover:text-clay transition-colors ${
                small ? 'text-[1.25rem] md:text-[1.35rem]' : 'text-[1.45rem] md:text-[1.7rem]'
              }`}
            >
              {item.title}
            </span>
            {item.text && <span className="block mt-1.5 text-charcoal/70 text-[15px] md:text-[16px] leading-relaxed">{item.text}</span>}
          </span>
          <span aria-hidden="true" className="text-clay text-xl transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </li>
    ))}
  </ul>
);
