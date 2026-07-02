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
  "name": "Remote Yoga Coach, Blog",
  "description": "Practical wellbeing for distributed teams: chair yoga, breathing, burnout prevention and honest advice on corporate wellbeing that actually gets used.",
  "url": "https://remoteyogacoach.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Remote Yoga Coach",
    "url": "https://remoteyogacoach.com"
  }
};

const Blog = () => {
  const [leadPost, ...restPosts] = blogPosts;

  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Blog, practical wellbeing for distributed teams | Remote Yoga Coach"
        description="Chair yoga, breathing, burnout prevention and honest advice on corporate wellbeing that distributed teams actually use. From Remote Yoga Coach."
        canonical="https://remoteyogacoach.com/blog"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <header className="relative text-center px-4 pt-10 pb-14 mb-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <Logo size={48} variant="clay" className="rounded-xl" />
            </div>
            <p className="font-inter text-sm md:text-base uppercase tracking-[0.32em] text-clay font-bold mb-8">
              Practical wellbeing for teams
            </p>
            <h1 className="font-fraunces text-6xl md:text-7xl lg:text-8xl text-heading tracking-[-0.03em] mb-8 leading-[0.95]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
              Blog
            </h1>
            <span className="block mx-auto w-20 h-[2px] bg-clay/60 mb-8 rounded-full" aria-hidden="true" />
            <p className="font-inter font-normal text-xl md:text-2xl text-charcoal/80 max-w-xl mx-auto leading-relaxed">
              Chair yoga, breathing, burnout and what actually works for distributed teams.
            </p>
          </div>
        </header>

        {/* Pillar guides */}
        <section className="px-4 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-8">
              <span className="flex-1 h-px bg-sage-light" aria-hidden="true" />
              <p className="font-inter text-xs uppercase tracking-[0.32em] text-sage font-bold">Start with the guides</p>
              <span className="flex-1 h-px bg-sage-light" aria-hidden="true" />
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  to: '/guides/remote-work-burnout',
                  label: 'Remote work burnout',
                  description: 'Signs, causes and prevention for distributed teams, for managers and HR.',
                },
                {
                  to: '/guides/cost-of-employee-burnout',
                  label: 'What burnout costs',
                  description: 'The real cost of burnout and the ROI of fixing it. The business case.',
                },
                {
                  to: '/guides/mindfulness-at-work',
                  label: 'Mindfulness at work',
                  description: 'Does workplace mindfulness work, and how to run it as a team habit.',
                },
              ].map((g) => (
                <Link
                  key={g.to}
                  to={g.to}
                  className="group block bg-cream rounded-2xl border border-sage-light hover:border-clay/60 p-7 transition-colors"
                >
                  <p className="font-inter text-[10px] uppercase tracking-[0.28em] text-sage font-bold mb-3">Guide</p>
                  <h2 className="font-fraunces text-2xl text-heading leading-snug group-hover:text-clay transition-colors" style={{ fontWeight: 500 }}>
                    {g.label}
                  </h2>
                  <p className="font-inter text-[15px] text-charcoal/75 leading-relaxed mt-2.5">{g.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-inter text-xs uppercase tracking-[0.24em] font-semibold text-clay group-hover:gap-3 transition-all">
                    Read the guide
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Lead post */}
        {leadPost && (
          <section className="px-4 mb-20">
            <Link
              to={`/blog/${leadPost.slug}`}
              className="group block max-w-5xl mx-auto relative overflow-hidden rounded-[28px] bg-cream border border-sage-light hover:border-clay/60 shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-inter text-[10px] uppercase tracking-[0.32em] text-white bg-clay px-3.5 py-1 rounded-full font-bold">
                    Featured
                  </span>
                  <span className="font-inter text-[11px] uppercase tracking-[0.28em] text-sage font-bold">
                    {leadPost.category}
                  </span>
                </div>
                <h2 className="font-fraunces text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-heading mb-6 leading-[1.05] tracking-[-0.025em] group-hover:text-clay transition-colors" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
                  {leadPost.title}
                </h2>
                <p className="font-inter font-normal text-lg md:text-xl text-charcoal/80 leading-relaxed mb-8">
                  {leadPost.excerpt}
                </p>
                <div className="flex items-center gap-4 font-inter text-xs uppercase tracking-[0.24em] font-semibold">
                  <span className="inline-flex items-center gap-2 text-clay group-hover:gap-3 transition-all">
                    Read article
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                  <span className="w-8 h-px bg-sage-light" />
                  <span className="text-charcoal/60">{leadPost.readingTime} read</span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Divider */}
        {restPosts.length > 0 && (
          <div className="max-w-[860px] mx-auto px-4 mb-12">
            <div className="flex items-center justify-center gap-6">
              <span className="flex-1 h-px bg-sage-light" aria-hidden="true" />
              <p className="font-inter text-xs uppercase tracking-[0.32em] text-sage font-bold">More posts</p>
              <span className="flex-1 h-px bg-sage-light" aria-hidden="true" />
            </div>
          </div>
        )}

        {/* Rest of posts */}
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <div className="divide-y divide-sage-light border-y border-sage-light">
            {restPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block py-10 md:py-12 group hover:pl-2 transition-[padding] duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-inter text-xs uppercase tracking-[0.28em] text-sage font-bold">
                    {post.category}
                  </span>
                  <span className="w-8 h-px bg-sage-light" />
                  <span className="font-inter text-sm text-charcoal/70">{post.readingTime} read</span>
                </div>
                <h2 className="font-fraunces text-[1.75rem] md:text-[2.25rem] text-heading mb-4 group-hover:text-clay transition-colors leading-[1.08] tracking-[-0.02em]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 96, 'SOFT' 60" }}>
                  {post.title}
                </h2>
                <p className="font-inter font-normal text-lg md:text-xl text-charcoal/80 leading-relaxed mb-5 max-w-2xl">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 font-inter text-xs uppercase tracking-[0.24em] font-semibold text-clay group-hover:gap-3 transition-all">
                  Read more
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
