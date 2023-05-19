import React from "react";
import { Link } from "react-router-dom";

const CartBottom = ({
  subLeftTitle,
  leftTitle,
  rightTitle,
  LeftLink,
  handleRight,
  className,
}) => {
  return (
    <div>
      <div className={`${className} cart-bottom`}>
        <div>
          <div className="left-content">
            {subLeftTitle ? (
              <div>
                <h4>{subLeftTitle}</h4>
                <Link to={LeftLink} className="theme-color">
                  {leftTitle}
                </Link>
              </div>
            ) : (
              <div className="left-content col-5">
                <Link to={LeftLink} className="title-color">
                  {leftTitle}
                </Link>
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
