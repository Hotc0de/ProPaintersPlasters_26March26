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
              <span className="footer-logo-text">{content.nav.logo}</span>
            </div>
            <p className="footer-tagline">{content.footer.tagline}</p>
            <div className="footer-social">
              <span className="footer-social-title">{content.footer.social.title}</span>
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

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-title">{content.footer.quickLinks.title}</h3>
            <ul className="footer-links">
              <li><a href="#home">{content.footer.quickLinks.home}</a></li>
              <li><a href="#services">{content.footer.quickLinks.services}</a></li>
              <li><a href="#gallery">{content.footer.quickLinks.gallery}</a></li>
              <li><a href="#about">{content.footer.quickLinks.about}</a></li>
              <li><a href="#contact">{content.footer.quickLinks.contact}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3 className="footer-title">{content.footer.services.title}</h3>
            <ul className="footer-links">
              <li><a href="#services">{content.footer.services.interior}</a></li>
              <li><a href="#services">{content.footer.services.exterior}</a></li>
              <li><a href="#services">{content.footer.services.plastering}</a></li>
              <li><a href="#services">{content.footer.services.commercial}</a></li>
            </ul>
          </div>

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
