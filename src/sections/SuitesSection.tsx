import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import StackingSuiteCard from '../components/StackingSuiteCard';
import { ROOMS } from '../data/rooms';

type SuitesSectionProps = {
  onBook: (roomId: string) => void;
};

export default function SuitesSection({ onBook }: SuitesSectionProps) {
  const suitesContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: suitesProgress } = useScroll({
    target: suitesContainerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="suites" ref={suitesContainerRef} className="py-24 bg-[#f4f7f4] px-6 sm:px-12 relative">
      <div className="max-w-7xl mx-auto mb-12">
        <span className="text-[#336443] font-semibold text-xs uppercase tracking-widest bg-white/80 px-3.5 py-1 rounded-full border border-[#1f2a1d]/5">
          Accommodations
        </span>
        <h2 className="text-3xl sm:text-5xl font-normal text-[#1f2a1d] mt-2">Suites & Private Villas</h2>
      </div>

      <div className="relative">
        {ROOMS.map((room, idx) => (
          <StackingSuiteCard
            key={room.id}
            room={room}
            index={idx}
            totalCards={ROOMS.length}
            progress={suitesProgress}
            onBook={onBook}
          />
        ))}
      </div>
    </section>
  );
}
