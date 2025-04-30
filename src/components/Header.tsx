
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary text-white shadow-md py-2' : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="font-montserrat font-bold text-xl md:text-2xl">
            <span className="text-secondary">Event</span>Pro
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavClick('home')} 
            className="text-white hover:text-secondary transition-colors"
          >
            Início
          </button>
          <button 
            onClick={() => handleNavClick('about')} 
            className="text-white hover:text-secondary transition-colors"
          >
            Sobre
          </button>
          <button 
            onClick={() => handleNavClick('services')} 
            className="text-white hover:text-secondary transition-colors"
          >
            Serviços
          </button>
          <button 
            onClick={() => handleNavClick('portfolio')} 
            className="text-white hover:text-secondary transition-colors"
          >
            Portfólio
          </button>
          <Button 
            onClick={() => handleNavClick('contact')}
            className="bg-secondary text-primary hover:bg-secondary/90"
          >
            Contato
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white p-2 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => handleNavClick('home')}
              className="py-2 text-white hover:text-secondary transition-colors text-left"
            >
              Início
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="py-2 text-white hover:text-secondary transition-colors text-left"
            >
              Sobre
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              className="py-2 text-white hover:text-secondary transition-colors text-left"
            >
              Serviços
            </button>
            <button 
              onClick={() => handleNavClick('portfolio')}
              className="py-2 text-white hover:text-secondary transition-colors text-left"
            >
              Portfólio
            </button>
            <Button 
              onClick={() => handleNavClick('contact')}
              className="bg-secondary text-primary hover:bg-secondary/90 w-full"
            >
              Contato
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
