
import React from 'react';
import { 
  ShieldCheck, 
  Gauge,
  Check,
  Phone,
  Settings,
  MapPin
} from 'lucide-react';
import FadeIn from '../animations/FadeIn';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <FadeIn direction="up" delay={delay} className="group">
    <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-zinc-900/90 to-black border border-zinc-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-xl bg-[#e06329]/10 text-[#e06329] flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:bg-[#e06329]/20 mx-auto">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold mb-3 text-white text-balance text-center">{title}</h3>
      <p className="text-zinc-400 text-center max-w-[70ch] mx-auto">{description}</p>
    </div>
  </FadeIn>
);

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "Spoľahlivá ochrana",
      description: "Až 3-stupňová ochrana vozidla s vysokou spoľahlivosťou a odolnosťou voči hackerom.",
      delay: "0.1s"
    },
    {
      icon: <Settings className="h-7 w-7" />,
      title: "Neviditeľná inštalácia",
      description: "Systém je inštalovaný tak, že ho nie je možné vizuálne ani elektronicky lokalizovať.",
      delay: "0.2s"
    },
    {
      icon: <Phone className="h-7 w-7" />,
      title: "Bez ovládača",
      description: "Na ovládanie sa používajú originálne komponenty vozidla. Nie je potrebný ďalší ovládač.",
      delay: "0.3s"
    },
    {
      icon: <Gauge className="h-7 w-7" />,
      title: "Jednoduchá obsluha",
      description: "Bez zložitého kódovania. Aktivácia a deaktivácia cez originálne tlačidlá vozidla.",
      delay: "0.4s"
    },
    {
      icon: <Check className="h-7 w-7" />,
      title: "100% kompatibilita",
      description: "Kompatibilné so všetkými značkami a modelmi áut vrátane elektromobilov.",
      delay: "0.5s"
    },
    {
      icon: <MapPin className="h-7 w-7" />,
      title: "Certifikovaná sieť",
      description: "Inštalácia cez sieť autorizovaných montážnych stredísk po celom Slovensku.",
      delay: "0.6s"
    }
  ];

  return (
    <section id="features" className="py-12 md:py-14 relative">
      <div className="absolute inset-0 bg-black -z-10" />
      
      {/* Decorative gradient blurs */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#e06329]/5 to-transparent opacity-70 -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#e06329]/5 to-transparent opacity-70 -z-10" />
      <div className="absolute top-40 -left-64 w-96 h-96 rounded-full bg-[#e06329]/5 blur-3xl -z-10" />
      <div className="absolute bottom-40 -right-64 w-96 h-96 rounded-full bg-[#e06329]/5 blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-prose mx-auto mb-8 stagger-animate">
          <div className="mb-3">
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-[#e06329]/10 text-[#e06329] rounded-full">
              Výhody systému IGLA
            </span>
          </div>
          <h2 className="section-title text-white text-3xl md:text-4xl font-bold mb-3 text-balance max-w-prose mx-auto">Prečo je IGLA najlepšou voľbou pre vaše vozidlo</h2>
          <p className="section-subtitle text-zinc-400 text-lg">
            Systém IGLA ponúka niekoľko kľúčových výhod, ktoré ho robia najlepším bezpečnostným riešením pre vaše vozidlo.
          </p>
        </div>
        
        <div className="grid grid-cols-12 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
