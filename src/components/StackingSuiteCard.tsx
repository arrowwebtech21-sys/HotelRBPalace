import { motion, type MotionValue, useTransform } from 'framer-motion';
import { CheckCircle2, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Room } from '../types/room';

type StackingSuiteCardProps = {
  room: Room;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  onBook: (roomId: string) => void;
};

export default function StackingSuiteCard({
  room,
  index,
  totalCards,
  progress,
  onBook
}: StackingSuiteCardProps) {
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
            <span className="text-xs text-[#4b5b47] font-medium">
              {room.size} • {room.capacity}
            </span>
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
}
