import { Flower2, ShieldCheck, Sun, Wind } from 'lucide-react';
import type { Room } from '../types/room';

export const ROOMS: Room[] = [
  {
    id: 'deluxe-suite',
    name: 'Deluxe Heritage Suite',
    tag: 'Mountain & Valley View',
    price: '$280 / night',
    size: '450 sq ft',
    capacity: '2 Adults, 1 Child',
    description:
      'Immerse yourself in timeless luxury featuring private balcony views, hand-carved mahogany finishings, deep soaking tubs, and floor-to-ceiling glass paneling looking over the valley.',
    amenities: [
      'King-Sized Plush Bed',
      'Private Balcony',
      'High-Speed Wi-Fi 6',
      'Complimentary Breakfast',
      'Curated Mini Bar',
      'Soaking Bathtub'
    ],
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200'
    ],
    features: [
      { icon: Sun, title: 'Sunrise Sightline', desc: 'Unobstructed mountain view facing east for golden hour watching.' },
      { icon: Flower2, title: 'In-Suite Botanical Spa', desc: 'Freestanding bathtub accompanied by organic botanical bath oils.' },
      { icon: ShieldCheck, title: 'Smart Touch Control', desc: 'Integrated ambient lighting, curtain, and climate control touchpads.' }
    ]
  },
  {
    id: 'panoramic-villa',
    name: 'Panoramic Pool Villa',
    tag: 'Private Infinity Plunge Pool',
    price: '$520 / night',
    size: '850 sq ft',
    capacity: '4 Guests',
    description:
      'An exclusive private retreat featuring a temperature-controlled plunge pool, expanded outdoor dining deck, private fire pit, and 24/7 dedicated butler service.',
    amenities: [
      'Private Heated Pool',
      'Personal Butler Service',
      'Espresso Bar',
      'Spa Marble Bathroom',
      '24/7 In-Villa Dining',
      'Private Cabana'
    ],
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200'
    ],
    features: [
      { icon: Sun, title: 'Private Heated Plunge Pool', desc: 'Temperature controlled 24/7 with infinity edge horizon views.' },
      { icon: ShieldCheck, title: 'Personal Butler Care', desc: 'Dedicated staff member for unpacking, reservations, and in-suite dining.' },
      { icon: Wind, title: 'Outdoor Sunset Firepit', desc: 'Lounge around evening outdoor fireplace on custom teak furniture.' }
    ]
  },
  {
    id: 'garden-sanctuary',
    name: 'Garden Sanctuary Suite',
    tag: 'Botanical Courtyard',
    price: '$195 / night',
    size: '380 sq ft',
    capacity: '2 Guests',
    description:
      'Tucked deep into lush resort flora, this suite offers private garden path access, organic linen bedding, custom aromatherapy diffusers, and an open outdoor rain shower.',
    amenities: [
      'Private Garden Path',
      'Outdoor Rainfall Shower',
      'Organic Linens',
      'Work Desk',
      '4K Smart TV',
      'Herbal Tea Station'
    ],
    image:
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200'
    ],
    features: [
      { icon: Wind, title: 'Enclosed Courtyard', desc: 'Enclosed stone terrace wrapped in tropical local flora.' },
      { icon: Flower2, title: 'Open-Air Rainshower', desc: 'Open-air natural stone bathroom with tropical rainfall showerhead.' },
      { icon: ShieldCheck, title: 'Aromatherapy Bar', desc: 'Custom essential oil blends refreshed twice daily by housekeeping.' }
    ]
  }
];
