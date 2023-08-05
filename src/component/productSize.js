import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgPlus from "../assets/svg/plus-square.svg";
import imgMinus from "../assets/svg/minus-square.svg";

const ProductSize = ({ qty, setQty }) => {
  const plusQty = () => {
    setQty((prev) => {
      return prev + 1;
    });
  };

  const minusQty = () => {
    if (qty > 1) {
      setQty((prev) => {
        return prev - 1;
      });
    }
  };

  return (
    <div className="product-detail-box px-15">
      <div className="size-detail">
        <h4 className="size-title">
          Select Size: <Link to={""}> Size Chart</Link>
        </h4>
        <ul className="size-select">
          <li>
            <Link to={""}> S</Link>
          </li>
          <li>
            <Link to={""}> M</Link>
          </li>
          <li>
            <Link to={""}> L</Link>
          </li>
          <li className="disable">
            <del>XL</del>
          </li>
        </ul>
      </div>
      <div className="size-detail">
        <h4 className="size-title">Select Color:</h4>
        <ul className="filter-color">
          <li className="active">
            <Link to={""}>
              <div className="color-box light-purple"></div>
            </Link>
          </li>
          <li className="">
            <Link to={""}>
              <div className="color-box light-grey"></div>
            </Link>
          </li>
          <li className="">
            <Link to={""}>
              <div className="color-box blue-purple"></div>
            </Link>
          </li>
          <li className="">
            <div className="color-box light-orange">
              <Link to={""}></Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="size-detail">
        <h4 className="size-title">Quantity:</h4>
        <div className="qty-counter">
          <div className="input-group">
            <button
              type="button"
              className="btn quantity-left-minus"
              onClick={minusQty}
            >
              <img src={imgMinus} className="img-fluid" alt="" />
            </button>
            <input
              type="text"
              name="quantity"
              className="form-control form-theme qty-input input-number"
              value={qty}
              readOnly={true}
            />
            <button
              type="button"
              className="btn quantity-right-plus"
              onClick={plusQty}
            >
              <img src={imgPlus} className="img-fluid" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSize;
