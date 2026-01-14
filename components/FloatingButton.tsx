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
      {/* Tooltip */}
      <div className="glass px-4 py-2.5 rounded-xl border border-white/10 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:block transform translate-x-4 group-hover:translate-x-0">
        <span className="text-white text-sm font-medium whitespace-nowrap">Fale conosco</span>
      </div>

      {/* Button */}
      <div className="relative">
        {/* Glow ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 animate-pulse group-hover:opacity-80 transition-opacity" />

        {/* Button */}
        <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-7 h-7" />
        </div>
      </div>
    </a>
  );
};

export default FloatingButton;