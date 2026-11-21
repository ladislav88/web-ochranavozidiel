'use client';
import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { Check, ShieldCheck, LockKeyhole, ChevronDown } from 'lucide-react';
import { carBrands, defaultEngineTypes } from '@/utils/carData';
import { sendEmail, emailConfigured, type EmailData } from '@/utils/emailService';
import { createLeadDelivery, hasValidContact } from '@/utils/leadDelivery';
import { services } from './services';
import styles from './redesign.module.css';
const empty = { service:'igla', brand:'', model:'', customBrand:'', customModel:'', year:'', month:'', engine:'', customEngine:'', start:'', city:'', name:'', email:'', phone:'', message:'', allowDraft:false };
const months = ['Január','Február','Marec','Apríl','Máj','Jún','Júl','August','September','Október','November','December'];

export default function QuoteForm({initialService='igla'}:{initialService?:string}) {
  const [step,setStep]=useState(0);
  useEffect(()=>{setValues(v=>({...v,service:initialService}));},[initialService]);
  const [values,setValues]=useState({...empty,service:initialService});
  const [error,setError]=useState('');
  const [submitted,setSubmitted]=useState(false);
  const selectedBrand=carBrands.find(b=>b.value===values.brand);
  const selectedModel=selectedBrand?.models.find(m=>m.value===values.model);
  const engines=selectedModel?.engines || defaultEngineTypes;
  const brandName=values.brand==='other'?values.customBrand:selectedBrand?.name;
  const modelName=values.model==='other'?values.customModel:selectedModel?.name;
  const serviceName=services.find(s=>s.id===values.service)?.name;
  const years=useMemo(()=>Array.from({length:new Date().getFullYear()-1979},(_,i)=>String(new Date().getFullYear()-i)),[]);
  const validContact=hasValidContact(values);
  const change=(field:keyof typeof empty,value:string|boolean)=>{
    if(isSubmitting)return;
    setError('');setSubmitted(false);
    setValues(v=>({...v,[field]:value,...(field==='brand'?{model:'',customModel:'',engine:'',customEngine:''}:{}),...(field==='model'?{engine:'',customEngine:''}:{})}));
  };
  const [isSubmitting,setIsSubmitting]=useState(false);
  const [website,setWebsite]=useState('');
  const [draftStatus,setDraftStatus]=useState<'idle'|'sending'|'sent'|'error'>('idle');
  const delivery=useRef(createLeadDelivery(sendEmail));
  const payload=useMemo<EmailData>(()=>({
    name:values.name.trim(),email:values.email.trim(),phone:values.phone.trim(),city:values.city.trim(),
    subject:serviceName, message:values.message.trim(), vehicleBrand:brandName,vehicleModel:modelName,
    vehicleYear:values.year,vehicleMonth:values.month?months[Number(values.month)-1]:'',
    startMethod:values.start,engineType:values.engine==='other'?values.customEngine:engines.find(e=>e.value===values.engine)?.name,
  }),[values,serviceName,brandName,modelName,engines]);
  useEffect(()=>{
    if(!emailConfigured||!values.allowDraft||!validContact||submitted||isSubmitting||website||draftStatus==='sent'||draftStatus==='error')return;
    const timer=setTimeout(()=>{
      setDraftStatus('sending');
      delivery.current.sendDraft(payload).then(()=>setDraftStatus('sent')).catch(()=>setDraftStatus('error'));
    },1200);
    return()=>clearTimeout(timer);
  },[values.allowDraft,validContact,payload,submitted,isSubmitting,website,draftStatus]);
  const fallbackEmail='mailto:info@ochranavozidiel.sk?subject='+encodeURIComponent(serviceName || 'Dopyt z webu')+'&body='+encodeURIComponent([
    `Meno: ${payload.name}`,`E-mail: ${payload.email}`,`Telefón: ${payload.phone}`,`Mesto: ${payload.city}`,
    `Vozidlo: ${payload.vehicleBrand || ''} ${payload.vehicleModel || ''}`,`Rok: ${payload.vehicleYear || ''}`,
    `Mesiac: ${payload.vehicleMonth || ''}`,`Štartovanie: ${payload.startMethod || ''}`,`Motorizácia: ${payload.engineType || ''}`,
    '',payload.message || '',
  ].join('\n'));
  const reset=()=>{
    delivery.current.reset();setValues({...empty,service:initialService});setSubmitted(false);setStep(0);setError('');setDraftStatus('idle');
  };
  const next=async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(isSubmitting||website)return;
    if(!brandName?.trim()||!modelName?.trim()||!values.year||!values.city.trim()){setError('Doplňte značku, model, rok výroby a mesto.');return;}
    if(step===0){setStep(1);return;}
    if(!values.name.trim()||!validContact){setError('Vyplňte meno a platný e-mail alebo telefón.');return;}
    setIsSubmitting(true);setError('');
    try {await delivery.current.sendFinal(payload);setSubmitted(true);}
    catch {setError('Dopyt sa nepodarilo odoslať. Údaje zostali vyplnené. Skúste to znova alebo zavolajte 0911 911 876.');}
    finally {setIsSubmitting(false);}
  };
  return (      <div className={styles.formPanel}><div className={styles.formTabs}><button disabled={isSubmitting} onClick={()=>{setStep(0);setSubmitted(false);}} className={step===0?styles.activeTab:''}><span>1</span>Vaše vozidlo</button><button disabled={isSubmitting} onClick={()=>{if(brandName&&modelName&&values.year&&values.city)setStep(1);else setError('Najprv vyberte vozidlo a mesto.');}} className={step===1?styles.activeTab:''}><span>2</span>Váš kontakt</button><span className={styles.formTime}>Bez záväzkov</span></div>
      {submitted?<div className={styles.success} role="status"><ShieldCheck size={45}/><h3>Ďakujeme za váš dopyt.</h3><p>Dopyt sme úspešne odoslali. Ozveme sa vám na uvedený kontakt.</p><div><b>{brandName} {modelName} · {values.year}</b><span>{serviceName} · {values.city}</span></div><button className={styles.primary} onClick={()=>{reset();}}>Poslať ďalší dopyt</button></div>:<form onSubmit={next} aria-busy={isSubmitting}><div className={styles.honeypot} aria-hidden="true"><label htmlFor="website">Webová stránka</label><input id="website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={e=>setWebsite(e.target.value)}/></div>
      {step===0?<><fieldset className={styles.serviceChoice}><legend>Čo vás zaujíma?</legend>{services.map(s=><label key={s.id} className={values.service===s.id?styles.selectedChoice:''}><input type="radio" name="service" value={s.id} checked={values.service===s.id} onChange={()=>change('service',s.id)}/>{s.id==='igla'?'IGLA':s.id==='gps'?'GPS':'Parkovanie'}</label>)}</fieldset><div className={styles.fieldGrid}><Field label="Značka vozidla" id="brand"><Select id="brand" value={values.brand} onChange={v=>change('brand',v)} required><option value="">Vyberte značku</option>{carBrands.filter(b=>b.value!=='other').map(b=><option key={b.value} value={b.value}>{b.name}</option>)}<option value="other">Iná značka</option></Select></Field><Field label="Model vozidla" id="model"><Select id="model" value={values.model} onChange={v=>change('model',v)} disabled={!values.brand} required><option value="">{values.brand?'Vyberte model':'Najprv vyberte značku'}</option>{selectedBrand?.models.filter(m=>m.value!=='other').map(m=><option key={m.value} value={m.value}>{m.name}</option>)}<option value="other">Iný model</option></Select></Field>{values.brand==='other'&&<Field label="Vaša značka" id="customBrand"><input id="customBrand" value={values.customBrand} onChange={e=>change('customBrand',e.target.value)} required/></Field>}{values.model==='other'&&<Field label="Váš model" id="customModel"><input id="customModel" value={values.customModel} onChange={e=>change('customModel',e.target.value)} required/></Field>}<Field label="Rok výroby" id="year"><Select id="year" value={values.year} onChange={v=>change('year',v)} required><option value="">Vyberte rok</option>{years.map(y=><option key={y}>{y}</option>)}</Select></Field><Field label="Mesto, z ktorého prichádzate" id="city"><input maxLength={100} id="city" name="city" autoComplete="address-level2" placeholder="Napr. Trenčín" value={values.city} onChange={e=>change('city',e.target.value)} required/></Field></div><details className={styles.extraDetails}><summary>Spresniť vozidlo <span>nepovinné</span><ChevronDown size={15}/></summary><div className={styles.fieldGrid}><Field label="Mesiac výroby" id="month"><Select id="month" value={values.month} onChange={v=>change('month',v)}><option value="">Neviem / neuvádzam</option>{months.map((m,i)=><option key={m} value={String(i+1)}>{m}</option>)}</Select></Field><Field label="Štartovanie" id="start"><Select id="start" value={values.start} onChange={v=>change('start',v)}><option value="">Vyberte spôsob</option><option>Kľúč</option><option>Tlačidlo</option><option>Digitálna karta</option></Select></Field><Field label="Motorizácia" id="engine"><Select id="engine" value={values.engine} onChange={v=>change('engine',v)}><option value="">Vyberte motorizáciu</option>{engines.map(e=><option key={e.value} value={e.value}>{e.name}</option>)}</Select></Field>{values.engine==='other'&&<Field label="Vaša motorizácia" id="customEngine"><input id="customEngine" value={values.customEngine} onChange={e=>change('customEngine',e.target.value)}/></Field>}</div></details></>:<><div className={styles.vehicleSummary}><span><b>{brandName} {modelName}</b><small>{values.year} · {values.city} · {serviceName}</small></span><button type="button" disabled={isSubmitting} onClick={()=>setStep(0)}>Upraviť</button></div><div className={styles.fieldGrid}><Field label="Vaše meno" id="name" wide><input maxLength={100} id="name" name="name" autoComplete="name" placeholder="Meno a priezvisko" value={values.name} onChange={e=>change('name',e.target.value)} required/></Field><Field label="Telefón" id="phone"><input maxLength={25} id="phone" name="phone" type="tel" autoComplete="tel" placeholder="0911 123 456" value={values.phone} onChange={e=>change('phone',e.target.value)}/></Field><Field label="E-mail" id="email"><input maxLength={254} id="email" name="email" type="email" autoComplete="email" placeholder="vas@email.sk" value={values.email} onChange={e=>change('email',e.target.value)}/></Field></div><p className={styles.fieldHint}>Stačí telefón alebo e-mail, na ktorom vás zastihneme.</p>{emailConfigured&&<label className={styles.draftConsent}><input type="checkbox" checked={values.allowDraft} onChange={e=>change('allowDraft',e.target.checked)}/><span>Môžete ma kontaktovať aj v prípade, že dopyt nedokončím.<small>Po zadaní platného kontaktu odošleme rozpracované údaje tímu ALCO.SK.</small></span></label>}{draftStatus==='sent'&&<p className={styles.demoEvent} role="status"><Check size={15}/>Kontakt sme odovzdali tímu ALCO.SK. Dopyt môžete ešte doplniť a odoslať.</p>}{draftStatus==='error'&&<p className={styles.fieldHint} role="status">Skoré upozornenie sa nepodarilo odoslať. Použite tlačidlo na odoslanie celého dopytu alebo nám zavolajte.</p>}<Field label="Chcete niečo doplniť? (nepovinné)" id="message" wide><textarea maxLength={4000} id="message" rows={3} placeholder="Vaša otázka alebo požiadavka…" value={values.message} onChange={e=>change('message',e.target.value)}/></Field></>}
      {error&&<p className={styles.error} role="alert">{error}</p>}<div className={styles.formFooter}><span><LockKeyhole size={14}/>{step===0?'Ponuka podľa vášho vozidla':'Kontakt použijeme na vybavenie dopytu.'}</span>{step===1&&!emailConfigured?<a className={styles.primary} href={fallbackEmail}>Odoslať cez e-mail</a>:<button className={styles.primary} type="submit" disabled={isSubmitting}>{isSubmitting?'Odosielam…':step===0?'Pokračovať ku kontaktu':'Vyžiadať nezáväznú ponuku'}</button>}</div><p className={styles.previewFormNote}>{!emailConfigured&&step===1&&<>Otvorí sa vaša e-mailová aplikácia s vyplneným dopytom. Správu v nej ešte odošlite. Automatické odosielanie sa práve pripája.<br/></>}Odoslaním žiadate ALCO.SK o kontaktovanie k tomuto dopytu. Údaje použijeme na jeho vybavenie.</p></form>}
      </div>);
}
function Field({label,id,wide,children}:{label:string;id:string;wide?:boolean;children:React.ReactNode}) {return <div className={`${styles.field} ${wide?styles.wide:''}`}><label htmlFor={id}>{label}</label>{children}</div>;}
function Select({id,value,onChange,disabled,required,children}:{id:string;value:string;onChange:(value:string)=>void;disabled?:boolean;required?:boolean;children:React.ReactNode}) {return <div className={styles.selectWrap}><select id={id} name={id} value={value} disabled={disabled} required={required} onChange={e=>onChange(e.target.value)}>{children}</select><ChevronDown size={16} aria-hidden="true"/></div>;}
