import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import './GalleryPreview.css';

// Import actual project images
import plasterWork1 from '../../../assets/ffa10551472a65dc94286c2ceec6c4214a233ce2.png';
import plasterWork2 from '../../../assets/6d4385aaf66c141347a8c9f237673526b0c4f556.png';
import plasterWork3 from '../../../assets/b629e329fd605fb2fdf01b97646a762c2571ee17.png';
import plasterWork4 from '../../../assets/504005c467365a4772579548d6c7b51a91447090.png';
import plasterWork5 from '../../../assets/2b43c51916cf9c985a597552bcb6862750e2dce2.png';
import plasterWork6 from '../../../assets/c72abdf1a0e0e24f734de4e561ede42dd45121c1.png';

interface GalleryPreviewProps {
  content: any;
}

export const GalleryPreview: React.FC<GalleryPreviewProps> = ({ content }) => {
  // Gallery images - Real plastering work photos
  const galleryImages = [
    {
      url: plasterWork1,
      alt: 'Professional Interior Plastering - Ceiling and Wall Work',
      title: 'Interior Plastering',
      subtitle: 'Ceiling & wall finishing'
    },
    {
      url: plasterWork2,
      alt: 'Interior Plastering - Wall Preparation and Finishing',
      title: 'Wall Preparation',
      subtitle: 'Smooth finish & ready for paint'
    },
    {
      url: plasterWork3,
      alt: 'Ceiling Plastering with Decorative Molding',
      title: 'Ceiling Plastering',
      subtitle: 'Decorative molding work'
    },
    {
      url: plasterWork4,
      alt: 'Professional Ceiling and Wall Plastering Work',
      title: 'Complete Room',
      subtitle: 'Professional finishing'
    },
    {
      url: plasterWork5,
      alt: 'Complete Room Plastering - Walls and Ceiling',
      title: 'Room Renovation',
      subtitle: 'Walls & ceiling plastering'
    },
    {
      url: plasterWork6,
      alt: 'Interior Plastering - Professional Finish',
      title: 'Premium Finish',
      subtitle: 'High-quality workmanship'
    }
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">{content.gallery.title}</h2>
          <p className="gallery-subtitle">{content.gallery.subtitle}</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-title">{image.title}</div>
                <div className="gallery-overlay-subtitle">{image.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <button className="btn-outline">{content.gallery.viewAll}</button>
        </div>
      </div>
    </section>
  );
};