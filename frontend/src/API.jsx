import newRequest from "./utils/newRequest";

export const updateUser = async ({ setEdit, updateData }) => {
  try {
    const { data } = await newRequest.put("user/update", updateData);
    setEdit((state) => !state);
    return data.updateUser;
  } catch (error) {
    setEdit((state) => !state);
    console.log(error);
  }
};
