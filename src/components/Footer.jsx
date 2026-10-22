






import React from 'react';
import { CASIO_LINKS, WHATSAPP_CONFIG } from '../data/products';
import { ExternalLink, ShieldCheck, Clock, Award, MapPin, Sparkles, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG?.phoneNumber || ''}?text=${encodeURIComponent(
    'Hello VIP Watch Specialist! I would like to inquire about the 40% OFF Diwali Collection and available timepieces.'
  )}`;


 // export const WHATSAPP_CONFIG = {
  // 🟢 Yahan apna 10-digit number bina spaces ke '91' ke sath daalein:

  // 🎯 Direct Chat Open URL Schema
  // getDirectUrl: (messageText) => {
  //   const num = '919306198723';
  //   const text = encodeURIComponent(messageText || '');
  //   return `https://api.whatsapp.com/send?phone=${num}&text=${text}`;
  // }


  return (
    <footer className="w-full bg-gradient-to-b from-[#161616] via-[#1a1a1a] to-[#0d0d0d] text-neutral-300 text-xs mt-16 border-t border-[#d4af37]/30 shadow-2xl">
      
      {/* 🌟 Luxury Trust Badges Strip with Gold Theme */}
      <div className="border-b border-[#d4af37]/20 py-8 bg-[#1f1a10]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-black/40 border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all">
            <div className="p-2.5 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#b8860b] text-neutral-950 font-bold shadow-md shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="font-extrabold text-white text-xs tracking-wide">100% Genuine</p>
              <p className="text-[11px] text-[#fce588]">All Watch Brand </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-black/40 border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all">
            <div className="p-2.5 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#b8860b] text-neutral-950 font-bold shadow-md shrink-0">
              <Award size={18} />
            </div>
            <div>
              <p className="font-extrabold text-white text-xs tracking-wide">Official Warranty</p>
              <p className="text-[11px] text-[#fce588]">Authorized Centers</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-black/40 border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all">
            <div className="p-2.5 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#b8860b] text-neutral-950 font-bold shadow-md shrink-0">
              <Clock size={18} />
            </div>
            <div>
              <p className="font-extrabold text-white text-xs tracking-wide">Precision Tested</p>
              <p className="text-[11px] text-[#fce588]">Atomic & Solar Sync</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-black/40 border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all">
            <div className="p-2.5 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#b8860b] text-neutral-950 font-bold shadow-md shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <p className="font-extrabold text-white text-xs tracking-wide">Authorized Stores</p>
              <p className="text-[11px] text-[#fce588]">Nationwide Network</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Brand Col with VIP WhatsApp Action */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-2xl font-black bg-gradient-to-r from-white via-[#fce588] to-[#d4af37] bg-clip-text text-transparent tracking-tighter uppercase font-display">
                CASIO
              </span>
              <span className="text-[9px] bg-[#d4af37]/20 text-[#fce588] px-2 py-0.5 rounded font-bold border border-[#d4af37]/40">VIP BOUTIQUE</span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm mb-4">
              Pioneering digital accuracy, shock resistance, and solar chronograph engineering since 1974. Experience exclusive 40% OFF Diwali offers.
            </p>

            {/* Quick WhatsApp CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#25D366] to-[#1ebe5b] hover:from-[#20ba5a] hover:to-[#179c4a] shadow-[0_4px_15px_rgba(37,211,102,0.3)] transition-all mb-4"
            >
              <MessageCircle size={15} className="fill-white" />
              <span>Book Offer on WhatsApp</span>
            </a>
            <div>
              <a
                href={CASIO_LINKS.officialHome}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#fce588] hover:underline font-semibold"
              >
                <span>Visit CASIO Official Website</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Col 1: Collections */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#d4af37] mb-4 flex items-center gap-1.5">
              <Sparkles size={12} className="text-[#fce588]" />
              Collections
            </h4>
            <ul className="space-y-2.5 text-neutral-400 text-xs">
              <li>
                <a href={CASIO_LINKS.allWatches} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  All Watches
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.gshock} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  G-SHOCK
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.edifice} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  EDIFICE Chronograph
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.vintageCollection} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Vintage Collection
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.casioClassicWatches} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  CASIO Classic
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.gshockLimitedEditions} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  G-SHOCK Limited Editions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#d4af37] mb-4 flex items-center gap-1.5">
              <Sparkles size={12} className="text-[#fce588]" />
              Watch Categories
            </h4>
            <ul className="space-y-2.5 text-neutral-400 text-xs">
              <li>
                <a href={CASIO_LINKS.mensWatches} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Men's Watches
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.womensWatches} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Women's Watches
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.digitalWatches} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Digital Watches
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.analogWatches} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Analog Watches
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.solarWatches} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Solar Powered Timepieces
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.chronographWatches} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Chronograph Watches
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Materials & Tech */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#d4af37] mb-4 flex items-center gap-1.5">
              <Sparkles size={12} className="text-[#fce588]" />
              Materials & Tech
            </h4>
            <ul className="space-y-2.5 text-neutral-400 text-xs">
              <li>
                <a href={CASIO_LINKS.metalWatches} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Metal & Gold Ion Plating
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.resinStrapWatches} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Resin Strap Watches
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.smartphoneLinkWatches} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Smartphone Link / Bluetooth
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.waterResistantWatches} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  200M Water Resistant
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.worldTimeWatches} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  World Time Timepieces
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.gshockNewArrivals} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  G-SHOCK New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Support & Service */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#d4af37] mb-4 flex items-center gap-1.5">
              <Sparkles size={12} className="text-[#fce588]" />
              Customer & Support
            </h4>
            <ul className="space-y-2.5 text-neutral-400 text-xs">
              <li>
                <a href={CASIO_LINKS.storeLocator} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Store Locator</span>
                  <ExternalLink size={10} />
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.watchSupport} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Watch Support & Manuals
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.warrantyInfo} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Warranty Information
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.customerService} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Customer Service
                </a>
              </li>
              <li>
                <a href={CASIO_LINKS.contactInfo} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Contact CASIO
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="mt-14 pt-8 border-t border-[#d4af37]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>© {new Date().getFullYear()} CASIO VIP Timepieces Showroom. 40% OFF Diwali Special. CASIO is a registered trademark of Casio Computer Co., Ltd.</p>
          <div className="flex items-center gap-4">
            <a href={CASIO_LINKS.warrantyInfo} target="_blank" rel="noopener noreferrer" className="hover:text-[#fce588]">
              Warranty Terms
            </a>
            <span>·</span>
            <a href={CASIO_LINKS.customerService} target="_blank" rel="noopener noreferrer" className="hover:text-[#fce588]">
              Authorized Service
            </a>
            <span>·</span>
            <a href={CASIO_LINKS.storeLocator} target="_blank" rel="noopener noreferrer" className="hover:text-[#fce588]">
              Store Network
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}