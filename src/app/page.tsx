import type { Metadata } from 'next';
import Redesign from '@/components/redesign/Redesign';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';

export const metadata: Metadata = {
  title: { absolute: 'Autoalarmy Trenčín | Zabezpečenie vozidiel IGLA' },
  description:
    'Ochrana vozidiel pred krádežou IGLA. Certifikovaná montáž v Trenčíne, vyššia rada s BT príveskami od 480 € bez DPH. Overíme vaše auto.',
  alternates: {
    canonical: SITE_URL + '/',
  },
  openGraph: {
    title: 'Zabezpečenie vozidiel proti krádeži | Autoalarmy Trenčín',
    description:
      'Ochrana vozidiel pred krádežou. IGLA s BT príveskami a odbornou montážou v Trenčíne od 480 € bez DPH.',
    url: SITE_URL + '/',
    images: [{ url: SITE_URL + '/alco-social-preview-v2.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Zabezpečenie vozidiel proti krádeži | Autoalarmy Trenčín',
  },
};

export default function HomePage() { return <Redesign/>; }
