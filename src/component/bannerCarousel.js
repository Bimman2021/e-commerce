import React from "react";
// import img from "../assets/images/home-slider/1.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const images = [
    {
      url: require("../assets/images/home-slider/1.jpg"),
    },
    {
      url: require("../assets/images/home-slider/2.jpg"),
    },
    {
      url: require("../assets/images/home-slider/2.jpg"),
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1.06,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    className: "theme-dots",
  };

  return (
    <div className="overflow-hidden ratio_55">
      <Slider {...sliderSettings}>
        {images.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="slider-box bg-size"
                style={{
                  backgroundImage: `url(${item.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  display: "block",
                  height: "100%",
                }}
              >
                <img
                  src={item.url}
                  className="img-fluid bg-img"
                  alt=""
                  style={{
                    display: "none",
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                  }}
                ></img>
                <div className="slider-content">
                  <div>
                    <h2>Welcome To Multikart</h2>
                    <h1>Flat 50% OFF</h1>
                    <h6>Free Shipping Till Mid Night</h6>
                    <Link to="shop" className="btn btn-solid">
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
