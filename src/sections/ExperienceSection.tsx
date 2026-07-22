import { ChevronRight, Sparkles } from 'lucide-react';
import { useOnScreen } from '../hooks/useOnScreen';

const highlights = [
  {
    title: 'Architectural Harmony',
    desc: 'Designed using locally sourced stone and sustainably harvested teak wood to blend seamlessly into the coastal hills.'
  },
  {
    title: 'Private Sightlines',
    desc: 'Positioned strategically so no villa overlooks another, ensuring total isolation and tranquility.'
  }
];

export default function ExperienceSection() {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.15 });

  return (
    <section id="experience" ref={sectionRef} className="py-28 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 pointer-events-none'
          }`}
        >
          <span className="text-[#336443] font-semibold text-xs uppercase tracking-widest inline-flex items-center gap-1.5 bg-[#f4f7f4] px-3.5 py-1 rounded-full border border-[#1f2a1d]/5 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#85AB8B]" /> Unmatched Serenity
          </span>

          <h2 className="text-3xl sm:text-5xl font-normal text-[#1f2a1d] leading-tight mt-2">
            Crafted for moments that{' '}
            <span className="text-[#336443] font-medium underline decoration-[#85AB8B]/40 underline-offset-8">
              linger forever
            </span>
          </h2>

          <p className="text-[#4b5b47] leading-relaxed my-6 text-base">
            Nestled between pristine coastline and ancient forest reserves, Aura Resort combines architectural mastery
            with conscious sustainability. Every suite is individually designed to optimize natural light, private
            sightlines, and complete privacy.
          </p>

          <div className="space-y-4 mb-8">
            {highlights.map((item, idx) => (
              <div
                key={item.title}
                className={`group p-4 rounded-2xl bg-[#f4f7f4]/60 border border-[#1f2a1d]/5 hover:border-[#85AB8B] hover:bg-white hover:shadow-lg transition-all duration-500 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: isVisible ? `${(idx + 1) * 200}ms` : undefined }}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-sm text-[#1f2a1d] group-hover:text-[#336443] transition-colors">
                    {item.title}
                  </h3>
                  <ChevronRight className="w-4 h-4 text-[#85AB8B] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <p className="text-xs text-[#4b5b47] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#1f2a1d]/10">
            <div
              className={`p-5 rounded-2xl bg-white border border-[#1f2a1d]/10 shadow-xs transition-all duration-700 delay-300 transform ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <span className="text-3xl sm:text-4xl font-bold text-[#1f2a1d]">100%</span>
              <p className="text-xs mt-1.5 uppercase tracking-wider font-semibold text-[#336443]">
                Solar Powered Energy
              </p>
            </div>

            <div
              className={`p-5 rounded-2xl bg-white border border-[#1f2a1d]/10 shadow-xs transition-all duration-700 delay-500 transform ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <span className="text-3xl sm:text-4xl font-bold text-[#1f2a1d]">24 / 7</span>
              <p className="text-xs mt-1.5 uppercase tracking-wider font-semibold text-[#336443]">
                Dedicated Butler Care
              </p>
            </div>
          </div>
        </div>

        <div
          className={`relative transition-all duration-1000 ease-out delay-200 transform ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
          }`}
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#85AB8B]/20 to-[#336443]/10 rounded-3xl blur-2xl pointer-events-none" />

          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#2d3a2a] group">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200"
              alt="Resort infinity pool at sunset"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md border border-white/60 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#85AB8B] animate-ping" />
              <span className="text-xs font-semibold text-[#1f2a1d]">Oceanfront Infinity Pool</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-lg border border-white/20 p-4 rounded-2xl text-white">
              <p className="text-xs font-medium text-[#85AB8B] uppercase tracking-wider mb-0.5">Golden Hour View</p>
              <p className="text-xs text-white/90">Temperature-controlled pool overlooking the sunset horizon.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
