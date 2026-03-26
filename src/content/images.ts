/**
 * IMAGE CONFIGURATION & ASSET MAPPING
 * 
 * This file centralizes all image URLs and metadata.
 * EDIT HERE for: changing images, updating URLs, adding new images
 * 
 * Each image has:
 * - id: unique identifier
 * - url: the image URL (local or external)
 * - alt: bilingual alt text for accessibility and SEO
 * 
 * To change an image:
 * 1. Find the section below (hero, services, gallery, etc.)
 * 2. Replace the URL with your image URL
 * 3. Update the alt text in both English and Vietnamese
 */

import { BilingualText } from '../types/index';
export { galleryImages } from './gallery-data';

// ============================================
// HERO SECTION IMAGE
// ============================================
export const heroImageConfig = {
  id: 'hero-main',
  url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
  alt: {
    en: 'Professional painter working on interior wall',
    vi: 'Thợ sơn chuyên nghiệp đang làm việc trên tường bên trong',
  },
};

// ============================================
// SERVICES SECTION IMAGES
// ============================================
export const servicesImageConfig: Record<string, { url: string; alt: BilingualText }> = {
  interior: {
    url: 'https://images.unsplash.com/photo-1589939705882-d6e99c4ce3db?w=400&h=300&fit=crop',
    alt: {
      en: 'Interior painting service - living room',
      vi: 'Dịch vụ sơn nội thất - phòng khách',
    },
  },
  exterior: {
    url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
    alt: {
      en: 'Exterior painting service - house exterior',
      vi: 'Dịch vụ sơn ngoại thất - ngoại thất nhà',
    },
  },
  plastering: {
    url: 'https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=400&h=300&fit=crop',
    alt: {
      en: 'Professional plastering and wall finishing',
      vi: 'Trát tường chuyên nghiệp và hoàn thiện tường',
    },
  },
  commercial: {
    url: 'https://images.unsplash.com/photo-1581092165854-40129fb63d3c?w=400&h=300&fit=crop',
    alt: {
      en: 'Commercial painting project in office',
      vi: 'Dự án sơn thương mại trong văn phòng',
    },
  },
};

// ============================================
// TRUST SECTION IMAGES (if needed)
// ============================================
export const trustImageConfig = {
  id: 'trust-badge',
  url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  alt: {
    en: 'Award-winning painting company',
    vi: 'Công ty sơn đoạt giải thưởng',
  },
};

// ============================================
// CTA SECTION IMAGE
// ============================================
export const ctaImageConfig = {
  id: 'cta-main',
  url: 'https://images.unsplash.com/photo-1581092163825-bc127ba71185?w=1200&h=600&fit=crop',
  alt: {
    en: 'Transform your space with professional painting services',
    vi: 'Biến đổi không gian của bạn với dịch vụ sơn chuyên nghiệp',
  },
};

// ============================================
// CONTACT SECTION IMAGE
// ============================================
export const contactImageConfig = {
  id: 'contact-main',
  url: 'https://images.unsplash.com/photo-1587560699334-bea93391dcef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXMlMjBvZmZpY2UlMjBkZXNrJTIwcGhvbmV8ZW58MXx8fHwxNzc0NDI5MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  alt: {
    en: 'Contact desk and phone',
    vi: 'Bàn làm việc và điện thoại liên hệ',
  },
};

/**
 * HELPER FUNCTION: Get image by section
 * 
 * Usage: getServiceImage('interior')
 * Returns the image config for that service
 */
export function getServiceImage(serviceId: string) {
  return servicesImageConfig[serviceId] || null;
}
