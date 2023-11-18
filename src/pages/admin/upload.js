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
import Form1 from "./component/form1";
import Form2 from "./component/form2";
import validateForm from "./validForm";

const initf1 = {
  name: "",
  brand: "",
  price: "",
  discount: "",
  unit: "",
  category: "",
  sub_cat: "",
};
export default function Upload() {
  const [f1, setf1] = useState(initf1);
  const [f1Err, setf1Err] = useState(initf1);
  const [fIndex, setFindex] = useState(0);

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
  const handleNext = (e) => {
    e.preventDefault();
    const hasErr = validateForm(f1);
    setf1Err(hasErr);
    console.log(hasErr);
    if (Object.keys(hasErr).length < 1) {
      console.log("validated");
      if (fIndex !== 3) {
        setFindex((prev) => {
          return (prev += 1);
        });
      }
    }
  };
  const handlePrev = (e) => {
    e.preventDefault();
    if (fIndex !== 0) {
      setFindex((prev) => {
        return (prev -= 1);
      });
    }
  };

  return (
    <>
      <FormHeader />
      <section className="form-section px-15 top-space section-b-space">
        <form>
          {
            {
              0: (
                <Form1
                  err={f1Err}
                  setErr={setf1Err}
                  iValue={f1}
                  setIValue={setf1}
                  handleUpload={handleUpload}
                  handleRemove={handleRemove}
                  imgArr={imgArr}
                />
              ),
              1: (
                <Form2
                  err={f1Err}
                  setErr={setf1Err}
                  iValue={f1}
                  setIValue={setf1}
                  handleUpload={handleUpload}
                  handleRemove={handleRemove}
                  imgArr={imgArr}
                />
              ),
            }[fIndex]
          }

          {/* footer */}
          <div className="bottom-form-btn d-flex flex-nowrap justify-content-between">
            <button onClick={handlePrev} className="btn btn-solid col-4">
              Prev
            </button>
            <button
              onClick={handleNext}
              className="btn btn-solid col-4 ml-auto"
            >
              Next
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
