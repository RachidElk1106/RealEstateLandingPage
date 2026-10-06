import type { Property, Feature, Stat } from '../types/property';

export const properties: Property[] = [
  {
    id: 'villa-aurelia',
    name: 'Villa Aurelia',
    location: 'Marbella, Spain',
    price: '€8.9M',
    priceNumeric: 8900000,
    currency: 'EUR',
    type: 'Private Villa',
    bedrooms: 5,
    bathrooms: 6,
    surfaceArea: 620,
    surfaceUnit: 'm²',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    tag: 'Featured',
  },
  {
    id: 'glass-house',
    name: 'The Glass House',
    location: 'Malibu, California',
    price: '$12.5M',
    priceNumeric: 12500000,
    currency: 'USD',
    type: 'Oceanfront Estate',
    bedrooms: 6,
    bathrooms: 7,
    surfaceArea: 780,
    surfaceUnit: 'm²',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    tag: 'New',
  },
  {
    id: 'casa-noire',
    name: 'Casa Noire',
    location: 'Dubai, UAE',
    price: '$9.8M',
    priceNumeric: 9800000,
    currency: 'USD',
    type: 'Desert Residence',
    bedrooms: 5,
    bathrooms: 6,
    surfaceArea: 710,
    surfaceUnit: 'm²',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ocean-residence',
    name: 'Ocean Residence',
    location: 'Mykonos, Greece',
    price: '€6.4M',
    priceNumeric: 6400000,
    currency: 'EUR',
    type: 'Cliffside Villa',
    bedrooms: 4,
    bathrooms: 5,
    surfaceArea: 480,
    surfaceUnit: 'm²',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
  },
];

export const features: Feature[] = [
  {
    id: 'smart-living',
    icon: 'Home',
    label: '01',
    title: 'Smart Living',
    description: 'Intelligent systems designed around the way you live — climate, security, and entertainment orchestrated seamlessly.',
  },
  {
    id: 'virtual-tours',
    icon: 'Compass',
    label: '02',
    title: 'Immersive 360° Tours',
    description: 'Explore every residence from anywhere in the world with cinematic virtual walkthroughs and drone perspectives.',
  },
  {
    id: 'architecture',
    icon: 'Building2',
    label: '03',
    title: 'Architectural Excellence',
    description: 'Exceptional materials, precise geometry and a timeless architectural language that transcends trends.',
  },
  {
    id: 'concierge',
    icon: 'Sparkles',
    label: '04',
    title: 'Private Concierge',
    description: 'Personalized service from private viewing to acquisition — discreet, dedicated and entirely bespoke.',
  },
];

export interface Material {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const materials: Material[] = [
  {
    id: 'stone',
    name: 'Natural Stone',
    description: 'Hand-selected marble and limestone sourced from European quarries.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'concrete',
    name: 'Architectural Concrete',
    description: 'Polished concrete with custom aggregate blends and refined finishes.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'glass',
    name: 'Floor-to-Ceiling Glass',
    description: 'Thermally broken frames with triple-glazed solar-control glazing.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'wood',
    name: 'Custom Woodwork',
    description: 'Fumed oak and walnut finishes crafted by European artisans.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'lighting',
    name: 'Integrated Lighting',
    description: 'Circadian lighting systems tuned to natural daylight patterns.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'landscape',
    name: 'Landscape Design',
    description: 'Sculpted gardens integrating native flora and water features.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
  },
];

export const stats: Stat[] = [
  {
    id: 'residences',
    value: '14',
    label: 'Private Residences',
  },
  {
    id: 'locations',
    value: '08',
    label: 'Global Locations',
  },
  {
    id: 'portfolio',
    value: '€120M+',
    label: 'Portfolio Value',
  },
  {
    id: 'concierge',
    value: '24/7',
    label: 'Private Concierge',
  },
];

export const navLinks = [
  { label: 'Properties', href: '#properties' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
