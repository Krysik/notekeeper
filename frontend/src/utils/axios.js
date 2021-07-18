import axios from "axios";

const baseUrl = process.env.VUE_APP_BASE_URL;

const createAxios = () => {
  console.log("createAxios function");
  const token = sessionStorage.getItem("token");
  return axios.create({
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    baseUrl,
  });
};

const instance = createAxios();

export default instance;
