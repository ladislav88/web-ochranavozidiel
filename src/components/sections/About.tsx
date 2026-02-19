
import React from 'react';
import FadeIn from '../animations/FadeIn';
import CustomButton from '../ui/CustomButton';
import { ArrowRight, Shield, Car, Key, Lock, Cpu, Wrench } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-14 relative overflow-hidden w-full">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#e06329]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3a86c9]/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full">
        <FadeIn direction="up" className="text-center mb-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-balance mb-4 max-w-prose mx-auto">
            Prečo si vybrať systém <span className="text-[#e06329]">IGLA?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-prose mx-auto">
            IGLA je inováciou v ochrane vozidiel. Na rozdiel od klasických alarmov a imobilizérov, 
            IGLA pracuje neviditeľne a bez ovládača.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-12 gap-6 mt-8">
          {[
            {
              icon: <Key className="h-10 w-10 text-[#e06329]" />,
              title: "Jednoduchá obsluha",
              description: "Žiadny ovládač ani aplikácie, stačí vaše originálne kľúče od auta"
            },
            {
              icon: <Shield className="h-10 w-10 text-[#e06329]" />,
              title: "Neviditeľná inštalácia",
              description: "Zlodej nevie, čo hľadať, systém je dokonale ukrytý"
            },
            {
              icon: <Cpu className="h-10 w-10 text-[#e06329]" />,
              title: "Inteligentný systém",
              description: "Dokáže rozpoznať pokus o krádež a efektívne mu zabrániť"
            },
            {
              icon: <Lock className="h-10 w-10 text-[#e06329]" />,
              title: "Spoľahlivá ochrana",
              description: "Využíva neprelomiteľný kód a digitálnu komunikáciu s riadiacimi jednotkami"
            },
            {
              icon: <Car className="h-10 w-10 text-[#e06329]" />,
              title: "Široká kompatibilita",
              description: "Funguje s originálnym diaľkovým ovládaním a rôznymi typmi vozidiel"
            },
            {
              icon: <Wrench className="h-10 w-10 text-[#e06329]" />,
              title: "Profesionálna montáž",
              description: "Inštalácia certifikovanými technikmi zaručuje maximálnu účinnosť"
            },
          ].map((item, index) => (
            <FadeIn key={index} direction="up" delay={`${index * 0.1}s`} className="h-full col-span-12 md:col-span-6 lg:col-span-4">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 h-full hover:bg-zinc-800/50 transition-colors duration-300 hover:border-zinc-700 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto rounded-full bg-gradient-to-br from-[#3a86c9]/20 to-[#e06329]/20">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-balance">{item.title}</h3>
                <p className="text-gray-400 text-center max-w-[70ch] mx-auto">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn direction="up" className="mt-8 text-center">
          <CustomButton 
            className="bg-[#e06329] hover:bg-[#c85823] text-white mx-auto"
            href="/sofistikovane-zabezpecenie"
          >
            Zistite viac o systéme IGLA
            <ArrowRight className="ml-2 h-4 w-4" />
          </CustomButton>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
