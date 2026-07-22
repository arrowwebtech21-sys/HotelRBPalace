import { MANAGER_EMAIL } from '../data/constants';

export type BookingEnquiry = {
  name: string;
  email: string;
  phone?: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  guests?: string;
  roomsCount?: string;
  specialRequests?: string;
};

export function openBookingMailto(enquiry: BookingEnquiry) {
  const mailSubject = encodeURIComponent(`Reservation Enquiry: ${enquiry.roomName} - ${enquiry.name}`);
  const mailBody = encodeURIComponent(
    `NEW RESERVATION REQUEST\n` +
      `---------------------------\n` +
      `Guest Name: ${enquiry.name}\n` +
      `Email: ${enquiry.email}\n` +
      (enquiry.phone ? `Phone: ${enquiry.phone}\n` : '') +
      `Selected Accomodation: ${enquiry.roomName}\n` +
      `Check-In Date: ${enquiry.checkIn}\n` +
      `Check-Out Date: ${enquiry.checkOut}\n` +
      (enquiry.guests ? `Guests: ${enquiry.guests}\n` : '') +
      (enquiry.roomsCount ? `Rooms Requested: ${enquiry.roomsCount}\n` : '') +
      `Special Requests: ${enquiry.specialRequests || 'None'}\n` +
      `---------------------------\n`
  );

  window.location.href = `mailto:${MANAGER_EMAIL}?subject=${mailSubject}&body=${mailBody}`;
}
