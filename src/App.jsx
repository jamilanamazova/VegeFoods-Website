import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./pages/Mynavbar";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import BlogPage from "./pages/blogpage";
import ContactPage from "./pages/contactpage";
import CartPage from "./pages/cartpage";
import ShopPage from "./pages/shoppage";
import WishListPage from "./pages/wishlistpage";
import ShopSinglePage from "./pages/singlepage";
import CheckoutPage from "./pages/checkoutpage";
import ReadMorePage from "./pages/readmorepage";

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/product-single" element={<ShopSinglePage />} />
        <Route path="/checkout" element={<CheckoutPage />} /> 
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/readmore" element={<ReadMorePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </Router>
  );
};

export default App;

