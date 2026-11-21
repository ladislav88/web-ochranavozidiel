'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './Experience.module.css';

const experienceYears = new Date().getFullYear() - 1996;
const metrics = [
  { value: experienceYears, label: 'rokov skúseností', detail: 'od roku 1996' },
  { value: 4680, label: 'zabezpečených vozidiel', detail: 'približný počet montáží', approximate: true },
  { value: 14, label: 'pokusov o krádež', detail: 'zaznamenaných v našej praxi' },
  { value: 0, label: 'ukradnutých vozidiel', detail: 'podľa našej evidencie' },
];
const formatNumber = (value: number) => String(value).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');

export default function Experience() {
  const section = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (!section.current || typeof IntersectionObserver === 'undefined') return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;
    let frame = 0;
    let started = false;
    let disposed = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started || disposed) return;
      started = true;
      observer.disconnect();
      const start = performance.now();
      setProgress(0);
      const animate = (now: number) => {
        if (disposed) return;
        const elapsed = Math.min((now - start) / 1500, 1);
        setProgress(1 - Math.pow(1 - elapsed, 3));
        if (elapsed < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }, { threshold: 0.2 });
    observer.observe(section.current);
    const stopAnimation = () => {
      if (!reducedMotion.matches) return;
      cancelAnimationFrame(frame);
      observer.disconnect();
      setProgress(1);
    };
    reducedMotion.addEventListener('change', stopAnimation);
    return () => {
      disposed = true;
      observer.disconnect();
      cancelAnimationFrame(frame);
      reducedMotion.removeEventListener('change', stopAnimation);
    };
  }, []);

  return <section ref={section} id="skusenosti" className={styles.section} aria-labelledby="experience-heading">
    <div className={styles.heading}><div><p className={styles.eyebrow}>NAŠA PRAX V ČÍSLACH</p><h2 id="experience-heading">Ochrane vozidiel sa venujeme<br/><em>od roku 1996.</em></h2></div><a href="/certifikaty">Spoznajte naše zázemie <ArrowUpRight size={17} aria-hidden="true"/></a></div>
    <dl className={styles.metrics}>{metrics.map(metric => <div key={metric.label}>
      <dt>{metric.label}<small>{metric.detail}</small></dt>
      <dd><span className={styles.srOnly}>{metric.approximate ? 'Približne ' : ''}{formatNumber(metric.value)}</span><span className={styles.number} aria-hidden="true">{metric.approximate && <span className={styles.approx}>≈</span>}{formatNumber(Math.round(metric.value * progress))}</span></dd>
    </div>)}</dl>
    <ol className={styles.timeline}>
      <li><span className={styles.milestone}>1996 · ZAČIATKY</span><h3>Vlastný vývoj.</h3><p>Vývoj prvotných bezpečnostných systémov a začiatky ochrany vozidiel.</p></li>
      <li><span className={styles.milestone}>ĎALŠIE OBDOBIE</span><h3>Skúsenosti s alarmami.</h3><p>Montáž systémov Magicar, Kopel, Cobra, Pandora a Keetec.</p></li>
      <li><span className={styles.milestone}>DNES · IGLA</span><h3>Digitálna autorizácia.</h3><p>Dnes sa zameriavame na digitálne zabezpečenie vozidiel systémom IGLA.</p></li>
    </ol>
    <p className={styles.note}>Historické údaje podľa našej evidencie od roku 1996. Počet zabezpečených vozidiel je približný.</p>
  </section>;
}
