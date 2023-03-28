import React, { useEffect, useState } from "react";
import FollowersProfile from "../components/FollowersProfile";
import newRequest from "../utils/newRequest";

const FollowersList = () => {
  const [followers, setFollowers] = useState([]);

  const getFollowers = async () => {
    try {
      const { data } = await newRequest.get("followers");
      setFollowers(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFollowers();
  }, []);

  return (
    <div>
      <h1 className="pl-6 font-bold text-xl py-5"> Users Following You</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-5">
        {followers.length > 0 &&
          followers.map((follower) => <FollowersProfile follower={follower} />)}
      </div>
    </div>
  );
};

export default FollowersList;
