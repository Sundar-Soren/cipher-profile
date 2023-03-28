import React, { useState } from "react";
import newRequest from "../utils/newRequest";

const InterestModel = ({ user, setUser, setShowInterestModel }) => {
  const [interests, setInterests] = useState(user?.interests);

  const handleClick = (interest) =>
    interests.includes(interest)
      ? setInterests(interests.filter((item) => item !== interest))
      : setInterests([...interests, interest]);

  const updateUser = async () => {
    try {
      const { data } = await newRequest.put("user/update", {
        interests: interests,
      });
      setUser(data.updateUser);
      setShowInterestModel(false);
    } catch (error) {
      console.log(error);
      setShowInterestModel(false);
    }
  };

  console.log(interests);
  return (
    <div className=" h-screen w-screen fixed z-50 top-0 backdrop-blur-sm bg-white/30 flex items-center justify-center">
      <div class="overflow-x-hidden overflow-y-auto">
        <div class="relative " style={{ width: "25rem" }}>
          <div class="relative pt-10 p-5 bg-slate-200 rounded-lg  ">
            <button
              type="button"
              class="absolute top-2  right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              data-modal-hide="authentication-modal"
              onClick={() => setShowInterestModel(false)}
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
            <div class="grid grid-cols-2 gap-4">
              <div
                className={`text-center text-white font-semibold py-1 rounded cursor-pointer ${
                  interests?.includes("App Development")
                    ? "bg-amber-500"
                    : "bg-slate-300"
                }`}
                onClick={() => handleClick("App Development")}
              >
                <button>App Development</button>
              </div>
              <div
                className={`text-center text-white font-semibold py-1 rounded cursor-pointer ${
                  interests?.includes("Game Development")
                    ? "bg-amber-500"
                    : "bg-slate-300"
                }`}
                onClick={() => handleClick("Game Development")}
              >
                <button>Game Development</button>
              </div>
              <div
                className={`text-center text-white font-semibold py-1 rounded cursor-pointer ${
                  interests?.includes("Web Development")
                    ? "bg-amber-500"
                    : "bg-slate-300"
                }`}
                onClick={() => handleClick("Web Development")}
              >
                <button>Web Development</button>
              </div>
              <div
                className={`text-center text-white font-semibold py-1 rounded cursor-pointer ${
                  interests?.includes("Data Structures")
                    ? "bg-amber-500"
                    : "bg-slate-300"
                }`}
                onClick={() => handleClick("Data Structures")}
              >
                <button>Data Structures</button>
              </div>
              <div
                className={`text-center text-white font-semibold py-1 rounded cursor-pointer ${
                  interests?.includes("Programming")
                    ? "bg-amber-500"
                    : "bg-slate-300"
                }`}
                onClick={() => handleClick("Programming")}
              >
                <button>Programming</button>
              </div>
              <div
                className={`text-center text-white font-semibold py-1 rounded cursor-pointer ${
                  interests?.includes("Machine Learning")
                    ? "bg-amber-500"
                    : "bg-slate-300"
                }`}
                onClick={() => handleClick("Machine Learning")}
              >
                <button>Machine Learning</button>
              </div>
              <div
                className={`text-center text-white font-semibold py-1 rounded cursor-pointer ${
                  interests?.includes("Data Science")
                    ? "bg-amber-500"
                    : "bg-slate-300"
                }`}
                onClick={() => handleClick("Data Science")}
              >
                <button>Data Science</button>
              </div>
              <div
                className={`text-center text-white font-semibold py-1 rounded cursor-pointer ${
                  interests?.includes("Others")
                    ? "bg-amber-500"
                    : "bg-slate-300"
                }`}
                onClick={() => handleClick("Others")}
              >
                <button>Others</button>
              </div>
            </div>
            <button
              type="submit"
              class=" w-full mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              onClick={() => updateUser()}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestModel;
