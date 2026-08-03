import { useState } from 'react';
import { ArrowLeft, Navigation, Clock, MapPin, ExternalLink, Car, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';
import Magnet from '../components/Magnet';
import { TOURIST_SPOTS, type TouristSpot } from '../data/touristSpots';
import { BRAND_NAME, BRAND_SUFFIX } from '../data/constants';

export default function TouristPlacesPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSpotModal, setSelectedSpotModal] = useState<TouristSpot | null>(null);

  const categories = ['All', 'Heritage', 'Wildlife Safari', 'Sacred Temple', 'Architectural Wonder'];

  const filteredSpots = selectedCategory === 'All'
    ? TOURIST_SPOTS
    : TOURIST_SPOTS.filter((spot) => spot.category === selectedCategory);

  return (
    <div className="w-full bg-[#fcfdfc] text-[#1f2a1d] min-h-screen flex flex-col justify-between selection:bg-[#85AB8B] selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#172215]/95 backdrop-blur-md text-white border-b border-white/10 px-4 sm:px-12 py-4 shadow-md">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <button
            onClick={() => {
              navigate('/');
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-[#85AB8B] group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">Return to Main Website</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
              {BRAND_NAME} <span className="font-light text-[#85AB8B]">{BRAND_SUFFIX}</span>
            </span>
          </div>

          <button
            onClick={() => {
              navigate('/shuttle');
              window.scrollTo(0, 0);
            }}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#85AB8B] hover:bg-[#6e9674] text-[#172215] text-xs font-bold px-4 py-2 rounded-full transition-all cursor-pointer"
          >
            <Car className="w-3.5 h-3.5" /> Book Shuttle Cab
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-[#172215] text-white py-16 sm:py-24 px-4 sm:px-12 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#85AB8B]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10 text-center sm:text-left flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[#85AB8B] font-semibold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
              <Compass className="w-3.5 h-3.5 text-[#85AB8B]" /> Explore Dholpur & Surrounding Wonders
            </span>
            <h1 className="text-3xl sm:text-5xl font-normal text-white leading-tight">
              Tourist Places & <span className="text-[#85AB8B]">Sightseeing Guide</span>
            </h1>
            <p className="text-white/70 text-xs sm:text-base font-light leading-relaxed">
              Discover sacred sarovars, 15th-century sandstone forts, rare river wildlife safaris, and world wonders within convenient driving distance from Hotel RB Palace (NH-3 Highway).
            </p>
          </div>

          <div className="bg-white/5 border border-white/15 p-6 rounded-3xl backdrop-blur-md flex flex-col gap-3 shrink-0 text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#85AB8B]" /> <span>Located on NH-3 Express Highway</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-[#85AB8B]" /> <span>Direct AC Hotel Shuttle On Request</span>
            </div>
            <div className="flex items-center gap-2">
              <Navigation className="w-4 h-4 text-[#85AB8B]" /> <span>4 km to 60 km Travel Radius</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sightseeing Content */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-12 py-12 sm:py-20 w-full space-y-12">
        {/* Category Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
          <div>
            <span className="text-xs font-bold text-[#336443] uppercase tracking-wider block">Destinations Index</span>
            <h2 className="text-2xl font-bold text-[#1f2a1d]">Featured Places to Visit</h2>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1f2a1d] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tourist Spot Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpots.map((spot) => (
            <div
              key={spot.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Distance Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#1f2a1d] px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 border border-white/80">
                    <Navigation className="w-3.5 h-3.5 text-[#336443]" />
                    {spot.distanceKm} km from hotel
                  </div>

                  <div className="absolute top-4 left-4 bg-[#1f2a1d]/85 text-[#85AB8B] px-3 py-1 rounded-full text-[11px] font-semibold border border-white/10">
                    {spot.category}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-[#85AB8B] font-semibold block">{spot.hindiName}</span>
                    <h3 className="text-lg font-bold line-clamp-1">{spot.name}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-gray-600 leading-relaxed font-light">{spot.shortDescription}</p>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-[#1f2a1d] uppercase tracking-wider block">Key Highlights</span>
                    <div className="flex flex-wrap gap-1.5">
                      {spot.highlights.map((h, i) => (
                        <span key={i} className="text-[11px] bg-[#336443]/10 text-[#336443] font-medium px-2.5 py-0.5 rounded-md">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-gray-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#336443]" /> ~{spot.travelTimeMinutes} mins drive
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedSpotModal(spot)}
                    className="text-xs font-semibold text-[#1f2a1d] hover:text-[#336443] underline cursor-pointer"
                  >
                    Guide Details
                  </button>
                  <button
                    onClick={() => {
                      navigate('/shuttle');
                      window.scrollTo(0, 0);
                    }}
                    className="bg-[#1f2a1d] hover:bg-[#2a3827] text-white font-semibold px-4 py-2 rounded-full transition-all text-xs cursor-pointer flex items-center gap-1"
                  >
                    <Car className="w-3 h-3 text-[#85AB8B]" /> Book Shuttle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Spot Detail Modal */}
      {selectedSpotModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-gray-100 max-h-[90vh] flex flex-col">
            <div className="relative h-64 shrink-0">
              <img src={selectedSpotModal.image} alt={selectedSpotModal.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <button
                onClick={() => setSelectedSpotModal(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold cursor-pointer hover:bg-black/80"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs text-[#85AB8B] font-semibold">{selectedSpotModal.hindiName}</span>
                <h3 className="text-2xl font-bold">{selectedSpotModal.name}</h3>
                <p className="text-xs text-white/80 flex items-center gap-2 mt-1">
                  <span><Navigation className="w-3.5 h-3.5 inline text-[#85AB8B]" /> {selectedSpotModal.distanceKm} km from Hotel RB Palace</span>
                  <span>•</span>
                  <span><Clock className="w-3.5 h-3.5 inline text-[#85AB8B]" /> ~{selectedSpotModal.travelTimeMinutes} mins travel time</span>
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-xs text-gray-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-[#1f2a1d] text-xs uppercase tracking-wider mb-1">About Destination</h4>
                <p>{selectedSpotModal.fullDescription}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#1f2a1d] text-xs uppercase tracking-wider mb-2">Key Attractions & Highlights</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {selectedSpotModal.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 bg-[#f4f7f4] p-2 rounded-xl text-gray-800 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-[#336443]" /> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#172215] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-[#85AB8B] uppercase tracking-wider font-semibold block">Best Time to Visit</span>
                  <p className="text-xs font-medium">{selectedSpotModal.bestTimeToVisit}</p>
                </div>
                <a
                  href={selectedSpotModal.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#85AB8B]" /> Open in Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedSpotModal(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Close
              </button>

              <Magnet padding={40} strength={2}>
                <button
                  onClick={() => {
                    setSelectedSpotModal(null);
                    navigate('/shuttle');
                    window.scrollTo(0, 0);
                  }}
                  className="bg-[#85AB8B] hover:bg-[#6e9674] text-[#172215] font-bold text-xs px-6 py-2.5 rounded-full flex items-center gap-1.5 shadow-lg cursor-pointer"
                >
                  <Car className="w-4 h-4" /> Book Hotel Shuttle to Destination
                </button>
              </Magnet>
            </div>
          </div>
        </div>
      )}

      <SiteFooter variant="landing" />
    </div>
  );
}
