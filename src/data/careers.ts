export type JobListing = {
  id: string;
  title: string;
  department: 'Front Office' | 'Food & Beverage' | 'Housekeeping' | 'Banquet & Events' | 'Security & Support';
  location: string;
  type: 'Full-time' | 'Part-time' | 'Shift-based';
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  isHot?: boolean;
};

export const CAREER_LISTINGS: JobListing[] = [
  {
    id: 'front-office-manager',
    title: 'Front Office Manager',
    department: 'Front Office',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Full-time',
    experience: '3 - 5 Years in Hotel Front Desk',
    isHot: true,
    description: 'Oversee front desk operations, guest check-ins/outs, room inventory management, PMS operations, and deliver premier Rajasthani hospitality.',
    responsibilities: [
      'Manage daily front desk operations, reservations, and room allocation.',
      'Supervise front office assistants and desk staff for seamless guest assistance.',
      'Handle guest complaints, special VIP requests, and corporate check-ins.',
      'Coordinate with housekeeping and revenue teams to maximize room occupancy.'
    ],
    qualifications: [
      'Degree / Diploma in Hotel Management or related field.',
      '3+ years front desk supervisory experience in reputed hotels.',
      'Proficiency in Hotel PMS software, billing, and fluent communication.'
    ]
  },
  {
    id: 'front-office-assistant',
    title: 'Front Office Assistant',
    department: 'Front Office',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Full-time',
    experience: '1 - 2 Years / Fresher Welcome',
    isHot: true,
    description: 'Assist guests at check-in/out, manage phone calls, process room bookings, and provide local travel guidance.',
    responsibilities: [
      'Greet arriving guests, verify identity documents, and issue room key cards.',
      'Handle incoming phone calls, booking inquiries, and guest messages.',
      'Assist guests with check-out billing, cash/card payments, and receipts.'
    ],
    qualifications: [
      'Graduate / Diploma in Hospitality or relevant discipline.',
      'Good spoken Hindi & English communication skills.',
      'Basic computer literacy and welcoming personality.'
    ]
  },
  {
    id: 'housekeeping-supervisor',
    title: 'Housekeeping Supervisor',
    department: 'Housekeeping',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Full-time',
    experience: '2 - 4 Years in Housekeeping',
    description: 'Ensure immaculate room hygiene, linen care, and pristine cleanliness across all 5 room categories and public areas.',
    responsibilities: [
      'Inspect guest rooms and public corridors prior to guest arrivals.',
      'Manage housekeeping staff shifts, room cleaning checklists, and laundry schedules.',
      'Monitor cleaning chemicals inventory, room amenities supplies, and linen stores.'
    ],
    qualifications: [
      'Prior supervisory experience in hotel housekeeping.',
      'Strong eye for detail, hygiene standards, and team coordination.'
    ]
  },
  {
    id: 'restaurant-supervisor',
    title: 'Restaurant Supervisor',
    department: 'Food & Beverage',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Full-time',
    experience: '2 - 4 Years in Dining Operations',
    isHot: true,
    description: 'Supervise daily restaurant dining operations in our Oriental interior dining room, ensuring high service quality and guest satisfaction.',
    responsibilities: [
      'Oversee restaurant seating, table service standards, and dining ambiance.',
      'Supervise service staff, waiters, and table turnover during breakfast, lunch, and dinner.',
      'Handle guest feedback, billing verification, and coordination with the kitchen team.'
    ],
    qualifications: [
      'Diploma/Degree in Hotel Management or F&B operations experience.',
      'Proven leadership skills in casual or fine-dining restaurant settings.'
    ]
  },
  {
    id: 'banquet-manager',
    title: 'Banquet Manager',
    department: 'Banquet & Events',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Full-time',
    experience: '3 - 5 Years in Event Hosting',
    isHot: true,
    description: 'Lead event execution, client proposals, hall arrangements, and service teams for grand corporate conferences and private celebrations (250-300 pax).',
    responsibilities: [
      'Meet with clients to plan banquet layouts, stage arrangements, and catering menus.',
      'Coordinate sound, AV lighting, stage setup, and banquet service staff during live functions.',
      'Manage banquet contracts, advance billing, and post-event guest feedback.'
    ],
    qualifications: [
      'Proven experience in hotel banquet operations or event management.',
      'Strong organizational, communication, and client management skills.'
    ]
  },
  {
    id: 'f-and-b-supervisor',
    title: 'F&B Supervisor',
    department: 'Food & Beverage',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Full-time',
    experience: '2 - 3 Years in F&B Operations',
    description: 'Manage Food & Beverage service coordination across in-room dining, restaurant orders, and event catering.',
    responsibilities: [
      'Supervise food delivery, room service orders, and buffet setups.',
      'Maintain hygiene standards, cutlery/crockery stock control, and service speed.',
      'Train service staff on guest handling and food presentation.'
    ],
    qualifications: [
      'Diploma in Hotel Management or F&B service background.',
      'Good operational knowledge of food service and beverage management.'
    ]
  },
  {
    id: 'kitchen-cook',
    title: 'Kitchen Cook',
    department: 'Food & Beverage',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Full-time',
    experience: '2 - 5 Years in Commercial Kitchens',
    isHot: true,
    description: 'Prepare authentic North Indian, Rajasthani, Tandoori, and Oriental multi-cuisine dishes for restaurant dining and banquets.',
    responsibilities: [
      'Cook and present multi-cuisine dishes following hotel standard recipes.',
      'Maintain kitchen hygiene, station cleanliness, and food safety standards.',
      'Coordinate with the kitchen supervisor for food prep and banquet buffet orders.'
    ],
    qualifications: [
      'Proven experience as a cook in a hotel, restaurant, or catering service.',
      'Expertise in Indian gravies, tandoori starters, or Chinese dishes.'
    ]
  },
  {
    id: 'kitchen-helper',
    title: 'Kitchen Helper',
    department: 'Food & Beverage',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Full-time',
    experience: 'Fresher / 6 Months Kitchen Experience',
    description: 'Assist kitchen cooks with vegetable chopping, ingredient preparation, dishwashing, and kitchen cleanliness.',
    responsibilities: [
      'Assist chefs with washing, peeling, and cutting vegetables and ingredients.',
      'Clean cooking utensils, pots, pans, and maintain kitchen counter sanitation.',
      'Store incoming food provisions and maintain pantry organization.'
    ],
    qualifications: [
      'Hardworking, punctual, and willing to learn in a fast-paced hotel kitchen.',
      'Basic awareness of food hygiene and cleanliness.'
    ]
  },
  {
    id: 'waiter',
    title: 'Waiter / Service Steward',
    department: 'Food & Beverage',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Full-time',
    experience: '1 - 2 Years / Fresher Welcome',
    description: 'Serve food and beverages to restaurant guests, take room service orders, and maintain clean table setups.',
    responsibilities: [
      'Greet guests at restaurant tables, present menus, and record food orders.',
      'Serve meals and beverages promptly adhering to service etiquette.',
      'Deliver room service trays to guest rooms and clear used tableware.'
    ],
    qualifications: [
      'Polite behavior, good communication skills, and pleasant demeanor.',
      'Previous experience as waiter or steward is preferred.'
    ]
  },
  {
    id: 'driver',
    title: 'Driver / Chauffeur',
    department: 'Security & Support',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Full-time',
    experience: '3+ Years Commercial Driving',
    description: 'Provide safe, comfortable shuttle transfers for hotel guests to airports, railway stations, and local tourist spots.',
    responsibilities: [
      'Drive hotel vehicles safely for guest pick-up, drop, and sightseeing tours.',
      'Perform vehicle cleanliness checks, fuel monitoring, and routine maintenance.',
      'Assist guests with luggage loading and unloading.'
    ],
    qualifications: [
      'Valid Commercial / LMV Driving License.',
      'Clean driving record with knowledge of routes around Dholpur, Agra, and Gwalior.'
    ]
  },
  {
    id: 'bell-boy',
    title: 'Bell Boy',
    department: 'Front Office',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Full-time',
    experience: 'Fresher / 1 Year Experience',
    description: 'Assist guests with luggage handling upon arrival/departure, escort guests to rooms, and manage lobby errands.',
    responsibilities: [
      'Welcome arriving guests, assist with luggage carrying to designated rooms.',
      'Explain basic room amenities (AC, TV, hot water kettle) to check-in guests.',
      'Deliver guest messages, parcels, and assist front desk with lobby tasks.'
    ],
    qualifications: [
      'Active, energetic, and customer-service oriented attitude.',
      'Basic communication skills and polite behavior.'
    ]
  },
  {
    id: 'gate-man',
    title: 'Gate Man',
    department: 'Security & Support',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Shift-based',
    experience: '1+ Year Gate / Security Experience',
    description: 'Manage main property entrance gate, salute & welcome arriving guest vehicles, and assist valet parking.',
    responsibilities: [
      'Open entrance gate for guest cars, taxis, and official hotel vehicles.',
      'Greet arriving guests respectfully and direct cars to parking/reception porch.',
      'Monitor entry of unauthorized vehicles and keep entrance driveway clear.'
    ],
    qualifications: [
      'Disciplined, alert, and courteous personality.',
      'Prior experience as gate keeper or security attendant.'
    ]
  },
  {
    id: 'security-guard',
    title: 'Security Guard',
    department: 'Security & Support',
    location: 'Hotel RB Palace, Dholpur (NH-3)',
    type: 'Shift-based',
    experience: '1 - 3 Years Security Guarding',
    description: 'Maintain 24/7 safety, property surveillance, visitor logs, and secure premises across hotel grounds and parking.',
    responsibilities: [
      'Patrol hotel building corridors, parking lots, and banquet areas during shifts.',
      'Maintain visitor and material entry registers at security post.',
      'Ensure safety of guest vehicles and assist in emergency response.'
    ],
    qualifications: [
      'Physical fitness, alertness, and clean background verification.',
      'Prior experience in hotel, commercial, or residential security.'
    ]
  }
];
