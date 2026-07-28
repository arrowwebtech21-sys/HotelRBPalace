import { Flower2, ShieldCheck, Sun, Wind, Users, BedDouble, Crown, HeartHandshake, Utensils, Wifi, Coffee, Tv, Snowflake, Bath, Zap } from 'lucide-react';
import type { Room } from '../types/room';

export const ROOMS: Room[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    tag: 'Courtyard & City View',
    price: '₹2,000 + GST / night',
    startingPrice: '₹2,000 + GST',
    size: '350 sq ft',
    capacity: '2 Guests',
    description:
      'Luxurious air conditioned Deluxe Room featuring attached bathroom with 24hr hot and cold water, LED TV with satellite channels, in-room refrigerator, electric kettle with coffee sachets, in-room inverter backup, and free high-speed Wi-Fi.',
    amenities: [
      'Air Conditioned Room',
      'Attached Bath (24hr Hot/Cold Water)',
      'Satellite LED Television',
      'In-Room Refrigerator',
      'Electric Kettle & Coffee Sachets',
      'In-Room Inverter Backup',
      'Free High-Speed Wi-Fi',
      '24/7 Room Service'
    ],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200'
    ],
    features: [
      { icon: Bath, title: '24hr Hot & Cold Water', desc: 'Attached modern bathroom with continuous hot and cold water supply.' },
      { icon: Snowflake, title: 'In-Room Refrigerator', desc: 'Personal cooling refrigerator provided in room.' },
      { icon: Zap, title: 'Inverter & Generator Backup', desc: 'Dual inverter and automatic diesel generator power backup.' }
    ],
    plans: [
      {
        id: 'deluxe-ep-s-d',
        code: 'EP',
        title: 'EP Plan - Single or Double Occupancy',
        occupancy: 'Single or Double',
        price: '₹2,000 + GST',
        description: 'Room Only (No Meals Included)'
      },
      {
        id: 'deluxe-cp-s',
        code: 'CP',
        title: 'CP Plan - Single Occupancy',
        occupancy: 'Single Occupancy',
        price: '₹2,320 + GST',
        description: 'Includes Room + Daily Breakfast for 1 Guest'
      },
      {
        id: 'deluxe-cp-d',
        code: 'CP',
        title: 'CP Plan - Double Occupancy',
        occupancy: 'Double Occupancy',
        price: '₹2,640 + GST',
        description: 'Includes Room + Daily Breakfast for 2 Guests'
      },
      {
        id: 'deluxe-map-s',
        code: 'MAP',
        title: 'MAP Plan - Single Occupancy',
        occupancy: 'Single Occupancy',
        price: '₹2,770 + GST',
        description: 'Includes Room + Daily Breakfast + Lunch/Dinner for 1 Guest'
      },
      {
        id: 'deluxe-map-d',
        code: 'MAP',
        title: 'MAP Plan - Double Occupancy',
        occupancy: 'Double Occupancy',
        price: '₹3,540 + GST',
        description: 'Includes Room + Daily Breakfast + Lunch/Dinner for 2 Guests'
      }
    ]
  },
  {
    id: 'sp-deluxe-room',
    name: 'SP. Deluxe Room',
    tag: 'Heritage Highway View',
    price: '₹2,200 + GST / night',
    startingPrice: '₹2,200 + GST',
    size: '420 sq ft',
    capacity: '2 Adults, 1 Child',
    description:
      'Elevated SP. Deluxe Room offering additional spatial layout, air conditioning, satellite LED TV, mini refrigerator, electric kettle, 24hr hot & cold water, safe deposit box, and round-the-clock room service.',
    amenities: [
      'Air Conditioned Room',
      'Attached Bath (24hr Hot/Cold Water)',
      'Satellite LED Television',
      'In-Room Refrigerator',
      'Electric Kettle & Coffee Sachets',
      'In-Room Inverter Backup',
      'Free High-Speed Wi-Fi',
      'Safe Deposit Vault'
    ],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200'
    ],
    features: [
      { icon: Coffee, title: 'In-Room Electric Kettle', desc: 'Electric kettle with complimentary tea and coffee sachets.' },
      { icon: ShieldCheck, title: 'Safe Deposit Vault', desc: 'Secure safe deposit box for guest valuables.' },
      { icon: Wind, title: 'Dual Power Backup', desc: 'Inverter in room plus 24hr generator backup.' }
    ],
    plans: [
      {
        id: 'sp-deluxe-ep-s-d',
        code: 'EP',
        title: 'EP Plan - Single or Double Occupancy',
        occupancy: 'Single or Double',
        price: '₹2,200 + GST',
        description: 'Room Only (No Meals Included)'
      },
      {
        id: 'sp-deluxe-cp-s',
        code: 'CP',
        title: 'CP Plan - Single Occupancy',
        occupancy: 'Single Occupancy',
        price: '₹2,520 + GST',
        description: 'Includes Room + Daily Breakfast for 1 Guest'
      },
      {
        id: 'sp-deluxe-cp-d',
        code: 'CP',
        title: 'CP Plan - Double Occupancy',
        occupancy: 'Double Occupancy',
        price: '₹2,840 + GST',
        description: 'Includes Room + Daily Breakfast for 2 Guests'
      },
      {
        id: 'sp-deluxe-map-s',
        code: 'MAP',
        title: 'MAP Plan - Single Occupancy',
        occupancy: 'Single Occupancy',
        price: '₹2,970 + GST',
        description: 'Includes Room + Daily Breakfast + Lunch/Dinner for 1 Guest'
      },
      {
        id: 'sp-deluxe-map-d',
        code: 'MAP',
        title: 'MAP Plan - Double Occupancy',
        occupancy: 'Double Occupancy',
        price: '₹3,740 + GST',
        description: 'Includes Room + Daily Breakfast + Lunch/Dinner for 2 Guests'
      }
    ]
  },
  {
    id: 'ex-sp-deluxe-room',
    name: 'EX. SP. Deluxe Room',
    tag: 'Executive Horizon View',
    price: '₹2,499 + GST / night',
    startingPrice: '₹2,499 + GST',
    size: '500 sq ft',
    capacity: '2 Adults, 2 Children',
    description:
      'Premium EX. SP. Deluxe Room with spacious lounge area, satellite LED TV, in-room refrigerator, electric kettle, 24hr hot & cold water, laundry service, and access to cozy Oriental dining room.',
    amenities: [
      'Luxurious Air Conditioned Room',
      'Attached Bath (24hr Hot/Cold Water)',
      'Satellite LED Television',
      'In-Room Refrigerator',
      'Electric Kettle & Coffee Sachets',
      'In-Room Inverter Backup',
      'Laundry & Valet Service',
      '24/7 Front Desk & Travel Assistance'
    ],
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200'
    ],
    features: [
      { icon: Utensils, title: 'Cozy Oriental Dining', desc: 'Multi-cuisine authentic Indian and Chinese dining.' },
      { icon: HeartHandshake, title: '24/7 Front Office Staff', desc: 'Round-the-clock reception and travel assistance.' },
      { icon: Zap, title: 'Inverter & Generator', desc: 'Automatic diesel generator and in-room inverter.' }
    ],
    plans: [
      {
        id: 'ex-sp-deluxe-ep-s-d',
        code: 'EP',
        title: 'EP Plan - Single or Double Occupancy',
        occupancy: 'Single or Double',
        price: '₹2,499 + GST',
        description: 'Room Only (No Meals Included)'
      },
      {
        id: 'ex-sp-deluxe-cp-s',
        code: 'CP',
        title: 'CP Plan - Single Occupancy',
        occupancy: 'Single Occupancy',
        price: '₹2,819 + GST',
        description: 'Includes Room + Daily Breakfast for 1 Guest'
      },
      {
        id: 'ex-sp-deluxe-cp-d',
        code: 'CP',
        title: 'CP Plan - Double Occupancy',
        occupancy: 'Double Occupancy',
        price: '₹3,139 + GST',
        description: 'Includes Room + Daily Breakfast for 2 Guests'
      },
      {
        id: 'ex-sp-deluxe-map-s',
        code: 'MAP',
        title: 'MAP Plan - Single Occupancy',
        occupancy: 'Single Occupancy',
        price: '₹3,269 + GST',
        description: 'Includes Room + Daily Breakfast + Lunch/Dinner for 1 Guest'
      },
      {
        id: 'ex-sp-deluxe-map-d',
        code: 'MAP',
        title: 'MAP Plan - Double Occupancy',
        occupancy: 'Double Occupancy',
        price: '₹4,039 + GST',
        description: 'Includes Room + Daily Breakfast + Lunch/Dinner for 2 Guests'
      }
    ]
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    tag: 'Panoramic Grand View',
    price: '₹3,000 + GST / night',
    startingPrice: '₹3,000 + GST',
    size: '650 sq ft',
    capacity: '4 Guests',
    description:
      'Grand Presidential Suite with luxury salon quarters, air conditioning, 24hr hot & cold water bath, satellite LED TV, in-room refrigerator, electric kettle, in-room inverter, safe deposit, and banquet hall access.',
    amenities: [
      'Luxurious Air Conditioned Suite',
      'Attached Bath (24hr Hot/Cold Water)',
      'Satellite LED Television',
      'In-Room Refrigerator',
      'Electric Kettle & Coffee Sachets',
      'In-Room Inverter & Generator Backup',
      'Banquet Hall Access (100-150 Pax)',
      '24/7 Front Office & Travel Assistance'
    ],
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200'
    ],
    features: [
      { icon: Crown, title: 'Imperial Living Quarters', desc: 'Spacious presidential suite salon with plush seating.' },
      { icon: Flower2, title: 'Banquet Hall Access', desc: 'Air-conditioned banquet venue for 100-150 Pax events.' },
      { icon: ShieldCheck, title: 'Safe Deposit & Laundry', desc: 'Safe deposit box and laundry valet assistance.' }
    ],
    plans: [
      {
        id: 'presidential-ep-s-d',
        code: 'EP',
        title: 'EP Plan - Single or Double Occupancy',
        occupancy: 'Single or Double',
        price: '₹3,000 + GST',
        description: 'Room Only (No Meals Included)'
      },
      {
        id: 'presidential-cp-s',
        code: 'CP',
        title: 'CP Plan - Single Occupancy',
        occupancy: 'Single Occupancy',
        price: '₹3,320 + GST',
        description: 'Includes Room + Daily Breakfast for 1 Guest'
      },
      {
        id: 'presidential-cp-d',
        code: 'CP',
        title: 'CP Plan - Double Occupancy',
        occupancy: 'Double Occupancy',
        price: '₹3,570 + GST',
        description: 'Includes Room + Daily Breakfast for 2 Guests'
      },
      {
        id: 'presidential-map-s',
        code: 'MAP',
        title: 'MAP Plan - Single Occupancy',
        occupancy: 'Single Occupancy',
        price: '₹3,770 + GST',
        description: 'Includes Room + Daily Breakfast + Lunch/Dinner for 1 Guest'
      },
      {
        id: 'presidential-map-d',
        code: 'MAP',
        title: 'MAP Plan - Double Occupancy',
        occupancy: 'Double Occupancy',
        price: '₹4,540 + GST',
        description: 'Includes Room + Daily Breakfast + Lunch/Dinner for 2 Guests'
      }
    ]
  },
  {
    id: 'family-suite',
    name: 'Family Suite',
    tag: 'Grand Family Room View',
    price: '₹3,500 + GST / night',
    startingPrice: '₹3,500 + GST',
    size: '800 sq ft',
    capacity: '6 Guests',
    description:
      'Spacious multi-bedroom Family Suite Room designed for group stays and families. Equipped with air conditioning, satellite LED TV, in-room refrigerator, kettle with coffee sachets, inverter backup, and 24/7 room service.',
    amenities: [
      'Multi-Bedroom Family Suite Room',
      'Air Conditioned Rooms',
      'Attached Bath (24hr Hot/Cold Water)',
      'Satellite LED Television',
      'In-Room Refrigerator',
      'Electric Kettle & Coffee Sachets',
      'In-Room Inverter Backup',
      'Free High-Speed Wi-Fi'
    ],
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200'
    ],
    features: [
      { icon: BedDouble, title: 'Multi-Bedroom Family Suite', desc: 'Generous multi-bedroom suite for families & groups.' },
      { icon: Users, title: '6 Guest Capacity', desc: 'Comfortable living lounge and spacious seating.' },
      { icon: ShieldCheck, title: 'Inverter & Generator', desc: 'Inverter in every room plus 24hr diesel generator.' }
    ],
    plans: [
      {
        id: 'family-ep-s-d',
        code: 'EP',
        title: 'EP Plan - Single or Double Occupancy',
        occupancy: 'Single or Double',
        price: '₹3,500 + GST',
        description: 'Room Only (No Meals Included)'
      }
    ]
  },
  {
    id: 'banquet-hall',
    name: 'Banquet Hall',
    tag: 'Grand Event & Celebration Venue',
    price: 'Custom Event Quote',
    startingPrice: 'Custom Quote',
    size: '100-150 Pax Capacity',
    capacity: '100-150 Guests',
    description:
      'Grand air-conditioned luxury banquet hall venue perfect for hosting corporate conferences, weddings, executive retreats, and lavish social celebrations with full multi-cuisine catering and valet support.',
    amenities: [
      'Air Conditioned Grand Venue',
      '100–150 Pax Guest Capacity',
      'Stage & Audio-Visual Setup',
      'In-House Multi-Cuisine Catering',
      'Valet & Ample Parking Space',
      '24/7 Power Backup (Generator & Inverter)',
      'Dedicated Event Operations Team',
      'Flexible Seating Configurations'
    ],
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200'
    ],
    features: [
      { icon: Flower2, title: 'Grand Banquet Venue', desc: 'Spacious air-conditioned hall for corporate events, weddings, and conferences.' },
      { icon: Utensils, title: 'Multi-Cuisine Catering', desc: 'Authentic Indian and Oriental delicacies served by expert chefs.' },
      { icon: ShieldCheck, title: 'Full Event & Power Backup', desc: '24/7 power backup, stage lighting, sound setup, and valet service.' }
    ],
    plans: [
      {
        id: 'banquet-hall-rent-only',
        code: 'EP',
        title: 'Banquet Hall Venue Rental Only',
        occupancy: '100-150 Pax Capacity',
        price: 'Custom Event Quote',
        description: 'Air-conditioned hall rental with basic stage setup & power backup'
      },
      {
        id: 'banquet-hall-catering',
        code: 'CP',
        title: 'Banquet Hall + Multi-Cuisine Dining',
        occupancy: '100-150 Pax Capacity',
        price: 'Custom Package Quote',
        description: 'Hall rental + stage setup + multi-cuisine Indian & Oriental buffet'
      },
      {
        id: 'banquet-hall-full-package',
        code: 'MAP',
        title: 'Grand Event Package (Hall + Dining + Decor)',
        occupancy: '100-150 Pax Capacity',
        price: 'Tailored Event Package',
        description: 'Full corporate/wedding package including venue, custom catering, decor, & valet'
      }
    ]
  }
];