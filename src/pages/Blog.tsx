import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import Logo from '@/components/Logo';
import { blogPosts, type BlogLanguage } from '@/data/blogPosts';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Yoga med Camilla – Blogg",
  "description": "Artiklar om yoga, events, möhippa, bröllop, SUP yoga och utomhusyoga i Stockholm.",
  "url": "https://yogawithcamilla.se/blogg",
  "publisher": {
    "@type": "Person",
    "name": "Camilla",
    "url": "https://yogawithcamilla.se"
  }
};

const copy = {
  sv: {
    eyebrow: 'Inspiration & Information',
    heading: 'Blogg',
    intro: 'Tankar om yoga, natur, events och välmående i Stockholm.',
    featured: 'Utvald',
    morePosts: 'Fler inlägg',
    readArticle: 'Läs artikeln',
    readMore: 'Läs mer',
    reading: 'läsning',
    toggleLabel: 'Språk',
    seoTitle: 'Blogg – Yoga, Events & Välmående | Yoga med Camilla',
    seoDescription: 'Artiklar om yoga för möhippa, bröllop, konferens och utomhusyoga i Stockholm. Tips och inspiration från yogalärare Camilla.',
  },
  en: {
    eyebrow: 'Inspiration & Information',
    heading: 'Blog',
    intro: 'Notes on yoga, nature, events and slow living in Stockholm.',
    featured: 'Featured',
    morePosts: 'More posts',
    readArticle: 'Read article',
    readMore: 'Read more',
    reading: 'read',
    toggleLabel: 'Language',
    seoTitle: 'Blog – Yoga, Events & Wellbeing | Yoga with Camilla',
    seoDescription: 'Articles on yoga for hen parties, weddings, corporate events and outdoor yoga in Stockholm. Tips and inspiration from yoga teacher Camilla.',
  },
} as const;

const categoryLabels: Record<BlogLanguage, Record<string, string>> = {
  sv: {},
  en: {
    'Events & Möhippa': 'Events & Hen Party',
    'Företag & Konferens': 'Corporate & Conference',
    'Bröllop & Events': 'Weddings & Events',
    'SUP Yoga': 'SUP Yoga',
    'Yoga & Natur': 'Yoga & Nature',
    'Retreats & Upplevelser': 'Retreats & Experiences',
    'Yoga Retreat': 'Yoga Retreat',
    'Stockholm & Travel': 'Stockholm & Travel',
    'Expat & English': 'Expat & English',
    'Personligt': 'Personal',
  },
};

