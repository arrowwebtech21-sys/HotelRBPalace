import {
  Bath,
  Tv,
  Snowflake,
  Coffee,
  BedDouble,
  Wifi,
  Clock,
  ShieldCheck,
  Shirt,
  Car,
  Zap,
  Power,
  UserCheck,
  Compass,
  Building2,
  Utensils,
  Presentation,
  type LucideIcon
} from 'lucide-react';

export interface Facility {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  badge?: string;
}

export const OFFICIAL_FACILITIES: Facility[] = [
  {
    id: 'ac-water',
    icon: Bath,
    title: 'Air Conditioned Rooms & 24hr Hot/Cold Water',
    desc: 'Luxurious AC guest rooms equipped with modern attached bathrooms and 24-hour hot & cold running water.',
    badge: '24/7 Water'
  },
  {
    id: 'led-tv',
    icon: Tv,
    title: 'LED TV with Satellite Channels',
    desc: 'High-definition flat-screen LED television with full satellite multi-channel entertainment in every room.',
    badge: 'HD Entertainment'
  },
  {
    id: 'refrigerator',
    icon: Snowflake,
    title: 'In-Room Refrigerator',
    desc: 'Personal mini refrigerator provided in all guest rooms for cooling beverages and snacks.',
    badge: 'All Rooms'
  },
  {
    id: 'kettle-coffee',
    icon: Coffee,
    title: 'Electric Kettle & Coffee Sachets',
    desc: 'In-room electric kettle with complimentary tea and coffee sachets for instant hot beverages.',
    badge: 'Complimentary'
  },
  {
    id: 'family-suite',
    icon: BedDouble,
    title: 'Family Suite Accommodation',
    desc: 'Spacious multi-person Family Suite quarters designed for comfortable family vacations and group stays.',
    badge: 'Group Living'
  },
  {
    id: 'free-wifi',
    icon: Wifi,
    title: 'Free High-Speed Wi-Fi',
    desc: 'Complimentary high-speed wireless internet connection accessible throughout guest rooms and public areas.',
    badge: 'High Speed'
  },
  {
    id: 'room-service',
    icon: Clock,
    title: 'Round-the-Clock Room Service',
    desc: '24/7 dedicated in-room dining and room service bringing freshly cooked meals right to your doorstep.',
    badge: '24/7 Service'
  },
  {
    id: 'safe-deposit',
    icon: ShieldCheck,
    title: 'Safe Deposit Vault',
    desc: 'Secure safe deposit box facilities for safeguarding valuable belongings, passports, and documents.',
    badge: 'Secure Storage'
  },
  {
    id: 'laundry',
    icon: Shirt,
    title: 'Express Laundry Service',
    desc: 'Professional daily laundry, ironing, and dry cleaning services available upon guest request.',
    badge: 'Valet Service'
  },
  {
    id: 'parking',
    icon: Car,
    title: 'Secure Vehicle Parking',
    desc: 'Spacious and monitored on-site parking facilities for private cars, tourist buses, and vehicles.',
    badge: 'On-Site'
  },
  {
    id: 'generator',
    icon: Zap,
    title: '24/7 Generator Power Backup',
    desc: 'Heavy-duty automatic diesel generator system ensuring zero power interruption during outages.',
    badge: 'Zero Outages'
  },
  {
    id: 'inverter',
    icon: Power,
    title: 'In-Room Inverter Backup',
    desc: 'Dedicated inverter power backup system installed in every single guest room for continuous lighting.',
    badge: 'Every Room'
  },
  {
    id: 'front-office',
    icon: UserCheck,
    title: '24-Hour Front Office Staff',
    desc: 'Round-the-clock reception desk staff providing seamless check-in, check-out, and guest assistance.',
    badge: '24/7 Desk'
  },
  {
    id: 'travel-desk',
    icon: Compass,
    title: 'Travel & Sightseeing Assistance',
    desc: 'Dedicated travel assistance for local sightseeing tours, taxi hire, and onward journey ticketing.',
    badge: 'Tour Desk'
  },
  {
    id: 'banquet-hall',
    icon: Building2,
    title: 'Banquet Hall (250-300 Pax)',
    desc: 'Air-conditioned luxury banquet venue suited for hosting corporate conferences, weddings, and celebrations.',
    badge: '250-300 Guests'
  },
  {
    id: 'dining-cuisine',
    icon: Utensils,
    title: 'Oriental Cozy Dining (Indian & Chinese)',
    desc: 'Oriental interior dining venue serving authentic, divine-tasting Indian and Chinese multi-range cuisines.',
    badge: 'Multi-Cuisine'
  },
  {
    id: 'conference-hall',
    icon: Presentation,
    title: 'Conference & Party Hall (100-120 Pax)',
    desc: 'Executive air-conditioned conference venue with podium, projector, audio-visual sound, and ambient LED lighting.',
    badge: '100-120 Guests'
  }
];
