import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, isCartOpen, setIsCartOpen, totalItems, subtotal } = useCart();
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');

  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Chennai',
    pincode: '600089',
    paymentMethod: 'Cash / Card on Delivery'
  });

  const [lastOrderId, setLastOrderId] = useState<string>('');

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    const itemsList = cart
      .map((item, idx) => `${idx + 1}. ${item.product.name} (${item.selectedColor}) x ${item.quantity} = ₹${(item.product.price * item.quantity).toLocaleString('en-IN')}`)
      .join('\n');

    const message = encodeURIComponent(
      `*NEW ORDER INQUIRY - FAWZAANA TRADERS*\n\n` +
      `*Client Details:*\nName: ${customer.name || 'Valued Customer'}\nPhone: ${customer.phone || 'Provided via WhatsApp'}\nDelivery: ${customer.address ? `${customer.address}, ${customer.city} - ${customer.pincode}` : 'Chennai'}\nPayment: ${customer.paymentMethod}\n\n` +
      `*Ordered Items:*\n${itemsList}\n\n` +
      `*Total Estimated Value:* ₹${subtotal.toLocaleString('en-IN')}\n\n` +
      `Please confirm order dispatch & delivery timing.`
    );

    window.open(`https://wa.me/919478574847?text=${message}`, '_blank');
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = `FAW-${Math.floor(100000 + Math.random() * 900000)}`;
    setLastOrderId(orderId);
    setCheckoutStep('success');
    clearCart();
  };

  const closeAndReset = () => {
    setIsCartOpen(false);
    setTimeout(() => setCheckoutStep('cart'), 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={closeAndReset}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Drawer Surface */}
      <div className="relative w-full max-w-md bg-[#FBFBF9] text-[#121212] shadow-2xl h-full flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-neutral-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-lg font-bold tracking-tight text-neutral-900">
              {checkoutStep === 'checkout' ? 'Delivery Details' : checkoutStep === 'success' ? 'Order Placed' : 'Shopping Cart'}
            </h3>
            {checkoutStep === 'cart' && (
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 font-semibold">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            )}
          </div>
          <button
            onClick={closeAndReset}
            className="p-1.5 rounded-full text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {checkoutStep === 'success' ? (
            <div className="flex flex-col items-center justify-center text-center h-full py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="font-display text-2xl font-bold text-neutral-900 mb-1">
                Thank You for Choosing Fawzaana!
              </h4>
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-4">
                Order Ref: {lastOrderId}
              </p>
              <p className="text-sm text-neutral-600 max-w-xs leading-relaxed mb-6">
                Your order has been recorded. Our Chennai dispatch team is preparing your furniture package for rapid inspection and dispatch.
              </p>

              <button
                onClick={closeAndReset}
                className="w-full py-3 bg-[#121212] text-white rounded-full text-xs font-semibold hover:bg-neutral-800 transition-all cursor-pointer"
              >
                Continue Browsing
              </button>
            </div>
          ) : checkoutStep === 'checkout' ? (
            <form onSubmit={handleConfirmOrder} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                  Contact Number / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  placeholder="e.g. 98400 12345"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white font-mono focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                  Delivery Address in Chennai / India
                </label>
                <textarea
                  rows={2}
                  required
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  placeholder="Door number, street name, office floor, landmark..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-black resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    value={customer.city}
                    onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    required
                    value={customer.pincode}
                    onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white font-mono focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                  Payment Preference
                </label>
                <select
                  value={customer.paymentMethod}
                  onChange={(e) => setCustomer({ ...customer, paymentMethod: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-black"
                >
                  <option value="Cash / Card on Delivery">Pay on Delivery (Chennai Showroom verified)</option>
                  <option value="UPI / QR Code Transfer">Instant UPI / NetBanking</option>
                  <option value="Proforma GST Invoice">Corporate Proforma GST Invoice (B2B)</option>
                </select>
              </div>

              <div className="pt-4 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#121212] hover:bg-neutral-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Place Order (₹{subtotal.toLocaleString('en-IN')})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Order via WhatsApp Direct
                </button>

                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="w-full py-2 text-neutral-500 hover:text-black text-xs font-medium cursor-pointer"
                >
                  Back to Bag
                </button>
              </div>
            </form>
          ) : cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center h-full py-16">
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4 text-neutral-400">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="font-display text-xl font-bold text-neutral-900 mb-1">
                Your Bag is Empty
              </h4>
              <p className="text-xs text-neutral-500 max-w-xs mb-6">
                Discover our certified refurbished office packages, ergonomic chairs, and 4ft system workstations.
              </p>
              <button
                onClick={closeAndReset}
                className="px-6 py-2.5 bg-[#121212] text-white rounded-full text-xs font-semibold hover:bg-neutral-800 transition-all cursor-pointer"
              >
                Start Exploring
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}`}
                  className="bg-white rounded-2xl p-3 border border-neutral-200/80 shadow-xs flex gap-3.5"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-neutral-100 shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-xs sm:text-sm text-neutral-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedColor)}
                          className="text-neutral-400 hover:text-red-600 transition-colors p-0.5 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md">
                          {item.selectedColor}
                        </span>
                        <span className="text-[10px] font-semibold text-amber-800">
                          {item.product.condition}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-neutral-100">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-neutral-200 rounded-lg bg-neutral-50">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, -1)}
                          className="w-6 h-6 flex items-center justify-center text-neutral-600 hover:bg-neutral-200/60 rounded-l-lg transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono font-semibold text-neutral-900 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, 1)}
                          className="w-6 h-6 flex items-center justify-center text-neutral-600 hover:bg-neutral-200/60 rounded-r-lg transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="text-xs sm:text-sm font-bold font-mono text-neutral-900 tabular-nums">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {checkoutStep === 'cart' && cart.length > 0 && (
          <div className="p-6 border-t border-neutral-200 bg-white space-y-3">
            {/* Free Delivery Banner */}
            <div className="flex items-center gap-2 text-[11px] text-emerald-800 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200/60 font-medium">
              <Truck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Complimentary Assembly & Express Dispatch in Chennai (600089)</span>
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-500 font-medium">Estimated Subtotal</span>
              <span className="font-bold text-base text-neutral-950 font-mono tabular-nums">
                ₹{subtotal.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={() => setCheckoutStep('checkout')}
                className="w-full py-3.5 bg-[#121212] hover:bg-neutral-800 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-full text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                <span>Instant Checkout on WhatsApp</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
