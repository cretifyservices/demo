import React, { useState } from 'react';
import { X, Star, ShieldCheck, Check, ShoppingBag, Truck, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductModal: React.FC = () => {
  const { selectedProductForModal, setSelectedProductForModal, addToCart } = useCart();
  const product = selectedProductForModal;

  const [selectedColor, setSelectedColor] = useState<string>(product?.colors[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleClose = () => {
    setSelectedProductForModal(null);
  };

  const handleAdd = () => {
    addToCart(product, quantity, selectedColor);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      handleClose();
    }, 1000);
  };

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Hello Fawzaana Traders! I am interested in the ${product.name} (Price: ₹${product.price}, Condition: ${product.condition}, Selected Finish: ${selectedColor}). Can you provide delivery details to my location?`
    );
    window.open(`https://wa.me/919478574847?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#FBFBF9] text-[#121212] rounded-3xl shadow-2xl overflow-hidden z-10 my-auto animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 text-neutral-600 hover:text-black flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Product Visual */}
          <div className="md:col-span-6 bg-neutral-100 relative min-h-[300px] md:min-h-[460px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 left-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                product.condition === 'Certified Refurbished'
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-white/90 text-neutral-900 backdrop-blur-xs'
              }`}>
                {product.condition}
              </span>
            </div>
          </div>

          {/* Right Column: Detailed Purchase Module */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                <span className="uppercase tracking-widest font-mono font-semibold">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1 text-amber-600 font-bold font-mono">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{product.rating}</span>
                  <span className="text-neutral-400 font-normal">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-950 leading-tight mb-3">
                {product.name}
              </h2>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-bold font-mono text-neutral-950 tabular-nums">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm font-mono text-neutral-400 line-through tabular-nums">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% SAVINGS
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Color Finish Selection */}
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-700 block mb-2">
                  Finish / Color: <span className="font-normal text-neutral-500">{selectedColor}</span>
                </span>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                        selectedColor === color.name
                          ? 'border-neutral-950 bg-neutral-950 text-white'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                      }`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-black/10"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dimensions & Specs Grid */}
              <div className="bg-neutral-100/70 rounded-2xl p-4 mb-6 text-xs space-y-1.5 font-mono">
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold mb-2">
                  SPECIFICATIONS & DIMENSIONS
                </div>
                <div className="grid grid-cols-2 gap-2 text-neutral-700">
                  <div><span className="text-neutral-400">Dimensions:</span> {product.dimensions.width} x {product.dimensions.depth}</div>
                  <div><span className="text-neutral-400">Height:</span> {product.dimensions.height}</div>
                  {product.dimensions.weightCapacity && (
                    <div><span className="text-neutral-400">Capacity:</span> {product.dimensions.weightCapacity}</div>
                  )}
                  <div><span className="text-neutral-400">Warranty:</span> 1-Year On-Site</div>
                </div>
              </div>

            </div>

            {/* Purchase Row */}
            <div className="pt-4 border-t border-neutral-200 flex flex-col gap-2.5">
              <div className="flex gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-neutral-300 rounded-full px-2 py-1 bg-white">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-7 h-7 flex items-center justify-center text-neutral-600 hover:text-black font-mono cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-mono font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-7 h-7 flex items-center justify-center text-neutral-600 hover:text-black font-mono cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Primary Add to Cart */}
                <button
                  onClick={handleAdd}
                  className={`flex-1 py-3 px-6 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#121212] hover:bg-neutral-800 text-white shadow-md'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Bag
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add to Bag · ₹{(product.price * quantity).toLocaleString('en-IN')}
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp Quick Link */}
              <button
                onClick={handleWhatsAppEnquiry}
                className="w-full py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                <span>Enquire via WhatsApp (Fawzaana Chennai)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
