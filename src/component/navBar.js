import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="bottom-panel">
      <ul>
        <li class="active">
          <Link to="index">
            <div class="icon">
              <i class="iconly-Home icli"></i>
              <i class="iconly-Home icbo"></i>
            </div>
            <span>home</span>
          </Link>
        </li>
        <li>
          <Link to="category">
            <div class="icon">
              <i class="iconly-Category icli"></i>
              <i class="iconly-Category icbo"></i>
            </div>
            <span>category</span>
          </Link>
        </li>
        <li>
          <Link to="cart">
            <div class="icon">
              <i class="iconly-Buy icli"></i>
              <i class="iconly-Buy icbo"></i>
            </div>
            <span>cart</span>
          </Link>
        </li>
        <li>
          <Link to="wishlist">
            <div class="icon">
              <i class="iconly-Heart icli"></i>
              <i class="iconly-Heart icbo"></i>
            </div>
            <span>wishlist</span>
          </Link>
        </li>
        <li>
          <Link to="profile">
            <div class="icon">
              <i class="iconly-Profile icli"></i>
              <i class="iconly-Profile icbo"></i>
            </div>
            <span>profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
