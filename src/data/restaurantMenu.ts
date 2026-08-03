export type MenuItem = {
  id: string;
  name: string;
  hindiName?: string;
  category: 'Starters & Soups' | 'Tandoori Specialties' | 'Main Course' | 'Chinese & Oriental' | 'Breads & Rice' | 'Desserts & Beverages';
  price: string;
  isVeg: boolean;
  isChefSpecial?: boolean;
  description: string;
  spiceLevel?: 'Mild' | 'Medium' | 'Spicy';
  image?: string;
};

export const RESTAURANT_MENU: MenuItem[] = [
  // Starters & Soups
  {
    id: 'paneer-tikka-royal',
    name: 'Royal Paneer Tikka Sunheri',
    hindiName: 'रॉयल पनीर टिक्का सुनेहरी',
    category: 'Tandoori Specialties',
    price: '₹280',
    isVeg: true,
    isChefSpecial: true,
    description: 'Fresh cottage cheese cubes marinated in hung curd, Kashmiri red chili, and secret royal spices cooked in charcoal tandoor.',
    spiceLevel: 'Medium',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hara-bhara-kebab',
    name: 'Dholpur Hara Bhara Kebab',
    hindiName: 'हरा भरा कबाब',
    category: 'Starters & Soups',
    price: '₹220',
    isVeg: true,
    description: 'Crispy spinach, green peas, and cashew patties pan-seared in clarified butter.',
    spiceLevel: 'Mild',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tandoori-malai-brocolli',
    name: 'Tandoori Malai Brocolli',
    hindiName: 'तंदूरी मलाई ब्रोकली',
    category: 'Tandoori Specialties',
    price: '₹295',
    isVeg: true,
    description: 'Fresh broccoli florets marinated in cream cheese, cardamom, and roasted garlic.',
    spiceLevel: 'Mild'
  },
  {
    id: 'royal-tomato-coriander-soup',
    name: 'Royal Tamatar Dhaniya Shorba',
    hindiName: 'टमाटर धनिया शोरबा',
    category: 'Starters & Soups',
    price: '₹140',
    isVeg: true,
    description: 'A aromatic spiced tomato soup tempered with fresh coriander roots and roasted cumin.',
    spiceLevel: 'Mild'
  },

  // Main Course
  {
    id: 'paneer-butter-masala',
    name: 'Palace Paneer Butter Masala',
    hindiName: 'पैलेस पनीर मक्खन मसाला',
    category: 'Main Course',
    price: '₹310',
    isVeg: true,
    isChefSpecial: true,
    description: 'Soft cottage cheese simmered in a velvety cashew, tomato butter gravy scented with fenugreek.',
    spiceLevel: 'Medium',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dal-makhani-palace',
    name: 'Slow-Cooked Dal RB Palace',
    hindiName: 'दाल मखनी आरबी पैलेस',
    category: 'Main Course',
    price: '₹270',
    isVeg: true,
    isChefSpecial: true,
    description: 'Black lentils slow-cooked overnight on charcoal coal, finished with fresh churned butter & cream.',
    spiceLevel: 'Mild',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kadhai-paneer-chambal',
    name: 'Kadhai Paneer Special',
    hindiName: 'कढ़ाई पनीर स्पेशल',
    category: 'Main Course',
    price: '₹300',
    isVeg: true,
    description: 'Pithy cottage cheese tossed with bell peppers, onion, and hand-crushed kadhai spices.',
    spiceLevel: 'Spicy'
  },
  {
    id: 'malai-kofta-mughlai',
    name: 'Mughlai Shahi Malai Kofta',
    hindiName: 'शाही मलाई कोफ्ता',
    category: 'Main Course',
    price: '₹320',
    isVeg: true,
    description: 'Melt-in-mouth cottage cheese and mawa dumplings served in rich saffron white gravy.',
    spiceLevel: 'Mild'
  },

  // Chinese & Oriental
  {
    id: 'veg-manchurian-gravy',
    name: 'Oriental Veg Manchurian (Dry / Gravy)',
    hindiName: 'वेज मंचूरियन',
    category: 'Chinese & Oriental',
    price: '₹240',
    isVeg: true,
    description: 'Crispy vegetable dumplings tossed in garlic, scallion, and soy chili glaze.',
    spiceLevel: 'Medium',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chili-paneer-oriental',
    name: 'Chili Paneer Wok Tossed',
    hindiName: 'चिली पनीर',
    category: 'Chinese & Oriental',
    price: '₹270',
    isVeg: true,
    isChefSpecial: true,
    description: 'Crispy paneer cubes with bell peppers and green chilies in a spicy oriental sauce.',
    spiceLevel: 'Spicy'
  },
  {
    id: 'hakka-noodles-palace',
    name: 'Palace Special Veg Hakka Noodles',
    hindiName: 'हक्का नूडल्स',
    category: 'Chinese & Oriental',
    price: '₹210',
    isVeg: true,
    description: 'Wok-tossed noodles with julienned colorful vegetables, sesame oil, and light soy sauce.',
    spiceLevel: 'Mild'
  },

  // Breads & Rice
  {
    id: 'butter-naan',
    name: 'Tandoori Butter Naan',
    hindiName: 'बटर नान',
    category: 'Breads & Rice',
    price: '₹60',
    isVeg: true,
    description: 'Refined flour bread baked in clay tandoor and brushed with farm butter.'
  },
  {
    id: 'garlic-cheese-naan',
    name: 'Stuffed Garlic Cheese Naan',
    hindiName: 'गार्लिक चीज़ नान',
    category: 'Breads & Rice',
    price: '₹95',
    isVeg: true,
    isChefSpecial: true,
    description: 'Tandoori bread filled with processed mozzarella and topped with minced garlic & herbs.'
  },
  {
    id: 'jeera-rice-basmati',
    name: 'Royal Saffron Jeera Rice',
    hindiName: 'शाही जीरा राइस',
    category: 'Breads & Rice',
    price: '₹170',
    isVeg: true,
    description: 'Long-grain aged Basmati rice tempered with ghee and aromatic royal cumin.'
  },
  {
    id: 'subz-dum-biryani',
    name: 'Royal Subz Dum Biryani with Raita',
    hindiName: 'शाही सब्ज़ दम बिरयानी',
    category: 'Breads & Rice',
    price: '₹280',
    isVeg: true,
    isChefSpecial: true,
    description: 'Fragrant Basmati rice dum-cooked with garden vegetables, saffron, mint, and whole spices.',
    spiceLevel: 'Medium',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80'
  },

  // Desserts & Beverages
  {
    id: 'gulab-jamun-kesar',
    name: 'Kesar Pista Gulab Jamun (2 Pcs)',
    hindiName: 'केसर पिस्ता गुलाब जामुन',
    category: 'Desserts & Beverages',
    price: '₹110',
    isVeg: true,
    description: 'Warm mawa dumplings soaked in cardamom and saffron sugar syrup.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'matka-kulfi-royal',
    name: 'Royal Matka Kulfi',
    hindiName: 'रॉयल मटका कुल्फी',
    category: 'Desserts & Beverages',
    price: '₹130',
    isVeg: true,
    description: 'Traditional slow-churned condensed milk ice cream flavored with pistachios and saffron in clay pot.'
  },
  {
    id: 'masala-chai-cold-coffee',
    name: 'Royal Rajasthani Masala Chai / Cold Coffee',
    hindiName: 'मसाला चाय / कोल्ड कॉफ़ी',
    category: 'Desserts & Beverages',
    price: '₹80',
    isVeg: true,
    description: 'Brewed CTC tea infused with ginger, cardamom, clove, or thick chilled cold coffee with chocolate drizzle.'
  }
];
