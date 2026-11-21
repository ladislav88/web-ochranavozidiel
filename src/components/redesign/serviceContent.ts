import { Fingerprint, ShieldCheck, KeyRound, MapPin, Navigation, Smartphone, ScanLine, Camera, Wrench } from 'lucide-react';

export const serviceContent = {
  igla: {
    id:'igla',path:'/sofistikovane-zabezpecenie',eyebrow:'ZABEZPEČENIE VOZIDLA',title:'Zabezpečenie IGLA.',accent:'Váš kľúč nemusí stačiť.',
    description:'Digitálny imobilizér pridáva ďalšiu autorizáciu pred jazdou. Možnosti pre vaše auto overíme a systém odborne namontujeme v Trenčíne.',
    featuresTitle:'Diskrétna ochrana v každodennom živote.',features:[
      {icon:ShieldCheck,title:'Ďalšia vrstva ochrany',text:'K pôvodnému zabezpečeniu vozidla pribudne samostatná autorizácia. Samotné získanie kľúča tak nemusí stačiť na odjazd.'},
      {icon:Fingerprint,title:'Autorizácia, ktorú poznáte vy',text:'Tajná sekvencia sa zadáva pomocou vybraných tlačidiel vo vozidle. Konkrétny spôsob závisí od auta a zvoleného systému.'},
      {icon:KeyRound,title:'Prirodzená súčasť jazdy',text:'Pri odovzdaní si nastavenie spoločne prejdeme. Vyskúšate si bežné používanie aj postup, keď vozidlo odovzdávate do servisu.'},
    ],
    detailEyebrow:'AKO FUNGUJE DIGITÁLNY IMOBILIZÉR',detailTitle:'Rozdiel je v autorizácii.',
    paragraphs:['IGLA dopĺňa pôvodné zabezpečenie vozidla o ďalší autorizačný krok. Bez správnej autorizácie obmedzí možnosť neoprávnenej jazdy spôsobom, ktorý podporuje konkrétne vozidlo a verzia systému.','Pri návrhu zohľadníme značku, model, rok výroby aj spôsob štartovania. Vysvetlíme vám, čo vybrané riešenie dokáže a ako ho budete používať.'],
    points:[{title:'Najprv overenie kompatibility',text:'Zvolíme riešenie podľa konkrétneho vozidla, nie iba podľa názvu značky.'},{title:'Diskrétna montáž a nastavenie',text:'Umiestnenie aj spôsob zapojenia prispôsobíme technickým možnostiam auta.'},{title:'Vysvetlenie obsluhy',text:'Prejdeme autorizáciu, odovzdanie do servisu aj postup pri zabudnutej sekvencii.'},{title:'Kontakt aj po montáži',text:'S otázkami k používaniu sa môžete obrátiť priamo na nás.'}],
    note:'Žiadny systém nepredstavuje absolútnu ochranu pred krádežou. Rozsah funkcií a vhodnosť overujeme individuálne.',
    faq:[{q:'Dá sa IGLA namontovať do môjho auta?',a:'Závisí od značky, modelu, roku výroby a výbavy. Vyplňte údaje o vozidle vo formulári. Kompatibilitu aj dostupné riešenie vám potvrdíme pred dohodnutím montáže.'},{q:'Potrebujem pri jazde ďalší ovládač?',a:'Základom digitálnej autorizácie môže byť sekvencia zadaná tlačidlami vo vozidle. Presný spôsob obsluhy a prípadné ďalšie možnosti závisia od vybraného systému.'},{q:'Čo ak auto dávam do servisu alebo zabudnem sekvenciu?',a:'Pri odovzdaní vysvetlíme servisný režim a postup pri strate autorizačných údajov podľa konkrétnej verzie systému. Tieto postupy si prejdeme ešte pri montáži.'},{q:'Koľko stojí montáž?',a:'Cena závisí od vozidla a zvoleného riešenia. Po overení údajov vám pripravíme konkrétnu ponuku a pred montážou potvrdíme rozsah práce aj termín.'}],
  },
  gps: {
    id:'gps',path:'/pasivny-monitoring',eyebrow:'GPS MONITORING',title:'Majte prehľad.',accent:'Aj keď pri aute nie ste.',
    description:'Náš GPS monitoring prináša presnú polohu, prehľadnú mobilnú aplikáciu a viac vozidiel v jednej mape. Pre súkromné auto aj menší firemný vozový park. Cena s montážou od 280 € bez DPH.',
    featuresTitle:'GPS monitoring bez mesačného paušálu.',features:[
      {icon:MapPin,title:'Presná poloha vozidla',text:'Satelitná lokalizácia GPS a GLONASS s prenosom cez 4G LTE. Polohu auta nájdete v mobilnej aplikácii aj vo webovom rozhraní.'},
      {icon:Smartphone,title:'Viac vozidiel v jednej mape',text:'Prehľadná aplikácia pre vaše auto aj menší vozový park. Sledujte polohu a históriu jázd svojich vozidiel na jednom mieste.'},
      {icon:Wrench,title:'S montážou od 280 € bez DPH',text:'Kvalitný GPS lokalizátor a odborná montáž v Trenčíne. Po inštalácii systém nastavíme, odskúšame a vysvetlíme používanie.'},
    ],
    detailEyebrow:'DOPLNOK ZABEZPEČENIA',detailTitle:'Vedieť, kde je auto. Rozumieť možnostiam.',
    paragraphs:['Montujeme kvalitné GPS lokalizátory pre súkromné vozidlá aj spoločnosti s menším vozovým parkom. Polohu a históriu jázd si pozriete v mobilnej aplikácii alebo cez internetový prehliadač.','Za samotný monitoring neplatíte mesačný paušál. Stačí si dodať vlastnú SIM kartu s dátovým pripojením. Cena zariadenia s odbornou montážou začína od 280 € bez DPH.'],
    points:[{title:'Výber podľa používania',text:'Iné požiadavky má rodinné auto, iné vozidlo používané pravidelne na prácu.'},{title:'Bez paušálu za monitoring',text:'Bez mesačného predplatného monitoringu. Do zariadenia si dodáte vlastnú SIM kartu s dátovým pripojením.'},{title:'História a export trás cez web',text:'Históriu jázd nájdete v aplikácii aj na webe. Možnosti exportu trás prejdeme v používanom webovom rozhraní.'},{title:'Možnosť doplniť imobilizér',text:'Ak chcete aj ďalšiu autorizáciu pred jazdou, prejdeme možnosti systému IGLA.'}],
    note:'Lokalizácia a upozornenia závisia od signálu, napájania, pripojenia a podmienok vybranej služby.',
    faq:[{q:'Je GPS monitoring to isté ako ochrana proti odjazdu?',a:'Nie. Monitoring pomáha zistiť polohu a podľa riešenia hlási udalosti. Digitálny imobilizér pridáva autorizáciu pred jazdou. Pri výbere vysvetlíme, ktoré riešenie zodpovedá vašej požiadavke.'},{q:'Budem platiť pravidelný poplatok?',a:'Za samotný GPS monitoring neplatíte mesačný paušál. Do zariadenia si dodáte vlastnú SIM kartu s dátovým pripojením. Nastavenie a používanie vám ukážeme pri odovzdaní vozidla.'},{q:'Uvidím polohu auta v telefóne?',a:'Áno, polohu a históriu jázd si zobrazíte v mobilnej aplikácii pre Android a iOS alebo vo webovom rozhraní. Do účtu môžete pridať viac vozidiel.'},{q:'Dá sa monitoring kombinovať s IGLA?',a:'Možnosti kombinácie posúdime podľa vozidla a zvolenej zostavy. Vo formulári môžete uviesť, že máte záujem o lokalizáciu aj ďalšiu ochranu proti neoprávnenej jazde.'}],
  },
  senzory: {
    id:'senzory',path:'/parkovacie-senzory',eyebrow:'PARKOVACIE SENZORY A KAMERY',title:'Parkovanie s istotou.',accent:'Aj v tesnom priestore.',
    description:'Doplňte svoje vozidlo o parkovacie senzory alebo cúvaciu kameru. Navrhneme vhodnú zostavu, postaráme sa o montáž a ukážeme vám obsluhu.',
    featuresTitle:'Pohodlnejšie manévrovanie každý deň.',features:[
      {icon:ScanLine,title:'Lepší odhad vzdialenosti',text:'Zvukové alebo obrazové upozornenie pomáha pri približovaní k prekážke. Spôsob signalizácie zvolíme podľa zostavy.'},
      {icon:Camera,title:'Senzory aj kamera',text:'Zadné senzory, predná a zadná zostava alebo kombinácia s kamerou. Vhodnosť overíme pre konkrétne vozidlo.'},
      {icon:Wrench,title:'Čisté prevedenie montáže',text:'Dôraz na umiestnenie snímačov, zapojenie a výsledný vzhľad. Rozsah práce si potvrdíme ešte pred montážou.'},
    ],
    detailEyebrow:'RIEŠENIE PODĽA VAŠEJ VÝBAVY',detailTitle:'Vyberieme zostavu, ktorá zapadne.',
    paragraphs:['Pri parkovaní oceníte prehľad o priestore za autom aj pred ním. Konkrétna zostava závisí od nárazníkov, existujúcej elektroniky a toho, ako chcete prijímať upozornenia.','Pred montážou si prejdeme umiestnenie senzorov, možnosti kamery a potrebné úpravy. Po zapojení systém odskúšame a vysvetlíme jeho používanie.'],
    points:[{title:'Zadné parkovacie senzory',text:'Praktická zostava na upozornenie pri cúvaní k prekážke.'},{title:'Predné aj zadné snímače',text:'Rozšírené riešenie pre manévrovanie na oboch koncoch vozidla.'},{title:'Kombinácia s kamerou',text:'Obraz z kamery môže doplniť signalizáciu snímačov podľa možností vozidla.'},{title:'Ponuka pred montážou',text:'Overíme kompatibilitu, spôsob zobrazenia, rozsah práce aj konečnú cenu.'}],
    note:'Senzory a kamera sú pomocníci pri parkovaní. Nenahrádzajú pozornosť vodiča a kontrolu okolia vozidla.',
    faq:[{q:'Koľko trvá montáž parkovacích senzorov?',a:'Pri základnej zostave zadných senzorov býva montáž kratšia než pri prednej a zadnej zostave alebo kombinácii s kamerou. Konkrétny čas a termín potvrdíme podľa vozidla a rozsahu práce.'},{q:'Je potrebné vŕtanie do nárazníka?',a:'Pri zabudovaných senzoroch sú potrebné otvory v nárazníku. Umiestnenie aj potrebné úpravy vám vysvetlíme pred montážou.'},{q:'Dá sa pripojiť kamera na pôvodný displej?',a:'Závisí od vozidla, multimediálneho systému a dostupných rozhraní. Možnosť pripojenia overíme individuálne; ak to vozidlo neumožňuje, prejdeme iný spôsob zobrazenia.'},{q:'Fungujú senzory v daždi a v zime?',a:'Systémy sú určené na používanie vo vozidle aj za meniaceho sa počasia. Sneh, ľad alebo nečistoty na snímačoch však môžu ovplyvniť funkciu, preto je potrebné udržiavať ich čisté.'}],
  },
};
