import React from "react";
import truck from "../assets/images/truck.gif";

const Orderdetails = () => {
  return (
    <section id="order-details" className="px-15 pt-0">
      <h2 className="title">Order Details:</h2>
      <div className="order-details">
        <ul>
          <li>
            <h4>
              Bag total <span>$220.00</span>
            </h4>
          </li>
          <li>
            <h4>
              Bag savings <span className="text-green">-$20.00</span>
            </h4>
          </li>
          <li>
            <h4>
              Coupon Discount{" "}
              <a href="coupons.html" className="theme-color">
                Apply Coupon
              </a>
            </h4>
          </li>
          <li>
            <h4>
              Delivery <span>$50.00</span>
            </h4>
          </li>
        </ul>
        <div className="total-amount">
          <h4>
            Total Amount <span>$270.00</span>
          </h4>
        </div>
        <div className="delivery-info">
          <img src={truck} className="img-fluid" alt="" />
          <h4>No Delivery Charges applied on this order </h4>
        </div>
      </div>
    </section>
  );
};

export default Orderdetails;
