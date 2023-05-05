import React from "react";
import Searchs from "../component/search";
import { Link } from "react-router-dom";
import denin from "../assets/images/category/denim.png";
import skirt from "../assets/images/category/skirts.png";
import flowerPrint from "../assets/images/category/flowerprint.png";

const Search = () => {
  return (
    <>
      <Searchs />
      <section className="px-15 inner-category">
        <h4 className="page-title">Trending Category</h4>
        <div className="row gx-3">
          <div className="col-4">
            <Link to="shop.html">
              <img src={flowerPrint} className="img-fluid" alt="" />
              <h4>Flowerprint</h4>
            </Link>
          </div>
          <div className="col-4">
            <Link to="shop.html">
              <img src={denin} className="img-fluid" alt="" />
              <h4>Denim</h4>
            </Link>
          </div>
          <div className="col-4">
            <Link to="shop.html">
              <img src={skirt} className="img-fluid" alt="" />
              <h4>Skirts</h4>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
