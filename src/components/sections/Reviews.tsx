
import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import FadeIn from '../animations/FadeIn';

type ReviewProps = {
  name: string;
  image: string;
  rating: number;
  text: string;
  date: string;
};

const ReviewCard = ({ name, image, rating, text, date }: ReviewProps) => {
  return (
    <div className="bg-black border border-white/10 rounded-lg p-6 shadow-lg relative overflow-hidden">
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
      <p className="text-white text-sm leading-relaxed">{text}</p>
      
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
    </div>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Martin Kováč",
      image: "/lovable-uploads/photo-random-1.jpg",
      rating: 5,
      text: "Systém IGLA mi zachránil auto dvakrát počas dvoch rokov. Zlodeji sa snažili, ale nedokázali ho hacknúť. Najlepšia investícia pre moje BMW.",
      date: "15. marec 2023"
    },
    {
      name: "Petra Nováková",
      image: "/lovable-uploads/photo-random-2.jpg",
      rating: 5,
      text: "Ako žena som sa bála, že by som mohla mať problém s ovládaním, ale je to neuveriteľne jednoduché. A to najdôležitejšie - cítim sa bezpečne aj v noci na parkovisku.",
      date: "7. február 2023"
    },
    {
      name: "Tomáš Hudec",
      image: "/lovable-uploads/photo-random-3.jpg",
      rating: 4,
      text: "Po krádeži môjho predchádzajúceho auta som nenechal nič na náhodu. IGLA poskytuje neuveriteľný pocit istoty. Montáž bola rýchla a profesionálna.",
      date: "22. október 2022"
    },
    {
      name: "Zuzana Krajčíová",
      image: "/lovable-uploads/photo-random-4.jpg",
      rating: 5,
      text: "Moje Audi A6 je teraz dobre chránené. To, čo ma presvedčilo, je, že systém je úplne skrytý a nezasahuje do elektroniky vozidla. Odporúčam všetkým.",
      date: "3. december 2022"
    },
    {
      name: "Marek Varga",
      image: "/lovable-uploads/photo-random-5.jpg",
      rating: 5,
      text: "Najlepší zabezpečovací systém, aký som kedy mal. Po inštalácii som urobil test - nikto z mojich priateľov nevedel, ako auto naštartovať, aj keď mali kľúče.",
      date: "18. január 2023"
    },
    {
      name: "Jana Moravčíková",
      image: "/lovable-uploads/photo-random-6.jpg",
      rating: 5,
      text: "Ako majiteľka Mercedes-Benz som si nemohla dovoliť riskovať. IGLA poskytuje dokonalú ochranu a páči sa mi, že nepotrebujem žiadne ďalšie diaľkové ovládače.",
      date: "5. apríl 2023"
    }
  ];

  return (
    <section id="reviews" className="py-20 md:py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-animate">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-orange-500/20 text-orange-500 rounded-full">
              Recenzie
            </span>
          </div>
          <h2 className="section-title text-white">Čo hovoria naši zákazníci</h2>
          <p className="section-subtitle text-white">
            Spokojnosť našich zákazníkov je našou najlepšou referenciou. Prečítajte si ich skúsenosti s ochranným systémom IGLA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <FadeIn key={index} direction="up" delay={`0.${index + 1}s`}>
              <ReviewCard {...review} />
            </FadeIn>
          ))}
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Reviews;
