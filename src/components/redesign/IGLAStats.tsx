'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './serviceShowcase.module.css';
export default function IGLAStats(){
 const ref=useRef<HTMLDivElement>(null);const [progress,setProgress]=useState(0);const [started,setStarted]=useState(false);
 useEffect(()=>{const el=ref.current;if(!el)return;let frame=0;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;const observer=new IntersectionObserver(entries=>{if(!entries.some(e=>e.isIntersecting))return;observer.disconnect();setStarted(true);if(reduced){setProgress(1);return;}const start=performance.now();const tick=(now:number)=>{const t=Math.min((now-start)/1400,1);setProgress(1-Math.pow(1-t,3));if(t<1)frame=requestAnimationFrame(tick);};frame=requestAnimationFrame(tick);},{threshold:.35});observer.observe(el);return()=>{observer.disconnect();cancelAnimationFrame(frame);};},[]);
 return <div ref={ref} className={`${styles.stats} ${started?styles.statsStarted:''}`}><div><strong aria-label="26 rokov"><span aria-hidden="true" className={styles.count}>{Math.round(26*progress)} rokov</span></strong><span>praxe ALCO.SK v zabezpečení vozidiel</span></div><div><strong aria-label="1 500 a viac"><span aria-hidden="true" className={styles.count}>{Math.round(1500*progress).toLocaleString('sk-SK')}+</span></strong><span>podporovaných modelov podľa distribútora; konkrétne auto overíme</span></div><div><strong>0 krádeží</strong><span>zabezpečených vozidiel podľa evidencie ALCO.SK</span></div></div>;
}
