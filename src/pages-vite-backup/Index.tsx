
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Reviews from '@/components/sections/Reviews';
import HowItWorksSections from '@/components/sections/HowItWorksSections';
import TechnicalSpecifications from '@/components/sections/TechnicalSpecifications';
import Hero from '@/components/sections/Hero';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href?.startsWith('#')) return;
      
      e.preventDefault();
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for navbar height
          behavior: 'smooth'
        });
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <Helmet>
        <title>IGLA | ALCO Vehicle Security System</title>
        <meta name="description" content="Najmodernejší systém, ktorý spoľahlivo chráni vozidlo bez použitia ovládača" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Helmet>
      
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <div className="space-y-0 divide-y divide-zinc-900/30 w-full">
          <About />
          <HowItWorksSections />
          <TechnicalSpecifications />
          <Reviews />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
