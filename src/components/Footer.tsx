
import React from 'react';
import { Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-montserrat font-bold text-xl mb-4">
              <span className="text-secondary">HC</span> SPORTS
            </h3>
            <p className="mb-6 text-gray-300 max-w-md">
              Transformamos ideias em eventos memoráveis, cuidando de cada detalhe para que você possa aproveitar o momento sem preocupações.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/hcsportsbr" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block font-medium">Telefone:</span>
                <a href="tel:+5584994617848" className="hover:text-secondary">(84) 99461-7848</a>
              </li>
              <li className="text-gray-300">
                <span className="block font-medium">Email:</span>
                <a href="mailto:contato@hcsports.com.br" className="hover:text-secondary">contato@hcsports.com.br</a>
              </li>
              <li className="text-gray-300">
                <span className="block font-medium">Endereço:</span>
                <address className="not-italic">
                  Av. Paulista, 1000 - Bela Vista<br/>
                  São Paulo - SP, 01310-100
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} HC SPORTS. Todos os direitos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-secondary text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-white hover:text-secondary transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
