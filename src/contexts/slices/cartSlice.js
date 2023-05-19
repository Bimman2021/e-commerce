import { createSlice } from "@reduxjs/toolkit";
// import { getCookie } from "../../config/useCookie";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: [
    {
      id: "20291",
    },
  ],

  reducers: {
    addToCart: (state, action) => {
      return state;
    },
    removeFromCart: (state, action) => {
      return state;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
