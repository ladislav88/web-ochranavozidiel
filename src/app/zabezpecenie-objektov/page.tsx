import type { Metadata } from 'next';
import { ShieldCheck, Camera, Zap, ArrowUpRight } from 'lucide-react';
import SiteShell from '@/components/redesign/SiteShell';
import { PageIntro, Features } from '@/components/redesign/PageParts';
import styles from '@/components/redesign/redesign.module.css';
export const metadata:Metadata={title:'Zabezpečenie objektov | Alarmy a kamery ALCO.SK',description:'Ochrana domov, firiem a prevádzok od ALCO.SK. Alarmy, kamerové systémy a elektrické riešenia v Trenčíne a okolí. Spoznajte naše služby pre objekty.',alternates:{canonical:'https://www.autoalarmy-trencin.sk/zabezpecenie-objektov'},openGraph:{title:'Zabezpečenie objektov od ALCO.SK',description:'Alarmy, kamery a elektrické riešenia pre domy, firmy a prevádzky.',url:'https://www.autoalarmy-trencin.sk/zabezpecenie-objektov'}};
export default function ObjectSecurityPage(){return <SiteShell quoteHref="https://www.alco.sk/kontakt">
  <PageIntro eyebrow="ZABEZPEČENIE OBJEKTOV · ALCO.SK" title="Bezpečie sa nekončí" accent="pri vašom aute." description="Pod značkou ALCO.SK sa venujeme aj ochrane domov, firiem a prevádzok. Navrhujeme a montujeme bezpečnostné a elektrické systémy podľa potrieb konkrétneho objektu." visual="objekty" cta="Prejsť na ALCO.SK" ctaHref="https://www.alco.sk/"/>
  <Features eyebrow="SLUŽBY PRE VÁŠ DOMOV A FIRMU" title="Premyslené riešenia pre každý priestor." items={[
    {icon:ShieldCheck,title:'Zabezpečovacie systémy',text:'Elektronická ochrana objektu, výber vhodných prvkov a odborná montáž. Rozsah riešenia navrhujeme podľa priestoru a jeho používania.'},
    {icon:Camera,title:'Kamerové systémy',text:'Prehľad o dianí v dome, firme či prevádzke. Výber kamier, spôsob záznamu a možnosti obsluhy vysvetlíme pri návrhu.'},
    {icon:Zap,title:'Elektrické riešenia a servis',text:'Elektroinštalácie, odborné prehliadky a skúšky, dátové siete a podpora k realizovaným systémom.'},
  ]}/>
  <section className={`${styles.pageContainer} ${styles.contentSection}`}><div className={styles.ctaBand}><div><p className={styles.eyebrow}>VŠETKO O ZABEZPEČENÍ OBJEKTOV</p><h2>Spoznajte služby ALCO.SK.</h2><p>Podrobné informácie o službách, realizáciách a kontaktoch nájdete na našom hlavnom firemnom webe.</p></div><div><a href="https://www.alco.sk/" className={styles.primary}>Navštíviť www.alco.sk <ArrowUpRight size={18}/></a><a href="https://www.alco.sk/kontakt" className={styles.textLink}>Požiadať o ponuku pre objekt</a></div></div></section>
</SiteShell>;}
