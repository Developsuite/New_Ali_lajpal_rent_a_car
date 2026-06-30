import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Full Background Image — no overlay, no fade */}
      <div className="hero__bg">
        <picture>
          <source media="(max-width: 768px)" srcSet="/imagess/hero_section/mobile_hero1.png" />
          <img
            src="/imagess/hero_section/car1.png"
            alt="Premium red car available for rent at New Ali Lajpal"
            className="hero__bg-img"
          />
        </picture>
      </div>

      {/* Positioned elements on top of the red bars */}
      <div className="hero__bar-content">
        {/* Left Bar — WhatsApp Now CTA */}
        <div className="hero__bar hero__bar--left">
          <a href="https://wa.me/923057649991" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg hero__bar-btn">
            <svg className="hero__bar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            WhatsApp Now
          </a>
        </div>

        {/* Middle Bar — Company Name */}
        <div className="hero__bar hero__bar--center">
          <h1 className="hero__bar-title">
            New Ali Lajpal
            <span className="hero__bar-subtitle">Rent A Car</span>
          </h1>
          <p className="hero__bar-description">
            New Fast Rent A Cars Service provides comfortable rides for families, corporate travel, tours, airport pickup/drop and especially City to City Drop where you pay one-way charges only.
          </p>

          {/* Mobile Only Service Bullet Points */}
          <ul className="hero__mobile-bullets">
            <li><span className="bullet-icon">✔</span> Flexible Daily & Monthly Rentals</li>
            <li><span className="bullet-icon">✔</span> Affordable City-to-City Drops</li>
            <li><span className="bullet-icon">✔</span> Wide Range of Premium Vehicles</li>
          </ul>
        </div>

        {/* Right Bar — Call Us Now CTA */}
        <div className="hero__bar hero__bar--right">
          <a href="tel:+920000000000" className="btn btn-primary btn-lg hero__bar-btn">
            <svg className="hero__bar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Us Now
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
