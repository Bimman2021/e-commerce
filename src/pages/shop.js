import React, { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../component/filter";
import Navbar from "../component/navBar";

const Header = () => {
  return (
    <header>
      <div className="back-links">
        <Link to={-1}>
          <i className="iconly-Arrow-Left icli"></i>
          <div className="content">
            <h2>Women Collection</h2>
            <h6>2050 Products</h6>
          </div>
        </Link>
      </div>
      <div className="header-option">
        <ul>
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

const Shop = () => {
  // #ff4c3b
  const [openFilter, setOpenFilter] = useState(false);

  const pData = [
    { url: require("../assets/images/products/1.jpg") },
    { url: require("../assets/images/products/2.jpg") },
    { url: require("../assets/images/products/3.jpg") },
    { url: require("../assets/images/products/4.jpg") },
  ];

  const handleFilter = () => {
    setOpenFilter((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="search-panel top-space xl-space px-15">
        <div className="search-bar">
          <input
            type="search"
            className="form-control form-theme"
            placeholder="Search"
          />
          <i className="iconly-Search icli search-icon"></i>
          <i className="iconly-Camera icli camera-icon"></i>
        </div>

        <Filter props={{ handleFilter, openFilter, setOpenFilter }} />
      </div>
      <section className="px-15 lg-t-space">
        <div className="row gy-3 gx-3">
          {pData.map((item, index) => {
            return (
              <div key={index} className="col-6">
                <div className="product-box ratio_square">
                  <div className="img-part">
                    <Link
                      to="product.html"
                      className="bg-size"
                      style={{
                        backgroundImage: `url(${item.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        display: "block",
                      }}
                    >
                      <img
                        src="assets/images/products/1.jpg"
                        alt=""
                        className="img-fluid bg-img"
                        // style="display: none;"
                      />
                    </Link>
                    <div className="wishlist-btn">
                      <i className="iconly-Heart icli"></i>
                      <i className="iconly-Heart icbo"></i>
                      <div className="effect-group">
                        <span className="effect"></span>
                        <span className="effect"></span>
                        <span className="effect"></span>
                        <span className="effect"></span>
                        <span className="effect"></span>
                      </div>
                    </div>
                    <label>new</label>
                  </div>
                  <div className="product-content">
                    <ul className="ratings">
                      <li>
                        <i className="iconly-Star icbo"></i>
                      </li>
                      <li>
                        <i className="iconly-Star icbo"></i>
                      </li>
                      <li>
                        <i className="iconly-Star icbo"></i>
                      </li>
                      <li>
                        <i className="iconly-Star icbo"></i>
                      </li>
                      <li>
                        <i className="iconly-Star icbo empty"></i>
                      </li>
                    </ul>
                    <Link to="product.html">
                      <h4>Blue Denim Jacket</h4>
                    </Link>
                    <div className="price">
                      <h4>
                        $32.00 <del>$35.00</del>
                        <span>20%</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="panel-space"></div>
    </div>
  );
};

export default Shop;
