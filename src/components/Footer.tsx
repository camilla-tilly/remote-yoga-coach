import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import Logo from './Logo';

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 3.76.92V6.69Z"/>
  </svg>
);

const YouTubeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-forest-gradient text-white w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
      {/* Sage glows for depth — no warm tones */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full opacity-[0.14] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8AA48E 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-20 w-[520px] h-[520px] rounded-full opacity-[0.16] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #9EB39F 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Top row — brand block */}
        <div className="flex flex-col items-center text-center gap-5">
          <Logo size={60} variant="pine" className="rounded-2xl ring-1 ring-white/15" />
          <h2 className="font-fraunces text-4xl md:text-5xl text-white tracking-[-0.02em] mt-3 leading-[1]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
            Yoga with Camilla
          </h2>
          <span className="block w-16 h-[2px] bg-white/50 mt-2 rounded-full" aria-hidden="true" />
          <p className="font-inter font-normal text-lg md:text-xl text-white/85 max-w-md leading-relaxed mt-3">
            Företagsyoga i Stockholm.<br className="hidden sm:block" />
            Konferenser, kickoffs, AWs och teambuilding, hos er.
          </p>

          {/* Nav row — gentle horizontal list */}
          <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-inter text-xs uppercase tracking-[0.3em] text-white/80 font-semibold">
            <Link to="/" className="hover:text-white transition-colors">
              Hem
            </Link>
            <span aria-hidden="true" className="text-white/30">·</span>
            <Link to="/#services" className="hover:text-white transition-colors">
              Tjänster
            </Link>
            <span aria-hidden="true" className="text-white/30">·</span>
            <Link to="/blogg" className="hover:text-white transition-colors">
              Blogg
            </Link>
            <span aria-hidden="true" className="text-white/30">·</span>
            <Link to="/om-mig" className="hover:text-white transition-colors">
              Om mig
            </Link>
            <span aria-hidden="true" className="text-white/30">·</span>
            <a
              href="mailto:hello.yogawithcamilla@gmail.com"
              className="hover:text-white transition-colors"
            >
              Kontakt
            </a>
          </nav>

          {/* Social links */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <a
              href="https://www.instagram.com/yoga_with_camilla/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 text-white/85 hover:text-white hover:bg-white/15 transition-colors"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a
              href="https://www.tiktok.com/@yoga_with_camilla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 text-white/85 hover:text-white hover:bg-white/15 transition-colors"
            >
              <TikTokIcon size={18} />
            </a>
            <a
              href="https://www.youtube.com/@camilla_yoga"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 text-white/85 hover:text-white hover:bg-white/15 transition-colors"
            >
              <YouTubeIcon size={18} />
            </a>
          </div>

          {/* Hairline divider */}
          <span className="block w-24 h-px bg-white/15 mt-10" aria-hidden="true" />

          <p className="font-inter text-[11px] uppercase tracking-[0.3em] text-white/50 font-medium">
            &copy; {currentYear} Yoga with Camilla
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
