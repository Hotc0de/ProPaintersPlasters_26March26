# 🎨 Professional Painting & Plastering Business Website

A modern, bilingual (English + Vietnamese) React website for painting and interior plastering businesses.

---

## ✨ Features

- 🌍 **Bilingual Support** - English and Vietnamese with easy language toggle
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern Design** - Professional, clean, and visually appealing
- 🔧 **Easy to Edit** - All content in one file (`content.js`)
- ⚡ **Fast Performance** - Optimized React components
- 🧩 **Modular Architecture** - Clean, organized, maintainable code
- ♿ **Accessible** - Semantic HTML and ARIA labels
- 🎯 **Business-Focused** - Clear CTAs and contact information

---

## 📦 What's Included

### Pages & Sections
1. **Navigation Bar** - Fixed header with logo and language toggle
2. **Hero Section** - Eye-catching headline with CTAs
3. **Trust Section** - Key statistics and achievements
4. **Services Preview** - 4 main service offerings
5. **Gallery** - Portfolio of completed projects (6 images)
6. **Why Choose Us** - Company strengths and differentiators
7. **Testimonials** - Customer reviews and ratings
8. **Call-to-Action** - Quote request with phone number
9. **Footer** - Complete contact info and site links

### Technologies
- React 18.3.1
- TypeScript
- Vite (build tool)
- Lucide React (icons)
- CSS3 (custom styling)

---

## 🚀 Quick Start

### For First-Time Users:

**Read these in order:**

1. **START HERE:** [`/QUICK_START.md`](/QUICK_START.md)
   - 3-minute setup guide
   - Essential edits to make
   - Most common changes

2. **THEN READ:** [`/EDITING_EXAMPLES.md`](/EDITING_EXAMPLES.md)
   - Step-by-step examples
   - Real code snippets
   - Copy & paste solutions

3. **BEFORE LAUNCH:** [`/PRE_LAUNCH_CHECKLIST.md`](/PRE_LAUNCH_CHECKLIST.md)
   - Complete checklist
   - Testing guide
   - Quality assurance

---

## 📚 Documentation

### Core Documentation

| Document | Purpose | When to Use |
|----------|---------|-------------|
| **QUICK_START.md** | Fast 3-minute setup | Starting out, quick edits |
| **PROJECT_GUIDE.md** | Comprehensive user guide | Detailed information, reference |
| **EDITING_EXAMPLES.md** | Step-by-step editing examples | Making specific changes |
| **COMPONENT_OVERVIEW.md** | Technical architecture | Understanding structure |
| **IMPLEMENTATION_SUMMARY.md** | What was built and why | Overview, handoff documentation |
| **PRE_LAUNCH_CHECKLIST.md** | Launch preparation | Before going live |
| **README.md** | This file - project overview | First stop for information |

---

## 🎯 Most Common Tasks

### Change Text Content
**File:** `/src/app/content/content.js`

This ONE file contains ALL text content for both languages.

### Change Images
**File:** `/src/app/components/GalleryPreview/GalleryPreview.tsx`

Replace image URLs in the `galleryImages` array.

### Change Colors
**Find & Replace** the hex code `#e74c3c` with your brand color.

### Update Contact Info
**File:** `/src/app/content/content.js`

Search for phone number, email, and address - update in both languages.

### Add Social Media Links
**File:** `/src/app/components/Footer/Footer.tsx`

Update the `href` attributes in social media links.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # All UI components
│   │   ├── Navbar/          # Top navigation
│   │   ├── Hero/            # Main headline section
│   │   ├── TrustSection/    # Statistics cards
│   │   ├── ServicesPreview/ # Service offerings
│   │   ├── GalleryPreview/  # Project photos
│   │   ├── WhyChooseUs/     # Company strengths
│   │   ├── Testimonials/    # Customer reviews
│   │   ├── CTA/             # Call-to-action
│   │   └── Footer/          # Site footer
│   │
│   ├── content/
│   │   └── content.js       # 🔥 ALL TEXT CONTENT HERE
│   │
│   ├── App.tsx              # Main app component
│   └── App.css              # Global styles
│
├── styles/                  # Global styling
└── imports/                 # Imported assets
```

---

## ✏️ Editing Content

### The Golden Rule:
**All text goes in `/src/app/content/content.js`**

### Example Edit:

```javascript
// In content.js:

