import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/flag.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleMode } from "../../contexts/slices/dayNight";
import { getCookie, setCookie } from "../../config/useCookie";

const UsefulLink = () => {
  const setTrue = String(getCookie("dayNight")).toLowerCase() === "true";
  // const dayNight = useSelector((state) => state.dayNight);
  const dispatch = useDispatch();

  const handleDark = async (e) => {
    const isDark = e.target.checked;
    dispatch(toggleMode(isDark));

    setCookie("dayNight", isDark, 3);
    window.location.reload();
  };

  return (
    <>
      <div className="sidebar-content">
        <ul className="link-section">
          <li>
            <div>
              <i className="iconly-Setting icli"></i>
              <div className="content toggle-sec w-100">
                <div>
                  <h4>Dark Mode</h4>
                </div>
                <div className="button toggle-btn ms-auto">
                  <input
                    onChange={handleDark}
                    value={setTrue}
                    checked={setTrue}
                    type="checkbox"
                    className="checkbox"
                  />
                  <div className="knobs">
                    <span></span>
                  </div>
                  <div className="layer"></div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link to="/order-history">
              <i className="iconly-Category icli"></i>
              <div className="content">
                <h4>Dashboard</h4>
                <h6>Ongoing Orders, Recent Orders..</h6>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/admin/upload">
              <i className="iconly-Upload icli"></i>
              <div className="content">
                <h4>Upload Product</h4>
                <h6>Adding new Products</h6>
              </div>
            </Link>
          </li>
          <li>
            <Link to="saved-cards.html">
              <i className="iconly-Wallet icli"></i>
              <div className="content">
                <h4>Payment</h4>
                <h6>Saved Cards, Wallets</h6>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/saved-address">
              <i className="iconly-Location icli"></i>
              <div className="content">
                <h4>Saved Address</h4>
                <h6>Home, office.. </h6>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={img} className="img-fluid" alt="" />
              <div className="content">
                <h4>Langauge</h4>
                <h6>Only english available..</h6>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/notifications">
              <i className="iconly-Notification icli"></i>
              <div className="content">
                <h4>Notification</h4>
                <h6>Offers, Order tracking messages..</h6>
              </div>
            </Link>
          </li>
          <li>
            <Link to="settings.html">
              <i className="iconly-Setting icli"></i>
              <div className="content">
                <h4>Settings</h4>
                <h6>Dark mode, RTL, Notification</h6>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/profile-settings">
              <i className="iconly-Password icli"></i>
              <div className="content">
                <h4>Profile setting</h4>
                <h6>Full Name, Password..</h6>
              </div>
            </Link>
          </li>
        </ul>
        <div className="divider"></div>
        <ul className="link-section">
          <li>
            <Link to="/terms-condition">
              <i className="iconly-Info-Square icli"></i>
              <div className="content">
                <h4>Terms &amp; Conditions</h4>
                <h6>T&amp;C for use of Platform</h6>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/help">
              <i className="iconly-Call icli"></i>
              <div className="content">
                <h4>Help/Customer Care</h4>
                <h6>Customer Support, FAQs</h6>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UsefulLink;
