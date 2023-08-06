import React from "react";
import { Link } from "react-router-dom";
import WishBtn from "./wishBtn";
import { url } from "../config/constants";

const DealOfDay = ({ props }) => {
  return (
    <section className="deals-section px-15 pt-0">
      <div className="title-part">
        <h2>Deals of the Day</h2>
        <Link to="/shop">See All</Link>
      </div>
      <div className="product-section">
        <div className="row gy-3">
          {/*  */}
          {props.data.splice(0, 4).map((item, index) => {
            return (
              <div className="col-12" key={index}>
                <div className="product-inline">
                  <Link to={`/product/${item.id}`}>
                    <img
                      // src={img1}
                      src={`${url}${item.images[0]}`}
                      className="img-fluid"
                      alt=""
                    />
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
                  <WishBtn />
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
