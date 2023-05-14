import React from "react";
import { Link } from "react-router-dom";

const DealOfDay = ({ props }) => {
  const handleLike = (e) => {
    // check if the item is already in storage wish list
    // store in cookies || remove from cookie
    const classiItem = e.currentTarget.className;

    if (classiItem === "wishlist-btn") {
      e.currentTarget.className = "wishlist-btn animate active inactive";
    } else {
      e.currentTarget.className = "wishlist-btn";
    }
  };
  return (
    <section className="deals-section px-15 pt-0">
      <div className="title-part">
        <h2>Deals of the Day</h2>
        <Link href="shop.html">See All</Link>
      </div>
      <div className="product-section">
        <div className="row gy-3">
          {/* accepts array of object with pImage,pName,pWishlist,price,delPrice,pDiscount,pOwner */}
          {props.data.map((item, index) => {
            return (
              <div className="col-12" key={index}>
                <div className="product-inline">
                  <Link to="product">
                    <img src={item.image} className="img-fluid" alt="" />
                  </Link>
                  <div className="product-inline-content">
                    <div>
                      <Link to="product">
                        <h4>{item.title} </h4>
                      </Link>
                      <h5>by Mango</h5>
                      <div className="price">
                        <h4>
                          $ {item.price} <del>$35.00</del>
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DealOfDay;
