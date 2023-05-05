import React from "react";

const CartBottom = () => {
  return (
    <div>
      <div className="cart-bottom">
        <div>
          <div className="left-content">
            <h4>$270.00</h4>
            <a href="#order-details" className="theme-color">
              View details
            </a>
          </div>
          <a href="delivery.html" className="btn btn-solid">
            Place Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartBottom;
