import React from 'react';
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
  return (
    <main>
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
