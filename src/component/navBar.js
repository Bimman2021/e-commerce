import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bottom-panel">
      <ul>
        <li className="active">
          <Link to="index">
            <div className="icon">
              <i className="iconly-Home icli"></i>
              <i className="iconly-Home icbo"></i>
            </div>
            <span>home</span>
          </Link>
        </li>
        <li>
          <Link to="category">
            <div className="icon">
              <i className="iconly-Category icli"></i>
              <i className="iconly-Category icbo"></i>
            </div>
            <span>category</span>
          </Link>
        </li>
        <li>
          <Link to="cart">
            <div className="icon">
              <i className="iconly-Buy icli"></i>
              <i className="iconly-Buy icbo"></i>
            </div>
            <span>cart</span>
          </Link>
        </li>
        <li>
          <Link to="wishlist">
            <div className="icon">
              <i className="iconly-Heart icli"></i>
              <i className="iconly-Heart icbo"></i>
            </div>
            <span>wishlist</span>
          </Link>
        </li>
        <li>
          <Link to="profile">
            <div className="icon">
              <i className="iconly-Profile icli"></i>
              <i className="iconly-Profile icbo"></i>
            </div>
            <span>profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
