'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Encode the WhatsApp message
  const encodedMessage = encodeURIComponent(siteConfig.whatsappMessage);
  const whatsappLink = `https://wa.me/${siteConfig.contact.phoneWhatsApp}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 bg-textPrimary text-white px-4 py-2 rounded-lg text-sm font-inter whitespace-nowrap shadow-lg">
          Răspundem în max. {siteConfig.contact.whatsappResponseTime}
          <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-textPrimary"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center w-16 h-16 bg-whatsapp text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-whatsapp/50 group"
        aria-label="Contactează pe WhatsApp"
      >
        <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />

        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20"></span>
      </a>
    </div>
  );
}
