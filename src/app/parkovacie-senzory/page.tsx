import type { Metadata } from 'next';
import Image from 'next/image';
import { HERO_BACKGROUND_IMAGE, HERO_BACKGROUND_ALT, HERO_HEIGHT_PX } from '@/constants/hero';
import NavbarNext from '@/components/layout/NavbarNext';
import Footer from '@/components/layout/Footer';
import AutoPlayYouTube from '@/components/AutoPlayYouTube';
import ParkovacieSenzoryContactForm from '@/components/ParkovacieSenzoryContactForm';
import ParkovacieSenzoryFAQ from '@/components/ParkovacieSenzoryFAQ';
import {
  Target,
  Eye,
  Zap,
  Camera,
  Car,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Cable,
  Speaker,
  LayoutGrid,
} from 'lucide-react';
import Link from 'next/link';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';
const PAGE_URL = SITE_URL + '/parkovacie-senzory/';

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

const BENEFITS = [
  {
    icon: Target,
    title: 'Presnosť a spoľahlivosť',
    desc: 'Senzory s vysokou citlivosťou a presným meraním vzdialenosti.',
  },
  {
    icon: Eye,
    title: 'Diskrétny vzhľad (ako OEM)',
    desc: 'Integrácia do nárazníka pôsobí ako originálna výbava vozidla.',
  },
  {
    icon: Zap,
    title: 'Rýchla montáž',
    desc: 'Skúsená montáž za pár hodín, vrátane kalibrácie.',
  },
  {
    icon: Camera,
    title: 'Možnosť doplniť kameru',
    desc: 'Kombinácia senzorov s kamerou pre maximálny komfort.',
  },
  {
    icon: Car,
    title: 'Vhodné pre všetky vozidlá',
    desc: 'Autá bez výbavy, staršie modely aj nové vozidlá.',
  },
  {
    icon: ShieldCheck,
    title: 'Záruka + profesionálne zapojenie',
    desc: 'Kvalitná práca so zárukou a čistým zapojením.',
  },
];

const STEPS = [
  {
    title: 'Konzultácia',
    desc: 'Zhoda požiadaviek, výber typu senzorov a riešenia.',
  },
  {
    title: 'Výber riešenia',
    desc: 'Individuálny návrh podľa vozidla a rozpočtu.',
  },
  {
    title: 'Montáž a kalibrácia',
    desc: 'Presná montáž s laserovým zarovnaním, zapojenie, test.',
  },
  {
    title: 'Odovzdanie + zaškolenie',
    desc: 'Krátke predvedenie obsluhy a odovzdanie vozidla.',
  },
];

const GALLERY_FEATURES = [
  {
    icon: LayoutGrid,
    title: 'Presné umiestnenie',
    desc: 'Laserové zarovnanie pre optimálnu pozíciu senzorov.',
    image: '/parkovacie-senzory-montaz-laser-alignment.png',
    imageAlt: 'Profesionálna montáž parkovacích senzorov s laserovým zarovnaním',
  },
  {
    icon: Cable,
    title: 'Kvalitná kabeláž',
    desc: 'Čisté zapojenie, maskovanie káblov, trvalá inštalácia.',
    image: null,
  },
  {
    icon: Speaker,
    title: 'Bzučiak alebo displej',
    desc: 'Vizuálne aj zvukové varovanie pri približovaní prekážky.',
    image: '/parkovacie-senzory-discretny-vzhlad-oem.png',
    imageAlt:
      'Detail profesionálnej montáže diskrétnych parkovacích senzorov na nárazník',
  },
];

const PRICING_PACKAGES = [
  {
    name: 'Základný balík',
    desc: '4 senzory vzadu',
    price: 'Cena podľa vozidla',
  },
  {
    name: 'Rozšírený balík',
    desc: 'Senzory pred + vzad',
    price: 'Cena podľa vozidla',
  },
  {
    name: 'Premium balík',
    desc: 'Senzory + kamera',
    price: 'Cena podľa vozidla',
  },
];

function JsonLdSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Montáž parkovacích snímačov',
    description:
      'Profesionálna montáž parkovacích senzorov v Trenčíne a okolí. Presné senzory, diskrétny vzhľad, rýchla montáž.',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 48.8943,
        longitude: 18.0444,
      },
      geoRadius: '50000',
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'ALCO.SK',
      telephone: '+421911911876',
      email: 'info@ochranavozidiel.sk',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Trenčianske Stankovce',
        postalCode: '913 11',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ParkovacieSenzoryPage() {
  return (
    <>
      <JsonLdSchema />
      <NavbarNext />
      {/* Sticky mobile CTA */}
      <a
        href="tel:+421911911876"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#e06329] text-white shadow-lg md:hidden"
        aria-label="Zavolať"
      >
        <Phone className="h-6 w-6" />
      </a>

      <main className="relative">
        {/* HERO - fixná výška, neposúva sa pri scrollovaní */}
        <section
          className="fixed top-0 left-0 right-0 z-30 overflow-hidden bg-black flex items-center justify-center"
          style={{ height: HERO_HEIGHT_PX }}
        >
          <div className="absolute inset-0 w-full h-full">
            <img
              src={HERO_BACKGROUND_IMAGE}
              alt={HERO_BACKGROUND_ALT}
              className="w-full h-full object-cover object-center opacity-70"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/60 via-zinc-900/40 to-black" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 xl:px-10 text-center relative z-10">
            <h1 className="mx-auto max-w-prose text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Parkovacie snímače (senzory) – profesionálna montáž v Trenčíne
            </h1>
            <p className="mx-auto mt-6 max-w-prose text-lg text-zinc-300 md:text-xl">
              Bezpečné parkovanie bez stresu. Ochrana nárazníka, presné meranie
              vzdialenosti.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:+421911911876"
                className="inline-flex items-center gap-2 rounded-lg bg-[#e06329] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#c85823]"
              >
                <Phone className="h-5 w-5" />
                Zavolať: +421 911 911 876
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-600 px-8 py-4 font-semibold text-white transition-colors hover:border-[#e06329] hover:bg-zinc-800/50"
              >
                <Mail className="h-5 w-5" />
                Napísať
              </a>
            </div>
          </div>
        </section>

        {/* Spacer + obsah */}
        <div className="relative z-40" style={{ paddingTop: HERO_HEIGHT_PX }}>
        {/* BENEFITY */}
        <section className="section-container bg-zinc-900/30 py-16 md:py-20">
          <h2 className="section-title text-center">Prečo si vybrať nás</h2>
          <p className="section-subtitle text-center">
            Kvalitné senzory, profesionálna montáž, spoľahlivý výsledok.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-[#e06329]/50"
              >
                <div className="mb-4 inline-flex rounded-lg bg-[#e06329]/20 p-3">
                  <b.icon className="h-6 w-6 text-[#e06329]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{b.title}</h3>
                <p className="text-muted-foreground max-w-[70ch]">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AKO TO PREBIEHA */}
        <section className="section-container py-16 md:py-20">
          <h2 className="section-title text-center">Ako to prebieha</h2>
          <p className="section-subtitle text-center">
            Jednoduchý proces od konzultácie po odovzdanie vozidla.
          </p>
          <div className="mx-auto max-w-prose">
            <div className="space-y-8">
              {STEPS.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e06329]/20 text-[#e06329]">
                    <span className="font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-1 text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALÉRIA / DETAILY */}
        <section className="section-container bg-zinc-900/30 py-16 md:py-20">
          <h2 className="section-title text-center">Galéria a detaily</h2>
          <p className="section-subtitle text-center">
            Presné umiestnenie, kvalitná kabeláž, spoľahlivé varovanie.
          </p>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {GALLERY_FEATURES.map((f, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50"
              >
                {f.image && (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={f.image}
                      alt={f.imageAlt!}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-3 inline-flex rounded-lg bg-[#e06329]/20 p-2">
                    <f.icon className="h-5 w-5 text-[#e06329]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-[70ch]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VIDEO SEKCIA */}
        <section className="section-container py-16 md:py-20">
          <h2 className="section-title text-center">Videá z montáže</h2>
          <p className="section-subtitle text-center">
            Presvedčte sa o kvalite našej práce.
          </p>
          <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-2">
            <AutoPlayYouTube
              videoId="https://youtu.be/jsLz8NERL3Q"
              title="Montáž parkovacích senzorov - video 1"
            />
            <AutoPlayYouTube
              videoId="https://youtu.be/I6WNH_TD29s"
              title="Montáž parkovacích senzorov - video 2"
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="section-container bg-zinc-900/30 py-16 md:py-20">
          <h2 className="section-title text-center">Časté otázky</h2>
          <p className="section-subtitle text-center">
            Všetko, čo potrebujete vedieť o parkovacích senzoroch.
          </p>
          <div className="mx-auto max-w-prose">
            <ParkovacieSenzoryFAQ />
          </div>
        </section>

        {/* CENNÍK */}
        <section className="section-container py-16 md:py-20">
          <h2 className="section-title text-center">Cenník a balíky</h2>
          <p className="section-subtitle text-center">
            Cena podľa typu vozidla a zvoleného riešenia.
          </p>
          <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRICING_PACKAGES.map((pkg, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center"
              >
                <h3 className="mb-1 text-xl font-semibold">{pkg.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{pkg.desc}</p>
                <p className="mb-6 font-semibold text-[#e06329]">{pkg.price}</p>
                <Link
                  href="#kontakt"
                  className="inline-block rounded-lg bg-[#e06329] px-6 py-2 font-medium text-white hover:bg-[#c85823]"
                >
                  Zistiť cenu
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* KONTAKT */}
        <section
          id="kontakt"
          className="section-container bg-zinc-900/30 py-16 md:py-20"
        >
          <h2 className="section-title text-center">Kontakt</h2>
          <p className="section-subtitle text-center">
            Trenčín a okolie. Zavolajte alebo napíšte.
          </p>
          <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <a
                href="tel:+421911911876"
                className="flex items-center gap-4 text-lg text-white hover:text-[#e06329]"
              >
                <div className="rounded-lg bg-[#e06329]/20 p-3">
                  <Phone className="h-6 w-6 text-[#e06329]" />
                </div>
                +421 911 911 876
              </a>
              <a
                href="mailto:info@ochranavozidiel.sk"
                className="flex items-center gap-4 text-lg text-white hover:text-[#e06329]"
              >
                <div className="rounded-lg bg-[#e06329]/20 p-3">
                  <Mail className="h-6 w-6 text-[#e06329]" />
                </div>
                info@ochranavozidiel.sk
              </a>
              <div className="flex items-center gap-4 text-lg text-white">
                <div className="rounded-lg bg-[#e06329]/20 p-3">
                  <MapPin className="h-6 w-6 text-[#e06329]" />
                </div>
                <div>
                  <p>Trenčín a okolie</p>
                  <p className="text-sm text-muted-foreground">
                    Malé Stankovce 237, 913 11 Trenčianske Stankovce
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="mb-4 text-xl font-semibold">Napíšte nám</h3>
              <ParkovacieSenzoryContactForm />
            </div>
          </div>
        </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
