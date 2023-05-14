import React from "react";
import { Link } from "react-router-dom";

const CartBottom = ({
  subLeftTitle,
  leftTitle,
  rightTitle,
  handleLeft,
  handleRight,
}) => {
  return (
    <div>
      <div className="cart-bottom">
        <div>
          <div className="left-content">
            {subLeftTitle ? (
              <div>
                <h4>{subLeftTitle}</h4>
                <Link to="" onClick={handleLeft} className="theme-color">
                  {leftTitle}
                </Link>
              </div>
            ) : (
              <div className="left-content col-5">
                <a href="#" className="title-color">
                  {leftTitle}
                </a>
              </div>
            )}
          </div>
          <button onClick={handleRight} className="btn btn-solid">
            {rightTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartBottom;
