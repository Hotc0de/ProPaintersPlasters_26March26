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
export { socialLinks } from './social-links';
export { galleryImages } from './gallery-data';
export { pageText } from './page-text';
export { contactInfo } from './contact-info';
export {
  heroImageConfig,
  servicesImageConfig,
  ctaImageConfig,
  trustImageConfig,
  contactImageConfig,
  getServiceImage,
} from './images';

export type { Language, BilingualText, BusinessInfo } from '../types/index';
