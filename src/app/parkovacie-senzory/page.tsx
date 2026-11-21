import type { Metadata } from 'next';
import ServicePage from '@/components/redesign/ServicePage';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';
const PAGE_URL = SITE_URL + '/parkovacie-senzory';

export const metadata: Metadata = {
  title: 'Parkovacie snímače Trenčín | Montáž parkovacích senzorov',
  description:
    'Profesionálna montáž parkovacích snímačov v Trenčíne. Presné senzory, diskrétny vzhľad, rýchla montáž. Zavolajte +421 911 911 876.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Parkovacie snímače Trenčín | Montáž parkovacích senzorov',
    description:
      'Profesionálna montáž parkovacích snímačov v Trenčíne. Presné senzory, diskrétny vzhľad, rýchla montáž.',
    url: PAGE_URL,
    images: [
      {
        url: SITE_URL + '/parkovacie-senzory-discretny-vzhlad-oem.png',
        width: 1200,
        height: 800,
        alt: 'Detail profesionálnej montáže diskrétnych parkovacích senzorov ALCO',
      },
    ],
  },
  twitter: {
    title: 'Parkovacie snímače Trenčín | Montáž parkovacích senzorov',
  },
};

export default function Page() {return <ServicePage service="senzory"/>;}
