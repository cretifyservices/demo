import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import heroChairImg from '../assets/images/hero_executive_chair_1790965965047.jpg';
import modularDeskImg from '../assets/images/category_modular_desk_1790965986859.jpg';
import boardroomImg from '../assets/images/category_executive_boardroom_1790965999038.jpg';
import storageCupboardImg from '../assets/images/category_storage_cupboard_1790966024174.jpg';

export const CategoryGrid: React.FC = () => {
  const spaces = [
    {
      title: 'Living & Reception',
      subtitle: 'Sculptural lounge chairs, waiting sofas, and teapoy tables.',
      image: heroChairImg,
      tag: '01'
    },
    {
      title: 'Executive Suites',
      subtitle: 'Director desks, leatherette high-backs, and credenza showcases.',
      image: storageCupboardImg,
      tag: '02'
    },
    {
      title: 'Boardroom & Dining',
      subtitle: 'Fluted conference tables and ergonomic meeting chairs.',
      image: boardroomImg,
      tag: '03'
    },
    {
      title: 'Workspace Pods',
      subtitle: '4-foot modular system desks and breathable mesh task chairs.',
      image: modularDeskImg,
      tag: '04'
    }
  ];

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="spaces" className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase font-semibold tracking-[0.25em] text-neutral-400 block mb-3">
          CURATED ARCHITECTURAL SPACES
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212] mb-4">
          Thoughtfully Designed For Every Room
        </h2>
        <p className="text-base text-neutral-600">
          Chairs, desks, and storage pieces engineered for meeting, focusing, lounging, and everything in between.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {spaces.map((space) => (
          <div
            key={space.title}
            onClick={scrollToProducts}
            className="group cursor-pointer flex flex-col justify-between"
          >
            <div className="relative aspect-4/3 sm:aspect-square rounded-3xl overflow-hidden bg-neutral-100 mb-4 shadow-xs group-hover:shadow-lg transition-all duration-500">
              <img
                src={space.image}
                alt={space.title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all">
                <ArrowUpRight className="w-4 h-4 text-neutral-900" />
              </div>
              <div className="absolute bottom-4 left-4 text-[11px] font-mono font-medium text-white/80 bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                {space.tag}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-[#121212] group-hover:text-black transition-colors">
                {space.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1 leading-relaxed">
                {space.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
