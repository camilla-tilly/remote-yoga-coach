import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { getBlogPost } from '@/data/blogPosts';
import { softenAmp } from '@/lib/amp';
import { GuideFAQ, Figure } from '@/components/GuideLayout';
import { ClosingCTA, PillLink, WRAP } from '@/components/PageKit';

// Parse inline markdown: **bold** and [label](/path) links.
// Supports internal links (starting with "/") and external (starting with "http").
const renderInline = (text: string) => {
  const parts: (string | JSX.Element)[] = [];
  const regex = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined) {
      // **bold**
      parts.push(
        <strong key={`b-${key++}`} className="font-semibold text-dalashala-earth">
          {/* Recurse, so a link inside bold ("**[Desk yoga](/guides/desk-yoga)**")
              renders as a link. Without this it printed the raw brackets. */}
          {renderInline(match[1])}
        </strong>
      );
    } else {
      // [label](href)
      const label = match[2];
      const href = match[3];
      if (href.startsWith('/')) {
        parts.push(
          <Link
            key={`lnk-${key++}`}
            to={href}
            className="text-clay underline decoration-clay/40 hover:decoration-clay underline-offset-2"
          >
            {label}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={`lnk-${key++}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay underline decoration-clay/40 hover:decoration-clay underline-offset-2"
          >
            {label}
          </a>
        );
      }
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length === 1 ? parts[0] : parts;
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[åä]/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60);

const postCopy = {
  sv: {
    back: '← Tillbaka till bloggen',
    reading: 'läsning',
    tocLabel: 'Innehåll',
    related: 'Läs också',
    siteName: 'Remote Yoga Coach',
    home: 'Hem',
    blog: 'Blogg',
  },
  en: {
    back: '← Back to blog',
    reading: 'read',
    tocLabel: 'Contents',
    related: 'Read next',
    siteName: 'Remote Yoga Coach',
    home: 'Home',
    blog: 'Blog',
  },
} as const;

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const lang = post.language ?? 'en';
  const t = postCopy[lang];

  const structuredData: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.publishDate,
      url: `https://remoteyogacoach.com/blog/${post.slug}`,
      author: {
        '@type': 'Person',
        name: 'Camilla',
        url: 'https://remoteyogacoach.com',
      },
      publisher: {
        '@type': 'Organization',
        name: t.siteName,
        url: 'https://remoteyogacoach.com',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: t.home,
          item: 'https://remoteyogacoach.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: t.blog,
          item: 'https://remoteyogacoach.com/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: `https://remoteyogacoach.com/blog/${post.slug}`,
        },
      ],
    },
  ];

  // Collect all FAQ items from the post for FAQPage JSON-LD
  if (post.faqSchema) {
    const allFaqItems = post.content
      .filter((s) => s.type === 'faq' && s.faqItems)
      .flatMap((s) => s.faqItems || []);
    if (allFaqItems.length > 0) {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: allFaqItems.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      });
    }
  }

  // One id map for the whole post, shared by the headings and the contents
  // list. slugify() truncates and strips punctuation, so two headings can
  // easily collide; de-duplicating in a single pass is what guarantees every
  // contents link lands somewhere and no id appears twice.
  const headingIds = new Map<number, string>();
  {
    const seen = new Map<string, number>();
    post.content.forEach((s, i) => {
      if ((s.type !== 'heading' && s.type !== 'subheading') || !s.text) return;
      const base = slugify(s.text);
      const n = (seen.get(base) ?? 0) + 1;
      seen.set(base, n);
      headingIds.set(i, n === 1 ? base : `${base}-${n}`);
    });
  }

  // Top-level sections only. Listing subheadings as well was tried and reversed:
  // it repeated each one's text on the page and turned a 7-entry contents box
  // into a 12-entry one, which is more to read past, not less. Subheadings keep
  // their ids, so they remain linkable from anywhere.
  const tocHeadings = post.tableOfContents
    ? post.content
        .map((s, i) => ({ s, i }))
        .filter(({ s }) => s.type === 'heading' && s.text)
        .map(({ s, i }) => ({ id: headingIds.get(i)!, text: s.text!, sub: false }))
    : [];

  const firstParagraphIndex = post.content.findIndex((s) => s.type === 'paragraph');
  const firstHeadingIndex = post.content.findIndex((s) => s.type === 'heading');

  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title={`${post.title} | ${t.siteName}`}
        description={post.metaDescription}
        canonical={`https://remoteyogacoach.com/blog/${post.slug}`}
        ogType="article"
        ogImage={post.heroImage ? `https://remoteyogacoach.com${post.heroImage.src}` : undefined}
        ogLocale={lang === 'sv' ? 'sv_SE' : 'en_GB'}
        lang={lang}
        structuredData={structuredData}
      />
      <Navbar />
      <main className="pt-32 md:pt-44">
        <div className={WRAP}>
          <Link to="/blog" className="text-[14px] text-charcoal/60 hover:text-clay transition-colors">
            {t.back}
          </Link>

          <article>
            <header className="mt-8 max-w-[960px]">
              <p className="text-[14px] md:text-[15px] text-charcoal/60">
                {post.category} · {post.readingTime} {t.reading}
              </p>
              <h1 className="mt-4 font-fraunces font-normal text-heading text-[2.4rem] sm:text-[3rem] lg:text-[3.8rem] leading-[1.05] tracking-[-0.022em] max-w-[22ch] [text-wrap:balance]">
                {softenAmp(post.title)}
              </h1>
            </header>

            {/* Contents sit in a sticky right-hand column on wide screens and
                above the text on phones. One element, placed by the grid. */}
            <div className="mt-12 md:mt-16 border-t border-sage-light pt-10 md:pt-14 lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20 xl:gap-28">
              {tocHeadings.length > 1 && (
                <aside className="mb-10 lg:mb-0 lg:col-start-2 lg:row-start-1">
                  <nav aria-label={t.tocLabel} className="lg:sticky lg:top-28">
                    <p className="font-fraunces text-heading text-[1.3rem] mb-3">{t.tocLabel}</p>
                    <ol className="border-t border-sage-light">
                      {tocHeadings.map((h) => (
                        <li key={h.id} className="border-b border-sage-light">
                          <a
                            href={`#${h.id}`}
                            className="block py-2.5 text-[15px] leading-snug text-charcoal/75 hover:text-clay transition-colors"
                          >
                            {softenAmp(h.text)}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </aside>
              )}

              <div className="max-w-[680px] lg:col-start-1 lg:row-start-1">
                {/* heroImage was typed on BlogPost and wired to the OG tag, but never
                    actually shown on the page. No post sets it yet, so this stays
                    inert until there is a photo worth putting there. */}
                {post.heroImage && (
                  <Figure src={post.heroImage.src} alt={post.heroImage.alt} ratio="3/2" className="mt-0 mb-10" />
                )}

              {post.content.map((section, i) => {
                if (section.type === 'heading') {
                  const id = section.text ? headingIds.get(i) : undefined;
                  const isFirstH2 = i === firstHeadingIndex;
                  return (
                    <h2
                      key={i}
                      id={id}
                      className={`font-fraunces text-[2rem] md:text-[2.5rem] text-dalashala-earth scroll-mt-24 tracking-[-0.025em] leading-[1.08] mb-8 ${isFirstH2 ? 'mt-14' : 'mt-20 md:mt-24'}`}
                      style={{ fontWeight: 400, fontVariationSettings: "'opsz' 96, 'SOFT' 60" }}
                    >
                      {section.text && softenAmp(section.text)}
                    </h2>
                  );
                }
                if (section.type === 'subheading') {
                  return (
                    <h3
                      key={i}
                      id={section.text ? headingIds.get(i) : undefined}
                      className="font-fraunces text-2xl md:text-[1.75rem] text-dalashala-earth scroll-mt-24 mt-12 mb-3 tracking-[-0.02em] leading-snug"
                      style={{ fontWeight: 400, fontVariationSettings: "'opsz' 48, 'SOFT' 50" }}
                    >
                      {section.text && softenAmp(section.text)}
                    </h3>
                  );
                }
                if (section.type === 'list' && section.items) {
                  return (
                    <ul key={i} className="my-6 space-y-3 pl-4">
                      {section.items.map((item, j) => (
                        <li
                          key={j}
                          className="font-inter font-normal text-lg md:text-xl text-dalashala-earth/90 leading-relaxed flex gap-3"
                        >
                          <span className="text-dalashala-earth mt-1.5 text-sm">–</span>
                          <span>{renderInline(item)}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (section.type === 'callout' && section.text) {
                  return (
                    <aside
                      key={i}
                      className="bg-dalashala-creamDeep/70 border-l-[3px] border-clay rounded-r-xl px-6 py-5 my-9"
                    >
                      <p className="font-inter text-lg md:text-xl text-dalashala-earth leading-relaxed">
                        {renderInline(section.text)}
                      </p>
                    </aside>
                  );
                }
                if (section.type === 'cta' && section.text) {
                  const href = section.ctaHref;
                  const isExternal = href ? /^https?:\/\//.test(href) : false;
                  return (
                    <aside
                      key={i}
                      className="bg-dalashala-meadow/30 border border-dalashala-meadow rounded-2xl px-6 md:px-8 py-6 md:py-7 my-10"
                    >
                      <p className="font-inter text-base md:text-lg text-dalashala-earth leading-relaxed">
                        {renderInline(section.text)}
                      </p>
                      {href && section.ctaLabel && (
                        isExternal ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-5 bg-clay text-white hover:bg-clayDark transition-colors font-inter py-3 px-7 rounded-full text-[15px] font-medium"
                          >
                            {section.ctaLabel}
                          </a>
                        ) : (
                          <Link
                            to={href}
                            className="inline-block mt-5 bg-clay text-white hover:bg-clayDark transition-colors font-inter py-3 px-7 rounded-full text-[15px] font-medium"
                          >
                            {section.ctaLabel}
                          </Link>
                        )
                      )}
                    </aside>
                  );
                }
                if (section.type === 'image' && section.image) {
                  return (
                    <Figure
                      key={i}
                      src={section.image.src}
                      alt={section.image.alt}
                      caption={section.image.caption}
                    />
                  );
                }
                if (section.type === 'quote' && section.text) {
                  return (
                    <blockquote
                      key={i}
                      className="border-l-2 border-clay pl-6 md:pl-7 my-10"
                    >
                      <p className="font-fraunces text-2xl md:text-[1.75rem] text-dalashala-earth leading-snug tracking-[-0.015em]" style={{ fontWeight: 400 }}>
                        {section.text}
                      </p>
                      {section.author && (
                        <footer className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-clay mt-4 not-italic">
                          {section.author}
                        </footer>
                      )}
                    </blockquote>
                  );
                }
                if (section.type === 'table' && section.tableHead && section.tableRows) {
                  return (
                    <div key={i} className="my-8 overflow-x-auto -mx-2 md:mx-0">
                      <table className="w-full text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="bg-dalashala-earth text-white">
                            {section.tableHead.map((h, j) => (
                              <th
                                key={j}
                                className="font-inter text-[13px] font-semibold text-left px-4 py-3"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.tableRows.map((row, j) => (
                            <tr
                              key={j}
                              className="border-b border-dalashala-meadow/50 last:border-b-0"
                            >
                              {row.map((cell, k) => (
                                <td
                                  key={k}
                                  className="font-inter text-dalashala-earth/90 px-4 py-3"
                                >
                                  {renderInline(cell)}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                if (section.type === 'faq' && section.faqItems) {
                  return (
                    <div key={i} className="my-10">
                      <GuideFAQ items={section.faqItems.map((f) => [f.q, f.a] as [string, string])} />
                    </div>
                  );
                }
                const isLeadParagraph = i === firstParagraphIndex;
                return (
                  <p
                    key={i}
                    className={
                      isLeadParagraph
                        ? "font-inter font-normal text-xl md:text-[1.375rem] text-dalashala-earth leading-[1.5] mb-10"
                        : "font-inter font-normal text-lg md:text-xl text-dalashala-earth/90 leading-relaxed mb-7 last:mb-0"
                    }
                  >
                    {section.text && renderInline(section.text)}
                  </p>
                );
              })}

                {/* Related service: one quiet line. The post's own CTA card already asked. */}
                {post.relatedServiceHref && post.relatedServiceLabel && (
                  <p className="mt-14 pt-8 border-t border-sage-light">
                    <Link
                      to={post.relatedServiceHref}
                      className="inline-flex items-center gap-2 text-clay hover:text-clayDark font-medium text-[16px]"
                    >
                      {post.relatedServiceLabel} <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                )}

                {/* Related posts */}
                {post.relatedPosts && post.relatedPosts.length > 0 && (
                  <div className="mt-10">
                    <p className="font-fraunces text-heading text-[1.3rem] mb-3">{t.related}</p>
                    <ul className="space-y-2.5">
                      {post.relatedPosts.map((rp) => (
                        <li key={rp.slug}>
                          <Link
                            to={`/blog/${rp.slug}`}
                            className="text-heading hover:text-clay underline decoration-sage-light hover:decoration-clay underline-offset-4 text-[17px] leading-snug"
                          >
                            {rp.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </article>
        </div>

        <ClosingCTA
          heading="Try a live class with your team"
          actions={<PillLink to="/demo" variant="light">Book a pilot</PillLink>}
        >
          <p>If you would like to try it, start with a single pilot session.</p>
        </ClosingCTA>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPostPage;
