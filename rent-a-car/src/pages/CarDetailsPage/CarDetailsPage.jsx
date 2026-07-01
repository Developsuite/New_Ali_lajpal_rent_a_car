import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { carsData } from '../../data/carsData';
import './CarDetailsPage.css';

function CarDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the car by ID
  const car = carsData.find(c => c.id === parseInt(id));

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // If car not found, redirect to Cars page
  if (!car) {
    navigate('/cars');
    return null;
  }

  // Construct WhatsApp Message for booking
  const message = `Hello! I want to book the ${car.make} ${car.name}. Could you provide more details?`;
  const whatsappNumber = '923057649991'; 
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const carSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${car.make} ${car.name}`,
    "image": `https://www.newalilajpal.com${car.image}`,
    "description": car.description || `Rent ${car.make} ${car.name} in Lahore.`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "PKR",
      "price": typeof car.price === 'number' ? car.price : "0",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <main className="car-details-page">
      <SEO 
        title={`${car.make} ${car.name} Rent A Car - New Ali Lajpal`}
        description={car.description || `Book ${car.make} ${car.name} with New Ali Lajpal Rent A Car. Best rent a car in Bahria Town, Teen Talwar.`}
        keywords={`${car.make} ${car.name} rent, ${car.name} rent a car, rent a car Lahore, New Ali Lajpal, Ali Lajpal rent a car`}
        schemaData={carSchema}
      />
      
      <div className="car-details__container">
        <Link to="/cars" className="car-details__back">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Fleet
        </Link>

        <div className="car-details__content">
          {/* LEFT: IMAGE */}
          <div className="car-details__image-wrapper">
            <img src={car.image} alt={`${car.make} ${car.name}`} className="car-details__image" />
          </div>

          {/* RIGHT: DETAILS */}
          <div className="car-details__info">
            <span className="car-details__badge">{car.category}</span>
            <h1 className="car-details__title">{car.make} {car.name}</h1>
            
            <div className="car-details__price">
              {typeof car.price === 'number' ? `Rs. ${car.price.toLocaleString()}` : car.price}
              {typeof car.price === 'number' && <span>/ Day</span>}
            </div>

            <p className="car-details__description">{car.description}</p>

            <div className="car-details__specs">
              <div className="spec-item">
                <span className="spec-item__label">Engine</span>
                <span className="spec-item__value">{car.engine}</span>
              </div>
              <div className="spec-item">
                <span className="spec-item__label">Transmission</span>
                <span className="spec-item__value">{car.transmission}</span>
              </div>
              <div className="spec-item">
                <span className="spec-item__label">Fuel Type</span>
                <span className="spec-item__value">{car.fuel}</span>
              </div>
              <div className="spec-item">
                <span className="spec-item__label">Seating Capacity</span>
                <span className="spec-item__value">{car.seats} Persons</span>
              </div>
              <div className="spec-item">
                <span className="spec-item__label">Air Condition</span>
                <span className="spec-item__value">{car.ac}</span>
              </div>
              <div className="spec-item">
                <span className="spec-item__label">Doors</span>
                <span className="spec-item__value">{car.doors}</span>
              </div>
              <div className="spec-item">
                <span className="spec-item__label">Driver Status</span>
                <span className="spec-item__value">{car.driver_availability}</span>
              </div>
              <div className="spec-item">
                <span className="spec-item__label">Best For</span>
                <span className="spec-item__value">{car.best_for}</span>
              </div>
            </div>

            <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="car-details__book-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Book on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* BOTTOM DISCLAIMER */}
        <div className="car-details__disclaimer">
          <h3 className="car-details__disclaimer-title">General Booking Information</h3>
          <p>
            All vehicles are available for <strong>city travel, airport pick and drop, wedding events, corporate use, family trips, and long-route travel</strong>. Cars can be booked <strong>with driver</strong>, and selected vehicles may be available <strong>without driver on request</strong>, depending on verification, security deposit, and company policy. Fuel, toll tax, parking, and outstation charges may apply separately.
          </p>
        </div>
      </div>
    </main>
  );
}

export default CarDetailsPage;
