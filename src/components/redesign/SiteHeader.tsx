'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { services, objectService } from './services';
import styles from './redesign.module.css';

export default function SiteHeader({quoteHref='/kontakt#ponuka'}:{quoteHref?:string}) {
  const [menuOpen,setMenuOpen]=useState(false);
  const solutions=useRef<HTMLDetailsElement>(null);
  const pathname=usePathname();
  const close=()=>{setMenuOpen(false);if(solutions.current)solutions.current.open=false;};
  useEffect(()=>{close();},[pathname]);
  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')close();};
    const onClick=(e:MouseEvent)=>{if(solutions.current&&!solutions.current.contains(e.target as Node))solutions.current.open=false;};
    document.addEventListener('keydown',onKey);document.addEventListener('click',onClick);
    return()=>{document.removeEventListener('keydown',onKey);document.removeEventListener('click',onClick);};
  },[]);
  return <header className={styles.header}>
    <a href="/" className={styles.logo} aria-label="ALCO — Autoalarmy Trenčín"><img src="/alco-logo.webp" width="256" height="96" alt="ALCO"/><span>AUTOALARMY<br/><b>TRENČÍN</b></span></a>
    <nav className={styles.desktopNav} aria-label="Hlavná navigácia">
      <details ref={solutions} className={styles.navDropdown}><summary>Riešenia <ChevronDown size={14}/></summary><div className={styles.navDropdownPanel}>{[...services,objectService].map(({id,name,label,href,icon:Icon})=><a key={id} href={href} aria-current={pathname===href?'page':undefined} onClick={close}><Icon size={20}/><span><b>{name}</b><small>{label}</small></span><ArrowUpRight size={15}/></a>)}</div></details>
      <a href="/#montaz">Montáž</a><a href="/certifikaty" aria-current={pathname==='/certifikaty'?'page':undefined}>O nás</a><a href="/kontakt" aria-current={pathname==='/kontakt'?'page':undefined}>Kontakt</a>
    </nav>
    <div className={styles.headerActions}><a href="tel:+421911911876" className={styles.headerPhone}><Phone size={16}/>0911 911 876</a><a href={quoteHref} className={styles.smallCta}>Zistiť cenu</a><button type="button" className={styles.menuToggle} aria-label={menuOpen?'Zavrieť menu':'Otvoriť menu'} aria-expanded={menuOpen} aria-controls="site-menu" onClick={()=>setMenuOpen(v=>!v)}>{menuOpen?<X/>:<Menu/>}</button></div>
    {menuOpen&&<nav id="site-menu" aria-label="Mobilná navigácia" className={styles.mobileNav}><a href="/" onClick={close}>Domov</a>{[...services,objectService].map(s=><a href={s.href} key={s.id} aria-current={pathname===s.href?'page':undefined} onClick={close}>{s.name}</a>)}<a href="/certifikaty" onClick={close}>O nás</a><a href="/kontakt" onClick={close}>Kontakt</a><a href="tel:+421911911876">Zavolať 0911 911 876</a></nav>}
  </header>;
}
