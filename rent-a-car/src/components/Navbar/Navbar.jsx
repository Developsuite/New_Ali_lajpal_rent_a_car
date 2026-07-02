import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'our-cars', label: 'Our Cars' },
  { id: 'our-services', label: 'Services' },
  { id: 'why-choose', label: 'Why Choose Us' },
  { id: 'our-reviews', label: 'Reviews' },
  { id: 'contact-us', label: 'Contact Us' },
  { id: 'about', label: 'About Us' },
  { id: 'driver', label: 'Driver' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'compare', label: 'Compare' },
  { id: 'shop', label: 'Shop' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (id) => {
    setActiveLink(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="container navbar__container">
        {/* Logo */}
        <a href="/#home" className="navbar__logo" onClick={() => handleNavClick('home')}>
          <img
            src="/imagess/Logo/2.png"
            alt="New Ali Lajpal Rent A Car"
            className="navbar__logo-img"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar__nav" role="navigation" aria-label="Main navigation">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.id === 'our-cars' ? '/cars' : `/#${link.id}`}
                  className={`navbar__link ${activeLink === link.id ? 'navbar__link--active' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <a href="https://wa.me/923057649991" target="_blank" rel="noopener noreferrer" className="btn btn-primary navbar__cta">
          WhatsApp Now
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className={`navbar__hamburger ${isMobileMenuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`navbar__mobile-overlay ${isMobileMenuOpen ? 'navbar__mobile-overlay--open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <nav aria-label="Mobile navigation">
          <ul className="navbar__mobile-links">
            {navLinks.map((link, index) => (
              <li key={link.id} style={{ animationDelay: `${index * 0.06}s` }}>
                <a
                  href={link.id === 'our-cars' ? '/cars' : `/#${link.id}`}
                  className={`navbar__mobile-link ${activeLink === link.id ? 'navbar__mobile-link--active' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/923057649991"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__mobile-cta navbar__mobile-cta--whatsapp"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            WhatsApp Now
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
