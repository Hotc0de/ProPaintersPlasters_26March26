import React from 'react';
import { Star, Award, Users, ShieldCheck } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import './WhyChooseUs.css';

interface WhyChooseUsProps {
  content: any;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ content }) => {
  const reasons = [
    {
      icon: <Star size={48} />,
      title: content.whyChoose.experience.title,
      description: content.whyChoose.experience.description,
      bgImage: 'https://images.unsplash.com/photo-1643968704781-df3b260df6a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBlcmllbmNlZCUyMHByb2Zlc3Npb25hbCUyMGNyYWZ0c21hbiUyMHdvcmtpbmd8ZW58MXx8fHwxNzc0NDI4NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: <Award size={48} />,
      title: content.whyChoose.quality.title,
      description: content.whyChoose.quality.description,
      bgImage: 'https://images.unsplash.com/photo-1659456553707-14712bb27032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcXVhbGl0eSUyMG1hdGVyaWFscyUyMHRvb2xzfGVufDF8fHx8MTc3NDQyODU1NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: <Users size={48} />,
      title: content.whyChoose.team.title,
      description: content.whyChoose.team.description,
      bgImage: 'https://images.unsplash.com/photo-1760009436767-d154e930e55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwY29uc3RydWN0aW9uJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzQ0Mjg1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: <ShieldCheck size={48} />,
      title: content.whyChoose.guarantee.title,
      description: content.whyChoose.guarantee.description,
      bgImage: 'https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwZ3VhcmFudGVlJTIwY2VydGlmaWNhdGUlMjBiYWRnZXxlbnwxfHx8fDE3NzQ0Mjg1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section className="why-choose-section" id="about">
      <div className="why-choose-container">
        <div className="why-choose-header">
          <h2 className="why-choose-title">{content.whyChoose.title}</h2>
          <p className="why-choose-subtitle">{content.whyChoose.subtitle}</p>
        </div>

        <div className="why-choose-grid">
          {reasons.map((reason, index) => (
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