import React from 'react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import OurCars from '../../components/OurCars/OurCars';
import OurServices from '../../components/OurServices/OurServices';
import OurReviews from '../../components/OurReviews/OurReviews';
import BookingSection from '../../components/BookingSection/BookingSection';
import RoutesSection from '../../components/RoutesSection/RoutesSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import FooterCarSection from '../../components/FooterCarSection/FooterCarSection';

function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": "New Ali Lajpal Rent A Car",
    "image": "https://newalilajpal.com/imagess/Logo/2.png",
    "@id": "https://newalilajpal.com",
    "url": "https://newalilajpal.com",
    "telephone": "+923057649991",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.5204,
      "longitude": 74.3587
    },
    "areaServed": [
      "Bahria Town Lahore",
      "Teen Talwar Chowk",
      "Lahore"
    ],
    "priceRange": "$$",
    "description": "New Ali Lajpal Rent A Car provides reliable car rental services in Bahria Town, near Teen Talwar, and across Lahore with flexible daily, monthly, and airport transfer plans."
  };

  return (
    <main>
      <SEO
        title="Rent A Car Bahria Town & Lahore | New Ali Lajpal"
        description="Book reliable cars for rent in Bahria Town, near Teen Talwar, and across Lahore. Economy hatchbacks, sedans, luxury SUVs, airport transfers, and one-way city drops."
        keywords="rent a car Bahria Town, rent a car Lahore, car rental Bahria Town, New Ali Lajpal Rent A Car, luxury car rental Lahore, airport transfer Lahore"
        url="https://newalilajpal.com/"
        schemaData={homeSchema}
      />
      <Hero />
      <WhyChooseUs />
      <OurCars limit={6} />
      <OurServices />
      <BookingSection />
      <OurReviews />
      <AboutSection />
      <RoutesSection />
      <FooterCarSection />
    </main>
  );
}

export default HomePage;
