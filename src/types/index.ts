/**
 * TYPE DEFINITIONS FOR THE ENTIRE SITE
 * 
 * These interfaces define the shape of all content data.
 * Use these when working with TypeScript to catch errors early.
 */

// ============================================
// LANGUAGE & TRANSLATION TYPES
// ============================================

export type Language = 'en' | 'vi';

export interface BilingualText {
  en: string;
  vi: string;
}

// ============================================
// BUSINESS INFORMATION
// ============================================

export interface BusinessInfo {
  companyName: BilingualText;
  tagline: BilingualText;
  phone: string;
  email: string;
  address: string;
  businessHours: BilingualText;
}

// ============================================
// NAVIGATION
// ============================================

export interface NavLink {
  label: BilingualText;
  href: string;
}

export interface NavigationContent {
  logo: BilingualText;
  links: NavLink[];
}

// ============================================
// HERO SECTION
// ============================================

export interface HeroContent {
  trustBadge: BilingualText;
  title: BilingualText;
  subtitle: BilingualText;
  ctaPrimary: BilingualText;
  ctaSecondary: BilingualText;
  stats: {
    number: string;
    label: BilingualText;
  }[];
}

// ============================================
// SERVICES
// ============================================

export interface Service {
  id: string;
  title: BilingualText;
  description: BilingualText;
  icon?: string;
}

export interface ServicesContent {
  title: BilingualText;
  subtitle: BilingualText;
  services: Service[];
}

export interface FormService {
  id: string;
  label: BilingualText;
}

// ============================================
// TRUST SECTION
// ============================================

export interface TrustItem {
  number: string;
  label: BilingualText;
}

export interface TrustContent {
  title: BilingualText;
  items: TrustItem[];
}

// ============================================
// WHY CHOOSE US
// ============================================

export interface WhyChooseItem {
  title: BilingualText;
  description: BilingualText;
}

export interface WhyChooseContent {
  title: BilingualText;
  subtitle: BilingualText;
  items: WhyChooseItem[];
}

// ============================================
// TESTIMONIALS
// ============================================

export interface Testimonial {
  id: string;
  name: string;
  role: BilingualText;
  text: BilingualText;
  rating: number;
}

export interface TestimonialsContent {
  title: BilingualText;
  subtitle: BilingualText;
  reviews: Testimonial[];
}

// ============================================
// GALLERY
// ============================================

export interface GalleryImage {
  id: string;
  url: string;
  alt: BilingualText;
}

export interface GalleryContent {
  title: BilingualText;
  subtitle: BilingualText;
  viewAll: BilingualText;
  images: GalleryImage[];
}

// ============================================
// CTA (CALL TO ACTION)
// ============================================

export interface CTAContent {
  title: BilingualText;
  subtitle: BilingualText;
  buttonText: BilingualText;
  phoneText: BilingualText;
}

// ============================================
// CONTACT FORM
// ============================================

export interface ContactFormField {
  id: string;
  label: BilingualText;
  placeholder: BilingualText;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
}

export interface ContactContent {
  title: BilingualText;
  subtitle: BilingualText;
  formTitle: BilingualText;
  detailLabels: {
    phone: BilingualText;
    email: BilingualText;
    address: BilingualText;
    hours: BilingualText;
  };
  fields: ContactFormField[];
  submitButton: BilingualText;
  successMessage: BilingualText;
}

// ============================================
// FOOTER
// ============================================

export interface FooterSection {
  title: BilingualText;
  links: NavLink[];
}

export interface SocialLink {
  id: string;
  label: BilingualText;
  href: string;
}

export interface FooterContent {
  tagline: BilingualText;
  social: {
    title: BilingualText;
    links: SocialLink[];
  };
  sections: FooterSection[];
  contact: {
    title: BilingualText;
    phone: string;
    email: string;
    address: string;
    hours: BilingualText;
  };
  copyright: BilingualText;
}

// ============================================
// COMPLETE SITE CONTENT
// ============================================

export interface SiteContent {
  navigation: NavigationContent;
  hero: HeroContent;
  trust: TrustContent;
  services: ServicesContent;
  gallery: GalleryContent;
  whyChooseUs: WhyChooseContent;
  testimonials: TestimonialsContent;
  cta: CTAContent;
  contact: ContactContent;
  footer: FooterContent;
}
