import React from "react";

const PI = () => {
  return (
    <div className="pt-5 mb-7">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">PROFESSIONAL INFORMATION</h1>
        <button
          type="button"
          class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
        >
          Edit
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Highest education
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option>Primary</option>
            <option>Secondary</option>
            <option>Higher Secondary</option>
            <option>Graduation</option>
            <option>Post Graduation</option>
          </select>
        </div>
        <div>
          <label
            for="countries"
            class="block mb-2 text-sm font-semibold text-gray-900 "
          >
            What do you do currently?
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option>Schooling</option>
            <option>College Student</option>
            <option>Teaching</option>
            <option>Job</option>
            <option>Freelancing</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PI;
