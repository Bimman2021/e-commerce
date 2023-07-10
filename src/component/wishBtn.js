import React from "react";
import { setCookie, getCookie } from "../config/useCookie";

const WishBtn = ({ productId }) => {
  const currentWishlist = getCookie("_wishlist");

  const handleLike = (e) => {
    // check if the item is already in storage wish list
    // store in cookies || remove from cookie
    const classiItem = e.currentTarget.className;

    if (classiItem === "wishlist-btn") {
      setCookie("_wishlist", productId, 30);
      e.currentTarget.className = "wishlist-btn animate active inactive";
    } else {
      e.currentTarget.className = "wishlist-btn";
    }
  };

  return (
    <div className="wishlist-btn" onClick={handleLike}>
      <i className="iconly-Heart icli"></i>
      <i className="iconly-Heart icbo"></i>
      <div className="effect-group">
        <span className="effect"></span>
        <span className="effect"></span>
        <span className="effect"></span>
        <span className="effect"></span>
        <span className="effect"></span>
      </div>
    </div>
  );
};

export default WishBtn;
