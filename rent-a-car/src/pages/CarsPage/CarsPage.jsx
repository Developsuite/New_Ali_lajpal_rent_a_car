import React from 'react';
import OurCars from '../../components/OurCars/OurCars';
import BookingSection from '../../components/BookingSection/BookingSection';
import FooterCarSection from '../../components/FooterCarSection/FooterCarSection';
import './CarsPage.css';

function CarsPage() {
  return (
    <main className="cars-page">
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
