
import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Calendar, MapPin } from 'lucide-react';

const portfolioItems = [
  {
    title: "Selfrun Recife",
    date: "Recife/PE, 10 de Maio de 2026",
    image: "/eventos/SR_RECIFE.png",
    url: "https://selfrun.com.br/",
    delay: 100
  },
  {
    title: "Selfrun Natal",
    date: "Natal/RN, 31 de Maio de 2026",
    image: "/eventos/SR_NATAL.png",
    url: "https://selfrun.com.br/",
    delay: 200
  },
  {
    title: "Soldados do Fogo",
    date: "Natal/RN, 5 de julho de 2026",
    image: "/eventos/CORRIDA_DO_FOGO.png",
    url: "https://www.corridasoldadosdofogo.com.br/",
    delay: 300
  },
  {
    title: "Corrida Rede Mais Supermercados",
    date: "Natal/RN, 2 de Agosto de 2026",
    image: "/eventos/REDEMAIS.png",
    url: "https://www.instagram.com/corridabomvizinhoredemais",
    delay: 400
  },
  {
    title: "Meia Maratona do Sol - Sicredi",
    date: "Natal/RN, 19 e 20 de Setembro de 2026",
    image: "/eventos/MEIA_DO_SOL.png",
    url: "https://meiadosol.com.br",
    delay: 500
  },
  {
    title: "Corrida COOPANEST",
    date: "Natal/RN, 18 de Outubro de 2026",
    image: "/eventos/COOPANEST_RN.png",
    url: "https://corridacoopanest.com.br/",
    delay: 600
  },
  {
    title: "Meia Maratona PRF",
    date: "Natal/RN, 8 de novembro de 2026",
    image: "/eventos/PRF.png",
    url: "http://meiamaratonaprf191.com.br/",
    delay: 700
  },
  {
    title: "Selfrun São Luís",
    date: "São Luís/MA, 22 de novembro de 2026",
    image: "/eventos/SR_SLZ.png",
    url: "https://selfrun.com.br/",
    delay: 800
  },
  {
    title: "Selfrun Teresina",
    date: "Teresina/PI, 29 de novembro de 2026",
    image: "/eventos/SR_TERESINA.png",
    url: "https://selfrun.com.br/",
    delay: 900
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
