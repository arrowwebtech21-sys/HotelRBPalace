import { MapPin, Clock, ArrowRight, Compass, Navigation } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TOURIST_SPOTS } from '../data/touristSpots';
import Magnet from '../components/Magnet';

export default function TouristSection() {
  const navigate = useNavigate();
  // Display top 4 spots on landing page
  const featuredSpots = TOURIST_SPOTS.slice(0, 4);

  return (
    <section id="tourist-spots" className="py-16 sm:py-24 px-4 sm:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1f2a1d]/10 text-[#336443] font-semibold text-xs uppercase tracking-widest border border-[#1f2a1d]/15 mb-3">
            <Compass className="w-3.5 h-3.5 text-[#336443]" /> Nearby Attractions & Excursions
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#1f2a1d] tracking-tight">
            Explore <span className="italic font-serif text-[#336443]">Dholpur & Surrounds</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl font-light leading-relaxed">
            Hotel RB Palace is conveniently situated on the NH-3 Highway, providing swift access to ancient temples, wildlife sanctuaries, and historical river forts.
          </p>
        </div>

        <Magnet padding={50} strength={2}>
          <button
            onClick={() => {
              navigate('/tourist-places');
              window.scrollTo(0, 0);
            }}
            className="inline-flex items-center gap-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white font-medium text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl shrink-0 cursor-pointer"
          >
            <span>View All 8 Tourist Destinations</span>
            <ArrowRight className="w-4 h-4 text-[#85AB8B]" />
          </button>
        </Magnet>
      </div>

      {/* Grid of Featured Tourist Spots */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredSpots.map((spot) => (
          <div
            key={spot.id}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={spot.image}
                alt={spot.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Distance Pill Badge */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#1f2a1d] px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1 border border-white/80">
                <Navigation className="w-3 h-3 text-[#336443]" />
                {spot.distanceKm} km away
              </div>

              {/* Category Pill */}
              <div className="absolute top-3 left-3 bg-[#1f2a1d]/80 backdrop-blur-md text-[#85AB8B] px-3 py-1 rounded-full text-[11px] font-medium border border-white/10">
                {spot.category}
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] text-[#85AB8B] font-semibold block">{spot.hindiName}</span>
                <h3 className="text-base font-semibold line-clamp-1">{spot.name}</h3>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">{spot.shortDescription}</p>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-gray-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#336443]" /> ~{spot.travelTimeMinutes} min drive
                </span>
                <button
                  onClick={() => {
                    navigate('/shuttle');
                    window.scrollTo(0, 0);
                  }}
                  className="text-[#336443] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Book Shuttle <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
