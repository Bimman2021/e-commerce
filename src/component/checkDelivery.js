import React from "react";
import deliveryImg from "../assets/svg/delivery.svg";
import refundImg from "../assets/svg/refund.svg";
import payImg from "../assets/svg/payment.svg";

const CheckDelivery = () => {
  return (
    <div>
      <div className="check-delivery-section product-detail-box px-15">
        <div className="title-section">
          <h4>Check Delivery</h4>
          <h6 className="content-color">
            Enter Pincode to check delivery date / pickup option
          </h6>
        </div>
        <div className="pincode-form">
          <input className="form-control form-theme" placeholder="Pin code" />
          <a href="">Check</a>
        </div>
        <div className="service-section">
          <ul>
            <li>
              <img src={deliveryImg} className="img-fluid" alt="" />
              Free Delivery on order above $200.00
            </li>
            <li>
              <img src={payImg} className="img-fluid" alt="" />
              Cash On delivery Available
            </li>
            <li>
              <img src={refundImg} className="img-fluid" alt="" />
              Easy 21 days returns and exchanges
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CheckDelivery;
