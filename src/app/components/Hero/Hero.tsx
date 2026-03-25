import React from 'react';
import { Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import './Hero.css';

interface HeroProps {
  content: any;
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="hero-section" id="home">
      {/* Background Image */}
      <div className="hero-background">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1770677350521-d5fdcbd74367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMHBhaW50aW5nJTIwbW9kZXJuJTIwaG9tZXxlbnwxfHx8fDE3NzQ0MzAzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury Interior Painting"
          className="hero-background-image"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Trust Badge */}
          <div className="hero-trust-badge">
            <div className="hero-stars">
              <Star fill="#d4af37" strokeWidth={0} size={18} />
              <Star fill="#d4af37" strokeWidth={0} size={18} />
              <Star fill="#d4af37" strokeWidth={0} size={18} />
              <Star fill="#d4af37" strokeWidth={0} size={18} />
              <Star fill="#d4af37" strokeWidth={0} size={18} />
            </div>
            <span className="hero-trust-text">
              {content.hero.trustBadge || "Trusted by 1,000+ homeowners"}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            {content.hero.titlePart1 || "Professional "}
            <span className="hero-highlight">
              {content.hero.titleHighlight || "Painting & Plastering"}
            </span>
            {content.hero.titlePart2 || " Services"}
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            {content.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-buttons">
            <button className="hero-btn-primary">
              {content.hero.ctaPrimary}
            </button>
            <button className="hero-btn-secondary">
              {content.hero.ctaSecondary}
            </button>
          </div>

          {/* Stats Row */}
          <div className="hero-stats">
            <div className="hero-stat-item">
              <div className="hero-stat-number">
                {content.hero.stat1Number || "10+"}
              </div>
              <div className="hero-stat-label">
                {content.hero.stat1Label || "Years Experience"}
              </div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">
                {content.hero.stat2Number || "1000+"}
              </div>
              <div className="hero-stat-label">
                {content.hero.stat2Label || "Homes Completed"}
              </div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">
                {content.hero.stat3Number || "100%"}
              </div>
              <div className="hero-stat-label">
                {content.hero.stat3Label || "Satisfaction"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
