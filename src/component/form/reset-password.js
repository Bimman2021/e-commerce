import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import axios from "../../config/axios";

import Spinner from "react-bootstrap/Spinner";
import { FormHeader } from "./signin";
import BackHeader from "../backHeader";

export default function Reset() {
  // const [email, setEmail] = useState("");
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(true);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   if (email === "") {
  //     setError("invalid email");
  //     return;
  //   }
  //   axios
  //     .post("/reset_password", { email: email })

  //     .then((response) => {
  //       console.log(response);
  //       setIsLoading(false);
  //       setSuccess(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setIsLoading(false);
  //       console.error(err);
  //       switch (err.code) {
  //         case "ERR_NETWORK":
  //           setError("Network Error");
  //           break;
  //         case "ERR_BAD_REQUEST":
  //           // console.log(err.response.data.error);
  //           setError("invalid email address");
  //           break;
  //         default:
  //           setError("Unknown error! try again");
  //       }
  //     });
  // };

  return success ? (
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
              to="login.html"
            >
              Sign In
            </Link>
          </h4>
        </div>
      </section>
    </>
  ) : (
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
            <Link className="title-color text-decoration-underline" to="/sigin">
              Sign In
            </Link>
          </h4>
        </div>
      </section>
    </>
  );
}
