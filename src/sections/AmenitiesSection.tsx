import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Utensils, ShieldCheck, Zap, BedDouble } from 'lucide-react';
import { OFFICIAL_FACILITIES, type Facility } from '../data/facilities';

type CategoryFilter = 'All' | 'Room Comforts' | 'Power & Service' | 'Dining & Events';

type AmenitiesSectionProps = {
  onBook?: (roomId: string) => void;
};

export default function AmenitiesSection({ onBook }: AmenitiesSectionProps = {}) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const getFilteredFacilities = () => {
    if (activeCategory === 'Room Comforts') {
      return OFFICIAL_FACILITIES.filter((f) =>
        ['ac-water', 'led-tv', 'refrigerator', 'kettle-coffee', 'family-suite', 'free-wifi', 'inverter'].includes(f.id)
      );
    }
    if (activeCategory === 'Power & Service') {
      return OFFICIAL_FACILITIES.filter((f) =>
        ['generator', 'inverter', 'room-service', 'safe-deposit', 'laundry', 'parking', 'front-office', 'travel-desk'].includes(f.id)
      );
    }
    if (activeCategory === 'Dining & Events') {
      return OFFICIAL_FACILITIES.filter((f) =>
        ['banquet-hall', 'dining-cuisine', 'kettle-coffee', 'room-service'].includes(f.id)
      );
    }
    return OFFICIAL_FACILITIES;
  };

  const filteredFacilities = getFilteredFacilities();

  // Container variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, stiffness: 260, damping: 20 } }
  };

  return (
    <section
      id="amenities"
      className="py-28 bg-[#fcfdfc] px-6 sm:px-12 overflow-hidden border-t border-[#1f2a1d]/10 relative"
    >
      {/* Background Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#85AB8B]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#336443]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-[#336443] font-semibold text-xs uppercase tracking-widest inline-flex items-center gap-1.5 bg-[#f4f7f4] px-4 py-1.5 rounded-full shadow-xs border border-[#1f2a1d]/10 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#85AB8B] animate-pulse" /> Official Hotel Facilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-normal text-[#1f2a1d] tracking-tight mt-1">
            Guest Privileges & Comforts
          </h2>
          <p className="text-[#4b5b47] text-xs sm:text-sm mt-3 max-w-xl mx-auto font-light leading-relaxed">
            Experience uncompromised luxury with 16 official facilities including 24/7 power backup, in-room inverters, satellite TVs, and cozy Oriental dining.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {(
              [
                { label: 'All 16 Facilities', cat: 'All', icon: Sparkles },
                { label: 'Room Comforts', cat: 'Room Comforts', icon: BedDouble },
                { label: 'Power & Service', cat: 'Power & Service', icon: Zap },
                { label: 'Dining & Banquets', cat: 'Dining & Events', icon: Utensils }
              ] as const
            ).map((item) => {
              const isActive = activeCategory === item.cat;
              const Icon = item.icon;
              return (
                <button
                  key={item.cat}
                  onClick={() => setActiveCategory(item.cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer border ${
                    isActive
                      ? 'bg-[#1f2a1d] text-white border-[#1f2a1d] shadow-lg scale-105'
                      : 'bg-[#f4f7f4] text-[#4b5b47] border-[#1f2a1d]/10 hover:border-[#85AB8B] hover:bg-white hover:text-[#1f2a1d]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#85AB8B]' : 'text-[#336443]'}`} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 16 Animated Facility Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
          >
            {filteredFacilities.map((facility) => (
              <motion.div
                key={facility.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCardId(facility.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative bg-white p-7 rounded-3xl border border-[#1f2a1d]/10 shadow-xs hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Hover Ambient Emerald Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#85AB8B]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Animated Icon Badge */}
                    <div className="w-13 h-13 rounded-2xl bg-[#f4f7f4] group-hover:bg-[#336443] flex items-center justify-center transition-colors duration-400 shadow-2xs group-hover:scale-110">
                      <facility.icon className="w-6.5 h-6.5 text-[#336443] group-hover:text-white transition-colors duration-400" />
                    </div>

                    {facility.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#336443] bg-[#f4f7f4] group-hover:bg-[#85AB8B]/20 px-3 py-1 rounded-full border border-[#1f2a1d]/5 transition-colors">
                        {facility.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-semibold text-[#1f2a1d] text-base mb-2 group-hover:text-[#336443] transition-colors leading-snug">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-[#4b5b47] leading-relaxed font-light">{facility.desc}</p>
                </div>

                {/* Animated Bottom Progress Line */}
                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#336443] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Complimentary Facility
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#85AB8B] group-hover:scale-150 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}