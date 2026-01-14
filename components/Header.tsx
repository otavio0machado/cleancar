import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone } from 'lucide-react';
import { NavItem } from '../types';
import Button from './Button';

const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Diferenciais', href: '#features' },
  { label: 'Serviços', href: '#gallery' },
  { label: 'Avaliações', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? 'glass border-b border-white/10 py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" onClick={(e) => scrollToSection(e, '#hero')}>
            <div className={`p-2.5 rounded-xl transition-all duration-300 ${scrolled
                ? 'bg-gradient-to-br from-blue-500/20 to-amber-500/20 group-hover:from-blue-500/30 group-hover:to-amber-500/30'
                : 'bg-white/10 group-hover:bg-white/20'
              }`}>
              <Sparkles className="w-6 h-6 text-amber-400" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Clean<span className="text-gradient-gold">Car</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-amber-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>
            ))}
            <div className="ml-4">
              <Button
                variant="gold"
                className="px-5 py-2.5 text-sm"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 glass z-40 transform transition-all duration-500 ease-out md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        style={{ top: '70px' }}
      >
        <div className="flex flex-col p-6 space-y-2 h-full">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-lg font-medium text-white py-4 px-4 rounded-xl hover:bg-white/5 transition-all border-b border-white/5"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4">
            <Button
              variant="gold"
              fullWidth
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              icon={<Phone className="w-4 h-4" />}
            >
              Fale no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;