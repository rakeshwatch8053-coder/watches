










import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  MapPin, 
  ExternalLink, 
  ChevronDown, 
  MessageCircle,
  Watch,
  Music,
  Sparkles
} from 'lucide-react';
import { CASIO_LINKS, WHATSAPP_CONFIG } from '../data/products';

export default function Navbar({ favoritesCount = 0, onOpenFavoritesModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [watchesDropdownOpen, setWatchesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setWatchesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 🎯 Direct WhatsApp Chat Link Generator
  const phoneNum = WHATSAPP_CONFIG?.phoneNumber || '919306198723';
  const navMessage = 'Hello CASIO Specialist! I would like to book/inquire about CASIO timepieces and products.';
  const whatsappUrl = WHATSAPP_CONFIG?.getDirectUrl
    ? WHATSAPP_CONFIG.getDirectUrl(navMessage)
    : `https://api.whatsapp.com/send?phone=${phoneNum}&text=${encodeURIComponent(navMessage)}`;

  const watchCategories = [
    { label: 'Explore All Watches', to: '/#catalog', isInternal: true, desc: 'Browse our full luxury showcase' },
    { label: 'G-SHOCK', href: CASIO_LINKS.gshock, desc: 'Absolute Toughness & Shock Resistance' },
    { label: 'EDIFICE', href: CASIO_LINKS.edifice, desc: 'Speed & High-Performance Chronographs' },
    { label: 'Vintage Collection', href: CASIO_LINKS.vintageCollection, desc: 'Iconic Retro Gold & Silver Heritage' },
    { label: 'CASIO Classic', href: CASIO_LINKS.casioClassicWatches, desc: 'Everyday Analog & Digital Timepieces' },
    { label: 'PRO TREK', href: CASIO_LINKS.proTrek, desc: 'Outdoor & Triple Sensor Adventure Watches' },
    { label: 'SHEEN & BABY-G', href: CASIO_LINKS.sheen, desc: 'Feminine Elegance & Vibrant Toughness' },
  ];

  const mainNavLinks = [
    {
      id: 'musical-instruments',
      label: 'Electronic Musical Instruments',
      shortLabel: 'Musical Instruments',
      href: CASIO_LINKS.musicalInstruments,
      icon: Music,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xs transition-colors">
      {/* Top micro announcement bar */}
      <div className="bg-[#005baa] text-white text-[11px] font-semibold py-1 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <Sparkles size={12} className="text-[#ffd700]" />
        <span>Official All Watch Brand Showcase • Authorized Dealers & WhatsApp Booking Support</span>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline font-bold hover:text-[#ffd700] ml-1 hidden sm:inline"
        >
          Book Now via WhatsApp &rarr;
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          
          {/* Zone 1: CASIO Iconic Blue Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus:outline-none"
            aria-label="CASIO Home"
          >
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#005baa] uppercase group-hover:opacity-90 transition-opacity">
              CASIO
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 pl-2 border-l border-neutral-300 text-[11px] font-bold text-neutral-600 tracking-wider uppercase">
              Official
            </span>
          </Link>

          {/* Zone 2: Primary Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-5 text-[13px] font-semibold text-neutral-700">
            {/* Watches Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setWatchesDropdownOpen(true)}
              onMouseLeave={() => setWatchesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setWatchesDropdownOpen(!watchesDropdownOpen)}
                className={`flex items-center gap-1 py-2 px-1 hover:text-[#005baa] transition-colors border-b-2 ${
                  watchesDropdownOpen ? 'border-[#005baa] text-[#005baa]' : 'border-transparent'
                }`}
                aria-expanded={watchesDropdownOpen}
              >
                <span>Watches</span>
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-200 ${watchesDropdownOpen ? 'rotate-180 text-[#005baa]' : 'text-neutral-400'}`} 
                />
              </button>

              {/* Watches Mega Dropdown Menu */}
              {watchesDropdownOpen && (
                <div className="absolute left-0 top-full mt-0 w-80 bg-white rounded-xl shadow-xl border border-neutral-200/90 py-2.5 z-50 animate-in fade-in slide-in-from-top-1">
                  <div className="px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-600 border-b border-neutral-100">
                    Watch Collections & Series
                  </div>
                  <div className="py-1">
                    {watchCategories.map((item) => (
                      item.isInternal ? (
                        <Link
                          key={item.label}
                          to={item.to}
                          onClick={() => setWatchesDropdownOpen(false)}
                          className="flex flex-col px-3.5 py-2 hover:bg-neutral-50 transition-colors group"
                        >
                          <div className="flex items-center justify-between text-[13px] font-bold text-neutral-900 group-hover:text-[#005baa]">
                            <span>{item.label}</span>
                            <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">Catalog</span>
                          </div>
                          <span className="text-[11px] text-neutral-600 mt-0.5">{item.desc}</span>
                        </Link>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setWatchesDropdownOpen(false)}
                          className="flex flex-col px-3.5 py-2 hover:bg-neutral-50 transition-colors group"
                        >
                          <div className="flex items-center justify-between text-[13px] font-bold text-neutral-800 group-hover:text-[#005baa]">
                            <span>{item.label}</span>
                            <ExternalLink size={12} className="text-neutral-400 group-hover:text-[#005baa]" />
                          </div>
                          <span className="text-[11px] text-neutral-600 mt-0.5">{item.desc}</span>
                        </a>
                      )
                    ))}
                  </div>
                  <div className="px-3.5 pt-2 pb-1 border-t border-neutral-100 bg-neutral-50/70 rounded-b-xl flex items-center justify-between text-[11px]">
                    <a 
                      href={CASIO_LINKS.allWatches} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#005baa] hover:underline font-bold flex items-center gap-1"
                    >
                      <span>All Brand Watches Official Portal</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Other Official Casio Category Links */}
            {mainNavLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 py-2 px-1 hover:text-[#005baa] transition-colors border-b-2 border-transparent hover:border-[#005baa] whitespace-nowrap"
                title={`Visit CASIO ${item.label}`}
              >
                <span>{item.label}</span>
                <ExternalLink size={11} className="text-neutral-400" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Book Now WhatsApp, Store Locator & Mobile Toggle) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* WhatsApp Direct Book Now Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2 rounded-lg text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-xs transition-all whitespace-nowrap"
              aria-label="Book Now via WhatsApp"
              title="Book Now via WhatsApp"
            >
              <MessageCircle size={15} className="fill-white" />
              <span className="hidden xs:inline sm:inline">Book Now</span>
            </a>

            {/* Store Locator Link */}
            <a
              href={CASIO_LINKS.storeLocator}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 hover:border-[#005baa]/40 transition-all whitespace-nowrap"
            >
              <MapPin size={13} className="text-[#005baa]" />
              <span>Store Locator</span>
            </a>

            {/* Mobile/Tablet Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-neutral-700 hover:text-neutral-900 bg-neutral-100 border border-neutral-200 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* 🚀 Floating Overlay Drawer Fix (Hero banner ko push nahi karega) */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-200 px-4 py-5 shadow-2xl z-[100] max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-2">
          
          {/* Direct WhatsApp Call to Action */}
          <div className="mb-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#25D366] text-white text-sm font-bold shadow-xs hover:bg-[#20ba5a] transition-all"
            >
              <MessageCircle size={18} className="fill-white" />
              <span>Book Now / Order on WhatsApp</span>
            </a>
          </div>

          <div className="space-y-4">
            
            {/* Watch Category Section */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Timepieces & Watches
              </div>
              <div className="grid grid-cols-1 gap-1 pl-1">
                <Link
                  to="/#catalog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-bold text-[#005baa] py-2 border-b border-neutral-100"
                >
                  <span className="flex items-center gap-2">
                    <Watch size={15} />
                    <span>All Watches Catalog</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase bg-blue-50 text-[#005baa] px-2 py-0.5 rounded">Featured</span>
                </Link>

                <a
                  href={CASIO_LINKS.gshock}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-semibold text-neutral-800 hover:text-[#005baa] py-2 border-b border-neutral-100"
                >
                  <span>G-SHOCK</span>
                  <ExternalLink size={13} className="text-neutral-400" />
                </a>

                <a
                  href={CASIO_LINKS.edifice}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-semibold text-neutral-800 hover:text-[#005baa] py-2 border-b border-neutral-100"
                >
                  <span>EDIFICE Speed Chronographs</span>
                  <ExternalLink size={13} className="text-neutral-400" />
                </a>

                <a
                  href={CASIO_LINKS.vintageCollection}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-semibold text-neutral-800 hover:text-[#005baa] py-2 border-b border-neutral-100"
                >
                  <span>Vintage Collection (Gold & Silver)</span>
                  <ExternalLink size={13} className="text-neutral-400" />
                </a>

                <a
                  href={CASIO_LINKS.casioClassicWatches}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-semibold text-neutral-800 hover:text-[#005baa] py-2 border-b border-neutral-100"
                >
                  <span>CASIO Classic Timepieces</span>
                  <ExternalLink size={13} className="text-neutral-400" />
                </a>

                <a
                  href={CASIO_LINKS.proTrek}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-semibold text-neutral-800 hover:text-[#005baa] py-2 border-b border-neutral-100"
                >
                  <span>PRO TREK Outdoor</span>
                  <ExternalLink size={13} className="text-neutral-400" />
                </a>

                <a
                  href={CASIO_LINKS.sheen}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-semibold text-neutral-800 hover:text-[#005baa] py-2 border-b border-neutral-100"
                >
                  <span>SHEEN & BABY-G</span>
                  <ExternalLink size={13} className="text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Official Products Categories */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                CASIO Categories & Systems
              </div>
              <div className="grid grid-cols-1 gap-1 pl-1">
                {mainNavLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between text-sm font-semibold text-neutral-800 hover:text-[#005baa] py-2 border-b border-neutral-100"
                    >
                      <span className="flex items-center gap-2">
                        <Icon size={14} className="text-[#005baa]" />
                        <span>{item.label}</span>
                      </span>
                      <ExternalLink size={13} className="text-neutral-400" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Store & Support Action */}
            <div className="pt-2">
              <a
                href={CASIO_LINKS.storeLocator}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200"
              >
                <MapPin size={14} className="text-[#005baa]" />
                <span>Find Authorized Store Locator</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}