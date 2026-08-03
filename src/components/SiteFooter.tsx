import { ArrowLeft, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BRAND_NAME, BRAND_SUFFIX, HOTEL_ADDRESS, HOTEL_PHONE, MANAGER_EMAIL } from '../data/constants';

type SiteFooterProps = {
  variant?: 'landing' | 'suite';
};

export default function SiteFooter({ variant = 'landing' }: SiteFooterProps) {
  const navigate = useNavigate();

  return (
    <footer
      className={`bg-[#1f2a1d] text-white/70 px-4 sm:px-12 border-t border-white/10 text-xs ${
        variant === 'suite' ? 'py-8 sm:py-10 mt-auto w-full' : 'py-10 sm:py-14'
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Brand & Tagline */}
          <div className="md:col-span-5">
            <button
              onClick={() => {
                navigate('/');
                window.scrollTo(0, 0);
              }}
              className="text-left cursor-pointer group mb-2 block"
              title="Return to Main Landing Page"
            >
              <span className="text-2xl font-semibold tracking-tight text-white group-hover:text-[#85AB8B] transition-colors">
                {BRAND_NAME}
                <span className="font-light text-[#85AB8B]"> {BRAND_SUFFIX}</span>
              </span>
            </button>
            <p className="text-white/60 text-xs leading-relaxed max-w-sm mb-4">
              Timeless hospitality, luxurious air-conditioned accommodations, 24/7 power backup, cozy Oriental dining, airport shuttle service, and grand banquet hosting in Dholpur, Rajasthan.
            </p>
            <div className="flex flex-col gap-2 text-xs text-white/80">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#85AB8B] shrink-0" />
                {HOTEL_ADDRESS}
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#85AB8B] shrink-0" />
                <a href={`tel:${HOTEL_PHONE.replace(/\s+/g, '')}`} className="hover:underline">
                  {HOTEL_PHONE}
                </a>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#85AB8B] shrink-0" />
                <a href={`mailto:${MANAGER_EMAIL}`} className="hover:underline">
                  {MANAGER_EMAIL}
                </a>
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <a
                  href="/#restaurant"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Royal Palace Dining
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate('/tourist-places');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Nearby Tourist Spots (Distances)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate('/shuttle');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Airport & Cab Shuttle Booking
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate('/careers');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Job Careers & Openings
                </button>
              </li>
              <li><a href="/#suites" className="hover:text-white transition-colors">5 Room Tiers & Tariffs</a></li>
              <li><a href="/#amenities" className="hover:text-white transition-colors">Facilities & Banquets</a></li>
            </ul>
          </div>

          {/* Accommodation Tariff Summary */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Room Tariff Tiers</h4>
            <div className="space-y-1.5 text-xs text-white/60">
              <p className="flex justify-between"><span>Deluxe Room:</span> <span className="text-white font-medium">₹2,000 + GST</span></p>
              <p className="flex justify-between"><span>SP. Deluxe Room:</span> <span className="text-white font-medium">₹2,200 + GST</span></p>
              <p className="flex justify-between"><span>EX. SP. Deluxe Room:</span> <span className="text-white font-medium">₹2,499 + GST</span></p>
              <p className="flex justify-between"><span>Presidential Suite:</span> <span className="text-white font-medium">₹3,000 + GST</span></p>
              <p className="flex justify-between"><span>Family Suite:</span> <span className="text-white font-medium">₹3,500 + GST</span></p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-[11px] text-center md:text-left">
            © {new Date().getFullYear()} Hotel RB Palace, Dholpur, Rajasthan. All rights reserved.
          </p>

          {variant === 'suite' ? (
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => window.scrollTo(0, 0), 100);
              }}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full border border-white/15 cursor-pointer transition-all hover:scale-105 active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 text-[#85AB8B]" />
              <span className="font-medium text-xs">Return to Resort Landing Page</span>
            </button>
          ) : (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full border border-white/15 cursor-pointer transition-all hover:bg-white/20"
            >
              <span className="font-medium text-xs">Back to Top</span>
              <ChevronRight className="w-4 h-4 -rotate-90 text-[#85AB8B]" />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
