import React from 'react';
import { Star, Quote } from 'lucide-react';
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
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            O que nossos clientes <span className="text-gradient-gold">dizem</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-6 h-6 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">4.9/5</span>
            <span className="text-slate-400">no Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative p-6 rounded-2xl glass-light border border-white/5 hover:border-blue-500/20 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 p-3 rounded-xl bg-gradient-to-br from-blue-500 to-amber-500 opacity-80 group-hover:opacity-100 transition-opacity">
                <Quote className="w-4 h-4 text-white" />
              </div>

              <div className="flex items-center justify-between mb-5 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <span className="text-xs text-slate-500">{t.date}</span>
                  </div>
                </div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  className="w-6 h-6 opacity-50 group-hover:opacity-80 transition-opacity"
                />
              </div>

              <div className="flex text-amber-400 mb-4 gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;