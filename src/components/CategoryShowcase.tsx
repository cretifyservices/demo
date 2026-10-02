import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CATEGORY_SHOWCASE, PRODUCTS_CATALOG } from '../data/furnitureData';
import { useCart } from '../context/CartContext';

export const CategoryShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'down' | 'up'>('down');
  const lastIndexRef = useRef(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isManualScrolling = useRef(false);
  const manualTimeout = useRef<number | null>(null);

  const { setSelectedProductForModal } = useCart();
  const activeItem = CATEGORY_SHOWCASE[activeIndex];

  // Scroll spy to automatically shift active category as user scrolls up or down
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrolling.current) return;

      const viewportCenter = window.innerHeight * 0.45;
      let closestIndex = 0;
      let minDistance = Infinity;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Distance from the center/top of viewport
        const itemMiddle = rect.top + rect.height * 0.4;
        const distance = Math.abs(itemMiddle - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== lastIndexRef.current) {
        setDirection(closestIndex > lastIndexRef.current ? 'down' : 'up');
        lastIndexRef.current = closestIndex;
        setActiveIndex(closestIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleManualClick = (index: number) => {
    isManualScrolling.current = true;
    if (manualTimeout.current) clearTimeout(manualTimeout.current);

    setDirection(index > activeIndex ? 'down' : 'up');
    lastIndexRef.current = index;
    setActiveIndex(index);

    const targetEl = itemRefs.current[index];
    if (targetEl) {
      const yOffset = -window.innerHeight * 0.25;
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    manualTimeout.current = window.setTimeout(() => {
      isManualScrolling.current = false;
    }, 700);
  };

  const handleOpenCategory = (categoryId: string) => {
    const matching = PRODUCTS_CATALOG.find((p) => {
      if (categoryId === 'sofas-seating') return p.id === 'faw-armchair-terracotta';
      if (categoryId === 'system-workstations') return p.id === 'faw-sys-desk-4ft';
      if (categoryId === 'conference-dining') return p.id === 'faw-boardroom-oak';
      if (categoryId === 'ergonomic-chairs') return p.id === 'faw-mesh-pro';
      return p.id === 'faw-storage-steel';
    });

    if (matching) {
      setSelectedProductForModal(matching);
    }
  };

  // Parallax animation variants
  const imageVariants = {
    initial: (dir: 'down' | 'up') => ({
      opacity: 0,
      scale: 1.08,
      y: dir === 'down' ? 24 : -24,
      filter: 'blur(6px)'
    }),
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: 'easeOut' as const
      }
    },
    exit: (dir: 'down' | 'up') => ({
      opacity: 0,
      scale: 0.96,
      y: dir === 'down' ? -20 : 20,
      filter: 'blur(4px)',
      transition: {
        duration: 0.45,
        ease: 'easeIn' as const
      }
    })
  };

  return (
    <section id="categories" className="relative py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t border-neutral-200/70">
      
      {/* Subtle indicator bar */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-neutral-400 font-semibold">
            INTERACTIVE SCROLL CATALOGUE
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
          <span>Scroll to explore</span>
          <span className="animate-bounce">↓</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative">
        
        {/* Left Column: Scroll-Linked Categories */}
        <div className="lg:col-span-6 flex flex-col">
          {CATEGORY_SHOWCASE.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={item.id}
                ref={(el) => { itemRefs.current[index] = el; }}
                onClick={() => handleManualClick(index)}
                className={`min-h-[55vh] flex flex-col justify-center cursor-pointer transition-all duration-500 py-10 border-b border-neutral-200/60 last:border-b-0 ${
                  isActive ? 'opacity-100' : 'opacity-25 hover:opacity-50'
                }`}
              >
                {/* Active index progress line */}
                <div className="w-10 h-[2px] bg-neutral-200 mb-4 overflow-hidden rounded-full">
                  <div
                    className={`h-full bg-black transition-all duration-500 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>

                {/* Number */}
                <span className="text-xs font-mono font-bold text-neutral-400 block mb-2 transition-colors">
                  {item.number}
                </span>

                {/* Title */}
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212] mb-2 leading-[1.1] transition-transform duration-300">
                  {item.title}
                </h3>

                {/* Subheading that shifts with scroll */}
                <p className={`text-base font-semibold transition-colors duration-300 mb-4 ${
                  isActive ? 'text-amber-800' : 'text-neutral-500'
                }`}>
                  {item.subtitle}
                </p>

                {/* Expanded Description & Specs on Active */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isActive ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-5 max-w-lg">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.highlightSpecs.map((spec) => (
                      <div
                        key={spec}
                        className="flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-100 px-3.5 py-1.5 rounded-full font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenCategory(item.id);
                    }}
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#121212] text-white rounded-full text-xs font-semibold hover:bg-neutral-800 transition-all shadow-sm hover:shadow group cursor-pointer"
                  >
                    <span>Read about it</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Morphing Parallax Image Display - Sticky on mobile and desktop */}
        <div className="order-first lg:order-last lg:col-span-6 sticky top-20 lg:top-28 z-20 h-fit self-start pb-4 lg:pb-0 bg-[#FBFBF9]/95 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none">
          <div className="relative w-full aspect-16/10 sm:aspect-16/11 lg:aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl bg-neutral-100 border border-black/5 max-h-[290px] sm:max-h-[380px] lg:max-h-none">
            
            {/* Animated Image with AnimatePresence */}
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeItem.id}
                custom={direction}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Measured Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            {/* Pagination Counter Badge (e.g. 01 / 05) */}
            <div className="absolute bottom-5 left-5 z-20">
              <motion.div
                key={activeItem.number}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-mono font-medium tracking-wider border border-white/10 shadow-lg"
              >
                {activeItem.number} / 05
              </motion.div>
            </div>

            {/* Quick Action Button */}
            <div className="absolute bottom-5 right-5 z-20">
              <button
                onClick={() => handleOpenCategory(activeItem.id)}
                className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-neutral-900 text-xs font-semibold hover:bg-white transition-all shadow-md cursor-pointer hover:scale-103"
              >
                View Collection
              </button>
            </div>

            {/* Category Name Overlay Tag at Top Left */}
            <div className="absolute top-5 left-5 z-20">
              <motion.span
                key={activeItem.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-block text-[11px] font-mono uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-neutral-900 font-semibold shadow-xs"
              >
                {activeItem.title}
              </motion.span>
            </div>

          </div>

          {/* Interactive Thumbnails Navigation beneath sticky card */}
          <div className="hidden sm:flex items-center gap-2 mt-4 px-2">
            {CATEGORY_SHOWCASE.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => handleManualClick(idx)}
                className={`relative flex-1 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? 'bg-neutral-900 h-2' : 'bg-neutral-200 hover:bg-neutral-300'
                }`}
                title={cat.title}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
