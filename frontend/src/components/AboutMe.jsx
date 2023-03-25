import React from "react";

const AboutMe = () => {
  return (
    <div className=" py-4 ">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">ABOUT ME</h1>
        <button
          type="button"
          class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
        >
          Edit
        </button>
      </div>

      <textarea
        id="message"
        rows="4"
        class="block h-max p-2.5 w-full  outline-none resize-none text-base  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Bio......."
      ></textarea>
    </div>
  );
};

export default AboutMe;
