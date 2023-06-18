import React from "react";
import BackHeader from "../component/backHeader";
import UserAddress from "./userAddress";

const SavedAddress = () => {
  return (
    <>
      <BackHeader title="Saved Address" />
      <UserAddress />
    </>
  );
};

export default SavedAddress;
