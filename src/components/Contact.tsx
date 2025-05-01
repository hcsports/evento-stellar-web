import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
const Contact = () => {
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
  return <section id="contact" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Entre em Contato</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600">Estamos prontos para transformar suas ideias em um grande evento. Vamos começar a planejar?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome</label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="seu.email@exemplo.com" />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefone</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Assunto</label>
                <select id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent">
                  <option value="">Selecione uma opção</option>
                  <option value="orcamento">Solicitar orçamento</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="social">Evento Social</option>
                  <option value="cultural">Evento Cultural</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Descreva seu evento ou dúvida..."></textarea>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          <div className="animate-on-scroll">
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-secondary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-gray-600"><a href="tel:+5584994617848" className="hover:text-secondary">(84) 99461-7848</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-secondary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600"><a href="mailto:contato@hcsports.com.br" className="hover:text-secondary">contato@hcsports.com.br</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-secondary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Localização</h4>
                    <p className="text-gray-600">Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-semibold mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/hcsportsbr" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="mt-10 p-5 bg-primary text-white rounded-lg">
                <h4 className="font-semibold mb-2">Horário de Atendimento</h4>
                <p>Segunda a Sexta: 9h às 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;