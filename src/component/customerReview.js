import React from "react";
import img1 from "../assets/images/user/2.png";
import img2 from "../assets/images/user/3.png";
import tumbDownImg from "../assets/svg/thumbs-down.svg";
import tumbUpImg from "../assets/svg/thumbs-up.svg";

const CustomerReview = () => {
  return (
    <div>
      <div className="product-detail-box px-15">
        <h4 className="page-title">
          Customer Reviews (24) <a href="#">All Reviews</a>
        </h4>
        <div className="review-section">
          <ul>
            <li>
              <div className="media">
                <img src={img1} className="img-fluid" alt="" />
                <div className="media-body">
                  <h4>Mark Jacob | 20 Aug, 2021</h4>
                  <ul className="ratings">
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
              </div>
              <h4 className="content-color">
                It's a really cute skirt! I didn't expect to feel so good in a
                polyester material. The print is slightly less bright than what
                is shown in the product description.
              </h4>
              <div className="review-bottom">
                <h6>
                  Size bought: <span className="content-color">S</span>
                </h6>
                <div className="liking-sec">
                  <span className="content-color">
                    <img
                      src="assets/svg/thumbs-up.svg"
                      className="img-fluid"
                      alt=""
                    />
                    20
                  </span>
                  <span className="content-color">
                    <img
                      src="assets/svg/thumbs-down.svg"
                      className="img-fluid"
                      alt=""
                    />
                    2
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="media">
                <img src={img2} className="img-fluid" alt="" />
                <div className="media-body">
                  <h4>Mark Jacob | 20 Aug, 2021</h4>
                  <ul className="ratings">
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
              </div>
              <h4 className="content-color">
                It's a really cute skirt! I didn't expect to feel so good in a
                polyester material. The print is slightly less bright than what
                is shown in the product description.
              </h4>
              <div className="review-bottom">
                <h6>
                  Size bought: <span className="content-color">S</span>
                </h6>
                <div className="liking-sec">
                  <span className="content-color">
                    <img src={tumbUpImg} className="img-fluid" alt="" />
                    20
                  </span>
                  <span className="content-color">
                    <img src={tumbDownImg} className="img-fluid" alt="" />2
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
