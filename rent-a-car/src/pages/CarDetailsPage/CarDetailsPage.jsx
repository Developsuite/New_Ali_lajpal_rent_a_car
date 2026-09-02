import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { carsData, getCarDisplayName } from '../../data/carsData';
import './CarDetailsPage.css';

const carTitles = {
  1: "Suzuki Alto AGS Rent A Car in Lahore | New Ali Lajpal",
  2: "Suzuki Wagon R Rent A Car in Lahore | New Ali Lajpal",
  3: "Toyota Corolla Rent A Car in Lahore | New Ali Lajpal",
  4: "Toyota Yaris Rent A Car in Lahore | New Ali Lajpal",
  5: "Toyota Grande Rent A Car in Lahore | New Ali Lajpal",
  6: "KIA Sportage Rent A Car in Lahore | New Ali Lajpal",
  7: "Honda Civic Rent A Car in Lahore | New Ali Lajpal",
  8: "Honda BRV Rent A Car in Lahore | New Ali Lajpal",
  9: "Honda City Rent A Car in Lahore | New Ali Lajpal",
  10: "Haval SUV Rent A Car in Lahore | New Ali Lajpal",
  11: "Toyota Fortuner Rent A Car in Lahore | New Ali Lajpal",
  12: "Toyota Prado Rent A Car in Lahore | New Ali Lajpal",
  13: "Toyota Land Cruiser V8 Rent A Car in Lahore | New Ali Lajpal",
  14: "Toyota Revo Rent A Car in Lahore | New Ali Lajpal",
  15: "Audi Rent A Car in Lahore | New Ali Lajpal",
  16: "Mercedes-Benz Rent A Car in Lahore | New Ali Lajpal",
  17: "Limousine Rent A Car in Lahore | New Ali Lajpal",
  18: "Toyota Coaster Rent A Car in Lahore | New Ali Lajpal",
  19: "Toyota Grand Cabin Rent A Car in Lahore | New Ali Lajpal",
  20: "Toyota Coaster 4C Rent A Car in Lahore | New Ali Lajpal",
  21: "Toyota Coaster 5C Rent A Car in Lahore | New Ali Lajpal",
  22: "Security Guard Service in Lahore | New Ali Lajpal",
};

