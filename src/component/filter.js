import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../pricingSlider.css";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

function Filter({ props }) {
  const [slidePrice, setSlidePrice] = useState([3, 40]);

  const handleSliderInput = (elem) => {
    const [a, b] = elem;
    setSlidePrice([a, b]);
  };

  return (
    <>
      <button className="filter-btn border-0" onClick={props.handleFilter}>
        <i className="iconly-Filter icli"></i>
      </button>

      <Modal
        className="filter-modal"
        show={props.openFilter}
        fullscreen={true}
        onHide={() => props.setOpenFilter(false)}
      >
        <Modal.Header closeButton>
          <h2>Filter</h2>
        </Modal.Header>
        <Modal.Body>
          <div className="filter-box">
            <h2 className="filter-title">Sort By:</h2>
            <div className="filter-content">
              <select
                className="form-select form-control form-theme"
                aria-label="Default select example"
              >
                <option value={""}>Recommended</option>
                <option value="1">Popularity</option>
                <option value="2">What's New</option>
                <option value="3">Price: High to Low</option>
                <option value="4">Price: Low to High</option>
                <option value="5">Customer rating</option>
              </select>
            </div>
          </div>
          <div className="filter-box">
            <h2 className="filter-title">Brand:</h2>
            <div className="filter-content">
              <ul className="row filter-row g-3">
                <li className="col-6">
                  <div className="filter-col">Here &amp; Now</div>
                </li>
                <li className="col-6">
                  <div className="filter-col">Zara</div>
                </li>
                <li className="col-6 active">
                  <div className="filter-col">Mast &amp; harbour</div>
                </li>
                <li className="col-6">
                  <div className="filter-col">Tokyo talkies</div>
                </li>
                <li className="col-6">
                  <div className="filter-col">Vogue</div>
                </li>
                <li className="col-6">
                  <div className="filter-col">gucci</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="filter-box">
            <h2 className="filter-title">Size:</h2>
            <div className="filter-content">
              <ul className="row filter-row g-3">
                <li className="col-4">
                  <div className="filter-col">small</div>
                </li>
                <li className="col-4">
                  <div className="filter-col">Medium</div>
                </li>
                <li className="col-4">
                  <div className="filter-col">large</div>
                </li>
                <li className="col-4">
                  <div className="filter-col">XL</div>
                </li>
                <li className="col-4">
                  <div className="filter-col">2XL</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="filter-box">
            <h2 className="filter-title">Price:</h2>
            <div className="filter-content">
              {/* <div className="range-slider pricing-slider">
                <span className="irs js-irs-0">
                  <span className="irs">
                    <span className="irs-line" tabIndex="-1">
                      <span className="irs-line-left"></span>
                      <span className="irs-line-mid"></span>
                      <span className="irs-line-right"></span>
                    </span>
                    <span className="irs-min" style={{ visibility: "hidden" }}>
                      Rp. 0
                    </span>
                    <span className="irs-max" style={{ visibility: "visible" }}>
                      Rp. 1.000.000
                    </span>
                    <span
                      className="irs-from"
                      style={{ visibility: "visible", left: "0%" }}
                    >
                      Rp. 0
                    </span>
                    <span
                      className="irs-to"
                      style={{ visibility: "visible", left: "43.1227%" }}
                    >
                      Rp. 500.000
                    </span>
                    <span
                      className="irs-single"
                      style={{ visibility: "hidden", left: "18.4015%" }}
                    >
                      Rp. 0 - Rp. 500.000
                    </span>
                  </span>
                  <span className="irs-grid"></span>
                  <span
                    className="irs-bar"
                    style={{ left: "2.04461%", width: "47.9554%" }}
                  ></span>
                  <span
                    className="irs-shadow shadow-from"
                    style={{ display: "none" }}
                  ></span>
                  <span
                    className="irs-shadow shadow-to"
                    style={{ display: "none" }}
                  ></span>
                  <span
                    className="irs-slider from"
                    style={{ left: "0%" }}
                  ></span>
                  <span
                    className="irs-slider to type_last"
                    style={{ left: "47.9554%" }}
                  ></span>
                </span>
                <input
                  type="text"
                  className="js-range-slider irs-hidden-input"
                  readOnly
                />
              </div> */}
              <div className="ht">
                <div className="position-absolute top-0 left-0 w-100 d-flex justify-content-between">
                  <span className="irs-span">
                    {" "}
                    &#x20A6; {slidePrice[0]}, 000
                  </span>
                  -
                  <span className="irs-span">&#x20A6; {slidePrice[1]},000</span>
                </div>
                <RangeSlider
                  min={1}
                  defaultValue={slidePrice}
                  onInput={handleSliderInput}
                />
              </div>
            </div>
          </div>
          <div className="filter-box">
            <h2 className="filter-title">Occasion:</h2>
            <div className="filter-content">
              <ul className="row filter-row g-3">
                <li className="col-6">
                  <div className="filter-col">Casual</div>
                </li>
                <li className="col-6">
                  <div className="filter-col">sports</div>
                </li>
                <li className="col-6">
                  <div className="filter-col">beach wear</div>
                </li>
                <li className="col-6">
                  <div className="filter-col">lounge wear</div>
                </li>
                <li className="col-6">
                  <div className="filter-col">formal</div>
                </li>
                <li className="col-6">
                  <div className="filter-col">party</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="filter-box">
            <h2 className="filter-title">Colors:</h2>
            <div className="filter-content">
              <ul className="filter-color">
                <li>
                  <div className="color-box light-purple"></div>
                </li>
                <li className="active">
                  <div className="color-box light-grey"></div>
                </li>
                <li>
                  <div className="color-box blue-purple"></div>
                </li>
                <li>
                  <div className="color-box light-orange"></div>
                </li>
                <li>
                  <div className="color-box dark-pink"></div>
                </li>
                <li>
                  <div className="color-box green-blue"></div>
                </li>
                <li>
                  <div className="color-box green"></div>
                </li>
                <li>
                  <div className="color-box blue"></div>
                </li>
                <li>
                  <div className="color-box yellow"></div>
                </li>
                <li>
                  <div className="color-box light-red"></div>
                </li>
                <li>
                  <div className="color-box light-purple2"></div>
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="reset-link bg-none"
            onClick={() => props.setOpenFilter(false)}
          >
            RESET
          </button>
          <button
            className="btn btn-solid"
            onClick={() => props.setOpenFilter(false)}
          >
            apply filters
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Filter;
