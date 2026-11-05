import React from 'react';
import { MapPin, Navigation, BookOpen, GraduationCap, Train, ShoppingBag } from 'lucide-react';
import { NEARBY_LANDMARKS } from '../data/hostelData';

export const NearbyLandmarks: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Coaching': return <GraduationCap className="w-5 h-5 text-[#931c51]" />;
      case 'College': return <BookOpen className="w-5 h-5 text-indigo-600" />;
      case 'Transport': return <Train className="w-5 h-5 text-emerald-600" />;
      case 'Market': return <ShoppingBag className="w-5 h-5 text-amber-600" />;
      default: return <Navigation className="w-5 h-5 text-stone-600" />;
    }
  };

  return (
    <section className="py-14 bg-white border-t border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#931c51] mb-1">
              <MapPin className="w-3.5 h-3.5" /> Walking Distance Location Advantage
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-['Playfair_Display',serif]">
              Save 2+ Hours Daily on Commute
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
              Located right in the student epicenter of Boring Road and SK Puri, so you spend your valuable energy studying instead of stuck in traffic.
            </p>
          </div>

          <div className="bg-rose-50 border border-rose-200/80 rounded-xl px-4 py-2.5 text-xs text-stone-700">
            <span className="font-bold text-[#931c51]">Atal Path Advantage:</span> 1-minute access to signal-free expressway connecting whole Patna.
          </div>
        </div>

        {/* Landmarks Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {NEARBY_LANDMARKS.map((landmark, idx) => (
            <div
              key={idx}
              className="bg-stone-50 hover:bg-rose-50/50 p-4 rounded-xl border border-stone-200/80 hover:border-rose-200 transition-colors flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-white shadow-2xs flex items-center justify-center flex-shrink-0">
                {getIcon(landmark.category)}
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                  {landmark.name}
                </h4>
                <p className="text-[11px] font-extrabold text-[#c72c68]">
                  {landmark.distance}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
