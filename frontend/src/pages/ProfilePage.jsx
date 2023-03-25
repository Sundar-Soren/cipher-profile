import React from "react";
import AboutMe from "../components/AboutMe";
import Interests from "../components/Interests";
import Map from "../components/Map";
import PasswordAndSecurity from "../components/PasswordAndSecurity";
import PI from "../components/PI";
import SocialMediaLinks from "../components/SocialMediaLinks";

const ProfilePage = () => {
  return (
    <div className="px-12 divide-y">
      <AboutMe />
      <Map />
      <SocialMediaLinks />
      <PI />
      <PasswordAndSecurity />
      <Interests />
    </div>
  );
};

export default ProfilePage;
