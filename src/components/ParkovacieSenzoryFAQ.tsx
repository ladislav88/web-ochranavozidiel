'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ_ITEMS = [
  {
    q: 'Koľko trvá montáž parkovacích senzorov?',
    a: 'Štandardná montáž 4 senzorov na zadný nárazník trvá približne 2–3 hodiny. Pri kombinácii predný + zadný nárazník alebo s kamerou počítajte s 4–6 hodinami.',
  },
  {
    q: 'Fungujú parkovacie senzory aj v zime a daždi?',
    a: 'Kvalitné senzory odolávajú nepriaznivému počasiu. Ultrasonické senzory fungujú spoľahlivo aj pri nízkej teplote a jemnom daždi. Pri silnom daždi môže byť presnosť mierne znížená.',
  },
  {
    q: 'Je potrebné vŕtanie do nárazníka?',
    a: 'Áno. Pre montáž senzorov je nevyhnutné vyvŕtať otvory do nárazníka. Používame laserové zarovnanie pre presné umiestnenie a profesionálne náradie, aby bol výsledok ako od výrobcu.',
  },
  {
    q: 'Dá sa montáž urobiť bez zásahu do originálnej elektroniky?',
    a: 'Záleží na type vozidla. Väčšina systémov sa pripája k palubnej sieťovej zásuvke (12V) a nevyžaduje zásah do CAN zbernice. Pri novších autách odporúčame individuálnu konzultáciu.',
  },
  {
    q: 'Aký je rozdiel medzi lacnými a kvalitnými parkovacími senzorom?',
    a: 'Lacné senzory majú často horšiu presnosť, nižšiu životnosť a menej diskrétny vzhľad. Kvalitné senzory vydržia roky, majú OEM vzhľad a spoľahlivé varovanie. Montujeme výhradne overené systémy.',
  },
  {
    q: 'Viete namontovať senzory aj na nové alebo modernejšie auto?',
    a: 'Áno. Montáž parkovacích senzorov vykonávame aj na nové vozidlá bez pôvodnej výbavy, ako aj na staršie modely. Každé vozidlo vyžaduje individuálny prístup a výber vhodného systému.',
  },
  {
    q: 'Môžem doplniť parkovacie senzory o zadnú kameru?',
    a: 'Áno. Ponúkame kombinácie senzory + kamera, čo zvýši komfort a bezpečnosť pri manévrovaní. Cenová ponuka je vždy individuálna podľa typu vozidla.',
  },
  {
    q: 'Aká je záruka na montáž?',
    a: 'Na našu prácu poskytujeme záruku. Konkrétne záručné podmienky a obdobia závisia od použitých komponentov – preberieme ich pri osobnej konzultácii.',
  },
];

export default function ParkovacieSenzoryFAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {FAQ_ITEMS.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-left">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
