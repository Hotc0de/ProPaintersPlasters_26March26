# 🎨 Painting & Plastering Business Website - User Guide

## 📋 Table of Contents
1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [How to Edit Content](#how-to-edit-content)
4. [How to Change Images](#how-to-change-images)
5. [Multi-Language System](#multi-language-system)
6. [Contact Information](#contact-information)
7. [Color Customization](#color-customization)
8. [Adding More Languages](#adding-more-languages)

---

## 🌟 Overview

This is a modern, professional static React website for a painting and interior plastering business. It features:
- ✅ Bilingual support (English + Vietnamese)
- ✅ Clean, modular component structure
- ✅ Easy content management
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern, professional UI with smooth animations

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.css
│   │   ├── TrustSection/
│   │   ├── ServicesPreview/
│   │   ├── GalleryPreview/
│   │   ├── WhyChooseUs/
│   │   ├── Testimonials/
│   │   ├── CTA/
│   │   └── Footer/
│   │
│   ├── content/
│   │   └── content.js   ← 🔥 EDIT ALL TEXT HERE
│   │
│   ├── App.tsx
│   └── App.css
```

---

## ✏️ How to Edit Content

### All text content is stored in ONE file: `/src/app/content/content.js`

This file contains all text for both English and Vietnamese. To edit:

1. **Open** `/src/app/content/content.js`
2. **Find** the section you want to edit
3. **Change** the text value
4. **Save** the file

### Example: Changing the Hero Title

**Before:**
```javascript
en: {
  hero: {
    title: "Professional Painting & Plastering You Can Trust",
```

**After:**
```javascript
en: {
  hero: {
    title: "Your New Business Slogan Here",
```

### Content Sections You Can Edit:

- **Navbar** - Logo, menu links
- **Hero** - Main headline, subtitle, button text
- **Trust Section** - Statistics and labels
- **Services** - Service names and descriptions
- **Gallery** - Section titles
- **Why Choose Us** - Reasons and descriptions
- **Testimonials** - Customer reviews (name, role, text)
- **CTA** - Call-to-action text and phone number
- **Footer** - All footer information

---

## 🖼️ How to Change Images

### Gallery Images

Gallery images are located in `/src/app/components/GalleryPreview/GalleryPreview.tsx`

**To replace gallery images:**

1. **Open** `/src/app/components/GalleryPreview/GalleryPreview.tsx`
2. **Find** the `galleryImages` array (around line 10)
3. **Replace** the image URLs with your own image URLs

```javascript
const galleryImages = [
  {
    url: 'YOUR_IMAGE_URL_HERE',
    alt: 'Description of image'
  },
  // Add more images...
];
```

### Background Images

To add background images to sections:
1. Add your image to a public folder or use an external URL
2. Edit the CSS file for that component
3. Add `background-image: url('your-image-url');`

---

## 🌍 Multi-Language System

### How Language Switching Works

The website automatically switches between English and Vietnamese using the toggle in the navbar.

**Default Language:** English

**How it works:**
1. User clicks EN or VI in the navbar
2. App state updates
3. All text automatically changes to selected language

### Current Supported Languages

- 🇬🇧 English (en)
- 🇻🇳 Vietnamese (vi)

---

## 📞 Contact Information

### How to Update Contact Details

**Phone Number:**
1. Open `/src/app/content/content.js`
2. Find `footer.contact.phone`
3. Update for BOTH languages:

```javascript
en: {
  footer: {
    contact: {
      phone: "(555) 123-4567",  // ← Change this
```

```javascript
vi: {
  footer: {
    contact: {
      phone: "(555) 123-4567",  // ← Change this too
```

**Email Address:**
```javascript
email: "info@propaintplaster.com",  // ← Change this
```

**Business Address:**
```javascript
address: "123 Business Street, City, State 12345",  // ← Change this
```

**Business Hours:**
```javascript
hours: "Mon-Fri: 8AM - 6PM"  // ← Change this
```

---

## 🎨 Color Customization

### Main Brand Colors

The website uses these primary colors:
- **Accent Color:** `#e74c3c` (Red/Orange)
- **Dark Text:** `#2c3e50` (Charcoal)
- **Gradient:** Purple to Blue (`#667eea` to `#764ba2`)

### How to Change Colors

To change the accent color throughout the site:

1. Use "Find & Replace" in your code editor
2. Find: `#e74c3c`
3. Replace with: `YOUR_NEW_COLOR`

Common places colors appear:
- Button backgrounds
- Icon colors
- Border highlights
- Hover effects

---

## 🌐 Adding More Languages

### Step-by-Step Guide

1. **Open** `/src/app/content/content.js`

2. **Copy** an existing language block (en or vi)

3. **Add** a new language section:

```javascript
export const content = {
  en: { /* English content */ },
  vi: { /* Vietnamese content */ },
  
  // Add new language:
  es: {
    nav: {
      logo: "Tu Nuevo Logo",
      home: "Inicio",
      // ... translate all fields
    },
    // ... copy entire structure
  }
};
```

4. **Update** `/src/app/App.tsx`:

```javascript
// Change this line:
const [language, setLanguage] = useState<'en' | 'vi'>('en');

// To include your new language:
const [language, setLanguage] = useState<'en' | 'vi' | 'es'>('en');
```

5. **Update** `/src/app/components/Navbar/Navbar.tsx` to add the language button

---

## 🚀 Important Notes

### DO NOT Edit:
- Component `.tsx` files (unless you know React)
- File structure

### SAFE to Edit:
- `/src/app/content/content.js` - ALL TEXT CONTENT
- `.css` files - Styling and colors
- Image URLs in components

### Best Practices:
- ✅ Always edit text in `content.js`
- ✅ Keep the same structure when adding content
- ✅ Test both languages after making changes
- ✅ Keep backup copies before major changes

---

## 📝 Quick Edit Checklist

Before launching your website, update:

- [ ] Company name in `content.js` (both languages)
- [ ] Phone number in footer
- [ ] Email address in footer
- [ ] Business address in footer
- [ ] Business hours
- [ ] Service descriptions
- [ ] Testimonial names and reviews
- [ ] Gallery images
- [ ] Social media links in Footer.tsx
- [ ] All statistics (1000+ projects, etc.)

---

## 💡 Tips for Success

1. **Test Both Languages** - Always check that both EN and VI look good
2. **Keep Text Lengths Similar** - Very long text in one language may break layout
3. **Use Professional Images** - High-quality photos make a big difference
4. **Update Regularly** - Keep testimonials and projects current
5. **Mobile First** - Always check how it looks on mobile devices

---

## 🆘 Need Help?

Common issues and solutions:

**Text doesn't change:**
- Check that you edited `content.js`
- Make sure you saved the file
- Clear browser cache and refresh

**Language toggle not working:**
- Check that both language blocks (en/vi) have matching structure
- Verify all properties exist in both languages

**Images not showing:**
- Check image URLs are correct
- Verify images are publicly accessible
- Try using absolute URLs instead of relative paths

---

## 🎯 Final Notes

This website is built with:
- **React** - Modern JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **CSS** - Custom styling for each component
- **Responsive Design** - Works on all devices

The modular structure makes it easy to:
- Add new sections
- Update content
- Change colors
- Add more languages

**Remember:** All text goes in `content.js` - this is your content management system!

---

Happy editing! 🎨✨
