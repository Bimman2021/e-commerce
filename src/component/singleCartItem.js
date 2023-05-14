import React, { useState } from "react";
import img from "../assets/images/products/1.jpg";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

function QtyMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="nav-bar" onClick={handleShow}></div>

      <Offcanvas show={show} onHide={handleClose}>
        {/* <Offcanvas.Header closeButton>
          <Link to="/" className="brand-logo">
            <img src={logo} width={"135px"} className="img-fluid" alt="" />
          </Link>
        </Offcanvas.Header> */}
        <Offcanvas.Body className="px-0">
          <>Hello</>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const SingleCartItem = () => {
  return (
    <div className="cart-box px-15">
      <Link to="product.html" className="cart-img">
        <img src={img} className="img-fluid" alt="" />
      </Link>
      <div className="cart-content">
        {/* <Link to="product.html"> */}
        <h4>Pink Hoodie t-shirt full </h4>
        {/* </Link> */}
        <h5 className="content-color">by Mango</h5>
        <div className="price">
          <h4>
            $32.00 <del>$35.00</del>
            <span>20%</span>
          </h4>
        </div>
        <div className="select-size-sec">
          <Link to="" className="opion">
            <h6>Qty: 1</h6>
            <i className="iconly-Arrow-Down-2 icli"></i>
          </Link>
          <Link to="" className="opion">
            <h6>Size: S</h6>
            <i className="iconly-Arrow-Down-2 icli"></i>
          </Link>
        </div>
        <div className="cart-option">
          <h5 data-bs-toggle="offcanvas" data-bs-target="#removecart">
            <i className="iconly-Heart icli"></i> Move to wishlist
          </h5>
          <span className="divider-cls">|</span>
          <h5 data-bs-toggle="offcanvas" data-bs-target="#removecart">
            <i className="iconly-Delete icli"></i>
            Remove
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem;