const carMetaDescriptions = {
  1: "Rent Suzuki Alto AGS in Lahore & Bahria Town. Economical automatic city car for daily rental, office travel, and airport pickup. Book with New Ali Lajpal.",
  2: "Rent Suzuki Wagon R in Lahore & Bahria Town. Fuel-efficient 1000cc hatchback for family trips, daily commuting, and city travel. Book with New Ali Lajpal.",
  3: "Rent Toyota Corolla in Lahore & Bahria Town. Comfortable sedan for family travel, business trips, and airport transfers. Book with New Ali Lajpal.",
  4: "Rent Toyota Yaris in Lahore & Bahria Town. Modern, fuel-efficient sedan for corporate meetings, family trips, and airport drops. Book with New Ali Lajpal.",
  5: "Rent Toyota Corolla Grande in Lahore & Bahria Town. Premium 1.8L sedan with luxury interior for executive travel, weddings, and tours. Book with New Ali Lajpal.",
  6: "Rent KIA Sportage SUV in Lahore & Bahria Town. Modern 2.0L crossover for VIP travel, wedding events, and luxury family tours. Book with New Ali Lajpal.",
  7: "Rent Honda Civic in Lahore & Bahria Town. Premium sedan for executive travel, weddings, and city tours with driver option. Book with New Ali Lajpal.",
  8: "Rent Honda BR-V 7-seater SUV in Lahore & Bahria Town. Spacious family vehicle for group travel, tours, and long-distance routes. Book with New Ali Lajpal.",
  9: "Rent Honda City in Lahore & Bahria Town. Stylish sedan for city travel, office use, and airport pick and drop. Book with New Ali Lajpal.",
  10: "Rent Haval SUV in Lahore & Bahria Town. Modern luxury crossover for business executives, family tours, and wedding events. Book with New Ali Lajpal.",
  11: "Rent Toyota Fortuner in Lahore & Bahria Town. Powerful 7-seater SUV for VIP protocol, northern area tours, and weddings. Book with New Ali Lajpal.",
  12: "Rent Toyota Prado in Lahore & Bahria Town. High-end luxury SUV for VIP travel, protocol movement, and long routes. Book with New Ali Lajpal.",
  13: "Rent Toyota Land Cruiser V8 in Lahore & Bahria Town. Ultimate luxury SUV for VIP protocol, corporate movement, and wedding events. Book with New Ali Lajpal.",
  14: "Rent Toyota Revo in Lahore & Bahria Town. Powerful 4x4 double-cabin for northern areas, outdoor trips, and protocol travel. Book with New Ali Lajpal.",
  15: "Rent Audi in Lahore & Bahria Town. Executive luxury car for weddings, business meetings, VIP airport pickup, and special events. Book with New Ali Lajpal.",
  16: "Rent Mercedes-Benz in Lahore & Bahria Town. Premium luxury vehicle for wedding entry, corporate protocol, and VIP travel. Book with New Ali Lajpal.",
  17: "Rent Limousine in Lahore & Bahria Town. High-end luxury vehicle for wedding bridal entry, VIP events, and photoshoots. Book with New Ali Lajpal.",
  18: "Rent Toyota Coaster in Lahore & Bahria Town. 29-seater passenger van for group travel, wedding guest transport, and tours. Book with New Ali Lajpal.",
  19: "Rent Toyota Hiace Grand Cabin in Lahore & Bahria Town. Spacious 13-seater van for family tours, airport travel, and group trips. Book with New Ali Lajpal.",
  20: "Rent Coaster 4C in Lahore & Bahria Town. Reliable 29-seater group transport van with professional driver for tours and events. Book with New Ali Lajpal.",
  21: "Rent Coaster 5C in Lahore & Bahria Town. Powerful 29-seater passenger van for long-distance group tours and staff transport. Book with New Ali Lajpal.",
  22: "Hire professional Security Guard service in Lahore & Bahria Town for VIP protocol, wedding events, and secure family travel. Book with New Ali Lajpal.",
};

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

  const displayName = getCarDisplayName(car);

  // Construct WhatsApp Message for booking
  const message = `Hello! I want to book the ${displayName}. Could you provide more details?`;
  const whatsappNumber = '923057649991';
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const pageTitle = carTitles[car.id] || `${displayName} Rent A Car in Lahore | New Ali Lajpal`;
  const pageMetaDesc = carMetaDescriptions[car.id] || `Book ${displayName} with New Ali Lajpal Rent A Car in Bahria Town and Lahore. Comfort, reliability, and low rates.`;

  const carSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": displayName,
    "image": `https://newalilajpal.com${car.image}`,
    "url": `https://newalilajpal.com/car/${car.id}`,
    "description": pageMetaDesc,
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
        title={pageTitle}
        description={pageMetaDesc}
        keywords={`${displayName} rent, ${car.name} rent a car, rent a car Lahore, New Ali Lajpal, Ali Lajpal rent a car`}
        url={`https://newalilajpal.com/car/${car.id}`}
        schemaData={carSchema}
      />

      <div className="car-details__container">
        <Link to="/cars-fleet-for-rent" className="car-details__back">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Fleet
        </Link>

        <div className="car-details__content">
          {/* LEFT: IMAGE */}
          <div className="car-details__image-wrapper">
            <img src={car.image} alt={`${displayName} available for rent in Lahore`} className="car-details__image" />
          </div>

          {/* RIGHT: DETAILS */}
          <div className="car-details__info">
            <span className="car-details__badge">{car.category}</span>
            <h1 className="car-details__title">{displayName}</h1>

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
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
