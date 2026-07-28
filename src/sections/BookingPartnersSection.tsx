import { useState } from 'react';
import { ExternalLink, Globe, Sparkles, Building, Luggage, Plane } from 'lucide-react';
import { BOOKING_PARTNERS, type BookingPartner } from '../data/bookingPartners';

export default function BookingPartnersSection() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'OTA' | 'Corporate Travel' | 'Hospitality Partner'>('All');

  const filteredPartners = activeCategory === 'All'
    ? BOOKING_PARTNERS
    : BOOKING_PARTNERS.filter((p) => p.category === activeCategory);

  return (
    <section id="booking-partners" className="py-20 bg-[#f4f7f4]/60 border-t border-b border-[#1f2a1d]/10 relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-[#336443] font-semibold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#1f2a1d]/10 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#85AB8B]" /> Authorized Channel Partners
          </span>
          <h2 className="text-2xl sm:text-4xl font-normal text-[#1f2a1d] tracking-tight leading-tight mt-1">
            Book On Your Preferred Platform
          </h2>
          <p className="text-[#4b5b47] text-xs sm:text-sm mt-3 font-light leading-relaxed">
            In addition to direct website reservations, Hotel RB Palace is officially listed across India's top Online Travel Agencies (OTAs), corporate travel management desks, and luxury booking portals.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {(['All', 'OTA', 'Corporate Travel', 'Hospitality Partner'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-[#1f2a1d] text-white border-[#1f2a1d] shadow-md'
                  : 'bg-white text-[#4b5b47] border-[#1f2a1d]/10 hover:border-[#85AB8B] hover:text-[#1f2a1d]'
              }`}
            >
              {cat === 'All' ? 'All Partners (14)' : cat}
            </button>
          ))}
        </div>

        {/* Partners Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredPartners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>

        {/* Direct Booking Guarantee Footer Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-[#1f2a1d]/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#f4f7f4] text-[#336443] flex items-center justify-center shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#1f2a1d]">Direct Best Price Guarantee</h4>
              <p className="text-xs text-[#4b5b47] mt-0.5">
                Book directly on our website to enjoy complimentary room upgrades and flexible check-in timings.
              </p>
            </div>
          </div>
          <a
            href="#booking-form"
            className="bg-[#336443] hover:bg-[#274f34] text-white text-xs font-semibold px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg shrink-0"
          >
            Direct Reservation Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ partner }: { partner: BookingPartner }) {
  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border border-[#1f2a1d]/10 rounded-3xl p-5 hover:border-[#85AB8B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 relative"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          {/* Logo container */}
          <PartnerLogo partner={partner} />
          
          <span className="p-2 rounded-xl bg-[#f4f7f4] group-hover:bg-[#336443] text-[#4b5b47] group-hover:text-white transition-colors">
            <ExternalLink className="w-4 h-4" />
          </span>
        </div>

        <h3 className="font-semibold text-base text-[#1f2a1d] group-hover:text-[#336443] transition-colors leading-tight mb-1">
          {partner.name}
        </h3>
        <p className="text-[11px] text-[#85AB8B] font-medium uppercase tracking-wider mb-4">
          {partner.category}
        </p>
      </div>

      <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#4b5b47] group-hover:text-[#1f2a1d]">
        <span className="font-medium text-[11px] bg-[#f4f7f4] px-2.5 py-1 rounded-full border border-[#1f2a1d]/5">
          {partner.badgeText}
        </span>
        <span className="text-xs font-semibold text-[#336443] flex items-center gap-1 group-hover:underline">
          Book Stay &rarr;
        </span>
      </div>
    </a>
  );
}

function PartnerLogo({ partner }: { partner: BookingPartner }) {
  const [imgError, setImgError] = useState(false);
  const primaryLogoUrl = partner.logo;
  const secondaryLogoUrl = `https://www.google.com/s2/favicons?domain=${partner.domain}&sz=128`;

  return (
    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 p-2 shadow-2xs flex items-center justify-center overflow-hidden">
      {!imgError ? (
        <img
          src={primaryLogoUrl}
          alt={`${partner.name} logo`}
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src === primaryLogoUrl) {
              target.src = secondaryLogoUrl;
            } else {
              setImgError(true);
            }
          }}
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="w-full h-full bg-[#f4f7f4] text-[#336443] flex items-center justify-center font-bold text-xs">
          {partner.name.substring(0, 2).toUpperCase()}
        </div>
      )}
    </div>
  );
}
