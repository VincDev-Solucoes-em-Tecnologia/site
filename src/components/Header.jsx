import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    // { name: 'Serviços', href: '#services' },
    // { name: 'Portfólio', href: '#portfolio' },
    // { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="header fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <img 
              src="/vincdev-logo.jpeg" 
              alt="VinCDEV Logo" 
              className="h-10 w-auto"
            />
            <div className="text-white">
              <span className="text-xl font-bold tracking-wider">VINCDEV</span>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Soluções em Tecnologia</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                {item.name}
              </a>
            ))}
            <button className="btn-primary px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition duration-300">
              Fale Conosco
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <button className="btn-primary w-full mt-2 px-4 py-2 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition duration-300">
              Fale Conosco
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
