import React from 'react';
import { Award, CheckCircle, Home, Shield } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import './TrustSection.css';

interface TrustSectionProps {
  content: any;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ content }) => {
  const trustCards = [
    {
      icon: <CheckCircle size={40} />,
      number: content.trust.projects.number,
      label: content.trust.projects.label,
      bgImage: 'https://images.unsplash.com/photo-1707833935432-65d47270334e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wbGV0ZWQlMjBwcm9qZWN0JTIwY29uc3RydWN0aW9uJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NzQ0Mjg3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: <Home size={40} />,
      number: content.trust.types.number,
      label: content.trust.types.label,
      bgImage: 'https://images.unsplash.com/photo-1693131399493-3cbf6ddf23dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWZmZXJlbnQlMjBwcm9wZXJ0eSUyMHR5cGVzJTIwaG91c2VzfGVufDF8fHx8MTc3NDQyODc0M3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: <Award size={40} />,
      number: content.trust.award.number,
      label: content.trust.award.label,
      bgImage: 'https://images.unsplash.com/photo-1759688983881-0742f416a4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhd2FyZCUyMHdpbm5pbmclMjBleGNlbGxlbmNlJTIwdHJvcGh5fGVufDF8fHx8MTc3NDQyODc0NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: <Shield size={40} />,
      number: content.trust.guarantee.number,
      label: content.trust.guarantee.label,
      bgImage: 'https://images.unsplash.com/photo-1652148555073-4b1d2ecd664c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWFyYW50ZWUlMjBzaGllbGQlMjBwcm90ZWN0aW9uJTIwcXVhbGl0eXxlbnwxfHx8fDE3NzQ0Mjg3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section className="trust-section">
      <div className="trust-container">
        <h2 className="trust-title">{content.trust.title}</h2>
        
        <div className="trust-grid">
          {trustCards.map((card, index) => (
            <div key={index} className="trust-card">
              <div className="trust-card-bg">
                <ImageWithFallback
                  src={card.bgImage}
                  alt={card.label}
                  className="trust-bg-image"
                />
              </div>
              <div className="trust-card-overlay"></div>
              <div className="trust-card-content">
                <div className="trust-icon">{card.icon}</div>
                <div className="trust-number">{card.number}</div>
                <div className="trust-label">{card.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};