import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  RotateCw, 
  Compass, 
  Maximize2, 
  Minimize2, 
  ZoomIn, 
  ZoomOut, 
  Play, 
  Pause, 
  MapPin, 
  Info, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Bed, 
  UtensilsCrossed, 
  BookOpen, 
  Building, 
  Calendar,
  Eye,
  CheckCircle2,
  X
} from 'lucide-react';

interface Hotspot {
  id: string;
  xPercent: number; // 0 to 100 on panoramic canvas
  yPercent: number; // 0 to 100 vertical position
  title: string;
  description: string;
  tag: string;
}

interface TourScene {
  id: string;
  title: string;
  subtitle: string;
  category: 'bedroom' | 'study' | 'mess' | 'exterior';
  panoramaImage: string;
  thumbnail: string;
  description: string;
  hotspots: Hotspot[];
}

const TOUR_SCENES: TourScene[] = [
  {
    id: 'double-sharing-room',
    title: 'Double Sharing Bedroom (Om Enclave)',
    subtitle: 'Spacious, Airy & Fully Furnished',
    category: 'bedroom',
    panoramaImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=2400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=300&q=80',
    description: 'Our most popular room type featuring two separate single box beds, individual wooden cupboards, and dedicated study workstations.',
    hotspots: [
      {
        id: 'hs-bed',
        xPercent: 28,
        yPercent: 62,
        title: 'Box Bed with Orthopedic Mattress',
        description: 'Single wooden box bed with ample under-bed storage, 6" orthopedic mattress, fresh linen, and side charging socket.',
        tag: 'Sleeping Comfort'
      },
      {
        id: 'hs-study',
        xPercent: 62,
        yPercent: 54,
        title: 'Dedicated Study Workstation',
        description: 'Individual wooden desk, ergonomic back-support chair, overhead reading lamp, and multi-plug power extension for laptop/tablet.',
        tag: 'Study Setup'
      },
      {
        id: 'hs-wardrobe',
        xPercent: 84,
        yPercent: 45,
        title: 'Individual Locked Cupboard',
        description: 'Personal 3-shelf wooden wardrobe with safety locker, hanger rod, and private lock & key.',
        tag: 'Storage'
      },
      {
        id: 'hs-bath',
        xPercent: 12,
        yPercent: 48,
        title: 'Attached Sanitized Washroom',
        description: 'Modern western toilet, instant hot geyser, shower, and daily professional sanitization.',
        tag: 'Hygiene'
      }
    ]
  },
  {
    id: 'single-deluxe-room',
    title: 'Single Occupancy Deluxe Room',
    subtitle: 'Absolute Privacy & Zero Distractions',
    category: 'bedroom',
    panoramaImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=2400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=300&q=80',
    description: 'Designed for serious exam aspirants (NEET / JEE / UPSC) wanting dedicated personal space with attached bathroom and private study zone.',
    hotspots: [
      {
        id: 'hs-desk-single',
        xPercent: 45,
        yPercent: 52,
        title: 'Executive Study Desk & Bookshelf',
        description: 'Wide study table with integrated book rack, task lighting, and uninterrupted high-speed Wi-Fi router coverage.',
        tag: 'Focus Zone'
      },
      {
        id: 'hs-bed-single',
        xPercent: 78,
        yPercent: 65,
        title: 'Comfort Bed with Storage',
        description: 'Solid wooden bed with clean cotton bedsheet, pillow, and hydraulic lift-up storage space.',
        tag: 'Comfort'
      },
      {
        id: 'hs-window',
        xPercent: 20,
        yPercent: 35,
        title: 'Large Sunlight Window & Balcony',
        description: 'Wide sliding window bringing natural sunlight, refreshing cross ventilation, and blackout privacy curtains.',
        tag: 'Ventilation'
      }
    ]
  },
  {
    id: 'dining-mess-hall',
    title: 'Hygienic Dining Mess & Kitchen',
    subtitle: 'Fresh 3-Time Homely Meals',
    category: 'mess',
    panoramaImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=300&q=80',
    description: 'Sanitized communal dining space where residents enjoy fresh, piping-hot vegetarian meals (Breakfast, Lunch, Dinner) in a friendly atmosphere.',
    hotspots: [
      {
        id: 'hs-ro',
        xPercent: 22,
        yPercent: 46,
        title: 'Multi-Stage RO Water Dispenser',
        description: 'Commercial UV + TDS alkaline drinking water filtration system available 24 hours a day.',
        tag: 'Pure Water'
      },
      {
        id: 'hs-buffet',
        xPercent: 55,
        yPercent: 58,
        title: 'Hot Serving Counter',
        description: 'Stainless steel warmers serving fresh tawa rotis with desi ghee, dal tadka, rice, and seasonal sabjis.',
        tag: 'Homely Mess'
      },
      {
        id: 'hs-seating',
        xPercent: 82,
        yPercent: 64,
        title: 'Clean Dining Tables',
        description: 'Disinfected seating tables with sanitized water jugs and comfortable chairs.',
        tag: 'Sanitization'
      }
    ]
  },
  {
    id: 'quiet-study-hall',
    title: 'Silent Reading & Study Space',
    subtitle: 'Dedicated Library Atmosphere',
    category: 'study',
    panoramaImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=2400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=300&q=80',
    description: 'A peaceful, library-disciplined reading room with individual cubicles, charging sockets, and strict no-noise enforcement for late-night revisions.',
    hotspots: [
      {
        id: 'hs-cubicles',
        xPercent: 38,
        yPercent: 50,
        title: 'Private Study Cubicles',
        description: 'Individual partition desks equipped with soft warm lighting to prevent eye strain during long study marathons.',
        tag: 'Zero Distraction'
      },
      {
        id: 'hs-wifi-zone',
        xPercent: 68,
        yPercent: 32,
        title: 'High-Speed Fiber Router',
        description: 'Dedicated 100+ Mbps dual-band router ensuring lag-free video lectures on physics, chemistry, biology, or maths.',
        tag: 'Broadband'
      }
    ]
  },
  {
    id: 'exterior-om-enclave',
    title: 'Main Building Exterior & Entrance',
    subtitle: 'Om Enclave, Atal Path, Boring Road',
    category: 'exterior',
    panoramaImage: '/assets/aistudio/hostel_banner_bd5711c2.jpeg',
    thumbnail: '/assets/aistudio/hostel_banner_bd5711c2.jpeg',
    description: 'Modern 3-story residential building with stone exterior cladding, secure compound gate, CCTV cameras, and 24x7 security guard desk.',
    hotspots: [
      {
        id: 'hs-gate',
        xPercent: 52,
        yPercent: 70,
        title: 'Secure Boundary Iron Gate',
        description: 'Security gate strictly locked at 8:00 PM curfew. Resident female warden on premise.',
        tag: 'Security'
      },
      {
        id: 'hs-cctv',
        xPercent: 78,
        yPercent: 42,
        title: '24x7 IP CCTV Surveillance',
        description: 'High-resolution cameras recording all entry, exits, and perimeters round-the-clock.',
        tag: 'Safety'
      },
      {
        id: 'hs-balcony',
        xPercent: 35,
        yPercent: 28,
        title: 'Balconies & Natural Airflow',
        description: 'Wide airy balconies offering panoramic views of Atal Path and open skies.',
        tag: 'Architecture'
      }
    ]
  }
];

