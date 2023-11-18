import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../config/useCookie";

const setTrue = String(getCookie("darkMode")).toLowerCase() === "true";
const initialState = setTrue ?? false;

const dayNightSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleMode: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { toggleMode } = dayNightSlice.actions;
export default dayNightSlice.reducer;
