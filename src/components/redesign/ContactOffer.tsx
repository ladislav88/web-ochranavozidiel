import { Phone, MapPin } from 'lucide-react';
import QuoteForm from './QuoteForm';
import styles from './redesign.module.css';
export default function ContactOffer({service='igla'}:{service?:string}) {return (      <section id="ponuka" className={styles.offer}><div className={styles.offerIntro}><p className={styles.eyebrow}>NEZÁVÄZNÁ PONUKA PRE VAŠE AUTO</p><h2>Vy vyberiete auto.<br/><em>My navrhneme ochranu.</em></h2><p>Pár údajov nám pomôže overiť kompatibilitu a pripraviť konkrétnu ponuku.</p><a href="tel:+421911911876" className={styles.contactLine}><span><Phone size={19}/></span><div><small>Radšej sa porozprávate?</small><b>0911 911 876</b></div></a><div className={styles.address}><MapPin size={17}/><p>ALCO.SK, s.r.o.<br/>Malé Stankovce 237<br/>Trenčianske Stankovce</p></div></div>
<QuoteForm initialService={service}/></section>);}
