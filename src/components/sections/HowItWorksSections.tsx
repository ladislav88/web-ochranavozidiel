
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import FadeIn from '../animations/FadeIn';
import { ShieldCheck, Key, Lock, Cpu, ShieldAlert, FileCode } from 'lucide-react';

const HowItWorksSections = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-orange-500" />,
      title: "Neprekonateľná ochrana",
      description: "IGLA je systém, ktorý spoľahlivo chráni vozidlo pred krádežou. Nevyužíva rádiový signál, preto ho zlodeji nedokážu hacknúť."
    },
    {
      icon: <Key className="h-10 w-10 text-orange-500" />,
      title: "Bez ovládača",
      description: "Na rozdiel od bežných autoalarmov, IGLA nepotrebuje žiadny ovládač. Systém sa aktivuje a deaktivuje prostredníctvom tajnej sekvencie."
    },
    {
      icon: <Lock className="h-10 w-10 text-orange-500" />,
      title: "Tajná sekvencia",
      description: "Autorizácia sa vykonáva zadaním tajnej sekvencie pomocou tlačidiel a prvkov, ktoré sú vo vozidle bežne prítomné (tlačidlá na volante či palubnej doske)."
    },
    {
      icon: <Cpu className="h-10 w-10 text-orange-500" />,
      title: "Digitálna blokácia",
      description: "IGLA blokuje digitálne riadiace jednotky motora, prevodovky a ďalších systémov vozidla. Toto zabezpečuje, že vozidlo zostane nepohyblivé."
    },
    {
      icon: <ShieldAlert className="h-10 w-10 text-orange-500" />,
      title: "Anti-scanning technológia",
      description: "IGLA používa pokročilú anti-scanning technológiu, ktorá znemožňuje akékoľvek pokusy o skenovanie a kopírovanie signálu."
    },
    {
      icon: <FileCode className="h-10 w-10 text-orange-500" />,
      title: "Inteligentný algoritmus",
      description: "Systém využíva sofistikovaný šifrovací algoritmus, vďaka ktorému je každá IGLA unikátna a nemožno ju skopírovať ani duplikovať."
    }
  ];

  return (
    <section className="py-12 md:py-14 bg-zinc-900">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 max-w-2xl mx-auto text-balance">Ako vlastne IGLA funguje?</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-balance">
            IGLA je revolučný zabezpečovací systém, ktorý využíva digitálnu technológiu na ochranu vozidla bez potreby klasického ovládača.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FadeIn 
              key={index} 
              direction="up" 
              delay={`${index * 0.1}s`}
            >
              <Card className="bg-zinc-800 border-zinc-700 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3 text-balance">{feature.title}</h3>
                  <p className="text-gray-400 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSections;
