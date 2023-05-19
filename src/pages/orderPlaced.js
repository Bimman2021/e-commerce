import React from "react";
import BackHeader from "../component/backHeader";
import OrderSuccess from "../component/orderSuccess";
import Orderdetails, {
  OrderDetailsWithTracking,
} from "../component/orderDetails";
import OrderSummary from "../component/orderSummary";
import CartBottom from "../component/cartBottom";
import { useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  const navigate = useNavigate();

  return (
    <>
      <BackHeader title="Order Placed" />
      <OrderSuccess />
      <OrderDetailsWithTracking />
      <div className="divider"></div>
      <OrderSummary />
      <div className="panel-space"></div>
      <CartBottom
        className="delivery-cart"
        leftTitle="Track Order"
        LeftLink="/track-order"
        handleRight={() => navigate("/shop")}
        rightTitle="Continue shopping"
      />
    </>
  );
};

export default OrderPlaced;
