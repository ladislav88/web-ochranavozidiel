import type { Metadata } from 'next';
import { ShieldCheck, Wrench, MessageCircle, FileBadge, ArrowRight, MapPin, Phone } from 'lucide-react';
import SiteShell from '@/components/redesign/SiteShell';
import { PageIntro, Features, DetailSection, RelatedSolutions } from '@/components/redesign/PageParts';
import styles from '@/components/redesign/redesign.module.css';
const SITE_URL = 'https://www.autoalarmy-trencin.sk';
const PAGE_URL = SITE_URL + '/certifikaty';

export const metadata: Metadata = {
  title: 'O nás a odborné zázemie | ALCO.SK',
  description:
    'Spoznajte ALCO.SK, s.r.o. Odborná montáž zabezpečenia vozidiel, GPS a parkovacích systémov v Trenčianskych Stankovciach pri Trenčíne.',
  alternates: {
    canonical: PAGE_URL,
  },
};


export default function AboutPage(){return <SiteShell>
  <PageIntro eyebrow="O NÁS · ALCO.SK" title="Za ochranou auta" accent="stoja konkrétni ľudia." description="Sme ALCO.SK, s.r.o. V Trenčianskych Stankovciach pri Trenčíne sa venujeme zabezpečeniu vozidiel, GPS riešeniam a parkovacím systémom. Od výberu až po podporu zostávate v kontakte s nami." visual="about" cta="Prebrať možnosti pre moje auto"/>
  <Features eyebrow="ČO JE PRE NÁS PODSTATNÉ" title="Dobrá montáž začína dobrým rozhovorom." items={[
    {icon:MessageCircle,title:'Najprv počúvame',text:'Zaujíma nás, aké auto používate a čo od riešenia očakávate. Rozdiely vysvetlíme zrozumiteľne.'},
    {icon:Wrench,title:'Záleží nám na prevedení',text:'Výber, umiestnenie a zapojenie prispôsobíme vozidlu. Pri odovzdaní si spoločne prejdeme fungovanie.'},
    {icon:ShieldCheck,title:'Zostávame vaším kontaktom',text:'Záručný aj pozáručný servis a technická podpora k nami montovaným systémom sú súčasťou nášho prístupu.'},
  ]}/>
  <DetailSection eyebrow="NAŠE ZAMERANIE" title="Ochrana vozidiel. Odborný prístup." points={[
    {title:'Digitálne zabezpečenie',text:'Ďalšia autorizácia pred jazdou a výber riešenia podľa konkrétneho auta.'},
    {title:'GPS a lokalizačné systémy',text:'Prehľad o vozidle podľa vašich požiadaviek a funkcií zvolenej zostavy.'},
    {title:'Parkovacie systémy',text:'Snímače a kamery pre lepší prehľad pri manévrovaní.'},
  ]}><p>ALCO.SK, s.r.o. vznikla transformáciou živnostenskej činnosti. Naše zameranie vyrástlo z praxe v oblasti ochrany vozidiel a autoelektroniky.</p><p>Pri každom aute nám záleží na kvalite práce a na tom, aby majiteľ rozumel používaniu systému. Preto sa venujeme aj poradenstvu, nastaveniu a následnej podpore.</p></DetailSection>
  <section id="opravnenie" className={`${styles.pageContainer} ${styles.contentSection}`}><div className={styles.credentialPanel}><div className={styles.credentialIcon}><FileBadge size={36} strokeWidth={1.3}/></div><div><p className={styles.eyebrow}>ODBORNÉ ZÁZEMIE</p><h2>Technická služba ALCO.SK</h2><p>Licencia na prevádzkovanie technickej služby č. PT 003641, vydaná Krajským riaditeľstvom Policajného zboru v Trenčíne. Na doklade je uvedená platnosť do 27. novembra 2033. Rozsah zahŕňa projektovanie, montáž, údržbu, revíziu a opravu.</p><a className={styles.documentLink} href="/doklady/licencia-technickej-sluzby.webp" target="_blank" rel="noopener noreferrer"><img src="/doklady/licencia-technickej-sluzby.webp" width="701" height="1024" loading="lazy" alt="Licencia technickej služby ALCO.SK č. PT 003641"/><span><b>Licencia technickej služby</b><small>PT 003641 · Otvoriť celý doklad</small></span><ArrowRight size={18}/></a><a href="/kontakt#firemne-udaje" className={styles.textLink}>Kontaktné a firemné údaje <ArrowRight size={15}/></a></div></div></section>
  <RelatedSolutions/>
  <section className={`${styles.pageContainer} ${styles.contentSection}`}><div className={styles.ctaBand}><div><p className={styles.eyebrow}>TRENČIANSKE STANKOVCE PRI TRENČÍNE</p><h2>Začnime vaším autom.</h2><p>Napíšte nám alebo zavolajte. Možnosti aj termín prejdeme spoločne.</p></div><div><a href="/kontakt#ponuka" className={styles.primary}>Vyžiadať ponuku <ArrowRight size={17}/></a><a href="tel:+421911911876" className={styles.introPhone}><Phone size={16}/>0911 911 876</a></div></div></section>
</SiteShell>;}
