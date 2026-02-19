import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import '@/index.css';

const AnimatedBackground = nextDynamic(
  () => import('@/components/animations/AnimatedBackground'),
  { ssr: false }
);

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
        <Providers>
          <TooltipProvider>
            <Sonner />
            <AnimatedBackground />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
