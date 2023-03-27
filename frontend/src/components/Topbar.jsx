import React from "react";
import { Link } from "react-router-dom";

const Topbar = ({ user }) => {
  return (
    <div className=" sticky top-14 w-full h-32 bg-slate-100 px-12 z-40">
      <div className="flex justify-between items-center h-full">
        <div class="flex items-center h-max space-x-4">
          <img
            class="w-20 h-20 rounded-full object-cover"
            src={user?.avatar}
            alt=""
          />
          <div class="font-medium">
            <div className="text-2xl">Hello,</div>
            <div className="text-3xl font-bold">
              {user?.firstName} {user?.lastName}
            </div>
            <div class="text-xl">{user?.email}</div>
          </div>
        </div>
        <Link to="/followers">
          <h1 className="font-bold text-lg cursor-pointer">
            {user?.followers?.length} Followers
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
