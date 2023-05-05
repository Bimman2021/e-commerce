import React from "react";
import BackHeader from "../component/backHeader";
import SingleCartItem from "../component/singleCartItem";
import SimilarProducts from "../component/similarProducts";
import Coupons from "../component/coupons";
import Orderdetails from "../component/orderDetails";
import Servicewrapper from "../component/serviceWrapper";
import CartBottom from "../component/cartBottom";

const Cart = () => {
  return (
    <div className="top-space">
      <BackHeader title="Shopping Cart" />
      <SingleCartItem />
      <div className="divider"></div>
      <SimilarProducts title="You May Also Like" />
      <div className="divider"></div>
      <Coupons />
      <div className="divider"></div>
      <Orderdetails />
      <div className="divider"></div>
      <Servicewrapper />
      <div className="panel-space"></div>
      <CartBottom />
    </div>
  );
};

export default Cart;
