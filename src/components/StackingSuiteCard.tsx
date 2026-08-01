import { useState } from 'react';
import { motion, type MotionValue, useTransform } from 'framer-motion';
import { CheckCircle2, Maximize2, Sparkles, Utensils, Award, Users } from 'lucide-react';
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
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const cardProgress = useTransform(progress, [index / totalCards, 1], [1, targetScale]);

  // Micro 3D Motion State (Capped at max 0.4 degrees)
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const isConference = room.id === 'conference-hall';
  const isBanquet = room.id === 'banquet-hall';
  const isVenue = isConference || isBanquet;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const tiltX = Math.max(-0.4, Math.min(0.4, -y / 350));
    const tiltY = Math.max(-0.4, Math.min(0.4, x / 350));
    setRotateX(tiltX);
    setRotateY(tiltY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const planCount = room.plans?.length || 1;

  return (
    <div
      className="sticky top-20 sm:top-24 md:top-32 h-auto md:h-[82vh] min-h-fit flex items-center justify-center mb-8 sm:mb-10 pointer-events-auto z-10 perspective-1200"
      style={{ top: `calc(72px + ${index * 14}px)` }}
    >
      <motion.div
        style={{ scale: cardProgress }}
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 300, damping: 35 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`w-full max-w-[1360px] rounded-[28px] sm:rounded-[36px] md:rounded-[48px] p-4.5 sm:p-7 md:p-10 flex flex-col md:flex-row gap-5 sm:gap-8 h-full overflow-hidden preserve-3d group transition-all duration-500 relative ${
          isConference
            ? 'bg-gradient-to-br from-[#111f16] via-[#1a2d20] to-[#0d1711] text-white border border-[#85AB8B]/40 shadow-3xl'
            : isBanquet
            ? 'bg-gradient-to-br from-[#1c1815] via-[#26201a] to-[#171412] text-white border border-[#c4a668]/35 shadow-3xl'
            : 'bg-white border border-[#1f2a1d]/10 text-[#1f2a1d] shadow-2xl hover:shadow-3xl'
        }`}
      >
        {/* Venue Ambient Glow Props */}
        {isConference && (
          <>
            <div className="absolute -top-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#85AB8B]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#336443]/35 rounded-full blur-3xl pointer-events-none" />
          </>
        )}
        {isBanquet && (
          <>
            <div className="absolute -top-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#c4a668]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#336443]/30 rounded-full blur-3xl pointer-events-none" />
          </>
        )}

        {/* Suite / Venue Image Canvas */}
        <div className="w-full md:w-1/2 h-48 sm:h-60 md:h-full relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 shrink-0">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          <span
            className={`absolute top-3 left-3 sm:top-4 sm:left-4 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold shadow-sm flex items-center gap-1 sm:gap-1.5 ${
              isConference
                ? 'bg-[#85AB8B] text-[#0d1711] border border-white/30 font-bold'
                : isBanquet
                ? 'bg-[#c4a668]/90 text-[#1c1815] border border-white/20'
                : 'bg-white/90 text-[#1f2a1d]'
            }`}
          >
            {isVenue ? <Award className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isConference ? 'text-[#0d1711]' : 'text-[#1c1815]'}`} /> : <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#85AB8B]" />} {room.tag}
          </span>
        </div>

        {/* Suite / Venue Info Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-between py-1 sm:py-2 relative z-10">
          <div>
            <div className="flex justify-between items-center mb-2 gap-2">
              <span
                className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border ${
                  isConference
                    ? 'text-[#85AB8B] bg-[#85AB8B]/20 border-[#85AB8B]/30'
                    : isBanquet
                    ? 'text-[#f0d8a0] bg-[#c4a668]/20 border-[#c4a668]/30'
                    : 'text-[#85AB8B] bg-[#f4f7f4] border-[#1f2a1d]/5'
                }`}
              >
                0{index + 1} / 0{totalCards}
              </span>
              <div className="text-right">
                <span
                  className={`text-base sm:text-xl font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl shadow-xs block ${
                    isConference
                      ? 'bg-[#85AB8B] text-[#0d1711] border border-[#a2cfa8]/40'
                      : isBanquet
                      ? 'bg-[#c4a668] text-[#1c1815] border border-[#f0d8a0]/40'
                      : 'bg-white text-[#336443] border border-[#1f2a1d]/10'
                  }`}
                >
                  {room.price}
                </span>
              </div>
            </div>

            <h3
              className={`text-xl sm:text-3xl md:text-4xl font-normal mb-1.5 sm:mb-2 transition-colors duration-300 ${
                isConference
                  ? 'text-white group-hover:text-[#85AB8B]'
                  : isBanquet
                  ? 'text-white group-hover:text-[#f0d8a0]'
                  : 'text-[#1f2a1d] group-hover:text-[#336443]'
              }`}
            >
              {room.name}
            </h3>

            {/* MEAL / VENUE PLANS BADGE */}
            <div
              className={`inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full border mb-2 sm:mb-4 ${
                isConference
                  ? 'text-[#a2cfa8] bg-[#85AB8B]/15 border-[#85AB8B]/25'
                  : isBanquet
                  ? 'text-[#f0d8a0] bg-[#c4a668]/15 border-[#c4a668]/25'
                  : 'text-[#336443] bg-[#f4f7f4] border-[#1f2a1d]/5'
              }`}
            >
              {isVenue ? <Users className={`w-3 h-3 ${isConference ? 'text-[#85AB8B]' : 'text-[#c4a668]'}`} /> : <Utensils className="w-3 h-3 text-[#85AB8B]" />} {planCount} Option Plan{planCount > 1 ? 's' : ''} {isVenue ? '(Rental, AV & Catering)' : '(EP, CP, MAP)'}
            </div>

            <p
              className={`text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 font-light line-clamp-2 ${
                isVenue ? 'text-white/85' : 'text-[#4b5b47]'
              }`}
            >
              {room.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
              {room.amenities.slice(0, 4).map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 text-[11px] sm:text-xs font-medium p-2 sm:p-2.5 rounded-xl border ${
                    isVenue
                      ? 'text-white/90 bg-white/10 border-white/15'
                      : 'text-[#1f2a1d] bg-[#f4f7f4]/80 border-[#1f2a1d]/5'
                  }`}
                >
                  <CheckCircle2 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isConference ? 'text-[#85AB8B]' : isBanquet ? 'text-[#c4a668]' : 'text-[#336443]'}`} /> {item}
                </div>
              ))}
            </div>
          </div>

          <div
            className={`pt-3 sm:pt-4 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 ${
              isVenue ? 'border-white/15' : 'border-gray-100'
            }`}
          >
            <span
              className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${
                isConference ? 'text-[#85AB8B]' : isBanquet ? 'text-[#c4a668]' : 'text-[#4b5b47]'
              }`}
            >
              {room.size} • {room.capacity}
            </span>
            <div className="flex w-full sm:w-auto gap-2.5 sm:gap-3 relative z-30">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/suite/${room.id}`);
                }}
                className={`flex-1 sm:flex-none py-2.5 sm:py-3 px-3.5 sm:px-5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 ${
                  isVenue
                    ? 'border border-white/30 text-white hover:bg-white/15'
                    : 'border border-[#1f2a1d]/20 text-[#1f2a1d] hover:bg-gray-100 hover:border-[#336443]'
                }`}
              >
                <Maximize2 className={`w-3.5 h-3.5 ${isConference ? 'text-[#85AB8B]' : isBanquet ? 'text-[#c4a668]' : 'text-[#336443]'}`} /> View Details
              </button>
              <a
                href="#booking-form"
                onClick={() => onBook(room.id)}
                className={`flex-1 sm:flex-none py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-bold transition-all text-center flex items-center justify-center gap-1 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer ${
                  isConference
                    ? 'bg-[#85AB8B] hover:bg-[#6f9675] text-[#0d1711] shadow-xl font-bold'
                    : isBanquet
                    ? 'bg-[#c4a668] hover:bg-[#b59654] text-[#1c1815] shadow-xl font-bold'
                    : 'bg-[#3d5638] hover:bg-[#2d4228] text-white'
                }`}
              >
                {isConference ? 'Inquire Hall' : isBanquet ? 'Inquire Banquet' : 'Reserve Stay'}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}