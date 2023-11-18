import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bars from "../assets/svg/bar.svg";
import logo from "../assets/images/logo.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import UsefulLink from "./usefulLink";

export default function CanvasMenu() {
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
