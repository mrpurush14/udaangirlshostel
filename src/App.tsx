/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BranchesSection } from './components/BranchesSection';
import { RoomsSection } from './components/RoomsSection';
import { VirtualTourSection } from './components/VirtualTourSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { GallerySection } from './components/GallerySection';
import { FoodMenuSection } from './components/FoodMenuSection';
import { SafetyRulesSection } from './components/SafetyRulesSection';
import { NearbyLandmarks } from './components/NearbyLandmarks';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingForm } from './components/BookingForm';
import { FAQSection } from './components/FAQSection';
import { SeoGuideSection } from './components/SeoGuideSection';
import { LiveChatWidget } from './components/LiveChatWidget';
import { MobileBottomBar } from './components/MobileBottomBar';
import { HostingerGuideModal } from './components/HostingerGuideModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<string | undefined>(undefined);
  const [selectedBranchForBooking, setSelectedBranchForBooking] = useState<string | undefined>(undefined);
  const [isHostingerModalOpen, setIsHostingerModalOpen] = useState(false);

  const scrollToBooking = (roomType?: string, branch?: string) => {
    if (roomType) setSelectedRoomForBooking(roomType);
    if (branch) setSelectedBranchForBooking(branch);

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRooms = () => {
    const roomsEl = document.getElementById('rooms');
    if (roomsEl) {
      roomsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col text-stone-800 selection:bg-[#931c51] selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={(room, branch) => scrollToBooking(room, branch)}
        onOpenHostingerGuide={() => setIsHostingerModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onExploreRooms={scrollToRooms}
        />

        {/* Prime Branches Section */}
        <BranchesSection
          onSelectBranch={(branchId) => scrollToBooking(undefined, branchId)}
        />

        {/* Rooms & Sharing Details */}
        <RoomsSection
          onBookRoom={(roomType) => scrollToBooking(roomType)}
        />

        {/* 360-Degree Interactive Virtual Tour */}
        <VirtualTourSection
          onBookRoom={(roomType) => scrollToBooking(roomType)}
        />

        {/* Facilities & Amenities */}
        <AmenitiesSection />

        {/* Photo Gallery with Lightbox */}
        <GallerySection
          onInquire={() => scrollToBooking()}
        />

        {/* Mess & Homely Food Timetable */}
        <FoodMenuSection />

        {/* Safety, CCTV & Warden Guidelines */}
        <SafetyRulesSection />

        {/* Nearby Coaching & College Landmarks */}
        <NearbyLandmarks />

        {/* Parent & Student Testimonials */}
        <TestimonialsSection />

        {/* Comprehensive Booking Inquiry Form with WhatsApp Lead Generator */}
        <BookingForm
          initialRoomType={selectedRoomForBooking}
          initialBranch={selectedBranchForBooking}
        />

        {/* Local Patna Student Accommodation Guide & Proximity SEO Section */}
        <SeoGuideSection
          onOpenBooking={() => scrollToBooking()}
        />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Live Chat Support Widget */}
      <LiveChatWidget
        onOpenBooking={() => scrollToBooking()}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileBottomBar
        onOpenBooking={() => scrollToBooking()}
      />

      {/* Hostinger Deployment Guide Modal */}
      <HostingerGuideModal
        isOpen={isHostingerModalOpen}
        onClose={() => setIsHostingerModalOpen(false)}
      />
    </div>
  );
}
