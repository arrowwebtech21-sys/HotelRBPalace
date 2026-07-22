import type { ChangeEvent, FormEvent } from 'react';
import { Calendar, Send } from 'lucide-react';
import Magnet from '../components/Magnet';
import { ROOMS } from '../data/rooms';

export type LandingBookingForm = {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomsCount: string;
  roomId: string;
  specialRequests: string;
};

type BookingFormSectionProps = {
  formData: LandingBookingForm;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent) => void;
};

export default function BookingFormSection({ formData, onChange, onSubmit }: BookingFormSectionProps) {
  return (
    <section id="booking-form" className="py-24 px-6 sm:px-12 max-w-5xl mx-auto">
      <div className="bg-[#1f2a1d] text-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden border border-white/10">
        <span className="text-[#85AB8B] font-semibold text-xs uppercase tracking-widest">Direct Booking Enquiry</span>
        <h2 className="text-3xl sm:text-4xl font-normal mt-2 mb-3">Plan Your Exceptional Stay</h2>
        <p className="text-white/70 text-base max-w-xl mb-10">
          Fill out your preferred schedule below. Our reservation team will review availability and confirm your stay
          instantly.
        </p>

        <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs font-medium text-white/80 uppercase mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
  );
}
