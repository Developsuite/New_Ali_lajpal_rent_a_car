import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import FooterSection from './components/FooterSection/FooterSection';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import HomePage from './pages/HomePage/HomePage';
import CarsPage from './pages/CarsPage/CarsPage';
import CarDetailsPage from './pages/CarDetailsPage/CarDetailsPage';
import BlogPage from './pages/BlogPage/BlogPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import './App.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars-fleet-for-rent" element={<CarsPage />} />
        <Route path="/car/:id" element={<CarDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <FooterSection />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
