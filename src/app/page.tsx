import type { Metadata } from 'next';
import Redesign from '@/components/redesign/Redesign';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';

export const metadata: Metadata = {
  title: { absolute: 'Autoalarmy Trenčín | Zabezpečenie vozidiel IGLA' },
  description:
    'Zabezpečenie vozidiel IGLA, GPS monitoring a parkovacie senzory. Montáž v Trenčíne. Vyžiadajte si ponuku pre svoje auto.',
  alternates: {
    canonical: SITE_URL + '/',
  },
  openGraph: {
    title: 'Zabezpečenie vozidiel proti krádeži | Autoalarmy Trenčín',
    description:
      'Ochrana vozidiel Trenčín. Sofistikované zabezpečenie IGLA, autoalarmy, pasívny monitoring.',
    url: SITE_URL + '/',
    images: [{ url: SITE_URL + '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Zabezpečenie vozidiel proti krádeži | Autoalarmy Trenčín',
  },
};

export default function HomePage() { return <Redesign/>; }
