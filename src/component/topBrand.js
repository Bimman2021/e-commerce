import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopBrand = () => {
  //
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1.04,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    // className: "theme-dots",
  };

  //
  return (
    <div>
      <Slider {...settings}> </Slider>
    </div>
  );
};

export default TopBrand;
