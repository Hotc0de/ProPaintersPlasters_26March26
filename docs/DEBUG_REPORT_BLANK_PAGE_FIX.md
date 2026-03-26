# DEBUG REPORT: Blank Page Fix

**Project:** ProPaint & Plaster Website (React + Vite + TypeScript)  
**Date:** March 26, 2026  
**Author:** Development Team  
**Status:** ✅ Resolved  

---

## Quick Reference

| Field | Detail |
|-------|--------|
| **Issue** | React app renders a completely blank white page — no content, no errors in terminal |
| **Root Cause** | Multiple content property key mismatches between refactored data layer and component templates |
| **Fix** | Corrected all property access paths in 4 component files to match the new centralized content schema |
| **Main Files** | `Navbar.tsx`, `Footer.tsx`, `WhyChooseUs.tsx`, `Hero.tsx`, `GalleryPreview.tsx`, `images.ts` |

---

## 1. Overview

After a major refactoring effort to centralize all website content into a `/src/content/` directory (separating data from UI), the React application started rendering a **completely blank page**. The terminal showed no compile errors, the Vite dev server started normally, and TypeScript reported zero issues. Despite this, nothing appeared in the browser.

This report documents the full investigation — from first symptom to final fix — so that anyone reading it in the future can understand what went wrong and why.

---

## 2. Environment / Context

| Item | Value |
|------|-------|
| **Framework** | React 18.3.1 |
| **Build Tool** | Vite 6.3.5 |
| **Language** | TypeScript |
| **Node.js** | v20 (via `npx -y node@20` wrapper due to local v16) |
| **OS** | macOS |
| **IDE** | VS Code with GitHub Copilot |
| **Repository** | `https://github.com/Hotc0de/ProPaintersPlasters_26March26.git` |

### What Had Just Happened

A comprehensive refactoring was performed to:
1. Move all hardcoded text from 10+ component files into `/src/content/site-content.ts`
2. Move all image URLs into `/src/content/images.ts`
3. Move business info (phone, email, address) into `/src/content/business-info.ts`
4. Add a bilingual content system (English + Vietnamese) using a `BilingualText` interface
5. Create a helper function `extractLanguageContent()` that recursively converts bilingual objects to language-specific strings

The refactoring changed the **data structure** (property names, nesting) but some components were not fully updated to match.

---

## 3. Original Problem

**After the refactoring, the website showed a blank white page.**

- The Vite dev server started without errors
- TypeScript compilation passed (0 errors)
- The browser showed a white screen with no visible content
- No obvious error messages in the terminal

This is the worst kind of bug: **a silent runtime failure** — the app compiles fine but crashes during React's render cycle, causing the entire component tree to unmount.

---

## 4. Symptoms

| Symptom | Observed? | Notes |
|---------|-----------|-------|
| Blank white page | ✅ Yes | No content rendered at all |
| Terminal compile errors | ❌ No | Vite compiled successfully |
| TypeScript errors | ❌ No | `get_errors` returned clean |
| Browser console errors | ✅ Yes (inferred) | `TypeError: Cannot read properties of undefined` |
| Build failure | ❌ No | `npm run build` succeeded |

### Why No Compile Errors?

All components used `content: any` as their prop type. This means TypeScript could not catch property access errors at compile time. The crash only happened at **runtime** when React tried to read a property from `undefined`.

**Example:** If `content.nav` doesn't exist but a component tries to read `content.nav.logo`, JavaScript throws:
```
TypeError: Cannot read properties of undefined (reading 'logo')
```
This error is **uncaught** inside React's render, which causes the entire app to fail silently (blank page).

---

## 5. Investigation Timeline

### Step 1: Verify the Render Entry Point

**File checked:** `src/main.tsx`

```tsx
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
createRoot(document.getElementById("root")!).render(<App />);
```

**Result:** ✅ Correct. React mounts `<App />` into `#root`. The entry point is not the problem.

---

