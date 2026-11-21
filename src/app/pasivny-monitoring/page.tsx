import type { Metadata } from 'next';
import ServicePage from '@/components/redesign/ServicePage';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';
const PAGE_URL = SITE_URL + '/pasivny-monitoring';

export const metadata: Metadata = {
  title: 'GPS monitoring Trenčín | S montážou od 280 € bez DPH',
  description:
    'GPS monitoring bez mesačného paušálu za monitoring. Mobilná aplikácia, história jázd a viac vozidiel v jednej mape. S montážou od 280 € bez DPH. Stačí vlastná SIM karta.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'GPS | ALCO.SK Trenčín',
    description: 'GPS s odbornou montážou od 280 € bez DPH. Bez paušálu za monitoring. Stačí vlastná SIM karta.',
    url: PAGE_URL,
    images: [{ url: SITE_URL + '/alco-social-preview-v2.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'GPS | ALCO.SK Trenčín',
  },
};

export default function Page() {return <ServicePage service="gps"/>;}
