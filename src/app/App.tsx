import React, { useState } from 'react';
import { content } from './content/content';
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
  // Language state management
  const [language, setLanguage] = useState<'en' | 'vi' | 'zh'>('en');

  // Get current language content
  const currentContent = content[language];

  // Handle language change
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang as 'en' | 'vi' | 'zh');
  };

  return (
    <div className="app">
      <Navbar 
        content={currentContent} 
        language={language}
        onLanguageChange={handleLanguageChange}
      />
      <Hero content={currentContent} />
      <TrustSection content={currentContent} />
      <ServicesPreview content={currentContent} />
      <GalleryPreview content={currentContent} />
      <WhyChooseUs content={currentContent} />
      <Testimonials content={currentContent} />
      <CTA content={currentContent} />
      <Contact content={currentContent} />
      <Footer content={currentContent} />
    </div>
  );
}