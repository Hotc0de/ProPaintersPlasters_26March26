/**
 * App.tsx — PAGE LAYOUT
 *
 * Controls which sections appear and in what order.
 * Controls language switching (EN / VI).
 *
 * ✅ Safe to edit: section order, language default
 * ❌ Don't put text content here — edit src/content/ files instead
 */

import React, { useState, useMemo } from 'react';
import { siteContent, galleryImages } from './content';
import { Language } from './types/index';
import { extractLanguageContent } from './utils/content-helpers';

import { Navbar }          from './sections/Navbar/Navbar';
import { Hero }            from './sections/Hero/Hero';
import { TrustSection }    from './sections/TrustSection/TrustSection';
import { ServicesPreview } from './sections/ServicesPreview/ServicesPreview';
import { GalleryPreview }  from './sections/GalleryPreview/GalleryPreview';
import { WhyChooseUs }     from './sections/WhyChooseUs/WhyChooseUs';
import { Testimonials }    from './sections/Testimonials/Testimonials';
import { CTA }             from './sections/CTA/CTA';
import { Contact }         from './sections/Contact/Contact';
import { Footer }          from './sections/Footer/Footer';
import './App.css';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');

  // Extracts the correct language string from every bilingual field.
  // Re-runs only when the user toggles the language.
  const currentContent = useMemo(
    () => extractLanguageContent(siteContent, language),
    [language]
  );

  return (
    <div className="app">
      <Navbar content={currentContent} language={language} onLanguageChange={setLanguage} />
      <Hero content={currentContent} language={language} />
      <TrustSection content={currentContent} />
      <ServicesPreview content={currentContent} />
      <GalleryPreview content={currentContent} images={galleryImages} language={language} />
      <WhyChooseUs content={currentContent} />
      <Testimonials content={currentContent} />
      <CTA content={currentContent} />
      <Contact content={currentContent} />
      <Footer content={currentContent} />
    </div>
  );
}
