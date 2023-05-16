import React from "react";
import { Link } from "react-router-dom";

const FindYourStlye = () => {
  const pData = [
    { url: require("../assets/images/products/1.jpg") },
    { url: require("../assets/images/products/2.jpg") },
    { url: require("../assets/images/products/3.jpg") },
    { url: require("../assets/images/products/4.jpg") },
  ];

  return (
    <section className="pt-0 tab-section">
      <div className="title-section px-15">
        <h2>Find your Style</h2>
        <h3>Super Summer Sale</h3>
      </div>
      <div className="tab-section">
        <ul className="nav nav-tabs theme-tab pl-15">
          <li className="nav-item">
            <button className="nav-link active">Trending Now</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Top Picks</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Featured Products</button>
          </li>
        </ul>
        <div className="tab-content px-15">
          <div className="tab-pane fade active show" id="trending">
            <div className="row gy-3 gx-3">
              {pData.map((item, index) => {
                return (
                  <div key={index} className="col-md-4 col-md-4 col-6">
                    <div className="product-box ratio_square">
                      <div className="img-part">
                        <Link
                          to="product"
                          className="bg-size"
                          style={{
                            backgroundImage: `url(${item.url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            display: "block",
                          }}
                        >
                          {/* <img
                            src={item.url}
                            alt=""
                            className="img-fluid bg-img"
                            // style="display: none;"
                          /> */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindYourStlye;
