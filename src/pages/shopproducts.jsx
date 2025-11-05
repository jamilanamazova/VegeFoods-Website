import React, { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Bell Pepper", price: 4.9, quantity: 1, image: "https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg" },
    { id: 2, name: "Strawberries", price: 15.7, quantity: 1, image: "https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg" },
    { id: 3, name: "Green Beans", price: 12.0, quantity: 1, image: "https://preview.colorlib.com/theme/vegefoods/images/product-3.jpg" },
    { id: 4, name: "Purple Cabbage", price: 10.0, quantity: 1, image: "https://preview.colorlib.com/theme/vegefoods/images/product-4.jpg" },
    { id: 5, name: 'Bell Pepper', price: 15.7, quantity: 1, image: 'https://preview.colorlib.com/theme/vegefoods/images/product-5.jpg' },
    { id: 6, name: 'Bell Pepper', price: 15.7, quantity: 1, image: 'https://preview.colorlib.com/theme/vegefoods/images/product-6.jpg' },
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

  if (cartItems.length === 0) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Your Cart is Empty</h2>
        <p className="text-gray-500">Add some items to your cart to see them here!</p>
      </div>
    );
  }

  return (
    <div className="shop-container mx-auto p-4">
      <table className="cart-table w-full border-collapse border border-gray-200 text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">&nbsp;</th>
            <th className="border border-gray-200 px-4 py-2">Product</th>
            <th className="border border-gray-200 px-4 py-2">Name</th>
            <th className="border border-gray-200 px-4 py-2">Price</th>
            <th className="border border-gray-200 px-4 py-2">Quantity</th>
            <th className="border border-gray-200 px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-200 px-4 py-2">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-600 hover:text-red-800"
                  aria-label="Remove item"
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
                <p className="text-sm text-gray-500">Fresh and organic produce.</p>
              </td>
              <td className="border border-gray-200 px-4 py-2">
                ${item.price.toFixed(2)}
              </td>
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
    </div>
  );
};

export default ShoppingCart;
