


















import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, Heart, ShieldCheck, Watch, MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../data/products';

export default function ProductCard({
  product,
  isFavorite = false,
  onToggleFavorite
}) {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  const handleViewDetails = (e) => {
    e.stopPropagation();
    navigate(`/product/${product.slug}`);
  };

  // ✅ WhatsApp Number & Dynamic Booking Message Logic Fix
  const phoneNum = WHATSAPP_CONFIG?.phoneNumber || '919306198723';

  const bookingMessage = WHATSAPP_CONFIG?.buildBookingMessage
    ? WHATSAPP_CONFIG.buildBookingMessage(product)
    : `Hello! I would like to Book / Order the CASIO ${product?.name || 'Watch'} (Model: ${product?.modelNumber || ''}). Please confirm availability and 40% Diwali discount offer.`;

  const bookingWhatsappUrl = `https://wa.me/${phoneNum}?text=${encodeURIComponent(bookingMessage)}`;

  return (
    <article className="group relative flex flex-col justify-between bg-white rounded-xl border border-neutral-200/90 hover:border-[#b8860b] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.08),0_0_15px_rgba(184,134,11,0.1)] overflow-hidden">
      {/* Top Media Container */}
      <div className="relative w-full aspect-square bg-[#f8f9fa] overflow-hidden flex items-center justify-center p-3">
        {/* Wishlist Button */}
        {onToggleFavorite && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(product.id);
            }}
            aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
            className="absolute top-2.5 right-2.5 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-neutral-700 transition-all backdrop-blur-sm border border-neutral-200/80 hover:border-[#b8860b]/60 shadow-xs cursor-pointer"
          >
            <Heart
              size={15}
              className={isFavorite ? 'fill-[#e5484d] text-[#e5484d]' : 'text-neutral-500 group-hover:text-neutral-900'}
            />
          </button>
        )}

        {/* Collection Badge */}
        <div className="absolute top-2.5 left-2.5 z-20 flex flex-col gap-1 items-start">
          <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-white/95 text-[#b8860b] border border-neutral-200 shadow-xs backdrop-blur-sm">
            {product?.collectionName || 'CASIO'}
          </span>
        </div>

        {/* Watch Image with object-contain fix */}
        <Link to={`/product/${product?.slug}`} className="w-full h-full block overflow-hidden flex items-center justify-center">
          {!imageError ? (
            <img
              src={product?.image}
              alt={`${product?.name} ${product?.modelNumber}`}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="max-h-full max-w-full w-auto h-auto object-contain object-center transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 text-neutral-600 p-4 text-center border border-neutral-200">
              <Watch size={32} className="text-[#b8860b] mb-2 stroke-1" />
              <span className="text-xs font-semibold text-neutral-900">{product?.name}</span>
              <span className="text-[11px] text-[#b8860b] font-mono mt-0.5 font-bold">{product?.modelNumber}</span>
            </div>
          )}
        </Link>
      </div>

      {/* Card Body */}
      <div className="p-3 sm:p-4 flex flex-col flex-grow justify-between border-t border-neutral-100 bg-white">
        {/* Model and Name */}
        <div>
          <div className="flex items-center justify-between gap-1 text-[11px] font-mono text-[#b8860b] font-bold uppercase tracking-wider mb-1">
            <span className="truncate">{product?.modelNumber}</span>
            <span className="text-[10px] text-neutral-500 font-sans hidden sm:inline font-normal">{product?.displayType}</span>
          </div>
          
          <h3 className="casio-card-title text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-[#b8860b] transition-colors line-clamp-2">
            <Link to={`/product/${product?.slug}`}>
              {product?.name}
            </Link>
          </h3>

          <p className="text-xs sm:text-[13px] text-neutral-700 line-clamp-2 mt-1.5 font-medium leading-relaxed">
            {product?.tagline || product?.strapMaterial}
          </p>
        </div>

        {/* Verification / Water Resistance Tag */}
        <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-neutral-800">
          <ShieldCheck size={14} className="text-[#b8860b] shrink-0" />
          <span className="truncate">{product?.waterResistance || 'Authentic Casio Quality'}</span>
        </div>

        {/* Action Buttons: View Details & Book Now on WhatsApp */}
        <div className="grid grid-cols-2 gap-2 mt-3 pt-1">
          <button
            onClick={handleViewDetails}
            className="flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg text-[11px] sm:text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 hover:text-neutral-900 border border-neutral-200/90 transition-colors whitespace-nowrap active:scale-95 cursor-pointer"
            title="View Details"
          >
            <Eye size={13} className="shrink-0 text-neutral-500 group-hover:text-neutral-900" />
            <span className="truncate">View Details</span>
          </button>

          <a
            href={bookingWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg text-[11px] sm:text-xs font-bold text-white bg-gradient-to-r from-[#25D366] to-[#1ebe5b] hover:from-[#28e26d] hover:to-[#1aa850] shadow-[0_2px_8px_rgba(37,211,102,0.3)] transition-all whitespace-nowrap active:scale-95 cursor-pointer"
            title="Book Now via WhatsApp"
          >
            <MessageCircle size={13} className="shrink-0 text-white fill-current" />
            <span className="truncate">Book Now</span>
          </a>
        </div>
      </div>
    </article>
  );
}