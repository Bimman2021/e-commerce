import React from "react";
import saleImg from "../assets/images/sale.gif"; //"assets/images/category/sale.png"
import menImg from "../assets/images/category/men.png";
import womenImg from "../assets/images/category/women.png";
import kidImg from "../assets/images/category/kids.png";
import footwareImg from "../assets/images/category/footwear.png";
import jewllreyImg from "../assets/images/category/jewllery.png";
import beautyImg from "../assets/images/category/beauty.png";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <section className="category-listing px-15 lg-space top-space pt-0">
        <Link to="inner-category.html" className="category-wrap">
          <div className="content-part">
            <img src={saleImg} className="img-fluid sale-gif" alt="" />
            <h4>upto 50% off on all products </h4>
          </div>
          <div className="img-part">
            <img src={saleImg} className="img-fluid" alt="" />
          </div>
        </Link>
        <Link to="inner-category.html" className="category-wrap">
          <div className="content-part">
            <h2>WOMEN</h2>
            <h4>t-shirts, tops, bottoms..</h4>
          </div>
          <div className="img-part">
            <img src={womenImg} className="img-fluid" alt="" />
          </div>
        </Link>
        <Link to="inner-category.html" className="category-wrap">
          <div className="content-part">
            <h2>MEN</h2>
            <h4>jackets, jeans, denims..</h4>
          </div>
          <div className="img-part">
            <img src={menImg} className="img-fluid" alt="" />
          </div>
        </Link>
        <Link to="inner-category.html" className="category-wrap">
          <div className="content-part">
            <h2>KIDS</h2>
            <h4>clothing, toys, books..</h4>
          </div>
          <div className="img-part">
            <img src={kidImg} className="img-fluid" alt="" />
          </div>
        </Link>
        <Link to="inner-category.html" className="category-wrap">
          <div className="content-part">
            <h2>BEAUTY</h2>
            <h4>skincare, haircare, makeup..</h4>
          </div>
          <div className="img-part">
            <img src={beautyImg} className="img-fluid" alt="" />
          </div>
        </Link>
        <Link to="inner-category.html" className="category-wrap">
          <div className="content-part">
            <h2>FOOTWEAR</h2>
            <h4>shoes, sandle, activewear..</h4>
          </div>
          <div className="img-part">
            <img src={footwareImg} className="img-fluid" alt="" />
          </div>
        </Link>
        <Link to="inner-category.html" className="category-wrap">
          <div className="content-part">
            <h2>JEWELLERY</h2>
            <h4>necklace, chains, earrings..</h4>
          </div>
          <div className="img-part">
            <img src={jewllreyImg} className="img-fluid" alt="" />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Category;
