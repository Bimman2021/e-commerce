import axios from "axios";

var BASE;
BASE = "https://fakestoreapi.com/products";

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
