import type { Metadata } from 'next';
import NavbarNext from '@/components/layout/NavbarNext';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import HowItWorksSections from '@/components/sections/HowItWorksSections';
import FunctionalitySection from '@/components/sections/FunctionalitySection';
import InstallationProcess from '@/components/sections/InstallationProcess';
import TechnicalSpecifications from '@/components/sections/TechnicalSpecifications';
import { HERO_HEIGHT_PX } from '@/constants/hero';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';
const PAGE_URL = SITE_URL + '/sofistikovane-zabezpecenie/';

export const metadata: Metadata = {
  title: 'Sofistikované zabezpečenie vozidiel | IGLA | Autoalarmy Trenčín',
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
    images: [{ url: SITE_URL + '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Sofistikované zabezpečenie vozidiel | Autoalarmy Trenčín',
  },
};

export default function SofistikovaneZabezpeceniePage() {
  return (
    <>
      <NavbarNext />
      <main className="relative">
        <PageHeader
          title="Sofistikované zabezpečenie"
          subtitle="Dokonalá ochrana vozidla bez ovládača"
        />
        <div className="relative z-40 divide-y divide-zinc-900/30" style={{ paddingTop: HERO_HEIGHT_PX }}>
          <HowItWorksSections />
        <FunctionalitySection />
        <InstallationProcess />
        <TechnicalSpecifications />
        </div>
      </main>
      <Footer />
    </>
  );
}
