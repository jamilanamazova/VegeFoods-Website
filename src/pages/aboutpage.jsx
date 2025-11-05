import React from "react";

import Services from "./Services";
import TestimonySection from "./Testimony";
import SubscribeSection from "./Subscribe";
import Footer from "./Footer";
import WelcomeSection from "./welcome";

const AboutPage = () => {
  return (
    <>
      <div
      className="hero-wrap hero-bread"
      style={{
        backgroundImage: "url('https://img.freepik.com/premium-photo/fresh-produce-paper-bag-white-background_21085-64830.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px', 
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="container text-center" >
        <div className="row">
          <div className="col-md-12">
            <p className="breadcrumbs">
              <span className="mr-2" style={{"margin":"10px",}}>
                <a href="index.html" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
              </span>
              <span style={{ color: 'white' }}>About Us</span>
            </p>
            <h1 className="mb-0 bread" style={{ fontSize: '48px', fontWeight: 'bold', color: '#fff' }}>About Us</h1>
          </div>
        </div>
      </div>
    </div>
      <WelcomeSection/>
      <SubscribeSection/>
      <TestimonySection/>
      <Services/>
      <Footer/>
    </>
  );
};

export default AboutPage;
