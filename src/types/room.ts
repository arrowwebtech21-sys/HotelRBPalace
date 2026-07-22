import type { LucideIcon } from 'lucide-react';

export interface RoomFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Room {
  id: string;
  name: string;
  tag: string;
  price: string;
  size: string;
  capacity: string;
  description: string;
  amenities: string[];
  image: string;
  gallery: string[];
  features: RoomFeature[];
}
