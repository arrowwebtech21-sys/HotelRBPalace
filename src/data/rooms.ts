import { Flower2, ShieldCheck, Sun, Wind, Users, BedDouble, Crown, HeartHandshake, Utensils, Wifi, Coffee, Tv, Snowflake, Bath, Zap, Presentation, PartyPopper } from 'lucide-react';
import type { Room } from '../types/room';

export const ROOMS: Room[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    tag: 'Courtyard & City View',
    price: '₹2,000 + GST / night',
    startingPrice: '₹2,000 + GST',
    size: '180 sq ft',
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
    image: '/images/rooms/deluxe/deluxe_1.jpg',
    gallery: [
      '/images/rooms/deluxe/deluxe_1.jpg',
      '/images/rooms/deluxe/deluxe_2.jpg',
      '/images/rooms/deluxe/deluxe_3.jpg',
      '/images/rooms/deluxe/deluxe_4.jpg'
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
    size: '270 sq ft',
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
    image: '/images/rooms/sp_deluxe/sp_deluxe_1.jpg',
    gallery: [
      '/images/rooms/sp_deluxe/sp_deluxe_1.jpg',
      '/images/rooms/sp_deluxe/sp_deluxe_2.jpg',
      '/images/rooms/sp_deluxe/sp_deluxe_3.jpg',
      '/images/rooms/sp_deluxe/sp_deluxe_4.jpg'
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
    size: '400 sq ft',
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
    image: '/images/rooms/ex_sp_deluxe/ex_sp_deluxe_1.jpg',
    gallery: [
      '/images/rooms/ex_sp_deluxe/ex_sp_deluxe_1.jpg',
      '/images/rooms/ex_sp_deluxe/ex_sp_deluxe_2.jpg',
      '/images/rooms/ex_sp_deluxe/ex_sp_deluxe_3.jpg',
      '/images/rooms/ex_sp_deluxe/ex_sp_deluxe_4.jpg',
      '/images/rooms/ex_sp_deluxe/ex_sp_deluxe_5.jpg',
      '/images/rooms/ex_sp_deluxe/ex_sp_deluxe_6.jpg',
      '/images/rooms/ex_sp_deluxe/ex_sp_deluxe_7.jpg',
      '/images/rooms/ex_sp_deluxe/ex_sp_deluxe_8.jpg'
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
    size: '400 sq ft',
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
      'Banquet Hall Access (250-300 Pax)',
      '24/7 Front Office & Travel Assistance'
    ],
    image: '/images/rooms/presidential/presidential_1.jpg',
    gallery: [
      '/images/rooms/presidential/presidential_1.jpg',
      '/images/rooms/presidential/presidential_2.jpg',
      '/images/rooms/presidential/presidential_3.jpg',
      '/images/rooms/presidential/presidential_4.jpg',
      '/images/rooms/presidential/presidential_5.jpg',
      '/images/rooms/presidential/presidential_6.jpg',
      '/images/rooms/presidential/presidential_7.jpg',
      '/images/rooms/presidential/presidential_8.jpg',
      '/images/rooms/presidential/presidential_9.jpg',
      '/images/rooms/presidential/presidential_10.jpg',
      '/images/rooms/presidential/presidential_11.jpg'
    ],
    features: [
      { icon: Crown, title: 'Imperial Living Quarters', desc: 'Spacious presidential suite salon with plush seating.' },
      { icon: Flower2, title: 'Banquet Hall Access', desc: 'Air-conditioned banquet venue for 250-300 Pax events.' },
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
    size: '500 sq ft',
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
    image: '/images/rooms/family_suite/family_suite_1.jpg',
    gallery: [
      '/images/rooms/family_suite/family_suite_1.jpg',
      '/images/rooms/family_suite/family_suite_2.jpg',
      '/images/rooms/family_suite/family_suite_3.jpg',
      '/images/rooms/family_suite/family_suite_4.jpg',
      '/images/rooms/family_suite/family_suite_5.jpg',
      '/images/rooms/family_suite/family_suite_6.jpg'
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
    id: 'conference-hall',
    name: 'Conference & Party Hall',
    tag: 'Executive Meetings & Private Celebrations',
    price: 'Custom Booking Quote',
    startingPrice: 'Custom Quote',
    size: '100-120 Pax Capacity',
    capacity: '100-120 Guests',
    description:
      'State-of-the-art air-conditioned Conference & Party Hall venue featuring modern audio-visual podium, projector screen, ambient LED stage lighting, velvet banquet seating, and full multi-cuisine catering support for corporate meetings, seminars, birthdays, and private celebrations.',
    amenities: [
      'Air Conditioned Executive Hall',
      'Projector & Big Screen Setup',
      'Podium & Sound System',
      'Ambient LED Stage Lighting',
      'Multi-Cuisine Buffet Catering',
      '24/7 Power Backup (Generator & Inverter)',
      'Flexible Seating Configurations',
      'Free High-Speed Wi-Fi'
    ],
    image: '/images/conference_hall/conference_1.jpg',
    gallery: [
      '/images/conference_hall/conference_1.jpg',
      '/images/conference_hall/conference_2.jpg',
      '/images/conference_hall/conference_3.jpg',
      '/images/conference_hall/conference_4.jpg',
      '/images/conference_hall/conference_5.jpg',
      '/images/conference_hall/conference_6.jpg',
      '/images/conference_hall/conference_7.jpg',
      '/images/conference_hall/conference_8.jpg'
    ],
    features: [
      { icon: Presentation, title: 'Corporate Conferences & Seminars', desc: 'Equipped with presentation projector, screen, podium, and sound setup.' },
      { icon: PartyPopper, title: 'Private Parties & Celebrations', desc: 'Ideal venue for birthday parties, anniversaries, and family get-togethers.' },
      { icon: ShieldCheck, title: 'Full Power & Catering Support', desc: '24/7 diesel generator power backup, valet, and in-house multi-cuisine buffet.' }
    ],
    plans: [
      {
        id: 'conference-hall-rent-only',
        code: 'EP',
        title: 'Conference / Party Hall Rental Only',
        occupancy: '100-120 Pax Capacity',
        price: 'Custom Event Quote',
        description: 'Air-conditioned hall rental with projector, screen, podium, sound system & power backup'
      },
      {
        id: 'conference-hall-catering',
        code: 'CP',
        title: 'Conference / Party Hall + Refreshments',
        occupancy: '100-120 Pax Capacity',
        price: 'Custom Package Quote',
        description: 'Hall rental + projector & sound + high tea / breakfast / lunch buffet'
      },
      {
        id: 'conference-hall-full-package',
        code: 'MAP',
        title: 'Full Corporate / Celebration Package',
        occupancy: '100-120 Pax Capacity',
        price: 'Tailored Event Package',
        description: 'Full corporate/celebration package including venue, AV setup, stage lighting, custom dining & valet'
      }
    ]
  },
  {
    id: 'banquet-hall',
    name: 'Banquet Hall',
    tag: 'Grand Event & Celebration Venue',
    price: 'Custom Event Quote',
    startingPrice: 'Custom Quote',
    size: '250-300 Pax Capacity',
    capacity: '250-300 Guests',
    description:
      'Grand air-conditioned luxury banquet hall venue perfect for hosting corporate conferences, weddings, executive retreats, and lavish social celebrations with full multi-cuisine catering and valet support.',
    amenities: [
      'Air Conditioned Grand Venue',
      '250–300 Pax Guest Capacity',
      'Stage & Audio-Visual Setup',
      'In-House Multi-Cuisine Catering',
      'Valet & Ample Parking Space',
      '24/7 Power Backup (Generator & Inverter)',
      'Dedicated Event Operations Team',
      'Flexible Seating Configurations'
    ],
    image: '/images/banquet/banquet_main_cover.jpg',
    gallery: [
      '/images/banquet/banquet_main_cover.jpg',
      '/images/banquet/banquet_1.jpg',
      '/images/banquet/banquet_2.jpg',
      '/images/banquet/banquet_3.jpg',
      '/images/banquet/banquet_4.jpg',
      '/images/banquet/banquet_5.jpg',
      '/images/banquet/banquet_6.jpg',
      '/images/banquet/banquet_7.jpg',
      '/images/banquet/banquet_8.jpg',
      '/images/banquet/banquet_9.jpg',
      '/images/banquet/banquet_10.jpg'
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
        occupancy: '250-300 Pax Capacity',
        price: 'Custom Event Quote',
        description: 'Air-conditioned hall rental with basic stage setup & power backup'
      },
      {
        id: 'banquet-hall-catering',
        code: 'CP',
        title: 'Banquet Hall + Multi-Cuisine Dining',
        occupancy: '250-300 Pax Capacity',
        price: 'Custom Package Quote',
        description: 'Hall rental + stage setup + multi-cuisine Indian & Oriental buffet'
      },
      {
        id: 'banquet-hall-full-package',
        code: 'MAP',
        title: 'Grand Event Package (Hall + Dining + Decor)',
        occupancy: '250-300 Pax Capacity',
        price: 'Tailored Event Package',
        description: 'Full corporate/wedding package including venue, custom catering, decor, & valet'
      }
    ]
  }
];