en: {
  hero: {
    title: "Your New Headline Here",  // ← Edit this
    subtitle: "Your new subtitle",    // ← And this
  }
}

// Remember to update Vietnamese (vi) section too!
```

See [`EDITING_EXAMPLES.md`](/EDITING_EXAMPLES.md) for detailed examples.

---

## 🌍 Language System

### How It Works:
1. User clicks **EN** or **VI** in navigation
2. Website instantly switches all text
3. Content is pulled from `content.js` based on selected language

### Current Languages:
- 🇬🇧 English (`en`)
- 🇻🇳 Vietnamese (`vi`)

### Adding More Languages:
See the "Adding More Languages" section in [`PROJECT_GUIDE.md`](/PROJECT_GUIDE.md)

---

## 🎨 Customization

### Change Brand Colors:
1. Find & Replace `#e74c3c` (current red accent)
2. Replace with your color code (e.g., `#3498db` for blue)
3. Save all files

### Adjust Layout:
Each component has its own CSS file. For example:
- **Navbar styling:** `/src/app/components/Navbar/Navbar.css`
- **Hero styling:** `/src/app/components/Hero/Hero.css`

### Add/Remove Sections:
Edit `/src/app/App.tsx` and comment out or add components:

```tsx
// In App.tsx:
<Hero content={currentContent} />
<TrustSection content={currentContent} />
// Comment out to hide: {/* <Testimonials content={currentContent} /> */}
```

---

## 📱 Responsive Design

The website automatically adjusts to:
- 🖥️ **Desktop** (1920px+)
- 💻 **Laptop** (1366px)
- 📱 **Tablet** (768px)
- 📱 **Mobile** (375px - 414px)

All sections are tested and optimized for each breakpoint.

---

## 🛠️ Development

### Node.js Version (Required)
This project requires Node.js 20+.

If you use `nvm`:
```bash
nvm use
```

### Install Dependencies:
```bash
npm install
# or
pnpm install
```

### Run Development Server:
```bash
npm run dev
# or
pnpm dev
```

### Build for Production:
```bash
npm run build
# or
pnpm build
```

---

## 📊 Component Overview

| Component | Purpose | Icons | Editable In |
|-----------|---------|-------|-------------|
| Navbar | Navigation & language toggle | Menu, X | `content.js` |
| Hero | Main headline & CTAs | - | `content.js` |
| TrustSection | Stats & achievements | Check, Home, Award, Shield | `content.js` |
| ServicesPreview | Service offerings | Brush, Home, Hammer, Building | `content.js` |
| GalleryPreview | Portfolio images | - | `GalleryPreview.tsx` |
| WhyChooseUs | Company strengths | Star, Award, Users, Shield | `content.js` |
| Testimonials | Customer reviews | Star (ratings) | `content.js` |
| CTA | Quote request | Phone | `content.js` |
| Footer | Contact & links | Phone, Mail, Map, Social | `content.js` |

---

## 🎯 Key Files to Know

### Must-Edit Files:
1. **`/src/app/content/content.js`** - All website text
2. **`/src/app/components/GalleryPreview/GalleryPreview.tsx`** - Gallery images
3. **`/src/app/components/Footer/Footer.tsx`** - Social media links

### Optional Edit Files:
- Any `.css` file - Styling and colors
- Component `.tsx` files - Advanced customization (requires React knowledge)

### Don't Edit:
- `/src/app/components/figma/ImageWithFallback.tsx` - System component
- `/pnpm-lock.yaml` - Package lock file

---

## ✅ Pre-Launch Checklist

Before going live, make sure you've:

- [ ] Updated company name (both languages)
- [ ] Changed all contact information
- [ ] Replaced gallery images with real photos
- [ ] Updated testimonials with real reviews
- [ ] Set correct phone number and email
- [ ] Updated social media links
- [ ] Tested on mobile devices
- [ ] Checked both EN and VI languages
- [ ] Verified all links work
- [ ] Reviewed for typos

