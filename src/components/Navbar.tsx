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
import Logo from './Logo';

const serviceLinks = [
  { name: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
  { name: 'SUP yoga', href: '/tjanster/sup-yoga' },
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
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 w-full',
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-dalashala-meadow/40'
            : 'bg-white/40 backdrop-blur-sm'
        )}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto max-w-[1400px]">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group" aria-label="Yoga with Camilla, hem">
              <Logo
                size={34}
                variant="pine"
                className="rounded-lg shadow-soft transition-transform duration-300 group-hover:-rotate-3"
              />
              <p className="text-lg sm:text-xl md:text-2xl font-cormorant font-semibold text-dalashala-earth whitespace-nowrap tracking-tight">
                Yoga with Camilla
              </p>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
              {/* Tjänster dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 font-inter text-[15px] text-dalashala-earth hover:text-dalashala-olive transition-colors font-medium whitespace-nowrap"
                >
                  Tjänster
                  <ChevronDown
                    size={14}
                    className={cn('transition-transform duration-200', servicesOpen && 'rotate-180')}
                  />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full right-0 mt-3 bg-white border border-dalashala-meadow/40 rounded-xl shadow-card overflow-hidden z-50" style={{ minWidth: '200px' }}>
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-5 py-3 font-inter text-sm text-dalashala-earth hover:bg-dalashala-meadowLight/40 hover:text-dalashala-olive transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/blogg"
                className="font-inter text-[15px] text-dalashala-earth hover:text-dalashala-olive transition-colors font-medium"
              >
                Blogg
              </Link>

              <Link
                to="/om-mig"
                className="font-inter text-[15px] text-dalashala-earth hover:text-dalashala-olive transition-colors font-medium"
              >
                Om mig
              </Link>

              <button
                onClick={() => scrollToSection('contact')}
                className="font-inter text-[15px] text-dalashala-earth hover:text-dalashala-olive transition-colors font-medium"
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
                    {serviceLinks.map((link) => (
                      <DrawerClose key={link.href} asChild>
                        <Link
                          to={link.href}
                          className="text-dalashala-darkBrown text-lg font-medium w-full text-center py-2 px-3 hover:text-dalashala-mediumBrown transition-colors block"
                        >
                          {link.name}
                        </Link>
                      </DrawerClose>
                    ))}
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
