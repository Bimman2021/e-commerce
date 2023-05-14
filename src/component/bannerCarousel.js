import React from "react";
import img from "../assets/images/home-slider/1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
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
  ];

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    rtl: false,
    autoplay: true,
  };

  return (
    <section className="top-space home-section ratio_55">
      <Slider className="pl-15" {...sliderSettings}>
        {cData.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="slider-box bg-size"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  display: "block",
                }}
              >
                <div className="slider-content">
                  <div>
                    <h2>Welcome To Multikart</h2>
                    <h1>Flat 50% OFF</h1>
                    <h6>Free Shipping Till Mid Night</h6>
                    <a href="shop.html" className="btn btn-solid">
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Banner;
