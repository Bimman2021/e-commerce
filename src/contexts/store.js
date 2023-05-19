import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import cartSlice from "./slices/cartSlice";
import dayNight from "./slices/dayNight";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cartItems: cartSlice,
    dayNight: dayNight,
  },
});
export default store;
