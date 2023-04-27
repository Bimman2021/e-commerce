import React from "react";

const DealOfDay = () => {
  const handleLike = (e) => {
    // check if the item is already in storage wish list
    // store in cookies || remove from cookie
    e.currentTarget.className = "wishlist-btn animate active inactive";
    console.log(e.currentTarget.className);
  };
  return (
    <section className="deals-section px-15 pt-0">
      <div className="title-part">
        <h2>Deals of the Day</h2>
        <a href="shop.html">See All</a>
      </div>
      <div className="product-section">
        <div className="row gy-3">
          {/* accepts array of object with pImage,pName,pWishlist,price,delPrice,pDiscount,pOwner */}
          <div className="col-12">
            <div className="product-inline">
              <a href="product.html">
                <img
                  src={require("../assets/images/products/1.jpg")}
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="product-inline-content">
                <div>
                  <a href="product.html">
                    <h4>Pink Hoodie t-shirt full </h4>
                  </a>
                  <h5>by Mango</h5>
                  <div className="price">
                    <h4>
                      $32.00 <del>$35.00</del>
                      <span>20%</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="wishlist-btn" onClick={handleLike}>
                <i className="iconly-Heart icli"></i>
                <i className="iconly-Heart icbo"></i>
                <div className="effect-group">
                  <span className="effect"></span>
                  <span className="effect"></span>
                  <span className="effect"></span>
                  <span className="effect"></span>
                  <span className="effect"></span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-12">
            <div className="product-inline">
              <a href="product.html">
                <img
                  src={require("../assets/images/products/2.jpg")}
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="product-inline-content">
                <div>
                  <a href="product.html">
                    <h4>Men Blue Denim Jacket</h4>
                  </a>
                  <h5>by Zara</h5>
                  <div className="price">
                    <h4>
                      $32.00<span>SAVE 20%</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="wishlist-btn">
                <i className="iconly-Heart icli"></i>
                <i className="iconly-Heart icbo"></i>
                <div className="effect-group">
                  <span className="effect"></span>
                  <span className="effect"></span>
                  <span className="effect"></span>
                  <span className="effect"></span>
                  <span className="effect"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="product-inline">
              <a href="product.html">
                <img
                  src={require("../assets/images/products/3.jpg")}
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="product-inline-content">
                <div>
                  <a href="product.html">
                    <h4>Pink Hoodie t-shirt full </h4>
                  </a>
                  <h5>by H&amp;M</h5>
                  <div className="price">
                    <h4>
                      $32.00 <del>$35.00</del>
                      <span>20%</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="wishlist-btn">
                <i className="iconly-Heart icli"></i>
                <i className="iconly-Heart icbo"></i>
                <div className="effect-group">
                  <span className="effect"></span>
                  <span className="effect"></span>
                  <span className="effect"></span>
                  <span className="effect"></span>
                  <span className="effect"></span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default DealOfDay;
