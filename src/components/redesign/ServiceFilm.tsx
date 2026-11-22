'use client';
import { useEffect, useRef, useState } from 'react';
import { useViewportPreview } from './useViewportPreview';
import { Play, Pause, Volume2, ShieldCheck, Maximize, X } from 'lucide-react';
import styles from './parkingFilm.module.css';
import demoStyles from './gpsDemoFilm.module.css';
const films={
 iglaGuide:{base:'igla-kazdy-den-v3',title:'IGLA každý deň – prívesok, PIN a digitálna ochrana',headline:'Ochrana, ktorá zapadne do vášho dňa.',subline:'Bluetooth prívesok, vlastný PIN a odborné odovzdanie v Trenčíne.'},
 gpsDemo:{base:'gps-aplikacia-v2',title:'GPS monitoring – ukážka ovládania aplikácie',headline:'Pozrite si ovládanie aplikácie.',subline:'Výber auta, história jázd a trasa na mape.'},
 parking:{base:'parking-alco',title:'Parkovacie snímače od ALCO.SK Trenčín',headline:'Záruka kvality overená praxou.',subline:'Značkové snímače. Odborná montáž v Trenčíne.'},
 gps:{base:'gps-alco-v2',title:'GPS monitoring od ALCO.SK Trenčín',headline:'GPS monitoring bez mesačného paušálu.',subline:'Od 280 € bez DPH s montážou. Stačí vlastná SIM karta.'},
 igla:{base:'igla-pribeh-v7',title:'IGLA – prezentácia ochrany vozidla od ALCO.SK Trenčín',headline:'Certifikovaný partner IGLA · Trenčín',subline:'Od 480 € bez DPH vrátane BT príveskov a montáže.'},
};
export default function ServiceFilm({kind}:{kind:keyof typeof films}){
 const {base,title,headline,subline}=films[kind];
 const player=useRef<HTMLVideoElement>(null);
 const [fullscreenControls,setFullscreenControls]=useState(false);
 const [fullscreenFallback,setFullscreenFallback]=useState(false);const [fullscreenSource,setFullscreenSource]=useState('');const [fullscreenMuted,setFullscreenMuted]=useState(true);const fullscreenStart=useRef(0);const fullscreenDialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{if(fullscreenFallback)fullscreenDialog.current?.showModal()},[fullscreenFallback]);
 const [withSound,setWithSound]=useState(false);const [paused,setPaused]=useState(false);const [blocked,setBlocked]=useState(false);const [failed,setFailed]=useState(false);
 useViewportPreview(player,setBlocked,setPaused);
 function playWithSound(){const video=player.current;if(!video)return;document.querySelectorAll('video').forEach(other=>{if(other!==video){other.pause();other.muted=true;}});setFailed(false);video.currentTime=0;video.muted=false;video.loop=false;setWithSound(true);video.play()?.catch(()=>{setFailed(true);setWithSound(false);setBlocked(true);setPaused(true);video.muted=true});}
 async function openFullscreen(){const video=player.current;if(!video)return;setFullscreenControls(true);try{if(video.requestFullscreen){await video.requestFullscreen()}else{const native=video as HTMLVideoElement & {webkitEnterFullscreen?:()=>void};if(native.webkitEnterFullscreen){native.webkitEnterFullscreen()}else{throw new Error('Fullscreen unavailable')}}}catch{setFullscreenControls(false);fullscreenStart.current=video.currentTime;setFullscreenSource(video.currentSrc);setFullscreenMuted(video.muted);video.pause();setFullscreenFallback(true)}}
 function togglePreview(){const video=player.current;if(!video)return;if(video.paused){video.play()?.catch(()=>setBlocked(true))}else{video.pause()}}
 return <figure className={`${styles.panel} ${kind==='gpsDemo'?demoStyles.panel:''}`} aria-label={title}><div className={styles.frame}>
 <video ref={player} muted={!withSound} loop={!withSound} controls={withSound||fullscreenControls} playsInline preload="none" tabIndex={withSound||fullscreenControls?0:-1} aria-label={title} poster={`/video/${base}-poster.webp`} onPlay={()=>{setPaused(false);setBlocked(false)}} onPause={()=>setPaused(true)}>{kind==='gpsDemo'&&<source src={`/video/${base}-mobile.mp4`} media="(max-width: 767px)" type="video/mp4"/>}<source src={`/video/${base}.mp4`} type="video/mp4"/><track kind="captions" src={`/video/${base}-sk.vtt`} srcLang="sk" label="Slovenčina"/>Váš prehliadač nepodporuje prehrávanie videa.</video>
 {!withSound&&<><button type="button" className={styles.soundOverlay} onClick={playWithSound} aria-label={blocked?'Prehrať video so zvukom':'Zapnúť zvuk a prehrať video od začiatku'}><span className={styles.soundLabel}>{blocked?<Play size={18} aria-hidden="true"/>:<Volume2 size={18} aria-hidden="true"/>}{blocked?'Prehrať so zvukom':'Zapnúť zvuk'}</span></button><button type="button" className={styles.pausePreview} onClick={togglePreview} aria-label={paused?'Spustiť tichý náhľad':'Pozastaviť tichý náhľad'}>{paused?<Play size={18} aria-hidden="true"/>:<Pause size={18} aria-hidden="true"/>}</button></>}
 </div><figcaption className={styles.caption}><ShieldCheck size={22} aria-hidden="true"/><div><strong>{headline}</strong><span>{subline}</span></div></figcaption>{kind==='gpsDemo'&&<button type="button" className={demoStyles.fullscreen} onClick={openFullscreen}><Maximize size={20} aria-hidden="true"/>Otvoriť na celú obrazovku</button>}{failed&&<p className={styles.error} role="alert">Video sa nepodarilo spustiť. Skúste ho prehrať znova.</p>}{fullscreenFallback&&<dialog ref={fullscreenDialog} className={demoStyles.dialog} onClose={()=>setFullscreenFallback(false)} aria-label="GPS aplikácia na celú obrazovku"><div className={demoStyles.dialogHeader}><span>GPS aplikácia · celá obrazovka</span><button type="button" onClick={()=>fullscreenDialog.current?.close()} aria-label="Zavrieť celú obrazovku"><X size={24}/></button></div><video src={fullscreenSource} autoPlay controls muted={fullscreenMuted} playsInline onLoadedMetadata={event=>{event.currentTarget.currentTime=fullscreenStart.current}} aria-label={title}/></dialog>}</figure>;
}
