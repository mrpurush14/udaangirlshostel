import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/hostelData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-[#931c51] font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-[#931c51]" /> Genuine Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Trusted by Hundreds of Students & Parents
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Hear from our proud residents preparing for medical, engineering, civil services, and college degrees in Patna.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-rose-200 flex-shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-[#931c51] font-semibold truncate">
                    {t.role}
                  </p>
                  <p className="text-[10px] text-stone-500 truncate">
                    {t.branch}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Parent Trust Badge */}
        <div className="mt-12 text-center text-xs text-stone-500 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Verified resident reviews recorded during 2024-2026 academic sessions</span>
        </div>

      </div>
    </section>
  );
};
