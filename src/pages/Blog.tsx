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
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <SEO
        title="Blogg – Yoga, Events & Välmående | Yoga med Camilla"
        description="Artiklar om yoga för möhippa, bröllop, konferens och utomhusyoga i Dalarna och Stockholm. Tips och inspiration från yogalärare Camilla."
        canonical="https://yogawithcamilla.se/blogg"
        structuredData={structuredData}
      />
      <div className="max-w-[820px] mx-auto">
        <Navbar />
        <main className="pt-28 pb-20 px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-inter text-xs md:text-sm uppercase tracking-[0.32em] text-dalashala-olive font-medium mb-5">
              Inspiration & Information
            </p>
            <h1 className="font-cormorant font-semibold text-5xl md:text-6xl text-dalashala-earth tracking-tight mb-6 leading-[1.05]">
              Blogg
            </h1>
            <span className="block mx-auto w-14 h-[2px] bg-dalashala-honey mb-6 opacity-90 rounded-full" aria-hidden="true" />
            <p className="font-inter font-normal text-base md:text-lg text-dalashala-earth max-w-md mx-auto leading-relaxed">
              Tankar om yoga, natur, events och välmående från stugan i Dalarna.
            </p>
          </div>

          {/* Post list */}
          <div className="divide-y divide-dalashala-meadow/60 border-y border-dalashala-meadow/60">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blogg/${post.slug}`}
                className="block py-8 md:py-10 group hover:pl-2 transition-[padding] duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-inter text-xs uppercase tracking-[0.28em] text-dalashala-honeyDeep font-semibold">
                    {post.category}
                  </span>
                  <span className="w-8 h-px bg-dalashala-meadow" />
                  <span className="font-inter text-sm text-dalashala-earth/80">
                    {post.readingTime} läsning
                  </span>
                </div>
                <h2 className="font-cormorant font-semibold text-2xl md:text-3xl lg:text-[2rem] text-dalashala-earth mb-3 group-hover:text-dalashala-olive transition-colors leading-snug tracking-tight">
                  {post.title}
                </h2>
                <p className="font-inter font-normal text-base md:text-lg text-dalashala-earth leading-relaxed mb-4 max-w-2xl">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 font-inter text-xs uppercase tracking-[0.22em] font-semibold text-dalashala-honeyDeep group-hover:text-dalashala-earth transition-colors">
                  Läs mer
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
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
