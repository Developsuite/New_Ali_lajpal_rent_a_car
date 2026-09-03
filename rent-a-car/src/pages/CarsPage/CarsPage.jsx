import SEO from '../../components/SEO/SEO';
import OurCars from '../../components/OurCars/OurCars';
import BookingSection from '../../components/BookingSection/BookingSection';
import FooterCarSection from '../../components/FooterCarSection/FooterCarSection';
import './CarsPage.css';
import { carsData, getCarDisplayName } from '../../data/carsData';

function CarsPage() {
  // Generate structured data for the fleet
  const itemListElements = carsData.slice(0, 10).map((car, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": getCarDisplayName(car),
      "description": `${getCarDisplayName(car)} available for rent in Lahore.`,
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
        title="Cars for Rent in Lahore & Bahria Town | Fleet | New Ali Lajpal"
        description="Browse our full fleet of cars for rent in Lahore and Bahria Town. Economy hatchbacks, sedans, luxury SUVs, and group vans available with driver or self-drive."
        keywords="cars for rent Lahore, car rental fleet Lahore, available rental cars, cars for rent Bahria Town, New Ali Lajpal fleet"
        schemaData={carsSchema}
        url="https://newalilajpal.com/cars-fleet-for-rent"
      />
      <div className="cars-page__header container">
        <div className="cars-page__header-content">
          <img
            src="/imagess/ourcars/kia-sportage-best-car-rental-lahore.webp"
            alt=""
            className="cars-page__decor cars-page__decor--left"
            loading="lazy"
          />
          <div className="cars-page__text">
            <h1 className="cars-page__title">Our Complete <span className="text-gradient">Fleet</span></h1>
            <p className="cars-page__subtitle">Browse our full fleet of cars for rent in Lahore and Bahria Town — from fuel-efficient economy hatchbacks and comfortable sedans to premium SUVs and large vehicles for groups.</p>
          </div>
          <img
            src="/imagess/remaining/honda-civic-car-rental-bahria-town-lahore.webp"
            alt=""
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
