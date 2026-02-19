
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import FadeIn from '@/components/animations/FadeIn';

const GalleryPage = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/971465e7-69df-4a6f-9420-eef361cbd5cc.png",
      alt: "IGLA technik pri inštalácii",
      title: "Odborná montáž IGLA"
    },
    {
      src: "/lovable-uploads/ee024d7c-8a60-425c-9be7-01068775ae7c.png",
      alt: "Vozidlo zabezpečené systémom IGLA",
      title: "Moderné zabezpečenie áut"
    },
    {
      src: "/lovable-uploads/64cc852c-8709-41b4-b5e3-74c09fbbefed.png",
      alt: "Logo ALCO systém",
      title: "ALCO systém"
    },
    {
      src: "/lovable-uploads/983889f5-4d7f-48bd-acff-c0f0ee05e353.png",
      alt: "Displej v automobile",
      title: "Moderná konektivita"
    },
    {
      src: "/lovable-uploads/c0fbd164-d627-442d-803e-408aa79a2fad.png",
      alt: "Inštalácia IGLA",
      title: "Profesionálna inštalácia"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Fotogaléria | ALCO Vehicle Security System</title>
        <meta 
          name="description" 
          content="Prezrite si fotogalériu montáže a inštalácie najmodernejšieho zabezpečovacieho systému IGLA." 
        />
      </Helmet>
      
      <Navbar />
      
      <PageHeader 
        title="Fotogaléria" 
        subtitle="Pozrite si, ako vyzerá inštalácia a používanie systému IGLA"
        imageSrc="/lovable-uploads/971465e7-69df-4a6f-9420-eef361cbd5cc.png"
      />
      
      <main className="py-12 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="mb-10">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#0EA5E9]">
                Inštalácia a komponenty systému IGLA
              </h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <FadeIn key={index} direction="up" delay={`${index * 0.1}s`}>
                  <Card 
                    className="group relative overflow-hidden rounded-lg border border-blue-500/20 bg-blue-950/10 shadow-lg hover:shadow-blue-900/20 transition-all duration-300"
                  >
                    <div className="relative">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <h3 className="text-white font-medium text-lg">{image.title}</h3>
                        </div>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default GalleryPage;
