export type JobListing = {
  id: string;
  title: string;
  department: 'Front Office' | 'Food & Beverage' | 'Housekeeping' | 'Management' | 'Maintenance' | 'Transport';
  location: string;
  type: 'Full-time' | 'Part-time' | 'Shift-based';
  experience: string;
  salaryRange: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  isHot?: boolean;
};

export const CAREER_LISTINGS: JobListing[] = [
  {
    id: 'front-desk-executive',
    title: 'Front Desk & Guest Relations Executive',
    department: 'Front Office',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Full-time',
    experience: '1 - 3 Years in Hotel Operations',
    salaryRange: '₹18,000 - ₹25,000 / month',
    isHot: true,
    description: 'We are seeking a warm, professional Front Desk Executive to manage guest check-ins, VIP reservations, phone inquiries, and deliver premier Rajasthani hospitality.',
    responsibilities: [
      'Manage check-in, check-out, room allocation, and guest verification as per hotel standards.',
      'Coordinate with housekeeping and maintenance teams for seamless room readiness.',
      'Handle direct inquiries via phone, email, and OTA partner portals.',
      'Maintain guest billing records, key card programming, and payment collection.'
    ],
    qualifications: [
      'Diploma/Degree in Hotel Management or relevant field preferred.',
      'Good communication skills in Hindi & English.',
      'Working knowledge of PMS software and basic computer operations.',
      'Professional demeanor and customer-first mindset.'
    ]
  },
  {
    id: 'kitchen-supervisor-chef',
    title: 'Executive Chef / Kitchen Supervisor',
    department: 'Food & Beverage',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Full-time',
    experience: '3 - 5 Years in Multi-Cuisine Dining',
    salaryRange: '₹28,000 - ₹38,000 / month',
    isHot: true,
    description: 'Lead our kitchen team at Royal Palace Dining! Prepare authentic North Indian, Rajasthani delicacies, Tandoori starters, and Oriental dishes for hotel guests and banquet gatherings.',
    responsibilities: [
      'Oversee daily kitchen preparation, food quality, taste standards, and hygienic food safety.',
      'Design seasonal menus and banquet catering menus for events (up to 300 pax).',
      'Manage inventory, kitchen store supplies, wastage control, and supplier orders.',
      'Supervise line cooks, commis chefs, and kitchen utility staff.'
    ],
    qualifications: [
      'Proven experience as Chef / Kitchen Head in a reputed hotel or restaurant.',
      'Expertise in North Indian, Mughlai, and Continental/Chinese basics.',
      'Strong leadership skills and inventory control awareness.'
    ]
  },
  {
    id: 'banquet-event-coordinator',
    title: 'Banquet & Event Host Manager',
    department: 'Management',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Full-time',
    experience: '2 - 4 Years in Event Hospitality',
    salaryRange: '₹22,000 - ₹32,000 / month',
    description: 'Manage corporate client bookings, grand wedding functions, and social gatherings in our 250-300 pax Banquet Hall.',
    responsibilities: [
      'Interact with corporate clients and wedding families to plan hall layouts, decor, and dining.',
      'Coordinate sound, lighting, stage, and banquet staff during live events.',
      'Prepare banquet contracts, advance billing, and post-event guest feedback collection.',
      'Promote banquet space to regional corporate offices and wedding planners.'
    ],
    qualifications: [
      'Experience in event management or hotel banquet operations.',
      'Strong organizational, negotiation, and interpersonal abilities.',
      'Ability to handle live event execution smoothly.'
    ]
  },
  {
    id: 'housekeeping-supervisor',
    title: 'Housekeeping & Maintenance Supervisor',
    department: 'Housekeeping',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Full-time',
    experience: '1 - 3 Years',
    salaryRange: '₹15,000 - ₹20,000 / month',
    description: 'Ensure immaculate cleanliness, linen care, and pristine ambiance across all 5 room categories, lobby, and banquet spaces.',
    responsibilities: [
      'Inspect rooms prior to check-in to ensure flawless hygiene and amenities setup.',
      'Manage room linen, laundry schedules, toilet supplies, and cleaning chemicals inventory.',
      'Supervise housekeeping attendants and maintain daily cleaning checklists.',
      'Coordinate minor repair tasks with the technical maintenance team.'
    ],
    qualifications: [
      'Prior housekeeping supervisory experience in hotels or luxury resorts.',
      'Keen eye for detail, hygiene standards, and team coordination.'
    ]
  },
  {
    id: 'shuttle-chauffeur',
    title: 'Executive Shuttle Driver & Fleet Chauffeur',
    department: 'Transport',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Full-time',
    experience: '3+ Years Driving Experience',
    salaryRange: '₹16,000 - ₹22,000 / month',
    description: 'Provide safe, comfortable, and punctual shuttle transfers for hotel guests to airports (GWL, AGR, JAI, DEL), railway stations, and local tourist spots (Chambal Safari, Machkund).',
    responsibilities: [
      'Operate hotel fleet vehicles (Sedans, SUVs) adhering to traffic laws and safety rules.',
      'Perform daily vehicle cleanliness checks, fuel checks, and regular maintenance logs.',
      'Greet guests warmly, assist with luggage, and guide them on local sightseeing spots.',
      'Maintain punctual pickup and drop times.'
    ],
    qualifications: [
      'Valid Commercial / Light Motor Vehicle Driving License.',
      'Clean driving record with knowledge of routes around Dholpur, Agra, Gwalior, and Jaipur.',
      'Polite and disciplined demeanor.'
    ]
  }
];
