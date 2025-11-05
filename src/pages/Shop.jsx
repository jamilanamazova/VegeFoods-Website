import React from "react";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Bell Pepper",
      imgSrc: "https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg",
      price: { original: 120, sale: 80 },
      discount: "30%",
    },
    {
      id: 2,
      name: "Strawberry",
      imgSrc: "https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg",
      price: { original: 120 },
    },
    {
      id: 3,
      name: "Green Beans",
      imgSrc: "https://preview.colorlib.com/theme/vegefoods/images/product-3.jpg",
      price: { original: 120 },
    },
    {
      id: 4,
      name: "Purple Cabbage",
      imgSrc: "https://preview.colorlib.com/theme/vegefoods/images/product-4.jpg",
      price: { original: 120 },
    },
    {
      id: 5,
      name: "Tomatoe",
      imgSrc: "https://preview.colorlib.com/theme/vegefoods/images/product-5.jpg",
      price: { original: 120, sale: 80 },
      discount: "30%",
    },
     {
      id: 6,
      name: "Purple Cabbage",
      imgSrc: "https://preview.colorlib.com/theme/vegefoods/images/product-6.jpg",
      price: { original: 120 },
    },
     {
      id: 7,
      name: "Purple Cabbage",
      imgSrc: "https://preview.colorlib.com/theme/vegefoods/images/product-7.jpg",
      price: { original: 120 },
    },
     {
      id: 8,
      name: "Purple Cabbage",
      imgSrc: "https://preview.colorlib.com/theme/vegefoods/images/product-8.jpg",
      price: { original: 120 },
    },
    {
      id: 9,
      name: "Tomatoe",
      imgSrc: "https://preview.colorlib.com/theme/vegefoods/images/product-9.jpg",
      price: { original: 120, sale: 80 },
      discount: "30%",
    },
     {
      id: 10,
      name: "Purple Cabbage",
      imgSrc: "https://preview.colorlib.com/theme/vegefoods/images/product-10.jpg",
      price: { original: 120 },
    },
     {
      id: 11,
      name: "Purple Cabbage",
      imgSrc: "https://preview.colorlib.com/theme/vegefoods/images/product-11.jpg",
      price: { original: 120 },
    },
     {
      id: 12 ,
      name: "Purple Cabbage",
      imgSrc: "https://preview.colorlib.com/theme/vegefoods/images/product-12.jpg",
      price: { original: 120 },
    },

  ];

  return (
    <section className="main-section">
      <div className="shop-container">
        <div className="shop-row justify-content-center">
          <div className="col-md-10 mb-5 text-center ">
            <ul className="shopproduct-category ">
              <li><a href="#" className="active">All</a></li>
              <li><a href="#">Vegetables</a></li>
              <li><a href="#">Fruits</a></li>
              <li><a href="#">Juice</a></li>
              <li><a href="#">Dried</a></li>
            </ul>
          </div>
        </div>
        <div className="shop-row">
          {products.map((product) => (
            <div className="col-md-6 col-lg-3 ftco-animate fadeInUp" key={product.id}>
              <div className="product gap-10px">
                <a href="#" className="img-prod">
                  <img className="img-fluid" src={product.imgSrc} alt={product.name} />
                  {product.discount && <span className="status">{product.discount}</span>}
                  <div className="overlay"></div>
                </a>
                <div className="text py-3 pb-4 px-3 text-center">
                  <h3><a href="#">{product.name}</a></h3>
                  <div className="d-flex">
                    <div className="pricing">
                      {product.price.sale ? (
                        <p className="price">
                          <span className="mr-2 price-dc">${product.price.original}</span>
                          <span className="price-sale">${product.price.sale}</span>
                        </p>
                      ) : (
                        <p className="price"><span>${product.price.original}</span></p>
                      )}
                    </div>
                  </div>
                  <div className="bottom-area d-flex px-3">
                    <div className="m-auto d-flex">
                      <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                        <span><i className="bi bi-list"></i></span>
                      </a>
                      <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                        <span><i className="bi bi-cart-dash"></i></span>
                      </a>
                      <a href="#" className="heart d-flex justify-content-center align-items-center">
                        <span><i className="bi bi-heart"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
