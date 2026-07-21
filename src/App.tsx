import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  Menu,
  X,
  Send,
  Wifi,
  Coffee,
  BedDouble,
  Tv,
  Utensils,
  Flower2,
  Car,
  Plane,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Maximize2,
  Compass,
  ShieldCheck,
  Wind,
  Sun,
  Users,
  Maximize,
  Eye,
  Bed,
  Info,
  Sparkle,
  Layers
} from 'lucide-react';
import BoomerangVideoBg from './BoomerangVideoBg';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

const MANAGER_EMAIL = 'reservations@yourhoteldomain.com';

interface RoomFeature {
  icon: any;
  title: string;
  desc: string;
}

interface Room {
  id: string;
  name: string;
  tag: string;
  price: string;
  size: string;
  capacity: string;
  description: string;
  amenities: string[];
  image: string;
  gallery: string[];
  features: RoomFeature[];
}

const ROOMS: Room[] = [
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

function useOnScreen(options = { threshold: 0.15 }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible] as const;
}

const Magnet: React.FC<{ children: React.ReactNode; padding?: number; strength?: number; className?: string }> = ({
  children,
  padding = 100,
  strength = 3,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const distance = Math.hypot(distX, distY);
      const threshold = Math.max(rect.width, rect.height) / 2 + padding;

      if (distance < threshold) {
        setIsHovered(true);
        setPosition({ x: distX / strength, y: distY / strength });
      } else {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out',
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

const StackingSuiteCard: React.FC<{
  room: Room;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  onBook: (roomId: string) => void;
}> = ({ room, index, totalCards, progress, onBook }) => {
  const navigate = useNavigate();
  const targetScale = 1 - (totalCards - 1 - index) * 0.04;
  const cardProgress = useTransform(progress, [index / totalCards, 1], [1, targetScale]);

  return (
    <div
      className="sticky top-24 md:top-32 h-[80vh] flex items-center justify-center mb-10 pointer-events-auto z-10"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.div
        style={{ scale: cardProgress }}
        className="w-full max-w-6xl bg-white border border-[#1f2a1d]/10 rounded-[36px] sm:rounded-[48px] p-6 sm:p-10 flex flex-col md:flex-row gap-8 shadow-2xl h-full overflow-hidden"
      >
        <div className="w-full md:w-1/2 h-64 md:h-full relative rounded-3xl overflow-hidden bg-gray-100 shrink-0">
          <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-[#1f2a1d] shadow-sm">
            {room.tag}
          </span>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
          <div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#85AB8B]">
                0{index + 1} / 0{totalCards}
              </span>
              <span className="text-xl font-bold text-[#336443]">{room.price}</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-normal text-[#1f2a1d] mb-4">{room.name}</h3>
            <p className="text-sm sm:text-base text-[#4b5b47] leading-relaxed mb-6">{room.description}</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {room.amenities.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#1f2a1d]">
                  <CheckCircle2 className="w-4 h-4 text-[#336443]" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
            <span className="text-xs text-[#4b5b47] font-medium">{room.size} • {room.capacity}</span>
            <div className="flex gap-3 relative z-30">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/suite/${room.id}`);
                }}
                className="py-3 px-5 rounded-2xl border border-[#1f2a1d]/20 text-[#1f2a1d] text-xs font-semibold hover:bg-gray-100 hover:border-[#336443] transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#336443]" /> Gallery
              </button>
              <a
                href="#booking-form"
                onClick={() => onBook(room.id)}
                className="py-3 px-6 rounded-2xl bg-[#3d5638] hover:bg-[#2d4228] text-white text-xs font-semibold transition-all text-center flex items-center gap-1 shadow-sm cursor-pointer"
              >
                Reserve
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* SUITE GALLERY PAGE WITH BOTTOM-TO-TOP SLIDE-UP ENTRANCE TRANSITION */
function SuiteGalleryPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'details'>('overview');

  const room = ROOMS.find((r) => r.id === id) || ROOMS[0];
  const roomGallery = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    specialRequests: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(`Reservation Enquiry: ${room.name} - ${formData.name}`);
    const mailBody = encodeURIComponent(
      `NEW RESERVATION REQUEST\n` +
        `---------------------------\n` +
        `Guest Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Selected Accomodation: ${room.name}\n` +
        `Check-In Date: ${formData.checkIn}\n` +
        `Check-Out Date: ${formData.checkOut}\n` +
        `Special Requests: ${formData.specialRequests || 'None'}\n` +
        `---------------------------\n`
    );

    window.location.href = `mailto:${MANAGER_EMAIL}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full bg-[#fcfdfc] text-[#1f2a1d] min-h-screen flex flex-col justify-between selection:bg-[#85AB8B] selection:text-white"
    >
      {/* Main Content Wrapper */}
      <div className="flex-grow">
        
        {/* Glassmorphic Header */}
        <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-[#1f2a1d]/10 px-6 sm:px-12 py-4 flex items-center justify-between shadow-xs">
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => window.scrollTo(0, 0), 100);
            }}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1f2a1d] hover:text-[#336443] transition-all bg-[#f4f7f4] hover:bg-[#e4eae4] px-5 py-2.5 rounded-full cursor-pointer border border-[#1f2a1d]/5 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-[#336443]" /> Back to Resort
          </button>

          <span className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1f2a1d]">
            AURA<span className="font-light text-[#85AB8B]">RESORT</span>
          </span>

          <a
            href="#room-booking"
            className="bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Reserve Suite
          </a>
        </header>

        {/* Hero Showcase */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto px-6 sm:px-12 pt-10 pb-8"
        >
          {/* Header Title & Price */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-1.5 text-[#336443] font-semibold text-xs uppercase tracking-widest bg-[#f4f7f4] px-4 py-1.5 rounded-full border border-[#1f2a1d]/10 mb-3 shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#85AB8B]" /> {room.tag}
              </motion.span>
              <h1 className="text-3xl sm:text-6xl font-normal text-[#1f2a1d] tracking-tight leading-tight mt-1">
                {room.name}
              </h1>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-left lg:text-right bg-white p-5 rounded-3xl border border-[#1f2a1d]/10 shadow-xs"
            >
              <span className="text-3xl sm:text-4xl font-bold text-[#336443] block">{room.price}</span>
              <p className="text-xs text-[#4b5b47] mt-1 uppercase tracking-wider font-semibold">
                Includes Dedicated Butler & Daily Breakfast
              </p>
            </motion.div>
          </div>

          {/* MAIN BIG IMAGE CANVAS */}
          <div className="rounded-[36px] overflow-hidden aspect-[16/9] max-h-[600px] bg-[#1f2a1d] relative shadow-2xl mb-6 group border border-[#1f2a1d]/10">
            <motion.img
              key={activePhotoIdx}
              initial={{ opacity: 0.5, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              src={roomGallery[activePhotoIdx] || room.image}
              alt={room.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />

            {/* Photo Counter */}
            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/60 text-xs font-semibold text-[#1f2a1d] shadow-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#85AB8B] animate-pulse" />
              Photo 0{activePhotoIdx + 1} / 0{roomGallery.length}
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between text-white pointer-events-none">
              <span className="text-xs font-medium bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                Architectural Viewpoint 0{activePhotoIdx + 1}
              </span>
            </div>
          </div>

          {/* BOTTOM THUMBNAILS ROW */}
          <div className="flex gap-4 overflow-x-auto pb-4 max-w-full scrollbar-thin">
            {roomGallery.map((imgUrl, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePhotoIdx(idx)}
                className={`relative rounded-2xl overflow-hidden w-36 sm:w-44 aspect-[16/10] shrink-0 border-2 transition-all duration-300 cursor-pointer group ${
                  activePhotoIdx === idx
                    ? 'border-[#336443] scale-105 shadow-xl ring-4 ring-[#85AB8B]/30'
                    : 'border-transparent opacity-65 hover:opacity-100 hover:scale-102'
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-black/20 transition-opacity ${
                    activePhotoIdx === idx ? 'opacity-0' : 'opacity-100'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Quick Spec Stat Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-[#f4f7f4] border border-[#1f2a1d]/10 mt-6 shadow-xs">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-white border border-[#1f2a1d]/10 text-[#336443]">
                <Maximize className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-[#4b5b47] uppercase tracking-wider font-semibold">Suite Footprint</p>
                <p className="text-sm font-bold text-[#1f2a1d]">{room.size}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-white border border-[#1f2a1d]/10 text-[#336443]">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-[#4b5b47] uppercase tracking-wider font-semibold">Max Guests</p>
                <p className="text-sm font-bold text-[#1f2a1d]">{room.capacity}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-white border border-[#1f2a1d]/10 text-[#336443]">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-[#4b5b47] uppercase tracking-wider font-semibold">View Perspective</p>
                <p className="text-sm font-bold text-[#1f2a1d]">Panoramic Horizon</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-white border border-[#1f2a1d]/10 text-[#336443]">
                <Bed className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-[#4b5b47] uppercase tracking-wider font-semibold">Bed Configuration</p>
                <p className="text-sm font-bold text-[#1f2a1d]">King Plush Mattress</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tabbed Information & Reservation Grid */}
        <section className="max-w-7xl mx-auto px-6 sm:px-12 py-12 border-t border-[#1f2a1d]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="flex items-center gap-2 bg-[#f4f7f4] p-1.5 rounded-2xl border border-[#1f2a1d]/10">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeTab === 'overview'
                      ? 'bg-white text-[#1f2a1d] shadow-sm'
                      : 'text-[#4b5b47] hover:text-[#1f2a1d]'
                  }`}
                >
                  <Info className="w-3.5 h-3.5 text-[#336443]" /> Architectural Overview
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeTab === 'features'
                      ? 'bg-white text-[#1f2a1d] shadow-sm'
                      : 'text-[#4b5b47] hover:text-[#1f2a1d]'
                  }`}
                >
                  <Sparkle className="w-3.5 h-3.5 text-[#336443]" /> Suite Highlights
                </button>
                <button
                  onClick={() => setActiveTab('details')}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeTab === 'details'
                      ? 'bg-white text-[#1f2a1d] shadow-sm'
                      : 'text-[#4b5b47] hover:text-[#1f2a1d]'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-[#336443]" /> Privileges & Policies
                </button>
              </div>

              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-normal text-[#1f2a1d] mb-3">Sanctuary Design & Atmosphere</h2>
                    <p className="text-[#4b5b47] leading-relaxed text-base sm:text-lg font-light">
                      {room.description}
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-white border border-[#1f2a1d]/10 shadow-xs">
                    <h3 className="font-semibold text-sm text-[#1f2a1d] mb-2">Climate & Light Dynamics</h3>
                    <p className="text-xs text-[#4b5b47] leading-relaxed">
                      Custom floor-to-ceiling double-glazed glass optimizes natural light during sunrise while keeping noise levels under 20dB for total peaceful sleep.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'features' && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-5"
                >
                  {room.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-3xl border border-[#1f2a1d]/10 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#f4f7f4] group-hover:bg-[#336443] transition-colors flex items-center justify-center mb-4">
                        <feat.icon className="w-6 h-6 text-[#336443] group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="font-semibold text-[#1f2a1d] text-sm mb-1.5">{feat.title}</h4>
                      <p className="text-xs text-[#4b5b47] leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'details' && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-normal text-[#1f2a1d]">Inclusive Privileges</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                    {room.amenities.map((amenity, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[#1f2a1d]/10 text-xs font-semibold text-[#1f2a1d] shadow-2xs hover:border-[#85AB8B] transition-colors"
                      >
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#336443] shrink-0" />
                        {amenity}
                      </div>
                    ))}
                  </div>

                  <div className="p-5 rounded-2xl bg-[#f4f7f4] border border-[#1f2a1d]/10 text-xs text-[#4b5b47] flex items-center justify-between">
                    <span>Check-in: 3:00 PM • Check-out: 12:00 PM</span>
                    <span className="font-bold text-[#336443]">Flexible Cancellation</span>
                  </div>
                </motion.div>
              )}

            </div>

            {/* Right Booking Card */}
            <div className="lg:col-span-5">
              <div
                id="room-booking"
                className="bg-[#1f2a1d] text-white p-8 sm:p-10 rounded-[40px] shadow-2xl h-fit sticky top-28 border border-white/10 relative overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#85AB8B]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <span className="text-[#85AB8B] font-semibold text-xs uppercase tracking-widest block mb-1">
                    Direct Reservation
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-normal text-white mb-2">Reserve {room.name}</h3>
                  <p className="text-xs text-white/70 mb-8 pb-6 border-b border-white/10">
                    {room.price} • Instant Confirmation Quote
                  </p>

                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-white/70 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-white/70 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-medium uppercase tracking-wider text-white/70 mb-1.5">
                          Check-In
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.checkIn}
                          onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                          className="w-full bg-white/10 border border-white/20 rounded-2xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#85AB8B] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium uppercase tracking-wider text-white/70 mb-1.5">
                          Check-Out
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.checkOut}
                          onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                          className="w-full bg-white/10 border border-white/20 rounded-2xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#85AB8B] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-white/70 mb-1.5">
                        Special Requests
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Airport shuttle required, dietary preferences..."
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 bg-[#85AB8B] hover:bg-[#6e9674] text-[#1f2a1d] font-bold text-xs py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-98 cursor-pointer"
                    >
                      <Send className="w-4 h-4" /> Submit Suite Reservation
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-[#1f2a1d] text-white/70 py-10 px-6 sm:px-12 border-t border-white/10 text-xs mt-auto w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-semibold tracking-tight text-white block mb-1">
              AURA<span className="font-light text-[#85AB8B]">RESORT</span>
            </span>
            <p className="text-white/50 text-[11px]">© {new Date().getFullYear()} Aura Resort & Spa. All rights reserved.</p>
          </div>

          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => window.scrollTo(0, 0), 100);
            }}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full border border-white/15 cursor-pointer transition-all hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-[#85AB8B]" />
            <span className="font-medium text-xs">Return to Resort Landing Page</span>
          </button>
        </div>
      </footer>

    </motion.div>
  );
}

/* MAIN LANDING PAGE COMPONENT */
function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomsCount: '1',
    roomId: 'deluxe-suite',
    specialRequests: ''
  });

  const suitesContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: suitesProgress } = useScroll({
    target: suitesContainerRef,
    offset: ['start start', 'end end']
  });

  const amenitiesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: amenitiesProgress } = useScroll({
    target: amenitiesRef,
    offset: ['start end', 'end start']
  });

  const row1X = useTransform(amenitiesProgress, [0, 1], [-150, 100]);
  const row2X = useTransform(amenitiesProgress, [0, 1], [150, -100]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    const roomName = ROOMS.find((r) => r.id === formData.roomId)?.name || 'Selected Suite';

    const mailSubject = encodeURIComponent(`Reservation Enquiry: ${roomName} - ${formData.name}`);
    const mailBody = encodeURIComponent(
      `NEW RESERVATION REQUEST\n` +
        `---------------------------\n` +
        `Guest Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Selected Accomodation: ${roomName}\n` +
        `Check-In Date: ${formData.checkIn}\n` +
        `Check-Out Date: ${formData.checkOut}\n` +
        `Guests: ${formData.guests}\n` +
        `Rooms Requested: ${formData.roomsCount}\n` +
        `Special Requests: ${formData.specialRequests || 'None'}\n` +
        `---------------------------\n`
    );

    window.location.href = `mailto:${MANAGER_EMAIL}?subject=${mailSubject}&body=${mailBody}`;
  };

  const navLinks = [
    { href: '#experience', label: 'Experience' },
    { href: '#suites', label: 'Suites & Villas' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#location', label: 'Location' }
  ];

  return (
    <div className="w-full bg-[#fcfdfc] text-[#1f2a1d] min-h-screen selection:bg-[#85AB8B] selection:text-white">
      {/* Video Hero Section */}
      <section className="relative w-full min-h-screen sm:h-screen overflow-hidden flex flex-col justify-between">
        <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 pointer-events-none" />

        <nav className="relative z-30 flex items-center justify-between px-6 sm:px-10 md:px-14 py-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-white drop-shadow-md">
              AURA<span className="font-light text-[#85AB8B]">RESORT</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-6 py-2 shadow-lg border border-white/40">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm px-4 py-1.5 rounded-full font-medium text-[#4b5b47] hover:text-[#1f2a1d] hover:bg-white/50 transition-all"
              >
                {link.label}
              </a>
            ))}

            <Magnet padding={80} strength={3}>
              <a
                href="#booking-form"
                className="ml-3 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-semibold px-6 py-2 rounded-full transition-all shadow-md hover:shadow-xl inline-block"
              >
                Reserve Stay
              </a>
            </Magnet>
          </div>

          <div className="flex items-center gap-4 text-white">
            <a
              href="tel:+1234567890"
              className="hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity bg-black/20 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
            >
              <Phone className="w-4 h-4 text-[#85AB8B]" />
              +1 (800) 456-7890
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden relative flex items-center justify-center w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-[#1f2a1d] shadow-lg"
            >
              <Menu className={`w-5 h-5 absolute ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <X className={`w-5 h-5 absolute ${menuOpen ? 'opacity-100' : 'opacity-0'}`} />
            </button>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-10 sm:pt-0">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs tracking-widest uppercase font-medium mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#85AB8B]" /> Coastal Luxury Sanctuary
          </span>
          <h1 className="font-normal leading-[1.02] text-white text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-5xl tracking-tight drop-shadow-lg">
            Sanctuary of <span className="text-[#85AB8B]">tranquility & timeless</span> elegance
          </h1>
          <p className="mt-6 text-white/90 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl">
            Disconnect from noise. Reconnect with nature in our private coastal villas and luxury heritage suites.
          </p>
        </div>

        <div className="relative z-10 px-6 sm:px-10 md:px-14 pb-8 flex items-center justify-between">
          <div className="flex items-center gap-3 text-white/90">
            <Sparkles className="w-4 h-4 text-[#85AB8B]" />
            <p className="text-xs text-white/80 font-light">Award-winning infinity pools & farm-to-table dining</p>
          </div>
          <a
            href="#suites"
            className="text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white flex items-center gap-2"
          >
            Explore Accommodations <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Experience Section */}
      {(() => {
        const [sectionRef, isVisible] = useOnScreen({ threshold: 0.15 });

        return (
          <section
            id="experience"
            ref={sectionRef}
            className="py-28 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div
                className={`transition-all duration-1000 ease-out transform ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 pointer-events-none'
                }`}
              >
                <span className="text-[#336443] font-semibold text-xs uppercase tracking-widest inline-flex items-center gap-1.5 bg-[#f4f7f4] px-3.5 py-1 rounded-full border border-[#1f2a1d]/5 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#85AB8B]" /> Unmatched Serenity
                </span>

                <h2 className="text-3xl sm:text-5xl font-normal text-[#1f2a1d] leading-tight mt-2">
                  Crafted for moments that{' '}
                  <span className="text-[#336443] font-medium underline decoration-[#85AB8B]/40 underline-offset-8">
                    linger forever
                  </span>
                </h2>

                <p className="text-[#4b5b47] leading-relaxed my-6 text-base">
                  Nestled between pristine coastline and ancient forest reserves, Aura Resort combines architectural mastery with conscious sustainability. Every suite is individually designed to optimize natural light, private sightlines, and complete privacy.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: 'Architectural Harmony',
                      desc: 'Designed using locally sourced stone and sustainably harvested teak wood to blend seamlessly into the coastal hills.'
                    },
                    {
                      title: 'Private Sightlines',
                      desc: 'Positioned strategically so no villa overlooks another, ensuring total isolation and tranquility.'
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`group p-4 rounded-2xl bg-[#f4f7f4]/60 border border-[#1f2a1d]/5 hover:border-[#85AB8B] hover:bg-white hover:shadow-lg transition-all duration-500 delay-${
                        (idx + 1) * 200
                      } transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-sm text-[#1f2a1d] group-hover:text-[#336443] transition-colors">
                          {item.title}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-[#85AB8B] transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                      <p className="text-xs text-[#4b5b47] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#1f2a1d]/10">
                  <div
                    className={`p-5 rounded-2xl bg-white border border-[#1f2a1d]/10 shadow-xs transition-all duration-700 delay-300 transform ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                  >
                    <span className="text-3xl sm:text-4xl font-bold text-[#1f2a1d]">100%</span>
                    <p className="text-xs text-[#4b5b47] mt-1.5 uppercase tracking-wider font-semibold text-[#336443]">
                      Solar Powered Energy
                    </p>
                  </div>

                  <div
                    className={`p-5 rounded-2xl bg-white border border-[#1f2a1d]/10 shadow-xs transition-all duration-700 delay-500 transform ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                  >
                    <span className="text-3xl sm:text-4xl font-bold text-[#1f2a1d]">24 / 7</span>
                    <p className="text-xs text-[#4b5b47] mt-1.5 uppercase tracking-wider font-semibold text-[#336443]">
                      Dedicated Butler Care
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`relative transition-all duration-1000 ease-out delay-200 transform ${
                  isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
                }`}
              >
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#85AB8B]/20 to-[#336443]/10 rounded-3xl blur-2xl pointer-events-none" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#2d3a2a] group">
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200"
                    alt="Resort infinity pool at sunset"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md border border-white/60 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#85AB8B] animate-ping" />
                    <span className="text-xs font-semibold text-[#1f2a1d]">Oceanfront Infinity Pool</span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-lg border border-white/20 p-4 rounded-2xl text-white">
                    <p className="text-xs font-medium text-[#85AB8B] uppercase tracking-wider mb-0.5">Golden Hour View</p>
                    <p className="text-xs text-white/90">Temperature-controlled pool overlooking the sunset horizon.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* Suites Section */}
      <section id="suites" ref={suitesContainerRef} className="py-24 bg-[#f4f7f4] px-6 sm:px-12 relative">
        <div className="max-w-7xl mx-auto mb-12">
          <span className="text-[#336443] font-semibold text-xs uppercase tracking-widest bg-white/80 px-3.5 py-1 rounded-full border border-[#1f2a1d]/5">
            Accommodations
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#1f2a1d] mt-2">Suites & Private Villas</h2>
        </div>

        <div className="relative">
          {ROOMS.map((room, idx) => (
            <StackingSuiteCard
              key={room.id}
              room={room}
              index={idx}
              totalCards={ROOMS.length}
              progress={suitesProgress}
              onBook={(id) => setFormData((prev) => ({ ...prev, roomId: id }))}
            />
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" ref={amenitiesRef} className="py-28 bg-[#f4f7f4] px-6 sm:px-12 overflow-hidden border-t border-[#1f2a1d]/10">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#336443] font-semibold text-xs uppercase tracking-widest inline-flex items-center gap-1.5 bg-white/80 px-3.5 py-1 rounded-full shadow-xs border border-[#1f2a1d]/5">
              <Sparkles className="w-3.5 h-3.5 text-[#85AB8B]" /> World Class Standards
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal text-[#1f2a1d] mt-3">Curated Guest Amenities</h2>
            <p className="text-[#4b5b47] text-sm sm:text-base mt-3 max-w-md mx-auto">
              Every detail engineered to provide effortless comfort throughout your stay.
            </p>
          </div>

          <div className="flex flex-col gap-8 py-4">
            <motion.div style={{ x: row1X }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Wifi,
                  title: 'High-Speed Wi-Fi 6',
                  desc: 'Uninterrupted high-speed mesh coverage across all private suites and outdoor gardens.'
                },
                {
                  icon: Coffee,
                  title: 'Artisanal Breakfast',
                  desc: 'Fresh farm-to-table organic spreads served in-suite or at the oceanfront pavilion.'
                },
                {
                  icon: BedDouble,
                  title: 'Luxury Bedding',
                  desc: '400 thread count Egyptian cotton linens with custom pillow menu selection.'
                },
                {
                  icon: Tv,
                  title: 'Smart Entertainment',
                  desc: '4K OLED displays with integrated airplay and premium streaming platforms.'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white p-8 rounded-3xl border border-[#1f2a1d]/10 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:border-[#85AB8B]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#f4f7f4] group-hover:bg-[#336443] flex items-center justify-center mb-6 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-[#336443] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-[#1f2a1d] text-lg mb-2">{item.title}</h3>
                  <p className="text-xs text-[#4b5b47] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.div style={{ x: row2X }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Utensils,
                  title: 'Michelin-Star Dining',
                  desc: 'Curated multi-course tasting menus by world-renowned guest chefs.'
                },
                {
                  icon: Flower2,
                  title: 'Holistic Spa & Wellness',
                  desc: 'Thermal baths, organic essential oil therapies, and oceanfront yoga decks.'
                },
                {
                  icon: Car,
                  title: 'Private Airport Shuttle',
                  desc: 'Complimentary chauffeured electric luxury vehicle transfer on arrival.'
                },
                {
                  icon: Plane,
                  title: 'Helipad & Valet',
                  desc: 'On-site private helipad and 24/7 dedicated valet parking services.'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white p-8 rounded-3xl border border-[#1f2a1d]/10 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:border-[#85AB8B]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#f4f7f4] group-hover:bg-[#336443] flex items-center justify-center mb-6 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-[#336443] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-[#1f2a1d] text-lg mb-2">{item.title}</h3>
                  <p className="text-xs text-[#4b5b47] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section id="booking-form" className="py-24 px-6 sm:px-12 max-w-5xl mx-auto">
        <div className="bg-[#1f2a1d] text-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden border border-white/10">
          <span className="text-[#85AB8B] font-semibold text-xs uppercase tracking-widest">
            Direct Booking Enquiry
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal mt-2 mb-3">Plan Your Exceptional Stay</h2>
          <p className="text-white/70 text-base max-w-xl mb-10">
            Fill out your preferred schedule below. Our reservation team will review availability and confirm your stay instantly.
          </p>

          <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-medium text-white/80 uppercase mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/80 uppercase mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/80 uppercase mb-2">Phone / WhatsApp</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/80 uppercase mb-2">Check-In Date</label>
              <div className="relative">
                <input
                  type="date"
                  name="checkIn"
                  required
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B]"
                />
                <Calendar className="w-4 h-4 text-white/50 absolute right-4 top-4 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-white/80 uppercase mb-2">Check-Out Date</label>
              <div className="relative">
                <input
                  type="date"
                  name="checkOut"
                  required
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B]"
                />
                <Calendar className="w-4 h-4 text-white/50 absolute right-4 top-4 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-white/80 uppercase mb-2">Select Suite/Villa</label>
              <select
                name="roomId"
                value={formData.roomId}
                onChange={handleInputChange}
                className="w-full bg-[#2d3a2a] border border-white/20 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B]"
              >
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2 md:col-span-3">
              <label className="block text-xs font-medium text-white/80 uppercase mb-2">Special Requests</label>
              <textarea
                name="specialRequests"
                rows={3}
                placeholder="Airport pickup required, early check-in..."
                value={formData.specialRequests}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B]"
              />
            </div>

            <div className="sm:col-span-2 md:col-span-3 mt-4 flex items-center justify-between">
              <p className="text-xs text-white/60">⚡ Instant direct quote emailed to you.</p>

              <Magnet padding={60} strength={2}>
                <button
                  type="submit"
                  className="bg-[#85AB8B] hover:bg-[#6e9674] text-[#1f2a1d] font-bold text-sm px-8 py-4 rounded-full flex items-center gap-2 shadow-xl cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Submit Reservation
                </button>
              </Magnet>
            </div>
          </form>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[#336443] font-semibold text-xs uppercase tracking-widest inline-flex items-center gap-1.5 bg-[#f4f7f4] px-3.5 py-1 rounded-full border border-[#1f2a1d]/5 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#85AB8B]" /> Prime Coordinates
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal text-[#1f2a1d]">Location & Access</h2>
          </div>
          <div className="flex items-center justify-center md:justify-end gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1f2a1d]/5 border border-[#1f2a1d]/10 text-xs font-mono text-[#336443]">
              <span className="w-2 h-2 rounded-full bg-[#85AB8B] animate-ping" />
              GPS: 37.7749° N, 122.4194° W
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-[#1f2a1d] text-white p-8 sm:p-10 rounded-[36px] sm:rounded-[48px] flex flex-col justify-between shadow-2xl relative overflow-hidden border border-white/10 group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#85AB8B]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#85AB8B]/30 transition-all duration-700" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#336443]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <div>
                  <p className="text-xs text-[#85AB8B] font-semibold uppercase tracking-widest">Resort Sanctuary</p>
                  <h3 className="text-2xl font-normal text-white mt-1">Coastal Reserve</h3>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-[#85AB8B]">
                  <Compass className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group/item"
                >
                  <div className="p-2.5 rounded-xl bg-[#85AB8B]/20 text-[#85AB8B] shrink-0 group-hover/item:bg-[#85AB8B] group-hover/item:text-[#1f2a1d] transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider font-medium">Address</p>
                    <p className="text-xs sm:text-sm text-white/90 font-light mt-0.5 leading-snug">
                      100 Paradise Cove Highway, Coastal Reserve, Bay Region, 90210
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+18004567890"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group/item"
                >
                  <div className="p-2.5 rounded-xl bg-[#85AB8B]/20 text-[#85AB8B] shrink-0 group-hover/item:bg-[#85AB8B] group-hover/item:text-[#1f2a1d] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider font-medium">Concierge Direct</p>
                    <p className="text-xs sm:text-sm text-white/90 font-light mt-0.5">+1 (800) 456-7890</p>
                  </div>
                </a>

                <a
                  href="mailto:concierge@auraresort.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group/item"
                >
                  <div className="p-2.5 rounded-xl bg-[#85AB8B]/20 text-[#85AB8B] shrink-0 group-hover/item:bg-[#85AB8B] group-hover/item:text-[#1f2a1d] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider font-medium">Inquiries</p>
                    <p className="text-xs sm:text-sm text-white/90 font-light mt-0.5">concierge@auraresort.com</p>
                  </div>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
                  <p className="text-[10px] text-[#85AB8B] uppercase tracking-wider font-semibold">Airport Shuttle</p>
                  <p className="text-base font-semibold text-white mt-1">25 Mins</p>
                  <p className="text-[10px] text-white/50">Private Chauffeur</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
                  <p className="text-[10px] text-[#85AB8B] uppercase tracking-wider font-semibold">Helipad Access</p>
                  <p className="text-base font-semibold text-white mt-1">On-Site</p>
                  <p className="text-[10px] text-white/50">Touchdown South Deck</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
              <Magnet padding={60} strength={2}>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#85AB8B] hover:bg-[#6e9674] text-[#1f2a1d] font-bold text-xs py-4 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl cursor-pointer"
                >
                  <MapPin className="w-4 h-4" /> Open in Google Maps
                </a>
              </Magnet>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-[36px] sm:rounded-[48px] overflow-hidden shadow-2xl border border-[#1f2a1d]/10 min-h-[450px] relative group bg-[#2d3a2a]">
            <div className="absolute top-6 left-6 z-20 bg-white/85 backdrop-blur-xl border border-white/60 p-4 sm:p-5 rounded-3xl shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#336443] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1f2a1d]">Valet & Check-In Entrance</span>
              </div>
              <p className="text-xs text-[#4b5b47] mt-2 leading-relaxed">
                Follow North Gate highway exit 14. Private security reception desk open 24/7.
              </p>
            </div>

            <iframe
              title="Hotel Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192842750383!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808580858085%3A0x8085808580858085!2sSan%20Francisco%20Bay!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              className="w-full h-full border-0 min-h-[450px] filter grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f2a1d] text-white/70 py-12 px-6 sm:px-12 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-semibold tracking-tight text-white block mb-1">
              AURA<span className="font-light text-[#85AB8B]">RESORT</span>
            </span>
            <p className="text-white/50 text-[11px]">© {new Date().getFullYear()} Aura Resort & Spa. All rights reserved.</p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full border border-white/15 cursor-pointer"
          >
            <span className="font-medium text-xs">Back to Top</span>
            <ChevronRight className="w-4 h-4 -rotate-90 text-[#85AB8B]" />
          </button>
        </div>
      </footer>
    </div>
  );
}

/* ROUTER APP ROOT */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/suite/:id" element={<SuiteGalleryPage />} />
    </Routes>
  );
}