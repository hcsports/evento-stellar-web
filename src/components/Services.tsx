import React, { useEffect, useRef } from 'react';
import { Calendar, Users, Briefcase, ShoppingCart } from 'lucide-react';
const ServicesData = [{
  title: "Eventos Corporativos",
  description: "Conferências, workshops, convenções, lançamentos de produtos e eventos de integração pensados para alcançar os objetivos da sua empresa.",
  icon: <Briefcase className="h-12 w-12 mb-4 text-secondary" />,
  delay: 0
}, {
  title: "Eventos Sociais",
  description: "Casamentos, aniversários, formaturas e celebrações especiais produzidos com carinho e atenção aos detalhes para momentos inesquecíveis.",
  icon: <Users className="h-12 w-12 mb-4 text-secondary" />,
  delay: 100
}, {
  title: "Eventos Culturais",
  description: "Festivais, exposições, shows e performances artísticas que valorizam a cultura e proporcionam experiências únicas ao público.",
  icon: <Calendar className="h-12 w-12 mb-4 text-secondary" />,
  delay: 200
}, {
  title: "Feiras e Exposições",
  description: "Planejamento e execução de feiras, exposições e estandes para promover marcas, produtos e serviços de forma estratégica.",
  icon: <ShoppingCart className="h-12 w-12 mb-4 text-secondary" />,
  delay: 300
}];
const Services = () => {
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
  return <section id="services" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600">Oferecemos soluções completas para diversos tipos de eventos esportivos.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ServicesData.map((service, index) => <div key={index} className="animate-on-scroll service-card bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center" style={{
          transitionDelay: `${service.delay}ms`
        }}>
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8 animate-on-scroll">
          <h3 className="text-2xl font-bold mb-6 text-primary text-center">Como trabalhamos</h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="relative">
              <div className="bg-primary text-white h-14 w-14 flex items-center justify-center rounded-full mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="text-lg font-semibold mb-2">Briefing</h4>
              <p className="text-gray-600">Entendemos suas necessidades e objetivos</p>
              <div className="hidden md:block absolute top-7 left-[calc(50%+35px)] w-full h-0.5 bg-gray-200"></div>
            </div>
            
            <div className="relative">
              <div className="bg-primary text-white h-14 w-14 flex items-center justify-center rounded-full mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="text-lg font-semibold mb-2">Planejamento</h4>
              <p className="text-gray-600">Desenvolvemos o conceito e estratégia do evento</p>
              <div className="hidden md:block absolute top-7 left-[calc(50%+35px)] w-full h-0.5 bg-gray-200"></div>
            </div>
            
            <div className="relative">
              <div className="bg-primary text-white h-14 w-14 flex items-center justify-center rounded-full mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="text-lg font-semibold mb-2">Produção</h4>
              <p className="text-gray-600">Cuidamos de todos os detalhes da execução</p>
              <div className="hidden md:block absolute top-7 left-[calc(50%+35px)] w-full h-0.5 bg-gray-200"></div>
            </div>
            
            <div>
              <div className="bg-secondary text-primary h-14 w-14 flex items-center justify-center rounded-full mx-auto mb-4 text-xl font-bold">4</div>
              <h4 className="text-lg font-semibold mb-2">Realização</h4>
              <p className="text-gray-600">Garantimos o sucesso do seu evento</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;