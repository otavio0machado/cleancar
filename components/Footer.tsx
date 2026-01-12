import React from 'react';
import { Car } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 border-t border-blue-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-80">
          <Car className="w-5 h-5" />
          <span className="font-bold text-lg">CleanCar</span>
        </div>
        <p className="text-blue-200 text-sm">
          © {new Date().getFullYear()} CleanCar Estética Automotiva. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;