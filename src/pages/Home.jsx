





import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ProductGrid from '../components/ProductGrid';
import { PRODUCTS, CASIO_LINKS, WHATSAPP_CONFIG } from '../data/products';
import { Shield, Cpu, Sun, Radio, ExternalLink, MapPin, Sparkles, MessageCircle } from 'lucide-react';

export default function Home({ favorites, onToggleFavorite }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG?.phoneNumber || ''}?text=${encodeURIComponent(
    'Hello VIP Watch Specialist! I would like to claim the 40% OFF Diwali Offer and inquire about your watch collections.'
  )}`;

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#faf8f2] via-[#f8f9fa] to-[#f4efe2]">
      
      {/* Hero Promotional Banner */}
      <HeroBanner />

      {/* Main Watch Catalog with Strict 2/3/4 Responsive Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-[#d4af37]/30">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#b8860b] border border-[#d4af37]/30 mb-1 text-[11px] font-extrabold uppercase tracking-widest">
              <Sparkles size={12} />
              <span>Diwali Special Offer</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight uppercase">
              Exclusive Luxury Watch Catalog • <span className="text-[#b8860b]">40% OFF</span>
            </h2>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#25D366] to-[#1ebe5b] shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:scale-105 transition-all shrink-0"
          >
            <MessageCircle size={15} className="fill-white" />
            <span>Book Deal on WhatsApp</span>
          </a>
        </div>
      </div>

      <ProductGrid
        products={PRODUCTS}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />

      {/* Horological Innovation & Technology Spotlight */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#d4af37]/30">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#b8860b] font-extrabold flex items-center justify-center gap-1.5">
            <Sparkles size={13} />
            Pioneering Engineering & Craftsmanship
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mt-1 uppercase">
            CASIO Proprietary Technologies
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-medium">
            Five decades of horological breakthroughs that redefined watchmaking durability, precision timing, and sustainable energy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-[#d4af37]/30 shadow-sm hover:border-[#b8860b] hover:shadow-[0_8px_25px_rgba(184,134,11,0.12)] transition-all transform hover:-translate-y-1">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] text-white flex items-center justify-center mb-4 shadow-md border border-[#fff2a8]">
              <Shield size={20} />
            </div>
            <h3 className="text-sm font-black text-neutral-900 uppercase tracking-wider mb-2">
              Carbon Core Guard
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed font-medium">
              High-rigidity carbon fiber reinforced resin preserves internal modules against extreme physical shock and drops while ensuring lightweight comfort.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#d4af37]/30 shadow-sm hover:border-[#b8860b] hover:shadow-[0_8px_25px_rgba(184,134,11,0.12)] transition-all transform hover:-translate-y-1">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] text-white flex items-center justify-center mb-4 shadow-md border border-[#fff2a8]">
              <Sun size={20} />
            </div>
            <h3 className="text-sm font-black text-neutral-900 uppercase tracking-wider mb-2">
              Tough Solar Energy
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed font-medium">
              Proprietary solar charging technology generates continuous operation from sunlight and subtle fluorescent indoor lighting without battery replacement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#d4af37]/30 shadow-sm hover:border-[#b8860b] hover:shadow-[0_8px_25px_rgba(184,134,11,0.12)] transition-all transform hover:-translate-y-1">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] text-white flex items-center justify-center mb-4 shadow-md border border-[#fff2a8]">
              <Cpu size={20} />
            </div>
            <h3 className="text-sm font-black text-neutral-900 uppercase tracking-wider mb-2">
              Smartphone Link
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed font-medium">
              Seamless Bluetooth connectivity synchronizes exact atomic time 4 times daily, manages 300+ world time cities, and transfers chronograph lap records.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#d4af37]/30 shadow-sm hover:border-[#b8860b] hover:shadow-[0_8px_25px_rgba(184,134,11,0.12)] transition-all transform hover:-translate-y-1">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] text-white flex items-center justify-center mb-4 shadow-md border border-[#fff2a8]">
              <Radio size={20} />
            </div>
            <h3 className="text-sm font-black text-neutral-900 uppercase tracking-wider mb-2">
              Multi-Band 6 Atomic
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed font-medium">
              Radio waves received from 6 calibration stations across Japan, North America, the UK, Germany, and China guarantee microsecond precision.
            </p>
          </div>

        </div>
      </section>

      {/* Official Collections Quick Link Strip (Compact spacing for seamless footer joining) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#1a1a1a] via-[#241f12] to-[#1a1a1a] border border-[#d4af37]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-white relative overflow-hidden">
          
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-xs font-extrabold text-[#fce588] uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={13} />
              Authorized VIP Network
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1 uppercase">
              Find an Authorized CASIO Boutique
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl font-medium">
              Experience the tactile weight of full-metal G-SHOCKs and EDIFICE chronographs in person with authorized warranty certification and festive 40% discounts.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 relative z-10">
            <a
              href={CASIO_LINKS.storeLocator}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-[#fce588] via-[#d4af37] to-[#b8860b] hover:brightness-110 transition-all cursor-pointer shadow-lg active:scale-95 border border-[#fff2a8]"
            >
              <MapPin size={15} />
              <span>Store Locator</span>
            </a>
            <a
              href={CASIO_LINKS.officialHome}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors active:scale-95 backdrop-blur-md"
            >
              <span>CASIO India Official</span>
              <ExternalLink size={14} className="text-neutral-300" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}


















