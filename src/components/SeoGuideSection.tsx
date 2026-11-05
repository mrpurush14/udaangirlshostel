import React from 'react';
import { 
  Compass, 
  MapPin, 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  Sparkles, 
  HelpCircle, 
  GraduationCap, 
  ArrowRight,
  Phone,
  Building2,
  Globe
} from 'lucide-react';
import { HOSTEL_CONTACT, BRANCHES } from '../data/hostelData';

interface SeoGuideSectionProps {
  onOpenBooking: () => void;
}

export const SeoGuideSection: React.FC<SeoGuideSectionProps> = ({ onOpenBooking }) => {
  const targetKeywords = [
    { label: 'udaan hostels patna', desc: 'Premier student hostels in Patna' },
    { label: 'hostels in patna', desc: 'Top rated student accommodations' },
    { label: 'udaan boys hostels', desc: 'Verified partner network near Boring Rd' },
    { label: 'Udaan Hostel', desc: 'Comfortable living with 3 meals' },
    { label: 'Udaan Girls Hostel', desc: 'Strict security & female warden' },
    { label: 'Udaan Hostel and PG', desc: 'All-inclusive Wi-Fi & power backup' },
    { label: 'Hostel in Patna', desc: 'Safe location near coaching institutes' },
    { label: 'Girls Hostel in Patna', desc: 'Near Atal Path & Boring Road' },
    { label: 'Girls hostel in Patna Boring Road', desc: '2 minutes walk from Allen' },
    { label: 'Boys Hostel in Patna', desc: 'Student guidance & referral desk' },
    { label: 'Hostel for Girls', desc: 'Single, Double, Triple & 4-sharing' },
    { label: 'PG for Girls', desc: 'Homely atmosphere & delicious mess' },
    { label: 'PG for boys', desc: 'Nearby verified PG recommendations' },
    { label: 'Patna Girls Hostel', desc: 'Affordable fees starting from ₹6,000/mo' }
  ];

  const nearbyCoachingHubs = [
    { name: 'Allen Career Institute', dist: '2-3 min walk (180m)', note: 'Closest hostels in Patna to Allen Boring Road' },
    { name: 'Carrier Planner Coaching', dist: '1 min walk (80m)', note: 'Directly opposite Om Enclave branch' },
    { name: 'Patna Women\'s College', dist: '8-10 mins commute', note: 'Quick access via Bailey Road & North SK Puri' },
    { name: 'Aakash Institute Patna', dist: '5 mins walk', note: 'Convenient daily commute for NEET & JEE' },
    { name: 'Atal Path Expressway', dist: 'Direct connectivity', note: 'Fast transport across Patna & Railway Station' },
    { name: 'Boring Road Chauraha', dist: '4 mins walk', note: 'Central student hub with libraries, banks & markets' }
  ];

  return (
    <section id="patna-hostel-guide" className="py-20 bg-stone-100/80 border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#931c51]/10 text-[#931c51] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Official Guide • udaanhostels.online</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 font-['Playfair_Display',serif] tracking-tight">
            Udaan Hostels Patna: Top-Rated Hostels in Patna for Students
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Welcome to <strong>udaanhostels.online</strong> — the most trusted name when searching for <strong>udaan hostels patna</strong>, top-quality <strong>hostels in patna</strong>, premier <strong>Udaan Girls Hostel</strong> living in Boring Road & North SK Puri, or verified assistance for <strong>udaan boys hostels</strong> and boys PG accommodations.
          </p>
        </div>

        {/* 3 Pillars Grid: Why Udaan Ranks #1 Among Hostels in Patna */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-stone-200/80 hover:border-[#931c51]/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#931c51] flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-2">
              Premier Hostels in Patna (Boring Road)
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Searching for <strong>hostels in patna</strong> near Allen, Carrier Planner, or Atal Path? <strong>Udaan Hostels Patna</strong> is located at Om Enclave Boring Road and North SK Puri, eliminating long commute times so students can focus 100% on their competitive exams.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-stone-200/80 hover:border-[#931c51]/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-2">
              Udaan Girls Hostel & PG Safety
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Ranked as Patna's safest girls hostel and PG. Equipped with 24x7 resident female wardens, high-definition CCTV surveillance, biometric security logging, strictly enforced 8:00 PM curfew, and an uncompromising no-male-visitor policy on living floors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-stone-200/80 hover:border-[#931c51]/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-2">
              Transparent Fees Starting ₹6,000/Mo
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Every package at <strong>udaanhostels.online</strong> comes with 3 fresh daily meals (Breakfast, Lunch, Dinner), uninterrupted 100% generator/inverter power backup, high-speed Wi-Fi, automatic laundry machines, and daily room cleaning with zero brokerage.
            </p>
          </div>

        </div>

        {/* Proximity to Key Hubs & Coaching Centers */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
            <div>
              <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#931c51]" />
                <span>Strategic Location for Hostels in Patna (Boring Road Hub)</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Zero travel stress allows students to dedicate maximum time to studies and revision.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 bg-[#931c51] hover:bg-[#7a1341] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>Schedule Guided Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {nearbyCoachingHubs.map((hub, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 hover:bg-rose-50/40 transition-colors">
                <div className="flex items-center justify-between text-xs font-bold text-stone-900">
                  <span>{hub.name}</span>
                  <span className="text-[#931c51] bg-[#931c51]/10 px-2 py-0.5 rounded-full text-[11px] font-semibold">{hub.dist}</span>
                </div>
                <p className="text-[11px] text-stone-500 mt-1.5">{hub.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Section for Udaan Boys Hostels & Boys PG Assistance */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200/90 mb-12">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 flex-shrink-0 mt-0.5">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-base sm:text-lg font-bold text-amber-950">
                  Looking for Udaan Boys Hostels or Boys PG in Patna?
                </h4>
                <span className="bg-amber-200 text-amber-900 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Verified Referral Desk
                </span>
              </div>
              <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                To guarantee 100% privacy and security for female students, our main residential wings at Om Enclave Boring Road and House 22 North SK Puri operate strictly as <strong>Udaan Girls Hostel</strong>. 
              </p>
              <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                However, because hundreds of families visit Patna looking for both <strong>Udaan Girls Hostel</strong> and <strong>Udaan boys hostels</strong> or <strong>Boys Hostel in Patna</strong> near Allen and Carrier Planner, our admissions desk maintains a network of verified, safe, and trusted boys hostel and PG recommendations near Boring Road and Atal Path with quality food and power backup.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a
                  href={`tel:${HOSTEL_CONTACT.primaryPhone}`}
                  className="inline-flex items-center gap-2 bg-amber-900 hover:bg-amber-950 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Admissions for Boys Hostel Guidance ({HOSTEL_CONTACT.primaryPhone})</span>
                </a>
                <span className="text-xs text-amber-800/80">
                  Or inquire via WhatsApp at +91 {HOSTEL_CONTACT.whatsappNumber}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* High-Intent Search Keyword Tags Cloud for SEO Indexing */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Globe className="w-4 h-4 text-[#931c51]" />
            <p className="text-xs font-bold text-stone-700 uppercase tracking-wider">
              Top Trending Google Searches for Udaan Hostels Patna & Student Accommodations
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {targetKeywords.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 bg-stone-100 hover:bg-rose-50 text-stone-800 hover:text-[#931c51] px-3 py-1.5 rounded-full text-xs font-medium border border-stone-200/90 transition-colors"
                title={`${item.label} - ${item.desc}`}
              >
                <Search className="w-3 h-3 text-[#931c51]/60" />
                <span className="font-semibold">{item.label}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
