import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import CanvasMenu from "./canvasMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const cartItems = useSelector((state) => state.cartItems.length);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <header className={scroll ? "darkHeader" : ""}>
      <CanvasMenu />
      <Link to="/" className="brand-logo">
        <img src={logo} className="img-fluid" alt="" />
      </Link>
      <div className="header-option">
        <ul>
          <li>
            <Link to="/search">
              <i className="iconly-Search icli"></i>
            </Link>
          </li>
          <li>
            <Link to="notifications">
              <i className="iconly-Notification icli"></i>
            </Link>
          </li>
          <li>
            <Link className="position-relative" to="/cart">
              {cartItems > 0 && (
                <span className="badge rounded-pill bg-danger position-absolute top-0 translate-middle start-100">
                  {cartItems}
                </span>
              )}

              <i className="iconly-Buy icli"></i>
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <i className="iconly-Heart icli"></i>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
