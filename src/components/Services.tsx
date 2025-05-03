import React, { useEffect, useRef } from 'react';
import { Briefcase, CalendarCheck, ClipboardCheck, Megaphone } from 'lucide-react';
const ServicesData = [{
  title: "Eventos Corporativos",
  description: "Organizamos experiências esportivas personalizadas para empresas, proporcionando bem-estar e fortalecimento da cultura organizacional.",
  icon: <Briefcase className="h-12 w-12 mb-4 text-secondary" />,
  delay: 0
}, {
  title: "Sistemas de Inscrições",
  description: "Plataforma para gestão de inscrições em eventos esportivos. Interface intuitiva, cadastro rápido e relatórios em tempo real. Ideal para corridas e torneios em geral.",
  icon: <CalendarCheck className="h-12 w-12 mb-4 text-secondary" />,
  delay: 100
}, {
  title: "Planejamento",
  description: "Cuidamos de toda a estratégia, logística e cronograma para garantir um evento esportivo bem-sucedido, do briefing à execução.",
  icon: <ClipboardCheck className="h-12 w-12 mb-4 text-secondary" />,
  delay: 200
}, {
  title: "Marketing Esportivo",
  description: "Criamos estratégias de divulgação, ativação de marca e engajamento do público, aumentando a visibilidade e o impacto do seu evento esportivo.",
  icon: <Megaphone className="h-12 w-12 mb-4 text-secondary" />,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Serviços</h2>
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