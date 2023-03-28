import React from "react";

const Interests = ({ user, setUser, setShowInterestModel }) => {
  return (
    <div className="py-7">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">INTERESTS</h1>
        <button
          type="button"
          class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
          onClick={() => setShowInterestModel(true)}
        >
          Edit
        </button>
      </div>
      <div className="flex flex-wrap gap-3">
        {user?.interests?.map((interest) => (
          <span class="bg-amber-100 text-amber-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Interests;
