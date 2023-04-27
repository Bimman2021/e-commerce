import React from "react";
import bg from "../assets/images/products/1.jpg";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="row gy-3 gx-3">
      <div className="col-6">
        <div className="product-box ratio_square">
          <div className="img-part">
            <Link
              to={""}
              className="bg-size"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                display: "block",
              }}
            ></Link>
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
            <Link to={""} href="product.html">
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
    </div>
  );
};

export default Products;
