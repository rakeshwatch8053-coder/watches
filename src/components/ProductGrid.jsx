import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { COLLECTIONS } from '../data/products';
import { Search, SlidersHorizontal, RotateCcw, Heart } from 'lucide-react';

export default function ProductGrid({
  products,
  favorites = [],
  onToggleFavorite,
  initialCollection = 'all'
}) {
  const [selectedCollection, setSelectedCollection] = useState(initialCollection);
  const [searchQuery, setSearchQuery] = useState('');
  const [displayFilter, setDisplayFilter] = useState('all');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Filter products based on search, collection, display type, and favorites
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Collection filter
      if (selectedCollection !== 'all' && product.collection !== selectedCollection) {
        return false;
      }

      // Display type filter
      if (displayFilter !== 'all' && product.displayType !== displayFilter) {
        return false;
      }

      // Favorites filter
      if (showOnlyFavorites && !favorites.includes(product.id)) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesModel = product.modelNumber.toLowerCase().includes(query);
        const matchesCollection = product.collectionName.toLowerCase().includes(query);
        const matchesDial = product.dialColor.toLowerCase().includes(query);
        const matchesStrap = product.strapMaterial.toLowerCase().includes(query);
        return matchesName || matchesModel || matchesCollection || matchesDial || matchesStrap;
      }

      return true;
    });
  }, [products, selectedCollection, displayFilter, showOnlyFavorites, favorites, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCollection('all');
    setSearchQuery('');
    setDisplayFilter('all');
    setShowOnlyFavorites(false);
  };

  return (
    <section id="catalog" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Streamlined Filter & Search Toolbar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        {/* Primary Collection Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {COLLECTIONS.map((col) => {
            const isActive = selectedCollection === col.id;
            return (
              <button
                key={col.id}
                onClick={() => setSelectedCollection(col.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white shadow-sm'
                    : 'bg-white text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 border border-neutral-200/90 shadow-2xs'
                }`}
              >
                {col.name}
              </button>
            );
          })}
        </div>

        {/* Search Bar & Favorites Action */}
        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search model (e.g. GA-2100, ECB)..."
              className="w-full bg-white border border-neutral-200/90 focus:border-[#b8860b] rounded-xl pl-9 pr-4 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#b8860b] shadow-xs transition-all"
            />
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700"
              >
                Clear
              </button>
            )}
          </div>

          <button
            onClick={() => setShowOnlyFavorites((prev) => !prev)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 cursor-pointer shadow-xs ${
              showOnlyFavorites
                ? 'bg-[#e5484d]/10 text-[#d9383e] border border-[#e5484d]/40'
                : 'bg-white text-neutral-700 hover:text-neutral-900 border border-neutral-200/90'
            }`}
          >
            <Heart size={13} className={showOnlyFavorites ? 'fill-current' : ''} />
            <span className="hidden sm:inline">Favorites</span> ({favorites.length})
          </button>
        </div>
      </div>

      {/* Secondary Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-600 mb-6 bg-white/90 p-3 rounded-xl border border-neutral-200 shadow-xs">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1 text-neutral-700 font-semibold">
            <SlidersHorizontal size={13} />
            <span>Display:</span>
          </span>
          {['all', 'Analog-Digital', 'Digital', 'Analog'].map((type) => (
            <button
              key={type}
              onClick={() => setDisplayFilter(type)}
              className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                displayFilter === type
                  ? 'bg-[#b8860b]/15 text-[#8c6505] border border-[#b8860b]/40 font-bold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {type === 'all' ? 'All Displays' : type}
            </button>
          ))}
        </div>

        <div className="text-[11px] text-neutral-600 font-mono">
          Showing <span className="text-[#b8860b] font-bold">{filteredProducts.length}</span> of {products.length} models
        </div>
      </div>

      {/* Strict Responsive Product Grid
          Mobile: Exactly 2 cards per row (grid-cols-2)
          Tablet: 3 cards per row (md:grid-cols-3)
          Desktop: Exactly 4 cards per row (lg:grid-cols-4)
      */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-16 text-center border border-dashed border-neutral-300 rounded-2xl bg-white shadow-xs my-6">
          <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-3 text-[#b8860b]">
            <Search size={22} />
          </div>
          <h3 className="text-base font-bold text-neutral-900">No timepieces matched your search</h3>
          <p className="text-xs text-neutral-500 mt-1 max-w-sm mx-auto">
            Try adjusting your search query, clearing specific display filters, or viewing all collections.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border border-neutral-300 transition-colors cursor-pointer shadow-xs"
          >
            <RotateCcw size={13} />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </section>
  );
}
