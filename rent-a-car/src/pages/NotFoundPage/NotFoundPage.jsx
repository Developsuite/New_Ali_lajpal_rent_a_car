import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <main className="not-found-page">
      <SEO
        title="404 Page Not Found | New Ali Lajpal Rent A Car"
        description="The requested page does not exist. Explore our car rental fleet, blog, or return to homepage."
        keywords="404, page not found, New Ali Lajpal Rent A Car"
      />
      <div className="not-found__container">
        <span className="not-found__badge">Error 404</span>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__description">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="not-found__nav-box">
          <h2 className="not-found__nav-heading">Useful Navigation</h2>
          <ul className="not-found__nav-list">
            <li>
              <strong>Whatsapp Now:</strong>{' '}
              <a href="https://wa.me/923057649991?text=Hello%2C%20I%20need%20a%20rental%20car">Click here</a>
            </li>
            <li>
              <strong>Website:</strong>{' '}
              <a href="https://newalilajpal.com/">https://newalilajpal.com/</a>
            </li>
            <li>
              <strong>Blog:</strong>{' '}
              <a href="https://newalilajpal.com/blog">https://newalilajpal.com/blog</a>
            </li>
            <li>
              <strong>Car Fleet:</strong>{' '}
              <a href="https://newalilajpal.com/cars-fleet-for-rent">https://newalilajpal.com/cars-fleet-for-rent</a>
            </li>
          </ul>
        </div>

        <div className="not-found__actions">
          <Link to="/" className="not-found__btn not-found__btn--primary">
            Visit Homepage
          </Link>
          <Link to="/cars-fleet-for-rent" className="not-found__btn not-found__btn--secondary">
            View Car Fleet
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
