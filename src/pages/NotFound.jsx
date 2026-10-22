import React from 'react';
import { Link } from 'react-router-dom';
import { Watch } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center bg-[#f8f9fa]">
      <div className="w-16 h-16 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-[#b8860b] mb-6 shadow-md">
        <Watch size={32} strokeWidth={1.5} />
      </div>
      <h1 className="text-4xl font-extrabold text-neutral-900 font-display">404</h1>
      <h2 className="text-xl font-bold text-neutral-800 mt-2 mb-3">Timepiece Page Not Found</h2>
      <p className="text-xs sm:text-sm text-neutral-600 max-w-md mb-8">
        The page or watch model you were looking for doesn't exist or has moved. Return to the main catalog to explore our current collections.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-bold text-xs shadow-md hover:from-[#e5c158] hover:to-[#a67808] transition-all active:scale-95"
      >
        <span>Return to Watch Catalog</span>
      </Link>
    </div>
  );
}
