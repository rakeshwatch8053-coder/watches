// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import WhatsAppButton from './components/WhatsAppButton';
// import Home from './pages/Home';
// import ProductDetails from './pages/product-details/ProductDetails';
// import HeroBanner from './components/HeroBanner'; // 👈 Path check karein
// import NotFound from './pages/NotFound';
// import { PRODUCTS } from './data/products';
// import { Heart, X, Eye, Watch } from 'lucide-react';
// import { Link } from 'react-router-dom';

// // Scroll to top helper on route change
// function ScrollToTop() {
//   const { pathname, hash } = useLocation();

//   useEffect(() => {
//     if (!hash) {
//       window.scrollTo(0, 0);
//     } else {
//       const element = document.getElementById(hash.replace('#', ''));
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, [pathname, hash]);

//   return null;
// }

// function MainApp() {
//   const [favorites, setFavorites] = useState(() => {
//     try {
//       const saved = localStorage.getItem('casio_favorites');
//       return saved ? JSON.parse(saved) : ['gshock-ga2100', 'edifice-ecb2000'];
//     } catch {
//       return ['gshock-ga2100', 'edifice-ecb2000'];
//     }
//   });

//   const [currentProduct, setCurrentProduct] = useState(null);
//   const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);

//   useEffect(() => {
//     try {
//       localStorage.setItem('casio_favorites', JSON.stringify(favorites));
//     } catch {
//       // Ignore localStorage errors
//     }
//   }, [favorites]);

//   useEffect(() => {
//     // Ensure clean Arial / sans-serif typography across application
//     document.body.classList.remove('font-jakarta', 'font-montserrat', 'font-outfit', 'font-inter');
//     localStorage.removeItem('casio_active_font');
//   }, []);

//   const toggleFavorite = (productId) => {
//     setFavorites((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const favoriteProducts = PRODUCTS.filter((p) => favorites.includes(p.id));

//   return (
//     <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-[#121217]">
//       <ScrollToTop />

//       {/* Navigation Header */}
//       <Navbar
//         favoritesCount={favorites.length}
//         onOpenFavoritesModal={() => setIsFavoritesModalOpen(true)}
//       />

//       {/* Main Routed Content */}
//       <main className="flex-grow">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Home
//                 favorites={favorites}
//                 onToggleFavorite={toggleFavorite}
//               />
//             }
//           />
//           <Route
//             path="/product/:slug"
//             element={
//               <ProductDetails
//                 favorites={favorites}
//                 onToggleFavorite={toggleFavorite}
//                 onProductView={setCurrentProduct}
//               />
//             }
//           />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </main>

//       {/* Persistent Floating WhatsApp Concierge Button */}
//       <WhatsAppButton currentProduct={currentProduct} />

//       {/* Footer with Official Reference Links */}
//       <Footer />

//       {/* Wishlist Modal */}
//       {isFavoritesModalOpen && (
//         <div
//           className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
//           onClick={() => setIsFavoritesModalOpen(false)}
//         >
//           <div
//             className="relative w-full max-w-lg bg-white border border-neutral-200 rounded-2xl p-6 shadow-2xl modal-animate-enter max-h-[85vh] flex flex-col"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-4">
//               <div className="flex items-center gap-2">
//                 <Heart size={18} className="text-[#e5484d] fill-[#e5484d]" />
//                 <h3 className="text-base font-bold text-neutral-900 font-display">
//                   Your Saved Timepieces ({favoriteProducts.length})
//                 </h3>
//               </div>
//               <button
//                 onClick={() => setIsFavoritesModalOpen(false)}
//                 className="text-neutral-400 hover:text-neutral-700 p-1 cursor-pointer"
//                 aria-label="Close wishlist"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             <div className="overflow-y-auto flex-grow space-y-3 pr-1">
//               {favoriteProducts.length > 0 ? (
//                 favoriteProducts.map((favProduct) => (
//                   <div
//                     key={favProduct.id}
//                     className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-[#b8860b]/40 transition-colors shadow-2xs"
//                   >
//                     <img
//                       src={favProduct.image}
//                       alt={favProduct.name}
//                       className="w-16 h-12 object-cover rounded-lg bg-white border border-neutral-200 shrink-0"
//                     />
//                     <div className="flex-grow min-w-0">
//                       <span className="text-[10px] font-mono text-[#b8860b] font-bold block">
//                         {favProduct.modelNumber}
//                       </span>
//                       <h4 className="text-xs font-bold text-neutral-900 truncate">
//                         {favProduct.name}
//                       </h4>
//                       <span className="text-[10px] text-neutral-500 block">
//                         {favProduct.collectionName} · {favProduct.displayType}
//                       </span>
//                     </div>

//                     <div className="flex items-center gap-1.5 shrink-0">
//                       <Link
//                         to={`/product/${favProduct.slug}`}
//                         onClick={() => setIsFavoritesModalOpen(false)}
//                         className="p-2 rounded-lg bg-neutral-200 hover:bg-[#d4af37] text-neutral-800 hover:text-white transition-colors text-xs"
//                         title="View Timepiece"
//                       >
//                         <Eye size={14} />
//                       </Link>
//                       <button
//                         onClick={() => toggleFavorite(favProduct.id)}
//                         className="p-2 rounded-lg bg-neutral-200 text-neutral-500 hover:text-red-500 hover:bg-neutral-300 transition-colors text-xs cursor-pointer"
//                         title="Remove from favorites"
//                       >
//                         <X size={14} />
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center py-12">
//                   <Watch size={32} className="text-neutral-400 mx-auto mb-2" />
//                   <p className="text-xs text-neutral-500">No timepieces saved to your wishlist yet.</p>
//                 </div>
//               )}
//             </div>