### Step 2: Verify App.tsx Returns Valid JSX

**File checked:** `src/app/App.tsx`

```tsx
export default function App() {
  const currentContent = useMemo(() => {
    return extractLanguageContent(siteContent, language);
  }, [language]);

  return (
    <div className="app">
      <Navbar content={currentContent} ... />
      <Hero content={currentContent} ... />
      ...
    </div>
  );
}
```

**Result:** ✅ Valid JSX structure. Imports resolve. Content extraction looks correct.

---

### Step 3: Compare Content Keys vs Component Access

This was the breakthrough step. We compared what keys the content data uses vs what keys the components try to access.

**Content data** (`site-content.ts`):
```
siteContent = {
  navigation: { ... },    ← Key is "navigation"
  hero: { ... },
  trust: { ... },
  services: { ... },
  gallery: { ... },
  whyChooseUs: { ... },   ← Key is "whyChooseUs" (with "Us")
  testimonials: { ... },
  cta: { ... },
  contact: { ... },
  footer: { ... },
}
```

**Component access patterns found:**

| Component | Accessed | Actual Key | Match? |
|-----------|----------|------------|--------|
| Navbar.tsx (desktop) | `content.navigation.logo` | `navigation` | ✅ |
| Navbar.tsx (mobile) | `content.nav.home` | `navigation` | ❌ CRASH |
| Footer.tsx | `content.nav.logo` | `navigation` | ❌ CRASH |
| WhyChooseUs.tsx | `content.whyChoose.title` | `whyChooseUs` | ❌ CRASH |
| WhyChooseUs.tsx | `content.whyChooseUs.items` | `whyChooseUs` | ✅ |
| Hero.tsx | `heroImageConfig.alt` (bilingual object as string) | — | ❌ TS Error |
| GalleryPreview.tsx | `image.alt` (bilingual object as string) | — | ❌ TS Error |

**Any single ❌ crash stops React from rendering the entire page.**

---

### Step 4: Identify the Kill Chain

React renders components **top to bottom**. The first component to crash kills the entire render tree:

```
App
 ├── Navbar        ← mobile menu reads content.nav.home → CRASH (nav is undefined)
 ├── Hero          ← content.hero works ✅, but alt text type mismatch
 ├── TrustSection  ← content.trust works ✅
 ├── Services      ← content.services works ✅
 ├── Gallery       ← image.alt is object, not string
 ├── WhyChooseUs   ← content.whyChoose.title → CRASH (whyChoose is undefined)
 ├── Testimonials  ← content.testimonials works ✅
 ├── CTA           ← content.cta works ✅
 ├── Contact       ← content.footer.contact works ✅
 └── Footer        ← content.nav.logo → CRASH (nav is undefined)
```

Because Navbar, WhyChooseUs, or Footer could crash first (depending on render order), **everything after the crash point disappears** — resulting in a blank page.

---

## 6. Root Cause Analysis

### Primary Cause: Property Key Mismatch

During the content refactoring:
- The content data was restructured with new key names (e.g., `navigation` instead of `nav`)
- Some components were updated to use the new keys
- **Other components were missed** and still referenced old keys

This is a classic **incomplete refactoring** problem.

### Contributing Factor: `any` Types

All component props used `content: any`, which disabled TypeScript's ability to catch these errors at compile time. If proper types had been enforced, every mismatched key would have been a compile error.

### Contributing Factor: No Error Boundary

React apps without an Error Boundary render nothing when an uncaught error occurs during render. There was no `<ErrorBoundary>` wrapper, so the crash produced a blank page instead of a helpful error message.

### Contributing Factor: Gallery Image URLs

The gallery images used invalid Unsplash photo IDs. While this didn't cause the blank page, it caused all 6 gallery images to show "Error loading image" placeholders after the page was fixed.

---

## 7. Fix Implementation

### Fix 1: Navbar — Mobile Menu (Commit `c880b08b`)

