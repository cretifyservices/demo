import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandMarquee } from './components/BrandMarquee';
import { StatsCounter } from './components/StatsCounter';
import { CategoryShowcase } from './components/CategoryShowcase';
import { ChairsCarousel } from './components/ChairsCarousel';
import { CategoryGrid } from './components/CategoryGrid';
import { SoftLivingStack } from './components/SoftLivingStack';
import { EditorialBento } from './components/EditorialBento';
import { ProductCatalog } from './components/ProductCatalog';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';

export default function App() {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <CartProvider>
      {/* Framer-like Entrance Preloader */}
      {!hasLoaded && <Preloader onComplete={() => setHasLoaded(true)} />}

      <div className="min-h-screen bg-[#FBFBF9] text-[#121212] flex flex-col selection:bg-[#E8DCC4] selection:text-[#121212]">
        {/* Floating Top Bar Navigation */}
        <Navbar />

        {/* Main Content Flow */}
        <main className="flex-1">
          {/* Hero Section */}
          <div id="hero">
            <Hero />
          </div>

          {/* Client & Architectural Brand Marquee */}
          <BrandMarquee />

          {/* Statement & Animated Statistics */}
          <StatsCounter />

          {/* Sticky Numbered Category Showcase */}
          <CategoryShowcase />

          {/* "Find Your Perfect Seat" Smooth Horizontal Carousel */}
          <ChairsCarousel />

          {/* Curated Spaces 4-Column Grid */}
          <CategoryGrid />

          {/* Soft Living Card Feature Stack */}
          <SoftLivingStack />

          {/* Asymmetric Editorial Bento Grid */}
          <EditorialBento />

          {/* Full Working E-Commerce Product Catalog */}
          <ProductCatalog />

          {/* Testimonial Customer Reviews */}
          <Testimonials />

          {/* Luxury FAQ Accordion */}
          <FaqSection />

          {/* Consultation Lead & Showroom Booking Form */}
          <ConsultationForm />
        </main>

        {/* Typographic Luxury Dark Footer */}
        <Footer />

        {/* Slide-over Cart Drawer */}
        <CartDrawer />

        {/* Product Quick-View PDP Modal */}
        <ProductModal />
      </div>
    </CartProvider>
  );
}
