import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import cartSlice from "./slices/cartSlice";
import dayNight from "./slices/dayNight";
import userReducer from "./slices/user";
import pidReducer from "./slices/pid";
import carrierReducer from "./slices/carrierSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cartItems: cartSlice,
    darkMode: dayNight,
    pid: pidReducer,
    user: userReducer,
    carrier: carrierReducer,
  },
});
export default store;
