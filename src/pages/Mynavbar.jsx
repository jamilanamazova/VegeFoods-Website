import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const MyNavbar = () => {
  const activeStyle = {
    color: "green",
    fontWeight: "bold",
    textDecoration: "none",
    cssText: "color: green !important;",
  };

  return (
    <>
      <div className="py-1 bg-success text-white">
        <div className="container text-center">
          <div className="row no-gutters justify-center items-center">
            <div className="col-auto flex items-center pr-4">
              <div className="icon mr-2 flex justify-center items-center">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <span className="text" style={{ color: "white" }}>
                + 1235 2355 98
              </span>
            </div>
            <div className="col-auto flex items-center pr-4">
              <div className="icon mr-2 flex justify-center items-center">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <span className="text" style={{ color: "white" }}>
                YOUREMAIL@EMAIL.COM
              </span>
            </div>
            <div className="col-auto flex items-center">
              <span>3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</span>
            </div>
          </div>
        </div>
      </div>
      <Navbar bg="white" expand="lg" className="sticky-top border-bottom">
        <Container>
          <NavLink to="/" className="navbar-logo font-weight-bold">
            VEGEFOODS
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto align-items-center">
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : {})}
                className="nav-link"
              >
                HOME
              </NavLink>
              <NavDropdown
                title="SHOP"
                id="shop-dropdown"
                className="nav-link"
              >
                <NavDropdown.Item as={NavLink} to="/shop">
                  Shop
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/wishlist">
                  Wishlist
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/product-single">
                  Single Product
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/cart">
                  Cart
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/checkout">
                  Checkout
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : {})}
                className="nav-link"
              >
                ABOUT
              </NavLink>
              <NavLink
                to="/blog"
                style={({ isActive }) => (isActive ? activeStyle : {})}
                className="nav-link"
              >
                BLOG
              </NavLink>
              <NavLink
                to="/contact"
                style={({ isActive }) => (isActive ? activeStyle : {})}
                className="nav-link"
              >
                CONTACT
              </NavLink>
              <NavLink
                to="/cart"
                style={({ isActive }) => (isActive ? activeStyle : {})}
                className="nav-link d-flex align-items-center"
              >
                <i className="bi bi-cart-check mr-1"></i> [0]
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
