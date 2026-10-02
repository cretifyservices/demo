import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface StatItem {
  label: string;
  target: number;
  suffix: string;
  decimals?: number;
}

export const StatsCounter: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    { label: 'Client served', target: 10000, suffix: '+' },
    { label: 'Awards won', target: 14, suffix: '+' },
    { label: 'Project rating', target: 4.9, suffix: '', decimals: 1 },
    { label: 'Projects completed', target: 2800, suffix: '+' },
    { label: 'Years of experience', target: 20, suffix: '+' }
  ];

  const [currentValues, setCurrentValues] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const duration = 1800; // ms

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCurrentValues(
              stats.map((s) => Number((s.target * easeProgress).toFixed(s.decimals ? 1 : 0)))
            );

            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToConsultation = () => {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Top Banner statement matching video 00:14 - 00:16 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16 md:mb-24">
        {/* Left vertical subtitle */}
        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 max-w-[180px] leading-relaxed">
            MADE WITH NATURAL & HIGH-GRADE MATERIALS
          </p>
        </div>

        {/* Right expansive headline and buttons */}
        <div className="md:col-span-9 flex flex-col items-start">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#121212] tracking-tight leading-[1.15] text-balance">
            Designed For Workspaces That Feel Like Home. Trusted by architects, enterprises, and creators across India.
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={scrollToProducts}
              className="px-6 py-3 bg-[#121212] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={scrollToConsultation}
              className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200/80 text-neutral-900 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer"
            >
              Custom Fitting
            </button>
          </div>
        </div>
      </div>

      {/* 5-Column Stats Grid with vertical hairline dividers matching video 00:17 - 00:23 */}
      <div className="grid grid-cols-2 md:grid-cols-5 border-t border-neutral-200/80 pt-10 gap-8 md:gap-0">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col justify-between py-2 md:px-6 ${
              idx > 0 ? 'md:border-l md:border-neutral-200/80' : ''
            }`}
          >
            <span className="text-xs text-neutral-500 font-medium mb-3">
              {stat.label}
            </span>
            <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212] font-mono tabular-nums">
              {stat.decimals
                ? currentValues[idx].toFixed(1)
                : currentValues[idx].toLocaleString()}
              {stat.suffix}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
