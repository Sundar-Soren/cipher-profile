import React from "react";

const InterestModel = ({ setShowInterestModel }) => {
  const arr = ["App development", "Web development"];
  // const [isSelected, setIsSelected] = useState({App_Development:true})
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
                  arr.includes("App development")
                    ? "bg-amber-500"
                    : "bg-slate-300"
                }`}
              >
                <button>App Development</button>
              </div>
              <div
                className={`text-center text-white font-semibold py-1 rounded cursor-pointer ${
                  arr.includes("Web development")
                    ? "bg-amber-500"
                    : "bg-slate-300"
                }`}
              >
                <button>Web development</button>
              </div>
              <div className="bg-slate-300 text-center text-white font-semibold py-1 rounded">
                <button>App Development</button>
              </div>
              <div className="bg-slate-300 text-center text-white font-semibold py-1 rounded">
                <button>Web Development</button>
              </div>
              <div className="bg-slate-300 text-center text-white font-semibold py-1 rounded">
                <button>App Development</button>
              </div>
              <div className="bg-slate-300 text-center text-white font-semibold py-1 rounded">
                <button>App Development</button>
              </div>
              <div className="bg-slate-300 text-center text-white font-semibold py-1 rounded">
                <button>App Development</button>
              </div>
              <div className="bg-slate-300 text-center text-white font-semibold py-1 rounded">
                <button>App Development</button>
              </div>
            </div>
            <button
              type="submit"
              class=" w-full mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
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
