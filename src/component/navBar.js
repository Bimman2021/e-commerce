import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bottom-panel">
      <ul>
        <li>
          <NavLink to="/">
            <div className="icon">
              <i className="iconly-Home icli"></i>
              <i className="iconly-Home icbo"></i>
            </div>
            <span>home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/category">
            <div className="icon">
              <i className="iconly-Category icli"></i>
              <i className="iconly-Category icbo"></i>
            </div>
            <span>category</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <div className="icon">
              <i className="iconly-Buy icli"></i>
              <i className="iconly-Buy icbo"></i>
            </div>
            <span>cart</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/wishlist">
            <div className="icon">
              <i className="iconly-Heart icli"></i>
              <i className="iconly-Heart icbo"></i>
            </div>
            <span>wishlist</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <div className="icon">
              <i className="iconly-Profile icli"></i>
              <i className="iconly-Profile icbo"></i>
            </div>
            <span>profile</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
