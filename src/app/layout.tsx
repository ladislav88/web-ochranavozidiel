import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import '@/index.css';

const Sonner = nextDynamic(
  () => import('@/components/ui/sonner').then((m) => ({ default: m.Toaster })),
  { ssr: false }
);

import { TooltipProvider } from '@/components/ui/tooltip';
import Providers from './providers';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Zabezpečenie vozidiel proti krádeži | IGLA | Autoalarmy Trenčín',
    template: '%s | Autoalarmy Trenčín',
  },
  description:
    'Ochrana vozidiel, IGLA systém, sofistikované zabezpečenie proti krádeži. Autoalarmy, pasívny monitoring, parkovacie senzory. Trenčín a okolie.',
  keywords: [
    'ochrana vozidiel',
    'IGLA',
    'Trenčín',
    'zabezpečenie proti krádeži',
    'autoalarmy',
    'tajné vypínače',
    'pasívny monitoring',
    'parkovacie senzory',
  ],
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    url: SITE_URL,
    siteName: 'Autoalarmy Trenčín',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  icons: {
    icon: [{ url: '/alco-icon.png', type: 'image/png' }, { url: '/favicon.ico', sizes: 'any' }],
    shortcut: '/alco-icon.png',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" suppressHydrationWarning>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AutomotiveBusiness',
          '@id': `${SITE_URL}/#business`,
          name: 'ALCO.SK, s.r.o. – Autoalarmy Trenčín',
          url: SITE_URL,
          telephone: '+421911911876',
          email: 'info@ochranavozidiel.sk',
          address: {
            '@type': 'PostalAddress', streetAddress: 'Malé Stankovce 237',
            addressLocality: 'Trenčianske Stankovce', postalCode: '913 11', addressCountry: 'SK',
          },
          areaServed: ['Trenčín', 'Trenčianske Stankovce'],
          sameAs: ['https://www.facebook.com/autoalarmytrencin'],
        }) }} />
        <a href="#main-content" className="skip-link">Prejsť na obsah</a>
        <Providers>
          <TooltipProvider>
            <Sonner />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
