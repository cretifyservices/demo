import React, { useState } from 'react';
import { Star, ArrowRight, Sparkles, Eye, ShieldCheck } from 'lucide-react';
import heroChairImg from '../assets/images/hero_executive_chair_1790965965047.jpg';
import modularDeskImg from '../assets/images/category_modular_desk_1790965986859.jpg';
import boardroomImg from '../assets/images/category_executive_boardroom_1790965999038.jpg';
import { useCart } from '../context/CartContext';
import { PRODUCTS_CATALOG } from '../data/furnitureData';
import { FawzaanaLogo } from './FawzaanaLogo';

export const Hero: React.FC = () => {
  const { setSelectedProductForModal } = useCart();
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);

  const previewItems = [
    {
      title: 'Vanguard Terracotta Chair',
      tag: 'Sculptural Lounge',
      image: heroChairImg,
      productId: 'faw-armchair-terracotta'
    },
    {
      title: '4-Foot System Table',
      tag: 'Modular Workstation',
      image: modularDeskImg,
      productId: 'faw-sys-desk-4ft'
    },
    {
      title: 'Nordic Fluted Boardroom',
      tag: 'Conference Suite',
      image: boardroomImg,
      productId: 'faw-boardroom-oak'
    }
  ];

  const currentPreview = previewItems[activePreviewIndex];
  const featuredProduct = PRODUCTS_CATALOG.find((p) => p.id === currentPreview.productId) || PRODUCTS_CATALOG[0];

  const scrollToCatalog = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToConsultation = () => {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start z-10">
          
          {/* Subtle quiet kicker with authentic circular logo */}
          <div className="flex items-center gap-2.5 mb-4">
            <FawzaanaLogo size={28} />
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500">
              <span>FAWZAANA TRADERS · CHENNAI</span>
              <span className="text-neutral-300">/</span>
              <span>SINCE 2004</span>
            </div>
          </div>

          {/* Huge Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#121212] leading-[1.08] text-balance">
            CRAFTED FOR <br className="hidden sm:inline" />
            <span className="text-neutral-900">MODERN</span> <br />
            LIVING.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
            Thoughtfully designed furniture that brings warmth, comfort, and character into every room and executive office space.
          </p>

          {/* CTA Button Group matching video */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={scrollToCatalog}
              className="px-6 py-3.5 bg-[#121212] text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow flex items-center gap-2 cursor-pointer group"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={scrollToConsultation}
              className="px-6 py-3.5 bg-neutral-100 hover:bg-neutral-200/70 text-neutral-900 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer"
            >
              Custom Office Layout
            </button>
          </div>

          {/* Social Proof & Rating Block matching video 00:06 - 00:10 */}
          <div className="mt-10 pt-6 border-t border-neutral-200/70 flex flex-wrap items-center gap-6">
            <div className="flex -space-x-2.5 overflow-hidden">
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Client"
              />
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="Client"
              />
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                alt="Client"
              />
              <div className="h-9 w-9 rounded-full bg-neutral-900 text-white text-[11px] font-semibold flex items-center justify-center ring-2 ring-white font-mono">
                +10k
              </div>
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
                <span className="text-xs font-bold text-neutral-900 ml-1.5 font-mono">4.9/5</span>
              </div>
              <p className="text-xs text-neutral-500 font-medium mt-0.5">
                <span className="font-semibold text-neutral-900 font-mono">10,000+</span> Happy Clients Across India
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Visual with Interactive Floating Preview Card */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          
          {/* Main Visual Container */}
          <div className="relative w-full aspect-4/3 sm:aspect-16/11 rounded-3xl overflow-hidden shadow-2xl bg-neutral-100 group">
            <img
              src={currentPreview.image}
              alt={currentPreview.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
            />

            {/* Subtle Gradient Scrim at base */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Fast Action Overlay on Chair */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold text-neutral-900 shadow-xs">
                <Sparkles className="w-3 h-3 text-amber-600" />
                {currentPreview.tag}
              </span>
            </div>

            {/* Quick View Button on Image */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setSelectedProductForModal(featuredProduct)}
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-neutral-900 shadow-md hover:bg-white transition-all cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-neutral-700" />
                <span>Quick View</span>
              </button>
            </div>

            {/* Floating Mini Interactive Preview Card */}
            <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-2.5 shadow-xl border border-black/5 max-w-[170px] sm:max-w-[210px] transition-all">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                  Alternate Angles
                </span>
              </div>

              <div className="flex gap-1.5">
                {previewItems.map((item, idx) => (
                  <button
                    key={item.title}
                    onClick={() => setActivePreviewIndex(idx)}
                    className={`relative w-9 h-9 sm:w-12 sm:h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activePreviewIndex === idx
                        ? 'border-neutral-950 scale-105 shadow-xs'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                    title={item.title}
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