interface VirtualTourSectionProps {
  onBookRoom: (roomName?: string) => void;
}

export const VirtualTourSection: React.FC<VirtualTourSectionProps> = ({ onBookRoom }) => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [panOffset, setPanOffset] = useState(0); // 0 to 100%
  const [isAutoSpin, setIsAutoSpin] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1); // 1 to 1.6
  const [isDragging, setIsDragging] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ startX: number; startPan: number }>({ startX: 0, startPan: 0 });

  const currentScene = TOUR_SCENES[currentSceneIndex];

  // Auto spin animation loop
  useEffect(() => {
    if (!isAutoSpin || isDragging) return;

    const interval = setInterval(() => {
      setPanOffset((prev) => (prev + 0.12) % 100);
    }, 40);

    return () => clearInterval(interval);
  }, [isAutoSpin, isDragging]);

  // Pointer / Drag handlers for manual 360 exploration
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartRef.current = {
      startX: e.clientX,
      startPan: panOffset
    };
  };

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current) return;
    const deltaX = e.clientX - dragStartRef.current.startX;
    const width = containerRef.current.clientWidth;
    const deltaPercent = (deltaX / width) * 75; // sensitivity
    
    // Invert so dragging left moves view right
    let newPan = (dragStartRef.current.startPan - deltaPercent) % 100;
    if (newPan < 0) newPan += 100;
    setPanOffset(newPan);
  }, [isDragging]);

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleNextScene = () => {
    setActiveHotspot(null);
    setCurrentSceneIndex((prev) => (prev + 1) % TOUR_SCENES.length);
  };

  const handlePrevScene = () => {
    setActiveHotspot(null);
    setCurrentSceneIndex((prev) => (prev - 1 + TOUR_SCENES.length) % TOUR_SCENES.length);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  return (
    <section id="virtual-tour" className="py-16 md:py-24 bg-stone-900 text-white relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#931c51]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-rose-950/80 border border-rose-500/30 text-rose-300 font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <RotateCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Interactive 360° Virtual Walkthrough</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore Udaan Girls' Hostel in 360°
          </h2>
          <p className="mt-3 text-base text-stone-300">
            Drag to pan around the rooms, click interactive hotspots to inspect study desks, box beds, attached washrooms, and the dining hall as if you're standing right inside!
          </p>
        </div>

        {/* 360 Viewer Card Container */}
        <div 
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`relative rounded-3xl overflow-hidden border border-stone-700 bg-stone-950 shadow-2xl select-none transition-all ${
            isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'h-[500px] sm:h-[580px] lg:h-[640px]'
          } ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        >
          
          {/* Panoramic Backdrop Simulation */}
          <div 
            className="absolute inset-0 w-full h-full transition-transform duration-75 ease-out"
            style={{
              backgroundImage: `url(${currentScene.panoramaImage})`,
              backgroundSize: `${220 * zoomLevel}% 100%`,
              backgroundRepeat: 'repeat-x',
              backgroundPosition: `${panOffset}% center`,
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'center center'
            }}
          />

          {/* Vignette & Ambient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/50 pointer-events-none" />

          {/* Top Bar: Scene Title & Controls */}
          <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            
            {/* Scene Info Badge */}
            <div className="bg-stone-900/90 backdrop-blur-md border border-stone-700/80 px-4 py-2 rounded-2xl pointer-events-auto shadow-lg flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <h3 className="text-sm font-bold text-white leading-tight font-['Playfair_Display',serif]">
                  {currentScene.title}
                </h3>
                <p className="text-[11px] text-amber-300 font-medium">
                  {currentScene.subtitle}
                </p>
              </div>
            </div>

            {/* Viewer Controls Pill */}
            <div className="flex items-center gap-1.5 bg-stone-900/90 backdrop-blur-md border border-stone-700/80 p-1.5 rounded-2xl pointer-events-auto shadow-lg">
              
              {/* Auto Spin Toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAutoSpin(!isAutoSpin);
                }}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                  isAutoSpin ? 'bg-[#931c51] text-white' : 'text-stone-300 hover:bg-stone-800'
                }`}
                title={isAutoSpin ? 'Pause 360 Auto-Rotation' : 'Resume 360 Auto-Rotation'}
              >
                {isAutoSpin ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span className="hidden sm:inline text-[11px]">{isAutoSpin ? 'Auto-Rotate' : 'Paused'}</span>
              </button>

              <div className="w-px h-5 bg-stone-700 mx-1" />

              {/* Zoom In */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel((prev) => Math.min(prev + 0.15, 1.6));
                }}
                className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
                title="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              {/* Zoom Out */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel((prev) => Math.max(prev - 0.15, 1.0));
                }}
                className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
                title="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <div className="w-px h-5 bg-stone-700 mx-1" />

              {/* Fullscreen Toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
                title="Toggle Fullscreen"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* Compass / Direction Dial */}
          <div className="absolute top-20 right-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-800 text-[11px] text-stone-300">
            <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '20s' }} />
            <span>360° Panoramic View</span>
          </div>

          {/* Interactive Hotspot Markers on the Scene */}
          {currentScene.hotspots.map((hs) => {
            // Calculate adjusted horizontal position based on panOffset
            // Relative position wraps across 0-100%
            const relativeX = (hs.xPercent - (panOffset * 0.7) + 100) % 100;
            
            return (
              <div
                key={hs.id}
                style={{
                  left: `${relativeX}%`,
                  top: `${hs.yPercent}%`
                }}
                className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-150"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(hs);
                }}
              >
                <div className="relative group/spot">
                  {/* Ping Ring */}
                  <span className="absolute -inset-2 bg-amber-400/40 rounded-full animate-ping pointer-events-none" />
                  
                  {/* Main Hotspot Pin */}
                  <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-[#931c51] to-amber-500 border-2 border-white shadow-xl flex items-center justify-center text-white transform hover:scale-125 transition-transform">
                    <Info className="w-4 h-4" />
                  </div>

                  {/* Hotspot Floating Label */}
                  <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 whitespace-nowrap bg-stone-950/90 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-md border border-stone-700 shadow-lg pointer-events-none opacity-90 group-hover/spot:opacity-100">
                    {hs.title}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Active Hotspot Detail Card Popup */}
          {activeHotspot && (
            <div 
              className="absolute left-1/2 bottom-28 -translate-x-1/2 z-30 max-w-sm w-[90%] bg-stone-900/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-rose-500/50 shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase bg-[#931c51] text-white px-2 py-0.5 rounded">
                    {activeHotspot.tag}
                  </span>
                  <span className="text-xs text-amber-400 font-semibold">Inspected Amenity</span>
                </div>
                <button
                  onClick={() => setActiveHotspot(null)}
                  className="text-stone-400 hover:text-white p-1 rounded-full cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h4 className="text-base font-bold text-white mt-1.5 font-['Playfair_Display',serif]">
                {activeHotspot.title}
              </h4>
              <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                {activeHotspot.description}
              </p>

              <div className="mt-3 pt-2.5 border-t border-stone-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Included in all rooms
                </span>
                <button
                  onClick={() => onBookRoom(currentScene.title)}
                  className="text-xs text-rose-300 hover:text-white font-bold underline cursor-pointer"
                >
                  Reserve this setup →
                </button>
              </div>
            </div>
          )}

          {/* Navigation Arrows (Prev / Next Room) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevScene();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-stone-900/80 hover:bg-[#931c51] text-white backdrop-blur-md border border-stone-700 flex items-center justify-center transition-all shadow-xl hover:scale-110 cursor-pointer"
            aria-label="Previous virtual room"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextScene();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-stone-900/80 hover:bg-[#931c51] text-white backdrop-blur-md border border-stone-700 flex items-center justify-center transition-all shadow-xl hover:scale-110 cursor-pointer"
            aria-label="Next virtual room"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Drag Instruction Overlay Pill (Center bottom) */}
          <div className="absolute bottom-24 sm:bottom-20 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex items-center gap-2 bg-stone-950/75 backdrop-blur-xs text-stone-300 text-xs px-4 py-1.5 rounded-full border border-stone-800">
            <RotateCw className="w-3.5 h-3.5 text-amber-400" />
            <span>Click & Drag to Look Around in 360°</span>
          </div>

          {/* Bottom Thumbnails Navigation Strip */}
          <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
            {TOUR_SCENES.map((scene, idx) => {
              const isActive = idx === currentSceneIndex;
              return (
                <button
                  key={scene.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveHotspot(null);
                    setCurrentSceneIndex(idx);
                  }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#931c51] text-white border-rose-400 shadow-lg scale-105'
                      : 'bg-stone-900/80 hover:bg-stone-800 text-stone-300 border-stone-700/80'
                  }`}
                >
                  <img
                    src={scene.thumbnail}
                    alt={scene.title}
                    className="w-7 h-7 rounded-lg object-cover border border-stone-600 flex-shrink-0"
                  />
                  <span className="text-xs font-semibold">{scene.title.split('(')[0].trim()}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Action Banner below 360 viewer */}
        <div className="mt-8 bg-stone-800/80 border border-stone-700 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-2xl bg-rose-950 text-rose-300 border border-rose-800 flex items-center justify-center flex-shrink-0">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Liked what you saw in the 360° virtual tour?
              </h4>
              <p className="text-xs text-stone-400 mt-0.5">
                Schedule a real, guided in-person visit at Om Enclave Boring Road or North SK Puri today!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onBookRoom(currentScene.title)}
              className="flex-1 sm:flex-none bg-gradient-to-r from-[#931c51] to-[#c72c68] hover:from-[#7e1443] hover:to-[#a91f54] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Room</span>
            </button>
            <a
              href="https://wa.me/916209332827?text=Hello%20Udaan%20Girls%20Hostel%2C%20I%20just%20took%20the%20360%20Virtual%20Tour%20and%20want%20to%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow transition-all text-center"
            >
              WhatsApp Visit Request
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
