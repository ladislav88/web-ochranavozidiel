import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { services, objectService } from './services';
import styles from './redesign.module.css';
export default function SiteFooter(){return <footer className={styles.siteFooter}>
  <div className={styles.footerGrid}><div className={styles.footerBrand}><a href="/" aria-label="ALCO — úvodná stránka"><img src="/alco-logo.webp" width="256" height="96" loading="lazy" alt="ALCO"/></a><p>Ochrana vozidiel.<br/>Osobný prístup od prvého kontaktu.</p><span>ALCO.SK, s.r.o. · Trenčín</span></div>
  <nav aria-label="Riešenia v pätičke"><h2>Riešenia pre vás</h2>{[...services,objectService].map(s=><a href={s.href} key={s.id}>{s.name}<ArrowUpRight size={13}/></a>)}<a href="/certifikaty">O nás a odborné zázemie<ArrowUpRight size={13}/></a></nav>
  <div className={styles.footerContact}><h2>Sme tu pre vás</h2><a href="tel:+421911911876"><Phone size={15}/>0911 911 876</a><a href="mailto:info@ochranavozidiel.sk"><Mail size={15}/>info@ochranavozidiel.sk</a><a href="/kontakt"><MapPin size={15}/>Montážna dielňa · Trenčín<br/>Bratislavská ulica</a><p className={styles.visitNote}>Návštevu si vopred dohodnite telefonicky.</p></div></div>
  <div className={styles.footerLegal}><span>© {new Date().getFullYear()} ALCO.SK, s.r.o.</span><a href="/kontakt">Kontakt a firemné údaje</a><a href="https://www.facebook.com/autoalarmytrencin" target="_blank" rel="noopener noreferrer">Facebook <ArrowUpRight size={12}/></a></div>
</footer>;}
