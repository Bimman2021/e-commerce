import React from "react";
import avatarImg from "../assets/images/user/1.png";

const ProfileSettingsComponent = () => {
  const changeAvatar = () => {
    let inputTag = document.createElement("input");
    inputTag.type = "file";
    inputTag.name = "avatar";
    inputTag.accept = "image/*";
    inputTag.click();
    inputTag.addEventListener("change", (e) => {
      console.log(e);
    });
  };

  return (
    <div>
      <section className="user-avtar-section top-space pt-0 px-15">
        <img src={avatarImg} className="img-fluid" alt="" />
        <span className="edit-icon" onClick={changeAvatar}>
          <i className="iconly-Edit-Square icli"></i>
        </span>
      </section>
      <section className="detail-form-section px-15">
        <h2 className="page-title mb-4">Personal Details</h2>
        <form>
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              id="one"
              placeholder="First Name"
            />
            <label htmlFor="one">First Name</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              id="five"
              placeholder="Last Name"
            />
            <label htmlFor="five">Last Name</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="number"
              className="form-control"
              id="two"
              placeholder="Date of Birth"
            />
            <label htmlFor="two">Date of Birth</label>
          </div>
          <div className="form-floating mb-4">
            <select className="form-select" id="floatingSelect">
              <option selected="" value="1">
                Gender
              </option>
              <option value="2">Men</option>
              <option value="3">Women</option>
              <option value="3">other</option>
            </select>
            <label htmlFor="floatingSelect">Gender</label>
          </div>
        </form>
      </section>
      <section className="detail-form-section pt-0 px-15">
        <form>
          <div className="form-floating mb-4">
            <input
              type="number"
              className="form-control"
              id="six"
              value="9876543210"
              placeholder="Mobile Number"
            />
            <label htmlFor="six">Mobile Number</label>
            <a className="change-btn" href="#">
              change
            </a>
          </div>
          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control"
              id="eight"
              value="545454"
              placeholder="Password"
            />
            <label htmlFor="eight">Password</label>
            <a className="change-btn" href="#">
              change
            </a>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ProfileSettingsComponent;
