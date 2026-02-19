'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Mail, Phone, Facebook } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const navLinks = [
  { name: 'Ochrana vozidiel', href: '/' },
  { name: 'Sofistikované zabezpečenie', href: '/sofistikovane-zabezpecenie' },
  { name: 'Pasívny monitoring', href: '/pasivny-monitoring' },
  { name: 'Parkovacie senzory', href: '/parkovacie-senzory' },
  { name: 'Certifikáty', href: '/certifikaty' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function NavbarNext() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      <div className="bg-black/95 py-1 border-b border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 xl:px-10 flex justify-end items-center">
          <div className="flex items-center text-gray-300 text-sm space-x-4">
            <a
              href="https://www.facebook.com/autoalarmytrencin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-[#1877f2] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="mailto:info@ochranavozidiel.sk"
              className="flex items-center hover:text-[#e06329] transition-colors"
            >
              <Mail className="h-3.5 w-3.5 mr-1.5" />
              <span>info@ochranavozidiel.sk</span>
            </a>
            <a
              href="tel:+421911911876"
              className="flex items-center text-red-500 hover:text-red-400 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 mr-1.5" />
              <span>+421 911 911 876</span>
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'transition-all duration-300',
          isScrolled
            ? 'bg-black text-white shadow-md py-2'
            : 'bg-black/90 text-white backdrop-blur-sm py-4'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 xl:px-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
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
                      href={link.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'bg-transparent text-white hover:bg-white/10 focus:bg-transparent'
                      )}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/kontakt"
              className="bg-[#e06329] hover:bg-[#c85823] text-white font-medium px-4 py-2 rounded-md transition-colors"
            >
              Chcem ponuku
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black bg-opacity-98 transform transition-transform md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 xl:px-10 py-6">
          <nav className="flex flex-col space-y-4 pt-20">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-white py-3 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="w-full bg-[#e06329] hover:bg-[#c85823] text-white font-medium py-3 flex items-center justify-center rounded-md mt-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              Chcem ponuku
            </Link>
            <div className="mt-8 flex flex-col space-y-3 text-gray-300">
              <a
                href="https://www.facebook.com/autoalarmytrencin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-[#1877f2]"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </a>
              <a href="mailto:info@ochranavozidiel.sk" className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@ochranavozidiel.sk
              </a>
              <a href="tel:+421911911876" className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +421 911 911 876
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
