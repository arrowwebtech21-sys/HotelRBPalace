export type FleetVehicle = {
  id: string;
  name: string;
  category: 'Sedan' | 'Luxury SUV' | 'Mini-Bus';
  capacity: string;
  models: string;
  features: string[];
  baseRatePerKm: string;
  image: string;
};

export type ShuttleRoutePackage = {
  id: string;
  routeName: string;
  destinationType: 'Airport' | 'Railway Station' | 'Tourist Spot' | 'Intercity Transfer';
  distanceOneWay: string;
  estimatedTime: string;
  fixedRateSedan: string;
  fixedRateSUV: string;
  popular?: boolean;
};

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: 'executive-sedan',
    name: 'Executive AC Sedan',
    category: 'Sedan',
    capacity: '4 Passengers + 3 Bags',
    models: 'Swift Dzire / Toyota Etios / Hyundai Aura',
    features: ['Chilled AC', 'Verified Chauffeur', 'Bottled Mineral Water', 'Phone Chargers', 'Luggage Boot Space'],
    baseRatePerKm: '₹12 / km',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'luxury-suv',
    name: 'Royal Premium SUV',
    category: 'Luxury SUV',
    capacity: '6-7 Passengers + 5 Bags',
    models: 'Toyota Innova Crysta / Mahindra XUV700',
    features: ['Dual Zone AC', 'Leather Captain Seats', 'Ample Legroom', 'Bottled Water & Snacks', 'Chauffeur On Demand'],
    baseRatePerKm: '₹18 / km',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tempo-traveler',
    name: 'Banquet & Group Mini-Bus',
    category: 'Mini-Bus',
    capacity: '12-16 Passengers + Heavy Luggage',
    models: 'Force Tempo Traveler AC 16-Seater',
    features: ['High-Roof AC Cabin', 'Reclining Seats', 'Pushback Chairs', 'Group Sightseeing Audio', 'Ideal for Wedding Parties'],
    baseRatePerKm: '₹26 / km',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80'
  }
];

export const POPULAR_SHUTTLE_ROUTES: ShuttleRoutePackage[] = [
  {
    id: 'gwalior-airport',
    routeName: 'Gwalior Rajmata Vijaya Raje Scindia Airport (GWL)',
    destinationType: 'Airport',
    distanceOneWay: '68 km',
    estimatedTime: '1 hr 15 mins',
    fixedRateSedan: '₹1,800',
    fixedRateSUV: '₹2,600',
    popular: true
  },
  {
    id: 'agra-airport',
    routeName: 'Agra Kheria Airport (AGR) / Agra Cantt Station',
    destinationType: 'Airport',
    distanceOneWay: '58 km',
    estimatedTime: '1 hr 05 mins',
    fixedRateSedan: '₹1,650',
    fixedRateSUV: '₹2,400',
    popular: true
  },
  {
    id: 'dholpur-railway-station',
    routeName: 'Dholpur Junction Railway Station (DHO) / Bus Stand',
    destinationType: 'Railway Station',
    distanceOneWay: '3.5 km',
    estimatedTime: '10 mins',
    fixedRateSedan: '₹350',
    fixedRateSUV: '₹500',
    popular: true
  },
  {
    id: 'chambal-safari-transfer',
    routeName: 'Chambal River Wildlife Boat Safari Sightseeing Package',
    destinationType: 'Tourist Spot',
    distanceOneWay: '8 km (Roundtrip)',
    estimatedTime: '15 mins drive',
    fixedRateSedan: '₹750 (Return)',
    fixedRateSUV: '₹1,100 (Return)',
    popular: true
  },
  {
    id: 'machkund-tourist-transfer',
    routeName: 'Machkund Holy Temples & Sarovar Circuit',
    destinationType: 'Tourist Spot',
    distanceOneWay: '4 km (Roundtrip)',
    estimatedTime: '10 mins drive',
    fixedRateSedan: '₹600 (Return)',
    fixedRateSUV: '₹900 (Return)'
  },
  {
    id: 'jaipur-airport',
    routeName: 'Jaipur International Airport (JAI)',
    destinationType: 'Airport',
    distanceOneWay: '265 km',
    estimatedTime: '4 hrs 30 mins',
    fixedRateSedan: '₹4,800',
    fixedRateSUV: '₹6,900'
  },
  {
    id: 'delhi-igi-airport',
    routeName: 'Delhi IGI Airport (DEL) / NCR Express Transfer',
    destinationType: 'Airport',
    distanceOneWay: '290 km',
    estimatedTime: '5 hrs 00 mins',
    fixedRateSedan: '₹5,400',
    fixedRateSUV: '₹7,800'
  }
];
