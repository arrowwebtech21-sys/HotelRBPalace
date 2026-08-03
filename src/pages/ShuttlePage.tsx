import { useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowLeft, Car, Plane, ShieldCheck, Clock, Send, CheckCircle2, User, Mail, Phone, Calendar, MapPin, Loader2, Sparkles, Navigation, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';
import Magnet from '../components/Magnet';
import BrandLogo from '../components/BrandLogo';
import { FLEET_VEHICLES, POPULAR_SHUTTLE_ROUTES } from '../data/shuttleRates';
import { sendShuttleBooking, type ShuttleBooking, getTodayString } from '../utils/booking';
import { MANAGER_EMAIL } from '../data/constants';

export default function ShuttlePage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    serviceType: string;
    pickupLocation: string;
    destination: string;
    pickupDate: string;
    pickupTime: string;
    vehicleCategory: string;
    passengersCount: string;
    specialNotes: string;
  }>({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Airport Pickup / Drop',
    pickupLocation: 'Hotel RB Palace, Dholpur',
    destination: 'Gwalior Rajmata Vijaya Raje Scindia Airport (GWL)',
    pickupDate: getTodayString(),
    pickupTime: '10:00 AM',
    vehicleCategory: 'Executive AC Sedan (Swift Dzire / Etios)',
    passengersCount: '2 Passengers',
    specialNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRouteQuickBook = (routeName: string, destType: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: destType === 'Airport' ? 'Airport Pickup / Drop' : destType === 'Railway Station' ? 'Station Pickup / Drop' : 'Tourist Sightseeing Trip',
      destination: routeName
    }));
    const el = document.getElementById('shuttle-booking-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload: ShuttleBooking = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceType: formData.serviceType,
      pickupLocation: formData.pickupLocation,
      destination: formData.destination,
      pickupDate: formData.pickupDate,
      pickupTime: formData.pickupTime,
      vehicleCategory: formData.vehicleCategory,
      passengersCount: formData.passengersCount,
      specialNotes: formData.specialNotes
    };

    await sendShuttleBooking(payload);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-[#fcfdfc] text-[#1f2a1d] min-h-screen flex flex-col justify-between selection:bg-[#85AB8B] selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#172215]/95 backdrop-blur-md text-white border-b border-white/10 px-4 sm:px-12 py-3 sm:py-4 flex items-center justify-between shadow-md gap-4">
        <button
          onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white transition-all bg-white/10 hover:bg-white/20 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full cursor-pointer border border-white/15 active:scale-95 shrink-0 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#85AB8B]" /> <span className="hidden sm:inline">Back to Home</span><span className="sm:hidden">Back</span>
        </button>

        <BrandLogo
          variant="header"
          size="sm"
          onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }}
        />

        <a
          href="#shuttle-booking-form"
          className="hidden sm:inline-flex items-center gap-1.5 bg-[#85AB8B] hover:bg-[#6e9674] text-[#172215] text-xs font-bold px-4 py-2 rounded-full transition-all shrink-0"
        >
          <Car className="w-3.5 h-3.5" /> Book Cab Now
        </a>
      </header>

      {/* Hero Banner */}
      <section className="bg-[#172215] text-white py-16 sm:py-24 px-4 sm:px-12 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#85AB8B]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10 text-center sm:text-left flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[#85AB8B] font-semibold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
              <Car className="w-3.5 h-3.5 text-[#85AB8B]" /> Premier Guest Transport
            </span>
            <h1 className="text-3xl sm:text-5xl font-normal text-white leading-tight">
              Shuttle & Cab Booking <span className="text-[#85AB8B]">Service</span>
            </h1>
            <p className="text-white/70 text-xs sm:text-base font-light leading-relaxed">
              Enjoy 24/7 seamless AC transfers between Hotel RB Palace (NH-3 Highway) and Gwalior Airport, Agra Airport, Dholpur Junction, local tourist circuits, and intercity destinations.
            </p>
          </div>

          <div className="bg-white/5 border border-white/15 p-6 rounded-3xl backdrop-blur-md grid grid-cols-2 gap-4 shrink-0 text-center sm:text-left">
            <div>
              <span className="text-2xl font-bold text-[#85AB8B]">24/7</span>
              <p className="text-xs text-white/70">Chauffeur Support</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">3 Fleet</span>
              <p className="text-xs text-white/70">Sedan, SUV, Bus</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">100%</span>
              <p className="text-xs text-white/70">AC Vehicles</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#85AB8B]">Fixed</span>
              <p className="text-xs text-white/70">Transparent Rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-12 py-12 sm:py-20 w-full space-y-16">
        {/* Fleet Vehicles Showcase */}
        <section className="space-y-8">
          <div>
            <span className="text-xs font-bold text-[#336443] uppercase tracking-wider block">Vehicle Options</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2a1d]">Hotel RB Palace Chauffeur Fleet</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FLEET_VEHICLES.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
                    <span className="absolute top-3 right-3 bg-[#1f2a1d] text-[#85AB8B] text-xs font-bold px-3 py-1 rounded-full">
                      {vehicle.baseRatePerKm}
                    </span>
                    <span className="absolute top-3 left-3 bg-white/95 text-[#1f2a1d] text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                      {vehicle.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#1f2a1d]">{vehicle.name}</h3>
                      <p className="text-xs text-gray-500">{vehicle.models}</p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-[#336443] bg-[#336443]/10 p-2.5 rounded-xl">
                      <Users className="w-4 h-4 shrink-0" />
                      <span>{vehicle.capacity}</span>
                    </div>

                    <div className="space-y-1.5 text-xs text-gray-600">
                      {vehicle.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#336443] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-100 mt-4">
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, vehicleCategory: `${vehicle.name} (${vehicle.models})` }));
                      const el = document.getElementById('shuttle-booking-form');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-xs font-semibold py-3 rounded-full transition-all cursor-pointer text-center"
                  >
                    Select {vehicle.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Transfer Packages Table/Cards */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-bold text-[#336443] uppercase tracking-wider block">Transparent Fixed Tariffs</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2a1d]">Popular Airport & Station Routes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {POPULAR_SHUTTLE_ROUTES.map((route) => (
              <div
                key={route.id}
                className="bg-white p-5 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#336443]/10 text-[#336443] px-2.5 py-0.5 rounded-md">
                      {route.destinationType}
                    </span>
                    {route.popular && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-700 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-600" /> Top Booked
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-[#1f2a1d]">{route.routeName}</h4>
                  <p className="text-xs text-gray-500 flex items-center gap-3">
                    <span className="flex items-center gap-1"><Navigation className="w-3 h-3 text-[#336443]" /> {route.distanceOneWay}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#336443]" /> {route.estimatedTime}</span>
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
                  <div className="text-left sm:text-right text-xs">
                    <p className="font-bold text-[#1f2a1d]">Sedan: <span className="text-[#336443]">{route.fixedRateSedan}</span></p>
                    <p className="text-gray-500 text-[11px]">SUV: <span className="font-semibold text-gray-700">{route.fixedRateSUV}</span></p>
                  </div>
                  <button
                    onClick={() => handleRouteQuickBook(route.routeName, route.destinationType)}
                    className="bg-[#1f2a1d] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#2a3827] transition-all cursor-pointer"
                  >
                    Reserve Route
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shuttle Booking Form */}
        <section id="shuttle-booking-form" className="bg-[#172215] text-white rounded-[28px] sm:rounded-[40px] p-6 sm:p-12 shadow-2xl relative overflow-hidden border border-[#85AB8B]/20">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="inline-flex items-center gap-1.5 text-[#85AB8B] font-semibold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
                <Car className="w-3.5 h-3.5 text-[#85AB8B]" /> Shuttle Reservation Desk
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal text-white">Book Your Shuttle Service</h2>
              <p className="text-white/70 text-xs sm:text-sm font-light">
                Submit your trip requirements below. Instant confirmation details will be sent directly to <span className="text-[#85AB8B] font-medium">{MANAGER_EMAIL}</span>.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-white/10 border border-[#85AB8B]/40 rounded-3xl p-8 text-center space-y-4 backdrop-blur-md">
                <CheckCircle2 className="w-12 h-12 text-[#85AB8B] mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-white">Shuttle Request Submitted!</h3>
                <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto leading-relaxed">
                  Thank you! Our transport desk has received your cab booking details for <span className="font-bold text-[#85AB8B]">{formData.destination}</span> on <span className="font-bold text-white">{formData.pickupDate}</span>. Our chauffeur manager will contact you shortly to confirm driver details.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                  }}
                  className="bg-[#85AB8B] text-[#172215] text-xs font-bold px-6 py-3 rounded-full hover:bg-[#6e9674] transition-all cursor-pointer"
                >
                  Book Another Transfer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#85AB8B]" /> Passenger Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Amit Verma"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#85AB8B]" /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="amit@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#85AB8B]" /> Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 00000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#85AB8B]" /> Service Category
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full bg-[#233120] border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B] cursor-pointer"
                  >
                    <option value="Airport Pickup / Drop">Airport Pickup / Drop (GWL / AGR / JAI / DEL)</option>
                    <option value="Station Pickup / Drop">Railway Station Pickup / Drop (Dholpur / Agra / Gwalior)</option>
                    <option value="Tourist Sightseeing Trip">Tourist Sightseeing Trip (Chambal Safari / Machkund / Forts)</option>
                    <option value="Intercity City Transfer">Intercity Transfer / Custom Outstation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#85AB8B]" /> Pickup Location
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    required
                    placeholder="Hotel RB Palace OR Gwalior Airport"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-[#85AB8B]" /> Drop Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    required
                    placeholder="Chambal Safari / Agra Taj Mahal / Hotel RB Palace"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#85AB8B]" /> Date of Travel
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    required
                    min={getTodayString()}
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B] [color-scheme:dark]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#85AB8B]" /> Preferred Pickup Time
                  </label>
                  <input
                    type="text"
                    name="pickupTime"
                    required
                    placeholder="e.g. 10:30 AM or Flight GWL-102 Time"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#85AB8B]" /> Preferred Fleet Vehicle
                  </label>
                  <select
                    name="vehicleCategory"
                    value={formData.vehicleCategory}
                    onChange={handleInputChange}
                    className="w-full bg-[#233120] border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B] cursor-pointer"
                  >
                    <option value="Executive AC Sedan (Swift Dzire / Etios)">Executive AC Sedan (4 Seats)</option>
                    <option value="Royal Premium SUV (Innova Crysta / XUV700)">Royal Premium SUV (6-7 Seats)</option>
                    <option value="Banquet Mini-Bus (Tempo Traveler 16-Seater)">Banquet Mini-Bus (Tempo Traveler 16-Seater)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#85AB8B]" /> Number of Passengers
                  </label>
                  <input
                    type="text"
                    name="passengersCount"
                    required
                    placeholder="e.g. 2 Adults, 1 Child + 2 Luggage"
                    value={formData.passengersCount}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="sm:col-span-2 space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5 text-[#85AB8B]" /> Flight # / Train # / Special Instructions
                  </label>
                  <textarea
                    name="specialNotes"
                    rows={3}
                    placeholder="Provide flight number, train arrival time, child seat requirement, or extra luggage details..."
                    value={formData.specialNotes}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all resize-none"
                  />
                </div>

                <div className="sm:col-span-2 pt-4 flex justify-center">
                  <Magnet padding={60} strength={2}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#85AB8B] hover:bg-[#6e9674] text-[#172215] font-bold text-sm px-10 py-4 rounded-full flex items-center gap-2.5 shadow-2xl hover:scale-105 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Submitting Request...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Request Shuttle Cab Reservation
                        </>
                      )}
                    </button>
                  </Magnet>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <SiteFooter variant="landing" />
    </div>
  );
}
