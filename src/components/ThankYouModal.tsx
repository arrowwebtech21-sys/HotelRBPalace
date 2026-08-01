import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, PhoneCall, Sparkles, X, Calendar, User, Mail, Phone, BedDouble } from 'lucide-react';
import type { BookingEnquiry } from '../utils/booking';
import { CHECK_IN_TIME, CHECK_OUT_TIME, HOTEL_PHONE } from '../data/constants';

type ThankYouModalProps = {
  isOpen: boolean;
  onClose: () => void;
  enquiryData: BookingEnquiry | null;
};

export default function ThankYouModal({ isOpen, onClose, enquiryData }: ThankYouModalProps) {
  if (!isOpen || !enquiryData) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-lg bg-[#1f2a1d] text-white rounded-[36px] p-6 sm:p-8 shadow-2xl border border-white/15 z-10 overflow-hidden"
        >
          {/* Ambient Glow Effects */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#85AB8B]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#336443]/30 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 text-center">
            {/* Animated Success Checkmark Badge */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#85AB8B]/20 border border-[#85AB8B]/40 text-[#85AB8B] flex items-center justify-center mx-auto mb-6 shadow-inner relative">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
              <div className="absolute inset-0 rounded-full border border-[#85AB8B] animate-ping opacity-30" />
            </div>

            <span className="inline-flex items-center gap-1.5 text-[#85AB8B] font-semibold text-xs uppercase tracking-widest bg-white/10 px-4 py-1 rounded-full border border-white/15 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#85AB8B]" /> Inquiry Received
            </span>

            <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight mb-3">
              Thank You For Your Reservation!
            </h3>

            <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed mb-6 max-w-md mx-auto">
              Your reservation inquiry has been sent directly to our management. Someone from <span className="font-semibold text-white">Hotel RB Palace Dholpur</span> will contact you shortly on your provided phone & email to confirm your booking.
            </p>

            {/* Reservation Summary Box */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 text-left text-xs space-y-3 mb-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <span className="text-white/60 flex items-center gap-1.5 font-medium">
                  <User className="w-3.5 h-3.5 text-[#85AB8B]" /> Guest Name:
                </span>
                <span className="font-semibold text-white">{enquiryData.name}</span>
              </div>

              {enquiryData.phone && (
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-white/60 flex items-center gap-1.5 font-medium">
                    <Phone className="w-3.5 h-3.5 text-[#85AB8B]" /> Contact Phone:
                  </span>
                  <span className="font-semibold text-[#85AB8B]">{enquiryData.phone}</span>
                </div>
              )}

              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <span className="text-white/60 flex items-center gap-1.5 font-medium">
                  <Mail className="w-3.5 h-3.5 text-[#85AB8B]" /> Guest Email:
                </span>
                <span className="font-medium text-white/90 truncate max-w-[200px]">{enquiryData.email}</span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <span className="text-white/60 flex items-center gap-1.5 font-medium">
                  <BedDouble className="w-3.5 h-3.5 text-[#85AB8B]" /> Accommodation:
                </span>
                <span className="font-semibold text-white">{enquiryData.roomName}</span>
              </div>

              {enquiryData.selectedPlanTitle && (
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-white/60 flex items-center gap-1.5 font-medium">
                    Tariff Plan:
                  </span>
                  <span className="font-semibold text-[#85AB8B]">{enquiryData.selectedPlanTitle}</span>
                </div>
              )}

              <div className="flex items-center justify-between pt-1">
                <span className="text-white/60 flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#85AB8B]" /> Dates:
                </span>
                <span className="font-medium text-white/90">
                  {enquiryData.checkIn} &rarr; {enquiryData.checkOut}
                </span>
              </div>
            </div>

            {/* Direct Call Quick Touch Bar */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 border border-white/15 text-xs text-white/80 mb-6">
              <span className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#85AB8B]" /> Need Urgent Confirmation?
              </span>
              <a
                href={`tel:${HOTEL_PHONE.replace(/\s+/g, '')}`}
                className="font-bold text-[#85AB8B] hover:underline"
              >
                Call {HOTEL_PHONE}
              </a>
            </div>

            {/* Action Button */}
            <button
              onClick={onClose}
              className="w-full bg-[#85AB8B] hover:bg-[#6e9674] text-[#1f2a1d] font-bold text-xs py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-98 cursor-pointer"
            >
              Done / Return to Resort
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
