import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/furnitureData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t border-neutral-200/60">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase font-semibold tracking-[0.25em] text-neutral-400 block mb-3">
          WHAT OUR CLIENTS SAY
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212] mb-3">
          Loved By The People Who Sit In Them
        </h2>
        <p className="text-base text-neutral-600">
          From corporate office floors to intimate executive studies, our furniture delivers uncompromised support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-3xl p-8 border border-black/5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* 5 Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed italic">
                "{t.review}"
              </p>
            </div>

            {/* Author */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-3.5">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-neutral-100"
              />
              <div>
                <h4 className="font-semibold text-sm text-neutral-900">
                  {t.name}
                </h4>
                <p className="text-xs text-neutral-500">
                  {t.role} · <span className="text-neutral-700 font-medium">{t.company}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
