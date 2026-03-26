import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

interface TestimonialsProps {
  content: any;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ content }) => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">{content.testimonials.title}</h2>
          <p className="testimonials-subtitle">{content.testimonials.subtitle}</p>
        </div>

        <div className="testimonials-grid">
          {content.testimonials.reviews.map((review: any, index: number) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#ffc107" color="#ffc107" />
                ))}
              </div>
              <p className="testimonial-text">"{review.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {review.name.charAt(0)}
                </div>
                <div className="author-info">
                  <div className="author-name">{review.name}</div>
                  <div className="author-role">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
