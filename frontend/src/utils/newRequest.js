import axios from "axios";

const URL = "http://localhost:8000/";
// const URL = "https://cipher-profile.vercel.app/";

const newRequest = axios.create({
  headers: {
    Authorization: localStorage.getItem("access_token"),
  },
  baseURL: `${URL}api/`,
  withCredentials: true,
  timeout: 300000,
});

export default newRequest;
