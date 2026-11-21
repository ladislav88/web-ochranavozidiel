import SiteShell from '@/components/redesign/SiteShell';
import styles from '@/components/redesign/redesign.module.css';
export default function NotFound(){return <SiteShell><section className={`${styles.pageContainer} ${styles.notFound}`}><p className={styles.eyebrow}>404 · STRÁNKA SA NENAŠLA</p><h1>Tu cesta nepokračuje.</h1><p>Poďme späť k ochrane vášho auta.</p><a href="/" className={styles.primary}>Prejsť na úvodnú stránku</a></section></SiteShell>;}
