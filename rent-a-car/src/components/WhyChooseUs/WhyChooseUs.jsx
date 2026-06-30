import './WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <section className="why-choose" id="why-choose">
      <div className="why-choose__header">
        <h2 className="why-choose__title">Why Choose <span className="text-gradient">New Ali Lajpal</span> Rent A Car</h2>
        <p className="why-choose__subtitle">
          Experience the best rent a car services tailored for your needs.
        </p>
      </div>

      <div className="why-choose__carousel-wrapper">
        <div className="why-choose__grid container">
          {/* Card 1: Text Up */}
        <div className="why-card why-card--text-up">
          <div className="why-card__inner">
            <div className="why-card__text">
              <h3 className="why-card__heading">Flexible Rentals</h3>
              <p className="why-card__desc">Choose a rental plan that fits your schedule with our flexible daily, weekly, and monthly options.</p>
            </div>
            <div className="why-card__image-wrapper">
              <img src="/imagess/our_services/image1.png" alt="Flexible Rentals" className="why-card__img" />
              <div className="why-card__gradient why-card__gradient--bottom"></div>
            </div>
          </div>
        </div>

        {/* Card 2: Text Down */}
        <div className="why-card why-card--text-down">
          <div className="why-card__inner">
            <div className="why-card__image-wrapper">
              <img src="/imagess/our_services/image2.png" alt="Wide Range of Vehicles" className="why-card__img" />
              <div className="why-card__gradient why-card__gradient--top"></div>
            </div>
            <div className="why-card__text">
              <h3 className="why-card__heading">Wide Range of Vehicles</h3>
              <p className="why-card__desc">From family cars to corporate vehicles, we have the perfect ride for every occasion.</p>
            </div>
          </div>
        </div>

        {/* Card 3: Text Up */}
        <div className="why-card why-card--text-up">
          <div className="why-card__inner">
            <div className="why-card__text">
              <h3 className="why-card__heading">City to City Drops</h3>
              <p className="why-card__desc">Enjoy comfortable and affordable one-way trips across cities without paying return charges.</p>
            </div>
            <div className="why-card__image-wrapper">
              <img src="/imagess/our_services/image3.png" alt="City to City Drops" className="why-card__img" />
              <div className="why-card__gradient why-card__gradient--bottom"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
