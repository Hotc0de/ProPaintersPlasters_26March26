/**
 * CTA (CALL TO ACTION) SECTION
 * 
 * Displays a prominent call-to-action with quote button and phone number.
 * Content comes from src/content/site-content.ts
 */

import React from 'react';
import { Phone } from 'lucide-react';
import { businessInfo } from '../../../content';
import './CTA.css';

interface CTAProps {
  content: any;
}

export const CTA: React.FC<CTAProps> = ({ content }) => {
  // Get phone number from centralized business info
  const phoneNumber = businessInfo.phone;
  const phoneLink = `tel:${phoneNumber.replace(/[^\d]/g, '')}`; // Remove non-digits for tel: link

  return (
    <section className="cta-section" id="contact">
      <div className="cta-overlay"></div>
      <div className="cta-container">
        <h2 className="cta-title">{content.cta.title}</h2>
        <p className="cta-subtitle">{content.cta.subtitle}</p>
        <div className="cta-buttons">
          <button className="btn btn-cta-primary">{content.cta.buttonText}</button>
          <a href={phoneLink} className="btn btn-cta-secondary">
            <Phone size={20} />
            {content.cta.phoneText}
          </a>
        </div>
      </div>
    </section>
  );
};
