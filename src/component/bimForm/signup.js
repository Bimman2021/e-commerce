import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../config/axios";
import Spinner from "react-bootstrap/Spinner";
import { useMail } from "../../contexts/authMail";
import { useNavigate } from "react-router-dom";
import MobileInput from "./phoneNumber";

import { Helmet } from "react-helmet";

// function validator(data) {
//   if (data.length < 1) return false;

//   const resObj = {};
//   console.log(data.name);
//   console.log(data);

//   if (data.name.length < 1) {
//     resObj.name = "this field is required";
//   } else if (!/^[a-z,.'-]+$/i.test(data.name)) {
//     resObj.name = "enter your real full name";
//   }

//   //case email
//   if (data.email.length < 1) {
//     resObj.email = "this field is required";
//   }

//   //case mobile
//   if (data.mobile.length < 1) {
//     resObj.mobile = "this field is required";
//   }

//   //case password
//   if (data.password.length < 1) {
//     resObj.password = "this field is required";
//   }

//   return resObj;
// }

export default function Signup() {
  const navigate = useNavigate();
  const { setEmail } = useMail();
  const [eye, setEye] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    ref_code: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [iError, setIerror] = useState({});

  // handle change
  const handleChange = (e) => {
    setError("");
    setIerror({});
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  //send
  const send = () => {
    axios
      .post("/register", { ...inputValue }, { contentType: "application/json" })
      .then((res) => {
        if (res) {
          setIsLoading(false);
          const data = res.data;
          console.log(res);
          setEmail({ email: data.email, code: data.code });
          navigate("/verify-email", { replace: true });
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setError("");
        switch (err.code) {
          case "ERR_NETWORK":
            setError("Network Error");
            break;
          case "ERR_BAD_REQUEST":
            const statusCode = err?.response?.status;
            const resObj = err?.response?.data.errors;
            if (statusCode === 422) {
              console.log(resObj);
              setIerror(resObj);
            }
            break;
          default:
            console.log(err);
            setError("Unknown error! try again");
        }
      });
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    send();
  };

  return (
    <div className="main-layout card-bg-1">
      <Helmet>
        <meta name="theme-color" content="#000" />
        <title>Sign up || Little Money Investment App</title>
      </Helmet>

      <div className="container d-flex flex-column">
        <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
          <div className="col-12 col-md-6 col-lg-5 col-xl-4">
            <h1 className="font-weight-bold txtColorA">Sign up</h1>
            <p className="txtColorA mb-3">
              We are Different, We Make You Different.
            </p>
            <form
              className="mb-3 needs-validation text-left"
              onSubmit={handleSubmit}
              autoComplete="on"
              // noValidate
            >
              <div className="alert-danger mb-2"> {error} </div>
              <div className="form-group">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  title="enter your full name separated with spaces"
                  className={
                    iError.name
                      ? "form-control form-control-md is-invalid"
                      : "form-control form-control-md"
                  }
                  id="name"
                  name="name"
                  value={inputValue.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
                <div className="invalid-feedback">{iError?.name}</div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  className={
                    iError.email
                      ? "form-control form-control-md is-invalid"
                      : "form-control form-control-md"
                  }
                  id="email"
                  name="email"
                  value={inputValue.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
                <div className="invalid-feedback">{iError.email}</div>
              </div>
              <div className="form-group">
                <MobileInput
                  props={{
                    error: iError.mobile,
                    value: inputValue.mobile,
                    setValue: setInputValue,
                  }}
                />
                <div className="invalid-feedback">{iError.mobile}</div>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={eye ? "text" : "password"}
                    className={
                      iError.password
                        ? "form-control form-control-md is-invalid"
                        : "form-control form-control-md"
                    }
                    id="password"
                    name="password"
                    value={inputValue.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter password"
                  />
                  <span
                    onClick={() => setEye(!eye)}
                    className="input-group-text border-0"
                    style={{
                      backgroundColor: "#3e3e3e",
                      color: "#fff",
                      borderTopLeftRadius: "0",
                      borderBottomLeftRadius: "0",
                      cursor: "pointer",
                    }}
                  >
                    <i className={eye ? "las la-eye-slash" : "las la-eye"}></i>
                  </span>
                </div>

                <div className="invalid-feedback">{iError.password}</div>
              </div>
              <div className="form-group">
                <label htmlFor="ref_code" className="sr-only">
                  Refferal code
                </label>
                <input
                  type="text"
                  className={
                    iError.email
                      ? "form-control form-control-md is-invalid"
                      : "form-control form-control-md"
                  }
                  id="ref_code"
                  name="ref_code"
                  value={inputValue.ref_code}
                  onChange={handleChange}
                  placeholder="Referral Code (optional)"
                />
                <div className="invalid-feedback">{iError.email}</div>
              </div>
              <button
                className="btn m-fill btn-block text-uppercase font-weight-semibold"
                type="submit"
                disabled={isLoading && true}
              >
                {isLoading === true ? (
                  <Spinner style={{ padding: "1em" }} />
                ) : (
                  "Register"
                )}
              </button>
            </form>

            <p>
              Already have an account?
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
