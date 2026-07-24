export interface BookingPartner {
  id: string;
  name: string;
  category: 'OTA' | 'Corporate Travel' | 'Hospitality Partner';
  domain: string;
  logo: string;
  url: string;
  badgeText: string;
}

export const BOOKING_PARTNERS: BookingPartner[] = [
  {
    id: 'goibibo',
    name: 'Goibibo',
    category: 'OTA',
    domain: 'goibibo.com',
    logo: 'https://logo.clearbit.com/goibibo.com',
    url: 'https://www.google.com/search?q=Goibibo+Hotel+RB+Palace+Dholpur+Rajasthan',
    badgeText: 'Hotel Listing on Goibibo'
  },
  {
    id: 'makemytrip',
    name: 'MakeMyTrip',
    category: 'OTA',
    domain: 'makemytrip.com',
    logo: 'https://logo.clearbit.com/makemytrip.com',
    url: 'https://www.google.com/search?q=MakeMyTrip+Hotel+RB+Palace+Dholpur+Rajasthan',
    badgeText: 'Hotel Listing on MMT'
  },
  {
    id: 'yatra',
    name: 'Yatra',
    category: 'OTA',
    domain: 'yatra.com',
    logo: 'https://logo.clearbit.com/yatra.com',
    url: 'https://www.google.com/search?q=Yatra+Hotel+RB+Palace+Dholpur+Rajasthan',
    badgeText: 'Hotel Listing on Yatra'
  },
  {
    id: 'booking-com',
    name: 'Booking.com',
    category: 'OTA',
    domain: 'booking.com',
    logo: 'https://logo.clearbit.com/booking.com',
    url: 'https://www.google.com/search?q=Booking.com+Hotel+RB+Palace+Dholpur+Rajasthan',
    badgeText: 'Hotel Listing on Booking.com'
  },
  {
    id: 'travelguru',
    name: 'Travelguru',
    category: 'OTA',
    domain: 'travelguru.com',
    logo: 'https://logo.clearbit.com/travelguru.com',
    url: 'https://www.google.com/search?q=Travelguru+Hotel+RB+Palace+Dholpur+Rajasthan',
    badgeText: 'Hotel Listing on Travelguru'
  },
  {
    id: 'hummingbird',
    name: 'Humming Bird Digital Pvt Ltd',
    category: 'Corporate Travel',
    domain: 'hummingbirdindia.com',
    logo: 'https://logo.clearbit.com/hummingbirdindia.com',
    url: 'https://www.hummingbirdindia.com/',
    badgeText: 'Corporate Booking Channel'
  },
  {
    id: 'gilpin',
    name: 'Gilpin Tour & Travel Management Pvt Ltd',
    category: 'Corporate Travel',
    domain: 'gilpin.in',
    logo: 'https://logo.clearbit.com/gilpin.in',
    url: 'https://gilpin.in/',
    badgeText: 'Executive Tour Partner'
  },
  {
    id: 'skil-travel',
    name: 'Skil Travel Pvt Ltd',
    category: 'Corporate Travel',
    domain: 'skiltravel.com',
    logo: 'https://logo.clearbit.com/skiltravel.com',
    url: 'https://skiltravel.com/',
    badgeText: 'Corporate Travel Desk'
  },
  {
    id: 'misba-holidays',
    name: 'Misba Holidays Pvt Ltd',
    category: 'Hospitality Partner',
    domain: 'misbaholidays.com',
    logo: 'https://logo.clearbit.com/misbaholidays.com',
    url: 'http://misbaholidays.com/',
    badgeText: 'Holiday Package Partner'
  },
  {
    id: 'epeppy',
    name: 'E-Peppy Hospitality',
    category: 'Hospitality Partner',
    domain: 'epeppyhospitality.com',
    logo: 'https://logo.clearbit.com/epeppyhospitality.com',
    url: 'https://epeppyhospitality.com/',
    badgeText: 'Hospitality Channel'
  },
  {
    id: 'tripgain',
    name: 'Tripgain Travel & Expense Management Solutions Pvt Ltd',
    category: 'Corporate Travel',
    domain: 'tripgain.com',
    logo: 'https://logo.clearbit.com/tripgain.com',
    url: 'https://tripgain.com/',
    badgeText: 'Expense & Travel Portal'
  },
  {
    id: 'drp-enterprises',
    name: 'DRP Enterprises Pvt Ltd',
    category: 'Corporate Travel',
    domain: 'drpenterprises.in',
    logo: 'https://logo.clearbit.com/drpenterprises.in',
    url: 'https://drpenterprises.in/',
    badgeText: 'Corporate Partner'
  },
  {
    id: 'casa-2-stay',
    name: 'Casa 2 Stay Pvt Ltd',
    category: 'Hospitality Partner',
    domain: 'fabhotels.com',
    logo: 'https://logo.clearbit.com/fabhotels.com',
    url: 'https://www.google.com/search?q=FabHotels+Casa+2+Stay+Hotel+RB+Palace+Dholpur',
    badgeText: 'Direct Hotel Listing'
  },
  {
    id: 'travel-plus-leisure',
    name: 'Travel Plus Leisure Pvt Ltd',
    category: 'Hospitality Partner',
    domain: 'travelandleisure.com',
    logo: 'https://logo.clearbit.com/travelandleisure.com',
    url: 'https://www.travelandleisure.com/',
    badgeText: 'Luxury Travel Channel'
  }
];
