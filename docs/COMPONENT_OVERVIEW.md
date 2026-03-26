# 🧩 Component Overview

## Component Architecture

This website is built using a **modular component structure**. Each section of the page is a separate, reusable component.

---

## 📦 Component List

### 1. **Navbar** (`/src/app/components/Navbar/`)
**Purpose:** Top navigation bar with logo, menu links, and language toggle

**Features:**
- Fixed position (stays at top when scrolling)
- Language switcher (EN/VI)
- Responsive mobile menu
- Smooth scroll navigation

**Edit:**
- Text: `/src/app/content/content.js` → `nav` section
- Styling: `Navbar.css`

---

### 2. **Hero** (`/src/app/components/Hero/`)
**Purpose:** Main headline section with call-to-action buttons

**Features:**
- Full-screen gradient background
- Animated entrance
- Two CTA buttons (Primary & Secondary)
- Transparent overlay effect

**Edit:**
- Text: `/src/app/content/content.js` → `hero` section
- Styling: `Hero.css`
- Colors: Change gradient in `Hero.css` (line 18-19)

---

### 3. **TrustSection** (`/src/app/components/TrustSection/`)
**Purpose:** Display key statistics and achievements

**Features:**
- 4 stat cards with icons
- Hover animations
- Responsive grid layout
- Animated icons

**Icons Used:**
- CheckCircle (Projects)
- Home (Property Types)
- Award (Awards)
- Shield (Guarantee)

**Edit:**
- Text & Numbers: `/src/app/content/content.js` → `trust` section
- Styling: `TrustSection.css`

---

### 4. **ServicesPreview** (`/src/app/components/ServicesPreview/`)
**Purpose:** Showcase 4 main services offered

**Features:**
- Service cards with icons
- Hover effects (lift on hover)
- Responsive grid
- Icon-based visual design

**Services:**
1. Interior Painting (Paintbrush icon)
2. Exterior Painting (Home icon)
3. Wall Plastering (Hammer icon)
4. Commercial Services (Building icon)

**Edit:**
- Text: `/src/app/content/content.js` → `services` section
- Styling: `ServicesPreview.css`

---

### 5. **GalleryPreview** (`/src/app/components/GalleryPreview/`)
**Purpose:** Display portfolio of completed projects

**Features:**
- 6-image responsive grid
- Image hover overlay effect
- Zoom effect on hover
- "View Full Gallery" button

**Edit:**
- Images: `GalleryPreview.tsx` → `galleryImages` array
- Text: `/src/app/content/content.js` → `gallery` section
- Styling: `GalleryPreview.css`

**Note:** Uses `ImageWithFallback` component for reliable image loading

---

### 6. **WhyChooseUs** (`/src/app/components/WhyChooseUs/`)
**Purpose:** Highlight company strengths and differentiators

**Features:**
- 4 reason cards with icons
- Gradient background (purple)
- Transparent glass-effect cards
- Hover animations

**Reasons:**
1. Experience (Star icon)
2. Quality Materials (Award icon)
3. Skilled Team (Users icon)
4. Guarantee (ShieldCheck icon)

**Edit:**
- Text: `/src/app/content/content.js` → `whyChoose` section
- Styling: `WhyChooseUs.css`

---

### 7. **Testimonials** (`/src/app/components/Testimonials/`)
**Purpose:** Display customer reviews and feedback

**Features:**
- 3 testimonial cards
- 5-star rating display
- Customer avatar with initial
- Responsive layout

**Edit:**
- Text: `/src/app/content/content.js` → `testimonials.reviews` array
- Add/remove reviews in the array
- Styling: `Testimonials.css`

**Review Structure:**
```javascript
{
  name: "Customer Name",
  role: "Customer Type",
  text: "Review text",
  rating: 5
}
```

---

### 8. **CTA** (`/src/app/components/CTA/`)
**Purpose:** Final call-to-action to request quote

**Features:**
- Eye-catching red gradient background
- 2 action buttons
- Phone icon integration
- Pulsing background animation

**Edit:**
- Text: `/src/app/content/content.js` → `cta` section
- Phone number: Update in content.js
- Styling: `CTA.css`

---

