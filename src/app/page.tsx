import type { Metadata } from 'next';
import NavbarNext from '@/components/layout/NavbarNext';
import Footer from '@/components/layout/Footer';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Reviews from '@/components/sections/Reviews';
import HowItWorksSections from '@/components/sections/HowItWorksSections';
import TechnicalSpecifications from '@/components/sections/TechnicalSpecifications';
import StatsTimeline from '@/components/sections/StatsTimeline';
import Hero from '@/components/sections/Hero';
import HomePageClient from './HomePageClient';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';

export const metadata: Metadata = {
  title: 'Zabezpečenie vozidiel proti krádeži | IGLA | Autoalarmy Trenčín',
  description:
    'Ochrana vozidiel Trenčín. Sofistikované zabezpečenie IGLA, autoalarmy, pasívny monitoring, parkovacie senzory. Zabezpečenie proti krádeži od roku 1996.',
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

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">
      <NavbarNext />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <div className="space-y-0 divide-y divide-zinc-900/30 w-full">
          <About />
          <StatsTimeline />
          <HowItWorksSections />
          <TechnicalSpecifications />
          <Reviews />
          <Contact />
        </div>
      </main>
      <Footer />
      <HomePageClient />
    </div>
  );
}
