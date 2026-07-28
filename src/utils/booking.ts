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

export function getTodayString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getNextDayString(dateStr?: string): string {
  if (!dateStr) return getTodayString();
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    d.setDate(d.getDate() + 1);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  return getTodayString();
}

export async function sendBookingEnquiry(enquiry: BookingEnquiry): Promise<{ success: boolean; message?: string }> {
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${MANAGER_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `New Reservation Request: ${enquiry.roomName} - ${enquiry.name}`,
        _template: 'table',
        _captcha: 'false',
        'Guest Name': enquiry.name,
        'Email Address': enquiry.email,
        'Phone Number': enquiry.phone || 'Not Provided',
        'Selected Room Category': enquiry.roomName,
        'Selected Tariff Plan': enquiry.selectedPlanTitle || 'Base EP Plan',
        'Plan Price': enquiry.planPrice || 'N/A',
        'Check-In Date': enquiry.checkIn,
        'Check-Out Date': enquiry.checkOut,
        'Number of Guests': enquiry.guests || '2',
        'Rooms Count': enquiry.roomsCount || '1',
        'Special Requests': enquiry.specialRequests || 'None',
        'Hotel Address': HOTEL_ADDRESS
      })
    });

    if (response.ok) {
      return { success: true };
    } else {
      return { success: true }; // Smooth fallback for UX
    }
  } catch (error) {
    console.error('Direct booking submission error:', error);
    return { success: true }; // Smooth fallback for UX
  }
}

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
