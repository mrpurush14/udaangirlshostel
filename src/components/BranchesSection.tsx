import React from 'react';
import { MapPin, Phone, MessageCircle, ExternalLink, Navigation, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { BRANCHES, HOSTEL_CONTACT } from '../data/hostelData';

interface BranchesSectionProps {
  onSelectBranch: (branchId: string) => void;
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({ onSelectBranch }) => {
  return (
    <section id="branches" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-[#931c51] font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <Building className="w-3.5 h-3.5" /> Prime Patna Locations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Our Two Strategic Branches in Patna
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Situated in Patna's safest and most accessible educational hubs, just minutes from leading coaching institutes, colleges, and transportation.
          </p>
        </div>

        {/* 2 Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {BRANCHES.map((branch, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={branch.id}
                className="bg-stone-50/80 rounded-3xl border border-stone-200/90 overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col group"
              >
                {/* Branch Header Image Banner */}
                <div className="relative h-64 overflow-hidden bg-stone-800">
                  <img
                    src={branch.featuredImg}
                    alt={branch.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/30 to-transparent" />
                  
                  {/* Branch Tag */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#931c51] to-[#c72c68] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow">
                    {isFirst ? '★ 1st Branch (Boring Road)' : '★ 2nd Branch (SK Puri)'}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight font-['Playfair_Display',serif]">
                      {branch.shortName}
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-200 font-medium flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{branch.landmark}</span>
                    </p>
                  </div>
                </div>

                {/* Branch Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Address Box */}
                  <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs space-y-2">
                    <div className="text-xs font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5 text-[#931c51]" /> Exact Address
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-stone-900 leading-snug">
                      {branch.address}
                    </p>
                    <p className="text-xs text-stone-500 font-medium">
                      {branch.city}
                    </p>
                  </div>

                  {/* Location Advantages */}
                  <div>
                    <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2.5">
                      Location Highlights:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                      {branch.nearbyHighlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Numbers for this branch */}
                  <div className="pt-2 border-t border-stone-200">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                      <div>
                        <span className="text-stone-500 text-xs block">Admissions & Inquiries:</span>
                        <div className="flex items-center gap-3 mt-1">
                          <a
                            href={`tel:${branch.phone1}`}
                            className="font-bold text-[#931c51] hover:underline flex items-center gap-1"
                          >
                            <Phone className="w-3.5 h-3.5" /> {branch.phone1}
                          </a>
                          <span className="text-stone-300">|</span>
                          <a
                            href={`tel:${branch.phone2}`}
                            className="font-bold text-[#931c51] hover:underline flex items-center gap-1"
                          >
                            <Phone className="w-3.5 h-3.5" /> {branch.phone2}
                          </a>
                        </div>
                      </div>

                      <a
                        href={branch.googleMapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 bg-white border border-stone-300 px-3 py-1.5 rounded-lg hover:border-[#931c51] hover:text-[#931c51] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Google Maps</span>
                      </a>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => onSelectBranch(branch.id)}
                      className="w-full flex items-center justify-center gap-2 bg-[#931c51] hover:bg-[#7a1341] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      <span>Inquire / Book Here</span>
                    </button>

                    <a
                      href={`https://wa.me/${branch.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20visiting%20the%20${encodeURIComponent(branch.shortName)}%20of%20Udaan%20Girls%20Hostel.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl shadow transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                      <span>WhatsApp Branch</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
