import React from 'react';
import { ShieldCheck, Clock, Users, UserX, AlertCircle, PhoneCall, HeartPulse, Lock } from 'lucide-react';
import { HOSTEL_CONTACT } from '../data/hostelData';

export const SafetyRulesSection: React.FC = () => {
  return (
    <section id="safety" className="py-16 md:py-24 bg-stone-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-[#931c51] font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> Zero Compromise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Safety, Security & Hostel Guidelines
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            A disciplined, nurturing atmosphere where daughters are safe and parents can sleep in peace.
          </p>
        </div>

        {/* 6 Key Rules & Safety Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Rule 1: Curfew */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-[#931c51] flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                8:00 PM Strict Gate Closing
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                All residents must report inside the hostel by 8:00 PM. In cases of late coaching test series, advance written notice or direct phone confirmation from parents is required.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-[#931c51]">
              Strictly enforced for safety
            </div>
          </div>

          {/* Rule 2: Female Warden */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                On-Site Resident Female Warden
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                A caring, experienced female warden lives inside the premises 24x7. She manages daily rolls, attends to any health needs, and acts as a motherly guide.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-purple-700">
              Motherly care & 24x7 support
            </div>
          </div>

          {/* Rule 3: 24x7 CCTV */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                24x7 CCTV & Biometric Logs
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Continuous high-definition camera surveillance at building gates, receptions, corridors, and exits. Digital entry and exit time logging for all residents.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-amber-800">
              Complete boundary surveillance
            </div>
          </div>

          {/* Rule 4: Visitor Policy */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center mb-4">
                <UserX className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                Strict Visitor Policy
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                To guarantee resident privacy and comfort, male visitors (including male relatives) are strictly forbidden from resident floors. Meetings occur solely in the ground floor visitor lounge.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-rose-700">
              100% Female-only resident floors
            </div>
          </div>

          {/* Rule 5: Medical Care */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                Medical & Doctor on Call
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Fully stocked first-aid kits on every floor, blood pressure/fever monitoring, and immediate proximity to Rahul Nursing Home and doctor-on-call for emergencies.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-emerald-700">
              Rapid medical assistance
            </div>
          </div>

          {/* Rule 6: Parent Direct Line */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-4">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                Direct Parent Contact
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Parents are provided direct mobile access to the hostel manager and resident warden (+91 6209332827 / 9931752501). Periodic updates and open communication always.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-sky-700">
              Direct hotline for parents
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
