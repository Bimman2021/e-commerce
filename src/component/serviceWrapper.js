import React from "react";
import returnImg from "../assets/svg/returning.svg";
import hrImg from "../assets/svg/24-hours.svg";
import walletImg from "../assets/svg/wallet.svg";

const Servicewrapper = () => {
  return (
    <section className="service-wrapper px-15 pt-0">
      <div className="row">
        <div className="col-4">
          <div className="service-wrap">
            <div className="icon-box">
              <img src={returnImg} className="img-fluid" alt="" />
            </div>
            <span>7 Day Return</span>
          </div>
        </div>
        <div className="col-4">
          <div className="service-wrap">
            <div className="icon-box">
              <img src={hrImg} className="img-fluid" alt="" />
            </div>
            <span>24/7 Support</span>
          </div>
        </div>
        <div className="col-4">
          <div className="service-wrap">
            <div className="icon-box">
              <img src={walletImg} className="img-fluid" alt="" />
            </div>
            <span>Secure Payment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicewrapper;
