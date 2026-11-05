import React from 'react';
import { Phone, MessageCircle, Calendar, MapPin } from 'lucide-react';
import { HOSTEL_CONTACT } from '../data/hostelData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5 items-center text-center">
        
        {/* Call Button */}
        <a
          href={`tel:${HOSTEL_CONTACT.primaryPhone}`}
          className="flex flex-col items-center justify-center p-1.5 text-stone-700 hover:text-[#931c51] active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-[#931c51] mb-0.5">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${HOSTEL_CONTACT.whatsappNumber}?text=Hello%20Udaan%20Girls%20Hostel%2C%20I%20am%20interested%20in%20room%20availability`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 text-stone-700 hover:text-emerald-600 active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-0.5">
            <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-100" />
          </div>
          <span className="text-[10px] font-bold text-emerald-700">WhatsApp</span>
        </a>

        {/* Branches */}
        <a
          href="#branches"
          className="flex flex-col items-center justify-center p-1.5 text-stone-700 hover:text-[#931c51] active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 mb-0.5">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold">Branches</span>
        </a>

        {/* Book Room CTA */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center p-1.5 bg-[#931c51] text-white rounded-xl shadow-md active:scale-95 transition-transform cursor-pointer"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-amber-300" />
          <span className="text-[10px] font-extrabold tracking-wide">Book Visit</span>
        </button>

      </div>
    </div>
  );
};
