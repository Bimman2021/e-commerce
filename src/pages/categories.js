import React from "react";
import BackHeader from "../component/backHeader";
import Category from "../component/categories";
import Navbar from "../component/navBar";

const Categories = () => {
  return (
    <div>
      <Navbar />
      <BackHeader title={"categories"} options={true} />
      <Category />
      <div className="panel-space"></div>
    </div>
  );
};

export default Categories;
