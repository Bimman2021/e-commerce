import React from "react";
import checkImg from "../assets/svg/check.svg";

const TrackOrderUI = () => {
  return (
    <div className="order-track px-15">
      <div className="order-track-step in-process">
        <div className="order-track-status">
          <span className="order-track-status-dot">
            <img src={checkImg} className="img-fluid" alt="" />
          </span>
          <span className="order-track-status-line"></span>
        </div>
        <div className="order-track-text">
          <p className="order-track-text-stat">Out For Delivery</p>
          <span className="order-track-text-sub">
            expected delivery on monday
          </span>
        </div>
      </div>
      <div className="order-track-step">
        <div className="order-track-status">
          <span className="order-track-status-dot">
            <img src={checkImg} className="img-fluid" alt="" />
          </span>
          <span className="order-track-status-line"></span>
        </div>
        <div className="order-track-text">
          <p className="order-track-text-stat"> In Transit</p>
          <span className="order-track-text-sub">10.00 am, 21/05/2020</span>
        </div>
      </div>
      <div className="order-track-step">
        <div className="order-track-status">
          <span className="order-track-status-dot">
            <img src={checkImg} className="img-fluid" alt="" />
          </span>
          <span className="order-track-status-line"></span>
        </div>
        <div className="order-track-text">
          <p className="order-track-text-stat"> Ready To Ship</p>
          <span className="order-track-text-sub">12.00 am, 20/05/2020</span>
        </div>
      </div>
      <div className="order-track-step">
        <div className="order-track-status">
          <span className="order-track-status-dot">
            <img src={checkImg} className="img-fluid" alt="" />
          </span>
          <span className="order-track-status-line"></span>
        </div>
        <div className="order-track-text">
          <p className="order-track-text-stat"> Ordered</p>
          <span className="order-track-text-sub">20/05/2020</span>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderUI;
