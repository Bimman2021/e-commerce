import { useState } from "react";
import axios from "../../config/axios";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FormFooter, FormHeader } from "./signin";
import validateInput from "../../config/validateInput";
import { setCarrier } from "../../contexts/slices/carrierSlice";
import { useDispatch } from "react-redux";

export default function Signup() {
  const [i, setI] = useState(false);
  const [bLoading, setBLoading] = useState(false);
  const [iValue, setIValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState({
    name: "",
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
        const sRes = await axios.post("/register", { ...iValue });
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
          const eArray = error.response.data.errors;
          eArray.forEach((er) => {
            const { path, msg } = er;
            setErr({
              [path]: msg,
            });
          });
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

  //
  return (
    <>
      <FormHeader />
      <section className="form-section px-15 top-space section-b-space">
        <form>
          {err?.generic?.length > 0 && (
            <div className="text-danger text-center mb-4">{err?.generic}</div>
          )}
          <div className="form-floating mb-4">
            <input
              type="text"
              className={
                err?.name?.length > 0
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="name"
              name="name"
              onChange={handleChange}
              value={iValue.name}
              placeholder="Name"
            />
            <label htmlFor="name">Name</label>
            {err?.name?.length > 0 && (
              <div className="invalid-feedback"> {err.name}</div>
            )}
          </div>
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
          <div className="form-floating mb-4">
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
          <button
            disabled={bLoading ? true : false}
            onClick={handleSubmit}
            className="btn btn-solid w-100"
          >
            {bLoading ? <Spinner size="sm" /> : "Sign UP"}
          </button>
        </form>
        <FormFooter isNew={true} />
      </section>
    </>
  );
}
