import { useEffect, useState, type FormEvent, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Bed,
  CheckCircle2,
  Eye,
  Info,
  Layers,
  Loader2,
  Maximize,
  Send,
  Sparkles,
  Users,
  Utensils,
  Tag,
  User,
  Mail,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';
import Magnet from '../components/Magnet';
import ThankYouModal from '../components/ThankYouModal';
import { BRAND_NAME, BRAND_SUFFIX, CHECK_IN_TIME, CHECK_OUT_TIME } from '../data/constants';
import { ROOMS } from '../data/rooms';
import { sendBookingEnquiry, getTodayString, getNextDayString, type BookingEnquiry } from '../utils/booking';

export default function SuiteGalleryPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'plans' | 'features' | 'details'>('plans');

  // Zoom State
  const [isHovered, setIsHovered] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isPaused, setIsPaused] = useState(false);

  const room = ROOMS.find((r) => r.id === id) || ROOMS[0];
  const roomGallery = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];
  const roomPlans = room.plans || [];

  // Selected Meal Plan state
  const [selectedPlanId, setSelectedPlanId] = useState<string>(roomPlans[0]?.id || '');
  const selectedPlan = roomPlans.find((p) => p.id === selectedPlanId) || roomPlans[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<BookingEnquiry | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (room.plans && room.plans.length > 0) {
      setSelectedPlanId(room.plans[0].id);
    }
  }, [id, room]);

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

  const handleBookingSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const enquiryPayload: BookingEnquiry = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      roomName: room.name,
      selectedPlanTitle: selectedPlan?.title,
      planPrice: selectedPlan?.price,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      specialRequests: formData.specialRequests
    };

    setSubmittedEnquiry(enquiryPayload);
    await sendBookingEnquiry(enquiryPayload);

    setIsSubmitting(false);
    setIsThankYouOpen(true);
    setFormData({ name: '', email: '', phone: '', checkIn: '', checkOut: '', specialRequests: '' });
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

          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => window.scrollTo(0, 0), 100);
            }}
            className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1f2a1d] cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-0.5"
            title="Return to Main Landing Page"
          >
            {BRAND_NAME}
            <span className="font-light text-[#85AB8B]">{BRAND_SUFFIX}</span>
          </button>

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
              <span className="text-3xl sm:text-4xl font-bold text-[#336443] block">
                {selectedPlan?.price || room.price}
              </span>
              <p className="text-xs text-[#4b5b47] mt-1 uppercase tracking-wider font-semibold">
                {selectedPlan?.title || 'Includes Premium Amenities & 24hr Hot Water'}
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

            {/* Caption Bar */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
              <span className="text-white text-xs font-medium bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                {room.name} — Interactive Gallery Showcase
              </span>
              <span className="text-xs text-white/80 font-mono hidden sm:inline-block bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                1.15x Precision Lens
              </span>
            </div>
          </div>

          {/* Photo Thumbnails Row */}
          {roomGallery.length > 1 && (
            <div className="flex items-center gap-4 overflow-x-auto pb-4 pt-2">
              {roomGallery.map((imgUrl, idx) => (
                <button
                  key={imgUrl}
                  onClick={() => {
                    setActivePhotoIdx(idx);
                    setIsPaused(true);
                  }}
                  className={`relative shrink-0 rounded-2xl overflow-hidden aspect-[4/3] w-28 sm:w-36 transition-all duration-300 border-2 cursor-pointer ${activePhotoIdx === idx
                      ? 'border-[#336443] shadow-lg scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100 hover:scale-102'
                    }`}
                >
                  <img src={imgUrl} alt={`${room.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  {activePhotoIdx === idx && (
                    <div className="absolute inset-0 bg-[#336443]/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white shadow-md" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </motion.section>

        {/* Spec Stat Bar */}
        <section className="bg-[#f4f7f4] border-y border-[#1f2a1d]/10 py-6 mb-12">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Maximize className="w-5 h-5 text-[#336443] mb-1" />
              <span className="text-xs text-[#4b5b47] uppercase tracking-wider font-semibold">Total Area</span>
              <span className="text-sm font-bold text-[#1f2a1d] mt-0.5">{room.size}</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-5 h-5 text-[#336443] mb-1" />
              <span className="text-xs text-[#4b5b47] uppercase tracking-wider font-semibold">Capacity</span>
              <span className="text-sm font-bold text-[#1f2a1d] mt-0.5">{room.capacity}</span>
            </div>
            <div className="flex flex-col items-center">
              <Bed className="w-5 h-5 text-[#336443] mb-1" />
              <span className="text-xs text-[#4b5b47] uppercase tracking-wider font-semibold">Bed Configuration</span>
              <span className="text-sm font-bold text-[#1f2a1d] mt-0.5">King Size Bed</span>
            </div>
            <div className="flex flex-col items-center">
              <Eye className="w-5 h-5 text-[#336443] mb-1" />
              <span className="text-xs text-[#4b5b47] uppercase tracking-wider font-semibold">View</span>
              <span className="text-sm font-bold text-[#1f2a1d] mt-0.5">{room.tag}</span>
            </div>
          </div>
        </section>

        {/* Tabbed Info & Reservation Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Main Tab Content */}
            <div className="lg:col-span-7">
              {/* Tab Selector */}
              <div className="flex items-center gap-2 border-b border-[#1f2a1d]/10 pb-4 mb-8 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('plans')}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${activeTab === 'plans'
                      ? 'bg-[#1f2a1d] text-white shadow-md'
                      : 'bg-[#f4f7f4] text-[#4b5b47] hover:text-[#1f2a1d] hover:bg-[#e4eae4]'
                    }`}
                >
                  Tariff & Meal Plans ({roomPlans.length})
                </button>
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${activeTab === 'overview'
                      ? 'bg-[#1f2a1d] text-white shadow-md'
                      : 'bg-[#f4f7f4] text-[#4b5b47] hover:text-[#1f2a1d] hover:bg-[#e4eae4]'
                    }`}
                >
                  Overview & Layout
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${activeTab === 'features'
                      ? 'bg-[#1f2a1d] text-white shadow-md'
                      : 'bg-[#f4f7f4] text-[#4b5b47] hover:text-[#1f2a1d] hover:bg-[#e4eae4]'
                    }`}
                >
                  Room Highlights
                </button>
                <button
                  onClick={() => setActiveTab('details')}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${activeTab === 'details'
                      ? 'bg-[#1f2a1d] text-white shadow-md'
                      : 'bg-[#f4f7f4] text-[#4b5b47] hover:text-[#1f2a1d] hover:bg-[#e4eae4]'
                    }`}
                >
                  Privileges & Policy
                </button>
              </div>

              {/* Tab 1: Tariff & Meal Plans */}
              {activeTab === 'plans' && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <div className="bg-[#f4f7f4] p-4 rounded-2xl border border-[#1f2a1d]/10 mb-6 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm text-[#1f2a1d]">Available Tariff & Meal Plan Options</h4>
                      <p className="text-xs text-[#4b5b47] mt-0.5">Select a plan below to calculate your reservation total.</p>
                    </div>
                    <Utensils className="w-5 h-5 text-[#336443]" />
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {roomPlans.map((plan) => {
                      const isSelected = plan.id === selectedPlanId;
                      return (
                        <div
                          key={plan.id}
                          onClick={() => setSelectedPlanId(plan.id)}
                          className={`p-5 rounded-3xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${isSelected
                              ? 'bg-white border-[#336443] shadow-lg ring-2 ring-[#336443]/20'
                              : 'bg-white/60 border-[#1f2a1d]/10 hover:border-[#85AB8B] hover:bg-white'
                            }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-xl mt-0.5 ${isSelected ? 'bg-[#336443] text-white' : 'bg-[#f4f7f4] text-[#336443]'}`}>
                              <Utensils className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase ${isSelected ? 'bg-[#336443] text-white' : 'bg-[#f4f7f4] text-[#1f2a1d]'}`}>
                                  {plan.code} PLAN
                                </span>
                                <span className="text-xs font-semibold text-[#1f2a1d]">{plan.occupancy}</span>
                              </div>
                              <h4 className="font-semibold text-sm text-[#1f2a1d] mt-1">{plan.title}</h4>
                              <p className="text-xs text-[#4b5b47] mt-0.5">{plan.description}</p>
                            </div>
                          </div>
                          <div className="text-left sm:text-right shrink-0">
                            <span className="text-lg font-bold text-[#336443] block">{plan.price}</span>
                            <span className={`text-[11px] font-medium ${isSelected ? 'text-[#336443]' : 'text-gray-400'}`}>
                              {isSelected ? '✓ Selected Plan' : 'Click to Select'}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Tab 2: Overview */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-normal text-[#1f2a1d]">Architectural Overview</h3>
                  <p className="text-sm text-[#4b5b47] leading-relaxed font-light">{room.description}</p>

                  <div className="p-6 rounded-3xl bg-[#f4f7f4] border border-[#1f2a1d]/10">
                    <h4 className="font-semibold text-sm text-[#1f2a1d] mb-3 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#336443]" /> Standard Room Amenities Included
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#4b5b47]">
                      {room.amenities.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#336443] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Room Highlights */}
              {activeTab === 'features' && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-normal text-[#1f2a1d] mb-4">Suite Specific Highlights</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {room.features.map((feat) => {
                      const Icon = feat.icon;
                      return (
                        <div
                          key={feat.title}
                          className="p-5 rounded-3xl bg-white border border-[#1f2a1d]/10 shadow-xs flex items-start gap-4"
                        >
                          <div className="p-3 rounded-2xl bg-[#f4f7f4] text-[#336443] shrink-0">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-[#1f2a1d]">{feat.title}</h4>
                            <p className="text-xs text-[#4b5b47] leading-relaxed mt-1 font-light">{feat.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Tab 4: Privileges & Policies */}
              {activeTab === 'details' && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-normal text-[#1f2a1d]">Resort Privileges & Schedules</h3>
                  <div className="space-y-3 text-xs text-[#4b5b47]">
                    <div className="p-4 rounded-2xl bg-white border border-[#1f2a1d]/10 flex items-center gap-3">
                      <Info className="w-4 h-4 text-[#336443]" />
                      <span>Check-In Schedule: <strong>{CHECK_IN_TIME}</strong></span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-[#1f2a1d]/10 flex items-center gap-3">
                      <Info className="w-4 h-4 text-[#336443]" />
                      <span>Check-Out Schedule: <strong>{CHECK_OUT_TIME}</strong></span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-[#1f2a1d]/10 flex items-center gap-3">
                      <Info className="w-4 h-4 text-[#336443]" />
                      <span>24/7 Power Backup (Diesel Generator & In-Room Inverter)</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-[#1f2a1d]/10 flex items-center gap-3">
                      <Info className="w-4 h-4 text-[#336443]" />
                      <span>Free Wi-Fi & Oriental Dining Facilities</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Redesigned Glassmorphic Reservation Card */}
            <div className="lg:col-span-5">
              <div
                id="room-booking"
                className="bg-[#172215] text-white p-7 sm:p-9 rounded-[36px] shadow-3xl h-fit sticky top-28 border border-[#85AB8B]/30 relative overflow-hidden"
              >
                {/* Decorative Corner Filigree Accents */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#85AB8B]/40 rounded-tl-xl pointer-events-none" />
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#85AB8B]/40 rounded-tr-xl pointer-events-none" />

                {/* Ambient Glow Orbs */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#85AB8B]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#336443]/30 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Header Badge with Live Suite Image Thumbnail */}
                  <div className="flex items-center justify-between gap-4 mb-6 pb-5 border-b border-white/12">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-[#85AB8B] font-semibold text-[11px] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/15 mb-2 shadow-xs">
                        <Sparkles className="w-3 h-3 text-[#85AB8B]" /> Direct Suite Reservation
                      </span>
                      <h3 className="text-2xl font-normal text-white mt-0.5">Reserve {room.name}</h3>
                    </div>

                    <div className="flex items-center gap-3 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl p-2.5 pr-4 rounded-2xl border border-white/20 shrink-0 shadow-xl">
                      <img src={room.image} alt={room.name} className="w-12 h-12 rounded-xl object-cover border border-white/20 shrink-0" />
                      <div>
                        <span className="text-[10px] text-[#85AB8B] uppercase tracking-wider font-semibold block">Active Rate</span>
                        <p className="text-xs font-bold text-white">{selectedPlan?.price || room.price}</p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    {/* MEAL PLAN SELECTOR */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/80 flex items-center gap-1.5">
                        <Utensils className="w-3.5 h-3.5 text-[#85AB8B]" /> Selected Tariff & Meal Plan
                      </label>
                      <select
                        value={selectedPlanId}
                        onChange={(e) => setSelectedPlanId(e.target.value)}
                        className="w-full bg-[#233120] border border-white/15 rounded-2xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#85AB8B] transition-all cursor-pointer"
                      >
                        {roomPlans.map((plan) => (
                          <option key={plan.id} value={plan.id} className="bg-[#1c281a] text-white py-1.5">
                            [{plan.code}] {plan.title} — {plan.price}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/80 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#85AB8B]" /> Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/80 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#85AB8B]" /> Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-white/70 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/80 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#85AB8B]" /> Check-In
                        </label>
                        <input
                          type="date"
                          required
                          min={getTodayString()}
                          value={formData.checkIn}
                          onChange={(e) => {
                            const val = e.target.value;
                            const nextDay = getNextDayString(val);
                            const autoCheckOut = !formData.checkOut || formData.checkOut <= val ? nextDay : formData.checkOut;
                            setFormData({ ...formData, checkIn: val, checkOut: autoCheckOut });
                          }}
                          className="w-full bg-white/10 border border-white/20 rounded-2xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#85AB8B] transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/80 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#85AB8B]" /> Check-Out
                        </label>
                        <input
                          type="date"
                          required
                          min={formData.checkIn ? getNextDayString(formData.checkIn) : getTodayString()}
                          value={formData.checkOut}
                          onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                          className="w-full bg-white/5 border border-white/15 rounded-2xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all [color-scheme:dark]"
                        />
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/80 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#85AB8B]" /> Special Requests
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Airport shuttle required, dietary preferences..."
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all resize-none"
                      />
                    </div>

                    <Magnet padding={60} strength={2}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-4 bg-[#85AB8B] hover:bg-[#6e9674] text-[#1f2a1d] font-bold text-xs py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-98 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" /> Submit Suite Reservation
                          </>
                        )}
                      </button>
                    </Magnet>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter variant="suite" />

      {/* Thank You Confirmation Popup Modal */}
      <ThankYouModal
        isOpen={isThankYouOpen}
        onClose={() => setIsThankYouOpen(false)}
        enquiryData={submittedEnquiry}
      />
    </motion.div>
  );
}