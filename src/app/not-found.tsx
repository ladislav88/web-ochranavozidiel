import Link from 'next/link';
import { Shield, Home, Phone, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="flex-1 flex items-center justify-center pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Shield className="h-24 w-24 mx-auto text-[#e06329] opacity-80" />
          </div>
          <h1 className="text-6xl font-bold text-[#3a86c9] mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Stránka sa nenašla
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Ospravedlňujeme sa, ale požadovaná stránka neexistuje alebo bola presunutá.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/sofistikovane-zabezpecenie"
              className="inline-flex items-center justify-center gap-2 bg-[#e06329] hover:bg-[#c85823] text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              <Home className="h-5 w-5" />
              Sofistikované zabezpečenie
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              <Phone className="h-5 w-5" />
              Kontakt
            </Link>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 mb-2">Potrebujete pomoc?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+421911911876"
                className="flex items-center gap-2 text-[#e06329] hover:text-[#c85823] font-medium"
              >
                <Phone className="h-4 w-4" />
                +421 911 911 876
              </a>
              <a
                href="mailto:info@autoalarmy-trencin.sk"
                className="flex items-center gap-2 text-[#e06329] hover:text-[#c85823] font-medium"
              >
                <Mail className="h-4 w-4" />
                info@autoalarmy-trencin.sk
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
