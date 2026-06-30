import React from 'react';
import './RoutesSection.css';

const RoutesSection = () => {
  return (
    <section className="routes-section" id="routes">
      {/* Background Monuments Image at the bottom of the section */}
      <div className="routes-section__bg" style={{ backgroundImage: "url('/imagess/pakistan_monuments_bg.png')" }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="routes-section__header">
          <h4 className="routes-section__overline">Nationwide Coverage</h4>
          <h2 className="routes-section__title">
            City to City <span className="text-gradient">Routes Network</span>
          </h2>
          <p className="routes-section__desc">
            Our main hub is <strong>Lahore</strong> with direct city connections across Pakistan.
          </p>
        </div>

        <div className="routes-section__content">
          {/* LEFT: NETWORK DIAGRAM */}
          <div className="routes-section__network-col">
            <div className="network-diagram">
              {/* SVG lines connecting the center hub to the surrounding nodes */}
              <svg className="network-lines" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                <line x1="200" y1="200" x2="40" y2="40" className="network-line" />
                <line x1="200" y1="200" x2="360" y2="40" className="network-line" />
                <line x1="200" y1="200" x2="20" y2="280" className="network-line" />
                <line x1="200" y1="200" x2="380" y2="280" className="network-line" />
                <line x1="200" y1="200" x2="200" y2="380" className="network-line" />
              </svg>

              {/* Nodes representing the radial network */}
              <div className="network-node node-1">Peshawar</div>
              <div className="network-node node-2">Islamabad</div>
              
              <div className="network-node node-center">
                <span className="node-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </span>
                Lahore (Hub)
              </div>
              
              <div className="network-node node-3">Faisalabad</div>
              <div className="network-node node-4">Multan</div>
              <div className="network-node node-5">Karachi</div>
            </div>
          </div>

          {/* RIGHT: GOOGLE MAP */}
          <div className="routes-section__map-col">
            <div className="map-wrapper">
              <iframe
                src="https://maps.google.com/maps?q=Talwar%20Chowk,%20Bahria%20Town,%20Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Office Location Map"
              ></iframe>
              <div className="map-badge">
                <span className="map-badge-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#D42020">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </span>
                <div className="map-badge-text">
                  <strong>Ali Lajpal Rent A Car</strong>
                  <span>Lahore Office</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoutesSection;
