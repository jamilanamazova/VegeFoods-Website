import React from 'react';

const PartnersSection = () => {
  return (
    <section className="partners">
      <div className="container">
        <div className="row">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="partner">
              <a href="#" className="partner">
                <img
                  src={`https://preview.colorlib.com/theme/vegefoods/images/partner-${num}.png.webp`}
                  className="img-fluid"
                  alt="template"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
