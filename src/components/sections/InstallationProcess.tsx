
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import FadeIn from '../animations/FadeIn';
import { Wrench, Calendar, Clock, Shield, Award, Settings } from 'lucide-react';

const InstallationProcess = () => {
  const steps = [
    {
      icon: <Wrench className="h-8 w-8 text-[#e06329]" />,
      title: "Profesionálna inštalácia",
      description: "Systém IGLA inštalujeme v autorizovanom servisnom stredisku skúsenými technikmi."
    },
    {
      icon: <Calendar className="h-8 w-8 text-[#e06329]" />,
      title: "Dohodnutie termínu",
      description: "Inštaláciu vykonávame po dohodnutí termínu, ktorý vám vyhovuje."
    },
    {
      icon: <Clock className="h-8 w-8 text-[#e06329]" />,
      title: "Rýchla inštalácia",
      description: "Inštalácia systému trvá približne 1-2 hodiny v závislosti od typu vozidla."
    },
    {
      icon: <Shield className="h-8 w-8 text-[#e06329]" />,
      title: "Bez zásahu do elektroniky",
      description: "IGLA sa inštaluje bez zásahu do pôvodného kabelážneho systému vozidla."
    },
    {
      icon: <Award className="h-8 w-8 text-[#e06329]" />,
      title: "Zachovanie záruky",
      description: "Inštalácia nemá vplyv na záruku vozidla poskytovanú výrobcom."
    },
    {
      icon: <Settings className="h-8 w-8 text-[#e06329]" />,
      title: "Individuálne nastavenie",
      description: "Každý systém nastavíme podľa vašich individuálnych požiadaviek."
    }
  ];

  return (
    <section className="py-12 md:py-14 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance max-w-2xl mx-auto bg-gradient-to-r from-[#3a86c9] to-[#e06329] bg-clip-text text-transparent">
            Inštalácia systému IGLA
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Proces inštalácie je jednoduchý, rýchly a nevyžaduje žiadne viditeľné zmeny na vašom vozidle.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <FadeIn 
              key={index} 
              direction="up" 
              delay={`${index * 0.1}s`}
            >
              <Card className="bg-zinc-800/50 border-zinc-700 h-full hover:border-[#3a86c9]/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-16 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 text-balance text-white">{step.title}</h3>
                  <p className="text-gray-400 text-center">{step.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn direction="up" className="text-center mt-8">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Po inštalácii vám podrobne vysvetlíme, ako systém funguje, a ukážeme vám, ako ho používať.
            Dostanete tiež písomný návod na použitie a kontakt na našu technickú podporu.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default InstallationProcess;
