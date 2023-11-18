import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Header from "../component/header";
import Banner from "../component/bannerCarousel";
import DealOfDay from "../component/deal";
// import axios from "../config/axios";
import Navbar from "../component/navBar";
import SectionCategories from "../component/sectionCategories";
import FindYourStyle from "../component/findYourStyle";
// import img from "../assets/images/products/1.jpg";

import BannerTimer from "../component/bannerTimer";
import OffCanvasExample from "../component/addToHomeScreenCanvas";
// import datas from "../config/products";

import axios from "../config/axios";
import MSpinner from "../component/mSpinner";
import Star from "../component/star";

const Home = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      const resData = await axios.get("/get_products");
      const res = resData.data;
      setData(res);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return isLoading ? (
    <MSpinner />
  ) : (
    <>
      <Header />
      <OffCanvasExample show={show} setShow={setShow} />
      <SectionCategories />
      <div className="divider"></div>
      <Banner />
      <DealOfDay props={{ data }} />
      <div className="divider"></div>
      <FindYourStyle />
      <BannerTimer />
      <div className="divider"></div>
      <Star />
      <div className="panel-space"></div>
      <Navbar />
    </>
  );
};

export default Home;
