import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Eyebrow } from '@/components/SiteBlocks';
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

const ALL = 'All posts';

const guides = [
  { to: '/guides/remote-work-burnout', label: 'Remote work burnout', description: 'Signs, causes and prevention.' },
  { to: '/guides/cost-of-employee-burnout', label: 'What burnout costs', description: 'The business case, in numbers.' },
  { to: '/guides/mindfulness-at-work', label: 'Mindfulness at work', description: 'Does it work, and how to run it.' },
];

/**
 * The blog index, in the site's current design.
 *
 * It was the last page still wearing the original look: the stacked-stones
 * logo, a 96px heading and bold capitals spaced a third of an em apart. It was
 * also 14 screens long, because every one of 27 posts got a 36px title, a
 * 20px excerpt and a "Read more" label with 48px of padding either side. The
 * list is now scannable: one line of title, one of excerpt, and the whole row
 * is the link.
 */
const Blog = () => {
  const [active, setActive] = useState(ALL);

  // Categories in a deliberate reading order, widest topic first.
  const categories = useMemo(() => {
    const order = [
      'Remote teams and burnout',
      'Desk and posture',
      'Meditation and breathing',
      'Cost and proof',
    ];
    const present = new Set(blogPosts.map((p) => p.category));
    return [ALL, ...order.filter((c) => present.has(c))];
  }, []);

  const counts = useMemo(() => {
    const c: Record<string, number> = { [ALL]: blogPosts.length };
    blogPosts.forEach((p) => {
      c[p.category] = (c[p.category] || 0) + 1;
    });
    return c;
  }, []);

  const visible = active === ALL ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Blog, practical wellbeing for distributed teams | Remote Yoga Coach"
        description="Chair yoga, breathing, burnout prevention and honest advice on corporate wellbeing that distributed teams actually use. From Remote Yoga Coach."
        canonical="https://remoteyogacoach.com/blog"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        {/* HERO */}
        <section className="bg-cream-soft pt-36 pb-14 md:pt-44 md:pb-16">
          <div className="max-w-[820px] mx-auto px-5 sm:px-6 md:px-8 text-center">
            <Eyebrow>Practical wellbeing for teams</Eyebrow>
            <h1 className="font-fraunces font-normal text-heading text-[2.7rem] md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Blog
            </h1>
            <p className="mt-5 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[560px] mx-auto">
              Chair yoga, breathing, burnout and what actually works for distributed teams.
            </p>
          </div>
        </section>

        {/* GUIDES */}
        <section className="px-5 sm:px-6 md:px-8 pt-12">
          <div className="max-w-[900px] mx-auto">
            <p className="text-charcoal/60 text-[15px] mb-4">New here? Start with a guide.</p>
            <div className="grid gap-4 md:grid-cols-3">
              {guides.map((g) => (
                <Link
                  key={g.to}
                  to={g.to}
                  className="group block bg-cream rounded-xl border border-sage-light hover:border-clay/60 px-6 py-5 transition-colors"
                >
                  <h2 className="font-fraunces font-normal text-heading text-xl leading-snug group-hover:text-clay transition-colors">
                    {g.label}
                  </h2>
                  <p className="text-charcoal/65 text-[15px] leading-relaxed mt-1">{g.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* POSTS */}
        <section className="px-5 sm:px-6 md:px-8 pt-14 pb-20 md:pb-24">
          <div className="max-w-[900px] mx-auto">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter posts by topic">
              {categories.map((cat) => {
                const isActive = cat === active;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    aria-pressed={isActive}
                    className={
                      'text-[14px] px-4 py-2 rounded-full border transition-colors ' +
                      (isActive
                        ? 'bg-clay text-white border-clay'
                        : 'bg-white text-charcoal/75 border-sage-light hover:border-clay/60 hover:text-heading')
                    }
                  >
                    {cat}
                    <span className={isActive ? 'ml-1.5 text-white/70' : 'ml-1.5 text-charcoal/40'}>{counts[cat]}</span>
                  </button>
                );
              })}
            </div>

            <ul className="mt-8 divide-y divide-sage-light border-y border-sage-light">
              {visible.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex items-start gap-6 py-6 md:py-7"
                  >
                    <div className="flex-1 min-w-0">
                      <h2 className="font-fraunces font-normal text-heading text-[1.35rem] md:text-2xl leading-snug tracking-[-0.01em] group-hover:text-clay transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-1.5 text-charcoal/65 text-[15px] md:text-base leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <p className="mt-2 font-mono text-[12px] text-charcoal/45">
                        {post.category} · {post.readingTime} read
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="mt-2 shrink-0 text-clay/50 transition-transform group-hover:translate-x-1 group-hover:text-clay"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
