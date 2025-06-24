import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Simone Oyarzabal",
    company: "CONCAD",
    testimonial: "A CONCAD se orgulha em ter a HC Sports como parceira nos Jogos Nacionais da Advocacia. Entrega impecável, organização de alto nível e resultado acima do esperado!",
    image: "/lovable-uploads/f07c7417-6a78-41d9-94d6-6ad0c7117d55.png",
    delay: 0
  },
  {
    name: "Damião Monteiro Neto",
    company: "Sicredi Rio Grande do Norte",
    testimonial: "Patrocinar com a HC Sports é um investimento certeiro: visibilidade e entrega de valor real à marca. O que fortalece o Sicredi-RN e aumenta a nossa conexão com o público.",
    image: "/lovable-uploads/d84b8963-e474-46cc-b3d5-f9533c563db5.png",
    delay: 200
  },
  {
    name: "Coronel Monteiro",
    company: "Comandante Geral CBM-RN",
    testimonial: "A HC Sports transforma dedicação em excelência. Há 14 anos, organiza com maestria a Corrida Soldados do Fogo, honrando a história e a missão do Corpo de Bombeiros do RN.",
    image: "/lovable-uploads/coronel-monteiro.png",
    delay: 400
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

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

  return (
    <section className="py-20 bg-primary text-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos clientes</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-300">
            A satisfação de nossos clientes é nosso maior orgulho e motivação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="animate-on-scroll bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              style={{ transitionDelay: `${testimonial.delay}ms` }}
            >
              <div className="flex items-center mb-4">
                <Avatar className="w-14 h-14 mr-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                  <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-300 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-200 italic">"{testimonial.testimonial}"</p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-secondary" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
