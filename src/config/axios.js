import axios from "axios";

var BASE;
// const isMobile = function detectMob() {
//   const toMatch = [
//     /Android/i,
//     /webOS/i,
//     /iPhone/i,
//     /iPad/i,
//     /iPod/i,
//     /BlackBerry/i,
//     /Windows Phone/i,
//   ];

//   return toMatch.some((toMatchItem) => {
//     return navigator.userAgent.match(toMatchItem);
//   });
// };

// const mobile = isMobile();
// mobile
//   ? (BASE = "http://192.168.43.244:8000/api/v1")
//   : (BASE = "http://localhost:8000/api/v1");

BASE = "https://oakciimovers.com/app/api/v1";
// BASE = "http://localhost:8000/api/v1";

const instance = axios.create({
  baseURL: BASE,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("rangex-token");
    if (token !== "undefined") {
      // console.log(token);
      config.headers["authorization"] = `Bearer ${JSON.parse(token)}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
