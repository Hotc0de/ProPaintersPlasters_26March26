import React from 'react';
import { Award, CheckCircle, Home, Shield } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import './TrustSection.css';

interface TrustSectionProps {
  content: any;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ content }) => {
  const icons = [<CheckCircle size={40} />, <Home size={40} />, <Award size={40} />, <Shield size={40} />];

  const trustCards = (content.trust.items || []).map((item: any, index: number) => ({
    icon: icons[index] || <CheckCircle size={40} />,
    number: item.number,
    label: item.label,
    bgImage: 'https://images.unsplash.com/photo-1707833935432-65d47270334e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wbGV0ZWQlMjBwcm9qZWN0JTIwY29uc3RydWN0aW9uJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NzQ0Mjg3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }));

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