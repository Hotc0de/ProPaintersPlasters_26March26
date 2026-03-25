/**
 * BUSINESS INFORMATION
 * 
 * This file contains all business contact details in one place.
 * EDIT HERE for: phone, email, address, business hours
 * 
 * These details are used throughout the site (CTA, Contact Form, Footer, etc.)
 * so changing them here updates everywhere automatically.
 */

import { BusinessInfo } from '../types/index';

export const businessInfo: BusinessInfo = {
  companyName: {
    en: 'ProPaint & Plaster',
    vi: 'Sơn & Trát Chuyên Nghiệp',
  },
  tagline: {
    en: 'Professional painting and plastering services you can trust',
    vi: 'Dịch vụ sơn và trát chuyên nghiệp bạn có thể tin tưởng',
  },
  
  // ========== CONTACT DETAILS - EDIT HERE ==========
  phone: '(555) 123-4567',
  email: 'info@propaintplaster.com',
  address: '123 Business Street, City, State 12345',
  businessHours: {
    en: 'Mon-Fri: 8AM - 6PM',
    vi: 'Thứ Hai - Thứ Sáu: 8AM - 6PM',
  },
};
