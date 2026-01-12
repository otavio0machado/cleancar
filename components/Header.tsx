import React, { useState, useEffect } from 'react';
import { Menu, X, Car, Phone } from 'lucide-react';
import { NavItem } from '../types';
import Button from './Button';

const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#gallery' },
  { label: 'Diferenciais', href: '#features' },
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" onClick={(e) => scrollToSection(e, '#hero')}>
            <div className={`p-2 rounded-lg transition-colors ${scrolled ? 'bg-blue-50' : 'bg-white/10'}`}>
              <Car className={`w-6 h-6 ${scrolled ? 'text-blue-900' : 'text-white'}`} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              Clean<span className={scrolled ? 'text-blue-600' : 'text-blue-300'}>Car</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  scrolled ? 'text-slate-600' : 'text-slate-100'
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="whatsapp" 
              className="px-4 py-2 text-sm"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={scrolled ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col p-6 space-y-6 h-full border-t border-slate-100">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-lg font-medium text-slate-800 border-b border-slate-50 pb-4"
            >
              {item.label}
            </a>
          ))}
          <Button 
            variant="whatsapp" 
            fullWidth 
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            icon={<Phone className="w-4 h-4" />}
          >
            Fale no WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;