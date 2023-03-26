import React from "react";

const FollowersProfile = () => {
  return (
    <div>
      <div class="w-full bg-slate-50 border border-gray-200 rounded-lg shadow">
        <div class="flex justify-end pt-4"></div>
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-20 h-20 mb-3 rounded-full shadow-lg object-cover"
            src="https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
          <span class="text-sm text-gray-500">Visual Designer</span>
          <span class="text-sm text-gray-500">0 Followers</span>
          <div class="flex mt-2 space-x-2 md:mt-4">
            <button class="inline-flex items-center px-12 py-2 text-sm font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowersProfile;
