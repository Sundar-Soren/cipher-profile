import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className=" sticky top-14 w-full h-32 bg-slate-100 px-12 z-30">
      <div className="flex justify-between items-center h-full">
        <div class="flex items-center h-max space-x-4">
          <img
            class="w-20 h-20 rounded-full object-cover"
            src="https://images.pexels.com/photos/1364756/pexels-photo-1364756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div class="font-medium">
            <div className="text-2xl">Hello,</div>
            <div className="text-3xl font-bold">Elon Bhai</div>
            <div class="text-xl">e81727@gmail.com</div>
          </div>
        </div>
        <Link to="/followers">
          <h1 className="font-bold text-lg cursor-pointer">0 Followers</h1>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
