
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import HowItWorksSections from '@/components/sections/HowItWorksSections';
import FunctionalitySection from '@/components/sections/FunctionalitySection';
import InstallationProcess from '@/components/sections/InstallationProcess';
import TechnicalSpecifications from '@/components/sections/TechnicalSpecifications';

const HowItWorksPage = () => {
  return (
    <>
      <Helmet>
        <title>Ako funguje IGLA | ALCO Vehicle Security System</title>
        <meta name="description" content="Podrobné informácie o tom, ako funguje zabezpečovací systém IGLA" />
        <link rel="canonical" href="https://ochranavozidiel.sk/how-it-works" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20 divide-y divide-zinc-900/30">
        <PageHeader 
          title="Ako funguje IGLA?"
          subtitle="Dokonalá ochrana vozidla bez ovládača"
          imageSrc="/lovable-uploads/ee024d7c-8a60-425c-9be7-01068775ae7c.png"
        />
        
        <HowItWorksSections />
        <FunctionalitySection />
        <InstallationProcess />
        <TechnicalSpecifications />
      </main>
      
      <Footer />
    </>
  );
};

export default HowItWorksPage;
