
import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Calendar, MapPin } from 'lucide-react';

const portfolioItems = [
  {
    title: "Corrida da Água - CAERN",
    date: "Natal, 13 de abril de 2025",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=1470",
    url: "https://corridadaagua.com.br",
    delay: 0
  }, 
  {
    title: "JP News Natal RUN",
    date: "Natal, 08 de junho",
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&q=80&w=1470",
    url: "https://jpnewsnatalrun.com.br",
    delay: 100
  }, 
  {
    title: "Self Run",
    date: "Recife, 20 de julho de 2025",
    image: "https://images.unsplash.com/photo-1509609644831-7b30851f35d4?auto=format&fit=crop&q=80&w=1470",
    url: "https://selfrun.com.br",
    delay: 200
  }, 
  {
    title: "Corrida Soldados do Fogo",
    date: "Natal, 06 de julho de 2025",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=1470",
    url: "https://corridasoldadosdofogo.com.br",
    delay: 300
  }, 
  {
    title: "Meia Maratona do Sol - Sicredi",
    date: "Natal, 20 e 21 de setembro de 2025",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=1470",
    url: "https://meiadosol.com.br",
    delay: 400
  }, 
  {
    title: "Meia Maratona PRF 191",
    date: "Natal, 09 de novembro de 2025",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1470",
    url: "https://meiamaratonaprf191.com.br",
    delay: 500
  }
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
              <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <div className="flex items-center mb-4 text-gray-600">
                    <div className="flex items-center mr-4">
                      <MapPin className="h-4 w-4 text-secondary mr-1" />
                      <Calendar className="h-4 w-4 text-secondary mr-1" />
                      <span className="text-sm">{item.date}</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.open(item.url, '_blank')} 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white"
                  >
                    SAIBA MAIS
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};

export default Portfolio;
