import React from 'react';

const SubscribeSection = () => {
  return (
    <section className="subscribe">
      <div className="text-content">
        <h2>Subscribe to our Newsletter</h2>
        <p>Get e-mail updates about our latest shops and special offers</p>
      </div>
      <form className="subscribe-form">
        <input type="email" placeholder="Enter email address" className="input-email" />
        <button type="submit" className="btn-subscribe">Subscribe</button>
      </form>
    </section>
  );
};

export default SubscribeSection;
