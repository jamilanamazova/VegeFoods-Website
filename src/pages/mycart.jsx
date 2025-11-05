import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Bell Pepper', price: 4.9, quantity: 1, image: 'https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg' },
    { id: 2, name: 'Bell Pepper', price: 15.7, quantity: 1, image: 'https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg' },
]);


  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="shop-container mx-auto p-4 text-center">
      <table className="cart-table">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">&nbsp;</th>
            <th className="border border-gray-200 px-4 py-2">Product List</th>
            <th className="border border-gray-200 px-4 py-2">&nbsp;</th>
            <th className="border border-gray-200 px-4 py-2">Price</th>
            <th className="border border-gray-200 px-4 py-2">Quantity</th>
            <th className="border border-gray-200 px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="border border-gray-200 px-4 py-2">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="remove-button"
                >
                  &times;
                </button>
              </td>
              <td className="border border-gray-200 px-4 py-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover mx-auto"
                />
              </td>

              <td className="border border-gray-200 px-4 py-2">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500">Far far away, behind the word mountains...</p>
              </td>
              <td className="border border-gray-200 px-4 py-2">${item.price.toFixed(2)}</td>
              <td className="border border-gray-200 px-4 py-2">
                <input
                  type="number"
                  className="w-16 border border-gray-300 rounded p-1 text-center"
                  value={item.quantity}
                  min="1"
                  max="100"
                  onChange={(e) =>
                    handleQuantityChange(item.id, Math.max(1, Number(e.target.value)))
                  }
                />
              </td>
              <td className="border border-gray-200 px-4 py-2">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row justify-content-end">
        <div className=" col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
          <div className="cart-total mb-3">
            <h3>Coupon Code</h3>
            <p>Enter your coupon code if you have one</p>
            <form action="#" className="info">
              <div className="form-group" style={{"textAlign":"left"}}>
                <label htmlFor="coupon-code">Coupon code</label>
                <input
                  type="text"
                  id="coupon-code"
                  className="form-control text-left px-3"
                  placeholder=""
                />
              </div>
            </form>
          </div>
          <p style={{"margin-top":"30px","textAlign":"left"}}>
            <Link to="/shopcheckout" className="btn-primary py-3 px-4" >
              Apply Coupon
            </Link>
          </p>
        </div>
        <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
          <div className="cart-total mb-3">
            <h3>Estimate Shipping and Tax</h3>
            <p>Enter your destination to get a shipping estimate</p>
            <form action="#" className="info" style={{"textAlign":"left"}}>
              <div className="form-group" >
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  className="form-control text-left px-3"
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State/Province</label>
                <input
                  type="text"
                  id="state"
                  className="form-control text-left px-3"
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="zip">Zip/Postal Code</label>
                <input
                  type="text"
                  id="zip"
                  className="form-control text-left px-3"
                  placeholder=""
                />
              </div>
            </form>
          </div>
          <p style={{"margin-top":"30px","textAlign":"left"}}>
            <Link to="/shopcheckout" className=" btn-primary py-3 px-4" >
              Estimate
            </Link>
          </p>
        </div>
        <div className=" col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
          <div className="cart-total mb-3">
            <h3>Cart Totals</h3>
            <p className="d-flex">
              <span>Subtotal</span>
              <span>$20.60</span>
            </p>
            <p className="d-flex">
              <span>Delivery</span>
              <span>$0.00</span>
            </p>
            <p className="d-flex">
              <span>Discount</span>
              <span>$3.00</span>
            </p>
            <hr />
            <p className="d-flex total-price">
              <span>Total</span>
              <span>$17.60</span>
            </p>
          </div>
          <p style={{"margin-top":"30px","textAlign":"left"}}>
            <Link to="/shopcheckout" className="btn-primary py-3 px-4">
              Proceed to Checkout
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
