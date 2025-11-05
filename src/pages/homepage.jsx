import React from "react";
import Sliders from "./Sliders";
import Services from "./Services";
import ProductsSection from "./Products";
import DealSection from "./dealsection";
import TestimonySection from "./Testimony";
import PartnersSection from "./partnerssection";
import SubscribeSection from "./Subscribe";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Sliders/>
      <Services/>
      <ProductsSection/>
      <DealSection/>
      <TestimonySection/>
      <PartnersSection/>
      <SubscribeSection/>
      <Footer/>
    </>
  );
};

export default HomePage;
