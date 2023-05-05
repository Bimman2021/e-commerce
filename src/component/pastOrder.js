import React from "react";
import img from "../assets/images/products/3.jpg";
import { Link } from "react-router-dom";

const Pastorder = () => {
  return (
    <section className="section-b-space pt-0 px-15">
      <h2 className="page-title">Past Orders</h2>
      <ul className="order-listing">
        <li>
          <div className="order-box">
            <div className="d-flex align-items-center">
              <img src={img} className="img-fluid order-img" alt="" />
              <div className="media-body">
                <h4>Pink Hoodie t-shirt full </h4>
                <h5 className="content-color my-1">Size: S, Qty: 1</h5>
                <Link className="theme-color" to="">
                  View Details
                </Link>
              </div>
              <span className="status-label bg-theme text-white">
                delivered
              </span>
            </div>
            <div className="delivery-status">
              <div className="d-flex">
                <div>
                  <h6 className="content-color">Ordered:</h6>
                  <h6>26th May, 2021</h6>
                </div>
                <div>
                  <h6 className="content-color">Delivery Status:</h6>
                  <h6>Dispatched</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="rate-section">
            <ul>
              <li>
                <i className="iconly-Star icli"></i> Rate &amp; Review Product
              </li>
              <li>
                <i className="iconly-Question icli"></i> Need Help?
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Pastorder;
