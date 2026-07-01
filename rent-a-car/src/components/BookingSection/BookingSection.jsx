import React, { useState } from 'react';
import './BookingSection.css';
import { carsData } from '../../data/carsData';

function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    car: '',
    pickup: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    
    // Extract data
    const { name, phone, date, car, pickup } = formData;
    
    // Construct WhatsApp Message
    const message = `Hello! I would like to book a car.
Name: ${name || 'N/A'}
Phone: ${phone || 'N/A'}
Date: ${date || 'N/A'}
Car: ${car || 'N/A'}
Pickup Point: ${pickup || 'N/A'}`;

    // IMPORTANT: Replace this placeholder number with your actual WhatsApp number when ready!
    // Include the country code without the '+' sign (e.g., 923057649991 for Pakistan)
    const whatsappNumber = '923057649991'; 
    
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="booking-section" id="booking">
      <div className="container">
        <div className="booking-section__wrapper">
          <div className="booking-section__inner">
            
            {/* LEFT COLUMN: IMAGE */}
            <div className="booking-section__image-col">
          <img 
            src="/imagess/contact.png" 
            alt="Contact us to book a car" 
            className="booking-section__image" 
          />
        </div>

        {/* RIGHT COLUMN: BOOKING FORM */}
        <div className="booking-section__form-col">
            <div className="booking-section__form-card">
              <h2 className="booking-section__title">
                Book Your <span className="text-gradient">Car</span>
              </h2>
              <p className="booking-section__subtitle">
                Fill out the form below and we will get back to you immediately via WhatsApp.
              </p>

              <form className="booking-section__form" onSubmit={handleBookNow}>
                <div className="booking-section__form-row">
                  <div className="booking-section__input-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="booking-section__input-group">
                    <label htmlFor="phone">Phone number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="E.g. +92 300 0000000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="booking-section__form-row">
                  <div className="booking-section__input-group">
                    <label htmlFor="date">Select date</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date" 
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="booking-section__input-group">
                    <label htmlFor="car">Select a car</label>
                    <select 
                      id="car" 
                      name="car"
                      value={formData.car}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select...</option>
                      {carsData.map((carItem) => (
                        <option key={carItem.id} value={`${carItem.make} ${carItem.name}`}>
                          {carItem.make} {carItem.name}
                        </option>
                      ))}
                      <option value="Other">Other (Please discuss)</option>
                    </select>
                  </div>
                </div>

                <div className="booking-section__form-row">
                  <div className="booking-section__input-group">
                    <label htmlFor="pickup">Pickup point</label>
                    <select 
                      id="pickup" 
                      name="pickup"
                      value={formData.pickup}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select...</option>
                      <option value="Lahore Airport">Lahore Airport</option>
                      <option value="Bahria Town">Bahria Town</option>
                      <option value="DHA Phase 1-6">DHA Phase 1-6</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="booking-section__submit-btn">
                  Book Now
                </button>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
