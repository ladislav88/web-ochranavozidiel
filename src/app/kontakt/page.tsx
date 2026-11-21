import type { Metadata } from 'next';
import { Phone, Mail, MapPin, ArrowUpRight, ChevronDown } from 'lucide-react';
import SiteShell from '@/components/redesign/SiteShell';
import ContactOffer from '@/components/redesign/ContactOffer';
import { PageIntro } from '@/components/redesign/PageParts';
import styles from '@/components/redesign/redesign.module.css';
const SITE_URL = 'https://www.autoalarmy-trencin.sk';
const PAGE_URL = SITE_URL + '/kontakt';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontakt ALCO.SK – autoalarmy a zabezpečenie vozidiel. Montážna dielňa: Bratislavská ulica, Trenčín. Návštevy po dohode na 0911 911 876.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Kontakt | Autoalarmy Trenčín',
    description: 'Kontaktné údaje. Cenová ponuka pre zabezpečenie vozidiel.',
    url: PAGE_URL,
    images: [{ url: SITE_URL + '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Kontakt | Autoalarmy Trenčín',
  },
};


export default function ContactPage(){return <SiteShell quoteHref="#ponuka">
  <PageIntro eyebrow="KONTAKT" title="Porozprávajme sa." accent="O vašom aute." description="Vyberieme vhodné riešenie, vysvetlíme možnosti a dohodneme ďalší postup. Nájdete nás v Trenčíne. Návštevu montážnej dielne je potrebné vopred dohodnúť telefonicky." cta="Napísať nezáväzný dopyt"/>
  <section className={`${styles.pageContainer} ${styles.contactCards}`} aria-label="Kontaktné údaje">
    <a href="tel:+421911911876"><Phone size={24}/><small>ZAVOLAJTE NÁM</small><h2>0911 911 876</h2><p>Pred návštevou si vždy dohodnite termín.</p><ArrowUpRight size={19}/></a>
    <a href="mailto:info@ochranavozidiel.sk"><Mail size={24}/><small>NAPÍŠTE NÁM</small><h2>info@ochranavozidiel.sk</h2><p>Vaše otázky aj údaje o vozidle.</p><ArrowUpRight size={19}/></a>
    <a href="https://www.google.com/maps/search/?api=1&query=Bratislavsk%C3%A1%20ulica%2C%20Tren%C4%8D%C3%ADn" target="_blank" rel="noopener noreferrer"><MapPin size={24}/><small>MONTÁŽNA DIELŇA</small><h2>Trenčín</h2><p>Bratislavská ulica · Otvoriť mapu<br/>Návšteva iba po telefonickej dohode.</p><ArrowUpRight size={19}/></a>
  </section>
  <div id="contact"><ContactOffer/></div>
  <section id="firemne-udaje" className={`${styles.pageContainer} ${styles.contentSection} ${styles.companySection}`}><div className={styles.contentHeading}><p className={styles.eyebrow}>TRANSPARENTNE A NA JEDNOM MIESTE</p><h2>Firemné údaje</h2><p>ALCO.SK, s.r.o.<br/>Mgr. Ladislav Husár — konateľ</p></div><div><dl className={styles.companyDetails}><div><dt>Sídlo spoločnosti</dt><dd>Malé Stankovce 237<br/>913 11 Trenčianske Stankovce<br/><small>Fakturačná adresa</small></dd></div><div><dt>IČO</dt><dd>45601259</dd></div><div><dt>IČ DPH</dt><dd>SK2023064032</dd></div><div><dt>Obchodný register</dt><dd>Oddiel Sro, vložka 23214/R</dd></div><div><dt>Licencia technickej služby</dt><dd>PT 003641 · KR PZ Trenčín</dd></div></dl><details className={styles.billingDetails}><summary>Bankové spojenie <ChevronDown size={17}/></summary><p>Tatra banka, a.s.<br/>IBAN: SK8011000000002929839541</p></details></div></section>
</SiteShell>;}
