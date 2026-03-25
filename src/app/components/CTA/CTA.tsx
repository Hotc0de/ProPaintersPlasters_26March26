import React from 'react';
import { Phone } from 'lucide-react';
import './CTA.css';

interface CTAProps {
  content: any;
}

export const CTA: React.FC<CTAProps> = ({ content }) => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-overlay"></div>
      <div className="cta-container">
        <h2 className="cta-title">{content.cta.title}</h2>
        <p className="cta-subtitle">{content.cta.subtitle}</p>
        <div className="cta-buttons">
          <button className="btn btn-cta-primary">{content.cta.button}</button>
          <a href="tel:5551234567" className="btn btn-cta-secondary">
            <Phone size={20} />
            {content.cta.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
