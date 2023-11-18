import React, { useState } from "react";
import truck from "../assets/images/truck.gif";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Orderdetails = ({ showTruck }) => {
  const [dataToRender, setDataToRender] = useState({
    total: 0,
    bagTotal: 0,
    saving: 0,
    delivery: 0,
  });
  const cartItems = useSelector((state) => state.cartItems);

  useEffect(() => {
    setDataToRender((prev) => {
      return { ...prev, ["bagTotal"]: bagTotal(cartItems) };
    });
  }, [cartItems.length]);
  return (
    <section id="order-details" className="px-15 pt-0">
      <h2 className="title">Order Details:</h2>
      <div className="order-details">
        <ul>
          <li>
            <h4>
              Bag total <span>${dataToRender.bagTotal}</span>
            </h4>
          </li>
          <li>
            <h4>
              Bag savings{" "}
              <span className="text-green">-$ {dataToRender.saving}</span>
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
              Delivery <span>${dataToRender.delivery}</span>
            </h4>
          </li>
        </ul>
        <div className="total-amount">
          <h4>
            Total Amount <span>${dataToRender.total}</span>
          </h4>
        </div>
        {showTruck && (
          <div className="delivery-info">
            <img src={truck} className="img-fluid" alt="" />
            <h4>No Delivery Charges applied on this order </h4>
          </div>
        )}
      </div>
    </section>
  );
};

export function OrderDetailsWithTracking() {
  return (
    <section className="px-15">
      <h2 className="page-title">Order Details</h2>
      <div className="details">
        <ul>
          <li className="mb-3 d-block">
            <h4 className="fw-bold mb-1">Your order # is: 64484032</h4>
            <h4 className="content-color">
              An email receipt including the details about your order has been
              sent to your email ID.
            </h4>
          </li>
          <li className="mb-3 d-block">
            <h4 className="fw-bold mb-1">This order will be shipped to:</h4>
            <h4 className="content-color">3501 Maloy Court,</h4>
            <h4 className="content-color">East Elmhurst, New York City</h4>
            <h4 className="content-color">NY 11369</h4>
          </li>
          <li className="d-block">
            <h4 className="fw-bold mb-1">Payment Method</h4>
            <h4 className="content-color">Google UPI</h4>
          </li>
        </ul>
      </div>
    </section>
  );
}

//to calculate total amount in bag
const bagTotal = (items) => {
  // if (typeof items === "object") return 0;
  let total = 0;
  items.forEach((item) => {
    total += item.price * item.qty;
  });
  return total;
};

//to calculate discount and amount saved
const bagSaving = (items) => {
  //formula
  //originalPrice = sellingPrice / (1 - percentage);
};

export default Orderdetails;
