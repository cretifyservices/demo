import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import heroChairImg from '../assets/images/hero_executive_chair_1790965965047.jpg';
import modularDeskImg from '../assets/images/category_modular_desk_1790965986859.jpg';
import boardroomImg from '../assets/images/category_executive_boardroom_1790965999038.jpg';
import storageCupboardImg from '../assets/images/category_storage_cupboard_1790966024174.jpg';
import meshChairImg from '../assets/images/product_ergonomic_mesh_chair_1790966012423.jpg';
import { useCart } from '../context/CartContext';
import { PRODUCTS_CATALOG } from '../data/furnitureData';

export const EditorialBento: React.FC = () => {
  const { setSelectedProductForModal } = useCart();

  const handleOpenProduct = (productId: string) => {
    const prod = PRODUCTS_CATALOG.find((p) => p.id === productId) || PRODUCTS_CATALOG[0];
    setSelectedProductForModal(prod);
  };

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t border-neutral-200/60">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase font-semibold tracking-[0.25em] text-neutral-400 block mb-3">
          CURATED ARCHITECTURAL EDIT
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212] mb-3">
          Pieces Worth Coming Home To
        </h2>
        <p className="text-base text-neutral-600">
          Furniture designed around timeless ergonomics, tactile purity, and lasting durability.
        </p>
      </div>

      {/* Asymmetric Bento Layout matching video 01:05 - 01:07 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Card (Large Tall Feature) */}
        <div
          onClick={() => handleOpenProduct('faw-armchair-terracotta')}
          className="md:col-span-5 bg-[#F2F1ED] rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300"
        >
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#121212] leading-snug">
              Every great space deserves great furniture.
            </h3>
            <p className="text-xs text-neutral-500 uppercase tracking-widest mt-2 font-medium">
              Vanguard Terracotta Suite
            </p>
          </div>

          <div className="relative mt-8 aspect-square rounded-2xl overflow-hidden">
            <img
              src={heroChairImg}
              alt="Terracotta Armchair"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-xs font-semibold text-neutral-900">
            <span>View Specifications</span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="md:col-span-4 flex flex-col gap-6">
          {/* Middle Top: Conference Table */}
          <div
            onClick={() => handleOpenProduct('faw-boardroom-oak')}
            className="bg-white rounded-3xl p-5 border border-black/5 shadow-xs hover:shadow-md transition-all group cursor-pointer flex-1 flex flex-col justify-between"
          >
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-neutral-100 mb-3">
              <img
                src={boardroomImg}
                alt="Boardroom Table"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Conference Suite</span>
              <h4 className="font-bold text-base text-neutral-900 group-hover:text-black">
                Nordic Fluted Boardroom
              </h4>
              <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                Seats 8-16 with hidden power channels.
              </p>
            </div>
          </div>

          {/* Middle Bottom: Typographic quote card */}
          <div className="bg-[#121212] text-white rounded-3xl p-7 flex flex-col justify-between shadow-xs">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              Design Philosophy
            </span>
            <blockquote className="font-display text-2xl font-bold tracking-tight text-white my-3 leading-snug">
              "Elegance with enduring strength and daily utility."
            </blockquote>
            <span className="text-xs text-neutral-400 font-medium">
              Fawzaana Workshop · Chennai 600089
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-3 flex flex-col gap-6">
          {/* Right Top: Task Chair */}
          <div
            onClick={() => handleOpenProduct('faw-mesh-pro')}
            className="bg-white rounded-3xl p-5 border border-black/5 shadow-xs hover:shadow-md transition-all group cursor-pointer flex-1 flex flex-col justify-between"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-100 mb-3">
              <img
                src={meshChairImg}
                alt="Mesh Task Chair"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Ergonomic Task</span>
              <h4 className="font-bold text-sm text-neutral-900 group-hover:text-black">
                AeroFlex Mesh Task Chair
              </h4>
            </div>
          </div>

          {/* Right Bottom: Storage Cupboard */}
          <div
            onClick={() => handleOpenProduct('faw-storage-steel')}
            className="bg-white rounded-3xl p-5 border border-black/5 shadow-xs hover:shadow-md transition-all group cursor-pointer flex-1 flex flex-col justify-between"
          >
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-neutral-100 mb-3">
              <img
                src={storageCupboardImg}
                alt="Storage Credenza"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Storage Showcase</span>
              <h4 className="font-bold text-sm text-neutral-900 group-hover:text-black">
                Aura Steel Credenza
              </h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
