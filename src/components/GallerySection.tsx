import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Eye, Calendar, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hostelData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onInquire: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onInquire }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const currentIndex = selectedPhoto
    ? filteredItems.findIndex((item) => item.id === selectedPhoto.id)
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filteredItems.length - 1) {
      setSelectedPhoto(filteredItems[currentIndex + 1]);
    } else {
      setSelectedPhoto(filteredItems[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedPhoto(filteredItems[currentIndex - 1]);
    } else {
      setSelectedPhoto(filteredItems[filteredItems.length - 1]);
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-[#931c51] font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" /> Real Photo Tour
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            High-Quality Interior & Campus Gallery
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Take a transparent look inside our modern rooms, clean dining mess, attached bathrooms, and secure building premises.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'rooms', label: 'Bedrooms & Washrooms' },
              { id: 'dining', label: 'Dining & Food' },
              { id: 'study', label: 'Study & Lounge' },
              { id: 'building', label: 'Building & Security' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#931c51] text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200 cursor-pointer flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-stone-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#931c51]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/95 text-stone-900 rounded-full p-3 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-5 h-5 text-[#931c51]" />
                  </div>
                </div>

                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Title & Caption */}
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900 group-hover:text-[#931c51] transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-stone-500 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
                <span className="mt-3 text-[11px] text-[#c72c68] font-semibold inline-flex items-center gap-1">
                  Click to enlarge photo →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule In-Person Visit Banner */}
        <div className="mt-12 text-center bg-white border border-rose-200 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-sm">
          <h3 className="text-lg font-bold text-stone-900">
            Want to see the hostel in person before deciding?
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-stone-600">
            Parents and prospective residents are warmly invited for a guided hostel walk-through between 9:00 AM – 7:30 PM.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onInquire}
              className="bg-[#931c51] hover:bg-[#7a1341] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow transition-all cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Hostel Visit</span>
            </button>
            <a
              href="https://wa.me/916209332827?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20visit%20to%20Udaan%20Girls%20Hostel"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow transition-all"
            >
              WhatsApp Schedule Request
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-stone-950 rounded-2xl overflow-hidden shadow-2xl border border-stone-800">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 bg-stone-800/80 hover:bg-stone-700 text-white p-2 rounded-full transition-colors cursor-pointer"
              aria-label="Close photo view"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-stone-800/80 hover:bg-stone-700 text-white p-2.5 rounded-full transition-colors cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-stone-800/80 hover:bg-stone-700 text-white p-2.5 rounded-full transition-colors cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image in Modal */}
            <div className="relative max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Modal Caption Footer */}
            <div className="p-4 sm:p-6 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                  {selectedPhoto.category} • Photo {currentIndex + 1} of {filteredItems.length}
                </span>
                <h4 className="text-base font-bold text-white mt-0.5">
                  {selectedPhoto.title}
                </h4>
                <p className="text-xs text-stone-300 mt-1 max-w-xl">
                  {selectedPhoto.caption}
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedPhoto(null);
                  onInquire();
                }}
                className="w-full sm:w-auto bg-[#931c51] hover:bg-[#c72c68] text-white text-xs font-bold px-4 py-2.5 rounded-xl whitespace-nowrap transition-colors cursor-pointer"
              >
                Inquire About Availability
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
