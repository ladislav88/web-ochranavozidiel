import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import styles from './redesign.module.css';
export default function SiteShell({children,quoteHref,hideObjectBanner=false}:{children:React.ReactNode;quoteHref?:string;hideObjectBanner?:boolean}){return <div className={styles.site}><SiteHeader quoteHref={quoteHref}/><main id="main-content">{children}</main><SiteFooter showObjectBanner={!hideObjectBanner}/></div>;}
