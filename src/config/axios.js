import axios from "axios";

var BASE;
// BASE = "https://shop-cheap-backend.onrender.com/api/";
BASE = "http://localhost:5000/api/";

const instance = axios.create({
  baseURL: BASE,
  // withCredentials: true,
});

// instance.interceptors.request.use(
//   (config) => {
//     const token = window.localStorage.getItem("store-token");
//     if (token !== "undefined") {
//       // console.log(token);
//       config.headers["authorization"] = `Bearer ${JSON.parse(token)}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default instance;
