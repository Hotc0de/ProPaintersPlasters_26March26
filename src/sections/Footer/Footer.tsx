import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  content: any;
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <span className="footer-logo-icon">🎨</span>
              <span className="footer-logo-text">{content.navigation.logo}</span>
            </div>
            <p className="footer-tagline">{content.footer.tagline}</p>
            <div className="footer-social">
              <span className="footer-social-title">Follow Us</span>
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
            </div>
          </div>

          {/* Footer Sections - Quick Links and Services */}
          {content.footer.sections && content.footer.sections.map((section: any, index: number) => (
            <div className="footer-column" key={index}>
              <h3 className="footer-title">{section.title}</h3>
              <ul className="footer-links">
                {section.links && section.links.map((link: any, linkIndex: number) => (
                  <li key={linkIndex}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="footer-column">
            <h3 className="footer-title">{content.footer.contact.title}</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <Phone size={18} />
                <a href={`tel:${content.footer.contact.phone.replace(/[^0-9]/g, '')}`}>
                  {content.footer.contact.phone}
                </a>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <a href={`mailto:${content.footer.contact.email}`}>
                  {content.footer.contact.email}
                </a>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>{content.footer.contact.address}</span>
              </div>
              <div className="contact-hours">
                {content.footer.contact.hours}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
