import type { Metadata } from 'next';
import NavbarNext from '@/components/layout/NavbarNext';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import TechnicalSpecifications from '@/components/sections/TechnicalSpecifications';
import { HERO_HEIGHT_PX } from '@/constants/hero';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';
const PAGE_URL = SITE_URL + '/pasivny-monitoring/';

export const metadata: Metadata = {
  title: 'Pasívny monitoring | GPS lokalizácia vozidiel | Autoalarmy Trenčín',
  description:
    'Pasívny monitoring a GPS lokalizácia vozidiel. GSM moduly, sledovanie polohy. Ochrana vozidiel Trenčín.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Pasívny monitoring | Autoalarmy Trenčín',
    description: 'Pasívny monitoring, GPS lokalizácia vozidiel. Ochrana vozidiel Trenčín.',
    url: PAGE_URL,
    images: [{ url: SITE_URL + '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Pasívny monitoring | Autoalarmy Trenčín',
  },
};

export default function PasivnyMonitoringPage() {
  return (
    <>
      <NavbarNext />
      <main className="relative">
        <PageHeader
          title="Pasívny monitoring"
          subtitle="GPS a GSM lokalizácia vozidiel"
        />
        <div className="relative z-40 divide-y divide-zinc-900/30" style={{ paddingTop: HERO_HEIGHT_PX }}>
          <section className="section-container">
          <div className="max-w-prose mx-auto text-muted-foreground space-y-4">
            <p>
              Pasívny monitoring umožňuje sledovať polohu vozidla a prijímať upozornenia. Ideálny doplnok k sofistikovanému zabezpečeniu.
            </p>
            <p>
              Pre bližšie informácie nás neváhajte kontaktovať.
            </p>
          </div>
        </section>
          <TechnicalSpecifications />
        </div>
      </main>
      <Footer />
    </>
  );
}
