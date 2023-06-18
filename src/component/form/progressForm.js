import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Dob from "./dob";
import { ProgressBar } from "react-bootstrap";
import MobileInput from "./phoneNumber";

const getAge = (dob) => {
  if (!dob) return;
  let today = new Date();
  let bDay = new Date(dob);
  let age = today.getFullYear() - bDay.getFullYear();
  let month = today.getMonth() - bDay.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < bDay.getDate())) {
    age--;
  }
  return age;
};

function Section1({ data, setData }) {
  const handleChange = (e) => {
    e.preventDefault();
    const field = e.target.getAttribute("data-field");
    const value = e.target.value;
    if (field === "gender") {
      setData((prev) => {
        return { ...prev, gender: value };
      });

      //set age field
      let dateString = `${data.day}/${data.month}/${data.year}`;
      setData((prev) => {
        return { ...prev, age: getAge(dateString) };
      });
    } else if (field === "intrest") {
      setData((prev) => {
        return { ...prev, intrestedIn: value };
      });
    } else if (field === "orientation") {
      setData((prev) => {
        return { ...prev, orientation: value };
      });
    }
  };

  return (
    <section>
      <Dob data={data} setData={setData} />
      <div className="row flex-nowrap">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              value={data.gender}
              data-field="gender"
              id="gender"
              onChange={handleChange}
              className="custom-select"
            >
              <option value="*">*</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="trans">Trans</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="intrest">Intrested in</label>
            <select
              value={data.intrestedIn}
              data-field="intrest"
              id="intrest"
              onChange={handleChange}
              className="custom-select"
            >
              <option value="*">*</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="trans">Trans</option>
              <option value="any">Any</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="orientation">Orientation</label>
        <select
          value={data.orientation}
          data-field="orientation"
          id="orientation"
          onChange={handleChange}
          className="custom-select"
        >
          <option value="*">*</option>
          <option value="straight">Straight</option>
          <option value="gay">Gay</option>
          <option value="bi">Bi</option>
          <option value="lessibian">Lessibian</option>
        </select>
      </div>
    </section>
  );
}

//
function Section2({ data, setData }) {
  const handleChange = () => {};
  return (
    <section>
      <div className="row flex-nowrap">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="gender">Height</label>
            <select
              value={data.gender}
              data-field="gender"
              id="gender"
              onChange={handleChange}
              className="custom-select"
            >
              <option value="*">*</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="trans">Trans</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="intrest">Weight</label>
            <select
              value={data.intrestedIn}
              data-field="intrest"
              id="intrest"
              onChange={handleChange}
              className="custom-select"
            >
              <option value="*">*</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="trans">Trans</option>
              <option value="any">Any</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row flex-nowrap">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="gender">Ethnicity</label>
            <select
              value={data.gender}
              data-field="gender"
              id="gender"
              onChange={handleChange}
              className="custom-select"
            >
              <option value="*">*</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="trans">Trans</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="intrest">Relationship</label>
            <select
              value={data.intrestedIn}
              data-field="intrest"
              id="intrest"
              onChange={handleChange}
              className="custom-select"
            >
              <option value="">*</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="open">Open</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile</label>
        <MobileInput id="mobile" />
      </div>
    </section>
  );
}

//
function Section3({ data, setData }) {
  return (
    <section>
      <div className="form-group">
        <label>Profile Picture</label>
        <div className="box">
          <input
            type="file"
            id="file-2"
            className="inputfile inputfile-2"
            accept="image/jpeg,image/png,image/jpg"
          />
          <label htmlFor="file-2" className="text-center form-control">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="17"
              viewBox="0 0 20 17"
            >
              <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
            </svg>
            <span className="ml-3">Upload an image&hellip;</span>
          </label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="mobile">About</label>
        <textarea
          className="form-control"
          rows="3"
          style={{ resize: "none" }}
          placeholder="Don't be shy, tell people about you..."
        ></textarea>
      </div>
    </section>
  );
}

// main start
const ProgressForm = () => {
  const [dataSec1, setDataSec1] = useState({
    day: "",
    month: "",
    year: "",
    gender: "",
    intrestedIn: "",
    orientation: "",
    age: "",
  });
  const [dataSec2, setDataSec2] = useState({});
  const [dataSec3, setDataSec3] = useState({});
  const [progress, setProgress] = useState(1);
  const [section, setSection] = useState(1);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (section === 1) {
      const ds = Object.values(dataSec1).filter(
        (item) => item === "" || item === "*"
      );
      if (ds.length > 0) {
        setError("please fill all fields");
      } else {
        console.log(dataSec1);
        setError("");
        setSection(2);
        setProgress(30);
      }
    } else if (section === 2) {
      setSection(3);
      setProgress(70);
    }
  };
  const handlePrev = () => {
    setError("");
    if (section === 3) {
      setSection(2);
      setProgress(30);
    } else if (section === 2) {
      setSection(1);
      setProgress(1);
    }
  };
  const handleSubmit = () => {};

  return (
    <div className="main-layout card-bg-1">
      <div className="container d-flex flex-column">
        <div className="row no-gutters align-items-center justify-content-center min-vh-100">
          <div className="bg-white col-12 col-md-6 col-lg-5 col-xl-4">
            <h3>Almost there !</h3>
            <form className="py-3" onSubmit={handleSubmit}>
              <ProgressBar now={progress} animated />
              <div className="alert-danger text-center mt-2 mb-2">{error}</div>
              {
                {
                  1: <Section1 data={dataSec1} setData={setDataSec1} />,

                  2: <Section2 data={{}} setData={{}} />,
                  3: <Section3 data={{}} setData={{}} />,
                }[section]
              }
            </form>
            <div className="d-flex mb-3 justify-content-between">
              <button
                className={section === 1 ? "d-none" : "btn btn-primary"}
                onClick={handlePrev}
              >
                prev
              </button>
              <button className="btn btn-primary ml-auto" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressForm;
