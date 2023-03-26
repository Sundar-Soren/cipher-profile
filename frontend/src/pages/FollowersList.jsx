import React from "react";
import FollowersProfile from "../components/FollowersProfile";

const FollowersList = () => {
  return (
    <div>
      <h1 className="pl-6 font-bold text-xl py-5"> Users Following You</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-5">
        <FollowersProfile />
        <FollowersProfile />
        <FollowersProfile />
        <FollowersProfile />
        <FollowersProfile />
        <FollowersProfile />
        <FollowersProfile />
        <FollowersProfile />
        <FollowersProfile />
        <FollowersProfile />
        <FollowersProfile />
        <FollowersProfile />
        <FollowersProfile />
        <FollowersProfile />
        <FollowersProfile />
        <FollowersProfile />
        <FollowersProfile />
      </div>
    </div>
  );
};

export default FollowersList;
