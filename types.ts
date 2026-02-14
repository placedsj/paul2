import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
}
