import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Calendar, Shield, Sparkles, Facebook, Instagram } from 'lucide-react';
import { HOSTEL_CONTACT, BRANCHES } from '../data/hostelData';

interface NavbarProps {
  onOpenBooking: (roomType?: string, branch?: string) => void;
  onOpenHostingerGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenHostingerGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Rooms & Sharing', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: '360° Tour', href: '#virtual-tour' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Mess Menu', href: '#food-menu' },
    { name: 'Branches', href: '#branches' },
    { name: 'Safety Rules', href: '#safety' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#931c51] text-white py-1.5 px-3 sm:px-6 shadow-inner border-b border-rose-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Left: Admissions Info */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-flex items-center gap-1 bg-[#c72c68] text-white px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide uppercase flex-shrink-0 shadow-2xs">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Admissions Open</span>
            </span>
            <span className="hidden lg:inline text-rose-100 text-xs font-medium truncate">
              Safe, Homely & Disciplined Girls Hostel in Boring Road & North SK Puri, Patna
            </span>
            <span className="hidden sm:inline lg:hidden text-rose-100 text-xs font-medium truncate">
              Boring Road & SK Puri, Patna
            </span>
          </div>

          {/* Right: Contact & Social Buttons - Completely Responsive Single Line */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 text-xs">
            
            {/* Phone Button */}
            <a
              href={`tel:${HOSTEL_CONTACT.primaryPhone}`}
              className="flex items-center gap-1.5 font-bold hover:text-amber-200 transition-colors"
              title="Call Admissions Helpline"
            >
              <span className="w-6 h-6 sm:w-auto sm:h-auto rounded-full bg-white/10 sm:bg-transparent flex items-center justify-center">
                <Phone className="w-3 h-3 text-amber-300" />
              </span>
              <span className="hidden sm:inline">{HOSTEL_CONTACT.displayPhone1}</span>
              <span className="sm:hidden text-[11px] font-bold text-amber-300">Call</span>
            </a>

            <span className="text-rose-400/50 hidden sm:inline">|</span>

            {/* WhatsApp Link */}
            <a
              href={`https://wa.me/${HOSTEL_CONTACT.whatsappNumber}?text=Hello%20Udaan%20Girls%20Hostel%2C%20I%20want%20to%20inquire%20about%20room%20availability`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-200 hover:text-emerald-100 font-semibold transition-colors"
              title="Chat on WhatsApp"
            >
              <span className="w-6 h-6 sm:w-auto sm:h-auto rounded-full bg-emerald-600 sm:bg-transparent flex items-center justify-center shadow-2xs">
                <MessageCircle className="w-3 h-3 text-white sm:text-emerald-300 fill-white sm:fill-none" />
              </span>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <span className="text-rose-400/50">|</span>

            {/* Social Icons (Facebook & Instagram) - Sleek Touch Targets */}
            <div className="flex items-center gap-1.5">
              {/* Facebook Button */}
              <a
                href={HOSTEL_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-auto sm:h-auto sm:px-2.5 sm:py-1 rounded-full bg-[#1877F2] hover:bg-[#166fe5] active:scale-95 text-white flex items-center justify-center gap-1 text-[11px] font-bold transition-all hover:scale-105 shadow-xs"
                title="Follow on Facebook"
                aria-label="Facebook Page"
              >
                <Facebook className="w-3.5 h-3.5 fill-current" />
                <span className="hidden md:inline">Facebook</span>
              </a>

              {/* Instagram Button */}
              <a
                href={HOSTEL_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-auto sm:h-auto sm:px-2.5 sm:py-1 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-95 active:scale-95 text-white flex items-center justify-center gap-1 text-[11px] font-bold transition-all hover:scale-105 shadow-xs"
                title="Follow on Instagram"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Instagram</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-md py-2.5' : 'shadow-sm py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center gap-3 group">
              <img
                src="/assets/aistudio/hostel_logo_d4e3810a.jpeg"
                alt="Udaan Girls' Hostel Logo"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-amber-400/80 object-cover shadow-sm group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-extrabold text-[#931c51] tracking-tight leading-tight font-['Playfair_Display',serif]">
                  Udaan <span className="text-[#c72c68] font-sans font-bold text-lg md:text-xl">Hostels Patna</span>
                </span>
                <span className="text-[11px] md:text-xs text-stone-500 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                  <span className="text-[#931c51] font-bold">Girls' Hostel & PG</span> • Boring Road & SK Puri
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-6 text-sm font-medium text-stone-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#931c51] transition-colors relative py-1 hover:font-semibold"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`https://wa.me/${HOSTEL_CONTACT.whatsappNumber}?text=Hello%20Udaan%20Girls%20Hostel%2C%20I%20would%20like%20to%20know%20more%20about%20rooms`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs lg:text-sm font-semibold px-3.5 py-2 rounded-xl transition-all shadow-sm hover:shadow"
                title="Chat with Hostel Management on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-100 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2 bg-gradient-to-r from-[#931c51] to-[#c72c68] hover:from-[#7e1443] hover:to-[#b0225a] text-white text-xs lg:text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-md hover:shadow-lg pulse-glow"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Visit</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={() => onOpenBooking()}
                className="md:hidden bg-[#931c51] text-white text-xs font-semibold px-3 py-1.5 rounded-lg"
              >
                Book
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-stone-700 hover:text-[#931c51] hover:bg-rose-50 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-700 hover:text-[#931c51] font-medium py-2 px-3 rounded-lg hover:bg-rose-50 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#931c51] to-[#c72c68] text-white font-semibold py-2.5 rounded-xl shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Room / Schedule Visit</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${HOSTEL_CONTACT.primaryPhone}`}
                  className="flex items-center justify-center gap-1.5 bg-stone-100 text-stone-800 text-xs font-semibold py-2.5 rounded-xl hover:bg-stone-200"
                >
                  <Phone className="w-3.5 h-3.5 text-[#931c51]" />
                  <span>Call 1st Branch</span>
                </a>
                <a
                  href={`https://wa.me/${HOSTEL_CONTACT.whatsappNumber}?text=Hello%20Udaan%20Girls%20Hostel%2C%20I%20am%20interested%20in%20room%20inquiry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-emerald-600 text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-emerald-700"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Mobile Social Links */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={HOSTEL_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#1877F2] text-white text-xs font-semibold py-2 rounded-xl hover:bg-[#166fe5] shadow-xs"
                >
                  <Facebook className="w-3.5 h-3.5 fill-current" />
                  <span>Facebook</span>
                </a>
                <a
                  href={HOSTEL_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white text-xs font-semibold py-2 rounded-xl shadow-xs"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </div>

              <div className="mt-2 p-3 bg-rose-50 rounded-xl text-xs text-stone-600 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-[#931c51]">
                  <MapPin className="w-3.5 h-3.5" /> 2 Prime Branches in Patna:
                </div>
                <div>1. Om Enclave, Shivpuri, Boring Road</div>
                <div>2. House no 22, North SK Puri (near Rahul Nursing Home)</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
