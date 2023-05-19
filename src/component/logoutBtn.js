import React from "react";
import { Link } from "react-router-dom";
const LogoutBtn = () => {
  return (
    <>
      <div className="px-15">
        <Link to="index.html" className="btn btn-outline w-100 content-color">
          LOG OUT
        </Link>
      </div>
      <section className="panel-space"></section>
    </>
  );
};

export default LogoutBtn;
