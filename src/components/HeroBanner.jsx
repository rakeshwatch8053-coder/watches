









import React, { useState, useEffect, useRef } from 'react';
import { WHATSAPP_CONFIG } from '../data/products';
import {
  Sparkles,
  Compass,
  Shield,
  Clock,
  MessageCircle,
  ArrowRight,
  Award
} from 'lucide-react';

// Slider Assets
import bennerhero from '../assets/images/banner1.jpg';
import edificeSpeedBanner from '../assets/images/banner4.jpg';
import vintageGoldBanner from '../assets/images/banner5.jpg';
import classicLuxuryBanner from '../assets/images/benner3.jpg';
import enticerTiffanyBanner from '../assets/images/bnner6.jpg';

const SLIDES = [
  {
    id: 1,
    image: bennerhero,
    kicker: 'PRECISION MEETS PRESTIGE',
    title: 'Forged in Metal & Unbreakable Strength',
    description: 'Explore iconic Full Metal 5000, Carbon Core Guard, and Master of G timepieces in mirror gold and carbon finishes.',
    buttonText: 'Explore Collection'
  },
  {
    id: 2,
    image: edificeSpeedBanner,
    kicker: 'EDIFICE · SPEED & INTELLIGENCE',
    title: 'High-Performance Motorsport Chronographs',
    description: 'Formula suspension arm geometry, woven carbon dials, and Bluetooth smartphone lap telemetry.',
    buttonText: 'Explore EDIFICE'
  },
  {
    id: 3,
    image: vintageGoldBanner,
    kicker: 'HERITAGE VINTAGE ICONS',
    title: 'Timeless Golden Icons & ElectroLuminescence',
    description: 'Classic retro-futuristic digital masterpieces in yellow gold-tone ion plating and illuminator displays.',
    buttonText: 'Explore Vintage'
  },
  {
    id: 4,
    image: classicLuxuryBanner,
    kicker: 'JAPAN PRECISION HOROLOGY',
    title: 'Five Decades of Watchmaking Excellence',
    description: 'Indestructible toughness meets solar power innovation and radio atomic calibration worldwide.',
    buttonText: 'View Full Catalog'
  },
  {
    id: 5,
    image: enticerTiffanyBanner,
    kicker: 'CLASSIC ELEGANCE',
    title: 'Radiant Turquoise & Architectural Fluting',
    description: 'Exquisite sunray emerald and turquoise dials paired with classic fluted bezels and stainless steel bracelets.',
    buttonText: 'Explore Classics'
  }
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Automatic slide transition every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 🎯 Direct WhatsApp Chat Link Generator
  const phoneNum = WHATSAPP_CONFIG?.phoneNumber || '919306198723';
  const bannerMessage = 'Hello! I would like to explore the VIP luxury watch collection and get expert consultation.';
  
  const whatsappUrl = WHATSAPP_CONFIG?.getDirectUrl
    ? WHATSAPP_CONFIG.getDirectUrl(bannerMessage)
    : `https://api.whatsapp.com/send?phone=${phoneNum}&text=${encodeURIComponent(bannerMessage)}`;

  return (
    <div
      className="relative w-full overflow-hidden bg-white border-b border-neutral-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 🎯 Responsive 16:9 Aspect Ratio Container (Fixed for Mobile & Desktop) */}
      <div className="relative w-full max-w-[1920px] mx-auto aspect-[16/9] min-h-[220px] sm:min-h-[350px] lg:min-h-[520px] max-h-[720px] flex items-center overflow-hidden bg-neutral-900">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center transition-transform duration-7000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                referrerPolicy="no-referrer"
              />

              {/* Light Gradient Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

              {/* Main Content Box */}
              <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center">
                <div className="max-w-xl py-6 sm:py-14">
                  
                  {/* Gold Kicker Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 text-[#d4af37] border border-[#d4af37]/60 shadow-lg mb-2 sm:mb-3 backdrop-blur-md">
                    <Sparkles size={12} className="text-[#d4af37]" />
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#f3e5ab]">
                      {slide.kicker}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h1 className="text-xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
                    {slide.title}
                  </h1>

                  {/* Subtitle / Description */}
                  <p className="mt-2 sm:mt-3 text-[11px] sm:text-sm lg:text-base text-neutral-200 leading-relaxed max-w-md font-medium">
                    {slide.description}
                  </p>

                  {/* TWO VIP BUTTONS ON TOP OF IMAGE */}
                  <div className="mt-4 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <button
                      onClick={scrollToCatalog}
                      className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-[#fce588] via-[#d4af37] to-[#b8860b] hover:brightness-110 shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all active:scale-95 cursor-pointer border border-[#fff2a8]"
                    >
                      <span>{slide.buttonText}</span>
                      <ArrowRight size={15} />
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#1ebe5b] shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-all active:scale-95 cursor-pointer"
                    >
                      <MessageCircle size={16} className="fill-current" />
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>

                  {/* Authenticity Line */}
                  <div className="mt-4 sm:mt-6 pt-2 sm:pt-3 border-t border-white/20 hidden sm:flex items-center gap-4 text-[11px] text-neutral-300 font-medium">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fce588]" />
                      100% Original Guarantee
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fce588]" />
                      Official Warranty Included
                    </span>
                  </div>

                </div>
              </div>
            </div>
          );
        })}

        {/* Slide Bottom Dot Navigation */}
        <div className="absolute bottom-3 sm:bottom-4 z-30 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#d4af37]/30">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx
                  ? 'w-7 bg-gradient-to-r from-[#fce588] to-[#b8860b]'
                  : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 🌟 PREMIUM VIP GOLD PILLARS STRIP */}
      <div className="bg-gradient-to-b from-[#faf8f2] to-[#f4efe2] py-4 sm:py-5 border-t border-[#d4af37]/30 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          
          {/* Card 1 */}
          <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white border border-[#d4af37]/40 shadow-[0_4px_15px_rgba(184,134,11,0.08)] hover:border-[#b8860b] hover:shadow-[0_6px_20px_rgba(184,134,11,0.18)] transition-all transform hover:-translate-y-0.5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#d4af37] via-[#b8860b] to-[#8a6405] flex items-center justify-center text-white shadow-md border border-[#fff2a8]/50 shrink-0">
              <Shield size={18} className="drop-shadow-xs" />
            </div>
            <div>
              <h4 className="text-xs font-black text-neutral-900 uppercase tracking-wider flex items-center gap-1.5">
                <span>G-SHOCK Toughness</span>
                <span className="text-[9px] bg-[#b8860b]/10 text-[#8a6405] px-1.5 py-0.2 rounded font-bold border border-[#b8860b]/20">VIP</span>
              </h4>
              <p className="text-[11px] text-neutral-600 font-medium mt-0.5">200M Water Resistance & Carbon Core</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white border border-[#d4af37]/40 shadow-[0_4px_15px_rgba(184,134,11,0.08)] hover:border-[#b8860b] hover:shadow-[0_6px_20px_rgba(184,134,11,0.18)] transition-all transform hover:-translate-y-0.5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#d4af37] via-[#b8860b] to-[#8a6405] flex items-center justify-center text-white shadow-md border border-[#fff2a8]/50 shrink-0">
              <Compass size={18} className="drop-shadow-xs" />
            </div>
            <div>
              <h4 className="text-xs font-black text-neutral-900 uppercase tracking-wider flex items-center gap-1.5">
                <span>EDIFICE Motorsport</span>
                <span className="text-[9px] bg-[#b8860b]/10 text-[#8a6405] px-1.5 py-0.2 rounded font-bold border border-[#b8860b]/20">PRO</span>
              </h4>
              <p className="text-[11px] text-neutral-600 font-medium mt-0.5">Tough Solar & Sapphire Crystal</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white border border-[#d4af37]/40 shadow-[0_4px_15px_rgba(184,134,11,0.08)] hover:border-[#b8860b] hover:shadow-[0_6px_20px_rgba(184,134,11,0.18)] transition-all transform hover:-translate-y-0.5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#d4af37] via-[#b8860b] to-[#8a6405] flex items-center justify-center text-white shadow-md border border-[#fff2a8]/50 shrink-0">
              <Clock size={18} className="drop-shadow-xs" />
            </div>
            <div>
              <h4 className="text-xs font-black text-neutral-900 uppercase tracking-wider flex items-center gap-1.5">
                <span>Vintage Heritage</span>
                <span className="text-[9px] bg-[#b8860b]/10 text-[#8a6405] px-1.5 py-0.2 rounded font-bold border border-[#b8860b]/20">ICON</span>
              </h4>
              <p className="text-[11px] text-neutral-600 font-medium mt-0.5">Retro Digital Icons & Illuminator</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}