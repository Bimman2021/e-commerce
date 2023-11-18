import React from "react";
import BackHeader from "../component/backHeader";
import SingleCartItem from "../component/singleCartItem";
import SimilarProducts from "../component/similarProducts";
import Coupons from "../component/coupons";
import Orderdetails from "../component/orderDetails";
import Servicewrapper from "../component/serviceWrapper";
import CartBottom from "../component/cartBottom";
import EmptyCart from "../component/emptyCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const navigate = useNavigate();

  return cartItems.length < 1 ? (
    <>
      <BackHeader title="Shopping Cart" options={true} />
      <EmptyCart />
      <SimilarProducts title="You May Also Like" />
    </>
  ) : (
    <div className="top-space">
      <BackHeader title="Shopping Cart" options={true} subTitle="step 1 of 3" />
      <div className="top-space xl-space">
        {cartItems.map((item, index) => {
          return (
            <div className="" key={item.id}>
              <SingleCartItem data={item} index={index} />
              <div className="divider"></div>
            </div>
          );
        })}
      </div>

      <Coupons />
      <div className="divider"></div>
      <Orderdetails />
      <div className="divider"></div>
      <Servicewrapper />
      <div className="divider"></div>
      <SimilarProducts title="You May Also Like" />

      <div className="panel-space"></div>
      <CartBottom
        rightTitle="Place Order"
        handleRight={() => navigate("/delivery")}
      />
    </div>
  );
};

export default Cart;
