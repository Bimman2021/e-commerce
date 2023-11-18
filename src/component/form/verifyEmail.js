import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import axios from "../../config/axios";

import Spinner from "react-bootstrap/Spinner";
import { FormHeader } from "./signin";
import BackHeader from "../backHeader";
import { useSelector } from "react-redux";

export default function VerifyEmail() {
  const dsc = useSelector((state) => state.carrier);
  const { code, email } = dsc.msg;
  const [error, setError] = useState({ generic: "", input: "" });
  const [success, setSuccess] = useState(false);
  const input = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = input.current.value;

    if (!value.length > 0) {
      setError((prev) => {
        return { ...prev, input: "Please enter verification code" };
      });
      return false;
    }
    if (value !== code) {
      setError((prev) => {
        return { ...prev, input: "Invalid verification code" };
      });
      return false;
    }

    //send update on email verification success
    axios
      .put("/register", { email: email })
      .then((response) => {
        console.log(response);
        setSuccess(true);
        // navigate("/home", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return success ? (
    <Success />
  ) : (
    <>
      <FormHeader />
      <section className="form-section px-15 top-space section-b-space">
        <h1 className="">Verify your Email</h1>
        <p className="mt-3 mb-3 txtColorA">
          we sent a verification code to
          <strong> {email} </strong>
          please check your email and enter the verification code to continue.
        </p>
        {error?.generic?.length > 0 && (
          <div className="alert-danger mb-2"> {error.generic} </div>
        )}

        <form>
          <div className="form-floating mb-4">
            <input
              type="number"
              className={
                error?.input?.length > 0
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="one"
              ref={input}
              placeholder="Enter verification code"
            />
            <label htmlFor="one">Verification code</label>
            {error?.input?.length > 0 && (
              <div className="invalid-feedback">{error?.input}</div>
            )}
          </div>
          <button onClick={handleSubmit} className="btn btn-solid w-100">
            verify
          </button>
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

function Success() {
  return (
    <div className="main-layout card-bg-1">
      <Helmet>
        <meta name="theme-color" content="#000" />
        <title>Verification Successful</title>
      </Helmet>

      <div className="container d-flex flex-column">
        <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
          <main className="col-12 col-md-6 col-lg-5 col-xl-4 px-3">
            <h1 className="txtColorA">Verification Successful</h1>
            <p>
              you email has been verified successfully click the button below to
              login into your newly created account
            </p>
            <Link to={"/signin"} className="btn m-fill btn-block">
              Login
            </Link>
          </main>
        </div>
      </div>
    </div>
  );
}
