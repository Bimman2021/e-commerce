import React from "react";
import TrackOrderUI from "../component/trackOrderUI";
import BackHeader from "../component/backHeader";
import img from "../assets/images/products/2.jpg";
import { Link } from "react-router-dom";
import RateSection from "../component/rateSection";

const OrderTrack = () => {
  return (
    <>
      <BackHeader
        style={{ backgroundColor: "transparent" }}
        title="Track Order"
      />
      <div className="map-product-section px-15">
        <div className="product-inline">
          <Link to="product.html">
            <img src={img} className="img-fluid" alt="" />
          </Link>
          <div className="product-inline-content">
            <div>
              <Link to="product.html">
                <h4>Men Blue Denim Jacket</h4>
              </Link>
              <h5 className="content-color">Size: S, Qty: 1</h5>
              <div className="price">
                <h4>$32.00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrackOrderUI />
      <RateSection />
      <div className="divider"></div>
    </>
  );
};

export default OrderTrack;
