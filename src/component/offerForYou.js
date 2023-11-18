import React from "react";
import sissorsImg from "../assets/svg/scissor.svg";
import handleCopy from "../config/copyToClipboard";

const OfferForYou = () => {
  return (
    <div className="product-detail-box px-15">
      <h4 className="page-title">Offers for You</h4>
      <h5 style={{ marginBottom: "3px" }}>
        Use code MULTIKART10 to get flat 10%
      </h5>
      <h6 className="content-color">
        Use code MULTIKART10 to get flat 10% off on minimum order of $200.00.
        Offer valid for first time users only
      </h6>
      <div
        className="offer-code pointer"
        onClick={(e) => {
          e.preventDefault();
          handleCopy("MULTIKART10");
        }}
      >
        <div className="code">
          <h6>MULTIKART10</h6>
          <img src={sissorsImg} className="img-fluid" alt="" />
        </div>
        <h6 className="content-color">Tap to copy</h6>
      </div>
    </div>
  );
};

export default OfferForYou;
