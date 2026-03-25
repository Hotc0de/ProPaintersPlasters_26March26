/**
 * CONTENT INDEX
 * 
 * This file exports all content and configuration for easy importing.
 * 
 * Usage:
 * import { siteContent, businessInfo, galleryImages } from '@/content';
 */

export { siteContent } from './site-content';
export { businessInfo } from './business-info';
export {
  heroImageConfig,
  servicesImageConfig,
  galleryImages,
  ctaImageConfig,
  trustImageConfig,
  getServiceImage,
} from './images';

export type { Language, BilingualText, BusinessInfo } from '../types/index';
