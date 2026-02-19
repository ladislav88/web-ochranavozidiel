
import React from 'react';
import FadeIn from '../animations/FadeIn';
import { Check, ArrowRight } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const TechnicalSpecifications = () => {
  const specifications = [
    "Napájacie napätie: 9-15V",
    "Spotreba energie v režime ochrany: 6-7 mA",
    "Spotreba energie v režime vypnutia: 4-5 mA",
    "Prevádzková teplota: -40°C až +85°C",
    "Rozmery: 54 x 33 x 15 mm",
    "Komunikačný protokol: CAN, LIN",
    "Šifrovanie: AES-128",
    "Kompatibilita: Všetky moderné vozidlá s CAN zbernicou",
    "IP krytie: IP67 (odolné voči vode a prachu)"
  ];

  return (
    <section className="py-12 md:py-14 bg-black relative overflow-hidden" id="specifications">
      {/* Abstract background elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-12 right-12 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Technické špecifikácie</h2>
              </div>
              
              <div className="space-y-3">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center mr-3">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-gray-300">{spec}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <p className="text-gray-400 italic">
                  IGLA je certifikovaná podľa európskych noriem a spĺňa všetky bezpečnostné požiadavky pre automobilové elektronické zariadenia.
                </p>
              </div>
              
              <div className="pt-4">
                <CustomButton 
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  href="/kontakt"
                >
                  Chcem zabezpečiť svoje vozidlo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </CustomButton>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left">
            <div className="relative">
              <img 
                src="/lovable-uploads/51c0177d-1558-4b3c-8c2b-7ecd940b537d.png" 
                alt="IGLA vehicle security system" 
                className="w-full rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Kompaktná veľkosť</h3>
                <p className="text-gray-300">
                  Zariadenie IGLA je mimoriadne malé, čo umožňuje jeho skrytú inštaláciu na rôznych miestach vozidla.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecifications;
