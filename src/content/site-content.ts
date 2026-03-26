/**
 * SITE CONTENT - ALL TEXT AND COPY
 * 
 * This file contains all website text organized by section.
 * EDIT HERE for: headlines, descriptions, button text, etc.
 * 
 * Each item has 'en' (English) and 'vi' (Vietnamese) versions.
 * Always update BOTH languages to keep the site bilingual.
 * 
 * Structure:
 * - Navigation
 * - Hero Section
 * - Trust Section
 * - Services Section
 * - Gallery Section
 * - Why Choose Us
 * - Testimonials
 * - CTA (Call to Action)
 * - Contact Form
 * - Footer
 */

import { SiteContent } from '../types/index';
import { businessInfo } from './business-info';
import { socialLinks } from './social-links';

export const siteContent: SiteContent = {
  // ============================================
  // NAVIGATION BAR
  // ============================================
  navigation: {
    logo: businessInfo.companyName,
    links: [
      {
        label: { en: 'Home', vi: 'Trang Chủ' },
        href: '#home',
      },
      {
        label: { en: 'Services', vi: 'Dịch Vụ' },
        href: '#services',
      },
      {
        label: { en: 'Gallery', vi: 'Thư Viện' },
        href: '#gallery',
      },
      {
        label: { en: 'About', vi: 'Giới Thiệu' },
        href: '#about',
      },
      {
        label: { en: 'Contact', vi: 'Liên Hệ' },
        href: '#contact',
      },
    ],
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    trustBadge: {
      en: 'Trusted by 1,000+ homeowners',
      vi: 'Được tin tưởng bởi hơn 1,000 chủ nhà',
    },
    title: {
      en: 'Professional Painting & Plastering You Can Trust',
      vi: 'Dịch Vụ Sơn & Trát Tường Chuyên Nghiệp, Đáng Tin Cậy',
    },
    subtitle: {
      en: 'Transform your space with premium quality finishes. Expert craftsmanship, attention to detail, and guaranteed satisfaction.',
      vi: 'Biến đổi không gian của bạn với chất lượng hoàn hảo. Công nghệ chuyên nghiệp, chú ý đến từng chi tiết và đảm bảo sự hài lòng.',
    },
    ctaPrimary: {
      en: 'Get a Free Quote',
      vi: 'Nhận Báo Giá Miễn Phí',
    },
    ctaSecondary: {
      en: 'View Our Work',
      vi: 'Xem Công Trình',
    },
    stats: [
      {
        number: '10+',
        label: { en: 'Years Experience', vi: 'Năm Kinh Nghiệm' },
      },
      {
        number: '1000+',
        label: { en: 'Homes Completed', vi: 'Nhà Hoàn Thành' },
      },
      {
        number: '100%',
        label: { en: 'Customer Satisfaction', vi: 'Hài Lòng' },
      },
    ],
  },

  // ============================================
  // TRUST SECTION
  // ============================================
  trust: {
    title: {
      en: 'Why Clients Choose Us',
      vi: 'Tại Sao Khách Hàng Chọn Chúng Tôi',
    },
    items: [
      {
        number: '1000+',
        label: { en: 'Projects Completed', vi: 'Công Trình Hoàn Thành' },
      },
      {
        number: '2',
        label: { en: 'Residential & Commercial', vi: 'Dân Dụng & Thương Mại' },
      },
      {
        number: 'CTM',
        label: { en: 'Award Winner', vi: 'Giải Thưởng' },
      },
      {
        number: '9',
        label: { en: 'Months Warranty', vi: 'Tháng Bảo Hành' },
      },
    ],
  },

  // ============================================
  // SERVICES SECTION
  // ============================================
  services: {
    title: {
      en: 'Our Services',
      vi: 'Dịch Vụ Của Chúng Tôi',
    },
    subtitle: {
      en: 'Expert painting and plastering solutions for your property',
      vi: 'Giải pháp sơn và trát chuyên nghiệp cho tài sản của bạn',
    },
    services: [
      {
        id: 'interior',
        title: { en: 'Interior Painting', vi: 'Sơn Nội Thất' },
        description: {
          en: 'Transform your indoor spaces with professional painting services. We use premium paints for a flawless finish.',
          vi: 'Biến đổi không gian trong nhà với dịch vụ sơn chuyên nghiệp. Chúng tôi sử dụng sơn cao cấp cho một bề mặt hoàn hảo.',
        },
      },
      {
        id: 'exterior',
        title: { en: 'Exterior Painting', vi: 'Sơn Ngoại Thất' },
        description: {
          en: 'Protect and beautify your property\'s exterior with weather-resistant, long-lasting paint solutions.',
          vi: 'Bảo vệ và làm đẹp mặt ngoài tài sản của bạn với giải pháp sơn chống thời tiết, bền lâu.',
        },
      },
      {
        id: 'plastering',
        title: { en: 'Wall Plastering', vi: 'Trát Tường' },
        description: {
          en: 'Expert plastering services for smooth, durable walls. Perfect preparation for any painting project.',
          vi: 'Dịch vụ trát tường chuyên nghiệp cho các bức tường mịn màng, bền vững. Chuẩn bị hoàn hảo cho mọi dự án sơn.',
        },
      },
      {
        id: 'commercial',
        title: { en: 'Commercial Services', vi: 'Dịch Vụ Thương Mại' },
        description: {
          en: 'Professional services for offices, retail spaces, and commercial properties with minimal disruption.',
          vi: 'Dịch vụ chuyên nghiệp cho văn phòng, không gian bán lẻ và tài sản thương mại với sự gián đoạn tối thiểu.',
        },
      },
    ],
  },

  // ============================================
  // GALLERY SECTION
  // ============================================
  gallery: {
    title: {
      en: 'Our Recent Work',
      vi: 'Công Trình Gần Đây',
    },
    subtitle: {
      en: 'See the quality and attention to detail in every project',
      vi: 'Xem chất lượng và sự chú ý đến từng chi tiết trong mỗi dự án',
    },
    viewAll: {
      en: 'View Full Gallery',
      vi: 'Xem Toàn Bộ Thư Viện',
    },
    images: [], // Note: Images are loaded from src/content/images.ts
  },

  // ============================================
  // WHY CHOOSE US
  // ============================================
  whyChooseUs: {
    title: {
      en: 'Why Choose ProPaint & Plaster',
      vi: 'Tại Sao Chọn Chúng Tôi',
    },
    subtitle: {
      en: 'We deliver excellence in every project',
      vi: 'Chúng tôi mang đến sự xuất sắc trong mỗi dự án',
    },
    items: [
      {
        title: { en: '10+ Years Experience', vi: '10+ Năm Kinh Nghiệm' },
        description: {
          en: 'Extensive experience in both residential and commercial projects',
          vi: 'Kinh nghiệm dày dặn trong cả dự án dân dụng và thương mại',
        },
      },
      {
        title: { en: 'Premium Materials', vi: 'Vật Liệu Cao Cấp' },
        description: {
          en: 'We use only the highest quality paints and plastering materials',
          vi: 'Chúng tôi chỉ sử dụng sơn và vật liệu trát chất lượng cao nhất',
        },
      },
      {
        title: { en: 'Skilled Professionals', vi: 'Đội Ngũ Chuyên Nghiệp' },
        description: {
          en: 'Our team is fully trained, licensed, and insured',
          vi: 'Đội ngũ của chúng tôi được đào tạo đầy đủ, có giấy phép và bảo hiểm',
        },
      },
      {
        title: { en: 'Quality Guarantee', vi: 'Bảo Hành Chất Lượng' },
        description: {
          en: '9 months warranty with no return fixes needed',
          vi: 'Bảo hành 9 tháng không cần sửa chữa trở lại',
        },
      },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    title: {
      en: 'What Our Clients Say',
      vi: 'Khách Hàng Nói Gì Về Chúng Tôi',
    },
    subtitle: {
      en: 'Real feedback from satisfied customers',
      vi: 'Phản hồi thực tế từ khách hàng hài lòng',
    },
    reviews: [
      {
        id: 'review-1',
        name: 'Sarah Johnson',
        role: { en: 'Homeowner', vi: 'Chủ Nhà' },
        text: {
          en: 'Exceptional work! They transformed our home with beautiful interior painting. The team was professional, clean, and finished on time.',
          vi: 'Công việc xuất sắc! Họ đã biến đổi ngôi nhà của chúng tôi với lớp sơn nội thất tuyệt đẹp. Đội ngũ chuyên nghiệp, sạch sẽ và hoàn thành đúng hạn.',
        },
        rating: 5,
      },
      {
        id: 'review-2',
        name: 'Michael Chen',
        role: { en: 'Business Owner', vi: 'Chủ Doanh Nghiệp' },
        text: {
          en: 'We hired them for our office renovation. Outstanding plastering and painting work. Highly recommend for commercial projects!',
          vi: 'Chúng tôi thuê họ cho việc cải tạo văn phòng. Công việc trát và sơn xuất sắc. Rất khuyến nghị cho các dự án thương mại!',
        },
        rating: 5,
      },
      {
        id: 'review-3',
        name: 'Emily Rodriguez',
        role: { en: 'Property Manager', vi: 'Quản Lý Tài Sản' },
        text: {
          en: 'I\'ve worked with many contractors, but ProPaint & Plaster stands out. Quality work, fair pricing, and excellent communication.',
          vi: 'Tôi đã làm việc với nhiều nhà thầu, nhưng họ thật sự nổi bật. Công việc chất lượng, giá cả hợp lý và giao tiếp xuất sắc.',
        },
        rating: 5,
      },
    ],
  },

  // ============================================
  // CTA (CALL TO ACTION)
  // ============================================
  cta: {
    title: {
      en: 'Ready to Transform Your Space?',
      vi: 'Sẵn Sàng Biến Đổi Không Gian Của Bạn?',
    },
    subtitle: {
      en: 'Get a free, no-obligation quote today',
      vi: 'Nhận báo giá miễn phí, không ràng buộc ngay hôm nay',
    },
    buttonText: {
      en: 'Request Free Quote',
      vi: 'Yêu Cầu Báo Giá Miễn Phí',
    },
    phoneText: {
      en: `Call us: ${businessInfo.phone}`,
      vi: `Gọi cho chúng tôi: ${businessInfo.phone}`,
    },
  },

  // ============================================
  // CONTACT FORM
  // ============================================
  contact: {
    title: {
      en: 'Get In Touch',
      vi: 'Liên Hệ Với Chúng Tôi',
    },
    subtitle: {
      en: 'Have a project in mind? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
      vi: 'Bạn có dự án nào đang suy nghĩ? Chúng tôi rất muốn nghe từ bạn. Gửi cho chúng tôi một thông điệp và chúng tôi sẽ phản hồi sớm nhất có thể.',
    },
    formTitle: {
      en: 'Send Us a Message',
      vi: 'Gửi Thông Điệp Cho Chúng Tôi',
    },
    detailLabels: {
      phone: { en: 'Phone', vi: 'Điện Thoại' },
      email: { en: 'Email', vi: 'Email' },
      address: { en: 'Address', vi: 'Địa Chỉ' },
      hours: { en: 'Hours', vi: 'Giờ Làm Việc' },
    },
    fields: [
      {
        id: 'fullName',
        label: { en: 'Full Name', vi: 'Họ Tên' },
        placeholder: { en: 'John Doe', vi: 'John Doe' },
        type: 'text',
      },
      {
        id: 'email',
        label: { en: 'Email Address', vi: 'Địa Chỉ Email' },
        placeholder: { en: 'john@example.com', vi: 'john@example.com' },
        type: 'email',
      },
      {
        id: 'phone',
        label: { en: 'Phone Number', vi: 'Số Điện Thoại' },
        placeholder: { en: '(555) 123-4567', vi: '(555) 123-4567' },
        type: 'tel',
      },
      {
        id: 'service',
        label: { en: 'Service Interested In', vi: 'Dịch Vụ Quan Tâm' },
        placeholder: { en: 'Select a service', vi: 'Chọn dịch vụ' },
        type: 'select',
      },
      {
        id: 'message',
        label: { en: 'Your Message', vi: 'Tin Nhắn Của Bạn' },
        placeholder: { en: 'Tell us about your project...', vi: 'Kể cho chúng tôi về dự án của bạn...' },
        type: 'textarea',
      },
    ],
    submitButton: {
      en: 'Send Message',
      vi: 'Gửi Thông Điệp',
    },
    successMessage: {
      en: 'Thank you! We will contact you soon.',
      vi: 'Cảm ơn! Chúng tôi sẽ liên hệ với bạn sớm.',
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline: businessInfo.tagline,
    social: {
      title: { en: 'Follow Us', vi: 'Theo Dõi Chúng Tôi' },
      links: socialLinks,
    },
    sections: [
      {
        title: { en: 'Quick Links', vi: 'Liên Kết Nhanh' },
        links: [
          { label: { en: 'Home', vi: 'Trang Chủ' }, href: '#home' },
          { label: { en: 'Services', vi: 'Dịch Vụ' }, href: '#services' },
          { label: { en: 'Gallery', vi: 'Thư Viện' }, href: '#gallery' },
          { label: { en: 'About Us', vi: 'Giới Thiệu' }, href: '#about' },
          { label: { en: 'Contact', vi: 'Liên Hệ' }, href: '#contact' },
        ],
      },
      {
        title: { en: 'Our Services', vi: 'Dịch Vụ Của Chúng Tôi' },
        links: [
          { label: { en: 'Interior Painting', vi: 'Sơn Nội Thất' }, href: '#services' },
          { label: { en: 'Exterior Painting', vi: 'Sơn Ngoại Thất' }, href: '#services' },
          { label: { en: 'Wall Plastering', vi: 'Trát Tường' }, href: '#services' },
          { label: { en: 'Commercial Services', vi: 'Dịch Vụ Thương Mại' }, href: '#services' },
        ],
      },
    ],
    contact: {
      title: { en: 'Contact Us', vi: 'Liên Hệ Chúng Tôi' },
      phone: businessInfo.phone,
      email: businessInfo.email,
      address: businessInfo.address,
      hours: businessInfo.businessHours,
    },
    copyright: {
      en: `© 2026 ${businessInfo.companyName.en}. All rights reserved.`,
      vi: `© 2026 ${businessInfo.companyName.vi}. Tất cả quyền được bảo lưu.`,
    },
  },
};