//             <div className="border-t border-neutral-200 pt-4 mt-4 flex items-center justify-between">
//               <span className="text-[11px] text-neutral-500">
//                 Saved locally on this device
//               </span>
//               <button
//                 onClick={() => setIsFavoritesModalOpen(false)}
//                 className="px-4 py-2 rounded-lg text-xs font-semibold bg-neutral-100 text-neutral-800 hover:bg-neutral-200 cursor-pointer border border-neutral-200"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <MainApp />
//     </BrowserRouter>
//   );
// }




import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import ProductDetails from './pages/product-details/ProductDetails';
import NotFound from './pages/NotFound';
import { PRODUCTS } from './data/products';
import { Heart, X, Eye, Watch } from 'lucide-react';
import { Link } from 'react-router-dom';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function MainApp() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('casio_favorites');
      return saved ? JSON.parse(saved) : ['gshock-ga2100', 'edifice-ecb2000'];
    } catch {
      return ['gshock-ga2100', 'edifice-ecb2000'];
    }
  });

  const [currentProduct, setCurrentProduct] = useState(null);
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('casio_favorites', JSON.stringify(favorites));
    } catch {
      // Ignore localStorage errors
    }
  }, [favorites]);

  useEffect(() => {
    // Ensure clean typography across application
    document.body.classList.remove('font-jakarta', 'font-montserrat', 'font-outfit', 'font-inter');
    localStorage.removeItem('casio_active_font');
  }, []);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const favoriteProducts = PRODUCTS.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-[#121217]">
      <ScrollToTop />

      {/* Navigation Header */}
      <Navbar
        favoritesCount={favorites.length}
        onOpenFavoritesModal={() => setIsFavoritesModalOpen(true)}
      />

      {/* Main Routed Content */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              /* 🎯 FIX: Yahan se extra HeroBanner hata diya hai kyunki yeh Home.jsx me pehle se render ho raha hai */
              <Home
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/product/:slug"
            element={
              <ProductDetails
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onProductView={setCurrentProduct}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Persistent Floating WhatsApp Concierge Button */}
      <WhatsAppButton currentProduct={currentProduct} />

      {/* Footer with Official Reference Links */}
      <Footer />

      {/* Wishlist Modal */}
      {isFavoritesModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsFavoritesModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg bg-white border border-neutral-200 rounded-2xl p-6 shadow-2xl modal-animate-enter max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Heart size={18} className="text-[#e5484d] fill-[#e5484d]" />
                <h3 className="text-base font-bold text-neutral-900 font-display">
                  Your Saved Timepieces ({favoriteProducts.length})
                </h3>
              </div>
              <button
                onClick={() => setIsFavoritesModalOpen(false)}
                className="text-neutral-400 hover:text-neutral-700 p-1 cursor-pointer"
                aria-label="Close wishlist"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-y-auto flex-grow space-y-3 pr-1">
              {favoriteProducts.length > 0 ? (
                favoriteProducts.map((favProduct) => (
                  <div
                    key={favProduct.id}
                    className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-[#b8860b]/40 transition-colors shadow-2xs"
                  >
                    <img
                      src={favProduct.image}
                      alt={favProduct.name}
                      className="w-16 h-12 object-cover rounded-lg bg-white border border-neutral-200 shrink-0"
                    />
                    <div className="flex-grow min-w-0">
                      <span className="text-[10px] font-mono text-[#b8860b] font-bold block">
                        {favProduct.modelNumber}
                      </span>
                      <h4 className="text-xs font-bold text-neutral-900 truncate">
                        {favProduct.name}
                      </h4>
                      <span className="text-[10px] text-neutral-500 block">
                        {favProduct.collectionName} · {favProduct.displayType}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <Link
                        to={`/product/${favProduct.slug}`}
                        onClick={() => setIsFavoritesModalOpen(false)}
                        className="p-2 rounded-lg bg-neutral-200 hover:bg-[#d4af37] text-neutral-800 hover:text-white transition-colors text-xs"
                        title="View Timepiece"
                      >
                        <Eye size={14} />
                      </Link>
                      <button
                        onClick={() => toggleFavorite(favProduct.id)}
                        className="p-2 rounded-lg bg-neutral-200 text-neutral-500 hover:text-red-500 hover:bg-neutral-300 transition-colors text-xs cursor-pointer"
                        title="Remove from favorites"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Watch size={32} className="text-neutral-400 mx-auto mb-2" />
                  <p className="text-xs text-neutral-500">No timepieces saved to your wishlist yet.</p>
                </div>
              )}
            </div>

            <div className="border-t border-neutral-200 pt-4 mt-4 flex items-center justify-between">
              <span className="text-[11px] text-neutral-500">
                Saved locally on this device
              </span>
              <button
                onClick={() => setIsFavoritesModalOpen(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-neutral-100 text-neutral-800 hover:bg-neutral-200 cursor-pointer border border-neutral-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}