import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import styles from './redesign.module.css';
export default function SiteShell({children,quoteHref}:{children:React.ReactNode;quoteHref?:string}){return <div className={styles.site}><SiteHeader quoteHref={quoteHref}/><main id="main-content">{children}</main><SiteFooter/></div>;}
