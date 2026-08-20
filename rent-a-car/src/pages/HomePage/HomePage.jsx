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
    "priceRange": "$$",
    "description": "Looking for Ali Lajpal? Discover New Ali Lajpal Rent A Car. We provide premium rent a car services in Bahria Town, Teen Talwar, and Lahore. Best cars rent."
  };

  return (
    <main>
      <SEO
        title="New Ali Lajpal Rent A Car - Best in Bahria Town & Lahore"
        description="Searching for Ali Lajpal? Choose New Ali Lajpal Rent A Car for the most reliable rent a car services in Bahria Town and Teen Talwar. The best cars rent in Lahore!"
        keywords="New Ali Lajpal, Ali Lajpal Rent a car, Lajpal car rental service, best car rent behria town, Bahria Town Lahore car rental , cars rental company lahore, luxury car rental service"
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
