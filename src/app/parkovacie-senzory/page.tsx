import type { Metadata } from 'next';
import NavbarNext from '@/components/layout/NavbarNext';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';
const PAGE_URL = SITE_URL + '/parkovacie-senzory/';

export const metadata: Metadata = {
  title: 'Parkovacie senzory | Montáž | Autoalarmy Trenčín',
  description:
    'Montáž parkovacích senzorov. Kvalitné parkovacie senzory pre vozidlá. Trenčín a okolie.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Parkovacie senzory | Autoalarmy Trenčín',
    description: 'Montáž parkovacích senzorov. Trenčín a okolie.',
    url: PAGE_URL,
    images: [{ url: SITE_URL + '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Parkovacie senzory | Autoalarmy Trenčín',
  },
};

export default function ParkovacieSenzoryPage() {
  return (
    <>
      <NavbarNext />
      <main className="pt-20 divide-y divide-zinc-900/30">
        <PageHeader
          title="Parkovacie senzory"
          subtitle="Kvalitné parkovacie senzory pre vozidlá"
          imageSrc="/lovable-uploads/ee024d7c-8a60-425c-9be7-01068775ae7c.png"
        />
        <section className="section-container">
          <div className="max-w-3xl mx-auto text-muted-foreground space-y-4">
            <p>
              Ponúkame montáž kvalitných parkovacích senzorov. Pre cenovú ponuku a viac informácií nás kontaktujte.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
