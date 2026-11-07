import { BranchInfo, RoomDetail, Amenity, GalleryItem, DailyMenu, FAQItem, Testimonial } from '../types';

export const HOSTEL_CONTACT = {
  primaryPhone: '6209332827',
  secondaryPhone: '9931752501',
  whatsappNumber: '916209332827',
  displayPhone1: '+91 6209332827',
  displayPhone2: '+91 9931752501',
  email: 'udaangirlshostelpatna@gmail.com',
  openingHours: 'Visiting Hours: 9:00 AM – 7:30 PM (Daily)',
  curfewTime: '8:00 PM (Strict safety protocol)',
  city: 'Patna, Bihar',
  facebookUrl: 'https://www.facebook.com/share/1d8PSPfYzZ/',
  instagramUrl: 'https://www.instagram.com/udaangirlshostel?psln=b3JpanVlc2syb240'
};

export const BRANCHES: BranchInfo[] = [
  {
    id: 'boring-road',
    name: '1st Branch – Boring Road (Om Enclave)',
    shortName: 'Boring Road Branch',
    address: 'Om Enclave, near Carrier Planner, Atal Path, Shivpuri, Boring Road',
    landmark: 'Near Carrier Planner & Atal Path Entry',
    locality: 'Shivpuri, Boring Road',
    city: 'Patna, Bihar - 800001',
    phone1: '6209332827',
    phone2: '9931752501',
    whatsapp: '916209332827',
    featuredImg: '/assets/aistudio/hostel_banner_bd5711c2.jpeg',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Om+Enclave+Shivpuri+Boring+Road+Patna&t=&z=15&ie=UTF8&iwloc=&output=embed',
    googleMapLink: 'https://maps.app.goo.gl/hbWTjntVN6ynigX37',
    nearbyHighlights: [
      '2 Mins walk to Atal Path Expressway',
      '3 Mins to Carrier Planner & Allen Career Institute',
      '5 Mins to Boring Road Chauraha & Coaching Hub',
      '10 Mins to Patna Women\'s College'
    ]
  },
  {
    id: 'sk-puri',
    name: '2nd Branch – North SK Puri',
    shortName: 'North SK Puri Branch',
    address: 'House no 22, near Rahul nursing home, Lal Bahadur Shastri Marg, North SK Puri',
    landmark: 'Near Rahul Nursing Home',
    locality: 'North SK Puri',
    city: 'Patna, Bihar - 800013',
    phone1: '6209332827',
    phone2: '9931752501',
    whatsapp: '916209332827',
    featuredImg: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Lal+Bahadur+Shastri+Marg+North+SK+Puri+Patna&t=&z=15&ie=UTF8&iwloc=&output=embed',
    googleMapLink: 'https://maps.app.goo.gl/fV1nTusnH4Sm3Qbw6?g_st=aw',
    nearbyHighlights: [
      'Peaceful, VIP residential neighbourhood',
      'Next to Rahul Nursing Home (Immediate medical care)',
      'Direct connectivity to Boring Canal Road & Bailey Road',
      'Ideal for Medical & Engineering Aspirants'
    ]
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'spacious-rooms',
    title: 'Spacious & Airy Rooms',
    subtitle: 'Bright, Ventilated & Fully Furnished',
    iconName: 'Bed',
    badge: 'Comfort Living',
    description: 'Generously sized rooms equipped with wooden box beds, comfortable 6-inch orthopedic mattresses, personal wardrobes with locks, and individual study desks.',
    highlight: 'Natural sunlight, cross ventilation & private storage'
  },
  {
    id: 'free-wifi',
    title: 'High-Speed Free Wi-Fi',
    subtitle: 'Dual High-Speed Fiber Lines',
    iconName: 'Wifi',
    badge: '100+ Mbps',
    description: 'Uncapped high-speed broadband routers on every floor so students never experience buffering during live coaching lectures, test series, or assignments.',
    highlight: 'Dedicated routers on each wing with seamless roaming'
  },
  {
    id: 'water-supply',
    title: '24x7 Water Supply & RO',
    subtitle: 'Pure Drinking & Running Water',
    iconName: 'Droplets',
    badge: 'RO Alkaline',
    description: 'Continuous 24-hour hot & cold running water supply with overhead storage, plus multi-stage RO UV+TDS alkaline drinking water for pure hydration.',
    highlight: 'Geysers fitted in all washrooms for winters'
  },
  {
    id: 'hygienic-food',
    title: 'Hygienic Homely Food',
    subtitle: '3 Fresh Meals a Day (Breakfast, Lunch, Dinner)',
    iconName: 'UtensilsCrossed',
    badge: '3 Times/Day',
    description: 'Delicious, freshly cooked pure vegetarian meals planned for active student minds: Healthy Breakfast, Wholesome Afternoon Lunch, and Warm Homely Dinner.',
    highlight: 'Special feasts & sweet dishes included'
  },
  {
    id: 'cctv-security',
    title: '24x7 CCTV Security',
    subtitle: 'Guarded Entrance & Resident Warden',
    iconName: 'ShieldCheck',
    badge: 'Strict Security',
    description: 'Round-the-clock IP CCTV monitoring covering all common areas, staircases, and gates. Managed by a dedicated on-site Female Warden for 100% peace of mind.',
    highlight: 'Safe biometric access & visitor register check'
  },
  {
    id: 'washing-machine',
    title: 'Washing Machine & Laundry',
    subtitle: 'In-House Automatic Machines',
    iconName: 'Shirt',
    badge: 'Laundry Area',
    description: 'Fully automatic washing machines and dedicated covered clothes-drying terraces, making regular laundry hassle-free without taking time away from studies.',
    highlight: 'Detergent stations & pressing iron tables provided'
  },
  {
    id: 'study-space',
    title: 'Peaceful Study Space',
    subtitle: 'Quiet Reading Atmosphere',
    iconName: 'BookOpen',
    badge: 'Zero Noise',
    description: 'Quiet, well-illuminated reading zones with ergonomic chairs, charging sockets, and a strict no-disturbance discipline tailored for serious preparation.',
    highlight: 'Perfect for late night revision & group study sessions'
  },
  {
    id: 'power-backup',
    title: '100% Power Backup',
    subtitle: 'Inverter + Heavy Silent Generator',
    iconName: 'Zap',
    badge: 'Uninterrupted',
    description: 'Never suffer through Patna power outages or heatwaves. Instant dual-power backup keeps your fans, lights, Wi-Fi routers, and charging sockets active 24x7.',
    highlight: 'Instant automatic changeover during electricity cuts'
  },
  {
    id: 'attached-washroom',
    title: 'Attached Washrooms',
    subtitle: 'Modern, Sanitized & Ventilated',
    iconName: 'Bath',
    badge: 'Daily Cleaned',
    description: 'Sparkling clean attached washrooms with ceramic tile flooring, modern sanitary fittings, instant water geysers, and regular daily housekeeping.',
    highlight: 'Daily disinfection & high hygiene standards'
  },
  {
    id: 'safe-environment',
    title: 'Safe & Homely Environment',
    subtitle: 'Like a Second Home for Daughters',
    iconName: 'HeartHandshake',
    badge: 'Warm & Caring',
    description: 'A disciplined, warm community of ambitious female students and working professionals where parents can rest assured their daughter is completely safe.',
    highlight: 'Emergency medical doctor tie-up & direct parental updates'
  }
];

