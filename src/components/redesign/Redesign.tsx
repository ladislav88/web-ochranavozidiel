'use client';

import { useEffect, useState } from 'react';
import { ShieldCheck, MapPin, Phone, Menu, X, Check, Fingerprint, LockKeyhole, Wrench, Mail } from 'lucide-react';
import { services } from './services';
import ContactOffer from './ContactOffer';
import styles from './redesign.module.css';

export default function Redesign() {
  const [menuOpen,setMenuOpen]=useState(false);
  const [selectedService,setSelectedService]=useState('igla');
  useEffect(()=>{
    if(!menuOpen)return;
    const listener=(e:KeyboardEvent)=>{if(e.key==='Escape')setMenuOpen(false);};
    window.addEventListener('keydown',listener);
    return()=>window.removeEventListener('keydown',listener);
  },[menuOpen]);
  const selectService=(service:string)=>{setSelectedService(service);setMenuOpen(false);};
  return <div className={styles.site}>
    <header className={styles.header}>
      <a href="#" className={styles.logo} aria-label="ALCO — Autoalarmy Trenčín"><img src="/lovable-uploads/64cc852c-8709-41b4-b5e3-74c09fbbefed.png" width="600" height="224" alt="ALCO"/><span>AUTOALARMY<br/><b>TRENČÍN</b></span></a>
      <nav className={styles.desktopNav} aria-label="Hlavná navigácia"><a href="#riesenia">Riešenia</a><a href="#montaz">Montáž</a><a href="/certifikaty">O nás</a><a href="#ponuka">Kontakt</a></nav>
      <div className={styles.headerActions}><a href="tel:+421911911876" className={styles.headerPhone}><Phone size={16}/>0911 911 876</a><a href="#ponuka" className={styles.smallCta}>Zistiť cenu</a><button className={styles.menuToggle} aria-label={menuOpen?'Zavrieť menu':'Otvoriť menu'} aria-expanded={menuOpen} aria-controls="preview-menu" onClick={()=>setMenuOpen(v=>!v)}>{menuOpen?<X/>:<Menu/>}</button></div>
      {menuOpen&&<nav id="preview-menu" aria-label="Mobilná navigácia" className={styles.mobileNav}>{[['Riešenia','#riesenia'],['Montáž','#montaz'],['O nás','/certifikaty'],['Kontakt','#ponuka']].map(([label,href])=><a key={href} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}<a href="tel:+421911911876">Zavolať 0911 911 876</a></nav>}
    </header>
    <main id="main-content">
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroPhoto}><img src="/redesign-car.webp" alt="Ilustračná fotografia grafitového auta v tmavom štúdiu" width="1600" height="1067" fetchPriority="high"/></div>
        <div className={styles.heroShade}/>
        <div className={styles.heroContent}><p className={styles.eyebrow}><span/> OCHRANA VOZIDIEL · TRENČÍN A OKOLIE</p><h1 id="hero-heading">Vaše auto.<br/><em>V bezpečí.</em></h1><p className={styles.heroLead}>Inteligentné zabezpečenie IGLA.<br/>Odborná montáž. Pokoj pri každom parkovaní.</p><div className={styles.heroButtons}><a href="#ponuka" className={styles.primary}>Vybrať zabezpečenie</a><a href="tel:+421911911876" className={styles.secondary}><Phone size={17}/>Poradiť sa telefonicky</a></div><p className={styles.location}><MapPin size={15}/>Trenčianske Stankovce pri Trenčíne</p></div>
        <div className={styles.heroCaption}><ShieldCheck size={19}/><span>IGLA<span>DIGITÁLNY IMOBILIZÉR</span></span></div>
      </section>
      <div className={styles.benefits}><div><LockKeyhole/><span><b>Ďalšia vrstva ochrany</b><small>Samotný kľúč nemusí stačiť.</small></span></div><div><Fingerprint/><span><b>Diskrétne riešenie</b><small>Autorizácia tlačidlami vo vozidle.</small></span></div><div><Wrench/><span><b>Odborná montáž</b><small>Výber, inštalácia aj vysvetlenie obsluhy.</small></span></div></div>
      <section id="riesenia" className={styles.solutions}><div className={styles.sectionIntro}><div><p className={styles.eyebrow}>VYBERTE SI SVOJU ISTOTU</p><h2>Tri riešenia.<br className={styles.mobileBreak}/> Jedna dobrá adresa.</h2></div><p>Od ochrany pred krádežou po pohodlnejšie parkovanie.<br/>Vyberieme to, čo dáva zmysel pre vaše auto.</p></div><div className={styles.serviceGrid}>{services.map(({id,name,label,icon:Icon,text,href})=><article key={id} className={`${styles.serviceCard} ${id==='igla'?styles.featured:''}`}><div className={styles.serviceTop}><Icon size={29} strokeWidth={1.4}/><span>{label}</span></div><h3>{name}</h3><p>{text}</p><div className={styles.serviceBottom}><a href="#ponuka" onClick={()=>selectService(id)}>Mám záujem</a><a href={href} className={styles.detailLink}>Viac o riešení</a></div></article>)}</div></section>
      <section id="montaz" className={styles.install}><div className={styles.installHeading}><p className={styles.eyebrow}>OSOBNE. ODBORNE. BEZ ZBYTOČNOSTÍ.</p><h2>Od prvého kontaktu<br/>po bezpečnejšiu jazdu.</h2><a href="/certifikaty" className={styles.textLink}>Spoznajte ALCO.SK</a></div><div className={styles.installSteps}>{[['Vyberieme riešenie','Overíme možnosti podľa vášho vozidla a vysvetlíme vám rozdiely.'],['Dohodneme montáž','Potvrdíme cenu aj termín. Vopred viete, s čím počítať.'],['Odovzdáme s vysvetlením','Ukážeme obsluhu a zostaneme vaším kontaktom pre ďalšiu podporu.']].map(([title,text])=><div key={title}><Check size={18}/><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>
      <ContactOffer service={selectedService}/>
    </main>
    <footer className={styles.footer}><div><b>ALCO.SK</b><span>Ochrana vozidiel. Osobný prístup.</span></div><a href="mailto:info@ochranavozidiel.sk"><Mail size={15}/>info@ochranavozidiel.sk</a><span>© {new Date().getFullYear()} ALCO.SK, s.r.o.</span></footer>
  </div>;
}
