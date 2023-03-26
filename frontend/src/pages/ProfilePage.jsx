import React, { useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Interests from "../components/Interests";
import Map from "../components/Map";
import PasswordAndSecurity from "../components/PasswordAndSecurity";
import PI from "../components/PI";
import SocialMediaLinks from "../components/SocialMediaLinks";
import Topbar from "../components/Topbar";
import axios from "axios";
import newRequest from "../utils/newRequest";

const ProfilePage = () => {
  const makeUserLogin = async () => {
    try {
      const { data } = await newRequest.post("login", {
        email: "sundarsoren@gmail.com",
        password: "12345678",
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const amILogin = async () => {
    try {
      const { data } = await newRequest.get("me");
      console.log(data);
    } catch (error) {
      console.log(error.response.data.status);
      if (error.response?.data?.status === false) makeUserLogin();
    }
  };

  useEffect(() => {
    amILogin();
  }, []);
  return (
    <>
      <Topbar />
      <div className="px-12 divide-y">
        <AboutMe />
        <Map />
        <SocialMediaLinks />
        <PI />
        <PasswordAndSecurity />
        <Interests />
      </div>
    </>
  );
};

export default ProfilePage;
