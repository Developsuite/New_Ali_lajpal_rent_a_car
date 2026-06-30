import { useState } from 'react';
import './OurServices.css';

const servicesData = [
  {
    id: 1,
    title: 'City to City Drop',
    tagline: 'One-Way Fare. Zero Return Fee.',
    description: (
      <>Travel between cities hassle-free with <strong style={{ color: '#D42020' }}>New Ali Lajpal</strong>. One-way fare only no hidden return charges, just smooth rides to your destination.</>
    ),
    image: '/imagess/services/city_drop.png',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Airport Pickup & Drop',
    tagline: 'Never Miss a Flight.',
    description:
      'Our professional drivers ensure timely airport transfers with comfort and reliability, every single time.',
    image: '/imagess/services/airport_travels.png',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Corporate Travel',
    tagline: 'Professional. Punctual. Premium.',
    description:
      'Impress clients and stay on schedule with our punctual, professional transport for meetings, conferences, and official tours.',
    image: '/imagess/services/corporate_travels.png',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'City Tours',
    tagline: 'Explore. Discover. Enjoy.',
    description:
      'From heritage sites to scenic routes explore the best spots in town with a dedicated ride in total comfort.',
    image: '/imagess/services/city_tours.png',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Wedding & Events',
    tagline: 'Arrive in Style.',
    description:
      'Make your special day even more memorable. Choose from our elegant fleet for weddings, celebrations, and premium occasions.',
    image: '/imagess/services/weddng_travels.png',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Family Travel',
    tagline: 'Safe Rides for Your Loved Ones.',
    description:
      'Spacious, clean, and comfortable vehicles perfect for family trips, every journey with your loved ones is safe and enjoyable.',
    image: '/imagess/services/FAMILY_travels.png',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor" />
      </svg>
    ),
  },
];

function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];

  return (
    <section className="our-services" id="our-services">
      <div className="our-services__container container">
        {/* Header */}
        <div className="our-services__header">
          <h2 className="our-services__title">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="our-services__subtitle">
            From city drops to weddings <strong style={{ color: '#D42020' }}>New Ali Lajpal</strong> delivers comfort,
            safety, and on-time pickups across every ride.
          </p>
        </div>

        {/* Main Layout */}
        <div className="our-services__layout">
          <div className="our-services__showcase">
            <div className="our-services__showcase-image-card">
              <div className="our-services__showcase-image-inner">
                {servicesData.map((service, index) => (
                  <img
                    key={service.id}
                    src={service.image}
                    alt={service.title}
                    className={`our-services__showcase-img ${
                      index === activeIndex ? 'our-services__showcase-img--active' : ''
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="our-services__showcase-content-wrapper">
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  className={`our-services__showcase-content ${
                    index === activeIndex ? 'our-services__showcase-content--active' : ''
                  }`}
                >
                  <span className="our-services__showcase-tagline">
                    {service.tagline}
                  </span>
                  <h3 className="our-services__showcase-title">
                    {service.title}
                  </h3>
                  <p className="our-services__showcase-desc">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Service List */}
          <div className="our-services__list">
            {servicesData.map((service, index) => (
              <button
                className={`our-services__item ${
                  index === activeIndex ? 'our-services__item--active' : ''
                }`}
                key={service.id}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="our-services__item-icon">{service.icon}</div>
                <div className="our-services__item-text">
                  <span className="our-services__item-number">
                    0{service.id}
                  </span>
                  <h3 className="our-services__item-title">{service.title}</h3>
                </div>
                <div className="our-services__item-arrow">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
