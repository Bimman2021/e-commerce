import React, { useState } from "react";
import img from "../assets/images/products/9.jpg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimilarProducts = ({ title }) => {
  const [sliderRef, setSliderRef] = useState(null);

  const cData = [
    {
      pName: "Blue Denin Jacket",
      pDiscount: "10%",
      delPrice: "30",
      pPrice: "20",
      inWishList: false,
      pRating: "3",
    },
    {
      pName: "Male Jacket",
      pDiscount: "22%",
      delPrice: "32",
      pPrice: "70",
      inWishList: false,
      pRating: "4",
    },
    {
      pName: "Male Jacket",
      pDiscount: "22%",
      delPrice: "32",
      pPrice: "70",
      inWishList: false,
      pRating: "4",
    },
    {
      pName: "Male Jacket",
      pDiscount: "22%",
      delPrice: "32",
      pPrice: "70",
      inWishList: false,
      pRating: "4",
    },
    {
      pName: "Male Jacket",
      pDiscount: "22%",
      delPrice: "32",
      pPrice: "70",
      inWishList: false,
      pRating: "4",
    },
  ];

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <section className="pt-0 product-slider-section overflow-hidden">
      <div className="title-section px-15">
        <h2>{title}</h2>
      </div>
      <div className="">
        <Slider
          ref={setSliderRef}
          className="pl-15 d-chevron"
          {...sliderSettings}
        >
          {cData.map((item, index) => {
            return (
              <div className="product-box ratio_square" key={index}>
                <div
                  className=""
                  // style={{
                  //   margin: "0 0px",
                  // }}
                >
                  <div className="img-part">
                    <a
                      href="product.html"
                      className="bg-size"
                      style={{
                        backgroundImage: `url(
                   ${img}
                 )`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        display: "block",
                      }}
                    ></a>
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
                    <a href="product.html" tabIndex="-1">
                      <h4>Blue Denim Jacket</h4>
                    </a>
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
        </Slider>
      </div>
    </section>
  );
};

export default SimilarProducts;
