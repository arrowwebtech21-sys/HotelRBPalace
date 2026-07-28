import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  Car,
  Train,
  Bus,
  Plane,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Compass,
  Clock
} from 'lucide-react';
import Magnet from '../components/Magnet';
import { HOTEL_ADDRESS, HOTEL_PHONE, MANAGER_EMAIL } from '../data/constants';

const cityRoutes = [
  { city: 'Agra', distance: '55 km', time: '50 Mins', via: 'NH-3 Highway Corridor', icon: Car },
  { city: 'Gwalior', distance: '60 km', time: '55 Mins', via: 'NH-3 Direct Highway', icon: Plane },
  { city: 'Delhi / NCR', distance: '240 km', time: '3.5 Hours', via: 'Yamuna Expressway / NH-3', icon: Car },
  { city: 'Jaipur', distance: '270 km', time: '4 Hours', via: 'NH-21 & Dholpur Bypass', icon: Car }
];

export default function LocationSection() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'address' | 'connectivity' | 'routes'>('address');

  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Hotel RB Palace Near chopra mode Bus stand NH-3 Highway Dholpur Rajasthan 328001'
  )}`;

  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    'Hotel RB Palace Near chopra mode Bus stand NH-3 Highway Dholpur Rajasthan 328001'
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(HOTEL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 bg-[#f4f7f4] border-t border-[#1f2a1d]/10 relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#85AB8B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#336443]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        {/* Header Title Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#1f2a1d]/10">
          <div>
            <span className="text-[#336443] font-semibold text-xs uppercase tracking-widest inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#1f2a1d]/10 mb-2 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#85AB8B]" /> Strategic Location
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal text-[#1f2a1d] mt-1">Location & Route Guide</h2>
            <p className="text-[#4b5b47] text-xs sm:text-sm mt-1 max-w-xl font-light">
              Situated directly on the main NH-3 Highway near Chopra Mode in Dholpur, Rajasthan.
            </p>
          </div>

          {/* Quick Nav Badges */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1f2a1d]/10 text-xs font-semibold text-[#1f2a1d] shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#85AB8B] animate-pulse" />
              Main NH-3 Highway Hub
            </span>
            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-[#1f2a1d] hover:bg-[#2e3e2b] text-white text-xs font-semibold px-5 py-2 rounded-full transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5 text-[#85AB8B]" /> Live Directions <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 4 Regional Highway Connection Cards Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {cityRoutes.map((route) => (
            <div
              key={route.city}
              className="bg-white p-5 rounded-3xl border border-[#1f2a1d]/10 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold text-[#85AB8B] uppercase tracking-wider bg-[#f4f7f4] px-2.5 py-1 rounded-full border border-[#1f2a1d]/5">
                  {route.distance}
                </span>
                <route.icon className="w-4 h-4 text-[#336443] group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-sm font-bold text-[#1f2a1d] mb-0.5">{route.city}</h4>
              <p className="text-base font-extrabold text-[#336443] mb-1">{route.time}</p>
              <p className="text-[10px] text-[#4b5b47] line-clamp-1">{route.via}</p>
            </div>
          ))}
        </div>

        {/* Tab Navigation Filter Strip */}
        <div className="flex items-center justify-between bg-white p-2 rounded-3xl border border-[#1f2a1d]/10 shadow-xs mb-8 flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('address')}
              className={`py-2.5 px-5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'address'
                  ? 'bg-[#1f2a1d] text-white shadow-md'
                  : 'text-[#4b5b47] hover:text-[#1f2a1d] hover:bg-[#f4f7f4]'
              }`}
            >
              <MapPin className="w-4 h-4 text-[#85AB8B]" /> Address & Desk Contacts
            </button>

            <button
              onClick={() => setActiveTab('connectivity')}
              className={`py-2.5 px-5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'connectivity'
                  ? 'bg-[#1f2a1d] text-white shadow-md'
                  : 'text-[#4b5b47] hover:text-[#1f2a1d] hover:bg-[#f4f7f4]'
              }`}
            >
              <Compass className="w-4 h-4 text-[#85AB8B]" /> Local Transport (3 Hubs)
            </button>
          </div>

          {/* Copy Address Quick Trigger */}
          <button
            onClick={handleCopyAddress}
            className="py-2.5 px-4 rounded-2xl bg-[#f4f7f4] hover:bg-[#e4eae4] text-[#1f2a1d] text-xs font-semibold border border-[#1f2a1d]/10 flex items-center gap-2 transition-all cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#336443]" />}
            {copied ? 'Address Copied!' : 'Copy Full Address'}
          </button>
        </div>

        {/* Interactive Tab Cards */}
        {activeTab === 'connectivity' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Bus Stand */}
            <div className="bg-white p-6 rounded-3xl border border-[#1f2a1d]/10 shadow-sm hover:border-[#85AB8B] transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#f4f7f4] text-[#336443] flex items-center justify-center shrink-0">
                <Bus className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-[#85AB8B] uppercase tracking-wider font-bold">200 meters away</span>
                <h4 className="text-base font-bold text-[#1f2a1d] mt-0.5">Chopra Mode Bus Stand</h4>
                <p className="text-xs text-[#4b5b47] mt-1 leading-relaxed">
                  1-minute walk from hotel entrance. Direct state bus connectivity for Agra, Gwalior & Jaipur.
                </p>
              </div>
            </div>

            {/* Railway Station */}
            <div className="bg-white p-6 rounded-3xl border border-[#1f2a1d]/10 shadow-sm hover:border-[#85AB8B] transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#f4f7f4] text-[#336443] flex items-center justify-center shrink-0">
                <Train className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-[#85AB8B] uppercase tracking-wider font-bold">3.2 km away</span>
                <h4 className="text-base font-bold text-[#1f2a1d] mt-0.5">Dholpur Railway Junction</h4>
                <p className="text-xs text-[#4b5b47] mt-1 leading-relaxed">
                  10-minute auto/cab drive. Major express trains connected to Delhi, Agra, Gwalior & Bhopal.
                </p>
              </div>
            </div>

            {/* Airport */}
            <div className="bg-white p-6 rounded-3xl border border-[#1f2a1d]/10 shadow-sm hover:border-[#85AB8B] transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#f4f7f4] text-[#336443] flex items-center justify-center shrink-0">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-[#85AB8B] uppercase tracking-wider font-bold">60 km away</span>
                <h4 className="text-base font-bold text-[#1f2a1d] mt-0.5">Gwalior Rajmata Airport</h4>
                <p className="text-xs text-[#4b5b47] mt-1 leading-relaxed">
                  55-minute direct drive via NH-3 Highway. Hotel taxi pickup and drop available on request.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'address' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Address Card */}
            <div className="bg-white p-6 rounded-3xl border border-[#1f2a1d]/10 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#f4f7f4] text-[#336443] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-[#85AB8B] uppercase tracking-wider font-bold">Official Property Address</span>
                <h4 className="text-sm font-bold text-[#1f2a1d] mt-0.5">Hotel RB Palace Dholpur</h4>
                <p className="text-xs text-[#4b5b47] mt-1 leading-relaxed">{HOTEL_ADDRESS}</p>
              </div>
            </div>

            {/* Desk Phone */}
            <a
              href={`tel:${HOTEL_PHONE.replace(/\s+/g, '')}`}
              className="bg-white p-6 rounded-3xl border border-[#1f2a1d]/10 shadow-sm hover:border-[#85AB8B] transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#f4f7f4] text-[#336443] group-hover:bg-[#336443] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-[#85AB8B] uppercase tracking-wider font-bold">24/7 Reception Desk</span>
                <h4 className="text-base font-bold text-[#1f2a1d] mt-0.5">{HOTEL_PHONE}</h4>
                <p className="text-xs text-[#4b5b47] mt-1">Tap to call desk for instant assistance</p>
              </div>
            </a>

            {/* Email Contact */}
            <a
              href={`mailto:${MANAGER_EMAIL}`}
              className="bg-white p-6 rounded-3xl border border-[#1f2a1d]/10 shadow-sm hover:border-[#85AB8B] transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#f4f7f4] text-[#336443] group-hover:bg-[#336443] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-[#85AB8B] uppercase tracking-wider font-bold">Reservations & Banquets</span>
                <h4 className="text-sm font-bold text-[#1f2a1d] mt-0.5 line-clamp-1">{MANAGER_EMAIL}</h4>
                <p className="text-xs text-[#4b5b47] mt-1">Direct corporate & banquet inquiries</p>
              </div>
            </a>
          </div>
        )}

        {/* Full-Width Panoramic Map Display Container with Floating HUD Overlay */}
        <div className="rounded-[36px] sm:rounded-[48px] overflow-hidden shadow-2xl border border-[#1f2a1d]/10 min-h-[500px] relative group bg-white">
          {/* Top Floating Landmark Overlay Card */}
          <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-xl border border-[#1f2a1d]/10 p-5 rounded-3xl shadow-xl max-w-sm hidden sm:block">
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#336443] uppercase tracking-wider bg-[#f4f7f4] px-3 py-1 rounded-full border border-[#1f2a1d]/5">
                <span className="w-2 h-2 rounded-full bg-[#85AB8B] animate-pulse" /> Hotel RB Palace Landmark
              </span>
              <span className="text-[11px] font-extrabold text-[#336443]">NH-3 Highway</span>
            </div>
            <h4 className="text-sm font-bold text-[#1f2a1d]">Near Chopra Mode Bus Stand</h4>
            <p className="text-xs text-[#4b5b47] mt-1 leading-relaxed font-light">
              Dholpur, Rajasthan 328001. Convenient 24/7 gate entry with free on-site valet parking.
            </p>
          </div>

          {/* Bottom Floating Navigation Bar */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/90 backdrop-blur-xl p-4 sm:px-6 rounded-3xl border border-[#1f2a1d]/10 shadow-2xl">
            <div className="flex items-center gap-4 text-xs font-semibold text-[#1f2a1d]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#336443]" /> On-Site Free Guest Parking
              </span>
              <span className="hidden md:flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#336443]" /> 24/7 Front Gate Access
              </span>
            </div>

            <Magnet padding={50} strength={2}>
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1f2a1d] hover:bg-[#2e3e2b] text-white text-xs font-bold px-6 py-3 rounded-full transition-all shadow-md flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5 text-[#85AB8B]" /> Open Interactive Google Maps
              </a>
            </Magnet>
          </div>

          {/* Interactive Google Map iFrame */}
          <iframe
            title="Hotel RB Palace Dholpur Location Map"
            src={mapsEmbedUrl}
            className="w-full h-full border-0 min-h-[500px] transition-all duration-700"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}