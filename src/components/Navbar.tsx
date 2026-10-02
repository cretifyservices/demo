import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { FawzaanaLogo } from './FawzaanaLogo';

export const Navbar: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Category', href: '#categories' },
    { name: 'Products', href: '#products' },
    { name: 'Spaces', href: '#spaces' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Consultation', href: '#consultation' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 pt-4 transition-all duration-300 pointer-events-none">
        <div
          className={`max-w-6xl mx-auto rounded-full transition-all duration-300 pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-lg border border-black/10'
              : 'bg-white/85 backdrop-blur-sm border border-black/5 shadow-xs'
          }`}
        >
          {/* Zone 1: Brand Wordmark with Authentic Gold Circular Crest */}
          <a
            href="/"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <FawzaanaLogo size={36} />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-[0.2em] text-[#121212] uppercase leading-none">
                FAWZAANA
              </span>
              <span className="text-[9px] font-mono tracking-widest text-amber-800 uppercase font-semibold">
                TRADERS · CHENNAI
              </span>
            </div>
          </a>

          {/* Zone 2: Clean text navigation links (Team removed) */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-neutral-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-neutral-950 transition-colors relative py-1 text-neutral-700"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Chennai Hub Contact */}
            <a
              href="https://wa.me/919478574847?text=Hello%20Fawzaana%20Traders,%20I%20am%20interested%20in%20office%20furniture."
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-xs text-neutral-600 hover:text-black font-medium px-3 py-1.5 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>Chennai Hub</span>
            </a>

            {/* Shopping Bag Button with Live Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-1 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200/80 rounded-full transition-all cursor-pointer shrink-0"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-neutral-800" />
              <span className="hidden sm:inline">Cart</span>
              <span className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full bg-[#121212] text-white text-[9px] sm:text-[10px] font-mono tabular-nums">
                {totalItems}
              </span>
            </button>

            {/* Get Quote / Order CTA - Hidden on mobile screens to prevent capsule overflow */}
            <a
              href="#consultation"
              onClick={(e) => scrollToSection(e, '#consultation')}
              className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold text-white bg-[#121212] hover:bg-neutral-800 rounded-full transition-all whitespace-nowrap shadow-xs hover:shadow-sm"
            >
              Get It Now
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-neutral-700 hover:text-black rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-black/10 shadow-lg pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-medium text-neutral-700 hover:text-black py-2 border-b border-neutral-100"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#consultation"
                onClick={(e) => scrollToSection(e, '#consultation')}
                className="mt-2 text-center py-2.5 bg-[#121212] text-white text-xs font-semibold rounded-full"
              >
                Request Custom Quotation
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
