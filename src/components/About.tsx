import React, { useEffect, useRef } from 'react';
import { Calendar, Users, Award, Briefcase } from 'lucide-react';
const About = () => {
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
  return <section id="about" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Sobre Nós</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600">Há 15 anos transformando ideias em experiências inesquecíveis</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="animate-on-scroll mb-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Experiência que faz a diferença</h3>
              <p className="mb-6 text-gray-700">Somos uma empresa especializada na produção de eventos esportivos, sejam eles corporativos, sociais e culturais, com foco na excelência e atenção aos detalhes. Nossa equipe conta com profissionais experientes em diversas áreas, garantindo que seu evento seja um sucesso do início ao fim.</p>
              <p className="text-gray-700">
                Acreditamos que cada evento é único e merece um planejamento personalizado. Por isso, 
                trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades 
                e transformar seus sonhos em realidade.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <Calendar className="h-10 w-10 text-secondary mb-4" />
                <h4 className="text-xl font-semibold mb-2">+150</h4>
                <p className="text-gray-600">Eventos realizados</p>
              </div>
              <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-sm border border-gray-100 delay-100">
                <Users className="h-10 w-10 text-secondary mb-4" />
                <h4 className="text-xl font-semibold mb-2">+80.000</h4>
                <p className="text-gray-600">Pessoas impactadas</p>
              </div>
              <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-sm border border-gray-100 delay-200">
                <Award className="h-10 w-10 text-secondary mb-4" />
                <h4 className="text-xl font-semibold mb-2">+15</h4>
                <p className="text-gray-600">Anos de experiência</p>
              </div>
              <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-sm border border-gray-100 delay-300">
                <Briefcase className="h-10 w-10 text-secondary mb-4" />
                <h4 className="text-xl font-semibold mb-2">+60</h4>
                <p className="text-gray-600">Clientes satisfeitos</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-on-scroll">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img alt="Equipe de produção de eventos trabalhando" className="w-full h-auto" src="/lovable-uploads/78515bd4-374d-48c7-b69e-085d924f24af.jpg" />
            </div>
            
          </div>
        </div>
      </div>
    </section>;
};
export default About;