'use client';
import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, ShieldCheck } from 'lucide-react';
import styles from './parkingFilm.module.css';
export default function ParkingFilm(){
 const player=useRef<HTMLVideoElement>(null);
 const [withSound,setWithSound]=useState(false);const [paused,setPaused]=useState(false);const [blocked,setBlocked]=useState(false);const [failed,setFailed]=useState(false);
 useEffect(()=>{const video=player.current;if(!video)return;let active=true;video.muted=true;video.play()?.catch(()=>{if(active){setBlocked(true);setPaused(true)}});return()=>{active=false};},[]);
 function playWithSound(){const video=player.current;if(!video)return;setFailed(false);video.currentTime=0;video.muted=false;video.loop=false;setWithSound(true);video.play()?.catch(()=>{setFailed(true);setWithSound(false);setBlocked(true);setPaused(true);video.muted=true});}
 function togglePreview(){const video=player.current;if(!video)return;if(video.paused){video.play()?.catch(()=>setBlocked(true))}else{video.pause()}}
 return <figure className={styles.panel} aria-label="Parkovacie snímače od ALCO.SK Trenčín"><div className={styles.frame}>
 <video ref={player} autoPlay muted={!withSound} loop={!withSound} controls={withSound} playsInline preload="metadata" tabIndex={withSound?0:-1} aria-label="Značkové parkovacie snímače ALCO.SK Trenčín" poster="/video/parking-alco-poster.webp" onPlay={()=>{setPaused(false);setBlocked(false)}} onPause={()=>setPaused(true)}><source src="/video/parking-alco.mp4" type="video/mp4"/><track kind="captions" src="/video/parking-alco-sk.vtt" srcLang="sk" label="Slovenčina"/>Váš prehliadač nepodporuje prehrávanie videa.</video>
 {!withSound&&<><button type="button" className={styles.soundOverlay} onClick={playWithSound} aria-label={blocked?'Prehrať video so zvukom':'Zapnúť zvuk a prehrať video od začiatku'}><span className={styles.soundLabel}>{blocked?<Play size={18} aria-hidden="true"/>:<Volume2 size={18} aria-hidden="true"/>}{blocked?'Prehrať so zvukom':'Zapnúť zvuk'}</span></button><button type="button" className={styles.pausePreview} onClick={togglePreview} aria-label={paused?'Spustiť tichý náhľad':'Pozastaviť tichý náhľad'}>{paused?<Play size={18} aria-hidden="true"/>:<Pause size={18} aria-hidden="true"/>}</button></>}
 </div><figcaption className={styles.caption}><ShieldCheck size={22} aria-hidden="true"/><div><strong>Záruka kvality overená praxou.</strong><span>Značkové snímače. Odborná montáž v Trenčíne.</span></div></figcaption>{failed&&<p className={styles.error} role="alert">Video sa nepodarilo spustiť. Skúste ho prehrať znova.</p>}</figure>;
}
