import type { Metadata } from 'next';
import ServicePage from '@/components/redesign/ServicePage';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';
const PAGE_URL = SITE_URL + '/pasivny-monitoring';

export const metadata: Metadata = {
  title: 'Pasívny monitoring | GPS lokalizácia vozidiel',
  description:
    'Pasívny monitoring a GPS lokalizácia vozidiel. GSM moduly, sledovanie polohy. Ochrana vozidiel Trenčín.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Pasívny monitoring | Autoalarmy Trenčín',
    description: 'Pasívny monitoring, GPS lokalizácia vozidiel. Ochrana vozidiel Trenčín.',
    url: PAGE_URL,
    images: [{ url: SITE_URL + '/alco-social-preview-v2.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Pasívny monitoring | Autoalarmy Trenčín',
  },
};

export default function Page() {return <ServicePage service="gps"/>;}
