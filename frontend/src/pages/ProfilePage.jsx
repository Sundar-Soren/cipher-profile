import React, { useEffect, useState } from "react";
import AboutMe from "../components/AboutMe";
import ChangePasswordModel from "../components/ChangePasswordModel";
import Interests from "../components/Interests";
import Map from "../components/Map";
import PasswordAndSecurity from "../components/PasswordAndSecurity";
import PI from "../components/PI";
import SocialMediaLinks from "../components/SocialMediaLinks";
import Topbar from "../components/Topbar";
import newRequest from "../utils/newRequest";

const ProfilePage = ({ user, setUser, setShowModel, setShowInterestModel }) => {
  return (
    <>
      <Topbar user={user} setUser={setUser} />
      <div className="px-12 divide-y">
        <AboutMe user={user} setUser={setUser} />
        <Map user={user} />
        <SocialMediaLinks user={user} setUser={setUser} />
        <PI user={user} setUser={setUser} />
        <PasswordAndSecurity setShowModel={setShowModel} />
        <Interests
          user={user}
          setUser={setUser}
          setShowInterestModel={setShowInterestModel}
        />
      </div>
    </>
  );
};

export default ProfilePage;
