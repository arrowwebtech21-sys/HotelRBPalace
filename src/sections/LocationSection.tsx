import { Compass, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import Magnet from '../components/Magnet';
import { HOTEL_ADDRESS, HOTEL_PHONE, MANAGER_EMAIL } from '../data/constants';

export default function LocationSection() {
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Hotel RB Palace Near chopra mode Bus stand NH-3 Highway Dholpur Rajasthan 328001'
  )}`;

  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    'Hotel RB Palace Near chopra mode Bus stand NH-3 Highway Dholpur Rajasthan 328001'
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[#336443] font-semibold text-xs uppercase tracking-widest inline-flex items-center gap-1.5 bg-[#f4f7f4] px-3.5 py-1 rounded-full border border-[#1f2a1d]/5 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#85AB8B]" /> Prime Coordinates
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#1f2a1d]">Location & Access</h2>
        </div>
        <div className="flex items-center justify-center md:justify-end gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1f2a1d]/5 border border-[#1f2a1d]/10 text-xs font-mono text-[#336443]">
            <span className="w-2 h-2 rounded-full bg-[#85AB8B] animate-ping" />
            Dholpur, Rajasthan (Pin: 328001)
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-5 bg-[#1f2a1d] text-white p-8 sm:p-10 rounded-[36px] sm:rounded-[48px] flex flex-col justify-between shadow-2xl relative overflow-hidden border border-white/10 group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#85AB8B]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#85AB8B]/30 transition-all duration-700" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#336443]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
              <div>
                <p className="text-xs text-[#85AB8B] font-semibold uppercase tracking-widest">Resort Sanctuary</p>
                <h3 className="text-2xl font-normal text-white mt-1">Hotel RB Palace</h3>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-[#85AB8B]">
                <Compass className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group/item"
              >
                <div className="p-2.5 rounded-xl bg-[#85AB8B]/20 text-[#85AB8B] shrink-0 group-hover/item:bg-[#85AB8B] group-hover/item:text-[#1f2a1d] transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider font-medium">Exact Location Address</p>
                  <p className="text-xs sm:text-sm text-white/90 font-light mt-0.5 leading-snug">
                    {HOTEL_ADDRESS}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${HOTEL_PHONE.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group/item"
              >
                <div className="p-2.5 rounded-xl bg-[#85AB8B]/20 text-[#85AB8B] shrink-0 group-hover/item:bg-[#85AB8B] group-hover/item:text-[#1f2a1d] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider font-medium">Front Desk & Enquiries</p>
                  <p className="text-xs sm:text-sm text-white/90 font-light mt-0.5">{HOTEL_PHONE}</p>
                </div>
              </a>

              <a
                href={`mailto:${MANAGER_EMAIL}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group/item"
              >
                <div className="p-2.5 rounded-xl bg-[#85AB8B]/20 text-[#85AB8B] shrink-0 group-hover/item:bg-[#85AB8B] group-hover/item:text-[#1f2a1d] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider font-medium">Inquiries</p>
                  <p className="text-xs sm:text-sm text-white/90 font-light mt-0.5">{MANAGER_EMAIL}</p>
                </div>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
                <p className="text-[10px] text-[#85AB8B] uppercase tracking-wider font-semibold">Dholpur Junction</p>
                <p className="text-base font-semibold text-white mt-1">10 Mins</p>
                <p className="text-[10px] text-white/50">Near Bus Stand / NH-3</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
                <p className="text-[10px] text-[#85AB8B] uppercase tracking-wider font-semibold">Gwalior Airport</p>
                <p className="text-base font-semibold text-white mt-1">55 Mins</p>
                <p className="text-[10px] text-white/50">Via NH-3 Highway</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
            <Magnet padding={60} strength={2}>
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#85AB8B] hover:bg-[#6e9674] text-[#1f2a1d] font-bold text-xs py-4 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl cursor-pointer"
              >
                <MapPin className="w-4 h-4" /> Open Dholpur NH-3 in Google Maps
              </a>
            </Magnet>
          </div>
        </div>

        <div className="lg:col-span-7 rounded-[36px] sm:rounded-[48px] overflow-hidden shadow-2xl border border-[#1f2a1d]/10 min-h-[450px] relative group bg-[#2d3a2a]">
          <div className="absolute top-6 left-6 z-20 bg-white/85 backdrop-blur-xl border border-white/60 p-4 sm:p-5 rounded-3xl shadow-xl max-w-xs hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#336443] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1f2a1d]">
                Hotel RB Palace Entrance
              </span>
            </div>
            <p className="text-xs text-[#4b5b47] mt-2 leading-relaxed">
              Near chopra mode, Bus stand, On NH-3 Highway, Dholpur, Rajasthan 328001.
            </p>
          </div>

          <iframe
            title="Hotel RB Palace Dholpur Location Map"
            src={mapsEmbedUrl}
            className="w-full h-full border-0 min-h-[450px] filter grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}