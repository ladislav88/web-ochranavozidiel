'use client';
import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, ShieldCheck } from 'lucide-react';
import styles from './parkingFilm.module.css';
const films={
 iglaGuide:{base:'igla-kazdy-den',title:'IGLA každý deň – prívesok, PIN a digitálna ochrana',headline:'Ochrana, ktorá zapadne do vášho dňa.',subline:'Bluetooth prívesok, vlastný PIN a odborné odovzdanie v Trenčíne.'},
 parking:{base:'parking-alco',title:'Parkovacie snímače od ALCO.SK Trenčín',headline:'Záruka kvality overená praxou.',subline:'Značkové snímače. Odborná montáž v Trenčíne.'},
 gps:{base:'gps-alco-v2',title:'GPS monitoring od ALCO.SK Trenčín',headline:'GPS monitoring bez mesačného paušálu.',subline:'Od 280 € bez DPH s montážou. Stačí vlastná SIM karta.'},
 igla:{base:'igla-pribeh-v5',title:'IGLA – prezentácia ochrany vozidla od ALCO.SK Trenčín',headline:'Certifikovaný partner IGLA · Trenčín',subline:'Od 480 € bez DPH vrátane BT príveskov a montáže.'},
};
export default function ServiceFilm({kind}:{kind:keyof typeof films}){
 const {base,title,headline,subline}=films[kind];
 const player=useRef<HTMLVideoElement>(null);
 const [withSound,setWithSound]=useState(false);const [paused,setPaused]=useState(false);const [blocked,setBlocked]=useState(false);const [failed,setFailed]=useState(false);
 useEffect(()=>{const video=player.current;if(!video)return;let active=true;video.muted=true;video.play()?.catch(()=>{if(active){setBlocked(true);setPaused(true)}});return()=>{active=false};},[]);
 function playWithSound(){const video=player.current;if(!video)return;setFailed(false);video.currentTime=0;video.muted=false;video.loop=false;setWithSound(true);video.play()?.catch(()=>{setFailed(true);setWithSound(false);setBlocked(true);setPaused(true);video.muted=true});}
 function togglePreview(){const video=player.current;if(!video)return;if(video.paused){video.play()?.catch(()=>setBlocked(true))}else{video.pause()}}
 return <figure className={styles.panel} aria-label={title}><div className={styles.frame}>
 <video ref={player} autoPlay muted={!withSound} loop={!withSound} controls={withSound} playsInline preload="metadata" tabIndex={withSound?0:-1} aria-label={title} poster={`/video/${base}-poster.webp`} onPlay={()=>{setPaused(false);setBlocked(false)}} onPause={()=>setPaused(true)}><source src={`/video/${base}.mp4`} type="video/mp4"/><track kind="captions" src={`/video/${base}-sk.vtt`} srcLang="sk" label="Slovenčina"/>Váš prehliadač nepodporuje prehrávanie videa.</video>
 {!withSound&&<><button type="button" className={styles.soundOverlay} onClick={playWithSound} aria-label={blocked?'Prehrať video so zvukom':'Zapnúť zvuk a prehrať video od začiatku'}><span className={styles.soundLabel}>{blocked?<Play size={18} aria-hidden="true"/>:<Volume2 size={18} aria-hidden="true"/>}{blocked?'Prehrať so zvukom':'Zapnúť zvuk'}</span></button><button type="button" className={styles.pausePreview} onClick={togglePreview} aria-label={paused?'Spustiť tichý náhľad':'Pozastaviť tichý náhľad'}>{paused?<Play size={18} aria-hidden="true"/>:<Pause size={18} aria-hidden="true"/>}</button></>}
 </div><figcaption className={styles.caption}><ShieldCheck size={22} aria-hidden="true"/><div><strong>{headline}</strong><span>{subline}</span></div></figcaption>{failed&&<p className={styles.error} role="alert">Video sa nepodarilo spustiť. Skúste ho prehrať znova.</p>}</figure>;
}