export const ROOMS: RoomDetail[] = [
  {
    id: 'single-deluxe',
    type: 'Single Occupancy Room',
    occupancyName: '1 Resident',
    tag: 'Premium Privacy',
    startingPrice: '₹8,000',
    priceNote: 'per month (Includes 3 Meals, Wi-Fi & Maintenance)',
    image: '/assets/aistudio/single_rrom_2_7f4ec25e.jpeg',
    description: 'Ideal for serious aspirants who need absolute peace and privacy for competitive exam preparations (NEET, JEE, UPSC, Banking) or working professionals.',
    features: [
      'Dedicated personal space with zero distractions',
      'King-single wooden box bed with storage & ortho mattress',
      'Large individual 3-door wardrobe with lock and mirror',
      'Wide study workstation with LED lamp & bookshelf',
      'Attached modern private washroom with hot geyser',
      'Private balcony with natural daylight (select rooms)'
    ],
    bedType: '1 Single Bed with Storage',
    amenitiesIncluded: ['AC / Non-AC Option', '3 Meals Included', 'High-speed Wi-Fi', 'Power Backup', 'Daily Housekeeping'],
    isPopular: false,
    availabilityStatus: 'limited',
    availabilityLabel: 'Limited Availability • Only 2 Rooms Left',
    bedsLeft: 2,
    occupancyPercent: 88,
    recentActivity: '🔥 1 room reserved yesterday by a NEET aspirant'
  },
  {
    id: 'double-sharing',
    type: 'Double Sharing Room',
    occupancyName: '2 Residents',
    tag: 'Most Popular',
    startingPrice: '₹7,500',
    priceNote: 'per month per person (Includes 3 Meals & Wi-Fi)',
    image: '/assets/aistudio/double_room_ceb16be5.jpeg',
    description: 'Our most sought-after room category! Spacious room balanced with mutual companionship and personal study desk for both roommates.',
    features: [
      'Spacious layout with generous walking space',
      'Two separate comfortable box beds with storage',
      'Two independent wooden cupboards with individual keys',
      'Two ergonomic study desks placed comfortably apart',
      'Attached hygienic washroom with hot & cold water',
      'Well ventilated with wide window and curtains'
    ],
    bedType: '2 Separate Single Beds',
    amenitiesIncluded: ['AC / Non-AC Option', '3 Meals Included', 'High-speed Wi-Fi', 'Power Backup', 'Daily Housekeeping'],
    isPopular: true,
    availabilityStatus: 'filling-fast',
    availabilityLabel: 'Filling Fast • Only 3 Beds Remaining',
    bedsLeft: 3,
    occupancyPercent: 94,
    recentActivity: '⚡ High inquiry volume from Allen & Carrier Planner students'
  },
  {
    id: 'triple-sharing',
    type: 'Triple Sharing Room',
    occupancyName: '3 Residents',
    tag: 'Budget & Friendly',
    startingPrice: '₹6,500',
    priceNote: 'per month per person (Includes 3 Meals & Wi-Fi)',
    image: '/assets/aistudio/triple_room_7d13167d.jpeg',
    description: 'Vibrant, economical, and comfortable setup for students who enjoy group discussions, peer motivation, and affordable luxury in Boring Road.',
    features: [
      'Very large airy room with ample natural light',
      '3 individual single beds with storage underneath',
      '3 individual wardrobes with safety locker compartments',
      'Comfortable study arrangements & charging stations',
      'Attached clean washroom with daily sanitation',
      'Ceiling fans & optional AC unit'
    ],
    bedType: '3 Separate Single Beds',
    amenitiesIncluded: ['AC / Non-AC Option', '3 Meals Included', 'High-speed Wi-Fi', 'Power Backup', 'Daily Housekeeping'],
    isPopular: false,
    availabilityStatus: 'few-beds-left',
    availabilityLabel: 'Few Beds Left • 4 Remaining for 2026 Batch',
    bedsLeft: 4,
    occupancyPercent: 82,
    recentActivity: '⏳ 5 parents scheduled room visits for this weekend'
  },
  {
    id: 'four-sharing',
    type: 'Four Sharing Economical Room',
    occupancyName: '4 Residents',
    tag: 'Best Value',
    startingPrice: '₹6,000',
    priceNote: 'per month per person (Includes 3 Meals & Wi-Fi)',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=800&q=80',
    description: 'Designed specifically for budget-conscious students with no compromise on security, food quality, hygiene, or Wi-Fi speed.',
    features: [
      'Extra-large hall-style room with high ceiling',
      '4 separate box beds with clean linen and pillows',
      'Individual locked cabinets for books and personal items',
      'Access to common quiet study library hall',
      'Attached double bathroom setup for quick mornings',
      'Affordable all-inclusive fee package'
    ],
    bedType: '4 Separate Beds',
    amenitiesIncluded: ['Non-AC / Cooler Option', '3 Meals Included', 'High-speed Wi-Fi', 'Power Backup', 'Daily Housekeeping'],
    isPopular: false,
    availabilityStatus: 'filling-fast',
    availabilityLabel: 'Filling Fast • Best Value Seats',
    bedsLeft: 2,
    occupancyPercent: 92,
    recentActivity: '🔥 Almost sold out in North SK Puri branch'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Om Enclave Main Building Exterior',
    category: 'building',
    image: '/assets/aistudio/hostel_banner_bd5711c2.jpeg',
    caption: 'Branch 1: Modern multistory Om Enclave building at Shivpuri, Boring Road, Patna with secure iron gates and balconies.'
  },
  {
    id: 'g2',
    title: 'Spacious Double Sharing Bedroom',
    category: 'rooms',
    image: '/assets/aistudio/double_room_ceb16be5.jpeg',
    caption: 'Actual photo of neat double sharing room with fresh linen, study desks, wooden wardrobe, ceiling fans, and designer wallpaper.'
  },
  {
    id: 'g3',
    title: 'Cozy Single Occupancy Deluxe Room',
    category: 'rooms',
    image: '/assets/aistudio/single_rrom_2_7f4ec25e.jpeg',
    caption: 'Actual photo of private single cubicle room offering peaceful study privacy, dedicated bed, and clean tiled flooring.'
  },
  {
    id: 'g-triple',
    title: 'Airy Triple Sharing Bedroom',
    category: 'rooms',
    image: '/assets/aistudio/triple_room_7d13167d.jpeg',
    caption: 'Actual photo of extra-spacious triple sharing room with individual wooden beds, study workstations, and large wooden wardrobe.'
  },
  {
    id: 'g4',
    title: 'Hygienic Dining Hall & Mess Area',
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    caption: 'Clean, sanitized dining hall serving fresh, hot 3-time homely meals prepared by experienced chefs.'
  },
  {
    id: 'g5',
    title: 'Fresh & Wholesome Indian Thali',
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1000&q=80',
    caption: 'Nutritious balanced food with ghee rotis, dal, fresh vegetables, rice, curd, and seasonal salads.'
  },
  {
    id: 'g6',
    title: 'Dedicated Quiet Study Space',
    category: 'study',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80',
    caption: 'Quiet, well-illuminated study space with fast Wi-Fi and power sockets for focused exam preparation.'
  },
  {
    id: 'g7',
    title: 'Modern Attached Washroom',
    category: 'rooms',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    caption: 'Spotless attached washrooms with western commode, hot water geyser, shower, and regular sanitization.'
  },
  {
    id: 'g8',
    title: 'Secure Entrance & Warden Desk',
    category: 'building',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80',
    caption: '24x7 CCTV monitoring station and round-the-clock female resident warden ensuring strict safety.'
  },
  {
    id: 'g9',
    title: 'Automatic Washing Machine Area',
    category: 'building',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1000&q=80',
    caption: 'Convenient laundry area equipped with automatic washing machines and open rooftop drying zones.'
  }
];

