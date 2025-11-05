import React from "react";

import SubscribeSection from "./Subscribe";
import Footer from "./Footer";
import ProductSection from "./Shop";
import { Link } from "react-router-dom";


const ShopPage = () => {
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
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              </span>
              <span style={{ color: 'white' }}>Products</span>
            </p>
            <h1 className="mb-0 bread" style={{ fontSize: '48px', fontWeight: 'bold', color: '#fff' }}>Products</h1>
          </div>
        </div>
      </div>
    </div>
    <ProductSection/>
    <SubscribeSection/>
    <Footer/>
    </>
  );
};

export default ShopPage;
