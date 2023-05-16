import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Kids",
    url: require("../assets/images/top-categories/kids.png"),
  },
  {
    title: "Beauty",
    url: require("../assets/images/top-categories/beauty.png"),
  },
  {
    title: "Footwear",
    url: require("../assets/images/top-categories/shoes.png"),
  },
];

const SectionCategories = () => {
  return (
    <section className="category-section top-space">
      <ul className="category-slide">
        {data.map((item, index) => {
          return (
            <li key={index}>
              <Link to={""} className="category-box">
                <img src={item.url} className="img-fluid" alt="" />
                <h4>{item.title}</h4>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SectionCategories;
