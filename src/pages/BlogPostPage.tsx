import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { getBlogPost } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { softenAmp } from '@/lib/amp';

// Parse inline markdown links [label](/path) and return React children.
// Supports both internal links (starting with "/") and external (starting with "http").
const renderInline = (text: string) => {
  const parts: (string | JSX.Element)[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    if (href.startsWith('/')) {
      parts.push(
        <Link
          key={`lnk-${key++}`}
          to={href}
          className="text-dalashala-darkBrown underline decoration-dalashala-tan hover:decoration-dalashala-darkBrown underline-offset-2"
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
          className="text-dalashala-darkBrown underline decoration-dalashala-tan hover:decoration-dalashala-darkBrown underline-offset-2"
        >
          {label}
        </a>
      );
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

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/blogg" replace />;
  }

  const structuredData: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.publishDate,
      url: `https://yogawithcamilla.se/blogg/${post.slug}`,
      author: {
        '@type': 'Person',
        name: 'Camilla',
        url: 'https://yogawithcamilla.se',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Yoga med Camilla',
        url: 'https://yogawithcamilla.se',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Hem',
          item: 'https://yogawithcamilla.se',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blogg',
          item: 'https://yogawithcamilla.se/blogg',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: `https://yogawithcamilla.se/blogg/${post.slug}`,
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

  // Build table of contents from H2 headings
  const tocHeadings = post.tableOfContents
    ? post.content
        .filter((s) => s.type === 'heading' && s.text)
        .map((s) => ({ id: slugify(s.text!), text: s.text! }))
    : [];

  // Pre-compute indices for lead-element styling and H2 chapter numbering
  const firstParagraphIndex = post.content.findIndex((s) => s.type === 'paragraph');
  const firstCalloutIndex = post.content.findIndex((s) => s.type === 'callout');
  const h2NumberByIndex: Record<number, number> = {};
  let h2Counter = 0;
  post.content.forEach((s, i) => {
    if (s.type === 'heading') {
      h2Counter += 1;
      h2NumberByIndex[i] = h2Counter;
    }
  });

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <SEO
        title={`${post.title} | Yoga med Camilla`}
        description={post.metaDescription}
        canonical={`https://yogawithcamilla.se/blogg/${post.slug}`}
        ogType="article"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="pt-28 pb-16 px-4">
        {/* Breadcrumb */}
        <div className="max-w-[860px] mx-auto mb-8">
          <Link
            to="/blogg"
            className="font-inter text-xs uppercase tracking-[0.32em] text-dalashala-olive hover:text-dalashala-earth transition-colors font-bold"
          >
            ← Tillbaka till bloggen
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-[680px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-inter text-xs uppercase tracking-[0.32em] text-dalashala-olive font-bold">
              {post.category}
            </span>
            <span className="w-8 h-px bg-dalashala-meadow" />
            <span className="font-inter text-sm text-dalashala-earth/70">
              {post.readingTime} läsning
            </span>
          </div>

          <h1 className="font-fraunces text-5xl md:text-6xl lg:text-[4.5rem] text-dalashala-earth mb-10 leading-[1] tracking-[-0.03em]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
            {softenAmp(post.title)}
          </h1>

          {/* Article Content */}
          <div className="mb-12">
              {/* Table of Contents */}
              {tocHeadings.length > 2 && (
                <nav
                  aria-label="Innehåll"
                  className="bg-dalashala-creamDeep/70 border border-dalashala-meadow/50 rounded-xl p-5 md:p-6 mb-10"
                >
                  <p className="font-inter text-xs uppercase tracking-[0.32em] text-dalashala-olive font-bold mb-4">
                    Innehåll
                  </p>
                  <ol className="space-y-2">
                    {tocHeadings.map((h, i) => (
                      <li key={h.id} className="font-inter text-[0.9375rem] text-dalashala-earth">
                        <a
                          href={`#${h.id}`}
                          className="hover:text-dalashala-earthSoft hover:underline decoration-dalashala-meadow underline-offset-2"
                        >
                          {i + 1}. {softenAmp(h.text)}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {post.content.map((section, i) => {
                if (section.type === 'heading') {
                  const id = section.text ? slugify(section.text) : undefined;
                  const number = h2NumberByIndex[i];
                  const isFirstH2 = number === 1;
                  return (
                    <header
                      key={i}
                      className={`mb-8 ${isFirstH2 ? 'mt-14' : 'mt-20 md:mt-24'}`}
                    >
                      {!isFirstH2 && (
                        <span
                          className="block w-10 h-px bg-dalashala-meadow/70 mb-6"
                          aria-hidden="true"
                        />
                      )}
                      <p className="font-inter text-xs uppercase tracking-[0.32em] text-dalashala-olive font-bold mb-4">
                        {String(number).padStart(2, '0')} — Kapitel
                      </p>
                      <h2
                        id={id}
                        className="font-fraunces text-[2rem] md:text-[2.5rem] text-dalashala-earth scroll-mt-24 tracking-[-0.025em] leading-[1.08]"
                        style={{ fontWeight: 400, fontVariationSettings: "'opsz' 96, 'SOFT' 60" }}
                      >
                        {section.text && softenAmp(section.text)}
                      </h2>
                    </header>
                  );
                }
                if (section.type === 'subheading') {
                  return (
                    <h3
                      key={i}
                      className="font-fraunces text-2xl md:text-[1.75rem] text-dalashala-earth mt-12 mb-3 tracking-[-0.02em] leading-snug"
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
                  const isFirstCallout = i === firstCalloutIndex;
                  return (
                    <aside
                      key={i}
                      className="bg-dalashala-creamDeep/70 border-l-[3px] border-dalashala-earth rounded-r-xl px-6 py-5 my-8"
                    >
                      {isFirstCallout && (
                        <p className="font-inter text-xs uppercase tracking-[0.32em] text-dalashala-olive font-bold mb-3">
                          I korthet
                        </p>
                      )}
                      <p className="font-inter text-base md:text-lg text-dalashala-earth leading-relaxed">
                        {renderInline(section.text)}
                      </p>
                    </aside>
                  );
                }
                if (section.type === 'quote' && section.text) {
                  return (
                    <blockquote
                      key={i}
                      className="border-l-2 border-dalashala-olive pl-8 my-12"
                    >
                      <p className="font-fraunces italic text-2xl md:text-[1.75rem] text-dalashala-earth leading-[1.35] tracking-[-0.01em]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 72, 'SOFT' 100" }}>
                        {section.text}
                      </p>
                      {section.author && (
                        <footer className="font-inter text-xs uppercase tracking-[0.32em] text-dalashala-olive font-bold mt-4 not-italic">
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
                                className="font-inter text-xs uppercase tracking-[0.2em] font-bold text-left px-4 py-3"
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
                    <dl key={i} className="my-10 divide-y divide-dalashala-meadow/60 border-y border-dalashala-meadow/60">
                      {section.faqItems.map((item, j) => (
                        <details
                          key={j}
                          className="group py-5"
                        >
                          <summary className="font-inter text-base md:text-lg text-dalashala-earth font-semibold cursor-pointer list-none flex justify-between items-center gap-3 hover:text-dalashala-earthSoft transition-colors">
                            <span>{softenAmp(item.q)}</span>
                            <span className="text-dalashala-olive text-2xl font-light transition-transform group-open:rotate-45 shrink-0">
                              +
                            </span>
                          </summary>
                          <dd className="font-inter font-normal text-base md:text-lg text-dalashala-earth/90 leading-relaxed mt-4">
                            {renderInline(item.a)}
                          </dd>
                        </details>
                      ))}
                    </dl>
                  );
                }
                const isLeadParagraph = i === firstParagraphIndex;
                return (
                  <p
                    key={i}
                    className={
                      isLeadParagraph
                        ? "font-inter font-normal text-xl md:text-2xl text-dalashala-earth leading-[1.45] mb-10 first-letter:font-fraunces first-letter:float-left first-letter:text-[3.5rem] md:first-letter:text-[4.5rem] first-letter:leading-[0.85] first-letter:pr-3 first-letter:pt-1 first-letter:text-dalashala-earth"
                        : "font-inter font-normal text-lg md:text-xl text-dalashala-earth/90 leading-relaxed mb-7 last:mb-0"
                    }
                  >
                    {section.text && renderInline(section.text)}
                  </p>
                );
              })}
          </div>

          {/* CTA to related service */}
          {post.relatedServiceHref && post.relatedServiceLabel && (
            <div className="border-t border-b border-dalashala-meadow/60 py-14 text-center my-14">
              <p className="font-inter text-base md:text-lg text-dalashala-earth/80 mb-7">
                Intresserad av att boka?
              </p>
              <Button
                className="bg-dalashala-earth text-white hover:bg-dalashala-earthSoft hover:-translate-y-0.5 font-inter py-4 px-10 rounded-full uppercase tracking-[0.22em] text-sm font-semibold transition-all shadow-card"
                asChild
              >
                <Link to={post.relatedServiceHref}>{post.relatedServiceLabel}</Link>
              </Button>
            </div>
          )}

          {/* Related posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mb-10">
              <p className="font-inter text-xs uppercase tracking-[0.32em] text-dalashala-olive font-bold mb-5">
                Läs också
              </p>
              <div className="flex flex-wrap gap-3">
                {post.relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/blogg/${rp.slug}`}
                    className="font-inter text-sm font-semibold uppercase tracking-[0.18em] bg-white border border-dalashala-meadow/80 text-dalashala-earth px-5 py-3 rounded-full hover:border-dalashala-earth hover:bg-dalashala-earth hover:text-white transition-all"
                  >
                    {rp.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to blog */}
          <div className="text-center">
            <Link
              to="/blogg"
              className="font-inter text-xs uppercase tracking-[0.32em] text-dalashala-olive hover:text-dalashala-earth font-bold transition-colors"
            >
              ← Fler artiklar
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPostPage;
