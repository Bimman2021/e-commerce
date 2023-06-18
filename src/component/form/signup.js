import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../config/axios";
import Spinner from "react-bootstrap/Spinner";
import { useMail } from "../../contexts/authMail";
import { useNavigate } from "react-router-dom";
import MobileInput from "./phoneNumber";

import { Helmet } from "react-helmet";
import { FormFooter, FormHeader } from "./signin";

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
  // const navigate = useNavigate();
  // const { setEmail } = useMail();
  // const [eye, setEye] = useState(false);
  // const [inputValue, setInputValue] = useState({
  //   name: "",
  //   mobile: "",
  //   email: "",
  //   password: "",
  //   ref_code: "",
  // });
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");
  // const [iError, setIerror] = useState({});

  // // handle change
  // const handleChange = (e) => {
  //   setError("");
  //   setIerror({});
  //   const { name, value } = e.target;
  //   setInputValue({ ...inputValue, [name]: value });
  // };

  // //send
  // const send = () => {
  //   axios
  //     .post("/register", { ...inputValue }, { contentType: "application/json" })
  //     .then((res) => {
  //       if (res) {
  //         setIsLoading(false);
  //         const data = res.data;
  //         console.log(res);
  //         setEmail({ email: data.email, code: data.code });
  //         navigate("/verify-email", { replace: true });
  //       }
  //     })
  //     .catch((err) => {
  //       setIsLoading(false);
  //       setError("");
  //       switch (err.code) {
  //         case "ERR_NETWORK":
  //           setError("Network Error");
  //           break;
  //         case "ERR_BAD_REQUEST":
  //           const statusCode = err?.response?.status;
  //           const resObj = err?.response?.data.errors;
  //           if (statusCode === 422) {
  //             console.log(resObj);
  //             setIerror(resObj);
  //           }
  //           break;
  //         default:
  //           console.log(err);
  //           setError("Unknown error! try again");
  //       }
  //     });
  // };

  // //handle submit
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   send();
  // };

  // for eye icon show

  // iconly-Hide icli hide iconly-Show
  return (
    <>
      <FormHeader />
      <section className="form-section px-15 top-space section-b-space">
        <form>
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              id="one"
              placeholder="Name"
            />
            <label htmlFor="one">Name</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="email"
              className="form-control"
              id="two"
              placeholder="Email/phone"
            />
            <label htmlFor="two">Email/phone</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="password"
              id="txtPassword"
              className="form-control"
              placeholder="password"
            />
            <label>Password</label>
            <div id="btnToggle" className="password-hs">
              <i id="eyeIcon" className="iconly-Hide icli hide"></i>
            </div>
          </div>
          <Link to="#" className="btn btn-solid w-100">
            Sign UP
          </Link>
        </form>
        <FormFooter />
      </section>
    </>
  );
}
