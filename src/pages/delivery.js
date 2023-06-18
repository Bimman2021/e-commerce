import React from "react";
import { useNavigate } from "react-router-dom";
import BackHeader from "../component/backHeader";
import ExpectedDelivery from "../component/expectedDelivery";
import CartBottom from "../component/cartBottom";
import UserAddress from "./userAddress";

const Delivery = () => {
  const navigate = useNavigate();

  return (
    <>
      <BackHeader title="Delivery Details" subTitle="step 2 of 3" />
      <UserAddress />
      <div className="divider"></div>
      <ExpectedDelivery />
      <CartBottom
        leftTitle="$2700"
        className="delivery-cart"
        handleRight={() => navigate("/payment")}
        rightTitle="procced to checkout"
      />
    </>
  );
};

export default Delivery;
