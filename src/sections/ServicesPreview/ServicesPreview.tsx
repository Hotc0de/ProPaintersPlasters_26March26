import React from 'react';
import { Paintbrush, Home, Hammer, Building2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/ImageWithFallback';
import './ServicesPreview.css';

interface ServicesPreviewProps {
  content: any;
}

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({ content }) => {
  const icons = [<Paintbrush size={36} />, <Home size={36} />, <Hammer size={36} />, <Building2 size={36} />];
  const services = (content.services.services || []).map((service: any, index: number) => ({
    icon: icons[index] || <Paintbrush size={36} />,
    title: service.title,
    description: service.description,
    bgImage: 'https://images.unsplash.com/photo-1770677350521-d5fdcbd74367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMHBhaW50aW5nJTIwbW9kZXJuJTIwaG9tZXxlbnwxfHx8fDE3NzQ0MzAzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }));

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">{content.services.title}</h2>
          <p className="services-subtitle">{content.services.subtitle}</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-background">
                <ImageWithFallback
                  src={service.bgImage}
                  alt={service.title}
                  className="service-bg-image"
                />
              </div>
              <div className="service-overlay"></div>
              <div className="service-content">
                <div>
                  <div className="service-icon-wrapper">
                    <div className="service-icon">{service.icon}</div>
                  </div>
                  <div className="service-text">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
                <div className="service-arrow">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
