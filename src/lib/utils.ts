import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_CONFIG = {
  name: 'VSS Salesco',
  fullName: 'Vision & Security Solution',
  tagline: 'Smart Security. Intelligent Living.',
  description: "Faridabad's trusted provider of smart digital locks, CCTV security systems, home automation, and premium home theater solutions since 2010. Serving Delhi NCR.",
  phone: '+91 9990696111',
  whatsapp: '919990696111',
  address: 'Sector 87, Faridabad, Haryana 121002',
  website: 'https://vsssalesco.in',
  email: 'vsssalesco12@gmail.com',
  instagram: 'https://instagram.com/vsssalesco',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.5!2d77.3410!3d28.3534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc8c0e6e7f7f%3A0x1234567890abcdef!2sSector%2087%2C%20Faridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890123',
};

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
  smartHome1: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
  smartHome2: 'https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=800&q=80',
  smartHome3: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
  cctv1: 'https://images.unsplash.com/photo-1495224814653-94f36c0a31ea?w=800&q=80',
  cctv2: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
  theater1: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
  theater2: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
  theater3: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80',
  automation1: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80',
  automation2: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80',
  interior1: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
  interior2: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
  interior3: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  interior4: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  villa1: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  security1: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
  lock1: 'https://images.unsplash.com/photo-1548407260-da850faa41e3?w=800&q=80',
  aboutHero: 'https://images.unsplash.com/photo-1497366754035-f200586c6c4e?w=1200&q=80',
  blog1: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  blog2: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
  blog3: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
  blog4: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
  gate1: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
  office1: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
};
