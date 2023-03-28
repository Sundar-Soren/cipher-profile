import React, { useState } from "react";
import newRequest from "../utils/newRequest";

const ChangePasswordModel = ({ setShowModel }) => {
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClick = async () => {
    try {
      if (!(newPassword == confirmPassword)) {
        return alert("confirm Password not matched");
      }
      await newRequest.put("password", {
        oldPassword,
        newPassword,
      });
      setShowModel(false);
    } catch (error) {
      setShowModel(alert(error.response.data.error));
      console.log(error.message);
    }
  };

  return (
    <div className=" h-screen w-screen fixed z-50 top-0 backdrop-blur-sm bg-white/30 flex items-center justify-center">
      <div class="overflow-x-hidden overflow-y-auto">
        <div class="relative " style={{ width: "25rem" }}>
          <div class="relative bg-slate-200 rounded-lg  ">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              data-modal-hide="authentication-modal"
              onClick={() => setShowModel(false)}
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-4  lg:px-8">
              <div class="space-y-4">
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Current Password"
                    required
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="New Password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Confirm Password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  onClick={() => handleClick()}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModel;
