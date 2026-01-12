import React from 'react';
import Button from './Button';
import { Calendar, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=2070&auto=format&fit=crop" 
          alt="Tesla Model S branco em showroom"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-3xl text-center mx-auto text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-500/30 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-100">Avaliação Gratuita Hoje</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Seu carro novo, <span className="text-blue-400">de novo</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
            Lavagem detalhada, polimento técnico e vitrificação com padrão internacional. Restauramos o brilho de fábrica do seu veículo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="w-full sm:w-auto text-lg py-4 px-8 shadow-blue-500/25"
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
              className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-medium text-white hover:text-blue-200 transition-colors"
            >
              Ver Resultados <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;