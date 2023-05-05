import React from "react";
import Wishlist from "../component/wishlist";
import BackHeader from "../component/backHeader";

const WishList = () => {
  return (
    <div>
      <BackHeader title="Your Wishlist(3)" />
      <Wishlist />
    </div>
  );
};

export default WishList;
