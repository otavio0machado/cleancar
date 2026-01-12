import React from 'react';
import { GalleryImage } from '../types';

const images: GalleryImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop", alt: "Polimento Técnico - BMW X1", category: "Polimento" },
  { id: 2, src: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&w=800&auto=format&fit=crop", alt: "Vitrificação - Porsche 911", category: "Proteção" },
  { id: 3, src: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=800&auto=format&fit=crop", alt: "Higienização - Bancos Couro", category: "Interna" },
  { id: 4, src: "https://images.unsplash.com/photo-1605218427306-022ba6c1bc8b?q=80&w=800&auto=format&fit=crop", alt: "Detalhamento de Motor", category: "Motor" },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Nossos Resultados
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Transformações reais realizadas em nosso estúdio.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((img) => (
            <div 
              key={img.id} 
              className="group relative rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/5] md:aspect-square overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-4 pt-12">
                <p className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">
                  {img.category}
                </p>
                <p className="text-white text-sm font-medium leading-tight">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;