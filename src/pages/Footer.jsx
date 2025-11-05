import React from 'react';

const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      onClick={handleClick} 
      style={{
        position: 'sticky',
        margin: '0 auto',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#333',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex: 1000,
      }}
      aria-label="Scroll to top"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') handleClick(); }}
    >
      <i className="bi bi-arrow-up"></i>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <ScrollToTop />
      <div className="container">
        <div className="footer-section vegefoods">
          <h3>Vegefoods</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          <div className="social-icons">
            <a href="#" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
          </div>
        </div>

        <div className="footer-section menu">
          <h3>Menu</h3>
          <ul>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Journal</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section help">
          <h3>Help</h3>
          <div className="help-lists">
            <ul>
              <li><a href="#">Shipping Information</a></li>
              <li><a href="#">Returns & Exchange</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-section questions">
          <h3>Have a Questions?</h3>
          <ul>
            <li><i className="bi bi-geo-alt-fill"></i>203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li><i className="bi bi-telephone-fill"></i>+2 392 3929 210</li>
            <li><i className="bi bi-envelope-fill"></i>info@yourdomain.com</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
