import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS_CATALOG } from '../data/furnitureData';
import heroChairImg from '../assets/images/hero_executive_chair_1790965965047.jpg';
import meshChairImg from '../assets/images/product_ergonomic_mesh_chair_1790966012423.jpg';

export const ChairsCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { setSelectedProductForModal, addToCart } = useCart();

  const chairItems = [
    {
      id: 'chair-vanguard',
      productId: 'faw-armchair-terracotta',
      name: 'Vanguard Terracotta Lounge',
      type: 'Executive Accent',
      price: '₹14,500',
      image: heroChairImg,
      condition: 'Brand New'
    },
    {
      id: 'chair-aeroflex',
      productId: 'faw-mesh-pro',
      name: 'AeroFlex Ergonomic Mesh Chair',
      type: 'Active Task Seating',
      price: '₹8,499',
      image: meshChairImg,
      condition: 'Brand New'
    },
    {
      id: 'chair-refurb-boss',
      productId: 'faw-refurb-boss-chair',
      name: 'Executive High-Back Director Chair',
      type: 'Director Armchair',
      price: '₹5,999',
      image: 'https://images.unsplash.com/photo-1580481077195-c328a37db71a?auto=format&fit=crop&w=800&q=80',
      condition: 'Certified Refurbished'
    },
    {
      id: 'chair-scandi-wood',
      productId: 'faw-mesh-pro',
      name: 'Oslo Minimalist Armchair',
      type: 'Conference & Guest',
      price: '₹6,499',
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80',
      condition: 'Brand New'
    },
    {
      id: 'chair-cane-vintage',
      productId: 'faw-armchair-terracotta',
      name: 'Artisan Rattan & Ash Chair',
      type: 'Reception & Living',
      price: '₹9,200',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      condition: 'Brand New'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleProductClick = (productId: string) => {
    const product = PRODUCTS_CATALOG.find((p) => p.id === productId) || PRODUCTS_CATALOG[0];
    setSelectedProductForModal(product);
  };

  const handleQuickAdd = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    const product = PRODUCTS_CATALOG.find((p) => p.id === productId) || PRODUCTS_CATALOG[0];
    addToCart(product);
  };

  return (
    <section className="py-20 md:py-24 bg-[#F5F5F1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header with Title and Scroll Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-neutral-400 block mb-2">
              EXPLORE OUR SEATING RANGE &gt;
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212]">
              Find Your Perfect Seat
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-black/10 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition-colors shadow-xs"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-black/10 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition-colors shadow-xs"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {chairItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleProductClick(item.productId)}
              className="group min-w-[280px] sm:min-w-[320px] md:min-w-[340px] snap-start bg-white rounded-3xl p-3 border border-black/5 hover:border-black/15 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Product Visual */}
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-neutral-100 mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Condition Tag */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                    item.condition === 'Certified Refurbished'
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-white/90 text-neutral-800 backdrop-blur-xs'
                  }`}>
                    {item.condition}
                  </span>
                </div>

                {/* Quick Add overlay button */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={(e) => handleQuickAdd(e, item.productId)}
                    className="w-8 h-8 rounded-full bg-[#121212] text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                    title="Add to Cart"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="px-2 py-1">
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider block font-medium">
                  {item.type}
                </span>
                <div className="flex items-center justify-between mt-1">
                  <h4 className="font-semibold text-sm sm:text-base text-neutral-900 group-hover:text-black transition-colors line-clamp-1">
                    {item.name}
                  </h4>
                  <span className="text-sm font-bold text-neutral-900 font-mono ml-2 shrink-0">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
