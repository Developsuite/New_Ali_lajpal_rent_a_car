import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import FooterSection from './components/FooterSection/FooterSection';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import HomePage from './pages/HomePage/HomePage';
import CarsPage from './pages/CarsPage/CarsPage';
import CarDetailsPage from './pages/CarDetailsPage/CarDetailsPage';
import './App.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/car/:id" element={<CarDetailsPage />} />
      </Routes>
      <FooterSection />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
