import type { Metadata } from 'next';
import ServicePage from '@/components/redesign/ServicePage';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';
const PAGE_URL = SITE_URL + '/sofistikovane-zabezpecenie';

export const metadata: Metadata = {
  title: 'IGLA Trenčín | Montáž od 480 € bez DPH',
  description:
    'IGLA s Bluetooth príveskami a vlastným PIN-om. Certifikovaný partner ALCO.SK Trenčín. Skrytá montáž spravidla 2–3 hodiny, cena od 480 € bez DPH.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'IGLA · Ochrana pred krádežou | ALCO.SK Trenčín',
    description:
      'IGLA s odbornou montážou od 480 € bez DPH. Bluetooth prívesok alebo vlastný PIN. Certifikovaný partner v Trenčíne.',
    url: PAGE_URL,
    images: [{ url: SITE_URL + '/alco-social-preview-v2.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'IGLA · Ochrana pred krádežou | ALCO.SK Trenčín',
  },
};

export default function Page() {return <ServicePage service="igla"/>;}
