# 🚀 Quick Start Guide - Painting & Plastering Website

## ⚡ 3-Minute Setup

### 1️⃣ Edit Your Business Information

**Open this file:** `/src/app/content/content.js`

**Change these key fields:**

```javascript
// Company Name
logo: "Your Business Name Here",

// Hero Section
title: "Your Main Headline",
subtitle: "Your tagline or description",

// Contact Info (scroll to bottom of file)
phone: "(555) 123-4567",
email: "youremail@business.com",
address: "Your Business Address",
```

**Important:** Edit BOTH the `en:` (English) and `vi:` (Vietnamese) sections!

---

### 2️⃣ Update Contact Details

In the **same file** (`/src/app/content/content.js`):

1. Scroll to the **footer** section
2. Update:
   - Phone number
   - Email address
   - Physical address
   - Business hours

Do this for **BOTH** languages!

---

### 3️⃣ Customize Services

In `/src/app/content/content.js`, find the **services** section:

```javascript
services: {
  interior: {
    title: "Your Service Name",
    description: "Your service description"
  },
  // ... update all 4 services
}
```

---

### 4️⃣ Add Your Photos

**Open:** `/src/app/components/GalleryPreview/GalleryPreview.tsx`

**Replace the image URLs** in the `galleryImages` array with your own:

```javascript
const galleryImages = [
  {
    url: 'https://your-image-url.com/photo1.jpg',
    alt: 'Your photo description'
  },
  // Add 4-6 images
];
```

---

### 5️⃣ Update Testimonials

In `/src/app/content/content.js`, find **testimonials**:

```javascript
reviews: [
  {
    name: "Customer Name",
    role: "Customer Type",
    text: "What they said about you",
    rating: 5
  },
  // Add 3-5 testimonials
]
```

---

## 🌍 Language Toggle

The language switcher (EN / VI) is **already built-in**!

Users can click EN or VI in the top navigation bar to switch languages.

---

## 🎨 Change Brand Colors

To change the main accent color from red to your brand color:

1. Use "Find & Replace" in your editor
2. Find: `#e74c3c`
3. Replace: `#YOUR_COLOR` (e.g., `#3498db` for blue)

---

## ✅ Pre-Launch Checklist

Before going live, make sure you've updated:

- [x] Company name (both languages)
- [x] All contact information
- [x] Service descriptions
- [x] Gallery images
- [x] Testimonials
- [x] Social media links (in `/src/app/components/Footer/Footer.tsx`)
- [x] Business statistics (1000+ projects, etc.)

---

## 📱 Test Your Website

Check these before launching:

1. **Desktop view** - Full screen browser
2. **Tablet view** - Resize browser to ~768px
3. **Mobile view** - Resize browser to ~375px
4. **Both languages** - Click EN/VI toggle and verify all content
5. **All links** - Click every button and link
6. **Images** - Verify all photos load correctly

---

## 🆘 Most Common Edits

### Change Hero Headline
File: `/src/app/content/content.js`  
Section: `hero.title`

### Change Phone Number
File: `/src/app/content/content.js`  
Section: `footer.contact.phone` (update in EN and VI)

### Add/Remove Gallery Images
File: `/src/app/components/GalleryPreview/GalleryPreview.tsx`  
Array: `galleryImages`

### Update Service Descriptions
File: `/src/app/content/content.js`  
Section: `services`

---

## 💡 Pro Tips

1. **Keep text similar length** in both languages to avoid layout issues
2. **Use high-quality images** - recommended size: 1200x800px or larger
3. **Test mobile first** - most visitors will view on phones
4. **Update regularly** - Fresh testimonials and photos build trust

---

## 📞 File Reference

| What You Want to Change | File Location |
|------------------------|---------------|
| **All Text Content** | `/src/app/content/content.js` |
| **Gallery Images** | `/src/app/components/GalleryPreview/GalleryPreview.tsx` |
| **Social Media Links** | `/src/app/components/Footer/Footer.tsx` |
| **Colors** | Any `.css` file in component folders |

---

## ✨ You're Ready!

That's it! Your website is now customized and ready to go.

For detailed instructions, see the full **PROJECT_GUIDE.md** file.

---

**Remember:** The #1 rule is **ALL TEXT goes in `/src/app/content/content.js`** ✅
