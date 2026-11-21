import { Fingerprint, Navigation, ScanLine, Building2 } from 'lucide-react';
export const services = [
  { id: 'igla', name: 'Zabezpečenie IGLA', label: 'Ochrana pred krádežou', icon: Fingerprint, text: 'Ďalšia autorizácia pred jazdou. Diskrétne zabezpečenie, ktoré sa stane prirodzenou súčasťou vášho auta.', href: '/sofistikovane-zabezpecenie' },
  { id: 'gps', name: 'GPS monitoring', label: 'Prehľad o vozidle', icon: Navigation, text: 'Majte prehľad o polohe svojho vozidla. Spolu vyberieme riešenie podľa toho, čo od monitoringu potrebujete.', href: '/pasivny-monitoring' },
  { id: 'senzory', name: 'Parkovacie senzory', label: 'Istota pri parkovaní', icon: ScanLine, text: 'Lepší odhad vzdialenosti a jednoduchšie parkovanie. Senzory a kameru prispôsobíme vášmu vozidlu.', href: '/parkovacie-senzory' },
];

export const objectService={id:'objekty',name:'Zabezpečenie objektov',label:'Domy, firmy a prevádzky · ALCO.SK',icon:Building2,href:'/zabezpecenie-objektov'};
