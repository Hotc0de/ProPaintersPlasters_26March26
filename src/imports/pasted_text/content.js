I want to build a modern, professional static React website for a painting and interior plastering business, starting with the Home Page only.

🔹 CORE REQUIREMENTS
✅ Tech
React (functional components)
Use Vite (recommended)
Clean modular structure (VERY IMPORTANT)
No single-file code
Separate components, styles, and content
🔹 IMPORTANT UPGRADE (VERY IMPORTANT)
🌍 MULTI-LANGUAGE SUPPORT (ENGLISH + VIETNAMESE)
The Home Page must support:
English (default)
Vietnamese
DO NOT hardcode text directly inside components
Create a content file (or config) like:
src/content/content.js

Example structure:

export const content = {
  en: {
    heroTitle: "Professional Painting & Plastering You Can Trust",
    heroSubtitle: "Over 1000 projects completed with quality results",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "Contact Us"
  },
  vi: {
    heroTitle: "Dịch vụ sơn & trát tường chuyên nghiệp, đáng tin cậy",
    heroSubtitle: "Hơn 1000 công trình hoàn thành với chất lượng cao",
    ctaPrimary: "Nhận báo giá miễn phí",
    ctaSecondary: "Liên hệ"
  }
}
Components must read text from this file
Add a simple language toggle (EN / VI) in Navbar
🔹 PROJECT STRUCTURE
src/
│
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── TrustSection/
│   ├── ServicesPreview/
│   ├── GalleryPreview/
│   ├── Testimonials/
│   ├── CTA/
│   └── Footer/
│
├── pages/
│   └── Home.jsx
│
├── content/
│   └── content.js   ← ALL TEXT HERE (IMPORTANT)
│
├── assets/
│   └── images/
│
├── styles/
│   ├── global.css
│   └── variables.css
│
├── App.jsx
└── main.jsx
🔹 EDITABLE CONTENT SYSTEM (VERY IMPORTANT)

All important data must be easy to update:

✅ TEXT
Stored in content.js
Supports EN + VI
✅ IMAGES

Use placeholder paths like:

/assets/images/hero.jpg

Explain clearly:

where to replace images
how to change text
how to update phone/email
🔹 IMPORTANT RULES
Build ONLY Home Page
Other pages:
Show links only (no routing yet)
Use transparent / layered design
Clean reusable components
Separate CSS per component
🔹 HOME PAGE SECTIONS
1. Navbar
Logo
Menu links (no navigation yet)
✅ Language toggle (EN / VI)
2. Hero (Transparent Style)
Headline
Subtitle
CTA buttons
3. Trust Section
1000+ projects
Residential + Commercial
CTM award
9 months no return fixes
4. Services Preview
Cards with short descriptions
5. Gallery Preview
4–6 images
6. Why Choose Us
7. Testimonials
8. CTA Section
9. Footer
Contact info (editable)
🔹 DESIGN REQUIREMENTS
Modern, clean, professional
Colors:
white / charcoal / grey
1 strong accent
Transparent backgrounds where appropriate
Subtle animations
🔹 OUTPUT REQUIREMENTS

Generate:

1. Full Folder Structure
2. All Files
Components (separate folders)
CSS files
content.js
App.jsx
main.jsx
3. Clean, Commented Code
🔹 OPTIONAL (VERY IMPORTANT – MUST INCLUDE)

Explain clearly:

✏️ How to edit:
Text (content.js)
Images (assets folder)
Contact info
Language content
🌍 How language works:
How to switch EN ↔ VI
How to add more languages later
🔹 DO NOT
No backend
No CMS
No routing yet
No messy structure
No hardcoded text inside components
🔥 FINAL GOAL
Clean, scalable React project
Easy to edit for business use
Bilingual ready
Looks like a real client website
🚀 This is now VERY powerful

This prompt will give you:

Proper React architecture ✅
Clean VS Code project ✅
Real-world scalable structure ✅
Multi-language support (huge bonus) ✅