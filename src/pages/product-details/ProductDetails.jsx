







import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  getProductBySlug,
  getRelatedProducts,
  WHATSAPP_CONFIG,
  CASIO_LINKS
} from '../../data/products';
import ProductCard from '../../components/ProductCard';
import {
  Calendar,
  MessageCircle,
  ShieldCheck,
  Check,
  Share2,
  Watch,
  X,
  ExternalLink,
  Maximize2,
  Droplets,
  Clock,
  Layers
} from 'lucide-react';
import './ProductDetails.css';

export default function ProductDetails({
  favorites = [],
  onToggleFavorite,
  onProductView
}) {
  const { slug } = useParams();
  const location = useLocation();

  const product = getProductBySlug(slug);

  // Gallery state
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  // Booking Consultation Modal State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingFormData, setBookingFormData] = useState({
    name: '',
    phone: '',
    city: 'Mumbai',
    preferredDate: '',
    storeLocation: 'CASIO Exclusive Boutique - Palladium'
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  // Notify parent of active product
  useEffect(() => {
    if (product && onProductView) {
      onProductView(product);
    }
    return () => {
      if (onProductView) onProductView(null);
    };
  }, [product, onProductView]);

  useEffect(() => {
    if (location.hash === '#book') {
      setIsBookingModalOpen(true);
    }
  }, [location.hash]);

  // Reset active image index and errors when product/slug changes
  useEffect(() => {
    setActiveImageIndex(0);
    setImageErrors({});
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center bg-[#f8f9fa]">
        <Watch size={48} className="text-[#b8860b] mb-4 stroke-1" />
        <h2 className="text-2xl font-bold text-neutral-900 mb-2 font-display">Timepiece Not Found</h2>
        <p className="text-sm text-neutral-600 max-w-md mb-6">
          The requested watch model could not be found in our current catalog showroom.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-semibold text-xs shadow-md transition-colors"
        >
          <Watch size={14} />
          <span>Return to Watch Catalog</span>
        </Link>
      </div>
    );
  }

  // Ensure gallery list always has at least 1 image
  const galleryList = (product.gallery && product.gallery.length > 0)
    ? product.gallery
    : [{ url: product.image || '/placeholder-watch.png', title: 'Front View' }];

  const currentGalleryItem = galleryList[activeImageIndex] || galleryList[0];
  const suggestedProducts = getRelatedProducts(product.slug, 8);
  const isFavorite = favorites.includes(product.id);

  const productWhatsappMessage = WHATSAPP_CONFIG?.buildProductMessage
    ? WHATSAPP_CONFIG.buildProductMessage(product)
    : `Hi, I am interested in ${product.name} (${product.modelNumber})`;

  const bookingMessage = WHATSAPP_CONFIG?.buildBookingMessage
    ? WHATSAPP_CONFIG.buildBookingMessage(product)
    : `Hello! I would like to Book / Order ${product.name} (Model: ${product.modelNumber}).`;
    
  const bookingWhatsappUrl = `https://wa.me/${WHATSAPP_CONFIG?.phoneNumber || ''}?text=${encodeURIComponent(
    bookingMessage
  )}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Explore ${product.name} (Model: ${product.modelNumber}).`,
          url: window.location.href
        });
      } catch (err) {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] py-4 sm:py-8">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6 border-b border-neutral-200 pb-3">
          <Link
            to="/#catalog"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-700 bg-white hover:bg-neutral-100 border border-neutral-200 transition-colors shadow-2xs cursor-pointer"
          >
            <span>← Back to Shop</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-700 bg-white hover:bg-neutral-100 border border-neutral-200 shadow-2xs transition-colors cursor-pointer"
            >
              <Share2 size={13} />
              <span>{shareSuccess ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Product Details Split View */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-neutral-200">
          
          {/* LEFT: Image Gallery Frame */}
          <div className="md:col-span-6 flex flex-col gap-3">
            
            {/* Main Image Frame with Object Contain */}
            <div className="relative w-full aspect-square max-h-[380px] sm:max-h-[420px] rounded-xl bg-[#fafafa] border border-neutral-200/90 p-4 sm:p-6 flex items-center justify-center overflow-hidden group">
              {!imageErrors[activeImageIndex] && currentGalleryItem?.url ? (
                <img
                  src={currentGalleryItem.url}
                  alt={`${product.name} ${currentGalleryItem.title || 'View'}`}
                  className="max-h-full max-w-full w-auto h-auto object-contain object-center transition-transform duration-300 group-hover:scale-105 cursor-zoom-in drop-shadow-sm"
                  onClick={() => setIsZoomModalOpen(true)}
                  onError={() =>
                    setImageErrors((prev) => ({ ...prev, [activeImageIndex]: true }))
                  }
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-neutral-100">
                  <Watch size={48} className="text-[#b8860b] mb-2" />
                  <span className="text-xs font-bold text-neutral-900">{product.name}</span>
                  <span className="text-[10px] text-neutral-500 font-mono mt-1">{product.modelNumber}</span>
                </div>
              )}

              {/* Expand View Icon */}
              <button
                onClick={() => setIsZoomModalOpen(true)}
                className="absolute bottom-2.5 right-2.5 p-2 rounded-lg bg-white/90 hover:bg-white text-neutral-800 border border-neutral-200 shadow-xs backdrop-blur-md cursor-pointer transition-colors"
                aria-label="Expand image view"
              >
                <Maximize2 size={14} />
              </button>

              {/* Title Tag */}
              <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-white/90 border border-neutral-200 shadow-2xs text-[10px] font-bold text-neutral-800 backdrop-blur-md">
                {currentGalleryItem?.title || `View ${activeImageIndex + 1}`}
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-5 gap-2">
              {galleryList.map((item, idx) => {
                const isActive = activeImageIndex === idx;
                const isError = imageErrors[idx];

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-square rounded-lg overflow-hidden bg-[#fafafa] border p-1.5 flex items-center justify-center cursor-pointer transition-all ${
                      isActive
                        ? 'border-black ring-1 ring-black scale-[1.02]'
                        : 'border-neutral-200 hover:border-neutral-400 opacity-75 hover:opacity-100'
                    }`}
                  >
                    {!isError && item?.url ? (
                      <img
                        src={item.url}
                        alt={`Thumbnail ${idx + 1}`}
                        className="max-h-full max-w-full w-auto h-auto object-contain object-center"
                        onError={() =>
                          setImageErrors((prev) => ({ ...prev, [idx]: true }))
                        }
                      />
                    ) : (
                      <Watch size={18} className="text-neutral-400" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="text-[10px] text-neutral-500 flex items-center justify-between px-1">
              <span>Click thumbnail to switch angle</span>
              <span className="font-mono text-[#b8860b] font-bold">
                {activeImageIndex + 1} / {galleryList.length}
              </span>
            </div>
          </div>

          {/* RIGHT: Details Section */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                {product.collectionName && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-neutral-100 text-[#b8860b] border border-[#d4af37]/30">
                    {product.collectionName}
                  </span>
                )}
                {product.displayType && (
                  <span className="text-[11px] text-neutral-500 font-mono">
                    {product.displayType}
                  </span>
                )}
              </div>

              <h1 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight leading-snug">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mt-1 font-mono text-xs text-[#b8860b]">
                <span className="text-neutral-500 font-sans">Model:</span>
                <span className="font-bold tracking-wider">{product.modelNumber}</span>
              </div>
            </div>

            {/* Price Row */}
            {product.price && (
              <div className="flex items-baseline gap-2 py-1">
                <span className="text-2xl font-black text-neutral-900">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs text-neutral-400 line-through">₹{product.originalPrice}</span>
                )}
              </div>
            )}

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed bg-neutral-50 p-3 rounded-xl border border-neutral-200">
              {product.description}
            </p>

            {/* Specification Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
                <span className="text-[10px] uppercase font-bold text-neutral-500 block">Water Resistance</span>
                <span className="font-bold text-neutral-900">{product.waterResistance || '50 Meter'}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
                <span className="text-[10px] uppercase font-bold text-neutral-500 block">Power Source</span>
                <span className="font-bold text-neutral-900">{product.powerSource || 'Quartz'}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href={bookingWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#25D366] to-[#1ebe5b] hover:from-[#28e26d] hover:to-[#1aa850] shadow-md transition-all cursor-pointer"
              >
                <MessageCircle size={16} className="fill-current" />
                <span>Book Now on WhatsApp</span>
              </a>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-all cursor-pointer"
              >
                <Calendar size={14} className="text-[#b8860b]" />
                <span>Reserve Boutique Appointment</span>
              </button>
            </div>

          </div>
        </div>

        {/* Suggested Section */}
        <div className="mt-10 pt-6 border-t border-neutral-200">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#b8860b] font-bold">
                Suggested Timepieces
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                You May Also Like
              </h3>
            </div>
            <Link to="/#catalog" className="text-xs text-[#b8860b] hover:underline font-bold">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {suggestedProducts.map((sugProduct) => (
              <ProductCard
                key={sugProduct.id}
                product={sugProduct}
                isFavorite={favorites.includes(sugProduct.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Fullscreen Modal */}
      {isZoomModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsZoomModalOpen(false)}
        >
          <div
            className="relative max-w-3xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomModalOpen(false)}
              className="absolute -top-10 right-0 p-2 text-white hover:text-[#d4af37]"
            >
              <X size={24} />
            </button>
            <img
              src={currentGalleryItem?.url || product.image}
              alt={product.name}
              className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl bg-white p-4"
            />
          </div>
        </div>
      )}
    </div>
  );
}