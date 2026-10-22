import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../data/products';

export default function WhatsAppButton({ currentProduct }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const phone = WHATSAPP_CONFIG.phoneNumber;
  const message = currentProduct
    ? WHATSAPP_CONFIG.buildProductMessage(currentProduct)
    : WHATSAPP_CONFIG.defaultMessage;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Prompt bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#171720] border border-[#d4af37]/40 text-xs text-white px-3.5 py-2 rounded-xl shadow-2xl animate-fade-in backdrop-blur-md">
          <span className="text-[#d4af37] font-semibold">Concierge:</span>
          <span>
            {currentProduct
              ? `Inquire about ${currentProduct.modelNumber}`
              : 'Chat with a CASIO Watch Specialist'}
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X size={13} />
          </button>
        </div>
      )}

      {/* Main Circular Green WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Contact CASIO Concierge on WhatsApp"
      >
        {/* Subtle Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:animate-none pointer-events-none" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 fill-current" />
      </a>
    </div>
  );
}
