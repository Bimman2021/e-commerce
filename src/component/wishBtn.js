import React from "react";

const WishBtn = ({ product }) => {
  const handleLike = (e) => {
    // check if the item is already in storage wish list
    // store in cookies || remove from cookie
    const classiItem = e.currentTarget.className;

    if (classiItem === "wishlist-btn") {
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
