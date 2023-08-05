import React, { useState } from "react";
import { Link } from "react-router-dom";
import WishBtn from "./wishBtn";
import products from "../config/products";
import StarRating from "./starRating";

const FindYourStlye = () => {
  const [currentFilter, setCurrentFilter] = useState("Trending Now");
  const tags = ["Trending Now", "Featured Product", "top picks", "top rated"];

  const pData = products.filter((p) => {
    return p.tag.includes(currentFilter.toLowerCase());
  });

  const handleFilterClick = (e) => {
    const dataId = e.currentTarget.getAttribute("data-id").toLowerCase();
    setCurrentFilter(() => dataId);
    console.log({
      currentFilter: currentFilter,
      currentClick: dataId,
    });
  };

  //
  return (
    <section className="pt-0 tab-section">
      <div className="title-section px-15">
        <h2>Find your Style</h2>
        <h3>Super Summer Sale</h3>
      </div>
      <div className="tab-section">
        <ul className="nav nav-tabs theme-tab pl-15">
          {tags.map((item, index) => {
            return (
              <li className="nav-item" key={index}>
                <button
                  onClick={handleFilterClick}
                  data-id={item}
                  className={
                    currentFilter === item ? "nav-link active" : "nav-link"
                  }
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="tab-content px-15">
          <div className="tab-pane fade active show">
            <div className="row gy-3 gx-3">
              {pData.map((item, index) => {
                return (
                  <div key={index} className="col-md-4 col-md-4 col-6">
                    <div className="product-box ratio_square">
                      <div className="img-part">
                        <Link
                          to={`product/${item.id}`}
                          className="bg-size"
                          style={{
                            backgroundImage: `url(${item.images[0]})`,
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
                        <WishBtn productId={item.id} />
                      </div>
                      <StarRating
                        star={2}
                        name="Gucci jean shirt"
                        price={50}
                        currency={"$"}
                        // del={75}
                        discount={12}
                      />
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
