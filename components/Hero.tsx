import React from 'react';
import Button from './Button';
import { Calendar, ChevronRight, Star, Users, Award } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Clientes Satisfeitos' },
  { icon: Star, value: '4.9', label: 'Avaliação Google' },
  { icon: Award, value: '8+', label: 'Anos de Experiência' },
];

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=2070&auto=format&fit=crop"
          alt="Tesla Model S branco em showroom"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-blue-900/80" />
        {/* Animated mesh overlay */}
        <div className="absolute inset-0 bg-mesh opacity-50" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-light border border-white/10 mb-8 animate-fade-in-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
            </span>
            <span className="text-sm font-semibold uppercase tracking-wider text-white/90">Avaliação Gratuita Hoje</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Seu carro novo,{' '}
            <span className="text-gradient-gold">de novo</span>.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 font-light leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Lavagem detalhada, polimento técnico e vitrificação com padrão internacional.
            Restauramos o brilho de fábrica do seu veículo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button
              variant="gold"
              className="w-full sm:w-auto text-lg py-4 px-8"
              onClick={() => {
                window.open('https://wa.me/5511999999999?text=Olá, gostaria de agendar uma avaliação gratuita.', '_blank');
              }}
              icon={<Calendar className="w-5 h-5" />}
            >
              Agendar Avaliação Gratuita
            </Button>

            <button
              onClick={() => {
                const gallerySection = document.getElementById('gallery');
                gallerySection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium text-white/80 hover:text-white transition-all hover:bg-white/5"
            >
              Ver Resultados <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-2xl glass-light border border-white/5 hover:border-white/10 transition-all">
                <stat.icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-darker to-transparent" />
    </section>
  );
};

export default Hero;