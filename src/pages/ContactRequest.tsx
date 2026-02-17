import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import CustomButton from '@/components/ui/CustomButton';
import { ArrowLeft, Send, User, Mail, Phone, Car, MessageSquare, MapPin, CheckCircle2, Clock, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { carBrands, defaultEngineTypes, EngineType } from '@/utils/carData';
import { sendEmail, EmailData } from '@/utils/emailService';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Meno je povinné' }),
  email: z.string().email({ message: 'Neplatný email' }),
  phone: z.string().min(9, { message: 'Neplatné telefónne číslo' }),
  city: z.string().optional(),
  vehicleBrand: z.string().optional(),
  vehicleModel: z.string().optional(),
  vehicleYear: z.string().optional(),
  vehicleMonth: z.string().optional(),
  startMethod: z.string().optional(),
  engineType: z.string().optional(),
  customVehicleModel: z.string().optional(),
  customEngineType: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactRequest = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      city: '',
      vehicleBrand: '',
      vehicleModel: '',
      vehicleYear: '',
      vehicleMonth: '',
      startMethod: '',
      engineType: '',
      customVehicleModel: '',
      customEngineType: '',
      message: '',
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
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
    const vehicleBrand = form.watch('vehicleBrand');
    
    if (vehicleBrand) {
      const selectedBrand = carBrands.find(
        brand => brand.value === vehicleBrand
      );
      
      if (selectedBrand) {
        setAvailableModels(selectedBrand.models);
        form.setValue('vehicleModel', '');
        form.setValue('customVehicleModel', '');
        form.setValue('engineType', '');
        form.setValue('customEngineType', '');
        setIsCustomModel(false);
        setIsCustomEngine(false);
      }
    } else {
      setAvailableModels([]);
    }
  }, [form.watch('vehicleBrand')]);

  useEffect(() => {
    const vehicleModel = form.watch('vehicleModel');
    const vehicleBrand = form.watch('vehicleBrand');
    
    if (vehicleModel && vehicleModel !== 'other') {
      const selectedBrand = carBrands.find(
        brand => brand.value === vehicleBrand
      );
      
      if (selectedBrand) {
        const selectedModel = selectedBrand.models.find(
          model => model.value === vehicleModel
        );
        
        if (selectedModel && selectedModel.engines) {
          setAvailableEngines(selectedModel.engines);
        } else {
          setAvailableEngines(defaultEngineTypes);
        }
        
        form.setValue('engineType', '');
        form.setValue('customEngineType', '');
        setIsCustomEngine(false);
      }
    } else {
      setAvailableEngines(defaultEngineTypes);
    }
  }, [form.watch('vehicleModel')]);

  useEffect(() => {
    const vehicleModel = form.watch('vehicleModel');
    setIsCustomModel(vehicleModel === 'other');
  }, [form.watch('vehicleModel')]);
  
  useEffect(() => {
    const engineType = form.watch('engineType');
    setIsCustomEngine(engineType === 'other');
  }, [form.watch('engineType')]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const emailData: EmailData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        message: data.message,
        vehicleBrand: data.vehicleBrand,
        vehicleModel: data.vehicleModel,
        vehicleYear: data.vehicleYear,
        vehicleMonth: data.vehicleMonth,
        startMethod: data.startMethod,
        engineType: data.engineType,
        customVehicleModel: data.customVehicleModel,
        customEngineType: data.customEngineType,
      };
      
      const success = await sendEmail(emailData);
      
      if (success) {
        form.reset();
        setIsCustomModel(false);
        setIsCustomEngine(false);
        toast.success('Vaša správa bola úspešne odoslaná. Čoskoro vás budeme kontaktovať.');
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      toast.error('Nastala chyba pri odosielaní formulára. Prosím, skúste to znova neskôr.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Ďakujeme za váš záujem | ALCO Vehicle Security System</title>
        <meta name="description" content="Vyplňte krátky formulár a my sa vám čo najskôr ozveme" />
      </Helmet>
      
      <Navbar />
      <main className="pt-32 pb-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-blue-900/30 to-orange-900/20 border border-blue-500/20 rounded-xl overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 p-8 flex items-center justify-center bg-gradient-to-br from-blue-950/50 to-zinc-950/70">
                  <img 
                    src="/lovable-uploads/971465e7-69df-4a6f-9420-eef361cbd5cc.png" 
                    alt="Odborný technik IGLA" 
                    className="max-w-full h-auto object-cover rounded-lg shadow-md border border-white/10"
                  />
                </div>
                <div className="md:w-3/5 p-8 md:p-10">
                  <h2 className="text-3xl font-bold mb-4 text-gradient">Chceme Vám ponúknuť to najlepšie</h2>
                  <p className="text-lg text-gray-200 mb-4">
                    Ďakujeme, že ste prejavili záujem o zabezpečenie vášho vozidla systémom IGLA. Vážime si vašu dôveru.
                  </p>
                  <p className="text-gray-300 mb-6">
                    Po vyplnení formulára sa vám ozveme do 24 hodín s individuálnou ponukou určenou presne pre váš model vozidla. Odpoveď vám zašleme e-mailom alebo vás budeme kontaktovať telefonicky.
                  </p>
                  <div className="flex flex-row flex-nowrap justify-start gap-3 overflow-x-auto pb-2">
                    <div className="flex items-center gap-2 bg-blue-500/10 px-3 py-2 rounded-full whitespace-nowrap">
                      <Mail size={16} className="text-blue-400 flex-shrink-0" />
                      <span className="text-blue-200 text-sm">Individuálna ponuka</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-500/10 px-3 py-2 rounded-full whitespace-nowrap">
                      <Clock size={16} className="text-blue-400 flex-shrink-0" />
                      <span className="text-blue-200 text-sm">Rýchla odpoveď</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-500/10 px-3 py-2 rounded-full whitespace-nowrap">
                      <Wrench size={16} className="text-blue-400 flex-shrink-0" />
                      <span className="text-blue-200 text-sm">Profesionálna montáž</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center stagger-animate">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full mb-3">
                Ďakujeme
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Ďakujeme za váš záujem o systém <span className="text-gradient">IGLA</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Vyplňte prosím krátky formulár nižšie a náš tím vás bude kontaktovať čo najskôr s personalizovanou ponukou.
              </p>
            </div>
            
            <Card className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden shadow-[0_0_35px_rgba(58,134,201,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-orange-500/5 pointer-events-none"></div>
              <CardContent className="p-6 md:p-8 relative z-10">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-8 flex items-center gap-4">
                  <div className="hidden md:flex h-10 w-10 rounded-full bg-blue-500/20 items-center justify-center flex-shrink-0">
                    <Car size={22} className="text-blue-400" />
                  </div>
                  <p className="text-blue-200 text-sm md:text-base">
                    Systém IGLA predstavuje modernú ochranu vášho vozidla bez zásahu do elektroniky auta. Jedinečným spôsobom blokuje štart motora bez viditeľných komponentov.
                  </p>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-white">
                          <User size={18} className="text-blue-400" />
                          Vaše kontaktné údaje
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <User size={16} className="text-[#3a86c9]" />
                                  Meno a priezvisko*
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Vaše meno" 
                                    {...field} 
                                    className="border-white/10 bg-white/5 focus:border-[#3a86c9]/50"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <Mail size={16} className="text-[#3a86c9]" />
                                  Email*
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="vase.meno@example.sk" 
                                    {...field} 
                                    className="border-white/10 bg-white/5 focus:border-[#3a86c9]/50"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <Phone size={16} className="text-[#3a86c9]" />
                                  Telefónne číslo*
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="+421 XXX XXX XXX" 
                                    {...field} 
                                    className="border-white/10 bg-white/5 focus:border-[#3a86c9]/50"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <MapPin size={16} className="text-[#3a86c9]" />
                                  Mesto
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Mesto z ktorého prichádzate" 
                                    {...field} 
                                    className="border-white/10 bg-white/5 focus:border-[#3a86c9]/50"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <Separator className="bg-blue-900/20" />
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-white">
                          <Car size={18} className="text-blue-400" />
                          Informácie o vozidle
                        </h3>
                        
                        <div className="bg-gradient-to-r from-blue-900/10 to-blue-800/10 border border-blue-900/20 rounded-lg p-5">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="vehicleBrand"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Značka vozidla
                                  </FormLabel>
                                  <Select 
                                    onValueChange={field.onChange} 
                                    value={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger className="w-full border-white/10 bg-white/5 focus:border-[#3a86c9]/50">
                                        <SelectValue placeholder="Vyberte značku" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="max-h-[300px]">
                                      {carBrands.map(brand => (
                                        <SelectItem key={brand.value} value={brand.value}>{brand.name}</SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="vehicleModel"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Model vozidla
                                  </FormLabel>
                                  {form.watch('vehicleBrand') && !isCustomModel ? (
                                    <Select 
                                      onValueChange={field.onChange} 
                                      value={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger className="w-full border-white/10 bg-white/5 focus:border-[#3a86c9]/50">
                                          <SelectValue placeholder="Vyberte model" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent className="max-h-[300px]">
                                        {availableModels.map(model => (
                                          <SelectItem key={model.value} value={model.value}>{model.name}</SelectItem>
                                        ))}
                                        <SelectItem value="other">Iný model</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  ) : isCustomModel ? (
                                    <FormField
                                      control={form.control}
                                      name="customVehicleModel"
                                      render={({ field }) => (
                                        <FormControl>
                                          <Input 
                                            placeholder="Zadajte model vozidla" 
                                            {...field} 
                                            className="border-white/10 bg-white/5 focus:border-[#3a86c9]/50"
                                          />
                                        </FormControl>
                                      )}
                                    />
                                  ) : (
                                    <FormControl>
                                      <Input
                                        placeholder="Najprv vyberte značku vozidla"
                                        disabled
                                        className="opacity-60 border-white/10 bg-white/5"
                                      />
                                    </FormControl>
                                  )}
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="vehicleYear"
                              render={({ field }) => (
                                <FormItem className="space-y-2">
                                  <FormLabel>
                                    Rok výroby a mesiac
                                  </FormLabel>
                                  <div className="grid grid-cols-2 gap-2">
                                    <FormControl>
                                      <Input 
                                        placeholder="Rok výroby" 
                                        {...field} 
                                        className="border-white/10 bg-white/5 focus:border-[#3a86c9]/50"
                                      />
                                    </FormControl>
                                    <FormField
                                      control={form.control}
                                      name="vehicleMonth"
                                      render={({ field }) => (
                                        <Select 
                                          onValueChange={field.onChange} 
                                          value={field.value}
                                        >
                                          <FormControl>
                                            <SelectTrigger className="w-full border-white/10 bg-white/5 focus:border-[#3a86c9]/50">
                                              <SelectValue placeholder="Mesiac" />
                                            </SelectTrigger>
                                          </FormControl>
                                          <SelectContent className="max-h-[300px]">
                                            {months.map(month => (
                                              <SelectItem key={month.value} value={month.value}>{month.name}</SelectItem>
                                            ))}
                                          </SelectContent>
                                        </Select>
                                      )}
                                    />
                                  </div>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="startMethod"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Štartovanie vozidla
                                  </FormLabel>
                                  <Select 
                                    onValueChange={field.onChange} 
                                    value={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger className="w-full border-white/10 bg-white/5 focus:border-[#3a86c9]/50">
                                        <SelectValue placeholder="Vyberte spôsob štartovania" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="kluc">Startujem na kľúčik</SelectItem>
                                      <SelectItem value="tlacidlo">Startujem na tlačidlo</SelectItem>
                                      <SelectItem value="digitalna_karta">Mám digitálnu kartu</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="engineType"
                              render={({ field }) => (
                                <FormItem className="col-span-1 md:col-span-2">
                                  <FormLabel>
                                    Motorizácia
                                  </FormLabel>
                                  {form.watch('vehicleModel') && !isCustomEngine ? (
                                    <Select 
                                      onValueChange={field.onChange} 
                                      value={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger className="w-full border-white/10 bg-white/5 focus:border-[#3a86c9]/50">
                                          <SelectValue placeholder="Vyberte motorizáciu" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent className="max-h-[300px]">
                                        {availableEngines.map(engine => (
                                          <SelectItem key={engine.value} value={engine.value}>
                                            {engine.name}
                                          </SelectItem>
                                        ))}
                                        <SelectItem value="other">Iná motorizácia</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  ) : isCustomEngine ? (
                                    <FormField
                                      control={form.control}
                                      name="customEngineType"
                                      render={({ field }) => (
                                        <FormControl>
                                          <Input 
                                            placeholder="Zadajte motorizáciu vozidla" 
                                            {...field} 
                                            className="border-white/10 bg-white/5 focus:border-[#3a86c9]/50"
                                          />
                                        </FormControl>
                                      )}
                                    />
                                  ) : (
                                    <FormControl>
                                      <Input
                                        placeholder="Najprv vyberte model vozidla"
                                        disabled
                                        className="opacity-60 border-white/10 bg-white/5"
                                      />
                                    </FormControl>
                                  )}
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <MessageSquare size={16} className="text-[#3a86c9]" />
                              Vaša správa (voliteľné)
                            </FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Doplňujúce informácie, otázky alebo požiadavky..." 
                                className="resize-none min-h-[120px] border-white/10 bg-white/5 focus:border-[#3a86c9]/50" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="bg-gradient-to-r from-[#3a86c9]/10 to-transparent border border-[#3a86c9]/10 rounded-lg p-4 flex gap-3">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 text-[#3a86c9] flex-shrink-0" />
                        <p className="text-sm text-blue-300">
                          Po odoslaní formulára vás budeme kontaktovať v priebehu 24 hodín pre poskytnutie osobnej ponuky na mieru pre váš automobil.
                        </p>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-4 pt-2">
                        <Link to="/" className="order-2 md:order-1">
                          <CustomButton 
                            variant="outline" 
                            className="w-full md:w-auto border-gray-700 text-gray-300 hover:bg-gray-800"
                          >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Späť na úvod
                          </CustomButton>
                        </Link>
                        
                        <CustomButton 
                          type="submit" 
                          className="w-full md:w-auto bg-gradient-to-r from-[#3a86c9] to-[#2a6699] hover:from-[#3078b5] hover:to-[#24587f] text-white order-1 md:order-2 ml-auto button-animation"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Odosielam...' : 'Odoslať žiadosť'}
                          <Send className="h-4 w-4 ml-2" />
                        </CustomButton>
                      </div>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactRequest;
