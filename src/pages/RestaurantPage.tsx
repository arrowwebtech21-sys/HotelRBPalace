import { useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowLeft, Utensils, Coffee, Send, CheckCircle2, User, Mail, Phone, Calendar, Clock, Loader2, Sparkles, Award, Search, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';
import Magnet from '../components/Magnet';
import { RESTAURANT_MENU, type MenuItem } from '../data/restaurantMenu';
import { sendRestaurantOrder, type RestaurantOrder, getTodayString } from '../utils/booking';
import { BRAND_NAME, BRAND_SUFFIX, MANAGER_EMAIL } from '../data/constants';

export default function RestaurantPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnly, setVegOnly] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: number }>({});

  const [formData, setFormData] = useState<{
    guestName: string;
    email: string;
    phone: string;
    roomOrBookingId: string;
    orderType: 'Room Service Delivery' | 'Table Reservation' | 'Pre-Arrival Meal';
    date: string;
    time: string;
    guestsCount: string;
    dietaryRequests: string;
  }>({
    guestName: '',
    email: '',
    phone: '',
    roomOrBookingId: 'Room 101 / Booking Ref',
    orderType: 'Room Service Delivery',
    date: getTodayString(),
    time: '08:00 PM',
    guestsCount: '2 Persons',
    dietaryRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = ['All', 'Starters & Soups', 'Tandoori Specialties', 'Main Course', 'Chinese & Oriental', 'Breads & Rice', 'Desserts & Beverages'];

  const filteredMenu = RESTAURANT_MENU.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.hindiName && item.hindiName.includes(searchQuery)) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVeg = vegOnly ? item.isVeg : true;
    return matchesCategory && matchesSearch && matchesVeg;
  });

  const toggleItemQuantity = (itemId: string, delta: number) => {
    setSelectedItems((prev) => {
      const current = prev[itemId] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return { ...prev, [itemId]: next };
    });
  };

  const selectedItemsSummaryList = Object.entries(selectedItems)
    .map(([id, qty]) => {
      const item = RESTAURANT_MENU.find((m) => m.id === id);
      return item ? `${qty}x ${item.name} (${item.price})` : '';
    })
    .filter(Boolean)
    .join(', ');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload: RestaurantOrder = {
      guestName: formData.guestName,
      email: formData.email,
      phone: formData.phone,
      roomOrBookingId: formData.roomOrBookingId,
      orderType: formData.orderType,
      date: formData.date,
      time: formData.time,
      guestsCount: formData.guestsCount,
      selectedItems: selectedItemsSummaryList || 'General Dining / Custom Order On Arrival',
      dietaryRequests: formData.dietaryRequests
    };

    await sendRestaurantOrder(payload);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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

          <a
            href="#dining-form"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#85AB8B] hover:bg-[#6e9674] text-[#172215] text-xs font-bold px-4 py-2 rounded-full transition-all"
          >
            <Utensils className="w-3.5 h-3.5" /> Order / Reserve
          </a>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-[#172215] text-white py-16 sm:py-24 px-4 sm:px-12 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#85AB8B]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10 text-center sm:text-left flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[#85AB8B] font-semibold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
              <Utensils className="w-3.5 h-3.5 text-[#85AB8B]" /> Royal Palace Dining & In-Room Cuisine
            </span>
            <h1 className="text-3xl sm:text-5xl font-normal text-white leading-tight">
              In-House Dining & <span className="text-[#85AB8B]">Room Service Menu</span>
            </h1>
            <p className="text-white/70 text-xs sm:text-base font-light leading-relaxed">
              Serving checked-in hotel guests and visitors with rich North Indian curries, Tandoori charcoal specialties, Chinese delicacies, and fresh beverages in our air-conditioned dining room or delivered directly to your room.
            </p>
          </div>

          <div className="bg-white/5 border border-white/15 p-6 rounded-3xl backdrop-blur-md grid grid-cols-2 gap-4 shrink-0 text-center sm:text-left">
            <div>
              <span className="text-2xl font-bold text-[#85AB8B]">24/7</span>
              <p className="text-xs text-white/70">In-Room Dining</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">4 Meal</span>
              <p className="text-xs text-white/70">Tariffs (EP/CP/MAP/AP)</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">100%</span>
              <p className="text-xs text-white/70">Fresh Preparation</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#85AB8B]">Mughlai &</span>
              <p className="text-xs text-white/70">Rajasthani Taste</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-12 py-12 sm:py-20 w-full space-y-16">
        {/* Tariff & Meal Plan Inclusions Bar */}
        <section className="bg-[#f4f7f4] rounded-3xl p-6 sm:p-8 border border-[#1f2a1d]/10 grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-[#1f2a1d]">
          <div className="space-y-1.5">
            <span className="font-bold uppercase tracking-wider text-[#336443] flex items-center gap-1.5">
              <Award className="w-4 h-4" /> EP Plan (Room Only)
            </span>
            <p className="text-gray-600">European Plan — Order food a-la-carte from our in-room dining menu at standard rates.</p>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="font-bold uppercase tracking-wider text-[#336443] flex items-center gap-1.5">
                <Coffee className="w-4 h-4" /> CP Plan (Breakfast)
              </span>
              <span className="bg-[#336443]/10 text-[#336443] font-bold px-2 py-0.5 rounded-md text-[11px]">₹320 + 5% GST</span>
            </div>
            <p className="text-gray-600"><strong className="text-[#336443]">₹320/- + 5% GST per Pax</strong> — Includes hot morning breakfast buffet & chai/coffee in the dining room.</p>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="font-bold uppercase tracking-wider text-[#336443] flex items-center gap-1.5">
                <Utensils className="w-4 h-4" /> MAP Plan (Half Board)
              </span>
              <span className="bg-[#336443]/10 text-[#336443] font-bold px-2 py-0.5 rounded-md text-[11px]">₹450 + 5% GST</span>
            </div>
            <p className="text-gray-600"><strong className="text-[#336443]">₹450/- + 5% GST per Pax</strong> — Includes choice of One Major Meal (Lunch or Dinner) per guest.</p>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="font-bold uppercase tracking-wider text-[#336443] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> AP Plan (Full Board)
              </span>
              <span className="bg-[#336443]/10 text-[#336443] font-bold px-2 py-0.5 rounded-md text-[11px]">Full Meal Plan</span>
            </div>
            <p className="text-gray-600">Full Board — Includes Breakfast (₹320) + Both Major Meals (Lunch & Dinner at ₹450 each) + 5% GST.</p>
          </div>
        </section>

        {/* Menu Catalog Section */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#336443] uppercase tracking-wider block">Royal Palace Dining</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2a1d]">Explore Our Digital Menu</h2>
            </div>

            {/* Search & Veg Toggle */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Paneer, Naan, Biryani..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white border border-gray-200 rounded-full pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-[#336443]"
                />
              </div>

              <button
                onClick={() => setVegOnly((v) => !v)}
                className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
                  vegOnly ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Veg Only
              </button>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-gray-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1f2a1d] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenu.map((item) => {
              const qty = selectedItems[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-5 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {item.image && (
                      <div className="relative h-40 rounded-2xl overflow-hidden mb-2">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        {item.isChefSpecial && (
                          <span className="absolute top-3 left-3 bg-[#1f2a1d] text-[#85AB8B] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Chef Special
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className={`w-3 h-3 border p-0.5 flex items-center justify-center ${item.isVeg ? 'border-emerald-600' : 'border-red-600'}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`} />
                          </span>
                          <span className="text-xs text-gray-500 font-medium">{item.hindiName}</span>
                        </div>
                        <h3 className="text-base font-bold text-[#1f2a1d] mt-1">{item.name}</h3>
                      </div>
                      <span className="text-sm font-bold text-[#336443] bg-[#336443]/10 px-3 py-1 rounded-full shrink-0">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{item.description}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs mt-4">
                    <span className="text-gray-500">Spice: <span className="font-semibold text-gray-700">{item.spiceLevel || 'Standard'}</span></span>

                    <div className="flex items-center gap-2">
                      {qty > 0 ? (
                        <div className="flex items-center gap-2 bg-[#1f2a1d] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                          <button onClick={() => toggleItemQuantity(item.id, -1)} className="hover:text-[#85AB8B] cursor-pointer px-1">-</button>
                          <span>{qty}</span>
                          <button onClick={() => toggleItemQuantity(item.id, 1)} className="hover:text-[#85AB8B] cursor-pointer px-1">+</button>
                        </div>
                      ) : (
                        <button
                          onClick={() => toggleItemQuantity(item.id, 1)}
                          className="bg-gray-100 hover:bg-[#1f2a1d] hover:text-white text-gray-800 text-xs font-semibold px-4 py-1.5 rounded-full transition-all cursor-pointer"
                        >
                          + Add Item
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Items Tray Banner */}
          {Object.keys(selectedItems).length > 0 && (
            <div className="sticky bottom-6 z-30 bg-[#172215] text-white p-4 sm:p-5 rounded-3xl shadow-2xl border border-[#85AB8B]/40 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-[#85AB8B] shrink-0" />
                <div>
                  <span className="text-xs text-[#85AB8B] font-bold uppercase tracking-wider block">Selected Items for Order</span>
                  <p className="text-xs text-white/90 line-clamp-1 font-medium">{selectedItemsSummaryList}</p>
                </div>
              </div>

              <a
                href="#dining-form"
                className="bg-[#85AB8B] hover:bg-[#6e9674] text-[#172215] text-xs font-bold px-6 py-2.5 rounded-full transition-all cursor-pointer shrink-0"
              >
                Proceed to Order / Table Reservation &rarr;
              </a>
            </div>
          )}
        </section>

        {/* Order / Table Reservation Form */}
        <section id="dining-form" className="bg-[#172215] text-white rounded-[28px] sm:rounded-[40px] p-6 sm:p-12 shadow-2xl relative overflow-hidden border border-[#85AB8B]/20">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="inline-flex items-center gap-1.5 text-[#85AB8B] font-semibold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
                <Utensils className="w-3.5 h-3.5 text-[#85AB8B]" /> Guest Dining Request
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal text-white">Order Room Service or Reserve Table</h2>
              <p className="text-white/70 text-xs sm:text-sm font-light">
                Submit your order or table reservation. Details will be sent to the kitchen desk at <span className="text-[#85AB8B] font-medium">{MANAGER_EMAIL}</span>.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-white/10 border border-[#85AB8B]/40 rounded-3xl p-8 text-center space-y-4 backdrop-blur-md">
                <CheckCircle2 className="w-12 h-12 text-[#85AB8B] mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-white">Dining Request Received!</h3>
                <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto leading-relaxed">
                  Thank you! Kitchen staff at Hotel RB Palace has received your <span className="font-bold text-[#85AB8B]">{formData.orderType}</span> for <span className="font-bold text-white">{formData.roomOrBookingId}</span>. Your meal prep is underway.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setSelectedItems({});
                  }}
                  className="bg-[#85AB8B] text-[#172215] text-xs font-bold px-6 py-3 rounded-full hover:bg-[#6e9674] transition-all cursor-pointer"
                >
                  Place Another Order / Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#85AB8B]" /> Guest Name
                  </label>
                  <input
                    type="text"
                    name="guestName"
                    required
                    placeholder="Vikram Singh"
                    value={formData.guestName}
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
                    placeholder="vikram@example.com"
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
                    <Award className="w-3.5 h-3.5 text-[#85AB8B]" /> Room Number / Booking Reference
                  </label>
                  <input
                    type="text"
                    name="roomOrBookingId"
                    required
                    placeholder="Room 204 OR Booking Ref #1049"
                    value={formData.roomOrBookingId}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-[#85AB8B]" /> Service Type
                  </label>
                  <select
                    name="orderType"
                    value={formData.orderType}
                    onChange={handleInputChange}
                    className="w-full bg-[#233120] border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B] cursor-pointer"
                  >
                    <option value="Room Service Delivery">Room Service Delivery to Suite</option>
                    <option value="Table Reservation">Table Reservation in Royal Restaurant</option>
                    <option value="Pre-Arrival Meal">Pre-Arrival Meal Request</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#85AB8B]" /> Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    min={getTodayString()}
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B] [color-scheme:dark]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#85AB8B]" /> Preferred Time
                  </label>
                  <input
                    type="text"
                    name="time"
                    required
                    placeholder="e.g. 08:30 PM"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#85AB8B]" /> Number of Guests / Diners
                  </label>
                  <input
                    type="text"
                    name="guestsCount"
                    required
                    placeholder="e.g. 2 Persons"
                    value={formData.guestsCount}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
                  />
                </div>

                {/* Selected Dishes Summary Box */}
                <div className="sm:col-span-2 space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5 text-[#85AB8B]" /> Selected Menu Items
                  </label>
                  <textarea
                    rows={3}
                    readOnly
                    value={selectedItemsSummaryList || 'No menu items selected from above catalog. (Optional - you can also order at the table)'}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3 text-xs text-[#85AB8B] focus:outline-none resize-none font-mono"
                  />
                </div>

                <div className="sm:col-span-2 space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-[#85AB8B]" /> Dietary Instructions / Special Requests
                  </label>
                  <textarea
                    name="dietaryRequests"
                    rows={3}
                    placeholder="Less spicy, no onion-garlic (Jain meal), extra butter naan, high chair for baby..."
                    value={formData.dietaryRequests}
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
                          <Send className="w-4 h-4" /> Submit Dining Request
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
