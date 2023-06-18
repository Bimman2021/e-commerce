import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

function RatingCanvas() {
  const [show, setShow] = useState(false);
  const rating = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setTimeout(() => {
      let n = rating.current.childNodes;
      n.forEach((element, index) => {
        element.addEventListener("click", (e) => {
          console.log(e.currentTarget);
        });
      });
    }, 100);
  };

  return (
    <>
      <button
        onClick={handleShow}
        className="border-0 bg-none"
        style={{ fontSize: "inherit", color: "inherit" }}
      >
        <i className="iconly-Star icli"></i> Rate &amp; Review Product
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="bottom"
        className="h-auto"
      >
        <Offcanvas.Body>
          <h2 className="mb-2">Write Review</h2>
          <div className="d-flex align-items-center">
            <h4 className="content-color me-2">Your rating:</h4>
            <ul className="ratings" id="rating" ref={rating}>
              <li>
                <i className="iconly-Star icbo"></i>
              </li>
              <li>
                <i className="iconly-Star icbo"></i>
              </li>
              <li>
                <i className="iconly-Star icbo"></i>
              </li>
              <li>
                <i className="iconly-Star icbo"></i>
              </li>
              <li>
                <i className="iconly-Star icbo empty"></i>
              </li>
            </ul>
          </div>
          <h4 className="content-color mt-2 mb-2">Review:</h4>
          <form className="mb-4 section-b-space">
            <textarea rows="4" className="form-control"></textarea>
          </form>
          <div className="cart-bottom row m-0">
            <div>
              <div className="left-content col-5">
                <Link to="" className="title-color">
                  BACK
                </Link>
              </div>
              <button
                onClick={() => setShow(false)}
                className="btn btn-solid col-7 text-uppercase"
              >
                Submit
              </button>
            </div>
          </div>
          .
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const RateSection = () => {
  return (
    <div className="rate-section px-15">
      <ul>
        <li>
          <RatingCanvas />
        </li>
        <li>
          <i className="iconly-Star icli"></i> Need Help?
        </li>
      </ul>
    </div>
  );
};

export default RateSection;
