import React from 'react';

const ProductDetails = () => {
  return (
    <section className="single-section">
      <div className="single-container">
        <div className="row">
          <div className="col-lg-6 mb-5">
            <a href="https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg" className="image-popup">
              <img
                src="https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg"
                className="img-fluid"
                alt="Product"
              />
            </a>
          </div>
          <div className="col-lg-6 product-details pl-md-5">
            <h3>Bell Pepper</h3>
            <div className="rating d-flex">
              <p className="text-left mr-4">
                <a href="#" className="mr-2">
                  5.0
                </a>
                <a href="#">
                  <span className="bi bi-star"></span>
                </a>
                <a href="#">
                  <span className="bi bi-star"></span>
                </a>
                <a href="#">
                  <span className="bi bi-star"></span>
                </a>
                <a href="#">
                  <span className="bi bi-star"></span>
                </a>
                <a href="#">
                  <span className="bi bi-star"></span>
                </a>
              </p>
              <p className="text-left mr-4">
                <a href="#" className="mr-2">
                  100 <span>Rating</span>
                </a>
              </p>
              <p className="text-left">
                <a href="#" className="mr-2">
                  500 <span>Sold</span>
                </a>
              </p>
            </div>
            <p className="price">
              <span>$120.00</span>
            </p>
            <p style={{'color':'gray'}}>
              A small river named Duden flows by their place and supplies it with
              the necessary regelialia. It is a paradisematic country, in which
              roasted parts of sentences fly into your mouth.
            </p>
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="form-group d-flex">
                  <div className="select-wrap" >
                    <select name="" id="" className="form-control">
                      <option value="">Small</option>
                      <option value="">Medium</option>
                      <option value="">Large</option>
                      <option value="">Extra Large</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-100"></div>
              <div className="input-group col-md-6 d-flex mb-3">
                <span className="input-group-btn mr-2">
                  <button
                    type="button"
                    className="quantity-left-minus btn"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="bi bi-dash"></i>
                  </button>
                </span>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  className="form-control input-number"
                  value="1"
                  min="1"
                  max="100"
                />
                <span className="input-group-btn ml-2">
                  <button
                    type="button"
                    className="quantity-right-plus btn"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </span>
              </div>
              <div className="w-100"></div>
              <div className="col-md-12">
                <p className="stock">600 kg available</p>
              </div>
            </div>
            <p>
              <a href="cart.html" className="button btn-black py-3 px-5" style={{"border-radius":"50px"}}>
                Add to Cart
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

