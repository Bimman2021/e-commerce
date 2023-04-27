import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../contexts/userAuth";
import axios from "../../config/axios";
import Spinner from "react-bootstrap/Spinner";

import { Helmet } from "react-helmet";
import { useMail } from "../../contexts/authMail";

export default function Signin() {
  const navigate = useNavigate();
  const { setUser, setRememberMe } = useAuth();
  const { setEmail } = useMail();
  // console.log(useMail());
  //all state needed for login
  const init = { email: "", password: "", rememberMe: false };
  const [inputValue, setInputValue] = useState(init);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [eye, setEye] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "rememberMe") {
      value = e.target.checked;
    }
    setInputValue({ ...inputValue, [name]: value });
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("/login", { ...inputValue }, { contentType: "application/json" })
      .then((res) => {
        setIsLoading(false);
        // console.log(res);
        const data = res.data;
        if (data.status === "success") {
          setUser((prev) => {
            return {
              ...prev,
              isLogin: true,
              token: data.authorisation.token,
              user: data.user,
            };
          });
          navigate("/home", { replace: true });
        }

        if (data.status === "verify") {
          setEmail({ email: data.email, code: data.code });
          navigate("/verify-email", { replace: true });
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
        switch (err.code) {
          case "ERR_NETWORK":
            setError("Network Error");
            break;
          case "ERR_BAD_REQUEST":
            // console.log(err.response.data.error);
            setError("invalid username or password");
            break;
          default:
            setError("Unknown error! try again");
        }
      });
  };

  //
  const toggleRememberMe = useCallback(() => {
    setRememberMe(() => inputValue.rememberMe);
  }, [inputValue.rememberMe, setRememberMe]);

  //
  useEffect(() => {
    toggleRememberMe();
    window.localStorage.setItem(
      "little-money-rememberMe",
      inputValue.rememberMe
    );
  }, [inputValue.rememberMe, toggleRememberMe]);

  //
  useEffect(() => {
    setError("");
  }, [inputValue.email, inputValue.password]);

  return (
    <>
      <div className="main-layout card-bg-1">
        <Helmet>
          <meta name="theme-color" content="#000" />
          <title>Sign in || Little Money Investment App</title>
        </Helmet>

        <div className="container d-flex flex-column">
          <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
            <div className="col-12 col-md-6 col-lg-5 col-xl-4">
              <h1 className="font-weight-bold txtColorA">Sign in</h1>
              <p className="txtColorA mb-3">
                We are Different, We Make You Different.
              </p>
              <form className="mb-3 " onSubmit={handleSubmit} autoComplete="on">
                <div className="alert-danger mb-2">{error}</div>
                <div className="form-group">
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={inputValue.email}
                    onChange={handleChange}
                    className="form-control form-control-md"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      type={eye ? "text" : "password"}
                      className="form-control form-control-md"
                      id="password"
                      required
                      autoComplete="true"
                      value={inputValue.password}
                      onChange={handleChange}
                      name="password"
                      placeholder="Enter your password"
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
                      <i
                        className={eye ? "las la-eye-slash" : "las la-eye"}
                      ></i>
                    </span>
                  </div>
                </div>
                <div className="form-group d-flex justify-content-between">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="rememberMe"
                      value={inputValue.rememberMe}
                      onChange={handleChange}
                      id="checkbox-remember"
                    />
                    <label
                      className="custom-control-label text-muted font-size-sm"
                      htmlFor="checkbox-remember"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link to={"/reset-password"}>
                    <span className="font-size-sm txtColorC">
                      Reset password
                    </span>
                  </Link>
                </div>
                <button
                  type="submit"
                  className="btn m-fill btn-block text-uppercase font-weight-semibold"
                  disabled={isLoading && true}
                >
                  {isLoading === true ? (
                    <Spinner style={{ padding: "1em" }} />
                  ) : (
                    "Login"
                  )}
                </button>
              </form>

              <p className="txtColorA">
                Don't have an account?
                <Link to={"/signup"}>
                  <span className="font-weight-semibold txtColorC">
                    Sign up
                  </span>
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
