import React from 'react';
import { 
  Bed, 
  Wifi, 
  Droplets, 
  UtensilsCrossed, 
  ShieldCheck, 
  Shirt, 
  BookOpen, 
  Zap, 
  Bath, 
  HeartHandshake,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { AMENITIES } from '../data/hostelData';

export const AmenitiesSection: React.FC = () => {
  // Icon mapper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bed': return <Bed className="w-6 h-6 text-[#931c51]" />;
      case 'Wifi': return <Wifi className="w-6 h-6 text-[#931c51]" />;
      case 'Droplets': return <Droplets className="w-6 h-6 text-[#931c51]" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-6 h-6 text-[#931c51]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#931c51]" />;
      case 'Shirt': return <Shirt className="w-6 h-6 text-[#931c51]" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-[#931c51]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#931c51]" />;
      case 'Bath': return <Bath className="w-6 h-6 text-[#931c51]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#931c51]" />;
      default: return <Sparkles className="w-6 h-6 text-[#931c51]" />;
    }
  };

  return (
    <section id="amenities" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-[#931c51] font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> All Modern Facilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Everything You Need for a Comfortable, Safe & Homely Stay
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Specially tailored for female students and working professionals preparing for their dreams in Patna.
          </p>
        </div>

        {/* 10 Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {AMENITIES.map((amenity, idx) => (
            <div
              key={amenity.id}
              className="bg-stone-50/70 hover:bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 hover:border-rose-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-rose-100/80 group-hover:bg-[#931c51] group-hover:text-white flex items-center justify-center transition-colors shadow-2xs">
                    <span className="group-hover:text-white transition-colors">
                      {getIcon(amenity.iconName)}
                    </span>
                  </div>
                  {amenity.badge && (
                    <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full">
                      {amenity.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-stone-900 group-hover:text-[#931c51] transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-xs font-semibold text-[#c72c68] mt-0.5">
                  {amenity.subtitle}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-200/70 flex items-center gap-1.5 text-xs text-stone-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>{amenity.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Safety & Comfort Promise Strip */}
        <div className="mt-14 bg-gradient-to-r from-[#931c51] to-[#c72c68] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none flex items-center pr-8">
            <HeartHandshake className="w-72 h-72 text-white" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold text-amber-300 tracking-wider uppercase">Our Commitment to Parents & Students</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] mt-1">
              "Your Comfort • Our Priority"
            </h3>
            <p className="mt-2 text-rose-100 text-sm sm:text-base leading-relaxed">
              We understand sending your daughter away from home requires complete trust. 
              With on-site female wardens, biometric registration, CCTV monitoring, and nourishing home-cooked meals, 
              we ensure she stays secure, happy, and fully focused on her goals.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
              <div className="bg-white/15 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/20">
                ✓ 24x7 Resident Female Warden
              </div>
              <div className="bg-white/15 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/20">
                ✓ High Hygiene Kitchen & RO
              </div>
              <div className="bg-white/15 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/20">
                ✓ Strict Gate Curfew at 8:00 PM
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
