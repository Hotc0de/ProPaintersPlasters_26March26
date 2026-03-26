/**
 * CONTACT SECTION
 * 
 * Displays contact information and a contact form.
 * Content comes from src/content/site-content.ts
 * Phone, email, address from src/content/business-info.ts
 */

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { ImageWithFallback } from '../../components/ImageWithFallback';
import { contactImageConfig } from '../../content/images';
import './Contact.css';

interface ContactProps {
  content: any;
}

export const Contact: React.FC<ContactProps> = ({ content }) => {
  const [formData, setFormData] = useState({
    fullName: '',
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
    setFormData({ fullName: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const fieldsById = (content.contact.fields || []).reduce((acc: Record<string, any>, field: any) => {
    acc[field.id] = field;
    return acc;
  }, {});

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
                src={contactImageConfig.url}
                alt={contactImageConfig.alt.en}
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
                  <h3>{content.contact.detailLabels.phone}</h3>
                  <p>{content.footer.contact.phone}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-detail-text">
                  <h3>{content.contact.detailLabels.email}</h3>
                  <p>{content.footer.contact.email}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-detail-text">
                  <h3>{content.contact.detailLabels.address}</h3>
                  <p>{content.footer.contact.address}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div className="contact-detail-text">
                  <h3>{content.contact.detailLabels.hours}</h3>
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
                <label htmlFor="fullName">{fieldsById.fullName?.label}</label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder={fieldsById.fullName?.placeholder}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">{fieldsById.email?.label}</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={fieldsById.email?.placeholder}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{fieldsById.phone?.label}</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={fieldsById.phone?.placeholder}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">{fieldsById.service?.label}</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">{fieldsById.service?.placeholder}</option>
                  {content.services && content.services.services && content.services.services.map((service: any) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">{fieldsById.message?.label}</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={fieldsById.message?.placeholder}
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
