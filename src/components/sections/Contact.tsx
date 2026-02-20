'use client';

import React, { useState, useEffect } from 'react';
import FadeIn from '../animations/FadeIn';
import CustomButton from '../ui/CustomButton';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '../ui/select';
import { Card, CardContent } from '../ui/card';
import { Phone, Mail, MapPin, Car, MessageSquare, User, Send } from 'lucide-react';
import { carBrands, defaultEngineTypes, EngineType } from '@/utils/carData';
import { sendEmail } from '@/utils/emailService';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    subject: '',
    message: '',
    vehicleBrand: '',
    vehicleModel: '',
    vehicleYear: '',
    vehicleMonth: '',
    startMethod: '',
    engineType: '',
    customVehicleModel: '',
    customEngineType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showVehicleFields, setShowVehicleFields] = useState(false);
  const [availableModels, setAvailableModels] = useState<{name: string, value: string}[]>([]);
  const [availableEngines, setAvailableEngines] = useState<EngineType[]>([]);
  const [isCustomModel, setIsCustomModel] = useState(false);
  const [isCustomEngine, setIsCustomEngine] = useState(false);

  const months = [
    { name: 'Január', value: '01' },
    { name: 'Február', value: '02' },
    { name: 'Marec', value: '03' },
    { name: 'Apríl', value: '04' },
    { name: 'Máj', value: '05' },
    { name: 'Jún', value: '06' },
    { name: 'Júl', value: '07' },
    { name: 'August', value: '08' },
    { name: 'September', value: '09' },
    { name: 'Október', value: '10' },
    { name: 'November', value: '11' },
    { name: 'December', value: '12' },
  ];

  useEffect(() => {
    const shouldShowVehicleFields = 
      formData.subject === 'zabezpecenie' || 
      formData.subject === 'gps';
    
    setShowVehicleFields(shouldShowVehicleFields);
  }, [formData.subject]);

  useEffect(() => {
    if (formData.vehicleBrand) {
      const selectedBrand = carBrands.find(
        brand => brand.value === formData.vehicleBrand
      );
      
      if (selectedBrand) {
        setAvailableModels(selectedBrand.models);
        setFormData(prev => ({
          ...prev,
          vehicleModel: '',
          customVehicleModel: '',
          engineType: '',
          customEngineType: ''
        }));
        setIsCustomModel(false);
        setIsCustomEngine(false);
      }
    } else {
      setAvailableModels([]);
    }
  }, [formData.vehicleBrand]);

  useEffect(() => {
    if (formData.vehicleModel && formData.vehicleModel !== 'other') {
      const selectedBrand = carBrands.find(
        brand => brand.value === formData.vehicleBrand
      );
      
      if (selectedBrand) {
        const selectedModel = selectedBrand.models.find(
          model => model.value === formData.vehicleModel
        );
        
        if (selectedModel && selectedModel.engines) {
          setAvailableEngines(selectedModel.engines);
        } else {
          setAvailableEngines(defaultEngineTypes);
        }
        
        setFormData(prev => ({
          ...prev,
          engineType: '',
          customEngineType: ''
        }));
        setIsCustomEngine(false);
      }
    } else {
      setAvailableEngines(defaultEngineTypes);
    }
  }, [formData.vehicleModel]);

  useEffect(() => {
    if (formData.vehicleModel === 'other') {
      setIsCustomModel(true);
    } else {
      setIsCustomModel(false);
    }
  }, [formData.vehicleModel]);
  
  useEffect(() => {
    if (formData.engineType === 'other') {
      setIsCustomEngine(true);
    } else {
      setIsCustomEngine(false);
    }
  }, [formData.engineType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await sendEmail(formData);
      
      if (success) {
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          city: '', 
          subject: '', 
          message: '',
          vehicleBrand: '',
          vehicleModel: '',
          vehicleYear: '',
          vehicleMonth: '',
          startMethod: '',
          engineType: '',
          customVehicleModel: '',
          customEngineType: ''
        });
        setIsCustomModel(false);
        setIsCustomEngine(false);
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      toast.error('Nastala chyba pri odosielaní formulára. Prosím, skúste to znova neskôr.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-zinc-600/20 to-zinc-800/30">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-prose mx-auto mb-16 stagger-animate">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-[#3a86c9]/10 text-[#3a86c9] rounded-full">
              Kontakt
            </span>
          </div>
          <h2 className="section-title">Spýtajte sa nás</h2>
          <p className="section-subtitle">
            Obratom vás budeme kontaktovať
          </p>
        </div>
        
        <FadeIn direction="up" delay="0.4s">
          <Card className="max-w-[1120px] mx-auto glassmorphism border-t border-blue-500/20 bg-gradient-to-b from-zinc-500/95 to-zinc-600/95 shadow-[0_0_25px_rgba(58,134,201,0.15)] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-orange-500/5 pointer-events-none"></div>
            <CardContent className="p-8 md:p-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium flex items-center gap-2 text-white/80">
                      <User size={16} className="text-[#3a86c9]" />
                      Meno
                    </label>
                    <Input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 focus:border-[#3a86c9]/50 focus:ring-[#3a86c9]/20 transition-all"
                      placeholder="Vaše meno"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium flex items-center gap-2 text-white/80">
                      <Mail size={16} className="text-[#3a86c9]" />
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 focus:border-[#3a86c9]/50 focus:ring-[#3a86c9]/20 transition-all"
                      placeholder="vase.meno@example.sk"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium flex items-center gap-2 text-white/80">
                      <Phone size={16} className="text-[#3a86c9]" />
                      Telefónne číslo
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 focus:border-[#3a86c9]/50 focus:ring-[#3a86c9]/20 transition-all"
                      placeholder="+421 XXX XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="city" className="block text-sm font-medium flex items-center gap-2 text-white/80">
                      <MapPin size={16} className="text-[#3a86c9]" />
                      Mesto
                    </label>
                    <Input
                      id="city"
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 focus:border-[#3a86c9]/50 focus:ring-[#3a86c9]/20 transition-all"
                      placeholder="Mesto z ktorého prichádzate"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium flex items-center gap-2 text-white/80">
                    <MessageSquare size={16} className="text-[#3a86c9]" />
                    Predmet
                  </label>
                  <Select 
                    value={formData.subject} 
                    onValueChange={(value) => handleSelectChange('subject', value)}
                  >
                    <SelectTrigger className="w-full border border-white/10 bg-white/5 focus:border-[#3a86c9]/50 focus:ring-[#3a86c9]/20 transition-all">
                      <SelectValue placeholder="Vyberte z možností" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zabezpecenie">Chcem zabezpečiť vozidlo proti krádeži</SelectItem>
                      <SelectItem value="gps">Chcem inštalovať iba GPS zariadenie</SelectItem>
                      <SelectItem value="ina">Mám inú otázku</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {showVehicleFields && (
                  <div className="bg-gradient-to-r from-blue-900/10 to-blue-800/10 border border-blue-900/20 rounded-xl p-6 space-y-6">
                    <div className="flex items-center gap-2 text-white/90 mb-2">
                      <Car size={18} className="text-[#3a86c9]" />
                      <h3 className="font-medium text-lg">Údaje o vozidle</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="vehicleBrand" className="block text-sm font-medium text-white/80">
                          Značka vozidla
                        </label>
                        <Select 
                          value={formData.vehicleBrand} 
                          onValueChange={(value) => handleSelectChange('vehicleBrand', value)}
                        >
                          <SelectTrigger className="w-full border border-white/10 bg-white/5 focus:border-[#3a86c9]/50 focus:ring-[#3a86c9]/20 transition-all">
                            <SelectValue placeholder="Vyberte značku" />
                          </SelectTrigger>
                          <SelectContent className="max-h-[300px]">
                            {carBrands.map(brand => (
                              <SelectItem key={brand.value} value={brand.value}>{brand.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="vehicleModel" className="block text-sm font-medium text-white/80">
                          Model vozidla
                        </label>
                        
                        {formData.vehicleBrand && !isCustomModel ? (
                          <Select 
                            value={formData.vehicleModel} 
                            onValueChange={(value) => handleSelectChange('vehicleModel', value)}
                          >
                            <SelectTrigger className="w-full border border-white/10 bg-white/5 focus:border-[#3a86c9]/50 focus:ring-[#3a86c9]/20 transition-all">
                              <SelectValue placeholder="Vyberte model" />
                            </SelectTrigger>
                            <SelectContent className="max-h-[300px]">
                              {availableModels.map(model => (
                                <SelectItem key={model.value} value={model.value}>{model.name}</SelectItem>
                              ))}
                              <SelectItem value="other">Iný model</SelectItem>
                            </SelectContent>
                          </Select>
                        ) : isCustomModel ? (
                          <Input
                            id="customVehicleModel"
                            type="text"
                            className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 focus:border-[#3a86c9]/50 focus:ring-[#3a86c9]/20 transition-all"
                            placeholder="Zadajte model vozidla"
                            value={formData.customVehicleModel}
                            onChange={handleChange}
                          />
                        ) : (
                          <Input
                            id="vehicleModel"
                            type="text"
                            className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 opacity-60"
                            placeholder="Najprv vyberte značku vozidla"
                            value={formData.vehicleModel}
                            onChange={handleChange}
                            disabled
                          />
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="vehicleYear" className="block text-sm font-medium text-white/80">
                          Rok výroby a mesiac
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <Input
                            id="vehicleYear"
                            type="text"
                            className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 focus:border-[#3a86c9]/50 focus:ring-[#3a86c9]/20 transition-all"
                            placeholder="Rok výroby"
                            value={formData.vehicleYear}
                            onChange={handleChange}
                          />
                          <Select 
                            value={formData.vehicleMonth} 
                            onValueChange={(value) => handleSelectChange('vehicleMonth', value)}
                          >
                            <SelectTrigger className="w-full border border-white/10 bg-white/5 focus:border-[#3a86c9]/50 focus:ring-[#3a86c9]/20 transition-all">
                              <SelectValue placeholder="Mesiac" />
                            </SelectTrigger>
                            <SelectContent className="max-h-[300px]">
                              {months.map(month => (
                                <SelectItem key={month.value} value={month.value}>{month.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="startMethod" className="block text-sm font-medium text-white/80">
                          Štartovanie vozidla
                        </label>
                        <Select 
                          value={formData.startMethod} 
                          onValueChange={(value) => handleSelectChange('startMethod', value)}
                        >
                          <SelectTrigger className="w-full border border-white/10 bg-white/5 focus:border-[#3a86c9]/50 focus:ring-[#3a86c9]/20 transition-all">
                            <SelectValue placeholder="Vyberte spôsob štartovania" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kluc">Startujem na kľúčik</SelectItem>
                            <SelectItem value="tlacidlo">Startujem na tlačidlo</SelectItem>
                            <SelectItem value="digitalna_karta">Mám digitálnu kartu</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="engineType" className="block text-sm font-medium text-white/80">
                        Motorizácia
                      </label>
                      {formData.vehicleModel && !isCustomEngine ? (
                        <Select 
                          value={formData.engineType} 
                          onValueChange={(value) => handleSelectChange('engineType', value)}
                        >
                          <SelectTrigger className="w-full border border-white/10 bg-white/5 focus:border-[#3a86c9]/50 focus:ring-[#3a86c9]/20 transition-all">
                            <SelectValue placeholder="Vyberte motorizáciu" />
                          </SelectTrigger>
                          <SelectContent className="max-h-[300px]">
                            {availableEngines.map(engine => (
                              <SelectItem key={engine.value} value={engine.value}>{engine.name}</SelectItem>
                            ))}
                            <SelectItem value="other">Iná motorizácia</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : isCustomEngine ? (
                        <Input
                          id="customEngineType"
                          type="text"
                          className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 focus:border-[#3a86c9]/50 focus:ring-[#3a86c9]/20 transition-all"
                          placeholder="Zadajte motorizáciu vozidla"
                          value={formData.customEngineType}
                          onChange={handleChange}
                        />
                      ) : (
                        <Input
                          type="text"
                          className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 opacity-60"
                          placeholder="Najprv vyberte model vozidla"
                          disabled
                        />
                      )}
                    </div>
                  </div>
                )}
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium flex items-center gap-2 text-white/80">
                    <MessageSquare size={16} className="text-[#3a86c9]" />
                    Správa
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 resize-none focus:border-[#3a86c9]/50 focus:ring-[#3a86c9]/20 transition-all"
                    placeholder="Vaša správa..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="text-right mt-8">
                  <CustomButton 
                    size="lg" 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-[#3a86c9] to-[#2a6699] hover:from-[#3078b5] hover:to-[#24587f] button-animation"
                  >
                    {isSubmitting ? 'Odosielam...' : 'Odoslať správu'}
                    <Send className="h-4 w-4 ml-2" />
                  </CustomButton>
                </div>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
