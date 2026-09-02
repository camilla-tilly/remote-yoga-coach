import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const topPages = [
  { name: 'Wellbeing for your team', href: '/services/team-wellness' },
  { name: 'Chair yoga for teams', href: '/services/chair-yoga-for-teams' },
  { name: 'Corporate wellbeing for remote teams', href: '/services/corporate-wellbeing-for-remote-teams' },
  { name: 'Pricing', href: '/pricing' },
];

const NotFound = () => {
  useEffect(() => {
    // Add robots noindex so Google doesn't index 404s
    const existing = document.querySelector('meta[name="robots"]');
    const prev = existing?.getAttribute('content') || null;
    if (existing) {
      existing.setAttribute('content', 'noindex, nofollow');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      meta.setAttribute('content', 'noindex, nofollow');
      document.head.appendChild(meta);
    }
    return () => {
      const el = document.querySelector('meta[name="robots"]');
      if (el && prev !== null) {
        el.setAttribute('content', prev);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Page not found (404) | Remote Yoga Coach"
        description="This page does not exist or has moved. Find live wellbeing sessions for remote and hybrid teams."
      />
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <section className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-clay mb-6">404</p>
          <h1
            className="font-fraunces font-normal text-heading text-4xl md:text-5xl lg:text-6xl mb-7 leading-[1.05] tracking-[-0.025em]"
          >
            Page not found
          </h1>
          <p className="font-inter text-lg text-charcoal/75 mb-9 leading-relaxed">
            This page does not exist or has moved. You might find what you are looking for below, or head back to
            the home page.
          </p>
          <Button
            className="bg-clay text-white hover:bg-clayDark hover:-translate-y-0.5 transition-all duration-300 font-inter py-4 px-9 rounded-full text-sm font-semibold"
            asChild
          >
            <Link to="/">Back to home</Link>
          </Button>
        </section>

        <section className="max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-clay text-center mb-8">
            Popular pages
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topPages.map((p) => (
              <Link
                key={p.href}
                to={p.href}
                className="bg-white rounded-2xl border border-sage-light px-6 py-5 font-fraunces text-lg md:text-xl text-heading hover:border-clay/60 hover:-translate-y-0.5 transition-all text-center"
              >
                {p.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="font-inter text-xs uppercase tracking-[0.28em] text-clay hover:text-clayDark font-semibold underline underline-offset-4 transition-colors"
            >
              Read the blog
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default NotFound;
