import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { getBlogPost } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/blogg" replace />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": post.publishDate,
    "url": `https://yogawithcamilla.se/blogg/${post.slug}`,
    "author": {
      "@type": "Person",
      "name": "Camilla",
      "url": "https://yogawithcamilla.se"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Yoga med Camilla",
      "url": "https://yogawithcamilla.se"
    }
  };

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
              {post.content.map((section, i) => {
                if (section.type === 'heading') {
                  return (
                    <h2
                      key={i}
                      className="font-cinzel text-base md:text-lg text-dalashala-darkBrown font-bold mt-8 mb-4 first:mt-0"
                    >
                      {section.text}
                    </h2>
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
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p
                    key={i}
                    className="font-eb-garamond text-sm md:text-base text-dalashala-mediumBrown leading-relaxed mb-4 last:mb-0"
                  >
                    {section.text}
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
