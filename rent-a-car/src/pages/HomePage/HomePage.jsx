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
    "image": "https://www.newalilajpal.com/imagess/Logo/2.png",
    "@id": "https://www.newalilajpal.com",
    "url": "https://www.newalilajpal.com",
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
    "priceRange": "$$",
    "description": "Ali Lajpal Rent A Car provides premium rent a car services in Bahria Town, Teen Talwar, and Lahore. Choose from New Ali Lajpal's SUVs, Sedans, and Luxury vehicles."
  };

  return (
    <main>
      <SEO 
        title="New Ali Lajpal - Best Rent A Car in Bahria Town & Teen Talwar"
        description="Looking for the best rent a car? Ali Lajpal Rent A Car offers premium, reliable services in Bahria Town, Teen Talwar, and Lahore. Book with New Ali Lajpal today!"
        keywords="Ali Lajpal, rent a car, Bahria Town, Teen Talwar, rent a car, New Ali Lajpal, rent a car Lahore, luxury car rental"
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
