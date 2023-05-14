import React from "react";
import BackHeader from "../component/backHeader";
import ProfileSettingsComponent from "../component/profileSettingsComponent";
import CartBottom from "../component/cartBottom";

const ProfileSetting = () => {
  return (
    <>
      <BackHeader title="Profile Settings" />
      <ProfileSettingsComponent />
      <CartBottom leftTitle="cancel" rightTitle="save details" />
    </>
  );
};

export default ProfileSetting;
