
import React from 'react';
import { WhatsApp } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5584994617848?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20produção%20de%20eventos%20esportivos." 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 whatsapp-button"
    >
      <div className="bg-secondary text-white p-3.5 rounded-full">
        <WhatsApp size={28} className="text-white" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
