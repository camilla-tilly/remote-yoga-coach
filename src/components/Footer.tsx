
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-earth-gradient text-dalashala-cream py-10 md:py-14 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-dalashala-sage to-transparent" />
      {/* Subtle olive glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-dalashala-olive/30 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-[1100px] mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-xl md:text-2xl font-cinzel-decorative font-bold text-dalashala-cream">
            Yoga with Camilla
          </h2>
          <div className="flex items-center gap-2 opacity-70">
            <span className="h-px w-8 bg-dalashala-cream/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-dalashala-sage" />
            <span className="h-px w-8 bg-dalashala-cream/50" />
          </div>
          <p className="font-eb-garamond italic text-sm md:text-base text-dalashala-cream/80 max-w-md">
            Privat yoga i Stockholm & Dalarna. I en skogsstuga, på altanen, eller där du är.
          </p>
          <p className="font-montserrat text-[11px] uppercase tracking-widest text-dalashala-cream/60 pt-2">
            &copy; {currentYear} Yoga with Camilla
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
