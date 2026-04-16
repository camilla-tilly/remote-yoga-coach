import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { getBlogPost } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';

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

  return (
    <div className="min-h-screen bg-dalashala-beige relative overflow-x-hidden">
      <SEO
        title={`${post.title} | Yoga med Camilla`}
        description={post.metaDescription}
        canonical={`https://yogawithcamilla.se/blogg/${post.slug}`}
        ogType="article"
        structuredData={structuredData}
      />
      <div className="max-w-[750px] mx-auto">
        <Navbar />
        <main className="pt-24 pb-16 px-4">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              to="/blogg"
              className="font-montserrat text-xs uppercase tracking-wider text-dalashala-mediumBrown hover:text-dalashala-darkBrown transition-colors"
            >
              ← Tillbaka till bloggen
            </Link>
          </div>

          {/* Article Header */}
          <article className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-montserrat text-xs uppercase tracking-wider text-dalashala-mediumBrown bg-dalashala-tan/30 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="font-montserrat text-xs text-dalashala-mediumBrown/60">
                {post.readingTime} läsning
              </span>
            </div>

            <h1 className="font-cinzel text-xl md:text-2xl text-dalashala-darkBrown font-bold mb-6 leading-snug">
              {post.title}
            </h1>

            {/* Article Content */}
            <div className="bg-white rounded-2xl border border-dalashala-tan/20 shadow-sm p-6 md:p-10 mb-8">
              {/* Table of Contents */}
              {tocHeadings.length > 2 && (
                <nav
                  aria-label="Innehåll"
                  className="bg-dalashala-beige/60 border border-dalashala-tan/30 rounded-xl p-4 md:p-5 mb-6"
                >
                  <p className="font-montserrat text-xs uppercase tracking-wider text-dalashala-mediumBrown mb-3">
                    Innehåll
                  </p>
                  <ol className="space-y-1.5">
                    {tocHeadings.map((h, i) => (
                      <li key={h.id} className="font-eb-garamond text-sm text-dalashala-mediumBrown">
                        <a
                          href={`#${h.id}`}
                          className="hover:text-dalashala-darkBrown hover:underline decoration-dalashala-tan underline-offset-2"
                        >
                          {i + 1}. {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {post.content.map((section, i) => {
                if (section.type === 'heading') {
                  const id = section.text ? slugify(section.text) : undefined;
                  return (
                    <h2
                      key={i}
                      id={id}
                      className="font-cinzel text-base md:text-lg text-dalashala-darkBrown font-bold mt-8 mb-4 first:mt-0 scroll-mt-24"
                    >
                      {section.text}
                    </h2>
                  );
                }
                if (section.type === 'subheading') {
                  return (
                    <h3
                      key={i}
                      className="font-cinzel text-sm md:text-base text-dalashala-darkBrown font-bold mt-6 mb-3"
                    >
                      {section.text}
                    </h3>
                  );
                }
                if (section.type === 'list' && section.items) {
                  return (
                    <ul key={i} className="my-4 space-y-2 pl-4">
                      {section.items.map((item, j) => (
                        <li
                          key={j}
                          className="font-eb-garamond text-sm md:text-base text-dalashala-mediumBrown leading-relaxed flex gap-2"
                        >
                          <span className="text-dalashala-darkBrown mt-1">–</span>
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
                      className="bg-dalashala-beige/70 border-l-4 border-dalashala-darkBrown rounded-r-lg px-5 py-4 my-6"
                    >
                      <p className="font-eb-garamond text-sm md:text-base text-dalashala-darkBrown leading-relaxed">
                        {renderInline(section.text)}
                      </p>
                    </aside>
                  );
                }
                if (section.type === 'quote' && section.text) {
                  return (
                    <blockquote
                      key={i}
                      className="border-l-2 border-dalashala-tan pl-5 my-6 italic"
                    >
                      <p className="font-cinzel text-base md:text-lg text-dalashala-darkBrown leading-relaxed">
                        "{section.text}"
                      </p>
                      {section.author && (
                        <footer className="font-montserrat text-xs uppercase tracking-wider text-dalashala-mediumBrown mt-2 not-italic">
                          {section.author}
                        </footer>
                      )}
                    </blockquote>
                  );
                }
                if (section.type === 'table' && section.tableHead && section.tableRows) {
                  return (
                    <div key={i} className="my-6 overflow-x-auto -mx-2 md:mx-0">
                      <table className="w-full text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="bg-dalashala-darkBrown text-dalashala-beige">
                            {section.tableHead.map((h, j) => (
                              <th
                                key={j}
                                className="font-montserrat text-xs uppercase tracking-wider text-left px-3 py-2"
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
                              className="border-b border-dalashala-tan/30 last:border-b-0"
                            >
                              {row.map((cell, k) => (
                                <td
                                  key={k}
                                  className="font-eb-garamond text-dalashala-mediumBrown px-3 py-2.5"
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
                    <dl key={i} className="my-6 space-y-3">
                      {section.faqItems.map((item, j) => (
                        <details
                          key={j}
                          className="group bg-dalashala-beige/40 border border-dalashala-tan/30 rounded-xl px-4 py-3 open:bg-dalashala-beige/70 transition-colors"
                        >
                          <summary className="font-cinzel text-sm md:text-base text-dalashala-darkBrown font-bold cursor-pointer list-none flex justify-between items-center gap-3">
                            <span>{item.q}</span>
                            <span className="text-dalashala-mediumBrown text-lg transition-transform group-open:rotate-45">
                              +
                            </span>
                          </summary>
                          <dd className="font-eb-garamond text-sm md:text-base text-dalashala-mediumBrown leading-relaxed mt-3">
                            {renderInline(item.a)}
                          </dd>
                        </details>
                      ))}
                    </dl>
                  );
                }
                return (
                  <p
                    key={i}
                    className="font-eb-garamond text-sm md:text-base text-dalashala-mediumBrown leading-relaxed mb-4 last:mb-0"
                  >
                    {section.text && renderInline(section.text)}
                  </p>
                );
              })}
            </div>

            {/* CTA to related service */}
            {post.relatedServiceHref && post.relatedServiceLabel && (
              <div className="bg-dalashala-darkBrown rounded-2xl p-6 md:p-8 text-center mb-8">
                <p className="font-eb-garamond text-dalashala-beige/80 text-sm mb-4">
                  Intresserad av att boka?
                </p>
                <Button
                  className="bg-dalashala-beige text-dalashala-darkBrown hover:bg-dalashala-beige/90 font-montserrat py-2 px-8 rounded-full uppercase tracking-wide text-xs"
                  asChild
                >
                  <Link to={post.relatedServiceHref}>{post.relatedServiceLabel}</Link>
                </Button>
              </div>
            )}

            {/* Related posts */}
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <div className="mb-8">
                <p className="font-montserrat text-xs uppercase tracking-wider text-dalashala-mediumBrown mb-3">
                  Läs också
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.relatedPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      to={`/blogg/${rp.slug}`}
                      className="font-montserrat text-xs bg-white border border-dalashala-tan/40 text-dalashala-darkBrown px-4 py-2 rounded-full hover:bg-dalashala-darkBrown hover:text-dalashala-beige transition-colors"
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
                className="font-montserrat text-xs uppercase tracking-wider text-dalashala-mediumBrown hover:text-dalashala-darkBrown transition-colors"
              >
                ← Fler artiklar
              </Link>
            </div>
          </article>
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPostPage;
