import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-forest-gradient text-white w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
      {/* Warm glows for depth */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full opacity-[0.14] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C97A5C 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-20 w-[520px] h-[520px] rounded-full opacity-[0.12] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B9D7D 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="flex flex-col items-center text-center gap-5">
          <Logo size={60} variant="clay" className="rounded-2xl ring-1 ring-white/15" />
          <h2 className="font-fraunces text-4xl md:text-5xl text-white tracking-[-0.02em] mt-3 leading-[1]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
            Remote Yoga Coach
          </h2>
          <span className="block w-16 h-[2px] bg-clay/70 mt-2 rounded-full" aria-hidden="true" />
          <p className="font-inter font-normal text-lg md:text-xl text-white/85 max-w-md leading-relaxed mt-3">
            Live breathing, meditation and chair-yoga sessions your distributed team actually shows up for. On Teams, camera optional.
          </p>

          {/* Nav row */}
          <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-inter text-xs uppercase tracking-[0.3em] text-white/80 font-semibold">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true" className="text-white/30">·</span>
            <Link to="/services/team-wellness" className="hover:text-white transition-colors">How it works</Link>
            <span aria-hidden="true" className="text-white/30">·</span>
            <Link to="/services/chair-yoga-for-teams" className="hover:text-white transition-colors">Chair yoga</Link>
            <span aria-hidden="true" className="text-white/30">·</span>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <span aria-hidden="true" className="text-white/30">·</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span aria-hidden="true" className="text-white/30">·</span>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <span aria-hidden="true" className="text-white/30">·</span>
            <a href="mailto:hello@remoteyogacoach.com" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Guides row */}
          <nav aria-label="Guides" className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-inter text-[13px] text-white/65">
            <span className="uppercase tracking-[0.25em] text-[10px] font-semibold text-white/45">Guides</span>
            <Link to="/guides/remote-work-burnout" className="hover:text-white transition-colors">Remote work burnout</Link>
            <span aria-hidden="true" className="text-white/25">·</span>
            <Link to="/guides/cost-of-employee-burnout" className="hover:text-white transition-colors">What burnout costs</Link>
            <span aria-hidden="true" className="text-white/25">·</span>
            <Link to="/guides/mindfulness-at-work" className="hover:text-white transition-colors">Mindfulness at work</Link>
            <span aria-hidden="true" className="text-white/25">·</span>
            <Link to="/guides/desk-yoga" className="hover:text-white transition-colors">Desk yoga</Link>
          </nav>

          {/* LinkedIn only, B2B */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 text-white/85 hover:text-white hover:bg-white/15 transition-colors"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>

          <span className="block w-24 h-px bg-white/15 mt-10" aria-hidden="true" />

          <p className="font-inter text-[11px] uppercase tracking-[0.3em] text-white/50 font-medium">
            &copy; {currentYear} Remote Yoga Coach
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
