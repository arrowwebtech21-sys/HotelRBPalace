import { useEffect, useState, type FormEvent, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Bed,
  CheckCircle2,
  Eye,
  Info,
  Layers,
  Maximize,
  Send,
  Sparkle,
  Sparkles,
  Users
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';
import { BRAND_NAME, BRAND_SUFFIX } from '../data/constants';
import { ROOMS } from '../data/rooms';
import { openBookingMailto } from '../utils/booking';

export default function SuiteGalleryPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'details'>('overview');

  // Zoom State
  const [isHovered, setIsHovered] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isPaused, setIsPaused] = useState(false);

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

  // Automatic Rotation Timer (Rotates every 4s, pauses on hover)
  useEffect(() => {
    if (isPaused || roomGallery.length <= 1) return;

    const interval = setInterval(() => {
      setActivePhotoIdx((prev) => (prev + 1) % roomGallery.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, roomGallery.length]);

  // Hover Zoom Mouse Position Handler
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    openBookingMailto({
      name: formData.name,
      email: formData.email,
      roomName: room.name,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      specialRequests: formData.specialRequests
    });
  };

  return (
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full bg-[#fcfdfc] text-[#1f2a1d] min-h-screen flex flex-col justify-between selection:bg-[#85AB8B] selection:text-white"
    >
      <div className="flex-grow">
        {/* Header */}
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
            {BRAND_NAME}
            <span className="font-light text-[#85AB8B]">{BRAND_SUFFIX}</span>
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

          {/* MAIN IMAGE CANVAS WITH ULTRA-SUBTLE 1.15x ZOOM */}
          <div
            onMouseEnter={() => {
              setIsHovered(true);
              setIsPaused(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setIsPaused(false);
            }}
            onMouseMove={handleMouseMove}
            className="rounded-[36px] overflow-hidden aspect-[16/9] max-h-[600px] bg-[#1f2a1d] relative shadow-2xl mb-6 border border-[#1f2a1d]/10 cursor-crosshair group"
          >
            <motion.img
              key={activePhotoIdx}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={roomGallery[activePhotoIdx] || room.image}
              alt={room.name}
              style={{
                transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.4s ease-out'
              }}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />

            {/* Photo Counter Badge */}
            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/60 text-xs font-semibold text-[#1f2a1d] shadow-md flex items-center gap-2 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-[#85AB8B] animate-pulse" />
              Photo 0{activePhotoIdx + 1} / 0{roomGallery.length}
            </div>

            {/* Zoom Instruction Hint */}
            <div className="absolute top-6 right-6 z-20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-[11px] text-white font-medium pointer-events-none transition-opacity duration-300 opacity-90 group-hover:opacity-0">
              Hover image to inspect • Auto-rotating
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
                key={imgUrl}
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

          {/* Spec Stat Bar */}
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

        {/* Information Grid */}
        <section className="max-w-7xl mx-auto px-6 sm:px-12 py-12 border-t border-[#1f2a1d]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
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
                      Custom floor-to-ceiling double-glazed glass optimizes natural light during sunrise while keeping
                      noise levels under 20dB for total peaceful sleep.
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
                  {room.features.map((feat) => (
                    <div
                      key={feat.title}
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
                    {room.amenities.map((amenity) => (
                      <div
                        key={amenity}
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

            {/* Reservation Card */}
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

      <SiteFooter variant="suite" />
    </motion.div>
  );
}