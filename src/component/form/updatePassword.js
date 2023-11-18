import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import axios from "../../config/axios";

import Spinner from "react-bootstrap/Spinner";
import { FormHeader } from "./signin";
import BackHeader from "../backHeader";

const UpdatePassword = () => {
  return (
    <>
      <FormHeader />
      <section className="form-section px-15 top-space section-b-space">
        <h1>Reset Password</h1>
        <form>
          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control"
              id="one"
              placeholder="Current Password"
            />
            <label htmlFor="one">Current Password *</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control"
              id="two"
              placeholder="New Password"
            />
            <label htmlFor="two">New Password *</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control"
              id="three"
              placeholder="Confirm Password"
            />
            <label htmlFor="three">Confirm Password *</label>
          </div>
          <Link to="#" className="btn btn-solid w-100">
            RESET PASSWORD
          </Link>
        </form>
        <div className="bottom-detail text-center mt-3">
          <h4 className="content-color">
            Back to{" "}
            <Link
              className="title-color text-decoration-underline"
              to="/signin"
            >
              Sign In
            </Link>
          </h4>
        </div>
      </section>
    </>
  );
};

export default UpdatePassword;
