import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import Logo from './Logo';

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
      { label: 'Book a pilot', to: '/demo' },
      { label: 'camilla@remoteyogacoach.com', href: 'mailto:camilla@remoteyogacoach.com' },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-forest-gradient text-white w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
      {/* Warm glows for depth */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full opacity-[0.14] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B67A5E 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-20 w-[520px] h-[520px] rounded-full opacity-[0.12] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #CE9A82 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 group" aria-label="Remote Yoga Coach, home">
              <Logo size={44} variant="clay" className="rounded-xl ring-1 ring-white/15" />
              <span className="font-fraunces text-2xl text-white tracking-tight" style={{ fontWeight: 500 }}>
                Remote Yoga Coach
              </span>
            </Link>
            <p className="font-inter text-[15px] text-white/70 leading-relaxed mt-5 max-w-sm">
              Live breathing, meditation and chair-yoga sessions your distributed team actually shows up for. On
              Teams, camera optional, with reporting you can take to leadership.
            </p>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="mt-7 w-11 h-11 inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 text-white/85 hover:text-white hover:bg-white/15 transition-colors"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <p className="font-inter text-[11px] uppercase tracking-[0.28em] text-white/45 font-semibold mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.to ? (
                        <Link to={l.to} className="font-inter text-[14px] text-white/75 hover:text-white transition-colors leading-snug">
                          {l.label}
                        </Link>
                      ) : (
                        <a href={l.href} className="font-inter text-[14px] text-white/75 hover:text-white transition-colors leading-snug break-words">
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

        <div className="mt-14 pt-8 border-t border-white/12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[11px] uppercase tracking-[0.3em] text-white/45 font-medium">
            &copy; {currentYear} Remote Yoga Coach
          </p>
          <p className="font-inter text-[12px] text-white/45">
            Live across UK, European and Australian time zones.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
