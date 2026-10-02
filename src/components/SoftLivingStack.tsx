import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import heroChairImg from '../assets/images/hero_executive_chair_1790965965047.jpg';
import modularDeskImg from '../assets/images/category_modular_desk_1790965986859.jpg';
import boardroomImg from '../assets/images/category_executive_boardroom_1790965999038.jpg';
import meshChairImg from '../assets/images/product_ergonomic_mesh_chair_1790966012423.jpg';

export const SoftLivingStack: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: 'Soft Living',
      tagline: 'Warmth, Comfort & Character',
      description: 'Bring quiet tactile luxury into your space with sculpted executive seating and handcrafted timber accents.',
      image: heroChairImg,
      badge: 'Living & Lounge'
    },
    {
      title: 'Dynamic Ergonomics',
      tagline: 'Active Posture & Health',
      description: 'Engineered breathable mesh and synchronized multi-tilt for modern professionals working 10+ focused hours daily.',
      image: meshChairImg,
      badge: 'Task Seating'
    },
    {
      title: 'Modular Systems',
      tagline: 'Precision 4-Foot Desks',
      description: 'Expandable workspace pods with clean hidden wire trunks, durable matte tops, and solid steel foundations.',
      image: modularDeskImg,
      badge: 'Workstations'
    },
    {
      title: 'Boardroom Gatherings',
      tagline: 'Shared Visions & Strength',
      description: 'Fluted architectural oak tables configured for high-stakes corporate discussions and enduring impressions.',
      image: boardroomImg,
      badge: 'Conference'
    }
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const scrollToCatalog = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase font-semibold tracking-[0.25em] text-neutral-400 block mb-3">
          OUR COLLECTION
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212] mb-4">
          Chairs Made For Every Moment
        </h2>
        <p className="text-base text-neutral-600">
          From relaxed lounging to everyday focused work, discover thoughtfully crafted furniture designed for comfort, character, and lasting style.
        </p>
      </div>

      {/* Main Feature Slider Container */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 aspect-16/10 sm:aspect-16/8 max-h-[600px] flex items-center">
        {/* Background Visual */}
        <img
          key={slides[activeSlide].image}
          src={slides[activeSlide].image}
          alt={slides[activeSlide].title}
          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out animate-in fade-in zoom-in-95 duration-500"
        />

        {/* Cinematic gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        {/* Floating Content Card matching video 00:56 - 01:03 */}
        <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-lg text-white">
          <span className="inline-block text-[11px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/20 backdrop-blur-md mb-4 text-white/90">
            {slides[activeSlide].badge}
          </span>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white">
            {slides[activeSlide].title}
          </h3>
          <p className="text-sm sm:text-base text-neutral-200 leading-relaxed mb-6">
            {slides[activeSlide].description}
          </p>
          <button
            onClick={scrollToCatalog}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-neutral-950 text-xs sm:text-sm font-semibold hover:bg-neutral-100 transition-colors shadow-lg cursor-pointer"
          >
            <span>Explore Seating</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute top-6 right-6 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