**Problem:** Mobile menu used `content.nav.home`, `content.nav.services`, etc.  
**Fix:** Replaced with dynamic mapping through `content.navigation.links`

```tsx
// BEFORE (crashed)
<a href="#home">{content.nav.home}</a>
<a href="#services">{content.nav.services}</a>
...

// AFTER (works)
{content.navigation.links.map((link, index) => (
  <a key={index} href={link.href}>{link.label}</a>
))}
```

### Fix 2: Footer — Logo (Commit `c880b08b`)

**Problem:** Footer read `content.nav.logo`  
**Fix:** Changed to `content.navigation.logo`

```tsx
// BEFORE
<span>{content.nav.logo}</span>

// AFTER
<span>{content.navigation.logo}</span>
```

### Fix 3: WhyChooseUs — Title/Subtitle (Commit `c79fd540`)

**Problem:** Component read `content.whyChoose.title` (missing "Us")  
**Fix:** Changed to `content.whyChooseUs.title`

```tsx
// BEFORE (crashed — "whyChoose" is undefined)
<h2>{content.whyChoose.title}</h2>
<p>{content.whyChoose.subtitle}</p>

// AFTER (works — matches content key)
<h2>{content.whyChooseUs.title}</h2>
<p>{content.whyChooseUs.subtitle}</p>
```

### Fix 4: Hero & Gallery — Bilingual Alt Text (Commit `30d5ba58`)

**Problem:** Image `alt` attributes received a `{ en: "...", vi: "..." }` object instead of a string  
**Fix:** Added language-aware extraction

```tsx
// BEFORE (TypeScript error — object is not a string)
<img alt={heroImageConfig.alt} />

// AFTER (extracts correct language string)
const heroAlt = typeof heroImageConfig.alt === 'string'
  ? heroImageConfig.alt
  : heroImageConfig.alt[language] || heroImageConfig.alt.en;
<img alt={heroAlt} />
```

### Fix 5: Gallery Images — Invalid URLs (Commit `18e4130b`)

**Problem:** 6 Unsplash photo IDs were invalid, causing "Error loading image"  
**Fix:** Replaced all gallery image URLs with verified working Unsplash photos

---

## 8. Files Changed

### Components Modified

| File | Change | Commit |
|------|--------|--------|
| `src/app/components/Navbar/Navbar.tsx` | `content.nav.*` → `content.navigation.*`; rewrote mobile menu to use links array | `3914decc`, `c880b08b` |
| `src/app/components/Footer/Footer.tsx` | `content.nav.logo` → `content.navigation.logo` | `c880b08b` |
| `src/app/components/WhyChooseUs/WhyChooseUs.tsx` | `content.whyChoose.*` → `content.whyChooseUs.*` | `c79fd540` |
| `src/app/components/Hero/Hero.tsx` | Added `language` prop; extract alt text from bilingual object | `30d5ba58` |
| `src/app/components/GalleryPreview/GalleryPreview.tsx` | Added `language` prop; `getAltText()` helper for bilingual alt | `30d5ba58` |

### Content Files Modified

| File | Change | Commit |
|------|--------|--------|
| `src/content/images.ts` | Replaced 6 invalid gallery image URLs with working ones | `18e4130b` |

### Layout Modified

| File | Change | Commit |
|------|--------|--------|
| `src/app/App.tsx` | Pass `language` prop to Hero and GalleryPreview | `30d5ba58` |

---

## 9. Validation After Fix

| Check | Result |
|-------|--------|
| `npm run build` | ✅ Success — 1625 modules, built in 1.69s |
| `get_errors` (TypeScript) | ✅ No errors |
| Page renders in browser | ✅ All 10 sections visible |
| Hero section | ✅ Title, subtitle, CTA buttons, stats |
| Navigation | ✅ Desktop and mobile menus work |
| Trust section | ✅ 4 stat cards with icons |
| Services | ✅ 4 service cards |
| Gallery | ✅ 6 images load correctly |
| Why Choose Us | ✅ 4 reason cards |
| Testimonials | ✅ 3 review cards |
| CTA | ✅ Phone link works |
| Contact form | ✅ Form renders with fields |
| Footer | ✅ Logo, links, contact info |
| Language toggle (EN/VI) | ✅ Content switches correctly |

