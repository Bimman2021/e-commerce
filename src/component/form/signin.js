import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../contexts/userAuth";
import axios from "../../config/axios";
import Spinner from "react-bootstrap/Spinner";
import logo from "../../assets/images/logo.png";
import design from "../../assets/images/design.svg";
import fb from "../../assets/images/social/fb.png";
import google from "../../assets/images/social/google.png";
import apple from "../../assets/images/social/apple.png";
import { Helmet } from "react-helmet";
import { useMail } from "../../contexts/authMail";

export function FormHeader() {
  return (
    <>
      <img src={design} className="img-fluid design-top" alt="" />
      <div className="topbar-section">
        <Link to="/">
          <img src={logo} className="img-fluid" alt="" />
        </Link>
        <Link className="skip-cls" to={-1}>
          SKIP
        </Link>
      </div>
    </>
  );
}

export function FormFooter() {
  return (
    <>
      <div className="or-divider">
        <span>Or sign in with</span>
      </div>
      <div className="social-auth">
        <ul>
          <li>
            <Link to="#">
              <img src={google} className="img-fluid" alt=" " />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={fb} className="img-fluid" alt="" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={apple} className="img-fluid" alt="" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom-detail text-center mt-3">
        <h4 className="content-color">
          If you are new,{" "}
          <Link
            className="title-color text-decoration-underline"
            to="register.html"
          >
            Create Now
          </Link>
        </h4>
      </div>
    </>
  );
}

export default function Signin({ rF }) {
  // const navigate = useNavigate();
  // // const { setUser, setRememberMe } = useAuth();
  // const { setEmail } = useMail();
  // // console.log(useMail());
  // //all state needed for login
  // const init = { email: "", password: "", rememberMe: false };
  // const [inputValue, setInputValue] = useState(init);
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [eye, setEye] = useState(false);

  // const handleChange = (e) => {
  //   let { name, value } = e.target;
  //   if (name === "rememberMe") {
  //     value = e.target.checked;
  //   }
  //   setInputValue({ ...inputValue, [name]: value });
  // };

  // //handle submit
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   axios
  //     .post("/login", { ...inputValue }, { contentType: "application/json" })
  //     .then((res) => {
  //       setIsLoading(false);
  //       // console.log(res);
  //       const data = res.data;
  //       if (data.status === "success") {
  //         // setUser((prev) => {
  //           return {
  //             ...prev,
  //             isLogin: true,
  //             token: data.authorisation.token,
  //             user: data.user,
  //           };
  //         });
  //         navigate("/home", { replace: true });
  //       }

  //       if (data.status === "verify") {
  //         setEmail({ email: data.email, code: data.code });
  //         navigate("/verify-email", { replace: true });
  //       }
  //     })
  //     .catch((err) => {
  //       setIsLoading(false);
  //       console.error(err);
  //       switch (err.code) {
  //         case "ERR_NETWORK":
  //           setError("Network Error");
  //           break;
  //         case "ERR_BAD_REQUEST":
  //           // console.log(err.response.data.error);
  //           setError("invalid username or password");
  //           break;
  //         default:
  //           setError("Unknown error! try again");
  //       }
  //     });
  // };

  // //
  // const toggleRememberMe = useCallback(() => {
  //   setRememberMe(() => inputValue.rememberMe);
  // }, [inputValue.rememberMe, setRememberMe]);

  // //
  // useEffect(() => {
  //   toggleRememberMe();
  //   window.localStorage.setItem(
  //     "little-money-rememberMe",
  //     inputValue.rememberMe
  //   );
  // }, [inputValue.rememberMe, toggleRememberMe]);

  // //
  // useEffect(() => {
  //   setError("");
  // }, [inputValue.email, inputValue.password]);

  return (
    <>
      <FormHeader />

      <section className="form-section px-15 top-space section-b-space">
        <h1>
          Hey, <br />
          Login Now
        </h1>
        <form>
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              id="one"
              placeholder="Username or Email"
            />
            <label htmlFor="one">Username or Email</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="password"
              className="form-control"
              id="two"
              placeholder="password"
            />
            <label htmlFor="two">Password</label>
          </div>
          <div className="text-end mb-4">
            <Link to="forgot-password.html" className="theme-color">
              Forgot Password ?
            </Link>
          </div>
          <Link to="#" className="btn btn-solid w-100">
            Sign in
          </Link>
        </form>
        {rF ? "" : <FormFooter />}
      </section>
    </>
  );
}
