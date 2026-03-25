import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import './Contact.css';

interface ContactProps {
  content: any;
}

export const Contact: React.FC<ContactProps> = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert(content.contact.successMessage || 'Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">{content.contact.title}</h2>
          <p className="contact-subtitle">{content.contact.subtitle}</p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-image-wrapper">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1587560699334-bea93391dcef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXMlMjBvZmZpY2UlMjBkZXNrJTIwcGhvbmV8ZW58MXx8fHwxNzc0NDI5MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Contact Us"
                className="contact-image"
              />
              <div className="contact-image-overlay"></div>
            </div>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-detail-text">
                  <h3>{content.footer.contact.phoneLabel || 'Phone'}</h3>
                  <p>{content.footer.contact.phone}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-detail-text">
                  <h3>{content.footer.contact.emailLabel || 'Email'}</h3>
                  <p>{content.footer.contact.email}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-detail-text">
                  <h3>{content.footer.contact.addressLabel || 'Address'}</h3>
                  <p>{content.footer.contact.address}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div className="contact-detail-text">
                  <h3>{content.footer.contact.hoursLabel || 'Hours'}</h3>
                  <p>{content.footer.contact.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h3 className="form-title">{content.contact.formTitle}</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{content.contact.nameLabel}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={content.contact.namePlaceholder}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">{content.contact.emailLabel}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={content.contact.emailPlaceholder}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{content.contact.phoneLabel}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={content.contact.phonePlaceholder}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">{content.contact.serviceLabel}</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">{content.contact.servicePlaceholder}</option>
                  <option value="interior">{content.services.interior.title}</option>
                  <option value="exterior">{content.services.exterior.title}</option>
                  <option value="plastering">{content.services.plastering.title}</option>
                  <option value="commercial">{content.services.commercial.title}</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">{content.contact.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={content.contact.messagePlaceholder}
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                <Send size={20} />
                {content.contact.submitButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
