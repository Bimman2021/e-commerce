import { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useMail } from "../contexts/authMail";
import { Helmet } from "react-helmet";
import axios from "../config/axios";

const VerifyEmail = () => {
  // = { code: "202020", email: "example@gmail.com" }; //
  const { code, email } = useMail().email;
  // const navigate = useNavigate();
  const [error, setError] = useState({ err: false, msg: "" });
  const [success, setSuccess] = useState(false);
  const input = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = input.current.value;
    if (value === "") {
      setError((prev) => {
        return { ...prev, err: true, msg: "Please enter verification code" };
      });
    }
    if (value !== code) {
      setError((prev) => {
        return { ...prev, err: true, msg: "Invalid verification code" };
      });
    } else {
      //send update on email verification success
      axios
        .post("/verify_email", { email: email })
        .then((response) => {
          console.log(response);
          setSuccess(true);
          // navigate("/home", { replace: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return success ? (
    <Success />
  ) : email ? (
    <div className="main-layout card-bg-1">
      <Helmet>
        <meta name="theme-color" content="#000" />
        <title>Verify Email</title>
      </Helmet>

      <div className="container d-flex flex-column">
        <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
          <main className="col-12 col-md-6 col-lg-5 col-xl-4 px-3">
            <form onSubmit={handleSubmit}>
              <h1 className="txtColorA">Verify your Email</h1>
              <p className="mt-3 mb-3 txtColorA">
                we sent a verification code to
                <strong> {email} </strong>
                please check your email and enter the verification code to
                continue.
              </p>
              {error.err && (
                <div className="alert-danger mb-2"> {error.msg} </div>
              )}
              <div className="form-group">
                <label htmlFor="name" className="sr-only">
                  Verification code
                </label>
                <input
                  type="text"
                  className={
                    error.err
                      ? "form-control form-control-md is-invalid"
                      : "form-control form-control-md"
                  }
                  ref={input}
                  required
                  placeholder="Enter verification code"
                />
              </div>
              <button type="submit" className="btn m-fill btn-block">
                verify
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={"/"} />
  );
};

function Success() {
  return (
    <div className="main-layout card-bg-1">
      <Helmet>
        <meta name="theme-color" content="#000" />
        <title>Verification successful</title>
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

export default VerifyEmail;
