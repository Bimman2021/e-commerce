import { Link } from "react-router-dom";
import Resizer from "react-image-file-resizer";
import { useCallback, useEffect, useState } from "react";
import axios from "../../config/axios";
import Spinner from "react-bootstrap/Spinner";
import { useMail } from "../../contexts/authMail";
import { useNavigate } from "react-router-dom";
import mss from "../../assets/images/products/1.jpg";
import { Helmet } from "react-helmet";
import { FormFooter, FormHeader } from "../../component/form/signin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Upload() {
  const [src, setSrc] = useState();
  const [imgPrev, setImgPrev] = useState([]);
  const [imgArr, setImgArr] = useState([]);
  const [fileInput, setFileInput] = useState(false);

  async function handleUpload(e) {
    let imgFile = e.target.files;
    if (imgFile.length > 0 && imgFile.length < 5) {
      const imgArr = [...imgFile];
      setImgPrev(imgArr); //
      setFileInput(true);
    } else {
      toast.warn("error or image is more than 4");
      return null;
    }
  }
  const imgCallback = useCallback(() => {
    if (fileInput) {
      (() => {
        imgPrev.forEach((single, index) => {
          try {
            Resizer.imageFileResizer(
              single, // Is the file of the image which will resized.
              150, // Is the maxWidth of the resized new image.
              150, // Is the maxHeight of the resized new image.
              "JPEG", // Is the compressFormat of the resized new image
              100, // Is the quality of the resized new image.
              0, // Is the degree of clockwise rotation to apply to uploaded image.
              (uri) => {
                // Is the callBack function of the resized new image URI.

                // console.log(uri);
                setImgArr((prev) => {
                  return [...prev, uri];
                });
                if (imgPrev.length - 1 === index) {
                  setFileInput(false);
                }
              },
              "base64", // Is the output type of the resized new image.
              100, // Is the minWidth of the resized new image.
              100 // Is the minHeight of the resized new image.
            );
          } catch (err) {
            console.log(err);
          }
        });
      })();
    }
  }, [fileInput, imgPrev]);

  useEffect(() => {
    imgCallback();
  }, [imgCallback]);

  // handle removing image from list
  const handleRemove = (e) => {
    const imgIndex = parseInt(e.target.getAttribute("data-index"));
    const newImgArr = imgArr.filter((data, index) => index !== imgIndex);
    setImgArr(newImgArr);
  };

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
            <label htmlFor="one">Product Name</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="email"
              className="form-control"
              id="two"
              placeholder="Email/phone"
            />
            <label htmlFor="two">Product Category</label>
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
          <div className=" mb-4">
            <label className="upload-label" htmlFor="upload">
              <div className="text-center">
                <i
                  className="iconly-Paper-Upload"
                  style={{ fontSize: "2rem" }}
                ></i>
                <div>Upload Product Image (Maximum of 4 image)</div>
              </div>
              <input
                type="file"
                className="d-none"
                id="upload"
                onChange={handleUpload}
                accept="image/*"
                multiple
              />
            </label>
          </div>
          <Link to="#" className="btn btn-solid w-100">
            Upload
          </Link>
        </form>
        <div className="d-flex flex-wrap">
          {imgArr.map((item, index) => {
            return (
              <div className="col-4 p-1 preview-img-cont" key={index}>
                <img
                  // src={URL.createObjectURL(item)}
                  src={item}
                  alt=""
                  className="border-1 w-100"
                />
                <div
                  className="upload__img-close"
                  onClick={handleRemove}
                  data-index={index}
                ></div>
              </div>
            );
          })}
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
