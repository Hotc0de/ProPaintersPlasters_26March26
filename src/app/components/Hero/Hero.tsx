import React from 'react';
import { Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { heroImageConfig } from '../../../content/images';
import './Hero.css';

interface HeroProps {
  content: any;
  language?: string;
}

export const Hero: React.FC<HeroProps> = ({ content, language = 'en' }) => {
  const heroAlt = typeof heroImageConfig.alt === 'string' ? heroImageConfig.alt : (heroImageConfig.alt as any)[language] || heroImageConfig.alt.en;
  
  return (
    <section className="hero-section" id="home">
      {/* Background Image */}
      <div className="hero-background">
        <ImageWithFallback
          src={heroImageConfig.url}
          alt={heroAlt}
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
            {content.hero.title || "Professional Painting & Plastering You Can Trust"}
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
            {content.hero.stats && content.hero.stats.map((stat: any, index: number) => (
              <div key={index} className="hero-stat-item">
                <div className="hero-stat-number">
                  {stat.number}
                </div>
                <div className="hero-stat-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
