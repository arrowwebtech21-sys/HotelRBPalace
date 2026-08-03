import { Car, Plane, ShieldCheck, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Magnet from '../components/Magnet';

export default function ShuttleTeaserSection() {
  const navigate = useNavigate();

  return (
    <section id="shuttle-service" className="py-12 sm:py-20 px-4 sm:px-12 max-w-[1400px] mx-auto">
      <div className="bg-[#172215] text-white rounded-[28px] sm:rounded-[40px] p-6 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden border border-[#85AB8B]/20">
        {/* Glow Effects */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#85AB8B]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#336443]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[#85AB8B] font-semibold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
              <Car className="w-3.5 h-3.5 text-[#85AB8B]" /> Dedicated Guest Transport
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal text-white">
              Airport & Sightseeing <span className="text-[#85AB8B] italic font-serif">Shuttle Cab Service</span>
            </h2>
            <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
              Travel comfortably with Hotel RB Palace chauffeurs. We offer 24/7 transfers to Gwalior (GWL) & Agra (AGR) airports, Dholpur Junction, Chambal Safaris, and regional cities in private Executive Sedans, SUVs, and Banquet Tempo Travelers.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#85AB8B] shrink-0" />
                <span>24/7 Airport Pickups & Drops</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#85AB8B] shrink-0" />
                <span>Verified Clean AC Chauffeurs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#85AB8B] shrink-0" />
                <span>Transparent Rates (Sedan/SUV/Bus)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#85AB8B] shrink-0" />
                <span>Direct Hotel Billing & Booking</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Magnet padding={50} strength={2}>
                <button
                  onClick={() => {
                    navigate('/shuttle');
                    window.scrollTo(0, 0);
                  }}
                  className="bg-[#85AB8B] hover:bg-[#6e9674] text-[#172215] font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-pointer"
                >
                  <span>Book Cab or Request Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Magnet>
            </div>
          </div>

          {/* Right Visual Fleet Card */}
          <div className="lg:col-span-5 bg-white/5 border border-white/15 rounded-3xl p-6 backdrop-blur-md space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#85AB8B] flex items-center gap-1.5">
                <Plane className="w-4 h-4" /> Popular Route Transfer
              </span>
              <span className="text-xs bg-[#85AB8B]/20 text-[#85AB8B] font-bold px-2.5 py-0.5 rounded-full">Fixed Rates</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-2xl border border-white/10">
                <div>
                  <h4 className="font-semibold text-white">Gwalior Airport (GWL)</h4>
                  <p className="text-[#85AB8B] text-[11px]">68 km • ~1 hr 15 mins</p>
                </div>
                <span className="text-sm font-bold text-white">From ₹1,800</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-white/5 rounded-2xl border border-white/10">
                <div>
                  <h4 className="font-semibold text-white">Agra Airport (AGR) / Cantt</h4>
                  <p className="text-[#85AB8B] text-[11px]">58 km • ~1 hr 05 mins</p>
                </div>
                <span className="text-sm font-bold text-white">From ₹1,650</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-white/5 rounded-2xl border border-white/10">
                <div>
                  <h4 className="font-semibold text-white">Chambal Safari Circuit</h4>
                  <p className="text-[#85AB8B] text-[11px]">Roundtrip Pickup & Return</p>
                </div>
                <span className="text-sm font-bold text-white">From ₹750</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-white/60 pt-1">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#85AB8B]" /> 24/7 Desk Support</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-[#85AB8B]" /> Sanitized Vehicles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
