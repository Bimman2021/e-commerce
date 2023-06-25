import React from "react";
import { Link } from "react-router-dom";
import shareImg from "../assets/svg/share-2.svg";
import { RWebShare } from "react-web-share";
import ProductDetails from "../component/productDetails";
// import Products from "../component/products";
import ReturnPolicy from "../component/returnPolicy";
import ProductSize from "../component/productSize";
import CustomerReview from "../component/customerReview";
import CheckDelivery from "../component/checkDelivery";
import SimilarProducts from "../component/similarProducts";
import Slider from "react-slick";

const Header = () => {
  return (
    <header className="">
      <div className="back-links">
        <Link to={-1}>
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
  //
  const images = [
    {
      url: require("../assets/images/1.jpg"),
    },
    {
      url: require("../assets/images/home-slider/2.jpg"),
    },
    {
      url: require("../assets/images/home-slider/2.jpg"),
    },
  ];

  //
  const slickProps = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "theme-dots",
  };

  return (
    <div>
      <Header />

      <Slider {...slickProps}>
        {images.map((item, index) => {
          return (
            <div key={index} className="cl">
              <img src={item.url} className="img-fluid bg-img" alt="" />
            </div>
          );
        })}
      </Slider>

      {/*  */}
      <div className="product-detail-box px-15 pt-2">
        <div className="main-detail">
          <h2 className="text-capitalize">floral print skirt with white top</h2>
          <h6 className="content-color">
            Black, off-white and peach-coloured printed flared skirt, has zip
            closure, attached lining
          </h6>
          <div className="rating-section">
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
            <h6 className="content-color">(20 ratings)</h6>
          </div>
          <div className="price">
            <h4>
              $32.00 <del>$35.00</del>
              <span>(20% off)</span>
            </h4>
          </div>
          <h6 className="text-green">inclusive of all taxes</h6>
        </div>
      </div>
      {/*  */}

      <div className="divider"></div>
      <ProductSize />
      <div className="divider"></div>
      <ReturnPolicy />
      <div className="divider"></div>
      <ProductDetails />
      <div className="divider"></div>
      <CustomerReview />
      <div className="divider"></div>
      <CheckDelivery />
      <div className="divider"></div>
      <SimilarProducts title={"Similar Products"} />
      <Footer />
      <div className="panel-space"></div>
    </div>
  );
};

export default Product;
