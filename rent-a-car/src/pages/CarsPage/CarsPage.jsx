import React from 'react';
import SEO from '../../components/SEO/SEO';
import OurCars from '../../components/OurCars/OurCars';
import BookingSection from '../../components/BookingSection/BookingSection';
import FooterCarSection from '../../components/FooterCarSection/FooterCarSection';
import './CarsPage.css';
import { carsData } from '../../data/carsData';

function CarsPage() {
  // Generate structured data for the fleet
  const itemListElements = carsData.slice(0, 10).map((car, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": car.name,
      "description": `${car.make} ${car.name} available for rent in Lahore.`,
      "category": car.category,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "PKR",
        "price": car.price,
        "availability": "https://schema.org/InStock"
      }
    }
  }));

  const carsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": itemListElements
  };

  return (
    <main className="cars-page">
      <SEO 
        title="Our Complete Fleet - Ali Lajpal Rent a Car"
        description="Browse the full fleet of New Ali Lajpal Rent A Car. We offer the best rent a car options in Bahria Town, Teen Talwar, and Lahore. Find your perfect ride."
        keywords="Ali Lajpal, rent a car, Bahria Town, Teen Talwar, rent a car, New Ali Lajpal, full fleet rent a car, SUV rent a car"
        schemaData={carsSchema}
        url="https://www.newalilajpal.com/cars"
      />
      <div className="cars-page__header container">
        <div className="cars-page__header-content">
          <img 
            src="/imagess/ourcars/KiaSportage.png" 
            alt="Decoration Car Left" 
            className="cars-page__decor cars-page__decor--left" 
            loading="lazy" 
          />
          <div className="cars-page__text">
            <h1 className="cars-page__title">Our Complete <span className="text-gradient">Fleet</span></h1>
            <p className="cars-page__subtitle">Browse our full selection of premium vehicles available for rent in Lahore.</p>
          </div>
          <img 
            src="/imagess/remaining/civic.png" 
            alt="Decoration Car Right" 
            className="cars-page__decor cars-page__decor--right" 
            loading="lazy" 
          />
        </div>
      </div>
      <OurCars limit={null} hideHeader={true} showFilters={true} />
      <BookingSection />
      <FooterCarSection />
    </main>
  );
}

export default CarsPage;
