import React, { useState, useEffect } from "react";
import img1 from "../assets/images/banner-image.png";
import { Link } from "react-router-dom";

const BannerTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="banner-timer">
        <div className="banner-bg">
          <div className="banner-content">
            <div>
              <h6>Denim Wear</h6>
              <h2>Sales Starts In</h2>
              <div className="counters my-3">
                <div className="counter d-none">
                  <span id="days">{days}</span>
                  <p>Days</p>
                </div>
                <div className="counter">
                  <span id="hours">{hours}</span>
                  <p>Hours</p>
                </div>
                <div className="counter">
                  <span id="minutes">{minutes}</span>
                  <p>Minutes</p>
                </div>
                <div className="counter">
                  <span id="seconds">{seconds}</span>
                  <p>Seconds</p>
                </div>
              </div>
              <Link to="shop">explore now</Link>
            </div>
          </div>
          <div className="banner-img">
            <img src={img1} className="img-fluid" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerTimer;
