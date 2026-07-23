import { Menu, Phone, Sparkles, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import BoomerangVideoBg from '../components/BoomerangVideoBg';
import Magnet from '../components/Magnet';
import { BG_VIDEO, BRAND_NAME, BRAND_SUFFIX, HOTEL_PHONE } from '../data/constants';

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#suites', label: 'Suites & Rooms' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#location', label: 'Location' }
];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative w-full min-h-screen sm:h-screen overflow-hidden flex flex-col justify-between">
      <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 pointer-events-none" />

      <nav className="relative z-30 flex items-center justify-between px-6 sm:px-10 md:px-14 py-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-white drop-shadow-md">
            {BRAND_NAME}
            <span className="font-light text-[#85AB8B]"> {BRAND_SUFFIX}</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-6 py-2 shadow-lg border border-white/40">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm px-4 py-1.5 rounded-full font-medium text-[#4b5b47] hover:text-[#1f2a1d] hover:bg-white/50 transition-all"
            >
              {link.label}
            </a>
          ))}

          <Magnet padding={80} strength={3}>
            <a
              href="#booking-form"
              className="ml-3 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-semibold px-6 py-2 rounded-full transition-all shadow-md hover:shadow-xl inline-block"
            >
              Reserve Stay
            </a>
          </Magnet>
        </div>

        <div className="flex items-center gap-4 text-white">
          <a
            href={`tel:${HOTEL_PHONE.replace(/\s+/g, '')}`}
            className="hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity bg-black/20 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
          >
            <Phone className="w-4 h-4 text-[#85AB8B]" />
            {HOTEL_PHONE}
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden relative flex items-center justify-center w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-[#1f2a1d] shadow-lg"
          >
            <Menu className={`w-5 h-5 absolute ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <X className={`w-5 h-5 absolute ${menuOpen ? 'opacity-100' : 'opacity-0'}`} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden absolute top-24 left-6 right-6 z-40 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#1f2a1d] px-4 py-3 rounded-2xl hover:bg-[#f4f7f4]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking-form"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-[#1f2a1d] text-white text-sm font-semibold px-4 py-3 rounded-full text-center"
          >
            Reserve Stay
          </a>
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-10 sm:pt-0">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs tracking-widest uppercase font-medium mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#85AB8B]" /> Royal Heritage Experience
        </span>
        <h1 className="font-normal leading-[1.02] text-white text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-5xl tracking-tight drop-shadow-lg">
          Sanctuary of <span className="text-[#85AB8B]">tranquility & royal</span> elegance
        </h1>
        <p className="mt-6 text-white/90 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl">
          Experience timeless Rajasthani hospitality at Hotel RB Palace, Kukas, Jaipur.
        </p>
      </div>

      <div className="relative z-10 px-6 sm:px-10 md:px-14 pb-8 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white/90">
          <Sparkles className="w-4 h-4 text-[#85AB8B]" />
          <p className="text-xs text-white/80 font-light">Luxury banquet halls & fine dining in Kukas, Jaipur</p>
        </div>
        <a
          href="#suites"
          className="text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white flex items-center gap-2"
        >
          Explore Accommodations <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}