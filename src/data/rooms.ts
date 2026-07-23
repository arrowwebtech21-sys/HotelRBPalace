import { Flower2, ShieldCheck, Sun, Wind } from 'lucide-react';
import type { Room } from '../types/room';

export const ROOMS: Room[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    tag: 'Mountain & Garden View',
    price: '₹2,499 / night',
    size: '350 sq ft',
    capacity: '2 Guests',
    description:
      'Designed for comfort and relaxation, our Deluxe Rooms offer stylish interiors, plush bedding, modern amenities, and a soothing ambiance perfect for business or leisure travelers.',
    amenities: [
      'King-Sized Bed',
      'Air Conditioning',
      'High-Speed Wi-Fi',
      '24/7 Room Service',
      'Ensuite Bathroom',
      'LED Television'
    ],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200'
    ],
    features: [
      { icon: Sun, title: 'Scenic Mountain Sightlines', desc: 'Enjoy bright, natural daylight facing eastern hills.' },
      { icon: Flower2, title: 'Modern Bath Amenities', desc: 'Premium bath fittings accompanied by organic toiletries.' },
      { icon: ShieldCheck, title: 'In-Room Automation', desc: 'Integrated ambient lighting and touch climate controls.' }
    ]
  },
  {
    id: 'super-deluxe-room',
    name: 'Super Deluxe Room',
    tag: 'Luxury Heritage View',
    price: '₹3,499 / night',
    size: '480 sq ft',
    capacity: '2 Adults, 1 Child',
    description:
      'Experience elevated luxury in our Super Deluxe Rooms featuring enhanced spatial layout, refined decor, expanded seating area, and royal service touches.',
    amenities: [
      'King Royal Bed',
      'Private Balcony',
      'Tea & Coffee Maker',
      'Complimentary Breakfast',
      'Mini Refrigerator',
      'Soaking Tub'
    ],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200'
    ],
    features: [
      { icon: Sun, title: 'Panoramic Sunset View', desc: 'Extended balcony offering expansive horizon vistas.' },
      { icon: ShieldCheck, title: 'Dedicated Service Line', desc: 'Fast-track concierge and in-room dining assistance.' },
      { icon: Wind, title: 'Climate Comfort System', desc: 'Silent temperature control for optimum relaxation.' }
    ]
  },
  {
    id: 'royal-suite',
    name: 'Royal Palace Suite',
    tag: 'Panoramic Courtyard View',
    price: '₹5,999 / night',
    size: '750 sq ft',
    capacity: '4 Guests',
    description:
      'The epitome of grandeur and comfort. Featuring separate living quarters, exquisite Rajasthani royal aesthetic, master bedroom suite, and VIP privileges.',
    amenities: [
      'Separate Living Salon',
      'Personalized Butler Care',
      'Marble Spa Bathroom',
      '24/7 Premium Room Service',
      'Welcome Drinks & Fruit Basket',
      'Express Check-In'
    ],
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200'
    ],
    features: [
      { icon: Wind, title: 'Royal Living Lounge', desc: 'Spacious lounge equipped with plush heritage furniture.' },
      { icon: Flower2, title: 'Luxury Tub & Rainshower', desc: 'Freestanding tub and dual tropical showerheads.' },
      { icon: ShieldCheck, title: 'VIP Reception Care', desc: 'Priority booking for banquets and dining services.' }
    ]
  }
];