
import React from 'react';
import CustomButton from '@/components/ui/CustomButton';
import { Check, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { cn } from '@/lib/utils';

interface PricePlanProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const PricePlan = ({ title, price, description, features, buttonText, icon, highlight = false }: PricePlanProps) => {
  return (
    <div className={cn(
      "rounded-xl p-8 h-full flex flex-col",
      highlight ? "bg-primary/10 border border-primary/20" : "bg-card border border-border"
    )}>
      <div className="flex items-center gap-2 mb-4">
        <div className="text-primary">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className="mb-6">
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">€</span>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <CustomButton 
        variant={highlight ? "primary" : "outline"} 
        size="lg" 
        isFullWidth={true}
        className="mt-auto"
        href="/contact-request"
      >
        {buttonText}
        <ArrowRight className="ml-2 h-4 w-4" />
      </CustomButton>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Cenník systému IGLA</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Vyberte si variant, ktorý najviac vyhovuje vašim požiadavkám na ochranu vozidla
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FadeIn delay="0.1s">
            <PricePlan
              title="IGLA Basic"
              price="299"
              description="Základná ochrana vozidla:"
              features={[
                "Blokovanie elektronických systémov vozidla",
                "Autorizácia pomocou tajnej sekvencie",
                "Bez potreby ovládača",
                "Certifikovaná montáž"
              ]}
              buttonText="Objednať Basic"
              icon={<Check className="h-6 w-6" />}
            />
          </FadeIn>
          
          <FadeIn delay="0.2s">
            <PricePlan
              title="IGLA Pro"
              price="399"
              description="Rozšírená ochrana vozidla:"
              features={[
                "Všetko z balíka Basic",
                "Anti-scanning technológia",
                "Dodatočná úroveň digitálnej ochrany",
                "Servisný režim",
                "Prémiová inštalácia"
              ]}
              buttonText="Objednať Pro"
              icon={<Check className="h-6 w-6" />}
              highlight={true}
            />
          </FadeIn>
          
          <FadeIn delay="0.3s">
            <PricePlan
              title="IGLA Alarm"
              price="499"
              description="Kompletné zabezpečenie vozidla:"
              features={[
                "Všetko z balíka Pro",
                "Integrácia s alarmovým systémom",
                "Anti-hijack funkcia",
                "Ochrana proti odťahu",
                "Najvyššia úroveň zabezpečenia",
                "3-ročná záruka"
              ]}
              buttonText="Objednať Alarm"
              icon={<Check className="h-6 w-6" />}
            />
          </FadeIn>
        </div>
        
        <div className="text-center text-muted-foreground">
          <p className="mb-4">Všetky ceny sú uvedené s DPH a zahŕňajú profesionálnu montáž.</p>
          <p>Pre viac informácií alebo individuálnu ponuku nás kontaktujte.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