const Blog = () => {
  const [language, setLanguage] = useState<BlogLanguage>('sv');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem('blogLanguage') as BlogLanguage | null;
    if (stored === 'sv' || stored === 'en') {
      setLanguage(stored);
      return;
    }
    const browserLang = window.navigator.language?.toLowerCase() ?? '';
    if (!browserLang.startsWith('sv')) {
      setLanguage('en');
    }
  }, []);

  const handleLanguageChange = (next: BlogLanguage) => {
    setLanguage(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('blogLanguage', next);
    }
  };

  const filteredPosts = blogPosts.filter((post) => (post.language ?? 'sv') === language);
  const [leadPost, ...restPosts] = filteredPosts;
  const t = copy[language];

  const localizedCategory = (category: string) =>
    categoryLabels[language][category] ?? category;

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <SEO
        title={t.seoTitle}
        description={t.seoDescription}
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
            <p className="font-inter text-sm md:text-base uppercase tracking-[0.42em] text-dalashala-olive font-bold mb-8">
              {t.eyebrow}
            </p>
            <h1 className="font-fraunces text-7xl md:text-8xl lg:text-[8rem] text-dalashala-earth tracking-[-0.03em] mb-8 leading-[0.95]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
              {t.heading}
            </h1>
            <span className="block mx-auto w-20 h-[2px] bg-dalashala-earth/60 mb-8 rounded-full" aria-hidden="true" />
            <p className="font-inter font-normal text-xl md:text-2xl text-dalashala-earth/85 max-w-xl mx-auto leading-relaxed">
              {t.intro}
            </p>

            <div
              role="tablist"
              aria-label={t.toggleLabel}
              className="mt-10 inline-flex items-center gap-1 p-1 rounded-full border border-dalashala-meadow/70 bg-dalashala-creamDeep/40"
            >
              <button
                role="tab"
                aria-selected={language === 'sv'}
                onClick={() => handleLanguageChange('sv')}
                className={`px-5 py-2 rounded-full font-inter text-xs uppercase tracking-[0.28em] font-bold transition-colors ${
                  language === 'sv'
                    ? 'bg-dalashala-earth text-white'
                    : 'text-dalashala-earth/70 hover:text-dalashala-earth'
                }`}
              >
                Svenska
              </button>
              <button
                role="tab"
                aria-selected={language === 'en'}
                onClick={() => handleLanguageChange('en')}
                className={`px-5 py-2 rounded-full font-inter text-xs uppercase tracking-[0.28em] font-bold transition-colors ${
                  language === 'en'
                    ? 'bg-dalashala-earth text-white'
                    : 'text-dalashala-earth/70 hover:text-dalashala-earth'
                }`}
              >
                English
              </button>
            </div>
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
                <div className={`p-10 md:p-14 lg:p-16 flex flex-col justify-center ${leadPost.heroImage ? 'md:col-span-3' : 'md:col-span-5'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-inter text-[10px] uppercase tracking-[0.36em] text-white bg-dalashala-earth px-3.5 py-1 rounded-full font-bold">
                      {t.featured}
                    </span>
                    <span className="font-inter text-[11px] uppercase tracking-[0.32em] text-dalashala-olive font-bold">
                      {localizedCategory(leadPost.category)}
                    </span>
                  </div>
                  <h2 className="font-fraunces text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-dalashala-earth mb-6 leading-[1.02] tracking-[-0.025em] [word-spacing:0.05em] group-hover:text-dalashala-earthSoft transition-colors" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
                    {leadPost.title}
                  </h2>
                  <p className="font-inter font-normal text-lg md:text-xl text-dalashala-earth/85 leading-relaxed mb-8">
                    {leadPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 font-inter text-xs uppercase tracking-[0.24em] font-semibold">
                    <span className="inline-flex items-center gap-2 text-dalashala-earth group-hover:gap-3 transition-all">
                      {t.readArticle}
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
          <div className="max-w-[860px] mx-auto px-4 mb-12">
            <div className="flex items-center justify-center gap-6">
              <span className="flex-1 h-px bg-dalashala-meadow/70" aria-hidden="true" />
              <p className="font-inter text-xs uppercase tracking-[0.4em] text-dalashala-olive font-bold">
                {t.morePosts}
              </p>
              <span className="flex-1 h-px bg-dalashala-meadow/70" aria-hidden="true" />
            </div>
          </div>
        )}

        {/* Rest of posts — tighter list */}
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <div className="divide-y divide-dalashala-meadow/60 border-y border-dalashala-meadow/60">
            {restPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blogg/${post.slug}`}
                className="block py-10 md:py-12 group hover:pl-2 transition-[padding] duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-inter text-xs uppercase tracking-[0.32em] text-dalashala-olive font-bold">
                    {localizedCategory(post.category)}
                  </span>
                  <span className="w-8 h-px bg-dalashala-meadow" />
                  <span className="font-inter text-sm text-dalashala-earth/80">
                    {post.readingTime} {t.reading}
                  </span>
                </div>
                <h2 className="font-fraunces text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] text-dalashala-earth mb-4 group-hover:text-dalashala-earthSoft transition-colors leading-[1.06] tracking-[-0.02em] [word-spacing:0.04em]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 96, 'SOFT' 60" }}>
                  {post.title}
                </h2>
                <p className="font-inter font-normal text-lg md:text-xl text-dalashala-earth/85 leading-relaxed mb-5 max-w-2xl">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 font-inter text-xs uppercase tracking-[0.24em] font-semibold text-dalashala-earth group-hover:gap-3 transition-all">
                  {t.readMore}
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
