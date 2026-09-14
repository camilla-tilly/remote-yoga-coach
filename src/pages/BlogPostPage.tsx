import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { getBlogPost } from '@/data/blogPosts';
import { softenAmp } from '@/lib/amp';
import { GuideFAQ, Figure } from '@/components/GuideLayout';

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
      <main className="pt-28 pb-16 px-4">
        {/* Breadcrumb */}
        <div className="max-w-[860px] mx-auto mb-8">
          <Link
            to="/blog"
            className="font-mono text-[12px] text-charcoal/55 hover:text-clay transition-colors"
          >
            {t.back}
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-[620px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-clay">
              {post.category}
            </span>
            <span className="w-8 h-px bg-dalashala-meadow" />
            <span className="font-inter text-sm text-dalashala-earth/70">
              {post.readingTime} {t.reading}
            </span>
          </div>

          <h1 className="font-fraunces font-normal text-[2.4rem] md:text-[3.25rem] text-dalashala-earth mb-10 leading-[1.08] tracking-[-0.02em]">
            {softenAmp(post.title)}
          </h1>

          {/* heroImage was typed on BlogPost and wired to the OG tag, but never
              actually shown on the page. No post sets it yet, so this stays
              inert until there is a photo worth putting there. */}
          {post.heroImage && (
            <Figure src={post.heroImage.src} alt={post.heroImage.alt} ratio="3/2" className="mt-0 mb-10" />
          )}

          {/* Article Content */}
          <div className="mb-12">
              {/* Table of Contents */}
              {tocHeadings.length > 1 && (
                <nav
                  aria-label={t.tocLabel}
                  className="bg-dalashala-creamDeep/70 border border-dalashala-meadow/50 rounded-xl p-5 md:p-6 mb-10"
                >
                  <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-clay mb-4">
                    {t.tocLabel}
                  </p>
                  <ol className="space-y-2">
                    {tocHeadings.map((h, i) => (
                      <li
                        key={h.id}
                        className={
                          h.sub
                            ? 'font-inter text-[0.875rem] text-dalashala-earth/75 pl-5'
                            : 'font-inter text-[0.9375rem] text-dalashala-earth'
                        }
                      >
                        <a
                          href={`#${h.id}`}
                          className="hover:text-clay hover:underline decoration-clay/40 underline-offset-2"
                        >
                          {h.sub ? '' : `${tocHeadings.slice(0, i + 1).filter((x) => !x.sub).length}. `}
                          {softenAmp(h.text)}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
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
          </div>

          {/* Related service: one quiet line. The post's own CTA card already asked. */}
          {post.relatedServiceHref && post.relatedServiceLabel && (
            <p className="mt-14 pt-8 border-t border-dalashala-meadow/60">
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
            <div className="mt-10 mb-6">
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-clay mb-3">
                {t.related}
              </p>
              <ul className="space-y-2.5">
                {post.relatedPosts.map((rp) => (
                  <li key={rp.slug}>
                    <Link
                      to={`/blog/${rp.slug}`}
                      className="text-dalashala-earth hover:text-clay underline decoration-dalashala-meadow hover:decoration-clay underline-offset-4 text-[17px] leading-snug"
                    >
                      {rp.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </article>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPostPage;
