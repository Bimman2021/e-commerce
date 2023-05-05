import React from "react";
import four from "../assets/notification/4.jpg";
import five from "../assets/notification/5.jpg";

const Notification = () => {
  return (
    <>
      <div className="px-15 top-space">
        <div id="ourHolder" className="filter-content">
          <div className="item payment">
            <div className="media">
              <img src={four} className="img-fluid" alt="" />
              <div className="media-body">
                <h4>
                  Payment Failed. You can retry making a payment on order
                  sections.
                </h4>
                <h6 className="content-color">20 April, 2021</h6>
              </div>
            </div>
          </div>
          <div className="item payment">
            <div className="media">
              <img src={five} className="img-fluid" alt="" />
              <div className="media-body">
                <h4>Exclusive Brand Day Sale!! HURRY, LIMITED period offer!</h4>
                <h6 className="content-color">10 July, 2021</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
