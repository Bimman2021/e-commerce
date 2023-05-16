import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="">
      <div class="back-links">
        <Link to="shop.html">
          <i class="iconly-Arrow-Left icli"></i>
          <div class="content">
            <h2>Floral Skirts </h2>
          </div>
        </Link>
      </div>
      <div class="header-option">
        <ul>
          <li>
            <Link to="">
              <img src="assets/svg/share-2.svg" class="img-fluid" alt="" />
            </Link>
          </li>
          <li>
            <Link to="wishlist.html">
              <i class="iconly-Heart icli"></i>
            </Link>
          </li>
          <li>
            <Link to="cart.html">
              <i class="iconly-Buy icli"></i>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

const Product = () => {
  return (
    <div>
      Product
      <Header />
    </div>
  );
};

export default Product;
