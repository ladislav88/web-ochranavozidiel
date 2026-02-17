import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Mail, Phone, Image } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Ochrana vozidiel', href: '/' },
    { name: 'Ako funguje IGLA?', href: '/how-it-works' },
    { name: 'Cenník', href: '/pricing' },
    { name: 'Recenzie zákazníkov', href: '/reviews' },
    { name: 'Časté otázky (FAQ)', href: '/faq' },
    { name: 'Kontakt', href: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Contact bar */}
      <div className="bg-black/95 py-1 border-b border-gray-800/50">
        <div className="container mx-auto px-4 flex justify-end items-center">
          <div className="flex items-center text-gray-300 text-sm space-x-4">
            <a href="mailto:info@ochranavozidiel.sk" className="flex items-center hover:text-[#e06329] transition-colors">
              <Mail className="h-3.5 w-3.5 mr-1.5" />
              <span>info@ochranavozidiel.sk</span>
            </a>
            <a href="tel:+421911911876" className="flex items-center text-red-500 hover:text-red-400 transition-colors">
              <Phone className="h-3.5 w-3.5 mr-1.5" />
              <span>+421 911 911 876</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div
        className={cn(
          'transition-all duration-300',
          isScrolled 
            ? 'bg-black text-white shadow-md py-2'
            : 'bg-black/90 text-white backdrop-blur-sm py-4'
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/64cc852c-8709-41b4-b5e3-74c09fbbefed.png" 
              alt="ALCO Vehicle Security System" 
              className="h-12"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <Link
                      to={link.href}
                      className={navigationMenuTriggerStyle() + " bg-transparent text-white hover:bg-white/10 focus:bg-transparent"}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link 
              to="/contact-request"
              className="bg-[#e06329] hover:bg-[#c85823] text-white font-medium px-4 py-2 rounded-md transition-colors"
            >
              <span>Chcem ponuku</span>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'fixed inset-0 z-40 bg-black bg-opacity-98 transform transition-transform duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between mb-8">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img 
                src="/lovable-uploads/64cc852c-8709-41b4-b5e3-74c09fbbefed.png" 
                alt="ALCO Vehicle Security System" 
                className="h-10"
              />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="text-white"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="py-2 border-b border-gray-800">
                <Link
                  to={link.href}
                  className="font-medium text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}
            
            <div className="mt-6 pt-4">
              <Link 
                to="/contact-request"
                className="w-full bg-[#e06329] hover:bg-[#c85823] text-white font-medium py-3 flex items-center justify-center gap-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Chcem ponuku</span>
              </Link>
            </div>

            <div className="mt-8 flex flex-col space-y-3 text-gray-300">
              <a href="mailto:info@ochranavozidiel.sk" className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@ochranavozidiel.sk</span>
              </a>
              <a href="tel:+421911911876" className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+421 911 911 876</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
