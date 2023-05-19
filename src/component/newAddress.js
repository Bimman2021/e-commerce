import React from "react";

const NewAddress = () => {
  return (
    <section className="top-space pt-2">
      <div className="address-form-section px-15">
        <div className="form-floating mb-4">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected="" value="1">
              New Zealand
            </option>
            <option value="2">Austrlia</option>
            <option value="3">India</option>
          </select>
          <label htmlFor="floatingSelect">Country/Region</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="text"
            className="form-control"
            id="one"
            placeholder="Full Name"
          />
          <label htmlFor="one">Full Name</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="number"
            className="form-control"
            id="two"
            placeholder="Mobile Number"
          />
          <label htmlFor="two">Mobile Number</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="number"
            className="form-control"
            id="three"
            placeholder="Pin Code"
          />
          <label htmlFor="three">Pin Code</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="text"
            className="form-control"
            id="four"
            placeholder="flat, house No., building.."
          />
          <label htmlFor="four">flat, house No., building..</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="text"
            className="form-control"
            id="five"
            placeholder="area, colony, street"
          />
          <label htmlFor="five">area, colony, street</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="text"
            className="form-control"
            id="six"
            placeholder="landmark"
          />
          <label htmlFor="six">landmark</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="text"
            className="form-control"
            id="seven"
            placeholder="town/city"
          />
          <label htmlFor="seven">town/city</label>
        </div>
        <div className="form-floating mb-4">
          <select
            className="form-select"
            id="floatingSelect1"
            aria-label="Floating label select example"
          >
            <option selected="" disabled="" value="1">
              Select state
            </option>
            <option value="2">state</option>
            <option value="3">state</option>
          </select>
          <label htmlFor="floatingSelect1">state/province/region</label>
        </div>
      </div>
      <div className="divider"></div>
      <div className="type-address px-15">
        <h2 className="page-title">Type of address</h2>
        <form className="d-flex">
          <div className="me-3 d-flex align-items-center mb-2">
            <input
              className="radio_animated"
              type="radio"
              name="gender"
              id="Home"
              value="male"
            />
            <label htmlFor="Home">Home</label>
          </div>
          <div className="me-3 d-flex align-items-center mb-2">
            <input
              className="radio_animated"
              type="radio"
              name="gender"
              id="office"
              value="office"
            />
            <label htmlFor="office">Office</label>
          </div>
          <div className="d-flex align-items-center mb-2">
            <input
              className="radio_animated"
              type="radio"
              name="gender"
              id="others"
              value="others"
            />
            <label htmlFor="others">Others</label>
          </div>
        </form>
        <div className="checkbox_animated">
          <div className="d-flex align-items-center mb-2">
            <input type="checkbox" id="ten" />
            <label htmlFor="ten">make default address </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAddress;
