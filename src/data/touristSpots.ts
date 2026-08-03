export type TouristSpot = {
  id: string;
  name: string;
  hindiName: string;
  distanceKm: number;
  travelTimeMinutes: number;
  category: 'Heritage' | 'Wildlife Safari' | 'Sacred Temple' | 'Architectural Wonder';
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  bestTimeToVisit: string;
  image: string;
  googleMapsUrl: string;
};

export const TOURIST_SPOTS: TouristSpot[] = [
  {
    id: 'machkund-temple',
    name: 'Machkund Temple & Holy Tank',
    hindiName: 'मछकुण्ड तीर्थ स्थान',
    distanceKm: 4,
    travelTimeMinutes: 10,
    category: 'Sacred Temple',
    shortDescription: 'Ancient sacred pilgrimage site surrounded by 108 historic temples around a pristine natural water reservoir.',
    fullDescription: 'Machkund is an ancient sacred lake named after King Muchukunda of the Ikshvaku dynasty. Surrounded by dozens of historic sandstone shrines, it is revered as the king of all pilgrimage sites ("Teerthraj"). The divine morning and evening aarti against the calm waters is a soul-stirring experience.',
    highlights: ['108 Heritage Shrines', 'Sacred Sarovar Dip', 'Evening Aarti Ritual', 'Photographic Sandstone Architecture'],
    bestTimeToVisit: '6:00 AM - 9:00 AM & 5:00 PM - 7:00 PM',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    googleMapsUrl: 'https://maps.google.com/?q=Machkund+Dholpur'
  },
  {
    id: 'chambal-river-safari',
    name: 'National Chambal River Sanctuary',
    hindiName: 'राष्ट्रीय चम्बल घड़ियाल अभयारण्य',
    distanceKm: 8,
    travelTimeMinutes: 15,
    category: 'Wildlife Safari',
    shortDescription: 'World-renowned river ecosystem featuring boat safaris to spot endangered Gharials, Gangetic Dolphins & Marsh Crocodiles.',
    fullDescription: 'Located just 15 minutes from Hotel RB Palace, the Chambal River Sanctuary offers one of India’s purest river wildlife experiences. Board a motorboat to observe rare fish-eating Gharials sunbathing on sandbanks, spot freshwater Gangetic River Dolphins leaping, and admire over 300 species of migratory birds.',
    highlights: ['Gangetic River Dolphin Spotting', 'Gharial & Mugger Crocodile Boat Safari', 'Rare Bird Watching', 'Scenic Sunset Views'],
    bestTimeToVisit: '7:00 AM - 11:00 AM & 3:30 PM - 6:00 PM (Oct to April)',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    googleMapsUrl: 'https://maps.google.com/?q=Chambal+River+Sanctuary+Dholpur'
  },
  {
    id: 'shergarh-fort',
    name: 'Shergarh Fort Dholpur',
    hindiName: 'शेरगढ़ किला धौलपुर',
    distanceKm: 5,
    travelTimeMinutes: 12,
    category: 'Heritage',
    shortDescription: 'Historic 15th-century riverside fortress built by Raja Maldeo and later fortified by Sher Shah Suri along the Chambal.',
    fullDescription: 'Shergarh Fort stands majestically south of Dholpur town on the banks of the Chambal River. Originally constructed by Raja Maldeo of Malwa and renovated by Sher Shah Suri in 1540 AD, the fort features formidable ramparts, ancient Hanuman temple shrines, and panoramic views of the river plains.',
    highlights: ['15th-Century Mughal-Rajput Architecture', 'Hunsunkar Historic Cannon', 'Chambal River Overlook', 'Fortress Ramparts Walk'],
    bestTimeToVisit: '8:00 AM - 5:00 PM',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    googleMapsUrl: 'https://maps.google.com/?q=Shergarh+Fort+Dholpur'
  },
  {
    id: 'van-vihar-sanctuary',
    name: 'Van Vihar Wildlife Sanctuary',
    hindiName: 'वन विहार अभयारण्य',
    distanceKm: 18,
    travelTimeMinutes: 30,
    category: 'Wildlife Safari',
    shortDescription: 'Lush forest reserve commissioned by former Dholpur rulers, home to Blue Bulls, Chital, Leopards, and wild flora.',
    fullDescription: 'Spread across the Vindhyan plateau hill range near Dholpur, Van Vihar is one of Rajasthan’s oldest protected wildlife parks. Established as a royal hunting preserve by the Ranas of Dholpur, it features dense Dhok tree forests, picturesque water bodies, and rich wildlife including Sambhar deer, Blue Bulls, and nocturnal Leopards.',
    highlights: ['Forest Drive & Nature Trails', 'Chital & Sambhar Deer Sighting', 'Ramsagar Lake Proximity', 'Royal Hunting Pavilion Ruins'],
    bestTimeToVisit: '6:30 AM - 10:00 AM & 3:00 PM - 6:00 PM',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80',
    googleMapsUrl: 'https://maps.google.com/?q=Van+Vihar+Sanctuary+Dholpur'
  },
  {
    id: 'talab-e-shahi',
    name: 'Talab-e-Shahi & Khanpur Palace',
    hindiName: 'तालाब-ए-शाही एवं खानपुर महल',
    distanceKm: 27,
    travelTimeMinutes: 40,
    category: 'Architectural Wonder',
    shortDescription: 'Exquisite 1617 AD royal lake and pleasure palace built for Mughal Prince Shah Jahan.',
    fullDescription: 'Talab-e-Shahi is a picturesque historic lake built in 1617 AD by Shah Jahan’s courtier Prince Shahjahan as a shooting lodge. The pristine lake pavilion boasts delicate stone arches and balconies. In winter months, thousands of migratory waterfowl nest around the shimmering waters.',
    highlights: ['17th-Century Mughal Pavilion', 'Winter Migratory Birding', 'Shimmering Reflection Photography', 'Peaceful Lakeside Atmosphere'],
    bestTimeToVisit: '8:00 AM - 4:30 PM',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    googleMapsUrl: 'https://maps.google.com/?q=Talab-e-Shahi+Dholpur'
  },
  {
    id: 'nihal-tower',
    name: 'Nihal Tower (Ghanta Ghar Dholpur)',
    hindiName: 'निहाल टावर घंटाघर',
    distanceKm: 3.5,
    travelTimeMinutes: 8,
    category: 'Heritage',
    shortDescription: 'India’s largest freestanding clock tower standing 150 feet high, built by Rana Nihal Singh in 1880.',
    fullDescription: 'Nihal Tower, popularly known as Ghanta Ghar, is a iconic architectural landmark located in the heart of Dholpur city. Construction started in 1880 by Rana Nihal Singh and completed in 1910. The 7-storey clock tower incorporates 12 distinct clock chimes and red sandstone carving.',
    highlights: ['Largest Clock Tower in India', 'Red Dholpur Sandstone Carvings', '7-Tier Architectural Heritage', 'Central City Square Landmark'],
    bestTimeToVisit: 'Morning & Evening Illuminated View',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    googleMapsUrl: 'https://maps.google.com/?q=Nihal+Tower+Dholpur'
  },
  {
    id: 'taj-mahal-agra',
    name: 'Taj Mahal & Agra Fort (Agra Day Trip)',
    hindiName: 'ताज महल एवं आगरा किला',
    distanceKm: 55,
    travelTimeMinutes: 60,
    category: 'Architectural Wonder',
    shortDescription: 'World Heritage Wonder located just an hour drive from Hotel RB Palace along smooth express routes.',
    fullDescription: 'Hotel RB Palace serves as an ideal comfortable base for exploring Agra without the city congestion. Enjoy a seamless 60-minute drive via our shuttle service to visit the UNESCO World Heritage Taj Mahal, Agra Fort, and Mehtab Bagh.',
    highlights: ['UNESCO World Wonder', 'Agra Fort & Tomb of Itmad-ud-Daulah', 'Pethai Sweets Shopping', 'Comfortable Direct Hotel Shuttle'],
    bestTimeToVisit: 'Sunrise to Sunset (Closed Fridays)',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    googleMapsUrl: 'https://maps.google.com/?q=Taj+Mahal+Agra'
  },
  {
    id: 'gwalior-fort',
    name: 'Gwalior Fort & Jai Vilas Palace',
    hindiName: 'ग्वालियर किला एवं जय विलास महल',
    distanceKm: 60,
    travelTimeMinutes: 65,
    category: 'Heritage',
    shortDescription: 'Imposing hilltop fort known as "The Pearl Among Fortresses" and the lavish Scindia Palace.',
    fullDescription: 'Heading south on NH-3 highway from Hotel RB Palace leads straight to historic Gwalior. Explore Man Singh Palace with its vibrant turquoise tiles, the massive 8th-century rock-cut Jain statues, and the opulent Jai Vilas Palace Museum.',
    highlights: ['Man Singh Palace Turquoise Carvings', 'Jai Vilas Palace Crystal Chandelires', 'Gwalior Light & Sound Show', 'Rock-Cut Tirthankara Sculptures'],
    bestTimeToVisit: '9:00 AM - 5:00 PM',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    googleMapsUrl: 'https://maps.google.com/?q=Gwalior+Fort'
  }
];
