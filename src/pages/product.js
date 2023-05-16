import React from "react";
import { Link } from "react-router-dom";
import shareImg from "../assets/svg/share-2.svg";
import { RWebShare } from "react-web-share";

const Header = () => {
  return (
    <header className="">
      <div className="back-links">
        <Link to="shop.html">
          <i className="iconly-Arrow-Left icli"></i>
          <div className="content">
            <h2>Floral Skirts </h2>
          </div>
        </Link>
      </div>
      <div className="header-option">
        <ul>
          <li>
            <RWebShare
              data={{
                text: "Like humans, flamingos make friends for life",
                url: "https://on.natgeo.com/2zHaNup",
                title: "Flamingos",
              }}
            >
              <img src={shareImg} className="img-fluid" alt="" />
            </RWebShare>
          </li>
          <li>
            <Link to="wishlist.html">
              <i className="iconly-Heart icli"></i>
            </Link>
          </li>
          <li>
            <Link to="cart.html">
              <i className="iconly-Buy icli"></i>
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
