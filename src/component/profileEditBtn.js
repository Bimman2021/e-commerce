import React from "react";
import avatar from "../assets/images/user/1.png";
import { Link } from "react-router-dom";
const ProfileEditBtn = () => {
  return (
    <section className="top-space pt-0">
      <div className="profile-detail">
        <div className="media">
          <img src={avatar} className="img-fluid" alt="" />
          <div className="media-body">
            <h2>Paige Turner</h2>
            <h6>paigeturner@gmail.com</h6>
            <Link to="/profile-settings" className="edit-btn">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileEditBtn;
