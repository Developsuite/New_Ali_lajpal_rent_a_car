import React from 'react';
import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-section__wrapper">
          {/* Decorative shapes based on Figma */}
          <div className="cta-shape cta-shape-round"></div>
          <div className="cta-shape cta-shape-line">
            <svg viewBox="0 0 184 95" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 94 C 50 10, 130 10, 183 94" stroke="white" strokeWidth="2" strokeDasharray="6 6" opacity="0.3"/>
            </svg>
          </div>

          <div className="cta-section__content">
            <h2 className="cta-section__title">
              If you have any questions<br/>
              Please Call.
            </h2>
          </div>
          
          <div className="cta-section__action">
            <a href="tel:+923057649991" className="cta-section__link">
              <div className="cta-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF3600">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>
              <span className="cta-phone">+92 305 764 9991</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
