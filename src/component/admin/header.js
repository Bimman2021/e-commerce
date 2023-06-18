import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bars from "../../assets/svg/bar.svg";
import logo from "../../assets/images/logo.png";
import img from "../../assets/images/user/1.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import UsefulLink from "./usefulLink";
import Avatar from "../avatar";

function CanvasMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="nav-bar" onClick={handleShow}>
        <img src={bars} className="img-fluid" alt="" />
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Link to="/" className="brand-logo">
            <img src={logo} width={"135px"} className="img-fluid" alt="" />
          </Link>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-0">
          <UsefulLink />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <header className={scroll ? "darkHeader" : ""}>
      <CanvasMenu />
      <Link to="/" className="brand-logo">
        <img src={logo} className="img-fluid" alt="" />
      </Link>
      <div className="header-option">
        <Avatar />
        {/* <ul>
          <li>
            <Link to="/search">
              <i className="iconly-Login icli"></i>
            </Link>
          </li>
        </ul> */}
      </div>
    </header>
  );
};

export default Header;
