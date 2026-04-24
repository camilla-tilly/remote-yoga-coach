
import LotusDivider from '@/components/decorative/LotusDivider';
import OmAccent from '@/components/decorative/OmAccent';
import Mandala from '@/components/decorative/Mandala';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-forest-gradient text-dalashala-cream py-12 md:py-16 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-dalashala-saffron/80 to-transparent" />

      {/* Subtle olive glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-dalashala-olive/30 blur-3xl" aria-hidden="true" />

      {/* Faint mandala watermarks */}
      <Mandala
        variant="twelve"
        strokeWidth={0.7}
        className="absolute -right-24 -bottom-24 w-[360px] h-[360px] text-dalashala-saffron/10"
      />
      <Mandala
        variant="eight"
        strokeWidth={0.7}
        className="absolute -left-20 -top-16 w-[240px] h-[240px] text-dalashala-sage/15"
      />

      <div className="relative max-w-[1100px] mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex flex-col items-center text-center gap-4">
          <OmAccent size={40} className="text-dalashala-saffron" />
          <h2 className="text-xl md:text-2xl font-cinzel-decorative font-bold text-dalashala-cream">
            Yoga with Camilla
          </h2>
          <div className="w-48 md:w-64">
            <LotusDivider tone="gold" />
          </div>
          <p className="font-eb-garamond italic text-sm md:text-base text-dalashala-cream/85 max-w-md">
            Privat yoga i Stockholm & Dalarna. I en skogsstuga, på altanen, eller där du är.
          </p>
          <p className="font-montserrat text-xs text-dalashala-saffronLight/90 tracking-[0.2em] uppercase mt-1">
            Tack för att du är här
          </p>
          <p className="font-montserrat text-[11px] uppercase tracking-widest text-dalashala-cream/55 pt-2">
            &copy; {currentYear} Yoga with Camilla
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
