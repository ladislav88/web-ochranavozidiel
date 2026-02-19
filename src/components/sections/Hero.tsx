
import React from 'react';
import FadeIn from '../animations/FadeIn';
import { Shield, Car } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-black flex items-center justify-center w-full py-16">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/lovable-uploads/ee024d7c-8a60-425c-9be7-01068775ae7c.png" 
          alt="Car security system" 
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-screen-xl relative z-20 w-full pt-16">
        <div className="max-w-[1400px] mx-auto text-center stagger-animate">
          <FadeIn direction="up" className="mb-6">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#3a86c9] drop-shadow-lg">
              IGLA Bezpečnostný Systém
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay="0.1s" className="mb-8">
            <p className="text-lg md:text-xl text-gray-300 max-w-prose mx-auto leading-relaxed">
              Najmodernejši system, ktory chrani vozidlo sofistikovaným algoritnom vo viacerých bodoch naraz.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay="0.2s" className="mb-8">
            <Alert className="border border-accent/20 bg-black/60 backdrop-blur-sm max-w-prose mx-auto">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <Car className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <AlertDescription className="text-left text-sm md:text-base">
                  Nedajte šancu zlodejom. Digitálny imobilizér IGLA ochráni vaše auto aj pred modernými spôsobmi krádeže auta, akými sú použitie retranslátorov (zosilňovačov signálu) pri autách s bezkľúčovým štartom alebo voči krádeži pomocou zariadenia „Gameboy„.
                </AlertDescription>
              </div>
            </Alert>
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
