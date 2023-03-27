import React, { useEffect, useState } from "react";
import newRequest from "../utils/newRequest";

const PI = ({ user, setUser }) => {
  const [edit, setEdit] = useState(false);

  const [updateData, setUpdateData] = useState({});
  const onChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

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
    <div className="pt-5 mb-7">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">PROFESSIONAL INFORMATION</h1>
        <button
          type="button"
          class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
          onClick={() => (edit ? updateUser() : setEdit((state) => !state))}
        >
          {edit ? "Save" : "Edit"}
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
            onChange={(e) => onChange(e)}
            name="highesteducation"
            disabled={!edit}
          >
            <option
              value={"Primary"}
              selected={user.highesteducation == "Primary"}
            >
              Primary
            </option>
            <option
              value={"Secondary"}
              selected={user.highesteducation == "Secondary"}
            >
              Secondary
            </option>
            <option
              value={"Higher_Secondary"}
              selected={user.highesteducation == "Higher_Secondary"}
            >
              Higher Secondary
            </option>
            <option
              value={"Graduation"}
              selected={user.highesteducation == "Graduation"}
            >
              Graduation
            </option>
            <option
              value={"Post_Graduation"}
              selected={user.highesteducation == "Post_Graduation"}
            >
              Post Graduation
            </option>
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
            name="CurrentProfession"
            onChange={(e) => onChange(e)}
            disabled={!edit}
          >
            <option
              value={"Schooling"}
              selected={user.CurrentProfession == "Schooling"}
            >
              Schooling
            </option>
            <option
              value={"College_Student"}
              selected={user.CurrentProfession == "College_Student"}
            >
              College Student
            </option>
            <option
              value={"Teaching"}
              selected={user.CurrentProfession == "Teaching"}
            >
              Teaching
            </option>
            <option value={"Job"} selected={user.CurrentProfession == "Job"}>
              Job
            </option>
            <option
              value={"Freelancing"}
              selected={user.CurrentProfession == "Freelancing"}
            >
              Freelancing
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PI;
