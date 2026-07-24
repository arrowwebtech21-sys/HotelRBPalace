import { HOTEL_ADDRESS, MANAGER_EMAIL } from '../data/constants';

export type BookingEnquiry = {
  name: string;
  email: string;
  phone?: string;
  roomName: string;
  selectedPlanTitle?: string;
  planPrice?: string;
  checkIn: string;
  checkOut: string;
  guests?: string;
  roomsCount?: string;
  specialRequests?: string;
};

export function openBookingMailto(enquiry: BookingEnquiry) {
  const mailSubject = encodeURIComponent(`Reservation Inquiry: ${enquiry.roomName} - ${enquiry.name}`);
  const mailBody = encodeURIComponent(
    `NEW HOTEL RB PALACE RESERVATION REQUEST\n` +
      `-----------------------------------------\n` +
      `Property: Hotel RB Palace, Dholpur, Rajasthan\n` +
      `Address: ${HOTEL_ADDRESS}\n` +
      `Guest Name: ${enquiry.name}\n` +
      `Email: ${enquiry.email}\n` +
      (enquiry.phone ? `Phone: ${enquiry.phone}\n` : '') +
      `Selected Accommodation: ${enquiry.roomName}\n` +
      (enquiry.selectedPlanTitle ? `Selected Tariff & Plan: ${enquiry.selectedPlanTitle}\n` : '') +
      (enquiry.planPrice ? `Tariff Price: ${enquiry.planPrice}\n` : '') +
      `Check-In Date: ${enquiry.checkIn}\n` +
      `Check-Out Date: ${enquiry.checkOut}\n` +
      (enquiry.guests ? `Number of Guests: ${enquiry.guests}\n` : '') +
      (enquiry.roomsCount ? `Rooms Requested: ${enquiry.roomsCount}\n` : '') +
      `Special Requests: ${enquiry.specialRequests || 'None'}\n` +
      `-----------------------------------------\n`
  );

  window.location.href = `mailto:${MANAGER_EMAIL}?subject=${mailSubject}&body=${mailBody}`;
}
