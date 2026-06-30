import React from 'react';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer__bg-image"></div>
      <div className="container">
        <div className="main-footer__wrapper">
          
          {/* Column 1: About & Subscribe */}
          <div className="main-footer__col main-footer__col--about">
            <div className="main-footer__logo">
              <img src="/imagess/Logo/2.png" alt="New Ali Lajpal Logo" className="footer-logo-img" />
              <span className="logo-text">NEW ALI LAJPAL RENT A CAR</span>
            </div>
            <p className="main-footer__desc">
              Don't miss out on the latest updates, exclusive offers, and insider news. Join our community and get everything
            </p>
            <form className="main-footer__form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="main-footer__subscribe-btn">Subscribe</button>
            </form>
          </div>

          {/* Column 2: Useful Links */}
          <div className="main-footer__col main-footer__col--links">
            <h3 className="main-footer__title">Useful Links</h3>
            <ul className="main-footer__list">
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#driver">Driver</a></li>
              <li><a href="/#pricing">Pricing</a></li>
              <li><a href="/#compare">Compare</a></li>
              <li><a href="/#shop">Shop</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="main-footer__col main-footer__col--contact">
            <h3 className="main-footer__title">Contact Info</h3>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="contact-text">
                <strong>Call Us Now</strong>
                <a href="tel:+923057649991">+92 305 764 9991</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-text">
                <strong>Send US Email</strong>
                <a href="mailto:saqibraza8154@gmail.com">saqibraza8154@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact-text">
                <strong>Our Location</strong>
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
