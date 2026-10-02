import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, HelpCircle, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { FAQS } from '../data/furnitureData';
import heroChairImg from '../assets/images/hero_executive_chair_1790965965047.jpg';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const tags = [
    { id: 'all', label: 'All Queries' },
    { id: 'custom', label: 'Customization' },
    { id: 'refurb', label: 'Refurbished Grade' },
    { id: 'delivery', label: 'Chennai Delivery' }
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedTag === 'custom') return matchesSearch && (faq.id === 'faq-2' || faq.id === 'faq-3');
    if (selectedTag === 'refurb') return matchesSearch && (faq.id === 'faq-1' || faq.id === 'faq-4');
    if (selectedTag === 'delivery') return matchesSearch && (faq.id === 'faq-5');
    return matchesSearch;
  });

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t border-neutral-200/60">
      {/* Container with warm architectural gradient & subtle glass styling */}
      <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#1E1C19] via-[#24211D] to-[#151412] text-white p-6 sm:p-10 md:p-16 shadow-2xl border border-white/10">
        
        {/* Ambient atmospheric backdrop */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-800/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-[11px] font-mono uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3 h-3" />
            <span>CLARITY & ASSURANCE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Everything you need to know about custom office solutions, our 7-stage restoration protocol, and rapid showroom dispatches in Chennai.
          </p>

          {/* Search and Category Filters */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. warranty, delivery, dimensions)..."
                className="w-full pl-9 pr-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-xs text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-amber-400/80 transition-all"
              />
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => setSelectedTag(tag.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedTag === tag.id
                      ? 'bg-white text-neutral-950 shadow-md scale-102'
                      : 'bg-white/10 text-neutral-300 hover:bg-white/15'
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Accordion List */}
          <div className="lg:col-span-8 flex flex-col gap-3.5">
            {filteredFaqs.length === 0 ? (
              <div className="p-8 text-center rounded-2xl bg-white/5 border border-white/10">
                <HelpCircle className="w-8 h-8 text-neutral-500 mx-auto mb-2" />
                <p className="text-sm text-neutral-300">No matching questions found.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedTag('all'); }}
                  className="mt-3 text-xs text-amber-300 underline underline-offset-4"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    layout
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen
                        ? 'bg-white/12 border-amber-500/40 shadow-lg'
                        : 'bg-white/6 hover:bg-white/10 border-white/10'
                    }`}
                  >
                    <button
                      onClick={() => toggle(faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-xs font-mono font-bold text-amber-400/80">
                          0{index + 1}
                        </span>
                        <span className="font-semibold text-sm sm:text-base text-white">
                          {faq.question}
                        </span>
                      </div>
                      
                      {/* Animated rotation toggle */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? 'bg-amber-500 text-black' : 'bg-white/15 text-white'
                        }`}
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/10">
                            {faq.answer}
                            
                            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-amber-300/80 font-mono">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Verified by Fawzaana Technical Team</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </div>

          {/* Right Column: Support Card */}
          <div className="lg:col-span-4 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl p-6 sm:p-7 border border-white/15 backdrop-blur-md flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mb-4 text-amber-400">
                <MessageSquare className="w-6 h-6" />
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Have a unique floor plan or bulk requirement?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                Our Chennai workshop engineers customized 4ft system table setups, cable management runs, and ergonomic seating batches for offices across South India.
              </p>

              <div className="space-y-2.5 text-xs text-neutral-300 border-t border-white/10 pt-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Direct Chennai Showroom Desk</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Instant Proforma Quotes via WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Custom Wood & Mesh Samples Sent Free</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919478574847?text=Hello%20Fawzaana%20Traders,%20I%20have%20an%20inquiry%20regarding%20custom%20office%20furniture."
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider text-center transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
