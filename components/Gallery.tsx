import React from 'react';
import { GalleryImage } from '../types';
import { ExternalLink } from 'lucide-react';

const images: GalleryImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop", alt: "Polimento Técnico - BMW X1", category: "Polimento" },
  { id: 2, src: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&w=800&auto=format&fit=crop", alt: "Vitrificação - Porsche 911", category: "Proteção" },
  { id: 3, src: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=800&auto=format&fit=crop", alt: "Higienização - Bancos Couro", category: "Interna" },
  { id: 4, src: "https://images.unsplash.com/photo-1605218427306-022ba6c1bc8b?q=80&w=800&auto=format&fit=crop", alt: "Detalhamento de Motor", category: "Motor" },
  { id: 5, src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop", alt: "Lavagem Premium Completa", category: "Lavagem" },
  { id: 6, src: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop", alt: "Correção de Pintura", category: "Polimento" },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-slate-900/50 to-brand-darker" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-gradient">Resultados</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Transformações reais realizadas em nosso estúdio.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`group relative rounded-2xl overflow-hidden ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
            >
              <div className={`${index === 0 ? 'aspect-square md:aspect-[4/3]' : 'aspect-square'} overflow-hidden`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-500/80 to-amber-500/80 text-white mb-2">
                    {img.category}
                  </span>
                  <p className="text-white text-sm md:text-base font-medium">
                    {img.alt}
                  </p>
                </div>

                {/* Hover icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 rounded-full glass-light border border-white/20">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;