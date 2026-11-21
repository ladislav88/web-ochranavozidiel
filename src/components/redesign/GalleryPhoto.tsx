'use client';
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import styles from './galleryPhoto.module.css';
export default function GalleryPhoto({src,alt,credit}:{src:string;alt:string;credit?:'before'|'after'}){
 const [open,setOpen]=useState(false);const dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{const modal=dialog.current;if(!modal)return;if(!open){if(modal.open)modal.close();return;}const previous=document.body.style.overflow;document.body.style.overflow='hidden';modal.showModal();return()=>{document.body.style.overflow=previous;if(modal.open)modal.close();};},[open]);
 const label=credit==='before'?'PRED · iný dodávateľ':credit==='after'?'PO · naša montáž ALCO.SK':null;
 return <><button type="button" className={styles.thumbnail} onClick={()=>setOpen(true)} aria-label={`Zväčšiť fotografiu: ${alt}`} aria-haspopup="dialog"><img src={src} alt={alt} width="1200" height="1600" loading="lazy" decoding="async"/></button><dialog ref={dialog} className={styles.modal} aria-label={alt} onCancel={event=>{event.preventDefault();setOpen(false)}} onClick={()=>setOpen(false)}>{label&&<span className={`${styles.modalCredit} ${credit==='after'?styles.ours:styles.previous}`}>{label}</span>}<button type="button" className={styles.close} onClick={()=>setOpen(false)} aria-label="Zavrieť fotografiu" autoFocus><X size={24} aria-hidden="true"/></button>{open&&<img className={styles.zoomed} src={src} alt={alt}/>}<p className={styles.hint}>Kliknutím alebo klávesom Esc zavriete fotografiu</p></dialog></>
}
