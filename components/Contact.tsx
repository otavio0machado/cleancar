import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row">
            
            {/* Info Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">Localização</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Venha nos visitar
              </h2>

              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-900">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Endereço</h4>
                    <p className="text-slate-600">Av. das Nações Unidas, 1500</p>
                    <p className="text-slate-600">São Paulo - SP, 04578-000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-900">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Horário</h4>
                    <p className="text-slate-600">Seg - Sex: 08h às 18h</p>
                    <p className="text-slate-600">Sábado: 09h às 14h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-900">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Contato</h4>
                    <p className="text-slate-600">(11) 99999-9999</p>
                    <p className="text-slate-600">contato@cleancar.com.br</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="outline" 
                  fullWidth
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                  icon={<Navigation className="w-4 h-4" />}
                >
                  Como Chegar
                </Button>
              </div>
            </div>

            {/* Simulated Map Section */}
            <div className="w-full md:w-1/2 bg-slate-200 min-h-[400px] relative group cursor-pointer overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-2xl shadow-2xl transform transition-transform duration-300 group-hover:-translate-y-2 flex flex-col items-center gap-3">
                     <div className="bg-red-500 p-3 rounded-full text-white animate-bounce shadow-lg shadow-red-500/30">
                        <MapPin className="w-8 h-8 fill-current" />
                     </div>
                     <span className="font-bold text-slate-800 bg-white px-3 py-1 rounded-full text-sm">Ver no Google Maps</span>
                  </div>
               </div>
               <a href="https://maps.google.com" target="_blank" className="absolute inset-0 z-10" aria-label="Abrir mapa"></a>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;