import { useState, type ChangeEvent, type FormEvent } from 'react';
import SiteFooter from '../components/SiteFooter';
import ThankYouModal from '../components/ThankYouModal';
import AmenitiesSection from '../sections/AmenitiesSection';
import BookingFormSection, { type LandingBookingForm } from '../sections/BookingFormSection';
import BookingPartnersSection from '../sections/BookingPartnersSection';
import CorporateClientsSection from '../sections/CorporateClientsSection';
import ExperienceSection from '../sections/ExperienceSection';
import HeroSection from '../sections/HeroSection';
import LocationSection from '../sections/LocationSection';
import SuitesSection from '../sections/SuitesSection';
import { ROOMS } from '../data/rooms';
import { sendBookingEnquiry, getNextDayString, type BookingEnquiry } from '../utils/booking';

const initialForm: LandingBookingForm = {
  name: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  guests: '2',
  roomsCount: '1',
  roomId: 'deluxe-room',
  planId: 'deluxe-ep-s-d',
  specialRequests: ''
};

export default function LandingPage() {
  const [formData, setFormData] = useState<LandingBookingForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<BookingEnquiry | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'roomId') {
      const matchedRoom = ROOMS.find((r) => r.id === value);
      const defaultPlanId = matchedRoom?.plans[0]?.id || '';
      setFormData((prev) => ({ ...prev, roomId: value, planId: defaultPlanId }));
    } else if (name === 'checkIn') {
      setFormData((prev) => {
        const nextDay = getNextDayString(value);
        const autoCheckOut = !prev.checkOut || prev.checkOut <= value ? nextDay : prev.checkOut;
        return { ...prev, checkIn: value, checkOut: autoCheckOut };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleBookingSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const matchedRoom = ROOMS.find((r) => r.id === formData.roomId) || ROOMS[0];
    const matchedPlan = matchedRoom.plans.find((p) => p.id === formData.planId) || matchedRoom.plans[0];

    const enquiryPayload: BookingEnquiry = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      roomName: matchedRoom.name,
      selectedPlanTitle: matchedPlan?.title,
      planPrice: matchedPlan?.price,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
      roomsCount: formData.roomsCount,
      specialRequests: formData.specialRequests
    };

    setSubmittedEnquiry(enquiryPayload);

    // Send background submission directly to ayushagrawal0881176@gmail.com
    await sendBookingEnquiry(enquiryPayload);

    setIsSubmitting(false);
    setIsThankYouOpen(true);
    setFormData(initialForm);
  };

  return (
    <div className="w-full bg-[#fcfdfc] text-[#1f2a1d] min-h-screen selection:bg-[#85AB8B] selection:text-white">
      <HeroSection />
      <ExperienceSection />
      <CorporateClientsSection />
      <SuitesSection
        onBook={(id) => {
          const matchedRoom = ROOMS.find((r) => r.id === id);
          const defaultPlanId = matchedRoom?.plans[0]?.id || '';
          setFormData((prev) => ({ ...prev, roomId: id, planId: defaultPlanId }));
        }}
      />
      <BookingPartnersSection />
      <AmenitiesSection />
      <BookingFormSection
        formData={formData}
        onChange={handleInputChange}
        onSubmit={handleBookingSubmit}
        isSubmitting={isSubmitting}
      />
      <LocationSection />
      <SiteFooter variant="landing" />

      {/* Thank You Success Modal */}
      <ThankYouModal
        isOpen={isThankYouOpen}
        onClose={() => setIsThankYouOpen(false)}
        enquiryData={submittedEnquiry}
      />
    </div>
  );
}
