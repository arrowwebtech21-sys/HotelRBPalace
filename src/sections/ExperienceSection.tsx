import { ChevronRight, Sparkles } from 'lucide-react';
import { useOnScreen } from '../hooks/useOnScreen';

const highlights = [
  {
    title: 'Prime Highway & City Connectivity',
    desc: 'Located right on NH-3 Highway near Dholpur Bus Stand and Railway Junction, providing effortless accessibility for business travelers and vacationing families.'
  },
  {
    title: 'Grand Banquets & Multi-Cuisine Culinary Dining',
    desc: 'Equipped with a grand air-conditioned banquet venue (250–300 Pax capacity) and a cozy Oriental interior dining room serving authentic Indian and Chinese delicacies.'
  }
];

export default function ExperienceSection() {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.15 });

  return (
    <section id="experience" ref={sectionRef} className="py-14 sm:py-28 px-4 sm:px-12 max-w-[1400px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 pointer-events-none'
          }`}
        >
          <span className="text-[#336443] font-semibold text-xs uppercase tracking-widest inline-flex items-center gap-1.5 bg-[#f4f7f4] px-3.5 py-1 rounded-full border border-[#1f2a1d]/5 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#85AB8B]" /> Unmatched Hospitality
          </span>

          <h2 className="text-2xl sm:text-4xl font-normal text-[#1f2a1d] leading-tight mt-2">
            Crafted for moments that{' '}
            <span className="text-[#336443] font-medium underline decoration-[#85AB8B]/40 underline-offset-8">
              linger forever
            </span>
          </h2>

          <p className="text-[#4b5b47] leading-relaxed my-5 text-sm sm:text-base font-light">
            Situated on NH-3 Highway near Chopra Mode in Dholpur, Hotel RB Palace blends authentic Rajasthani warmth with modern luxury. Every room is equipped with air conditioning, satellite LED TVs, 24hr hot & cold water, in-room refrigerators, electric kettles, and dual inverter & generator power backup.
          </p>

          <div className="space-y-4 mb-8">
            {highlights.map((item, idx) => (
              <div
                key={item.title}
                className={`group p-4.5 rounded-2xl bg-[#f4f7f4]/60 border border-[#1f2a1d]/5 hover:border-[#85AB8B] hover:bg-white hover:shadow-lg transition-all duration-500 transform ${
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
                <p className="text-xs text-[#4b5b47] leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#1f2a1d]/10">
            <div
              className={`p-5 rounded-2xl bg-white border border-[#1f2a1d]/10 shadow-xs transition-all duration-700 delay-300 transform ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <span className="text-3xl sm:text-4xl font-bold text-[#1f2a1d]">24 / 7</span>
              <p className="text-xs mt-1.5 uppercase tracking-wider font-semibold text-[#336443]">
                Power & Inverter Backup
              </p>
            </div>

            <div
              className={`p-5 rounded-2xl bg-white border border-[#1f2a1d]/10 shadow-xs transition-all duration-700 delay-500 transform ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <span className="text-3xl sm:text-4xl font-bold text-[#1f2a1d]">68+</span>
              <p className="text-xs mt-1.5 uppercase tracking-wider font-semibold text-[#336443]">
                Corporate Client Partners
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
              src="/images/experience_presidential.jpg"
              alt="Hotel RB Palace Suite Architecture"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute top-6 left-6 bg-white/85 backdrop-blur-md border border-white/60 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#85AB8B] animate-ping" />
              <span className="text-xs font-semibold text-[#1f2a1d]">Hotel RB Palace Dholpur</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-lg border border-white/20 p-4 rounded-2xl text-white">
              <p className="text-xs font-medium text-[#85AB8B] uppercase tracking-wider mb-0.5">NH-3 Highway Sanctuary</p>
              <p className="text-xs text-white/90 font-light">Near chopra mode, Bus stand, Dholpur, Rajasthan 328001.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
