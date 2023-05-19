import React from "react";
import { Link } from "react-router-dom";
import shareImg from "../assets/svg/share-2.svg";
import { RWebShare } from "react-web-share";
import ProductDetails from "../component/productDetails";
import Products from "../component/products";

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
                url: "https://olo.com/2zHaNup",
                title: "Flamingos",
              }}
            >
              <img src={shareImg} className="img-fluid" alt="" />
            </RWebShare>
          </li>
          <li>
            <Link to="/wishlist">
              <i className="iconly-Heart icli"></i>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="iconly-Buy icli"></i>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <div className="fixed-panel">
      <div className="row">
        <div className="col-6">
          <Link to="/wishlist">
            <i className="iconly-Heart icli"></i>WISHLIST
          </Link>
        </div>
        <div className="col-6">
          <button className="theme-color">
            <i className="iconly-Buy icli"></i>ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <div>
      <Header />
      <div className="divider"></div>
      <ProductDetails />

      <Footer />
    </div>
  );
};

export default Product;
