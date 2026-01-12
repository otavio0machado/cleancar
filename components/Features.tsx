import React from 'react';
import { ShieldCheck, Car, Sparkles } from 'lucide-react';
import { ServiceFeature } from '../types';

const features: ServiceFeature[] = [
  {
    title: "Produtos Premium Importados",
    description: "Utilizamos exclusivamente linhas profissionais (Meguiar's, Vonixx) para proteção duradoura.",
    Icon: Sparkles
  },
  {
    title: "Garantia de Brilho",
    description: "Satisfação garantida. Se o resultado não for impecável, refazemos o serviço sem custo.",
    Icon: ShieldCheck
  },
  {
    title: "Leva e Traz Gratuito",
    description: "Buscamos seu veículo em casa ou no trabalho e devolvemos pronto com total segurança.",
    Icon: Car
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Por que escolher a CleanCar?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Mais do que uma lavagem, oferecemos um tratamento estético completo para valorizar seu patrimônio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 text-blue-900 shadow-inner">
                <feature.Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;