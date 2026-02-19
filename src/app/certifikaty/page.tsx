import type { Metadata } from 'next';
import NavbarNext from '@/components/layout/NavbarNext';
import Footer from '@/components/layout/Footer';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';
const PAGE_URL = SITE_URL + '/certifikaty/';

export const metadata: Metadata = {
  title: 'Profil a certifikáty | ALCO.SK - Ochrana vozidiel',
  description:
    'Spoločnosť ALCO.SK, s.r.o. - licencia KR PZ Trenčín, ochrana vozidiel od roku 1996. Autoalarmy, GPS, parkovacie systémy.',
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function CertifikatyPage() {
  return (
    <>
      <NavbarNext />
      <main className="pt-20">
        <section className="section-container py-16 md:py-20">
          <h1 className="section-title mb-12">Profil, Certifikáty</h1>

          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Spoločnosť ALCO.SK, s.r.o. vznikla transformáciou živnostenskej
              činnosti na právnu formu: spoločnosť s ručením obmedzeným. Prvotná
              myšlienka tohto webu vznikla v roku 2006 na základe dlhoročných
              skúseností v oblasti automobilovej ochrany. Spoločnosť ALCO.SK,
              s.r.o. sa zaoberá predovšetkým ochranou vozidiel, montážou
              autoalarmov, GPS systémov, elektronických tajných vypínačov
              (imobilizérov), parkovacích systémov, hands free sád a ostatného
              auto-elektro príslušenstva.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Našim prvoradým cieľom je kvalita odvedenej práce a spokojnosť
              zákazníka po všetkých stránkach. Všetky komponenty, ktoré montujeme
              a predávame, sú dlhodobou praxou overené a ich funkčnosti sa teší
              veľa spokojných zákazníkov. Samozrejmosťou je poskytovaný kvalitný
              záručný aj pozáručný servis, ako aj technická podpora ku
              nainštalovaným systémom a zariadeniam.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Spoločnosť ALCO.SK, s.r.o. vlastní licenciu na prevádzkovanie
              technickej služby vydanú a obnovovanú Krajským riaditeľstvom
              Policajného zboru v Trenčíne v rozsahu činnosti § 7 ods. 1 zákona
              č. 473/2005 Z.z. o súkromnej bezpečnosti pre projektovanie, montáž,
              údržba, revízia, oprava.
            </p>

            <div className="border-t border-zinc-800 pt-12">
              <h2 className="mb-8 text-xl font-semibold text-[#e06329] underline">
                Získané certifikáty od roku 1996:
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Placeholder pre obrázky certifikátov - doplníte neskôr */}
                <div className="aspect-[3/4] rounded-lg border-2 border-dashed border-zinc-700 bg-zinc-900/50 flex items-center justify-center text-sm text-muted-foreground">
                  Certifikát 1
                </div>
                <div className="aspect-[3/4] rounded-lg border-2 border-dashed border-zinc-700 bg-zinc-900/50 flex items-center justify-center text-sm text-muted-foreground">
                  Certifikát 2
                </div>
                <div className="aspect-[3/4] rounded-lg border-2 border-dashed border-zinc-700 bg-zinc-900/50 flex items-center justify-center text-sm text-muted-foreground">
                  Certifikát 3
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Obrázky certifikátov doplníte neskôr.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
