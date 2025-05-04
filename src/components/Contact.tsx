
import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { toast } from './ui/use-toast';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string()
    .min(11, "Telefone deve ter 11 dígitos")
    .max(11, "Telefone deve ter no máximo 11 dígitos")
    .regex(/^\d+$/, "Telefone deve conter apenas números"),
  message: z.string().min(5, "Mensagem deve ter pelo menos 5 caracteres"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "");
    
    // Limit to 11 digits
    const limitedDigits = digits.slice(0, 11);
    
    // Format as (XX) XXXXX-XXXX if enough digits
    if (limitedDigits.length >= 2) {
      let formattedValue = `(${limitedDigits.slice(0, 2)})`;
      
      if (limitedDigits.length > 2) {
        formattedValue += ` ${limitedDigits.slice(2, 7)}`;
        
        if (limitedDigits.length > 7) {
          formattedValue += `-${limitedDigits.slice(7, 11)}`;
        }
      }
      
      return formattedValue;
    }
    
    return limitedDigits;
  };

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Construct the email body
      const emailBody = `
        Nome: ${data.name}
        E-mail: ${data.email}
        Telefone: ${data.phone.replace(/\D/g, "")}
        Mensagem: ${data.message}
      `;
      
      // In a real implementation, you'd use a backend service to send this email
      // For now, we'll simulate a successful submission
      console.log("Enviando email para contato@hcsports.com.br");
      console.log(emailBody);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-gray-700 font-medium mb-2">Nome</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Seu nome" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-gray-700 font-medium mb-2">E-mail</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="seu.email@exemplo.com" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field: { onChange, value, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel className="block text-gray-700 font-medium mb-2">Telefone</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel"
                          placeholder="(00) 00000-0000" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                          value={formatPhoneNumber(value)}
                          onChange={(e) => {
                            // Store only the raw digits in form state
                            const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
                            onChange(digits);
                          }}
                          {...fieldProps} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-gray-700 font-medium mb-2">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={5}
                          placeholder="Descreva seu evento ou dúvida..." 
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </Form>
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
                    <p className="text-gray-600">Rua Touros, 2506-A - Lagoa Nova<br />Natal - RN, 59063-030</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
