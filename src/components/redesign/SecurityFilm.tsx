'use client';
import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import styles from './securityFilm.module.css';
import controls from './parkingFilm.module.css';
export default function SecurityFilm({id}:{id:string}){
 const player=useRef<HTMLVideoElement>(null);
 const [withSound,setWithSound]=useState(false);
 const [paused,setPaused]=useState(false);
 const [blocked,setBlocked]=useState(false);
 const [failed,setFailed]=useState(false);
 useEffect(()=>{const video=player.current;if(!video)return;let active=true;video.muted=true;video.play()?.catch(()=>{if(active){setBlocked(true);setPaused(true)}});return()=>{active=false}},[]);
 function playWithSound(){const video=player.current;if(!video)return;document.querySelectorAll('video').forEach(other=>{if(other!==video){other.pause();other.muted=true}});setFailed(false);video.currentTime=0;video.muted=false;video.loop=false;setWithSound(true);video.play()?.catch(()=>{setFailed(true);setWithSound(false);setBlocked(true);setPaused(true);video.muted=true})}
 function togglePreview(){const video=player.current;if(!video)return;if(video.paused){video.play()?.catch(()=>setBlocked(true))}else{video.pause()}}
 return <figure id={id} className={styles.film}><div className={styles.frame}>
 <video ref={player} autoPlay muted={!withSound} loop={!withSound} controls={withSound} playsInline preload="metadata" tabIndex={withSound?0:-1} poster="/video/keyless-alco-trencin-poster.webp?v=transparent-logo" aria-label="Ako môže dôjsť ku krádeži zraniteľného keyless vozidla — animácia so slovenským komentárom" onLoadedMetadata={event=>{const tracks=event.currentTarget.textTracks;for(let i=0;i<tracks.length;i++){if(tracks[i].language==='sk')tracks[i].mode='showing'}}} onPlay={()=>{setPaused(false);setBlocked(false)}} onPause={()=>setPaused(true)}><source src="/video/keyless-alco-trencin-music.mp4" type="video/mp4"/><track kind="captions" src="/video/keyless-alco-trencin-sk.vtt" srcLang="sk" label="Slovenčina" default/>Váš prehliadač nepodporuje prehrávanie videa.</video>
 {!withSound&&<><button type="button" className={controls.soundOverlay} onClick={playWithSound} aria-label={blocked?'Prehrať video so zvukom':'Zapnúť zvuk a prehrať video od začiatku'}><span className={controls.soundLabel}>{blocked?<Play size={18} aria-hidden="true"/>:<Volume2 size={18} aria-hidden="true"/>}{blocked?'Prehrať so zvukom':'Zapnúť zvuk'}</span></button><button type="button" className={controls.pausePreview} onClick={togglePreview} aria-label={paused?'Spustiť tichý náhľad':'Pozastaviť tichý náhľad'}>{paused?<Play size={18} aria-hidden="true"/>:<Pause size={18} aria-hidden="true"/>}</button></>}
 </div>{failed&&<p className={styles.error} role="alert">Video sa nepodarilo spustiť. Skúste ho prehrať znova.</p>}</figure>
}
export function SecurityFilmSection(){return <section className={styles.section} aria-labelledby="keyless-film-heading"><div className={styles.intro}><p className={styles.eyebrow}>POZNAJTE RIZIKÁ. VYBERAJTE VEDOME.</p><h2 id="keyless-film-heading">Kľúč zostal doma.<br/>Auto môže odísť.</h2><p>Krátka animácia vysvetľuje riziko pri zraniteľných systémoch keyless. Možnosti ochrany overujeme podľa konkrétneho vozidla.</p><a href="/bezklucovy-pristup">Viac o bezkľúčovom prístupe <span aria-hidden="true">↗</span></a></div><SecurityFilm id="keyless-film-home"/></section>}
