
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import PricingCards from '@/components/sections/PricingCards';
import { Info } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Cenník | ALCO Vehicle Security System</title>
        <meta name="description" content="Cenník našich produktov a služieb pre ALCO Vehicle Security System" />
        <link rel="canonical" href="https://ochranavozidiel.sk/pricing" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <PageHeader 
          title="Cenník"
          subtitle="Informácie o cenách a balíkoch našich produktov a služieb"
          imageSrc="/lovable-uploads/ee024d7c-8a60-425c-9be7-01068775ae7c.png"
        />
        
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-5xl mx-auto">
            <PricingCards />
            
            <div className="flex justify-center mt-8">
              <Card className="border border-[#3a86c9]/20 bg-[#3a86c9]/5 overflow-hidden max-w-3xl w-full mx-auto text-center">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4 justify-center">
                    <Info className="h-5 w-5 text-[#e06329]" />
                    <h3 className="font-semibold text-[#e06329]">Dôležité informácie</h3>
                  </div>
                  
                  <Separator className="mb-4 bg-[#3a86c9]/20" />
                  
                  <div className="space-y-1 text-sm">
                    <p>*Funkcie dostupné pri podporovaných vozidlách.</p>
                    <p>Verzia IGLA ALARM je potrebná pre niektoré typy vozidiel, napr. určité modely Volvo.</p>
                    <p>Takisto je potrebná v prípade deaktivácie systému start-stop vo vozidlách Škoda Octavia IV a Volkswagen Golf VIII.</p>
                    <p className="font-semibold pt-1">Ceny sú uvedené vrátane montáže s DPH.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PricingPage;
