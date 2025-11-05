import React from 'react';


const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        <div className="wcontent-wrapper">
          <div className="image-section">
            <a 
              href="https://vimeo.com/45830194" 
              className="video-play-button"
            >
              <span className="play-icon">▶</span>
            </a>
          </div>

          <div className="text-section">
            <h2>Welcome to Vegefoods an eCommerce website</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <p>
              But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
            </p>
            <a href="#" className="shop-now-button">Shop now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;