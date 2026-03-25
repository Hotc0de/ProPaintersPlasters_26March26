# ✏️ Editing Examples - Step-by-Step

This guide shows **EXACTLY** how to make common edits to your website with real examples.

---

## 📝 Example 1: Change Company Name

### What You Want:
Change "ProPaint & Plaster" to "Quality Painting Co."

### Steps:
1. **Open:** `/src/app/content/content.js`

2. **Find this (English section, around line 15):**
```javascript
en: {
  nav: {
    logo: "ProPaint & Plaster",
```

3. **Change to:**
```javascript
en: {
  nav: {
    logo: "Quality Painting Co.",
```

4. **Scroll down to Vietnamese section (around line 133):**
```javascript
vi: {
  nav: {
    logo: "Sơn & Trát Chuyên Nghiệp",
```

5. **Change to:**
```javascript
vi: {
  nav: {
    logo: "Quality Painting Co.",
```

6. **Save the file**

✅ Done! Your company name will now show as "Quality Painting Co." in both languages.

---

## 📞 Example 2: Update Phone Number

### What You Want:
Change phone from (555) 123-4567 to (555) 987-6543

### Steps:
1. **Open:** `/src/app/content/content.js`

2. **Search for:** `(555) 123-4567` (use Ctrl+F or Cmd+F)

3. **You'll find it in multiple places. Replace ALL of them:**

**Location 1 - CTA Section (English):**
```javascript
// Before:
cta: {
  title: "Ready to Transform Your Space?",
  subtitle: "Get a free, no-obligation quote today",
  button: "Request Free Quote",
  phone: "Call us: (555) 123-4567"  // ← Change this
},
```

```javascript
// After:
cta: {
  title: "Ready to Transform Your Space?",
  subtitle: "Get a free, no-obligation quote today",
  button: "Request Free Quote",
  phone: "Call us: (555) 987-6543"  // ← Changed
},
```

**Location 2 - Footer Section (English):**
```javascript
// Before:
contact: {
  title: "Contact Us",
  phone: "(555) 123-4567",  // ← Change this
  email: "info@propaintplaster.com",
```

```javascript
// After:
contact: {
  title: "Contact Us",
  phone: "(555) 987-6543",  // ← Changed
  email: "info@propaintplaster.com",
```

**Location 3 - CTA Section (Vietnamese):**
```javascript
// Before:
cta: {
  title: "Sẵn Sàng Biến Đổi Không Gian Của Bạn?",
  subtitle: "Nhận báo giá miễn phí, không ràng buộc ngay hôm nay",
  button: "Yêu Cầu Báo Giá Miễn Phí",
  phone: "Gọi cho chúng tôi: (555) 123-4567"  // ← Change this
},
```

```javascript
// After:
cta: {
  title: "Sẵn Sàng Biến Đổi Không Gian Của Bạn?",
  subtitle: "Nhận báo giá miễn phí, không ràng buộc ngay hôm nay",
  button: "Yêu Cầu Báo Giá Miễn Phí",
  phone: "Gọi cho chúng tôi: (555) 987-6543"  // ← Changed
},
```

**Location 4 - Footer Section (Vietnamese):**
```javascript
// Before:
contact: {
  title: "Liên Hệ Chúng Tôi",
  phone: "(555) 123-4567",  // ← Change this
  email: "info@propaintplaster.com",
```

```javascript
// After:
contact: {
  title: "Liên Hệ Chúng Tôi",
  phone: "(555) 987-6543",  // ← Changed
  email: "info@propaintplaster.com",
```

4. **Save the file**

✅ Done! Phone number updated everywhere.

💡 **Tip:** Use Find & Replace in your editor to change all at once!

---

## ✉️ Example 3: Change Email Address

### What You Want:
Change email to contact@qualitypainting.com

### Steps:
1. **Open:** `/src/app/content/content.js`

2. **Find (English section, around line 114):**
```javascript
contact: {
  title: "Contact Us",
  phone: "(555) 123-4567",
  email: "info@propaintplaster.com",  // ← Change this
```

3. **Change to:**
```javascript
contact: {
  title: "Contact Us",
  phone: "(555) 123-4567",
  email: "contact@qualitypainting.com",  // ← Changed
```

4. **Find (Vietnamese section, around line 232):**
```javascript
contact: {
  title: "Liên Hệ Chúng Tôi",
  phone: "(555) 123-4567",
  email: "info@propaintplaster.com",  // ← Change this
```

5. **Change to:**
```javascript
contact: {
  title: "Liên Hệ Chúng Tôi",
  phone: "(555) 123-4567",
  email: "contact@qualitypainting.com",  // ← Changed
```