---

## 10. Lessons Learned

### 1. Avoid `any` Types for Content Props

The biggest contributor to this bug was `content: any` on every component. This disabled TypeScript's key feature — catching property access errors at compile time.

**Recommendation:** Use typed props:
```tsx
interface HeroProps {
  content: { hero: HeroContent };  // Not "any"
}
```

### 2. Refactor in Atomic Steps

The content restructuring changed key names across 10+ files simultaneously. When the old keys and new keys don't match, it's nearly impossible to catch by eye.

**Recommendation:** Refactor one section at a time. Rename `nav` → `navigation` across ALL files before moving to the next section.

### 3. Add an Error Boundary

Without an Error Boundary, React silently swallows render errors and shows a blank page. This makes debugging extremely difficult.

**Recommendation:** Add a top-level Error Boundary:
```tsx
<ErrorBoundary fallback={<div>Something went wrong. Check console.</div>}>
  <App />
</ErrorBoundary>
```

### 4. Use a Grep Check After Key Renames

After renaming a content key, search the entire codebase for the old key:
```bash
grep -r "content\.nav\." src/app/components/
```
This would have instantly found all 3 remaining `content.nav` references.

### 5. Validate Image URLs Independently

Image loading failures don't crash the app but produce a poor user experience. Test image URLs in a browser before committing.

---

## 11. Recommendations

### Short Term (Do Now)

- [x] Fix all property key mismatches
- [x] Fix invalid gallery image URLs
- [x] Verify all 10 sections render
- [ ] Add an Error Boundary component to `App.tsx`
- [ ] Replace `content: any` with proper typed interfaces in each component

### Medium Term (Next Sprint)

- [ ] Add automated tests that render each section component with mock content
- [ ] Set up `tsconfig.json` with `"noImplicitAny": true` to catch future `any` usage
- [ ] Create a content validation script that checks all required keys exist

### Long Term (Architecture)

- [ ] Consider a CMS or content management solution for non-technical editors
- [ ] Add Storybook for visual component testing in isolation
- [ ] Set up CI/CD with build verification before merge

---

## Commit History (Chronological)

| Commit | Message | Key Change |
|--------|---------|------------|
| `24c04010` | refactor: comprehensive restructuring for maintainability | Centralized content, created `/src/content/` |
| `745d4eb8` | fix: update components to use new content structure | Hero, TrustSection, Services, Gallery, WhyChooseUs |
| `6dd63c98` | fix: update Footer component to use new content sections | Footer sections array |
| `30d5ba58` | Fix bilingual image alt text handling | Hero and GalleryPreview alt text |
| `3914decc` | Fix Navbar property names: nav → navigation | Desktop nav links |
| `c880b08b` | Fix blank page runtime crash from legacy nav keys | Footer logo + mobile menu |
| `c79fd540` | Fix blank page: WhyChooseUs content.whyChoose → whyChooseUs | WhyChooseUs title/subtitle |
| `18e4130b` | Fix gallery image URLs and TypeScript warning | 6 gallery images |

---

## Summary

The blank page was caused by an **incomplete refactoring** — content data keys were renamed but some component templates still used the old keys. Because all components used `any` types, TypeScript couldn't catch the mismatches. The fix was straightforward: update 4 component files to use the correct property paths. The investigation took multiple passes because each fix revealed additional mismatches deeper in the component tree.

**Key takeaway:** When restructuring data, always search for every old key name across the entire codebase before considering the refactoring complete.

---

*Report generated: March 26, 2026*  
*Project: ProPaint & Plaster Website*  
*Repository: https://github.com/Hotc0de/ProPaintersPlasters_26March26.git*
