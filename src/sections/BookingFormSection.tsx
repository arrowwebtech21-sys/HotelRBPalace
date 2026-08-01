import type { ChangeEvent, FormEvent } from 'react';
import { Calendar, Send, Utensils, User, Mail, Phone, BedDouble, MessageSquare, Sparkles, ShieldCheck, Clock, Award, Star, Loader2 } from 'lucide-react';
import Magnet from '../components/Magnet';
import { ROOMS } from '../data/rooms';
import { getTodayString, getNextDayString } from '../utils/booking';

export type LandingBookingForm = {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomsCount: string;
  roomId: string;
  planId: string;
  specialRequests: string;
};

type BookingFormSectionProps = {
  formData: LandingBookingForm;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent) => void;
  isSubmitting?: boolean;
};

export default function BookingFormSection({ formData, onChange, onSubmit, isSubmitting = false }: BookingFormSectionProps) {
  const selectedRoom = ROOMS.find((r) => r.id === formData.roomId) || ROOMS[0];
  const roomPlans = selectedRoom.plans || [];
  const selectedPlan = roomPlans.find((p) => p.id === formData.planId) || roomPlans[0];

  return (
    <section id="booking-form" className="py-14 sm:py-24 px-4 sm:px-12 max-w-[1400px] mx-auto relative">
      {/* Outer Floating Decorative Prop Badges */}
      <div className="absolute top-12 left-8 hidden lg:flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/90 border border-[#1f2a1d]/10 text-xs font-semibold text-[#1f2a1d] shadow-xl backdrop-blur-md -rotate-3 z-20 pointer-events-none">
        <Award className="w-4 h-4 text-[#85AB8B]" /> Guaranteed Best Direct Rate
      </div>
      <div className="absolute bottom-12 right-8 hidden lg:flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/90 border border-[#1f2a1d]/10 text-xs font-semibold text-[#336443] shadow-xl backdrop-blur-md rotate-3 z-20 pointer-events-none">
        <Star className="w-4 h-4 text-[#85AB8B]" /> 24/7 Desk & Event Desk
      </div>

      <div className="bg-[#172215] text-white rounded-[28px] sm:rounded-[44px] p-5 sm:p-10 md:p-14 shadow-3xl relative overflow-hidden border border-[#85AB8B]/25">
        {/* Decorative Corner Filigree Lines */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#85AB8B]/30 rounded-tl-3xl pointer-events-none" />
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#85AB8B]/30 rounded-tr-3xl pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#85AB8B]/30 rounded-bl-3xl pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#85AB8B]/30 rounded-br-3xl pointer-events-none" />

        {/* Background Ambient Glow Orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#85AB8B]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#336443]/25 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header with Live Selection Thumbnail */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/10">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[#85AB8B] font-semibold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full border border-white/15 mb-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#85AB8B]" /> Direct Reservation Inquiry
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal text-white mt-1">Plan Your Stay & Event</h2>
            <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-xl font-light leading-relaxed">
              Select your accommodation category or banquet venue. Our reservation desk will issue your instant confirmation quote.
            </p>
          </div>

          {/* Live Selection Summary Badge Prop */}
          <div className="flex items-center gap-3.5 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl p-3 pr-5 rounded-2xl border border-white/20 shrink-0 shadow-2xl">
            <img src={selectedRoom.image} alt={selectedRoom.name} className="w-14 h-14 rounded-xl object-cover border border-white/20 shrink-0" />
            <div>
              <span className="text-[10px] text-[#85AB8B] uppercase tracking-wider font-semibold block">Selected Category</span>
              <h4 className="text-xs font-bold text-white line-clamp-1">{selectedRoom.name}</h4>
              <p className="text-xs font-bold text-[#85AB8B] mt-0.5">{selectedPlan?.price || selectedRoom.startingPrice}</p>
            </div>
          </div>
        </div>

        {/* Form Inputs Grid */}
        <form onSubmit={onSubmit} className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#85AB8B]" /> Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={onChange}
                className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#85AB8B]" /> Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={onChange}
                className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
              />
            </div>
          </div>

          {/* Phone / WhatsApp */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#85AB8B]" /> Phone / WhatsApp
            </label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 98765 00000"
                value={formData.phone}
                onChange={onChange}
                className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
              />
            </div>
          </div>

          {/* Check-In Date */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#85AB8B]" /> Check-In Date
            </label>
            <div className="relative">
              <input
                type="date"
                name="checkIn"
                required
                min={getTodayString()}
                value={formData.checkIn}
                onChange={onChange}
                className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all [color-scheme:dark]"
              />
            </div>
          </div>

          {/* Check-Out Date */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#85AB8B]" /> Check-Out Date
            </label>
            <div className="relative">
              <input
                type="date"
                name="checkOut"
                required
                min={formData.checkIn ? getNextDayString(formData.checkIn) : getTodayString()}
                value={formData.checkOut}
                onChange={onChange}
                className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all [color-scheme:dark]"
              />
            </div>
          </div>

          {/* Select Category */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-[#85AB8B]" /> Accommodation / Venue
            </label>
            <select
              name="roomId"
              value={formData.roomId}
              onChange={onChange}
              className="w-full bg-[#233120] border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B] transition-all cursor-pointer"
            >
              {ROOMS.map((r) => (
                <option key={r.id} value={r.id} className="bg-[#1c281a] text-white py-2">
                  {r.name} ({r.startingPrice})
                </option>
              ))}
            </select>
          </div>

          {/* Select Meal Plan */}
          <div className="sm:col-span-2 md:col-span-3 space-y-2">
            <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-[#85AB8B]" /> Select Tariff & Meal Plan ({roomPlans.length} Available)
            </label>
            <select
              name="planId"
              value={formData.planId || roomPlans[0]?.id || ''}
              onChange={onChange}
              className="w-full bg-[#233120] border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B] transition-all cursor-pointer"
            >
              {roomPlans.map((plan) => (
                <option key={plan.id} value={plan.id} className="bg-[#1c281a] text-white py-2">
                  [{plan.code}] {plan.title} — {plan.price}
                </option>
              ))}
            </select>
          </div>

          {/* Special Requests */}
          <div className="sm:col-span-2 md:col-span-3 space-y-2">
            <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#85AB8B]" /> Special Requests & Event Notes
            </label>
            <textarea
              name="specialRequests"
              rows={3}
              placeholder="Airport pickup required, early check-in, banquet seating arrangement..."
              value={formData.specialRequests}
              onChange={onChange}
              className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all resize-none"
            />
          </div>

          {/* Bottom Bar: Assurances & Submit CTA */}
          <div className="sm:col-span-2 md:col-span-3 mt-4 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#85AB8B]" /> Check-In 1:00 PM • Check-Out 12:00 PM
              </span>
              <span className="hidden md:inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#85AB8B]" /> Direct Best Rate Quote
              </span>
            </div>

            <Magnet padding={60} strength={2}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#85AB8B] hover:bg-[#6e9674] text-[#172215] font-bold text-sm px-9 py-4 rounded-full flex items-center gap-2.5 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Submit Reservation Quote
                  </>
                )}
              </button>
            </Magnet>
          </div>
        </form>
      </div>
    </section>
  );
}