6. **Save the file**

✅ Done!

---

## 🏠 Example 4: Change Main Headline

### What You Want:
Change hero headline to "Expert Painting Services Since 2010"

### Steps:
1. **Open:** `/src/app/content/content.js`

2. **Find (English, around line 25):**
```javascript
hero: {
  title: "Professional Painting & Plastering You Can Trust",  // ← Change this
  subtitle: "Over 1000 projects completed...",
```

3. **Change to:**
```javascript
hero: {
  title: "Expert Painting Services Since 2010",  // ← Changed
  subtitle: "Over 1000 projects completed...",
```

4. **Find (Vietnamese, around line 143):**
```javascript
hero: {
  title: "Dịch Vụ Sơn & Trát Tường Chuyên Nghiệp, Đáng Tin Cậy",  // ← Change
  subtitle: "Hơn 1000 công trình hoàn thành...",
```

5. **Change to:**
```javascript
hero: {
  title: "Dịch Vụ Sơn Chuyên Nghiệp Từ Năm 2010",  // ← Changed (Vietnamese)
  subtitle: "Hơn 1000 công trình hoàn thành...",
```

6. **Save the file**

✅ Done!

---

## 🖼️ Example 5: Replace a Gallery Image

### What You Want:
Replace the first gallery image with your own photo

### Steps:
1. **Upload your image** to an image hosting service (Imgur, Cloudinary, etc.) or your own server

2. **Copy the image URL** (e.g., `https://mywebsite.com/images/project1.jpg`)

3. **Open:** `/src/app/components/GalleryPreview/GalleryPreview.tsx`

4. **Find (around line 10):**
```javascript
const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1632489752865-28346e16cd85...',  // ← Change this
    alt: 'Interior Painting Project'
  },
```

5. **Change to:**
```javascript
const galleryImages = [
  {
    url: 'https://mywebsite.com/images/project1.jpg',  // ← Your image URL
    alt: 'My Interior Painting Project'  // ← Update description
  },
```

6. **Save the file**

✅ Done!

💡 **Tip:** Repeat for all 6 images in the array

---

## ⭐ Example 6: Add a New Testimonial

### What You Want:
Add a 4th customer review

### Steps:
1. **Open:** `/src/app/content/content.js`

2. **Find (English, around line 85):**
```javascript
reviews: [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    text: "Exceptional work!...",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    text: "We hired them...",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Property Manager",
    text: "I've worked with...",
    rating: 5
  }
]
```

3. **Add a comma after the last review and add your new review:**
```javascript
reviews: [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    text: "Exceptional work!...",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    text: "We hired them...",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Property Manager",
    text: "I've worked with...",
    rating: 5
  },  // ← Added comma here
  {
    name: "John Smith",
    role: "Restaurant Owner",
    text: "They painted our entire restaurant in just 3 days! Professional, fast, and the quality is amazing.",
    rating: 5
  }  // ← New review added
]
```

4. **Do the same for Vietnamese section (around line 203)**

5. **Save the file**

✅ Done! You now have 4 testimonials.

---

## 📊 Example 7: Change Statistics

### What You Want:
Change "1000+" to "2000+" projects

### Steps:
1. **Open:** `/src/app/content/content.js`

2. **Find (English, around line 34):**
```javascript
trust: {
  title: "Why Clients Choose Us",
  projects: {
    number: "1000+",  // ← Change this
    label: "Projects Completed"
  },
```

3. **Change to:**
```javascript
trust: {
  title: "Why Clients Choose Us",
  projects: {
    number: "2000+",  // ← Changed
    label: "Projects Completed"
  },
```

4. **Find (Vietnamese, around line 152):**
```javascript
trust: {
  title: "Tại Sao Khách Hàng Chọn Chúng Tôi",
  projects: {
    number: "1000+",  // ← Change this
    label: "Công Trình Hoàn Thành"
  },
```

5. **Change to:**
```javascript
trust: {
  title: "Tại Sao Khách Hàng Chọn Chúng Tôi",
  projects: {
    number: "2000+",  // ← Changed
    label: "Công Trình Hoàn Thành"
  },
```

6. **Save the file**

✅ Done!

---

## 🎨 Example 8: Change Accent Color from Red to Blue

### What You Want:
Change the main red accent color to blue

### Steps:
1. **Decide on your blue color** (e.g., `#3498db`)

2. **Use Find & Replace in your code editor:**
   - **Find:** `#e74c3c`
   - **Replace:** `#3498db`
   - **Click "Replace All"**

This will change the color in:
- Buttons
- Icons
- Borders
- Hover effects
- All CSS files

3. **Save all files**

✅ Done! Your website now uses blue instead of red.

