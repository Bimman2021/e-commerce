import React from "react";
import img from "../assets/images/products/1.jpg";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  return (
    <section className="px-15 pt-0">
      <h2 className="page-title">Order Summary</h2>
      <div className="product-section">
        <div className="row gy-3">
          <div className="col-12">
            <div className="product-inline">
              <Link to="product">
                <img src={img} className="img-fluid" alt="" />
              </Link>
              <div className="product-inline-content">
                <div>
                  <Link to="product">
                    <h4>Pink Hoodie t-shirt full </h4>
                  </Link>
                  <h5 className="content-color">Size: S, Qty: 1</h5>
                  <div className="price">
                    <h4>$32.00</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
