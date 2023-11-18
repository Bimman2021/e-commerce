import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../../config/axios";
import validateInput from "../../config/validateInput";
import { setCarrier } from "../../contexts/slices/carrierSlice";
import { useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import logo from "../../assets/images/logo.png";
import design from "../../assets/images/design.svg";
import fb from "../../assets/images/social/fb.png";
import google from "../../assets/images/social/google.png";
import apple from "../../assets/images/social/apple.png";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

export function FormHeader() {
  return (
    <>
      <img src={design} className="img-fluid design-top" alt="" />
      <div className="topbar-section">
        <Link to="/">
          <img src={logo} className="img-fluid" alt="" />
        </Link>
        <Link className="skip-cls" to={"/"}>
          SKIP
        </Link>
      </div>
    </>
  );
}

export function FormFooter({ isNew }) {
  const handleMethods = (e) => {
    e.preventDefault();
    toast.warn(
      "SIGNIN METHOD NOT AVAILABLE!. please use another signin method",
      {
        hideProgressBar: true,
        position: "top-center",
      }
    );
  };
  return (
    <>
      <div className="or-divider">
        <span>Or sign in with</span>
      </div>
      <div className="social-auth">
        <ul>
          <li>
            <Link to="#" onClick={handleMethods}>
              <img src={google} className="img-fluid" alt=" " />
            </Link>
          </li>
          <li>
            <Link to="#" onClick={handleMethods}>
              <img src={fb} className="img-fluid" alt="" />
            </Link>
          </li>
          <li>
            <Link to="#" onClick={handleMethods}>
              <img src={apple} className="img-fluid" alt="" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom-detail text-center mt-3">
        <h4 className="content-color">
          {!isNew ? "If you are new, " : "Already a customer ? "}
          <Link
            className="title-color text-decoration-underline"
            to={!isNew ? "/signup" : "/signin"}
          >
            {!isNew ? "Register Now" : "Login"}
          </Link>
        </h4>
      </div>
    </>
  );
}

export default function Signin({ rF }) {
  const [i, setI] = useState(false);
  const [bLoading, setBLoading] = useState(false);
  const [iValue, setIValue] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIValue((prev) => {
      return { ...prev, [name]: value };
    });
    setErr((prev) => {
      return { ...prev, [name]: "" };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(validateInput(iValue));
    if (Object.keys(err).length === 0) {
      try {
        setBLoading(true);
        const sRes = await axios.post("/login", { ...iValue });
        const resData = sRes.data;
        if (resData.status === "success") {
          dispatch(
            setCarrier({
              title: "VERIFY EMAIL",
              msg: {
                code: resData.code,
                email: resData.email,
              },
            })
          );
          navigate("/verify-email");
        }
      } catch (error) {
        console.error(error);
        if (error.code === "ERR_BAD_REQUEST") {
          if (error.response.status === 422) {
            const eArray = error.response.data.errors;
            eArray.forEach((er) => {
              const { path, msg } = er;
              setErr({
                [path]: msg,
              });
            });
          } else {
            setErr({
              generic: error?.response?.data?.msg,
            });
          }
        } else if (error.code === "ERR_NETWORK") {
          setErr({
            generic: "network error!. Server cannot be reached",
          });
        } else if (error.code === "ERR_BAD_RESPONSE") {
          setErr({
            generic: "Server error!. Something went wrong",
          });
        } else {
          setErr({
            generic: "Unknown error!.",
          });
        }
      } finally {
        setBLoading(false);
      }
    }
  };
  return (
    <>
      <FormHeader />

      <section className="form-section px-15 top-space section-b-space">
        <h1>
          Hey, <br />
          Login Now
        </h1>
        <form>
          {err?.generic?.length > 0 && (
            <div className="text-danger text-center mb-4">{err?.generic}</div>
          )}
          <div className="form-floating mb-4">
            <input
              type="email"
              className={
                err?.email?.length > 0
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
            <label htmlFor="email">Email</label>
            {err?.email?.length > 0 && (
              <div className="invalid-feedback"> {err.email}</div>
            )}
          </div>
          <div className="form-floating mb-2">
            <input
              type={i ? "text" : "password"}
              id="password"
              name="password"
              onChange={handleChange}
              className={
                err?.password?.length > 0
                  ? "form-control is-invalid"
                  : "form-control"
              }
              placeholder="password"
            />
            <label htmlFor="password">Password</label>
            {iValue.password.length > 1 && (
              <div
                onClick={() => setI((prev) => !prev)}
                className="password-hs"
              >
                {i ? (
                  <i className="iconly-Hide icli hide"></i>
                ) : (
                  <i className="iconly-Show icli "></i>
                )}
              </div>
            )}
            {err?.password?.length > 0 && (
              <div className="invalid-feedback"> {err.password}</div>
            )}
          </div>
          <div className="text-end mb-4">
            <Link to="/forgot-password" className="theme-color">
              Forgot Password ?
            </Link>
          </div>
          <button
            disabled={bLoading ? true : false}
            onClick={handleSubmit}
            className="btn btn-solid w-100"
          >
            {bLoading ? <Spinner size="sm" /> : "Sign UP"}
          </button>
        </form>
        {rF ? "" : <FormFooter isNew={false} />}
      </section>
    </>
  );
}
