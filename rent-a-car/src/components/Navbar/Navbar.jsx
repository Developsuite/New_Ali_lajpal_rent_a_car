import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'our-cars', label: 'Our Cars', path: '/cars-fleet-for-rent' },
  { id: 'our-services', label: 'Services', path: '/#our-services', targetId: 'our-services' },
  { id: 'why-choose', label: 'Why Choose Us', path: '/#why-choose', targetId: 'why-choose' },
  { id: 'blog', label: 'Blog', path: '/blog' },
  { id: 'our-reviews', label: 'Reviews', path: '/#our-reviews', targetId: 'our-reviews' },
  { id: 'contact-us', label: 'Contact Us', path: '/#contact-us', targetId: 'contact-us' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollSpy on homepage to highlight current section
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = ['contact-us', 'our-reviews', 'our-services', 'why-choose', 'home'];
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 140;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    handleScrollSpy();
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, link) => {
    setIsMobileMenuOpen(false);

    if (link.id === 'home') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (location.hash) {
          window.history.pushState(null, '', '/');
        }
      }
      return;
    }

    if (link.targetId && location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(link.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${link.targetId}`);
        setActiveSection(link.targetId);
      }
    }
  };

  const isLinkActive = (link) => {
    if (location.pathname === '/blog') {
      return link.id === 'blog';
    }
    if (location.pathname === '/cars-fleet-for-rent' || location.pathname.startsWith('/car/')) {
      return link.id === 'our-cars';
    }
    if (location.pathname === '/') {
      if (location.hash) {
        const currentHash = location.hash.replace('#', '');
        if (link.targetId === currentHash || link.id === currentHash) return true;
      }
      if (link.id === 'home' && activeSection === 'home' && !location.hash) return true;
      if (link.targetId === activeSection) return true;
    }
    return false;
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="container navbar__container">
        {/* Logo */}
        <Link
          to="/"
          className="navbar__logo"
          onClick={(e) => handleNavClick(e, { id: 'home', path: '/' })}
          aria-label="New Ali Lajpal Rent A Car Home"
        >
          <img
            src="/imagess/Logo/2.png"
            alt="New Ali Lajpal Rent A Car"
            className="navbar__logo-img"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__nav" role="navigation" aria-label="Main navigation">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className={`navbar__link ${isLinkActive(link) ? 'navbar__link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.label}
                </Link>
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
                <Link
                  to={link.path}
                  className={`navbar__mobile-link ${isLinkActive(link) ? 'navbar__mobile-link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.label}
                </Link>
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
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            WhatsApp Now
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