### 9. **Footer** (`/src/app/components/Footer/`)
**Purpose:** Site footer with comprehensive information

**Features:**
- 4-column layout
- Company info & social links
- Quick navigation links
- Services list
- Complete contact information
- Responsive (stacks on mobile)

**Social Icons:**
- Facebook
- Instagram
- Twitter

**Edit:**
- Text: `/src/app/content/content.js` → `footer` section
- Social links: `Footer.tsx` (find `<a href="#"` tags)
- Styling: `Footer.css`

---

## 🎨 Component Styling

Each component has its own CSS file for easy customization:

```
ComponentName/
├── ComponentName.tsx  ← Component logic & structure
└── ComponentName.css  ← Component styling
```

### Common CSS Properties Used:

- **Transitions:** Smooth hover effects
- **Grid Layouts:** Responsive column systems
- **Flexbox:** Alignment and spacing
- **Gradients:** Background effects
- **Animations:** Entrance effects and floating animations

---

## 🔄 Data Flow

```
content.js (Data Storage)
    ↓
App.tsx (Language State Management)
    ↓
Components (Receive content via props)
    ↓
Display (Rendered to user)
```

**How it works:**
1. User selects language (EN/VI) in Navbar
2. App.tsx updates language state
3. App.tsx passes correct language content to all components
4. Components display content in selected language

---

## 📱 Responsive Breakpoints

All components are responsive with these breakpoints:

- **Desktop:** > 768px (full layout)
- **Tablet:** 768px (adjusted grid)
- **Mobile:** 480px (single column)

Each component CSS file includes media queries for responsive design.

---

## 🎯 Component Features Summary

| Component | Icons | Animation | Gradient | Grid |
|-----------|-------|-----------|----------|------|
| Navbar | ✅ | ✅ | ❌ | ❌ |
| Hero | ❌ | ✅ | ✅ | ❌ |
| TrustSection | ✅ | ✅ | ❌ | ✅ |
| ServicesPreview | ✅ | ✅ | ❌ | ✅ |
| GalleryPreview | ✅ | ✅ | ❌ | ✅ |
| WhyChooseUs | ✅ | ✅ | ✅ | ✅ |
| Testimonials | ✅ | ✅ | ❌ | ✅ |
| CTA | ✅ | ✅ | ✅ | ❌ |
| Footer | ✅ | ❌ | ❌ | ✅ |

---

## 🛠️ Customization Tips

### Adding a New Component:

1. Create new folder in `/src/app/components/`
2. Create `ComponentName.tsx` and `ComponentName.css`
3. Add content to `/src/app/content/content.js` (both languages)
4. Import and use in `App.tsx`

### Reordering Sections:

Simply change the order in `App.tsx`:

```tsx
<Navbar />
<Hero />
<TrustSection />  // ← Move these lines
<ServicesPreview /> // ← to reorder sections
// ...
```

### Removing a Section:

1. Comment out or delete the component in `App.tsx`
2. (Optional) Delete the component folder

---

## 📊 Icon Library

This project uses **Lucide React** icons:

**Installed Icons:**
- Menu, X (mobile menu)
- CheckCircle, Home, Award, Shield (trust stats)
- Paintbrush, Hammer, Building2 (services)
- Star (ratings)
- Phone, Mail, MapPin (contact)
- Facebook, Instagram, Twitter (social)
- Users, ShieldCheck (features)

**To add new icons:**
```tsx
import { IconName } from 'lucide-react';
```

Browse available icons: [lucide.dev](https://lucide.dev)

---

## ✨ Best Practices

1. **Always edit content in `content.js`** - Never hardcode text in components
2. **Keep CSS modular** - Each component has its own styles
3. **Use semantic HTML** - Proper tags for accessibility
4. **Test responsiveness** - Check all breakpoints
5. **Maintain structure** - Don't break the component hierarchy

---

## 🎓 Learning Resources

- **React Basics:** [react.dev](https://react.dev)
- **CSS Grid:** [css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/)
- **Flexbox:** [css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- **TypeScript:** [typescriptlang.org](https://www.typescriptlang.org/)

---

This modular architecture makes the website:
- ✅ Easy to maintain
- ✅ Simple to customize
- ✅ Scalable for future additions
- ✅ Clean and organized
