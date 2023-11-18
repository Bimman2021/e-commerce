import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BackHeader = ({ title, subTitle, style, options, optComponent }) => {
  const cartItems = useSelector((state) => state.cartItems.length);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header className={scroll ? "darkHeader" : ""} style={style}>
      <div className="back-links">
        <Link to={-1}>
          <i className="iconly-Arrow-Left icli"></i>
          <div className="content">
            <h2>{title}</h2>
            {subTitle && <h6>{subTitle}</h6>}
          </div>
        </Link>
      </div>
      {options && (
        <div className="header-option">
          <ul>
            <li>
              <Link to="/wishlist">
                <i className="iconly-Heart icli"></i>
              </Link>
            </li>
            <li>
              <Link className="mx-2 position-relative" to="/cart">
                {cartItems > 0 && (
                  <span className="badge rounded-pill bg-danger position-absolute top-0 translate-middle start-100">
                    {cartItems}
                  </span>
                )}

                <i className="iconly-Buy icli"></i>
              </Link>
            </li>

            {optComponent && optComponent}
          </ul>
        </div>
      )}
    </header>
  );
};

export default BackHeader;
