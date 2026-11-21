'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';
import { services } from './services';
import styles from './redesign.module.css';
import navStyles from './siteHeader.module.css';

export default function SiteHeader({quoteHref='/kontakt#ponuka'}:{quoteHref?:string}) {
  const [menuOpen,setMenuOpen]=useState(false);
  const pathname=usePathname();
  const close=()=>setMenuOpen(false);
  useEffect(()=>{close();},[pathname]);
  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')close();};
    document.addEventListener('keydown',onKey);
    return()=>{document.removeEventListener('keydown',onKey);};
  },[]);
  return <header className={`${styles.header} ${navStyles.header}`}>
    <a href="/" className={styles.logo} aria-label="ALCO — Autoalarmy Trenčín"><img src="/alco-logo.webp" width="256" height="96" alt="ALCO"/><span>AUTOALARMY<br/><b>TRENČÍN</b></span></a>
    <nav className={`${styles.desktopNav} ${navStyles.desktopNav}`} aria-label="Hlavná navigácia">
      {services.map(({id,name,href})=><a key={id} href={href} className={id==='igla'?navStyles.primaryService:undefined} aria-current={pathname===href?'page':undefined}>{name}</a>)}
      <a href="/#montaz">Montáž</a><a href="/certifikaty" aria-current={pathname==='/certifikaty'?'page':undefined}>O nás</a><a href="/kontakt" aria-current={pathname==='/kontakt'?'page':undefined}>Kontakt</a>
    </nav>
    <div className={styles.headerActions}><a href="tel:+421911911876" className={styles.headerPhone}><Phone size={16}/>0911 911 876</a><a href={quoteHref} className={styles.smallCta}>Zistiť cenu</a><button type="button" className={styles.menuToggle} aria-label={menuOpen?'Zavrieť menu':'Otvoriť menu'} aria-expanded={menuOpen} aria-controls="site-menu" onClick={()=>setMenuOpen(v=>!v)}>{menuOpen?<X/>:<Menu/>}</button></div>
    {menuOpen&&<nav id="site-menu" aria-label="Mobilná navigácia" className={styles.mobileNav}><a href="/" onClick={close}>Domov</a>{services.map(s=><a href={s.href} key={s.id} className={s.id==='igla'?navStyles.primaryService:undefined} aria-current={pathname===s.href?'page':undefined} onClick={close}>{s.name}</a>)}<a href="/#montaz" onClick={close}>Montáž</a><a href="/certifikaty" onClick={close}>O nás</a><a href="/kontakt" onClick={close}>Kontakt</a><a href="tel:+421911911876">Zavolať 0911 911 876</a></nav>}
  </header>;
}
