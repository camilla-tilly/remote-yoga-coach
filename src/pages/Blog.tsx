import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { PageHero, ClosingCTA, PillLink, WRAP } from '@/components/PageKit';
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
        <PageHero title="Blog">
          <p>Chair yoga, breathing, burnout and what actually works for distributed teams.</p>
        </PageHero>

        {/* Topics and guides on the left, posts on the right. */}
        <section data-section className="pb-20 md:pb-28">
          <div className={WRAP}>
            <div className="border-t border-sage-light pt-10 md:pt-14 md:grid md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-16 lg:gap-24">
              <aside className="md:sticky md:top-28 md:self-start">
                <p className="font-fraunces text-heading text-[1.4rem]">Topics</p>
                <div className="mt-4 flex flex-wrap md:flex-col md:items-start gap-2" role="group" aria-label="Filter posts by topic">
                  {categories.map((cat) => {
                    const isActive = cat === active;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setActive(cat)}
                        aria-pressed={isActive}
                        className={
                          'text-[15px] px-4 py-2 rounded-full border transition-colors ' +
                          (isActive
                            ? 'bg-heading text-offwhite border-heading'
                            : 'border-sage-light text-charcoal/75 hover:border-clay hover:text-heading')
                        }
                      >
                        {cat}
                        <span className={isActive ? 'ml-1.5 text-offwhite/60' : 'ml-1.5 text-charcoal/40'}>{counts[cat]}</span>
                      </button>
                    );
                  })}
                </div>

                <p className="mt-10 font-fraunces text-heading text-[1.4rem]">New here? Start with a guide</p>
                <ul className="mt-3 space-y-2.5">
                  {guides.map((g) => (
                    <li key={g.to}>
                      <Link to={g.to} className="text-clay underline underline-offset-4 decoration-clay/30 hover:decoration-clay text-[16px] leading-snug">
                        {g.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>

              <ul className="mt-12 md:mt-0 border-t border-sage-light">
                {visible.map((post) => (
                  <li key={post.slug} className="border-b border-sage-light">
                    <Link to={`/blog/${post.slug}`} className="group grid grid-cols-[minmax(0,1fr)_auto] gap-6 items-start py-6 md:py-7">
                      <div className="min-w-0">
                        <p className="text-[13px] text-charcoal/55">
                          {post.category} · {post.readingTime} read
                        </p>
                        <h2 className="mt-1.5 font-fraunces font-normal text-heading text-[1.4rem] md:text-[1.65rem] leading-snug tracking-[-0.01em] group-hover:text-clay transition-colors">
                          {post.title}
                        </h2>
                        <p className="mt-2 text-charcoal/70 text-[15px] md:text-base leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                      <span aria-hidden="true" className="mt-7 text-clay text-xl transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ClosingCTA
          heading="Try a live class with your team"
          actions={<PillLink to="/demo" variant="light">Book a pilot</PillLink>}
        >
          <p>If you would like to try it, start with a single pilot session.</p>
        </ClosingCTA>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
