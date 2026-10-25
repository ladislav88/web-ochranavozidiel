import React from 'react';
import Link from 'next/link';
import FadeIn from '../animations/FadeIn';
import { Shield, Car } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { HERO_BACKGROUND_IMAGE, HERO_BACKGROUND_ALT, HERO_HEIGHT_PX } from '@/constants/hero';

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-black flex items-center justify-center w-full"
      style={{ minHeight: HERO_HEIGHT_PX }}
    >
      {/* Hero Background Image - WebP pre výkon */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={HERO_BACKGROUND_IMAGE}
          alt={HERO_BACKGROUND_ALT}
          className="w-full h-full object-cover object-center opacity-70"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-screen-xl relative z-20 w-full pt-32 pb-12">
        <div className="max-w-[1400px] mx-auto text-center stagger-animate">
          <FadeIn direction="up" className="mb-6">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
              Zabezpečenie vozidiel IGLA v Trenčíne
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay="0.1s" className="mb-8">
            <p className="text-lg md:text-xl text-gray-300 max-w-prose mx-auto leading-relaxed">
              Digitálny imobilizér, odborná montáž a osobné poradenstvo v Trenčianskych Stankovciach pri Trenčíne.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay="0.2s" className="mb-8">
            <Alert className="border border-accent/20 bg-black/60 backdrop-blur-sm max-w-prose mx-auto">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <Car className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <AlertDescription className="text-left text-sm md:text-base">
                  Samotný kľúč nemusí stačiť. IGLA pridáva ďalšie overenie pred jazdou pomocou tajnej sekvencie tlačidiel vo vozidle. Kompatibilitu a vhodné riešenie overíme podľa značky, modelu a roku výroby.
                </AlertDescription>
              </div>
            </Alert>
          </FadeIn>
          <FadeIn direction="up" delay="0.3s">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#e06329] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#c85823] shadow-lg hover:shadow-[#e06329]/30"
            >
              Získať ponuku pre moje auto
            </Link>
            <a href="tel:+421911911876" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-4 font-semibold text-white hover:bg-white/10 ml-0 sm:ml-4 mt-3 sm:mt-0">
              Zavolať 0911 911 876
            </a>
          </FadeIn>
        </div>
      </div>
      
      {/* Reduced opacity for abstract shapes */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-32 -right-16 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
    </section>
  );
};

export default Hero;
