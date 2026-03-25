# 🔧 README - EDITING GUIDE

**Welcome back! Forgot where to edit? This guide is for future you.**

This document explains exactly where to make common changes to the website. No need to search through complicated code—just come here.

---

## 📋 TABLE OF CONTENTS

1. [Quick Overview](#quick-overview)
2. [Most Common Edits](#most-common-edits)
3. [File-by-File Guide](#file-by-file-guide)
4. [How the Structure Works](#how-the-structure-works)
5. [Bilingual Editing](#bilingual-editing)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 QUICK OVERVIEW

### Project Structure (Easy Version)

```
src/
├── content/                    ← 🔥 EDIT MOST THINGS HERE
│   ├── business-info.ts        ← Phone, email, address
│   ├── site-content.ts         ← All text content
│   ├── images.ts              ← All image URLs
│   └── index.ts               ← Exports everything
├── components/                 ← Reusable UI (don't edit)
├── sections/                   ← Homepage sections (should be layout only)
└── types/                      ← TypeScript definitions
```

### Golden Rule ✨

**99% of edits = Edit files in `/src/content/`**

The `/src/components/` and `/src/sections/` folders are for layout and display only. Content goes in `/src/content/`.

---

## 🔄 MOST COMMON EDITS

### 1. Change Company Phone Number
**File:** `src/content/business-info.ts`  
**What to change:** The `phone` field
```typescript
phone: '(555) 123-4567',  // ← Change this
```
**Where it shows up:** CTA section, Contact form, Footer, everywhere  
**Why:** This one file update changes the phone everywhere automatically.

---

### 2. Change Business Email
**File:** `src/content/business-info.ts`  
**What to change:** The `email` field
```typescript
email: 'info@propaintplaster.com',  // ← Change this
```
**Where it shows up:** Contact form, Footer

---

### 3. Change Business Address
**File:** `src/content/business-info.ts`  
**What to change:** The `address` field
```typescript
address: '123 Business Street, City, State 12345',  // ← Change this
```

---

### 4. Change Hero Headline
**File:** `src/content/site-content.ts`  
**Search for:** `hero: {`  
**What to change:** The `title` field
```typescript
hero: {
  title: {
    en: 'Your New English Headline',  // ← Change English
    vi: 'Tiêu đề tiếng Việt của bạn',  // ← Change Vietnamese
  },
  // ...
}
```
**Important:** Update BOTH English and Vietnamese!

---

### 5. Change an Image
**File:** `src/content/images.ts`  
**Example - Change Hero Image:**
```typescript
export const heroImageConfig = {
  id: 'hero-main',
  url: 'https://your-new-image-url-here.jpg',  // ← Replace this URL
  alt: {
    en: 'Your new alt text',
    vi: 'Tiêu đề ảnh tiếng Việt',
  },
};
```
**Where:** Look for the section (hero, services, gallery, cta, etc.)  
**How to get an image URL:**
- Upload to Unsplash or similar service
- Copy the image URL
- Replace the old URL here

---

### 6. Add a New Gallery Image
**File:** `src/content/images.ts`  
**Find:** The `galleryImages` array  
**Add new object:**
```typescript
galleryImages: [
  // ... existing images ...
  {
    id: 'gallery-7',  // ← Use unique ID
    url: 'https://your-new-image-url.jpg',
    alt: {
      en: 'Your image description',
      vi: 'Mô tả ảnh tiếng Việt',
    },
  },
]
```

---

### 7. Change Service Descriptions
**File:** `src/content/site-content.ts`  
**Search for:** `services: {`  
**What to change:** Title and description
```typescript
services: [
  {
    id: 'interior',
    title: {
      en: 'New Title',
      vi: 'Tiêu đề tiếng Việt',
    },
    description: {
      en: 'New description...',
      vi: 'Mô tả tiếng Việt...',
    },
  },
  // ...
]
```

---

### 8. Change Testimonials
**File:** `src/content/site-content.ts`  
**Search for:** `testimonials: {`  
**What to change:** Name, role, text, rating
```typescript
reviews: [
  {
    id: 'review-1',
    name: 'Sarah Johnson',  // ← Customer name
    role: { en: 'Homeowner', vi: 'Chủ Nhà' },
    text: {
      en: 'Great work!',
      vi: 'Công việc tuyệt vời!',
    },
    rating: 5,  // 1-5 stars
  },
]
```

---

### 9. Change Business Hours
**File:** `src/content/business-info.ts`  
**What to change:** `businessHours`
```typescript
businessHours: {
  en: 'Mon-Fri: 8AM - 6PM',
  vi: 'Thứ Hai - Thứ Sáu: 8AM - 6PM',
},
```

---

### 10. Change Company Name
**File:** `src/content/business-info.ts`  
**What to change:** `companyName`
```typescript
companyName: {
  en: 'Your Company Name',
  vi: 'Tên công ty tiếng Việt',
},
```
**Where it shows up:** Logo, footer, CTA, everywhere

---

## 📁 FILE-BY-FILE GUIDE

### `src/content/business-info.ts` — CONTACT DETAILS

This file holds all business information in one place.

**What's here:**
- Company name (English & Vietnamese)
- Phone number
- Email address
- Physical address
- Business hours
- Tagline

**When to edit:**
- Contact info changes
- Company name changes
- Business hours changes

**Example edit:**
```typescript
export const businessInfo: BusinessInfo = {
  companyName: {
    en: 'ProPaint & Plaster',
    vi: 'Sơn & Trát Chuyên Nghiệp',
  },
  phone: '(555) 123-4567',  // ← Edit here
  email: 'info@propaintplaster.com',  // ← Edit here
  address: '123 Business Street, City, State 12345',  // ← Edit here
  businessHours: {
    en: 'Mon-Fri: 8AM - 6PM',
    vi: 'Thứ Hai - Thứ Sáu: 8AM - 6PM',
  },
};
```

---

### `src/content/site-content.ts` — ALL WEBSITE TEXT

This file contains every headline, button text, description, and copy on the website.

**Organized by sections:**
- `navigation` — Menu labels
- `hero` — Main headline section
- `trust` — Statistics and trust section
- `services` — Service cards
- `gallery` — Gallery section
- `whyChooseUs` — Company strengths
- `testimonials` — Customer reviews
- `cta` — Call-to-action
- `contact` — Contact form
- `footer` — Footer content

**When to edit:**
- Change any text on the website
- Update headlines
- Change button labels
- Modify descriptions

**Pattern to follow:**
```typescript
// ALWAYS use this pattern for bilingual text:
title: {
  en: 'English text here',
  vi: 'Vietnamese text here',
},

// Every key should have BOTH languages
```

---

### `src/content/images.ts` — ALL IMAGE URLS

This file centralizes all image URLs and metadata.

**Sections:**
- `heroImageConfig` — Hero section image
- `servicesImageConfig` — Services images (interior, exterior, plastering, commercial)
- `galleryImages` — Gallery images (6 images array)
- `ctaImageConfig` — CTA section image
- `trustImageConfig` — Trust section image

**When to edit:**
- Change an image URL
- Add new gallery images
- Update image descriptions (alt text)

**How to change an image:**
1. Find the section (e.g., `heroImageConfig`)
2. Replace the `url` with your new image URL
3. Update the alt text in both languages

**Example:**
```typescript
export const heroImageConfig = {
  id: 'hero-main',
  url: 'https://NEW-IMAGE-URL.jpg',  // ← Changes here
  alt: {
    en: 'Professional painter working',
    vi: 'Thợ sơn chuyên nghiệp',
  },
};
```

---

### `src/types/index.ts` — TYPE DEFINITIONS

This file defines the shape of all data (TypeScript).

**When to edit:**
- Only if adding new fields to content
- Need to add a new section to the website
- Adding new content types

**Most of the time:** You won't need to edit this.

---

## 🌍 HOW THE STRUCTURE WORKS

### Content Flow Diagram

```
1. You edit files in /src/content/
   ↓
2. Components import from /src/content/index.ts
   ↓
3. Components receive content via props
   ↓
4. Website displays the content
```

### Example: How Edits Flow

**Scenario:** You change the hero title

1. **Edit file:** `src/content/site-content.ts`
   ```typescript
   hero: {
     title: { en: 'NEW TITLE', vi: 'TIÊU ĐỀ MỚI' }
   }
   ```

2. **Component receives it:** `src/sections/Hero/Hero.tsx`
   ```typescript
   const Hero = ({ content }) => {
     return <h1>{content.hero.title}</h1>
   }
   ```

3. **Website shows:** New title appears on the page

---

## 🇬🇧 🇻🇳 BILINGUAL EDITING

### Important Rule

**Every text field must have English AND Vietnamese.**

**Pattern:**
```typescript
// ✅ CORRECT
title: {
  en: 'English text',
  vi: 'Vietnamese text',
}

// ❌ WRONG - missing Vietnamese
title: 'English text only'

// ❌ WRONG - using wrong structure
en_title: 'English',
vi_title: 'Vietnamese',
```

### How Bilingual Switching Works

1. User clicks "EN" or "VI" button in the navbar
2. Website switches `currentLanguage` state
3. All components show the correct language
4. Data comes from your content files based on the language

### Tips for Bilingual Editing

- Keep text similar length in both languages (prevents layout breaking)
- Test both languages after editing
- Use a translator if needed
- Keep terminology consistent between sections

---

## 🆘 TROUBLESHOOTING

### Problem: Site won't start after edit

**Check:**
- Did you break the structure? (Missing commas, brackets?)
- Make sure every opening `{` has a closing `}`
- Make sure every string ends with a quote `"` or `'`

**Fix:**
- Press `Ctrl+Shift+B` in VS Code
- Look at the error message
- Find the line and fix the typo

---

### Problem: Text not changing on website

**Check:**
- Did you edit the right file? (Check `/src/content/`)
- Did you save the file?
- Did you edit BOTH English and Vietnamese?
- Does the component actually use this content?

**Fix:**
1. Make sure you edited the file in `/src/content/`
2. Press Ctrl+S to save
3. Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

---

### Problem: Images not loading

**Check:**
- Is the image URL valid?
- Does the URL start with `http://` or `https://`?
- Is the website the image is hosted on accessible?

**Fix:**
1. Copy the URL and paste in browser address bar
2. If image doesn't load, URL is broken
3. Get a new URL and try again

---

### Problem: Layout looks broken after edit

**Check:**
- Did you change something in components? (Don't do that)
- Did you edit content length? (Very long text breaks layout)

**Fix:**
- Some very long text breaks layout
- Shorten to a reasonable length
- Test different sentence lengths

---

## ✅ QUICK CHECKLIST FOR COMMON EDITS

**Before uploading changes:**

- [ ] Edited the right file (in `/src/content/`)
- [ ] Updated BOTH English and Vietnamese
- [ ] Text is reasonable length (not too long)
- [ ] Saved all files (Cmd+S or Ctrl+S)
- [ ] Tested website (refresh browser)
- [ ] Both languages work (click EN/VI toggle)
- [ ] Images load correctly
- [ ] All links work

---

## 🎓 WHEN IN DOUBT

1. **Don't touch** `/src/components/` or `/src/sections/` (these are for code)
2. **Always edit** `/src/content/` (this is for text and images)
3. **Ask yourself:** "Is this text or images?" — If yes, it goes in `/src/content/`
4. **Keep a backup** — Before big changes, copy the file

---

## 📞 COMMON EDITS QUICK REFERENCE

| What to Edit | File | Path |
|---|---|---|
| **Phone, email, address** | `business-info.ts` | `src/content/business-info.ts` |
| **Any headline or text** | `site-content.ts` | `src/content/site-content.ts` |
| **Any image URL** | `images.ts` | `src/content/images.ts` |
| **Gallery images** | `images.ts` | `src/content/images.ts` |
| **Testimonials** | `site-content.ts` | `src/content/site-content.ts` |
| **Services descriptions** | `site-content.ts` | `src/content/site-content.ts` |
| **Navigation labels** | `site-content.ts` | `src/content/site-content.ts` |
| **Footer content** | `site-content.ts` | `src/content/site-content.ts` |

---

## 🚀 YOU'RE READY

This guide has everything you need. Come back here when you need to make changes, and you'll know exactly where to go.

**Remember:** `/src/content/` is your friend. That's where all the editable stuff lives.

---

**Last Updated:** March 26, 2026  
**For Questions:** Refer to this guide first!
