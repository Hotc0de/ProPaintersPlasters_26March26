# 📁 FINAL PROJECT STRUCTURE

This is the new, maintainable project structure. Everything is organized for easy editing years from now.

```
Review Prompt Instructions/
│
├── src/
│   ├── content/                          ← 🔥 EDIT HERE FOR CONTENT
│   │   ├── business-info.ts              ← Phone, email, address, hours
│   │   ├── images.ts                     ← ALL image URLs and metadata
│   │   ├── site-content.ts               ← All website text (bilingual)
│   │   └── index.ts                      ← Exports all content
│   │
│   ├── types/                            ← TypeScript type definitions
│   │   └── index.ts                      ← All type interfaces
│   │
│   ├── utils/                            ← Helper functions
│   │   └── content-helpers.ts            ← Language extraction utilities
│   │
│   ├── app/
│   │   ├── App.tsx                       ← Main app (layout only)
│   │   ├── App.css
│   │   ├── components/                   ← Reusable UI components
│   │   │   ├── Navbar/
│   │   │   ├── Hero/
│   │   │   ├── TrustSection/
│   │   │   ├── ServicesPreview/
│   │   │   ├── GalleryPreview/
│   │   │   ├── WhyChooseUs/
│   │   │   ├── Testimonials/
│   │   │   ├── CTA/
│   │   │   ├── Contact/
│   │   │   ├── Footer/
│   │   │   ├── figma/                    ← Figma-generated utilities
│   │   │   └── ui/                       ← shadcn/ui components
│   │   └── content/                      ← OLD (keep for reference)
│   │
│   ├── assets/
│   │   ├── images/                       ← Image folders by section
│   │   │   ├── hero/
│   │   │   ├── services/
│   │   │   ├── gallery/
│   │   │   ├── trust/
│   │   │   └── cta/
│   │   └── (images are URLs, not local files in this case)
│   │
│   ├── styles/
│   │   ├── fonts.css
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   │
│   ├── main.tsx
│   └── imports/                          ← OLD/legacy (can be removed)
│
├── README_EDITING_GUIDE.md               ← 🔥 START HERE for edits
├── package.json
├── vite.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── ... (other config files)
```

## 🔑 KEY DIRECTORIES EXPLAINED

### `/src/content` — THE HEART OF YOUR EDITABLE CONTENT
- **business-info.ts**: Phone, email, address, hours (edit once, updates everywhere)
- **images.ts**: All image URLs organized by section
- **site-content.ts**: All website text in English and Vietnamese
- **index.ts**: Central export point

**Rule:** 99% of edits go here.

### `/src/types` — TypeScript Definitions
Defines the shape of all data. Usually don't need to edit this unless adding new sections.

### `/src/utils` — Helper Functions
- `content-helpers.ts`: Functions to extract language-specific content

### `/src/app/components` — React Components
- Display-only components
- Receive content via props
- Don't hardcode business text here
- Components for: Navbar, Hero, Services, Gallery, Contact, Footer, etc.

### `/src/assets/images` — Image Organization
Folders organized by section. Image URLs stored in `/src/content/images.ts`

### `/src/styles` — Global Styles
CSS files for fonts, tailwind, theme configuration.

---

## 📊 CONTENT DATA FLOW

```
┌─────────────────────────────────────────┐
│  User edits /src/content/site-content.ts │
│           business-info.ts              │
│            images.ts                    │
└──────────────┬──────────────────────────┘
               │
               ▼
    ┌──────────────────────────┐
    │  App.tsx (main component)│
    │  - Manages language state│
    │  - Extracts content for  │
    │    current language      │
    └──────────────┬───────────┘
               │
               ▼
    ┌──────────────────────────┐
    │  Components receive props│
    │  (Hero, Services, etc.)  │
    └──────────────┬───────────┘
               │
               ▼
    ┌──────────────────────────┐
    │  Website displays content│
    │  in correct language     │
    └──────────────────────────┘
```

---

## ✅ WHAT'S BETTER NOW

### Before (Old Structure)
❌ Content scattered across 10+ component files  
❌ Phone number hardcoded in 3 places  
❌ Image URLs hardcoded in 5 components  
❌ No centralized business info  
❌ TypeScript used `any` types everywhere  
❌ Figma-generated code had no clear organization  

### After (New Structure)
✅ All content in ONE place (`/src/content/`)  
✅ Phone number in one file (updates everywhere)  
✅ All image URLs in one file  
✅ Business info centralized  
✅ Proper TypeScript types  
✅ Clear separation: content vs display  
✅ Easy to maintain years from now  

---

## 🎯 MOST IMPORTANT FILES TO REMEMBER

1. **`/src/content/business-info.ts`** — Phone, email, address
2. **`/src/content/site-content.ts`** — All website text
3. **`/src/content/images.ts`** — All image URLs
4. **`/src/app/App.tsx`** — Page layout (don't edit content here)
5. **`/README_EDITING_GUIDE.md`** — Your editing manual

---

## 🚀 READY TO EDIT

When you need to make changes:
1. Open `README_EDITING_GUIDE.md`
2. Find your change type (phone, headline, image, etc.)
3. Go to the suggested file
4. Edit and save
5. Website updates automatically

That's it! The structure is designed so you never have to hunt for where things are.
