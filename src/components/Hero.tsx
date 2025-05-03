
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return <section id="home" className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: "linear-gradient(rgba(44, 44, 44, 0.8), rgba(44, 44, 44, 0.8)), url('https://images.unsplash.com/photo-1561489413-985b06da5bee?auto=format&fit=crop&q=80&w=1470')"
  }}>
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Transformamos ideias em <span className="text-secondary">eventos esportivos</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
            Produção profissional de eventos esportivos corporativos, sociais e culturais com excelência em cada detalhe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToContact} className="bg-secondary text-white hover:bg-secondary/90 text-lg px-8 py-6">
              Solicitar Orçamento
            </Button>
            <Button onClick={() => document.getElementById('services')?.scrollIntoView({
            behavior: 'smooth'
          })} variant="outline" className="border-white text-white text-lg px-8 py-6 bg-black/0">
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => document.getElementById('about')?.scrollIntoView({
        behavior: 'smooth'
      })} className="text-white hover:text-secondary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>;
};

export default Hero;
