import axios from "axios";

const createAxios = () => {
  console.log("createAxios function");
  const token = sessionStorage.getItem("token");
  return axios.create({
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
};

const instance = createAxios();

export default instance;
