import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const columns: Array<{ heading: string; links: Array<{ label: string; to?: string; href?: string }> }> = [
  {
    heading: 'Services',
    links: [
      { label: 'How it works', to: '/services/team-wellness' },
      { label: 'Chair yoga for teams', to: '/services/chair-yoga-for-teams' },
      { label: 'Wellbeing for remote teams', to: '/services/corporate-wellbeing-for-remote-teams' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Guides', to: '/guides' },
      { label: 'Compare vs apps & EAPs', to: '/compare' },
      { label: 'What burnout costs', to: '/guides/cost-of-employee-burnout' },
      { label: 'Blog', to: '/blog' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Get in touch', to: '/demo' },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-cream text-charcoal w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden border-t border-sage-light">
      <div className="relative max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-baseline gap-2.5 group" aria-label="Remote Yoga Coach, home">
              <span className="w-3 h-3 rounded-full bg-clay inline-block relative top-[1px]" aria-hidden="true" />
              <span className="font-fraunces text-2xl text-heading tracking-tight" style={{ fontWeight: 500 }}>
                Remote Yoga Coach
              </span>
            </Link>
            <p className="font-inter text-[15px] text-charcoal/65 leading-relaxed mt-5 max-w-sm">
              Live breathing, meditation and chair-yoga classes your distributed team actually shows up for. On
              Teams or Zoom, camera optional, with reporting you can take to leadership.
            </p>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="mt-7 w-11 h-11 inline-flex items-center justify-center rounded-full bg-white ring-1 ring-sage-light text-charcoal/75 hover:text-heading hover:bg-white transition-colors"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <p className="font-inter text-[11px] uppercase tracking-[0.28em] text-charcoal/50 font-semibold mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.to ? (
                        <Link to={l.to} className="font-inter text-[14px] text-charcoal/70 hover:text-heading transition-colors leading-snug">
                          {l.label}
                        </Link>
                      ) : (
                        <a href={l.href} className="font-inter text-[14px] text-charcoal/70 hover:text-heading transition-colors leading-snug break-words">
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-sage-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[11px] uppercase tracking-[0.3em] text-charcoal/50 font-medium">
            &copy; {currentYear} Remote Yoga Coach
          </p>
          <p className="font-inter text-[12px] text-charcoal/50">
            Live across UK, European and Australian time zones.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
