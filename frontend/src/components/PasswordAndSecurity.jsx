import React from "react";

const PasswordAndSecurity = () => {
  return (
    <div className="pt-5 ">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">PASSWORD & SECURITY</h1>
        <button
          type="button"
          class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
        >
          Edit
        </button>
      </div>
      <div>
        <label for="input-group-1" class="block mb-2 text-sm font-medium">
          Password
        </label>
        <div class="relative mb-6">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="text"
            id="input-group-1"
            class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
            value="************"
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordAndSecurity;
