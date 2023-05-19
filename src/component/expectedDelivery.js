import React from "react";
import img from "../assets/images/products/1.jpg";

const ExpectedDelivery = () => {
  return (
    <section class="px-15 pt-0">
      <h2 class="page-title">Expected Delivery</h2>
      <div class="product-section">
        <div class="row gy-3">
          <div class="col-12">
            <div class="product-inline">
              <a href="product.html">
                <img src={img} class="img-fluid" alt="" />
              </a>
              <div class="product-inline-content">
                <div>
                  <a href="product.html">
                    <h4 class="content-color">Men Blue Denim Jacket</h4>
                  </a>
                  <div class="price">
                    <h4>
                      Delivery by <span>25th July</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectedDelivery;
