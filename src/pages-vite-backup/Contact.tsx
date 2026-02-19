
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/sections/Contact';
import PageHeader from '@/components/sections/PageHeader';
import { MapPin, Mail, Phone, Globe, Building, CreditCard, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Kontakt | ALCO Vehicle Security System</title>
        <meta name="description" content="Kontaktné informácie ALCO Vehicle Security System. Sme tu pre vás v prípade otázok." />
        <base href="/" />
        <link rel="canonical" href="https://www.ochranavozidiel.sk/contact" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <PageHeader 
          title="Kontaktujte nás"
          subtitle="Sme tu pre vás v prípade akýchkoľvek otázok"
          imageSrc="/lovable-uploads/ee024d7c-8a60-425c-9be7-01068775ae7c.png"
        />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
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
                        <p><a href="tel:+421911911876" className="hover:text-primary">+421 911 911 876</a></p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 bg-primary/10 p-3 rounded-lg text-primary">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p><a href="mailto:info@ochranavozidiel.sk" className="hover:text-primary">info@ochranavozidiel.sk</a></p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 bg-primary/10 p-3 rounded-lg text-primary">
                        <Globe size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Web</h3>
                        <p><a href="https://www.ochranavozidiel.sk" className="hover:text-primary" target="_blank" rel="noopener noreferrer">www.ochranavozidiel.sk</a></p>
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
                        <p>Licencia na prevádzkovanie technickej služby vydaná Krajským riaditeľstvom policajného zboru Trenčín pod číslom: PT-001122</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex justify-center">
                <Card className="w-full max-w-3xl mx-auto bg-secondary/30 border border-primary/10">
                  <CardContent className="p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Spoločnosť ALCO.SK, s.r.o. je zapísaná v Obchodnom registri Okresného súdu Trenčín,<br/>
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
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ContactPage;
