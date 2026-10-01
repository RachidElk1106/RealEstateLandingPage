export interface Property {
  id: string;
  name: string;
  location: string;
  price: string;
  priceNumeric: number;
  currency: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  surfaceArea: number;
  surfaceUnit: string;
  image: string;
  tag?: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredProperty: string;
  message?: string;
}

export interface Feature {
  id: string;
  icon: string;
  label: string;
  title: string;
  description: string;
}

export interface Material {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}
