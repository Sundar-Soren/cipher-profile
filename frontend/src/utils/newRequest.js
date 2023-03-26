import axios from "axios";

const URL = "http://localhost:8000/";
// const URL = "https://sparkling-purse-boa.cyclic.app/";

const newRequest = axios.create({
  baseURL: `${URL}api/`,
  withCredentials: true,
  timeout: 300000,
});

export default newRequest;
