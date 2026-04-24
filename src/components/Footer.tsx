
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-dalashala-meadow/50 py-14 md:py-20 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-5">
          <h2 className="font-cormorant font-light text-xl md:text-2xl text-dalashala-earth tracking-tight">
            Yoga with Camilla
          </h2>
          <span className="block w-10 h-px bg-dalashala-sage opacity-70" aria-hidden="true" />
          <p className="font-inter font-light text-sm text-dalashala-earthSoft max-w-md leading-relaxed">
            Privat yoga i Stockholm och Dalarna.<br className="hidden sm:block" />
            På en SUP på Sickla Sjö, på skogsaltanen i Dalarna, eller där du är.
          </p>
          <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-dalashala-olive/70 pt-4">
            &copy; {currentYear} Yoga with Camilla
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
