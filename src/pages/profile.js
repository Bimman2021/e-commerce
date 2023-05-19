import React from "react";
import Navbar from "../component/navBar";
import UsefulLink from "../component/usefulLink";
import LogoutBtn from "../component/logoutBtn";
import ProfileEditBtn from "../component/profileEditBtn";
import BackHeader from "../component/backHeader";

const Profile = () => {
  return (
    <>
      <BackHeader title={"Profile"} />
      <Navbar />
      <ProfileEditBtn />
      <UsefulLink />
      <LogoutBtn />
    </>
  );
};

export default Profile;
