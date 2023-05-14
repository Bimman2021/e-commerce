import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Header from "../component/header";
import Banner from "../component/bannerCarousel";
import DealOfDay from "../component/deal";
import axios from "../config/axios";
import Navbar from "../component/navBar";

// import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("?limit=5")
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Header />
      <Banner />
      {data ? (
        <DealOfDay props={{ data }} />
      ) : (
        <div className="d-flex justify-content-center align-center">
          <Spinner animation="grow" />
        </div>
      )}
      <Navbar />
    </>
  );
};

export default Home;
