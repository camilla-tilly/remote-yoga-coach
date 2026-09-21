import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { PageHero, PageSection, PillLink, LinkRows } from '@/components/PageKit';

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
      <main className="pb-16 md:pb-24">
        <PageHero
          eyebrow="404"
          title="Page not found"
          actions={<PillLink to="/">Back to home</PillLink>}
        >
          <p>
            This page does not exist or has moved. You might find what you are looking for below, or head back to
            the home page.
          </p>
        </PageHero>

        <PageSection heading="Popular pages">
          <LinkRows small items={[...topPages.map((p) => ({ to: p.href, title: p.name })), { to: '/blog', title: 'Read the blog' }]} />
        </PageSection>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default NotFound;
