import SiteShell from './SiteShell';
import ContactOffer from './ContactOffer';
import { PageIntro, Features, DetailSection, InstallationSteps, FAQ, RelatedSolutions } from './PageParts';
import { serviceContent } from './serviceContent';
import GPSAppSection from './GPSAppSection';
import IGLADetails from './IGLADetails';
export default function ServicePage({service}:{service:keyof typeof serviceContent}){
  const data=serviceContent[service];
  const schema={'@context':'https://schema.org','@type':'Service',name:data.eyebrow,url:'https://www.autoalarmy-trencin.sk'+data.path,description:data.description,provider:{'@id':'https://www.autoalarmy-trencin.sk/#business'},areaServed:['Trenčín','Trenčianske Stankovce']};
  return <SiteShell quoteHref="#ponuka"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <PageIntro eyebrow={data.eyebrow} title={data.title} accent={data.accent} description={data.description} visual={service}/>
    <Features eyebrow="ČO ZÍSKATE" title={data.featuresTitle} items={data.features}/>
    <DetailSection eyebrow={data.detailEyebrow} title={data.detailTitle} points={data.points} note={data.note}>{data.paragraphs.map(p=><p key={p}>{p}</p>)}</DetailSection>
    {service==='igla'&&<IGLADetails/>}
    {service==='gps'&&<GPSAppSection/>}
    <InstallationSteps/><FAQ items={data.faq}/><RelatedSolutions current={service}/><ContactOffer service={service}/>
  </SiteShell>;
}
