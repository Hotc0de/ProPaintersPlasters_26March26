import React from 'react';
import { Star, Award, Users, ShieldCheck } from 'lucide-react';
import { ImageWithFallback } from '../../components/ImageWithFallback';
import './WhyChooseUs.css';

interface WhyChooseUsProps {
  content: any;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ content }) => {
  const icons = [<Star size={48} />, <Award size={48} />, <Users size={48} />, <ShieldCheck size={48} />];
  const reasons = (content.whyChooseUs.items || []).map((item: any, index: number) => ({
    icon: icons[index] || <Star size={48} />,
    title: item.title,
    description: item.description,
    bgImage: 'https://images.unsplash.com/photo-1643968704781-df3b260df6a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBlcmllbmNlZCUyMHByb2Zlc3Npb25hbCUyMGNyYWZ0c21hbiUyMHdvcmtpbmd8ZW58MXx8fHwxNzc0NDI4NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  }));

  return (
    <section className="why-choose-section" id="about">
      <div className="why-choose-container">
        <div className="why-choose-header">
          <h2 className="why-choose-title">{content.whyChooseUs.title}</h2>
          <p className="why-choose-subtitle">{content.whyChooseUs.subtitle}</p>
        </div>

        <div className="why-choose-grid">
          {reasons.map((reason: any, index: number) => (
            <div key={index} className="why-choose-card">
              <div className="why-choose-card-bg">
                <ImageWithFallback
                  src={reason.bgImage}
                  alt={reason.title}
                  className="why-choose-bg-image"
                />
              </div>
              <div className="why-choose-card-overlay"></div>
              <div className="why-choose-card-content">
                <div className="why-choose-icon">{reason.icon}</div>
                <h3 className="why-choose-card-title">{reason.title}</h3>
                <p className="why-choose-description">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};