💡 **Files affected:**
- All `.css` files in component folders
- Hero gradient (you may want to adjust manually)
- CTA section gradient

---

## 🌐 Example 9: Add Social Media Links

### What You Want:
Link Facebook, Instagram, and Twitter icons to real profiles

### Steps:
1. **Open:** `/src/app/components/Footer/Footer.tsx`

2. **Find (around line 27):**
```javascript
<div className="social-icons">
  <a href="#" className="social-icon" aria-label="Facebook">
    <Facebook size={20} />
  </a>
  <a href="#" className="social-icon" aria-label="Instagram">
    <Instagram size={20} />
  </a>
  <a href="#" className="social-icon" aria-label="Twitter">
    <Twitter size={20} />
  </a>
</div>
```

3. **Change to:**
```javascript
<div className="social-icons">
  <a href="https://facebook.com/yourpage" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
    <Facebook size={20} />
  </a>
  <a href="https://instagram.com/yourpage" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
    <Instagram size={20} />
  </a>
  <a href="https://twitter.com/yourpage" className="social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
    <Twitter size={20} />
  </a>
</div>
```

4. **Save the file**

✅ Done! Social icons now link to your actual profiles.

💡 **Note:** `target="_blank"` makes links open in a new tab

---

## 📍 Example 10: Update Business Address

### What You Want:
Change address to your real business location

### Steps:
1. **Open:** `/src/app/content/content.js`

2. **Find (English, around line 116):**
```javascript
contact: {
  title: "Contact Us",
  phone: "(555) 123-4567",
  email: "info@propaintplaster.com",
  address: "123 Business Street, City, State 12345",  // ← Change this
  hours: "Mon-Fri: 8AM - 6PM"
},
```

3. **Change to:**
```javascript
contact: {
  title: "Contact Us",
  phone: "(555) 123-4567",
  email: "info@propaintplaster.com",
  address: "456 Main St, Los Angeles, CA 90001",  // ← Your address
  hours: "Mon-Fri: 8AM - 6PM"
},
```

4. **Do the same for Vietnamese section (around line 234)**

5. **Save the file**

✅ Done!

---

## ⏰ Example 11: Change Business Hours

### What You Want:
Update hours to Mon-Sat: 7AM - 7PM

### Steps:
1. **Open:** `/src/app/content/content.js`

2. **Find and change in English section:**
```javascript
// Before:
hours: "Mon-Fri: 8AM - 6PM"

// After:
hours: "Mon-Sat: 7AM - 7PM"
```

3. **Find and change in Vietnamese section:**
```javascript
// Before:
hours: "Thứ Hai - Thứ Sáu: 8AM - 6PM"

// After:
hours: "Thứ Hai - Thứ Bảy: 7AM - 7PM"
```

4. **Save the file**

✅ Done!

---

## 🔧 Pro Tips

### Find & Replace Shortcuts:
- **Windows:** Ctrl + H
- **Mac:** Cmd + Option + F
- **VS Code:** Ctrl/Cmd + Shift + H

### Before Making Big Changes:
1. **Save a backup** of the file first
2. **Test one change** at a time
3. **Check both languages** (EN and VI)
4. **View on mobile** and desktop

### Common Mistakes to Avoid:
❌ Forgetting to update both English AND Vietnamese  
❌ Breaking JavaScript syntax (missing comma, quote, bracket)  
❌ Editing component `.tsx` files instead of `content.js`  
❌ Using the wrong file path for images  

### Testing Your Changes:
1. Save all files
2. Refresh your browser (Ctrl+F5 or Cmd+Shift+R for hard refresh)
3. Test both EN and VI language modes
4. Check on mobile view (resize browser window)

---

## 🎯 Quick Reference

| What to Change | File to Edit | Section |
|---------------|--------------|---------|
| **Company name** | `content.js` | `nav.logo` |
| **Phone number** | `content.js` | `footer.contact.phone` + `cta.phone` |
| **Email** | `content.js` | `footer.contact.email` |
| **Address** | `content.js` | `footer.contact.address` |
| **Business hours** | `content.js` | `footer.contact.hours` |
| **Hero headline** | `content.js` | `hero.title` |
| **Services** | `content.js` | `services.*` |
| **Testimonials** | `content.js` | `testimonials.reviews[]` |
| **Gallery images** | `GalleryPreview.tsx` | `galleryImages[]` |
| **Social links** | `Footer.tsx` | `<a href="#">` tags |
| **Colors** | All `.css` files | Find & Replace hex codes |

---

Remember: **When in doubt, edit `content.js` first!** That's where 95% of your changes will happen.

Happy editing! 🎨✨
