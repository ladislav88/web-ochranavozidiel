
import React from 'react';
import { Check, AlertTriangle } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import CustomButton from '../ui/CustomButton';
import { Link } from 'react-router-dom';

const FunctionalitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Princíp fungovania systému IGLA</h2>
              <div className="mt-4 h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
              IGLA je sofistikovaný digitálny imobilizér s unikátnym autorizačným systémom, ktorý chráni vozidlo bez potreby klasického ovládača.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-orange-500/30 transition-all duration-300 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center mr-4">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-lg">Systém sa automaticky aktivuje pri vypnutí zapaľovania</p>
                </div>
                
                <div className="ml-14 mt-2 text-gray-400 text-sm">
                  Bez akéhokoľvek zásahu používateľa sa IGLA aktivuje po vypnutí zapaľovania
                </div>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-orange-500/30 transition-all duration-300 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center mr-4">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-lg">Deaktivácia sa vykonáva pomocou tajnej sekvencie tlačidiel v interiéri vozidla</p>
                </div>
                
                <div className="ml-14 mt-2 text-gray-400 text-sm">
                  Jedinečná sekvencia, ktorá sa ľahko zapamätá, ale ťažko odhalí
                </div>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-orange-500/30 transition-all duration-300 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center mr-4">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-lg">Bez zadania správnej sekvencie zostane vozidlo znehybnené</p>
                </div>
                
                <div className="ml-14 mt-2 text-gray-400 text-sm">
                  Pokiaľ nie je zadaný správny kód, vozidlo sa nedá naštartovať
                </div>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-orange-500/30 transition-all duration-300 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center mr-4">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-lg">Systém je úplne neviditeľný - zlodej nevie, čo hľadať</p>
                </div>
                
                <div className="ml-14 mt-2 text-gray-400 text-sm">
                  Na rozdiel od klasických alarmov, IGLA neprezrádza svoju prítomnosť
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-orange-500/10 border border-orange-500/30 rounded-xl shadow-lg max-w-4xl mx-auto">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-orange-400 mb-1">Dôležité upozornenie</h4>
                  <p className="text-gray-300">
                    Každá IGLA má unikátny kód, ktorý nie je možné skopírovať. V prípade straty alebo zabudnutia sekvencie je k dispozícii záchranný režim.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-10">
              <Link to="/contact-request">
                <CustomButton 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg shadow-orange-500/20"
                >
                  Mám záujem o IGLA systém
                </CustomButton>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FunctionalitySection;
