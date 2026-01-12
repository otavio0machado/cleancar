import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="bg-white text-slate-800 px-4 py-2 rounded-lg shadow-md text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block transform translate-x-4 group-hover:translate-x-0">
        Fale conosco
      </div>
      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-bounce shadow-green-500/30">
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </div>
    </a>
  );
};

export default FloatingButton;