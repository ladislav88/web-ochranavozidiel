import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-shrink-0">
            <Link href="/">
              <img 
                src="/lovable-uploads/1e42a538-d3c5-4058-aaf6-803116f70813.png" 
                alt="ALCO Security Logo" 
                className="h-14"
              />
            </Link>
          </div>
          
          {/* Website link and Facebook button in the middle with increased gap */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-28">
            <a
              href="https://www.autoalarmy-trencin.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold hover:text-[#3a86c9] transition-colors"
            >
              autoalarmy-trencin.sk
            </a>
            
            <a 
              href="https://www.facebook.com/autoalarmytrencin" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-[#3a86c9] hover:bg-[#3078b5] transition-colors rounded w-[160px] h-[50px] flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">facebook</span>
            </a>
          </div>
          
          {/* Company information on the right */}
          <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
            <div className="text-xs">
              © {currentYear} ALCO SECURITY GROUP | Všetky práva vyhradené
            </div>
            <div className="text-xs">
              ALCO.SK, s.r.o. | Ochrana vozidiel a objektov
            </div>
            <div className="flex items-center gap-2 text-xs mt-1">
              <a 
                href="mailto:info@autoalarmy-trencin.sk" 
                className="flex items-center gap-1 hover:text-[#3a86c9]"
              >
                <Mail size={14} />
                <span>info@ochranavozidiel.sk</span>
              </a>
              <a 
                href="tel:+421911911876" 
                className="flex items-center gap-1 hover:text-[#3a86c9]"
              >
                <Phone size={14} />
                <span>+421 911 911 876</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
