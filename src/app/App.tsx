/**
 * APP.TSX - MAIN APPLICATION COMPONENT
 * 
 * This file is the page layout. It controls:
 * - Which sections appear and in what order
 * - Language switching
 * - Passing content to all sections
 * 
 * LAYOUT ONLY - Don't put content here. Content goes in src/content/
 */

import React, { useState, useMemo } from 'react';
import { siteContent, galleryImages } from '../content';
import { Language } from '../types/index';
import { extractLanguageContent } from '../utils/content-helpers';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { TrustSection } from './components/TrustSection/TrustSection';
import { ServicesPreview } from './components/ServicesPreview/ServicesPreview';
import { GalleryPreview } from './components/GalleryPreview/GalleryPreview';
import { WhyChooseUs } from './components/WhyChooseUs/WhyChooseUs';
import { Testimonials } from './components/Testimonials/Testimonials';
import { CTA } from './components/CTA/CTA';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import './App.css';

export default function App() {
  // ========== LANGUAGE STATE ==========
  // Manages which language is currently displayed (English or Vietnamese)
  const [language, setLanguage] = useState<Language>('en');

  // ========== EXTRACT LANGUAGE-SPECIFIC CONTENT ==========
  // Converts bilingual content structure into language-specific values
  // Memoized to prevent unnecessary recalculations
  const currentContent = useMemo(() => {
    return extractLanguageContent(siteContent, language);
  }, [language]);

  // ========== HANDLE LANGUAGE CHANGE ==========
  // Updates language when user clicks EN or VI button
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as Language);
  };


  return (
    <div className="app">
      {/* ========== NAVBAR ========== */}
      {/* Fixed header with navigation and language switcher */}
      <Navbar 
        content={currentContent} 
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      {/* ========== PAGE SECTIONS ========== */}
      {/* Each section displays content based on current language */}
      <Hero content={currentContent} language={language} />
      <TrustSection content={currentContent} />
      <ServicesPreview content={currentContent} />
      <GalleryPreview 
        content={currentContent}
        images={galleryImages}
        language={language}
      />
      <WhyChooseUs content={currentContent} />
      <Testimonials content={currentContent} />
      <CTA content={currentContent} />
      <Contact content={currentContent} />
      <Footer content={currentContent} />
    </div>
  );
}