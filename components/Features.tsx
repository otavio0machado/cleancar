import React from 'react';
import { ShieldCheck, Car, Sparkles, Zap } from 'lucide-react';
import { ServiceFeature } from '../types';

const features: ServiceFeature[] = [
  {
    title: "Produtos Premium",
    description: "Utilizamos exclusivamente linhas profissionais (Meguiar's, Vonixx) para proteção duradoura.",
    Icon: Sparkles
  },
  {
    title: "Garantia de Brilho",
    description: "Satisfação garantida. Se o resultado não for impecável, refazemos o serviço sem custo.",
    Icon: ShieldCheck
  },
  {
    title: "Leva e Traz",
    description: "Buscamos seu veículo em casa ou no trabalho e devolvemos pronto com total segurança.",
    Icon: Car
  },
  {
    title: "Atendimento Ágil",
    description: "Respondemos em minutos pelo WhatsApp. Agende seu horário sem burocracia.",
    Icon: Zap
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Por que escolher a <span className="text-gradient">CleanCar</span>?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Mais do que uma lavagem, oferecemos um tratamento estético completo para valorizar seu patrimônio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl glass-light border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-amber-500/0 group-hover:from-blue-500/10 group-hover:to-amber-500/5 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.Icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;