import { Link } from 'react-router-dom';
import Logo from './Logo';

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
            Privat yoga i Stockholm och Dalarna.<br className="hidden sm:block" />
            På en SUP på Sickla Sjö, på skogsaltanen i Dalarna, eller där du är.
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
