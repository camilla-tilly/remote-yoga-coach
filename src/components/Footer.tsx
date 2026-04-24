
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-forest-gradient text-white py-16 md:py-20 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-5">
          <h2 className="font-cormorant font-semibold text-3xl md:text-4xl text-white tracking-tight">
            Yoga with Camilla
          </h2>
          <span className="block w-14 h-[2px] bg-dalashala-honey opacity-90 rounded-full" aria-hidden="true" />
          <p className="font-inter font-normal text-base md:text-lg text-white/85 max-w-md leading-relaxed">
            Privat yoga i Stockholm och Dalarna.<br className="hidden sm:block" />
            På en SUP på Sickla Sjö, på skogsaltanen i Dalarna, eller där du är.
          </p>
          <p className="font-inter text-xs uppercase tracking-[0.3em] text-white/55 font-medium pt-4">
            &copy; {currentYear} Yoga with Camilla
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
