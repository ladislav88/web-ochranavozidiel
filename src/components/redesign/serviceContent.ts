import { Fingerprint, ShieldCheck, KeyRound, MapPin, Navigation, Smartphone, ScanLine, Camera, Wrench } from 'lucide-react';

export const serviceContent = {
  igla: {
    id:'igla',path:'/sofistikovane-zabezpecenie',eyebrow:'IGLA · DIGITÁLNA OCHRANA VOZIDLA',title:'Vaše auto.',accent:'Len s vaším súhlasom.',
    description:'Certifikovaný partner IGLA v Trenčíne s 26 rokmi praxe. Montujeme vyššiu radu digitálneho imobilizéra s Bluetooth príveskami a vlastným PIN-om. Od 480 € bez DPH vrátane BT príveskov a odbornej montáže.',
    featuresTitle:'Originálny kľúč už nemusí stačiť.',features:[
      {icon:ShieldCheck,title:'Ochrana pred neoprávneným odjazdom',text:'IGLA pridáva nezávislé overenie vodiča. Bez platnej autorizácie digitálne blokuje odjazd spôsobom podporovaným konkrétnym vozidlom.'},
      {icon:Fingerprint,title:'Bluetooth prívesok alebo vlastný PIN',text:'Stačí jeden spôsob autorizácie. Pohodlné overenie príveskom dopĺňa vlastný PIN cez pôvodné tlačidlá vozidla.'},
      {icon:KeyRound,title:'Automaticky pripravená chrániť',text:'Po vypnutí zapaľovania sa ochrana aktivuje automaticky. Bez ďalšieho mesačného paušálu za používanie imobilizéra.'},
    ],
    detailEyebrow:'DIGITÁLNE BLOKOVANIE · ROKY VÝVOJA',detailTitle:'GPS hľadá polohu. IGLA overuje vodiča.',
    paragraphs:['Kým GPS lokalizátor pomáha zistiť polohu vozidla, IGLA rieši oprávnenie na odjazd. Digitálne blokovanie cez dátovú zbernicu nezávisí od GPS ani mobilného signálu. Ak nie je dostupná bezdrôtová autorizácia príveskom, zostáva možnosť vlastného PIN-u.','Systém nastavujeme pre konkrétny model a výbavu auta. Podľa možností vozidla môže blokovať štartovanie, chod motora alebo automatickú prevodovku. Preto najprv overíme vaše auto a až potom potvrdíme zostavu a cenu.'],
    points:[{title:'Vyššia rada s BT príveskami',text:'Komfortná bezdotyková autorizácia príveskom alebo vlastný PIN cez pôvodné tlačidlá. BT prívesky sú zahrnuté už v cene od 480 € bez DPH s montážou.'},{title:'Skrytá montáž spravidla 2–3 hodiny',text:'Minimálny zásah do auta, nenápadný modul a nízky odber. Presný čas závisí od vozidla a rozsahu zostavy.'},{title:'Servisný režim a núdzová karta',text:'Vysvetlíme odovzdanie auta do servisu aj núdzové odblokovanie majiteľom pomocou jeho bezpečnostnej karty.'},{title:'Homologizácia pre EÚ',text:'IGLA je homologizovaná a certifikovaná pre použitie vo vozidlách v EÚ. Dokumentáciu a požiadavky konkrétnej poisťovne prejdeme pred montážou.'}],
    note:'Doplnkové funkcie, napríklad dotiahnutie okien, úprava štart-stop alebo doplnenie GPS, závisia od vozidla a zvolenej zostavy. Konkrétny rozsah si potvrdíme v ponuke.',
    faq:[
      {q:'Funguje IGLA v mojom aute?',a:'Distribútor uvádza podporu viac ako 1 500 modelov vo viac ako 40 značkách. Pošlite značku, model a rok výroby. Kompatibilitu, výbavu aj podporovanú verziu vám overíme. Ak model ešte nie je podporovaný, preveríme možnosť doplnenia podpory u výrobcu.'},
      {q:'Prečo doplniť zabezpečenie z výroby?',a:'Originálne zabezpečenie nemusí odolať každému spôsobu neoprávneného použitia auta. IGLA pridáva samostatnú autorizáciu vodiča, takže samotné získanie alebo napodobnenie originálneho kľúča nemusí stačiť na odjazd.'},
      {q:'Ako sa IGLA ovláda?',a:'Ponúkame vyššiu radu s Bluetooth príveskami. Autorizovať sa môžete Bluetooth príveskom alebo vlastným PIN-om cez podporované pôvodné tlačidlá auta. Stačí jeden z týchto spôsobov.'},
      {q:'Čo ak sa vybije batéria prívesku?',a:'Zostáva váš PIN cez originálne tlačidlá. Nepotrebuje batériu prívesku, GPS ani mobilné dáta. Konkrétnu sekvenciu a spôsob potvrdenia si vyskúšate pri odovzdaní auta.'},
      {q:'Ako funguje núdzové odblokovanie?',a:'Majiteľ môže použiť vlastnú bezpečnostnú kartu s núdzovým kódom. Presný postup podľa vašej verzie systému vám vysvetlíme pri montáži. Kartu a autorizačné údaje odovzdáme priamo vám.'},
      {q:'Môžem auto odovzdať do servisu alebo na STK?',a:'Áno. Pred odovzdaním zapnete servisný režim podľa postupu vašej verzie IGLA. Servis tak môže s vozidlom pracovať bez prezradenia vášho osobného PIN-u. Obsluhu si spoločne prejdeme.'},
      {q:'Je IGLA odolná voči rušičkám?',a:'Digitálne blokovanie nevyužíva GPS ani mobilnú sieť. Ak nie je dostupná bezdrôtová autorizácia príveskom, je možné použiť vlastný PIN cez tlačidlá. Rozsah ochrany závisí od auta a správnej montáže.'},
      {q:'Ako dlho trvá montáž a čo záruka auta?',a:'Spravidla 2–3 hodiny, pri niektorých autách dlhšie. IGLA umožňuje digitálne blokovanie bez potreby prerušiť pôvodné blokované obvody. Konkrétny zásah aj prípadné požiadavky predajcu na záruku prejdeme pred montážou.'},
      {q:'Akceptuje systém moja poisťovňa?',a:'IGLA je homologizovaná a certifikovaná pre použitie v EÚ. Pred montážou prejdeme požadované doklady a podmienky vašej konkrétnej poistnej zmluvy, aby dodatočné zabezpečenie zodpovedalo jej požiadavkám.'},
      {q:'Čo znamená údaj 0 krádeží?',a:'Ide o počet ukradnutých zabezpečených vozidiel podľa evidencie ALCO.SK, ktorú uvádzame pri našej praxi. Je to údaj z našich skúseností, nie prísľub absolútnej ochrany za všetkých okolností.'},
      {q:'Koľko stojí IGLA s montážou?',a:'Naša ponuka začína od 480 € bez DPH vrátane Bluetooth príveskov a odbornej montáže. Kompatibilitu, konkrétnu zostavu a prípadné doplnky potvrdíme v ponuke pred montážou. Za používanie samotného imobilizéra sa neplatí mesačný paušál.'},
    ],
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
