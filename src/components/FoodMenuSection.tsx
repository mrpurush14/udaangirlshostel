import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Sun, 
  Moon, 
  Coffee, 
  Sparkles, 
  CheckCircle2, 
  Image as ImageIcon, 
  Table, 
  Calendar, 
  Maximize2, 
  X, 
  Heart
} from 'lucide-react';
import { WEEKLY_MENU, HOSTEL_MENU_IMAGE } from '../data/hostelData';

export const FoodMenuSection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly-table' | 'official-chart'>('daily');
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  const currentDayMenu = WEEKLY_MENU.find((m) => m.day === selectedDay) || WEEKLY_MENU[0];

  return (
    <section id="food-menu" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-[#931c51] font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5" /> Official Hostel Mess Menu
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Homely, Hygienic & Delicious Meals Every Day
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Nourishing Bihari & North Indian food prepared with pure ingredients, authentic spices, and maternal care. 
            Enjoy wholesome Aloo & Sattu Parathas, Kadhi Chawal, Rajma, Khichdi, and special feasts.
          </p>

          {/* View Mode Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            <button
              onClick={() => setActiveTab('daily')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'daily'
                  ? 'bg-[#931c51] text-white shadow-md'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Day-by-Day View</span>
            </button>

            <button
              onClick={() => setActiveTab('weekly-table')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'weekly-table'
                  ? 'bg-[#931c51] text-white shadow-md'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Table className="w-4 h-4" />
              <span>Full Weekly Schedule</span>
            </button>

            <button
              onClick={() => setActiveTab('official-chart')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'official-chart'
                  ? 'bg-[#931c51] text-white shadow-md'
                  : 'bg-rose-50 text-[#931c51] hover:bg-rose-100 border border-rose-200'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Official Menu Chart</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Day-by-Day Interactive Cards */}
        {activeTab === 'daily' && (
          <div className="space-y-6">
            {/* Days Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {WEEKLY_MENU.map((item) => (
                <button
                  key={item.day}
                  onClick={() => setSelectedDay(item.day)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    selectedDay === item.day
                      ? 'bg-gradient-to-r from-[#931c51] to-[#c72c68] text-white shadow-md scale-105'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {item.day}
                </button>
              ))}
            </div>

            {/* Daily Schedule Card */}
            <div className="bg-gradient-to-br from-rose-50/60 via-white to-amber-50/40 rounded-3xl p-6 sm:p-9 border border-rose-200/90 shadow-md">
              <div className="flex flex-wrap items-center justify-between pb-6 border-b border-rose-100 gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#931c51]">
                    Day's Official Mess Plan
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Playfair_Display',serif]">
                    {currentDayMenu.day}'s Meals
                  </h3>
                </div>
                {currentDayMenu.special && (
                  <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-900 border border-amber-300 px-4 py-1.5 rounded-full text-xs font-bold shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Special: {currentDayMenu.special}</span>
                  </div>
                )}
              </div>

              {/* 3 Main Meals Grid + Snacks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                
                {/* Breakfast */}
                <div className="bg-white rounded-2xl p-6 border border-amber-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                        <Sun className="w-6 h-6 text-amber-600" />
                      </div>
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                        8:00 – 9:30 AM
                      </span>
                    </div>
                    <span className="text-xs font-bold uppercase text-amber-600 tracking-wider">Morning Meal</span>
                    <h4 className="text-lg font-bold text-stone-900 mt-1">Breakfast</h4>
                    <p className="mt-3 text-base font-semibold text-[#931c51] leading-relaxed">
                      {currentDayMenu.breakfast}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Freshly prepared & hot</span>
                  </div>
                </div>

                {/* Lunch */}
                <div className="bg-white rounded-2xl p-6 border border-rose-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-rose-100 text-[#931c51] flex items-center justify-center">
                        <UtensilsCrossed className="w-6 h-6 text-[#931c51]" />
                      </div>
                      <span className="text-[11px] font-bold text-[#931c51] bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
                        1:00 – 2:30 PM
                      </span>
                    </div>
                    <span className="text-xs font-bold uppercase text-[#c72c68] tracking-wider">Afternoon Thali</span>
                    <h4 className="text-lg font-bold text-stone-900 mt-1">Lunch</h4>
                    <p className="mt-3 text-base font-semibold text-stone-900 leading-relaxed">
                      {currentDayMenu.lunch}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Pure RO water cooked Basmati rice & daal</span>
                  </div>
                </div>

                {/* Dinner */}
                <div className="bg-white rounded-2xl p-6 border border-indigo-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center">
                        <Moon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <span className="text-[11px] font-bold text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
                        8:30 – 10:00 PM
                      </span>
                    </div>
                    <span className="text-xs font-bold uppercase text-indigo-600 tracking-wider">Night Meal</span>
                    <h4 className="text-lg font-bold text-stone-900 mt-1">Dinner</h4>
                    <p className="mt-3 text-base font-semibold text-stone-900 leading-relaxed">
                      {currentDayMenu.dinner}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Hot tawa rotis with fresh sabji</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* TAB 2: Full Weekly Schedule Table (Matching Official Chart) */}
        {activeTab === 'weekly-table' && (
          <div className="bg-white rounded-3xl border border-stone-200 shadow-lg overflow-hidden animate-in fade-in duration-200">
            <div className="p-5 sm:p-6 bg-gradient-to-r from-[#931c51] to-[#c72c68] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold font-['Playfair_Display',serif]">
                  Complete Weekly Mess Timetable
                </h3>
                <p className="text-xs text-rose-100">
                  Official menu followed at Om Enclave Boring Road & North SK Puri branches
                </p>
              </div>
              <button
                onClick={() => setIsPosterModalOpen(true)}
                className="bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg border border-white/30 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Official Poster</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-rose-50/80 text-[#931c51] border-b border-rose-200 font-bold uppercase text-[11px] tracking-wider">
                    <th className="py-3.5 px-4 sm:px-6">Day</th>
                    <th className="py-3.5 px-4 sm:px-6">Breakfast (Morning)</th>
                    <th className="py-3.5 px-4 sm:px-6">Lunch (Afternoon)</th>
                    <th className="py-3.5 px-4 sm:px-6">Dinner (Night)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200/70 text-stone-800">
                  {WEEKLY_MENU.map((item, idx) => (
                    <tr
                      key={item.day}
                      className={`hover:bg-rose-50/40 transition-colors ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/60'
                      }`}
                    >
                      <td className="py-4 px-4 sm:px-6 font-bold text-[#931c51] whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <Heart className="w-3 h-3 text-[#c72c68] fill-[#c72c68]" />
                          <span>{item.day}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 sm:px-6 font-medium">
                        {item.breakfast}
                      </td>
                      <td className="py-4 px-4 sm:px-6 font-medium">
                        <span className="text-stone-900 font-semibold">{item.lunch}</span>
                      </td>
                      <td className="py-4 px-4 sm:px-6 font-medium">
                        {item.dinner}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-stone-50 border-t border-stone-200 text-xs text-stone-500 flex flex-wrap items-center justify-between gap-2">
              <span>* Unlimited servings of daal, rice, and fresh vegetables for residents.</span>
              <span className="font-semibold text-emerald-700">✓ Prepared with pure RO drinking water</span>
            </div>
          </div>
        )}

        {/* TAB 3: Official Poster Image Viewer */}
        {activeTab === 'official-chart' && (
          <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden p-6 sm:p-8 text-center animate-in fade-in duration-200">
            <div className="max-w-3xl mx-auto mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#931c51]">
                Official Printed Notice
              </span>
              <h3 className="text-2xl font-bold text-stone-900 font-['Playfair_Display',serif] mt-1">
                Udaan Girls' Hostel Mess Menu Notice Board
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                The exact official menu displayed on our hostel dining hall board at Om Enclave, Boring Road.
              </p>
            </div>

            <div className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden border-2 border-rose-200 shadow-md group cursor-pointer"
                 onClick={() => setIsPosterModalOpen(true)}>
              <img
                src={HOSTEL_MENU_IMAGE}
                alt="Udaan Girls' Hostel Official Mess Menu Chart"
                className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors flex items-center justify-center">
                <div className="bg-white/95 text-stone-900 font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <Maximize2 className="w-4 h-4 text-[#931c51]" />
                  <span>Click to Enlarge / Full Screen</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Kitchen Hygiene & Quality Checklist */}
        <div className="mt-12 bg-stone-50 rounded-2xl p-6 sm:p-7 border border-stone-200/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-stone-700">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>RO Purified water for all cooking</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Fresh daily vegetable market purchase</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Sanitized stainless steel utensils</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Tiffin box option for coaching test days</span>
          </div>
        </div>

      </div>

      {/* Full-Screen Poster Modal */}
      {isPosterModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setIsPosterModalOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[92vh] bg-stone-950 rounded-2xl overflow-hidden shadow-2xl border border-stone-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 sm:p-4 bg-stone-900 border-b border-stone-800 flex items-center justify-between text-white">
              <h4 className="text-sm font-bold truncate">
                Udaan Girls' Hostel - Official Mess Menu Chart
              </h4>
              <button
                onClick={() => setIsPosterModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close poster view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-auto flex-1 p-2 flex items-center justify-center bg-black">
              <img
                src={HOSTEL_MENU_IMAGE}
                alt="Official Mess Menu Chart"
                className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
