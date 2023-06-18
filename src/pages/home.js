import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Header from "../component/header";
import Banner from "../component/bannerCarousel";
import DealOfDay from "../component/deal";
import axios from "../config/axios";
import Navbar from "../component/navBar";
import SectionCategories from "../component/sectionCategories";
import FindYourStyle from "../component/findYourStyle";
import img from "../assets/images/products/1.jpg";
import logo1 from "../assets/images/logo/logo48.png";

import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../contexts/slices/cartSlice";
import { setCookie } from "../config/useCookie";

function OffCanvasExample({ name, show, setShow }) {
  // const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <div onClick={handleShow} className="btn me-2">
        <i className="iconly-Delete icli"></i>
        Remove
      </div> */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop={true}
        scroll={false}
        className="addtohome-popup"
        placement="bottom"
        style={{
          height: "150px",
        }}
      >
        <Offcanvas.Header closeButton>
          <div className="app-info">
            <img src={logo1} className="img-fluid" alt="" />
            <div className="content">
              <h3>Multikart App</h3>
              <div>www.multikart-app.com</div>
            </div>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="">
            <button className="btn btn-solid install-app" onClick={handleClose}>
              Add to home screen
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Home = () => {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setData([
      {
        id: 1,
        image: img,
        title: "Home Product For Goodbye use",
        price: 100,
      },
    ]);
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  return (
    <>
      <Header />
      <OffCanvasExample show={show} setShow={setShow} />
      <SectionCategories />
      <div className="divider"></div>
      <Banner />
      {data ? (
        <DealOfDay props={{ data }} />
      ) : (
        <div className="d-flex justify-content-center align-center">
          <Spinner animation="grow" />
        </div>
      )}

      <div className="divider"></div>
      <FindYourStyle />
      <div className="divider"></div>
      <Navbar />
    </>
  );
};

export default Home;
