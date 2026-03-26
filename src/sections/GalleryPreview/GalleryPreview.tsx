import React from 'react';
import { ImageWithFallback } from '../../components/ImageWithFallback';
import './GalleryPreview.css';

interface GalleryPreviewProps {
  content: any;
  images?: any[];
  language?: string;
}

export const GalleryPreview: React.FC<GalleryPreviewProps> = ({ content, images = [], language = 'en' }) => {
  const getAltText = (alt: any) => {
    return typeof alt === 'string' ? alt : (alt || {})[language] || alt?.en || '';
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">{content.gallery.title}</h2>
          <p className="gallery-subtitle">{content.gallery.subtitle}</p>
        </div>

        <div className="gallery-grid">
          {images && images.length > 0 ? images.map((image, index) => (
            <div key={image.id || index} className="gallery-item">
              <ImageWithFallback
                src={image.url}
                alt={getAltText(image.alt)}
                className="gallery-image"
              />
              {image.title && (
                <div className="gallery-overlay">
                  <div className="gallery-overlay-title">{image.title}</div>
                  {image.subtitle && <div className="gallery-overlay-subtitle">{image.subtitle}</div>}
                </div>
              )}
            </div>
          )) : (
            <p>No gallery images available</p>
          )}
        </div>

        <div className="gallery-cta">
          <button className="btn-outline">{content.gallery.viewAll}</button>
        </div>
      </div>
    </section>
  );
};