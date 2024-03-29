import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import axios from "../../config/axios";

import Spinner from "react-bootstrap/Spinner";
import { FormHeader } from "./signin";
import BackHeader from "../backHeader";

export default function Reset() {
  return (
    <>
      <FormHeader />
      <section className="form-section px-15 top-space section-b-space">
        <h1>Forgot Password</h1>
        <form>
          <div className="form-floating mb-4">
            <input
              type="email"
              className="form-control"
              id="one"
              placeholder="Address"
            />
            <label htmlFor="one">Email Address</label>
          </div>
          <Link
            to="#"
            className="btn btn-solid w-100"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
          >
            Send otp
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
}
