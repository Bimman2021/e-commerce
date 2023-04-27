import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import axios from "../../config/axios";

import Spinner from "react-bootstrap/Spinner";

function Success({ props }) {
  return (
    <div className="main-layout card-bg-1">
      <div className="container d-flex flex-column">
        <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
          <main className="col-12 col-md-6 col-lg-5 col-xl-4 px-3">
            <h1 className="txtColorA">Reset Mail Sent</h1>
            <p>
              A link to reset your password has been sent to {props.email},
              check your email to continue.
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

export default function Reset() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (email === "") {
      setError("invalid email");
      return;
    }
    axios
      .post("/reset_password", { email: email })

      .then((response) => {
        console.log(response);
        setIsLoading(false);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        console.error(err);
        switch (err.code) {
          case "ERR_NETWORK":
            setError("Network Error");
            break;
          case "ERR_BAD_REQUEST":
            // console.log(err.response.data.error);
            setError("invalid email address");
            break;
          default:
            setError("Unknown error! try again");
        }
      });
  };

  return success ? (
    <Success props={email} />
  ) : (
    <div className="main-layout card-bg-1">
      <Helmet>
        <meta name="theme-color" content="#000" />
        <title>Reset Password || Little Money Investment App</title>
      </Helmet>

      <div className="container d-flex flex-column">
        <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
          <div className="col-12 col-md-6 col-lg-5 col-xl-4">
            <h1 className="font-weight-bold txtColorA">Password Reset</h1>
            <p className="txtColorA mb-3">
              Enter your email address to reset password.
            </p>
            <form className="mb-3" onSubmit={handleSubmit} autoComplete="off">
              <div className="alert-danger mb-2"> {error} </div>
              <div className="form-group">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control form-control-md"
                  id="email"
                  name="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>

              <button
                className="btn m-fill btn-block text-uppercase font-weight-semibold"
                type="submit"
              >
                {isLoading === true ? (
                  <Spinner style={{ padding: "1em" }} />
                ) : (
                  "Reset password"
                )}
              </button>
            </form>

            <p>
              Remember password?
              <Link to={"/signin"}>
                <span className="font-weight-semibold txtColorC">Sign in</span>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
