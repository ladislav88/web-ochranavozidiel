
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import FadeIn from '@/components/animations/FadeIn';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import AnimatedBackground from '@/components/animations/AnimatedBackground';

type ReviewProps = {
  name: string;
  image: string;
  rating: number;
  text: string;
  date: string;
  carModel?: string;
};

const ReviewCard = ({ name, image, rating, text, date, carModel }: ReviewProps) => {
  return (
    <div className="bg-black border border-white/10 rounded-lg p-6 shadow-lg relative overflow-hidden h-full">
      <div className="flex items-center mb-4">
        <Avatar className="h-14 w-14 border-2 border-[#0EA5E9]">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-orange-500/20 text-white">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <h4 className="font-medium text-white text-lg">{name}</h4>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < rating ? 'text-orange-500 fill-orange-500' : 'text-gray-400'}`} 
              />
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-1">{date}</p>
        </div>
      </div>
      {carModel && (
        <div className="mb-3 text-sm">
          <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full">{carModel}</span>
        </div>
      )}
      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
    </div>
  );
};

const ReviewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 9;

  const reviews: ReviewProps[] = [
    {
      name: "Martin Kováč",
      image: "/lovable-uploads/photo-random-1.jpg",
      rating: 5,
      text: "Systém IGLA mi zachránil auto dvakrát počas dvoch rokov. Zlodeji sa snažili, ale nedokázali ho hacknúť. Najlepšia investícia pre moje BMW X5, ktoré je teraz dokonale chránené.",
      date: "15. marec 2023",
      carModel: "BMW X5"
    },
    {
      name: "Petra Nováková",
      image: "/lovable-uploads/photo-random-2.jpg",
      rating: 5,
      text: "Ako žena som sa bála, že by som mohla mať problém s ovládaním, ale je to neuveriteľne jednoduché. A to najdôležitejšie - cítim sa bezpečne aj v noci na parkovisku. IGLA spĺňa všetky moje očakávania.",
      date: "7. február 2023",
      carModel: "Audi Q3"
    },
    {
      name: "Tomáš Hudec",
      image: "/lovable-uploads/photo-random-3.jpg",
      rating: 4,
      text: "Po krádeži môjho predchádzajúceho auta som nenechal nič na náhodu. IGLA poskytuje neuveriteľný pocit istoty. Montáž bola rýchla a profesionálna. Jediný dôvod, prečo nedávam 5 hviezdičiek je, že aktivácia niekedy trvá o sekundu dlhšie.",
      date: "22. október 2022",
      carModel: "VW Passat"
    },
    {
      name: "Zuzana Krajčíová",
      image: "/lovable-uploads/photo-random-4.jpg",
      rating: 5,
      text: "Moje Audi A6 je teraz dobre chránené. To, čo ma presvedčilo, je, že systém je úplne skrytý a nezasahuje do elektroniky vozidla. Odporúčam všetkým, ktorí chcú skutočnú ochranu, nie len ilúziu bezpečia.",
      date: "3. december 2022",
      carModel: "Audi A6"
    },
    {
      name: "Marek Varga",
      image: "/lovable-uploads/photo-random-5.jpg",
      rating: 5,
      text: "Najlepší zabezpečovací systém, aký som kedy mal. Po inštalácii som urobil test - nikto z mojich priateľov nevedel, ako auto naštartovať, aj keď mali kľúče. IGLA je skutočne neprekonateľná.",
      date: "18. január 2023",
      carModel: "Mercedes-Benz GLC"
    },
    {
      name: "Jana Moravčíková",
      image: "/lovable-uploads/photo-random-6.jpg",
      rating: 5,
      text: "Ako majiteľka Mercedes-Benz som si nemohla dovoliť riskovať. IGLA poskytuje dokonalú ochranu a páči sa mi, že nepotrebujem žiadne ďalšie diaľkové ovládače. Jednoduché a efektívne.",
      date: "5. apríl 2023",
      carModel: "Mercedes-Benz C-Class"
    },
    {
      name: "Juraj Tóth",
      image: "/lovable-uploads/photo-random-7.jpg",
      rating: 5,
      text: "Po tom, čo mi ukradli predchádzajúce auto, som hľadal to najlepšie zabezpečenie. IGLA prekonala moje očakávania. Montáž trvala len hodinu a systém funguje dokonale. Mám pokoj na duši.",
      date: "20. marec 2023",
      carModel: "BMW 5 Series"
    },
    {
      name: "Eva Horváthová",
      image: "/lovable-uploads/photo-random-8.jpg",
      rating: 4,
      text: "IGLA chráni moje Porsche už rok bez jediného problému. Oceňujem, že systém je diskrétny a nevyžaduje žiadnu údržbu. Odporúčam každému, kto hľadá špičkovú ochranu.",
      date: "12. február 2023",
      carModel: "Porsche Cayenne"
    },
    {
      name: "Michal Kováčik",
      image: "/lovable-uploads/photo-random-9.jpg",
      rating: 5,
      text: "Som profesionálny vodič a vyskúšal som mnoho zabezpečovacích systémov. IGLA je jednoznačne najlepšia. Žiadne falošné poplachy, žiadne problémy so štartovaním, len spoľahlivá ochrana.",
      date: "8. január 2023",
      carModel: "Range Rover Sport"
    },
    {
      name: "Katarína Novotná",
      image: "/lovable-uploads/photo-random-10.jpg",
      rating: 5,
      text: "Po inštalácii IGLA do môjho Volva sa cítim omnoho bezpečnejšie. Systém je neuveriteľne jednoduchý na použití a pritom poskytuje maximálnu ochranu. Investícia, ktorú neľutujem.",
      date: "3. marec 2023",
      carModel: "Volvo XC60"
    },
    {
      name: "Peter Malý",
      image: "/lovable-uploads/photo-random-11.jpg",
      rating: 4,
      text: "IGLA chráni moje Audi RS6 už dva roky. Páči sa mi, že systém je úplne skrytý a žiadny zlodej nemá šancu ho objaviť. Dávam 4 hviezdičky len preto, že počiatočné nastavenie bolo trochu komplikované.",
      date: "15. december 2022",
      carModel: "Audi RS6"
    },
    {
      name: "Anna Veselá",
      image: "/lovable-uploads/photo-random-12.jpg",
      rating: 5,
      text: "Môj Lexus je teraz dokonale chránený vďaka IGLA. Montáž bola profesionálna a rýchla. Najlepšie je, že nepotrebujem žiadne extra ovládače alebo aplikácie. Jednoducho geniálne!",
      date: "28. február 2023",
      carModel: "Lexus RX"
    },
    {
      name: "Roman Kowalski",
      image: "/lovable-uploads/photo-random-13.jpg",
      rating: 5,
      text: "Po tom, čo mi zlodeji skúšali ukradnúť auto dvakrát v priebehu mesiaca, som investoval do IGLA. Odvtedy žiadne problémy. Systém je skutočne neviditeľný a neprekonateľný.",
      date: "10. apríl 2023",
      carModel: "Toyota Land Cruiser"
    },
    {
      name: "Soňa Kučerová",
      image: "/lovable-uploads/photo-random-14.jpg",
      rating: 5,
      text: "IGLA ochráni moje auto lepšie ako akýkoľvek alarm. Žiadne otravné zvuky, žiadne falošné poplachy, len tichá a efektívna ochrana. Som veľmi spokojná s touto investíciou.",
      date: "5. január 2023",
      carModel: "Mazda CX-5"
    },
    {
      name: "Jozef Novák",
      image: "/lovable-uploads/photo-random-15.jpg",
      rating: 4,
      text: "Ako technik som bol spočiatku skeptický, ale IGLA ma presvedčila. Systém je technicky premyslený a poskytuje skutočnú ochranu, nie len ilúziu. Odporúčam všetkým majiteľom drahších vozidiel.",
      date: "22. marec 2023",
      carModel: "Škoda Kodiaq RS"
    },
    {
      name: "Martina Svobodová",
      image: "/lovable-uploads/photo-random-16.jpg",
      rating: 5,
      text: "Moje Mini Cooper je teraz chránené systémom IGLA a musím povedať, že je to najlepšia investícia, akú som mohla urobiť. Jednoduché používanie a maximálna ochrana.",
      date: "15. február 2023",
      carModel: "Mini Cooper S"
    },
    {
      name: "Milan Kubica",
      image: "/lovable-uploads/photo-random-17.jpg",
      rating: 5,
      text: "Ako majiteľ autoservisu odporúčam IGLA všetkým svojim zákazníkom. Je to jediný systém, ktorý skutočne poskytuje ochranu pred modernými metódami krádeže áut.",
      date: "20. január 2023",
      carModel: "Ford Mustang"
    },
    {
      name: "Daniela Macháčová",
      image: "/lovable-uploads/photo-random-18.jpg",
      rating: 5,
      text: "IGLA chráni môj Mercedes už rok a som maximálne spokojná. Žiadne problémy, len spoľahlivá ochrana. Odporúčam každému, kto hľadá skutočné zabezpečenie, nie len marketingový trik.",
      date: "8. marec 2023",
      carModel: "Mercedes-Benz E-Class"
    },
    {
      name: "Ondrej Molnár",
      image: "/lovable-uploads/photo-random-1.jpg",
      rating: 4,
      text: "Po niekoľkých pokusoch o krádež v našej štvrti som sa rozhodol pre IGLA. Inštalácia bola profesionálna a rýchla. Systém funguje presne tak, ako sľubujú. Konečne môžem spať pokojne.",
      date: "12. apríl 2023",
      carModel: "VW Tiguan"
    },
    {
      name: "Helena Kováčová",
      image: "/lovable-uploads/photo-random-2.jpg",
      rating: 5,
      text: "IGLA mi dáva istotu, že keď zaparkujem svoje Porsche 911, nájdem ho presne tam, kde som ho nechala. Žiadne ďalšie ovládače, žiadne komplikácie, len čistá ochrana.",
      date: "3. február 2023",
      carModel: "Porsche 911"
    },
    {
      name: "Filip Trnka",
      image: "/lovable-uploads/photo-random-3.jpg",
      rating: 5,
      text: "Ako cestovateľ často parKujem na rôznych miestach. S IGLA sa už nemusím obávať o bezpečnosť svojho Land Roveru. Systém funguje spoľahlivo v každej situácii.",
      date: "18. marec 2023",
      carModel: "Land Rover Discovery"
    },
    {
      name: "Ivana Králiková",
      image: "/lovable-uploads/photo-random-4.jpg",
      rating: 5,
      text: "Môj manžel mi daroval IGLA k narodeninám a musím povedať, že je to najlepší darček. Konečne sa nebojím nechať svoje Audi na parkovisku v meste. Absolútna spokojnosť!",
      date: "25. január 2023",
      carModel: "Audi A4"
    },
    {
      name: "Dušan Kollár",
      image: "/lovable-uploads/photo-random-5.jpg",
      rating: 4,
      text: "IGLA chráni moje BMW M5 už dva roky bez jediného problému. Systém je dokonale skrytý a žiadny zlodej ho nemôže nájsť. Vynikajúca investícia pre každého majiteľa drahšieho auta.",
      date: "10. február 2023",
      carModel: "BMW M5"
    },
    {
      name: "Silvia Adamcová",
      image: "/lovable-uploads/photo-random-6.jpg",
      rating: 5,
      text: "Po inštalácii IGLA do môjho Jaguaru sa cítim omnoho bezpečnejšie. Systém je neuveriteľne jednoduchý na použití a pritom poskytuje maximálnu ochranu. Vrelo odporúčam!",
      date: "15. marec 2023",
      carModel: "Jaguar F-Pace"
    },
    {
      name: "Patrik Nemec",
      image: "/lovable-uploads/photo-random-7.jpg",
      rating: 5,
      text: "Ako taxikár potrebujem spoľahlivú ochranu pre svoje auto. IGLA mi poskytuje presne to, čo potrebujem. Žiadne zbytočné alarmy, len efektívna ochrana proti krádeži.",
      date: "20. december 2022",
      carModel: "Škoda Superb"
    },
    {
      name: "Lucia Hrivnáková",
      image: "/lovable-uploads/photo-random-8.jpg",
      rating: 5,
      text: "IGLA je jediný systém, ktorému dôverujem na ochranu môjho nového Range Roveru. Inštalácia bola rýchla a profesionálna. Teraz sa už nemusím báť o svoje auto.",
      date: "5. apríl 2023",
      carModel: "Range Rover Velar"
    },
    {
      name: "Tomáš Kučera",
      image: "/lovable-uploads/photo-random-9.jpg",
      rating: 4,
      text: "Po dvoch pokusoch o krádež som investoval do IGLA a od tej doby mám pokoj. Systém funguje spoľahlivo a bez akýchkoľvek komplikácií. Vrelo odporúčam všetkým majiteľom áut.",
      date: "12. január 2023",
      carModel: "Mercedes-Benz S-Class"
    },
    {
      name: "Martina Nagyová",
      image: "/lovable-uploads/photo-random-10.jpg",
      rating: 5,
      text: "IGLA chráni moje Lexus už rok a som maximálne spokojná. Žiadne problémy, len spoľahlivá ochrana. Lepší zabezpečovací systém na trhu jednoducho nie je.",
      date: "25. marec 2023",
      carModel: "Lexus ES"
    },
    {
      name: "Ján Baláž",
      image: "/lovable-uploads/photo-random-11.jpg",
      rating: 5,
      text: "Ako predajca luxusných áut odporúčam IGLA všetkým svojim zákazníkom. Je to najlepšia investícia na ochranu ich nových vozidiel. Spolupráca s IGLA je vždy profesionálna.",
      date: "10. marec 2023",
      carModel: "Audi Q8"
    },
    {
      name: "Alexandra Petrová",
      image: "/lovable-uploads/photo-random-12.jpg",
      rating: 5,
      text: "Po nainštalovaní IGLA do môjho Bentley sa cítim oveľa pokojnejšie. Systém je diskrétny, spoľahlivý a poskytuje maximálnu ochranu bez akýchkoľvek kompromisov.",
      date: "2. február 2023",
      carModel: "Bentley Bentayga"
    },
    {
      name: "Lýdia Bieliková",
      image: "/lovable-uploads/photo-random-4.jpg",
      rating: 5,
      text: "IGLA ma nikdy nesklamala. Po troch rokoch používania môžem potvrdiť, že je to najlepšia investícia do ochrany môjho BMW. Jednoduchosť používania a maximálna ochrana.",
      date: "8. apríl 2023",
      carModel: "BMW X3"
    },
    {
      name: "Jakub Moravec",
      image: "/lovable-uploads/photo-random-11.jpg",
      rating: 5,
      text: "Po tom, čo som nainštaloval IGLA do svojho Range Rover Sport, mám konečne pokoj na duši. Systém funguje perfektne a poskytuje skutočnú ochranu proti moderným zlodejom áut.",
      date: "14. marec 2023",
      carModel: "Range Rover Sport"
    },
    {
      name: "Andrea Tichá",
      image: "/lovable-uploads/photo-random-6.jpg",
      rating: 4,
      text: "IGLA chráni moje vozidlo už viac ako rok bez jediného problému. Inštalácia bola rýchla a profesionálna. Mám pokoj aj keď parkujem v problémových oblastiach.",
      date: "2. apríl 2023",
      carModel: "Mercedes-Benz GLE"
    },
    {
      name: "Radoslav Hruška",
      image: "/lovable-uploads/photo-random-1.jpg",
      rating: 5,
      text: "Po viacerých pokusoch o krádež v našej časti mesta som sa rozhodol pre IGLA a teraz môžem spokojne spať. Nikto nemá šancu ukradnúť moje auto s týmto systémom.",
      date: "19. február 2023",
      carModel: "Audi S8"
    },
    {
      name: "Simona Kučerová",
      image: "/lovable-uploads/photo-random-8.jpg",
      rating: 5,
      text: "IGLA je jednoducho najlepšia! Žiadne extra zariadenia, žiadne komplikácie - len spoľahlivá ochrana môjho BMW. Vrelo odporúčam všetkým majiteľom prémiových vozidiel.",
      date: "28. marec 2023",
      carModel: "BMW 3 Series"
    },
    {
      name: "Erik Malý",
      image: "/lovable-uploads/photo-random-3.jpg",
      rating: 5,
      text: "Profesionálna inštalácia a perfektné fungovanie. IGLA robí presne to, čo sľubuje - poskytuje neviditeľnú ale maximálnu ochranu proti krádeži bez kompromisov.",
      date: "10. marec 2023",
      carModel: "Porsche Macan"
    }
  ];

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  return (
    <>
      <Helmet>
        <title>Recenzie | ALCO Vehicle Security System</title>
        <meta name="description" content="Prečítajte si recenzie a skúsenosti našich zákazníkov so systémom IGLA" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <PageHeader 
          title="Recenzie našich zákazníkov"
          subtitle="Prečítajte si, čo hovoria spokojní používatelia systému IGLA"
          imageSrc="/lovable-uploads/ee024d7c-8a60-425c-9be7-01068775ae7c.png"
        />
        
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentReviews.map((review, index) => (
                <FadeIn key={index} direction="up" delay={`0.${index + 1}s`}>
                  <ReviewCard {...review} />
                </FadeIn>
              ))}
            </div>
            
            {totalPages > 1 && (
              <Pagination className="mt-8">
                <PaginationContent>
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious 
                        className="text-white hover:bg-[#0EA5E9]/20 hover:text-[#0EA5E9] border-white/10"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                      />
                    </PaginationItem>
                  )}
                  
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        className={`text-white hover:bg-[#0EA5E9]/20 hover:text-[#0EA5E9] border-white/10 ${
                          currentPage === i + 1 ? 'bg-[#0EA5E9]/20 text-[#0EA5E9]' : ''
                        }`}
                        onClick={() => setCurrentPage(i + 1)}
                        isActive={currentPage === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext 
                        className="text-white hover:bg-[#0EA5E9]/20 hover:text-[#0EA5E9] border-white/10"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            )}
          </div>
          
          <div className="absolute top-20 -left-32 w-64 h-64 bg-[#0EA5E9]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-32 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-3xl"></div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ReviewsPage;
