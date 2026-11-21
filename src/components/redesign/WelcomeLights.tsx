'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './welcomeLights.module.css';
export default function WelcomeLights(){
 const [ready,setReady]=useState(false);const off=useRef<HTMLImageElement>(null);const on=useRef<HTMLImageElement>(null);
 useEffect(()=>{let active=true;const images=[off.current,on.current].filter((image):image is HTMLImageElement=>Boolean(image));const wait=(image:HTMLImageElement)=>image.complete&&image.naturalWidth?image.decode().catch(()=>{}):new Promise<void>((resolve,reject)=>{image.addEventListener('load',()=>image.decode().catch(()=>{}).then(resolve),{once:true});image.addEventListener('error',reject,{once:true});});Promise.all(images.map(wait)).then(()=>{if(active)setReady(true)}).catch(()=>{});return()=>{active=false}},[]);
 return <div className={`${styles.stage} ${ready?styles.ready:''}`}><img ref={off} src="/hero-black-suv-off.webp" alt="Ilustračná vizualizácia čierneho SUV s uvítacím rozsvietením svetiel" width="1440" height="960" fetchPriority="high"/><img ref={on} className={styles.fullLit} src="/hero-black-suv.webp" alt="" aria-hidden="true" width="1440" height="960" decoding="async"/><img className={styles.flash} src="/hero-black-suv.webp" alt="" aria-hidden="true" width="1440" height="960" decoding="async"/></div>
}
