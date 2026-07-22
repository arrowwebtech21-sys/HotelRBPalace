import { useState, type ChangeEvent, type FormEvent } from 'react';
import SiteFooter from '../components/SiteFooter';
import AmenitiesSection from '../sections/AmenitiesSection';
import BookingFormSection, { type LandingBookingForm } from '../sections/BookingFormSection';
import ExperienceSection from '../sections/ExperienceSection';
import HeroSection from '../sections/HeroSection';
import LocationSection from '../sections/LocationSection';
import SuitesSection from '../sections/SuitesSection';
import { ROOMS } from '../data/rooms';
import { openBookingMailto } from '../utils/booking';

const initialForm: LandingBookingForm = {
  name: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  guests: '2',
  roomsCount: '1',
  roomId: 'deluxe-suite',
  specialRequests: ''
};

export default function LandingPage() {
  const [formData, setFormData] = useState<LandingBookingForm>(initialForm);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    const roomName = ROOMS.find((r) => r.id === formData.roomId)?.name || 'Selected Suite';

    openBookingMailto({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      roomName,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
      roomsCount: formData.roomsCount,
      specialRequests: formData.specialRequests
    });
  };

  return (
    <div className="w-full bg-[#fcfdfc] text-[#1f2a1d] min-h-screen selection:bg-[#85AB8B] selection:text-white">
      <HeroSection />
      <ExperienceSection />
      <SuitesSection onBook={(id) => setFormData((prev) => ({ ...prev, roomId: id }))} />
      <AmenitiesSection />
      <BookingFormSection formData={formData} onChange={handleInputChange} onSubmit={handleBookingSubmit} />
      <LocationSection />
      <SiteFooter variant="landing" />
    </div>
  );
}
