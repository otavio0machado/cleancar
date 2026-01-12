import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ricardo Mendes",
    text: "Simplesmente incrível. Meu carro estava com a pintura opaca e saiu parecendo zero km. O atendimento via WhatsApp foi muito rápido.",
    rating: 5,
    date: "há 2 dias"
  },
  {
    id: 2,
    name: "Fernanda Costa",
    text: "Adorei o serviço de leva e traz. Muito prático para quem trabalha o dia todo. A higienização interna ficou impecável.",
    rating: 5,
    date: "há 1 semana"
  },
  {
    id: 3,
    name: "Paulo Oliveira",
    text: "Profissionais de verdade. Explicaram todo o processo de vitrificação e o resultado superou minhas expectativas. Recomendo!",
    rating: 5,
    date: "há 3 semanas"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-2 text-yellow-500">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-6 h-6 fill-current" />)}
            </div>
            <span className="text-slate-600 font-medium text-lg ml-2">4.9/5 no Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                      <CheckCircle2 className="w-3 h-3 text-blue-500" />
                    </div>
                    <span className="text-xs text-slate-500">{t.date}</span>
                  </div>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5 opacity-60" />
              </div>
              
              <div className="flex text-yellow-400 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-700 text-sm leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;