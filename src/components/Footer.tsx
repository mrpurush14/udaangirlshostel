import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, ShieldCheck, Heart, Facebook, Instagram } from 'lucide-react';
import { HOSTEL_CONTACT, BRANCHES } from '../data/hostelData';

interface FooterProps {
  onOpenHostingerGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-24 md:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/hostel_logo_d4e3810a.jpeg"
                alt="Udaan Girls Hostel Logo"
                className="w-14 h-14 rounded-full border-2 border-amber-400 object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-white font-['Playfair_Display',serif]">
                  Udaan Girls' Hostel
                </h3>
                <p className="text-xs text-amber-300 font-semibold">
                  Safe Stay • Bright Future
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Patna's premier girls hostel located in prime Boring Road and North SK Puri. 
              Providing high-speed Wi-Fi, 3-time hygienic homely meals, 24x7 CCTV monitoring, 100% power backup, 
              and a peaceful study environment for students and working women.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2 text-stone-400">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Visiting Hours: 9:00 AM – 7:30 PM (Daily)</span>
              </div>
              <div className="flex items-center gap-2 text-rose-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>Gate Curfew: 8:00 PM (Strict safety protocol)</span>
              </div>
            </div>

            {/* Social Follow Links */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={HOSTEL_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#1877F2]/90 hover:bg-[#1877F2] text-white px-3 py-1.5 rounded-xl text-xs font-semibold transition-all hover:scale-105 shadow-xs"
                title="Follow on Facebook"
              >
                <Facebook className="w-3.5 h-3.5 fill-current" />
                <span>Facebook</span>
              </a>
              <a
                href={HOSTEL_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white px-3 py-1.5 rounded-xl text-xs font-semibold transition-all hover:scale-105 shadow-xs"
                title="Follow on Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#rooms" className="text-stone-400 hover:text-white transition-colors">
                  Rooms & Sharing
                </a>
              </li>
              <li>
                <a href="#virtual-tour" className="text-stone-400 hover:text-white transition-colors">
                  360° Virtual Tour
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-stone-400 hover:text-white transition-colors">
                  Hostel Amenities
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-stone-400 hover:text-white transition-colors">
                  Photo Tour
                </a>
              </li>
              <li>
                <a href="#food-menu" className="text-stone-400 hover:text-white transition-colors">
                  Weekly Mess Menu
                </a>
              </li>
              <li>
                <a href="#branches" className="text-stone-400 hover:text-white transition-colors">
                  Branches & Map
                </a>
              </li>
              <li>
                <a href="#safety" className="text-stone-400 hover:text-white transition-colors">
                  Safety & Rules
                </a>
              </li>
              <li>
                <a href="#faq" className="text-stone-400 hover:text-white transition-colors">
                  Common FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-stone-400 hover:text-white transition-colors">
                  Book Room
                </a>
              </li>
            </ul>
          </div>

          {/* Branch 1 Address Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#c72c68]" /> 1st Branch (Boring Road)
            </h4>
            <div className="bg-stone-900/90 p-4 rounded-2xl border border-stone-800 text-xs space-y-2 text-stone-300">
              <p className="font-semibold text-white">
                Om Enclave, near Carrier Planner, Atal Path, Shivpuri, Boring Road, Patna - 800001
              </p>
              <p className="text-[11px] text-amber-200">
                Landmark: Near Carrier Planner & Atal Path
              </p>
              <div className="pt-2 border-t border-stone-800 space-y-1">
                <div>
                  <span className="text-stone-500">Phone: </span>
                  <a href={`tel:${BRANCHES[0].phone1}`} className="text-amber-300 font-bold hover:underline">
                    {BRANCHES[0].phone1}
                  </a>
                  {' / '}
                  <a href={`tel:${BRANCHES[0].phone2}`} className="text-amber-300 font-bold hover:underline">
                    {BRANCHES[0].phone2}
                  </a>
                </div>
                <div className="pt-1">
                  <a
                    href={BRANCHES[0].googleMapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 hover:underline text-[11px]"
                  >
                    <span>📍 Get Directions on Google Maps →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Branch 2 Address Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-400" /> 2nd Branch (SK Puri)
            </h4>
            <div className="bg-stone-900/90 p-4 rounded-2xl border border-stone-800 text-xs space-y-2 text-stone-300">
              <p className="font-semibold text-white">
                House no 22, near Rahul nursing home, Lal Bahadur Shastri Marg, North SK Puri, Patna - 800013
              </p>
              <p className="text-[11px] text-emerald-300">
                Landmark: Near Rahul Nursing Home
              </p>
              <div className="pt-2 border-t border-stone-800 space-y-1">
                <div>
                  <span className="text-stone-500">Phone: </span>
                  <a href={`tel:${BRANCHES[1].phone1}`} className="text-amber-300 font-bold hover:underline">
                    {BRANCHES[1].phone1}
                  </a>
                  {' / '}
                  <a href={`tel:${BRANCHES[1].phone2}`} className="text-amber-300 font-bold hover:underline">
                    {BRANCHES[1].phone2}
                  </a>
                </div>
                <div className="pt-1">
                  <a
                    href={BRANCHES[1].googleMapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 hover:underline text-[11px]"
                  >
                    <span>📍 Get Directions on Google Maps →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer with Copyright & Domain */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Udaan Hostels Patna (<span className="text-stone-400 font-medium">udaanhostels.online</span>). All rights reserved.</p>

          <div className="flex items-center gap-3">
            <span className="text-stone-400">Patna's Premier Girls Hostel & PG</span>
            <span className="text-stone-600 hidden sm:inline">•</span>
            <span className="text-rose-300/80 font-medium">
              "Your Comfort • Our Priority"
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
