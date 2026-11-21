'use client';

import { useState } from 'react';
import { ShieldCheck, MapPin, Phone, Check, Fingerprint, LockKeyhole, Wrench, Building2, ArrowUpRight } from 'lucide-react';
import { services } from './services';
import ContactOffer from './ContactOffer';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Experience from './Experience';
import styles from './redesign.module.css';

export default function Redesign() {
  const [selectedService,setSelectedService]=useState('igla');
  const selectService=(service:string)=>setSelectedService(service);
  return <div className={styles.site}>
    <SiteHeader quoteHref="#ponuka"/>
    <main id="main-content">
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroPhoto}><img src="/hero-black-suv.webp" alt="Ilustračná vizualizácia čierneho SUV so zapnutými svetlami" width="1440" height="960" fetchPriority="high"/></div>
        <div className={styles.heroShade}/>
        <div className={styles.heroContent}><p className={styles.eyebrow}><span/> OCHRANA VOZIDIEL · TRENČÍN A OKOLIE</p><h1 id="hero-heading">Vaše auto.<br/><em>V bezpečí.</em></h1><p className={styles.heroLead}>Inteligentné zabezpečenie IGLA.<br/>Odborná montáž. Pokoj pri každom parkovaní.</p><div className={styles.heroButtons}><a href="#ponuka" className={styles.primary}>Vybrať zabezpečenie</a><a href="tel:+421911911876" className={styles.secondary}><Phone size={17}/>Poradiť sa telefonicky</a></div><p className={styles.location}><MapPin size={15}/>Montážna dielňa · Trenčín</p></div>
        <div className={styles.heroCaption}><ShieldCheck size={19}/><span>IGLA<span>DIGITÁLNY IMOBILIZÉR</span></span></div>
      </section>
      <div className={styles.benefits}><div><LockKeyhole/><span><b>Ďalšia vrstva ochrany</b><small>Samotný kľúč nemusí stačiť.</small></span></div><div><Fingerprint/><span><b>Diskrétne riešenie</b><small>Autorizácia tlačidlami vo vozidle.</small></span></div><div><Wrench/><span><b>Odborná montáž</b><small>Výber, inštalácia aj vysvetlenie obsluhy.</small></span></div></div>
      <section id="riesenia" className={styles.solutions}><div className={styles.sectionIntro}><div><p className={styles.eyebrow}>VYBERTE SI SVOJU ISTOTU</p><h2>Tri riešenia.<br className={styles.mobileBreak}/> Jedna dobrá adresa.</h2></div><p>Od ochrany pred krádežou po pohodlnejšie parkovanie.<br/>Vyberieme to, čo dáva zmysel pre vaše auto.</p></div><div className={styles.serviceGrid}>{services.map(({id,name,label,icon:Icon,text,href})=><article key={id} className={`${styles.serviceCard} ${id==='igla'?styles.featured:''}`}><div className={styles.serviceTop}><Icon size={29} strokeWidth={1.4}/><span>{label}</span></div><h3>{name}</h3><p>{text}</p><div className={styles.serviceBottom}><a href="#ponuka" onClick={()=>selectService(id)}>Mám záujem</a><a href={href} className={styles.detailLink}>Viac o riešení</a></div></article>)}</div></section>
      <div className={styles.objectBridge}><a href="/zabezpecenie-objektov"><Building2 size={22}/><span><b>Chránime aj váš domov a firmu.</b><small>Zabezpečenie objektov od ALCO.SK</small></span><ArrowUpRight size={20}/></a></div>
      <section id="montaz" className={styles.install}><div className={styles.installHeading}><p className={styles.eyebrow}>OSOBNE. ODBORNE. BEZ ZBYTOČNOSTÍ.</p><h2>Od prvého kontaktu<br/>po bezpečnejšiu jazdu.</h2><a href="/certifikaty" className={styles.textLink}>Spoznajte ALCO.SK</a></div><div className={styles.installSteps}>{[['Vyberieme riešenie','Overíme možnosti podľa vášho vozidla a vysvetlíme vám rozdiely.'],['Dohodneme montáž','Potvrdíme cenu aj termín. Vopred viete, s čím počítať.'],['Odovzdáme s vysvetlením','Ukážeme obsluhu a zostaneme vaším kontaktom pre ďalšiu podporu.']].map(([title,text])=><div key={title}><Check size={18}/><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>
      <Experience/>
      <div className={styles.objectBridge}><a href="/z-praxe"><Wrench size={22}/><span><b>Na montáži záleží. Presvedčte sa sami.</b><small>Skutočný prípad pred výmenou a po našej montáži.</small></span><ArrowUpRight size={20}/></a></div>
      <ContactOffer service={selectedService}/>
    </main>
    <SiteFooter/>
  </div>;
}
