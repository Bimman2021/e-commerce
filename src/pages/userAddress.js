import React from "react";
import { Link } from "react-router-dom";

const UserAddress = () => {
  return (
    <section className="top-space px-15">
      <div className="delivery-option-section">
        <ul>
          <li>
            <div className="check-box">
              <div className="form-check d-flex ps-0">
                <input
                  className="radio_animated"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label
                  className="form-check-label"
                  for="flexRadioDefault2"
                ></label>
                <div>
                  <h4 className="name">Arthur M Willingham</h4>
                  <div className="addess">
                    <h4>3059 Elk City Road</h4>
                    <h4>Indianapolis, Indiana</h4>
                    <h4>IN 46229</h4>
                  </div>
                  <h4>Phone No: 317-898-0622</h4>
                  <h6 className="label">OFFICE</h6>
                </div>
              </div>
            </div>
            <div className="buttons">
              <Link to="#">Remove</Link>
              <Link to="#">edit</Link>
            </div>
          </li>
        </ul>
        <Link
          to="/new-address"
          className="btn btn-outline text-capitalize w-100 mt-3"
        >
          add New address
        </Link>
      </div>
    </section>
  );
};

export default UserAddress;
