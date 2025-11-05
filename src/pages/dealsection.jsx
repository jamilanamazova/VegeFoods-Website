import React from 'react';

const DealSection = () => {
  return (
    <section className="deal-section">
      <img
        src="https://www.mundodeportivo.com/files/article_main_microformat/uploads/2020/08/13/60e76d4d11758.jpeg"
        alt="Fresh vegetables"
        className="deal-image"
      />
      <div className="deal-content">
        <span className="subheading">Best Price For You</span>
        <h2 className="title">Deal of the day</h2>
        <p className="description">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
        </p>
        <a href="#" className="product-name">Spinach</a>
        <span className="price">
          <span className="old-price">$10</span>{' '}
          <a href="#" className="new-price">now $5 only</a>
        </span>
        <div className="timer">
          <div className="time">-1977 <span>DAYS</span></div>
          <div className="time">19 <span>HOURS</span></div>
          <div className="time">19 <span>MINUTES</span></div>
          <div className="time">35 <span>SECONDS</span></div>
        </div>
      </div>
    </section>
  );
};

export default DealSection;
