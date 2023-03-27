import React, { useState } from "react";
import newRequest from "../utils/newRequest";

const AboutMe = ({ user, setUser }) => {
  const [edit, setEdit] = useState(false);
  const [updateData, setUpdateData] = useState({});

  const updateUser = async () => {
    try {
      const { data } = await newRequest.put("user/update", updateData);
      setUser(data.updateUser);
      console.log(data.updateUser);
      setEdit((state) => !state);
    } catch (error) {
      setEdit((state) => !state);
      console.log(error);
    }
  };
  return (
    <div className=" py-4 ">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">ABOUT ME</h1>
        <button
          type="button"
          class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
          onClick={() => (edit ? updateUser() : setEdit((state) => !state))}
        >
          {edit ? "Save" : "Edit"}
        </button>
      </div>
      <div className="relative">
        {edit && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-pencil"
            viewBox="0 0 16 16"
            className="absolute right-2 top-10"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />{" "}
          </svg>
        )}
        <textarea
          id="message"
          rows="4"
          defaultValue={user?.aboutMe}
          class="block h-max p-2.5 pr-6 w-full z-10 outline-none resize-none text-base  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Bio......."
          disabled={!edit}
          onChange={(e) => setUpdateData({ aboutMe: e.target.value })}
        ></textarea>
      </div>
    </div>
  );
};

export default AboutMe;
