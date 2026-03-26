import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blogPosts';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Yoga med Camilla – Blogg",
  "description": "Artiklar om yoga, events, möhippa, bröllop, SUP yoga och utomhusyoga i Dalarna och Stockholm.",
  "url": "https://yogawithcamilla.se/blogg",
  "publisher": {
    "@type": "Person",
    "name": "Camilla",
    "url": "https://yogawithcamilla.se"
  }
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-dalashala-beige relative overflow-x-hidden">
      <SEO
        title="Blogg – Yoga, Events & Välmående | Yoga med Camilla"
        description="Artiklar om yoga för möhippa, bröllop, konferens och utomhusyoga i Dalarna och Stockholm. Tips och inspiration från yogalärare Camilla."
        canonical="https://yogawithcamilla.se/blogg"
        structuredData={structuredData}
      />
      <div className="max-w-[750px] mx-auto">
        <Navbar />
        <main className="pt-24 pb-16 px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-cinzel text-dalashala-mediumBrown mb-3 block">
              Inspiration & Information
            </span>
            <h1 className="font-cinzel-decorative text-2xl md:text-3xl text-dalashala-darkBrown font-bold mb-4">
              Blogg
            </h1>
            <p className="font-eb-garamond text-sm md:text-base text-dalashala-mediumBrown max-w-md mx-auto leading-relaxed">
              Tankar om yoga, natur, events och välmående från stugan i Dalarna.
            </p>
          </div>

          {/* Post Grid */}
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blogg/${post.slug}`}
                className="block bg-white rounded-2xl border border-dalashala-tan/20 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-montserrat text-xs uppercase tracking-wider text-dalashala-mediumBrown bg-dalashala-tan/30 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="font-montserrat text-xs text-dalashala-mediumBrown/60">
                      {post.readingTime} läsning
                    </span>
                  </div>
                  <h2 className="font-cinzel text-base md:text-lg text-dalashala-darkBrown font-bold mb-3 group-hover:text-dalashala-mediumBrown transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="font-eb-garamond text-sm text-dalashala-mediumBrown leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="font-montserrat text-xs uppercase tracking-wider text-dalashala-darkBrown group-hover:text-dalashala-mediumBrown transition-colors">
                    Läs mer →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
