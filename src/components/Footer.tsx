import React from 'react';
import { ArrowUp, Instagram, Phone, Mail } from 'lucide-react';
import { FawzaanaLogo } from './FawzaanaLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#100F0D] text-white pt-20 pb-12 px-4 md:px-8 border-t border-neutral-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          
          {/* Left Brand & Direct Contact */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <FawzaanaLogo size={48} />
                <div>
                  <h3 className="font-display font-extrabold text-xl tracking-[0.2em] text-white uppercase leading-none">
                    FAWZAANA TRADERS
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest text-amber-500 uppercase font-semibold">
                    OFFICE FURNITURE SOLUTIONS
                  </span>
                </div>
              </div>

              <span className="text-xs uppercase font-mono tracking-widest text-neutral-400 block mb-2">
                CALL US / DIRECT WORKSHOP
              </span>
              <a
                href="tel:+919478574847"
                className="text-xs font-mono text-neutral-300 block mb-2 hover:text-white transition-colors"
              >
                +91 94785 74847 / +91 98400 12345
              </a>
              <a
                href="mailto:contact@fawzaanatraders.com"
                className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white hover:text-amber-300 transition-colors uppercase"
              >
                HELLO@FAWZAANA.COM
              </a>
            </div>

            <div className="mt-8 text-xs text-neutral-400 max-w-sm leading-relaxed">
              <span className="text-white font-semibold block mb-1">FAWZAANA TRADERS SHOWROOM</span>
              Manufacturing Unit & Flagship Showroom · Chennai, Tamil Nadu 600089. <br />
              Specializing in custom table, chair, cupboard, showcase (new & refurbished). Smart spaces, strong impact.
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-6 grid grid-cols-3 gap-6">
            
            {/* Column 1: Main Links */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-4">
                Explore
              </span>
              <ul className="space-y-2.5 text-xs text-neutral-300">
                <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#categories" className="hover:text-white transition-colors">Categories</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#spaces" className="hover:text-white transition-colors">Spaces</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Column 2: Legal & Assurance */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-4">
                Assurance
              </span>
              <ul className="space-y-2.5 text-xs text-neutral-300">
                <li><a href="#faq" className="hover:text-white transition-colors">Warranty Terms</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">7-Step Refurbishment</a></li>
                <li><a href="#consultation" className="hover:text-white transition-colors">Bulk Office Quote</a></li>
                <li><a href="#consultation" className="hover:text-white transition-colors">Custom Woodwork</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Column 3: Social & Channels */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-4">
                Connect
              </span>
              <ul className="space-y-2.5 text-xs text-neutral-300">
                <li>
                  <a
                    href="https://www.instagram.com/fawzaana_traders/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber-300 flex items-center gap-1.5 transition-colors font-medium"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-400" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919478574847"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
                  >
                    <span>WhatsApp Desk</span>
                  </a>
                </li>
                <li>
                  <a href="#consultation" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#consultation" className="hover:text-white transition-colors">
                    X.Com
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Line with Back-to-Top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} FAWZAANA TRADERS. Office Furniture Solutions. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Large Aesthetic Watermark Typography */}
        <div className="mt-12 pt-6 select-none pointer-events-none opacity-10 text-center">
          <span className="font-display font-extrabold text-[12vw] sm:text-[14vw] tracking-tighter leading-none block uppercase text-white">
            FAWZAANA
          </span>
        </div>

      </div>
    </footer>
  );
};
