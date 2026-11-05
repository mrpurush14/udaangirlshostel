import React, { useState } from 'react';
import { 
  Bed, 
  Users, 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Flame, 
  Clock, 
  AlertTriangle, 
  TrendingUp,
  Eye
} from 'lucide-react';
import { ROOMS } from '../data/hostelData';

interface RoomsSectionProps {
  onBookRoom: (roomType?: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onBookRoom }) => {
  const [filterType, setFilterType] = useState<'all' | 'single' | 'double' | 'triple' | 'four'>('all');

  const filteredRooms = ROOMS.filter((room) => {
    if (filterType === 'all') return true;
    if (filterType === 'single') return room.id.includes('single');
    if (filterType === 'double') return room.id.includes('double');
    if (filterType === 'triple') return room.id.includes('triple');
    if (filterType === 'four') return room.id.includes('four');
    return true;
  });

  const getStatusBadge = (status: string, label: string) => {
    switch (status) {
      case 'filling-fast':
        return (
          <span className="bg-red-600/95 text-white font-extrabold text-[11px] sm:text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-xs border border-red-400/40 animate-pulse">
            <Flame className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>{label}</span>
          </span>
        );
      case 'limited':
        return (
          <span className="bg-amber-500/95 text-stone-950 font-extrabold text-[11px] sm:text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-xs border border-amber-300/60">
            <AlertTriangle className="w-3.5 h-3.5 text-stone-950" />
            <span>{label}</span>
          </span>
        );
      case 'few-beds-left':
        return (
          <span className="bg-[#931c51]/95 text-white font-extrabold text-[11px] sm:text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-xs border border-rose-300/40">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>{label}</span>
          </span>
        );
      default:
        return (
          <span className="bg-emerald-600/95 text-white font-bold text-[11px] sm:text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
            <span>Available</span>
          </span>
        );
    }
  };

  return (
    <section id="rooms" className="py-16 md:py-24 bg-stone-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Real-Time Urgency Notification Banner */}
        <div className="mb-10 max-w-4xl mx-auto bg-gradient-to-r from-red-600 via-[#931c51] to-[#c72c68] text-white rounded-2xl p-3.5 sm:p-4 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
            </span>
            <div className="text-xs sm:text-sm font-semibold">
              <span className="font-extrabold uppercase tracking-wide text-amber-300 mr-2">Live Availability:</span>
              <span>88% Capacity Reserved for 2026 Batch across Boring Road & SK Puri.</span>
            </div>
          </div>
          <button
            onClick={() => onBookRoom()}
            className="whitespace-nowrap bg-white text-[#931c51] hover:bg-rose-50 text-xs font-extrabold px-3.5 py-1.5 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Lock Your Bed Now →
          </button>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-[#931c51] font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <Bed className="w-3.5 h-3.5" /> Accommodations & Sharing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Thoughtfully Designed Rooms for Every Need
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Every room includes 3-time fresh homely meals, high-speed fiber Wi-Fi, 100% generator/inverter power backup, attached sanitized washroom, and daily cleaning.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Room Types' },
              { id: 'single', label: 'Single Occupancy' },
              { id: 'double', label: 'Double Sharing' },
              { id: 'triple', label: 'Triple Sharing' },
              { id: 'four', label: '4-Sharing Economical' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filterType === tab.id
                    ? 'bg-[#931c51] text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredRooms.map((room) => {
            return (
              <div
                key={room.id}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                  room.isPopular
                    ? 'border-[#c72c68] shadow-xl ring-2 ring-[#c72c68]/20'
                    : 'border-stone-200 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Room Top Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-900">
                  <img
                    src={room.image}
                    alt={room.type}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Top Badges: Occupancy + Real-Time Urgency Status */}
                  <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-stone-900/85 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-amber-300" />
                        {room.occupancyName}
                      </span>
                      {room.isPopular && (
                        <span className="bg-gradient-to-r from-amber-500 to-rose-600 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" /> High Demand
                        </span>
                      )}
                    </div>

                    {/* Real-Time Urgency Badge */}
                    {getStatusBadge(room.availabilityStatus, room.availabilityLabel)}
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-xl shadow-md text-right border border-stone-100">
                    <span className="text-xs text-stone-500 font-medium block">Starting from</span>
                    <span className="text-lg font-extrabold text-[#931c51]">{room.startingPrice}</span>
                  </div>
                </div>

                {/* Room Info */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-stone-900 font-['Playfair_Display',serif]">
                        {room.type}
                      </h3>
                      <span className="text-xs bg-rose-50 text-[#931c51] font-semibold px-2.5 py-1 rounded-md border border-rose-100">
                        {room.tag}
                      </span>
                    </div>

                    {/* Occupancy Status Progress Bar */}
                    <div className="mt-3.5 p-3 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-stone-700 flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5 text-red-600" />
                          <span>Admission Status:</span>
                        </span>
                        <span className="font-extrabold text-red-600">
                          {room.occupancyPercent}% Booked • Only {room.bedsLeft} Beds Left
                        </span>
                      </div>
                      <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-amber-500 via-rose-500 to-red-600 h-full rounded-full transition-all duration-1000"
                          style={{ width: `${room.occupancyPercent}%` }}
                        />
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-4 space-y-2">
                      <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                        Room Inclusions:
                      </h4>
                      <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-stone-700">
                        {room.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Included tags */}
                    <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap gap-1.5">
                      {room.amenitiesIncluded.map((badge, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium bg-stone-100 text-stone-700 px-2.5 py-1 rounded-md"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing footer, Urgency activity & CTA */}
                  <div className="pt-4 border-t border-stone-100 space-y-3">
                    
                    {/* Social Proof Activity */}
                    {room.recentActivity && (
                      <div className="text-[11px] font-semibold text-rose-900 bg-rose-50 border border-rose-200/80 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                        <span>{room.recentActivity}</span>
                      </div>
                    )}

                    <div className="flex items-baseline justify-between text-xs text-stone-500">
                      <span>{room.priceNote}</span>
                      <span className="text-emerald-700 font-semibold">Zero Brokerage • Direct Admissions</span>
                    </div>

                    <button
                      onClick={() => onBookRoom(room.type)}
                      className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                        room.isPopular
                          ? 'bg-gradient-to-r from-[#931c51] to-[#c72c68] hover:from-[#7e1443] hover:to-[#a91f54] text-white shadow-md hover:shadow-lg pulse-glow'
                          : 'bg-stone-900 hover:bg-stone-800 text-white shadow'
                      }`}
                    >
                      <span>Inquire / Lock This Room ({room.bedsLeft} Left)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* All-Inclusive Note Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-rose-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-[#931c51] flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-stone-900">
                100% Transparent Fee Policy • No Hidden Charges
              </h4>
              <p className="text-xs sm:text-sm text-stone-600">
                All fees include 3 meals/day, high-speed Wi-Fi, electricity backup, laundry machine access, and daily room cleaning.
              </p>
            </div>
          </div>
          <button
            onClick={() => onBookRoom('Custom Inquiry')}
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
          >
            Ask for Custom Sharing or AC Rates
          </button>
        </div>

      </div>
    </section>
  );
};