export const HOSTEL_MENU_IMAGE = '/assets/aistudio/hostel_menu_8102088b.jpeg';

export const WEEKLY_MENU: DailyMenu[] = [
  {
    day: 'Monday',
    breakfast: 'Aloo Paratha / Sattu Paratha with Chatni',
    lunch: 'Chawal, Daal, Chokha (Homely Bihari Style)',
    dinner: 'Soft Roti with Fresh Sabji',
    snacks: 'Evening Tea & Biscuits',
    special: 'Aloo & Sattu Paratha with Chatni'
  },
  {
    day: 'Tuesday',
    breakfast: 'Roti with Tasty Sabji',
    lunch: 'Chawal with Delicious Rajma',
    dinner: 'Special Kheer, Puri, Sabji',
    snacks: 'Evening Milk Tea / Snacks',
    special: 'Sweet Kheer & Hot Puri Feast'
  },
  {
    day: 'Wednesday',
    breakfast: 'Roti with Crispy Bhujiya',
    lunch: 'Chicken / Paneer (for Veg) with Chawal',
    dinner: 'Soft Roti with Sabji',
    snacks: 'Evening Chai & Light Refreshment',
    special: 'Chicken / Shahi Paneer Special Lunch'
  },
  {
    day: 'Thursday',
    breakfast: 'Puri with Spicy Aloodam',
    lunch: 'Kadhi, Chawal with Kurkuri Bhujiya',
    dinner: 'Roti, Dal Tadka, Bhujiya / Salad',
    snacks: 'Hot Evening Tea',
    special: 'Kadhi Chawal & Dal Tadka'
  },
  {
    day: 'Friday',
    breakfast: 'Roti with Mix Chana Sabji',
    lunch: 'Chawal, Daal, Seasonal Sabji',
    dinner: 'Roti with Anda (Egg Curry) / Paneer (for Veg)',
    snacks: 'Evening Tea & Cookies',
    special: 'Anda (Egg) / Paneer Curry Dinner'
  },
  {
    day: 'Saturday',
    breakfast: 'Puri with Sabji',
    lunch: 'Special Khichdi, Chokha, Roasted Papad & Pickle',
    dinner: 'Soft Roti with Sabji',
    snacks: 'Evening Chai',
    special: 'Wholesome Saturday Khichdi & Chokha'
  },
  {
    day: 'Sunday',
    breakfast: 'Roti with Sabji',
    lunch: 'Chawal, Daal, Seasonal Sabji',
    dinner: 'Special Kela-Kopta (Banana Kofta) / Besan Sabji with Roti',
    snacks: 'Sunday Evening Tea & Snacks',
    special: 'Kela Kofta / Besan Sabji Dinner'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'admissions',
    question: 'How do I book a room or schedule an in-person visit?',
    answer: 'You can easily book a room or schedule a visit by filling out the online booking form on this page or clicking the WhatsApp / Call button (+91 6209332827). We welcome prospective students and parents daily from 9:00 AM to 7:30 PM for guided room inspections.'
  },
  {
    category: 'security',
    question: 'What are the hostel gate timings and safety rules?',
    answer: 'Safety is our highest priority. The main gate closes strictly at 8:00 PM every evening. Any emergency late entry or night out requires prior written or telephonic authorization from the registered parent/guardian. CCTV cameras monitor all entry points and common corridors 24x7, backed by an on-campus female warden.'
  },
  {
    category: 'food',
    question: 'How many meals are served, and is the food hygienic?',
    answer: 'We provide 3 fresh, homely meals every day: Breakfast (8:00 AM – 9:30 AM), Lunch (1:00 PM – 2:30 PM), and Dinner (8:30 PM – 10:00 PM). Our kitchen maintains strict hygiene, uses filtered water for cooking, fresh daily vegetables, and offers special Sunday feasts and sweet dishes.'
  },
  {
    category: 'facilities',
    question: 'What is included in the monthly fee and what are the room charges?',
    answer: 'Our all-inclusive fees start at ₹6,000/mo (4-sharing), ₹6,500/mo (triple sharing), ₹7,500/mo (double sharing), and ₹8,000/mo (single deluxe). The monthly fee includes 3 fresh daily meals, 100% power backup (inverter & generator), high-speed unlimited Wi-Fi, 24x7 running water, RO drinking water, washing machine access, and daily room housekeeping with zero brokerage.'
  },
  {
    category: 'facilities',
    question: 'Is power backup available during summer power cuts?',
    answer: 'Yes! We have a dual backup system combining high-capacity inverters for instant lights, fans, and Wi-Fi, alongside a heavy silent generator backup to handle prolonged power cuts smoothly so students can study without heat or disruption.'
  },
  {
    category: 'admissions',
    question: 'Which coaching institutes and colleges are nearby in Boring Road?',
    answer: 'Both branches are in prime locations. Branch 1 (Boring Road - Om Enclave) is within 2–5 minutes of Allen Career Institute, Carrier Planner, Resonance, Aakash Institute, and Boring Road Chauraha. Branch 2 (North SK Puri) is situated close to Patna Women\'s College, Rahul Nursing Home, and Bailey Road.'
  },
  {
    category: 'admissions',
    question: 'Why is Udaan Hostels Patna rated #1 among hostels in Patna?',
    answer: 'Udaan Hostels Patna (udaanhostels.online) has earned a 4.9-star rating among parents and students for its spotless cleanliness, reliable 3-time nutritious meals, 24x7 on-premise female warden security, peaceful study environment, and strategic walking distance to premier coaching institutes in Boring Road Patna.'
  },
  {
    category: 'admissions',
    question: 'Do you offer guidance for Udaan boys hostels or Boys Hostel in Patna?',
    answer: 'Our residential properties operate strictly as Udaan Girls Hostel & PG with strict no-male-visitor policies on resident floors to maintain 100% security. However, for visiting families with both daughters and sons studying in Patna, our admissions counseling desk gladly shares verified contacts and guidance for trusted Udaan boys hostels and boys PGs near Boring Road.'
  },
  {
    category: 'security',
    question: 'Can male visitors or parents enter the resident rooms?',
    answer: 'To protect the privacy and comfort of our female residents, male visitors (including male relatives) are strictly not permitted inside resident corridors or bedrooms. A dedicated ground-floor visitor lounge is available for meeting parents and guardians.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Anjali Sharma',
    role: 'NEET Aspirant',
    courseOrCollege: 'Allen Career Institute, Boring Road',
    branch: 'Boring Road Branch (Om Enclave)',
    rating: 5,
    comment: 'Moving away from home for NEET preparation was scary, but Udaan Girls Hostel made me feel so protected. The food tastes just like my mother makes, and the study space is completely silent. I can walk to my Allen classes in 3 minutes!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Dr. Rameshwar Prasad',
    role: 'Parent (Father of resident Priya)',
    courseOrCollege: 'Parent from Siwan, Bihar',
    branch: 'North SK Puri Branch',
    rating: 5,
    comment: 'As a father, my primary concern in Patna was my daughter\'s security. After visiting Om Enclave and meeting the warden, I was 100% relieved. The strict 8 PM rule, CCTV monitoring, and supportive warden gave us total peace of mind.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Sneha Kumari',
    role: 'Patna Women\'s College Student',
    courseOrCollege: 'B.Sc Computer Science',
    branch: 'North SK Puri Branch',
    rating: 5,
    comment: 'The Wi-Fi speed is fantastic for my coding projects and online classes. Water supply, clean attached washrooms, and automatic washing machines make daily life so smooth. Best girls hostel in Patna!',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Ritu Raj',
    role: 'Banking & SSC Aspirant',
    courseOrCollege: 'Career Planner Student',
    branch: 'Boring Road Branch (Om Enclave)',
    rating: 5,
    comment: 'Literally next door to Career Planner! Power backup is seamless during power cuts, and the 3-time meals keep our energy up for 12 hours of studying. The warden aunty is very caring.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  }
];

export const NEARBY_LANDMARKS = [
  { name: 'Carrier Planner Coaching', distance: '1 Min Walk', category: 'Coaching' },
  { name: 'Allen Career Institute Boring Road', distance: '3 Mins Walk', category: 'Coaching' },
  { name: 'Atal Path Expressway Entry', distance: '1 Min Walk', category: 'Transport' },
  { name: 'Aakash Institute Boring Road', distance: '5 Mins Walk', category: 'Coaching' },
  { name: 'Boring Road Chauraha Hub', distance: '6 Mins Walk', category: 'Market' },
  { name: 'Patna Women\'s College', distance: '8 Mins Drive', category: 'College' },
  { name: 'Resonance / Goal Institute', distance: '4 Mins Walk', category: 'Coaching' },
  { name: 'Patna Junction Railway Station', distance: '12 Mins Drive', category: 'Transport' }
];
