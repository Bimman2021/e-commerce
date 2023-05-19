import React from "react";
import BackHeader from "../component/backHeader";
import PaymentMethod from "../component/paymentMethod";
import CartBottom from "../component/cartBottom";
import Orderdetails from "../component/orderDetails";
import OfferNpromo from "../component/offerNpromo";

const Payment = () => {
  return (
    <>
      <BackHeader title="Payment Details" subTitle="step 3 of 3" />
      <OfferNpromo />
      <div className="divider"></div>
      <PaymentMethod />
      <div className="divider"></div>
      <Orderdetails />
      <div className="panel-space"></div>
      <CartBottom rightTitle="pay" leftTitle="$2790" />
    </>
  );
};

export default Payment;
