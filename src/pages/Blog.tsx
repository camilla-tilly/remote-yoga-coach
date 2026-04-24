import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import Logo from '@/components/Logo';
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
  const [leadPost, ...restPosts] = blogPosts;

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <SEO
        title="Blogg – Yoga, Events & Välmående | Yoga med Camilla"
        description="Artiklar om yoga för möhippa, bröllop, konferens och utomhusyoga i Dalarna och Stockholm. Tips och inspiration från yogalärare Camilla."
        canonical="https://yogawithcamilla.se/blogg"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header — display-forward with Om mark watermark */}
        <header className="relative text-center px-4 pt-10 pb-14 mb-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <Logo size={48} variant="pine" className="rounded-xl shadow-card" />
            </div>
            <p className="font-inter text-[11px] md:text-xs uppercase tracking-[0.34em] text-dalashala-honeyDeep font-semibold mb-6">
              Inspiration &amp; Information
            </p>
            <h1 className="font-cormorant font-semibold text-6xl md:text-7xl lg:text-[5.5rem] text-dalashala-earth tracking-tight mb-6 leading-[1.02]">
              Blogg
            </h1>
            <span className="block mx-auto w-16 h-[3px] bg-dalashala-honey mb-6 rounded-full" aria-hidden="true" />
            <p className="font-inter font-normal text-lg md:text-xl text-dalashala-earth/85 max-w-xl mx-auto leading-relaxed">
              Tankar om yoga, natur, events och välmående från stugan i Dalarna.
            </p>
          </div>
        </header>

        {/* Lead post — big, featured */}
        {leadPost && (
          <section className="px-4 mb-20">
            <Link
              to={`/blogg/${leadPost.slug}`}
              className="group block max-w-5xl mx-auto relative overflow-hidden rounded-[28px] bg-gradient-to-br from-dalashala-creamDeep via-white to-dalashala-meadowLight/60 border border-dalashala-meadow/70 hover:border-dalashala-olive/70 shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {leadPost.heroImage && (
                  <div className="md:col-span-2 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={leadPost.heroImage.src}
                      alt={leadPost.heroImage.alt}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      loading="eager"
                    />
                  </div>
                )}
                <div className={`p-8 md:p-12 lg:p-14 flex flex-col justify-center ${leadPost.heroImage ? 'md:col-span-3' : 'md:col-span-5'}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-inter text-[10px] uppercase tracking-[0.32em] text-white bg-dalashala-honeyDeep px-3 py-1 rounded-full font-semibold">
                      Utvald
                    </span>
                    <span className="font-inter text-[11px] uppercase tracking-[0.28em] text-dalashala-olive font-semibold">
                      {leadPost.category}
                    </span>
                  </div>
                  <h2 className="font-cormorant font-semibold text-3xl md:text-4xl lg:text-[2.75rem] text-dalashala-earth mb-5 leading-[1.08] tracking-tight group-hover:text-dalashala-earthSoft transition-colors">
                    {leadPost.title}
                  </h2>
                  <p className="font-inter font-normal text-base md:text-lg text-dalashala-earth/85 leading-relaxed mb-6">
                    {leadPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 font-inter text-xs uppercase tracking-[0.22em] font-semibold">
                    <span className="inline-flex items-center gap-2 text-dalashala-honeyDeep group-hover:text-dalashala-earth transition-colors">
                      Läs artikeln
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                    <span className="w-8 h-px bg-dalashala-meadow" />
                    <span className="text-dalashala-earth/70">{leadPost.readingTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Section divider */}
        {restPosts.length > 0 && (
          <div className="max-w-[820px] mx-auto px-4 mb-10">
            <div className="flex items-center justify-center gap-5">
              <span className="flex-1 h-px bg-dalashala-meadow/70" aria-hidden="true" />
              <p className="font-inter text-[11px] uppercase tracking-[0.32em] text-dalashala-olive font-semibold">
                Fler inlägg
              </p>
              <span className="flex-1 h-px bg-dalashala-meadow/70" aria-hidden="true" />
            </div>
          </div>
        )}

        {/* Rest of posts — tighter list */}
        <div className="max-w-[820px] mx-auto px-4 sm:px-6">
          <div className="divide-y divide-dalashala-meadow/60 border-y border-dalashala-meadow/60">
            {restPosts.map((post) => (
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
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
