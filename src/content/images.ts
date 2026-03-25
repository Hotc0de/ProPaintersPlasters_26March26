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

import { GalleryImage, BilingualText } from '../types/index';

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
// GALLERY IMAGES
// 
// To add more gallery images:
// 1. Add a new object to this array
// 2. Give it a unique id (gallery-1, gallery-2, etc.)
// 3. Provide the image URL
// 4. Add bilingual alt text
// ============================================
export const galleryImages: GalleryImage[] = [
  {
    id: 'gallery-1',
    url: 'https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=600&h=400&fit=crop',
    alt: {
      en: 'Interior painting - living room renovation',
      vi: 'Sơn nội thất - cải tạo phòng khách',
    },
  },
  {
    id: 'gallery-2',
    url: 'https://images.unsplash.com/photo-1581092914261-1f89a8e37746?w=600&h=400&fit=crop',
    alt: {
      en: 'Professional plastering project',
      vi: 'Dự án trát tường chuyên nghiệp',
    },
  },
  {
    id: 'gallery-3',
    url: 'https://images.unsplash.com/photo-1585232341710-4a66e46c9868?w=600&h=400&fit=crop',
    alt: {
      en: 'Exterior painting - house transformation',
      vi: 'Sơn ngoại thất - biến đổi ngôi nhà',
    },
  },
  {
    id: 'gallery-4',
    url: 'https://images.unsplash.com/photo-1581092163825-bc127ba71185?w=600&h=400&fit=crop',
    alt: {
      en: 'Commercial painting project - office space',
      vi: 'Dự án sơn thương mại - không gian văn phòng',
    },
  },
  {
    id: 'gallery-5',
    url: 'https://images.unsplash.com/photo-1581092165854-40129fb63d3c?w=600&h=400&fit=crop',
    alt: {
      en: 'Interior design transformation',
      vi: 'Biến đổi thiết kế nội thất',
    },
  },
  {
    id: 'gallery-6',
    url: 'https://images.unsplash.com/photo-1581092943360-2e69b3e5d5de?w=600&h=400&fit=crop',
    alt: {
      en: 'Professional finishing touches',
      vi: 'Những chi tiết hoàn thiện chuyên nghiệp',
    },
  },
];

/**
 * HELPER FUNCTION: Get image by section
 * 
 * Usage: getServiceImage('interior')
 * Returns the image config for that service
 */
export function getServiceImage(serviceId: string) {
  return servicesImageConfig[serviceId] || null;
}
