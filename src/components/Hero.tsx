
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "/lovable-uploads/f402c7b7-b1d4-400a-b044-821442e2c8d4.png", // Nova imagem do estádio com público (agora primeira)
    "/lovable-uploads/f435784d-9ec2-4bf2-81b7-e5e9b9c5eae9.png", // Corrida (antes era a última, agora é a segunda)
    "/lovable-uploads/0ebc5303-a5b3-440b-9bce-aecd916fa64f.png", // Jiu-jitsu
    "/lovable-uploads/62f6f6be-9e60-479c-954a-f35368df0c62.png", // Natação
    "/lovable-uploads/141b6512-08f1-4258-aafa-0026a638ddee.png", // Futebol
    "/lovable-uploads/0cff9182-fc36-47b2-a905-89bd0a698db3.png", // Vôlei de praia
    "/lovable-uploads/6a3b9807-36b7-4d3e-99e6-52bb232e4970.png", // Estádio
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Alterado para mudar a imagem a cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(44, 44, 44, 0.8)), url('${backgroundImages[currentImageIndex]}')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent z-0"></div>
      
      {/* Indicadores de slide */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {backgroundImages.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? 'bg-secondary' : 'bg-white/50'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 md:py-32 z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Transformamos ideias em <span className="text-secondary">eventos esportivos</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
            Trabalhamos o marketing esportivo e a comunicação, gerando interações e negócios através do esporte.
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

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button onClick={() => document.getElementById('about')?.scrollIntoView({
          behavior: 'smooth'
        })} className="text-white hover:text-secondary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
