import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
        src="/icon/torta_arriba.png" 
        alt="Logo" 
        className="mr-2 h-10 w-10 object-contain transition-all" 
          />
          <div className="flex flex-col">
        <span className={`font-accent text-2xl transition-all ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
          Angie
        </span>
        <span className={`font-display text-sm -mt-1 transition-all ${isScrolled ? 'text-primary-400' : 'text-white'}`}>
          Pastelería
        </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Inicio', 'Productos', 'Nosotros', 'Blog', 'Contacto'].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase()}`}
          className={`font-body font-medium transition-all duration-300 ${
            isScrolled 
          ? 'text-neutral-700 hover:text-primary-500' 
          : 'text-white hover:text-primary-200'
          } relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-500 after:transition-all hover:after:w-full`}
        >
          {item}
        </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden transition-all ${isScrolled ? 'text-primary-500' : 'text-white'}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen py-5 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {['Inicio', 'Productos', 'Nosotros', 'Blog', 'Contacto'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-body text-neutral-700 hover:text-primary-500 py-2 border-b border-neutral-100 last:border-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};