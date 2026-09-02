import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose
} from '@/components/ui/drawer';
import { Button } from './ui/button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'How it works', href: '/services/team-wellness' },
  { name: 'Resources', href: '/guides' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'About', href: '/about' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 w-full',
        isScrolled
          ? 'bg-offwhite/90 backdrop-blur-md border-b border-sage-light/60'
          : 'bg-offwhite/40 backdrop-blur-sm'
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto max-w-[1200px]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-baseline gap-2.5 group" aria-label="Remote Yoga Coach, home">
            <span className="w-[11px] h-[11px] rounded-full bg-clay inline-block relative top-[1px]" aria-hidden="true" />
            <p className="text-xl md:text-[22px] font-fraunces font-normal text-heading whitespace-nowrap tracking-[-0.01em]">
              Remote Yoga Coach
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'font-inter text-[15px] transition-colors font-medium',
                  location.pathname === link.href
                    ? 'text-clay'
                    : 'text-charcoal hover:text-clay'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/demo">
              <Button className="bg-[#392a23] hover:bg-clay text-offwhite font-inter font-medium text-sm tracking-normal rounded-full px-5 h-11">
                Book a pilot
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center pr-1">
            <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-charcoal rounded-full hover:bg-sage-light/40 transition-colors"
                  aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  <Menu size={24} />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-offwhite backdrop-blur-md border-t border-sage-light/60 max-h-[85vh] overflow-y-auto rounded-t-xl">
                <div className="p-3 flex justify-end">
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-sage-light/40">
                      <X size={24} className="text-charcoal" />
                    </Button>
                  </DrawerClose>
                </div>
                <div className="flex flex-col items-center pb-8 px-4 space-y-1">
                  {navLinks.map((link) => (
                    <DrawerClose key={link.href} asChild>
                      <Link
                        to={link.href}
                        className="text-charcoal text-lg font-medium w-full text-center py-2.5 px-3 hover:text-clay transition-colors block"
                      >
                        {link.name}
                      </Link>
                    </DrawerClose>
                  ))}
                  <div className="w-full border-t border-sage-light/60 my-3" />
                  <DrawerClose asChild>
                    <Link to="/demo" className="w-full px-3">
                      <Button className="w-full bg-[#392a23] hover:bg-clay text-offwhite font-inter font-medium text-sm tracking-normal rounded-full py-6">
                        Book a pilot
                      </Button>
                    </Link>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
