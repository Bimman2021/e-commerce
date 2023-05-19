import React, { useState } from "react";
import img from "../assets/images/products/1.jpg";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../contexts/slices/cartSlice";
import { setCookie } from "../config/useCookie";

function OffCanvasExample({ name }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className="btn me-2">
        <i className="iconly-Delete icli"></i>
        Remove
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop="static"
        className="removecart-canvas"
        placement="bottom"
        style={{
          height: "auto",
        }}
      >
        <Offcanvas.Body>
          <div className="content">
            <h4>Remove Item:</h4>
            <p>
              Are you sure you want to remove or move this item from the cart?
            </p>
          </div>
          <div className="bottom-cart-panel">
            <div className="row">
              <div className="col-7">
                <button
                  className=" btn-none d-inline"
                  onClick={() => setShow(false)}
                >
                  MOVE TO WISHLIST
                </button>
              </div>
              <div className="col-5">
                <button
                  className="theme-color btn-none"
                  onClick={() => setShow(false)}
                >
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Wishlist = () => {
  setCookie("wishlist", "hello world", 2);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => {
    return state.cartItems;
  });

  const handleAddToCart = () => {
    dispatch(addToCart(20));
  };
  return (
    <section className="cart-section pt-0 top-space section-b-space">
      <div className="cart-box px-15">
        <a href="product.html" className="cart-img">
          <img src={img} className="img-fluid" alt="" />
        </a>
        <div className="cart-content">
          <a href="product.html">
            <h4>Pink Hoodie t-shirt full </h4>
          </a>
          <h5 className="content-color">by Mango</h5>
          <div className="price">
            <h4>
              $32.00 <del>$35.00</del>
              <span>20%</span>
            </h4>
          </div>
          <div className="cart-option">
            <h5 onClick={handleAddToCart} style={{ cursor: "pointer" }}>
              <i className="iconly-Buy icli"></i> Add to Cart
            </h5>
            <span className="divider-cls">|</span>
            <h5 data-bs-toggle="offcanvas" data-bs-target="#removecart">
              <OffCanvasExample />
            </h5>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
};

export default Wishlist;
