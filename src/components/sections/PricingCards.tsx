
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CustomButton from '@/components/ui/CustomButton';
import { Check, RefreshCw, ShoppingCart, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingCards = () => {
  // Common style for all card headers
  const headerStyle = "bg-[#0EA5E9] text-white py-6 text-center relative";
  // Common style for all prices
  const priceStyle = "text-4xl font-bold text-[#0EA5E9]";
  // Common style for all buttons
  const buttonStyle = "w-full bg-[#0EA5E9] hover:bg-[#0c93d1]";
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* IGLA LITE */}
      <Card className="border-0 shadow-lg overflow-hidden flex flex-col h-full">
        <div className={headerStyle}>
          <h3 className="text-2xl font-bold mb-1">IGLA</h3>
          <p className="text-xl">verzia LITE</p>
        </div>
        
        <div className="p-6 text-center flex flex-col h-full">
          <div className="my-4">
            <h4 className={priceStyle}>od 420€</h4>
            <p className="text-lg text-[#0EA5E9]">PIN/smartfón</p>
          </div>
          
          <div className="space-y-4 my-8 text-left flex-grow">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
              <span>Autorizácia PIN kódom</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
              <span>Autorizácia smartfónom</span>
            </div>
            <div className="flex items-start gap-3">
              <ShoppingCart className="h-5 w-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
              <span>Možnosť dokúpiť Bluetooth prívesok</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
              <span>Plastová karta s núdzovým kódom</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
              <span>Doplnkové funkcie*</span>
            </div>
          </div>
          
          <div className="mt-auto pt-8">
            <Link to="/contact-request">
              <CustomButton 
                variant="primary" 
                size="lg" 
                rounded={true}
                className={buttonStyle}
              >
                MÁM ZÁUJEM
                <Send className="h-4 w-4 ml-2" />
              </CustomButton>
            </Link>
            
            <p className="text-sm mt-2 text-center">
              IGLA LITE neobsahuje Bluetooth prívesky.
            </p>
          </div>
        </div>
      </Card>
      
      {/* IGLA PLUS */}
      <Card className="border-0 shadow-lg overflow-hidden flex flex-col h-full relative">
        <div className={headerStyle}>
          <h3 className="text-2xl font-bold mb-1">IGLA</h3>
          <p className="text-xl">verzia PLUS</p>
        </div>
        
        <div className="p-6 text-center flex flex-col h-full">
          <div className="my-4">
            <h4 className={priceStyle}>od 520€</h4>
            <p className="text-lg text-[#0EA5E9]">PIN/smartfón/prívesok</p>
          </div>
          
          <div className="space-y-4 my-8 text-left flex-grow">
            <div className="flex items-start gap-3">
              <RefreshCw className="h-5 w-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
              <span>Ako verzia IGLA LITE</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
              <span>2x Bluetooth prívesok</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
              <span>Autorizácia Bluetooth príveskom</span>
            </div>
          </div>
          
          <div className="mt-auto pt-8">
            <Link to="/contact-request">
              <CustomButton 
                variant="primary" 
                size="lg" 
                rounded={true}
                className={buttonStyle}
              >
                MÁM ZÁUJEM
                <Send className="h-4 w-4 ml-2" />
              </CustomButton>
            </Link>
            
            <p className="text-sm mt-2 text-center">
              Verzia IGLA PLUS obsahuje 2ks Bluetooth príveskou.
            </p>
          </div>
        </div>
      </Card>
      
      {/* IGLA ALARM */}
      <Card className="border-0 shadow-lg overflow-hidden flex flex-col h-full">
        <div className={headerStyle}>
          <h3 className="text-2xl font-bold mb-1">IGLA</h3>
          <p className="text-xl">verzia ALARM</p>
        </div>
        
        <div className="p-6 text-center flex flex-col h-full">
          <div className="my-4">
            <h4 className={priceStyle}>od 640€</h4>
            <p className="text-lg text-[#0EA5E9]">PIN/smartfón/prívesok</p>
          </div>
          
          <div className="space-y-4 my-8 text-left flex-grow">
            <div className="flex items-start gap-3">
              <RefreshCw className="h-5 w-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
              <span>Ako verzia IGLA PLUS</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
              <span>2 x zbernica CAN-BUS</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
              <span>Plášťová ochrana*</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
              <span>3D senzor (pohyb/náklon/otras)*</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
              <span>Možnosť pripojiť klaksón/sirénu*</span>
            </div>
          </div>
          
          <div className="mt-auto pt-8">
            <Link to="/contact-request">
              <CustomButton 
                variant="primary" 
                size="lg" 
                rounded={true}
                className={buttonStyle}
              >
                MÁM ZÁUJEM
                <Send className="h-4 w-4 ml-2" />
              </CustomButton>
            </Link>
            
            <p className="text-sm mt-2 text-center">
              Verzia IGLA ALARM obsahuje 2ks Bluetooth príveskou.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PricingCards;
