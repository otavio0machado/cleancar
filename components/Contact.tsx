import React from 'react';
import { MapPin, Clock, Phone, Navigation, Mail } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Localização
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Venha nos <span className="text-gradient">visitar</span>
          </h2>
        </div>

        <div className="glass-light rounded-3xl overflow-hidden border border-white/10 flex flex-col md:flex-row">

          {/* Info Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Endereço</h4>
                  <p className="text-slate-400">Av. das Nações Unidas, 1500</p>
                  <p className="text-slate-400">São Paulo - SP, 04578-000</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Horário</h4>
                  <p className="text-slate-400">Seg - Sex: 08h às 18h</p>
                  <p className="text-slate-400">Sábado: 09h às 14h</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Contato</h4>
                  <p className="text-slate-400">(11) 99999-9999</p>
                  <p className="text-slate-400">contato@cleancar.com.br</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                className="flex-1"
                onClick={() => window.open('https://maps.google.com', '_blank')}
                icon={<Navigation className="w-4 h-4" />}
              >
                Como Chegar
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => window.open('mailto:contato@cleancar.com.br', '_blank')}
                icon={<Mail className="w-4 h-4" />}
              >
                Enviar Email
              </Button>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full md:w-1/2 min-h-[400px] relative group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass p-6 rounded-2xl border border-white/20 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500/50 rounded-full blur-xl animate-pulse" />
                  <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 p-4 rounded-full text-white shadow-lg">
                    <MapPin className="w-8 h-8" />
                  </div>
                </div>
                <span className="font-bold text-white text-sm">Ver no Google Maps</span>
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