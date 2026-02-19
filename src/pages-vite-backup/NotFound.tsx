
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomButton from '@/components/ui/CustomButton';
import PageHeader from '@/components/sections/PageHeader';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHeader 
        title="Stránka nenájdená"
        subtitle="Ľutujeme, ale požadovaná stránka neexistuje"
        imageSrc="/lovable-uploads/ee024d7c-8a60-425c-9be7-01068775ae7c.png"
      />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="font-display text-9xl font-bold mb-4 text-[#3a86c9]">404</h1>
            <p className="text-2xl text-foreground mb-8">Oops! Stránka nebola nájdená</p>
            <p className="text-muted-foreground mb-8">
              Stránka, ktorú hľadáte, bola odstránená, premenovaná alebo je dočasne nedostupná.
            </p>
            <Link to="/">
              <CustomButton size="lg">
                Späť na úvod
              </CustomButton>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
