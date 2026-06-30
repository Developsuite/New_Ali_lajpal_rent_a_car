import React from 'react';
import './OurReviews.css';

const reviewsData = [
  {
    id: 1,
    name: 'Muhammad yousaf',
    date: '4 months ago',
    text: 'Good service 👍 …',
    rating: 5,
  },
  {
    id: 2,
    name: 'Abid Ali',
    date: '4 days ago',
    text: "One of the best car rental services I've used. The car was spotless, comfortable, and exactly as promised. Honest pricing and excellent communication throughout.",
    rating: 5,
  },
  {
    id: 3,
    name: 'BashirAhmad Mirza',
    date: '4 days ago',
    text: 'A great experience with New Ali Lajpal Rent A Car. The booking process was simple, the prices were reasonable, and the vehicle was in excellent condition. Will definitely use their service again.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sultan Mehmood',
    date: 'a week ago',
    text: '"Very satisfied with New Ali Lajpal Rent A Car, Talwar Chowk, Bahria Town, Lahore. Smooth booking process, reasonable prices, and top-quality service."',
    rating: 5,
  },
  {
    id: 5,
    name: 'Muhammad Saddam',
    date: 'a week ago',
    text: '"Five-star service from New Ali Lajpal Rent A Car in Bahria Town, Lahore. Clean cars, professional staff, and a hassle-free rental experience. I will definitely rent again."',
    rating: 5,
  },
  {
    id: 6,
    name: 'Bashir Mirza',
    date: '4 days ago',
    text: 'Highly impressed with the quality of service. The team was friendly, punctual, and very professional. The vehicle was in perfect condition, making my trip comfortable and stress-free. I highly recommend New Ali Lajpal Rent A Car.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Qamar sultan',
    date: 'a week ago',
    text: "I had a great experience with them overall best service,Driver was punctual and know importance of one's precious time....",
    rating: 5,
  },
  {
    id: 8,
    name: 'M.Mubasher Hashmi',
    date: '4 days ago',
    text: 'Last night I reached Lahore and looking for a best clean and friendly rent a car service in behria town Lahore even I was looking for any rent a car service in Lahore then with the Mercy of Allah almighty he showed me path...',
    rating: 5,
  },
];

// Helper to render stars
const renderStars = (rating) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <svg
      key={index}
      viewBox="0 0 24 24"
      fill={index < rating ? '#fbbc04' : '#dadce0'}
      xmlns="http://www.w3.org/2000/svg"
      className="our-reviews__star"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ));
};

function OurReviews() {
  return (
    <section className="our-reviews" id="our-reviews">
      <div className="our-reviews__container container">
        <div className="our-reviews__header-row">
          <div className="our-reviews__header">
            <h2 className="our-reviews__title">
              Google <span className="text-gradient">Reviews</span>
            </h2>
            <p className="our-reviews__subtitle">
              Don't just take our word for it — hear from our satisfied customers.
            </p>
          </div>
        </div>

        <div className="our-reviews__slider-wrapper">
          <div className="our-reviews__slider">
            <div className="our-reviews__slide-track">
              {reviewsData.map((review) => (
                <div className="our-reviews__card" key={`original-${review.id}`}>
                  <div className="our-reviews__card-header">
                    <div className="our-reviews__avatar">
                      {review.name.charAt(0)}
                    </div>
                    <div className="our-reviews__meta">
                      <h4 className="our-reviews__name">{review.name}</h4>
                      <span className="our-reviews__date">{review.date}</span>
                    </div>
                  </div>
                  <div className="our-reviews__rating">
                    <div className="our-reviews__stars">
                      {renderStars(review.rating)}
                    </div>
                    <span className="our-reviews__rating-number">
                      {review.rating}.0
                    </span>
                  </div>
                  <p className="our-reviews__text">"{review.text}"</p>
                  <div className="our-reviews__google-logo">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
                    </svg>
                  </div>
                </div>
              ))}
              {/* Duplicate track for seamless infinite scroll */}
              {reviewsData.map((review) => (
                <div className="our-reviews__card" key={`duplicate-${review.id}`}>
                  <div className="our-reviews__card-header">
                    <div className="our-reviews__avatar">
                      {review.name.charAt(0)}
                    </div>
                    <div className="our-reviews__meta">
                      <h4 className="our-reviews__name">{review.name}</h4>
                      <span className="our-reviews__date">{review.date}</span>
                    </div>
                  </div>
                  <div className="our-reviews__rating">
                    <div className="our-reviews__stars">
                      {renderStars(review.rating)}
                    </div>
                    <span className="our-reviews__rating-number">
                      {review.rating}.0
                    </span>
                  </div>
                  <p className="our-reviews__text">"{review.text}"</p>
                  <div className="our-reviews__google-logo">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurReviews;
