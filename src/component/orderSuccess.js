import React from "react";
import sus from "../assets/images/check-circle.gif";

const OrderSuccess = () => {
  return (
    <section className="order-success-section px-15 top-space xl-space">
      <div>
        <img src={sus} className="img-fluid" alt="" />
        <h1>Order successfully!</h1>
        <h2>Payment is successfully processed and your Order is on the way.</h2>
      </div>
    </section>
  );
};

export default OrderSuccess;
