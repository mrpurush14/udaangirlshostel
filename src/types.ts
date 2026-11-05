export interface BranchInfo {
  id: string;
  name: string;
  shortName: string;
  address: string;
  landmark: string;
  locality: string;
  city: string;
  phone1: string;
  phone2: string;
  whatsapp: string;
  mapEmbedUrl: string;
  googleMapLink: string;
  featuredImg: string;
  nearbyHighlights: string[];
}

export interface RoomDetail {
  id: string;
  type: string;
  occupancyName: string;
  tag: string;
  startingPrice: string;
  priceNote: string;
  image: string;
  description: string;
  features: string[];
  bedType: string;
  amenitiesIncluded: string[];
  isPopular?: boolean;
  availabilityStatus: 'filling-fast' | 'limited' | 'few-beds-left' | 'available';
  availabilityLabel: string;
  bedsLeft: number;
  occupancyPercent: number;
  recentActivity?: string;
}

export interface Amenity {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  badge?: string;
  description: string;
  highlight: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'rooms' | 'dining' | 'study' | 'building';
  image: string;
  caption: string;
}

export interface DailyMenu {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  snacks?: string;
  special?: string;
  highlight?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'admissions' | 'food' | 'security' | 'facilities';
}

export interface Testimonial {
  name: string;
  role: string;
  branch: string;
  rating: number;
  comment: string;
  avatar: string;
  courseOrCollege?: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  residentType: 'student' | 'working' | 'other';
  institution: string;
  branch: string;
  roomType: string;
  acPreference: 'ac' | 'non-ac';
  moveInDate: string;
  parentName: string;
  parentPhone: string;
  specialRequests: string;
}
