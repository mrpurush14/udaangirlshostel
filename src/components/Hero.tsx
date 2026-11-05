import React from 'react';
import { ShieldCheck, Sparkles, MapPin, Phone, MessageCircle, CheckCircle2, ChevronRight, Star, Clock, Home } from 'lucide-react';
import { HOSTEL_CONTACT, BRANCHES } from '../data/hostelData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreRooms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreRooms }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/70 via-white to-stone-50 pt-6 pb-16 lg:pt-12 lg:pb-24">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-rose-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust & Official Domain Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-rose-100/80 border border-rose-200 text-[#931c51] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#c72c68]" />
              <span>Official Website: <strong>udaanhostels.online</strong> • Safe Stay & Bright Future</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
              Udaan Hostels Patna •{' '}
              <span className="bg-gradient-to-r from-[#931c51] via-[#c72c68] to-rose-700 bg-clip-text text-transparent">
                Girls' Hostel & PG
              </span>{' '}
              in Boring Road & SK Puri
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience the warmth of home with the discipline and security essential for academic success. 
              Modern spacious rooms, 3-time hygienic food, 24x7 CCTV monitoring, high-speed Wi-Fi, and 100% power backup.
            </p>

            {/* Bullet Proof Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-left">
              {[
                '24x7 CCTV & Warden',
                'Hygienic 3-Time Meals',
                '100% Power Backup',
                'Fiber High-Speed Wi-Fi',
                'Attached Washrooms',
                'Near Allen & Coachings'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs sm:text-sm text-stone-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#931c51] to-[#c72c68] hover:from-[#7e1443] hover:to-[#a91f54] text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all pulse-glow cursor-pointer"
              >
                <span>Book Room / Schedule Visit</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <a
                href={`https://wa.me/${HOSTEL_CONTACT.whatsappNumber}?text=Hello%20Udaan%20Girls%20Hostel%2C%20I%20am%20looking%20for%20hostel%20accommodation%20in%20Patna.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-100 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${HOSTEL_CONTACT.primaryPhone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold text-base px-5 py-3.5 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-[#931c51]" />
                <span>Call: {HOSTEL_CONTACT.primaryPhone}</span>
              </a>
            </div>

            {/* Quick Branches Location Pill */}
            <div className="pt-4 border-t border-stone-200/80">
              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                Our 2 Convenient Locations in Patna:
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href="#branches"
                  className="flex items-center gap-2 bg-white border border-rose-200/90 rounded-lg px-3 py-2 text-xs text-stone-800 hover:border-[#931c51] transition-colors shadow-2xs"
                >
                  <MapPin className="w-4 h-4 text-[#931c51] flex-shrink-0" />
                  <span className="font-semibold text-stone-900">Branch 1:</span>
                  <span className="truncate">Om Enclave, Atal Path, Boring Road</span>
                </a>
                <a
                  href="#branches"
                  className="flex items-center gap-2 bg-white border border-rose-200/90 rounded-lg px-3 py-2 text-xs text-stone-800 hover:border-[#931c51] transition-colors shadow-2xs"
                >
                  <MapPin className="w-4 h-4 text-[#c72c68] flex-shrink-0" />
                  <span className="font-semibold text-stone-900">Branch 2:</span>
                  <span className="truncate">House 22, North SK Puri (near Rahul Nursing Home)</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card with Banner & Trust Highlights */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#931c51] to-amber-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              {/* Card Container */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200/80">
                
                {/* Banner Image Display */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-stone-900">
                  <img
                    src="/assets/aistudio/hostel_banner_bd5711c2.jpeg"
                    alt="Udaan Girls' Hostel Om Enclave Building"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Badge on Banner */}
                  <div className="absolute top-3 left-3 bg-[#931c51]/95 text-white backdrop-blur-xs text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5 text-amber-300" />
                    <span>Om Enclave • Boring Road</span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-white/95 text-stone-900 backdrop-blur-xs text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>4.9 / 5.0 Rating</span>
                  </div>
                </div>

                {/* Card Lower Section: Quick Highlights */}
                <div className="p-5 bg-gradient-to-b from-white to-rose-50/40">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                    <div className="flex items-center gap-3">
                      <img
                        src="/assets/aistudio/hostel_logo_d4e3810a.jpeg"
                        alt="Logo"
                        className="w-10 h-10 rounded-full border border-amber-400 object-cover"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-stone-900 leading-tight">Udaan Girls' Hostel</h4>
                        <p className="text-[11px] text-[#931c51] font-semibold">Safe • Comfortable • Homely</p>
                      </div>
                    </div>
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-md">
                      Verified
                    </span>
                  </div>

                  {/* 3 Metric Pills */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-3">
                    <div className="bg-white p-2.5 rounded-xl border border-stone-100 shadow-2xs">
                      <div className="text-base font-extrabold text-[#931c51]">2</div>
                      <div className="text-[10px] text-stone-500 font-medium leading-tight">Branches in Patna</div>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-stone-100 shadow-2xs">
                      <div className="text-base font-extrabold text-emerald-600">3 Times</div>
                      <div className="text-[10px] text-stone-500 font-medium leading-tight">Homely Meals</div>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-stone-100 shadow-2xs">
                      <div className="text-base font-extrabold text-amber-600">24x7</div>
                      <div className="text-[10px] text-stone-500 font-medium leading-tight">Warden & CCTV</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>Curfew: <strong className="text-stone-800">8:00 PM</strong></span>
                    </div>
                    <button
                      onClick={onExploreRooms}
                      className="text-[#931c51] font-bold hover:underline inline-flex items-center gap-0.5"
                    >
                      View Rooms & Fees <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
