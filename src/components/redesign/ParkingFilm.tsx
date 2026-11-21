'use client';
import { useRef, useState } from 'react';
import { Play, ShieldCheck } from 'lucide-react';
import styles from './parkingFilm.module.css';
export default function ParkingFilm(){
 const player=useRef<HTMLVideoElement>(null);const [started,setStarted]=useState(false);const [failed,setFailed]=useState(false);
 function play(){setFailed(false);const request=player.current?.play();if(!request)return;setStarted(true);request.catch(()=>{setStarted(false);setFailed(true)});}
 return <figure className={styles.panel} aria-label="Parkovacie snímače od ALCO.SK Trenčín"><div className={styles.frame}>
 <video ref={player} controls={started} playsInline preload="none" aria-hidden={!started} tabIndex={started?0:-1} aria-label="Značkové parkovacie snímače ALCO.SK Trenčín" poster={started?'/video/parking-alco-poster.webp':undefined}><source src="/video/parking-alco.mp4" type="video/mp4"/><track kind="captions" src="/video/parking-alco-sk.vtt" srcLang="sk" label="Slovenčina"/>Váš prehliadač nepodporuje prehrávanie videa.</video>
 {!started&&<button type="button" className={styles.cover} onClick={play} aria-label="Prehrať video o parkovacích snímačoch"><img src="/video/parking-alco-poster.webp" srcSet="/video/parking-alco-poster-480.webp 480w, /video/parking-alco-poster-800.webp 800w, /video/parking-alco-poster.webp 1280w" sizes="(max-width:767px) calc(100vw - 44px), (max-width:1200px) 45vw, 520px" alt="" width="1280" height="720" fetchPriority="high"/><span className={styles.play}><Play size={28} fill="currentColor" aria-hidden="true"/></span></button>}
 </div><figcaption className={styles.caption}><ShieldCheck size={22} aria-hidden="true"/><div><strong>Záruka kvality overená praxou.</strong><span>Značkové snímače. Odborná montáž v Trenčíne.</span></div></figcaption>{failed&&<p className={styles.error} role="alert">Video sa nepodarilo spustiť. Skúste ho prehrať znova.</p>}</figure>;
}
