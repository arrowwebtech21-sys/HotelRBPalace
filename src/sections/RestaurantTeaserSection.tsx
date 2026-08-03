import { Utensils, Award, ShieldCheck, Coffee, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import Magnet from '../components/Magnet';

export default function RestaurantTeaserSection() {
  return (
    <section id="restaurant" className="py-14 sm:py-20 px-4 sm:px-12 max-w-[1400px] mx-auto">
      <div className="bg-[#172215] text-white rounded-[28px] sm:rounded-[40px] p-6 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden border border-[#85AB8B]/20">
        {/* Glow Background Orbs */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#85AB8B]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#336443]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[#85AB8B] font-semibold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
              <Utensils className="w-3.5 h-3.5 text-[#85AB8B]" /> In-House Royal Restaurant & Suite Dining
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal text-white leading-snug">
              Authentic Dining Inside Hotel RB Palace — <span className="text-[#85AB8B] italic font-serif">No Need to Order Outside</span>
            </h2>
            <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
              We provide complete in-house dining facilities for all our checked-in guests! Enjoy freshly prepared North Indian curries, Tandoori sizzlers, Oriental dishes, and hot beverages served right in our air-conditioned restaurant or delivered straight to your suite.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-white/90">
              <div className="flex items-center gap-2.5 bg-white/5 p-3 rounded-2xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#85AB8B] shrink-0" />
                <span>Full In-House Restaurant & 24/7 Room Delivery</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 p-3 rounded-2xl border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#85AB8B] shrink-0" />
                <span>100% Hygienic & Freshly Prepared Meals</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 p-3 rounded-2xl border border-white/10">
                <Coffee className="w-4 h-4 text-[#85AB8B] shrink-0" />
                <span>Hot Breakfast, Tea, Coffee & Dessert Services</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 p-3 rounded-2xl border border-white/10">
                <Sparkles className="w-4 h-4 text-[#85AB8B] shrink-0" />
                <span>Custom Meal Preparation on Request</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Magnet padding={50} strength={2}>
                <button
                  onClick={() => {
                    const el = document.getElementById('booking-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#85AB8B] hover:bg-[#6e9674] text-[#172215] font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-pointer"
                >
                  <Utensils className="w-4 h-4" />
                  <span>Reserve Room with Meal Plan</span>
                </button>
              </Magnet>
            </div>
          </div>

          {/* Right Meal Plan Highlight Card */}
          <div className="lg:col-span-5 bg-white/5 border border-white/15 rounded-3xl p-6 backdrop-blur-md space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#85AB8B] flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Guest Tariff & Meal Plans
              </span>
              <span className="text-[10px] bg-[#85AB8B]/20 text-[#85AB8B] font-bold px-2 py-0.5 rounded-full">Included Options</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center font-semibold text-white">
                  <span>EP Plan (European)</span>
                  <span className="text-[#85AB8B] text-[11px]">Room Only</span>
                </div>
                <p className="text-[#85AB8B] text-[11px] mt-0.5">Order in-house food as per requirement</p>
              </div>

              <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center font-semibold text-white">
                  <span>CP Plan (Continental)</span>
                  <span className="text-[#85AB8B] text-[11px]">Breakfast Included</span>
                </div>
                <p className="text-[#85AB8B] text-[11px] mt-0.5">Includes morning breakfast & tea/coffee</p>
              </div>

              <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center font-semibold text-white">
                  <span>MAP Plan (Modified)</span>
                  <span className="text-[#85AB8B] text-[11px]">Half Board</span>
                </div>
                <p className="text-[#85AB8B] text-[11px] mt-0.5">Includes daily Breakfast + Lunch or Dinner</p>
              </div>

              <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center font-semibold text-white">
                  <span>AP Plan (American)</span>
                  <span className="text-[#85AB8B] text-[11px]">Full Board</span>
                </div>
                <p className="text-[#85AB8B] text-[11px] mt-0.5">Includes all 3 daily meals in-house</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-white/60 pt-1">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#85AB8B]" /> In-Room Service Available</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-[#85AB8B]" /> Fresh Preparation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
