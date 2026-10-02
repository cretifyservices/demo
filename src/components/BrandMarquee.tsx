import React from 'react';

export const BrandMarquee: React.FC = () => {
  const brands = [
    { name: 'ARCHI STUDIO', font: 'font-display tracking-[0.25em]' },
    { name: 'IPSUM CORP', font: 'font-mono tracking-[0.18em]' },
    { name: 'LOOO SPACES', font: 'font-display font-light tracking-[0.3em]' },
    { name: 'MODUS WORKPLACE', font: 'tracking-[0.2em] font-semibold' },
    { name: 'AETHEL DESIGNS', font: 'font-display italic tracking-[0.15em]' },
    { name: 'VELOCE INTERIORS', font: 'font-mono tracking-[0.25em]' },
    { name: 'STUDIO FORMA', font: 'font-display font-bold tracking-[0.3em]' },
    { name: 'KAVITA ARCHITECTURE', font: 'tracking-[0.2em]' }
  ];

  return (
    <section className="py-8 border-y border-neutral-200/60 bg-[#F7F7F4] overflow-hidden select-none">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-14 md:gap-20 text-neutral-400 text-sm md:text-base font-medium">
          {brands.concat(brands).map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center gap-4 hover:text-neutral-900 transition-colors cursor-default whitespace-nowrap"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-300"></div>
              <span className={`text-neutral-500 hover:text-neutral-900 transition-colors uppercase ${brand.font}`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
