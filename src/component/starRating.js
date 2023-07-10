import React from "react";
import { Link } from "react-router-dom";

const StarRating = ({ star, name, price, del, discount, currency }) => {
  const array = Array.from({ length: 5 });

  //
  return (
    <div className="product-content">
      <ul className="ratings">
        {array.map((item, index) => {
          return (
            <li key={index}>
              <i
                className={
                  star > index ? "iconly-Star icbo" : "iconly-Star icbo empty"
                }
              ></i>
            </li>
          );
        })}
      </ul>
      <Link to="product">
        <h4>{name}</h4>
      </Link>
      <div className="price">
        <h4>
          {price && `${currency} ${price?.toFixed(2)}`}
          {del && <del>{`${currency} ${del}`}</del>}
          {discount && <span>{`${discount}%`}</span>}
        </h4>
      </div>
    </div>
  );
};

export default StarRating;
