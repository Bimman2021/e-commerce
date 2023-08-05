import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import cartSlice from "./slices/cartSlice";
import dayNight from "./slices/dayNight";
import pidReducer from "./slices/pid";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cartItems: cartSlice,
    dayNight: dayNight,
    pid: pidReducer,
  },
});
export default store;
