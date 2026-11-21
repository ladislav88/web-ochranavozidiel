import type { Metadata } from 'next';
import ServicePage from '@/components/redesign/ServicePage';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';
const PAGE_URL = SITE_URL + '/sofistikovane-zabezpecenie';

export const metadata: Metadata = {
  title: 'Sofistikované zabezpečenie vozidiel | IGLA',
  description:
    'Sofistikované zabezpečenie vozidiel proti krádeži. IGLA systém, autoalarmy, tajné vypínače, motoralarmy. Ochrana vozidiel Trenčín.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Sofistikované zabezpečenie vozidiel | Autoalarmy Trenčín',
    description:
      'Sofistikované zabezpečenie IGLA, autoalarmy, tajné vypínače. Ochrana vozidiel Trenčín.',
    url: PAGE_URL,
    images: [{ url: SITE_URL + '/alco-social-preview-v2.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Sofistikované zabezpečenie vozidiel | Autoalarmy Trenčín',
  },
};

export default function Page() {return <ServicePage service="igla"/>;}
