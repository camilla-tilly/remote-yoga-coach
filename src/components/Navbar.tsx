import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose
} from '@/components/ui/drawer';
import { Button } from './ui/button';

const locationGroups = [
  {
    location: 'Stockholm',
    links: [
      { name: 'Möhippa Yoga', href: '/tjanster/mohippa-yoga' },
      { name: 'Företags- & Konferensyoga', href: '/tjanster/foretagsyoga' },
      { name: 'SUP Yoga', href: '/tjanster/sup-yoga' },
      { name: 'Privatlektioner', href: '/tjanster/privatlektioner' },
      { name: 'Trail Run + Yoga', href: '/tjanster/trail-run-yoga' },
    ]
  },
  {
    location: 'Dalarna',
    links: [
      { name: 'Möhippa Yoga', href: '/tjanster/mohippa-yoga' },
      { name: 'Företagsyoga Dalarna', href: '/tjanster/foretagsyoga' },
      { name: 'Hönsyoga på Stugan', href: '/tjanster/honsyoga' },
      { name: 'Mini Retreat', href: '/tjanster/mini-retreat' },
      { name: 'Privatlektioner', href: '/tjanster/privatlektioner' },
      { name: 'Trail Run + Yoga', href: '/tjanster/trail-run-yoga' },
      { name: 'Bröllopsyoga', href: '/tjanster/brollopsyoga' },
    ]
  },
];

const onlineLink = { name: 'Online Yoga (English)', href: '/tjanster/online-yoga' };

// Flat list for mobile (deduplicated)
const allServiceLinks = [
  { name: 'Möhippa Yoga', href: '/tjanster/mohippa-yoga' },
  { name: 'Företags- & Konferensyoga', href: '/tjanster/foretagsyoga' },
  { name: 'SUP Yoga', href: '/tjanster/sup-yoga' },
  { name: 'Bröllopsyoga', href: '/tjanster/brollopsyoga' },
  { name: 'Privatlektioner', href: '/tjanster/privatlektioner' },
  { name: 'Trail Run + Yoga', href: '/tjanster/trail-run-yoga' },
  { name: 'Hönsyoga på Stugan', href: '/tjanster/honsyoga' },
  { name: 'Mini Retreat', href: '/tjanster/mini-retreat' },
  onlineLink,
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 500);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 60;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-2 w-full',
          isScrolled
            ? 'bg-dalashala-beige/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="w-full px-3 sm:px-4 lg:px-6 xl:px-8 mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <h1 className="text-sm sm:text-base md:text-lg font-cinzel-decorative font-bold text-dalashala-darkBrown whitespace-nowrap">
                Yoga with Camilla
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-3 lg:space-x-5 xl:space-x-6">
              {/* Tjänster dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 text-base lg:text-lg text-dalashala-darkBrown hover:text-dalashala-mediumBrown transition-colors font-medium whitespace-nowrap"
                >
                  Tjänster
                  <ChevronDown
                    size={14}
                    className={cn('transition-transform duration-200', servicesOpen && 'rotate-180')}
                  />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-dalashala-beige border border-dalashala-tan/30 rounded-xl shadow-lg overflow-hidden z-50" style={{ width: '480px' }}>
                    <div className="flex">
                      {locationGroups.map((group) => (
                        <div key={group.location} className="flex-1 border-r last:border-r-0 border-dalashala-tan/20">
                          <p className="px-4 pt-3 pb-1 font-cinzel text-xs uppercase tracking-widest text-dalashala-mediumBrown/70">
                            {group.location}
                          </p>
                          {group.links.map((link) => (
                            <Link
                              key={group.location + link.href + link.name}
                              to={link.href}
                              onClick={() => setServicesOpen(false)}
                              className="block px-4 py-1.5 font-eb-garamond text-sm text-dalashala-darkBrown hover:bg-dalashala-tan/30 transition-colors"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-dalashala-tan/20 px-4 py-2">
                      <Link
                        to={onlineLink.href}
                        onClick={() => setServicesOpen(false)}
                        className="block font-eb-garamond text-sm text-dalashala-darkBrown hover:bg-dalashala-tan/30 transition-colors py-1 rounded"
                      >
                        🌐 {onlineLink.name}
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/blogg"
                className="text-base lg:text-lg text-dalashala-darkBrown hover:text-dalashala-mediumBrown transition-colors font-medium"
              >
                Blogg
              </Link>

              <Link
                to="/om-mig"
                className="text-base lg:text-lg text-dalashala-darkBrown hover:text-dalashala-mediumBrown transition-colors font-medium"
              >
                Om mig
              </Link>

              <button
                onClick={() => scrollToSection('contact')}
                className="text-base lg:text-lg text-dalashala-darkBrown hover:text-dalashala-mediumBrown transition-colors font-medium"
              >
                Kontakt
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center pr-1">
              <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <DrawerTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-dalashala-darkBrown rounded-full hover:bg-dalashala-tan/30 transition-colors"
                    aria-label={mobileMenuOpen ? 'Stäng meny' : 'Öppna meny'}
                  >
                    <Menu size={24} />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-gradient-to-b from-dalashala-beige to-dalashala-tan/90 backdrop-blur-md border-t border-dalashala-tan/30 max-h-[85vh] overflow-y-auto rounded-t-xl">
                  <div className="p-3 flex justify-end">
                    <DrawerClose asChild>
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-dalashala-tan/30">
                        <X size={24} className="text-dalashala-darkBrown" />
                      </Button>
                    </DrawerClose>
                  </div>
                  <div className="flex flex-col items-center pb-6 px-4 space-y-1">
                    {locationGroups.map((group) => (
                      <div key={group.location} className="w-full">
                        <p className="font-cinzel text-xs uppercase tracking-widest text-dalashala-mediumBrown pt-3 pb-1 text-center">
                          {group.location}
                        </p>
                        {group.links.map((link) => (
                          <DrawerClose key={group.location + link.href + link.name} asChild>
                            <Link
                              to={link.href}
                              className="text-dalashala-darkBrown text-sm font-eb-garamond w-full text-center py-1.5 px-3 hover:text-dalashala-mediumBrown transition-colors block"
                            >
                              {link.name}
                            </Link>
                          </DrawerClose>
                        ))}
                        <div className="w-full border-t border-dalashala-tan/30 mt-2" />
                      </div>
                    ))}
                    <DrawerClose asChild>
                      <Link
                        to={onlineLink.href}
                        className="text-dalashala-darkBrown text-sm font-eb-garamond w-full text-center py-1.5 px-3 hover:text-dalashala-mediumBrown transition-colors block"
                      >
                        Online Yoga (English)
                      </Link>
                    </DrawerClose>

                    <div className="w-full border-t border-dalashala-tan/40 my-2" />

                    <DrawerClose asChild>
                      <Link
                        to="/blogg"
                        className="text-dalashala-darkBrown text-lg font-medium w-full text-center py-2 px-3 hover:text-dalashala-mediumBrown transition-colors"
                      >
                        Blogg
                      </Link>
                    </DrawerClose>

                    <DrawerClose asChild>
                      <Link
                        to="/om-mig"
                        className="text-dalashala-darkBrown text-lg font-medium w-full text-center py-2 px-3 hover:text-dalashala-mediumBrown transition-colors"
                      >
                        Om mig
                      </Link>
                    </DrawerClose>

                    <DrawerClose asChild>
                      <button
                        onClick={() => scrollToSection('contact')}
                        className="text-dalashala-darkBrown text-lg font-medium w-full text-center py-2 px-3 hover:text-dalashala-mediumBrown transition-colors"
                      >
                        Kontakt
                      </button>
                    </DrawerClose>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
