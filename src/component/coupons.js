import React from "react";

const Coupons = () => {
  return (
    <section className="px-15 pt-0">
      <h2 className="title">Coupons:</h2>
      <div className="coupon-section">
        <i className="iconly-Discount icli icon-discount"></i>
        <input
          className="form-control form-theme"
          placeholder="Apply Coupons"
        />
        <i className="iconly-Arrow-Right-2 icli icon-right"></i>
      </div>
    </section>
  );
};

export default Coupons;
