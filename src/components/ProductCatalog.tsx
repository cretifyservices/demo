import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Eye, Star, Filter, Check, ArrowRight } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/furnitureData';
import { Product } from '../types/furniture';
import { useCart } from '../context/CartContext';

export const ProductCatalog: React.FC = () => {
  const { addToCart, setSelectedProductForModal } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Pieces' },
    { id: 'chairs', label: 'Ergonomic Chairs' },
    { id: 'desks', label: 'System Desks' },
    { id: 'combos', label: 'Combo Offers' },
    { id: 'tables', label: 'Conference & Dining' },
    { id: 'storage', label: 'Steel Cupboards' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchCondition =
        selectedCondition === 'all' ||
        (selectedCondition === 'new' && item.condition === 'Brand New') ||
        (selectedCondition === 'refurbished' && item.condition === 'Certified Refurbished');
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchCondition && matchSearch;
    });
  }, [selectedCategory, selectedCondition, searchQuery]);

  const handleAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1500);
  };

  return (
    <section id="products" className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t border-neutral-200/70">
      
      {/* Section Title & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-neutral-400 block mb-3">
            CATALOG & IMMEDIATE DISPATCH
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212]">
            Curated Furniture Range
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 mt-2 max-w-xl">
            Explore our handcrafted new designs and certified refurbished office packages, fully warrantied and ready for express delivery in Chennai.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chairs, desks..."
            className="w-full pl-9 pr-4 py-2.5 rounded-full border border-black/10 bg-white text-xs font-medium focus:outline-none focus:ring-1 focus:ring-black placeholder:text-neutral-400"
          />
        </div>
      </div>

      {/* Filter Tabs & Condition Selector */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-200/60">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#121212] text-white shadow-xs'
                  : 'bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Condition Filter */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-neutral-400 font-medium flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Condition:
          </span>
          <div className="inline-flex rounded-full bg-neutral-100 p-1">
            <button
              onClick={() => setSelectedCondition('all')}
              className={`px-3 py-1 rounded-full font-medium transition-all ${
                selectedCondition === 'all' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-500'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCondition('new')}
              className={`px-3 py-1 rounded-full font-medium transition-all ${
                selectedCondition === 'new' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-500'
              }`}
            >
              Brand New
            </button>
            <button
              onClick={() => setSelectedCondition('refurbished')}
              className={`px-3 py-1 rounded-full font-medium transition-all ${
                selectedCondition === 'refurbished' ? 'bg-white text-amber-900 shadow-xs font-semibold' : 'text-neutral-500'
              }`}
            >
              Certified Refurbished
            </button>
          </div>
        </div>

      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center bg-white rounded-3xl border border-neutral-200/60 p-8">
          <p className="text-base text-neutral-600 font-medium">No pieces found matching your criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedCondition('all');
              setSearchQuery('');
            }}
            className="mt-4 px-5 py-2 rounded-full bg-[#121212] text-white text-xs font-semibold"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProductForModal(product)}
              className="group bg-white rounded-3xl p-3.5 border border-black/5 hover:border-black/15 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-neutral-100 mb-3.5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Top Badge (Condition or Promotion) */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span
                    className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                      product.condition === 'Certified Refurbished'
                        ? 'bg-amber-100/90 text-amber-900 border border-amber-300/60 backdrop-blur-xs'
                        : 'bg-white/90 text-neutral-900 backdrop-blur-xs'
                    }`}
                  >
                    {product.condition}
                  </span>
                  {product.tag && (
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#121212] text-white self-start">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Quick View Button on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-neutral-900 text-xs font-semibold shadow-md flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" /> Quick View
                  </span>
                </div>
              </div>

              {/* Info & Content */}
              <div className="px-1 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1">
                    <span className="uppercase tracking-wider font-medium">{product.categoryLabel}</span>
                    <div className="flex items-center gap-1 text-amber-600 font-semibold font-mono">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-base text-neutral-900 group-hover:text-black transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price and Add to Cart Row */}
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-base font-bold text-neutral-950 font-mono tabular-nums">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-neutral-400 line-through font-mono tabular-nums">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <span className="text-[10px] text-emerald-700 font-semibold block">
                        Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => handleAdd(e, product)}
                    className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                      addedProductId === product.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#121212] hover:bg-neutral-800 text-white shadow-xs'
                    }`}
                  >
                    {addedProductId === product.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Added
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" /> Add
                      </>
                    )}
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      )}

    </section>
  );
};
