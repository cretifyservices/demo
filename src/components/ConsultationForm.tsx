import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Send, CheckCircle2, MessageSquare, Instagram, ExternalLink, Sparkles, Clock, Compass } from 'lucide-react';
import { FawzaanaLogo } from './FawzaanaLogo';

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Ergonomic High-Back Task Chairs (New & Refurbished)',
    '4-Foot Modular System Desks',
    'Refurbished Table + Chair Combo Offer (Showroom Special)',
    'Nordic Fluted Boardroom & Conference Tables',
    'Heavy-Gauge Metal Storage Cupboards & Credenzas',
    'Complete Turnkey Corporate Office Setup'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*CUSTOM CONSULTATION INQUIRY*\n` +
      `*Brand:* Fawzaana Traders Chennai\n` +
      `*Client:* ${formData.name || 'Valued Customer'}\n` +
      `*Contact:* ${formData.phone || 'Provided via WhatsApp'}\n` +
      `*Selected Solution:* ${formData.service || 'Office Furniture Consultation'}\n` +
      `*Requirements:* ${formData.notes || 'Looking for ergonomic furniture solutions in Chennai.'}`
    );
    window.open(`https://wa.me/919478574847?text=${text}`, '_blank');
  };

  return (
    <section id="consultation" className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t border-neutral-200/60">
      <div className="relative rounded-[2.5rem] overflow-hidden bg-[#26211C] text-white p-6 sm:p-10 md:p-14 shadow-2xl border border-white/10">
        
        {/* Ambient atmospheric backdrop */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Heading, Location Card, and Map Preview matching video 01:24 - 01:31 */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Top tag with authentic brand logo emblem */}
              <div className="flex items-center gap-3 mb-4">
                <FawzaanaLogo size={34} />
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-amber-300 font-semibold">
                  LET'S CREATE YOUR SPACE
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.12]">
                Let's Find The Furniture That Feels Like You.
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-lg mb-8">
                Tell us what you're looking for and our interior engineering team will help you configure the right chair, system desk, and custom material finish for your workspace.
              </p>
            </div>

            {/* Interactive Showroom Map Card matching Framer template video 01:24 */}
            <div className="space-y-6 pt-4">
              
              {/* Map Preview Container */}
              <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shadow-inner group">
                {/* Stylized Dark Mode Map Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80')`,
                    filter: 'grayscale(60%) contrast(120%) brightness(55%)'
                  }}
                />
                
                {/* Map Grid Overlay */}
                <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[1px]" />

                {/* Open in Maps Button */}
                <a
                  href="https://maps.google.com/?q=Chennai+India+600089"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-[11px] font-mono font-medium backdrop-blur-md border border-white/10 transition-colors shadow-md"
                >
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open in Maps</span>
                </a>

                {/* Showroom Marker Pin */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="relative flex flex-col items-center animate-bounce">
                    <div className="px-3 py-1 rounded-full bg-amber-500 text-black text-[11px] font-bold shadow-lg flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>Fawzaana Showroom</span>
                    </div>
                    <div className="w-2 h-2 bg-amber-500 rotate-45 -mt-1" />
                  </div>
                </div>

                {/* Bottom Address Strip */}
                <div className="absolute bottom-3 left-3 right-3 z-10 p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-white flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-medium truncate">Chennai, Tamil Nadu 600089</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 shrink-0">Open Mon-Sat 9AM-8PM</span>
                </div>
              </div>

              {/* Collections & Instagram Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                    COLLECTIONS WE OFFER
                  </span>
                  <p className="text-xs text-neutral-200 font-medium">
                    Lounge Chairs · 4ft System Tables · Task Seating · Steel Cupboards
                  </p>
                </div>

                <a
                  href="https://www.instagram.com/fawzaana_traders/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all self-start sm:self-center"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>@fawzaana_traders</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Modern Framer Glassmorphic Form */}
          <div className="lg:col-span-6 bg-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-9 border border-white/15 flex flex-col justify-center">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-2">
                  Request Confirmed!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{formData.name}</span>. A senior furniture specialist from our Chennai showroom will contact you on <span className="font-mono text-amber-300">{formData.phone}</span> with catalogs and custom samples.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all"
                  >
                    <MessageSquare className="w-4 h-4" /> Open on WhatsApp Now
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-semibold cursor-pointer transition-all"
                  >
                    Submit Another Query
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs uppercase font-mono text-amber-300 tracking-wider font-semibold">
                    CONSULTATION FORM
                  </span>
                  <span className="text-[11px] text-neutral-400 font-mono">Response within 2 hrs</span>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Smith"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="947 8574 847"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-all font-mono"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Select Solution / Product
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1E1A16] border border-white/20 text-white text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-all"
                  >
                    <option value="" disabled>Select...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Space Details / Custom Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Describe number of seats, room dimensions, or customization preferences..."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-neutral-950 hover:bg-neutral-100 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-xl hover:shadow-2xl cursor-pointer flex items-center justify-center gap-2 group active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Preparing Proposal...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-neutral-900" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-neutral-400 text-center mt-2 font-mono">
                  ✦ Direct showroom dispatch from Chennai 600089 · Free on-site assembly
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
