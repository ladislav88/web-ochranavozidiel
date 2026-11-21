'use client';

import { useState } from 'react';
import { ShieldCheck, MapPin, Phone, Check, Fingerprint, LockKeyhole, Wrench, ArrowUpRight } from 'lucide-react';
import { services } from './services';
import ContactOffer from './ContactOffer';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Experience from './Experience';
import WelcomeLights from './WelcomeLights';
import IGLAFlagship from './IGLAFlagship';
import { SecurityFilmSection } from './SecurityFilm';
import styles from './redesign.module.css';

export default function Redesign() {
  const [selectedService,setSelectedService]=useState('igla');
  const selectService=(service:string)=>setSelectedService(service);
  return <div className={styles.site}>
    <SiteHeader quoteHref="#ponuka"/>
    <main id="main-content">
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroPhoto}><WelcomeLights/></div>
        <div className={styles.heroShade}/>
        <div className={styles.heroContent}><p className={styles.eyebrow}><span/> OCHRANA PRED KRÁDEŽOU · TRENČÍN A OKOLIE</p><h1 id="hero-heading">Vaše auto.<br/><em>V bezpečí.</em></h1><p className={styles.heroLead}>Digitálny imobilizér IGLA.<br/>Vyššia rada s Bluetooth príveskami.</p><div className={styles.heroButtons}><a href="#ponuka" className={styles.primary}>Chcem ochranu IGLA</a><a href="tel:+421911911876" className={styles.secondary}><Phone size={17}/>Poradiť sa telefonicky</a></div><p className={styles.location}><MapPin size={15}/>Montážna dielňa · Trenčín</p></div>
        <div className={styles.heroCaption}><ShieldCheck size={19}/><span>IGLA<span>DIGITÁLNY IMOBILIZÉR</span></span></div>
      </section>
      <div className={styles.benefits}><div><LockKeyhole/><span><b>Ďalšia vrstva ochrany</b><small>Samotný kľúč nemusí stačiť.</small></span></div><div><Fingerprint/><span><b>Diskrétne riešenie</b><small>Bluetooth prívesok alebo vlastný PIN.</small></span></div><div><Wrench/><span><b>Odborná montáž</b><small>Výber, inštalácia aj vysvetlenie obsluhy.</small></span></div></div>
      <IGLAFlagship/>
      <section id="riesenia" className={styles.solutions}><div className={styles.sectionIntro}><div><p className={styles.eyebrow}>OCHRANA VOZIDLA A DOPLNKOVÉ SLUŽBY</p><h2>Ochrana ako základ.<br className={styles.mobileBreak}/> Doplnky podľa vás.</h2></div><p>Hlavným zameraním je zabezpečenie vozidiel proti krádeži.<br/>GPS monitoring a parkovacie systémy ponuku dopĺňajú.</p></div><div className={styles.serviceGrid}>{services.map(({id,name,label,icon:Icon,text,href})=><article key={id} className={`${styles.serviceCard} ${id==='igla'?styles.featured:''}`}><div className={styles.serviceTop}><Icon size={29} strokeWidth={1.4}/><span>{label}</span></div><h3>{name}</h3><p>{text}</p><div className={styles.serviceBottom}><a href="#ponuka" onClick={()=>selectService(id)}>Mám záujem</a><a href={href} className={styles.detailLink}>Viac o riešení</a></div></article>)}</div></section>
      <SecurityFilmSection/>
      <section id="montaz" className={styles.install}><div className={styles.installHeading}><p className={styles.eyebrow}>OSOBNE. ODBORNE. BEZ ZBYTOČNOSTÍ.</p><h2>Od prvého kontaktu<br/>po bezpečnejšiu jazdu.</h2><a href="/certifikaty" className={styles.textLink}>Spoznajte ALCO.SK</a></div><div className={styles.installSteps}>{[['Vyberieme riešenie','Overíme možnosti podľa vášho vozidla a vysvetlíme vám rozdiely.'],['Dohodneme montáž','Potvrdíme cenu aj termín. Vopred viete, s čím počítať.'],['Odovzdáme s vysvetlením','Ukážeme obsluhu a zostaneme vaším kontaktom pre ďalšiu podporu.']].map(([title,text])=><div key={title}><Check size={18}/><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>
      <Experience/>
      <div className={styles.objectBridge}><a href="/z-praxe"><Wrench size={22}/><span><b>Na montáži záleží. Presvedčte sa sami.</b><small>Skutočný prípad pred výmenou a po našej montáži.</small></span><ArrowUpRight size={20}/></a></div>
      <ContactOffer service={selectedService}/>
    </main>
    <SiteFooter/>
  </div>;
}
