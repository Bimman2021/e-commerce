import React from "react";
import BackHeader from "../component/backHeader";
import NewAddress from "../component/newAddress";
import CartBottom from "../component/cartBottom";

const AddAddress = () => {
  return (
    <>
      <BackHeader title="Add A New Address" />
      <NewAddress />
      <div className="panel-space"></div>
      <CartBottom rightTitle="Add Address" leftTitle="RESET" />
    </>
  );
};

export default AddAddress;
