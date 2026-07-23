import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  BedDouble,
  Car,
  Coffee,
  Flower2,
  Plane,
  Sparkles,
  Tv,
  Utensils,
  Wifi
} from 'lucide-react';

const amenitiesRow1 = [
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
];

const amenitiesRow2 = [
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
];

function AmenityCard({
  icon: Icon,
  title,
  desc
}: {
  icon: typeof Wifi;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-white p-8 rounded-3xl border border-[#1f2a1d]/10 shadow-xs hover:shadow-2xl transition-all duration-300 hover:border-[#85AB8B]"
    >
      <div className="w-14 h-14 rounded-2xl bg-[#f4f7f4] group-hover:bg-[#336443] flex items-center justify-center mb-6 transition-colors duration-300 shadow-xs">
        <Icon className="w-7 h-7 text-[#336443] group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="font-semibold text-[#1f2a1d] text-lg mb-2 group-hover:text-[#336443] transition-colors">
        {title}
      </h3>
      <p className="text-xs text-[#4b5b47] leading-relaxed font-light">{desc}</p>
    </motion.div>
  );
}

export default function AmenitiesSection() {
  const amenitiesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: amenitiesProgress } = useScroll({
    target: amenitiesRef,
    offset: ['start end', 'end start']
  });

  const row1X = useTransform(amenitiesProgress, [0, 1], [-120, 80]);
  const row2X = useTransform(amenitiesProgress, [0, 1], [120, -80]);

  return (
    <section
      id="amenities"
      ref={amenitiesRef}
      className="py-28 bg-[#f4f7f4] px-6 sm:px-12 overflow-hidden border-t border-[#1f2a1d]/10 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#336443] font-semibold text-xs uppercase tracking-widest inline-flex items-center gap-1.5 bg-white/80 px-4 py-1.5 rounded-full shadow-xs border border-[#1f2a1d]/5">
            <Sparkles className="w-3.5 h-3.5 text-[#85AB8B]" /> World Class Standards
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#1f2a1d] mt-3">Curated Guest Amenities</h2>
          <p className="text-[#4b5b47] text-sm sm:text-base mt-3 max-w-md mx-auto font-light leading-relaxed">
            Every detail engineered to provide effortless comfort throughout your stay.
          </p>
        </div>

        <div className="flex flex-col gap-8 py-4">
          <motion.div style={{ x: row1X }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenitiesRow1.map((item) => (
              <AmenityCard key={item.title} {...item} />
            ))}
          </motion.div>

          <motion.div style={{ x: row2X }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenitiesRow2.map((item) => (
              <AmenityCard key={item.title} {...item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}