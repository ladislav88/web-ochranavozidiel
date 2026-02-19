import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { HelpCircle, Info, BookOpen, Settings } from 'lucide-react';

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState("general");

  // Custom styling for tab indicators with icons
  const getTabIcon = (tab: string) => {
    switch(tab) {
      case "general": return <HelpCircle className="h-5 w-5 mr-2" />;
      case "installation": return <Settings className="h-5 w-5 mr-2" />;
      case "usage": return <BookOpen className="h-5 w-5 mr-2" />;
      default: return <Info className="h-5 w-5 mr-2" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Časté otázky (FAQ) | ALCO Vehicle Security System</title>
        <meta name="description" content="Odpovede na často kladené otázky o zabezpečovacom systéme IGLA a našich službách" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <PageHeader 
          title="Časté otázky (FAQ)"
          subtitle="Odpovede na často kladené otázky o zabezpečovacom systéme IGLA"
          imageSrc="/lovable-uploads/ee024d7c-8a60-425c-9be7-01068775ae7c.png"
        />
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <Tabs defaultValue="general" onValueChange={setActiveTab} className="w-full">
                  <div className="bg-zinc-800/70 p-4">
                    <TabsList className="w-full grid grid-cols-3 bg-zinc-700/50 p-1 rounded-lg">
                      <TabsTrigger 
                        value="general" 
                        className="data-[state=active]:bg-[#3a86c9] data-[state=active]:text-white flex items-center justify-center"
                      >
                        {getTabIcon("general")}
                        <span className="hidden sm:inline">Všeobecné otázky</span>
                        <span className="sm:hidden">Všeobecné</span>
                      </TabsTrigger>
                      <TabsTrigger 
                        value="installation" 
                        className="data-[state=active]:bg-[#3a86c9] data-[state=active]:text-white flex items-center justify-center"
                      >
                        {getTabIcon("installation")}
                        <span className="hidden sm:inline">Inštalácia</span>
                        <span className="sm:hidden">Inštalácia</span>
                      </TabsTrigger>
                      <TabsTrigger 
                        value="usage" 
                        className="data-[state=active]:bg-[#3a86c9] data-[state=active]:text-white flex items-center justify-center"
                      >
                        {getTabIcon("usage")}
                        <span className="hidden sm:inline">Používanie</span>
                        <span className="sm:hidden">Používanie</span>
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  {/* Všeobecné otázky */}
                  <TabsContent value="general" className="p-4 md:p-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-zinc-700 hover:bg-zinc-800/20 transition-colors">
                        <AccordionTrigger className="text-base md:text-lg font-medium hover:text-[#3a86c9] py-4">
                          Čo je to IGLA a ako funguje?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 text-sm md:text-base pb-4">
                          <div className="bg-zinc-800/30 p-4 rounded-lg">
                            <p>IGLA je zabezpečovací systém novej generácie, ktorý funguje na princípe digitálneho blokovania riadiacich jednotiek vozidla. Na rozdiel od klasických alarmov nepotrebuje žiadny špeciálny ovládač. Systém sa aktivuje a deaktivuje pomocou originálnych prvkov vozidla (tlačidlá na volante, palubnej doske, kľučky dverí) v určenej postupnosti.</p>
                            <p className="mt-2">Systém neruší komfort používania vozidla a neobmedzuje funkcie vozidla. Funguje automaticky a nevyžaduje žiadne špeciálne akcie od používateľa.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2" className="border-b border-zinc-700 hover:bg-zinc-800/20 transition-colors">
                        <AccordionTrigger className="text-base md:text-lg font-medium hover:text-[#3a86c9] py-4">
                          Aké sú hlavné výhody systému IGLA?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 text-sm md:text-base pb-4">
                          <div className="bg-zinc-800/30 p-4 rounded-lg">
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Nemá žiadny samostatný ovládač, ktorý by sa dal stratiť alebo poškodiť</li>
                              <li>Je prakticky nezistiteľný zlodejmi, pretože nie je detektovateľný žiadnymi skenermi</li>
                              <li>Odolný voči rušičkám signálu</li>
                              <li>Odolný voči kopírovaniu kľúčov a kartám</li>
                              <li>Jednoduchá obsluha - systém sa ovláda pomocou tlačidiel vo vozidle</li>
                              <li>Jednoduchá inštalácia bez zásahu do kabeláže vozidla</li>
                              <li>Funguje ako druhý imobilizér - chráni vozidlo aj v prípade, keď zlodej má originálny kľúč</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-8" className="border-b border-zinc-700 hover:bg-zinc-800/20 transition-colors">
                        <AccordionTrigger className="text-base md:text-lg font-medium hover:text-[#3a86c9] py-4">
                          Pre aké vozidlá je systém IGLA vhodný?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 text-sm md:text-base pb-4">
                          <div className="bg-zinc-800/30 p-4 rounded-lg">
                            <p>Systém IGLA je vhodný pre takmer všetky moderné vozidlá vybavené digitálnou sieťou CAN-bus. To zahŕňa väčšinu vozidiel vyrobených po roku 2000. Systém je kompatibilný so všetkými bežnými značkami ako Škoda, Volkswagen, Audi, BMW, Mercedes-Benz, Toyota, Hyundai, Kia a mnohými ďalšími.</p>
                            <p className="mt-2">Pre overenie kompatibility s konkrétnym modelom vozidla nás neváhajte kontaktovať.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-9" className="border-b border-zinc-700 hover:bg-zinc-800/20 transition-colors">
                        <AccordionTrigger className="text-base md:text-lg font-medium hover:text-[#3a86c9] py-4">
                          Aká je spotreba energie systému IGLA?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 text-sm md:text-base pb-4">
                          <div className="bg-zinc-800/30 p-4 rounded-lg">
                            <p>Systém IGLA má extrémne nízku spotrebu energie - menej ako 10 mA v pohotovostnom režime. To znamená, že nemá prakticky žiadny vplyv na batériu vozidla, aj keď je vozidlo dlhšiu dobu nepoužívané. Pre porovnanie, väčšina klasických alarmov spotrebuje 20-50 mA.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-10" className="border-b border-zinc-700 hover:bg-zinc-800/20 transition-colors">
                        <AccordionTrigger className="text-base md:text-lg font-medium hover:text-[#3a86c9] py-4">
                          Poskytujete na systém IGLA záruku?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 text-sm md:text-base pb-4">
                          <div className="bg-zinc-800/30 p-4 rounded-lg">
                            <p>Áno, na systém IGLA poskytujeme záruku 3 roky od dátumu inštalácie. Táto záruka sa vzťahuje na všetky výrobné vady a poruchy, ktoré neboli spôsobené nesprávnym používaním alebo mechanickým poškodením.</p>
                            <p className="mt-2">Navyše, systém IGLA má v praxi preukázanú veľmi vysokú spoľahlivosť s minimálnou poruchovosťou.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-11" className="border-b border-zinc-700 hover:bg-zinc-800/20 transition-colors">
                        <AccordionTrigger className="text-base md:text-lg font-medium hover:text-[#3a86c9] py-4">
                          Aké príslušenstvo je k dispozícii pre systém IGLA?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 text-sm md:text-base pb-4">
                          <div className="bg-zinc-800/30 p-4 rounded-lg">
                            <p>Pre systém IGLA je k dispozícii niekoľko voliteľných doplnkov:</p>
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                              <li><strong>Autorizačná karta</strong> - umožňuje automatické odblokovanie systému bez zadávania PIN kódu</li>
                              <li><strong>Blokovač kapoty</strong> - dodatočné mechanické zabezpečenie motorového priestoru</li>
                              <li><strong>Anti-HiJack funkcia</strong> - ochrana proti násilnému prepadnutiu počas jazdy</li>
                              <li><strong>Modul CONTOUR</strong> - rozširujúci modul pre blokovanie dodatočných okruhov</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-12" className="border-b border-zinc-700 hover:bg-zinc-800/20 transition-colors">
                        <AccordionTrigger className="text-base md:text-lg font-medium hover:text-[#3a86c9] py-4">
                          Ako si môžem objednať systém IGLA?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 text-sm md:text-base pb-4">
                          <div className="bg-zinc-800/30 p-4 rounded-lg">
                            <p>Objednanie systému IGLA je jednoduché. Môžete nás kontaktovať prostredníctvom:</p>
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                              <li>Kontaktného formulára na našej webovej stránke</li>
                              <li>Telefonicky na čísle uvedenom v sekcii Kontakt</li>
                              <li>E-mailom</li>
                            </ul>
                            <p className="mt-2">Po kontaktovaní s vami dohodneme termín inštalácie vo vašom najbližšom autorizovanom servisnom stredisku. Platba sa uskutočňuje až po inštalácii a otestovaní systému.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>

                  {/* Inštalácia */}
                  <TabsContent value="installation" className="p-4 md:p-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-3" className="border-b border-zinc-700 hover:bg-zinc-800/20 transition-colors">
                        <AccordionTrigger className="text-base md:text-lg font-medium hover:text-[#3a86c9] py-4">
                          Ako prebieha inštalácia systému IGLA?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 text-sm md:text-base pb-4">
                          <div className="bg-zinc-800/30 p-4 rounded-lg">
                            <p>Inštalácia systému IGLA je jednoduchá a trvá približne 1-2 hodiny v závislosti od typu vozidla. Systém sa inštaluje do digitálnej siete vozidla a nevyžaduje žiadne zásahy do kabeláže. Modul je veľmi malý (veľkosť pamäťovej karty) a umiestňuje sa do skrytých priestorov vozidla. Po inštalácii nie je možné systém vizuálne identifikovať.</p>
                            <p className="mt-2">Inštaláciu vykonávajú iba certifikovaní technici v autorizovaných servisoch, čo zaručuje kvalitu inštalácie a zachovanie záruky vozidla.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-4" className="border-b border-zinc-700 hover:bg-zinc-800/20 transition-colors">
                        <AccordionTrigger className="text-base md:text-lg font-medium hover:text-[#3a86c9] py-4">
                          Ovplyvňuje inštalácia systému IGLA záruku vozidla?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 text-sm md:text-base pb-4">
                          <div className="bg-zinc-800/30 p-4 rounded-lg">
                            <p>Nie. Inštalácia systému IGLA nemá žiadny vplyv na záruku vozidla. Systém sa pripája k štandardným konektorom bez zásahu do pôvodnej kabeláže vozidla. Nevyžaduje žiadne vŕtanie, rezanie káblov ani iné zásahy, ktoré by mohli ovplyvniť záruku.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-7" className="border-b border-zinc-700 hover:bg-zinc-800/20 transition-colors">
                        <AccordionTrigger className="text-base md:text-lg font-medium hover:text-[#3a86c9] py-4">
                          Je možné systém IGLA prepojiť s inými zabezpečovacími systémami?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 text-sm md:text-base pb-4">
                          <div className="bg-zinc-800/30 p-4 rounded-lg">
                            <p>Áno, systém IGLA je kompatibilný s väčšinou klasických alarmov a zabezpečovacích systémov. Môže fungovať ako samostatný systém alebo ako doplnkový zabezpečovací prvok k existujúcemu alarmu. Vďaka svojej nenápadnosti a spoľahlivosti je ideálnou druhou vrstvou ochrany, ktorá zostáva aktívna aj v prípade prelomenia hlavného alarmu.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>

                  {/* Používanie */}
                  <TabsContent value="usage" className="p-4 md:p-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-5" className="border-b border-zinc-700 hover:bg-zinc-800/20 transition-colors">
                        <AccordionTrigger className="text-base md:text-lg font-medium hover:text-[#3a86c9] py-4">
                          Ako sa systém IGLA ovláda?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 text-sm md:text-base pb-4">
                          <div className="bg-zinc-800/30 p-4 rounded-lg">
                            <p>Systém IGLA sa ovláda pomocou štandardných tlačidiel vo vozidle (napr. tlačidlá na volante, ovládanie okien, nastavenie spätných zrkadiel a pod.) v určenej postupnosti - PIN kóde. Táto postupnosť je jedinečná pre každé vozidlo a nastavuje sa pri inštalácii podľa preferencií majiteľa.</p>
                            <p className="mt-2">Pri štandardnom používaní sa systém aktivuje automaticky po vypnutí zapaľovania a uzamknutí vozidla. Deaktivuje sa automaticky po odomknutí a zapnutí zapaľovania, ak je vo vozidle prítomná autorizačná karta (voliteľné príslušenstvo) alebo po zadaní PIN kódu.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-6" className="border-b border-zinc-700 hover:bg-zinc-800/20 transition-colors">
                        <AccordionTrigger className="text-base md:text-lg font-medium hover:text-[#3a86c9] py-4">
                          Čo sa stane, ak zabudnem PIN kód?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 text-sm md:text-base pb-4">
                          <div className="bg-zinc-800/30 p-4 rounded-lg">
                            <p>V prípade, že zabudnete PIN kód, môžete použiť núdzový odblokovací kód, ktorý dostanete pri inštalácii systému. Tento kód je jedinečný pre každý systém a umožňuje jednorazové odblokovanie systému. Po použití núdzového kódu by ste mali kontaktovať inštalačné stredisko pre nastavenie nového PIN kódu.</p>
                            <p className="mt-2">Pre zvýšenú bezpečnosť odporúčame núdzový kód uschovať mimo vozidla na bezpečnom mieste.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="mt-12 bg-gradient-to-r from-zinc-900 to-zinc-800 p-6 md:p-8 rounded-xl border border-zinc-700 shadow-lg">
              <div className="flex flex-col md:flex-row items-center md:space-x-6">
                <div className="mb-6 md:mb-0">
                  <Info className="h-12 w-12 text-[#3a86c9]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#3a86c9]">Máte ďalšie otázky?</h3>
                  <p className="text-gray-300 mb-4">Neváhajte nás kontaktovať, radi vám poskytneme všetky potrebné informácie o zabezpečovacom systéme IGLA.</p>
                  <a 
                    href="/contact" 
                    className="inline-block bg-gradient-to-r from-[#3a86c9] to-[#e06329] font-medium py-2 px-6 rounded-md text-white hover:opacity-90 transition-all"
                  >
                    Kontaktujte nás
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default FAQPage;
