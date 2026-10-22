# CASIO Premium Timepieces - Responsive Static Watch Catalog

A static frontend CASIO watch catalog website built using **React.js**, **Vite**, **React Router**, and **Tailwind CSS**. Designed with an authentic black, white, and gold horological aesthetic inspired by CASIO's flagship timepieces (G-SHOCK, EDIFICE, and Vintage collections).

## Features

- **Strict Responsive Card Grid**:
  - **Mobile phones**: Exactly 2 watch cards per row (`grid-cols-2`)
  - **Tablets**: 3 watch cards per row (`md:grid-cols-3`)
  - **Desktops / Laptops**: Exactly 4 watch cards per row (`lg:grid-cols-4`)
- **Zero Pricing**: Per specification, no product prices are displayed anywhere across the website.
- **Product Gallery**:
  - Interactive multi-angle image gallery with main viewport and interactive thumbnails.
  - 5 high-resolution photography angles for every timepiece (Front Face, Dial Macro, Bezel Texture, Night Luminescence, and Solid Clasp).
  - Graceful fallback containers ensuring resilience against broken images.
- **Navigation & Routing**:
  - Dynamic routing via React Router (`/` and `/product/:slug`).
  - "View Details" and "Book Now" buttons linking to dedicated timepiece specifications.
  - "Back to Shop" smooth return navigation.
- **WhatsApp Concierge Integration**:
  - Fixed circular green floating WhatsApp button on the bottom-right of every page.
  - Context-aware pre-filled message including timepiece name and model number on product detail pages.
  - Configurable phone number in `src/data/products.js` (`91YOURNUMBER`).
- **VIP Consultation & Viewing**:
  - Zero-payment store appointment reservation modal with confirmation codes.
- **Official CASIO Resource Links**:
  - Comprehensive directory in the footer and navigation connecting to official CASIO India platforms.

## Folder Structure

```text
src/
├── components/
│   ├── Navbar.jsx          # Header with CASIO logo, collection links, and mobile drawer
│   ├── HeroBanner.jsx      # Luxury promotional hero banner with CTA actions
│   ├── ProductCard.jsx     # Card component with 2/3/4 grid layout, View Details & Book Now
│   ├── ProductGrid.jsx     # Responsive grid with live search and collection tabs
│   ├── WhatsAppButton.jsx  # Fixed floating WhatsApp concierge button
│   └── Footer.jsx          # Official CASIO links directory and legal disclaimers
├── pages/
│   ├── Home.jsx            # Main showroom page
│   ├── NotFound.jsx        # 404 handler with return link
│   └── product-details/
│       ├── ProductDetails.jsx  # Multi-angle gallery, full specs table, booking modal
│       └── ProductDetails.css  # Gallery styles and modal animations
├── data/
│   └── products.js         # Master static catalog, specifications, and WhatsApp config
├── styles/
│   ├── global.css          # Theme variables, typography, and gold aesthetic styles
│   └── responsive.css      # Grid breakpoints (2 mobile / 3 tablet / 4 desktop)
├── App.jsx                 # Routing, ScrollToTop, and wishlist state
└── main.jsx                # React DOM entry point
```

## Installation & Running

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build
```
