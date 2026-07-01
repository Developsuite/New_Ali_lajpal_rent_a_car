import { useState } from 'react';
import { carsData } from '../../data/carsData';
import './OurCars.css';

import { Link } from 'react-router-dom';

function OurCars({ limit = null, hideHeader = false, showFilters = false }) {
  const [showAll, setShowAll] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    price: 'All',
    featured: 'All',
    make: 'All',
    category: 'All',
    transmission: 'All',
  });

  const whatsappNumber = '923057649991';

  const handleBookNow = (carName) => {
    const message = encodeURIComponent(
      `Hello! I am interested in renting the ${carName}. Could you please provide more details?`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const setPriceFilter = (priceRange) => {
    setFilters(prev => ({ ...prev, price: priceRange }));
  };

  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    return 999999; // For 'Call for Price', we'll treat it as high so it doesn't get filtered out easily or handle it separately
  };

  // Filter Logic
  const filteredCars = carsData.filter(car => {
    // Search
    if (filters.search && !car.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
    
    // Category (BodyType)
    if (filters.category !== 'All' && car.category !== filters.category) return false;
    
    // Make
    if (filters.make !== 'All' && car.make !== filters.make) return false;
    
    // Transmission
    if (filters.transmission !== 'All' && car.transmission !== filters.transmission) return false;
    
    // Featured
    if (filters.featured === 'Yes' && !car.featured) return false;
    
    // Price
    if (filters.price !== 'All') {
      const p = parsePrice(car.price);
      if (p === 999999 && filters.price !== 'All') {
        // Decide what to do with "Call for Price" items. Let's include them only in 'All' or if they match explicitly.
        // For now, if price filter is on, we'll exclude 'Call for Price' unless they want it.
        return false;
      }
      if (filters.price === 'Under Rs. 5,000' && p >= 5000) return false;
      if (filters.price === 'Rs. 5,000 - Rs. 10,000' && (p < 5000 || p >= 10000)) return false;
      if (filters.price === 'Rs. 10,000 - Rs. 20,000' && (p < 10000 || p > 20000)) return false;
      if (filters.price === 'Over Rs. 20,000' && p <= 20000) return false;
    }

    return true;
  });

  const displayedCars = limit && !showAll ? filteredCars.slice(0, limit) : filteredCars;

  // Extract unique options for dropdowns
  const uniqueMakes = ['All', ...new Set(carsData.map(c => c.make))].filter(m => m !== 'Service');
  const uniqueCategories = ['All', ...new Set(carsData.map(c => c.category))];
  const uniqueTransmissions = ['All', 'Automatic', 'Manual'];
  const priceRanges = ['All', 'Under Rs. 5,000', 'Rs. 5,000 - Rs. 10,000', 'Rs. 10,000 - Rs. 20,000', 'Over Rs. 20,000'];

  return (
    <section className="our-cars" id="our-cars">
      {!hideHeader && (
        <div className="our-cars__header">
          <h2 className="our-cars__title">
            Explore Our <span className="text-gradient">Popular Cars</span>
          </h2>
          <p className="our-cars__subtitle">
            Latest car reviews and releases. We'll help you rent with confidence.
          </p>
        </div>
      )}

      <div className={`our-cars__layout container ${showFilters ? 'our-cars__layout--with-sidebar' : ''}`}>
        
        {/* Sidebar Filter */}
        {showFilters && (
          <aside className="our-cars__sidebar">
            <h3 className="our-cars__sidebar-title">Filters</h3>
            
            {/* Search */}
            <div className="filter-group">
              <div className="search-input-wrapper">
                <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input 
                  type="text" 
                  name="search"
                  placeholder="Search..." 
                  value={filters.search}
                  onChange={handleFilterChange}
                  className="filter-search"
                />
              </div>
            </div>

            {/* Prices */}
            <div className="filter-group">
              <h4 className="filter-label">Prices</h4>
              <div className="filter-price-tags">
                {priceRanges.map(range => (
                  <button 
                    key={range}
                    className={`price-tag ${filters.price === range ? 'price-tag--active' : ''}`}
                    onClick={() => setPriceFilter(range)}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured */}
            <div className="filter-group">
              <h4 className="filter-label">Featured</h4>
              <select name="featured" value={filters.featured} onChange={handleFilterChange} className="filter-select">
                <option value="All">All</option>
                <option value="Yes">Featured Only</option>
              </select>
            </div>

            {/* Make */}
            <div className="filter-group">
              <h4 className="filter-label">Make</h4>
              <select name="make" value={filters.make} onChange={handleFilterChange} className="filter-select">
                {uniqueMakes.map(make => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
            </div>

            {/* Body Type / Category */}
            <div className="filter-group">
              <h4 className="filter-label">Body Type</h4>
              <select name="category" value={filters.category} onChange={handleFilterChange} className="filter-select">
                {uniqueCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Transmission */}
            <div className="filter-group">
              <h4 className="filter-label">Transmission</h4>
              <select name="transmission" value={filters.transmission} onChange={handleFilterChange} className="filter-select">
                {uniqueTransmissions.map(trans => (
                  <option key={trans} value={trans}>{trans}</option>
                ))}
              </select>
            </div>
          </aside>
        )}

        {/* Cars Grid */}
        <div className="our-cars__main-content">
          <div className="our-cars__grid">
            {displayedCars.length > 0 ? (
              displayedCars.map((car) => (
                <div className="car-card" key={car.id}>
                  <div className="car-card__inner">
                    <div className="car-card__image-wrapper">
                      <img src={car.image} alt={car.name} className="car-card__img" loading="lazy" />
                      <div className="car-card__badge">{car.type}</div>
                    </div>
                    <div className="car-card__content">
                      <div className="car-card__main">
                        <div className="car-card__top">
                          <h3 className="car-card__name">{car.name}</h3>
                          <div className="car-card__price">
                            <span className="car-card__price-value">
                              {typeof car.price === 'number' ? `Rs ${car.price.toLocaleString()}` : car.price}
                            </span>
                            {typeof car.price === 'number' && <span className="car-card__price-unit">/ day</span>}
                          </div>
                        </div>
                        <div className="car-card__divider"></div>
                        <div className="car-card__bottom">
                          {/* Seats info removed by request */}
                          <div className="car-card__action-buttons">
                            <Link to={`/car/${car.id}`} className="car-card__details-btn">
                              Details
                            </Link>
                            <a 
                              href={`https://wa.me/923057649991?text=${encodeURIComponent('Hello! I am interested in renting the ' + car.make + ' ' + car.name)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="car-card__book-btn"
                            >
                      <svg className="car-card__whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Book Now
                    </a>
                  </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="our-cars__no-results">
                <h3>No cars found</h3>
                <p>Try adjusting your filters to find what you're looking for.</p>
              </div>
            )}
          </div>
          
          {limit && !showAll && carsData.length > limit && (
            <div className="our-cars__explore-more">
              <button className="our-cars__explore-btn" onClick={() => setShowAll(true)}>
                Explore More Cars
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default OurCars;
