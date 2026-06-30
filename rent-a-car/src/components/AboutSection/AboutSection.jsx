import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-section__wrapper">
          
          {/* LEFT COLUMN: IMAGE WITH BADGE */}
          <div className="about-section__image-col">
            <div className="about-section__image-container">
              {/* The White Wrapper creates the cutout illusion */}
              <div className="about-section__badge-wrapper">
                <div className="about-section__badge">
                  <div className="about-section__badge-number">1000+</div>
                  <div className="about-section__badge-text">Car Rent Already</div>
                </div>
              </div>
              
              <img 
                src="/imagess/newcontact.png" 
                alt="Car Rental Experience" 
                className="about-section__img" 
              />
            </div>
          </div>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="about-section__content-col">
            <div className="about-section__content-top">
              <h5 className="about-section__overline">Contact Us</h5>
              
              <h2 className="about-section__title">
                Get in touch with our <span className="highlight-text">team</span> <br />
                today
              </h2>
              
              <p className="about-section__desc">
                Contact Ali Lajpal Rent A Car for bookings, inquiries, or any assistance you might need. We are available 24/7 to ensure your journey is seamless and comfortable.
              </p>
            </div>
            
            <div className="about-section__content-bottom">
              <div className="about-section__features-grid">
              {/* Feature 1: Contact */}
              <div className="about-feature">
                <div className="about-feature__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D42020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <div className="about-feature__content">
                  <h4>Contact Us</h4>
                  <p>+92 300 1234567 <br/> info@alilajpal.com</p>
                </div>
              </div>

              {/* Feature 2: Location */}
              <div className="about-feature">
                <div className="about-feature__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D42020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="about-feature__content">
                  <h4>Our Location</h4>
                  <p>Lahore, Pakistan <br/> Main Boulevard</p>
                </div>
              </div>
            </div>

            <div className="about-section__actions">
              <a href="https://wa.me/923057649991" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a href="tel:+923057649991" className="btn-call">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call Now
              </a>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