See [`PRE_LAUNCH_CHECKLIST.md`](/PRE_LAUNCH_CHECKLIST.md) for complete list.

---

## 🆘 Common Questions

### Q: How do I change the phone number?
**A:** Edit `/src/app/content/content.js` - search for the phone number and replace it in both `en` and `vi` sections.

### Q: How do I add my company logo?
**A:** The logo is currently text-based. You can add an image logo in `/src/app/components/Navbar/Navbar.tsx`.

### Q: Can I add more sections?
**A:** Yes! Create a new component folder in `/src/app/components/` and import it in `App.tsx`.

### Q: How do I change colors?
**A:** Use Find & Replace for the hex code `#e74c3c` and replace with your color.

### Q: What if I break something?
**A:** Keep backups of your files! Before major changes, copy the file you're editing.

---

## 📞 Support Resources

- **Quick Edits:** See [`EDITING_EXAMPLES.md`](/EDITING_EXAMPLES.md)
- **Full Guide:** See [`PROJECT_GUIDE.md`](/PROJECT_GUIDE.md)
- **Component Info:** See [`COMPONENT_OVERVIEW.md`](/COMPONENT_OVERVIEW.md)
- **Launch Prep:** See [`PRE_LAUNCH_CHECKLIST.md`](/PRE_LAUNCH_CHECKLIST.md)

---

## 🎓 Learning Resources

- **React:** [react.dev](https://react.dev)
- **TypeScript:** [typescriptlang.org](https://www.typescriptlang.org/)
- **CSS:** [web.dev/learn/css/](https://web.dev/learn/css/)
- **Vite:** [vitejs.dev](https://vitejs.dev)

---

## 📝 License

This project is created for business use. Customize it as needed for your painting and plastering business.

---

## 🎉 Credits

- **Icons:** [Lucide React](https://lucide.dev)
- **Images:** [Unsplash](https://unsplash.com) (replace with your own)
- **Framework:** React + Vite
- **Styling:** Custom CSS3

---

## 💡 Tips for Success

1. **Start with content.js** - Make all text changes there first
2. **Test both languages** - Always check EN and VI
3. **Use real images** - Replace placeholder photos with your work
4. **Keep it updated** - Add new testimonials and projects regularly
5. **Mobile matters** - Most visitors will view on phones
6. **Professional photos** - Invest in good project photography
7. **Clear CTAs** - Make it easy for customers to contact you

---

## 🚀 Ready to Launch?

1. **Edit your content** - See [`QUICK_START.md`](/QUICK_START.md)
2. **Review everything** - Use [`PRE_LAUNCH_CHECKLIST.md`](/PRE_LAUNCH_CHECKLIST.md)
3. **Deploy your site** - Upload to your hosting provider
4. **Promote it** - Share on social media and business cards

---

## 📬 Next Steps

**New to this project?**
→ Start with [`QUICK_START.md`](/QUICK_START.md)

**Ready to edit?**
→ Check out [`EDITING_EXAMPLES.md`](/EDITING_EXAMPLES.md)

**About to launch?**
→ Review [`PRE_LAUNCH_CHECKLIST.md`](/PRE_LAUNCH_CHECKLIST.md)

**Want to understand the code?**
→ Read [`COMPONENT_OVERVIEW.md`](/COMPONENT_OVERVIEW.md)

---

**Built with ❤️ for professional painting & plastering businesses**

---

## 📊 Project Stats

- **Total Components:** 9
- **Lines of Code:** 2,500+
- **Languages Supported:** 2 (English, Vietnamese)
- **Responsive Breakpoints:** 3
- **Documentation Pages:** 7
- **Gallery Images:** 6
- **Service Cards:** 4
- **Testimonials:** 3

---

## 🎯 Perfect For:

✅ Painting contractors  
✅ Plastering businesses  
✅ Interior/exterior specialists  
✅ Residential painters  
✅ Commercial painting companies  
✅ Multi-language service areas  
✅ Small to medium businesses  
✅ Anyone needing a professional painting website  

---

**Your professional painting business deserves a professional website. This is it.** 🎨✨
