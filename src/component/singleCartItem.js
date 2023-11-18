import React, { useState } from "react";
import img from "../assets/images/products/1.jpg";
import { Link } from "react-router-dom";
import { url } from "../config/constants";
import { removeFromCart } from "../contexts/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import FooterCanvas from "./footerCanvas";

const Component = ({ remove, addToWishList }) => {
  return (
    <>
      <div className="content">
        <h4>Remove Item:</h4>
        <p>Are you sure you want to remove or move this item from the cart?</p>
      </div>
      <div className="bottom-cart-panel">
        <div className="row">
          <div className="col-7">
            <a onClick={addToWishList} className="title-color">
              MOVE TO WISHLIST
            </a>
          </div>
          <div className="col-5">
            <a onClick={remove} className="theme-color">
              REMOVE
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const SingleCartItem = ({ data, index }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const remove = () => {
    const res = cartItems.filter((item) => item.id !== data.id);
    dispatch(removeFromCart(res));
    toast.info("item removed");
  };

  return (
    <div className="cart-box px-15">
      {/* <ToastContainer theme="light" autoClose={3000} /> */}
      <FooterCanvas
        show={show}
        setShow={setShow}
        component={<Component remove={remove} />}
      />
      <Link to="product" className="cart-img">
        <img src={`${url}${data.images[0]}`} className="img-fluid" alt="" />
      </Link>
      <div className="cart-content">
        <Link to="product">
          <h4> {data.title} </h4>
        </Link>
        <h5 className="content-color">by Mango</h5>
        <div className="price">
          <h4>
            ${data.price} <del>${data?.del}</del>
            <span>20%</span>
          </h4>
        </div>
        <div className="select-size-sec">
          <Link to="" className="opion">
            <h6>Qty: {data.qty}</h6>
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
          {/* remove(data.id) */}
          <h5 data-bs-toggle="offcanvas" onClick={() => setShow(true)}>
            <i className="iconly-Delete icli"></i>
            Remove
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem;
