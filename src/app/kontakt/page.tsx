import type { Metadata } from 'next';
import NavbarNext from '@/components/layout/NavbarNext';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/sections/Contact';
import PageHeader from '@/components/sections/PageHeader';
import { Mail, Phone, Globe, Building, CreditCard, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { HERO_HEIGHT_PX } from '@/constants/hero';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';
const PAGE_URL = SITE_URL + '/kontakt/';

export const metadata: Metadata = {
  title: 'Kontakt | Autoalarmy Trenčín',
  description:
    'Kontaktujte nás. Zabezpečenie vozidiel, cenová ponuka. Autoalarmy Trenčín - +421 911 911 876.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Kontakt | Autoalarmy Trenčín',
    description: 'Kontaktné údaje. Cenová ponuka pre zabezpečenie vozidiel.',
    url: PAGE_URL,
    images: [{ url: SITE_URL + '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Kontakt | Autoalarmy Trenčín',
  },
};

export default function KontaktPage() {
  return (
    <>
      <NavbarNext />
      <main className="relative">
        <PageHeader
          title="Kontaktujte nás"
          subtitle="Sme tu pre vás v prípade akýchkoľvek otázok"
        />

        <div
          className="relative z-40 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-16"
          style={{ paddingTop: HERO_HEIGHT_PX }}
        >
            <div className="glassmorphism rounded-xl p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Kontaktné údaje</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 bg-primary/10 p-3 rounded-lg text-primary">
                        <Building size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Adresa</h3>
                        <p>ALCO.SK, s.r.o.</p>
                        <p>Malé Stankovce 237</p>
                        <p>Trenčianske Stankovce 913 11</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 bg-primary/10 p-3 rounded-lg text-primary">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telefón</h3>
                        <p>
                          <a href="tel:+421911911876" className="hover:text-primary">
                            +421 911 911 876
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 bg-primary/10 p-3 rounded-lg text-primary">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p>
                          <a
                            href="mailto:info@ochranavozidiel.sk"
                            className="hover:text-primary"
                          >
                            info@ochranavozidiel.sk
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 bg-primary/10 p-3 rounded-lg text-primary">
                        <Globe size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Web</h3>
                        <p>
                          <a
                            href={SITE_URL}
                            className="hover:text-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            www.autoalarmy-trencin.sk
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-6">Firemné údaje</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 bg-primary/10 p-3 rounded-lg text-primary">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Identifikačné údaje</h3>
                        <p>IČO: 45601259</p>
                        <p>IČ-DPH: SK2023064032</p>
                        <p>Mgr. Ladislav Husár – konateľ</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 bg-primary/10 p-3 rounded-lg text-primary">
                        <CreditCard size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Bankové spojenie</h3>
                        <p>Tatra banka, a.s.</p>
                        <p>IBAN: SK8011000000002929839541</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 bg-primary/10 p-3 rounded-lg text-primary">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Licencia</h3>
                        <p>
                          Licencia na prevádzkovanie technickej služby vydaná Krajským
                          riaditeľstvom policajného zboru Trenčín pod číslom: PT-001122
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-center">
                <Card className="w-full max-w-prose mx-auto bg-secondary/30 border border-primary/10">
                  <CardContent className="p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Spoločnosť ALCO.SK, s.r.o. je zapísaná v Obchodnom registri Okresného
                      súdu Trenčín,<br />
                      Oddiel: Sro, Vložka číslo: 23214/R
                    </p>
                    <Separator className="my-3 bg-primary/10 mx-auto w-2/3" />
                    <p className="text-sm text-muted-foreground">
                      Spoločnosť ALCO.SK, s.r.o. je platcom DPH
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
