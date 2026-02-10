
import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Calendar, MapPin } from 'lucide-react';

const portfolioItems = [
  {
    title: "Corrida da Água - CAERN",
    date: "Natal, 22 de março de 2026",
    image: "/lovable-uploads/de6d9dbb-bfc2-4715-a81c-b53ecf22250b.png",
    url: "https://corridadaagua.com.br",
    delay: 100
  }, 
  {
    title: "Corrida da LIGA",
    date: "Natal, 29 de março de 2026",
    image: "/lovable-uploads/corrida-da-liga-logo.png",
    url: "https://corridadaliga.com.br",
    delay: 200
  }, 
  {
    title: "Self Run",
    date: "Recife, 10 de julho de 2026",
    image: "/lovable-uploads/19b29531-e96a-4a92-85d9-f59b288d09be.png",
    url: "https://selfrun.com.br",
    delay: 300
  },
  {
    title: "Corrida Soldados do Fogo",
    date: "Natal, 05 de julho de 2026",
    image: "/lovable-uploads/456f6c6d-1118-45fc-8f66-317a56499ac8.png",
    url: "https://corridasoldadosdofogo.com.br",
    delay: 400
  },
  {
    title: "Meia Maratona do Sol - Sicredi",
    date: "Natal, 19 e 20 de setembro de 2026",
    image: "/lovable-uploads/5fd35488-7fe9-48d0-b486-ceda5b5422a9.png",
    url: "https://meiadosol.com.br",
    delay: 500
  },
  {
    title: "Meia Maratona PRF 191",
    date: "Natal, 08 de novembro de 2026",
    image: "/lovable-uploads/7e70653f-379c-4581-bf86-62c3e72f8582.png",
    url: "https://meiamaratonaprf191.com.br",
    delay: 600
  },
];

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const elementsToObserve = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    if (elementsToObserve) {
      elementsToObserve.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (elementsToObserve) {
        elementsToObserve.forEach(el => observer.unobserve(el));
      }
    };
  }, []);
  
  return <section id="portfolio" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Agenda HC Sports</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600">Participe dos eventos que são referência e vamos juntos.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="animate-on-scroll" style={{
              transitionDelay: `${item.delay}ms`
            }}>
              <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white h-full flex flex-col">
                <div className="w-full h-48 flex items-center justify-center p-6">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`object-contain ${item.delay === 200 ? '' : 'max-w-full max-h-full'}`}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <div className="flex items-center mb-4 text-gray-600">
                    <div className="flex items-center mr-4">
                      <MapPin className="h-4 w-4 text-secondary mr-1" />
                      <Calendar className="h-4 w-4 text-secondary mr-1" />
                      <span className="text-sm">{item.date}</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      onClick={() => window.open(item.url, '_blank')} 
                      className="w-full bg-secondary hover:bg-secondary/90 text-white"
                    >
                      SAIBA MAIS
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};

export default Portfolio;
